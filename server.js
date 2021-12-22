    
    console.groupCollapsed("%cFOR DEVELOPERS ONLY","color:red; font-family:system-ui; font-size:2rem; -webkit-text-stroke: 1px black; font-weight:bold");
        console.log("%c" + window.navigator.userAgent,"color:red;");
        console.log("%cBrowser CodeName: " + window.navigator.appCodeName,"color:red;");
        console.log("%cBrowser Name: " + window.navigator.appName,"color:red;");
        console.log("%cBrowser online: " + window.navigator.onLine,"color:red;");
        console.log("%cDOWNLOAD: " + window.navigator.connection.downlink,"color:red;");
        console.log("%cCOOKIE ENABLED: " + window.navigator.cookieEnabled,"color:red;");
        console.log("%cLANGUAGE: " + window.navigator.language,"color:red;");
        console.log("%cMemory: " + window.navigator.deviceMemory,"color:red;");
    console.groupEnd();

    if (!window.navigator.appCodeName == "Mozilla") {alert('Switch your browser to Google Chrome for better working!')}

	if('WebSocket' in window) {
		(function () {
			function refreshCSS() {
				var sheets = [].slice.call(document.getElementsByTagName("link"));
				var head = document.getElementsByTagName("head")[0];
				for(var i = 0; i < sheets.length; ++i) {
					var elem = sheets[i];
					var parent = elem.parentElement || head;
					parent.removeChild(elem);
					var rel = elem.rel;
					if(elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
						var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
						elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
					}
					parent.appendChild(elem);
				}
			}
			var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
			var address = protocol + window.location.host + window.location.pathname + '/ws';
			var socket = new WebSocket(address);
			socket.onmessage = function (msg) {
				if(msg.data == 'reload') window.location.reload();
				else if(msg.data == 'refreshcss') refreshCSS();
			};
			if(sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
				console.log('Live reload enabled.');
				sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
			}
		})();
	}
	else {
		console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');
	}
