const dom = require('./dom.js');

class HotKey {
    constructor(player) {

        /**
         * 热键
         * 空格 => 播放、暂停
         * 左右方向键 => 快进、快退5秒
         * 上下方向键 => 音量加、减10%
         */
        const handleKeyDown = (e) => {
            const tag = document.activeElement.tagName.toUpperCase();
            const editable = document.activeElement.getAttribute('contenteditable');
            if (tag !== 'INPUT' && tag !== 'TEXTAREA' && editable !== '' && editable !== 'true') {
                const event = e || window.event;
                let percentage;
                switch (event.keyCode) {
                    case 27:
                        if (dom.hasClass(player.element, 'xplayer-fulled')) {
                            dom.removeClass(player.element, 'xplayer-fulled');
                        }
                        break;
                    case 32:
                        event.preventDefault();
                        player.toggle();
                        break;
                    case 37:
                        event.preventDefault();
                        player.video.seek(player.video.currentTime() - 5);
                        break;
                    case 39:
                        event.preventDefault();
                        player.video.seek(player.video.currentTime() + 5);
                        break;
                    case 38:
                        event.preventDefault();
                        percentage = player.video.attr('volume') + 0.1;
                        player.volume(percentage);
                        break;
                    case 40:
                        event.preventDefault();
                        percentage = player.video.attr('volume') - 0.1;
                        player.volume(percentage);
                        break;
                }
            }
        };
        // 如果传入的配置参数允许热键，则监听
        if (player.option.hotkey) {
            document.addEventListener('keydown', handleKeyDown);
        }
    }
}

module.exports = HotKey;