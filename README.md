OneSignal Desktop Client
==========================

A crossplatform client to send notification to [OneSignal][2] using their REST API. It uses [NodeWebkit][1] / [NW.js][1] projec for making the desktop client.          

The packaging is different for different Operating Systems. Refer the official documentation.

#### Errors I encounter and the fixes

	1. {"errors":["app_id not found. You may be missing a Content-Type: application/json header."]}

	Fix : Add app_id in data and Content-Type in header

	2. responseText : "{"status":400,"error":"There was a problem in the JSON you submitted: unexpected character at line 1, column 1 [parse.c:652]"}"

	Fix : JSON.stringify()

	3. "{"errors":["  Notifications must have English language content"]}"
	
	Fix :  add 'contents' near 'app_id' with your message string          



Cheers.











[1]: https://github.com/nwjs/nw.js
[2]: https://onesignal.com/







