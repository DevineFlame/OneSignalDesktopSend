// initialise
console.log('OneSignal Desktop : initialising')
// open
//nw.Window.open('../../app/index.html', {}, function(newWin) {});
nw.Window.open(	'../../app/index.html', 
				{
					"title":"Oops!",
					"frame": true,
					"width": 400,
					"height": 500,
					"position": "center",
					"min_width": 400,
					"min_height": 500,
					"max_width": 400,
					"max_height": 500,
					"resizable": false,
					"show": true
				}, 
				function(newWin) {
					console.log("New Window:",newWin);
				}
			);
