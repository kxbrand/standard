define(function(require, exports, module) {
	var oBrowser = {};
  var uaMatch = function(){
  	var ua = navigator.userAgent.toLowerCase();
		var match = /(webkit)[ \/]([\w.]+)/.exec( ua ) ||
      /(opera)(?:.*version)?[ \/]([\w.]+)/.exec( ua ) ||
      /(msie) ([\w.]+)/.exec( ua ) ||
      !/compatible/.test( ua ) && /(mozilla)(?:.*? rv:([\w.]+))?/.exec( ua ) ||
        [];
  	return { browser: match[1] || "", version: match[2] || "0" };
  }
  var browserMatch = uaMatch();
	if ( browserMatch.browser ) {
  	oBrowser[ browserMatch.browser ] = true;
  	oBrowser.version = browserMatch.version;
	}
	// Deprecated, use jQuery.browser.webkit instead
	if ( oBrowser.webkit ) {
	  oBrowser.safari = true;
	}
	module.exports = oBrowser;
});