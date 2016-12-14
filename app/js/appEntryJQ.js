// Application comes from UI
// OneSignal : https://www.npmjs.com/package/onesignal


$(function(){
	var appId = 'onesignal_appid';
	var apiKey = 'onesignal_apikey';

	//var thisRef = this;
	//SaumyaSignal.initialise();

	var onSendClick = function(){

        var messageToSend = $("#id-msg-notification").val();
		var messageToSendTitle = $("#id-msg-title").val();
        //
        var u = 'https://onesignal.com/api/v1/notifications';
        var headerObj = {
            'Content-Type':'application/json; charset=utf-8',
            'Authorization':'Basic '+apiKey
        };
        var dataObj = {
            'app_id':appId,
            'contents': {"en": messageToSend},
            "included_segments":["All"]
        };

        // check whether title is empty
        if(messageToSendTitle===''){
            // Do nothing, its already set in the default above
        }else{
            dataObj = {
                'app_id':appId,
                'contents': {"en": messageToSend},
                'headings':{"en":messageToSendTitle},
                "included_segments":["All"]
            };
        }
        // Finally send the message
		$.ajax({
                type:"post",
                url:u,
                dataType:"json",
                data:JSON.stringify(dataObj),  
                headers:headerObj,
                success:function(result){          
                    console.log('SUCCESS');
                    console.log(result);

                    $('#id-popupSuccess').popup("open",{"transition":"slide"});
                },
                error:function(data){
                    console.log('ERROR : getAllBands : ');
                    console.log(data);  

                    $('#id-popupFail').popup("open",{"transition":"flow"});         
                }
        });
	}
    //
    $("#btnSend").on('click',function(event, ui){
    	// check for data
    	var messageToSend = $("#id-msg-notification").val();
    	if(messageToSend===''){
    		//alert('Type a message to send');
    		$('#id-popupMandatory').popup("open",{"transition":"flow"});
    	}else{
    		onSendClick();
    	}
	})
    //
});

