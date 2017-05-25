$(document).ready(function () {
        var url = 'http://172.23.197.1/jxkh';
        console.log("url", url);
        var corpId = "dinga64936c15a0df28935c2f4657eb6378f";  // 企业的corpId
        var signature = "";
        var nonceStr = "";
        var timeStamp = "";
        var agentId = "";

        $.post(
            'http://172.23.197.1/jxkh/m/service.do?method=getDingCode',
            {
                "url": url,
                "corpId": corpId
            },
            function (result) {
                signature = result.signature;
                nonceStr = result.nonceStr;
                timeStamp = result.timeStamp;
                agentId = result.agentid;
                corpId = result.corpId;
                dd.config({
                    agentId: agentId,
                    corpId: corpId,
                    timeStamp: timeStamp,
                    nonceStr: nonceStr,
                    signature: signature,
                    jsApiList: [
                        'runtime.info',
                        'biz.contact.choose',
                        'device.notification.confirm',
                        'device.notification.alert',
                        'device.notification.prompt',
                        'biz.ding.post',
                        'biz.util.openLink'] //必填，需要使用的jsapi列表
                });

                function aa () {
                        console.log('dd.ready rocks!');
                        dd.runtime.info({
                            onSuccess: function (info) {
                                console.log('runtime info: ' + JSON.stringify(info));
//                                alert(JSON.stringify(info));
                            },
                            onFail: function (err) {
                                console.log('fail: ' + JSON.stringify(err));
//                                alert(JSON.stringify(err));
                            }
                        });

                        dd.runtime.permission.requestAuthCode({
                            corpId: corpId, //企业id
                            onSuccess: function (info) {
                                console.log('authcode' + info.code);
                              alert('authcode = '+info.code);
                                Window.authcode = info.code;   //免登授权码
                                $.ajax({
                                    url : '/jxkh/m/service.do?method=getUserInfo',
                                    data: {
                                        "code" : Window.authcode
                                    },
                                    success : function(data){
                                        var info = JSON.parse(data);
                                        alert(info);
                                    },
                                    error : function (err){
                                        alert(err);
                                    }
                                });
                            },
                            onFail: function (err) {
                                console.log('requestAuthCode fail: ' + JSON.stringify(err));
//                                alert(JSON.stringify(err));
                            }
                        });
                    }

               dd.ready(aa());
            })

    });