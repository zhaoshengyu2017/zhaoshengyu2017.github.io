/*
 * 注意：
 * 1. 所有的JS接口只能在公众号绑定的域名下调用，公众号开发者需要先登录微信公众平台进入“公众号设置”的“功能设置”里填写“JS接口安全域名”。
 * 2. 如果发现在 Android 不能分享自定义内容，请到官网下载最新的包覆盖安装，Android 自定义分享接口需升级至 6.0.2.58 版本及以上。
 * 3. 完整 JS-SDK 文档地址：http://mp.weixin.qq.com/wiki/7/aaa137b55fb2e0456bf8dd9148dd613f.html
 *
 * 如有问题请通过以下渠道反馈：
 * 邮箱地址：weixin-open@qq.com
 * 邮件主题：【微信JS-SDK反馈】具体问题
 * 邮件内容说明：用简明的语言描述问题所在，并交代清楚遇到该问题的场景，可附上截屏图片，微信团队会尽快处理你的反馈。
 */
var dataForWeixin = {};


var myurl = window.location.href;

$(function() {
    setTimeout(function() {
        var a = $("#psnId").text();

        $.ajax({
            type: "post",
            url: "https://api.eastfair.com/wechat/client/signature",
            async: true,
            data: {
                client_oauth_token: 'EastfairCreditApplication',
                appId: 'wx3dd63cc84aeefbef',
                url: myurl
            },
            success: function(data) {
                //console.log(data)
                //		var data=JSON.parse(data);		
                var dataForWeixin = data.data;
                //		alert(dataForWeixin.appId);
                //		alert(dataForWeixin.timestamp);
                //		alert(dataForWeixin.nonceStr);
                //		alert(dataForWeixin.signature);
                wx.config({
                    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                    appId: dataForWeixin.appId, // 必填，公众号的唯一标识
                    timestamp: dataForWeixin.timestamp, // 必填，生成签名的时间戳
                    nonceStr: dataForWeixin.nonceStr, // 必填，生成签名的随机串
                    signature: dataForWeixin.signature, // 必填，签名，见附录1
                    jsApiList: [
                            'checkJsApi',
                            'onMenuShareTimeline',
                            'onMenuShareAppMessage',
                            'onMenuShareQQ',
                            'onMenuShareWeibo',
                            'hideMenuItems',
                            'showMenuItems',
                            'hideAllNonBaseMenuItem',
                            'showAllNonBaseMenuItem',
                            'translateVoice',
                            'startRecord',
                            'stopRecord',
                            'onRecordEnd',
                            'playVoice',
                            'pauseVoice',
                            'stopVoice',
                            'uploadVoice',
                            'downloadVoice',
                            'chooseImage',
                            'previewImage',
                            'uploadImage',
                            'downloadImage',
                            'getNetworkType',
                            'openLocation',
                            'getLocation',
                            'hideOptionMenu',
                            'showOptionMenu',
                            'closeWindow',
                            'scanQRCode',
                            'chooseWXPay',
                            'openProductSpecificView',
                            'addCard',
                            'chooseCard',
                            'openCard'
                        ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
                });
                wx.ready(function() {
                    //监听“分享给朋友”，按钮点击、自定义分享内容及分享结果接口
                    wx.onMenuShareAppMessage({
                        title: "2018中国国际家用纺织品及辅料博览会，快来登记吧！",
                        desc: "8月27-30日 国家会展中心（上海）",
                        //服务号分享
                        link: "http://ezt.exporegist.com/ccinterwxcn/reg.aspx?PsnID=" + a,
                        imgUrl: "http://Ezt.exporegist.com/zhaoshengyu/jf/image/logo.jpg",
                        trigger: function(res) {
                            // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
                            //salert('用户点击发送给朋友');
                        },
                        success: function(res) {
                            //alert('已分享');
                        },
                        cancel: function(res) {
                            //alert('已取消');
                        },
                        fail: function(res) {
                            // alert(JSON.stringify(res));
                        }
                    });

                    //监听“分享到朋友圈”按钮点击、自定义分享内容及分享结果接口
                    wx.onMenuShareTimeline({
                        title: "2018中国国际家用纺织品及辅料博览会，快来登记吧！",
                        desc: "8月27-30日 国家会展中心（上海）",
                        //服务号分享
                        link: "http://ezt.exporegist.com/ccinterwxcn/reg.aspx?PsnID=" + a,
                        imgUrl: "http://Ezt.exporegist.com/zhaoshengyu/jf/image/logo.jpg",
                        trigger: function(res) {
                            // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
                            //alert('用户点击分享到朋友圈');
                        },
                        success: function(res) {
                            //alert('已分享');
                        },
                        cancel: function(res) {
                            //alert('已取消');
                        },
                        fail: function(res) {
                            // alert(JSON.stringify(res));
                        }
                    });
                    //批量隐藏菜单项
                    wx.hideMenuItems({
                        menuList: [
                            'menuItem:exposeArticle', //举报
                            'menuItem:setFont', //调整文字
                            //'menuItem:dayMode', //日间模式
                            //'menuItem:nightMode', //夜间模式
                            //'menuItem:refresh', //刷新
                            //'menuItem:profile', //查看公众号（已添加）
                            //'menuItem:addContact', //查看公众号（未添加）
                            //'menuItem:share:appMessage', //发送给朋友
                            //'menuItem:share:timeline', //分享到朋友圈
                            'menuItem:share:qq', //分享到QQ
                            'menuItem:share:weiboApp', //分享到Weibo
                            //'menuItem:favorite', //收藏
                            'menuItem:share:facebook', //分享到FB
                            'menuItem:share:QZone', //分享到 QQ 空间
                            'menuItem:jsDebug', //调试
                            'menuItem:editTag', //编辑标签
                            'menuItem:delete', //删除
                            'menuItem:copyUrl', //复制链接
                            'menuItem:originPage', //原网页
                            'menuItem:readMode', //阅读模式
                            'menuItem:openWithQQBrowser', //在QQ浏览器中打开
                            'menuItem:openWithSafari', //在Safari中打开
                            'menuItem:share:email', //邮件
                            'menuItem:share:brand' //一些特殊公众号
                        ],
                        success: function(res) {
                            //alert('已隐藏“阅读模式”，“分享到朋友圈”，“复制链接”等按钮');
                        },
                        fail: function(res) {
                            //alert(JSON.stringify(res));
                        }
                    });

                });
                wx.error(function(res) {
                    //alert(res.errMsg);
                    //if (res.errMsg == "config:invalid signature") {
                    //    jQuery.ajax({
                    //        type: "post",
                    //        dataType: "text",          
                    //        async: false,
                    //        url: "../PreRegistration/ReshTokenByJS",
                    //        success: function (msg) {
                    //            window.location.reload();
                    //        },
                    //        error: function (error) {

                    //        }
                    //    });
                    //}

                });
            }




        });

    }, 1000)

})