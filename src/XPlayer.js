require('./css/XPlayer.scss');
const utils = require('./modules/utils.js');
const svg = require('./modules/svg.js');
const handleOption = require('./modules/option.js');
const i18n = require('./modules/i18n.js');
const html = require('./modules/html.js');
const Video = require('./modules/video.js');
const dom = require('./modules/dom.js');
const FullScreen = require('./modules/fullscreen.js');
const Setting = require('./modules/setting.js');
const Volume = require('./modules/volume.js');
const ProgressBar = require('./modules/progressbar.js');
const ContextMenu = require('./modules/ContextMenu.js');
const hotKey = require('./modules/hotKey.js');

class XPlayer {
    /**
     * XPlayer 构造函数
     */
    constructor(option) {
        this.isMobile = /mobile/i.test(window.navigator.userAgent);
        this.option = handleOption(option);

        // 加上样式
        dom.addClass(this.option.element, 'xplayer');

        // 界面文案
        this.tran = new i18n(this.option.lang).tran;

        // 声明 XPlayer 的事件
        const eventTypes = ['play', 'pause', 'canplay', 'playing', 'ended', 'error'];
        this.event = {};
        for (let i = 0; i < eventTypes.length; i++) {
            this.event[eventTypes[i]] = [];
        }
        // 遍历执行
        this.trigger = type => {
            for (let i = 0; i < this.event[type].length; i++) {
                this.event[type][i]();
            }
        };

        this.element = this.option.element;

        this.element.addEventListener('click', e => {
            if (e && e.stopPropagation) {
                // 因此它支持W3C的stopPropagation()方法
                e.stopPropagation();
            } else {
                // 否则，我们需要使用IE的方式来取消事件冒泡
                window.event.cancelBubble = true;
            }
            if (e && e.preventDefault) {
                e.preventDefault();
            } else {
                // IE中阻止函数器默认动作的方式
                window.event.returnValue = false;
            }
            return false;
        });

        // 如果为移动设备，添加移动设备的class样式
        if (this.isMobile) {
            dom.addClass(this.element, 'xplayer-mobile');
        }

        // 插入HTML
        this.element.innerHTML = html.main(option);

        // 实例化视频管理
        this.video = new Video(this.element.getElementsByClassName('xplayer-video-current'));

        // 初始化视频
        this.initVideo();

        // 播放暂停图标的动画事件
        this.bezel = this.element.getElementsByClassName('xplayer-bezel-icon')[0];
        this.bezel.addEventListener('animationend', () => {
            dom.removeClass(this.bezel, 'xplayer-bezel-transition');
        });

        // 播放和暂停按钮的 click 事件
        this.playButton = this.element.getElementsByClassName('xplayer-play-icon')[0];
        this.paused = true;
        this.playButton.addEventListener('click', () => {
            this.toggle();
        });

        const videoWrap = this.element.getElementsByClassName('xplayer-video-wrap')[0];
        const conMask = this.element.getElementsByClassName('xplayer-controller-mask')[0];
        // 如果是PC
        if (!this.isMobile) {
            videoWrap.addEventListener('click', () => {
                this.toggle();
            });
            conMask.addEventListener('click', () => {
                this.toggle();
            });
        } else {
            const toggleController = () => {
                if (dom.hasClass(this.element, 'xplayer-hide-controller')) {
                    dom.removeClass(this.element, 'xplayer-hide-controller');
                } else {
                    dom.addClass(this.element, 'xplayer-hide-controller');
                }
            };
            videoWrap.addEventListener('click', toggleController);
            conMask.addEventListener('click', toggleController);
        }

        // 遮罩
        this.mask = this.element.getElementsByClassName('xplayer-mask')[0];

        this.bar = {};

        new ProgressBar(this);

        new Volume(this);

        new Setting(this);

        // 设置视频长度
        // 兼容性: 安卓浏览器一开始会返回1
        if (this.video.duration !== 1) {
            this.element.getElementsByClassName('xplayer-dtime')[0].innerHTML = this.video.duration ? utils.secondToTime(this.video.duration) : '00:00';
        }

        new FullScreen(this);

        new hotKey(this);

        new ContextMenu(this);

        // 自动播放
        if (this.option.autoplay && !this.isMobile) {
            this.play();
        } else if (this.isMobile) {
            this.pause();
        }
    }

