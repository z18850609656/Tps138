/**
 * Created by Administrator on 2016/9/17.
 */
var arr=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9'];
var obtn=document.getElementById("yan");
var otxt=document.getElementById("passWord");

obtn.onclick=function () {
        var str="";
        while (str.length<4){
            var num=parseInt(Math.random()*36);

            str=str+arr[num];
        }
        otxt.value=str.toUpperCase();
    }

/*短信的验证*/
var $sub=$("#sub")
var $mail=$("#mail")
$(function () {
    $sub.click(function () {

            $(this).val("处理中...");


        $mail.show()
        $mail.css("color","red")

    })
    $sub.mouseout(function () {
        $(this).val("登录");
    })
    var $mail_address=$(".mail_address");
    var $passWord=$(".passWord");
    var $passWord1=$("#passWord");
    var $pass=$(".pass");
    var $code=$(".code");
    var $username=$("#username");
    var $passWord=$(".passWord");
    var $hao=$("#hao");
    var $hao2=$("#hao2");
    var $hao3=$("#hao3");
    var $mail_address1=$(".mail_address1")


    $("#username").on("blur",function () {
        var reg1 = /^[1][34578]\d{9}$/;
        var reg2 = /^([a-zA-Z]+\.)?\w+@\w+\.[a-z]{2,5}$/;
        if((reg1.test($("#username").attr("value"))||reg2.test($("#username").attr("value")))==false){
            $mail_address.show();
            $hao.show()
        }else{
            $mail_address.hide();
        }
    });

   /* $username.focus(function () {
        if($username.val().length>10){
            console.log($username.val())
            $mail_address.hide()
            $mail_address1.show()

        }
    })*/
    /*$username.blur(function () {
        $mail_address1.css('display','none')
        $mail_address.css('display','block')
    })*/


    $passWord.focus(function () {
    })
    $passWord.blur(function () {
         var reg3 =/(?![^a-zA-Z0-9]+$)(?![^a-zA-Z/D]+$)(?![^0-9/D]+$).{6,18}$/;
        /*/ ^(?!\d*$)^[^\s]{6,18}$\w{6,18}$/;*/
        /*var reg3=/^[a-z0-9A-Z、_-]{6,20}$/*/
        if((reg3.test($passWord.attr("value")))==false){
            $hao2.show();
            $pass.show();

        }else{
            $pass.hide();
            $hao2.hide();
        }
       /* $pass.css('display','block')*/
    })

    $passWord1.focus(function () {
    })
    $passWord1.blur(function () {
        var reg4 =/(?![^a-zA-Z0-9]+$)(?![^a-zA-Z/D]+$)(?![^0-9/D]+$).{6,18}$/;
        /*var reg4=/^[a-z0-9A-Z、_-]{6,20}$/*/
        if((reg4.test($passWord1.attr("value")))==false){
            $hao3.show();
            $code.show();

        }else{
            $code.hide();
            $hao3.hide();
        }
        /* $pass.css('display','block')*/
    })

   /* $passWord1.focus(function () {
    })
    $passWord1.blur(function () {
        $code.css('display','block')
    })
*/
});








/*
var username=$("#username")
 username.focus(function () {
    if($(this).val()=="电子邮箱/手机号"){
        $(this).val("");
    }else {
        username.val($(this).val())
    }
})
*/


/*

var userName = $("username");

var userNameReg = /^[\w-]{4,20}$/;
var notNumberReg = /\D/;

var mobileReg = /^[1]{1}[3|5|7|8]{1}\d{9}$/;
var eMailReg = /^([a-zA-Z]+\.)?\w+@\w+\.[a-z]{2,5}$/;
var str = "www.164@eere.com";
//7788665@qq.com


userName.onfocus=function () {
    console.log(this.parentNode.nextElementSibling)
    /!*让提示显示*!/
    var tip = this.parentNode.nextElementSibling;
    tip.style.visibility="visible";

};

userName.onblur=function () {
    console.log(this.parentNode.nextElementSibling)
    /!*让提示显示*!/
    var oParent = this.parentNode;
    var tip = oParent.nextElementSibling;
    var icon = this.nextElementSibling;
    //判断输入的内容是否满足要求

    if(userNameReg.test(this.value)){
        //看看是不是纯数字
        if(this.value.search(notNumberReg)!=-1){
            //找到了不是数字的字符

            //如果通过验证

            //隐藏提示
            tip.style.visibility="hidden";
            //让对号显示
            icon.style.display="block";

            /!*去掉错误的样式*!/
            oParent.className="form-item";
            tip.className="input-tip";
        }else {
            /!*去掉正确的样式*!/
            icon.style.display="none";
            /!*添加错误的样式*!/
            oParent.className="form-item  error-item";
            tip.className="input-tip error-tip";
            tip.getElementsByTagName("span")[0].innerHTML = "用户名不能输纯数字";
        }


    }else {
        /!*去掉正确的样式*!/
        icon.style.display="none";
        /!*添加错误的样式*!/
        oParent.className="form-item  error-item";
        tip.className="input-tip error-tip";
        tip.getElementsByTagName("span")[0].innerHTML = "格式错误，仅支持汉字、字母、数字、“-”“_”的组合";
        //格式错误，仅支持汉字、字母、数字、“-”“_”的组合
    }

};

userName.onkeyup=function () {
    //this.value
    /!*干掉错误的提示*!/
    var oParent = this.parentNode;
    var tip = oParent.nextElementSibling;
    var icon = this.nextElementSibling;

    /!*去掉错误的样式*!/
    oParent.className="form-item";
    tip.className="input-tip";

    /!*去掉正确的样式*!/
    icon.style.display="none";

    /!*显示提示信息*!/
    tip.style.visibility="visible";
    tip.getElementsByTagName("span")[0].innerHTML ="支持中文、字母、数字、“-”“_”的组合，4-20个字符"
};*/
