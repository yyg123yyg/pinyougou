window.addEventListener('load', function () {
    let arrow_l = document.querySelector(".arrow-l");
    let arrow_r = document.querySelector(".arrow-r");
    let focus = document.querySelector('.focus');
    let focusWidth = focus.offsetWidth;
    // 鼠标进入显示隐藏
    focus.addEventListener('mousemove', function () {
        arrow_l.style.display = 'block';
        arrow_r.style.display = 'block';
        clearInterval(timer);
        timer = null; //清楚定时器变量
    })
    focus.addEventListener('mouseout', function () {
        arrow_l.style.display = 'none';
        arrow_r.style.display = 'none';
        timer = setInterval(function () {
            // 手动调用点击事件
            arrow_r.click();
        }, 2000)
    })
    // 动态生成小圆圈
    let ul = focus.querySelector('ul');
    let ol = focus.querySelector('.circle')
    for (let i = 0; i < ul.children.length; i++) {
        let li = document.createElement('li');
        li.setAttribute('index', i);
        ol.appendChild(li);
        li.addEventListener('click', function () {
            
            let index = this.getAttribute('index');
            //  当点击了某个小li，就拿到这个li的索引号个num 
            num = index;
            //  当点击了某个小li，就拿到这个li的索引号个cicle
            circle = index;
            circleChange();
            animate(ul, -index * focusWidth);
        })
    }
    ol.children[0].className = 'current';
    // 克隆第一张图片
    let first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    let num = 0;
    // 控制小圆圈播放
    let circle = 0;
    //节流阀
    let flag = true;

    // 右侧按钮
    arrow_r.addEventListener('click', function () {
        if (flag) {
            flag = false; //关闭节流阀
            if (num == ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;
            }
            num++;
            animate(ul, -num * focusWidth, function () {
                flag = true; //打开节流阀
            });
            circle++;
            if (circle == ol.children.length) {
                circle = 0;
            }
            // 排他
            circleChange();
        }
    })
    // 左侧
    arrow_l.addEventListener('click', function () {
        if (flag) {
            flag = false;
            if (num == 0) {
                ul.style.left = -(ul.children.length - 1) * focusWidth + 'px';
                num = ul.children.length - 1;
            }
            num--;
            animate(ul, -num * focusWidth, function () {
                flag = true;
            });
            circle--;
            // circle<0
            if (circle < 0) {
                circle = ol.children.length - 1;
            }
            // 排他
            circleChange();
        }

    });

    function circleChange() {
        for (let i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        ol.children[circle].className = 'current';
    }
    //自动播放
    let timer = setInterval(function () {
        // 手动调用点击事件
        arrow_r.click();
    }, 2000)


    


})