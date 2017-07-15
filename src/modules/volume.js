const utils = require('./utils.js');
const dom = require('./dom.js');
const svg = require('./svg.js');
class Volumn {
    constructor(player) {

        /**
         * 音量控制
         */
        player.bar.volumeBar = player.element.getElementsByClassName('xplayer-volume-bar-inner')[0];
        const volumeEle = player.element.getElementsByClassName('xplayer-volume')[0];
        const volumeBarWrapWrap = player.element.getElementsByClassName('xplayer-volume-bar-wrap')[0];
        const volumeBarWrap = player.element.getElementsByClassName('xplayer-volume-bar')[0];
        const volumeicon = player.element.getElementsByClassName('xplayer-volume-icon')[0];
        const vWidth = 35;

        // 根据音量变换音量图标
        player.switchVolumeIcon = () => {
            const volumeicon = player.element.getElementsByClassName('xplayer-volume-icon')[0];
            if (player.video.attr('volume') >= 0.8) {
                volumeicon.innerHTML = svg('volume-up');
            } else if (player.video.attr('volume') > 0) {
                volumeicon.innerHTML = svg('volume-down');
            } else {
                volumeicon.innerHTML = svg('volume-off');
            }
        };

        // 拖动音量
        const volumeMove = (event) => {
            const e = event || window.event;
            const percentage = (e.clientX - utils.getElementViewLeft(volumeBarWrap) - 5.5) / vWidth;
            player.volume(percentage);
        };

        // 结束拖动
        const volumeUp = () => {
            document.removeEventListener('mouseup', volumeUp);
            document.removeEventListener('mousemove', volumeMove);
            dom.removeClass(volumeEle, 'xplayer-volume-active');
        };

        // 点击音量条
        volumeBarWrapWrap.addEventListener('click', (event) => {
            volumeMove(event);
        });

        // 摁着音量条的时候
        volumeBarWrapWrap.addEventListener('mousedown', () => {
            document.addEventListener('mousemove', volumeMove);
            document.addEventListener('mouseup', volumeUp);
            dom.addClass(volumeEle, 'xplayer-volume-active');
        });

        // 点击音量图标
        volumeicon.addEventListener('click', () => {
            if (player.video.attr('muted')) {
                player.video.attr('muted', false);
                player.switchVolumeIcon();
                player.updateBar('volume', player.video.attr('volume'), 'width');
            } else {
                player.video.attr('muted', true);
                volumeicon.innerHTML = svg('volume-off');
                player.updateBar('volume', 0, 'width');
            }
        });
    }
}

module.exports = Volumn;