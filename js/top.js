window.onload = function () {
    // 获取页面可视区的高度
    var clientHeight = document.documentElement.clientHeight;
    // 回到顶部，按钮
    var obtn = document.getElementById('tbtn');
    var timer = null;
    var isTop = true;

    // 滚动条 滚动时触发
    window.onscroll = function () {
        var osTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (osTop >= clientHeight) {
            obtn.style.display = 'block'; // 显示
        } else {
            obtn.style.display = 'none'; // 隐藏
        }
        if (!isTop) {
            clearInterval(timer)
        }
        isTop = false; // 
    }

    obtn.onclick = function () {
        // 设置定时器
        timer = setInterval(function () {
            // 获取滚动条，距离顶部的高度（适配IE浏览器，google浏览器）
            var osTop = document.documentElement.scrollTop || document.body.scrollTop;
            var iSpeed = Math.floor(-osTop / 6); // 小数点，向下舍入。
            isTop = true;
            document.documentElement.scrollTop = document.body.scrollTop = (osTop + iSpeed);
            if (osTop == 0) {
                clearInterval(timer);
            }
        }, 10);
    }
}