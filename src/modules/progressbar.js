const utils = require('./utils.js');
const dom = require('./dom.js');

class ProgressBar {
    constructor(player) {

        // 播放进度条
        player.bar.playedBar = player.element.getElementsByClassName('xplayer-played')[0];
        // 加载进度条
        player.bar.loadedBar = player.element.getElementsByClassName('xplayer-loaded')[0];

        /**
         * 更新进度条, 包括加载进度条和播放进度条
         *
         * @param {String} type - 进度条的类型, 应该为 played, loaded 或者 volume
         * @param {Number} percentage
         * @param {String} direction - 进度条的方向, 应该为 height 或者 width
         */
        player.updateBar = (type, percentage, direction) => {
            percentage = percentage > 0 ? percentage : 0;
            percentage = percentage < 1 ? percentage : 1;
            player.bar[type + 'Bar'].style[direction] = percentage * 100 + '%';
        };
        // 进度条容器
        const pbar = player.element.getElementsByClassName('xplayer-bar-wrap')[0];
        // 当前时间遮罩
        const pbarTimeTips = player.element.getElementsByClassName('xplayer-bar-time')[0];
        let barWidth;

        let lastPlayPos = 0;
        let currentPlayPos = 0;
        let bufferingDetected = false;
        player.playedTime = false;
        window.requestAnimationFrame = (() =>
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (callback) {
                window.setTimeout(callback, 1000 / 60);
            }
        )();

        // 检测加载进度，如果加载得不够，显示loading
        const setCheckLoadingTime = () => {
            player.checkLoading = setInterval(() => {
                // whether the video is buffering
                currentPlayPos = player.video.currentTime();
                if (!bufferingDetected && currentPlayPos < lastPlayPos + 0.01 && !player.video.attr('paused')) {
                    dom.addClass(player.element, 'xplayer-loading');
                    bufferingDetected = true;
                }
                if (bufferingDetected && currentPlayPos > lastPlayPos + 0.01 && !player.video.attr('paused')) {
                    dom.removeClass(player.element, 'xplayer-loading');
                    bufferingDetected = false;
                }
                lastPlayPos = currentPlayPos;
            }, 100);
        };

        const clearCheckLoadingTime = () => {
            clearInterval(player.checkLoading);
        };

        // 更新播放进度条和播放时间
        player.animationFrame = () => {
            if (player.playedTime) {
                player.updateBar('played', player.video.currentTime() / player.video.duration, 'width');
                player.element.getElementsByClassName('xplayer-ptime')[0].innerHTML = utils.secondToTime(player.video.currentTime());
                player.trigger('playing');
            }
            window.requestAnimationFrame(player.animationFrame);
        };
        window.requestAnimationFrame(player.animationFrame);

        // 开启加载进度检测
        player.setTime = () => {
            player.playedTime = true;
            setCheckLoadingTime();
        };
        // 关闭加载进度检测
        player.clearTime = () => {
            player.playedTime = false;
            clearCheckLoadingTime();
        };

        // 进度条点击的时候
        // 获取点击进度，然后设置视频进度
        pbar.addEventListener('click', (event) => {
            const e = event || window.event;
            barWidth = pbar.clientWidth;
            let percentage = (e.clientX - utils.getElementViewLeft(pbar)) / barWidth;
            percentage = percentage > 0 ? percentage : 0;
            percentage = percentage < 1 ? percentage : 1;
            player.updateBar('played', percentage, 'width');
            player.video.seek(parseFloat(player.bar.playedBar.style.width) / 100 * player.video.duration);
        });

        // 时间遮罩
        player.isTipsShow = false;
        player.timeTipsHandler = this.timeTipsHandler(player, 
            pbar, pbarTimeTips).bind(player);
        pbar.addEventListener('mousemove', player.timeTipsHandler);
        pbar.addEventListener('mouseover', player.timeTipsHandler);
        pbar.addEventListener('mouseenter', player.timeTipsHandler);
        pbar.addEventListener('mouseout', player.timeTipsHandler);
        pbar.addEventListener('mouseleave', player.timeTipsHandler);

        // 摁着进度条拖动的时候
        const thumbMove = (event) => {
            const e = event || window.event;
            let percentage = (e.clientX - utils.getElementViewLeft(pbar)) / barWidth;
            percentage = percentage > 0 ? percentage : 0;
            percentage = percentage < 1 ? percentage : 1;
            player.updateBar('played', percentage, 'width');
            player.element.getElementsByClassName('xplayer-ptime')[0].innerHTML = utils.secondToTime(percentage * player.video.duration);
        };

        // 摁着进度条拖动结束
        const thumbUp = () => {
            document.removeEventListener('mouseup', thumbUp);
            document.removeEventListener('mousemove', thumbMove);
            player.video.seek(parseFloat(player.bar.playedBar.style.width) / 100 * player.video.duration);
            player.setTime();
        };

        // 进度条摁着的时候
        pbar.addEventListener('mousedown', () => {
            barWidth = pbar.clientWidth;
            player.clearTime();
            document.addEventListener('mousemove', thumbMove);
            document.addEventListener('mouseup', thumbUp);
        });
    }

    timeTipsHandler(player, pbar, timeTips) {
        // http://stackoverflow.com/questions/1480133/how-can-i-get-an-objects-absolute-position-on-the-page-in-javascript
        const cumulativeOffset = (element) => {
            let top = 0,
                left = 0;

            if (element) {
                top += element.offsetTop || 0;
                left += element.offsetLeft || 0;
                element = element.offsetParent;
            }

            return {
                top: top,
                left: left
            };
        };

        return (e) => {
            if (!player.video.duration) {
                return;
            }
            const { clientX } = e;
            const px = cumulativeOffset(pbar).left;
            const tx = clientX - px;
            timeTips.innerText = utils.secondToTime(player.video.duration * (tx / pbar.offsetWidth));
            timeTips.style.left = `${(tx - 20 - player.element.offsetLeft)}px`;
            switch (e.type) {
                case 'mouseenter':
                case 'mouseover':
                case 'mousemove':
                    if (player.isTipsShow) {
                        return;
                    }
                    dom.removeClass(timeTips, 'hidden');
                    player.isTipsShow = true;
                    break;
                case 'mouseleave':
                case 'mouseout':
                    if (!player.isTipsShow) {
                        return;
                    }
                    dom.addClass(timeTips, 'hidden');
                    player.isTipsShow = false;
                    break;
            }
        };
    }
}

module.exports = ProgressBar;