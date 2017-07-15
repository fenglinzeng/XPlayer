module.exports = {
    hasClass: (obj, cls) => {
        if (!obj) {
            return console.log('你确定有这个id？');
        }
        // 获取 class 内容.
        const classStr = obj.className,
            // 通过split空字符将cls转换成数组.
            classArr = classStr.split(/\s+/);
        for (const x in classArr) {
            // 循环数组, 判断是否包含cls
            if (classArr[x] === cls) {
                return true;
            }
        }
        return false;
    },
    addClass: (obj, cls) => {
        if (!obj) {
            return console.log('你确定有这个id？');
        }
        // 获取 class 内容.
        const classStr = obj.className,
            // 判断获取到的 class 是否为空, 如果不为空在前面加个'空格'.
            blank = classStr !== '' ? ' ' : '',
            // 组合原来的 class 和需要添加的 class.
            added = classStr + blank + cls;
        // 替换原来的 class.
        obj.className = added;
    },
    removeClass: (obj, cls) => {
        if (!obj) {
            return console.log('你确定有这个id？');
        }
        if (obj.length > 0) {
            const objArray = Array.prototype.slice.call(obj);
            objArray.forEach((element) => {
                // 获取 class 内容, 并在首尾各加一个空格. ex) 'abc    bcd' -> ' abc    bcd '
                let classStr = ' ' + element.className + ' ';
                // 将多余的空字符替换成一个空格. ex) ' abc    bcd ' -> ' abc bcd '
                classStr = classStr.replace(/(\s+)/gi, ' ');
                // 在原来的 class 替换掉首尾加了空格的 class. ex) ' abc bcd ' -> 'bcd '
                let removed = classStr.replace(' ' + cls + ' ', ' ');
                // 去掉首尾空格. ex) 'bcd ' -> 'bcd'
                removed = removed.replace(/(^\s+)|(\s+$)/g, '');
                // 替换原来的 class.
                element.className = removed;
            });
        } else {
            // 获取 class 内容, 并在首尾各加一个空格. ex) 'abc    bcd' -> ' abc    bcd '
            let classStr = ' ' + obj.className + ' ';
            // 将多余的空字符替换成一个空格. ex) ' abc    bcd ' -> ' abc bcd '
            classStr = classStr.replace(/(\s+)/gi, ' ');
            // 在原来的 class 替换掉首尾加了空格的 class. ex) ' abc bcd ' -> 'bcd '
            let removed = classStr.replace(' ' + cls + ' ', ' ');
            // 去掉首尾空格. ex) 'bcd ' -> 'bcd'
            removed = removed.replace(/(^\s+)|(\s+$)/g, '');
            // 替换原来的 class.
            obj.className = removed;
        }
    }
};
