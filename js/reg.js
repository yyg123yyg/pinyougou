window.onload = function () {
    //手机号验证
    let regtel = /^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
    let tel = document.querySelector('#tel');
    regexp(tel, regtel);
    //昵称验证
    let regnc = /^[\u4e00-\u9fa5]{2,8}$/;
    let nc = document.querySelector('#nicheng');
    regexp(nc, regnc);
    //短信验证
    regmes = /^\d{6}$/;
    let mes = document.querySelector('#mes');
    regexp(mes,regmes);
    //登录密码
    let reglg=/^[a-zA-z0-9]{6,16}$/;
    let login=document.querySelector('#login');
    regexp(login,reglg);
    //表单验证函数
    function regexp(ele, reg) {
        ele.onblur = function () {
            if (reg.test(this.value)) {
                this.nextElementSibling.className = 'success';
                this.nextElementSibling.innerHTML = `<i class="success_icon"></i>恭喜你输入正确`;
            } else {
                this.nextElementSibling.className = 'error';
                this.nextElementSibling.innerHTML = `<i class="error_icon"> </i>格式不正确，请从新输入`;
            }
        }
    }

    //confirm确认密码
    let confirm=document.querySelector('#confirm');
    confirm.onblur=function(){
        if(this.value==login.value){
            this.nextElementSibling.className = 'success';
            this.nextElementSibling.innerHTML = `<i class="success_icon"></i>恭喜你输入正确`;
        }
        else{
            this.nextElementSibling.className = 'error';
            this.nextElementSibling.innerHTML = `<i class="error_icon"> </i>两次密码不一致`;
        }
    }




}