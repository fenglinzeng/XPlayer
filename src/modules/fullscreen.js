const dom = require('./dom.js');

class FullScreen {
    constructor(player) {
        // 浏览器全屏
        player.element.getElementsByClassName('xplayer-full-icon')[0].addEventListener('click', () => {
            if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement) {
                if (player.element.requestFullscreen) {
                    player.element.requestFullscreen();
                } else if (player.element.mozRequestFullScreen) {
                    player.element.mozRequestFullScreen();
                } else if (player.element.webkitRequestFullscreen) {
                    player.element.webkitRequestFullscreen();
                } else if (player.video.attr('webkitEnterFullscreen')) {
                    // Safari for iOS
                    player.video.current.webkitEnterFullscreen();
                }
            } else {
                if (document.cancelFullScreen) {
                    document.cancelFullScreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen();
                }
            }
        });
        // 网页全屏
        player.element.getElementsByClassName('xplayer-full-in-icon')[0].addEventListener('click', () => {
            if (dom.hasClass(player.element, 'xplayer-fulled')) {
                dom.removeClass(player.element, 'xplayer-fulled');
            } else {
                dom.addClass(player.element, 'xplayer-fulled');
            }
        });
    }
}
module.exports = FullScreen;