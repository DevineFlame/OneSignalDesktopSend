// Application comes from UI
// OneSignal : https://www.npmjs.com/package/onesignal

$(function(){
	var appId = 'your onesignal app-id';
	var apiKey = 'your onesignal APIkey';

	//var thisRef = this;

	// Errors and fixes
	// 1. {"errors":["app_id not found. You may be missing a Content-Type: application/json header."]}
	// 1. Add app_id in data and Content-Type in header
	// 2. responseText : "{"status":400,"error":"There was a problem in the JSON you submitted: unexpected character at line 1, column 1 [parse.c:652]"}"
	// 2. Fix : JSON.stringify()
	// 3. "{"errors":["  Notifications must have English language content"]}"
	// 3. Fix :  add 'contents' near 'app_id' with your message string

	var onSendClick = function(){

		var messageToSend = $("#id-msg-notification").val();

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
		$.ajax({
                type:"post",
                url:u,
                dataType:"json",
                data:JSON.stringify(dataObj),  
                headers:headerObj,
                success:function(result){          
                    console.log('SUCCESS');
                    console.log(result)
                },
                error:function(data){
                    console.log('ERROR : getAllBands : ');
                    console.log(data);           
                }
        });
	}
    //
    $("#btnSend").on('click',function(event, ui){
		onSendClick();
	})
    //
});