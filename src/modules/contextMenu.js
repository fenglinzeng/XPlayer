const dom = require('./dom.js');
class contextMenu {
    constructor(player) {

        /**
         * 右键
         */
        const menu = player.element.getElementsByClassName('xplayer-menu')[0];
        player.element.addEventListener('contextmenu', (e) => {
            const event = e || window.event;
            event.preventDefault();

            dom.addClass(menu, 'xplayer-menu-show');

            const clientRect = player.element.getBoundingClientRect();
            const menuLeft = event.clientX - clientRect.left;
            const menuTop = event.clientY - clientRect.top;
            // 如果超出右边界
            if (menuLeft + menu.offsetWidth >= clientRect.width) {
                menu.style.right = clientRect.width - menuLeft + 'px';
                menu.style.left = 'initial';
            } else {
                menu.style.left = event.clientX - player.element.getBoundingClientRect().left + 'px';
                menu.style.right = 'initial';
            }
            // 如果超出下边界
            if (menuTop + menu.offsetHeight >= clientRect.height) {
                menu.style.bottom = clientRect.height - menuTop + 'px';
                menu.style.top = 'initial';
            } else {
                menu.style.top = event.clientY - player.element.getBoundingClientRect().top + 'px';
                menu.style.bottom = 'initial';
            }

            // 显示遮罩
            dom.addClass(player.mask, 'xplayer-mask-show');
            player.mask.addEventListener('click', () => {
                dom.removeClass(player.mask, 'xplayer-mask-show');
                dom.removeClass(menu, 'xplayer-menu-show');
            });
        });
    }
}

module.exports = contextMenu;