    /**
     * [play 播放]
     * @param  {[type]} time [时间]
     */
    play(time) {
        if (Object.prototype.toString.call(time) === '[object Number]') {
            this.video.seek(time);
        }
        this.paused = false;
        if (this.video.attr('paused')) {
            this.bezel.innerHTML = svg('play');
            dom.addClass(this.bezel, 'xplayer-bezel-transition');
        }

        this.playButton.innerHTML = svg('pause');

        this.video.play();
        this.setTime();
        dom.addClass(this.element, 'xplayer-playing');
        this.trigger('play');
    }

    /**
     * [pause 暂停]
     */
    pause() {
        this.paused = true;
        dom.removeClass(this.element, 'xplayer-loading');

        if (!this.video.attr('paused')) {
            this.bezel.innerHTML = svg('pause');
            dom.addClass(this.bezel, 'xplayer-bezel-transition');
        }

        this.ended = false;
        this.playButton.innerHTML = svg('play');
        this.video.pause();
        this.clearTime();
        dom.removeClass(this.element, 'xplayer-playing');
        this.trigger('pause');
    }

    /**
     * [volume 设置音量]
     * @param  {[type]} percentage [音量]
     */
    volume(percentage) {
        percentage = percentage > 0 ? percentage : 0;
        percentage = percentage < 1 ? percentage : 1;
        this.updateBar('volume', percentage, 'width');
        this.video.attr('volume', percentage);
        if (this.video.attr('muted')) {
            this.video.attr('muted', false);
        }
        this.notice(`音量：${(percentage * 100).toFixed(0)}`);
    }

    /**
     * 暂停或者播放
     */
    toggle() {
        if (this.video.attr('paused')) {
            this.play();
        } else {
            this.pause();
        }
    }

    /**
     * 监听事件
     */
    on(event, callback) {
        if (typeof callback === 'function') {
            this.event[event].push(callback);
        }
    }

    initVideo() {

        /**
         * 视频事件
         */
        // show video time: the metadata has loaded or changed
        this.video.on('all', 'durationchange', (i, video) => {
            if (video.duration !== 1) { // 兼容性: 安卓浏览器一开始会输出1
                this.element.getElementsByClassName('xplayer-dtime')[0].innerHTML = utils.secondToTime(this.video.duration);
            }
        });

        // show video loaded bar: to inform interested parties of progress downloading the media
        this.video.on('current', 'progress', (i, video) => {
            const percentage = video.buffered.length ? video.buffered.end(video.buffered.length - 1) / video.duration : 0;
            this.updateBar('loaded', percentage, 'width');
        });

        // video download error: an error occurs
        this.video.on('all', 'error', () => {
            this.notice(this.tran('This video fails to load'), -1);
            this.trigger('pause');
        });

        // video can play: enough data is available that the media can be played
        this.video.on('current', 'canplay', () => {
            this.trigger('canplay');
        });

        // music end
        this.ended = false;
        this.video.on('all', 'ended', (i) => {
            if (i === this.video.videos.length - 1) {
                this.updateBar('played', 1, 'width');
                if (!this.loop) {
                    this.ended = true;
                    this.pause();
                    this.trigger('ended');
                } else {
                    this.video.switch(0);
                    this.video.play();
                }
                this.danIndex = 0;
            }
        });

        this.video.on('current', 'play', () => {
            if (this.paused) {
                this.play();
            }
        });

        this.video.on('current', 'pause', () => {
            if (!this.paused) {
                this.pause();
            }
        });

        // control volume
        this.video.attr('volume', parseInt(this.element.getElementsByClassName('xplayer-volume-bar-inner')[0].style.width) / 100);
    }

    /**
     * [notice 提示]
     * @param  {[type]} text [文案]
     * @param  {[type]} time [显示时长]
     */
    notice(text, time) {
        const noticeEle = this.element.getElementsByClassName('xplayer-notice')[0];
        noticeEle.innerHTML = text;
        noticeEle.style.opacity = 0.9;
        if (this.noticeTime) {
            clearTimeout(this.noticeTime);
        }
        if (time && time < 0) {
            return;
        }
        this.noticeTime = setTimeout(() => {
            noticeEle.style.opacity = 0;
        }, time || 2000);
    }
}

module.exports = XPlayer;
