function login_sys() {
    var cur_gh = $.trim($("#gh_id").val());
    var cur_psw = $.trim($("#psd_id").val());
    if (id_card_no.length < 10) {
        if (cur_gh == "" || cur_psw == "") {
            $("#tips_message").html("工号和密码都不能为空");

            return;
        }
        var reg = /^(\w|_)*$/;
        var aaa = reg.test(cur_gh);
        if (!aaa) {
            $("#tips_message").html("工号和密码只能使用英文和数字");
            return;
        }
    }
    $("#tips_message").html("请稍后....");
    if (psw_count < 4) {
        $.ajax({
            type: "post", //使用post方法访问后台
            dataType: "text", //返回text格式的数据
            url: "ver_user.php", //要访问的后台地址
            data: { find_user_name: cur_gh, cur_psw: cur_psw },
            async: false,
            success: function(msg) {
                //alert(msg);
                var msg_arr = msg.split(",")
                id_card_no = "";
                if (msg_arr[0] == "0") {
                    $("#tips_message").html("用户名或密码错误(" + psw_count + ")");
                    psw_count++;
                } else {
                    $("#tips_message").html("用户名校验正确");
                    window.location.href = msg_arr[1];
                }
            }
        });
        //psw_count=psw_count+1
    } else {
        $("#tips_message").html("错误超过3次，请查对");
        $("#login_btn").hide();
    }
}