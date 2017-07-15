const html = require('./html.js');
const dom = require('./dom.js');

class setting {
    constructor(player) {

        /**
         * 设置
         */
        this.settingHTML = html.setting(player.tran);

        // toggle 设置
        this.settingIcon = player.element.getElementsByClassName('xplayer-setting-icon')[0];
        this.settingBox = player.element.getElementsByClassName('xplayer-setting-box')[0];
        this.mask = player.mask;
        this.settingBox.innerHTML = this.settingHTML.original;

        // 点击遮罩时关闭设置
        this.mask.addEventListener('click', () => {
            this.closeSetting();
        });
        // 点击设置icon时打开设置
        this.settingIcon.addEventListener('click', () => {
            this.openSetting();
        });

        // 循环控制
        player.loop = player.option.loop;
        this.settingEvent = () => {
            const loopEle = player.element.getElementsByClassName('xplayer-setting-loop')[0];
            const loopToggle = loopEle.getElementsByClassName('xplayer-toggle-setting-input')[0];

            loopToggle.checked = player.loop;

            loopEle.addEventListener('click', () => {
                loopToggle.checked = !loopToggle.checked;
                if (loopToggle.checked) {
                    player.loop = true;
                } else {
                    player.loop = false;
                }
            });

            // 速度控制
            const speedEle = player.element.getElementsByClassName('xplayer-setting-speed')[0];
            speedEle.addEventListener('click', () => {
                dom.addClass(this.settingBox, 'xplayer-setting-box-narrow');
                this.settingBox.innerHTML = this.settingHTML.speed;

                const speedItem = this.settingBox.getElementsByClassName('xplayer-setting-speed-item');
                for (let i = 0; i < speedItem.length; i++) {
                    speedItem[i].addEventListener('click', () => {
                        player.video.attr('playbackRate', speedItem[i].dataset.speed);
                        this.closeSetting();
                    });
                }
            });

            // 旋转控制
            const rotateEles = player.element.querySelectorAll('.xplayer-rotate-icon');
            const rotateEle = Array.prototype.slice.call(rotateEles);
            const video = document.getElementsByClassName('xplayer-video')[0];
            rotateEle.forEach((element) => {
                element.addEventListener('click', function () {
                    let angle = video.style.transform;
                    if (angle) {
                        angle = parseInt(angle.split('rotate(')[1].split('deg)')[0]);
                    } else {
                        angle = 0;
                    }
                    if (dom.hasClass(element, 'next')) {
                        video.style.transform = 'rotate(' + (angle + 90) + 'deg)';
                    } else {
                        video.style.transform = 'rotate(' + (angle - 90) + 'deg)';
                    }
                });
            });
        };


        /**
         * PC端隔2秒隐藏控制条
         */
        let hideTime = 0;
        if (!player.isMobile) {
            const hideController = () => {
                dom.removeClass(player.element, 'xplayer-hide-controller');
                clearTimeout(hideTime);
                hideTime = setTimeout(() => {
                    if (player.video.attr('played').length) {
                        dom.addClass(player.element, 'xplayer-hide-controller');
                        this.closeSetting();
                    }
                }, 2000);
            };
            player.element.addEventListener('mousemove', hideController);
            player.element.addEventListener('click', hideController);
        }
        this.settingEvent();
    }
    // 打开设置
    openSetting() {
        dom.addClass(this.settingBox, 'xplayer-setting-box-open');
        dom.addClass(this.mask, 'xplayer-mask-show');
    }
    // 关闭设置
    closeSetting() {
        if (dom.hasClass(this.settingBox, 'xplayer-setting-box-open')) {
            dom.removeClass(this.settingBox, 'xplayer-setting-box-open');
            dom.removeClass(this.mask, 'xplayer-mask-show');
            setTimeout(() => {
                dom.removeClass(this.settingBox, 'xplayer-setting-box-narrow');
                this.settingBox.innerHTML = this.settingHTML.original;
                this.settingEvent();
            }, 300);
        }
    }
}

module.exports = setting;