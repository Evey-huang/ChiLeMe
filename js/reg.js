
(function () {

    var inputTips = document.getElementsByClassName('tips');
    var inputArr =document.getElementsByClassName('inputBox2');
    var control={
        account:false,
        password:false,
        verifyCode:true
    }
    var submitBotton =document.getElementById('signSubmit');

    function inputAddListener() {
        for(var i = 0;i<inputArr.length;i++){
            (function (index) {
                inputArr[index].onblur=function () {
                    verification(index);

                }

            })(i);
        }
    }
    inputAddListener();

    function verification(index) {
        switch (index){
            case 0: (function (index) {     //验证手机长度是否>=11
                var inputValue = inputArr[index].value;
                // var regular0 = /\w{4,}/;
                if (inputValue != ''){
                    if(inputValue.length >= 11){
                        showTips(index,true,'账号格式正确');
                        control.account=true;
                    }
                    else {
                        console.log(inputValue);
                        showTips(index,false,'不正确的手机号码');
                        control.account=false;
                    }
                }else {
                    console.log(inputValue);
                    showTips(index,false,'输入不能为空');
                    control.account=false;
                }
            })(index);break;

            case 1: (function (index) {

                var inputValue = inputArr[index].value;

                if (inputValue != ''){
                    if(inputValue.length >= 5){
                        showTips(index,true,'格式正确');
                    }
                    else {
                        showTips(index,false,'密码长度最好大于5位');
                    }
                }else {
                    console.log(inputValue);
                    showTips(index,false,'输入不能为空');
                }
            })(index);break;
            case 2: (function (index) {

                var inputValue = inputArr[index].value;
                var passwordVerify = inputArr[index-1].value;

                if (inputValue != ''){
                    if(inputValue == passwordVerify){
                        showTips(index,true,'两次密码一致');
                        control.password=true;
                    }
                    else {
                        showTips(index,false,'两次密码不一致');
                        control.password=false;
                    }
                }else {
                    showTips(index,false,'输入不能为空');
                    control.password=false;
                }
            })(index);break;

        }
    }

    function showTips(num, status,msg) {
        if(status){  //true
            inputTips[num].style.color='green';
            inputTips[num].innerText=msg;
        }
        else {
            inputTips[num].style.color='red';
            inputTips[num].innerText=msg;
        }
    }

    submitBotton.onclick=function (event){
        var num =0;
        for(var i in control){
            if(control[i]){
                num++;
            }
        }
        if(num==4){
            alert("信息已填写完整");
        }else {

            alert("信息填写不完整或不符合规范！");
            event.preventDefault();
        }
    };

})();




