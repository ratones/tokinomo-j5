!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.videojs=e()}(this,function(){function t(t,e){return e={exports:{}},t(e,e.exports),e.exports}function e(t,e){Ve(t).forEach(function(n){return e(t[n],n)})}function n(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return Ve(t).reduce(function(n,r){return e(n,t[r],r)},n)}function r(t){for(var n=arguments.length,r=Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return Object.assign?Object.assign.apply(Object,[t].concat(r)):(r.forEach(function(n){n&&e(n,function(e,n){t[n]=e})}),t)}function i(t){return!!t&&"object"===(void 0===t?"undefined":Ie(t))}function o(t){return i(t)&&"[object Object]"===Fe.call(t)&&t.constructor===Object}function s(t){return t.replace(/\n\r?\s*/g,"")}function a(t,e){if(!t||!e)return"";if("function"==typeof oe.getComputedStyle){var n=oe.getComputedStyle(t);return n?n[e]:""}return t.currentStyle[e]||""}function l(t){return"string"==typeof t&&/\S/.test(t)}function c(t){if(/\s/.test(t))throw new Error("class has illegal whitespace characters")}function u(t){return new RegExp("(^|\\s)"+t+"($|\\s)")}function h(){return ue===oe.document&&void 0!==ue.createElement}function p(t){return i(t)&&1===t.nodeType}function d(){try{return oe.parent!==oe.self}catch(t){return!0}}function f(t){return function(e,n){if(!l(e))return ue[t](null);l(n)&&(n=ue.querySelector(n));var r=p(n)?n:ue;return r[t]&&r[t](e)}}function v(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"div",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments[3],i=ue.createElement(t);return Object.getOwnPropertyNames(e).forEach(function(t){var n=e[t];-1!==t.indexOf("aria-")||"role"===t||"type"===t?(Xe.warn(qe(Ke,t,n)),i.setAttribute(t,n)):"textContent"===t?y(i,n):i[t]=n}),Object.getOwnPropertyNames(n).forEach(function(t){i.setAttribute(t,n[t])}),r&&D(i,r),i}function y(t,e){return void 0===t.textContent?t.innerText=e:t.textContent=e,t}function g(t,e){e.firstChild?e.insertBefore(t,e.firstChild):e.appendChild(t)}function m(t,e){return c(e),t.classList?t.classList.contains(e):u(e).test(t.className)}function _(t,e){return t.classList?t.classList.add(e):m(t,e)||(t.className=(t.className+" "+e).trim()),t}function b(t,e){return t.classList?t.classList.remove(e):(c(e),t.className=t.className.split(/\s+/).filter(function(t){return t!==e}).join(" ")),t}function T(t,e,n){var r=m(t,e);if("function"==typeof n&&(n=n(t,e)),"boolean"!=typeof n&&(n=!r),n!==r)return n?_(t,e):b(t,e),t}function C(t,e){Object.getOwnPropertyNames(e).forEach(function(n){var r=e[n];null===r||void 0===r||!1===r?t.removeAttribute(n):t.setAttribute(n,!0===r?"":r)})}function k(t){var e={};if(t&&t.attributes&&t.attributes.length>0)for(var n=t.attributes,r=n.length-1;r>=0;r--){var i=n[r].name,o=n[r].value;"boolean"!=typeof t[i]&&-1===",autoplay,controls,playsinline,loop,muted,default,defaultMuted,".indexOf(","+i+",")||(o=null!==o),e[i]=o}return e}function w(t,e){return t.getAttribute(e)}function E(t,e,n){t.setAttribute(e,n)}function S(t,e){t.removeAttribute(e)}function x(){ue.body.focus(),ue.onselectstart=function(){return!1}}function j(){ue.onselectstart=function(){return!0}}function A(t){if(t&&t.getBoundingClientRect&&t.parentNode){var e=t.getBoundingClientRect(),n={};return["bottom","height","left","right","top","width"].forEach(function(t){void 0!==e[t]&&(n[t]=e[t])}),n.height||(n.height=parseFloat(a(t,"height"))),n.width||(n.width=parseFloat(a(t,"width"))),n}}function P(t){var e=void 0;if(t.getBoundingClientRect&&t.parentNode&&(e=t.getBoundingClientRect()),!e)return{left:0,top:0};var n=ue.documentElement,r=ue.body,i=n.clientLeft||r.clientLeft||0,o=oe.pageXOffset||r.scrollLeft,s=e.left+o-i,a=n.clientTop||r.clientTop||0,l=oe.pageYOffset||r.scrollTop,c=e.top+l-a;return{left:Math.round(s),top:Math.round(c)}}function M(t,e){var n={},r=P(t),i=t.offsetWidth,o=t.offsetHeight,s=r.top,a=r.left,l=e.pageY,c=e.pageX;return e.changedTouches&&(c=e.changedTouches[0].pageX,l=e.changedTouches[0].pageY),n.y=Math.max(0,Math.min(1,(s-l+o)/o)),n.x=Math.max(0,Math.min(1,(c-a)/i)),n}function O(t){return i(t)&&3===t.nodeType}function N(t){for(;t.firstChild;)t.removeChild(t.firstChild);return t}function I(t){return"function"==typeof t&&(t=t()),(Array.isArray(t)?t:[t]).map(function(t){return"function"==typeof t&&(t=t()),p(t)||O(t)?t:"string"==typeof t&&/\S/.test(t)?ue.createTextNode(t):void 0}).filter(function(t){return t})}function D(t,e){return I(e).forEach(function(e){return t.appendChild(e)}),t}function L(t,e){return D(N(t),e)}function R(){return Je++}function B(t){var e=t[Ze];return e||(e=t[Ze]=R()),Qe[e]||(Qe[e]={}),Qe[e]}function F(t){var e=t[Ze];return!!e&&!!Object.getOwnPropertyNames(Qe[e]).length}function V(t){var e=t[Ze];if(e){delete Qe[e];try{delete t[Ze]}catch(e){t.removeAttribute?t.removeAttribute(Ze):t[Ze]=null}}}function H(t,e){var n=B(t);0===n.handlers[e].length&&(delete n.handlers[e],t.removeEventListener?t.removeEventListener(e,n.dispatcher,!1):t.detachEvent&&t.detachEvent("on"+e,n.dispatcher)),Object.getOwnPropertyNames(n.handlers).length<=0&&(delete n.handlers,delete n.dispatcher,delete n.disabled),0===Object.getOwnPropertyNames(n).length&&V(t)}function U(t,e,n,r){n.forEach(function(n){t(e,n,r)})}function W(t){function e(){return!0}function n(){return!1}if(!t||!t.isPropagationStopped){var r=t||oe.event;t={};for(var i in r)"layerX"!==i&&"layerY"!==i&&"keyLocation"!==i&&"webkitMovementX"!==i&&"webkitMovementY"!==i&&("returnValue"===i&&r.preventDefault||(t[i]=r[i]));if(t.target||(t.target=t.srcElement||ue),t.relatedTarget||(t.relatedTarget=t.fromElement===t.target?t.toElement:t.fromElement),t.preventDefault=function(){r.preventDefault&&r.preventDefault(),t.returnValue=!1,r.returnValue=!1,t.defaultPrevented=!0},t.defaultPrevented=!1,t.stopPropagation=function(){r.stopPropagation&&r.stopPropagation(),t.cancelBubble=!0,r.cancelBubble=!0,t.isPropagationStopped=e},t.isPropagationStopped=n,t.stopImmediatePropagation=function(){r.stopImmediatePropagation&&r.stopImmediatePropagation(),t.isImmediatePropagationStopped=e,t.stopPropagation()},t.isImmediatePropagationStopped=n,null!==t.clientX&&void 0!==t.clientX){var o=ue.documentElement,s=ue.body;t.pageX=t.clientX+(o&&o.scrollLeft||s&&s.scrollLeft||0)-(o&&o.clientLeft||s&&s.clientLeft||0),t.pageY=t.clientY+(o&&o.scrollTop||s&&s.scrollTop||0)-(o&&o.clientTop||s&&s.clientTop||0)}t.which=t.charCode||t.keyCode,null!==t.button&&void 0!==t.button&&(t.button=1&t.button?0:4&t.button?1:2&t.button?2:0)}return t}function z(t,e,n){if(Array.isArray(e))return U(z,t,e,n);var r=B(t);if(r.handlers||(r.handlers={}),r.handlers[e]||(r.handlers[e]=[]),n.guid||(n.guid=R()),r.handlers[e].push(n),r.dispatcher||(r.disabled=!1,r.dispatcher=function(e,n){if(!r.disabled){e=W(e);var i=r.handlers[e.type];if(i)for(var o=i.slice(0),s=0,a=o.length;s<a&&!e.isImmediatePropagationStopped();s++)try{o[s].call(t,e,n)}catch(t){Xe.error(t)}}}),1===r.handlers[e].length)if(t.addEventListener){var i=!1;tn&&en.indexOf(e)>-1&&(i={passive:!0}),t.addEventListener(e,r.dispatcher,i)}else t.attachEvent&&t.attachEvent("on"+e,r.dispatcher)}function X(t,e,n){if(F(t)){var r=B(t);if(r.handlers){if(Array.isArray(e))return U(X,t,e,n);var i=function(e){r.handlers[e]=[],H(t,e)};if(void 0!==e){var o=r.handlers[e];if(o){if(!n)return void i(e);if(n.guid)for(var s=0;s<o.length;s++)o[s].guid===n.guid&&o.splice(s--,1);H(t,e)}}else for(var a in r.handlers)Object.prototype.hasOwnProperty.call(r.handlers||{},a)&&i(a)}}}function q(t,e,n){var r=F(t)?B(t):{},i=t.parentNode||t.ownerDocument;if("string"==typeof e&&(e={type:e,target:t}),e=W(e),r.dispatcher&&r.dispatcher.call(t,e,n),i&&!e.isPropagationStopped()&&!0===e.bubbles)q.call(null,i,e,n);else if(!i&&!e.defaultPrevented){var o=B(e.target);e.target[e.type]&&(o.disabled=!0,"function"==typeof e.target[e.type]&&e.target[e.type](),o.disabled=!1)}return!e.defaultPrevented}function K(t,e,n){if(Array.isArray(e))return U(K,t,e,n);var r=function r(){X(t,e,r),n.apply(this,arguments)};r.guid=n.guid=n.guid||R(),z(t,e,r)}function Y(t,e){e&&(on=e),oe.setTimeout(sn,t)}function G(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.eventBusKey;if(n){if(!t[n].nodeName)throw new Error('The eventBusKey "'+n+'" does not refer to an element.');t.eventBusEl_=t[n]}else t.eventBusEl_=v("span",{className:"vjs-event-bus"});return r(t,_n),t.on("dispose",function(){return t.off()}),t}function $(t,e){return r(t,bn),t.state=r({},t.state,e),"function"==typeof t.handleStateChanged&&pn(t)&&t.on("statechanged",t.handleStateChanged),t}function J(t){return"string"!=typeof t?t:t.charAt(0).toUpperCase()+t.slice(1)}function Q(t,e){return J(t)===J(e)}function Z(){for(var t={},n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];return r.forEach(function(n){n&&e(n,function(e,n){if(!o(e))return void(t[n]=e);o(t[n])||(t[n]={}),t[n]=Z(t[n],e)})}),t}function tt(t,e,n){if("number"!=typeof e||e<0||e>n)throw new Error("Failed to execute '"+t+"' on 'TimeRanges': The index provided ("+e+") is non-numeric or out of bounds (0-"+n+").")}function et(t,e,n,r){return tt(t,r,n.length-1),n[r][e]}function nt(t){return void 0===t||0===t.length?{length:0,start:function(){throw new Error("This TimeRanges object is empty")},end:function(){throw new Error("This TimeRanges object is empty")}}:{length:t.length,start:et.bind(null,"start",0,t),end:et.bind(null,"end",1,t)}}function rt(t,e){return Array.isArray(t)?nt(t):void 0===t||void 0===e?nt():nt([[t,e]])}function it(t,e){var n=0,r=void 0,i=void 0;if(!e)return 0;t&&t.length||(t=rt(0,0));for(var o=0;o<t.length;o++)r=t.start(o),i=t.end(o),i>e&&(i=e),n+=i-r;return n/e}function ot(t){if(t instanceof ot)return t;"number"==typeof t?this.code=t:"string"==typeof t?this.message=t:i(t)&&("number"==typeof t.code&&(this.code=t.code),r(this,t)),this.message||(this.message=ot.defaultMessages[this.code]||"")}function st(t,e){var n,r=null;try{n=JSON.parse(t,e)}catch(t){r=t}return[r,n]}function at(t){var e=nr.call(t);return"[object Function]"===e||"function"==typeof t&&"[object RegExp]"!==e||"undefined"!=typeof window&&(t===window.setTimeout||t===window.alert||t===window.confirm||t===window.prompt)}function lt(t,e,n){if(!er(e))throw new TypeError("iterator must be a function");arguments.length<3&&(n=this),"[object Array]"===or.call(t)?ct(t,e,n):"string"==typeof t?ut(t,e,n):ht(t,e,n)}function ct(t,e,n){for(var r=0,i=t.length;r<i;r++)sr.call(t,r)&&e.call(n,t[r],r,t)}function ut(t,e,n){for(var r=0,i=t.length;r<i;r++)e.call(n,t.charAt(r),r,t)}function ht(t,e,n){for(var r in t)sr.call(t,r)&&e.call(n,t[r],r,t)}function pt(){for(var t={},e=0;e<arguments.length;e++){var n=arguments[e];for(var r in n)ur.call(n,r)&&(t[r]=n[r])}return t}function dt(t){for(var e in t)if(t.hasOwnProperty(e))return!1;return!0}function ft(t,e,n){var r=t;return er(e)?(n=e,"string"==typeof t&&(r={uri:t})):r=cr(e,{uri:t}),r.callback=n,r}function vt(t,e,n){return e=ft(t,e,n),yt(e)}function yt(t){function e(){4===a.readyState&&setTimeout(i,0)}function n(){var t=void 0;if(t=a.response?a.response:a.responseText||gt(a),y)try{t=JSON.parse(t)}catch(t){}return t}function r(t){return clearTimeout(u),t instanceof Error||(t=new Error(""+(t||"Unknown XMLHttpRequest Error"))),t.statusCode=0,s(t,g)}function i(){if(!c){var e;clearTimeout(u),e=t.useXDR&&void 0===a.status?200:1223===a.status?204:a.status;var r=g,i=null;return 0!==e?(r={body:n(),statusCode:e,method:p,headers:{},url:h,rawRequest:a},a.getAllResponseHeaders&&(r.headers=lr(a.getAllResponseHeaders()))):i=new Error("Internal XMLHttpRequest Error"),s(i,r,r.body)}}if(void 0===t.callback)throw new Error("callback argument missing");var o=!1,s=function(e,n,r){o||(o=!0,t.callback(e,n,r))},a=t.xhr||null;a||(a=t.cors||t.useXDR?new vt.XDomainRequest:new vt.XMLHttpRequest);var l,c,u,h=a.url=t.uri||t.url,p=a.method=t.method||"GET",d=t.body||t.data,f=a.headers=t.headers||{},v=!!t.sync,y=!1,g={body:void 0,headers:{},statusCode:0,method:p,url:h,rawRequest:a};if("json"in t&&!1!==t.json&&(y=!0,f.accept||f.Accept||(f.Accept="application/json"),"GET"!==p&&"HEAD"!==p&&(f["content-type"]||f["Content-Type"]||(f["Content-Type"]="application/json"),d=JSON.stringify(!0===t.json?d:t.json))),a.onreadystatechange=e,a.onload=i,a.onerror=r,a.onprogress=function(){},a.onabort=function(){c=!0},a.ontimeout=r,a.open(p,h,!v,t.username,t.password),v||(a.withCredentials=!!t.withCredentials),!v&&t.timeout>0&&(u=setTimeout(function(){if(!c){c=!0,a.abort("timeout");var t=new Error("XMLHttpRequest timeout");t.code="ETIMEDOUT",r(t)}},t.timeout)),a.setRequestHeader)for(l in f)f.hasOwnProperty(l)&&a.setRequestHeader(l,f[l]);else if(t.headers&&!dt(t.headers))throw new Error("Headers cannot be set on an XDomainRequest object");return"responseType"in t&&(a.responseType=t.responseType),"beforeSend"in t&&"function"==typeof t.beforeSend&&t.beforeSend(a),a.send(d||null),a}function gt(t){if("document"===t.responseType)return t.responseXML;var e=t.responseXML&&"parsererror"===t.responseXML.documentElement.nodeName;return""!==t.responseType||e?null:t.responseXML}function mt(){}function _t(t,e){this.name="ParsingError",this.code=t.code,this.message=e||t.message}function bt(t){function e(t,e,n,r){return 3600*(0|t)+60*(0|e)+(0|n)+(0|r)/1e3}var n=t.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);return n?n[3]?e(n[1],n[2],n[3].replace(":",""),n[4]):n[1]>59?e(n[1],n[2],0,n[4]):e(0,n[1],n[2],n[4]):null}function Tt(){this.values=kr(null)}function Ct(t,e,n,r){var i=r?t.split(r):[t];for(var o in i)if("string"==typeof i[o]){var s=i[o].split(n);if(2===s.length){var a=s[0],l=s[1];e(a,l)}}}function kt(t,e,n){function r(){var e=bt(t);if(null===e)throw new _t(_t.Errors.BadTimeStamp,"Malformed timestamp: "+o);return t=t.replace(/^[^\sa-zA-Z-]+/,""),e}function i(){t=t.replace(/^\s+/,"")}var o=t;if(i(),e.startTime=r(),i(),"--\x3e"!==t.substr(0,3))throw new _t(_t.Errors.BadTimeStamp,"Malformed time stamp (time stamps must be separated by '--\x3e'): "+o);t=t.substr(3),i(),e.endTime=r(),i(),function(t,e){var r=new Tt;Ct(t,function(t,e){switch(t){case"region":for(var i=n.length-1;i>=0;i--)if(n[i].id===e){r.set(t,n[i].region);break}break;case"vertical":r.alt(t,e,["rl","lr"]);break;case"line":var o=e.split(","),s=o[0];r.integer(t,s),r.percent(t,s)&&r.set("snapToLines",!1),r.alt(t,s,["auto"]),2===o.length&&r.alt("lineAlign",o[1],["start","middle","end"]);break;case"position":o=e.split(","),r.percent(t,o[0]),2===o.length&&r.alt("positionAlign",o[1],["start","middle","end"]);break;case"size":r.percent(t,e);break;case"align":r.alt(t,e,["start","middle","end","left","right"])}},/:/,/\s/),e.region=r.get("region",null),e.vertical=r.get("vertical",""),e.line=r.get("line","auto"),e.lineAlign=r.get("lineAlign","start"),e.snapToLines=r.get("snapToLines",!0),e.size=r.get("size",100),e.align=r.get("align","middle"),e.position=r.get("position",{start:0,left:0,middle:50,end:100,right:100},e.align),e.positionAlign=r.get("positionAlign",{start:"start",left:"start",middle:"middle",end:"end",right:"end"},e.align)}(t,e)}function wt(t,e){function n(t){return wr[t]}for(var r,i=t.document.createElement("div"),o=i,s=[];null!==(r=function(){if(!e)return null;var t=e.match(/^([^<]*)(<[^>]+>?)?/);return function(t){return e=e.substr(t.length),t}(t[1]?t[1]:t[2])}());)if("<"!==r[0])o.appendChild(t.document.createTextNode(function(t){for(;c=t.match(/&(amp|lt|gt|lrm|rlm|nbsp);/);)t=t.replace(c[0],n);return t}(r)));else{if("/"===r[1]){s.length&&s[s.length-1]===r.substr(2).replace(">","")&&(s.pop(),o=o.parentNode);continue}var a,l=bt(r.substr(1,r.length-2));if(l){a=t.document.createProcessingInstruction("timestamp",l),o.appendChild(a);continue}var c=r.match(/^<([^.\s\/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/);if(!c)continue;if(!(a=function(e,n){var r=Er[e];if(!r)return null;var i=t.document.createElement(r);i.localName=r;var o=Sr[e];return o&&n&&(i[o]=n.trim()),i}(c[1],c[3])))continue;if(!function(t,e){return!xr[e.localName]||xr[e.localName]===t.localName}(o,a))continue;c[2]&&(a.className=c[2].substr(1).replace("."," ")),s.push(c[1]),o.appendChild(a),o=a}return i}function Et(t){for(var e=0;e<jr.length;e++){var n=jr[e];if(t>=n[0]&&t<=n[1])return!0}return!1}function St(t){function e(t,e){for(var n=e.childNodes.length-1;n>=0;n--)t.push(e.childNodes[n])}function n(t){if(!t||!t.length)return null;var r=t.pop(),i=r.textContent||r.innerText;if(i){var o=i.match(/^.*(\n|\r)/);return o?(t.length=0,o[0]):i}return"ruby"===r.tagName?n(t):r.childNodes?(e(t,r),n(t)):void 0}var r,i=[],o="";if(!t||!t.childNodes)return"ltr";for(e(i,t);o=n(i);)for(var s=0;s<o.length;s++)if(r=o.charCodeAt(s),Et(r))return"rtl";return"ltr"}function xt(t){if("number"==typeof t.line&&(t.snapToLines||t.line>=0&&t.line<=100))return t.line;if(!t.track||!t.track.textTrackList||!t.track.textTrackList.mediaElement)return-1;for(var e=t.track,n=e.textTrackList,r=0,i=0;i<n.length&&n[i]!==e;i++)"showing"===n[i].mode&&r++;return-1*++r}function jt(){}function At(t,e,n){var r=/MSIE\s8\.0/.test(navigator.userAgent),i="rgba(255, 255, 255, 1)",o="rgba(0, 0, 0, 0.8)";r&&(i="rgb(255, 255, 255)",o="rgb(0, 0, 0)"),jt.call(this),this.cue=e,this.cueDiv=wt(t,e.text);var s={color:i,backgroundColor:o,position:"relative",left:0,right:0,top:0,bottom:0,display:"inline"};r||(s.writingMode=""===e.vertical?"horizontal-tb":"lr"===e.vertical?"vertical-lr":"vertical-rl",s.unicodeBidi="plaintext"),this.applyStyles(s,this.cueDiv),this.div=t.document.createElement("div"),s={textAlign:"middle"===e.align?"center":e.align,font:n.font,whiteSpace:"pre-line",position:"absolute"},r||(s.direction=St(this.cueDiv),s.writingMode=""===e.vertical?"horizontal-tb":"lr"===e.vertical?"vertical-lr":"vertical-rl".stylesunicodeBidi="plaintext"),this.applyStyles(s),this.div.appendChild(this.cueDiv);var a=0;switch(e.positionAlign){case"start":a=e.position;break;case"middle":a=e.position-e.size/2;break;case"end":a=e.position-e.size}""===e.vertical?this.applyStyles({left:this.formatStyle(a,"%"),width:this.formatStyle(e.size,"%")}):this.applyStyles({top:this.formatStyle(a,"%"),height:this.formatStyle(e.size,"%")}),this.move=function(t){this.applyStyles({top:this.formatStyle(t.top,"px"),bottom:this.formatStyle(t.bottom,"px"),left:this.formatStyle(t.left,"px"),right:this.formatStyle(t.right,"px"),height:this.formatStyle(t.height,"px"),width:this.formatStyle(t.width,"px")})}}function Pt(t){var e,n,r,i,o=/MSIE\s8\.0/.test(navigator.userAgent);if(t.div){n=t.div.offsetHeight,r=t.div.offsetWidth,i=t.div.offsetTop;var s=(s=t.div.childNodes)&&(s=s[0])&&s.getClientRects&&s.getClientRects();t=t.div.getBoundingClientRect(),e=s?Math.max(s[0]&&s[0].height||0,t.height/s.length):0}this.left=t.left,this.right=t.right,this.top=t.top||i,this.height=t.height||n,this.bottom=t.bottom||i+(t.height||n),this.width=t.width||r,this.lineHeight=void 0!==e?e:t.lineHeight,o&&!this.lineHeight&&(this.lineHeight=13)}function Mt(t,e,n,r){var i=new Pt(e),o=e.cue,s=xt(o),a=[];if(o.snapToLines){var l;switch(o.vertical){case"":a=["+y","-y"],l="height";break;case"rl":a=["+x","-x"],l="width";break;case"lr":a=["-x","+x"],l="width"}var c=i.lineHeight,u=c*Math.round(s),h=n[l]+c,p=a[0];Math.abs(u)>h&&(u=u<0?-1:1,u*=Math.ceil(h/c)*c),s<0&&(u+=""===o.vertical?n.height:n.width,a=a.reverse()),i.move(p,u)}else{var d=i.lineHeight/n.height*100;switch(o.lineAlign){case"middle":s-=d/2;break;case"end":s-=d}switch(o.vertical){case"":e.applyStyles({top:e.formatStyle(s,"%")});break;case"rl":e.applyStyles({left:e.formatStyle(s,"%")});break;case"lr":e.applyStyles({right:e.formatStyle(s,"%")})}a=["+y","-x","+x","-y"],i=new Pt(e)}var f=function(t,e){for(var i,o=new Pt(t),s=1,a=0;a<e.length;a++){for(;t.overlapsOppositeAxis(n,e[a])||t.within(n)&&t.overlapsAny(r);)t.move(e[a]);if(t.within(n))return t;var l=t.intersectPercentage(n);s>l&&(i=new Pt(t),s=l),t=new Pt(o)}return i||o}(i,a);e.move(f.toCSSCompatValues(n))}function Ot(){}function Nt(t){return"string"==typeof t&&(!!Mr[t.toLowerCase()]&&t.toLowerCase())}function It(t){return"string"==typeof t&&(!!Or[t.toLowerCase()]&&t.toLowerCase())}function Dt(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)t[r]=n[r]}return t}function Lt(t,e,n){var r=this,i=/MSIE\s8\.0/.test(navigator.userAgent),o={};i?r=document.createElement("custom"):o.enumerable=!0,r.hasBeenReset=!1;var s="",a=!1,l=t,c=e,u=n,h=null,p="",d=!0,f="auto",v="start",y=50,g="middle",m=50,_="middle";if(Object.defineProperty(r,"id",Dt({},o,{get:function(){return s},set:function(t){s=""+t}})),Object.defineProperty(r,"pauseOnExit",Dt({},o,{get:function(){return a},set:function(t){a=!!t}})),Object.defineProperty(r,"startTime",Dt({},o,{get:function(){return l},set:function(t){if("number"!=typeof t)throw new TypeError("Start time must be set to a number.");l=t,this.hasBeenReset=!0}})),Object.defineProperty(r,"endTime",Dt({},o,{get:function(){return c},set:function(t){if("number"!=typeof t)throw new TypeError("End time must be set to a number.");c=t,this.hasBeenReset=!0}})),Object.defineProperty(r,"text",Dt({},o,{get:function(){return u},set:function(t){u=""+t,this.hasBeenReset=!0}})),Object.defineProperty(r,"region",Dt({},o,{get:function(){return h},set:function(t){h=t,this.hasBeenReset=!0}})),Object.defineProperty(r,"vertical",Dt({},o,{get:function(){return p},set:function(t){var e=Nt(t);if(!1===e)throw new SyntaxError("An invalid or illegal string was specified.");p=e,this.hasBeenReset=!0}})),Object.defineProperty(r,"snapToLines",Dt({},o,{get:function(){return d},set:function(t){d=!!t,this.hasBeenReset=!0}})),Object.defineProperty(r,"line",Dt({},o,{get:function(){return f},set:function(t){if("number"!=typeof t&&t!==Pr)throw new SyntaxError("An invalid number or illegal string was specified.");f=t,this.hasBeenReset=!0}})),Object.defineProperty(r,"lineAlign",Dt({},o,{get:function(){return v},set:function(t){var e=It(t);if(!e)throw new SyntaxError("An invalid or illegal string was specified.");v=e,this.hasBeenReset=!0}})),Object.defineProperty(r,"position",Dt({},o,{get:function(){return y},set:function(t){if(t<0||t>100)throw new Error("Position must be between 0 and 100.");y=t,this.hasBeenReset=!0}})),Object.defineProperty(r,"positionAlign",Dt({},o,{get:function(){return g},set:function(t){var e=It(t);if(!e)throw new SyntaxError("An invalid or illegal string was specified.");g=e,this.hasBeenReset=!0}})),Object.defineProperty(r,"size",Dt({},o,{get:function(){return m},set:function(t){if(t<0||t>100)throw new Error("Size must be between 0 and 100.");m=t,this.hasBeenReset=!0}})),Object.defineProperty(r,"align",Dt({},o,{get:function(){return _},set:function(t){var e=It(t);if(!e)throw new SyntaxError("An invalid or illegal string was specified.");_=e,this.hasBeenReset=!0}})),r.displayState=void 0,i)return r}function Rt(t){return"string"==typeof t&&(!!Ir[t.toLowerCase()]&&t.toLowerCase())}function Bt(t){return"number"==typeof t&&t>=0&&t<=100}function Ft(){var t=100,e=3,n=0,r=100,i=0,o=100,s="";Object.defineProperties(this,{width:{enumerable:!0,get:function(){return t},set:function(e){if(!Bt(e))throw new Error("Width must be between 0 and 100.");t=e}},lines:{enumerable:!0,get:function(){return e},set:function(t){if("number"!=typeof t)throw new TypeError("Lines must be set to a number.");e=t}},regionAnchorY:{enumerable:!0,get:function(){return r},set:function(t){if(!Bt(t))throw new Error("RegionAnchorX must be between 0 and 100.");r=t}},regionAnchorX:{enumerable:!0,get:function(){return n},set:function(t){if(!Bt(t))throw new Error("RegionAnchorY must be between 0 and 100.");n=t}},viewportAnchorY:{enumerable:!0,get:function(){return o},set:function(t){if(!Bt(t))throw new Error("ViewportAnchorY must be between 0 and 100.");o=t}},viewportAnchorX:{enumerable:!0,get:function(){return i},set:function(t){if(!Bt(t))throw new Error("ViewportAnchorX must be between 0 and 100.");i=t}},scroll:{enumerable:!0,get:function(){return s},set:function(t){var e=Rt(t);if(!1===e)throw new SyntaxError("An invalid or illegal string was specified.");s=e}}})}function Vt(t,e,n,r){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},o=t.textTracks();i.kind=e,n&&(i.label=n),r&&(i.language=r),i.tech=t;var s=new Cr.text.TrackClass(i);return o.addTrack(s),s}function Ht(t,e){Br[t]=Br[t]||[],Br[t].push(e)}function Ut(t,e,n){t.setTimeout(function(){return Kt(e,Br[e.type],n,t)},1)}function Wt(t,e){t.forEach(function(t){return t.setTech&&t.setTech(e)})}function zt(t,e,n){return t.reduceRight(qt(n),e[n]())}function Xt(t,e,n,r){return e[n](t.reduce(qt(n),r))}function qt(t){return function(e,n){return n[t]?n[t](e):e}}function Kt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments[2],i=arguments[3],o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[],s=arguments.length>5&&void 0!==arguments[5]&&arguments[5],a=e[0],l=e.slice(1);if("string"==typeof a)Kt(t,Br[a],n,i,o,s);else if(a){var c=a(i);c.setSource(r({},t),function(e,r){if(e)return Kt(t,l,n,i,o,s);o.push(c),Kt(r,t.type===r.type?l:Br[r.type],n,i,o,s)})}else l.length?Kt(t,l,n,i,o,s):s?n(t,o):Kt(t,Br["*"],n,i,o,!0)}function Yt(t,e){return"rgba("+parseInt(t[1]+t[1],16)+","+parseInt(t[2]+t[2],16)+","+parseInt(t[3]+t[3],16)+","+e+")"}function Gt(t,e,n){try{t.style[e]=n}catch(t){return}}function $t(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t;t=t<0?0:t;var n=Math.floor(t%60),r=Math.floor(t/60%60),i=Math.floor(t/3600),o=Math.floor(e/60%60),s=Math.floor(e/3600);return(isNaN(t)||t===1/0)&&(i=r=n="-"),i=i>0||s>0?i+":":"",r=((i||o>=10)&&r<10?"0"+r:r)+":",n=n<10?"0"+n:n,i+r+n}function Jt(t,e){if(e&&(t=e(t)),t&&"none"!==t)return t}function Qt(t,e){return Jt(t.options[t.options.selectedIndex].value,e)}function Zt(t,e,n){if(e)for(var r=0;r<t.options.length;r++)if(Jt(t.options[r].value,n)===e){t.selectedIndex=r;break}}function te(t,e,n){var r=void 0;if("string"==typeof t){var o=te.getPlayers();if(0===t.indexOf("#")&&(t=t.slice(1)),o[t])return e&&Xe.warn('Player "'+t+'" is already initialised. Options will not be applied.'),n&&o[t].ready(n),o[t];r=Ye("#"+t)}else r=t;if(!r||!r.nodeName)throw new TypeError("The element or ID supplied is not valid. (videojs)");if(p(r)&&!ue.body.contains(r)&&Xe.warn("The element supplied is not included in the DOM"),r.player||lo.players[r.playerId])return r.player||lo.players[r.playerId];e=e||{},te.hooks("beforesetup").forEach(function(t){var n=t(r,Z(e));if(!i(n)||Array.isArray(n))return void Xe.error("please return an object in beforesetup hooks");e=Z(e,n)});var s=Tn.getComponent("Player"),a=new s(r,e,n);return te.hooks("setup").forEach(function(t){return t(a)}),a}var ee,ne="6.4.0",re="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};ee="undefined"!=typeof window?window:void 0!==re?re:"undefined"!=typeof self?self:{};var ie,oe=ee,se={},ae=(Object.freeze||Object)({default:se}),le=ae&&se||ae,ce=void 0!==re?re:"undefined"!=typeof window?window:{};"undefined"!=typeof document?ie=document:(ie=ce["__GLOBAL_DOCUMENT_CACHE@4"])||(ie=ce["__GLOBAL_DOCUMENT_CACHE@4"]=le);var ue=ie,he=oe.navigator&&oe.navigator.userAgent||"",pe=/AppleWebKit\/([\d.]+)/i.exec(he),de=pe?parseFloat(pe.pop()):null,fe=/iPad/i.test(he),ve=/iPhone/i.test(he)&&!fe,ye=/iPod/i.test(he),ge=ve||fe||ye,me=function(){var t=he.match(/OS (\d+)_/i);return t&&t[1]?t[1]:null}(),_e=/Android/i.test(he),be=function(){var t=he.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i);if(!t)return null;var e=t[1]&&parseFloat(t[1]),n=t[2]&&parseFloat(t[2]);return e&&n?parseFloat(t[1]+"."+t[2]):e||null}(),Te=_e&&/webkit/i.test(he)&&be<2.3,Ce=_e&&be<5&&de<537,ke=/Firefox/i.test(he),we=/Edge/i.test(he),Ee=!we&&/Chrome/i.test(he),Se=function(){var t=he.match(/Chrome\/(\d+)/);return t&&t[1]?parseFloat(t[1]):null}(),xe=/MSIE\s8\.0/.test(he),je=function(){var t=/MSIE\s(\d+)\.\d/.exec(he),e=t&&parseFloat(t[1]);return!e&&/Trident\/7.0/i.test(he)&&/rv:11.0/.test(he)&&(e=11),e}(),Ae=/Safari/i.test(he)&&!Ee&&!_e&&!we,Pe=Ae||ge,Me=h()&&("ontouchstart"in oe||oe.DocumentTouch&&oe.document instanceof oe.DocumentTouch),Oe=h()&&"backgroundSize"in oe.document.createElement("video").style,Ne=(Object.freeze||Object)({IS_IPAD:fe,IS_IPHONE:ve,IS_IPOD:ye,IS_IOS:ge,IOS_VERSION:me,IS_ANDROID:_e,ANDROID_VERSION:be,IS_OLD_ANDROID:Te,IS_NATIVE_ANDROID:Ce,IS_FIREFOX:ke,IS_EDGE:we,IS_CHROME:Ee,CHROME_VERSION:Se,IS_IE8:xe,IE_VERSION:je,IS_SAFARI:Ae,IS_ANY_SAFARI:Pe,TOUCH_ENABLED:Me,BACKGROUND_SIZE_SUPPORTED:Oe}),Ie="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},De=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},Le=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},Re=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},Be=function(t,e){return t.raw=e,t},Fe=Object.prototype.toString,Ve=function(t){return i(t)?Object.keys(t):[]},He=void 0,Ue="all",We=[],ze=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:!!je&&je<11,r=He.levels[Ue],o=new RegExp("^("+r+")$");"log"!==t&&e.unshift(t.toUpperCase()+":"),We&&We.push([].concat(e)),e.unshift("VIDEOJS:");var s=oe.console&&oe.console[t];s&&r&&o.test(t)&&(n&&(e=e.map(function(t){if(i(t)||Array.isArray(t))try{return JSON.stringify(t)}catch(e){return String(t)}return String(t)}).join(" ")),s.apply?s[Array.isArray(e)?"apply":"call"](oe.console,e):s(e))};He=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];ze("log",e)},He.levels={all:"log|warn|error",error:"error",off:"",warn:"warn|error",DEFAULT:Ue},He.level=function(t){if("string"==typeof t){if(!He.levels.hasOwnProperty(t))throw new Error('"'+t+'" in not a valid log level');Ue=t}return Ue},He.history=function(){return We?[].concat(We):[]},He.history.clear=function(){We&&(We.length=0)},He.history.disable=function(){null!==We&&(We.length=0,We=null)},He.history.enable=function(){null===We&&(We=[])},He.error=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return ze("error",e)},He.warn=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return ze("warn",e)};var Xe=He,qe=function(t){for(var e="",n=0;n<arguments.length;n++)e+=s(t[n])+(arguments[n+1]||"");return e},Ke=Be(["Setting attributes in the second argument of createEl()\n                has been deprecated. Use the third argument instead.\n                createEl(type, properties, attributes). Attempting to set "," to ","."],["Setting attributes in the second argument of createEl()\n                has been deprecated. Use the third argument instead.\n                createEl(type, properties, attributes). Attempting to set "," to ","."]),Ye=f("querySelector"),Ge=f("querySelectorAll"),$e=(Object.freeze||Object)({isReal:h,isEl:p,isInFrame:d,createEl:v,textContent:y,prependTo:g,hasClass:m,addClass:_,removeClass:b,toggleClass:T,setAttributes:C,getAttributes:k,getAttribute:w,setAttribute:E,removeAttribute:S,blockTextSelection:x,unblockTextSelection:j,getBoundingClientRect:A,findPosition:P,getPointerPosition:M,isTextNode:O,emptyEl:N,normalizeContent:I,appendContent:D,insertContent:L,$:Ye,$$:Ge}),Je=1,Qe={},Ze="vdata"+(new Date).getTime(),tn=!1;!function(){try{var t=Object.defineProperty({},"passive",{get:function(){tn=!0}});oe.addEventListener("test",null,t)}catch(t){}}();var en=["touchstart","touchmove"],nn=(Object.freeze||Object)({fixEvent:W,on:z,off:X,trigger:q,one:K}),rn=!1,on=void 0,sn=function(){if(h()){
var t=ue.getElementsByTagName("video"),e=ue.getElementsByTagName("audio"),n=[];if(t&&t.length>0)for(var r=0,i=t.length;r<i;r++)n.push(t[r]);if(e&&e.length>0)for(var o=0,s=e.length;o<s;o++)n.push(e[o]);if(n&&n.length>0)for(var a=0,l=n.length;a<l;a++){var c=n[a];if(!c||!c.getAttribute){Y(1);break}if(void 0===c.player){var u=c.getAttribute("data-setup");null!==u&&on(c)}}else rn||Y(1)}};h()&&"complete"===ue.readyState?rn=!0:K(oe,"load",function(){rn=!0});var an=function(t){var e=ue.createElement("style");return e.className=t,e},ln=function(t,e){t.styleSheet?t.styleSheet.cssText=e:t.textContent=e},cn=function(t,e,n){e.guid||(e.guid=R());var r=function(){return e.apply(t,arguments)};return r.guid=n?n+"_"+e.guid:e.guid,r},un=function(t,e){var n=Date.now();return function(){var r=Date.now();r-n>=e&&(t.apply(void 0,arguments),n=r)}},hn=function(){};hn.prototype.allowedEvents_={},hn.prototype.on=function(t,e){var n=this.addEventListener;this.addEventListener=function(){},z(this,t,e),this.addEventListener=n},hn.prototype.addEventListener=hn.prototype.on,hn.prototype.off=function(t,e){X(this,t,e)},hn.prototype.removeEventListener=hn.prototype.off,hn.prototype.one=function(t,e){var n=this.addEventListener;this.addEventListener=function(){},K(this,t,e),this.addEventListener=n},hn.prototype.trigger=function(t){var e=t.type||t;"string"==typeof t&&(t={type:e}),t=W(t),this.allowedEvents_[e]&&this["on"+e]&&this["on"+e](t),q(this,t)},hn.prototype.dispatchEvent=hn.prototype.trigger;var pn=function(t){return t instanceof hn||!!t.eventBusEl_&&["on","one","off","trigger"].every(function(e){return"function"==typeof t[e]})},dn=function(t){return"string"==typeof t&&/\S/.test(t)||Array.isArray(t)&&!!t.length},fn=function(t){if(!t.nodeName&&!pn(t))throw new Error("Invalid target; must be a DOM node or evented object.")},vn=function(t){if(!dn(t))throw new Error("Invalid event type; must be a non-empty string or array.")},yn=function(t){if("function"!=typeof t)throw new Error("Invalid listener; must be a function.")},gn=function(t,e){var n=e.length<3||e[0]===t||e[0]===t.eventBusEl_,r=void 0,i=void 0,o=void 0;return n?(r=t.eventBusEl_,e.length>=3&&e.shift(),i=e[0],o=e[1]):(r=e[0],i=e[1],o=e[2]),fn(r),vn(i),yn(o),o=cn(t,o),{isTargetingSelf:n,target:r,type:i,listener:o}},mn=function(t,e,n,r){fn(t),t.nodeName?nn[e](t,n,r):t[e](n,r)},_n={on:function(){for(var t=this,e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];var i=gn(this,n),o=i.isTargetingSelf,s=i.target,a=i.type,l=i.listener;if(mn(s,"on",a,l),!o){var c=function(){return t.off(s,a,l)};c.guid=l.guid;var u=function(){return t.off("dispose",c)};u.guid=l.guid,mn(this,"on","dispose",c),mn(s,"on","dispose",u)}},one:function(){for(var t=this,e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];var i=gn(this,n),o=i.isTargetingSelf,s=i.target,a=i.type,l=i.listener;if(o)mn(s,"one",a,l);else{var c=function e(){for(var n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];t.off(s,a,e),l.apply(null,r)};c.guid=l.guid,mn(s,"one",a,c)}},off:function(t,e,n){if(!t||dn(t))X(this.eventBusEl_,t,e);else{var r=t,i=e;fn(r),vn(i),yn(n),n=cn(this,n),this.off("dispose",n),r.nodeName?(X(r,i,n),X(r,"dispose",n)):pn(r)&&(r.off(i,n),r.off("dispose",n))}},trigger:function(t,e){return q(this.eventBusEl_,t,e)}},bn={state:{},setState:function(t){var n=this;"function"==typeof t&&(t=t());var r=void 0;return e(t,function(t,e){n.state[e]!==t&&(r=r||{},r[e]={from:n.state[e],to:t}),n.state[e]=t}),r&&pn(this)&&this.trigger({changes:r,type:"statechanged"}),r}},Tn=function(){function t(e,n,r){if(De(this,t),!e&&this.play?this.player_=e=this:this.player_=e,this.options_=Z({},this.options_),n=this.options_=Z(this.options_,n),this.id_=n.id||n.el&&n.el.id,!this.id_){var i=e&&e.id&&e.id()||"no_player";this.id_=i+"_component_"+R()}this.name_=n.name||null,n.el?this.el_=n.el:!1!==n.createEl&&(this.el_=this.createEl()),G(this,{eventBusKey:this.el_?"el_":null}),$(this,this.constructor.defaultState),this.children_=[],this.childIndex_={},this.childNameIndex_={},!1!==n.initChildren&&this.initChildren(),this.ready(r),!1!==n.reportTouchActivity&&this.enableTouchActivity()}return t.prototype.dispose=function(){if(this.trigger({type:"dispose",bubbles:!1}),this.children_)for(var t=this.children_.length-1;t>=0;t--)this.children_[t].dispose&&this.children_[t].dispose();this.children_=null,this.childIndex_=null,this.childNameIndex_=null,this.el_&&(this.el_.parentNode&&this.el_.parentNode.removeChild(this.el_),V(this.el_),this.el_=null)},t.prototype.player=function(){return this.player_},t.prototype.options=function(t){return Xe.warn("this.options() has been deprecated and will be moved to the constructor in 6.0"),t?(this.options_=Z(this.options_,t),this.options_):this.options_},t.prototype.el=function(){return this.el_},t.prototype.createEl=function(t,e,n){return v(t,e,n)},t.prototype.localize=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,r=this.player_.language&&this.player_.language(),i=this.player_.languages&&this.player_.languages(),o=i&&i[r],s=r&&r.split("-")[0],a=i&&i[s],l=n;return o&&o[t]?l=o[t]:a&&a[t]&&(l=a[t]),e&&(l=l.replace(/\{(\d+)\}/g,function(t,n){var r=e[n-1],i=r;return void 0===r&&(i=t),i})),l},t.prototype.contentEl=function(){return this.contentEl_||this.el_},t.prototype.id=function(){return this.id_},t.prototype.name=function(){return this.name_},t.prototype.children=function(){return this.children_},t.prototype.getChildById=function(t){return this.childIndex_[t]},t.prototype.getChild=function(t){if(t)return t=J(t),this.childNameIndex_[t]},t.prototype.addChild=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.children_.length,i=void 0,o=void 0;if("string"==typeof e){o=J(e);var s=n.componentClass||o;n.name=o;var a=t.getComponent(s);if(!a)throw new Error("Component "+s+" does not exist");if("function"!=typeof a)return null;i=new a(this.player_||this,n)}else i=e;if(this.children_.splice(r,0,i),"function"==typeof i.id&&(this.childIndex_[i.id()]=i),o=o||i.name&&J(i.name()),o&&(this.childNameIndex_[o]=i),"function"==typeof i.el&&i.el()){var l=this.contentEl().children,c=l[r]||null;this.contentEl().insertBefore(i.el(),c)}return i},t.prototype.removeChild=function(t){if("string"==typeof t&&(t=this.getChild(t)),t&&this.children_){for(var e=!1,n=this.children_.length-1;n>=0;n--)if(this.children_[n]===t){e=!0,this.children_.splice(n,1);break}if(e){this.childIndex_[t.id()]=null,this.childNameIndex_[t.name()]=null;var r=t.el();r&&r.parentNode===this.contentEl()&&this.contentEl().removeChild(t.el())}}},t.prototype.initChildren=function(){var e=this,n=this.options_.children;if(n){var r=this.options_,i=function(t){var n=t.name,i=t.opts;if(void 0!==r[n]&&(i=r[n]),!1!==i){!0===i&&(i={}),i.playerOptions=e.options_.playerOptions;var o=e.addChild(n,i);o&&(e[n]=o)}},o=void 0,s=t.getComponent("Tech");o=Array.isArray(n)?n:Object.keys(n),o.concat(Object.keys(this.options_).filter(function(t){return!o.some(function(e){return"string"==typeof e?t===e:t===e.name})})).map(function(t){var r=void 0,i=void 0;return"string"==typeof t?(r=t,i=n[r]||e.options_[r]||{}):(r=t.name,i=t),{name:r,opts:i}}).filter(function(e){var n=t.getComponent(e.opts.componentClass||J(e.name));return n&&!s.isTech(n)}).forEach(i)}},t.prototype.buildCSSClass=function(){return""},t.prototype.ready=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(t)return this.isReady_?void(e?t.call(this):this.setTimeout(t,1)):(this.readyQueue_=this.readyQueue_||[],void this.readyQueue_.push(t))},t.prototype.triggerReady=function(){this.isReady_=!0,this.setTimeout(function(){var t=this.readyQueue_;this.readyQueue_=[],t&&t.length>0&&t.forEach(function(t){t.call(this)},this),this.trigger("ready")},1)},t.prototype.$=function(t,e){return Ye(t,e||this.contentEl())},t.prototype.$$=function(t,e){return Ge(t,e||this.contentEl())},t.prototype.hasClass=function(t){return m(this.el_,t)},t.prototype.addClass=function(t){_(this.el_,t)},t.prototype.removeClass=function(t){b(this.el_,t)},t.prototype.toggleClass=function(t,e){T(this.el_,t,e)},t.prototype.show=function(){this.removeClass("vjs-hidden")},t.prototype.hide=function(){this.addClass("vjs-hidden")},t.prototype.lockShowing=function(){this.addClass("vjs-lock-showing")},t.prototype.unlockShowing=function(){this.removeClass("vjs-lock-showing")},t.prototype.getAttribute=function(t){return w(this.el_,t)},t.prototype.setAttribute=function(t,e){E(this.el_,t,e)},t.prototype.removeAttribute=function(t){S(this.el_,t)},t.prototype.width=function(t,e){return this.dimension("width",t,e)},t.prototype.height=function(t,e){return this.dimension("height",t,e)},t.prototype.dimensions=function(t,e){this.width(t,!0),this.height(e)},t.prototype.dimension=function(t,e,n){if(void 0!==e)return null!==e&&e===e||(e=0),-1!==(""+e).indexOf("%")||-1!==(""+e).indexOf("px")?this.el_.style[t]=e:this.el_.style[t]="auto"===e?"":e+"px",void(n||this.trigger("componentresize"));if(!this.el_)return 0;var r=this.el_.style[t],i=r.indexOf("px");return-1!==i?parseInt(r.slice(0,i),10):parseInt(this.el_["offset"+J(t)],10)},t.prototype.currentDimension=function(t){var e=0;if("width"!==t&&"height"!==t)throw new Error("currentDimension only accepts width or height value");if("function"==typeof oe.getComputedStyle){var n=oe.getComputedStyle(this.el_);e=n.getPropertyValue(t)||n[t]}if(0===(e=parseFloat(e))){var r="offset"+J(t);e=this.el_[r]}return e},t.prototype.currentDimensions=function(){return{width:this.currentDimension("width"),height:this.currentDimension("height")}},t.prototype.currentWidth=function(){return this.currentDimension("width")},t.prototype.currentHeight=function(){return this.currentDimension("height")},t.prototype.focus=function(){this.el_.focus()},t.prototype.blur=function(){this.el_.blur()},t.prototype.emitTapEvents=function(){var t=0,e=null,n=void 0;this.on("touchstart",function(r){1===r.touches.length&&(e={pageX:r.touches[0].pageX,pageY:r.touches[0].pageY},t=(new Date).getTime(),n=!0)}),this.on("touchmove",function(t){if(t.touches.length>1)n=!1;else if(e){var r=t.touches[0].pageX-e.pageX,i=t.touches[0].pageY-e.pageY,o=Math.sqrt(r*r+i*i);o>10&&(n=!1)}});var r=function(){n=!1};this.on("touchleave",r),this.on("touchcancel",r),this.on("touchend",function(r){if(e=null,!0===n){(new Date).getTime()-t<200&&(r.preventDefault(),this.trigger("tap"))}})},t.prototype.enableTouchActivity=function(){if(this.player()&&this.player().reportUserActivity){var t=cn(this.player(),this.player().reportUserActivity),e=void 0;this.on("touchstart",function(){t(),this.clearInterval(e),e=this.setInterval(t,250)});var n=function(n){t(),this.clearInterval(e)};this.on("touchmove",t),this.on("touchend",n),this.on("touchcancel",n)}},t.prototype.setTimeout=function(t,e){var n=this;t=cn(this,t);var r=oe.setTimeout(t,e),i=function(){return n.clearTimeout(r)};return i.guid="vjs-timeout-"+r,this.on("dispose",i),r},t.prototype.clearTimeout=function(t){oe.clearTimeout(t);var e=function(){};return e.guid="vjs-timeout-"+t,this.off("dispose",e),t},t.prototype.setInterval=function(t,e){var n=this;t=cn(this,t);var r=oe.setInterval(t,e),i=function(){return n.clearInterval(r)};return i.guid="vjs-interval-"+r,this.on("dispose",i),r},t.prototype.clearInterval=function(t){oe.clearInterval(t);var e=function(){};return e.guid="vjs-interval-"+t,this.off("dispose",e),t},t.prototype.requestAnimationFrame=function(t){var e=this;if(this.supportsRaf_){t=cn(this,t);var n=oe.requestAnimationFrame(t),r=function(){return e.cancelAnimationFrame(n)};return r.guid="vjs-raf-"+n,this.on("dispose",r),n}return this.setTimeout(t,1e3/60)},t.prototype.cancelAnimationFrame=function(t){if(this.supportsRaf_){oe.cancelAnimationFrame(t);var e=function(){};return e.guid="vjs-raf-"+t,this.off("dispose",e),t}return this.clearTimeout(t)},t.registerComponent=function(e,n){if("string"!=typeof e||!e)throw new Error('Illegal component name, "'+e+'"; must be a non-empty string.');var r=t.getComponent("Tech"),i=r&&r.isTech(n),o=t===n||t.prototype.isPrototypeOf(n.prototype);if(i||!o){var s=void 0;throw s=i?"techs must be registered using Tech.registerTech()":"must be a Component subclass",new Error('Illegal component, "'+e+'"; '+s+".")}e=J(e),t.components_||(t.components_={});var a=t.getComponent("Player");if("Player"===e&&a&&a.players){var l=a.players,c=Object.keys(l);if(l&&c.length>0&&c.map(function(t){return l[t]}).every(Boolean))throw new Error("Can not register Player component after player has been created.")}return t.components_[e]=n,n},t.getComponent=function(e){if(e)return e=J(e),t.components_&&t.components_[e]?t.components_[e]:void 0},t}();Tn.prototype.supportsRaf_="function"==typeof oe.requestAnimationFrame&&"function"==typeof oe.cancelAnimationFrame,Tn.registerComponent("Component",Tn);for(var Cn={},kn=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],wn=kn[0],En=void 0,Sn=0;Sn<kn.length;Sn++)if(kn[Sn][1]in ue){En=kn[Sn];break}if(En)for(var xn=0;xn<En.length;xn++)Cn[wn[xn]]=En[xn];ot.prototype.code=0,ot.prototype.message="",ot.prototype.status=null,ot.errorTypes=["MEDIA_ERR_CUSTOM","MEDIA_ERR_ABORTED","MEDIA_ERR_NETWORK","MEDIA_ERR_DECODE","MEDIA_ERR_SRC_NOT_SUPPORTED","MEDIA_ERR_ENCRYPTED"],ot.defaultMessages={1:"You aborted the media playback",2:"A network error caused the media download to fail part-way.",3:"The media playback was aborted due to a corruption problem or because the media used features your browser did not support.",4:"The media could not be loaded, either because the server or network failed or because the format is not supported.",5:"The media is encrypted and we do not have the keys to decrypt it."};for(var jn=0;jn<ot.errorTypes.length;jn++)ot[ot.errorTypes[jn]]=jn,ot.prototype[ot.errorTypes[jn]]=jn;var An=st,Pn=function(t){return["kind","label","language","id","inBandMetadataTrackDispatchType","mode","src"].reduce(function(e,n,r){return t[n]&&(e[n]=t[n]),e},{cues:t.cues&&Array.prototype.map.call(t.cues,function(t){return{startTime:t.startTime,endTime:t.endTime,text:t.text,id:t.id}})})},Mn=function(t){var e=t.$$("track"),n=Array.prototype.map.call(e,function(t){return t.track});return Array.prototype.map.call(e,function(t){var e=Pn(t.track);return t.src&&(e.src=t.src),e}).concat(Array.prototype.filter.call(t.textTracks(),function(t){return-1===n.indexOf(t)}).map(Pn))},On=function(t,e){return t.forEach(function(t){var n=e.addRemoteTextTrack(t).track;!t.src&&t.cues&&t.cues.forEach(function(t){return n.addCue(t)})}),e.textTracks()},Nn={textTracksToJson:Mn,jsonToTextTracks:On,trackToJson_:Pn},In="vjs-modal-dialog",Dn=function(t){function e(n,r){De(this,e);var i=Re(this,t.call(this,n,r));return i.opened_=i.hasBeenOpened_=i.hasBeenFilled_=!1,i.closeable(!i.options_.uncloseable),i.content(i.options_.content),i.contentEl_=v("div",{className:In+"-content"},{role:"document"}),i.descEl_=v("p",{className:In+"-description vjs-control-text",id:i.el().getAttribute("aria-describedby")}),y(i.descEl_,i.description()),i.el_.appendChild(i.descEl_),i.el_.appendChild(i.contentEl_),i}return Le(e,t),e.prototype.createEl=function(){return t.prototype.createEl.call(this,"div",{className:this.buildCSSClass(),tabIndex:-1},{"aria-describedby":this.id()+"_description","aria-hidden":"true","aria-label":this.label(),role:"dialog"})},e.prototype.buildCSSClass=function(){return In+" vjs-hidden "+t.prototype.buildCSSClass.call(this)},e.prototype.handleKeyPress=function(t){27===t.which&&this.closeable()&&this.close()},e.prototype.label=function(){return this.localize(this.options_.label||"Modal Window")},e.prototype.description=function(){var t=this.options_.description||this.localize("This is a modal window.");return this.closeable()&&(t+=" "+this.localize("This modal can be closed by pressing the Escape key or activating the close button.")),t},e.prototype.open=function(){if(!this.opened_){var t=this.player();this.trigger("beforemodalopen"),this.opened_=!0,(this.options_.fillAlways||!this.hasBeenOpened_&&!this.hasBeenFilled_)&&this.fill(),this.wasPlaying_=!t.paused(),this.options_.pauseOnOpen&&this.wasPlaying_&&t.pause(),this.closeable()&&this.on(this.el_.ownerDocument,"keydown",cn(this,this.handleKeyPress)),this.hadControls_=t.controls(),t.controls(!1),this.show(),this.conditionalFocus_(),this.el().setAttribute("aria-hidden","false"),this.trigger("modalopen"),this.hasBeenOpened_=!0}},e.prototype.opened=function(t){return"boolean"==typeof t&&this[t?"open":"close"](),this.opened_},e.prototype.close=function(){if(this.opened_){var t=this.player();this.trigger("beforemodalclose"),this.opened_=!1,this.wasPlaying_&&this.options_.pauseOnOpen&&t.play(),this.closeable()&&this.off(this.el_.ownerDocument,"keydown",cn(this,this.handleKeyPress)),this.hadControls_&&t.controls(!0),this.hide(),this.el().setAttribute("aria-hidden","true"),this.trigger("modalclose"),this.conditionalBlur_(),this.options_.temporary&&this.dispose()}},e.prototype.closeable=function(t){if("boolean"==typeof t){var e=this.closeable_=!!t,n=this.getChild("closeButton");if(e&&!n){var r=this.contentEl_;this.contentEl_=this.el_,n=this.addChild("closeButton",{controlText:"Close Modal Dialog"}),this.contentEl_=r,this.on(n,"close",this.close)}!e&&n&&(this.off(n,"close",this.close),this.removeChild(n),n.dispose())}return this.closeable_},e.prototype.fill=function(){this.fillWith(this.content())},e.prototype.fillWith=function(t){var e=this.contentEl(),n=e.parentNode,r=e.nextSibling;this.trigger("beforemodalfill"),this.hasBeenFilled_=!0,n.removeChild(e),this.empty(),L(e,t),this.trigger("modalfill"),r?n.insertBefore(e,r):n.appendChild(e);var i=this.getChild("closeButton");i&&n.appendChild(i.el_)},e.prototype.empty=function(){this.trigger("beforemodalempty"),N(this.contentEl()),this.trigger("modalempty")},e.prototype.content=function(t){return void 0!==t&&(this.content_=t),this.content_},e.prototype.conditionalFocus_=function(){var t=ue.activeElement,e=this.player_.el_;this.previouslyActiveEl_=null,(e.contains(t)||e===t)&&(this.previouslyActiveEl_=t,this.focus(),this.on(ue,"keydown",this.handleKeyDown))},e.prototype.conditionalBlur_=function(){this.previouslyActiveEl_&&(this.previouslyActiveEl_.focus(),this.previouslyActiveEl_=null),this.off(ue,"keydown",this.handleKeyDown)},e.prototype.handleKeyDown=function(t){if(9===t.which){for(var e=this.focusableEls_(),n=this.el_.querySelector(":focus"),r=void 0,i=0;i<e.length;i++)if(n===e[i]){r=i;break}ue.activeElement===this.el_&&(r=0),t.shiftKey&&0===r?(e[e.length-1].focus(),t.preventDefault()):t.shiftKey||r!==e.length-1||(e[0].focus(),t.preventDefault())}},e.prototype.focusableEls_=function(){var t=this.el_.querySelectorAll("*");return Array.prototype.filter.call(t,function(t){return(t instanceof oe.HTMLAnchorElement||t instanceof oe.HTMLAreaElement)&&t.hasAttribute("href")||(t instanceof oe.HTMLInputElement||t instanceof oe.HTMLSelectElement||t instanceof oe.HTMLTextAreaElement||t instanceof oe.HTMLButtonElement)&&!t.hasAttribute("disabled")||t instanceof oe.HTMLIFrameElement||t instanceof oe.HTMLObjectElement||t instanceof oe.HTMLEmbedElement||t.hasAttribute("tabindex")&&-1!==t.getAttribute("tabindex")||t.hasAttribute("contenteditable")})},e}(Tn);Dn.prototype.options_={pauseOnOpen:!0,temporary:!0},Tn.registerComponent("ModalDialog",Dn);var Ln=function(t){function e(){var n,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;De(this,e);var o=Re(this,t.call(this));if(!i&&(i=o,xe)){i=ue.createElement("custom");for(var s in e.prototype)"constructor"!==s&&(i[s]=e.prototype[s])}i.tracks_=[],Object.defineProperty(i,"length",{get:function(){return this.tracks_.length}});for(var a=0;a<r.length;a++)i.addTrack(r[a]);return n=i,Re(o,n)}return Le(e,t),e.prototype.addTrack=function(t){var e=this.tracks_.length;""+e in this||Object.defineProperty(this,e,{get:function(){return this.tracks_[e]}}),-1===this.tracks_.indexOf(t)&&(this.tracks_.push(t),this.trigger({track:t,type:"addtrack"}))},e.prototype.removeTrack=function(t){for(var e=void 0,n=0,r=this.length;n<r;n++)if(this[n]===t){e=this[n],e.off&&e.off(),this.tracks_.splice(n,1);break}e&&this.trigger({track:e,type:"removetrack"})},e.prototype.getTrackById=function(t){for(var e=null,n=0,r=this.length;n<r;n++){var i=this[n];if(i.id===t){e=i;break}}return e},e}(hn);Ln.prototype.allowedEvents_={change:"change",addtrack:"addtrack",removetrack:"removetrack"};for(var Rn in Ln.prototype.allowedEvents_)Ln.prototype["on"+Rn]=null;var Bn=function(t,e){for(var n=0;n<t.length;n++)Object.keys(t[n]).length&&e.id!==t[n].id&&(t[n].enabled=!1)},Fn=function(t){function e(){var n,r,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];De(this,e);for(var o=void 0,s=i.length-1;s>=0;s--)if(i[s].enabled){Bn(i,i[s]);break}if(xe){o=ue.createElement("custom");for(var a in Ln.prototype)"constructor"!==a&&(o[a]=Ln.prototype[a]);for(var l in e.prototype)"constructor"!==l&&(o[l]=e.prototype[l])}return o=n=Re(this,t.call(this,i,o)),o.changing_=!1,r=o,Re(n,r)}return Le(e,t),e.prototype.addTrack=function(e){var n=this;e.enabled&&Bn(this,e),t.prototype.addTrack.call(this,e),e.addEventListener&&e.addEventListener("enabledchange",function(){n.changing_||(n.changing_=!0,Bn(n,e),n.changing_=!1,n.trigger("change"))})},e}(Ln),Vn=function(t,e){for(var n=0;n<t.length;n++)Object.keys(t[n]).length&&e.id!==t[n].id&&(t[n].selected=!1)},Hn=function(t){function e(){var n,r,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];De(this,e);for(var o=void 0,s=i.length-1;s>=0;s--)if(i[s].selected){Vn(i,i[s]);break}if(xe){o=ue.createElement("custom");for(var a in Ln.prototype)"constructor"!==a&&(o[a]=Ln.prototype[a]);for(var l in e.prototype)"constructor"!==l&&(o[l]=e.prototype[l])}return o=n=Re(this,t.call(this,i,o)),o.changing_=!1,Object.defineProperty(o,"selectedIndex",{get:function(){for(var t=0;t<this.length;t++)if(this[t].selected)return t;return-1},set:function(){}}),r=o,Re(n,r)}return Le(e,t),e.prototype.addTrack=function(e){var n=this;e.selected&&Vn(this,e),t.prototype.addTrack.call(this,e),e.addEventListener&&e.addEventListener("selectedchange",function(){n.changing_||(n.changing_=!0,Vn(n,e),n.changing_=!1,n.trigger("change"))})},e}(Ln),Un=function(t){function e(){var n,r,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];De(this,e);var o=void 0;if(xe){o=ue.createElement("custom");for(var s in Ln.prototype)"constructor"!==s&&(o[s]=Ln.prototype[s]);for(var a in e.prototype)"constructor"!==a&&(o[a]=e.prototype[a])}return o=n=Re(this,t.call(this,i,o)),r=o,Re(n,r)}return Le(e,t),e.prototype.addTrack=function(e){t.prototype.addTrack.call(this,e),e.addEventListener("modechange",cn(this,function(){this.trigger("change")})),-1===["metadata","chapters"].indexOf(e.kind)&&e.addEventListener("modechange",cn(this,function(){this.trigger("selectedlanguagechange")}))},e}(Ln),Wn=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];De(this,t);var n=this;if(xe){n=ue.createElement("custom");for(var r in t.prototype)"constructor"!==r&&(n[r]=t.prototype[r])}n.trackElements_=[],Object.defineProperty(n,"length",{get:function(){return this.trackElements_.length}});for(var i=0,o=e.length;i<o;i++)n.addTrackElement_(e[i]);if(xe)return n}return t.prototype.addTrackElement_=function(t){var e=this.trackElements_.length;""+e in this||Object.defineProperty(this,e,{get:function(){return this.trackElements_[e]}}),-1===this.trackElements_.indexOf(t)&&this.trackElements_.push(t)},t.prototype.getTrackElementByTrack_=function(t){for(var e=void 0,n=0,r=this.trackElements_.length;n<r;n++)if(t===this.trackElements_[n].track){e=this.trackElements_[n];break}return e},t.prototype.removeTrackElement_=function(t){for(var e=0,n=this.trackElements_.length;e<n;e++)if(t===this.trackElements_[e]){this.trackElements_.splice(e,1);break}},t}(),zn=function(){function t(e){De(this,t);var n=this;if(xe){n=ue.createElement("custom");for(var r in t.prototype)"constructor"!==r&&(n[r]=t.prototype[r])}if(t.prototype.setCues_.call(n,e),Object.defineProperty(n,"length",{get:function(){return this.length_}}),xe)return n}return t.prototype.setCues_=function(t){var e=this.length||0,n=0,r=t.length;this.cues_=t,this.length_=t.length;var i=function(t){""+t in this||Object.defineProperty(this,""+t,{get:function(){return this.cues_[t]}})};if(e<r)for(n=e;n<r;n++)i.call(this,n)},t.prototype.getCueById=function(t){for(var e=null,n=0,r=this.length;n<r;n++){var i=this[n];if(i.id===t){e=i;break}}return e},t}(),Xn={alternative:"alternative",captions:"captions",main:"main",sign:"sign",subtitles:"subtitles",commentary:"commentary"},qn={alternative:"alternative",descriptions:"descriptions",main:"main","main-desc":"main-desc",translation:"translation",commentary:"commentary"},Kn={subtitles:"subtitles",captions:"captions",descriptions:"descriptions",chapters:"chapters",metadata:"metadata"},Yn={disabled:"disabled",hidden:"hidden",showing:"showing"},Gn=function(t){function e(){var n,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};De(this,e);var i=Re(this,t.call(this)),o=i;if(xe){o=ue.createElement("custom");for(var s in e.prototype)"constructor"!==s&&(o[s]=e.prototype[s])}var a={id:r.id||"vjs_track_"+R(),kind:r.kind||"",label:r.label||"",language:r.language||""};for(var l in a)!function(t){Object.defineProperty(o,t,{get:function(){return a[t]},set:function(){}})}(l);return n=o,Re(i,n)}return Le(e,t),e}(hn),$n=function(t){var e=["protocol","hostname","port","pathname","search","hash","host"],n=ue.createElement("a");n.href=t;var r=""===n.host&&"file:"!==n.protocol,i=void 0;r&&(i=ue.createElement("div"),i.innerHTML='<a href="'+t+'"></a>',n=i.firstChild,i.setAttribute("style","display:none; position:absolute;"),ue.body.appendChild(i));for(var o={},s=0;s<e.length;s++)o[e[s]]=n[e[s]];return"http:"===o.protocol&&(o.host=o.host.replace(/:80$/,"")),"https:"===o.protocol&&(o.host=o.host.replace(/:443$/,"")),o.protocol||(o.protocol=oe.location.protocol),r&&ue.body.removeChild(i),o},Jn=function(t){if(!t.match(/^https?:\/\//)){var e=ue.createElement("div");e.innerHTML='<a href="'+t+'">x</a>',t=e.firstChild.href}return t},Qn=function(t){if("string"==typeof t){var e=/^(\/?)([\s\S]*?)((?:\.{1,2}|[^\/]+?)(\.([^\.\/\?]+)))(?:[\/]*|[\?].*)$/i,n=e.exec(t);if(n)return n.pop().toLowerCase()}return""},Zn=function(t){var e=oe.location,n=$n(t);return(":"===n.protocol?e.protocol:n.protocol)+n.host!==e.protocol+e.host},tr=(Object.freeze||Object)({parseUrl:$n,getAbsoluteURL:Jn,getFileExtension:Qn,isCrossOrigin:Zn}),er=at,nr=Object.prototype.toString,rr=t(function(t,e){function n(t){return t.replace(/^\s*|\s*$/g,"")}e=t.exports=n,e.left=function(t){return t.replace(/^\s*/,"")},e.right=function(t){return t.replace(/\s*$/,"")}}),ir=lt,or=Object.prototype.toString,sr=Object.prototype.hasOwnProperty,ar=function(t){return"[object Array]"===Object.prototype.toString.call(t)},lr=function(t){if(!t)return{};var e={};return ir(rr(t).split("\n"),function(t){var n=t.indexOf(":"),r=rr(t.slice(0,n)).toLowerCase(),i=rr(t.slice(n+1));void 0===e[r]?e[r]=i:ar(e[r])?e[r].push(i):e[r]=[e[r],i]}),e},cr=pt,ur=Object.prototype.hasOwnProperty,hr=vt;vt.XMLHttpRequest=oe.XMLHttpRequest||mt,vt.XDomainRequest="withCredentials"in new vt.XMLHttpRequest?vt.XMLHttpRequest:oe.XDomainRequest,function(t,e){for(var n=0;n<t.length;n++)e(t[n])}(["get","put","post","patch","head","delete"],function(t){vt["delete"===t?"del":t]=function(e,n,r){return n=ft(e,n,r),n.method=t.toUpperCase(),yt(n)}});var pr=function(t,e){var n=new oe.WebVTT.Parser(oe,oe.vttjs,oe.WebVTT.StringDecoder()),r=[];n.oncue=function(t){e.addCue(t)},n.onparsingerror=function(t){r.push(t)},n.onflush=function(){e.trigger({type:"loadeddata",target:e})},n.parse(t),r.length>0&&(oe.console&&oe.console.groupCollapsed&&oe.console.groupCollapsed("Text Track parsing errors for "+e.src),r.forEach(function(t){return Xe.error(t)}),oe.console&&oe.console.groupEnd&&oe.console.groupEnd()),n.flush()},dr=function(t,e){var n={uri:t},r=Zn(t);r&&(n.cors=r),hr(n,cn(this,function(t,n,r){if(t)return Xe.error(t,n);if(e.loaded_=!0,"function"!=typeof oe.WebVTT){if(e.tech_){var i=function(){return pr(r,e)};e.tech_.on("vttjsloaded",i),e.tech_.on("vttjserror",function(){Xe.error("vttjs failed to load, stopping trying to process "+e.src),e.tech_.off("vttjsloaded",i)})}}else pr(r,e)}))},fr=function(t){function e(){var n,r,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(De(this,e),!i.tech)throw new Error("A tech was not provided.");var o=Z(i,{kind:Kn[i.kind]||"subtitles",language:i.language||i.srclang||""}),s=Yn[o.mode]||"disabled",a=o.default;"metadata"!==o.kind&&"chapters"!==o.kind||(s="hidden");var l=n=Re(this,t.call(this,o));if(l.tech_=o.tech,xe)for(var c in e.prototype)"constructor"!==c&&(l[c]=e.prototype[c]);l.cues_=[],l.activeCues_=[];var u=new zn(l.cues_),h=new zn(l.activeCues_),p=!1,d=cn(l,function(){this.activeCues,p&&(this.trigger("cuechange"),p=!1)});return"disabled"!==s&&l.tech_.ready(function(){l.tech_.on("timeupdate",d)},!0),Object.defineProperty(l,"default",{get:function(){return a},set:function(){}}),Object.defineProperty(l,"mode",{get:function(){return s},set:function(t){var e=this;Yn[t]&&(s=t,"showing"===s&&this.tech_.ready(function(){e.tech_.on("timeupdate",d)},!0),this.trigger("modechange"))}}),Object.defineProperty(l,"cues",{get:function(){return this.loaded_?u:null},set:function(){}}),Object.defineProperty(l,"activeCues",{get:function(){if(!this.loaded_)return null;if(0===this.cues.length)return h;for(var t=this.tech_.currentTime(),e=[],n=0,r=this.cues.length;n<r;n++){var i=this.cues[n];i.startTime<=t&&i.endTime>=t?e.push(i):i.startTime===i.endTime&&i.startTime<=t&&i.startTime+.5>=t&&e.push(i)}if(p=!1,e.length!==this.activeCues_.length)p=!0;else for(var o=0;o<e.length;o++)-1===this.activeCues_.indexOf(e[o])&&(p=!0);return this.activeCues_=e,h.setCues_(this.activeCues_),h},set:function(){}}),o.src?(l.src=o.src,dr(o.src,l)):l.loaded_=!0,r=l,Re(n,r)}return Le(e,t),e.prototype.addCue=function(t){var e=t;if(oe.vttjs&&!(t instanceof oe.vttjs.VTTCue)){e=new oe.vttjs.VTTCue(t.startTime,t.endTime,t.text);for(var n in t)n in e||(e[n]=t[n]);e.id=t.id,e.originalCue_=t}for(var r=this.tech_.textTracks(),i=0;i<r.length;i++)r[i]!==this&&r[i].removeCue(e);this.cues_.push(e),this.cues.setCues_(this.cues_)},e.prototype.removeCue=function(t){for(var e=this.cues_.length;e--;){var n=this.cues_[e];if(n===t||n.originalCue_&&n.originalCue_===t){this.cues_.splice(e,1),this.cues.setCues_(this.cues_);break}}},e}(Gn);fr.prototype.allowedEvents_={cuechange:"cuechange"};var vr=function(t){function e(){var n,r,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};De(this,e);var o=Z(i,{kind:qn[i.kind]||""}),s=n=Re(this,t.call(this,o)),a=!1;if(xe)for(var l in e.prototype)"constructor"!==l&&(s[l]=e.prototype[l]);return Object.defineProperty(s,"enabled",{get:function(){return a},set:function(t){"boolean"==typeof t&&t!==a&&(a=t,this.trigger("enabledchange"))}}),o.enabled&&(s.enabled=o.enabled),s.loaded_=!0,r=s,Re(n,r)}return Le(e,t),e}(Gn),yr=function(t){function e(){var n,r,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};De(this,e);var o=Z(i,{kind:Xn[i.kind]||""}),s=n=Re(this,t.call(this,o)),a=!1;if(xe)for(var l in e.prototype)"constructor"!==l&&(s[l]=e.prototype[l]);return Object.defineProperty(s,"selected",{get:function(){
return a},set:function(t){"boolean"==typeof t&&t!==a&&(a=t,this.trigger("selectedchange"))}}),o.selected&&(s.selected=o.selected),r=s,Re(n,r)}return Le(e,t),e}(Gn),gr=0,mr=2,_r=function(t){function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};De(this,e);var r=Re(this,t.call(this)),i=void 0,o=r;if(xe){o=ue.createElement("custom");for(var s in e.prototype)"constructor"!==s&&(o[s]=e.prototype[s])}var a=new fr(n);if(o.kind=a.kind,o.src=a.src,o.srclang=a.language,o.label=a.label,o.default=a.default,Object.defineProperty(o,"readyState",{get:function(){return i}}),Object.defineProperty(o,"track",{get:function(){return a}}),i=gr,a.addEventListener("loadeddata",function(){i=mr,o.trigger({type:"load",target:o})}),xe){var l;return l=o,Re(r,l)}return r}return Le(e,t),e}(hn);_r.prototype.allowedEvents_={load:"load"},_r.NONE=gr,_r.LOADING=1,_r.LOADED=mr,_r.ERROR=3;var br={audio:{ListClass:Fn,TrackClass:vr,capitalName:"Audio"},video:{ListClass:Hn,TrackClass:yr,capitalName:"Video"},text:{ListClass:Un,TrackClass:fr,capitalName:"Text"}};Object.keys(br).forEach(function(t){br[t].getterName=t+"Tracks",br[t].privateName=t+"Tracks_"});var Tr={remoteText:{ListClass:Un,TrackClass:fr,capitalName:"RemoteText",getterName:"remoteTextTracks",privateName:"remoteTextTracks_"},remoteTextEl:{ListClass:Wn,TrackClass:_r,capitalName:"RemoteTextTrackEls",getterName:"remoteTextTrackEls",privateName:"remoteTextTrackEls_"}},Cr=Z(br,Tr);Tr.names=Object.keys(Tr),br.names=Object.keys(br),Cr.names=[].concat(Tr.names).concat(br.names);var kr=Object.create||function(){function t(){}return function(e){if(1!==arguments.length)throw new Error("Object.create shim only accepts one parameter.");return t.prototype=e,new t}}();_t.prototype=kr(Error.prototype),_t.prototype.constructor=_t,_t.Errors={BadSignature:{code:0,message:"Malformed WebVTT signature."},BadTimeStamp:{code:1,message:"Malformed time stamp."}},Tt.prototype={set:function(t,e){this.get(t)||""===e||(this.values[t]=e)},get:function(t,e,n){return n?this.has(t)?this.values[t]:e[n]:this.has(t)?this.values[t]:e},has:function(t){return t in this.values},alt:function(t,e,n){for(var r=0;r<n.length;++r)if(e===n[r]){this.set(t,e);break}},integer:function(t,e){/^-?\d+$/.test(e)&&this.set(t,parseInt(e,10))},percent:function(t,e){return!!(e.match(/^([\d]{1,3})(\.[\d]*)?%$/)&&(e=parseFloat(e))>=0&&e<=100)&&(this.set(t,e),!0)}};var wr={"&amp;":"&","&lt;":"<","&gt;":">","&lrm;":"‎","&rlm;":"‏","&nbsp;":" "},Er={c:"span",i:"i",b:"b",u:"u",ruby:"ruby",rt:"rt",v:"span",lang:"span"},Sr={v:"title",lang:"lang"},xr={rt:"ruby"},jr=[[1470,1470],[1472,1472],[1475,1475],[1478,1478],[1488,1514],[1520,1524],[1544,1544],[1547,1547],[1549,1549],[1563,1563],[1566,1610],[1645,1647],[1649,1749],[1765,1766],[1774,1775],[1786,1805],[1807,1808],[1810,1839],[1869,1957],[1969,1969],[1984,2026],[2036,2037],[2042,2042],[2048,2069],[2074,2074],[2084,2084],[2088,2088],[2096,2110],[2112,2136],[2142,2142],[2208,2208],[2210,2220],[8207,8207],[64285,64285],[64287,64296],[64298,64310],[64312,64316],[64318,64318],[64320,64321],[64323,64324],[64326,64449],[64467,64829],[64848,64911],[64914,64967],[65008,65020],[65136,65140],[65142,65276],[67584,67589],[67592,67592],[67594,67637],[67639,67640],[67644,67644],[67647,67669],[67671,67679],[67840,67867],[67872,67897],[67903,67903],[67968,68023],[68030,68031],[68096,68096],[68112,68115],[68117,68119],[68121,68147],[68160,68167],[68176,68184],[68192,68223],[68352,68405],[68416,68437],[68440,68466],[68472,68479],[68608,68680],[126464,126467],[126469,126495],[126497,126498],[126500,126500],[126503,126503],[126505,126514],[126516,126519],[126521,126521],[126523,126523],[126530,126530],[126535,126535],[126537,126537],[126539,126539],[126541,126543],[126545,126546],[126548,126548],[126551,126551],[126553,126553],[126555,126555],[126557,126557],[126559,126559],[126561,126562],[126564,126564],[126567,126570],[126572,126578],[126580,126583],[126585,126588],[126590,126590],[126592,126601],[126603,126619],[126625,126627],[126629,126633],[126635,126651],[1114109,1114109]];jt.prototype.applyStyles=function(t,e){e=e||this.div;for(var n in t)t.hasOwnProperty(n)&&(e.style[n]=t[n])},jt.prototype.formatStyle=function(t,e){return 0===t?0:t+e},At.prototype=kr(jt.prototype),At.prototype.constructor=At,Pt.prototype.move=function(t,e){switch(e=void 0!==e?e:this.lineHeight,t){case"+x":this.left+=e,this.right+=e;break;case"-x":this.left-=e,this.right-=e;break;case"+y":this.top+=e,this.bottom+=e;break;case"-y":this.top-=e,this.bottom-=e}},Pt.prototype.overlaps=function(t){return this.left<t.right&&this.right>t.left&&this.top<t.bottom&&this.bottom>t.top},Pt.prototype.overlapsAny=function(t){for(var e=0;e<t.length;e++)if(this.overlaps(t[e]))return!0;return!1},Pt.prototype.within=function(t){return this.top>=t.top&&this.bottom<=t.bottom&&this.left>=t.left&&this.right<=t.right},Pt.prototype.overlapsOppositeAxis=function(t,e){switch(e){case"+x":return this.left<t.left;case"-x":return this.right>t.right;case"+y":return this.top<t.top;case"-y":return this.bottom>t.bottom}},Pt.prototype.intersectPercentage=function(t){return Math.max(0,Math.min(this.right,t.right)-Math.max(this.left,t.left))*Math.max(0,Math.min(this.bottom,t.bottom)-Math.max(this.top,t.top))/(this.height*this.width)},Pt.prototype.toCSSCompatValues=function(t){return{top:this.top-t.top,bottom:t.bottom-this.bottom,left:this.left-t.left,right:t.right-this.right,height:this.height,width:this.width}},Pt.getSimpleBoxPosition=function(t){var e=t.div?t.div.offsetHeight:t.tagName?t.offsetHeight:0,n=t.div?t.div.offsetWidth:t.tagName?t.offsetWidth:0,r=t.div?t.div.offsetTop:t.tagName?t.offsetTop:0;return t=t.div?t.div.getBoundingClientRect():t.tagName?t.getBoundingClientRect():t,{left:t.left,right:t.right,top:t.top||r,height:t.height||e,bottom:t.bottom||r+(t.height||e),width:t.width||n}},Ot.StringDecoder=function(){return{decode:function(t){if(!t)return"";if("string"!=typeof t)throw new Error("Error - expected string data.");return decodeURIComponent(encodeURIComponent(t))}}},Ot.convertCueToDOMTree=function(t,e){return t&&e?wt(t,e):null};Ot.processCues=function(t,e,n){if(!t||!e||!n)return null;for(;n.firstChild;)n.removeChild(n.firstChild);var r=t.document.createElement("div");if(r.style.position="absolute",r.style.left="0",r.style.right="0",r.style.top="0",r.style.bottom="0",r.style.margin="1.5%",n.appendChild(r),function(t){for(var e=0;e<t.length;e++)if(t[e].hasBeenReset||!t[e].displayState)return!0;return!1}(e)){var i=[],o=Pt.getSimpleBoxPosition(r),s=Math.round(.05*o.height*100)/100,a={font:s+"px sans-serif"};!function(){for(var n,s,l=0;l<e.length;l++)s=e[l],n=new At(t,s,a),r.appendChild(n.div),Mt(t,n,o,i),s.displayState=n.div,i.push(Pt.getSimpleBoxPosition(n))}()}else for(var l=0;l<e.length;l++)r.appendChild(e[l].displayState)},Ot.Parser=function(t,e,n){n||(n=e,e={}),e||(e={}),this.window=t,this.vttjs=e,this.state="INITIAL",this.buffer="",this.decoder=n||new TextDecoder("utf8"),this.regionList=[]},Ot.Parser.prototype={reportOrThrowError:function(t){if(!(t instanceof _t))throw t;this.onparsingerror&&this.onparsingerror(t)},parse:function(t){function e(){for(var t=i.buffer,e=0;e<t.length&&"\r"!==t[e]&&"\n"!==t[e];)++e;var n=t.substr(0,e);return"\r"===t[e]&&++e,"\n"===t[e]&&++e,i.buffer=t.substr(e),n}function n(t){var e=new Tt;if(Ct(t,function(t,n){switch(t){case"id":e.set(t,n);break;case"width":e.percent(t,n);break;case"lines":e.integer(t,n);break;case"regionanchor":case"viewportanchor":var r=n.split(",");if(2!==r.length)break;var i=new Tt;if(i.percent("x",r[0]),i.percent("y",r[1]),!i.has("x")||!i.has("y"))break;e.set(t+"X",i.get("x")),e.set(t+"Y",i.get("y"));break;case"scroll":e.alt(t,n,["up"])}},/=/,/\s/),e.has("id")){var n=new(i.vttjs.VTTRegion||i.window.VTTRegion);n.width=e.get("width",100),n.lines=e.get("lines",3),n.regionAnchorX=e.get("regionanchorX",0),n.regionAnchorY=e.get("regionanchorY",100),n.viewportAnchorX=e.get("viewportanchorX",0),n.viewportAnchorY=e.get("viewportanchorY",100),n.scroll=e.get("scroll",""),i.onregion&&i.onregion(n),i.regionList.push({id:e.get("id"),region:n})}}function r(t){var e=new Tt;Ct(t,function(t,n){switch(t){case"MPEGT":e.integer(t+"S",n);break;case"LOCA":e.set(t+"L",bt(n))}},/[^\d]:/,/,/),i.ontimestampmap&&i.ontimestampmap({MPEGTS:e.get("MPEGTS"),LOCAL:e.get("LOCAL")})}var i=this;t&&(i.buffer+=i.decoder.decode(t,{stream:!0}));try{var o;if("INITIAL"===i.state){if(!/\r\n|\n/.test(i.buffer))return this;o=e();var s=o.match(/^WEBVTT([ \t].*)?$/);if(!s||!s[0])throw new _t(_t.Errors.BadSignature);i.state="HEADER"}for(var a=!1;i.buffer;){if(!/\r\n|\n/.test(i.buffer))return this;switch(a?a=!1:o=e(),i.state){case"HEADER":/:/.test(o)?function(t){t.match(/X-TIMESTAMP-MAP/)?Ct(t,function(t,e){switch(t){case"X-TIMESTAMP-MAP":r(e)}},/=/):Ct(t,function(t,e){switch(t){case"Region":n(e)}},/:/)}(o):o||(i.state="ID");continue;case"NOTE":o||(i.state="ID");continue;case"ID":if(/^NOTE($|[ \t])/.test(o)){i.state="NOTE";break}if(!o)continue;if(i.cue=new(i.vttjs.VTTCue||i.window.VTTCue)(0,0,""),i.state="CUE",-1===o.indexOf("--\x3e")){i.cue.id=o;continue}case"CUE":try{kt(o,i.cue,i.regionList)}catch(t){i.reportOrThrowError(t),i.cue=null,i.state="BADCUE";continue}i.state="CUETEXT";continue;case"CUETEXT":var l=-1!==o.indexOf("--\x3e");if(!o||l&&(a=!0)){i.oncue&&i.oncue(i.cue),i.cue=null,i.state="ID";continue}i.cue.text&&(i.cue.text+="\n"),i.cue.text+=o;continue;case"BADCUE":o||(i.state="ID");continue}}}catch(t){i.reportOrThrowError(t),"CUETEXT"===i.state&&i.cue&&i.oncue&&i.oncue(i.cue),i.cue=null,i.state="INITIAL"===i.state?"BADWEBVTT":"BADCUE"}return this},flush:function(){var t=this;try{if(t.buffer+=t.decoder.decode(),(t.cue||"HEADER"===t.state)&&(t.buffer+="\n\n",t.parse()),"INITIAL"===t.state)throw new _t(_t.Errors.BadSignature)}catch(e){t.reportOrThrowError(e)}return t.onflush&&t.onflush(),this}};var Ar=Ot,Pr="auto",Mr={"":!0,lr:!0,rl:!0},Or={start:!0,middle:!0,end:!0,left:!0,right:!0};Lt.prototype.getCueAsHTML=function(){return WebVTT.convertCueToDOMTree(window,this.text)};var Nr=Lt,Ir={"":!0,up:!0},Dr=Ft,Lr=t(function(t){var e=t.exports={WebVTT:Ar,VTTCue:Nr,VTTRegion:Dr};oe.vttjs=e,oe.WebVTT=e.WebVTT;var n=e.VTTCue,r=e.VTTRegion,i=oe.VTTCue,o=oe.VTTRegion;e.shim=function(){oe.VTTCue=n,oe.VTTRegion=r},e.restore=function(){oe.VTTCue=i,oe.VTTRegion=o},oe.VTTCue||e.shim()}),Rr=function(t){function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};De(this,e),n.reportTouchActivity=!1;var i=Re(this,t.call(this,null,n,r));return i.hasStarted_=!1,i.on("playing",function(){this.hasStarted_=!0}),i.on("loadstart",function(){this.hasStarted_=!1}),Cr.names.forEach(function(t){var e=Cr[t];n&&n[e.getterName]&&(i[e.privateName]=n[e.getterName])}),i.featuresProgressEvents||i.manualProgressOn(),i.featuresTimeupdateEvents||i.manualTimeUpdatesOn(),["Text","Audio","Video"].forEach(function(t){!1===n["native"+t+"Tracks"]&&(i["featuresNative"+t+"Tracks"]=!1)}),!1===n.nativeCaptions||!1===n.nativeTextTracks?i.featuresNativeTextTracks=!1:!0!==n.nativeCaptions&&!0!==n.nativeTextTracks||(i.featuresNativeTextTracks=!0),i.featuresNativeTextTracks||i.emulateTextTracks(),i.autoRemoteTextTracks_=new Cr.text.ListClass,i.initTrackListeners(),n.nativeControlsForTouch||i.emitTapEvents(),i.constructor&&(i.name_=i.constructor.name||"Unknown Tech"),i}return Le(e,t),e.prototype.manualProgressOn=function(){this.on("durationchange",this.onDurationChange),this.manualProgress=!0,this.one("ready",this.trackProgress)},e.prototype.manualProgressOff=function(){this.manualProgress=!1,this.stopTrackingProgress(),this.off("durationchange",this.onDurationChange)},e.prototype.trackProgress=function(t){this.stopTrackingProgress(),this.progressInterval=this.setInterval(cn(this,function(){var t=this.bufferedPercent();this.bufferedPercent_!==t&&this.trigger("progress"),this.bufferedPercent_=t,1===t&&this.stopTrackingProgress()}),500)},e.prototype.onDurationChange=function(t){this.duration_=this.duration()},e.prototype.buffered=function(){return rt(0,0)},e.prototype.bufferedPercent=function(){return it(this.buffered(),this.duration_)},e.prototype.stopTrackingProgress=function(){this.clearInterval(this.progressInterval)},e.prototype.manualTimeUpdatesOn=function(){this.manualTimeUpdates=!0,this.on("play",this.trackCurrentTime),this.on("pause",this.stopTrackingCurrentTime)},e.prototype.manualTimeUpdatesOff=function(){this.manualTimeUpdates=!1,this.stopTrackingCurrentTime(),this.off("play",this.trackCurrentTime),this.off("pause",this.stopTrackingCurrentTime)},e.prototype.trackCurrentTime=function(){this.currentTimeInterval&&this.stopTrackingCurrentTime(),this.currentTimeInterval=this.setInterval(function(){this.trigger({type:"timeupdate",target:this,manuallyTriggered:!0})},250)},e.prototype.stopTrackingCurrentTime=function(){this.clearInterval(this.currentTimeInterval),this.trigger({type:"timeupdate",target:this,manuallyTriggered:!0})},e.prototype.dispose=function(){this.clearTracks(br.names),this.manualProgress&&this.manualProgressOff(),this.manualTimeUpdates&&this.manualTimeUpdatesOff(),t.prototype.dispose.call(this)},e.prototype.clearTracks=function(t){var e=this;t=[].concat(t),t.forEach(function(t){for(var n=e[t+"Tracks"]()||[],r=n.length;r--;){var i=n[r];"text"===t&&e.removeRemoteTextTrack(i),n.removeTrack(i)}})},e.prototype.cleanupAutoTextTracks=function(){for(var t=this.autoRemoteTextTracks_||[],e=t.length;e--;){var n=t[e];this.removeRemoteTextTrack(n)}},e.prototype.reset=function(){},e.prototype.error=function(t){return void 0!==t&&(this.error_=new ot(t),this.trigger("error")),this.error_},e.prototype.played=function(){return this.hasStarted_?rt(0,0):rt()},e.prototype.setCurrentTime=function(){this.manualTimeUpdates&&this.trigger({type:"timeupdate",target:this,manuallyTriggered:!0})},e.prototype.initTrackListeners=function(){var t=this;br.names.forEach(function(e){var n=br[e],r=function(){t.trigger(e+"trackchange")},i=t[n.getterName]();i.addEventListener("removetrack",r),i.addEventListener("addtrack",r),t.on("dispose",function(){i.removeEventListener("removetrack",r),i.removeEventListener("addtrack",r)})})},e.prototype.addWebVttScript_=function(){var t=this;if(!oe.WebVTT)if(ue.body.contains(this.el())){if(!this.options_["vtt.js"]&&o(Lr)&&Object.keys(Lr).length>0)return void this.trigger("vttjsloaded");var e=ue.createElement("script");e.src=this.options_["vtt.js"]||"https://vjs.zencdn.net/vttjs/0.12.4/vtt.min.js",e.onload=function(){t.trigger("vttjsloaded")},e.onerror=function(){t.trigger("vttjserror")},this.on("dispose",function(){e.onload=null,e.onerror=null}),oe.WebVTT=!0,this.el().parentNode.appendChild(e)}else this.ready(this.addWebVttScript_)},e.prototype.emulateTextTracks=function(){var t=this,e=this.textTracks(),n=this.remoteTextTracks(),r=function(t){return e.addTrack(t.track)},i=function(t){return e.removeTrack(t.track)};n.on("addtrack",r),n.on("removetrack",i),this.addWebVttScript_();var o=function(){return t.trigger("texttrackchange")},s=function(){o();for(var t=0;t<e.length;t++){var n=e[t];n.removeEventListener("cuechange",o),"showing"===n.mode&&n.addEventListener("cuechange",o)}};s(),e.addEventListener("change",s),e.addEventListener("addtrack",s),e.addEventListener("removetrack",s),this.on("dispose",function(){n.off("addtrack",r),n.off("removetrack",i),e.removeEventListener("change",s),e.removeEventListener("addtrack",s),e.removeEventListener("removetrack",s);for(var t=0;t<e.length;t++){e[t].removeEventListener("cuechange",o)}})},e.prototype.addTextTrack=function(t,e,n){if(!t)throw new Error("TextTrack kind is required but was not provided");return Vt(this,t,e,n)},e.prototype.createRemoteTextTrack=function(t){var e=Z(t,{tech:this});return new Tr.remoteTextEl.TrackClass(e)},e.prototype.addRemoteTextTrack=function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments[1],r=this.createRemoteTextTrack(e);return!0!==n&&!1!==n&&(Xe.warn('Calling addRemoteTextTrack without explicitly setting the "manualCleanup" parameter to `true` is deprecated and default to `false` in future version of video.js'),n=!0),this.remoteTextTrackEls().addTrackElement_(r),this.remoteTextTracks().addTrack(r.track),!0!==n&&this.ready(function(){return t.autoRemoteTextTracks_.addTrack(r.track)}),r},e.prototype.removeRemoteTextTrack=function(t){var e=this.remoteTextTrackEls().getTrackElementByTrack_(t);this.remoteTextTrackEls().removeTrackElement_(e),this.remoteTextTracks().removeTrack(t),this.autoRemoteTextTracks_.removeTrack(t)},e.prototype.getVideoPlaybackQuality=function(){return{}},e.prototype.setPoster=function(){},e.prototype.playsinline=function(){},e.prototype.setPlaysinline=function(){},e.prototype.canPlayType=function(){return""},e.canPlayType=function(){return""},e.canPlaySource=function(t,n){return e.canPlayType(t.type)},e.isTech=function(t){return t.prototype instanceof e||t instanceof e||t===e},e.registerTech=function(t,n){if(e.techs_||(e.techs_={}),!e.isTech(n))throw new Error("Tech "+t+" must be a Tech");if(!e.canPlayType)throw new Error("Techs must have a static canPlayType method on them");if(!e.canPlaySource)throw new Error("Techs must have a static canPlaySource method on them");return t=J(t),e.techs_[t]=n,"Tech"!==t&&e.defaultTechOrder_.push(t),n},e.getTech=function(t){if(t)return t=J(t),e.techs_&&e.techs_[t]?e.techs_[t]:oe&&oe.videojs&&oe.videojs[t]?(Xe.warn("The "+t+" tech was added to the videojs object when it should be registered using videojs.registerTech(name, tech)"),oe.videojs[t]):void 0},e}(Tn);Cr.names.forEach(function(t){var e=Cr[t];Rr.prototype[e.getterName]=function(){return this[e.privateName]=this[e.privateName]||new e.ListClass,this[e.privateName]}}),Rr.prototype.featuresVolumeControl=!0,Rr.prototype.featuresFullscreenResize=!1,Rr.prototype.featuresPlaybackRate=!1,Rr.prototype.featuresProgressEvents=!1,Rr.prototype.featuresTimeupdateEvents=!1,Rr.prototype.featuresNativeTextTracks=!1,Rr.withSourceHandlers=function(t){t.registerSourceHandler=function(e,n){var r=t.sourceHandlers;r||(r=t.sourceHandlers=[]),void 0===n&&(n=r.length),r.splice(n,0,e)},t.canPlayType=function(e){for(var n=t.sourceHandlers||[],r=void 0,i=0;i<n.length;i++)if(r=n[i].canPlayType(e))return r;return""},t.selectSourceHandler=function(e,n){for(var r=t.sourceHandlers||[],i=0;i<r.length;i++)if(r[i].canHandleSource(e,n))return r[i];return null},t.canPlaySource=function(e,n){var r=t.selectSourceHandler(e,n);return r?r.canHandleSource(e,n):""},["seekable","duration"].forEach(function(t){var e=this[t];"function"==typeof e&&(this[t]=function(){return this.sourceHandler_&&this.sourceHandler_[t]?this.sourceHandler_[t].apply(this.sourceHandler_,arguments):e.apply(this,arguments)})},t.prototype),t.prototype.setSource=function(e){var n=t.selectSourceHandler(e,this.options_);n||(t.nativeSourceHandler?n=t.nativeSourceHandler:Xe.error("No source hander found for the current source.")),this.disposeSourceHandler(),this.off("dispose",this.disposeSourceHandler),n!==t.nativeSourceHandler&&(this.currentSource_=e),this.sourceHandler_=n.handleSource(e,this,this.options_),this.on("dispose",this.disposeSourceHandler)},t.prototype.disposeSourceHandler=function(){this.currentSource_&&(this.clearTracks(["audio","video"]),this.currentSource_=null),this.cleanupAutoTextTracks(),this.sourceHandler_&&(this.sourceHandler_.dispose&&this.sourceHandler_.dispose(),this.sourceHandler_=null)}},Tn.registerComponent("Tech",Rr),Rr.registerTech("Tech",Rr),Rr.defaultTechOrder_=[];var Br={},Fr={buffered:1,currentTime:1,duration:1,seekable:1,played:1},Vr={setCurrentTime:1},Hr=function t(e){if(Array.isArray(e)){var n=[];e.forEach(function(e){e=t(e),Array.isArray(e)?n=n.concat(e):i(e)&&n.push(e)}),e=n}else e="string"==typeof e&&e.trim()?[{src:e}]:i(e)&&"string"==typeof e.src&&e.src&&e.src.trim()?[e]:[];return e},Ur=function(t){function e(n,r,i){De(this,e);var o=Z({createEl:!1},r),s=Re(this,t.call(this,n,o,i));if(r.playerOptions.sources&&0!==r.playerOptions.sources.length)n.src(r.playerOptions.sources);else for(var a=0,l=r.playerOptions.techOrder;a<l.length;a++){var c=J(l[a]),u=Rr.getTech(c);if(c||(u=Tn.getComponent(c)),u&&u.isSupported()){n.loadTech_(c);break}}return s}return Le(e,t),e}(Tn);Tn.registerComponent("MediaLoader",Ur);var Wr=function(t){function e(n,r){De(this,e);var i=Re(this,t.call(this,n,r));return i.emitTapEvents(),i.enable(),i}return Le(e,t),e.prototype.createEl=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"div",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};n=r({innerHTML:'<span aria-hidden="true" class="vjs-icon-placeholder"></span>',className:this.buildCSSClass(),tabIndex:0},n),"button"===e&&Xe.error("Creating a ClickableComponent with an HTML element of "+e+" is not supported; use a Button instead."),i=r({role:"button","aria-live":"polite"},i),this.tabIndex_=n.tabIndex;var o=t.prototype.createEl.call(this,e,n,i);return this.createControlTextEl(o),o},e.prototype.createControlTextEl=function(t){return this.controlTextEl_=v("span",{className:"vjs-control-text"}),t&&t.appendChild(this.controlTextEl_),this.controlText(this.controlText_,t),this.controlTextEl_},e.prototype.controlText=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.el();if(!t)return this.controlText_||"Need Text";var n=this.localize(t);this.controlText_=t,y(this.controlTextEl_,n),this.nonIconControl||e.setAttribute("title",n)},e.prototype.buildCSSClass=function(){return"vjs-control vjs-button "+t.prototype.buildCSSClass.call(this)},e.prototype.enable=function(){this.enabled_||(this.enabled_=!0,this.removeClass("vjs-disabled"),this.el_.setAttribute("aria-disabled","false"),void 0!==this.tabIndex_&&this.el_.setAttribute("tabIndex",this.tabIndex_),this.on(["tap","click"],this.handleClick),this.on("focus",this.handleFocus),this.on("blur",this.handleBlur))},e.prototype.disable=function(){this.enabled_=!1,this.addClass("vjs-disabled"),this.el_.setAttribute("aria-disabled","true"),void 0!==this.tabIndex_&&this.el_.removeAttribute("tabIndex"),this.off(["tap","click"],this.handleClick),this.off("focus",this.handleFocus),this.off("blur",this.handleBlur)},e.prototype.handleClick=function(t){},e.prototype.handleFocus=function(t){z(ue,"keydown",cn(this,this.handleKeyPress))},e.prototype.handleKeyPress=function(e){32===e.which||13===e.which?(e.preventDefault(),this.trigger("click")):t.prototype.handleKeyPress&&t.prototype.handleKeyPress.call(this,e)},e.prototype.handleBlur=function(t){X(ue,"keydown",cn(this,this.handleKeyPress))},e}(Tn);Tn.registerComponent("ClickableComponent",Wr);var zr=function(t){function e(n,r){De(this,e);var i=Re(this,t.call(this,n,r));return i.update(),n.on("posterchange",cn(i,i.update)),i}return Le(e,t),e.prototype.dispose=function(){this.player().off("posterchange",this.update),t.prototype.dispose.call(this)},e.prototype.createEl=function(){var t=v("div",{className:"vjs-poster",tabIndex:-1});return Oe||(this.fallbackImg_=v("img"),t.appendChild(this.fallbackImg_)),t},e.prototype.update=function(t){var e=this.player().poster();this.setSrc(e),e?this.show():this.hide()},e.prototype.setSrc=function(t){if(this.fallbackImg_)this.fallbackImg_.src=t;else{var e="";t&&(e='url("'+t+'")'),this.el_.style.backgroundImage=e}},e.prototype.handleClick=function(t){this.player_.controls()&&(this.player_.paused()?this.player_.play():this.player_.pause())},e}(Wr);Tn.registerComponent("PosterImage",zr);var Xr={monospace:"monospace",sansSerif:"sans-serif",serif:"serif",monospaceSansSerif:'"Andale Mono", "Lucida Console", monospace',monospaceSerif:'"Courier New", monospace',proportionalSansSerif:"sans-serif",proportionalSerif:"serif",casual:'"Comic Sans MS", Impact, fantasy',script:'"Monotype Corsiva", cursive',smallcaps:'"Andale Mono", "Lucida Console", monospace, sans-serif'},qr=function(t){function e(n,r,i){De(this,e);var o=Re(this,t.call(this,n,r,i));return n.on("loadstart",cn(o,o.toggleDisplay)),n.on("texttrackchange",cn(o,o.updateDisplay)),n.on("loadstart",cn(o,o.preselectTrack)),n.ready(cn(o,function(){if(n.tech_&&n.tech_.featuresNativeTextTracks)return void this.hide();n.on("fullscreenchange",cn(this,this.updateDisplay));for(var t=this.options_.playerOptions.tracks||[],e=0;e<t.length;e++)this.player_.addRemoteTextTrack(t[e],!0);this.preselectTrack()})),o}return Le(e,t),e.prototype.preselectTrack=function(){for(var t={captions:1,subtitles:1},e=this.player_.textTracks(),n=this.player_.cache_.selectedLanguage,r=void 0,i=void 0,o=void 0,s=0;s<e.length;s++){var a=e[s];n&&n.enabled&&n.language===a.language?a.kind===n.kind?o=a:o||(o=a):n&&!n.enabled?(o=null,r=null,i=null):a.default&&("descriptions"!==a.kind||r?a.kind in t&&!i&&(i=a):r=a)}o?o.mode="showing":i?i.mode="showing":r&&(r.mode="showing")},e.prototype.toggleDisplay=function(){this.player_.tech_&&this.player_.tech_.featuresNativeTextTracks?this.hide():this.show()},e.prototype.createEl=function(){return t.prototype.createEl.call(this,"div",{className:"vjs-text-track-display"},{"aria-live":"off","aria-atomic":"true"})},e.prototype.clearDisplay=function(){"function"==typeof oe.WebVTT&&oe.WebVTT.processCues(oe,[],this.el_)},e.prototype.updateDisplay=function(){var t=this.player_.textTracks();this.clearDisplay();for(var e=null,n=null,r=t.length;r--;){var i=t[r];"showing"===i.mode&&("descriptions"===i.kind?e=i:n=i)}n?("off"!==this.getAttribute("aria-live")&&this.setAttribute("aria-live","off"),this.updateForTrack(n)):e&&("assertive"!==this.getAttribute("aria-live")&&this.setAttribute("aria-live","assertive"),this.updateForTrack(e))},e.prototype.updateForTrack=function(t){if("function"==typeof oe.WebVTT&&t.activeCues){for(var e=this.player_.textTrackSettings.getValues(),n=[],r=0;r<t.activeCues.length;r++)n.push(t.activeCues[r]);oe.WebVTT.processCues(oe,n,this.el_);for(var i=n.length;i--;){var o=n[i];if(o){var s=o.displayState;if(e.color&&(s.firstChild.style.color=e.color),e.textOpacity&&Gt(s.firstChild,"color",Yt(e.color||"#fff",e.textOpacity)),e.backgroundColor&&(s.firstChild.style.backgroundColor=e.backgroundColor),e.backgroundOpacity&&Gt(s.firstChild,"backgroundColor",Yt(e.backgroundColor||"#000",e.backgroundOpacity)),e.windowColor&&(e.windowOpacity?Gt(s,"backgroundColor",Yt(e.windowColor,e.windowOpacity)):s.style.backgroundColor=e.windowColor),e.edgeStyle&&("dropshadow"===e.edgeStyle?s.firstChild.style.textShadow="2px 2px 3px #222, 2px 2px 4px #222, 2px 2px 5px #222":"raised"===e.edgeStyle?s.firstChild.style.textShadow="1px 1px #222, 2px 2px #222, 3px 3px #222":"depressed"===e.edgeStyle?s.firstChild.style.textShadow="1px 1px #ccc, 0 1px #ccc, -1px -1px #222, 0 -1px #222":"uniform"===e.edgeStyle&&(s.firstChild.style.textShadow="0 0 4px #222, 0 0 4px #222, 0 0 4px #222, 0 0 4px #222")),e.fontPercent&&1!==e.fontPercent){var a=oe.parseFloat(s.style.fontSize);s.style.fontSize=a*e.fontPercent+"px",s.style.height="auto",s.style.top="auto",s.style.bottom="2px"}e.fontFamily&&"default"!==e.fontFamily&&("small-caps"===e.fontFamily?s.firstChild.style.fontVariant="small-caps":s.firstChild.style.fontFamily=Xr[e.fontFamily])}}}},e}(Tn);Tn.registerComponent("TextTrackDisplay",qr);var Kr=function(t){function e(){return De(this,e),Re(this,t.apply(this,arguments))}return Le(e,t),e.prototype.createEl=function(){return t.prototype.createEl.call(this,"div",{className:"vjs-loading-spinner",dir:"ltr"})},e}(Tn);Tn.registerComponent("LoadingSpinner",Kr);var Yr=function(t){function e(){return De(this,e),Re(this,t.apply(this,arguments))}return Le(e,t),e.prototype.createEl=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};t="button",e=r({innerHTML:'<span aria-hidden="true" class="vjs-icon-placeholder"></span>',className:this.buildCSSClass()},e),n=r({type:"button","aria-live":"polite"},n);var i=Tn.prototype.createEl.call(this,t,e,n);return this.createControlTextEl(i),i},e.prototype.addChild=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this.constructor.name;return Xe.warn("Adding an actionable (user controllable) child to a Button ("+n+") is not supported; use a ClickableComponent instead."),Tn.prototype.addChild.call(this,t,e)},e.prototype.enable=function(){t.prototype.enable.call(this),this.el_.removeAttribute("disabled")},e.prototype.disable=function(){t.prototype.disable.call(this),this.el_.setAttribute("disabled","disabled")},e.prototype.handleKeyPress=function(e){32!==e.which&&13!==e.which&&t.prototype.handleKeyPress.call(this,e)},e}(Wr);Tn.registerComponent("Button",Yr);var Gr=function(t){function e(n,r){De(this,e);var i=Re(this,t.call(this,n,r));return i.mouseused_=!1,i.on("mousedown",i.handleMouseDown),i}return Le(e,t),e.prototype.buildCSSClass=function(){return"vjs-big-play-button"},e.prototype.handleClick=function(t){var e=this.player_.play();if(!(this.mouseused_&&t.clientX&&t.clientY)){var n=this.player_.getChild("controlBar"),r=n&&n.getChild("playToggle");if(!r)return void this.player_.focus();var i=function(){return r.focus()};if(e&&e.then){var o=function(){};e.then(i,o)}else this.setTimeout(i,1)}},e.prototype.handleKeyPress=function(e){this.mouseused_=!1,t.prototype.handleKeyPress.call(this,e)},e.prototype.handleMouseDown=function(t){this.mouseused_=!0},e}(Yr);Gr.prototype.controlText_="Play Video",Tn.registerComponent("BigPlayButton",Gr);var $r=function(t){function e(n,r){De(this,e);var i=Re(this,t.call(this,n,r));return i.controlText(r&&r.controlText||i.localize("Close")),i}return Le(e,t),e.prototype.buildCSSClass=function(){return"vjs-close-button "+t.prototype.buildCSSClass.call(this)},e.prototype.handleClick=function(t){this.trigger({type:"close",bubbles:!1})},e}(Yr);Tn.registerComponent("CloseButton",$r);var Jr=function(t){function e(n,r){De(this,e);var i=Re(this,t.call(this,n,r));return i.on(n,"play",i.handlePlay),i.on(n,"pause",i.handlePause),i.on(n,"ended",i.handleEnded),i}return Le(e,t),e.prototype.buildCSSClass=function(){return"vjs-play-control "+t.prototype.buildCSSClass.call(this)},e.prototype.handleClick=function(t){this.player_.paused()?this.player_.play():this.player_.pause()},e.prototype.handleSeeked=function(t){this.removeClass("vjs-ended"),this.player_.paused()?this.handlePause(t):this.handlePlay(t)},e.prototype.handlePlay=function(t){this.removeClass("vjs-ended"),this.removeClass("vjs-paused"),this.addClass("vjs-playing"),this.controlText("Pause")},e.prototype.handlePause=function(t){this.removeClass("vjs-playing"),this.addClass("vjs-paused"),this.controlText("Play")},e.prototype.handleEnded=function(t){this.removeClass("vjs-playing"),this.addClass("vjs-ended"),this.controlText("Replay"),this.one(this.player_,"seeked",this.handleSeeked)},e}(Yr);Jr.prototype.controlText_="Play",Tn.registerComponent("PlayToggle",Jr);var Qr=function(t){function e(n,r){De(this,e);var i=Re(this,t.call(this,n,r));return i.throttledUpdateContent=un(cn(i,i.updateContent),25),i.on(n,"timeupdate",i.throttledUpdateContent),i}return Le(e,t),e.prototype.createEl=function(e){var n=this.buildCSSClass(),r=t.prototype.createEl.call(this,"div",{className:n+" vjs-time-control vjs-control"});return this.contentEl_=v("div",{className:n+"-display"},{"aria-live":"off"},v("span",{className:"vjs-control-text",textContent:this.localize(this.controlText_)})),this.updateTextNode_(),r.appendChild(this.contentEl_),r},e.prototype.updateTextNode_=function(){if(this.contentEl_){for(;this.contentEl_.firstChild;)this.contentEl_.removeChild(this.contentEl_.firstChild);this.textNode_=ue.createTextNode(this.formattedTime_||"0:00"),this.contentEl_.appendChild(this.textNode_)}},e.prototype.formatTime_=function(t){return $t(t)},e.prototype.updateFormattedTime_=function(t){var e=this.formatTime_(t);e!==this.formattedTime_&&(this.formattedTime_=e,this.requestAnimationFrame(this.updateTextNode_))},e.prototype.updateContent=function(t){},e}(Tn);Qr.prototype.controlText_="Time",
Tn.registerComponent("TimeDisplay",Qr);var Zr=function(t){function e(n,r){De(this,e);var i=Re(this,t.call(this,n,r));return i.on(n,"ended",i.handleEnded),i}return Le(e,t),e.prototype.buildCSSClass=function(){return"vjs-current-time"},e.prototype.updateContent=function(t){var e=this.player_.scrubbing()?this.player_.getCache().currentTime:this.player_.currentTime();this.updateFormattedTime_(e)},e.prototype.handleEnded=function(t){this.player_.duration()&&this.updateFormattedTime_(this.player_.duration())},e}(Qr);Zr.prototype.controlText_="Current Time",Tn.registerComponent("CurrentTimeDisplay",Zr);var ti=function(t){function e(n,r){De(this,e);var i=Re(this,t.call(this,n,r));return i.on(n,"durationchange",i.updateContent),i.on(n,"loadedmetadata",i.throttledUpdateContent),i}return Le(e,t),e.prototype.buildCSSClass=function(){return"vjs-duration"},e.prototype.updateContent=function(t){var e=this.player_.duration();e&&this.duration_!==e&&(this.duration_=e,this.updateFormattedTime_(e))},e}(Qr);ti.prototype.controlText_="Duration Time",Tn.registerComponent("DurationDisplay",ti);var ei=function(t){function e(){return De(this,e),Re(this,t.apply(this,arguments))}return Le(e,t),e.prototype.createEl=function(){return t.prototype.createEl.call(this,"div",{className:"vjs-time-control vjs-time-divider",innerHTML:"<div><span>/</span></div>"})},e}(Tn);Tn.registerComponent("TimeDivider",ei);var ni=function(t){function e(n,r){De(this,e);var i=Re(this,t.call(this,n,r));return i.on(n,"durationchange",i.throttledUpdateContent),i.on(n,"ended",i.handleEnded),i}return Le(e,t),e.prototype.buildCSSClass=function(){return"vjs-remaining-time"},e.prototype.formatTime_=function(e){return"-"+t.prototype.formatTime_.call(this,e)},e.prototype.updateContent=function(t){this.player_.duration()&&(this.player_.remainingTimeDisplay?this.updateFormattedTime_(this.player_.remainingTimeDisplay()):this.updateFormattedTime_(this.player_.remainingTime()))},e.prototype.handleEnded=function(t){this.player_.duration()&&this.updateFormattedTime_(0)},e}(Qr);ni.prototype.controlText_="Remaining Time",Tn.registerComponent("RemainingTimeDisplay",ni);var ri=function(t){function e(n,r){De(this,e);var i=Re(this,t.call(this,n,r));return i.updateShowing(),i.on(i.player(),"durationchange",i.updateShowing),i}return Le(e,t),e.prototype.createEl=function(){var e=t.prototype.createEl.call(this,"div",{className:"vjs-live-control vjs-control"});return this.contentEl_=v("div",{className:"vjs-live-display",innerHTML:'<span class="vjs-control-text">'+this.localize("Stream Type")+"</span>"+this.localize("LIVE")},{"aria-live":"off"}),e.appendChild(this.contentEl_),e},e.prototype.updateShowing=function(t){this.player().duration()===1/0?this.show():this.hide()},e}(Tn);Tn.registerComponent("LiveDisplay",ri);var ii=function(t){function e(n,r){De(this,e);var i=Re(this,t.call(this,n,r));return i.bar=i.getChild(i.options_.barName),i.vertical(!!i.options_.vertical),i.enable(),i}return Le(e,t),e.prototype.enabled=function(){return this.enabled_},e.prototype.enable=function(){this.enabled()||(this.on("mousedown",this.handleMouseDown),this.on("touchstart",this.handleMouseDown),this.on("focus",this.handleFocus),this.on("blur",this.handleBlur),this.on("click",this.handleClick),this.on(this.player_,"controlsvisible",this.update),this.playerEvent&&this.on(this.player_,this.playerEvent,this.update),this.removeClass("disabled"),this.setAttribute("tabindex",0),this.enabled_=!0)},e.prototype.disable=function(){if(this.enabled()){var t=this.bar.el_.ownerDocument;this.off("mousedown",this.handleMouseDown),this.off("touchstart",this.handleMouseDown),this.off("focus",this.handleFocus),this.off("blur",this.handleBlur),this.off("click",this.handleClick),this.off(this.player_,"controlsvisible",this.update),this.off(t,"mousemove",this.handleMouseMove),this.off(t,"mouseup",this.handleMouseUp),this.off(t,"touchmove",this.handleMouseMove),this.off(t,"touchend",this.handleMouseUp),this.removeAttribute("tabindex"),this.addClass("disabled"),this.playerEvent&&this.off(this.player_,this.playerEvent,this.update),this.enabled_=!1}},e.prototype.createEl=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return n.className=n.className+" vjs-slider",n=r({tabIndex:0},n),i=r({role:"slider","aria-valuenow":0,"aria-valuemin":0,"aria-valuemax":100,tabIndex:0},i),t.prototype.createEl.call(this,e,n,i)},e.prototype.handleMouseDown=function(t){var e=this.bar.el_.ownerDocument;t.preventDefault(),x(),this.addClass("vjs-sliding"),this.trigger("slideractive"),this.on(e,"mousemove",this.handleMouseMove),this.on(e,"mouseup",this.handleMouseUp),this.on(e,"touchmove",this.handleMouseMove),this.on(e,"touchend",this.handleMouseUp),this.handleMouseMove(t)},e.prototype.handleMouseMove=function(t){},e.prototype.handleMouseUp=function(){var t=this.bar.el_.ownerDocument;j(),this.removeClass("vjs-sliding"),this.trigger("sliderinactive"),this.off(t,"mousemove",this.handleMouseMove),this.off(t,"mouseup",this.handleMouseUp),this.off(t,"touchmove",this.handleMouseMove),this.off(t,"touchend",this.handleMouseUp),this.update()},e.prototype.update=function(){if(this.el_){var t=this.getPercent(),e=this.bar;if(e){("number"!=typeof t||t!==t||t<0||t===1/0)&&(t=0);var n=(100*t).toFixed(2)+"%",r=e.el().style;return this.vertical()?r.height=n:r.width=n,t}}},e.prototype.calculateDistance=function(t){var e=M(this.el_,t);return this.vertical()?e.y:e.x},e.prototype.handleFocus=function(){this.on(this.bar.el_.ownerDocument,"keydown",this.handleKeyPress)},e.prototype.handleKeyPress=function(t){37===t.which||40===t.which?(t.preventDefault(),this.stepBack()):38!==t.which&&39!==t.which||(t.preventDefault(),this.stepForward())},e.prototype.handleBlur=function(){this.off(this.bar.el_.ownerDocument,"keydown",this.handleKeyPress)},e.prototype.handleClick=function(t){t.stopImmediatePropagation(),t.preventDefault()},e.prototype.vertical=function(t){if(void 0===t)return this.vertical_||!1;this.vertical_=!!t,this.vertical_?this.addClass("vjs-slider-vertical"):this.addClass("vjs-slider-horizontal")},e}(Tn);Tn.registerComponent("Slider",ii);var oi=function(t){function e(n,r){De(this,e);var i=Re(this,t.call(this,n,r));return i.partEls_=[],i.on(n,"progress",i.update),i}return Le(e,t),e.prototype.createEl=function(){return t.prototype.createEl.call(this,"div",{className:"vjs-load-progress",innerHTML:'<span class="vjs-control-text"><span>'+this.localize("Loaded")+"</span>: 0%</span>"})},e.prototype.update=function(t){var e=this.player_.buffered(),n=this.player_.duration(),r=this.player_.bufferedEnd(),i=this.partEls_,o=function(t,e){var n=t/e||0;return 100*(n>=1?1:n)+"%"};this.el_.style.width=o(r,n);for(var s=0;s<e.length;s++){var a=e.start(s),l=e.end(s),c=i[s];c||(c=this.el_.appendChild(v()),i[s]=c),c.style.left=o(a,r),c.style.width=o(l-a,r)}for(var u=i.length;u>e.length;u--)this.el_.removeChild(i[u-1]);i.length=e.length},e}(Tn);Tn.registerComponent("LoadProgressBar",oi);var si=function(t){function e(){return De(this,e),Re(this,t.apply(this,arguments))}return Le(e,t),e.prototype.createEl=function(){return t.prototype.createEl.call(this,"div",{className:"vjs-time-tooltip"})},e.prototype.update=function(t,e,n){var r=A(this.el_),i=A(this.player_.el()),o=t.width*e;if(i&&r){var s=t.left-i.left+o,a=t.width-o+(i.right-t.right),l=r.width/2;s<l?l+=l-s:a<l&&(l=a),l<0?l=0:l>r.width&&(l=r.width),this.el_.style.right="-"+l+"px",y(this.el_,n)}},e}(Tn);Tn.registerComponent("TimeTooltip",si);var ai=function(t){function e(){return De(this,e),Re(this,t.apply(this,arguments))}return Le(e,t),e.prototype.createEl=function(){return t.prototype.createEl.call(this,"div",{className:"vjs-play-progress vjs-slider-bar",innerHTML:'<span class="vjs-control-text"><span>'+this.localize("Progress")+"</span>: 0%</span>"})},e.prototype.update=function(t,e){var n=this;this.rafId_&&this.cancelAnimationFrame(this.rafId_),this.rafId_=this.requestAnimationFrame(function(){var r=n.player_.scrubbing()?n.player_.getCache().currentTime:n.player_.currentTime(),i=$t(r,n.player_.duration()),o=n.getChild("timeTooltip");o&&o.update(t,e,i)})},e}(Tn);ai.prototype.options_={children:[]},je&&!(je>8)||ge||_e||ai.prototype.options_.children.push("timeTooltip"),Tn.registerComponent("PlayProgressBar",ai);var li=function(t){function e(n,r){De(this,e);var i=Re(this,t.call(this,n,r));return i.update=un(cn(i,i.update),25),i}return Le(e,t),e.prototype.createEl=function(){return t.prototype.createEl.call(this,"div",{className:"vjs-mouse-display"})},e.prototype.update=function(t,e){var n=this;this.rafId_&&this.cancelAnimationFrame(this.rafId_),this.rafId_=this.requestAnimationFrame(function(){var r=n.player_.duration(),i=$t(e*r,r);n.el_.style.left=t.width*e+"px",n.getChild("timeTooltip").update(t,e,i)})},e}(Tn);li.prototype.options_={children:["timeTooltip"]},Tn.registerComponent("MouseTimeDisplay",li);var ci=function(t){function e(n,r){De(this,e);var i=Re(this,t.call(this,n,r));return i.update=un(cn(i,i.update),50),i.on(n,"timeupdate",i.update),i.on(n,"ended",i.handleEnded),i}return Le(e,t),e.prototype.createEl=function(){return t.prototype.createEl.call(this,"div",{className:"vjs-progress-holder"},{"aria-label":this.localize("Progress Bar")})},e.prototype.update_=function(t,e){var n=this.player_.duration();this.el_.setAttribute("aria-valuenow",(100*e).toFixed(2)),this.el_.setAttribute("aria-valuetext",this.localize("progress bar timing: currentTime={1} duration={2}",[$t(t,n),$t(n,n)],"{1} of {2}")),this.bar.update(A(this.el_),e)},e.prototype.update=function(e){var n=t.prototype.update.call(this);return this.update_(this.getCurrentTime_(),n),n},e.prototype.getCurrentTime_=function(){return this.player_.scrubbing()?this.player_.getCache().currentTime:this.player_.currentTime()},e.prototype.handleEnded=function(t){this.update_(this.player_.duration(),1)},e.prototype.getPercent=function(){var t=this.getCurrentTime_()/this.player_.duration();return t>=1?1:t},e.prototype.handleMouseDown=function(e){this.player_.scrubbing(!0),this.videoWasPlaying=!this.player_.paused(),this.player_.pause(),t.prototype.handleMouseDown.call(this,e)},e.prototype.handleMouseMove=function(t){var e=this.calculateDistance(t)*this.player_.duration();e===this.player_.duration()&&(e-=.1),this.player_.currentTime(e)},e.prototype.enable=function(){t.prototype.enable.call(this);var e=this.getChild("mouseTimeDisplay");e&&e.show()},e.prototype.disable=function(){t.prototype.disable.call(this);var e=this.getChild("mouseTimeDisplay");e&&e.hide()},e.prototype.handleMouseUp=function(e){t.prototype.handleMouseUp.call(this,e),this.player_.scrubbing(!1),this.videoWasPlaying&&this.player_.play()},e.prototype.stepForward=function(){this.player_.currentTime(this.player_.currentTime()+5)},e.prototype.stepBack=function(){this.player_.currentTime(this.player_.currentTime()-5)},e.prototype.handleAction=function(t){this.player_.paused()?this.player_.play():this.player_.pause()},e.prototype.handleKeyPress=function(e){32===e.which||13===e.which?(e.preventDefault(),this.handleAction(e)):t.prototype.handleKeyPress&&t.prototype.handleKeyPress.call(this,e)},e}(ii);ci.prototype.options_={children:["loadProgressBar","playProgressBar"],barName:"playProgressBar"},je&&!(je>8)||ge||_e||ci.prototype.options_.children.splice(1,0,"mouseTimeDisplay"),ci.prototype.playerEvent="timeupdate",Tn.registerComponent("SeekBar",ci);var ui=function(t){function e(n,r){De(this,e);var i=Re(this,t.call(this,n,r));return i.handleMouseMove=un(cn(i,i.handleMouseMove),25),i.throttledHandleMouseSeek=un(cn(i,i.handleMouseSeek),25),i.enable(),i}return Le(e,t),e.prototype.createEl=function(){return t.prototype.createEl.call(this,"div",{className:"vjs-progress-control vjs-control"})},e.prototype.handleMouseMove=function(t){var e=this.getChild("seekBar"),n=e.getChild("mouseTimeDisplay"),r=e.el(),i=A(r),o=M(r,t).x;o>1?o=1:o<0&&(o=0),n&&n.update(i,o)},e.prototype.handleMouseSeek=function(t){this.getChild("seekBar").handleMouseMove(t)},e.prototype.enabled=function(){return this.enabled_},e.prototype.disable=function(){this.children().forEach(function(t){return t.disable&&t.disable()}),this.enabled()&&(this.off(["mousedown","touchstart"],this.handleMouseDown),this.off(this.el_,"mousemove",this.handleMouseMove),this.handleMouseUp(),this.addClass("disabled"),this.enabled_=!1)},e.prototype.enable=function(){this.children().forEach(function(t){return t.enable&&t.enable()}),this.enabled()||(this.on(["mousedown","touchstart"],this.handleMouseDown),this.on(this.el_,"mousemove",this.handleMouseMove),this.removeClass("disabled"),this.enabled_=!0)},e.prototype.handleMouseDown=function(t){var e=this.el_.ownerDocument;this.on(e,"mousemove",this.throttledHandleMouseSeek),this.on(e,"touchmove",this.throttledHandleMouseSeek),this.on(e,"mouseup",this.handleMouseUp),this.on(e,"touchend",this.handleMouseUp)},e.prototype.handleMouseUp=function(t){var e=this.el_.ownerDocument;this.off(e,"mousemove",this.throttledHandleMouseSeek),this.off(e,"touchmove",this.throttledHandleMouseSeek),this.off(e,"mouseup",this.handleMouseUp),this.off(e,"touchend",this.handleMouseUp)},e}(Tn);ui.prototype.options_={children:["seekBar"]},Tn.registerComponent("ProgressControl",ui);var hi=function(t){function e(n,r){De(this,e);var i=Re(this,t.call(this,n,r));return i.on(n,"fullscreenchange",i.handleFullscreenChange),i}return Le(e,t),e.prototype.buildCSSClass=function(){return"vjs-fullscreen-control "+t.prototype.buildCSSClass.call(this)},e.prototype.handleFullscreenChange=function(t){this.player_.isFullscreen()?this.controlText("Non-Fullscreen"):this.controlText("Fullscreen")},e.prototype.handleClick=function(t){this.player_.isFullscreen()?this.player_.exitFullscreen():this.player_.requestFullscreen()},e}(Yr);hi.prototype.controlText_="Fullscreen",Tn.registerComponent("FullscreenToggle",hi);var pi=function(t,e){e.tech_&&!e.tech_.featuresVolumeControl&&t.addClass("vjs-hidden"),t.on(e,"loadstart",function(){e.tech_.featuresVolumeControl?t.removeClass("vjs-hidden"):t.addClass("vjs-hidden")})},di=function(t){function e(){return De(this,e),Re(this,t.apply(this,arguments))}return Le(e,t),e.prototype.createEl=function(){return t.prototype.createEl.call(this,"div",{className:"vjs-volume-level",innerHTML:'<span class="vjs-control-text"></span>'})},e}(Tn);Tn.registerComponent("VolumeLevel",di);var fi=function(t){function e(n,r){De(this,e);var i=Re(this,t.call(this,n,r));return i.on("slideractive",i.updateLastVolume_),i.on(n,"volumechange",i.updateARIAAttributes),n.ready(function(){return i.updateARIAAttributes()}),i}return Le(e,t),e.prototype.createEl=function(){return t.prototype.createEl.call(this,"div",{className:"vjs-volume-bar vjs-slider-bar"},{"aria-label":this.localize("Volume Level"),"aria-live":"polite"})},e.prototype.handleMouseMove=function(t){this.checkMuted(),this.player_.volume(this.calculateDistance(t))},e.prototype.checkMuted=function(){this.player_.muted()&&this.player_.muted(!1)},e.prototype.getPercent=function(){return this.player_.muted()?0:this.player_.volume()},e.prototype.stepForward=function(){this.checkMuted(),this.player_.volume(this.player_.volume()+.1)},e.prototype.stepBack=function(){this.checkMuted(),this.player_.volume(this.player_.volume()-.1)},e.prototype.updateARIAAttributes=function(t){var e=this.player_.muted()?0:this.volumeAsPercentage_();this.el_.setAttribute("aria-valuenow",e),this.el_.setAttribute("aria-valuetext",e+"%")},e.prototype.volumeAsPercentage_=function(){return Math.round(100*this.player_.volume())},e.prototype.updateLastVolume_=function(){var t=this,e=this.player_.volume();this.one("sliderinactive",function(){0===t.player_.volume()&&t.player_.lastVolume_(e)})},e}(ii);fi.prototype.options_={children:["volumeLevel"],barName:"volumeLevel"},fi.prototype.playerEvent="volumechange",Tn.registerComponent("VolumeBar",fi);var vi=function(t){function e(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};De(this,e),r.vertical=r.vertical||!1,(void 0===r.volumeBar||o(r.volumeBar))&&(r.volumeBar=r.volumeBar||{},r.volumeBar.vertical=r.vertical);var i=Re(this,t.call(this,n,r));return pi(i,n),i.throttledHandleMouseMove=un(cn(i,i.handleMouseMove),25),i.on("mousedown",i.handleMouseDown),i.on("touchstart",i.handleMouseDown),i.on(i.volumeBar,["focus","slideractive"],function(){i.volumeBar.addClass("vjs-slider-active"),i.addClass("vjs-slider-active"),i.trigger("slideractive")}),i.on(i.volumeBar,["blur","sliderinactive"],function(){i.volumeBar.removeClass("vjs-slider-active"),i.removeClass("vjs-slider-active"),i.trigger("sliderinactive")}),i}return Le(e,t),e.prototype.createEl=function(){var e="vjs-volume-horizontal";return this.options_.vertical&&(e="vjs-volume-vertical"),t.prototype.createEl.call(this,"div",{className:"vjs-volume-control vjs-control "+e})},e.prototype.handleMouseDown=function(t){var e=this.el_.ownerDocument;this.on(e,"mousemove",this.throttledHandleMouseMove),this.on(e,"touchmove",this.throttledHandleMouseMove),this.on(e,"mouseup",this.handleMouseUp),this.on(e,"touchend",this.handleMouseUp)},e.prototype.handleMouseUp=function(t){var e=this.el_.ownerDocument;this.off(e,"mousemove",this.throttledHandleMouseMove),this.off(e,"touchmove",this.throttledHandleMouseMove),this.off(e,"mouseup",this.handleMouseUp),this.off(e,"touchend",this.handleMouseUp)},e.prototype.handleMouseMove=function(t){this.volumeBar.handleMouseMove(t)},e}(Tn);vi.prototype.options_={children:["volumeBar"]},Tn.registerComponent("VolumeControl",vi);var yi=function(t){function e(n,r){De(this,e);var i=Re(this,t.call(this,n,r));return pi(i,n),i.on(n,["loadstart","volumechange"],i.update),i}return Le(e,t),e.prototype.buildCSSClass=function(){return"vjs-mute-control "+t.prototype.buildCSSClass.call(this)},e.prototype.handleClick=function(t){var e=this.player_.volume(),n=this.player_.lastVolume_();if(0===e){var r=n<.1?.1:n;this.player_.volume(r),this.player_.muted(!1)}else this.player_.muted(!this.player_.muted())},e.prototype.update=function(t){this.updateIcon_(),this.updateControlText_()},e.prototype.updateIcon_=function(){var t=this.player_.volume(),e=3;0===t||this.player_.muted()?e=0:t<.33?e=1:t<.67&&(e=2);for(var n=0;n<4;n++)b(this.el_,"vjs-vol-"+n);_(this.el_,"vjs-vol-"+e)},e.prototype.updateControlText_=function(){var t=this.player_.muted()||0===this.player_.volume(),e=t?"Unmute":"Mute";this.controlText()!==e&&this.controlText(e)},e}(Yr);yi.prototype.controlText_="Mute",Tn.registerComponent("MuteToggle",yi);var gi=function(t){function e(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};De(this,e),void 0!==r.inline?r.inline=r.inline:r.inline=!0,(void 0===r.volumeControl||o(r.volumeControl))&&(r.volumeControl=r.volumeControl||{},r.volumeControl.vertical=!r.inline);var i=Re(this,t.call(this,n,r));return pi(i,n),i.on(i.volumeControl,["slideractive"],i.sliderActive_),i.on(i.muteToggle,"focus",i.sliderActive_),i.on(i.volumeControl,["sliderinactive"],i.sliderInactive_),i.on(i.muteToggle,"blur",i.sliderInactive_),i}return Le(e,t),e.prototype.sliderActive_=function(){this.addClass("vjs-slider-active")},e.prototype.sliderInactive_=function(){this.removeClass("vjs-slider-active")},e.prototype.createEl=function(){var e="vjs-volume-panel-horizontal";return this.options_.inline||(e="vjs-volume-panel-vertical"),t.prototype.createEl.call(this,"div",{className:"vjs-volume-panel vjs-control "+e})},e}(Tn);gi.prototype.options_={children:["muteToggle","volumeControl"]},Tn.registerComponent("VolumePanel",gi);var mi=function(t){function e(n,r){De(this,e);var i=Re(this,t.call(this,n,r));return r&&(i.menuButton_=r.menuButton),i.focusedChild_=-1,i.on("keydown",i.handleKeyPress),i}return Le(e,t),e.prototype.addItem=function(t){this.addChild(t),t.on("click",cn(this,function(e){this.menuButton_&&(this.menuButton_.unpressButton(),"CaptionSettingsMenuItem"!==t.name()&&this.menuButton_.focus())}))},e.prototype.createEl=function(){var e=this.options_.contentElType||"ul";this.contentEl_=v(e,{className:"vjs-menu-content"}),this.contentEl_.setAttribute("role","menu");var n=t.prototype.createEl.call(this,"div",{append:this.contentEl_,className:"vjs-menu"});return n.appendChild(this.contentEl_),z(n,"click",function(t){t.preventDefault(),t.stopImmediatePropagation()}),n},e.prototype.handleKeyPress=function(t){37===t.which||40===t.which?(t.preventDefault(),this.stepForward()):38!==t.which&&39!==t.which||(t.preventDefault(),this.stepBack())},e.prototype.stepForward=function(){var t=0;void 0!==this.focusedChild_&&(t=this.focusedChild_+1),this.focus(t)},e.prototype.stepBack=function(){var t=0;void 0!==this.focusedChild_&&(t=this.focusedChild_-1),this.focus(t)},e.prototype.focus=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=this.children().slice();e.length&&e[0].className&&/vjs-menu-title/.test(e[0].className)&&e.shift(),e.length>0&&(t<0?t=0:t>=e.length&&(t=e.length-1),this.focusedChild_=t,e[t].el_.focus())},e}(Tn);Tn.registerComponent("Menu",mi);var _i=function(t){function e(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};De(this,e);var i=Re(this,t.call(this,n,r));i.menuButton_=new Yr(n,r),i.menuButton_.controlText(i.controlText_),i.menuButton_.el_.setAttribute("aria-haspopup","true");var o=Yr.prototype.buildCSSClass();return i.menuButton_.el_.className=i.buildCSSClass()+" "+o,i.menuButton_.removeClass("vjs-control"),i.addChild(i.menuButton_),i.update(),i.enabled_=!0,i.on(i.menuButton_,"tap",i.handleClick),i.on(i.menuButton_,"click",i.handleClick),i.on(i.menuButton_,"focus",i.handleFocus),i.on(i.menuButton_,"blur",i.handleBlur),i.on("keydown",i.handleSubmenuKeyPress),i}return Le(e,t),e.prototype.update=function(){var t=this.createMenu();this.menu&&this.removeChild(this.menu),this.menu=t,this.addChild(t),this.buttonPressed_=!1,this.menuButton_.el_.setAttribute("aria-expanded","false"),this.items&&this.items.length<=this.hideThreshold_?this.hide():this.show()},e.prototype.createMenu=function(){var t=new mi(this.player_,{menuButton:this});if(this.hideThreshold_=0,this.options_.title){var e=v("li",{className:"vjs-menu-title",innerHTML:J(this.options_.title),tabIndex:-1});this.hideThreshold_+=1,t.children_.unshift(e),g(e,t.contentEl())}if(this.items=this.createItems(),this.items)for(var n=0;n<this.items.length;n++)t.addItem(this.items[n]);return t},e.prototype.createItems=function(){},e.prototype.createEl=function(){return t.prototype.createEl.call(this,"div",{className:this.buildWrapperCSSClass()},{})},e.prototype.buildWrapperCSSClass=function(){var e="vjs-menu-button";return!0===this.options_.inline?e+="-inline":e+="-popup","vjs-menu-button "+e+" "+Yr.prototype.buildCSSClass()+" "+t.prototype.buildCSSClass.call(this)},e.prototype.buildCSSClass=function(){var e="vjs-menu-button";return!0===this.options_.inline?e+="-inline":e+="-popup","vjs-menu-button "+e+" "+t.prototype.buildCSSClass.call(this)},e.prototype.controlText=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.menuButton_.el();return this.menuButton_.controlText(t,e)},e.prototype.handleClick=function(t){this.one(this.menu.contentEl(),"mouseleave",cn(this,function(t){this.unpressButton(),this.el_.blur()})),this.buttonPressed_?this.unpressButton():this.pressButton()},e.prototype.focus=function(){this.menuButton_.focus()},e.prototype.blur=function(){this.menuButton_.blur()},e.prototype.handleFocus=function(){z(ue,"keydown",cn(this,this.handleKeyPress))},e.prototype.handleBlur=function(){X(ue,"keydown",cn(this,this.handleKeyPress))},e.prototype.handleKeyPress=function(t){27===t.which||9===t.which?(this.buttonPressed_&&this.unpressButton(),9!==t.which&&(t.preventDefault(),this.menuButton_.el_.focus())):38!==t.which&&40!==t.which||this.buttonPressed_||(this.pressButton(),t.preventDefault())},e.prototype.handleSubmenuKeyPress=function(t){27!==t.which&&9!==t.which||(this.buttonPressed_&&this.unpressButton(),9!==t.which&&(t.preventDefault(),this.menuButton_.el_.focus()))},e.prototype.pressButton=function(){this.enabled_&&(this.buttonPressed_=!0,this.menu.lockShowing(),this.menuButton_.el_.setAttribute("aria-expanded","true"),ge||d()||this.menu.focus())},e.prototype.unpressButton=function(){this.enabled_&&(this.buttonPressed_=!1,this.menu.unlockShowing(),this.menuButton_.el_.setAttribute("aria-expanded","false"))},e.prototype.disable=function(){this.unpressButton(),this.enabled_=!1,this.addClass("vjs-disabled"),this.menuButton_.disable()},e.prototype.enable=function(){this.enabled_=!0,this.removeClass("vjs-disabled"),this.menuButton_.enable()},e}(Tn);Tn.registerComponent("MenuButton",_i);var bi=function(t){function e(n,r){De(this,e);var i=r.tracks,o=Re(this,t.call(this,n,r));if(o.items.length<=1&&o.hide(),!i)return Re(o);var s=cn(o,o.update);return i.addEventListener("removetrack",s),i.addEventListener("addtrack",s),o.player_.on("ready",s),o.player_.on("dispose",function(){i.removeEventListener("removetrack",s),i.removeEventListener("addtrack",s)}),o}return Le(e,t),e}(_i);Tn.registerComponent("TrackButton",bi);var Ti=function(t){function e(n,r){De(this,e);var i=Re(this,t.call(this,n,r));return i.selectable=r.selectable,i.selected(r.selected),i.selectable?i.el_.setAttribute("role","menuitemcheckbox"):i.el_.setAttribute("role","menuitem"),i}return Le(e,t),e.prototype.createEl=function(e,n,i){return this.nonIconControl=!0,t.prototype.createEl.call(this,"li",r({className:"vjs-menu-item",innerHTML:'<span class="vjs-menu-item-text">'+this.localize(this.options_.label)+"</span>",tabIndex:-1},n),i)},e.prototype.handleClick=function(t){this.selected(!0)},e.prototype.selected=function(t){this.selectable&&(t?(this.addClass("vjs-selected"),this.el_.setAttribute("aria-checked","true"),this.controlText(", selected")):(this.removeClass("vjs-selected"),this.el_.setAttribute("aria-checked","false"),this.controlText(" ")))},e}(Wr);Tn.registerComponent("MenuItem",Ti);var Ci=function(t){function e(n,r){De(this,e);var i=r.track,o=n.textTracks();r.label=i.label||i.language||"Unknown",r.selected="showing"===i.mode;var s=Re(this,t.call(this,n,r));s.track=i;var a=cn(s,s.handleTracksChange),l=cn(s,s.handleSelectedLanguageChange);if(n.on(["loadstart","texttrackchange"],a),o.addEventListener("change",a),o.addEventListener("selectedlanguagechange",l),s.on("dispose",function(){o.removeEventListener("change",a),o.removeEventListener("selectedlanguagechange",l)}),void 0===o.onchange){var c=void 0;s.on(["tap","click"],function(){if("object"!==Ie(oe.Event))try{c=new oe.Event("change")}catch(t){}c||(c=ue.createEvent("Event"),c.initEvent("change",!0,!0)),o.dispatchEvent(c)})}return s}return Le(e,t),e.prototype.handleClick=function(e){var n=this.track.kind,r=this.track.kinds,i=this.player_.textTracks();if(r||(r=[n]),t.prototype.handleClick.call(this,e),i)for(var o=0;o<i.length;o++){var s=i[o];s===this.track&&r.indexOf(s.kind)>-1?"showing"!==s.mode&&(s.mode="showing"):"disabled"!==s.mode&&(s.mode="disabled")}},e.prototype.handleTracksChange=function(t){this.selected("showing"===this.track.mode)},e.prototype.handleSelectedLanguageChange=function(t){if("showing"===this.track.mode){var e=this.player_.cache_.selectedLanguage;if(e&&e.enabled&&e.language===this.track.language&&e.kind!==this.track.kind)return;this.player_.cache_.selectedLanguage={enabled:!0,language:this.track.language,kind:this.track.kind}}},e}(Ti);Tn.registerComponent("TextTrackMenuItem",Ci);var ki=function(t){function e(n,r){De(this,e),r.track={player:n,kind:r.kind,kinds:r.kinds,default:!1,mode:"disabled"},r.kinds||(r.kinds=[r.kind]),r.label?r.track.label=r.label:r.track.label=r.kinds.join(" and ")+" off",r.selectable=!0;var i=Re(this,t.call(this,n,r));return i.selected(!0),i}return Le(e,t),e.prototype.handleTracksChange=function(t){for(var e=this.player().textTracks(),n=!0,r=0,i=e.length;r<i;r++){var o=e[r];if(this.options_.kinds.indexOf(o.kind)>-1&&"showing"===o.mode){n=!1;break}}this.selected(n)},e.prototype.handleSelectedLanguageChange=function(t){for(var e=this.player().textTracks(),n=!0,r=0,i=e.length;r<i;r++){var o=e[r];if(["captions","descriptions","subtitles"].indexOf(o.kind)>-1&&"showing"===o.mode){n=!1;break}}n&&(this.player_.cache_.selectedLanguage={enabled:!1})},e}(Ci);Tn.registerComponent("OffTextTrackMenuItem",ki);var wi=function(t){function e(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return De(this,e),r.tracks=n.textTracks(),Re(this,t.call(this,n,r))}return Le(e,t),e.prototype.createItems=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Ci,n=void 0;this.label_&&(n=this.label_+" off"),t.push(new ki(this.player_,{kinds:this.kinds_,kind:this.kind_,label:n})),this.hideThreshold_+=1;var r=this.player_.textTracks();Array.isArray(this.kinds_)||(this.kinds_=[this.kind_]);for(var i=0;i<r.length;i++){var o=r[i];if(this.kinds_.indexOf(o.kind)>-1){var s=new e(this.player_,{track:o,selectable:!0});s.addClass("vjs-"+o.kind+"-menu-item"),t.push(s)}}return t},e}(bi);Tn.registerComponent("TextTrackButton",wi);var Ei=function(t){function e(n,r){De(this,e);var i=r.track,o=r.cue,s=n.currentTime();r.selectable=!0,r.label=o.text,r.selected=o.startTime<=s&&s<o.endTime;var a=Re(this,t.call(this,n,r));return a.track=i,a.cue=o,i.addEventListener("cuechange",cn(a,a.update)),a}return Le(e,t),e.prototype.handleClick=function(e){t.prototype.handleClick.call(this),this.player_.currentTime(this.cue.startTime),this.update(this.cue.startTime)},e.prototype.update=function(t){var e=this.cue,n=this.player_.currentTime();this.selected(e.startTime<=n&&n<e.endTime)},e}(Ti);Tn.registerComponent("ChaptersTrackMenuItem",Ei);var Si=function(t){function e(n,r,i){return De(this,e),Re(this,t.call(this,n,r,i))}return Le(e,t),e.prototype.buildCSSClass=function(){return"vjs-chapters-button "+t.prototype.buildCSSClass.call(this)},e.prototype.buildWrapperCSSClass=function(){return"vjs-chapters-button "+t.prototype.buildWrapperCSSClass.call(this)},e.prototype.update=function(e){this.track_&&(!e||"addtrack"!==e.type&&"removetrack"!==e.type)||this.setTrack(this.findChaptersTrack()),t.prototype.update.call(this)},e.prototype.setTrack=function(t){if(this.track_!==t){if(this.updateHandler_||(this.updateHandler_=this.update.bind(this)),this.track_){var e=this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);e&&e.removeEventListener("load",this.updateHandler_),this.track_=null}if(this.track_=t,this.track_){this.track_.mode="hidden";var n=this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);n&&n.addEventListener("load",this.updateHandler_)}}},e.prototype.findChaptersTrack=function(){for(var t=this.player_.textTracks()||[],e=t.length-1;e>=0;e--){var n=t[e];if(n.kind===this.kind_)return n}},e.prototype.getMenuCaption=function(){return this.track_&&this.track_.label?this.track_.label:this.localize(J(this.kind_))},e.prototype.createMenu=function(){return this.options_.title=this.getMenuCaption(),t.prototype.createMenu.call(this)},e.prototype.createItems=function(){var t=[];if(!this.track_)return t;var e=this.track_.cues;if(!e)return t;for(var n=0,r=e.length;n<r;n++){var i=e[n],o=new Ei(this.player_,{track:this.track_,cue:i});t.push(o)}return t},e}(wi);Si.prototype.kind_="chapters",Si.prototype.controlText_="Chapters",Tn.registerComponent("ChaptersButton",Si);var xi=function(t){function e(n,r,i){De(this,e);var o=Re(this,t.call(this,n,r,i)),s=n.textTracks(),a=cn(o,o.handleTracksChange);return s.addEventListener("change",a),o.on("dispose",function(){s.removeEventListener("change",a)}),o}return Le(e,t),e.prototype.handleTracksChange=function(t){for(var e=this.player().textTracks(),n=!1,r=0,i=e.length;r<i;r++){var o=e[r];if(o.kind!==this.kind_&&"showing"===o.mode){n=!0;break}}n?this.disable():this.enable()},e.prototype.buildCSSClass=function(){return"vjs-descriptions-button "+t.prototype.buildCSSClass.call(this)},e.prototype.buildWrapperCSSClass=function(){return"vjs-descriptions-button "+t.prototype.buildWrapperCSSClass.call(this)},e}(wi)
;xi.prototype.kind_="descriptions",xi.prototype.controlText_="Descriptions",Tn.registerComponent("DescriptionsButton",xi);var ji=function(t){function e(n,r,i){return De(this,e),Re(this,t.call(this,n,r,i))}return Le(e,t),e.prototype.buildCSSClass=function(){return"vjs-subtitles-button "+t.prototype.buildCSSClass.call(this)},e.prototype.buildWrapperCSSClass=function(){return"vjs-subtitles-button "+t.prototype.buildWrapperCSSClass.call(this)},e}(wi);ji.prototype.kind_="subtitles",ji.prototype.controlText_="Subtitles",Tn.registerComponent("SubtitlesButton",ji);var Ai=function(t){function e(n,r){De(this,e),r.track={player:n,kind:r.kind,label:r.kind+" settings",selectable:!1,default:!1,mode:"disabled"},r.selectable=!1,r.name="CaptionSettingsMenuItem";var i=Re(this,t.call(this,n,r));return i.addClass("vjs-texttrack-settings"),i.controlText(", opens "+r.kind+" settings dialog"),i}return Le(e,t),e.prototype.handleClick=function(t){this.player().getChild("textTrackSettings").open()},e}(Ci);Tn.registerComponent("CaptionSettingsMenuItem",Ai);var Pi=function(t){function e(n,r,i){return De(this,e),Re(this,t.call(this,n,r,i))}return Le(e,t),e.prototype.buildCSSClass=function(){return"vjs-captions-button "+t.prototype.buildCSSClass.call(this)},e.prototype.buildWrapperCSSClass=function(){return"vjs-captions-button "+t.prototype.buildWrapperCSSClass.call(this)},e.prototype.createItems=function(){var e=[];return this.player().tech_&&this.player().tech_.featuresNativeTextTracks||(e.push(new Ai(this.player_,{kind:this.kind_})),this.hideThreshold_+=1),t.prototype.createItems.call(this,e)},e}(wi);Pi.prototype.kind_="captions",Pi.prototype.controlText_="Captions",Tn.registerComponent("CaptionsButton",Pi);var Mi=function(t){function e(){return De(this,e),Re(this,t.apply(this,arguments))}return Le(e,t),e.prototype.createEl=function(e,n,i){var o='<span class="vjs-menu-item-text">'+this.localize(this.options_.label);return"captions"===this.options_.track.kind&&(o+='\n        <span aria-hidden="true" class="vjs-icon-placeholder"></span>\n        <span class="vjs-control-text"> '+this.localize("Captions")+"</span>\n      "),o+="</span>",t.prototype.createEl.call(this,e,r({innerHTML:o},n),i)},e}(Ci);Tn.registerComponent("SubsCapsMenuItem",Mi);var Oi=function(t){function e(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};De(this,e);var i=Re(this,t.call(this,n,r));return i.label_="subtitles",["en","en-us","en-ca","fr-ca"].indexOf(i.player_.language_)>-1&&(i.label_="captions"),i.menuButton_.controlText(J(i.label_)),i}return Le(e,t),e.prototype.buildCSSClass=function(){return"vjs-subs-caps-button "+t.prototype.buildCSSClass.call(this)},e.prototype.buildWrapperCSSClass=function(){return"vjs-subs-caps-button "+t.prototype.buildWrapperCSSClass.call(this)},e.prototype.createItems=function(){var e=[];return this.player().tech_&&this.player().tech_.featuresNativeTextTracks||(e.push(new Ai(this.player_,{kind:this.label_})),this.hideThreshold_+=1),e=t.prototype.createItems.call(this,e,Mi)},e}(wi);Oi.prototype.kinds_=["captions","subtitles"],Oi.prototype.controlText_="Subtitles",Tn.registerComponent("SubsCapsButton",Oi);var Ni=function(t){function e(n,r){De(this,e);var i=r.track,o=n.audioTracks();r.label=i.label||i.language||"Unknown",r.selected=i.enabled;var s=Re(this,t.call(this,n,r));s.track=i;var a=cn(s,s.handleTracksChange);return o.addEventListener("change",a),s.on("dispose",function(){o.removeEventListener("change",a)}),s}return Le(e,t),e.prototype.handleClick=function(e){var n=this.player_.audioTracks();t.prototype.handleClick.call(this,e);for(var r=0;r<n.length;r++){var i=n[r];i.enabled=i===this.track}},e.prototype.handleTracksChange=function(t){this.selected(this.track.enabled)},e}(Ti);Tn.registerComponent("AudioTrackMenuItem",Ni);var Ii=function(t){function e(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return De(this,e),r.tracks=n.audioTracks(),Re(this,t.call(this,n,r))}return Le(e,t),e.prototype.buildCSSClass=function(){return"vjs-audio-button "+t.prototype.buildCSSClass.call(this)},e.prototype.buildWrapperCSSClass=function(){return"vjs-audio-button "+t.prototype.buildWrapperCSSClass.call(this)},e.prototype.createItems=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.hideThreshold_=1;for(var e=this.player_.audioTracks(),n=0;n<e.length;n++){var r=e[n];t.push(new Ni(this.player_,{track:r,selectable:!0}))}return t},e}(bi);Ii.prototype.controlText_="Audio Track",Tn.registerComponent("AudioTrackButton",Ii);var Di=function(t){function e(n,r){De(this,e);var i=r.rate,o=parseFloat(i,10);r.label=i,r.selected=1===o,r.selectable=!0;var s=Re(this,t.call(this,n,r));return s.label=i,s.rate=o,s.on(n,"ratechange",s.update),s}return Le(e,t),e.prototype.handleClick=function(e){t.prototype.handleClick.call(this),this.player().playbackRate(this.rate)},e.prototype.update=function(t){this.selected(this.player().playbackRate()===this.rate)},e}(Ti);Di.prototype.contentElType="button",Tn.registerComponent("PlaybackRateMenuItem",Di);var Li=function(t){function e(n,r){De(this,e);var i=Re(this,t.call(this,n,r));return i.updateVisibility(),i.updateLabel(),i.on(n,"loadstart",i.updateVisibility),i.on(n,"ratechange",i.updateLabel),i}return Le(e,t),e.prototype.createEl=function(){var e=t.prototype.createEl.call(this);return this.labelEl_=v("div",{className:"vjs-playback-rate-value",innerHTML:"1x"}),e.appendChild(this.labelEl_),e},e.prototype.buildCSSClass=function(){return"vjs-playback-rate "+t.prototype.buildCSSClass.call(this)},e.prototype.buildWrapperCSSClass=function(){return"vjs-playback-rate "+t.prototype.buildWrapperCSSClass.call(this)},e.prototype.createMenu=function(){var t=new mi(this.player()),e=this.playbackRates();if(e)for(var n=e.length-1;n>=0;n--)t.addChild(new Di(this.player(),{rate:e[n]+"x"}));return t},e.prototype.updateARIAAttributes=function(){this.el().setAttribute("aria-valuenow",this.player().playbackRate())},e.prototype.handleClick=function(t){for(var e=this.player().playbackRate(),n=this.playbackRates(),r=n[0],i=0;i<n.length;i++)if(n[i]>e){r=n[i];break}this.player().playbackRate(r)},e.prototype.playbackRates=function(){return this.options_.playbackRates||this.options_.playerOptions&&this.options_.playerOptions.playbackRates},e.prototype.playbackRateSupported=function(){return this.player().tech_&&this.player().tech_.featuresPlaybackRate&&this.playbackRates()&&this.playbackRates().length>0},e.prototype.updateVisibility=function(t){this.playbackRateSupported()?this.removeClass("vjs-hidden"):this.addClass("vjs-hidden")},e.prototype.updateLabel=function(t){this.playbackRateSupported()&&(this.labelEl_.innerHTML=this.player().playbackRate()+"x")},e}(_i);Li.prototype.controlText_="Playback Rate",Tn.registerComponent("PlaybackRateMenuButton",Li);var Ri=function(t){function e(){return De(this,e),Re(this,t.apply(this,arguments))}return Le(e,t),e.prototype.buildCSSClass=function(){return"vjs-spacer "+t.prototype.buildCSSClass.call(this)},e.prototype.createEl=function(){return t.prototype.createEl.call(this,"div",{className:this.buildCSSClass()})},e}(Tn);Tn.registerComponent("Spacer",Ri);var Bi=function(t){function e(){return De(this,e),Re(this,t.apply(this,arguments))}return Le(e,t),e.prototype.buildCSSClass=function(){return"vjs-custom-control-spacer "+t.prototype.buildCSSClass.call(this)},e.prototype.createEl=function(){var e=t.prototype.createEl.call(this,{className:this.buildCSSClass()});return e.innerHTML="&nbsp;",e},e}(Ri);Tn.registerComponent("CustomControlSpacer",Bi);var Fi=function(t){function e(){return De(this,e),Re(this,t.apply(this,arguments))}return Le(e,t),e.prototype.createEl=function(){return t.prototype.createEl.call(this,"div",{className:"vjs-control-bar",dir:"ltr"},{role:"group"})},e}(Tn);Fi.prototype.options_={children:["playToggle","volumePanel","currentTimeDisplay","timeDivider","durationDisplay","progressControl","liveDisplay","remainingTimeDisplay","customControlSpacer","playbackRateMenuButton","chaptersButton","descriptionsButton","subsCapsButton","audioTrackButton","fullscreenToggle"]},Tn.registerComponent("ControlBar",Fi);var Vi=function(t){function e(n,r){De(this,e);var i=Re(this,t.call(this,n,r));return i.on(n,"error",i.open),i}return Le(e,t),e.prototype.buildCSSClass=function(){return"vjs-error-display "+t.prototype.buildCSSClass.call(this)},e.prototype.content=function(){var t=this.player().error();return t?this.localize(t.message):""},e}(Dn);Vi.prototype.options_=Z(Dn.prototype.options_,{pauseOnOpen:!1,fillAlways:!0,temporary:!1,uncloseable:!0}),Tn.registerComponent("ErrorDisplay",Vi);var Hi=["#000","Black"],Ui=["#00F","Blue"],Wi=["#0FF","Cyan"],zi=["#0F0","Green"],Xi=["#F0F","Magenta"],qi=["#F00","Red"],Ki=["#FFF","White"],Yi=["#FF0","Yellow"],Gi=["1","Opaque"],$i=["0.5","Semi-Transparent"],Ji=["0","Transparent"],Qi={backgroundColor:{selector:".vjs-bg-color > select",id:"captions-background-color-%s",label:"Color",options:[Hi,Ki,qi,zi,Ui,Yi,Xi,Wi]},backgroundOpacity:{selector:".vjs-bg-opacity > select",id:"captions-background-opacity-%s",label:"Transparency",options:[Gi,$i,Ji]},color:{selector:".vjs-fg-color > select",id:"captions-foreground-color-%s",label:"Color",options:[Ki,Hi,qi,zi,Ui,Yi,Xi,Wi]},edgeStyle:{selector:".vjs-edge-style > select",id:"%s",label:"Text Edge Style",options:[["none","None"],["raised","Raised"],["depressed","Depressed"],["uniform","Uniform"],["dropshadow","Dropshadow"]]},fontFamily:{selector:".vjs-font-family > select",id:"captions-font-family-%s",label:"Font Family",options:[["proportionalSansSerif","Proportional Sans-Serif"],["monospaceSansSerif","Monospace Sans-Serif"],["proportionalSerif","Proportional Serif"],["monospaceSerif","Monospace Serif"],["casual","Casual"],["script","Script"],["small-caps","Small Caps"]]},fontPercent:{selector:".vjs-font-percent > select",id:"captions-font-size-%s",label:"Font Size",options:[["0.50","50%"],["0.75","75%"],["1.00","100%"],["1.25","125%"],["1.50","150%"],["1.75","175%"],["2.00","200%"],["3.00","300%"],["4.00","400%"]],default:2,parser:function(t){return"1.00"===t?null:Number(t)}},textOpacity:{selector:".vjs-text-opacity > select",id:"captions-foreground-opacity-%s",label:"Transparency",options:[Gi,$i]},windowColor:{selector:".vjs-window-color > select",id:"captions-window-color-%s",label:"Color"},windowOpacity:{selector:".vjs-window-opacity > select",id:"captions-window-opacity-%s",label:"Transparency",options:[Ji,$i,Gi]}};Qi.windowColor.options=Qi.backgroundColor.options;var Zi=function(t){function r(n,i){De(this,r),i.temporary=!1;var o=Re(this,t.call(this,n,i));return o.updateDisplay=cn(o,o.updateDisplay),o.fill(),o.hasBeenOpened_=o.hasBeenFilled_=!0,o.endDialog=v("p",{className:"vjs-control-text",textContent:o.localize("End of dialog window.")}),o.el().appendChild(o.endDialog),o.setDefaults(),void 0===i.persistTextTrackSettings&&(o.options_.persistTextTrackSettings=o.options_.playerOptions.persistTextTrackSettings),o.on(o.$(".vjs-done-button"),"click",function(){o.saveSettings(),o.close()}),o.on(o.$(".vjs-default-button"),"click",function(){o.setDefaults(),o.updateDisplay()}),e(Qi,function(t){o.on(o.$(t.selector),"change",o.updateDisplay)}),o.options_.persistTextTrackSettings&&o.restoreSettings(),o}return Le(r,t),r.prototype.createElSelect_=function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"label",i=Qi[t],o=i.id.replace("%s",this.id_);return["<"+r+' id="'+o+'" class="'+("label"===r?"vjs-label":"")+'">',this.localize(i.label),"</"+r+">",'<select aria-labelledby="'+(""!==n?n+" ":"")+o+'">'].concat(i.options.map(function(t){var r=o+"-"+t[1];return['<option id="'+r+'" value="'+t[0]+'" ','aria-labelledby="'+(""!==n?n+" ":"")+o+" "+r+'">',e.localize(t[1]),"</option>"].join("")})).concat("</select>").join("")},r.prototype.createElFgColor_=function(){var t="captions-text-legend-"+this.id_;return['<fieldset class="vjs-fg-color vjs-track-setting">','<legend id="'+t+'">',this.localize("Text"),"</legend>",this.createElSelect_("color",t),'<span class="vjs-text-opacity vjs-opacity">',this.createElSelect_("textOpacity",t),"</span>","</fieldset>"].join("")},r.prototype.createElBgColor_=function(){var t="captions-background-"+this.id_;return['<fieldset class="vjs-bg-color vjs-track-setting">','<legend id="'+t+'">',this.localize("Background"),"</legend>",this.createElSelect_("backgroundColor",t),'<span class="vjs-bg-opacity vjs-opacity">',this.createElSelect_("backgroundOpacity",t),"</span>","</fieldset>"].join("")},r.prototype.createElWinColor_=function(){var t="captions-window-"+this.id_;return['<fieldset class="vjs-window-color vjs-track-setting">','<legend id="'+t+'">',this.localize("Window"),"</legend>",this.createElSelect_("windowColor",t),'<span class="vjs-window-opacity vjs-opacity">',this.createElSelect_("windowOpacity",t),"</span>","</fieldset>"].join("")},r.prototype.createElColors_=function(){return v("div",{className:"vjs-track-settings-colors",innerHTML:[this.createElFgColor_(),this.createElBgColor_(),this.createElWinColor_()].join("")})},r.prototype.createElFont_=function(){return v("div",{className:'vjs-track-settings-font">',innerHTML:['<fieldset class="vjs-font-percent vjs-track-setting">',this.createElSelect_("fontPercent","","legend"),"</fieldset>",'<fieldset class="vjs-edge-style vjs-track-setting">',this.createElSelect_("edgeStyle","","legend"),"</fieldset>",'<fieldset class="vjs-font-family vjs-track-setting">',this.createElSelect_("fontFamily","","legend"),"</fieldset>"].join("")})},r.prototype.createElControls_=function(){var t=this.localize("restore all settings to the default values");return v("div",{className:"vjs-track-settings-controls",innerHTML:['<button class="vjs-default-button" title="'+t+'">',this.localize("Reset"),'<span class="vjs-control-text"> '+t+"</span>","</button>",'<button class="vjs-done-button">'+this.localize("Done")+"</button>"].join("")})},r.prototype.content=function(){return[this.createElColors_(),this.createElFont_(),this.createElControls_()]},r.prototype.label=function(){return this.localize("Caption Settings Dialog")},r.prototype.description=function(){return this.localize("Beginning of dialog window. Escape will cancel and close the window.")},r.prototype.buildCSSClass=function(){return t.prototype.buildCSSClass.call(this)+" vjs-text-track-settings"},r.prototype.getValues=function(){var t=this;return n(Qi,function(e,n,r){var i=Qt(t.$(n.selector),n.parser);return void 0!==i&&(e[r]=i),e},{})},r.prototype.setValues=function(t){var n=this;e(Qi,function(e,r){Zt(n.$(e.selector),t[r],e.parser)})},r.prototype.setDefaults=function(){var t=this;e(Qi,function(e){var n=e.hasOwnProperty("default")?e.default:0;t.$(e.selector).selectedIndex=n})},r.prototype.restoreSettings=function(){var t=void 0;try{t=JSON.parse(oe.localStorage.getItem("vjs-text-track-settings"))}catch(t){Xe.warn(t)}t&&this.setValues(t)},r.prototype.saveSettings=function(){if(this.options_.persistTextTrackSettings){var t=this.getValues();try{Object.keys(t).length?oe.localStorage.setItem("vjs-text-track-settings",JSON.stringify(t)):oe.localStorage.removeItem("vjs-text-track-settings")}catch(t){Xe.warn(t)}}},r.prototype.updateDisplay=function(){var t=this.player_.getChild("textTrackDisplay");t&&t.updateDisplay()},r.prototype.conditionalBlur_=function(){this.previouslyActiveEl_=null,this.off(ue,"keydown",this.handleKeyDown);var t=this.player_.controlBar,e=t&&t.subsCapsButton,n=t&&t.captionsButton;e?e.focus():n&&n.focus()},r}(Dn);Tn.registerComponent("TextTrackSettings",Zi);var to=Be(["Text Tracks are being loaded from another origin but the crossorigin attribute isn't used.\n            This may prevent text tracks from loading."],["Text Tracks are being loaded from another origin but the crossorigin attribute isn't used.\n            This may prevent text tracks from loading."]),eo=function(t){function e(n,r){De(this,e);var i=Re(this,t.call(this,n,r)),o=n.source,s=!1;if(o&&(i.el_.currentSrc!==o.src||n.tag&&3===n.tag.initNetworkState_)?i.setSource(o):i.handleLateInit_(i.el_),i.el_.hasChildNodes()){for(var a=i.el_.childNodes,l=a.length,c=[];l--;){var u=a[l];"track"===u.nodeName.toLowerCase()&&(i.featuresNativeTextTracks?(i.remoteTextTrackEls().addTrackElement_(u),i.remoteTextTracks().addTrack(u.track),i.textTracks().addTrack(u.track),s||i.el_.hasAttribute("crossorigin")||!Zn(u.src)||(s=!0)):c.push(u))}for(var h=0;h<c.length;h++)i.el_.removeChild(c[h])}return i.proxyNativeTracks_(),i.featuresNativeTextTracks&&s&&Xe.warn(qe(to)),i.restoreMetadataTracksInIOSNativePlayer_(),(Me||ve||Ce)&&!0===n.nativeControlsForTouch&&i.setControls(!0),i.proxyWebkitFullscreen_(),i.triggerReady(),i}return Le(e,t),e.prototype.dispose=function(){e.disposeMediaElement(this.el_),t.prototype.dispose.call(this)},e.prototype.restoreMetadataTracksInIOSNativePlayer_=function(){var t=this.textTracks(),e=void 0,n=function(){e=[];for(var n=0;n<t.length;n++){var r=t[n];"metadata"===r.kind&&e.push({track:r,storedMode:r.mode})}};n(),t.addEventListener("change",n);var r=function n(){for(var r=0;r<e.length;r++){var i=e[r];"disabled"===i.track.mode&&i.track.mode!==i.storedMode&&(i.track.mode=i.storedMode)}t.removeEventListener("change",n)};this.on("webkitbeginfullscreen",function(){t.removeEventListener("change",n),t.removeEventListener("change",r),t.addEventListener("change",r)}),this.on("webkitendfullscreen",function(){t.removeEventListener("change",n),t.addEventListener("change",n),t.removeEventListener("change",r)})},e.prototype.proxyNativeTracks_=function(){var t=this;br.names.forEach(function(e){var n=br[e],r=t.el()[n.getterName],i=t[n.getterName]();if(t["featuresNative"+n.capitalName+"Tracks"]&&r&&r.addEventListener){var o={change:function(t){i.trigger({type:"change",target:i,currentTarget:i,srcElement:i})},addtrack:function(t){i.addTrack(t.track)},removetrack:function(t){i.removeTrack(t.track)}},s=function(){for(var t=[],e=0;e<i.length;e++){for(var n=!1,o=0;o<r.length;o++)if(r[o]===i[e]){n=!0;break}n||t.push(i[e])}for(;t.length;)i.removeTrack(t.shift())};Object.keys(o).forEach(function(e){var n=o[e];r.addEventListener(e,n),t.on("dispose",function(t){return r.removeEventListener(e,n)})}),t.on("loadstart",s),t.on("dispose",function(e){return t.off("loadstart",s)})}})},e.prototype.createEl=function(){var t=this.options_.tag;if(!t||!this.options_.playerElIngest&&!this.movingMediaElementInDOM){if(t){var n=t.cloneNode(!0);t.parentNode&&t.parentNode.insertBefore(n,t),e.disposeMediaElement(t),t=n}else{t=ue.createElement("video");var i=this.options_.tag&&k(this.options_.tag),o=Z({},i);Me&&!0===this.options_.nativeControlsForTouch||delete o.controls,C(t,r(o,{id:this.options_.techId,class:"vjs-tech"}))}t.playerId=this.options_.playerId}void 0!==this.options_.preload&&E(t,"preload",this.options_.preload);for(var s=["loop","muted","playsinline","autoplay"],a=s.length-1;a>=0;a--){var l=s[a],c=this.options_[l];void 0!==c&&(c?E(t,l,l):S(t,l),t[l]=c)}return t},e.prototype.handleLateInit_=function(t){if(0!==t.networkState&&3!==t.networkState){if(0===t.readyState){var e=!1,n=function(){e=!0};this.on("loadstart",n);var r=function(){e||this.trigger("loadstart")};return this.on("loadedmetadata",r),void this.ready(function(){this.off("loadstart",n),this.off("loadedmetadata",r),e||this.trigger("loadstart")})}var i=["loadstart"];i.push("loadedmetadata"),t.readyState>=2&&i.push("loadeddata"),t.readyState>=3&&i.push("canplay"),t.readyState>=4&&i.push("canplaythrough"),this.ready(function(){i.forEach(function(t){this.trigger(t)},this)})}},e.prototype.setCurrentTime=function(t){try{this.el_.currentTime=t}catch(t){Xe(t,"Video is not ready. (Video.js)")}},e.prototype.duration=function(){var t=this;if(this.el_.duration===1/0&&_e&&Ee&&0===this.el_.currentTime){var e=function e(){t.el_.currentTime>0&&(t.el_.duration===1/0&&t.trigger("durationchange"),t.off("timeupdate",e))};return this.on("timeupdate",e),NaN}return this.el_.duration||NaN},e.prototype.width=function(){return this.el_.offsetWidth},e.prototype.height=function(){return this.el_.offsetHeight},e.prototype.proxyWebkitFullscreen_=function(){var t=this;if("webkitDisplayingFullscreen"in this.el_){var e=function(){this.trigger("fullscreenchange",{isFullscreen:!1})},n=function(){"webkitPresentationMode"in this.el_&&"picture-in-picture"!==this.el_.webkitPresentationMode&&(this.one("webkitendfullscreen",e),this.trigger("fullscreenchange",{isFullscreen:!0}))};this.on("webkitbeginfullscreen",n),this.on("dispose",function(){t.off("webkitbeginfullscreen",n),t.off("webkitendfullscreen",e)})}},e.prototype.supportsFullScreen=function(){if("function"==typeof this.el_.webkitEnterFullScreen){var t=oe.navigator&&oe.navigator.userAgent||"";if(/Android/.test(t)||!/Chrome|Mac OS X 10.5/.test(t))return!0}return!1},e.prototype.enterFullScreen=function(){var t=this.el_;t.paused&&t.networkState<=t.HAVE_METADATA?(this.el_.play(),this.setTimeout(function(){t.pause(),t.webkitEnterFullScreen()},0)):t.webkitEnterFullScreen()},e.prototype.exitFullScreen=function(){this.el_.webkitExitFullScreen()},e.prototype.src=function(t){if(void 0===t)return this.el_.src;this.setSrc(t)},e.prototype.reset=function(){e.resetMediaElement(this.el_)},e.prototype.currentSrc=function(){return this.currentSource_?this.currentSource_.src:this.el_.currentSrc},e.prototype.setControls=function(t){this.el_.controls=!!t},e.prototype.addTextTrack=function(e,n,r){return this.featuresNativeTextTracks?this.el_.addTextTrack(e,n,r):t.prototype.addTextTrack.call(this,e,n,r)},e.prototype.createRemoteTextTrack=function(e){if(!this.featuresNativeTextTracks)return t.prototype.createRemoteTextTrack.call(this,e);var n=ue.createElement("track");return e.kind&&(n.kind=e.kind),e.label&&(n.label=e.label),(e.language||e.srclang)&&(n.srclang=e.language||e.srclang),e.default&&(n.default=e.default),e.id&&(n.id=e.id),e.src&&(n.src=e.src),n},e.prototype.addRemoteTextTrack=function(e,n){var r=t.prototype.addRemoteTextTrack.call(this,e,n);return this.featuresNativeTextTracks&&this.el().appendChild(r),r},e.prototype.removeRemoteTextTrack=function(e){if(t.prototype.removeRemoteTextTrack.call(this,e),this.featuresNativeTextTracks)for(var n=this.$$("track"),r=n.length;r--;)e!==n[r]&&e!==n[r].track||this.el().removeChild(n[r])},e.prototype.getVideoPlaybackQuality=function(){if("function"==typeof this.el().getVideoPlaybackQuality)return this.el().getVideoPlaybackQuality();var t={};return void 0!==this.el().webkitDroppedFrameCount&&void 0!==this.el().webkitDecodedFrameCount&&(t.droppedVideoFrames=this.el().webkitDroppedFrameCount,t.totalVideoFrames=this.el().webkitDecodedFrameCount),oe.performance&&"function"==typeof oe.performance.now?t.creationTime=oe.performance.now():oe.performance&&oe.performance.timing&&"number"==typeof oe.performance.timing.navigationStart&&(t.creationTime=oe.Date.now()-oe.performance.timing.navigationStart),t},e}(Rr);if(h()){eo.TEST_VID=ue.createElement("video");var no=ue.createElement("track");no.kind="captions",no.srclang="en",no.label="English",eo.TEST_VID.appendChild(no)}eo.isSupported=function(){try{eo.TEST_VID.volume=.5}catch(t){return!1}return!(!eo.TEST_VID||!eo.TEST_VID.canPlayType)},eo.canPlayType=function(t){return eo.TEST_VID.canPlayType(t)},eo.canPlaySource=function(t,e){return eo.canPlayType(t.type)},eo.canControlVolume=function(){try{var t=eo.TEST_VID.volume;return eo.TEST_VID.volume=t/2+.1,t!==eo.TEST_VID.volume}catch(t){return!1}},eo.canControlPlaybackRate=function(){if(_e&&Ee&&Se<58)return!1;try{var t=eo.TEST_VID.playbackRate;return eo.TEST_VID.playbackRate=t/2+.1,t!==eo.TEST_VID.playbackRate}catch(t){return!1}},eo.supportsNativeTextTracks=function(){return Pe},eo.supportsNativeVideoTracks=function(){return!(!eo.TEST_VID||!eo.TEST_VID.videoTracks)},eo.supportsNativeAudioTracks=function(){return!(!eo.TEST_VID||!eo.TEST_VID.audioTracks)},eo.Events=["loadstart","suspend","abort","error","emptied","stalled","loadedmetadata","loadeddata","canplay","canplaythrough","playing","waiting","seeking","seeked","ended","durationchange","timeupdate","progress","play","pause","ratechange","resize","volumechange"],eo.prototype.featuresVolumeControl=eo.canControlVolume(),eo.prototype.featuresPlaybackRate=eo.canControlPlaybackRate(),eo.prototype.movingMediaElementInDOM=!ge,eo.prototype.featuresFullscreenResize=!0,eo.prototype.featuresProgressEvents=!0,eo.prototype.featuresTimeupdateEvents=!0,eo.prototype.featuresNativeTextTracks=eo.supportsNativeTextTracks(),eo.prototype.featuresNativeVideoTracks=eo.supportsNativeVideoTracks(),eo.prototype.featuresNativeAudioTracks=eo.supportsNativeAudioTracks();var ro=eo.TEST_VID&&eo.TEST_VID.constructor.prototype.canPlayType,io=/^application\/(?:x-|vnd\.apple\.)mpegurl/i,oo=/^video\/mp4/i;eo.patchCanPlayType=function(){be>=4&&!ke?eo.TEST_VID.constructor.prototype.canPlayType=function(t){return t&&io.test(t)?"maybe":ro.call(this,t)}:Te&&(eo.TEST_VID.constructor.prototype.canPlayType=function(t){return t&&oo.test(t)?"maybe":ro.call(this,t)})},eo.unpatchCanPlayType=function(){var t=eo.TEST_VID.constructor.prototype.canPlayType;return eo.TEST_VID.constructor.prototype.canPlayType=ro,t},eo.patchCanPlayType(),eo.disposeMediaElement=function(t){if(t){for(t.parentNode&&t.parentNode.removeChild(t);t.hasChildNodes();)t.removeChild(t.firstChild);t.removeAttribute("src"),"function"==typeof t.load&&function(){try{t.load()}catch(t){}}()}},eo.resetMediaElement=function(t){if(t){for(var e=t.querySelectorAll("source"),n=e.length;n--;)t.removeChild(e[n]);t.removeAttribute("src"),"function"==typeof t.load&&function(){try{t.load()}catch(t){}}()}},["muted","defaultMuted","autoplay","controls","loop","playsinline"].forEach(function(t){eo.prototype[t]=function(){return this.el_[t]||this.el_.hasAttribute(t)}}),["muted","defaultMuted","autoplay","loop","playsinline"].forEach(function(t){eo.prototype["set"+J(t)]=function(e){this.el_[t]=e,e?this.el_.setAttribute(t,t):this.el_.removeAttribute(t)}}),["paused","currentTime","buffered","volume","poster","preload","error","seeking","seekable","ended","playbackRate","defaultPlaybackRate","played","networkState","readyState","videoWidth","videoHeight"].forEach(function(t){eo.prototype[t]=function(){return this.el_[t]}}),["volume","src","poster","preload","playbackRate","defaultPlaybackRate"].forEach(function(t){eo.prototype["set"+J(t)]=function(e){this.el_[t]=e}}),["pause","load","play"].forEach(function(t){eo.prototype[t]=function(){return this.el_[t]()}}),Rr.withSourceHandlers(eo),eo.nativeSourceHandler={},eo.nativeSourceHandler.canPlayType=function(t){try{return eo.TEST_VID.canPlayType(t)}catch(t){return""}},eo.nativeSourceHandler.canHandleSource=function(t,e){if(t.type)return eo.nativeSourceHandler.canPlayType(t.type);if(t.src){var n=Qn(t.src);return eo.nativeSourceHandler.canPlayType("video/"+n)}return""},eo.nativeSourceHandler.handleSource=function(t,e,n){e.setSrc(t.src)},eo.nativeSourceHandler.dispose=function(){},eo.registerSourceHandler(eo.nativeSourceHandler),Rr.registerTech("Html5",eo);var so=Be(["\n        Using the tech directly can be dangerous. I hope you know what you're doing.\n        See https://github.com/videojs/video.js/issues/2617 for more info.\n      "],["\n        Using the tech directly can be dangerous. I hope you know what you're doing.\n        See https://github.com/videojs/video.js/issues/2617 for more info.\n      "]),ao=["progress","abort","suspend","emptied","stalled","loadedmetadata","loadeddata","timeupdate","ratechange","resize","volumechange","texttrackchange"],lo=function(t){function e(n,i,o){if(De(this,e),n.id=n.id||"vjs_video_"+R(),i=r(e.getTagSettings(n),i),i.initChildren=!1,i.createEl=!1,i.reportTouchActivity=!1,!i.language)if("function"==typeof n.closest){var s=n.closest("[lang]");s&&(i.language=s.getAttribute("lang"))}else for(var a=n;a&&1===a.nodeType;){if(k(a).hasOwnProperty("lang")){i.language=a.getAttribute("lang");break}a=a.parentNode}var l=Re(this,t.call(this,null,i,o));if(l.isReady_=!1,l.hasStarted_=!1,!l.options_||!l.options_.techOrder||!l.options_.techOrder.length)throw new Error("No techOrder specified. Did you overwrite videojs.options instead of just changing the properties you want to override?");if(l.tag=n,l.tagAttributes=n&&k(n),l.language(l.options_.language),i.languages){var c={};Object.getOwnPropertyNames(i.languages).forEach(function(t){c[t.toLowerCase()]=i.languages[t]}),l.languages_=c}else l.languages_=e.prototype.options_.languages;l.cache_={},l.poster_=i.poster||"",l.controls_=!!i.controls,l.cache_.lastVolume=1,n.controls=!1,l.scrubbing_=!1,l.el_=l.createEl(),G(l,{eventBusKey:"el_"});var u=Z(l.options_);if(i.plugins){var h=i.plugins;Object.keys(h).forEach(function(t){if("function"!=typeof this[t])throw new Error('plugin "'+t+'" does not exist');this[t](h[t])},l)}l.options_.playerOptions=u,l.middleware_=[],l.initChildren(),l.isAudio("audio"===n.nodeName.toLowerCase()),l.controls()?l.addClass("vjs-controls-enabled"):l.addClass("vjs-controls-disabled"),l.el_.setAttribute("role","region"),l.isAudio()?l.el_.setAttribute("aria-label",l.localize("Audio Player")):l.el_.setAttribute("aria-label",l.localize("Video Player")),l.isAudio()&&l.addClass("vjs-audio"),l.flexNotSupported_()&&l.addClass("vjs-no-flex"),ge||l.addClass("vjs-workinghover"),e.players[l.id_]=l;var p=ne.split(".")[0];return l.addClass("vjs-v"+p),l.userActive(!0),l.reportUserActivity(),l.listenForUserActivity_(),l.on("fullscreenchange",l.handleFullscreenChange_),l.on("stageclick",l.handleStageClick_),l.changingSrc_=!1,l}return Le(e,t),e.prototype.dispose=function(){this.trigger("dispose"),this.off("dispose"),this.styleEl_&&this.styleEl_.parentNode&&this.styleEl_.parentNode.removeChild(this.styleEl_),e.players[this.id_]=null,this.tag&&this.tag.player&&(this.tag.player=null),this.el_&&this.el_.player&&(this.el_.player=null),this.tech_&&this.tech_.dispose(),t.prototype.dispose.call(this)},e.prototype.createEl=function(){var e=this.tag,n=void 0,r=this.playerElIngest_=e.parentNode&&e.parentNode.hasAttribute&&e.parentNode.hasAttribute("data-vjs-player");n=this.el_=r?e.parentNode:t.prototype.createEl.call(this,"div"),e.setAttribute("tabindex","-1"),e.removeAttribute("width"),e.removeAttribute("height");var i=k(e);if(Object.getOwnPropertyNames(i).forEach(function(t){"class"===t?n.className+=" "+i[t]:n.setAttribute(t,i[t])}),e.playerId=e.id,e.id+="_html5_api",e.className="vjs-tech",e.player=n.player=this,this.addClass("vjs-paused"),!0!==oe.VIDEOJS_NO_DYNAMIC_STYLE){this.styleEl_=an("vjs-styles-dimensions");var o=Ye(".vjs-styles-defaults"),s=Ye("head");s.insertBefore(this.styleEl_,o?o.nextSibling:s.firstChild)}this.width(this.options_.width),this.height(this.options_.height),this.fluid(this.options_.fluid),this.aspectRatio(this.options_.aspectRatio);for(var a=e.getElementsByTagName("a"),l=0;l<a.length;l++){var c=a.item(l);_(c,"vjs-hidden"),c.setAttribute("hidden","hidden")}return e.initNetworkState_=e.networkState,e.parentNode&&!r&&e.parentNode.insertBefore(n,e),g(e,n),this.children_.unshift(e),this.el_.setAttribute("lang",this.language_),this.el_=n,n},e.prototype.width=function(t){return this.dimension("width",t)},e.prototype.height=function(t){return this.dimension("height",t)},e.prototype.dimension=function(t,e){var n=t+"_";if(void 0===e)return this[n]||0;if(""===e)return this[n]=void 0,void this.updateStyleEl_();var r=parseFloat(e);if(isNaN(r))return void Xe.error('Improper value "'+e+'" supplied for for '+t);this[n]=r,this.updateStyleEl_()},e.prototype.fluid=function(t){if(void 0===t)return!!this.fluid_;this.fluid_=!!t,t?this.addClass("vjs-fluid"):this.removeClass("vjs-fluid"),this.updateStyleEl_()},e.prototype.aspectRatio=function(t){if(void 0===t)return this.aspectRatio_;if(!/^\d+\:\d+$/.test(t))throw new Error("Improper value supplied for aspect ratio. The format should be width:height, for example 16:9.");this.aspectRatio_=t,this.fluid(!0),this.updateStyleEl_()},e.prototype.updateStyleEl_=function(){if(!0===oe.VIDEOJS_NO_DYNAMIC_STYLE){
var t="number"==typeof this.width_?this.width_:this.options_.width,e="number"==typeof this.height_?this.height_:this.options_.height,n=this.tech_&&this.tech_.el();return void(n&&(t>=0&&(n.width=t),e>=0&&(n.height=e)))}var r=void 0,i=void 0,o=void 0,s=void 0;o=void 0!==this.aspectRatio_&&"auto"!==this.aspectRatio_?this.aspectRatio_:this.videoWidth()>0?this.videoWidth()+":"+this.videoHeight():"16:9";var a=o.split(":"),l=a[1]/a[0];r=void 0!==this.width_?this.width_:void 0!==this.height_?this.height_/l:this.videoWidth()||300,i=void 0!==this.height_?this.height_:r*l,s=/^[^a-zA-Z]/.test(this.id())?"dimensions-"+this.id():this.id()+"-dimensions",this.addClass(s),ln(this.styleEl_,"\n      ."+s+" {\n        width: "+r+"px;\n        height: "+i+"px;\n      }\n\n      ."+s+".vjs-fluid {\n        padding-top: "+100*l+"%;\n      }\n    ")},e.prototype.loadTech_=function(t,e){var n=this;this.tech_&&this.unloadTech_();var i=J(t),o=t.charAt(0).toLowerCase()+t.slice(1);"Html5"!==i&&this.tag&&(Rr.getTech("Html5").disposeMediaElement(this.tag),this.tag.player=null,this.tag=null),this.techName_=i,this.isReady_=!1;var s={source:e,nativeControlsForTouch:this.options_.nativeControlsForTouch,playerId:this.id(),techId:this.id()+"_"+i+"_api",autoplay:this.options_.autoplay,playsinline:this.options_.playsinline,preload:this.options_.preload,loop:this.options_.loop,muted:this.options_.muted,poster:this.poster(),language:this.language(),playerElIngest:this.playerElIngest_||!1,"vtt.js":this.options_["vtt.js"]};Cr.names.forEach(function(t){var e=Cr[t];s[e.getterName]=n[e.privateName]}),r(s,this.options_[i]),r(s,this.options_[o]),r(s,this.options_[t.toLowerCase()]),this.tag&&(s.tag=this.tag),e&&e.src===this.cache_.src&&this.cache_.currentTime>0&&(s.startTime=this.cache_.currentTime);var a=Rr.getTech(t);if(!a)throw new Error("No Tech named '"+i+"' exists! '"+i+"' should be registered using videojs.registerTech()'");this.tech_=new a(s),this.tech_.ready(cn(this,this.handleTechReady_),!0),Nn.jsonToTextTracks(this.textTracksJson_||[],this.tech_),ao.forEach(function(t){n.on(n.tech_,t,n["handleTech"+J(t)+"_"])}),this.on(this.tech_,"loadstart",this.handleTechLoadStart_),this.on(this.tech_,"waiting",this.handleTechWaiting_),this.on(this.tech_,"canplay",this.handleTechCanPlay_),this.on(this.tech_,"canplaythrough",this.handleTechCanPlayThrough_),this.on(this.tech_,"playing",this.handleTechPlaying_),this.on(this.tech_,"ended",this.handleTechEnded_),this.on(this.tech_,"seeking",this.handleTechSeeking_),this.on(this.tech_,"seeked",this.handleTechSeeked_),this.on(this.tech_,"play",this.handleTechPlay_),this.on(this.tech_,"firstplay",this.handleTechFirstPlay_),this.on(this.tech_,"pause",this.handleTechPause_),this.on(this.tech_,"durationchange",this.handleTechDurationChange_),this.on(this.tech_,"fullscreenchange",this.handleTechFullscreenChange_),this.on(this.tech_,"error",this.handleTechError_),this.on(this.tech_,"loadedmetadata",this.updateStyleEl_),this.on(this.tech_,"posterchange",this.handleTechPosterChange_),this.on(this.tech_,"textdata",this.handleTechTextData_),this.usingNativeControls(this.techGet_("controls")),this.controls()&&!this.usingNativeControls()&&this.addTechControlsListeners_(),this.tech_.el().parentNode===this.el()||"Html5"===i&&this.tag||g(this.tech_.el(),this.el()),this.tag&&(this.tag.player=null,this.tag=null)},e.prototype.unloadTech_=function(){var t=this;Cr.names.forEach(function(e){var n=Cr[e];t[n.privateName]=t[n.getterName]()}),this.textTracksJson_=Nn.textTracksToJson(this.tech_),this.isReady_=!1,this.tech_.dispose(),this.tech_=!1},e.prototype.tech=function(t){return void 0===t&&Xe.warn(qe(so)),this.tech_},e.prototype.addTechControlsListeners_=function(){this.removeTechControlsListeners_(),this.on(this.tech_,"mousedown",this.handleTechClick_),this.on(this.tech_,"touchstart",this.handleTechTouchStart_),this.on(this.tech_,"touchmove",this.handleTechTouchMove_),this.on(this.tech_,"touchend",this.handleTechTouchEnd_),this.on(this.tech_,"tap",this.handleTechTap_)},e.prototype.removeTechControlsListeners_=function(){this.off(this.tech_,"tap",this.handleTechTap_),this.off(this.tech_,"touchstart",this.handleTechTouchStart_),this.off(this.tech_,"touchmove",this.handleTechTouchMove_),this.off(this.tech_,"touchend",this.handleTechTouchEnd_),this.off(this.tech_,"mousedown",this.handleTechClick_)},e.prototype.handleTechReady_=function(){if(this.triggerReady(),this.cache_.volume&&this.techCall_("setVolume",this.cache_.volume),this.handleTechPosterChange_(),this.handleTechDurationChange_(),(this.src()||this.currentSrc())&&this.tag&&this.options_.autoplay&&this.paused())try{delete this.tag.poster}catch(t){Xe("deleting tag.poster throws in some browsers",t)}},e.prototype.handleTechLoadStart_=function(){this.removeClass("vjs-ended"),this.removeClass("vjs-seeking"),this.error(null),this.paused()?(this.hasStarted(!1),this.trigger("loadstart")):(this.trigger("loadstart"),this.trigger("firstplay"))},e.prototype.hasStarted=function(t){if(void 0===t)return this.hasStarted_;t!==this.hasStarted_&&(this.hasStarted_=t,this.hasStarted_?(this.addClass("vjs-has-started"),this.trigger("firstplay")):this.removeClass("vjs-has-started"))},e.prototype.handleTechPlay_=function(){this.removeClass("vjs-ended"),this.removeClass("vjs-paused"),this.addClass("vjs-playing"),this.hasStarted(!0),this.trigger("play")},e.prototype.handleTechWaiting_=function(){var t=this;this.addClass("vjs-waiting"),this.trigger("waiting"),this.one("timeupdate",function(){return t.removeClass("vjs-waiting")})},e.prototype.handleTechCanPlay_=function(){this.removeClass("vjs-waiting"),this.trigger("canplay")},e.prototype.handleTechCanPlayThrough_=function(){this.removeClass("vjs-waiting"),this.trigger("canplaythrough")},e.prototype.handleTechPlaying_=function(){this.removeClass("vjs-waiting"),this.trigger("playing")},e.prototype.handleTechSeeking_=function(){this.addClass("vjs-seeking"),this.trigger("seeking")},e.prototype.handleTechSeeked_=function(){this.removeClass("vjs-seeking"),this.trigger("seeked")},e.prototype.handleTechFirstPlay_=function(){this.options_.starttime&&(Xe.warn("Passing the `starttime` option to the player will be deprecated in 6.0"),this.currentTime(this.options_.starttime)),this.addClass("vjs-has-started"),this.trigger("firstplay")},e.prototype.handleTechPause_=function(){this.removeClass("vjs-playing"),this.addClass("vjs-paused"),this.trigger("pause")},e.prototype.handleTechEnded_=function(){this.addClass("vjs-ended"),this.options_.loop?(this.currentTime(0),this.play()):this.paused()||this.pause(),this.trigger("ended")},e.prototype.handleTechDurationChange_=function(){this.duration(this.techGet_("duration"))},e.prototype.handleTechClick_=function(t){0===t.button&&this.controls()&&(this.paused()?this.play():this.pause())},e.prototype.handleTechTap_=function(){this.userActive(!this.userActive())},e.prototype.handleTechTouchStart_=function(){this.userWasActive=this.userActive()},e.prototype.handleTechTouchMove_=function(){this.userWasActive&&this.reportUserActivity()},e.prototype.handleTechTouchEnd_=function(t){t.preventDefault()},e.prototype.handleFullscreenChange_=function(){this.isFullscreen()?this.addClass("vjs-fullscreen"):this.removeClass("vjs-fullscreen")},e.prototype.handleStageClick_=function(){this.reportUserActivity()},e.prototype.handleTechFullscreenChange_=function(t,e){e&&this.isFullscreen(e.isFullscreen),this.trigger("fullscreenchange")},e.prototype.handleTechError_=function(){var t=this.tech_.error();this.error(t)},e.prototype.handleTechTextData_=function(){var t=null;arguments.length>1&&(t=arguments[1]),this.trigger("textdata",t)},e.prototype.getCache=function(){return this.cache_},e.prototype.techCall_=function(t,e){this.ready(function(){if(t in Vr)return Xt(this.middleware_,this.tech_,t,e);try{this.tech_&&this.tech_[t](e)}catch(t){throw Xe(t),t}},!0)},e.prototype.techGet_=function(t){if(this.tech_&&this.tech_.isReady_){if(t in Fr)return zt(this.middleware_,this.tech_,t);try{return this.tech_[t]()}catch(e){if(void 0===this.tech_[t])throw Xe("Video.js: "+t+" method not defined for "+this.techName_+" playback technology.",e),e;if("TypeError"===e.name)throw Xe("Video.js: "+t+" unavailable on "+this.techName_+" playback technology element.",e),this.tech_.isReady_=!1,e;throw Xe(e),e}}},e.prototype.play=function(){if(this.changingSrc_)this.ready(function(){var t=this.techGet_("play");void 0!==t&&"function"==typeof t.then&&t.then(null,function(t){})});else{if(this.isReady_&&(this.src()||this.currentSrc()))return this.techGet_("play");this.ready(function(){this.tech_.one("loadstart",function(){var t=this.play();void 0!==t&&"function"==typeof t.then&&t.then(null,function(t){})})})}},e.prototype.pause=function(){this.techCall_("pause")},e.prototype.paused=function(){return!1!==this.techGet_("paused")},e.prototype.played=function(){return this.techGet_("played")||rt(0,0)},e.prototype.scrubbing=function(t){if(void 0===t)return this.scrubbing_;this.scrubbing_=!!t,t?this.addClass("vjs-scrubbing"):this.removeClass("vjs-scrubbing")},e.prototype.currentTime=function(t){return void 0!==t?void this.techCall_("setCurrentTime",t):(this.cache_.currentTime=this.techGet_("currentTime")||0,this.cache_.currentTime)},e.prototype.duration=function(t){if(void 0===t)return void 0!==this.cache_.duration?this.cache_.duration:NaN;t=parseFloat(t),t<0&&(t=1/0),t!==this.cache_.duration&&(this.cache_.duration=t,t===1/0?this.addClass("vjs-live"):this.removeClass("vjs-live"),this.trigger("durationchange"))},e.prototype.remainingTime=function(){return this.duration()-this.currentTime()},e.prototype.remainingTimeDisplay=function(){return Math.floor(this.duration())-Math.floor(this.currentTime())},e.prototype.buffered=function(){var t=this.techGet_("buffered");return t&&t.length||(t=rt(0,0)),t},e.prototype.bufferedPercent=function(){return it(this.buffered(),this.duration())},e.prototype.bufferedEnd=function(){var t=this.buffered(),e=this.duration(),n=t.end(t.length-1);return n>e&&(n=e),n},e.prototype.volume=function(t){var e=void 0;return void 0!==t?(e=Math.max(0,Math.min(1,parseFloat(t))),this.cache_.volume=e,this.techCall_("setVolume",e),void(e>0&&this.lastVolume_(e))):(e=parseFloat(this.techGet_("volume")),isNaN(e)?1:e)},e.prototype.muted=function(t){return void 0!==t?void this.techCall_("setMuted",t):this.techGet_("muted")||!1},e.prototype.defaultMuted=function(t){return void 0!==t?this.techCall_("setDefaultMuted",t):this.techGet_("defaultMuted")||!1},e.prototype.lastVolume_=function(t){return void 0!==t&&0!==t?void(this.cache_.lastVolume=t):this.cache_.lastVolume},e.prototype.supportsFullScreen=function(){return this.techGet_("supportsFullScreen")||!1},e.prototype.isFullscreen=function(t){return void 0!==t?void(this.isFullscreen_=!!t):!!this.isFullscreen_},e.prototype.requestFullscreen=function(){var t=Cn;this.isFullscreen(!0),t.requestFullscreen?(z(ue,t.fullscreenchange,cn(this,function e(n){this.isFullscreen(ue[t.fullscreenElement]),!1===this.isFullscreen()&&X(ue,t.fullscreenchange,e),this.trigger("fullscreenchange")})),this.el_[t.requestFullscreen]()):this.tech_.supportsFullScreen()?this.techCall_("enterFullScreen"):(this.enterFullWindow(),this.trigger("fullscreenchange"))},e.prototype.exitFullscreen=function(){var t=Cn;this.isFullscreen(!1),t.requestFullscreen?ue[t.exitFullscreen]():this.tech_.supportsFullScreen()?this.techCall_("exitFullScreen"):(this.exitFullWindow(),this.trigger("fullscreenchange"))},e.prototype.enterFullWindow=function(){this.isFullWindow=!0,this.docOrigOverflow=ue.documentElement.style.overflow,z(ue,"keydown",cn(this,this.fullWindowOnEscKey)),ue.documentElement.style.overflow="hidden",_(ue.body,"vjs-full-window"),this.trigger("enterFullWindow")},e.prototype.fullWindowOnEscKey=function(t){27===t.keyCode&&(!0===this.isFullscreen()?this.exitFullscreen():this.exitFullWindow())},e.prototype.exitFullWindow=function(){this.isFullWindow=!1,X(ue,"keydown",this.fullWindowOnEscKey),ue.documentElement.style.overflow=this.docOrigOverflow,b(ue.body,"vjs-full-window"),this.trigger("exitFullWindow")},e.prototype.canPlayType=function(t){for(var e=void 0,n=0,r=this.options_.techOrder;n<r.length;n++){var i=r[n],o=Rr.getTech(i);if(o||(o=Tn.getComponent(i)),o){if(o.isSupported()&&(e=o.canPlayType(t)))return e}else Xe.error('The "'+i+'" tech is undefined. Skipped browser support check for that tech.')}return""},e.prototype.selectSource=function(t){var e=this,n=this.options_.techOrder.map(function(t){return[t,Rr.getTech(t)]}).filter(function(t){var e=t[0],n=t[1];return n?n.isSupported():(Xe.error('The "'+e+'" tech is undefined. Skipped browser support check for that tech.'),!1)}),r=function(t,e,n){var r=void 0;return t.some(function(t){return e.some(function(e){if(r=n(t,e))return!0})}),r},i=function(t,n){var r=t[0];if(t[1].canPlaySource(n,e.options_[r.toLowerCase()]))return{source:n,tech:r}};return(this.options_.sourceOrder?r(t,n,function(t){return function(e,n){return t(n,e)}}(i)):r(n,t,i))||!1},e.prototype.src=function(t){var e=this;if(void 0===t)return this.cache_.src||"";var n=Hr(t);if(!n.length)return void this.setTimeout(function(){this.error({code:4,message:this.localize(this.options_.notSupportedMessage)})},0);this.cache_.sources=n,this.changingSrc_=!0,this.cache_.source=n[0],Ut(this,n[0],function(t,r){if(e.middleware_=r,e.src_(t))return n.length>1?e.src(n.slice(1)):(e.setTimeout(function(){this.error({code:4,message:this.localize(this.options_.notSupportedMessage)})},0),void e.triggerReady());e.changingSrc_=!1,e.cache_.src=t.src,Wt(r,e.tech_)})},e.prototype.src_=function(t){var e=this.selectSource([t]);return!e||(Q(e.tech,this.techName_)?(this.ready(function(){this.tech_.constructor.prototype.hasOwnProperty("setSource")?this.techCall_("setSource",t):this.techCall_("src",t.src),"auto"===this.options_.preload&&this.load()},!0),!1):(this.changingSrc_=!0,this.loadTech_(e.tech,e.source),!1))},e.prototype.load=function(){this.techCall_("load")},e.prototype.reset=function(){this.loadTech_(this.options_.techOrder[0],null),this.techCall_("reset")},e.prototype.currentSources=function(){var t=this.currentSource(),e=[];return 0!==Object.keys(t).length&&e.push(t),this.cache_.sources||e},e.prototype.currentSource=function(){return this.cache_.source||{}},e.prototype.currentSrc=function(){return this.currentSource()&&this.currentSource().src||""},e.prototype.currentType=function(){return this.currentSource()&&this.currentSource().type||""},e.prototype.preload=function(t){return void 0!==t?(this.techCall_("setPreload",t),void(this.options_.preload=t)):this.techGet_("preload")},e.prototype.autoplay=function(t){return void 0!==t?(this.techCall_("setAutoplay",t),void(this.options_.autoplay=t)):this.techGet_("autoplay",t)},e.prototype.playsinline=function(t){return void 0!==t?(this.techCall_("setPlaysinline",t),this.options_.playsinline=t,this):this.techGet_("playsinline")},e.prototype.loop=function(t){return void 0!==t?(this.techCall_("setLoop",t),void(this.options_.loop=t)):this.techGet_("loop")},e.prototype.poster=function(t){if(void 0===t)return this.poster_;t||(t=""),this.poster_=t,this.techCall_("setPoster",t),this.trigger("posterchange")},e.prototype.handleTechPosterChange_=function(){!this.poster_&&this.tech_&&this.tech_.poster&&(this.poster_=this.tech_.poster()||"",this.trigger("posterchange"))},e.prototype.controls=function(t){return void 0!==t?(t=!!t,void(this.controls_!==t&&(this.controls_=t,this.usingNativeControls()&&this.techCall_("setControls",t),t?(this.removeClass("vjs-controls-disabled"),this.addClass("vjs-controls-enabled"),this.trigger("controlsenabled"),this.usingNativeControls()||this.addTechControlsListeners_()):(this.removeClass("vjs-controls-enabled"),this.addClass("vjs-controls-disabled"),this.trigger("controlsdisabled"),this.usingNativeControls()||this.removeTechControlsListeners_())))):!!this.controls_},e.prototype.usingNativeControls=function(t){return void 0!==t?(t=!!t,void(this.usingNativeControls_!==t&&(this.usingNativeControls_=t,t?(this.addClass("vjs-using-native-controls"),this.trigger("usingnativecontrols")):(this.removeClass("vjs-using-native-controls"),this.trigger("usingcustomcontrols"))))):!!this.usingNativeControls_},e.prototype.error=function(t){return void 0===t?this.error_||null:null===t?(this.error_=t,this.removeClass("vjs-error"),void(this.errorDisplay&&this.errorDisplay.close())):(this.error_=new ot(t),this.addClass("vjs-error"),Xe.error("(CODE:"+this.error_.code+" "+ot.errorTypes[this.error_.code]+")",this.error_.message,this.error_),void this.trigger("error"))},e.prototype.reportUserActivity=function(t){this.userActivity_=!0},e.prototype.userActive=function(t){return void 0!==t?void((t=!!t)!==this.userActive_&&(this.userActive_=t,t?(this.userActivity_=!0,this.removeClass("vjs-user-inactive"),this.addClass("vjs-user-active"),this.trigger("useractive")):(this.userActivity_=!1,this.tech_&&this.tech_.one("mousemove",function(t){t.stopPropagation(),t.preventDefault()}),this.removeClass("vjs-user-active"),this.addClass("vjs-user-inactive"),this.trigger("userinactive")))):this.userActive_},e.prototype.listenForUserActivity_=function(){var t=void 0,e=void 0,n=void 0,r=cn(this,this.reportUserActivity),i=function(t){t.screenX===e&&t.screenY===n||(e=t.screenX,n=t.screenY,r())},o=function(){r(),this.clearInterval(t),t=this.setInterval(r,250)},s=function(e){r(),this.clearInterval(t)};this.on("mousedown",o),this.on("mousemove",i),this.on("mouseup",s),this.on("keydown",r),this.on("keyup",r);var a=void 0;this.setInterval(function(){if(this.userActivity_){this.userActivity_=!1,this.userActive(!0),this.clearTimeout(a);var t=this.options_.inactivityTimeout;t>0&&(a=this.setTimeout(function(){this.userActivity_||this.userActive(!1)},t))}},250)},e.prototype.playbackRate=function(t){return void 0!==t?void this.techCall_("setPlaybackRate",t):this.tech_&&this.tech_.featuresPlaybackRate?this.techGet_("playbackRate"):1},e.prototype.defaultPlaybackRate=function(t){return void 0!==t?this.techCall_("setDefaultPlaybackRate",t):this.tech_&&this.tech_.featuresPlaybackRate?this.techGet_("defaultPlaybackRate"):1},e.prototype.isAudio=function(t){return void 0!==t?void(this.isAudio_=!!t):!!this.isAudio_},e.prototype.addTextTrack=function(t,e,n){if(this.tech_)return this.tech_.addTextTrack(t,e,n)},e.prototype.addRemoteTextTrack=function(t,e){if(this.tech_)return this.tech_.addRemoteTextTrack(t,e)},e.prototype.removeRemoteTextTrack=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.track,n=void 0===e?arguments[0]:e;if(this.tech_)return this.tech_.removeRemoteTextTrack(n)},e.prototype.getVideoPlaybackQuality=function(){return this.techGet_("getVideoPlaybackQuality")},e.prototype.videoWidth=function(){return this.tech_&&this.tech_.videoWidth&&this.tech_.videoWidth()||0},e.prototype.videoHeight=function(){return this.tech_&&this.tech_.videoHeight&&this.tech_.videoHeight()||0},e.prototype.language=function(t){if(void 0===t)return this.language_;this.language_=String(t).toLowerCase()},e.prototype.languages=function(){return Z(e.prototype.options_.languages,this.languages_)},e.prototype.toJSON=function(){var t=Z(this.options_),e=t.tracks;t.tracks=[];for(var n=0;n<e.length;n++){var r=e[n];r=Z(r),r.player=void 0,t.tracks[n]=r}return t},e.prototype.createModal=function(t,e){var n=this;e=e||{},e.content=t||"";var r=new Dn(this,e);return this.addChild(r),r.on("dispose",function(){n.removeChild(r)}),r.open(),r},e.getTagSettings=function(t){var e={sources:[],tracks:[]},n=k(t),i=n["data-setup"];if(m(t,"vjs-fluid")&&(n.fluid=!0),null!==i){var o=An(i||"{}"),s=o[0],a=o[1];s&&Xe.error(s),r(n,a)}if(r(e,n),t.hasChildNodes())for(var l=t.childNodes,c=0,u=l.length;c<u;c++){var h=l[c],p=h.nodeName.toLowerCase();"source"===p?e.sources.push(k(h)):"track"===p&&e.tracks.push(k(h))}return e},e.prototype.flexNotSupported_=function(){var t=ue.createElement("i");return!("flexBasis"in t.style||"webkitFlexBasis"in t.style||"mozFlexBasis"in t.style||"msFlexBasis"in t.style||"msFlexOrder"in t.style)},e}(Tn);Cr.names.forEach(function(t){var e=Cr[t];lo.prototype[e.getterName]=function(){return this.tech_?this.tech_[e.getterName]():(this[e.privateName]=this[e.privateName]||new e.ListClass,this[e.privateName])}}),lo.players={};var co=oe.navigator;lo.prototype.options_={techOrder:Rr.defaultTechOrder_,html5:{},flash:{},inactivityTimeout:2e3,playbackRates:[],children:["mediaLoader","posterImage","textTrackDisplay","loadingSpinner","bigPlayButton","controlBar","errorDisplay","textTrackSettings"],language:co&&(co.languages&&co.languages[0]||co.userLanguage||co.language)||"en",languages:{},notSupportedMessage:"No compatible source was found for this media."},["ended","seeking","seekable","networkState","readyState"].forEach(function(t){lo.prototype[t]=function(){return this.techGet_(t)}}),ao.forEach(function(t){lo.prototype["handleTech"+J(t)+"_"]=function(){return this.trigger(t)}}),Tn.registerComponent("Player",lo);var uo={},ho=function(t){return uo.hasOwnProperty(t)},po=function(t){return ho(t)?uo[t]:void 0},fo=function(t,e){t.activePlugins_=t.activePlugins_||{},t.activePlugins_[e]=!0},vo=function(t,e,n){var r=(n?"before":"")+"pluginsetup";t.trigger(r,e),t.trigger(r+":"+e.name,e)},yo=function(t,e){var n=function(){vo(this,{name:t,plugin:e,instance:null},!0);var n=e.apply(this,arguments);return fo(this,t),vo(this,{name:t,plugin:e,instance:n}),n};return Object.keys(e).forEach(function(t){n[t]=e[t]}),n},go=function(t,e){return e.prototype.name=t,function(){vo(this,{name:t,plugin:e,instance:null},!0);for(var n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];var o=new(Function.prototype.bind.apply(e,[null].concat([this].concat(r))));return this[t]=function(){return o},vo(this,o.getEventHash()),o}},mo=function(){function t(e){if(De(this,t),this.constructor===t)throw new Error("Plugin must be sub-classed; not directly instantiated.");this.player=e,G(this),delete this.trigger,$(this,this.constructor.defaultState),fo(e,this.name),this.dispose=cn(this,this.dispose),e.on("dispose",this.dispose)}return t.prototype.getEventHash=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t.name=this.name,t.plugin=this.constructor,t.instance=this,t},t.prototype.trigger=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return q(this.eventBusEl_,t,this.getEventHash(e))},t.prototype.handleStateChanged=function(t){},t.prototype.dispose=function(){var t=this.name,e=this.player;this.trigger("dispose"),this.off(),e.off("dispose",this.dispose),e.activePlugins_[t]=!1,this.player=this.state=null,e[t]=go(t,uo[t])},t.isBasic=function(e){var n="string"==typeof e?po(e):e;return"function"==typeof n&&!t.prototype.isPrototypeOf(n.prototype)},t.registerPlugin=function(e,n){if("string"!=typeof e)throw new Error('Illegal plugin name, "'+e+'", must be a string, was '+(void 0===e?"undefined":Ie(e))+".");if(ho(e))Xe.warn('A plugin named "'+e+'" already exists. You may want to avoid re-registering plugins!');else if(lo.prototype.hasOwnProperty(e))throw new Error('Illegal plugin name, "'+e+'", cannot share a name with an existing player method!');if("function"!=typeof n)throw new Error('Illegal plugin for "'+e+'", must be a function, was '+(void 0===n?"undefined":Ie(n))+".");return uo[e]=n,"plugin"!==e&&(t.isBasic(n)?lo.prototype[e]=yo(e,n):lo.prototype[e]=go(e,n)),n},t.deregisterPlugin=function(t){if("plugin"===t)throw new Error("Cannot de-register base plugin.");ho(t)&&(delete uo[t],delete lo.prototype[t])},t.getPlugins=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object.keys(uo),e=void 0;return t.forEach(function(t){var n=po(t);n&&(e=e||{},e[t]=n)}),e},t.getPluginVersion=function(t){var e=po(t);return e&&e.VERSION||""},t}();mo.getPlugin=po,mo.BASE_PLUGIN_NAME="plugin",mo.registerPlugin("plugin",mo),lo.prototype.usingPlugin=function(t){return!!this.activePlugins_&&!0===this.activePlugins_[t]},lo.prototype.hasPlugin=function(t){return!!ho(t)};var _o=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":Ie(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(t.super_=e)},bo=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=function(){t.apply(this,arguments)},r={};"object"===(void 0===e?"undefined":Ie(e))?(e.constructor!==Object.prototype.constructor&&(n=e.constructor),r=e):"function"==typeof e&&(n=e),_o(n,t);for(var i in r)r.hasOwnProperty(i)&&(n.prototype[i]=r[i]);return n};if("undefined"==typeof HTMLVideoElement&&h()&&(ue.createElement("video"),ue.createElement("audio"),ue.createElement("track")),te.hooks_={},te.hooks=function(t,e){return te.hooks_[t]=te.hooks_[t]||[],e&&(te.hooks_[t]=te.hooks_[t].concat(e)),te.hooks_[t]},te.hook=function(t,e){te.hooks(t,e)},te.hookOnce=function(t,e){te.hooks(t,[].concat(e).map(function(e){return function n(){te.removeHook(t,n),e.apply(void 0,arguments)}}))},te.removeHook=function(t,e){var n=te.hooks(t).indexOf(e);return!(n<=-1)&&(te.hooks_[t]=te.hooks_[t].slice(),te.hooks_[t].splice(n,1),!0)},!0!==oe.VIDEOJS_NO_DYNAMIC_STYLE&&h()){var To=Ye(".vjs-styles-defaults");if(!To){To=an("vjs-styles-defaults");var Co=Ye("head");Co&&Co.insertBefore(To,Co.firstChild),ln(To,"\n      .video-js {\n        width: 300px;\n        height: 150px;\n      }\n\n      .vjs-fluid {\n        padding-top: 56.25%\n      }\n    ")}}return Y(1,te),te.VERSION=ne,te.options=lo.prototype.options_,te.getPlayers=function(){return lo.players},te.players=lo.players,te.getComponent=Tn.getComponent,te.registerComponent=function(t,e){Rr.isTech(e)&&Xe.warn("The "+t+" tech was registered as a component. It should instead be registered using videojs.registerTech(name, tech)"),Tn.registerComponent.call(Tn,t,e)},te.getTech=Rr.getTech,te.registerTech=Rr.registerTech,te.use=Ht,te.browser=Ne,te.TOUCH_ENABLED=Me,te.extend=bo,te.mergeOptions=Z,te.bind=cn,te.registerPlugin=mo.registerPlugin,te.plugin=function(t,e){return Xe.warn("videojs.plugin() is deprecated; use videojs.registerPlugin() instead"),mo.registerPlugin(t,e)},te.getPlugins=mo.getPlugins,te.getPlugin=mo.getPlugin,te.getPluginVersion=mo.getPluginVersion,te.addLanguage=function(t,e){var n;return t=(""+t).toLowerCase(),te.options.languages=Z(te.options.languages,(n={},n[t]=e,n)),te.options.languages[t]},te.log=Xe,te.createTimeRange=te.createTimeRanges=rt,te.formatTime=$t,te.parseUrl=$n,te.isCrossOrigin=Zn,te.EventTarget=hn,te.on=z,te.one=K,te.off=X,te.trigger=q,te.xhr=hr,te.TextTrack=fr,te.AudioTrack=vr,te.VideoTrack=yr,["isEl","isTextNode","createEl","hasClass","addClass","removeClass","toggleClass","setAttributes","getAttributes","emptyEl","appendContent","insertContent"].forEach(function(t){te[t]=function(){return Xe.warn("videojs."+t+"() is deprecated; use videojs.dom."+t+"() instead"),$e[t].apply(null,arguments)}}),te.computedStyle=a,te.dom=$e,te.url=tr,te});

/**
 * videojs-record
 * @version 2.0.5
 * @see https://github.com/collab-project/videojs-record
 * @copyright 2014-2017 Collab
 * @license MIT
 */
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}(g.videojs || (g.videojs = {})).record = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @file animation-display.js
 * @since 2.0.0
 */

var Component = videojs.getComponent('Component');

/**
 * Image for displaying animated GIF image.
 *
 * @class
 * @augments videojs.Component
*/

var AnimationDisplay = function (_Component) {
  _inherits(AnimationDisplay, _Component);

  function AnimationDisplay() {
    _classCallCheck(this, AnimationDisplay);

    return _possibleConstructorReturn(this, (AnimationDisplay.__proto__ || Object.getPrototypeOf(AnimationDisplay)).apply(this, arguments));
  }

  _createClass(AnimationDisplay, [{
    key: 'createEl',


    /**
     * Create the `AnimationDisplay`s DOM element.
     *
     * @return {Element}
     *         The dom element that gets created.
     */
    value: function createEl() {
      return _get(AnimationDisplay.prototype.__proto__ || Object.getPrototypeOf(AnimationDisplay.prototype), 'createEl', this).call(this, 'div', {
        className: 'vjs-animation-display',
        innerHTML: '<img />'
      });
    }
  }]);

  return AnimationDisplay;
}(Component);

Component.registerComponent('AnimationDisplay', AnimationDisplay);

exports.default = AnimationDisplay;
},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @file camera-button.js
 * @since 2.0.0
 */

var Button = videojs.getComponent('Button');
var Component = videojs.getComponent('Component');

/**
 * Button to toggle between create and retry snapshot image.
 *
 * @class
 * @augments videojs.Button
*/

var CameraButton = function (_Button) {
  _inherits(CameraButton, _Button);

  /**
   * The constructor function for the class.
   *
   * @private
   * @param {(videojs.Player|Object)} player - Video.js player instance.
   * @param {Object} options - Player options.
   */
  function CameraButton(player, options) {
    _classCallCheck(this, CameraButton);

    var _this = _possibleConstructorReturn(this, (CameraButton.__proto__ || Object.getPrototypeOf(CameraButton)).call(this, player, options));

    _this.on('click', _this.onClick);
    _this.on('tap', _this.onClick);
    _this.on(player, 'startRecord', _this.onStart);
    _this.on(player, 'stopRecord', _this.onStop);
    return _this;
  }

  /**
   * Builds the default DOM `className`.
   *
   * @return {string}
   *         The DOM `className` for this object.
   */


  _createClass(CameraButton, [{
    key: 'buildCSSClass',
    value: function buildCSSClass() {
      return 'vjs-camera-button vjs-control vjs-icon-photo-camera';
    }

    /**
     * This gets called when the button is clicked.
     *
     * @param {EventTarget~Event} event
     *        The `tap` or `click` event that caused this function to be
     *        called.
     *
     * @listens tap
     * @listens click
     */

  }, {
    key: 'onClick',
    value: function onClick(event) {
      var recorder = this.player_.record();

      if (!recorder.isProcessing()) {
        // create snapshot
        recorder.start();
      } else {
        // retry
        recorder.retrySnapshot();

        // reset camera button
        this.onStop();
      }
    }

    /**
     * Add the vjs-icon-replay class to the element so it can change appearance.
     *
     * @param {EventTarget~Event} [event]
     *        The event that caused this function to run.
     *
     * @listens Player#startRecord
     */

  }, {
    key: 'onStart',
    value: function onStart(event) {
      // replace element class so it can change appearance
      this.removeClass('vjs-icon-photo-camera');
      this.addClass('vjs-icon-replay');

      // change the button text
      this.controlText('Retry');
    }

    /**
     * Add the vjs-icon-photo-camera class to the element so it can change appearance.
     *
     * @param {EventTarget~Event} [event]
     *        The event that caused this function to run.
     *
     * @listens Player#stopRecord
     */

  }, {
    key: 'onStop',
    value: function onStop(event) {
      // replace element class so it can change appearance
      this.removeClass('vjs-icon-replay');
      this.addClass('vjs-icon-photo-camera');

      // change the button text
      this.controlText('Image');
    }
  }]);

  return CameraButton;
}(Button);

/**
 * The text that should display over the `CameraButton`s controls. Added for localization.
 *
 * @type {string}
 * @private
 */


CameraButton.prototype.controlText_ = 'Image';

Component.registerComponent('CameraButton', CameraButton);

exports.default = CameraButton;
},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @file device-button.js
 * @since 2.0.0
 */

var Button = videojs.getComponent('Button');
var Component = videojs.getComponent('Component');

/**
 * Button to select recording device.
 *
 * @class
 * @augments videojs.Button
*/

var DeviceButton = function (_Button) {
  _inherits(DeviceButton, _Button);

  /**
   * The constructor function for the class.
   *
   * @private
   * @param {(videojs.Player|Object)} player - Video.js player instance.
   * @param {Object} options - Player options.
   */
  function DeviceButton(player, options) {
    _classCallCheck(this, DeviceButton);

    var _this = _possibleConstructorReturn(this, (DeviceButton.__proto__ || Object.getPrototypeOf(DeviceButton)).call(this, player, options));

    _this.on('click', _this.onClick);
    _this.on('tap', _this.onClick);
    return _this;
  }

  /**
   * This gets called when the button is clicked.
   *
   * @param {EventTarget~Event} event
   *        The `tap` or `click` event that caused this function to be
   *        called.
   *
   * @listens tap
   * @listens click
   */


  _createClass(DeviceButton, [{
    key: 'onClick',
    value: function onClick(event) {
      // open device dialog
      this.player_.record().getDevice();
    }
  }]);

  return DeviceButton;
}(Button);

/**
 * The text that should display over the `DeviceButton`s controls. Added for localization.
 *
 * @type {string}
 * @private
 */


DeviceButton.prototype.controlText_ = 'Device';

Component.registerComponent('DeviceButton', DeviceButton);

exports.default = DeviceButton;
},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @file record-canvas
 * @since 2.0.0
 */

var Component = videojs.getComponent('Component');

/**
 * Canvas for displaying snapshot image.
 *
 * @class
 * @augments videojs.Component
*/

var RecordCanvas = function (_Component) {
  _inherits(RecordCanvas, _Component);

  function RecordCanvas() {
    _classCallCheck(this, RecordCanvas);

    return _possibleConstructorReturn(this, (RecordCanvas.__proto__ || Object.getPrototypeOf(RecordCanvas)).apply(this, arguments));
  }

  _createClass(RecordCanvas, [{
    key: 'createEl',


    /**
     * Create the `RecordCanvas`s DOM element.
     *
     * @return {Element}
     *         The dom element that gets created.
     */
    value: function createEl() {
      return _get(RecordCanvas.prototype.__proto__ || Object.getPrototypeOf(RecordCanvas.prototype), 'createEl', this).call(this, 'div', {
        className: 'vjs-record-canvas',
        innerHTML: '<canvas></canvas>'
      });
    }
  }]);

  return RecordCanvas;
}(Component);

Component.registerComponent('RecordCanvas', RecordCanvas);

exports.default = RecordCanvas;
},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @file record-indicator.js
 * @since 2.0.0
 */

var Component = videojs.getComponent('Component');

/**
 * Icon indicating recording is active.
 *
 * @class
 * @augments videojs.Component
*/

var RecordIndicator = function (_Component) {
  _inherits(RecordIndicator, _Component);

  /**
   * The constructor function for the class.
   *
   * @private
   * @param {(videojs.Player|Object)} player - Video.js player instance.
   * @param {Object} options - Player options.
   */
  function RecordIndicator(player, options) {
    _classCallCheck(this, RecordIndicator);

    var _this = _possibleConstructorReturn(this, (RecordIndicator.__proto__ || Object.getPrototypeOf(RecordIndicator)).call(this, player, options));

    _this.on(player, 'startRecord', _this.show);
    _this.on(player, 'stopRecord', _this.hide);
    return _this;
  }

  /**
   * Create the `RecordIndicator`s DOM element.
   *
   * @return {Element}
   *         The dom element that gets created.
   */


  _createClass(RecordIndicator, [{
    key: 'createEl',
    value: function createEl() {
      return _get(RecordIndicator.prototype.__proto__ || Object.getPrototypeOf(RecordIndicator.prototype), 'createEl', this).call(this, 'div', {
        className: 'vjs-record-indicator vjs-control',
        dir: 'ltr'
      });
    }

    /**
     * Disable event handlers.
     */

  }, {
    key: 'disable',
    value: function disable() {
      this.off(this.player_, 'startRecord', this.show);
      this.off(this.player_, 'stopRecord', this.hide);
    }
  }]);

  return RecordIndicator;
}(Component);

Component.registerComponent('RecordIndicator', RecordIndicator);

exports.default = RecordIndicator;
},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @file record-toggle.js
 * @since 2.0.0
 */

var Button = videojs.getComponent('Button');
var Component = videojs.getComponent('Component');

/**
 * Button to toggle between start and stop recording.
 *
 * @class
 * @augments videojs.Button
*/

var RecordToggle = function (_Button) {
  _inherits(RecordToggle, _Button);

  /**
   * The constructor function for the class.
   *
   * @private
   * @param {(videojs.Player|Object)} player - Video.js player instance.
   * @param {Object} options - Player options.
   */
  function RecordToggle(player, options) {
    _classCallCheck(this, RecordToggle);

    var _this = _possibleConstructorReturn(this, (RecordToggle.__proto__ || Object.getPrototypeOf(RecordToggle)).call(this, player, options));

    _this.on('click', _this.onClick);
    _this.on('tap', _this.onClick);
    _this.on(player, 'startRecord', _this.onStart);
    _this.on(player, 'stopRecord', _this.onStop);
    return _this;
  }

  /**
   * Builds the default DOM `className`.
   *
   * @return {string}
   *         The DOM `className` for this object.
   */


  _createClass(RecordToggle, [{
    key: 'buildCSSClass',
    value: function buildCSSClass() {
      return 'vjs-record-button vjs-control vjs-icon-record-start';
    }

    /**
     * This gets called when the button is clicked.
     *
     * @param {EventTarget~Event} event
     *        The `tap` or `click` event that caused this function to be
     *        called.
     *
     * @listens tap
     * @listens click
     */

  }, {
    key: 'onClick',
    value: function onClick(event) {
      var recorder = this.player_.record();
      if (!recorder.isRecording()) {
        recorder.start();
      } else {
        recorder.stop();
      }
    }

    /**
     * Add the vjs-icon-record-stop class to the element so it can change appearance.
     *
     * @param {EventTarget~Event} [event]
     *        The event that caused this function to run.
     *
     * @listens Player#startRecord
     */

  }, {
    key: 'onStart',
    value: function onStart(event) {
      // replace element class so it can change appearance
      this.removeClass('vjs-icon-record-start');
      this.addClass('vjs-icon-record-stop');

      // change the button text
      this.controlText('Stop');
    }

    /**
     * Add the vjs-icon-record-start class to the element so it can change appearance.
     *
     * @param {EventTarget~Event} [event]
     *        The event that caused this function to run.
     *
     * @listens Player#stopRecord
     */

  }, {
    key: 'onStop',
    value: function onStop(event) {
      // replace element class so it can change appearance
      this.removeClass('vjs-icon-record-stop');
      this.addClass('vjs-icon-record-start');

      // change the button text
      this.controlText('Record');
    }
  }]);

  return RecordToggle;
}(Button);

/**
 * The text that should display over the `RecordToggle`s controls. Added for localization.
 *
 * @type {string}
 * @private
 */


RecordToggle.prototype.controlText_ = 'Record';

Component.registerComponent('RecordToggle', RecordToggle);

exports.default = RecordToggle;
},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * @file defaults.js
 * @since 2.0.0
 */

//plugin defaults
var pluginDefaultOptions = {
    // Single snapshot image.
    image: false,
    // Include audio in the recorded clip.
    audio: false,
    // Include video in the recorded clip.
    video: false,
    // Animated GIF.
    animation: false,
    // Maximum length of the recorded clip.
    maxLength: 10,
    // Width of the recorded video frames.
    frameWidth: 320,
    // Height of the recorded video frames.
    frameHeight: 240,
    // Enables console logging for debugging purposes.
    debug: false,
    // The mime type for the video recorder. Default to 'video/webm'.
    // Use 'video/mp4' (Firefox) or 'video/webm;codecs=H264' (Chrome 52 and
    // newer) for MP4.
    videoMimeType: 'video/webm',
    // Video recorder type to use. This allows you to specify an alternative
    // recorder class, e.g. WhammyRecorder. Defaults to 'auto' which let's
    // recordrtc specify the best available recorder type.
    videoRecorderType: 'auto',
    // Audio recording library to use. Legal values are 'recordrtc',
    // 'libvorbis.js', 'opus-recorder', 'lamejs' and 'recorder.js'.
    audioEngine: 'recordrtc',
    // Audio recorder type to use. This allows you to specify an alternative
    // recorder class, e.g. StereoAudioRecorder. Defaults to 'auto' which let's
    // recordrtc specify the best available recorder type. Currently this
    // setting is only used with the 'recordrtc' audioEngine.
    audioRecorderType: 'auto',
    // The mime type for the audio recorder. Defaults to 'auto' which will pick
    // the best option available in the browser (e.g. either 'audio/wav',
    // 'audio/ogg' or 'audio/webm').
    audioMimeType: 'auto',
    // The size of the audio buffer (in sample-frames) which needs to
    // be processed each time onprocessaudio is called.
    // From the spec: This value controls how frequently the audioprocess event is
    // dispatched and how many sample-frames need to be processed each call.
    // Lower values for buffer size will result in a lower (better) latency.
    // Higher values will be necessary to avoid audio breakup and glitches.
    // Legal values are 256, 512, 1024, 2048, 4096, 8192 or 16384.
    audioBufferSize: 4096,
    // The audio sample rate (in sample-frames per second) at which the
    // AudioContext handles audio. It is assumed that all AudioNodes
    // in the context run at this rate. In making this assumption,
    // sample-rate converters or "varispeed" processors are not supported
    // in real-time processing.
    // The sampleRate parameter describes the sample-rate of the
    // linear PCM audio data in the buffer in sample-frames per second.
    // An implementation must support sample-rates in at least
    // the range 22050 to 96000.
    audioSampleRate: 44100,
    // Allows you to record single-channel audio, which can reduce the
    // filesize.
    audioChannels: 2,
    // URL for the audio worker.
    audioWorkerURL: '',
    // Frame rate in frames per second.
    animationFrameRate: 200,
    // Sets quality of color quantization (conversion of images to the
    // maximum 256 colors allowed by the GIF specification).
    // Lower values (minimum = 1) produce better colors,
    // but slow processing significantly. 10 is the default,
    // and produces good color mapping at reasonable speeds.
    // Values greater than 20 do not yield significant improvements
    // in speed.
    animationQuality: 10,
    // Accepts numbers in milliseconds; use this to force intervals-based blobs.
    timeSlice: 0
};

exports.default = pluginDefaultOptions;
},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @file record-engine.js
 * @since 2.0.0
 */

var Component = videojs.getComponent('Component');

// supported recorder plugin engines
var RECORDRTC = 'recordrtc';
var LIBVORBISJS = 'libvorbis.js';
var RECORDERJS = 'recorder.js';
var LAMEJS = 'lamejs';
var OPUSRECORDER = 'opus-recorder';

/**
 * Base class for recorder backends.
 * @class
 * @augments videojs.Component
 */

var RecordEngine = function (_Component) {
    _inherits(RecordEngine, _Component);

    function RecordEngine() {
        _classCallCheck(this, RecordEngine);

        return _possibleConstructorReturn(this, (RecordEngine.__proto__ || Object.getPrototypeOf(RecordEngine)).apply(this, arguments));
    }

    _createClass(RecordEngine, [{
        key: 'dispose',


        /**
         * Remove any temporary data and references to streams.
         * @private
         */
        value: function dispose() {
            // dispose previous recording
            if (this.recordedData !== undefined) {
                URL.revokeObjectURL(this.recordedData);
            }
        }

        /**
         * Add filename and timestamp to recorded file object.
         *
         * @param {(blob|file)} fileObj - Blob or File object.
         */

    }, {
        key: 'addFileInfo',
        value: function addFileInfo(fileObj) {
            var now = new Date();
            fileObj.lastModifiedDate = now;

            // guess extension name from mime type, e.g. audio/ogg, but
            // any extension is valid here. Chrome also accepts extended
            // mime types like video/webm;codecs=h264,vp9,opus
            var fileExtension = '.' + fileObj.type.split('/')[1];
            if (fileExtension.indexOf(';') > -1) {
                fileExtension = fileExtension.split(';')[0];
            }

            // use timestamp in filename, e.g. 1451180941326.ogg
            fileObj.name = now.getTime() + fileExtension;
        }

        /**
         * Invoked when recording is stopped and resulting stream is available.
         *
         * @param {blob} data - Reference to the recorded Blob.
         */

    }, {
        key: 'onStopRecording',
        value: function onStopRecording(data) {
            this.recordedData = data;

            // add filename and timestamp to recorded file object
            this.addFileInfo(this.recordedData);

            // remove reference to recorded stream
            this.dispose();

            // notify listeners
            this.trigger('recordComplete');
        }

        /**
         * Show save as dialog in browser so the user can store the recorded media
         * locally.
         *
         * @param {object} name - Object with names for the particular blob(s)
         *     you want to save. File extensions are added automatically. For
         *     example: {'video': 'name-of-video-file'}. Supported keys are
         *     'audio', 'video' and 'gif'.
         */

    }, {
        key: 'saveAs',
        value: function saveAs(name) {
            var fileName = name[Object.keys(name)[0]];

            if (typeof navigator.msSaveOrOpenBlob !== 'undefined') {
                return navigator.msSaveOrOpenBlob(this.recordedData, fileName);
            } else if (typeof navigator.msSaveBlob !== 'undefined') {
                return navigator.msSaveBlob(this.recordedData, fileName);
            }

            var hyperlink = document.createElement('a');
            hyperlink.href = URL.createObjectURL(this.recordedData);
            hyperlink.download = fileName;

            hyperlink.style = 'display:none;opacity:0;color:transparent;';
            (document.body || document.documentElement).appendChild(hyperlink);

            if (typeof hyperlink.click === 'function') {
                hyperlink.click();
            } else {
                hyperlink.target = '_blank';
                hyperlink.dispatchEvent(new MouseEvent('click', {
                    view: window,
                    bubbles: true,
                    cancelable: true
                }));
            }

            URL.revokeObjectURL(hyperlink.href);
        }
    }]);

    return RecordEngine;
}(Component);

// expose component for external plugins


videojs.RecordEngine = RecordEngine;
Component.registerComponent('RecordEngine', RecordEngine);

exports.RecordEngine = RecordEngine;
exports.RECORDRTC = RECORDRTC;
exports.LIBVORBISJS = LIBVORBISJS;
exports.RECORDERJS = RECORDERJS;
exports.LAMEJS = LAMEJS;
exports.OPUSRECORDER = OPUSRECORDER;
},{}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * @file record-mode.js
 * @since 2.0.0
 */

// recorder modes
var IMAGE_ONLY = 'image_only';
var AUDIO_ONLY = 'audio_only';
var VIDEO_ONLY = 'video_only';
var AUDIO_VIDEO = 'audio_video';
var ANIMATION = 'animation';

var getRecorderMode = function getRecorderMode(image, audio, video, animation) {
    if (isModeEnabled(image)) {
        return IMAGE_ONLY;
    } else if (isModeEnabled(animation)) {
        return ANIMATION;
    } else if (isModeEnabled(audio) && !isModeEnabled(video)) {
        return AUDIO_ONLY;
    } else if (isModeEnabled(audio) && isModeEnabled(video)) {
        return AUDIO_VIDEO;
    } else if (!isModeEnabled(audio) && isModeEnabled(video)) {
        return VIDEO_ONLY;
    }
};

/**
 * Return boolean indicating whether mode is enabled or not.
 */
var isModeEnabled = function isModeEnabled(mode) {
    return mode === Object(mode) || mode === true;
};

exports.getRecorderMode = getRecorderMode;
exports.IMAGE_ONLY = IMAGE_ONLY;
exports.AUDIO_ONLY = AUDIO_ONLY;
exports.VIDEO_ONLY = VIDEO_ONLY;
exports.AUDIO_VIDEO = AUDIO_VIDEO;
exports.ANIMATION = ANIMATION;
},{}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _recordEngine = require('./record-engine');

var _detectBrowser = require('../utils/detect-browser');

var _recordMode = require('./record-mode');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file record-rtc.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @since 2.0.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var Component = videojs.getComponent('Component');

/**
 * Engine used with the MRecordRTC class in the RecordRTC library.
 *
 * @class
 * @augments videojs.RecordEngine
 */

var RecordRTCEngine = function (_RecordEngine) {
    _inherits(RecordRTCEngine, _RecordEngine);

    function RecordRTCEngine() {
        _classCallCheck(this, RecordRTCEngine);

        return _possibleConstructorReturn(this, (RecordRTCEngine.__proto__ || Object.getPrototypeOf(RecordRTCEngine)).apply(this, arguments));
    }

    _createClass(RecordRTCEngine, [{
        key: 'setup',


        /**
         * Setup recording engine.
         */
        value: function setup(stream, mediaType, debug) {
            this.inputStream = stream;
            this.mediaType = mediaType;
            this.debug = debug;

            // setup RecordRTC
            this.engine = new RecordRTC.MRecordRTC();
            this.engine.mediaType = this.mediaType;
            this.engine.disableLogs = !this.debug;
            this.engine.mimeType = this.mimeType;

            // audio settings
            this.engine.bufferSize = this.bufferSize;
            this.engine.sampleRate = this.sampleRate;
            this.engine.numberOfAudioChannels = this.audioChannels;

            // video/canvas settings
            this.engine.video = this.video;
            this.engine.canvas = this.canvas;

            // animated gif settings
            this.engine.quality = this.quality;
            this.engine.frameRate = this.frameRate;
            if (this.onTimeStamp !== undefined) {
                this.engine.timeSlice = this.timeSlice;
                this.engine.onTimeStamp = this.onTimeStamp;
            }

            // connect stream to recording engine
            this.engine.addStream(this.inputStream);
        }

        /**
         * Remove any temporary data and references to streams.
         */

    }, {
        key: 'dispose',
        value: function dispose() {
            _get(RecordRTCEngine.prototype.__proto__ || Object.getPrototypeOf(RecordRTCEngine.prototype), 'dispose', this).call(this);

            if (typeof this.engine.destroy === 'function') {
                this.engine.destroy();
            }
        }

        /**
         * Start recording.
         */

    }, {
        key: 'start',
        value: function start() {
            this.engine.startRecording();
        }

        /**
         * Stop recording. Result will be available async when onStopRecording
         * is called.
         */

    }, {
        key: 'stop',
        value: function stop() {
            this.engine.stopRecording(this.onStopRecording.bind(this));
        }

        /**
         * Pause recording.
         */

    }, {
        key: 'pause',
        value: function pause() {
            this.engine.pauseRecording();
        }

        /**
         * Resume recording.
         */

    }, {
        key: 'resume',
        value: function resume() {
            this.engine.resumeRecording();
        }

        /**
         * Show save as dialog in browser so the user can store the recorded media
         * locally.
         *
         * @param {object} name - Object with names for the particular blob(s)
         *     you want to save. File extensions are added automatically. For
         *     example: {'video': 'name-of-video-file'}. Supported keys are
         *     'audio', 'video' and 'gif'.
         */

    }, {
        key: 'saveAs',
        value: function saveAs(name) {
            if (this.engine && name !== undefined) {
                this.engine.save(name);
            }
        }

        /**
         * Invoked when recording is stopped and resulting stream is available.
         *
         * @private
         * @param {string} audioVideoURL - Reference to the recorded Blob
         *     object, e.g. 'blob:http://localhost:8080/10100016-4248-9949-b0d6-0bb40db56eba'
         * @param {string} type - Media type, eg. 'video' or 'audio'.
         */

    }, {
        key: 'onStopRecording',
        value: function onStopRecording(audioVideoURL, type) {
            var _this2 = this;

            // store reference to recorded stream URL
            this.mediaURL = audioVideoURL;

            // store reference to recorded stream data
            var recordType = this.player().record().getRecordType();
            this.engine.getBlob(function (recording) {
                switch (recordType) {
                    case _recordMode.AUDIO_ONLY:
                        _this2.recordedData = recording.audio;

                        _this2.addFileInfo(_this2.recordedData);

                        // notify listeners
                        _this2.trigger('recordComplete');
                        break;

                    case _recordMode.VIDEO_ONLY:
                    case _recordMode.AUDIO_VIDEO:
                        // when recording both audio and video, recordrtc
                        // calls this twice on chrome, first with audio data
                        // and then with video data.
                        // on firefox it's called once but with a single
                        // blob that includes both audio and video data.
                        if (recording.video !== undefined) {
                            // data is video-only but on firefox audio+video
                            _this2.recordedData = recording.video;

                            // on the chrome browser two blobs are created
                            // containing the separate audio/video streams.
                            if (recordType === _recordMode.AUDIO_VIDEO && (0, _detectBrowser.isChrome)()) {
                                // store both audio and video
                                _this2.recordedData = recording;

                                for (var mtype in _this2.recordedData) {
                                    _this2.addFileInfo(_this2.recordedData[mtype]);
                                }
                            } else {
                                _this2.addFileInfo(_this2.recordedData);
                            }

                            // notify listeners
                            _this2.trigger('recordComplete');
                        }
                        break;

                    case _recordMode.ANIMATION:
                        _this2.recordedData = recording.gif;

                        _this2.addFileInfo(_this2.recordedData);

                        // notify listeners
                        _this2.trigger('recordComplete');
                        break;
                }
            });
        }
    }]);

    return RecordRTCEngine;
}(_recordEngine.RecordEngine);

// expose plugin


videojs.RecordRTCEngine = RecordRTCEngine;

Component.registerComponent('RecordRTCEngine', RecordRTCEngine);

exports.default = RecordRTCEngine;
},{"../utils/detect-browser":12,"./record-engine":8,"./record-mode":9}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * @file browser-shim.js
 * @since 2.0.0
 */

var setSrcObject = function setSrcObject(stream, element, ignoreCreateObjectURL) {
    if ('createObjectURL' in URL && !ignoreCreateObjectURL) {
        try {
            element.src = URL.createObjectURL(stream);
        } catch (e) {
            setSrcObject(stream, element, true);
            return;
        }
    } else if ('srcObject' in element) {
        element.srcObject = stream;
    } else if ('mozSrcObject' in element) {
        element.mozSrcObject = stream;
    } else {
        console.log('createObjectURL/srcObject both are not supported.');
    }
};

exports.default = setSrcObject;
},{}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isSafari = exports.isChrome = exports.isOpera = exports.isEdge = exports.detectBrowser = undefined;

var _window = require('global/window');

var _window2 = _interopRequireDefault(_window);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Browser detector.
 *
 * @private
 * @return {object} result containing browser, version and minVersion
 *     properties.
 */
var detectBrowser = function detectBrowser() {
    // returned result object
    var result = {};
    result.browser = null;
    result.version = null;
    result.minVersion = null;

    // fail early if it's not a browser
    if (typeof _window2.default === 'undefined' || !_window2.default.navigator) {
        result.browser = 'Not a supported browser.';
        return result;
    }

    // Firefox
    if (navigator.mozGetUserMedia) {
        result.browser = 'firefox';
        result.version = extractVersion(navigator.userAgent, /Firefox\/(\d+)\./, 1);
        result.minVersion = 31;
    } else if (navigator.webkitGetUserMedia) {
        // Chrome, Chromium, Webview, Opera
        if (_window2.default.webkitRTCPeerConnection) {
            result.browser = 'chrome';
            result.version = extractVersion(navigator.userAgent, /Chrom(e|ium)\/(\d+)\./, 2);
            result.minVersion = 38;
        } else {
            // Safari (in an unpublished version) or unknown webkit-based.
            if (navigator.userAgent.match(/Version\/(\d+).(\d+)/)) {
                result.browser = 'safari';
                result.version = extractVersion(navigator.userAgent, /AppleWebKit\/(\d+)\./, 1);
                result.minVersion = 11;
            } else {
                // unknown webkit-based browser.
                result.browser = 'Unsupported webkit-based browser ' + 'with GUM support but no WebRTC support.';
                return result;
            }
        }
        // Edge
    } else if (navigator.mediaDevices && navigator.userAgent.match(/Edge\/(\d+).(\d+)$/)) {
        result.browser = 'edge';
        result.version = extractVersion(navigator.userAgent, /Edge\/(\d+).(\d+)$/, 2);
        result.minVersion = 10547;
    } else if (navigator.mediaDevices && navigator.userAgent.match(/AppleWebKit\/(\d+)\./)) {
        // Safari, with webkitGetUserMedia removed.
        result.browser = 'safari';
        result.version = extractVersion(navigator.userAgent, /AppleWebKit\/(\d+)\./, 1);
    } else {
        // default fallthrough: not supported.
        result.browser = 'Not a supported browser.';
        return result;
    }

    return result;
};

/**
 * Extract browser version out of the provided user agent string.
 *
 * @private
 * @param {!string} uastring - userAgent string.
 * @param {!string} expr - Regular expression used as match criteria.
 * @param {!number} pos - position in the version string to be
 *     returned.
 * @return {!number} browser version.
 */
/**
 * @file detect-browser.js
 * @since 2.0.0
 */

var extractVersion = function extractVersion(uastring, expr, pos) {
    var match = uastring.match(expr);
    return match && match.length >= pos && parseInt(match[pos], 10);
};

var isEdge = function isEdge() {
    return detectBrowser().browser === 'edge';
};

var isSafari = function isSafari() {
    return detectBrowser().browser === 'safari';
};

var isOpera = function isOpera() {
    return !!_window2.default.opera || navigator.userAgent.indexOf('OPR/') !== -1;
};

var isChrome = function isChrome() {
    return detectBrowser().browser === 'chrome';
};

exports.detectBrowser = detectBrowser;
exports.isEdge = isEdge;
exports.isOpera = isOpera;
exports.isChrome = isChrome;
exports.isSafari = isSafari;
},{"global/window":14}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * @file format-time.js
 * @since 2.0.0
 */

/**
 * Format seconds as a time string, H:MM:SS, M:SS or M:SS:MMM.
 *
 * Supplying a guide (in seconds) will force a number of leading zeros
 * to cover the length of the guide.
 *
 * @param {number} seconds - Number of seconds to be turned into a
 *     string.
 * @param {number} guide - Number (in seconds) to model the string
 *     after.
 * @param {number} msDisplayMax - Number (in milliseconds) to model the string
 *     after.
 * @return {string} Time formatted as H:MM:SS, M:SS or M:SS:MMM, e.g.
 *     0:00:12.
 * @private
 */
var formatTime = function formatTime(seconds, guide, msDisplayMax) {
    // Default to using seconds as guide
    seconds = seconds < 0 ? 0 : seconds;
    guide = guide || seconds;
    var s = Math.floor(seconds % 60),
        m = Math.floor(seconds / 60 % 60),
        h = Math.floor(seconds / 3600),
        gm = Math.floor(guide / 60 % 60),
        gh = Math.floor(guide / 3600),
        ms = Math.floor((seconds - s) * 1000);

    // handle invalid times
    if (isNaN(seconds) || seconds === Infinity) {
        // '-' is false for all relational operators (e.g. <, >=) so this
        // setting will add the minimum number of fields specified by the
        // guide
        h = m = s = ms = '-';
    }

    // Check if we need to show milliseconds
    if (guide > 0 && guide < msDisplayMax) {
        if (ms < 100) {
            if (ms < 10) {
                ms = '00' + ms;
            } else {
                ms = '0' + ms;
            }
        }
        ms = ':' + ms;
    } else {
        ms = '';
    }

    // Check if we need to show hours
    h = h > 0 || gh > 0 ? h + ':' : '';

    // If hours are showing, we may need to add a leading zero.
    // Always show at least one digit of minutes.
    m = ((h || gm >= 10) && m < 10 ? '0' + m : m) + ':';

    // Check if leading zero is need for seconds
    s = s < 10 ? '0' + s : s;

    return h + m + s + ms;
};

exports.default = formatTime;
},{}],14:[function(require,module,exports){
(function (global){
var win;

if (typeof window !== "undefined") {
    win = window;
} else if (typeof global !== "undefined") {
    win = global;
} else if (typeof self !== "undefined"){
    win = self;
} else {
    win = {};
}

module.exports = win;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],15:[function(require,module,exports){
(function (global){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _animationDisplay = require('./controls/animation-display');

var _animationDisplay2 = _interopRequireDefault(_animationDisplay);

var _recordCanvas = require('./controls/record-canvas');

var _recordCanvas2 = _interopRequireDefault(_recordCanvas);

var _deviceButton = require('./controls/device-button');

var _deviceButton2 = _interopRequireDefault(_deviceButton);

var _cameraButton = require('./controls/camera-button');

var _cameraButton2 = _interopRequireDefault(_cameraButton);

var _recordToggle = require('./controls/record-toggle');

var _recordToggle2 = _interopRequireDefault(_recordToggle);

var _recordIndicator = require('./controls/record-indicator');

var _recordIndicator2 = _interopRequireDefault(_recordIndicator);

var _defaults = require('./defaults');

var _defaults2 = _interopRequireDefault(_defaults);

var _formatTime = require('./utils/format-time');

var _formatTime2 = _interopRequireDefault(_formatTime);

var _browserShim = require('./utils/browser-shim');

var _browserShim2 = _interopRequireDefault(_browserShim);

var _detectBrowser = require('./utils/detect-browser');

var _recordRtc = require('./engine/record-rtc');

var _recordRtc2 = _interopRequireDefault(_recordRtc);

var _recordEngine = require('./engine/record-engine');

var _recordMode = require('./engine/record-mode');

var _video = (typeof window !== "undefined" ? window['videojs'] : typeof global !== "undefined" ? global['videojs'] : null);

var _video2 = _interopRequireDefault(_video);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file videojs.record.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The main file for the videojs-record project.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * MIT license: https://github.com/collab-project/videojs-record/blob/master/LICENSE
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var Plugin = _video2.default.getPlugin('plugin');
var Player = _video2.default.getComponent('Player');

var AUTO = 'auto';

// monkey-patch play (#152)
Player.prototype.play = function play() {
    var retval = this.techGet_('play');
    // silence errors (unhandled promise from play)
    if (retval !== undefined && typeof retval.then === 'function') {
        retval.then(null, function (e) {});
    }
    return retval;
};

/**
 * Record audio/video/images using the Video.js player.
 *
 * @class
 * @augments videojs.Plugin
 */

var Record = function (_Plugin) {
    _inherits(Record, _Plugin);

    /**
     * The constructor function for the class.
     *
     * @param {(videojs.Player|Object)} player
     * @param {Object} options - Player options.
     */
    function Record(player, options) {
        _classCallCheck(this, Record);

        // setup plugin options
        var _this = _possibleConstructorReturn(this, (Record.__proto__ || Object.getPrototypeOf(Record)).call(this, player, options));

        _this.loadOptions();

        // (re)set recorder state
        _this.resetState();

        // add device button with icon based on type
        var deviceIcon = 'av-perm';
        switch (_this.getRecordType()) {
            case _recordMode.IMAGE_ONLY:
            case _recordMode.VIDEO_ONLY:
            case _recordMode.ANIMATION:
                deviceIcon = 'video-perm';
                break;
            case _recordMode.AUDIO_ONLY:
                deviceIcon = 'audio-perm';
                break;
        }
        _deviceButton2.default.prototype.buildCSSClass = function () {
            // use dynamic icon class
            return 'vjs-device-button vjs-control vjs-icon-' + deviceIcon;
        };
        player.deviceButton = new _deviceButton2.default(player, options);
        player.addChild(player.deviceButton);

        // add blinking record indicator
        player.recordIndicator = new _recordIndicator2.default(player, options);
        player.recordIndicator.hide();
        player.addChild(player.recordIndicator);

        // add canvas for recording and displaying image
        player.recordCanvas = new _recordCanvas2.default(player, options);
        player.recordCanvas.hide();
        player.addChild(player.recordCanvas);

        // add image for animation display
        player.animationDisplay = new _animationDisplay2.default(player, options);
        player.animationDisplay.hide();
        player.addChild(player.animationDisplay);

        // add camera button
        player.cameraButton = new _cameraButton2.default(player, options);
        player.cameraButton.hide();

        // add record toggle
        player.recordToggle = new _recordToggle2.default(player, options);
        player.recordToggle.hide();

        // wait until player ui is ready
        _this.player.one('ready', _this.setupUI.bind(_this));
        return _this;
    }

    /**
     * Setup plugin options.
     */


    _createClass(Record, [{
        key: 'loadOptions',
        value: function loadOptions() {
            var recordOptions = _video2.default.mergeOptions(_defaults2.default, this.player.options_.plugins.record);

            // record settings
            this.recordImage = recordOptions.image;
            this.recordAudio = recordOptions.audio;
            this.recordVideo = recordOptions.video;
            this.recordAnimation = recordOptions.animation;
            this.maxLength = recordOptions.maxLength;
            this.debug = recordOptions.debug;
            this.recordTimeSlice = recordOptions.timeSlice;

            // video/canvas settings
            this.videoFrameWidth = recordOptions.frameWidth;
            this.videoFrameHeight = recordOptions.frameHeight;
            this.videoRecorderType = recordOptions.videoRecorderType;
            this.videoMimeType = recordOptions.videoMimeType;

            // audio settings
            this.audioEngine = recordOptions.audioEngine;
            this.audioRecorderType = recordOptions.audioRecorderType;
            this.audioWorkerURL = recordOptions.audioWorkerURL;
            this.audioBufferSize = recordOptions.audioBufferSize;
            this.audioSampleRate = recordOptions.audioSampleRate;
            this.audioChannels = recordOptions.audioChannels;
            this.audioMimeType = recordOptions.audioMimeType;

            // animation settings
            this.animationFrameRate = recordOptions.animationFrameRate;
            this.animationQuality = recordOptions.animationQuality;
        }

        /**
         * Player UI is ready.
         * @private
         */

    }, {
        key: 'setupUI',
        value: function setupUI() {
            var _this2 = this;

            // insert custom controls on left-side of controlbar
            this.player.controlBar.addChild(this.player.cameraButton);
            this.player.controlBar.el().insertBefore(this.player.cameraButton.el(), this.player.controlBar.el().firstChild);
            this.player.controlBar.el().insertBefore(this.player.recordToggle.el(), this.player.controlBar.el().firstChild);

            // get rid of unused controls
            if (this.player.controlBar.remainingTimeDisplay !== undefined) {
                this.player.controlBar.remainingTimeDisplay.el().style.display = 'none';
            }
            if (this.player.controlBar.liveDisplay !== undefined) {
                this.player.controlBar.liveDisplay.el().style.display = 'none';
            }

            // loop feature is never used in this plugin
            this.player.loop(false);

            // tweak player UI based on type
            switch (this.getRecordType()) {
                case _recordMode.AUDIO_ONLY:
                    // reference to videojs-wavesurfer plugin
                    this.surfer = this.player.wavesurfer();
                    break;

                case _recordMode.IMAGE_ONLY:
                case _recordMode.VIDEO_ONLY:
                case _recordMode.AUDIO_VIDEO:
                case _recordMode.ANIMATION:
                    // customize controls
                    this.player.bigPlayButton.hide();

                    // loadedmetadata resets the durationDisplay for the
                    // first time
                    this.player.one('loadedmetadata', function () {
                        // display max record time
                        _this2.setDuration(_this2.maxLength);
                    });

                    // the native controls don't work for this UI so disable
                    // them no matter what
                    if (this.player.usingNativeControls_ === true) {
                        if (this.player.tech_.el_ !== undefined) {
                            this.player.tech_.el_.controls = false;
                        }
                    }

                    // clicking or tapping the player video element should not try
                    // to start playback
                    this.player.removeTechControlsListeners_();

                    if (this.player.options_.controls) {
                        // progress control isn't used by this plugin
                        this.player.controlBar.progressControl.hide();

                        // prevent controlbar fadeout
                        this.player.on('userinactive', function (event) {
                            _this2.player.userActive(true);
                        });

                        // videojs automatically hides the controls when no valid 'source'
                        // element is included in the video or audio tag. Don't. Ever again.
                        this.player.controlBar.show();
                        this.player.controlBar.el().style.display = 'flex';
                    }
                    break;
            }

            // disable time display events that constantly try to reset the current time
            // and duration values
            this.player.off('timeupdate');
            this.player.off('durationchange');
            this.player.off('loadedmetadata');

            // display max record time
            this.setDuration(this.maxLength);

            // hide play control
            this.player.controlBar.playToggle.hide();
        }

        /**
         * Indicates whether the plugin is currently recording or not.
         *
         * @return {boolean} Plugin currently recording or not.
         */

    }, {
        key: 'isRecording',
        value: function isRecording() {
            return this._recording;
        }

        /**
         * Indicates whether the plugin is currently processing recorded data
         * or not.
         *
         * @return {boolean} Plugin processing or not.
         */

    }, {
        key: 'isProcessing',
        value: function isProcessing() {
            return this._processing;
        }

        /**
         * Indicates whether the plugin is destroyed or not.
         *
         * @return {boolean} Plugin destroyed or not.
         */

    }, {
        key: 'isDestroyed',
        value: function isDestroyed() {
            return this.player && this.player.children() === null;
        }

        /**
         * Open the browser's recording device selection dialog.
         */

    }, {
        key: 'getDevice',
        value: function getDevice() {
            // define device callbacks once
            if (this.deviceReadyCallback === undefined) {
                this.deviceReadyCallback = this.onDeviceReady.bind(this);
            }
            if (this.deviceErrorCallback === undefined) {
                this.deviceErrorCallback = this.onDeviceError.bind(this);
            }
            if (this.engineStopCallback === undefined) {
                this.engineStopCallback = this.onRecordComplete.bind(this);
            }
            // ask the browser to give the user access to the media device
            // and get a stream reference in the callback function
            switch (this.getRecordType()) {
                case _recordMode.AUDIO_ONLY:
                    // setup microphone
                    this.mediaType = {
                        audio: this.audioRecorderType === AUTO ? true : this.audioRecorderType,
                        video: false
                    };
                    // remove existing microphone listeners
                    this.surfer.surfer.microphone.un('deviceReady', this.deviceReadyCallback);
                    this.surfer.surfer.microphone.un('deviceError', this.deviceErrorCallback);

                    // setup new microphone listeners
                    this.surfer.surfer.microphone.on('deviceReady', this.deviceReadyCallback);
                    this.surfer.surfer.microphone.on('deviceError', this.deviceErrorCallback);

                    // disable existing playback events
                    this.surfer.setupPlaybackEvents(false);

                    // (re)set surfer liveMode
                    this.surfer.liveMode = true;
                    this.surfer.surfer.microphone.paused = false;

                    // open browser device selection dialog
                    this.surfer.surfer.microphone.start();
                    break;

                case _recordMode.IMAGE_ONLY:
                case _recordMode.VIDEO_ONLY:
                    // setup camera
                    this.mediaType = {
                        audio: false,
                        video: this.videoRecorderType === AUTO ? true : this.videoRecorderType
                    };
                    navigator.webkitGetUserMedia({
                        audio: false,
                        video: this.getRecordType() === _recordMode.IMAGE_ONLY ? this.recordImage : this.recordVideo
                    },this.onDeviceReady.bind(this),this.onDeviceError.bind(this));
                    break;

                case _recordMode.AUDIO_VIDEO:
                    // setup camera and microphone
                    this.mediaType = {
                        audio: this.audioRecorderType === AUTO ? true : this.audioRecorderType,
                        video: this.videoRecorderType === AUTO ? true : this.videoRecorderType
                    };
                    navigator.webkitGetUserMedia({
                        audio: this.recordAudio,
                        video: this.recordVideo
                    },this.onDeviceReady.bind(this),this.onDeviceError.bind(this));
                    break;

                case _recordMode.ANIMATION:
                    // setup camera
                    this.mediaType = {
                        // animated GIF
                        audio: false,
                        video: false,
                        gif: true
                    };
                    navigator.webkitGetUserMedia({
                        audio: false,
                        video: this.recordAnimation
                    },this.onDeviceReady.bind(this),this.onDeviceError.bind(this));
                    break;
            }
        }

        /**
         * Invoked when the device is ready.
         * @private
         * @param stream: LocalMediaStream instance.
         */

    }, {
        key: 'onDeviceReady',
        value: function onDeviceReady(stream) {
            var _this3 = this;

            this._deviceActive = true;

            // store reference to stream for stopping etc.
            this.stream = stream;

            // hide device selection button
            this.player.deviceButton.hide();

            // reset time (e.g. when stopDevice was used)
            this.setDuration(this.maxLength);
            this.setCurrentTime(0);

            // hide play/pause control (e.g. when stopDevice was used)
            this.player.controlBar.playToggle.hide();

            // reset playback listeners
            this.off(this.player, 'timeupdate', this.playbackTimeUpdate);
            this.off(this.player, 'ended', this.playbackTimeUpdate);

            // setup recording engine
            if (this.getRecordType() !== _recordMode.IMAGE_ONLY) {
                // currently libvorbis.js, recorder.js, opus-recorder and lamejs
                // are only supported in audio-only mode
                if (this.getRecordType() !== _recordMode.AUDIO_ONLY && (this.audioEngine === _recordEngine.LIBVORBISJS || this.audioEngine === _recordEngine.RECORDERJS || this.audioEngine === _recordEngine.LAMEJS || this.audioEngine === _recordEngine.OPUSRECORDER)) {
                    throw new Error('Currently ' + this.audioEngine + ' is only supported in audio-only mode.');
                }

                // get recorder class
                var EngineClass;
                switch (this.audioEngine) {
                    case _recordEngine.RECORDRTC:
                        // RecordRTC.js (default)
                        EngineClass = _video2.default.RecordRTCEngine;
                        break;

                    case _recordEngine.LIBVORBISJS:
                        // libvorbis.js
                        EngineClass = _video2.default.LibVorbisEngine;
                        break;

                    case _recordEngine.RECORDERJS:
                        // recorder.js
                        EngineClass = _video2.default.RecorderjsEngine;
                        break;

                    case _recordEngine.LAMEJS:
                        // lamejs
                        EngineClass = _video2.default.LamejsEngine;
                        break;

                    case _recordEngine.OPUSRECORDER:
                        // opus-recorder
                        EngineClass = _video2.default.OpusRecorderEngine;
                        break;

                    default:
                        // unknown engine
                        throw new Error('Unknown audioEngine: ' + this.audioEngine);
                }
                try {
                    // connect stream to recording engine
                    this.engine = new EngineClass(this.player, this.player.options_);
                } catch (err) {
                    console.error(err);
                    throw new Error('Could not load ' + this.audioEngine + ' plugin');
                }

                // listen for events
                this.engine.on('recordComplete', this.engineStopCallback);

                // audio settings
                this.engine.bufferSize = this.audioBufferSize;
                this.engine.sampleRate = this.audioSampleRate;
                this.engine.audioChannels = this.audioChannels;
                this.engine.audioWorkerURL = this.audioWorkerURL;

                // mime type
                this.engine.mimeType = {
                    video: this.videoMimeType,
                    gif: 'image/gif'
                };
                if (this.audioMimeType !== null && this.audioMimeType !== AUTO) {
                    this.engine.mimeType.audio = this.audioMimeType;
                }

                // video/canvas settings
                this.engine.video = {
                    width: this.videoFrameWidth,
                    height: this.videoFrameHeight
                };
                this.engine.canvas = {
                    width: this.videoFrameWidth,
                    height: this.videoFrameHeight
                };

                // animated GIF settings
                this.engine.quality = this.animationQuality;
                this.engine.frameRate = this.animationFrameRate;

                // timeSlice
                if (this.recordTimeSlice && this.recordTimeSlice > 0) {
                    this.engine.timeSlice = this.recordTimeSlice;
                    this.engine.onTimeStamp = this.onTimeStamp.bind(this);
                }

                // initialize recorder
                this.engine.setup(this.stream, this.mediaType, this.debug);

                // show elements that should never be hidden in animation,
                // audio and/or video modus
                var uiElements = [this.player.controlBar.currentTimeDisplay, this.player.controlBar.timeDivider, this.player.controlBar.durationDisplay];
                uiElements.forEach(function (element) {
                    if (element !== undefined) {
                        element.el().style.display = 'block';
                        element.show();
                    }
                });

                // show record button
                this.player.recordToggle.show();
            } else {
                // disable record indicator
                this.player.recordIndicator.disable();

                // setup UI for retrying snapshot (e.g. when stopDevice was
                // used)
                this.retrySnapshot();

                // reset and show camera button
                this.player.cameraButton.onStop();
                this.player.cameraButton.show();
            }

            // setup preview
            if (this.getRecordType() !== _recordMode.AUDIO_ONLY) {
                // show live preview
                this.mediaElement = this.player.el().firstChild;
                this.mediaElement.controls = false;

                // mute incoming audio for feedback loops
                this.mediaElement.muted = true;

                // hide the volume bar while it's muted
                this.displayVolumeControl(false);

                // load stream
                this.load(this.stream);

                // stream loading is async, so we wait until it's ready to play
                // the stream
                this.player.one('loadedmetadata', function () {
                    // start stream
                    _this3.mediaElement.play();

                    // forward to listeners
                    _this3.player.trigger('deviceReady');
                });
            } else {
                // forward to listeners
                this.player.trigger('deviceReady');
            }
        }

        /**
         * Invoked when an device error occurred.
         * @private
         */

    }, {
        key: 'onDeviceError',
        value: function onDeviceError(code) {
            this._deviceActive = false;

            // store code
            this.player.deviceErrorCode = code;

            // forward error to player
            this.player.trigger('deviceError');
        }

        /**
         * Start recording.
         */

    }, {
        key: 'start',
        value: function start() {
            var _this4 = this;

            if (!this.isProcessing()) {
                this._recording = true;

                // hide play/pause control
                this.player.controlBar.playToggle.hide();

                // reset playback listeners
                this.off(this.player, 'timeupdate', this.playbackTimeUpdate);
                this.off(this.player, 'ended', this.playbackTimeUpdate);

                // start preview
                switch (this.getRecordType()) {
                    case _recordMode.AUDIO_ONLY:
                        // disable playback events
                        this.surfer.setupPlaybackEvents(false);

                        // start/resume live audio visualization
                        this.surfer.surfer.microphone.paused = false;
                        this.surfer.liveMode = true;
                        this.surfer.surfer.microphone.play();
                        break;

                    case _recordMode.VIDEO_ONLY:
                    case _recordMode.AUDIO_VIDEO:
                        // preview video stream in video element
                        this.startVideoPreview();
                        break;

                    case _recordMode.ANIMATION:
                        // hide the first frame
                        this.player.recordCanvas.hide();

                        // hide the animation
                        this.player.animationDisplay.hide();

                        // show preview video
                        this.mediaElement.style.display = 'block';

                        // for animations, capture the first frame
                        // that can be displayed as soon as recording
                        // is complete
                        this.captureFrame().then(function (result) {
                            // start video preview **after** capturing first frame
                            _this4.startVideoPreview();
                        });
                        break;
                }

                // start recording
                switch (this.getRecordType()) {
                    case _recordMode.IMAGE_ONLY:
                        // create snapshot
                        this.createSnapshot();

                        // notify UI
                        this.player.trigger('startRecord');
                        break;

                    case _recordMode.VIDEO_ONLY:
                    case _recordMode.AUDIO_VIDEO:
                    case _recordMode.ANIMATION:
                        // wait for media stream on video element to actually load
                        this.player.one('loadedmetadata', function () {
                            // start actually recording process
                            _this4.startRecording();
                        });
                        break;

                    default:
                        // all resources have already loaded, so we can start
                        // recording right away
                        this.startRecording();
                }
            }
        }

        /**
         * Start recording.
         * @private
         */

    }, {
        key: 'startRecording',
        value: function startRecording() {
            // register starting point
            this.paused = false;
            this.pauseTime = this.pausedTime = 0;
            this.startTime = new Date().getTime();

            // start countdown
            this.countDown = this.player.setInterval(this.onCountDown.bind(this), 100);

            // cleanup previous recording
            if (this.engine !== undefined) {
                this.engine.dispose();
            }

            // start recording stream
            this.engine.start();

            // notify UI
            this.player.trigger('startRecord');
        }

        /**
         * Stop recording.
         */

    }, {
        key: 'stop',
        value: function stop() {
            if (!this.isProcessing()) {
                this._recording = false;
                this._processing = true;

                if (this.getRecordType() !== _recordMode.IMAGE_ONLY) {
                    // notify UI
                    this.player.trigger('stopRecord');

                    // stop countdown
                    this.player.clearInterval(this.countDown);

                    // stop recording stream (result will be available async)
                    if (this.engine) {
                        this.engine.stop();
                    }
                } else {
                    if (this.player.recordedData) {
                        // notify listeners that image data is (already) available
                        this.player.trigger('finishRecord');
                    }
                }
            }
        }

        /**
         * Stop device(s) and recording if active.
         */

    }, {
        key: 'stopDevice',
        value: function stopDevice() {
            if (this.isRecording()) {
                // stop stream once recorded data is available,
                // otherwise it'll break recording
                this.player.one('finishRecord', this.stopStream.bind(this));

                // stop recording
                this.stop();
            } else {
                // stop stream now, since there's no recorded data available
                this.stopStream();
            }
        }

        /**
         * Stop stream and device.
         */

    }, {
        key: 'stopStream',
        value: function stopStream() {
            // stop stream and device
            if (this.stream) {
                this._deviceActive = false;

                if (this.getRecordType() === _recordMode.AUDIO_ONLY) {
                    // make the microphone plugin stop it's device
                    this.surfer.surfer.microphone.stopDevice();
                    return;
                }
                this.stream.getTracks().forEach(function (stream) {
                    stream.stop();
                });
            }
        }

        /**
         * Pause recording.
         */

    }, {
        key: 'pause',
        value: function pause() {
            if (!this.paused) {
                this.pauseTime = new Date().getTime();
                this.paused = true;

                this.engine.pause();
            }
        }

        /**
         * Resume recording.
         */

    }, {
        key: 'resume',
        value: function resume() {
            if (this.paused) {
                this.pausedTime += new Date().getTime() - this.pauseTime;

                this.engine.resume();
                this.paused = false;
            }
        }

        /**
         * Invoked when recording completed and the resulting stream is
         * available.
         * @private
         */

    }, {
        key: 'onRecordComplete',
        value: function onRecordComplete() {
            var _this5 = this;

            // store reference to recorded stream data
            this.player.recordedData = this.engine.recordedData;

            // change the replay button back to a play button
            this.player.controlBar.playToggle.removeClass('vjs-ended');
            this.player.controlBar.playToggle.show();

            // notify listeners that data is available
            this.player.trigger('finishRecord');

            switch (this.getRecordType()) {
                case _recordMode.AUDIO_ONLY:
                    // pause player so user can start playback
                    this.surfer.pause();

                    // setup events for playback
                    this.surfer.setupPlaybackEvents(true);

                    // display loader
                    this.player.loadingSpinner.show();

                    // restore interaction with controls after waveform
                    // rendering is complete
                    this.surfer.surfer.once('ready', function () {
                        _this5._processing = false;
                    });

                    // visualize recorded stream
                    this.load(this.player.recordedData);
                    break;

                case _recordMode.VIDEO_ONLY:
                case _recordMode.AUDIO_VIDEO:
                    // pausing the player so we can visualize the recorded data
                    // will trigger an async video.js 'pause' event that we
                    // have to wait for.
                    this.player.one('pause', function () {
                        // video data is ready
                        _this5._processing = false;

                        // hide loader
                        _this5.player.loadingSpinner.hide();

                        // show stream total duration
                        _this5.setDuration(_this5.streamDuration);

                        // update time during playback and at end
                        _this5.on(_this5.player, 'timeupdate', _this5.playbackTimeUpdate);
                        _this5.on(_this5.player, 'ended', _this5.playbackTimeUpdate);

                        // unmute local audio during playback
                        if (_this5.getRecordType() === _recordMode.AUDIO_VIDEO) {
                            _this5.mediaElement.muted = false;

                            // show the volume bar when it's unmuted
                            _this5.displayVolumeControl(true);
                        }

                        // load recorded media
                        if ((0, _detectBrowser.isChrome)() && _this5.getRecordType() === _recordMode.AUDIO_VIDEO) {
                            // use video property on Chrome
                            _this5.load(_this5.player.recordedData.video);
                        } else {
                            _this5.load(_this5.player.recordedData);
                        }
                    });

                    // pause player so user can start playback
                    this.player.pause();
                    break;

                case _recordMode.ANIMATION:
                    // animation data is ready
                    this._processing = false;

                    // hide loader
                    this.player.loadingSpinner.hide();

                    // show animation total duration
                    this.setDuration(this.streamDuration);

                    // hide preview video
                    this.mediaElement.style.display = 'none';

                    // show the first frame
                    this.player.recordCanvas.show();

                    // pause player so user can start playback
                    this.player.pause();

                    // show animation on play
                    this.on(this.player, 'play', this.showAnimation);

                    // hide animation on pause
                    this.on(this.player, 'pause', this.hideAnimation);
                    break;
            }
        }

        /**
         * Invoked during recording and displays the remaining time.
         * @private
         */

    }, {
        key: 'onCountDown',
        value: function onCountDown() {
            if (!this.paused) {
                var now = new Date().getTime();
                var duration = this.maxLength;
                var currentTime = (now - (this.startTime + this.pausedTime)) / 1000;

                this.streamDuration = currentTime;

                if (currentTime >= duration) {
                    // at the end
                    currentTime = duration;

                    // stop recording
                    this.stop();
                }

                // update duration
                this.setDuration(duration);

                // update current time
                this.setCurrentTime(currentTime, duration);

                // notify listeners
                this.player.trigger('progressRecord');
            }
        }

        /**
         * Get the current time of the recorded stream during playback.
         *
         * Returns 0 if no recording is available (yet).
         */

    }, {
        key: 'getCurrentTime',
        value: function getCurrentTime() {
            var currentTime = isNaN(this.streamCurrentTime) ? 0 : this.streamCurrentTime;

            if (this.getRecordType() === _recordMode.AUDIO_ONLY) {
                currentTime = this.surfer.getCurrentTime();
            }

            return currentTime;
        }

        /**
         * Updates the player's element displaying the current time.
         *
         * @private
         * @param {number} [currentTime=0] - Current position of the
         *    playhead (in seconds).
         * @param {number} [duration=0] - Duration in seconds.
         */

    }, {
        key: 'setCurrentTime',
        value: function setCurrentTime(currentTime, duration) {
            currentTime = isNaN(currentTime) ? 0 : currentTime;
            duration = isNaN(duration) ? 0 : duration;

            switch (this.getRecordType()) {
                case _recordMode.AUDIO_ONLY:
                    this.surfer.setCurrentTime(currentTime, duration);
                    break;

                case _recordMode.VIDEO_ONLY:
                case _recordMode.AUDIO_VIDEO:
                case _recordMode.ANIMATION:
                    this.streamCurrentTime = Math.min(currentTime, duration);

                    // update current time display component
                    this.player.controlBar.currentTimeDisplay.formattedTime_ = this.player.controlBar.currentTimeDisplay.contentEl().lastChild.textContent = (0, _formatTime2.default)(this.streamCurrentTime, duration, this.msDisplayMax);
                    break;
            }
        }

        /**
         * Get the length of the recorded stream in seconds.
         *
         * Returns 0 if no recording is available (yet).
         */

    }, {
        key: 'getDuration',
        value: function getDuration() {
            var duration = isNaN(this.streamDuration) ? 0 : this.streamDuration;

            return duration;
        }

        /**
         * Updates the player's element displaying the duration time.
         *
         * @param {number} [duration=0] - Duration in seconds.
         * @private
         */

    }, {
        key: 'setDuration',
        value: function setDuration(duration) {
            duration = isNaN(duration) ? 0 : duration;

            switch (this.getRecordType()) {
                case _recordMode.AUDIO_ONLY:
                    this.surfer.setDuration(duration);
                    break;

                case _recordMode.VIDEO_ONLY:
                case _recordMode.AUDIO_VIDEO:
                case _recordMode.ANIMATION:
                    // update duration display component
                    this.player.controlBar.durationDisplay.formattedTime_ = this.player.controlBar.durationDisplay.contentEl().lastChild.textContent = (0, _formatTime2.default)(duration, duration, this.msDisplayMax);
                    break;
            }
        }

        /**
         * Start loading data.
         *
         * @param {(string|blob|file)} url - Either the URL of the media file,
         *     a Blob, a File object or MediaStream.
         */

    }, {
        key: 'load',
        value: function load(url) {
            switch (this.getRecordType()) {
                case _recordMode.AUDIO_ONLY:
                    // visualize recorded Blob stream
                    this.surfer.load(url);
                    break;

                case _recordMode.IMAGE_ONLY:
                case _recordMode.VIDEO_ONLY:
                case _recordMode.AUDIO_VIDEO:
                case _recordMode.ANIMATION:
                    if (url instanceof Blob || url instanceof File) {
                        // assign blob using createObjectURL
                        (0, _browserShim2.default)(url, this.mediaElement, false);
                    } else {
                        // assign stream without createObjectURL
                        (0, _browserShim2.default)(url, this.mediaElement, true);
                    }
                    break;
            }
        }

        /**
         * Show save as dialog in browser so the user can store the recorded media
         * locally.
         *
         * @param {object} name - Object with one or more names for the particular
         *     blob(s) you want to save. File extensions are added automatically.
         *     For example: {'video': 'name-of-video-file'}. Supported keys are
         *     'audio', 'video' and 'gif'.
         */

    }, {
        key: 'saveAs',
        value: function saveAs(name) {
            if (this.engine && name !== undefined) {
                this.engine.saveAs(name);
            }
        }

        /**
         * Destroy plugin only.
         *
         * Use `destroy` to remove the plugin and the player.
         */

    }, {
        key: 'dispose',
        value: function dispose() {
            // disable common event listeners
            this.player.off('ready');
            this.player.off('userinactive');
            this.player.off('loadedmetadata');

            // prevent callbacks if recording is in progress
            if (this.engine) {
                this.engine.dispose();
                this.engine.off('recordComplete', this.engineStopCallback);
            }

            // stop recording and device
            this.stop();
            this.stopDevice();

            // stop countdown
            this.player.clearInterval(this.countDown);

            // dispose wavesurfer.js
            if (this.getRecordType() == _recordMode.AUDIO_ONLY) {
                if (this.surfer) {
                    // also disposes player
                    this.surfer.destroy();
                }
            }

            this.resetState();

            _get(Record.prototype.__proto__ || Object.getPrototypeOf(Record.prototype), 'dispose', this).call(this);
        }

        /**
         * Destroy plugin and players and cleanup resources.
         */

    }, {
        key: 'destroy',
        value: function destroy() {
            this.player.dispose();
        }

        /**
         * Reset the plugin.
         */

    }, {
        key: 'reset',
        value: function reset() {
            var _this6 = this;

            // prevent callbacks if recording is in progress
            if (this.engine) {
                this.engine.dispose();
                this.engine.off('recordComplete', this.engineStopCallback);
            }

            // stop recording and device
            this.stop();
            this.stopDevice();

            // stop countdown
            this.player.clearInterval(this.countDown);

            // reset options
            this.loadOptions();

            // reset recorder state
            this.resetState();

            // reset record time
            this.setDuration(this.maxLength);
            this.setCurrentTime(0);

            // reset player
            this.player.reset();
            switch (this.getRecordType()) {
                case _recordMode.AUDIO_ONLY:
                    if (this.surfer && this.surfer.surfer) {
                        // empty last frame
                        this.surfer.surfer.empty();
                    }
                    break;

                case _recordMode.IMAGE_ONLY:
                case _recordMode.ANIMATION:
                    // reset UI
                    this.player.recordCanvas.hide();
                    this.player.cameraButton.hide();
                    break;
            }

            // hide play control
            this.player.controlBar.playToggle.hide();

            // show device selection button
            this.player.deviceButton.show();

            // hide record button
            this.player.recordToggle.hide();

            // loadedmetadata resets the durationDisplay for the
            // first time
            this.player.one('loadedmetadata', function () {
                // display max record time
                _this6.setDuration(_this6.maxLength);
            });
        }

        /**
         * Reset the plugin recorder state.
         * @private
         */

    }, {
        key: 'resetState',
        value: function resetState() {
            this._recording = false;
            this._processing = false;
            this._deviceActive = false;
            this.devices = [];
        }

        /**
         * Get recorder type.
         */

    }, {
        key: 'getRecordType',
        value: function getRecordType() {
            return (0, _recordMode.getRecorderMode)(this.recordImage, this.recordAudio, this.recordVideo, this.recordAnimation);
        }

        /**
         * Create and display snapshot image.
         * @private
         */

    }, {
        key: 'createSnapshot',
        value: function createSnapshot() {
            var _this7 = this;

            this.captureFrame().then(function (result) {
                // turn the canvas data into base64 data with a PNG header
                _this7.player.recordedData = result.toDataURL('image/png');

                // hide preview video
                _this7.mediaElement.style.display = 'none';

                // show the snapshot
                _this7.player.recordCanvas.show();

                // stop recording
                _this7.stop();
            });
        }

        /**
         * Reset UI for retrying a snapshot image.
         * @private
         */

    }, {
        key: 'retrySnapshot',
        value: function retrySnapshot() {
            this._processing = false;

            // retry: hide the snapshot
            this.player.recordCanvas.hide();

            // show preview video
            this.player.el().firstChild.style.display = 'block';
        }

        /**
         * Capture frame from camera and copy data to canvas.
         * @private
         */

    }, {
        key: 'captureFrame',
        value: function captureFrame() {
            var _this8 = this;

            var detected = (0, _detectBrowser.detectBrowser)();
            var recordCanvas = this.player.recordCanvas.el().firstChild;

            // set the canvas size to the dimensions of the camera,
            // which also wipes the content of the canvas
            recordCanvas.width = this.player.width();
            recordCanvas.height = this.player.height();

            return new Promise(function (resolve, reject) {
                // MediaCapture is only supported on:
                // - Chrome 60 and newer (see
                // https://github.com/w3c/mediacapture-image/blob/gh-pages/implementation-status.md)
                // - Firefox behind flag (https://bugzilla.mozilla.org/show_bug.cgi?id=888177)
                //
                // importing ImageCapture can fail when enabling chrome flag is still required.
                // if so; ignore and continue
                if (detected.browser === 'chrome' && detected.version >= 60 && (typeof ImageCapture === 'undefined' ? 'undefined' : _typeof(ImageCapture)) === (typeof Function === 'undefined' ? 'undefined' : _typeof(Function))) {
                    try {
                        var track = _this8.stream.getVideoTracks()[0];
                        var imageCapture = new ImageCapture(track);

                        imageCapture.takePhoto().then(function (blob) {
                            return createImageBitmap(blob);
                        }).then(function (imageBitmap) {
                            // get a frame and copy it onto the canvas
                            _this8.drawCanvas(recordCanvas, imageBitmap);

                            // notify others
                            resolve(recordCanvas);
                        });
                        return;
                    } catch (err) {}
                }
                // no ImageCapture available: do it the oldskool way

                // get a frame and copy it onto the canvas
                _this8.drawCanvas(recordCanvas, _this8.mediaElement);

                // notify others
                resolve(recordCanvas);
            });
        }

        /**
         * Draw image frame on canvas element.
         * @private
         */

    }, {
        key: 'drawCanvas',
        value: function drawCanvas(canvas, element) {
            canvas.getContext('2d').drawImage(element, 0, 0, canvas.width, canvas.height);
        }

        /**
         * Start preview of video stream.
         * @private
         */

    }, {
        key: 'startVideoPreview',
        value: function startVideoPreview() {
            // disable playback events
            this.off('timeupdate');
            this.off('durationchange');
            this.off('loadedmetadata');
            this.off('play');

            // mute local audio
            this.mediaElement.muted = true;

            // hide volume control to prevent feedback
            this.displayVolumeControl(false);

            // start or resume live preview
            this.load(this.stream);
            this.mediaElement.play();
        }

        /**
         * Show animated GIF.
         * @private
         */

    }, {
        key: 'showAnimation',
        value: function showAnimation() {
            var animationDisplay = this.player.animationDisplay.el().firstChild;

            // set the image size to the dimensions of the recorded animation
            animationDisplay.width = this.player.width();
            animationDisplay.height = this.player.height();

            // hide the first frame
            this.player.recordCanvas.hide();

            // show the animation
            (0, _browserShim2.default)(this.player.recordedData, animationDisplay, false);
            this.player.animationDisplay.show();
        }

        /**
         * Hide animated GIF.
         * @private
         */

    }, {
        key: 'hideAnimation',
        value: function hideAnimation() {
            // show the first frame
            this.player.recordCanvas.show();

            // hide the animation
            this.player.animationDisplay.hide();
        }

        /**
         * Update time during playback.
         * @private
         */

    }, {
        key: 'playbackTimeUpdate',
        value: function playbackTimeUpdate() {
            this.setCurrentTime(this.player.currentTime(), this.streamDuration);
        }

        /**
         * Received new timestamp (when timeSlice option is enabled).
         * @private
         */

    }, {
        key: 'onTimeStamp',
        value: function onTimeStamp(current, all) {
            this.player.currentTimestamp = current;
            this.player.allTimestamps = all;

            // get blob (only for MediaStreamRecorder)
            var internal;
            switch (this.getRecordType()) {
                case _recordMode.AUDIO_ONLY:
                    internal = this.engine.engine.audioRecorder;
                    break;

                case _recordMode.ANIMATION:
                    internal = this.engine.engine.gifRecorder;
                    break;

                default:
                    internal = this.engine.engine.videoRecorder;
            }
            internal = internal.getInternalRecorder();
            if (internal instanceof MediaStreamRecorder === true) {
                this.player.recordedData = internal.getArrayOfBlobs();
            }

            // notify others
            this.player.trigger('timestamp');
        }

        /**
         * Collects information about the media input and output devices
         * available on the system.
         *
         * Returns an array.
         */

    }, {
        key: 'enumerateDevices',
        value: function enumerateDevices() {
            var _this9 = this;

            if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
                this.player.enumerateErrorCode = 'enumerateDevices() not supported.';
                this.player.trigger('enumerateError');
                return;
            }

            // List cameras and microphones.
            navigator.mediaDevices.enumerateDevices(this).then(function (devices) {
                _this9.devices = [];
                devices.forEach(function (device) {
                    _this9.devices.push(device);
                });

                // notify listeners
                _this9.player.trigger('enumerateReady');
            }).catch(function (err) {
                _this9.player.enumerateErrorCode = err;
                _this9.player.trigger('enumerateError');
            });
        }

        /**
         * Show or hide the volume menu.
         *
         * @private
         * @param {boolean} display - Hide/show volume control.
         */

    }, {
        key: 'displayVolumeControl',
        value: function displayVolumeControl(display) {
            if (this.player.controlBar.volumePanel !== undefined) {
                if (display === true) {
                    display = 'flex';
                } else {
                    display = 'none';
                }
                this.player.controlBar.volumePanel.el().style.display = display;
            }
        }
    }]);

    return Record;
}(Plugin);

// version nr gets replaced during build


Record.VERSION = '2.0.5';

// register plugin
_video2.default.Record = Record;
_video2.default.registerPlugin('record', Record);

// export plugin
module.exports = {
    Record: Record
};
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./controls/animation-display":1,"./controls/camera-button":2,"./controls/device-button":3,"./controls/record-canvas":4,"./controls/record-indicator":5,"./controls/record-toggle":6,"./defaults":7,"./engine/record-engine":8,"./engine/record-mode":9,"./engine/record-rtc":10,"./utils/browser-shim":11,"./utils/detect-browser":12,"./utils/format-time":13}]},{},[15])(15)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJlczUvY29udHJvbHMvYW5pbWF0aW9uLWRpc3BsYXkuanMiLCJlczUvY29udHJvbHMvY2FtZXJhLWJ1dHRvbi5qcyIsImVzNS9jb250cm9scy9kZXZpY2UtYnV0dG9uLmpzIiwiZXM1L2NvbnRyb2xzL3JlY29yZC1jYW52YXMuanMiLCJlczUvY29udHJvbHMvcmVjb3JkLWluZGljYXRvci5qcyIsImVzNS9jb250cm9scy9yZWNvcmQtdG9nZ2xlLmpzIiwiZXM1L2RlZmF1bHRzLmpzIiwiZXM1L2VuZ2luZS9yZWNvcmQtZW5naW5lLmpzIiwiZXM1L2VuZ2luZS9yZWNvcmQtbW9kZS5qcyIsImVzNS9lbmdpbmUvcmVjb3JkLXJ0Yy5qcyIsImVzNS91dGlscy9icm93c2VyLXNoaW0uanMiLCJlczUvdXRpbHMvZGV0ZWN0LWJyb3dzZXIuanMiLCJlczUvdXRpbHMvZm9ybWF0LXRpbWUuanMiLCJub2RlX21vZHVsZXMvZ2xvYmFsL3dpbmRvdy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNySkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN09BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ3hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9nZXQgPSBmdW5jdGlvbiBnZXQob2JqZWN0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHsgaWYgKG9iamVjdCA9PT0gbnVsbCkgb2JqZWN0ID0gRnVuY3Rpb24ucHJvdG90eXBlOyB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBwcm9wZXJ0eSk7IGlmIChkZXNjID09PSB1bmRlZmluZWQpIHsgdmFyIHBhcmVudCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmplY3QpOyBpZiAocGFyZW50ID09PSBudWxsKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gZWxzZSB7IHJldHVybiBnZXQocGFyZW50LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpOyB9IH0gZWxzZSBpZiAoXCJ2YWx1ZVwiIGluIGRlc2MpIHsgcmV0dXJuIGRlc2MudmFsdWU7IH0gZWxzZSB7IHZhciBnZXR0ZXIgPSBkZXNjLmdldDsgaWYgKGdldHRlciA9PT0gdW5kZWZpbmVkKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gcmV0dXJuIGdldHRlci5jYWxsKHJlY2VpdmVyKTsgfSB9O1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbi8qKlxuICogQGZpbGUgYW5pbWF0aW9uLWRpc3BsYXkuanNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5cbnZhciBDb21wb25lbnQgPSB2aWRlb2pzLmdldENvbXBvbmVudCgnQ29tcG9uZW50Jyk7XG5cbi8qKlxuICogSW1hZ2UgZm9yIGRpc3BsYXlpbmcgYW5pbWF0ZWQgR0lGIGltYWdlLlxuICpcbiAqIEBjbGFzc1xuICogQGF1Z21lbnRzIHZpZGVvanMuQ29tcG9uZW50XG4qL1xuXG52YXIgQW5pbWF0aW9uRGlzcGxheSA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhBbmltYXRpb25EaXNwbGF5LCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBBbmltYXRpb25EaXNwbGF5KCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBbmltYXRpb25EaXNwbGF5KTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoQW5pbWF0aW9uRGlzcGxheS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEFuaW1hdGlvbkRpc3BsYXkpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhBbmltYXRpb25EaXNwbGF5LCBbe1xuICAgIGtleTogJ2NyZWF0ZUVsJyxcblxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIHRoZSBgQW5pbWF0aW9uRGlzcGxheWBzIERPTSBlbGVtZW50LlxuICAgICAqXG4gICAgICogQHJldHVybiB7RWxlbWVudH1cbiAgICAgKiAgICAgICAgIFRoZSBkb20gZWxlbWVudCB0aGF0IGdldHMgY3JlYXRlZC5cbiAgICAgKi9cbiAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlRWwoKSB7XG4gICAgICByZXR1cm4gX2dldChBbmltYXRpb25EaXNwbGF5LnByb3RvdHlwZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEFuaW1hdGlvbkRpc3BsYXkucHJvdG90eXBlKSwgJ2NyZWF0ZUVsJywgdGhpcykuY2FsbCh0aGlzLCAnZGl2Jywge1xuICAgICAgICBjbGFzc05hbWU6ICd2anMtYW5pbWF0aW9uLWRpc3BsYXknLFxuICAgICAgICBpbm5lckhUTUw6ICc8aW1nIC8+J1xuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEFuaW1hdGlvbkRpc3BsYXk7XG59KENvbXBvbmVudCk7XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnQW5pbWF0aW9uRGlzcGxheScsIEFuaW1hdGlvbkRpc3BsYXkpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBBbmltYXRpb25EaXNwbGF5OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG4vKipcbiAqIEBmaWxlIGNhbWVyYS1idXR0b24uanNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5cbnZhciBCdXR0b24gPSB2aWRlb2pzLmdldENvbXBvbmVudCgnQnV0dG9uJyk7XG52YXIgQ29tcG9uZW50ID0gdmlkZW9qcy5nZXRDb21wb25lbnQoJ0NvbXBvbmVudCcpO1xuXG4vKipcbiAqIEJ1dHRvbiB0byB0b2dnbGUgYmV0d2VlbiBjcmVhdGUgYW5kIHJldHJ5IHNuYXBzaG90IGltYWdlLlxuICpcbiAqIEBjbGFzc1xuICogQGF1Z21lbnRzIHZpZGVvanMuQnV0dG9uXG4qL1xuXG52YXIgQ2FtZXJhQnV0dG9uID0gZnVuY3Rpb24gKF9CdXR0b24pIHtcbiAgX2luaGVyaXRzKENhbWVyYUJ1dHRvbiwgX0J1dHRvbik7XG5cbiAgLyoqXG4gICAqIFRoZSBjb25zdHJ1Y3RvciBmdW5jdGlvbiBmb3IgdGhlIGNsYXNzLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0geyh2aWRlb2pzLlBsYXllcnxPYmplY3QpfSBwbGF5ZXIgLSBWaWRlby5qcyBwbGF5ZXIgaW5zdGFuY2UuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gUGxheWVyIG9wdGlvbnMuXG4gICAqL1xuICBmdW5jdGlvbiBDYW1lcmFCdXR0b24ocGxheWVyLCBvcHRpb25zKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENhbWVyYUJ1dHRvbik7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoQ2FtZXJhQnV0dG9uLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ2FtZXJhQnV0dG9uKSkuY2FsbCh0aGlzLCBwbGF5ZXIsIG9wdGlvbnMpKTtcblxuICAgIF90aGlzLm9uKCdjbGljaycsIF90aGlzLm9uQ2xpY2spO1xuICAgIF90aGlzLm9uKCd0YXAnLCBfdGhpcy5vbkNsaWNrKTtcbiAgICBfdGhpcy5vbihwbGF5ZXIsICdzdGFydFJlY29yZCcsIF90aGlzLm9uU3RhcnQpO1xuICAgIF90aGlzLm9uKHBsYXllciwgJ3N0b3BSZWNvcmQnLCBfdGhpcy5vblN0b3ApO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBCdWlsZHMgdGhlIGRlZmF1bHQgRE9NIGBjbGFzc05hbWVgLlxuICAgKlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqICAgICAgICAgVGhlIERPTSBgY2xhc3NOYW1lYCBmb3IgdGhpcyBvYmplY3QuXG4gICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKENhbWVyYUJ1dHRvbiwgW3tcbiAgICBrZXk6ICdidWlsZENTU0NsYXNzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gYnVpbGRDU1NDbGFzcygpIHtcbiAgICAgIHJldHVybiAndmpzLWNhbWVyYS1idXR0b24gdmpzLWNvbnRyb2wgdmpzLWljb24tcGhvdG8tY2FtZXJhJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIGdldHMgY2FsbGVkIHdoZW4gdGhlIGJ1dHRvbiBpcyBjbGlja2VkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtFdmVudFRhcmdldH5FdmVudH0gZXZlbnRcbiAgICAgKiAgICAgICAgVGhlIGB0YXBgIG9yIGBjbGlja2AgZXZlbnQgdGhhdCBjYXVzZWQgdGhpcyBmdW5jdGlvbiB0byBiZVxuICAgICAqICAgICAgICBjYWxsZWQuXG4gICAgICpcbiAgICAgKiBAbGlzdGVucyB0YXBcbiAgICAgKiBAbGlzdGVucyBjbGlja1xuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdvbkNsaWNrJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25DbGljayhldmVudCkge1xuICAgICAgdmFyIHJlY29yZGVyID0gdGhpcy5wbGF5ZXJfLnJlY29yZCgpO1xuXG4gICAgICBpZiAoIXJlY29yZGVyLmlzUHJvY2Vzc2luZygpKSB7XG4gICAgICAgIC8vIGNyZWF0ZSBzbmFwc2hvdFxuICAgICAgICByZWNvcmRlci5zdGFydCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gcmV0cnlcbiAgICAgICAgcmVjb3JkZXIucmV0cnlTbmFwc2hvdCgpO1xuXG4gICAgICAgIC8vIHJlc2V0IGNhbWVyYSBidXR0b25cbiAgICAgICAgdGhpcy5vblN0b3AoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgdGhlIHZqcy1pY29uLXJlcGxheSBjbGFzcyB0byB0aGUgZWxlbWVudCBzbyBpdCBjYW4gY2hhbmdlIGFwcGVhcmFuY2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0V2ZW50VGFyZ2V0fkV2ZW50fSBbZXZlbnRdXG4gICAgICogICAgICAgIFRoZSBldmVudCB0aGF0IGNhdXNlZCB0aGlzIGZ1bmN0aW9uIHRvIHJ1bi5cbiAgICAgKlxuICAgICAqIEBsaXN0ZW5zIFBsYXllciNzdGFydFJlY29yZFxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdvblN0YXJ0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25TdGFydChldmVudCkge1xuICAgICAgLy8gcmVwbGFjZSBlbGVtZW50IGNsYXNzIHNvIGl0IGNhbiBjaGFuZ2UgYXBwZWFyYW5jZVxuICAgICAgdGhpcy5yZW1vdmVDbGFzcygndmpzLWljb24tcGhvdG8tY2FtZXJhJyk7XG4gICAgICB0aGlzLmFkZENsYXNzKCd2anMtaWNvbi1yZXBsYXknKTtcblxuICAgICAgLy8gY2hhbmdlIHRoZSBidXR0b24gdGV4dFxuICAgICAgdGhpcy5jb250cm9sVGV4dCgnUmV0cnknKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgdGhlIHZqcy1pY29uLXBob3RvLWNhbWVyYSBjbGFzcyB0byB0aGUgZWxlbWVudCBzbyBpdCBjYW4gY2hhbmdlIGFwcGVhcmFuY2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0V2ZW50VGFyZ2V0fkV2ZW50fSBbZXZlbnRdXG4gICAgICogICAgICAgIFRoZSBldmVudCB0aGF0IGNhdXNlZCB0aGlzIGZ1bmN0aW9uIHRvIHJ1bi5cbiAgICAgKlxuICAgICAqIEBsaXN0ZW5zIFBsYXllciNzdG9wUmVjb3JkXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ29uU3RvcCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uU3RvcChldmVudCkge1xuICAgICAgLy8gcmVwbGFjZSBlbGVtZW50IGNsYXNzIHNvIGl0IGNhbiBjaGFuZ2UgYXBwZWFyYW5jZVxuICAgICAgdGhpcy5yZW1vdmVDbGFzcygndmpzLWljb24tcmVwbGF5Jyk7XG4gICAgICB0aGlzLmFkZENsYXNzKCd2anMtaWNvbi1waG90by1jYW1lcmEnKTtcblxuICAgICAgLy8gY2hhbmdlIHRoZSBidXR0b24gdGV4dFxuICAgICAgdGhpcy5jb250cm9sVGV4dCgnSW1hZ2UnKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQ2FtZXJhQnV0dG9uO1xufShCdXR0b24pO1xuXG4vKipcbiAqIFRoZSB0ZXh0IHRoYXQgc2hvdWxkIGRpc3BsYXkgb3ZlciB0aGUgYENhbWVyYUJ1dHRvbmBzIGNvbnRyb2xzLiBBZGRlZCBmb3IgbG9jYWxpemF0aW9uLlxuICpcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKiBAcHJpdmF0ZVxuICovXG5cblxuQ2FtZXJhQnV0dG9uLnByb3RvdHlwZS5jb250cm9sVGV4dF8gPSAnSW1hZ2UnO1xuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ0NhbWVyYUJ1dHRvbicsIENhbWVyYUJ1dHRvbik7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IENhbWVyYUJ1dHRvbjsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuLyoqXG4gKiBAZmlsZSBkZXZpY2UtYnV0dG9uLmpzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuXG52YXIgQnV0dG9uID0gdmlkZW9qcy5nZXRDb21wb25lbnQoJ0J1dHRvbicpO1xudmFyIENvbXBvbmVudCA9IHZpZGVvanMuZ2V0Q29tcG9uZW50KCdDb21wb25lbnQnKTtcblxuLyoqXG4gKiBCdXR0b24gdG8gc2VsZWN0IHJlY29yZGluZyBkZXZpY2UuXG4gKlxuICogQGNsYXNzXG4gKiBAYXVnbWVudHMgdmlkZW9qcy5CdXR0b25cbiovXG5cbnZhciBEZXZpY2VCdXR0b24gPSBmdW5jdGlvbiAoX0J1dHRvbikge1xuICBfaW5oZXJpdHMoRGV2aWNlQnV0dG9uLCBfQnV0dG9uKTtcblxuICAvKipcbiAgICogVGhlIGNvbnN0cnVjdG9yIGZ1bmN0aW9uIGZvciB0aGUgY2xhc3MuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7KHZpZGVvanMuUGxheWVyfE9iamVjdCl9IHBsYXllciAtIFZpZGVvLmpzIHBsYXllciBpbnN0YW5jZS5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBQbGF5ZXIgb3B0aW9ucy5cbiAgICovXG4gIGZ1bmN0aW9uIERldmljZUJ1dHRvbihwbGF5ZXIsIG9wdGlvbnMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRGV2aWNlQnV0dG9uKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChEZXZpY2VCdXR0b24uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihEZXZpY2VCdXR0b24pKS5jYWxsKHRoaXMsIHBsYXllciwgb3B0aW9ucykpO1xuXG4gICAgX3RoaXMub24oJ2NsaWNrJywgX3RoaXMub25DbGljayk7XG4gICAgX3RoaXMub24oJ3RhcCcsIF90aGlzLm9uQ2xpY2spO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIGdldHMgY2FsbGVkIHdoZW4gdGhlIGJ1dHRvbiBpcyBjbGlja2VkLlxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50VGFyZ2V0fkV2ZW50fSBldmVudFxuICAgKiAgICAgICAgVGhlIGB0YXBgIG9yIGBjbGlja2AgZXZlbnQgdGhhdCBjYXVzZWQgdGhpcyBmdW5jdGlvbiB0byBiZVxuICAgKiAgICAgICAgY2FsbGVkLlxuICAgKlxuICAgKiBAbGlzdGVucyB0YXBcbiAgICogQGxpc3RlbnMgY2xpY2tcbiAgICovXG5cblxuICBfY3JlYXRlQ2xhc3MoRGV2aWNlQnV0dG9uLCBbe1xuICAgIGtleTogJ29uQ2xpY2snLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbkNsaWNrKGV2ZW50KSB7XG4gICAgICAvLyBvcGVuIGRldmljZSBkaWFsb2dcbiAgICAgIHRoaXMucGxheWVyXy5yZWNvcmQoKS5nZXREZXZpY2UoKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRGV2aWNlQnV0dG9uO1xufShCdXR0b24pO1xuXG4vKipcbiAqIFRoZSB0ZXh0IHRoYXQgc2hvdWxkIGRpc3BsYXkgb3ZlciB0aGUgYERldmljZUJ1dHRvbmBzIGNvbnRyb2xzLiBBZGRlZCBmb3IgbG9jYWxpemF0aW9uLlxuICpcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKiBAcHJpdmF0ZVxuICovXG5cblxuRGV2aWNlQnV0dG9uLnByb3RvdHlwZS5jb250cm9sVGV4dF8gPSAnRGV2aWNlJztcblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdEZXZpY2VCdXR0b24nLCBEZXZpY2VCdXR0b24pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBEZXZpY2VCdXR0b247IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2dldCA9IGZ1bmN0aW9uIGdldChvYmplY3QsIHByb3BlcnR5LCByZWNlaXZlcikgeyBpZiAob2JqZWN0ID09PSBudWxsKSBvYmplY3QgPSBGdW5jdGlvbi5wcm90b3R5cGU7IHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHByb3BlcnR5KTsgaWYgKGRlc2MgPT09IHVuZGVmaW5lZCkgeyB2YXIgcGFyZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iamVjdCk7IGlmIChwYXJlbnQgPT09IG51bGwpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSBlbHNlIHsgcmV0dXJuIGdldChwYXJlbnQsIHByb3BlcnR5LCByZWNlaXZlcik7IH0gfSBlbHNlIGlmIChcInZhbHVlXCIgaW4gZGVzYykgeyByZXR1cm4gZGVzYy52YWx1ZTsgfSBlbHNlIHsgdmFyIGdldHRlciA9IGRlc2MuZ2V0OyBpZiAoZ2V0dGVyID09PSB1bmRlZmluZWQpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSByZXR1cm4gZ2V0dGVyLmNhbGwocmVjZWl2ZXIpOyB9IH07XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuLyoqXG4gKiBAZmlsZSByZWNvcmQtY2FudmFzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuXG52YXIgQ29tcG9uZW50ID0gdmlkZW9qcy5nZXRDb21wb25lbnQoJ0NvbXBvbmVudCcpO1xuXG4vKipcbiAqIENhbnZhcyBmb3IgZGlzcGxheWluZyBzbmFwc2hvdCBpbWFnZS5cbiAqXG4gKiBAY2xhc3NcbiAqIEBhdWdtZW50cyB2aWRlb2pzLkNvbXBvbmVudFxuKi9cblxudmFyIFJlY29yZENhbnZhcyA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhSZWNvcmRDYW52YXMsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFJlY29yZENhbnZhcygpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmVjb3JkQ2FudmFzKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoUmVjb3JkQ2FudmFzLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoUmVjb3JkQ2FudmFzKSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoUmVjb3JkQ2FudmFzLCBbe1xuICAgIGtleTogJ2NyZWF0ZUVsJyxcblxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIHRoZSBgUmVjb3JkQ2FudmFzYHMgRE9NIGVsZW1lbnQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtFbGVtZW50fVxuICAgICAqICAgICAgICAgVGhlIGRvbSBlbGVtZW50IHRoYXQgZ2V0cyBjcmVhdGVkLlxuICAgICAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVFbCgpIHtcbiAgICAgIHJldHVybiBfZ2V0KFJlY29yZENhbnZhcy5wcm90b3R5cGUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihSZWNvcmRDYW52YXMucHJvdG90eXBlKSwgJ2NyZWF0ZUVsJywgdGhpcykuY2FsbCh0aGlzLCAnZGl2Jywge1xuICAgICAgICBjbGFzc05hbWU6ICd2anMtcmVjb3JkLWNhbnZhcycsXG4gICAgICAgIGlubmVySFRNTDogJzxjYW52YXM+PC9jYW52YXM+J1xuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFJlY29yZENhbnZhcztcbn0oQ29tcG9uZW50KTtcblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdSZWNvcmRDYW52YXMnLCBSZWNvcmRDYW52YXMpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBSZWNvcmRDYW52YXM7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2dldCA9IGZ1bmN0aW9uIGdldChvYmplY3QsIHByb3BlcnR5LCByZWNlaXZlcikgeyBpZiAob2JqZWN0ID09PSBudWxsKSBvYmplY3QgPSBGdW5jdGlvbi5wcm90b3R5cGU7IHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHByb3BlcnR5KTsgaWYgKGRlc2MgPT09IHVuZGVmaW5lZCkgeyB2YXIgcGFyZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iamVjdCk7IGlmIChwYXJlbnQgPT09IG51bGwpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSBlbHNlIHsgcmV0dXJuIGdldChwYXJlbnQsIHByb3BlcnR5LCByZWNlaXZlcik7IH0gfSBlbHNlIGlmIChcInZhbHVlXCIgaW4gZGVzYykgeyByZXR1cm4gZGVzYy52YWx1ZTsgfSBlbHNlIHsgdmFyIGdldHRlciA9IGRlc2MuZ2V0OyBpZiAoZ2V0dGVyID09PSB1bmRlZmluZWQpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSByZXR1cm4gZ2V0dGVyLmNhbGwocmVjZWl2ZXIpOyB9IH07XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuLyoqXG4gKiBAZmlsZSByZWNvcmQtaW5kaWNhdG9yLmpzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuXG52YXIgQ29tcG9uZW50ID0gdmlkZW9qcy5nZXRDb21wb25lbnQoJ0NvbXBvbmVudCcpO1xuXG4vKipcbiAqIEljb24gaW5kaWNhdGluZyByZWNvcmRpbmcgaXMgYWN0aXZlLlxuICpcbiAqIEBjbGFzc1xuICogQGF1Z21lbnRzIHZpZGVvanMuQ29tcG9uZW50XG4qL1xuXG52YXIgUmVjb3JkSW5kaWNhdG9yID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFJlY29yZEluZGljYXRvciwgX0NvbXBvbmVudCk7XG5cbiAgLyoqXG4gICAqIFRoZSBjb25zdHJ1Y3RvciBmdW5jdGlvbiBmb3IgdGhlIGNsYXNzLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0geyh2aWRlb2pzLlBsYXllcnxPYmplY3QpfSBwbGF5ZXIgLSBWaWRlby5qcyBwbGF5ZXIgaW5zdGFuY2UuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gUGxheWVyIG9wdGlvbnMuXG4gICAqL1xuICBmdW5jdGlvbiBSZWNvcmRJbmRpY2F0b3IocGxheWVyLCBvcHRpb25zKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJlY29yZEluZGljYXRvcik7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoUmVjb3JkSW5kaWNhdG9yLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoUmVjb3JkSW5kaWNhdG9yKSkuY2FsbCh0aGlzLCBwbGF5ZXIsIG9wdGlvbnMpKTtcblxuICAgIF90aGlzLm9uKHBsYXllciwgJ3N0YXJ0UmVjb3JkJywgX3RoaXMuc2hvdyk7XG4gICAgX3RoaXMub24ocGxheWVyLCAnc3RvcFJlY29yZCcsIF90aGlzLmhpZGUpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgdGhlIGBSZWNvcmRJbmRpY2F0b3JgcyBET00gZWxlbWVudC5cbiAgICpcbiAgICogQHJldHVybiB7RWxlbWVudH1cbiAgICogICAgICAgICBUaGUgZG9tIGVsZW1lbnQgdGhhdCBnZXRzIGNyZWF0ZWQuXG4gICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKFJlY29yZEluZGljYXRvciwgW3tcbiAgICBrZXk6ICdjcmVhdGVFbCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZUVsKCkge1xuICAgICAgcmV0dXJuIF9nZXQoUmVjb3JkSW5kaWNhdG9yLnByb3RvdHlwZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFJlY29yZEluZGljYXRvci5wcm90b3R5cGUpLCAnY3JlYXRlRWwnLCB0aGlzKS5jYWxsKHRoaXMsICdkaXYnLCB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3Zqcy1yZWNvcmQtaW5kaWNhdG9yIHZqcy1jb250cm9sJyxcbiAgICAgICAgZGlyOiAnbHRyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGlzYWJsZSBldmVudCBoYW5kbGVycy5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnZGlzYWJsZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRpc2FibGUoKSB7XG4gICAgICB0aGlzLm9mZih0aGlzLnBsYXllcl8sICdzdGFydFJlY29yZCcsIHRoaXMuc2hvdyk7XG4gICAgICB0aGlzLm9mZih0aGlzLnBsYXllcl8sICdzdG9wUmVjb3JkJywgdGhpcy5oaWRlKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUmVjb3JkSW5kaWNhdG9yO1xufShDb21wb25lbnQpO1xuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ1JlY29yZEluZGljYXRvcicsIFJlY29yZEluZGljYXRvcik7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFJlY29yZEluZGljYXRvcjsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuLyoqXG4gKiBAZmlsZSByZWNvcmQtdG9nZ2xlLmpzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuXG52YXIgQnV0dG9uID0gdmlkZW9qcy5nZXRDb21wb25lbnQoJ0J1dHRvbicpO1xudmFyIENvbXBvbmVudCA9IHZpZGVvanMuZ2V0Q29tcG9uZW50KCdDb21wb25lbnQnKTtcblxuLyoqXG4gKiBCdXR0b24gdG8gdG9nZ2xlIGJldHdlZW4gc3RhcnQgYW5kIHN0b3AgcmVjb3JkaW5nLlxuICpcbiAqIEBjbGFzc1xuICogQGF1Z21lbnRzIHZpZGVvanMuQnV0dG9uXG4qL1xuXG52YXIgUmVjb3JkVG9nZ2xlID0gZnVuY3Rpb24gKF9CdXR0b24pIHtcbiAgX2luaGVyaXRzKFJlY29yZFRvZ2dsZSwgX0J1dHRvbik7XG5cbiAgLyoqXG4gICAqIFRoZSBjb25zdHJ1Y3RvciBmdW5jdGlvbiBmb3IgdGhlIGNsYXNzLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0geyh2aWRlb2pzLlBsYXllcnxPYmplY3QpfSBwbGF5ZXIgLSBWaWRlby5qcyBwbGF5ZXIgaW5zdGFuY2UuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gUGxheWVyIG9wdGlvbnMuXG4gICAqL1xuICBmdW5jdGlvbiBSZWNvcmRUb2dnbGUocGxheWVyLCBvcHRpb25zKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJlY29yZFRvZ2dsZSk7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoUmVjb3JkVG9nZ2xlLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoUmVjb3JkVG9nZ2xlKSkuY2FsbCh0aGlzLCBwbGF5ZXIsIG9wdGlvbnMpKTtcblxuICAgIF90aGlzLm9uKCdjbGljaycsIF90aGlzLm9uQ2xpY2spO1xuICAgIF90aGlzLm9uKCd0YXAnLCBfdGhpcy5vbkNsaWNrKTtcbiAgICBfdGhpcy5vbihwbGF5ZXIsICdzdGFydFJlY29yZCcsIF90aGlzLm9uU3RhcnQpO1xuICAgIF90aGlzLm9uKHBsYXllciwgJ3N0b3BSZWNvcmQnLCBfdGhpcy5vblN0b3ApO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBCdWlsZHMgdGhlIGRlZmF1bHQgRE9NIGBjbGFzc05hbWVgLlxuICAgKlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqICAgICAgICAgVGhlIERPTSBgY2xhc3NOYW1lYCBmb3IgdGhpcyBvYmplY3QuXG4gICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKFJlY29yZFRvZ2dsZSwgW3tcbiAgICBrZXk6ICdidWlsZENTU0NsYXNzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gYnVpbGRDU1NDbGFzcygpIHtcbiAgICAgIHJldHVybiAndmpzLXJlY29yZC1idXR0b24gdmpzLWNvbnRyb2wgdmpzLWljb24tcmVjb3JkLXN0YXJ0JztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIGdldHMgY2FsbGVkIHdoZW4gdGhlIGJ1dHRvbiBpcyBjbGlja2VkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtFdmVudFRhcmdldH5FdmVudH0gZXZlbnRcbiAgICAgKiAgICAgICAgVGhlIGB0YXBgIG9yIGBjbGlja2AgZXZlbnQgdGhhdCBjYXVzZWQgdGhpcyBmdW5jdGlvbiB0byBiZVxuICAgICAqICAgICAgICBjYWxsZWQuXG4gICAgICpcbiAgICAgKiBAbGlzdGVucyB0YXBcbiAgICAgKiBAbGlzdGVucyBjbGlja1xuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdvbkNsaWNrJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25DbGljayhldmVudCkge1xuICAgICAgdmFyIHJlY29yZGVyID0gdGhpcy5wbGF5ZXJfLnJlY29yZCgpO1xuICAgICAgaWYgKCFyZWNvcmRlci5pc1JlY29yZGluZygpKSB7XG4gICAgICAgIHJlY29yZGVyLnN0YXJ0KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZWNvcmRlci5zdG9wKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIHRoZSB2anMtaWNvbi1yZWNvcmQtc3RvcCBjbGFzcyB0byB0aGUgZWxlbWVudCBzbyBpdCBjYW4gY2hhbmdlIGFwcGVhcmFuY2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0V2ZW50VGFyZ2V0fkV2ZW50fSBbZXZlbnRdXG4gICAgICogICAgICAgIFRoZSBldmVudCB0aGF0IGNhdXNlZCB0aGlzIGZ1bmN0aW9uIHRvIHJ1bi5cbiAgICAgKlxuICAgICAqIEBsaXN0ZW5zIFBsYXllciNzdGFydFJlY29yZFxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdvblN0YXJ0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25TdGFydChldmVudCkge1xuICAgICAgLy8gcmVwbGFjZSBlbGVtZW50IGNsYXNzIHNvIGl0IGNhbiBjaGFuZ2UgYXBwZWFyYW5jZVxuICAgICAgdGhpcy5yZW1vdmVDbGFzcygndmpzLWljb24tcmVjb3JkLXN0YXJ0Jyk7XG4gICAgICB0aGlzLmFkZENsYXNzKCd2anMtaWNvbi1yZWNvcmQtc3RvcCcpO1xuXG4gICAgICAvLyBjaGFuZ2UgdGhlIGJ1dHRvbiB0ZXh0XG4gICAgICB0aGlzLmNvbnRyb2xUZXh0KCdTdG9wJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIHRoZSB2anMtaWNvbi1yZWNvcmQtc3RhcnQgY2xhc3MgdG8gdGhlIGVsZW1lbnQgc28gaXQgY2FuIGNoYW5nZSBhcHBlYXJhbmNlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtFdmVudFRhcmdldH5FdmVudH0gW2V2ZW50XVxuICAgICAqICAgICAgICBUaGUgZXZlbnQgdGhhdCBjYXVzZWQgdGhpcyBmdW5jdGlvbiB0byBydW4uXG4gICAgICpcbiAgICAgKiBAbGlzdGVucyBQbGF5ZXIjc3RvcFJlY29yZFxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdvblN0b3AnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvblN0b3AoZXZlbnQpIHtcbiAgICAgIC8vIHJlcGxhY2UgZWxlbWVudCBjbGFzcyBzbyBpdCBjYW4gY2hhbmdlIGFwcGVhcmFuY2VcbiAgICAgIHRoaXMucmVtb3ZlQ2xhc3MoJ3Zqcy1pY29uLXJlY29yZC1zdG9wJyk7XG4gICAgICB0aGlzLmFkZENsYXNzKCd2anMtaWNvbi1yZWNvcmQtc3RhcnQnKTtcblxuICAgICAgLy8gY2hhbmdlIHRoZSBidXR0b24gdGV4dFxuICAgICAgdGhpcy5jb250cm9sVGV4dCgnUmVjb3JkJyk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFJlY29yZFRvZ2dsZTtcbn0oQnV0dG9uKTtcblxuLyoqXG4gKiBUaGUgdGV4dCB0aGF0IHNob3VsZCBkaXNwbGF5IG92ZXIgdGhlIGBSZWNvcmRUb2dnbGVgcyBjb250cm9scy4gQWRkZWQgZm9yIGxvY2FsaXphdGlvbi5cbiAqXG4gKiBAdHlwZSB7c3RyaW5nfVxuICogQHByaXZhdGVcbiAqL1xuXG5cblJlY29yZFRvZ2dsZS5wcm90b3R5cGUuY29udHJvbFRleHRfID0gJ1JlY29yZCc7XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnUmVjb3JkVG9nZ2xlJywgUmVjb3JkVG9nZ2xlKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gUmVjb3JkVG9nZ2xlOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuLyoqXG4gKiBAZmlsZSBkZWZhdWx0cy5qc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cblxuLy9wbHVnaW4gZGVmYXVsdHNcbnZhciBwbHVnaW5EZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAvLyBTaW5nbGUgc25hcHNob3QgaW1hZ2UuXG4gICAgaW1hZ2U6IGZhbHNlLFxuICAgIC8vIEluY2x1ZGUgYXVkaW8gaW4gdGhlIHJlY29yZGVkIGNsaXAuXG4gICAgYXVkaW86IGZhbHNlLFxuICAgIC8vIEluY2x1ZGUgdmlkZW8gaW4gdGhlIHJlY29yZGVkIGNsaXAuXG4gICAgdmlkZW86IGZhbHNlLFxuICAgIC8vIEFuaW1hdGVkIEdJRi5cbiAgICBhbmltYXRpb246IGZhbHNlLFxuICAgIC8vIE1heGltdW0gbGVuZ3RoIG9mIHRoZSByZWNvcmRlZCBjbGlwLlxuICAgIG1heExlbmd0aDogMTAsXG4gICAgLy8gV2lkdGggb2YgdGhlIHJlY29yZGVkIHZpZGVvIGZyYW1lcy5cbiAgICBmcmFtZVdpZHRoOiAzMjAsXG4gICAgLy8gSGVpZ2h0IG9mIHRoZSByZWNvcmRlZCB2aWRlbyBmcmFtZXMuXG4gICAgZnJhbWVIZWlnaHQ6IDI0MCxcbiAgICAvLyBFbmFibGVzIGNvbnNvbGUgbG9nZ2luZyBmb3IgZGVidWdnaW5nIHB1cnBvc2VzLlxuICAgIGRlYnVnOiBmYWxzZSxcbiAgICAvLyBUaGUgbWltZSB0eXBlIGZvciB0aGUgdmlkZW8gcmVjb3JkZXIuIERlZmF1bHQgdG8gJ3ZpZGVvL3dlYm0nLlxuICAgIC8vIFVzZSAndmlkZW8vbXA0JyAoRmlyZWZveCkgb3IgJ3ZpZGVvL3dlYm07Y29kZWNzPUgyNjQnIChDaHJvbWUgNTIgYW5kXG4gICAgLy8gbmV3ZXIpIGZvciBNUDQuXG4gICAgdmlkZW9NaW1lVHlwZTogJ3ZpZGVvL3dlYm0nLFxuICAgIC8vIFZpZGVvIHJlY29yZGVyIHR5cGUgdG8gdXNlLiBUaGlzIGFsbG93cyB5b3UgdG8gc3BlY2lmeSBhbiBhbHRlcm5hdGl2ZVxuICAgIC8vIHJlY29yZGVyIGNsYXNzLCBlLmcuIFdoYW1teVJlY29yZGVyLiBEZWZhdWx0cyB0byAnYXV0bycgd2hpY2ggbGV0J3NcbiAgICAvLyByZWNvcmRydGMgc3BlY2lmeSB0aGUgYmVzdCBhdmFpbGFibGUgcmVjb3JkZXIgdHlwZS5cbiAgICB2aWRlb1JlY29yZGVyVHlwZTogJ2F1dG8nLFxuICAgIC8vIEF1ZGlvIHJlY29yZGluZyBsaWJyYXJ5IHRvIHVzZS4gTGVnYWwgdmFsdWVzIGFyZSAncmVjb3JkcnRjJyxcbiAgICAvLyAnbGlidm9yYmlzLmpzJywgJ29wdXMtcmVjb3JkZXInLCAnbGFtZWpzJyBhbmQgJ3JlY29yZGVyLmpzJy5cbiAgICBhdWRpb0VuZ2luZTogJ3JlY29yZHJ0YycsXG4gICAgLy8gQXVkaW8gcmVjb3JkZXIgdHlwZSB0byB1c2UuIFRoaXMgYWxsb3dzIHlvdSB0byBzcGVjaWZ5IGFuIGFsdGVybmF0aXZlXG4gICAgLy8gcmVjb3JkZXIgY2xhc3MsIGUuZy4gU3RlcmVvQXVkaW9SZWNvcmRlci4gRGVmYXVsdHMgdG8gJ2F1dG8nIHdoaWNoIGxldCdzXG4gICAgLy8gcmVjb3JkcnRjIHNwZWNpZnkgdGhlIGJlc3QgYXZhaWxhYmxlIHJlY29yZGVyIHR5cGUuIEN1cnJlbnRseSB0aGlzXG4gICAgLy8gc2V0dGluZyBpcyBvbmx5IHVzZWQgd2l0aCB0aGUgJ3JlY29yZHJ0YycgYXVkaW9FbmdpbmUuXG4gICAgYXVkaW9SZWNvcmRlclR5cGU6ICdhdXRvJyxcbiAgICAvLyBUaGUgbWltZSB0eXBlIGZvciB0aGUgYXVkaW8gcmVjb3JkZXIuIERlZmF1bHRzIHRvICdhdXRvJyB3aGljaCB3aWxsIHBpY2tcbiAgICAvLyB0aGUgYmVzdCBvcHRpb24gYXZhaWxhYmxlIGluIHRoZSBicm93c2VyIChlLmcuIGVpdGhlciAnYXVkaW8vd2F2JyxcbiAgICAvLyAnYXVkaW8vb2dnJyBvciAnYXVkaW8vd2VibScpLlxuICAgIGF1ZGlvTWltZVR5cGU6ICdhdXRvJyxcbiAgICAvLyBUaGUgc2l6ZSBvZiB0aGUgYXVkaW8gYnVmZmVyIChpbiBzYW1wbGUtZnJhbWVzKSB3aGljaCBuZWVkcyB0b1xuICAgIC8vIGJlIHByb2Nlc3NlZCBlYWNoIHRpbWUgb25wcm9jZXNzYXVkaW8gaXMgY2FsbGVkLlxuICAgIC8vIEZyb20gdGhlIHNwZWM6IFRoaXMgdmFsdWUgY29udHJvbHMgaG93IGZyZXF1ZW50bHkgdGhlIGF1ZGlvcHJvY2VzcyBldmVudCBpc1xuICAgIC8vIGRpc3BhdGNoZWQgYW5kIGhvdyBtYW55IHNhbXBsZS1mcmFtZXMgbmVlZCB0byBiZSBwcm9jZXNzZWQgZWFjaCBjYWxsLlxuICAgIC8vIExvd2VyIHZhbHVlcyBmb3IgYnVmZmVyIHNpemUgd2lsbCByZXN1bHQgaW4gYSBsb3dlciAoYmV0dGVyKSBsYXRlbmN5LlxuICAgIC8vIEhpZ2hlciB2YWx1ZXMgd2lsbCBiZSBuZWNlc3NhcnkgdG8gYXZvaWQgYXVkaW8gYnJlYWt1cCBhbmQgZ2xpdGNoZXMuXG4gICAgLy8gTGVnYWwgdmFsdWVzIGFyZSAyNTYsIDUxMiwgMTAyNCwgMjA0OCwgNDA5NiwgODE5MiBvciAxNjM4NC5cbiAgICBhdWRpb0J1ZmZlclNpemU6IDQwOTYsXG4gICAgLy8gVGhlIGF1ZGlvIHNhbXBsZSByYXRlIChpbiBzYW1wbGUtZnJhbWVzIHBlciBzZWNvbmQpIGF0IHdoaWNoIHRoZVxuICAgIC8vIEF1ZGlvQ29udGV4dCBoYW5kbGVzIGF1ZGlvLiBJdCBpcyBhc3N1bWVkIHRoYXQgYWxsIEF1ZGlvTm9kZXNcbiAgICAvLyBpbiB0aGUgY29udGV4dCBydW4gYXQgdGhpcyByYXRlLiBJbiBtYWtpbmcgdGhpcyBhc3N1bXB0aW9uLFxuICAgIC8vIHNhbXBsZS1yYXRlIGNvbnZlcnRlcnMgb3IgXCJ2YXJpc3BlZWRcIiBwcm9jZXNzb3JzIGFyZSBub3Qgc3VwcG9ydGVkXG4gICAgLy8gaW4gcmVhbC10aW1lIHByb2Nlc3NpbmcuXG4gICAgLy8gVGhlIHNhbXBsZVJhdGUgcGFyYW1ldGVyIGRlc2NyaWJlcyB0aGUgc2FtcGxlLXJhdGUgb2YgdGhlXG4gICAgLy8gbGluZWFyIFBDTSBhdWRpbyBkYXRhIGluIHRoZSBidWZmZXIgaW4gc2FtcGxlLWZyYW1lcyBwZXIgc2Vjb25kLlxuICAgIC8vIEFuIGltcGxlbWVudGF0aW9uIG11c3Qgc3VwcG9ydCBzYW1wbGUtcmF0ZXMgaW4gYXQgbGVhc3RcbiAgICAvLyB0aGUgcmFuZ2UgMjIwNTAgdG8gOTYwMDAuXG4gICAgYXVkaW9TYW1wbGVSYXRlOiA0NDEwMCxcbiAgICAvLyBBbGxvd3MgeW91IHRvIHJlY29yZCBzaW5nbGUtY2hhbm5lbCBhdWRpbywgd2hpY2ggY2FuIHJlZHVjZSB0aGVcbiAgICAvLyBmaWxlc2l6ZS5cbiAgICBhdWRpb0NoYW5uZWxzOiAyLFxuICAgIC8vIFVSTCBmb3IgdGhlIGF1ZGlvIHdvcmtlci5cbiAgICBhdWRpb1dvcmtlclVSTDogJycsXG4gICAgLy8gRnJhbWUgcmF0ZSBpbiBmcmFtZXMgcGVyIHNlY29uZC5cbiAgICBhbmltYXRpb25GcmFtZVJhdGU6IDIwMCxcbiAgICAvLyBTZXRzIHF1YWxpdHkgb2YgY29sb3IgcXVhbnRpemF0aW9uIChjb252ZXJzaW9uIG9mIGltYWdlcyB0byB0aGVcbiAgICAvLyBtYXhpbXVtIDI1NiBjb2xvcnMgYWxsb3dlZCBieSB0aGUgR0lGIHNwZWNpZmljYXRpb24pLlxuICAgIC8vIExvd2VyIHZhbHVlcyAobWluaW11bSA9IDEpIHByb2R1Y2UgYmV0dGVyIGNvbG9ycyxcbiAgICAvLyBidXQgc2xvdyBwcm9jZXNzaW5nIHNpZ25pZmljYW50bHkuIDEwIGlzIHRoZSBkZWZhdWx0LFxuICAgIC8vIGFuZCBwcm9kdWNlcyBnb29kIGNvbG9yIG1hcHBpbmcgYXQgcmVhc29uYWJsZSBzcGVlZHMuXG4gICAgLy8gVmFsdWVzIGdyZWF0ZXIgdGhhbiAyMCBkbyBub3QgeWllbGQgc2lnbmlmaWNhbnQgaW1wcm92ZW1lbnRzXG4gICAgLy8gaW4gc3BlZWQuXG4gICAgYW5pbWF0aW9uUXVhbGl0eTogMTAsXG4gICAgLy8gQWNjZXB0cyBudW1iZXJzIGluIG1pbGxpc2Vjb25kczsgdXNlIHRoaXMgdG8gZm9yY2UgaW50ZXJ2YWxzLWJhc2VkIGJsb2JzLlxuICAgIHRpbWVTbGljZTogMFxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gcGx1Z2luRGVmYXVsdE9wdGlvbnM7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuLyoqXG4gKiBAZmlsZSByZWNvcmQtZW5naW5lLmpzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuXG52YXIgQ29tcG9uZW50ID0gdmlkZW9qcy5nZXRDb21wb25lbnQoJ0NvbXBvbmVudCcpO1xuXG4vLyBzdXBwb3J0ZWQgcmVjb3JkZXIgcGx1Z2luIGVuZ2luZXNcbnZhciBSRUNPUkRSVEMgPSAncmVjb3JkcnRjJztcbnZhciBMSUJWT1JCSVNKUyA9ICdsaWJ2b3JiaXMuanMnO1xudmFyIFJFQ09SREVSSlMgPSAncmVjb3JkZXIuanMnO1xudmFyIExBTUVKUyA9ICdsYW1lanMnO1xudmFyIE9QVVNSRUNPUkRFUiA9ICdvcHVzLXJlY29yZGVyJztcblxuLyoqXG4gKiBCYXNlIGNsYXNzIGZvciByZWNvcmRlciBiYWNrZW5kcy5cbiAqIEBjbGFzc1xuICogQGF1Z21lbnRzIHZpZGVvanMuQ29tcG9uZW50XG4gKi9cblxudmFyIFJlY29yZEVuZ2luZSA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKFJlY29yZEVuZ2luZSwgX0NvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBSZWNvcmRFbmdpbmUoKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSZWNvcmRFbmdpbmUpO1xuXG4gICAgICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoUmVjb3JkRW5naW5lLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoUmVjb3JkRW5naW5lKSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFJlY29yZEVuZ2luZSwgW3tcbiAgICAgICAga2V5OiAnZGlzcG9zZScsXG5cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVtb3ZlIGFueSB0ZW1wb3JhcnkgZGF0YSBhbmQgcmVmZXJlbmNlcyB0byBzdHJlYW1zLlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRpc3Bvc2UoKSB7XG4gICAgICAgICAgICAvLyBkaXNwb3NlIHByZXZpb3VzIHJlY29yZGluZ1xuICAgICAgICAgICAgaWYgKHRoaXMucmVjb3JkZWREYXRhICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBVUkwucmV2b2tlT2JqZWN0VVJMKHRoaXMucmVjb3JkZWREYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBZGQgZmlsZW5hbWUgYW5kIHRpbWVzdGFtcCB0byByZWNvcmRlZCBmaWxlIG9iamVjdC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHsoYmxvYnxmaWxlKX0gZmlsZU9iaiAtIEJsb2Igb3IgRmlsZSBvYmplY3QuXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdhZGRGaWxlSW5mbycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRGaWxlSW5mbyhmaWxlT2JqKSB7XG4gICAgICAgICAgICB2YXIgbm93ID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgIGZpbGVPYmoubGFzdE1vZGlmaWVkRGF0ZSA9IG5vdztcblxuICAgICAgICAgICAgLy8gZ3Vlc3MgZXh0ZW5zaW9uIG5hbWUgZnJvbSBtaW1lIHR5cGUsIGUuZy4gYXVkaW8vb2dnLCBidXRcbiAgICAgICAgICAgIC8vIGFueSBleHRlbnNpb24gaXMgdmFsaWQgaGVyZS4gQ2hyb21lIGFsc28gYWNjZXB0cyBleHRlbmRlZFxuICAgICAgICAgICAgLy8gbWltZSB0eXBlcyBsaWtlIHZpZGVvL3dlYm07Y29kZWNzPWgyNjQsdnA5LG9wdXNcbiAgICAgICAgICAgIHZhciBmaWxlRXh0ZW5zaW9uID0gJy4nICsgZmlsZU9iai50eXBlLnNwbGl0KCcvJylbMV07XG4gICAgICAgICAgICBpZiAoZmlsZUV4dGVuc2lvbi5pbmRleE9mKCc7JykgPiAtMSkge1xuICAgICAgICAgICAgICAgIGZpbGVFeHRlbnNpb24gPSBmaWxlRXh0ZW5zaW9uLnNwbGl0KCc7JylbMF07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHVzZSB0aW1lc3RhbXAgaW4gZmlsZW5hbWUsIGUuZy4gMTQ1MTE4MDk0MTMyNi5vZ2dcbiAgICAgICAgICAgIGZpbGVPYmoubmFtZSA9IG5vdy5nZXRUaW1lKCkgKyBmaWxlRXh0ZW5zaW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEludm9rZWQgd2hlbiByZWNvcmRpbmcgaXMgc3RvcHBlZCBhbmQgcmVzdWx0aW5nIHN0cmVhbSBpcyBhdmFpbGFibGUuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7YmxvYn0gZGF0YSAtIFJlZmVyZW5jZSB0byB0aGUgcmVjb3JkZWQgQmxvYi5cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ29uU3RvcFJlY29yZGluZycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBvblN0b3BSZWNvcmRpbmcoZGF0YSkge1xuICAgICAgICAgICAgdGhpcy5yZWNvcmRlZERhdGEgPSBkYXRhO1xuXG4gICAgICAgICAgICAvLyBhZGQgZmlsZW5hbWUgYW5kIHRpbWVzdGFtcCB0byByZWNvcmRlZCBmaWxlIG9iamVjdFxuICAgICAgICAgICAgdGhpcy5hZGRGaWxlSW5mbyh0aGlzLnJlY29yZGVkRGF0YSk7XG5cbiAgICAgICAgICAgIC8vIHJlbW92ZSByZWZlcmVuY2UgdG8gcmVjb3JkZWQgc3RyZWFtXG4gICAgICAgICAgICB0aGlzLmRpc3Bvc2UoKTtcblxuICAgICAgICAgICAgLy8gbm90aWZ5IGxpc3RlbmVyc1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VyKCdyZWNvcmRDb21wbGV0ZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNob3cgc2F2ZSBhcyBkaWFsb2cgaW4gYnJvd3NlciBzbyB0aGUgdXNlciBjYW4gc3RvcmUgdGhlIHJlY29yZGVkIG1lZGlhXG4gICAgICAgICAqIGxvY2FsbHkuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBuYW1lIC0gT2JqZWN0IHdpdGggbmFtZXMgZm9yIHRoZSBwYXJ0aWN1bGFyIGJsb2IocylcbiAgICAgICAgICogICAgIHlvdSB3YW50IHRvIHNhdmUuIEZpbGUgZXh0ZW5zaW9ucyBhcmUgYWRkZWQgYXV0b21hdGljYWxseS4gRm9yXG4gICAgICAgICAqICAgICBleGFtcGxlOiB7J3ZpZGVvJzogJ25hbWUtb2YtdmlkZW8tZmlsZSd9LiBTdXBwb3J0ZWQga2V5cyBhcmVcbiAgICAgICAgICogICAgICdhdWRpbycsICd2aWRlbycgYW5kICdnaWYnLlxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc2F2ZUFzJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNhdmVBcyhuYW1lKSB7XG4gICAgICAgICAgICB2YXIgZmlsZU5hbWUgPSBuYW1lW09iamVjdC5rZXlzKG5hbWUpWzBdXTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IubXNTYXZlT3JPcGVuQmxvYiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmF2aWdhdG9yLm1zU2F2ZU9yT3BlbkJsb2IodGhpcy5yZWNvcmRlZERhdGEsIGZpbGVOYW1lKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG5hdmlnYXRvci5tc1NhdmVCbG9iICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBuYXZpZ2F0b3IubXNTYXZlQmxvYih0aGlzLnJlY29yZGVkRGF0YSwgZmlsZU5hbWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgaHlwZXJsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICAgICAgaHlwZXJsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKHRoaXMucmVjb3JkZWREYXRhKTtcbiAgICAgICAgICAgIGh5cGVybGluay5kb3dubG9hZCA9IGZpbGVOYW1lO1xuXG4gICAgICAgICAgICBoeXBlcmxpbmsuc3R5bGUgPSAnZGlzcGxheTpub25lO29wYWNpdHk6MDtjb2xvcjp0cmFuc3BhcmVudDsnO1xuICAgICAgICAgICAgKGRvY3VtZW50LmJvZHkgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5hcHBlbmRDaGlsZChoeXBlcmxpbmspO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGh5cGVybGluay5jbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGh5cGVybGluay5jbGljaygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBoeXBlcmxpbmsudGFyZ2V0ID0gJ19ibGFuayc7XG4gICAgICAgICAgICAgICAgaHlwZXJsaW5rLmRpc3BhdGNoRXZlbnQobmV3IE1vdXNlRXZlbnQoJ2NsaWNrJywge1xuICAgICAgICAgICAgICAgICAgICB2aWV3OiB3aW5kb3csXG4gICAgICAgICAgICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbGFibGU6IHRydWVcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwoaHlwZXJsaW5rLmhyZWYpO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFJlY29yZEVuZ2luZTtcbn0oQ29tcG9uZW50KTtcblxuLy8gZXhwb3NlIGNvbXBvbmVudCBmb3IgZXh0ZXJuYWwgcGx1Z2luc1xuXG5cbnZpZGVvanMuUmVjb3JkRW5naW5lID0gUmVjb3JkRW5naW5lO1xuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdSZWNvcmRFbmdpbmUnLCBSZWNvcmRFbmdpbmUpO1xuXG5leHBvcnRzLlJlY29yZEVuZ2luZSA9IFJlY29yZEVuZ2luZTtcbmV4cG9ydHMuUkVDT1JEUlRDID0gUkVDT1JEUlRDO1xuZXhwb3J0cy5MSUJWT1JCSVNKUyA9IExJQlZPUkJJU0pTO1xuZXhwb3J0cy5SRUNPUkRFUkpTID0gUkVDT1JERVJKUztcbmV4cG9ydHMuTEFNRUpTID0gTEFNRUpTO1xuZXhwb3J0cy5PUFVTUkVDT1JERVIgPSBPUFVTUkVDT1JERVI7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG4vKipcbiAqIEBmaWxlIHJlY29yZC1tb2RlLmpzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuXG4vLyByZWNvcmRlciBtb2Rlc1xudmFyIElNQUdFX09OTFkgPSAnaW1hZ2Vfb25seSc7XG52YXIgQVVESU9fT05MWSA9ICdhdWRpb19vbmx5JztcbnZhciBWSURFT19PTkxZID0gJ3ZpZGVvX29ubHknO1xudmFyIEFVRElPX1ZJREVPID0gJ2F1ZGlvX3ZpZGVvJztcbnZhciBBTklNQVRJT04gPSAnYW5pbWF0aW9uJztcblxudmFyIGdldFJlY29yZGVyTW9kZSA9IGZ1bmN0aW9uIGdldFJlY29yZGVyTW9kZShpbWFnZSwgYXVkaW8sIHZpZGVvLCBhbmltYXRpb24pIHtcbiAgICBpZiAoaXNNb2RlRW5hYmxlZChpbWFnZSkpIHtcbiAgICAgICAgcmV0dXJuIElNQUdFX09OTFk7XG4gICAgfSBlbHNlIGlmIChpc01vZGVFbmFibGVkKGFuaW1hdGlvbikpIHtcbiAgICAgICAgcmV0dXJuIEFOSU1BVElPTjtcbiAgICB9IGVsc2UgaWYgKGlzTW9kZUVuYWJsZWQoYXVkaW8pICYmICFpc01vZGVFbmFibGVkKHZpZGVvKSkge1xuICAgICAgICByZXR1cm4gQVVESU9fT05MWTtcbiAgICB9IGVsc2UgaWYgKGlzTW9kZUVuYWJsZWQoYXVkaW8pICYmIGlzTW9kZUVuYWJsZWQodmlkZW8pKSB7XG4gICAgICAgIHJldHVybiBBVURJT19WSURFTztcbiAgICB9IGVsc2UgaWYgKCFpc01vZGVFbmFibGVkKGF1ZGlvKSAmJiBpc01vZGVFbmFibGVkKHZpZGVvKSkge1xuICAgICAgICByZXR1cm4gVklERU9fT05MWTtcbiAgICB9XG59O1xuXG4vKipcbiAqIFJldHVybiBib29sZWFuIGluZGljYXRpbmcgd2hldGhlciBtb2RlIGlzIGVuYWJsZWQgb3Igbm90LlxuICovXG52YXIgaXNNb2RlRW5hYmxlZCA9IGZ1bmN0aW9uIGlzTW9kZUVuYWJsZWQobW9kZSkge1xuICAgIHJldHVybiBtb2RlID09PSBPYmplY3QobW9kZSkgfHwgbW9kZSA9PT0gdHJ1ZTtcbn07XG5cbmV4cG9ydHMuZ2V0UmVjb3JkZXJNb2RlID0gZ2V0UmVjb3JkZXJNb2RlO1xuZXhwb3J0cy5JTUFHRV9PTkxZID0gSU1BR0VfT05MWTtcbmV4cG9ydHMuQVVESU9fT05MWSA9IEFVRElPX09OTFk7XG5leHBvcnRzLlZJREVPX09OTFkgPSBWSURFT19PTkxZO1xuZXhwb3J0cy5BVURJT19WSURFTyA9IEFVRElPX1ZJREVPO1xuZXhwb3J0cy5BTklNQVRJT04gPSBBTklNQVRJT047IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfZ2V0ID0gZnVuY3Rpb24gZ2V0KG9iamVjdCwgcHJvcGVydHksIHJlY2VpdmVyKSB7IGlmIChvYmplY3QgPT09IG51bGwpIG9iamVjdCA9IEZ1bmN0aW9uLnByb3RvdHlwZTsgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgcHJvcGVydHkpOyBpZiAoZGVzYyA9PT0gdW5kZWZpbmVkKSB7IHZhciBwYXJlbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTsgaWYgKHBhcmVudCA9PT0gbnVsbCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IGVsc2UgeyByZXR1cm4gZ2V0KHBhcmVudCwgcHJvcGVydHksIHJlY2VpdmVyKTsgfSB9IGVsc2UgaWYgKFwidmFsdWVcIiBpbiBkZXNjKSB7IHJldHVybiBkZXNjLnZhbHVlOyB9IGVsc2UgeyB2YXIgZ2V0dGVyID0gZGVzYy5nZXQ7IGlmIChnZXR0ZXIgPT09IHVuZGVmaW5lZCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IHJldHVybiBnZXR0ZXIuY2FsbChyZWNlaXZlcik7IH0gfTtcblxudmFyIF9yZWNvcmRFbmdpbmUgPSByZXF1aXJlKCcuL3JlY29yZC1lbmdpbmUnKTtcblxudmFyIF9kZXRlY3RCcm93c2VyID0gcmVxdWlyZSgnLi4vdXRpbHMvZGV0ZWN0LWJyb3dzZXInKTtcblxudmFyIF9yZWNvcmRNb2RlID0gcmVxdWlyZSgnLi9yZWNvcmQtbW9kZScpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9IC8qKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQGZpbGUgcmVjb3JkLXJ0Yy5qc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQHNpbmNlIDIuMC4wXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cblxudmFyIENvbXBvbmVudCA9IHZpZGVvanMuZ2V0Q29tcG9uZW50KCdDb21wb25lbnQnKTtcblxuLyoqXG4gKiBFbmdpbmUgdXNlZCB3aXRoIHRoZSBNUmVjb3JkUlRDIGNsYXNzIGluIHRoZSBSZWNvcmRSVEMgbGlicmFyeS5cbiAqXG4gKiBAY2xhc3NcbiAqIEBhdWdtZW50cyB2aWRlb2pzLlJlY29yZEVuZ2luZVxuICovXG5cbnZhciBSZWNvcmRSVENFbmdpbmUgPSBmdW5jdGlvbiAoX1JlY29yZEVuZ2luZSkge1xuICAgIF9pbmhlcml0cyhSZWNvcmRSVENFbmdpbmUsIF9SZWNvcmRFbmdpbmUpO1xuXG4gICAgZnVuY3Rpb24gUmVjb3JkUlRDRW5naW5lKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmVjb3JkUlRDRW5naW5lKTtcblxuICAgICAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFJlY29yZFJUQ0VuZ2luZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFJlY29yZFJUQ0VuZ2luZSkpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhSZWNvcmRSVENFbmdpbmUsIFt7XG4gICAgICAgIGtleTogJ3NldHVwJyxcblxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXR1cCByZWNvcmRpbmcgZW5naW5lLlxuICAgICAgICAgKi9cbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldHVwKHN0cmVhbSwgbWVkaWFUeXBlLCBkZWJ1Zykge1xuICAgICAgICAgICAgdGhpcy5pbnB1dFN0cmVhbSA9IHN0cmVhbTtcbiAgICAgICAgICAgIHRoaXMubWVkaWFUeXBlID0gbWVkaWFUeXBlO1xuICAgICAgICAgICAgdGhpcy5kZWJ1ZyA9IGRlYnVnO1xuXG4gICAgICAgICAgICAvLyBzZXR1cCBSZWNvcmRSVENcbiAgICAgICAgICAgIHRoaXMuZW5naW5lID0gbmV3IFJlY29yZFJUQy5NUmVjb3JkUlRDKCk7XG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5tZWRpYVR5cGUgPSB0aGlzLm1lZGlhVHlwZTtcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLmRpc2FibGVMb2dzID0gIXRoaXMuZGVidWc7XG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5taW1lVHlwZSA9IHRoaXMubWltZVR5cGU7XG5cbiAgICAgICAgICAgIC8vIGF1ZGlvIHNldHRpbmdzXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5idWZmZXJTaXplID0gdGhpcy5idWZmZXJTaXplO1xuICAgICAgICAgICAgdGhpcy5lbmdpbmUuc2FtcGxlUmF0ZSA9IHRoaXMuc2FtcGxlUmF0ZTtcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLm51bWJlck9mQXVkaW9DaGFubmVscyA9IHRoaXMuYXVkaW9DaGFubmVscztcblxuICAgICAgICAgICAgLy8gdmlkZW8vY2FudmFzIHNldHRpbmdzXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS52aWRlbyA9IHRoaXMudmlkZW87XG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5jYW52YXMgPSB0aGlzLmNhbnZhcztcblxuICAgICAgICAgICAgLy8gYW5pbWF0ZWQgZ2lmIHNldHRpbmdzXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5xdWFsaXR5ID0gdGhpcy5xdWFsaXR5O1xuICAgICAgICAgICAgdGhpcy5lbmdpbmUuZnJhbWVSYXRlID0gdGhpcy5mcmFtZVJhdGU7XG4gICAgICAgICAgICBpZiAodGhpcy5vblRpbWVTdGFtcCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmdpbmUudGltZVNsaWNlID0gdGhpcy50aW1lU2xpY2U7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmdpbmUub25UaW1lU3RhbXAgPSB0aGlzLm9uVGltZVN0YW1wO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBjb25uZWN0IHN0cmVhbSB0byByZWNvcmRpbmcgZW5naW5lXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5hZGRTdHJlYW0odGhpcy5pbnB1dFN0cmVhbSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVtb3ZlIGFueSB0ZW1wb3JhcnkgZGF0YSBhbmQgcmVmZXJlbmNlcyB0byBzdHJlYW1zLlxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZGlzcG9zZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkaXNwb3NlKCkge1xuICAgICAgICAgICAgX2dldChSZWNvcmRSVENFbmdpbmUucHJvdG90eXBlLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoUmVjb3JkUlRDRW5naW5lLnByb3RvdHlwZSksICdkaXNwb3NlJywgdGhpcykuY2FsbCh0aGlzKTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmVuZ2luZS5kZXN0cm95ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmdpbmUuZGVzdHJveSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFN0YXJ0IHJlY29yZGluZy5cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3N0YXJ0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgICAgICAgICAgdGhpcy5lbmdpbmUuc3RhcnRSZWNvcmRpbmcoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTdG9wIHJlY29yZGluZy4gUmVzdWx0IHdpbGwgYmUgYXZhaWxhYmxlIGFzeW5jIHdoZW4gb25TdG9wUmVjb3JkaW5nXG4gICAgICAgICAqIGlzIGNhbGxlZC5cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3N0b3AnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLnN0b3BSZWNvcmRpbmcodGhpcy5vblN0b3BSZWNvcmRpbmcuYmluZCh0aGlzKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUGF1c2UgcmVjb3JkaW5nLlxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncGF1c2UnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcGF1c2UoKSB7XG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5wYXVzZVJlY29yZGluZygpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlc3VtZSByZWNvcmRpbmcuXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZXN1bWUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVzdW1lKCkge1xuICAgICAgICAgICAgdGhpcy5lbmdpbmUucmVzdW1lUmVjb3JkaW5nKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogU2hvdyBzYXZlIGFzIGRpYWxvZyBpbiBicm93c2VyIHNvIHRoZSB1c2VyIGNhbiBzdG9yZSB0aGUgcmVjb3JkZWQgbWVkaWFcbiAgICAgICAgICogbG9jYWxseS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtvYmplY3R9IG5hbWUgLSBPYmplY3Qgd2l0aCBuYW1lcyBmb3IgdGhlIHBhcnRpY3VsYXIgYmxvYihzKVxuICAgICAgICAgKiAgICAgeW91IHdhbnQgdG8gc2F2ZS4gRmlsZSBleHRlbnNpb25zIGFyZSBhZGRlZCBhdXRvbWF0aWNhbGx5LiBGb3JcbiAgICAgICAgICogICAgIGV4YW1wbGU6IHsndmlkZW8nOiAnbmFtZS1vZi12aWRlby1maWxlJ30uIFN1cHBvcnRlZCBrZXlzIGFyZVxuICAgICAgICAgKiAgICAgJ2F1ZGlvJywgJ3ZpZGVvJyBhbmQgJ2dpZicuXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzYXZlQXMnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2F2ZUFzKG5hbWUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmVuZ2luZSAmJiBuYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVuZ2luZS5zYXZlKG5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEludm9rZWQgd2hlbiByZWNvcmRpbmcgaXMgc3RvcHBlZCBhbmQgcmVzdWx0aW5nIHN0cmVhbSBpcyBhdmFpbGFibGUuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBhdWRpb1ZpZGVvVVJMIC0gUmVmZXJlbmNlIHRvIHRoZSByZWNvcmRlZCBCbG9iXG4gICAgICAgICAqICAgICBvYmplY3QsIGUuZy4gJ2Jsb2I6aHR0cDovL2xvY2FsaG9zdDo4MDgwLzEwMTAwMDE2LTQyNDgtOTk0OS1iMGQ2LTBiYjQwZGI1NmViYSdcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgLSBNZWRpYSB0eXBlLCBlZy4gJ3ZpZGVvJyBvciAnYXVkaW8nLlxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnb25TdG9wUmVjb3JkaW5nJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9uU3RvcFJlY29yZGluZyhhdWRpb1ZpZGVvVVJMLCB0eXBlKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICAgICAgLy8gc3RvcmUgcmVmZXJlbmNlIHRvIHJlY29yZGVkIHN0cmVhbSBVUkxcbiAgICAgICAgICAgIHRoaXMubWVkaWFVUkwgPSBhdWRpb1ZpZGVvVVJMO1xuXG4gICAgICAgICAgICAvLyBzdG9yZSByZWZlcmVuY2UgdG8gcmVjb3JkZWQgc3RyZWFtIGRhdGFcbiAgICAgICAgICAgIHZhciByZWNvcmRUeXBlID0gdGhpcy5wbGF5ZXIoKS5yZWNvcmQoKS5nZXRSZWNvcmRUeXBlKCk7XG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5nZXRCbG9iKGZ1bmN0aW9uIChyZWNvcmRpbmcpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHJlY29yZFR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBfcmVjb3JkTW9kZS5BVURJT19PTkxZOlxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMyLnJlY29yZGVkRGF0YSA9IHJlY29yZGluZy5hdWRpbztcblxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMyLmFkZEZpbGVJbmZvKF90aGlzMi5yZWNvcmRlZERhdGEpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBub3RpZnkgbGlzdGVuZXJzXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpczIudHJpZ2dlcigncmVjb3JkQ29tcGxldGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgX3JlY29yZE1vZGUuVklERU9fT05MWTpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBfcmVjb3JkTW9kZS5BVURJT19WSURFTzpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdoZW4gcmVjb3JkaW5nIGJvdGggYXVkaW8gYW5kIHZpZGVvLCByZWNvcmRydGNcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNhbGxzIHRoaXMgdHdpY2Ugb24gY2hyb21lLCBmaXJzdCB3aXRoIGF1ZGlvIGRhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFuZCB0aGVuIHdpdGggdmlkZW8gZGF0YS5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9uIGZpcmVmb3ggaXQncyBjYWxsZWQgb25jZSBidXQgd2l0aCBhIHNpbmdsZVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYmxvYiB0aGF0IGluY2x1ZGVzIGJvdGggYXVkaW8gYW5kIHZpZGVvIGRhdGEuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVjb3JkaW5nLnZpZGVvICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBkYXRhIGlzIHZpZGVvLW9ubHkgYnV0IG9uIGZpcmVmb3ggYXVkaW8rdmlkZW9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpczIucmVjb3JkZWREYXRhID0gcmVjb3JkaW5nLnZpZGVvO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gb24gdGhlIGNocm9tZSBicm93c2VyIHR3byBibG9icyBhcmUgY3JlYXRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnRhaW5pbmcgdGhlIHNlcGFyYXRlIGF1ZGlvL3ZpZGVvIHN0cmVhbXMuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlY29yZFR5cGUgPT09IF9yZWNvcmRNb2RlLkFVRElPX1ZJREVPICYmICgwLCBfZGV0ZWN0QnJvd3Nlci5pc0Nocm9tZSkoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzdG9yZSBib3RoIGF1ZGlvIGFuZCB2aWRlb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpczIucmVjb3JkZWREYXRhID0gcmVjb3JkaW5nO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIG10eXBlIGluIF90aGlzMi5yZWNvcmRlZERhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzMi5hZGRGaWxlSW5mbyhfdGhpczIucmVjb3JkZWREYXRhW210eXBlXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpczIuYWRkRmlsZUluZm8oX3RoaXMyLnJlY29yZGVkRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbm90aWZ5IGxpc3RlbmVyc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzMi50cmlnZ2VyKCdyZWNvcmRDb21wbGV0ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBfcmVjb3JkTW9kZS5BTklNQVRJT046XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpczIucmVjb3JkZWREYXRhID0gcmVjb3JkaW5nLmdpZjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMyLmFkZEZpbGVJbmZvKF90aGlzMi5yZWNvcmRlZERhdGEpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBub3RpZnkgbGlzdGVuZXJzXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpczIudHJpZ2dlcigncmVjb3JkQ29tcGxldGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFJlY29yZFJUQ0VuZ2luZTtcbn0oX3JlY29yZEVuZ2luZS5SZWNvcmRFbmdpbmUpO1xuXG4vLyBleHBvc2UgcGx1Z2luXG5cblxudmlkZW9qcy5SZWNvcmRSVENFbmdpbmUgPSBSZWNvcmRSVENFbmdpbmU7XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnUmVjb3JkUlRDRW5naW5lJywgUmVjb3JkUlRDRW5naW5lKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gUmVjb3JkUlRDRW5naW5lOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuLyoqXG4gKiBAZmlsZSBicm93c2VyLXNoaW0uanNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5cbnZhciBzZXRTcmNPYmplY3QgPSBmdW5jdGlvbiBzZXRTcmNPYmplY3Qoc3RyZWFtLCBlbGVtZW50LCBpZ25vcmVDcmVhdGVPYmplY3RVUkwpIHtcbiAgICBpZiAoJ2NyZWF0ZU9iamVjdFVSTCcgaW4gVVJMICYmICFpZ25vcmVDcmVhdGVPYmplY3RVUkwpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGVsZW1lbnQuc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChzdHJlYW0pO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBzZXRTcmNPYmplY3Qoc3RyZWFtLCBlbGVtZW50LCB0cnVlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAoJ3NyY09iamVjdCcgaW4gZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LnNyY09iamVjdCA9IHN0cmVhbTtcbiAgICB9IGVsc2UgaWYgKCdtb3pTcmNPYmplY3QnIGluIGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5tb3pTcmNPYmplY3QgPSBzdHJlYW07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2NyZWF0ZU9iamVjdFVSTC9zcmNPYmplY3QgYm90aCBhcmUgbm90IHN1cHBvcnRlZC4nKTtcbiAgICB9XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBzZXRTcmNPYmplY3Q7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmlzU2FmYXJpID0gZXhwb3J0cy5pc0Nocm9tZSA9IGV4cG9ydHMuaXNPcGVyYSA9IGV4cG9ydHMuaXNFZGdlID0gZXhwb3J0cy5kZXRlY3RCcm93c2VyID0gdW5kZWZpbmVkO1xuXG52YXIgX3dpbmRvdyA9IHJlcXVpcmUoJ2dsb2JhbC93aW5kb3cnKTtcblxudmFyIF93aW5kb3cyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2luZG93KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyoqXG4gKiBCcm93c2VyIGRldGVjdG9yLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcmV0dXJuIHtvYmplY3R9IHJlc3VsdCBjb250YWluaW5nIGJyb3dzZXIsIHZlcnNpb24gYW5kIG1pblZlcnNpb25cbiAqICAgICBwcm9wZXJ0aWVzLlxuICovXG52YXIgZGV0ZWN0QnJvd3NlciA9IGZ1bmN0aW9uIGRldGVjdEJyb3dzZXIoKSB7XG4gICAgLy8gcmV0dXJuZWQgcmVzdWx0IG9iamVjdFxuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICByZXN1bHQuYnJvd3NlciA9IG51bGw7XG4gICAgcmVzdWx0LnZlcnNpb24gPSBudWxsO1xuICAgIHJlc3VsdC5taW5WZXJzaW9uID0gbnVsbDtcblxuICAgIC8vIGZhaWwgZWFybHkgaWYgaXQncyBub3QgYSBicm93c2VyXG4gICAgaWYgKHR5cGVvZiBfd2luZG93Mi5kZWZhdWx0ID09PSAndW5kZWZpbmVkJyB8fCAhX3dpbmRvdzIuZGVmYXVsdC5uYXZpZ2F0b3IpIHtcbiAgICAgICAgcmVzdWx0LmJyb3dzZXIgPSAnTm90IGEgc3VwcG9ydGVkIGJyb3dzZXIuJztcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAvLyBGaXJlZm94XG4gICAgaWYgKG5hdmlnYXRvci5tb3pHZXRVc2VyTWVkaWEpIHtcbiAgICAgICAgcmVzdWx0LmJyb3dzZXIgPSAnZmlyZWZveCc7XG4gICAgICAgIHJlc3VsdC52ZXJzaW9uID0gZXh0cmFjdFZlcnNpb24obmF2aWdhdG9yLnVzZXJBZ2VudCwgL0ZpcmVmb3hcXC8oXFxkKylcXC4vLCAxKTtcbiAgICAgICAgcmVzdWx0Lm1pblZlcnNpb24gPSAzMTtcbiAgICB9IGVsc2UgaWYgKG5hdmlnYXRvci53ZWJraXRHZXRVc2VyTWVkaWEpIHtcbiAgICAgICAgLy8gQ2hyb21lLCBDaHJvbWl1bSwgV2VidmlldywgT3BlcmFcbiAgICAgICAgaWYgKF93aW5kb3cyLmRlZmF1bHQud2Via2l0UlRDUGVlckNvbm5lY3Rpb24pIHtcbiAgICAgICAgICAgIHJlc3VsdC5icm93c2VyID0gJ2Nocm9tZSc7XG4gICAgICAgICAgICByZXN1bHQudmVyc2lvbiA9IGV4dHJhY3RWZXJzaW9uKG5hdmlnYXRvci51c2VyQWdlbnQsIC9DaHJvbShlfGl1bSlcXC8oXFxkKylcXC4vLCAyKTtcbiAgICAgICAgICAgIHJlc3VsdC5taW5WZXJzaW9uID0gMzg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBTYWZhcmkgKGluIGFuIHVucHVibGlzaGVkIHZlcnNpb24pIG9yIHVua25vd24gd2Via2l0LWJhc2VkLlxuICAgICAgICAgICAgaWYgKG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL1ZlcnNpb25cXC8oXFxkKykuKFxcZCspLykpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuYnJvd3NlciA9ICdzYWZhcmknO1xuICAgICAgICAgICAgICAgIHJlc3VsdC52ZXJzaW9uID0gZXh0cmFjdFZlcnNpb24obmF2aWdhdG9yLnVzZXJBZ2VudCwgL0FwcGxlV2ViS2l0XFwvKFxcZCspXFwuLywgMSk7XG4gICAgICAgICAgICAgICAgcmVzdWx0Lm1pblZlcnNpb24gPSAxMTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gdW5rbm93biB3ZWJraXQtYmFzZWQgYnJvd3Nlci5cbiAgICAgICAgICAgICAgICByZXN1bHQuYnJvd3NlciA9ICdVbnN1cHBvcnRlZCB3ZWJraXQtYmFzZWQgYnJvd3NlciAnICsgJ3dpdGggR1VNIHN1cHBvcnQgYnV0IG5vIFdlYlJUQyBzdXBwb3J0Lic7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBFZGdlXG4gICAgfSBlbHNlIGlmIChuYXZpZ2F0b3IubWVkaWFEZXZpY2VzICYmIG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0VkZ2VcXC8oXFxkKykuKFxcZCspJC8pKSB7XG4gICAgICAgIHJlc3VsdC5icm93c2VyID0gJ2VkZ2UnO1xuICAgICAgICByZXN1bHQudmVyc2lvbiA9IGV4dHJhY3RWZXJzaW9uKG5hdmlnYXRvci51c2VyQWdlbnQsIC9FZGdlXFwvKFxcZCspLihcXGQrKSQvLCAyKTtcbiAgICAgICAgcmVzdWx0Lm1pblZlcnNpb24gPSAxMDU0NztcbiAgICB9IGVsc2UgaWYgKG5hdmlnYXRvci5tZWRpYURldmljZXMgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvQXBwbGVXZWJLaXRcXC8oXFxkKylcXC4vKSkge1xuICAgICAgICAvLyBTYWZhcmksIHdpdGggd2Via2l0R2V0VXNlck1lZGlhIHJlbW92ZWQuXG4gICAgICAgIHJlc3VsdC5icm93c2VyID0gJ3NhZmFyaSc7XG4gICAgICAgIHJlc3VsdC52ZXJzaW9uID0gZXh0cmFjdFZlcnNpb24obmF2aWdhdG9yLnVzZXJBZ2VudCwgL0FwcGxlV2ViS2l0XFwvKFxcZCspXFwuLywgMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gZGVmYXVsdCBmYWxsdGhyb3VnaDogbm90IHN1cHBvcnRlZC5cbiAgICAgICAgcmVzdWx0LmJyb3dzZXIgPSAnTm90IGEgc3VwcG9ydGVkIGJyb3dzZXIuJztcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBFeHRyYWN0IGJyb3dzZXIgdmVyc2lvbiBvdXQgb2YgdGhlIHByb3ZpZGVkIHVzZXIgYWdlbnQgc3RyaW5nLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyFzdHJpbmd9IHVhc3RyaW5nIC0gdXNlckFnZW50IHN0cmluZy5cbiAqIEBwYXJhbSB7IXN0cmluZ30gZXhwciAtIFJlZ3VsYXIgZXhwcmVzc2lvbiB1c2VkIGFzIG1hdGNoIGNyaXRlcmlhLlxuICogQHBhcmFtIHshbnVtYmVyfSBwb3MgLSBwb3NpdGlvbiBpbiB0aGUgdmVyc2lvbiBzdHJpbmcgdG8gYmVcbiAqICAgICByZXR1cm5lZC5cbiAqIEByZXR1cm4geyFudW1iZXJ9IGJyb3dzZXIgdmVyc2lvbi5cbiAqL1xuLyoqXG4gKiBAZmlsZSBkZXRlY3QtYnJvd3Nlci5qc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cblxudmFyIGV4dHJhY3RWZXJzaW9uID0gZnVuY3Rpb24gZXh0cmFjdFZlcnNpb24odWFzdHJpbmcsIGV4cHIsIHBvcykge1xuICAgIHZhciBtYXRjaCA9IHVhc3RyaW5nLm1hdGNoKGV4cHIpO1xuICAgIHJldHVybiBtYXRjaCAmJiBtYXRjaC5sZW5ndGggPj0gcG9zICYmIHBhcnNlSW50KG1hdGNoW3Bvc10sIDEwKTtcbn07XG5cbnZhciBpc0VkZ2UgPSBmdW5jdGlvbiBpc0VkZ2UoKSB7XG4gICAgcmV0dXJuIGRldGVjdEJyb3dzZXIoKS5icm93c2VyID09PSAnZWRnZSc7XG59O1xuXG52YXIgaXNTYWZhcmkgPSBmdW5jdGlvbiBpc1NhZmFyaSgpIHtcbiAgICByZXR1cm4gZGV0ZWN0QnJvd3NlcigpLmJyb3dzZXIgPT09ICdzYWZhcmknO1xufTtcblxudmFyIGlzT3BlcmEgPSBmdW5jdGlvbiBpc09wZXJhKCkge1xuICAgIHJldHVybiAhIV93aW5kb3cyLmRlZmF1bHQub3BlcmEgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdPUFIvJykgIT09IC0xO1xufTtcblxudmFyIGlzQ2hyb21lID0gZnVuY3Rpb24gaXNDaHJvbWUoKSB7XG4gICAgcmV0dXJuIGRldGVjdEJyb3dzZXIoKS5icm93c2VyID09PSAnY2hyb21lJztcbn07XG5cbmV4cG9ydHMuZGV0ZWN0QnJvd3NlciA9IGRldGVjdEJyb3dzZXI7XG5leHBvcnRzLmlzRWRnZSA9IGlzRWRnZTtcbmV4cG9ydHMuaXNPcGVyYSA9IGlzT3BlcmE7XG5leHBvcnRzLmlzQ2hyb21lID0gaXNDaHJvbWU7XG5leHBvcnRzLmlzU2FmYXJpID0gaXNTYWZhcmk7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG4vKipcbiAqIEBmaWxlIGZvcm1hdC10aW1lLmpzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuXG4vKipcbiAqIEZvcm1hdCBzZWNvbmRzIGFzIGEgdGltZSBzdHJpbmcsIEg6TU06U1MsIE06U1Mgb3IgTTpTUzpNTU0uXG4gKlxuICogU3VwcGx5aW5nIGEgZ3VpZGUgKGluIHNlY29uZHMpIHdpbGwgZm9yY2UgYSBudW1iZXIgb2YgbGVhZGluZyB6ZXJvc1xuICogdG8gY292ZXIgdGhlIGxlbmd0aCBvZiB0aGUgZ3VpZGUuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IHNlY29uZHMgLSBOdW1iZXIgb2Ygc2Vjb25kcyB0byBiZSB0dXJuZWQgaW50byBhXG4gKiAgICAgc3RyaW5nLlxuICogQHBhcmFtIHtudW1iZXJ9IGd1aWRlIC0gTnVtYmVyIChpbiBzZWNvbmRzKSB0byBtb2RlbCB0aGUgc3RyaW5nXG4gKiAgICAgYWZ0ZXIuXG4gKiBAcGFyYW0ge251bWJlcn0gbXNEaXNwbGF5TWF4IC0gTnVtYmVyIChpbiBtaWxsaXNlY29uZHMpIHRvIG1vZGVsIHRoZSBzdHJpbmdcbiAqICAgICBhZnRlci5cbiAqIEByZXR1cm4ge3N0cmluZ30gVGltZSBmb3JtYXR0ZWQgYXMgSDpNTTpTUywgTTpTUyBvciBNOlNTOk1NTSwgZS5nLlxuICogICAgIDA6MDA6MTIuXG4gKiBAcHJpdmF0ZVxuICovXG52YXIgZm9ybWF0VGltZSA9IGZ1bmN0aW9uIGZvcm1hdFRpbWUoc2Vjb25kcywgZ3VpZGUsIG1zRGlzcGxheU1heCkge1xuICAgIC8vIERlZmF1bHQgdG8gdXNpbmcgc2Vjb25kcyBhcyBndWlkZVxuICAgIHNlY29uZHMgPSBzZWNvbmRzIDwgMCA/IDAgOiBzZWNvbmRzO1xuICAgIGd1aWRlID0gZ3VpZGUgfHwgc2Vjb25kcztcbiAgICB2YXIgcyA9IE1hdGguZmxvb3Ioc2Vjb25kcyAlIDYwKSxcbiAgICAgICAgbSA9IE1hdGguZmxvb3Ioc2Vjb25kcyAvIDYwICUgNjApLFxuICAgICAgICBoID0gTWF0aC5mbG9vcihzZWNvbmRzIC8gMzYwMCksXG4gICAgICAgIGdtID0gTWF0aC5mbG9vcihndWlkZSAvIDYwICUgNjApLFxuICAgICAgICBnaCA9IE1hdGguZmxvb3IoZ3VpZGUgLyAzNjAwKSxcbiAgICAgICAgbXMgPSBNYXRoLmZsb29yKChzZWNvbmRzIC0gcykgKiAxMDAwKTtcblxuICAgIC8vIGhhbmRsZSBpbnZhbGlkIHRpbWVzXG4gICAgaWYgKGlzTmFOKHNlY29uZHMpIHx8IHNlY29uZHMgPT09IEluZmluaXR5KSB7XG4gICAgICAgIC8vICctJyBpcyBmYWxzZSBmb3IgYWxsIHJlbGF0aW9uYWwgb3BlcmF0b3JzIChlLmcuIDwsID49KSBzbyB0aGlzXG4gICAgICAgIC8vIHNldHRpbmcgd2lsbCBhZGQgdGhlIG1pbmltdW0gbnVtYmVyIG9mIGZpZWxkcyBzcGVjaWZpZWQgYnkgdGhlXG4gICAgICAgIC8vIGd1aWRlXG4gICAgICAgIGggPSBtID0gcyA9IG1zID0gJy0nO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGlmIHdlIG5lZWQgdG8gc2hvdyBtaWxsaXNlY29uZHNcbiAgICBpZiAoZ3VpZGUgPiAwICYmIGd1aWRlIDwgbXNEaXNwbGF5TWF4KSB7XG4gICAgICAgIGlmIChtcyA8IDEwMCkge1xuICAgICAgICAgICAgaWYgKG1zIDwgMTApIHtcbiAgICAgICAgICAgICAgICBtcyA9ICcwMCcgKyBtcztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbXMgPSAnMCcgKyBtcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBtcyA9ICc6JyArIG1zO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG1zID0gJyc7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgaWYgd2UgbmVlZCB0byBzaG93IGhvdXJzXG4gICAgaCA9IGggPiAwIHx8IGdoID4gMCA/IGggKyAnOicgOiAnJztcblxuICAgIC8vIElmIGhvdXJzIGFyZSBzaG93aW5nLCB3ZSBtYXkgbmVlZCB0byBhZGQgYSBsZWFkaW5nIHplcm8uXG4gICAgLy8gQWx3YXlzIHNob3cgYXQgbGVhc3Qgb25lIGRpZ2l0IG9mIG1pbnV0ZXMuXG4gICAgbSA9ICgoaCB8fCBnbSA+PSAxMCkgJiYgbSA8IDEwID8gJzAnICsgbSA6IG0pICsgJzonO1xuXG4gICAgLy8gQ2hlY2sgaWYgbGVhZGluZyB6ZXJvIGlzIG5lZWQgZm9yIHNlY29uZHNcbiAgICBzID0gcyA8IDEwID8gJzAnICsgcyA6IHM7XG5cbiAgICByZXR1cm4gaCArIG0gKyBzICsgbXM7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmb3JtYXRUaW1lOyIsInZhciB3aW47XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgd2luID0gd2luZG93O1xufSBlbHNlIGlmICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgd2luID0gZ2xvYmFsO1xufSBlbHNlIGlmICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIil7XG4gICAgd2luID0gc2VsZjtcbn0gZWxzZSB7XG4gICAgd2luID0ge307XG59XG5cbm1vZHVsZS5leHBvcnRzID0gd2luO1xuIl19

'use strict';

// Last time updated: 2017-12-13 5:07:30 AM UTC

// ________________
// RecordRTC v5.4.6

// Open-Sourced: https://github.com/muaz-khan/RecordRTC

// --------------------------------------------------
// Muaz Khan     - www.MuazKhan.com
// MIT License   - www.WebRTC-Experiment.com/licence
// --------------------------------------------------

"use strict";function RecordRTC(mediaStream,config){function startRecording(config2){return config2&&(config=new RecordRTCConfiguration(mediaStream,config2)),config.disableLogs||console.log("started recording "+config.type+" stream."),mediaRecorder?(mediaRecorder.clearRecordedData(),mediaRecorder.record(),setState("recording"),self.recordingDuration&&handleRecordingDuration(),self):(initRecorder(function(){self.recordingDuration&&handleRecordingDuration()}),self)}function initRecorder(initCallback){initCallback&&(config.initCallback=function(){initCallback(),initCallback=config.initCallback=null});var Recorder=new GetRecorderType(mediaStream,config);mediaRecorder=new Recorder(mediaStream,config),mediaRecorder.record(),setState("recording"),config.disableLogs||console.log("Initialized recorderType:",mediaRecorder.constructor.name,"for output-type:",config.type)}function stopRecording(callback){function _callback(__blob){if(!mediaRecorder)return void("function"==typeof callback.call?callback.call(self,""):callback(""));Object.keys(mediaRecorder).forEach(function(key){"function"!=typeof mediaRecorder[key]&&(self[key]=mediaRecorder[key])});var blob=mediaRecorder.blob;if(!blob){if(!__blob)throw"Recording failed.";mediaRecorder.blob=blob=__blob}if(blob&&!config.disableLogs&&console.log(blob.type,"->",bytesToSize(blob.size)),callback){var url=URL.createObjectURL(blob);"function"==typeof callback.call?callback.call(self,url):callback(url)}config.autoWriteToDisk&&getDataURL(function(dataURL){var parameter={};parameter[config.type+"Blob"]=dataURL,DiskStorage.Store(parameter)})}return callback=callback||function(){},mediaRecorder?"paused"===self.state?(self.resumeRecording(),void setTimeout(function(){stopRecording(callback)},1)):("recording"===self.state||config.disableLogs||console.warn('Recording state should be: "recording", however current state is: ',self.state),config.disableLogs||console.log("Stopped recording "+config.type+" stream."),"gif"!==config.type?mediaRecorder.stop(_callback):(mediaRecorder.stop(),_callback()),void setState("stopped")):void warningLog()}function pauseRecording(){return mediaRecorder?"recording"!==self.state?void(config.disableLogs||console.warn("Unable to pause the recording. Recording state: ",self.state)):(setState("paused"),mediaRecorder.pause(),void(config.disableLogs||console.log("Paused recording."))):void warningLog()}function resumeRecording(){return mediaRecorder?"paused"!==self.state?void(config.disableLogs||console.warn("Unable to resume the recording. Recording state: ",self.state)):(setState("recording"),mediaRecorder.resume(),void(config.disableLogs||console.log("Resumed recording."))):void warningLog()}function readFile(_blob){postMessage((new FileReaderSync).readAsDataURL(_blob))}function getDataURL(callback,_mediaRecorder){function processInWebWorker(_function){var blob=URL.createObjectURL(new Blob([_function.toString(),"this.onmessage =  function (e) {"+_function.name+"(e.data);}"],{type:"application/javascript"})),worker=new Worker(blob);return URL.revokeObjectURL(blob),worker}if(!callback)throw"Pass a callback function over getDataURL.";var blob=_mediaRecorder?_mediaRecorder.blob:(mediaRecorder||{}).blob;if(!blob)return config.disableLogs||console.warn("Blob encoder did not finish its job yet."),void setTimeout(function(){getDataURL(callback,_mediaRecorder)},1e3);if("undefined"==typeof Worker||navigator.mozGetUserMedia){var reader=new FileReader;reader.readAsDataURL(blob),reader.onload=function(event){callback(event.target.result)}}else{var webWorker=processInWebWorker(readFile);webWorker.onmessage=function(event){callback(event.data)},webWorker.postMessage(blob)}}function handleRecordingDuration(counter){if(counter=counter||0,"paused"===self.state)return void setTimeout(function(){handleRecordingDuration(counter)},1e3);if("stopped"!==self.state){if(counter>=self.recordingDuration)return void stopRecording(self.onRecordingStopped);counter+=1e3,setTimeout(function(){handleRecordingDuration(counter)},1e3)}}function setState(state){self&&(self.state=state,"function"==typeof self.onStateChanged.call?self.onStateChanged.call(self,state):self.onStateChanged(state))}function warningLog(){config.disableLogs!==!0&&console.warn(WARNING)}if(!mediaStream)throw"First parameter is required.";config=config||{type:"video"},config=new RecordRTCConfiguration(mediaStream,config);var mediaRecorder,self=this,WARNING='It seems that recorder is destroyed or "startRecording" is not invoked for '+config.type+" recorder.",returnObject={startRecording:startRecording,stopRecording:stopRecording,pauseRecording:pauseRecording,resumeRecording:resumeRecording,initRecorder:initRecorder,setRecordingDuration:function(recordingDuration,callback){if("undefined"==typeof recordingDuration)throw"recordingDuration is required.";if("number"!=typeof recordingDuration)throw"recordingDuration must be a number.";return self.recordingDuration=recordingDuration,self.onRecordingStopped=callback||function(){},{onRecordingStopped:function(callback){self.onRecordingStopped=callback}}},clearRecordedData:function(){return mediaRecorder?(mediaRecorder.clearRecordedData(),void(config.disableLogs||console.log("Cleared old recorded data."))):void warningLog()},getBlob:function(){return mediaRecorder?mediaRecorder.blob:void warningLog()},getDataURL:getDataURL,toURL:function(){return mediaRecorder?URL.createObjectURL(mediaRecorder.blob):void warningLog()},getInternalRecorder:function(){return mediaRecorder},save:function(fileName){return mediaRecorder?void invokeSaveAsDialog(mediaRecorder.blob,fileName):void warningLog()},getFromDisk:function(callback){return mediaRecorder?void RecordRTC.getFromDisk(config.type,callback):void warningLog()},setAdvertisementArray:function(arrayOfWebPImages){config.advertisement=[];for(var length=arrayOfWebPImages.length,i=0;i<length;i++)config.advertisement.push({duration:i,image:arrayOfWebPImages[i]})},blob:null,bufferSize:0,sampleRate:0,buffer:null,reset:function(){mediaRecorder&&"function"==typeof mediaRecorder.clearRecordedData&&mediaRecorder.clearRecordedData(),mediaRecorder=null,setState("inactive"),self.blob=null},onStateChanged:function(state){config.disableLogs||console.log("Recorder state changed:",state)},state:"inactive",getState:function(){return self.state},destroy:function(){var disableLogs=config.disableLogs;config.disableLogs=!0,self.reset(),config={},setState("destroyed"),returnObject=self=null,Storage.AudioContextConstructor&&(Storage.AudioContextConstructor.close(),Storage.AudioContextConstructor=null),disableLogs||console.warn("RecordRTC is destroyed.")},version:"5.4.6"};if(!this)return self=returnObject,returnObject;for(var prop in returnObject)this[prop]=returnObject[prop];return self=this,returnObject}function RecordRTCConfiguration(mediaStream,config){return config.recorderType||config.type||(config.audio&&config.video?config.type="video":config.audio&&!config.video&&(config.type="audio")),config.recorderType&&!config.type&&(config.recorderType===WhammyRecorder||config.recorderType===CanvasRecorder?config.type="video":config.recorderType===GifRecorder?config.type="gif":config.recorderType===StereoAudioRecorder?config.type="audio":config.recorderType===MediaStreamRecorder&&(mediaStream.getAudioTracks().length&&mediaStream.getVideoTracks().length?config.type="video":mediaStream.getAudioTracks().length&&!mediaStream.getVideoTracks().length?config.type="audio":!mediaStream.getAudioTracks().length&&mediaStream.getVideoTracks().length&&(config.type="audio"))),"undefined"!=typeof MediaStreamRecorder&&"undefined"!=typeof MediaRecorder&&"requestData"in MediaRecorder.prototype&&(config.mimeType||(config.mimeType="video/webm"),config.type||(config.type=config.mimeType.split("/")[0]),!config.bitsPerSecond),config.type||(config.mimeType&&(config.type=config.mimeType.split("/")[0]),config.type||(config.type="audio")),config}function GetRecorderType(mediaStream,config){var recorder;return(isChrome||isEdge||isOpera)&&(recorder=StereoAudioRecorder),"undefined"!=typeof MediaRecorder&&"requestData"in MediaRecorder.prototype&&!isChrome&&(recorder=MediaStreamRecorder),"video"===config.type&&(isChrome||isOpera)&&(recorder=WhammyRecorder),"gif"===config.type&&(recorder=GifRecorder),"canvas"===config.type&&(recorder=CanvasRecorder),isMediaRecorderCompatible()&&recorder!==CanvasRecorder&&recorder!==GifRecorder&&"undefined"!=typeof MediaRecorder&&"requestData"in MediaRecorder.prototype&&(mediaStream.getVideoTracks&&mediaStream.getVideoTracks().length||mediaStream.getAudioTracks&&mediaStream.getAudioTracks().length)&&("audio"===config.type?"function"==typeof MediaRecorder.isTypeSupported&&MediaRecorder.isTypeSupported("audio/webm")&&(recorder=MediaStreamRecorder):"function"==typeof MediaRecorder.isTypeSupported&&MediaRecorder.isTypeSupported("video/webm")&&(recorder=MediaStreamRecorder)),config.recorderType&&(recorder=config.recorderType),mediaStream instanceof Array&&mediaStream.length&&(recorder=MultiStreamRecorder),!config.disableLogs&&recorder&&recorder.name&&console.log("Using recorderType:",recorder.name||recorder.constructor.name),recorder}function MRecordRTC(mediaStream){this.addStream=function(_mediaStream){_mediaStream&&(mediaStream=_mediaStream)},this.mediaType={audio:!0,video:!0},this.startRecording=function(){var recorderType,mediaType=this.mediaType,mimeType=this.mimeType||{audio:null,video:null,gif:null};if("function"!=typeof mediaType.audio&&isMediaRecorderCompatible()&&mediaStream.getAudioTracks&&!mediaStream.getAudioTracks().length&&(mediaType.audio=!1),"function"!=typeof mediaType.video&&isMediaRecorderCompatible()&&mediaStream.getVideoTracks&&!mediaStream.getVideoTracks().length&&(mediaType.video=!1),"function"!=typeof mediaType.gif&&isMediaRecorderCompatible()&&mediaStream.getVideoTracks&&!mediaStream.getVideoTracks().length&&(mediaType.gif=!1),!mediaType.audio&&!mediaType.video&&!mediaType.gif)throw"MediaStream must have either audio or video tracks.";if(mediaType.audio&&(recorderType=null,"function"==typeof mediaType.audio&&(recorderType=mediaType.audio),this.audioRecorder=new RecordRTC(mediaStream,{type:"audio",bufferSize:this.bufferSize,sampleRate:this.sampleRate,numberOfAudioChannels:this.numberOfAudioChannels||2,disableLogs:this.disableLogs,recorderType:recorderType,mimeType:mimeType.audio,timeSlice:this.timeSlice,onTimeStamp:this.onTimeStamp}),mediaType.video||this.audioRecorder.startRecording()),mediaType.video){recorderType=null,"function"==typeof mediaType.video&&(recorderType=mediaType.video);var newStream=mediaStream;if(isMediaRecorderCompatible()&&mediaType.audio&&"function"==typeof mediaType.audio){var videoTrack=mediaStream.getVideoTracks()[0];navigator.mozGetUserMedia?(newStream=new MediaStream,newStream.addTrack(videoTrack),recorderType&&recorderType===WhammyRecorder&&(recorderType=MediaStreamRecorder)):newStream=new MediaStream([videoTrack])}this.videoRecorder=new RecordRTC(newStream,{type:"video",video:this.video,canvas:this.canvas,frameInterval:this.frameInterval||10,disableLogs:this.disableLogs,recorderType:recorderType,mimeType:mimeType.video,timeSlice:this.timeSlice,onTimeStamp:this.onTimeStamp}),mediaType.audio||this.videoRecorder.startRecording()}if(mediaType.audio&&mediaType.video){var self=this;isMediaRecorderCompatible()?(self.audioRecorder=null,self.videoRecorder.startRecording()):self.videoRecorder.initRecorder(function(){self.audioRecorder.initRecorder(function(){self.videoRecorder.startRecording(),self.audioRecorder.startRecording()})})}mediaType.gif&&(recorderType=null,"function"==typeof mediaType.gif&&(recorderType=mediaType.gif),this.gifRecorder=new RecordRTC(mediaStream,{type:"gif",frameRate:this.frameRate||200,quality:this.quality||10,disableLogs:this.disableLogs,recorderType:recorderType,mimeType:mimeType.gif}),this.gifRecorder.startRecording())},this.stopRecording=function(callback){callback=callback||function(){},this.audioRecorder&&this.audioRecorder.stopRecording(function(blobURL){callback(blobURL,"audio")}),this.videoRecorder&&this.videoRecorder.stopRecording(function(blobURL){callback(blobURL,"video")}),this.gifRecorder&&this.gifRecorder.stopRecording(function(blobURL){callback(blobURL,"gif")})},this.pauseRecording=function(){this.audioRecorder&&this.audioRecorder.pauseRecording(),this.videoRecorder&&this.videoRecorder.pauseRecording(),this.gifRecorder&&this.gifRecorder.pauseRecording()},this.resumeRecording=function(){this.audioRecorder&&this.audioRecorder.resumeRecording(),this.videoRecorder&&this.videoRecorder.resumeRecording(),this.gifRecorder&&this.gifRecorder.resumeRecording()},this.getBlob=function(callback){var output={};return this.audioRecorder&&(output.audio=this.audioRecorder.getBlob()),this.videoRecorder&&(output.video=this.videoRecorder.getBlob()),this.gifRecorder&&(output.gif=this.gifRecorder.getBlob()),callback&&callback(output),output},this.destroy=function(){this.audioRecorder&&(this.audioRecorder.destroy(),this.audioRecorder=null),this.videoRecorder&&(this.videoRecorder.destroy(),this.videoRecorder=null),this.gifRecorder&&(this.gifRecorder.destroy(),this.gifRecorder=null)},this.getDataURL=function(callback){function getDataURL(blob,callback00){if("undefined"!=typeof Worker){var webWorker=processInWebWorker(function(_blob){postMessage((new FileReaderSync).readAsDataURL(_blob))});webWorker.onmessage=function(event){callback00(event.data)},webWorker.postMessage(blob)}else{var reader=new FileReader;reader.readAsDataURL(blob),reader.onload=function(event){callback00(event.target.result)}}}function processInWebWorker(_function){var url,blob=URL.createObjectURL(new Blob([_function.toString(),"this.onmessage =  function (e) {"+_function.name+"(e.data);}"],{type:"application/javascript"})),worker=new Worker(blob);if("undefined"!=typeof URL)url=URL;else{if("undefined"==typeof webkitURL)throw"Neither URL nor webkitURL detected.";url=webkitURL}return url.revokeObjectURL(blob),worker}this.getBlob(function(blob){blob.audio&&blob.video?getDataURL(blob.audio,function(_audioDataURL){getDataURL(blob.video,function(_videoDataURL){callback({audio:_audioDataURL,video:_videoDataURL})})}):blob.audio?getDataURL(blob.audio,function(_audioDataURL){callback({audio:_audioDataURL})}):blob.video&&getDataURL(blob.video,function(_videoDataURL){callback({video:_videoDataURL})})})},this.writeToDisk=function(){RecordRTC.writeToDisk({audio:this.audioRecorder,video:this.videoRecorder,gif:this.gifRecorder})},this.save=function(args){args=args||{audio:!0,video:!0,gif:!0},args.audio&&this.audioRecorder&&this.audioRecorder.save("string"==typeof args.audio?args.audio:""),args.video&&this.videoRecorder&&this.videoRecorder.save("string"==typeof args.video?args.video:""),args.gif&&this.gifRecorder&&this.gifRecorder.save("string"==typeof args.gif?args.gif:"")}}function bytesToSize(bytes){var k=1e3,sizes=["Bytes","KB","MB","GB","TB"];if(0===bytes)return"0 Bytes";var i=parseInt(Math.floor(Math.log(bytes)/Math.log(k)),10);return(bytes/Math.pow(k,i)).toPrecision(3)+" "+sizes[i]}function invokeSaveAsDialog(file,fileName){if(!file)throw"Blob object is required.";if(!file.type)try{file.type="video/webm"}catch(e){}var fileExtension=(file.type||"video/webm").split("/")[1];if(fileName&&fileName.indexOf(".")!==-1){var splitted=fileName.split(".");fileName=splitted[0],fileExtension=splitted[1]}var fileFullName=(fileName||Math.round(9999999999*Math.random())+888888888)+"."+fileExtension;if("undefined"!=typeof navigator.msSaveOrOpenBlob)return navigator.msSaveOrOpenBlob(file,fileFullName);if("undefined"!=typeof navigator.msSaveBlob)return navigator.msSaveBlob(file,fileFullName);var hyperlink=document.createElement("a");hyperlink.href=URL.createObjectURL(file),hyperlink.download=fileFullName,hyperlink.style="display:none;opacity:0;color:transparent;",(document.body||document.documentElement).appendChild(hyperlink),"function"==typeof hyperlink.click?hyperlink.click():(hyperlink.target="_blank",hyperlink.dispatchEvent(new MouseEvent("click",{view:window,bubbles:!0,cancelable:!0}))),URL.revokeObjectURL(hyperlink.href)}function isElectron(){return"undefined"!=typeof window&&"object"==typeof window.process&&"renderer"===window.process.type||(!("undefined"==typeof process||"object"!=typeof process.versions||!process.versions.electron)||"object"==typeof navigator&&"string"==typeof navigator.userAgent&&navigator.userAgent.indexOf("Electron")>=0)}function setSrcObject(stream,element,ignoreCreateObjectURL){if("createObjectURL"in URL&&!ignoreCreateObjectURL)try{element.src=URL.createObjectURL(stream)}catch(e){return void setSrcObject(stream,element,!0)}else"srcObject"in element?element.srcObject=stream:"mozSrcObject"in element?element.mozSrcObject=stream:alert("createObjectURL/srcObject both are not supported.")}function isMediaRecorderCompatible(){var isOpera=!!window.opera||navigator.userAgent.indexOf(" OPR/")>=0,isChrome=!!window.chrome&&!isOpera||isElectron(),isFirefox="undefined"!=typeof window.InstallTrigger;if(isFirefox)return!0;var verOffset,ix,nAgt=(navigator.appVersion,navigator.userAgent),fullVersion=""+parseFloat(navigator.appVersion),majorVersion=parseInt(navigator.appVersion,10);return(isChrome||isOpera)&&(verOffset=nAgt.indexOf("Chrome"),fullVersion=nAgt.substring(verOffset+7)),(ix=fullVersion.indexOf(";"))!==-1&&(fullVersion=fullVersion.substring(0,ix)),(ix=fullVersion.indexOf(" "))!==-1&&(fullVersion=fullVersion.substring(0,ix)),majorVersion=parseInt(""+fullVersion,10),isNaN(majorVersion)&&(fullVersion=""+parseFloat(navigator.appVersion),majorVersion=parseInt(navigator.appVersion,10)),majorVersion>=49}function MediaStreamRecorder(mediaStream,config){function updateTimeStamp(){self.timestamps.push((new Date).getTime()),"function"==typeof config.onTimeStamp&&config.onTimeStamp(self.timestamps[self.timestamps.length-1],self.timestamps)}function getMimeType(secondObject){return mediaRecorder&&mediaRecorder.mimeType?mediaRecorder.mimeType:secondObject.mimeType||"video/webm"}function clearRecordedDataCB(){arrayOfBlobs=[],mediaRecorder=null,self.timestamps=[]}function isMediaStreamActive(){if("active"in mediaStream){if(!mediaStream.active)return!1}else if("ended"in mediaStream&&mediaStream.ended)return!1;return!0}var self=this;if("undefined"==typeof mediaStream)throw'First argument "MediaStream" is required.';if("undefined"==typeof MediaRecorder)throw"Your browser does not supports Media Recorder API. Please try other modules e.g. WhammyRecorder or StereoAudioRecorder.";if(config=config||{mimeType:"video/webm"},"audio"===config.type){if(mediaStream.getVideoTracks().length&&mediaStream.getAudioTracks().length){var stream;navigator.mozGetUserMedia?(stream=new MediaStream,stream.addTrack(mediaStream.getAudioTracks()[0])):stream=new MediaStream(mediaStream.getAudioTracks()),mediaStream=stream}config.mimeType&&config.mimeType.toString().toLowerCase().indexOf("audio")!==-1||(config.mimeType=isChrome?"audio/webm":"audio/ogg"),config.mimeType&&"audio/ogg"!==config.mimeType.toString().toLowerCase()&&navigator.mozGetUserMedia&&(config.mimeType="audio/ogg")}var arrayOfBlobs=[];this.getArrayOfBlobs=function(){return arrayOfBlobs},this.record=function(){self.blob=null,self.clearRecordedData(),self.timestamps=[],allStates=[],arrayOfBlobs=[];var recorderHints=config;config.disableLogs||console.log("Passing following config over MediaRecorder API.",recorderHints),mediaRecorder&&(mediaRecorder=null),isChrome&&!isMediaRecorderCompatible()&&(recorderHints="video/vp8"),"function"==typeof MediaRecorder.isTypeSupported&&recorderHints.mimeType&&(MediaRecorder.isTypeSupported(recorderHints.mimeType)||(config.disableLogs||console.warn("MediaRecorder API seems unable to record mimeType:",recorderHints.mimeType),recorderHints.mimeType="audio"===config.type?"audio/webm":"video/webm"));try{mediaRecorder=new MediaRecorder(mediaStream,recorderHints),config.mimeType=recorderHints.mimeType}catch(e){mediaRecorder=new MediaRecorder(mediaStream)}recorderHints.mimeType&&!MediaRecorder.isTypeSupported&&"canRecordMimeType"in mediaRecorder&&mediaRecorder.canRecordMimeType(recorderHints.mimeType)===!1&&(config.disableLogs||console.warn("MediaRecorder API seems unable to record mimeType:",recorderHints.mimeType)),mediaRecorder.ignoreMutedMedia=config.ignoreMutedMedia===!0,mediaRecorder.ondataavailable=function(e){if(e.data&&allStates.push("ondataavailable: "+bytesToSize(e.data.size)),"number"!=typeof config.timeSlice){if(!e.data||!e.data.size||e.data.size<100||self.blob)return void(self.recordingCallback&&(self.recordingCallback(new Blob([],{type:getMimeType(recorderHints)})),self.recordingCallback=null));self.blob=config.getNativeBlob?e.data:new Blob([e.data],{type:getMimeType(recorderHints)}),self.recordingCallback&&(self.recordingCallback(self.blob),self.recordingCallback=null)}else if(e.data&&e.data.size&&e.data.size>100&&(arrayOfBlobs.push(e.data),updateTimeStamp(),"function"==typeof config.ondataavailable)){var blob=config.getNativeBlob?e.data:new Blob([e.data],{type:getMimeType(recorderHints)});config.ondataavailable(blob)}},mediaRecorder.onstart=function(){allStates.push("started")},mediaRecorder.onpause=function(){allStates.push("paused")},mediaRecorder.onresume=function(){allStates.push("resumed")},mediaRecorder.onstop=function(){allStates.push("stopped")},mediaRecorder.onerror=function(error){allStates.push("error: "+error),config.disableLogs||(error.name.toString().toLowerCase().indexOf("invalidstate")!==-1?console.error("The MediaRecorder is not in a state in which the proposed operation is allowed to be executed.",error):error.name.toString().toLowerCase().indexOf("notsupported")!==-1?console.error("MIME type (",recorderHints.mimeType,") is not supported.",error):error.name.toString().toLowerCase().indexOf("security")!==-1?console.error("MediaRecorder security error",error):"OutOfMemory"===error.name?console.error("The UA has exhaused the available memory. User agents SHOULD provide as much additional information as possible in the message attribute.",error):"IllegalStreamModification"===error.name?console.error("A modification to the stream has occurred that makes it impossible to continue recording. An example would be the addition of a Track while recording is occurring. User agents SHOULD provide as much additional information as possible in the message attribute.",error):"OtherRecordingError"===error.name?console.error("Used for an fatal error other than those listed above. User agents SHOULD provide as much additional information as possible in the message attribute.",error):"GenericError"===error.name?console.error("The UA cannot provide the codec or recording option that has been requested.",error):console.error("MediaRecorder Error",error)),function(looper){return!self.manuallyStopped&&mediaRecorder&&"inactive"===mediaRecorder.state?(delete config.timeslice,void mediaRecorder.start(6e5)):void setTimeout(looper,1e3)}(),"inactive"!==mediaRecorder.state&&"stopped"!==mediaRecorder.state&&mediaRecorder.stop()},"number"==typeof config.timeSlice?(updateTimeStamp(),mediaRecorder.start(config.timeSlice)):mediaRecorder.start(36e5),config.initCallback&&config.initCallback()},this.timestamps=[],this.stop=function(callback){callback=callback||function(){},self.manuallyStopped=!0,mediaRecorder&&(this.recordingCallback=callback,"recording"===mediaRecorder.state&&mediaRecorder.stop(),"number"==typeof config.timeSlice&&setTimeout(function(){self.blob=new Blob(arrayOfBlobs,{type:getMimeType(config)}),self.recordingCallback(self.blob)},100))},this.pause=function(){mediaRecorder&&"recording"===mediaRecorder.state&&mediaRecorder.pause()},this.resume=function(){mediaRecorder&&"paused"===mediaRecorder.state&&mediaRecorder.resume()},this.clearRecordedData=function(){mediaRecorder&&"recording"===mediaRecorder.state&&self.stop(clearRecordedDataCB),clearRecordedDataCB()};var mediaRecorder;this.getInternalRecorder=function(){return mediaRecorder},this.blob=null,this.getState=function(){return mediaRecorder?mediaRecorder.state||"inactive":"inactive"};var allStates=[];this.getAllStates=function(){return allStates},"undefined"==typeof config.checkForInactiveTracks&&(config.checkForInactiveTracks=!1);var self=this;!function looper(){if(mediaRecorder&&config.checkForInactiveTracks!==!1)return isMediaStreamActive()===!1?(config.disableLogs||console.log("MediaStream seems stopped."),void self.stop()):void setTimeout(looper,1e3)}(),this.name="MediaStreamRecorder",this.toString=function(){return this.name}}function StereoAudioRecorder(mediaStream,config){function isMediaStreamActive(){if(config.checkForInactiveTracks===!1)return!0;if("active"in mediaStream){if(!mediaStream.active)return!1}else if("ended"in mediaStream&&mediaStream.ended)return!1;return!0}function mergeLeftRightBuffers(config,callback){function mergeAudioBuffers(config,cb){function interpolateArray(data,newSampleRate,oldSampleRate){var fitCount=Math.round(data.length*(newSampleRate/oldSampleRate)),newData=[],springFactor=Number((data.length-1)/(fitCount-1));newData[0]=data[0];for(var i=1;i<fitCount-1;i++){var tmp=i*springFactor,before=Number(Math.floor(tmp)).toFixed(),after=Number(Math.ceil(tmp)).toFixed(),atPoint=tmp-before;newData[i]=linearInterpolate(data[before],data[after],atPoint)}return newData[fitCount-1]=data[data.length-1],newData}function linearInterpolate(before,after,atPoint){return before+(after-before)*atPoint}function mergeBuffers(channelBuffer,rLength){for(var result=new Float64Array(rLength),offset=0,lng=channelBuffer.length,i=0;i<lng;i++){var buffer=channelBuffer[i];result.set(buffer,offset),offset+=buffer.length}return result}function interleave(leftChannel,rightChannel){for(var length=leftChannel.length+rightChannel.length,result=new Float64Array(length),inputIndex=0,index=0;index<length;)result[index++]=leftChannel[inputIndex],result[index++]=rightChannel[inputIndex],inputIndex++;return result}function writeUTFBytes(view,offset,string){for(var lng=string.length,i=0;i<lng;i++)view.setUint8(offset+i,string.charCodeAt(i))}var numberOfAudioChannels=config.numberOfAudioChannels,leftBuffers=config.leftBuffers.slice(0),rightBuffers=config.rightBuffers.slice(0),sampleRate=config.sampleRate,internalInterleavedLength=config.internalInterleavedLength,desiredSampRate=config.desiredSampRate;2===numberOfAudioChannels&&(leftBuffers=mergeBuffers(leftBuffers,internalInterleavedLength),rightBuffers=mergeBuffers(rightBuffers,internalInterleavedLength),desiredSampRate&&(leftBuffers=interpolateArray(leftBuffers,desiredSampRate,sampleRate),rightBuffers=interpolateArray(rightBuffers,desiredSampRate,sampleRate))),1===numberOfAudioChannels&&(leftBuffers=mergeBuffers(leftBuffers,internalInterleavedLength),desiredSampRate&&(leftBuffers=interpolateArray(leftBuffers,desiredSampRate,sampleRate))),desiredSampRate&&(sampleRate=desiredSampRate);var interleaved;2===numberOfAudioChannels&&(interleaved=interleave(leftBuffers,rightBuffers)),1===numberOfAudioChannels&&(interleaved=leftBuffers);var interleavedLength=interleaved.length,resultingBufferLength=44+2*interleavedLength,buffer=new ArrayBuffer(resultingBufferLength),view=new DataView(buffer);writeUTFBytes(view,0,"RIFF"),view.setUint32(4,44+2*interleavedLength,!0),writeUTFBytes(view,8,"WAVE"),writeUTFBytes(view,12,"fmt "),view.setUint32(16,16,!0),view.setUint16(20,1,!0),view.setUint16(22,numberOfAudioChannels,!0),view.setUint32(24,sampleRate,!0),view.setUint32(28,2*sampleRate,!0),view.setUint16(32,2*numberOfAudioChannels,!0),view.setUint16(34,16,!0),writeUTFBytes(view,36,"data"),view.setUint32(40,2*interleavedLength,!0);for(var lng=interleavedLength,index=44,volume=1,i=0;i<lng;i++)view.setInt16(index,interleaved[i]*(32767*volume),!0),index+=2;return cb?cb({buffer:buffer,view:view}):void postMessage({buffer:buffer,view:view})}if(isEdge||isOpera||isSafari||config.noWorker)return void mergeAudioBuffers(config,function(data){callback(data.buffer,data.view)});var webWorker=processInWebWorker(mergeAudioBuffers);webWorker.onmessage=function(event){callback(event.data.buffer,event.data.view),URL.revokeObjectURL(webWorker.workerURL)},webWorker.postMessage(config)}function processInWebWorker(_function){var workerURL=URL.createObjectURL(new Blob([_function.toString(),";this.onmessage =  function (e) {"+_function.name+"(e.data);}"],{type:"application/javascript"})),worker=new Worker(workerURL);return worker.workerURL=workerURL,worker}function resetVariables(){leftchannel=[],rightchannel=[],recordingLength=0,isAudioProcessStarted=!1,recording=!1,isPaused=!1,context=null,self.leftchannel=leftchannel,self.rightchannel=rightchannel,self.numberOfAudioChannels=numberOfAudioChannels,self.desiredSampRate=desiredSampRate,self.sampleRate=sampleRate,self.recordingLength=recordingLength,intervalsBasedBuffers={left:[],right:[],recordingLength:0}}function clearRecordedDataCB(){jsAudioNode&&(jsAudioNode.onaudioprocess=null,jsAudioNode.disconnect(),jsAudioNode=null),audioInput&&(audioInput.disconnect(),audioInput=null),resetVariables()}function onAudioProcessDataAvailable(e){if(!isPaused){if(isMediaStreamActive()===!1&&(config.disableLogs||console.log("MediaStream seems stopped."),jsAudioNode.disconnect(),recording=!1),!recording)return void(audioInput&&(audioInput.disconnect(),audioInput=null));isAudioProcessStarted||(isAudioProcessStarted=!0,config.onAudioProcessStarted&&config.onAudioProcessStarted(),config.initCallback&&config.initCallback());var left=e.inputBuffer.getChannelData(0),chLeft=new Float32Array(left);if(leftchannel.push(chLeft),2===numberOfAudioChannels){var right=e.inputBuffer.getChannelData(1),chRight=new Float32Array(right);rightchannel.push(chRight)}recordingLength+=bufferSize,self.recordingLength=recordingLength,"undefined"!=typeof config.timeSlice&&(intervalsBasedBuffers.recordingLength+=bufferSize,intervalsBasedBuffers.left.push(chLeft),2===numberOfAudioChannels&&intervalsBasedBuffers.right.push(chRight))}}function looper(){recording&&"function"==typeof config.ondataavailable&&"undefined"!=typeof config.timeSlice&&(intervalsBasedBuffers.left.length?(mergeLeftRightBuffers({desiredSampRate:desiredSampRate,sampleRate:sampleRate,numberOfAudioChannels:numberOfAudioChannels,internalInterleavedLength:intervalsBasedBuffers.recordingLength,leftBuffers:intervalsBasedBuffers.left,rightBuffers:1===numberOfAudioChannels?[]:intervalsBasedBuffers.right},function(buffer,view){var blob=new Blob([view],{type:"audio/wav"});config.ondataavailable(blob),setTimeout(looper,config.timeSlice)}),intervalsBasedBuffers={left:[],right:[],recordingLength:0}):setTimeout(looper,config.timeSlice))}if(!mediaStream.getAudioTracks().length)throw"Your stream has no audio tracks.";config=config||{};var jsAudioNode,self=this,leftchannel=[],rightchannel=[],recording=!1,recordingLength=0,numberOfAudioChannels=2,desiredSampRate=config.desiredSampRate;config.leftChannel===!0&&(numberOfAudioChannels=1),1===config.numberOfAudioChannels&&(numberOfAudioChannels=1),(!numberOfAudioChannels||numberOfAudioChannels<1)&&(numberOfAudioChannels=2),config.disableLogs||console.log("StereoAudioRecorder is set to record number of channels: ",numberOfAudioChannels),"undefined"==typeof config.checkForInactiveTracks&&(config.checkForInactiveTracks=!0),this.record=function(){if(isMediaStreamActive()===!1)throw"Please make sure MediaStream is active.";resetVariables(),isAudioProcessStarted=isPaused=!1,recording=!0,"undefined"!=typeof config.timeSlice&&looper()},this.stop=function(callback){callback=callback||function(){},recording=!1,mergeLeftRightBuffers({desiredSampRate:desiredSampRate,sampleRate:sampleRate,numberOfAudioChannels:numberOfAudioChannels,internalInterleavedLength:recordingLength,leftBuffers:leftchannel,rightBuffers:1===numberOfAudioChannels?[]:rightchannel},function(buffer,view){self.blob=new Blob([view],{type:"audio/wav"}),self.buffer=new ArrayBuffer(view.buffer.byteLength),self.view=view,self.sampleRate=desiredSampRate||sampleRate,self.bufferSize=bufferSize,self.length=recordingLength,isAudioProcessStarted=!1,callback&&callback(self.blob)})},Storage.AudioContextConstructor||(Storage.AudioContextConstructor=new Storage.AudioContext);
var context=Storage.AudioContextConstructor,audioInput=context.createMediaStreamSource(mediaStream),legalBufferValues=[0,256,512,1024,2048,4096,8192,16384],bufferSize="undefined"==typeof config.bufferSize?4096:config.bufferSize;if(legalBufferValues.indexOf(bufferSize)===-1&&(config.disableLogs||console.warn("Legal values for buffer-size are "+JSON.stringify(legalBufferValues,null,"\t"))),context.createJavaScriptNode)jsAudioNode=context.createJavaScriptNode(bufferSize,numberOfAudioChannels,numberOfAudioChannels);else{if(!context.createScriptProcessor)throw"WebAudio API has no support on this browser.";jsAudioNode=context.createScriptProcessor(bufferSize,numberOfAudioChannels,numberOfAudioChannels)}audioInput.connect(jsAudioNode),config.bufferSize||(bufferSize=jsAudioNode.bufferSize);var sampleRate="undefined"!=typeof config.sampleRate?config.sampleRate:context.sampleRate||44100;(sampleRate<22050||sampleRate>96e3)&&(config.disableLogs||console.warn("sample-rate must be under range 22050 and 96000.")),config.disableLogs||(console.log("sample-rate",sampleRate),console.log("buffer-size",bufferSize),config.desiredSampRate&&console.log("Desired sample-rate",config.desiredSampRate));var isPaused=!1;this.pause=function(){isPaused=!0},this.resume=function(){if(isMediaStreamActive()===!1)throw"Please make sure MediaStream is active.";return recording?void(isPaused=!1):(config.disableLogs||console.log("Seems recording has been restarted."),void this.record())},this.clearRecordedData=function(){config.checkForInactiveTracks=!1,recording&&this.stop(clearRecordedDataCB),clearRecordedDataCB()},this.name="StereoAudioRecorder",this.toString=function(){return this.name};var isAudioProcessStarted=!1;jsAudioNode.onaudioprocess=onAudioProcessDataAvailable,jsAudioNode.connect(context.destination),this.leftchannel=leftchannel,this.rightchannel=rightchannel,this.numberOfAudioChannels=numberOfAudioChannels,this.desiredSampRate=desiredSampRate,this.sampleRate=sampleRate,self.recordingLength=recordingLength;var intervalsBasedBuffers={left:[],right:[],recordingLength:0}}function CanvasRecorder(htmlElement,config){function clearRecordedDataCB(){whammy.frames=[],isRecording=!1,isPausedRecording=!1}function cloneCanvas(){var newCanvas=document.createElement("canvas"),context=newCanvas.getContext("2d");return newCanvas.width=htmlElement.width,newCanvas.height=htmlElement.height,context.drawImage(htmlElement,0,0),newCanvas}function drawCanvasFrame(){if(isPausedRecording)return lastTime=(new Date).getTime(),setTimeout(drawCanvasFrame,500);if("canvas"===htmlElement.nodeName.toLowerCase()){var duration=(new Date).getTime()-lastTime;return lastTime=(new Date).getTime(),whammy.frames.push({image:cloneCanvas(),duration:duration}),void(isRecording&&setTimeout(drawCanvasFrame,config.frameInterval))}html2canvas(htmlElement,{grabMouse:"undefined"==typeof config.showMousePointer||config.showMousePointer,onrendered:function(canvas){var duration=(new Date).getTime()-lastTime;return duration?(lastTime=(new Date).getTime(),whammy.frames.push({image:canvas.toDataURL("image/webp",1),duration:duration}),void(isRecording&&setTimeout(drawCanvasFrame,config.frameInterval))):setTimeout(drawCanvasFrame,config.frameInterval)}})}if("undefined"==typeof html2canvas)throw"Please link: https://cdn.webrtc-experiment.com/screenshot.js";config=config||{},config.frameInterval||(config.frameInterval=10);var isCanvasSupportsStreamCapturing=!1;["captureStream","mozCaptureStream","webkitCaptureStream"].forEach(function(item){item in document.createElement("canvas")&&(isCanvasSupportsStreamCapturing=!0)});var _isChrome=!(!window.webkitRTCPeerConnection&&!window.webkitGetUserMedia||!window.chrome),chromeVersion=50,matchArray=navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);_isChrome&&matchArray&&matchArray[2]&&(chromeVersion=parseInt(matchArray[2],10)),_isChrome&&chromeVersion<52&&(isCanvasSupportsStreamCapturing=!1);var globalCanvas,mediaStreamRecorder;if(isCanvasSupportsStreamCapturing)if(config.disableLogs||console.log("Your browser supports both MediRecorder API and canvas.captureStream!"),htmlElement instanceof HTMLCanvasElement)globalCanvas=htmlElement;else{if(!(htmlElement instanceof CanvasRenderingContext2D))throw"Please pass either HTMLCanvasElement or CanvasRenderingContext2D.";globalCanvas=htmlElement.canvas}else navigator.mozGetUserMedia&&(config.disableLogs||console.error("Canvas recording is NOT supported in Firefox."));var isRecording;this.record=function(){if(isRecording=!0,isCanvasSupportsStreamCapturing&&!config.useWhammyRecorder){var canvasMediaStream;"captureStream"in globalCanvas?canvasMediaStream=globalCanvas.captureStream(25):"mozCaptureStream"in globalCanvas?canvasMediaStream=globalCanvas.mozCaptureStream(25):"webkitCaptureStream"in globalCanvas&&(canvasMediaStream=globalCanvas.webkitCaptureStream(25));try{var mdStream=new MediaStream;mdStream.addTrack(canvasMediaStream.getVideoTracks()[0]),canvasMediaStream=mdStream}catch(e){}if(!canvasMediaStream)throw"captureStream API are NOT available.";mediaStreamRecorder=new MediaStreamRecorder(canvasMediaStream,{mimeType:"video/webm"}),mediaStreamRecorder.record()}else whammy.frames=[],lastTime=(new Date).getTime(),drawCanvasFrame();config.initCallback&&config.initCallback()},this.getWebPImages=function(callback){if("canvas"!==htmlElement.nodeName.toLowerCase())return void callback();var framesLength=whammy.frames.length;whammy.frames.forEach(function(frame,idx){var framesRemaining=framesLength-idx;config.disableLogs||console.log(framesRemaining+"/"+framesLength+" frames remaining"),config.onEncodingCallback&&config.onEncodingCallback(framesRemaining,framesLength);var webp=frame.image.toDataURL("image/webp",1);whammy.frames[idx].image=webp}),config.disableLogs||console.log("Generating WebM"),callback()},this.stop=function(callback){isRecording=!1;var that=this;return isCanvasSupportsStreamCapturing&&mediaStreamRecorder?void mediaStreamRecorder.stop(callback):void this.getWebPImages(function(){whammy.compile(function(blob){config.disableLogs||console.log("Recording finished!"),that.blob=blob,that.blob.forEach&&(that.blob=new Blob([],{type:"video/webm"})),callback&&callback(that.blob),whammy.frames=[]})})};var isPausedRecording=!1;this.pause=function(){if(isPausedRecording=!0,mediaStreamRecorder instanceof MediaStreamRecorder)return void mediaStreamRecorder.pause()},this.resume=function(){return isPausedRecording=!1,mediaStreamRecorder instanceof MediaStreamRecorder?void mediaStreamRecorder.resume():void(isRecording||this.record())},this.clearRecordedData=function(){isRecording&&this.stop(clearRecordedDataCB),clearRecordedDataCB()},this.name="CanvasRecorder",this.toString=function(){return this.name};var lastTime=(new Date).getTime(),whammy=new Whammy.Video(100)}function WhammyRecorder(mediaStream,config){function drawFrames(frameInterval){frameInterval="undefined"!=typeof frameInterval?frameInterval:10;var duration=(new Date).getTime()-lastTime;return duration?isPausedRecording?(lastTime=(new Date).getTime(),setTimeout(drawFrames,100)):(lastTime=(new Date).getTime(),video.paused&&video.play(),context.drawImage(video,0,0,canvas.width,canvas.height),whammy.frames.push({duration:duration,image:canvas.toDataURL("image/webp")}),void(isStopDrawing||setTimeout(drawFrames,frameInterval,frameInterval))):setTimeout(drawFrames,frameInterval,frameInterval)}function asyncLoop(o){var i=-1,length=o.length;!function loop(){return i++,i===length?void o.callback():void setTimeout(function(){o.functionToLoop(loop,i)},1)}()}function dropBlackFrames(_frames,_framesToCheck,_pixTolerance,_frameTolerance,callback){var localCanvas=document.createElement("canvas");localCanvas.width=canvas.width,localCanvas.height=canvas.height;var context2d=localCanvas.getContext("2d"),resultFrames=[],checkUntilNotBlack=_framesToCheck===-1,endCheckFrame=_framesToCheck&&_framesToCheck>0&&_framesToCheck<=_frames.length?_framesToCheck:_frames.length,sampleColor={r:0,g:0,b:0},maxColorDifference=Math.sqrt(Math.pow(255,2)+Math.pow(255,2)+Math.pow(255,2)),pixTolerance=_pixTolerance&&_pixTolerance>=0&&_pixTolerance<=1?_pixTolerance:0,frameTolerance=_frameTolerance&&_frameTolerance>=0&&_frameTolerance<=1?_frameTolerance:0,doNotCheckNext=!1;asyncLoop({length:endCheckFrame,functionToLoop:function(loop,f){var matchPixCount,endPixCheck,maxPixCount,finishImage=function(){!doNotCheckNext&&maxPixCount-matchPixCount<=maxPixCount*frameTolerance||(checkUntilNotBlack&&(doNotCheckNext=!0),resultFrames.push(_frames[f])),loop()};if(doNotCheckNext)finishImage();else{var image=new Image;image.onload=function(){context2d.drawImage(image,0,0,canvas.width,canvas.height);var imageData=context2d.getImageData(0,0,canvas.width,canvas.height);matchPixCount=0,endPixCheck=imageData.data.length,maxPixCount=imageData.data.length/4;for(var pix=0;pix<endPixCheck;pix+=4){var currentColor={r:imageData.data[pix],g:imageData.data[pix+1],b:imageData.data[pix+2]},colorDifference=Math.sqrt(Math.pow(currentColor.r-sampleColor.r,2)+Math.pow(currentColor.g-sampleColor.g,2)+Math.pow(currentColor.b-sampleColor.b,2));colorDifference<=maxColorDifference*pixTolerance&&matchPixCount++}finishImage()},image.src=_frames[f].image}},callback:function(){resultFrames=resultFrames.concat(_frames.slice(endCheckFrame)),resultFrames.length<=0&&resultFrames.push(_frames[_frames.length-1]),callback(resultFrames)}})}function clearRecordedDataCB(){whammy.frames=[],isStopDrawing=!0,isPausedRecording=!1}config=config||{},config.frameInterval||(config.frameInterval=10),config.disableLogs||console.log("Using frames-interval:",config.frameInterval),this.record=function(){config.width||(config.width=320),config.height||(config.height=240),config.video||(config.video={width:config.width,height:config.height}),config.canvas||(config.canvas={width:config.width,height:config.height}),canvas.width=config.canvas.width||320,canvas.height=config.canvas.height||240,context=canvas.getContext("2d"),config.video&&config.video instanceof HTMLVideoElement?(video=config.video.cloneNode(),config.initCallback&&config.initCallback()):(video=document.createElement("video"),setSrcObject(mediaStream,video),video.onloadedmetadata=function(){config.initCallback&&config.initCallback()},video.width=config.video.width,video.height=config.video.height),video.muted=!0,video.play(),lastTime=(new Date).getTime(),whammy=new Whammy.Video,config.disableLogs||(console.log("canvas resolutions",canvas.width,"*",canvas.height),console.log("video width/height",video.width||canvas.width,"*",video.height||canvas.height)),drawFrames(config.frameInterval)};var isStopDrawing=!1;this.stop=function(callback){callback=callback||function(){},isStopDrawing=!0;var _this=this;setTimeout(function(){dropBlackFrames(whammy.frames,-1,null,null,function(frames){whammy.frames=frames,config.advertisement&&config.advertisement.length&&(whammy.frames=config.advertisement.concat(whammy.frames)),whammy.compile(function(blob){_this.blob=blob,_this.blob.forEach&&(_this.blob=new Blob([],{type:"video/webm"})),callback&&callback(_this.blob)})})},10)};var isPausedRecording=!1;this.pause=function(){isPausedRecording=!0},this.resume=function(){isPausedRecording=!1,isStopDrawing&&this.record()},this.clearRecordedData=function(){isStopDrawing||this.stop(clearRecordedDataCB),clearRecordedDataCB()},this.name="WhammyRecorder",this.toString=function(){return this.name};var video,lastTime,whammy,canvas=document.createElement("canvas"),context=canvas.getContext("2d")}function GifRecorder(mediaStream,config){function clearRecordedDataCB(){gifEncoder&&(gifEncoder.stream().bin=[])}if("undefined"==typeof GIFEncoder){var script=document.createElement("script");script.src="https://cdn.webrtc-experiment.com/gif-recorder.js",(document.body||document.documentElement).appendChild(script)}config=config||{};var isHTMLObject=mediaStream instanceof CanvasRenderingContext2D||mediaStream instanceof HTMLCanvasElement;this.record=function(){function drawVideoFrame(time){if(self.clearedRecordedData!==!0){if(isPausedRecording)return setTimeout(function(){drawVideoFrame(time)},100);lastAnimationFrame=requestAnimationFrame(drawVideoFrame),void 0===typeof lastFrameTime&&(lastFrameTime=time),time-lastFrameTime<90||(!isHTMLObject&&video.paused&&video.play(),isHTMLObject||context.drawImage(video,0,0,canvas.width,canvas.height),config.onGifPreview&&config.onGifPreview(canvas.toDataURL("image/png")),gifEncoder.addFrame(context),lastFrameTime=time)}}return"undefined"==typeof GIFEncoder?void setTimeout(self.record,1e3):isLoadedMetaData?(isHTMLObject||(config.width||(config.width=video.offsetWidth||320),config.height||(config.height=video.offsetHeight||240),config.video||(config.video={width:config.width,height:config.height}),config.canvas||(config.canvas={width:config.width,height:config.height}),canvas.width=config.canvas.width||320,canvas.height=config.canvas.height||240,video.width=config.video.width||320,video.height=config.video.height||240),gifEncoder=new GIFEncoder,gifEncoder.setRepeat(0),gifEncoder.setDelay(config.frameRate||200),gifEncoder.setQuality(config.quality||10),gifEncoder.start(),"function"==typeof config.onGifRecordingStarted&&config.onGifRecordingStarted(),startTime=Date.now(),lastAnimationFrame=requestAnimationFrame(drawVideoFrame),void(config.initCallback&&config.initCallback())):void setTimeout(self.record,1e3)},this.stop=function(callback){callback=callback||function(){},lastAnimationFrame&&cancelAnimationFrame(lastAnimationFrame),endTime=Date.now(),this.blob=new Blob([new Uint8Array(gifEncoder.stream().bin)],{type:"image/gif"}),callback(this.blob),gifEncoder.stream().bin=[]};var isPausedRecording=!1;this.pause=function(){isPausedRecording=!0},this.resume=function(){isPausedRecording=!1},this.clearRecordedData=function(){self.clearedRecordedData=!0,clearRecordedDataCB()},this.name="GifRecorder",this.toString=function(){return this.name};var canvas=document.createElement("canvas"),context=canvas.getContext("2d");isHTMLObject&&(mediaStream instanceof CanvasRenderingContext2D?(context=mediaStream,canvas=context.canvas):mediaStream instanceof HTMLCanvasElement&&(context=mediaStream.getContext("2d"),canvas=mediaStream));var isLoadedMetaData=!0;if(!isHTMLObject){var video=document.createElement("video");video.muted=!0,video.autoplay=!0,isLoadedMetaData=!1,video.onloadedmetadata=function(){isLoadedMetaData=!0},setSrcObject(mediaStream,video),video.play()}var startTime,endTime,lastFrameTime,gifEncoder,lastAnimationFrame=null,self=this}function MultiStreamsMixer(arrayOfMediaStreams){function setSrcObject(stream,element,ignoreCreateObjectURL){if("createObjectURL"in URL&&!ignoreCreateObjectURL)try{element.src=URL.createObjectURL(stream)}catch(e){return void setSrcObject(stream,element,!0)}else"srcObject"in element?element.srcObject=stream:"mozSrcObject"in element?element.mozSrcObject=stream:alert("createObjectURL/srcObject both are not supported.")}function drawVideosToCanvas(){if(!isStopDrawingFrames){var videosLength=videos.length,fullcanvas=!1,remaining=[];if(videos.forEach(function(video){video.stream||(video.stream={}),video.stream.fullcanvas?fullcanvas=video:remaining.push(video)}),fullcanvas)canvas.width=fullcanvas.stream.width,canvas.height=fullcanvas.stream.height;else if(remaining.length){canvas.width=videosLength>1?2*remaining[0].width:remaining[0].width;var height=1;3!==videosLength&&4!==videosLength||(height=2),5!==videosLength&&6!==videosLength||(height=3),7!==videosLength&&8!==videosLength||(height=4),9!==videosLength&&10!==videosLength||(height=5),canvas.height=remaining[0].height*height}else canvas.width=self.width||360,canvas.height=self.height||240;fullcanvas&&fullcanvas instanceof HTMLVideoElement&&drawImage(fullcanvas),remaining.forEach(function(video,idx){drawImage(video,idx)}),setTimeout(drawVideosToCanvas,self.frameInterval)}}function drawImage(video,idx){if(!isStopDrawingFrames){var x=0,y=0,width=video.width,height=video.height;1===idx&&(x=video.width),2===idx&&(y=video.height),3===idx&&(x=video.width,y=video.height),4===idx&&(y=2*video.height),5===idx&&(x=video.width,y=2*video.height),6===idx&&(y=3*video.height),7===idx&&(x=video.width,y=3*video.height),"undefined"!=typeof video.stream.left&&(x=video.stream.left),"undefined"!=typeof video.stream.top&&(y=video.stream.top),"undefined"!=typeof video.stream.width&&(width=video.stream.width),"undefined"!=typeof video.stream.height&&(height=video.stream.height),context.drawImage(video,x,y,width,height),"function"==typeof video.stream.onRender&&video.stream.onRender(context,x,y,width,height,idx)}}function getMixedStream(){isStopDrawingFrames=!1;var mixedVideoStream=getMixedVideoStream(),mixedAudioStream=getMixedAudioStream();mixedAudioStream&&mixedAudioStream.getAudioTracks().forEach(function(track){mixedVideoStream.addTrack(track)});var fullcanvas;return arrayOfMediaStreams.forEach(function(stream){stream.fullcanvas&&(fullcanvas=!0)}),mixedVideoStream}function getMixedVideoStream(){resetVideoStreams();var capturedStream;"captureStream"in canvas?capturedStream=canvas.captureStream():"mozCaptureStream"in canvas?capturedStream=canvas.mozCaptureStream():self.disableLogs||console.error("Upgrade to latest Chrome or otherwise enable this flag: chrome://flags/#enable-experimental-web-platform-features");var videoStream=new MediaStream;return capturedStream.getVideoTracks().forEach(function(track){videoStream.addTrack(track)}),canvas.stream=videoStream,videoStream}function getMixedAudioStream(){Storage.AudioContextConstructor||(Storage.AudioContextConstructor=new Storage.AudioContext),self.audioContext=Storage.AudioContextConstructor,self.audioSources=[],self.useGainNode===!0&&(self.gainNode=self.audioContext.createGain(),self.gainNode.connect(self.audioContext.destination),self.gainNode.gain.value=0);var audioTracksLength=0;if(arrayOfMediaStreams.forEach(function(stream){if(stream.getAudioTracks().length){audioTracksLength++;var audioSource=self.audioContext.createMediaStreamSource(stream);self.useGainNode===!0&&audioSource.connect(self.gainNode),self.audioSources.push(audioSource)}}),audioTracksLength)return self.audioDestination=self.audioContext.createMediaStreamDestination(),self.audioSources.forEach(function(audioSource){audioSource.connect(self.audioDestination)}),self.audioDestination.stream}function getVideo(stream){var video=document.createElement("video");return setSrcObject(stream,video),video.muted=!0,video.volume=0,video.width=stream.width||self.width||360,video.height=stream.height||self.height||240,video.play(),video}function resetVideoStreams(streams){videos=[],streams=streams||arrayOfMediaStreams,streams.forEach(function(stream){if(stream.getVideoTracks().length){var video=getVideo(stream);video.stream=stream,videos.push(video)}})}var videos=[],isStopDrawingFrames=!1,canvas=document.createElement("canvas"),context=canvas.getContext("2d");canvas.style="opacity:0;position:absolute;z-index:-1;top: -100000000;left:-1000000000; margin-top:-1000000000;margin-left:-1000000000;",(document.body||document.documentElement).appendChild(canvas),this.disableLogs=!1,this.frameInterval=10,this.width=360,this.height=240,this.useGainNode=!0;var self=this,AudioContext=window.AudioContext;"undefined"==typeof AudioContext&&("undefined"!=typeof webkitAudioContext&&(AudioContext=webkitAudioContext),"undefined"!=typeof mozAudioContext&&(AudioContext=mozAudioContext));var URL=window.URL;"undefined"==typeof URL&&"undefined"!=typeof webkitURL&&(URL=webkitURL),"undefined"!=typeof navigator&&"undefined"==typeof navigator.getUserMedia&&("undefined"!=typeof navigator.webkitGetUserMedia&&(navigator.getUserMedia=navigator.webkitGetUserMedia),"undefined"!=typeof navigator.mozGetUserMedia&&(navigator.getUserMedia=navigator.mozGetUserMedia));var MediaStream=window.MediaStream;"undefined"==typeof MediaStream&&"undefined"!=typeof webkitMediaStream&&(MediaStream=webkitMediaStream),"undefined"!=typeof MediaStream&&("getVideoTracks"in MediaStream.prototype||(MediaStream.prototype.getVideoTracks=function(){if(!this.getTracks)return[];var tracks=[];return this.getTracks.forEach(function(track){track.kind.toString().indexOf("video")!==-1&&tracks.push(track)}),tracks},MediaStream.prototype.getAudioTracks=function(){if(!this.getTracks)return[];var tracks=[];return this.getTracks.forEach(function(track){track.kind.toString().indexOf("audio")!==-1&&tracks.push(track)}),tracks}),"undefined"==typeof MediaStream.prototype.stop&&(MediaStream.prototype.stop=function(){this.getTracks().forEach(function(track){track.stop()})}));var Storage={};"undefined"!=typeof AudioContext?Storage.AudioContext=AudioContext:"undefined"!=typeof webkitAudioContext&&(Storage.AudioContext=webkitAudioContext),this.startDrawingFrames=function(){drawVideosToCanvas()},this.appendStreams=function(streams){if(!streams)throw"First parameter is required.";streams instanceof Array||(streams=[streams]),arrayOfMediaStreams.concat(streams),streams.forEach(function(stream){if(stream.getVideoTracks().length){var video=getVideo(stream);video.stream=stream,videos.push(video)}if(stream.getAudioTracks().length&&self.audioContext){var audioSource=self.audioContext.createMediaStreamSource(stream);audioSource.connect(self.audioDestination),self.audioSources.push(audioSource)}})},this.releaseStreams=function(){videos=[],isStopDrawingFrames=!0,self.gainNode&&(self.gainNode.disconnect(),self.gainNode=null),self.audioSources.length&&(self.audioSources.forEach(function(source){source.disconnect()}),self.audioSources=[]),self.audioDestination&&(self.audioDestination.disconnect(),self.audioDestination=null),self.audioContext=null,context.clearRect(0,0,canvas.width,canvas.height),canvas.stream&&(canvas.stream.stop(),canvas.stream=null)},this.resetVideoStreams=function(streams){!streams||streams instanceof Array||(streams=[streams]),resetVideoStreams(streams)},this.name="MultiStreamsMixer",this.toString=function(){return this.name},this.getMixedStream=getMixedStream}function MultiStreamRecorder(arrayOfMediaStreams,options){function getVideoTracks(){var tracks=[];return arrayOfMediaStreams.forEach(function(stream){stream.getVideoTracks().forEach(function(track){tracks.push(track)})}),tracks}arrayOfMediaStreams=arrayOfMediaStreams||[];var mixer,mediaRecorder,self=this;options=options||{mimeType:"video/webm",video:{width:360,height:240}},options.frameInterval||(options.frameInterval=10),options.video||(options.video={}),options.video.width||(options.video.width=360),options.video.height||(options.video.height=240),this.record=function(){mixer=new MultiStreamsMixer(arrayOfMediaStreams),getVideoTracks().length&&(mixer.frameInterval=options.frameInterval||10,mixer.width=options.video.width||360,mixer.height=options.video.height||240,mixer.startDrawingFrames()),options.previewStream&&"function"==typeof options.previewStream&&options.previewStream(mixer.getMixedStream()),mediaRecorder=new MediaStreamRecorder(mixer.getMixedStream(),options),mediaRecorder.record()},this.stop=function(callback){mediaRecorder&&mediaRecorder.stop(function(blob){self.blob=blob,callback(blob),self.clearRecordedData()})},this.pause=function(){mediaRecorder&&mediaRecorder.pause()},this.resume=function(){mediaRecorder&&mediaRecorder.resume()},this.clearRecordedData=function(){mediaRecorder&&(mediaRecorder.clearRecordedData(),mediaRecorder=null),mixer&&(mixer.releaseStreams(),mixer=null)},this.addStreams=function(streams){if(!streams)throw"First parameter is required.";streams instanceof Array||(streams=[streams]),arrayOfMediaStreams.concat(streams),mediaRecorder&&mixer&&mixer.appendStreams(streams)},this.resetVideoStreams=function(streams){mixer&&(!streams||streams instanceof Array||(streams=[streams]),mixer.resetVideoStreams(streams))},this.name="MultiStreamRecorder",this.toString=function(){return this.name}}function RecordRTCPromisesHandler(mediaStream,options){if(!this)throw'Use "new RecordRTCPromisesHandler()"';if("undefined"==typeof mediaStream)throw'First argument "MediaStream" is required.';var self=this;self.recordRTC=new RecordRTC(mediaStream,options),this.startRecording=function(){return new Promise(function(resolve,reject){try{self.recordRTC.startRecording(),resolve()}catch(e){reject(e)}})},this.stopRecording=function(){return new Promise(function(resolve,reject){try{self.recordRTC.stopRecording(function(url){self.blob=self.recordRTC.getBlob(),resolve(url)})}catch(e){reject(e)}})},this.getDataURL=function(callback){return new Promise(function(resolve,reject){try{self.recordRTC.getDataURL(function(dataURL){resolve(dataURL)})}catch(e){reject(e)}})},this.getBlob=function(){return self.recordRTC.getBlob()},this.blob=null}RecordRTC.version="5.4.6","undefined"!=typeof module&&(module.exports=RecordRTC),"function"==typeof define&&define.amd&&define("RecordRTC",[],function(){return RecordRTC}),RecordRTC.getFromDisk=function(type,callback){if(!callback)throw"callback is mandatory.";console.log("Getting recorded "+("all"===type?"blobs":type+" blob ")+" from disk!"),DiskStorage.Fetch(function(dataURL,_type){"all"!==type&&_type===type+"Blob"&&callback&&callback(dataURL),"all"===type&&callback&&callback(dataURL,_type.replace("Blob",""))})},RecordRTC.writeToDisk=function(options){console.log("Writing recorded blob(s) to disk!"),options=options||{},options.audio&&options.video&&options.gif?options.audio.getDataURL(function(audioDataURL){options.video.getDataURL(function(videoDataURL){options.gif.getDataURL(function(gifDataURL){DiskStorage.Store({audioBlob:audioDataURL,videoBlob:videoDataURL,gifBlob:gifDataURL})})})}):options.audio&&options.video?options.audio.getDataURL(function(audioDataURL){options.video.getDataURL(function(videoDataURL){DiskStorage.Store({audioBlob:audioDataURL,videoBlob:videoDataURL})})}):options.audio&&options.gif?options.audio.getDataURL(function(audioDataURL){options.gif.getDataURL(function(gifDataURL){DiskStorage.Store({audioBlob:audioDataURL,gifBlob:gifDataURL})})}):options.video&&options.gif?options.video.getDataURL(function(videoDataURL){options.gif.getDataURL(function(gifDataURL){DiskStorage.Store({videoBlob:videoDataURL,gifBlob:gifDataURL})})}):options.audio?options.audio.getDataURL(function(audioDataURL){DiskStorage.Store({audioBlob:audioDataURL})}):options.video?options.video.getDataURL(function(videoDataURL){DiskStorage.Store({videoBlob:videoDataURL})}):options.gif&&options.gif.getDataURL(function(gifDataURL){DiskStorage.Store({gifBlob:gifDataURL})})},MRecordRTC.getFromDisk=RecordRTC.getFromDisk,MRecordRTC.writeToDisk=RecordRTC.writeToDisk,"undefined"!=typeof RecordRTC&&(RecordRTC.MRecordRTC=MRecordRTC);var browserFakeUserAgent="Fake/5.0 (FakeOS) AppleWebKit/123 (KHTML, like Gecko) Fake/12.3.4567.89 Fake/123.45";!function(that){that&&"undefined"==typeof window&&"undefined"!=typeof global&&(global.navigator={userAgent:browserFakeUserAgent,getUserMedia:function(){}},global.console||(global.console={}),"undefined"!=typeof global.console.log&&"undefined"!=typeof global.console.error||(global.console.error=global.console.log=global.console.log||function(){console.log(arguments)}),"undefined"==typeof document&&(that.document={},document.createElement=document.captureStream=document.mozCaptureStream=function(){var obj={getContext:function(){return obj},play:function(){},pause:function(){},drawImage:function(){},toDataURL:function(){return""}};return obj},that.HTMLVideoElement=function(){}),"undefined"==typeof location&&(that.location={protocol:"file:",href:"",hash:""}),"undefined"==typeof screen&&(that.screen={width:0,height:0}),"undefined"==typeof URL&&(that.URL={createObjectURL:function(){return""},revokeObjectURL:function(){return""}}),that.window=global)}("undefined"!=typeof global?global:null);var requestAnimationFrame=window.requestAnimationFrame;if("undefined"==typeof requestAnimationFrame)if("undefined"!=typeof webkitRequestAnimationFrame)requestAnimationFrame=webkitRequestAnimationFrame;else if("undefined"!=typeof mozRequestAnimationFrame)requestAnimationFrame=mozRequestAnimationFrame;else if("undefined"!=typeof msRequestAnimationFrame)requestAnimationFrame=msRequestAnimationFrame;else if("undefined"==typeof requestAnimationFrame){var lastTime=0;requestAnimationFrame=function(callback,element){var currTime=(new Date).getTime(),timeToCall=Math.max(0,16-(currTime-lastTime)),id=setTimeout(function(){callback(currTime+timeToCall)},timeToCall);return lastTime=currTime+timeToCall,id}}var cancelAnimationFrame=window.cancelAnimationFrame;"undefined"==typeof cancelAnimationFrame&&("undefined"!=typeof webkitCancelAnimationFrame?cancelAnimationFrame=webkitCancelAnimationFrame:"undefined"!=typeof mozCancelAnimationFrame?cancelAnimationFrame=mozCancelAnimationFrame:"undefined"!=typeof msCancelAnimationFrame?cancelAnimationFrame=msCancelAnimationFrame:"undefined"==typeof cancelAnimationFrame&&(cancelAnimationFrame=function(id){clearTimeout(id)}));var AudioContext=window.AudioContext;"undefined"==typeof AudioContext&&("undefined"!=typeof webkitAudioContext&&(AudioContext=webkitAudioContext),"undefined"!=typeof mozAudioContext&&(AudioContext=mozAudioContext));var URL=window.URL;"undefined"==typeof URL&&"undefined"!=typeof webkitURL&&(URL=webkitURL),"undefined"!=typeof navigator&&"undefined"==typeof navigator.getUserMedia&&("undefined"!=typeof navigator.webkitGetUserMedia&&(navigator.getUserMedia=navigator.webkitGetUserMedia),"undefined"!=typeof navigator.mozGetUserMedia&&(navigator.getUserMedia=navigator.mozGetUserMedia));var isEdge=!(navigator.userAgent.indexOf("Edge")===-1||!navigator.msSaveBlob&&!navigator.msSaveOrOpenBlob),isOpera=!!window.opera||navigator.userAgent.indexOf("OPR/")!==-1,isSafari=navigator.userAgent.toLowerCase().indexOf("safari/")>-1,isChrome=!isOpera&&!isEdge&&!!navigator.webkitGetUserMedia||isElectron()||isSafari,MediaStream=window.MediaStream;"undefined"==typeof MediaStream&&"undefined"!=typeof webkitMediaStream&&(MediaStream=webkitMediaStream),"undefined"!=typeof MediaStream&&("getVideoTracks"in MediaStream.prototype||(MediaStream.prototype.getVideoTracks=function(){if(!this.getTracks)return[];var tracks=[];return this.getTracks().forEach(function(track){track.kind.toString().indexOf("video")!==-1&&tracks.push(track)}),tracks},MediaStream.prototype.getAudioTracks=function(){if(!this.getTracks)return[];var tracks=[];return this.getTracks().forEach(function(track){track.kind.toString().indexOf("audio")!==-1&&tracks.push(track)}),tracks}),"undefined"==typeof MediaStream.prototype.stop&&(MediaStream.prototype.stop=function(){this.getTracks().forEach(function(track){track.stop()})}));var Storage={};"undefined"!=typeof AudioContext?Storage.AudioContext=AudioContext:"undefined"!=typeof webkitAudioContext&&(Storage.AudioContext=webkitAudioContext),"undefined"!=typeof RecordRTC&&(RecordRTC.Storage=Storage),"undefined"!=typeof RecordRTC&&(RecordRTC.MediaStreamRecorder=MediaStreamRecorder),"undefined"!=typeof RecordRTC&&(RecordRTC.StereoAudioRecorder=StereoAudioRecorder),"undefined"!=typeof RecordRTC&&(RecordRTC.CanvasRecorder=CanvasRecorder),"undefined"!=typeof RecordRTC&&(RecordRTC.WhammyRecorder=WhammyRecorder);var Whammy=function(){function WhammyVideo(duration){this.frames=[],this.duration=duration||1,this.quality=.8}function processInWebWorker(_function){var blob=URL.createObjectURL(new Blob([_function.toString(),"this.onmessage =  function (e) {"+_function.name+"(e.data);}"],{type:"application/javascript"})),worker=new Worker(blob);return URL.revokeObjectURL(blob),worker}function whammyInWebWorker(frames){function ArrayToWebM(frames){var info=checkFrames(frames);if(!info)return[];for(var clusterMaxDuration=3e4,EBML=[{id:440786851,data:[{data:1,id:17030},{data:1,id:17143},{data:4,id:17138},{data:8,id:17139},{data:"webm",id:17026},{data:2,id:17031},{data:2,id:17029}]},{id:408125543,data:[{id:357149030,data:[{data:1e6,id:2807729},{data:"whammy",id:19840},{data:"whammy",id:22337},{data:doubleToString(info.duration),id:17545}]},{id:374648427,data:[{id:174,data:[{data:1,id:215},{data:1,id:29637},{data:0,id:156},{data:"und",
id:2274716},{data:"V_VP8",id:134},{data:"VP8",id:2459272},{data:1,id:131},{id:224,data:[{data:info.width,id:176},{data:info.height,id:186}]}]}]}]}],frameNumber=0,clusterTimecode=0;frameNumber<frames.length;){var clusterFrames=[],clusterDuration=0;do clusterFrames.push(frames[frameNumber]),clusterDuration+=frames[frameNumber].duration,frameNumber++;while(frameNumber<frames.length&&clusterDuration<clusterMaxDuration);var clusterCounter=0,cluster={id:524531317,data:getClusterData(clusterTimecode,clusterCounter,clusterFrames)};EBML[1].data.push(cluster),clusterTimecode+=clusterDuration}return generateEBML(EBML)}function getClusterData(clusterTimecode,clusterCounter,clusterFrames){return[{data:clusterTimecode,id:231}].concat(clusterFrames.map(function(webp){var block=makeSimpleBlock({discardable:0,frame:webp.data.slice(4),invisible:0,keyframe:1,lacing:0,trackNum:1,timecode:Math.round(clusterCounter)});return clusterCounter+=webp.duration,{data:block,id:163}}))}function checkFrames(frames){if(!frames[0])return void postMessage({error:"Something went wrong. Maybe WebP format is not supported in the current browser."});for(var width=frames[0].width,height=frames[0].height,duration=frames[0].duration,i=1;i<frames.length;i++)duration+=frames[i].duration;return{duration:duration,width:width,height:height}}function numToBuffer(num){for(var parts=[];num>0;)parts.push(255&num),num>>=8;return new Uint8Array(parts.reverse())}function strToBuffer(str){return new Uint8Array(str.split("").map(function(e){return e.charCodeAt(0)}))}function bitsToBuffer(bits){var data=[],pad=bits.length%8?new Array(9-bits.length%8).join("0"):"";bits=pad+bits;for(var i=0;i<bits.length;i+=8)data.push(parseInt(bits.substr(i,8),2));return new Uint8Array(data)}function generateEBML(json){for(var ebml=[],i=0;i<json.length;i++){var data=json[i].data;"object"==typeof data&&(data=generateEBML(data)),"number"==typeof data&&(data=bitsToBuffer(data.toString(2))),"string"==typeof data&&(data=strToBuffer(data));var len=data.size||data.byteLength||data.length,zeroes=Math.ceil(Math.ceil(Math.log(len)/Math.log(2))/8),sizeToString=len.toString(2),padded=new Array(7*zeroes+7+1-sizeToString.length).join("0")+sizeToString,size=new Array(zeroes).join("0")+"1"+padded;ebml.push(numToBuffer(json[i].id)),ebml.push(bitsToBuffer(size)),ebml.push(data)}return new Blob(ebml,{type:"video/webm"})}function makeSimpleBlock(data){var flags=0;if(data.keyframe&&(flags|=128),data.invisible&&(flags|=8),data.lacing&&(flags|=data.lacing<<1),data.discardable&&(flags|=1),data.trackNum>127)throw"TrackNumber > 127 not supported";var out=[128|data.trackNum,data.timecode>>8,255&data.timecode,flags].map(function(e){return String.fromCharCode(e)}).join("")+data.frame;return out}function parseWebP(riff){for(var VP8=riff.RIFF[0].WEBP[0],frameStart=VP8.indexOf("*"),i=0,c=[];i<4;i++)c[i]=VP8.charCodeAt(frameStart+3+i);var width,height,tmp;return tmp=c[1]<<8|c[0],width=16383&tmp,tmp=c[3]<<8|c[2],height=16383&tmp,{width:width,height:height,data:VP8,riff:riff}}function getStrLength(string,offset){return parseInt(string.substr(offset+4,4).split("").map(function(i){var unpadded=i.charCodeAt(0).toString(2);return new Array(8-unpadded.length+1).join("0")+unpadded}).join(""),2)}function parseRIFF(string){for(var offset=0,chunks={};offset<string.length;){var id=string.substr(offset,4),len=getStrLength(string,offset),data=string.substr(offset+4+4,len);offset+=8+len,chunks[id]=chunks[id]||[],"RIFF"===id||"LIST"===id?chunks[id].push(parseRIFF(data)):chunks[id].push(data)}return chunks}function doubleToString(num){return[].slice.call(new Uint8Array(new Float64Array([num]).buffer),0).map(function(e){return String.fromCharCode(e)}).reverse().join("")}var webm=new ArrayToWebM(frames.map(function(frame){var webp=parseWebP(parseRIFF(atob(frame.image.slice(23))));return webp.duration=frame.duration,webp}));postMessage(webm)}return WhammyVideo.prototype.add=function(frame,duration){if("canvas"in frame&&(frame=frame.canvas),"toDataURL"in frame&&(frame=frame.toDataURL("image/webp",this.quality)),!/^data:image\/webp;base64,/gi.test(frame))throw"Input must be formatted properly as a base64 encoded DataURI of type image/webp";this.frames.push({image:frame,duration:duration||this.duration})},WhammyVideo.prototype.compile=function(callback){var webWorker=processInWebWorker(whammyInWebWorker);webWorker.onmessage=function(event){return event.data.error?void console.error(event.data.error):void callback(event.data)},webWorker.postMessage(this.frames)},{Video:WhammyVideo}}();"undefined"!=typeof RecordRTC&&(RecordRTC.Whammy=Whammy);var DiskStorage={init:function(){function createObjectStore(dataBase){dataBase.createObjectStore(self.dataStoreName)}function putInDB(){function getFromStore(portionName){transaction.objectStore(self.dataStoreName).get(portionName).onsuccess=function(event){self.callback&&self.callback(event.target.result,portionName)}}var transaction=db.transaction([self.dataStoreName],"readwrite");self.videoBlob&&transaction.objectStore(self.dataStoreName).put(self.videoBlob,"videoBlob"),self.gifBlob&&transaction.objectStore(self.dataStoreName).put(self.gifBlob,"gifBlob"),self.audioBlob&&transaction.objectStore(self.dataStoreName).put(self.audioBlob,"audioBlob"),getFromStore("audioBlob"),getFromStore("videoBlob"),getFromStore("gifBlob")}var self=this;if("undefined"==typeof indexedDB||"undefined"==typeof indexedDB.open)return void console.error("IndexedDB API are not available in this browser.");var db,dbVersion=1,dbName=this.dbName||location.href.replace(/\/|:|#|%|\.|\[|\]/g,""),request=indexedDB.open(dbName,dbVersion);request.onerror=self.onError,request.onsuccess=function(){if(db=request.result,db.onerror=self.onError,db.setVersion)if(db.version!==dbVersion){var setVersion=db.setVersion(dbVersion);setVersion.onsuccess=function(){createObjectStore(db),putInDB()}}else putInDB();else putInDB()},request.onupgradeneeded=function(event){createObjectStore(event.target.result)}},Fetch:function(callback){return this.callback=callback,this.init(),this},Store:function(config){return this.audioBlob=config.audioBlob,this.videoBlob=config.videoBlob,this.gifBlob=config.gifBlob,this.init(),this},onError:function(error){console.error(JSON.stringify(error,null,"\t"))},dataStoreName:"recordRTC",dbName:null};"undefined"!=typeof RecordRTC&&(RecordRTC.DiskStorage=DiskStorage),"undefined"!=typeof RecordRTC&&(RecordRTC.GifRecorder=GifRecorder),"undefined"!=typeof RecordRTC&&(RecordRTC.MultiStreamRecorder=MultiStreamRecorder),"undefined"!=typeof RecordRTC&&(RecordRTC.RecordRTCPromisesHandler=RecordRTCPromisesHandler);
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("WaveSurfer",[],t):"object"==typeof exports?exports.WaveSurfer=t():e.WaveSurfer=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var a=r[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=4)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(5);Object.defineProperty(t,"ajax",{enumerable:!0,get:function(){return n(a).default}});var i=r(6);Object.defineProperty(t,"getId",{enumerable:!0,get:function(){return n(i).default}});var s=r(7);Object.defineProperty(t,"max",{enumerable:!0,get:function(){return n(s).default}});var o=r(8);Object.defineProperty(t,"min",{enumerable:!0,get:function(){return n(o).default}});var u=r(1);Object.defineProperty(t,"Observer",{enumerable:!0,get:function(){return n(u).default}});var l=r(9);Object.defineProperty(t,"extend",{enumerable:!0,get:function(){return n(l).default}});var c=r(10);Object.defineProperty(t,"style",{enumerable:!0,get:function(){return n(c).default}});var h=r(2);Object.defineProperty(t,"requestAnimationFrame",{enumerable:!0,get:function(){return n(h).default}});var f=r(11);Object.defineProperty(t,"frame",{enumerable:!0,get:function(){return n(f).default}});var d=r(12);Object.defineProperty(t,"debounce",{enumerable:!0,get:function(){return n(d).default}})},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=function(){function e(){n(this,e),this.handlers=null}return a(e,[{key:"on",value:function(e,t){var r=this;this.handlers||(this.handlers={});var n=this.handlers[e];return n||(n=this.handlers[e]=[]),n.push(t),{name:e,callback:t,un:function(e,t){return r.un(e,t)}}}},{key:"un",value:function(e,t){if(this.handlers){var r=this.handlers[e],n=void 0;if(r)if(t)for(n=r.length-1;n>=0;n--)r[n]==t&&r.splice(n,1);else r.length=0}}},{key:"unAll",value:function(){this.handlers=null}},{key:"once",value:function(e,t){var r=this,n=function n(){for(var a=arguments.length,i=Array(a),s=0;s<a;s++)i[s]=arguments[s];t.apply(r,i),setTimeout(function(){r.un(e,n)},0)};return this.on(e,n)}},{key:"fireEvent",value:function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];if(this.handlers){var a=this.handlers[e];a&&a.forEach(function(e){e.apply(void 0,r)})}}}]),e}();t.default=i,e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e,t){return setTimeout(e,1e3/60)}).bind(window),e.exports=t.default},function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=r(0),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(u),c="playing",h="paused",f="finished",d=function(e){function t(e){var r,s;a(this,t);var o=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return o.audioContext=null,o.offlineAudioContext=null,o.stateBehaviors=(r={},n(r,c,{init:function(){this.addOnAudioProcess()},getPlayedPercents:function(){var e=this.getDuration();return this.getCurrentTime()/e||0},getCurrentTime:function(){return this.startPosition+this.getPlayedTime()}}),n(r,h,{init:function(){this.removeOnAudioProcess()},getPlayedPercents:function(){var e=this.getDuration();return this.getCurrentTime()/e||0},getCurrentTime:function(){return this.startPosition}}),n(r,f,{init:function(){this.removeOnAudioProcess(),this.fireEvent("finish")},getPlayedPercents:function(){return 1},getCurrentTime:function(){return this.getDuration()}}),r),o.params=e,o.ac=e.audioContext||o.getAudioContext(),o.lastPlay=o.ac.currentTime,o.startPosition=0,o.scheduledPause=null,o.states=(s={},n(s,c,Object.create(o.stateBehaviors[c])),n(s,h,Object.create(o.stateBehaviors[h])),n(s,f,Object.create(o.stateBehaviors[f])),s),o.analyser=null,o.buffer=null,o.filters=[],o.gainNode=null,o.mergedPeaks=null,o.offlineAc=null,o.peaks=null,o.playbackRate=1,o.analyser=null,o.scriptNode=null,o.source=null,o.splitPeaks=[],o.state=null,o.explicitDuration=null,o}return s(t,e),o(t,[{key:"supportsWebAudio",value:function(){return!(!window.AudioContext&&!window.webkitAudioContext)}},{key:"getAudioContext",value:function(){return window.WaveSurferAudioContext||(window.WaveSurferAudioContext=new(window.AudioContext||window.webkitAudioContext)),window.WaveSurferAudioContext}},{key:"getOfflineAudioContext",value:function(e){return window.WaveSurferOfflineAudioContext||(window.WaveSurferOfflineAudioContext=new(window.OfflineAudioContext||window.webkitOfflineAudioContext)(1,2,e)),window.WaveSurferOfflineAudioContext}}]),o(t,[{key:"init",value:function(){this.createVolumeNode(),this.createScriptNode(),this.createAnalyserNode(),this.setState(h),this.setPlaybackRate(this.params.audioRate),this.setLength(0)}},{key:"disconnectFilters",value:function(){this.filters&&(this.filters.forEach(function(e){e&&e.disconnect()}),this.filters=null,this.analyser.connect(this.gainNode))}},{key:"setState",value:function(e){this.state!==this.states[e]&&(this.state=this.states[e],this.state.init.call(this))}},{key:"setFilter",value:function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];this.setFilters(t)}},{key:"setFilters",value:function(e){this.disconnectFilters(),e&&e.length&&(this.filters=e,this.analyser.disconnect(),e.reduce(function(e,t){return e.connect(t),t},this.analyser).connect(this.gainNode))}},{key:"createScriptNode",value:function(){this.ac.createScriptProcessor?this.scriptNode=this.ac.createScriptProcessor(t.scriptBufferSize):this.scriptNode=this.ac.createJavaScriptNode(t.scriptBufferSize),this.scriptNode.connect(this.ac.destination)}},{key:"addOnAudioProcess",value:function(){var e=this;this.scriptNode.onaudioprocess=function(){var t=e.getCurrentTime();t>=e.getDuration()?(e.setState(f),e.fireEvent("pause")):t>=e.scheduledPause?e.pause():e.state===e.states[c]&&e.fireEvent("audioprocess",t)}}},{key:"removeOnAudioProcess",value:function(){this.scriptNode.onaudioprocess=null}},{key:"createAnalyserNode",value:function(){this.analyser=this.ac.createAnalyser(),this.analyser.connect(this.gainNode)}},{key:"createVolumeNode",value:function(){this.ac.createGain?this.gainNode=this.ac.createGain():this.gainNode=this.ac.createGainNode(),this.gainNode.connect(this.ac.destination)}},{key:"setVolume",value:function(e){this.gainNode.gain.value=e}},{key:"getVolume",value:function(){return this.gainNode.gain.value}},{key:"decodeArrayBuffer",value:function(e,t,r){this.offlineAc||(this.offlineAc=this.getOfflineAudioContext(this.ac?this.ac.sampleRate:44100)),this.offlineAc.decodeAudioData(e,function(e){return t(e)},r)}},{key:"setPeaks",value:function(e,t){this.explicitDuration=t,this.peaks=e}},{key:"setLength",value:function(e){if(!this.mergedPeaks||e!=2*this.mergedPeaks.length-1+2){this.splitPeaks=[],this.mergedPeaks=[];var t=this.buffer?this.buffer.numberOfChannels:1,r=void 0;for(r=0;r<t;r++)this.splitPeaks[r]=[],this.splitPeaks[r][2*(e-1)]=0,this.splitPeaks[r][2*(e-1)+1]=0;this.mergedPeaks[2*(e-1)]=0,this.mergedPeaks[2*(e-1)+1]=0}}},{key:"getPeaks",value:function(e,t,r){if(this.peaks)return this.peaks;if(t=t||0,r=r||e-1,this.setLength(e),!this.buffer.length){var n=this.createBuffer(1,4096,this.sampleRate);this.buffer=n.buffer}var a=this.buffer.length/e,i=~~(a/10)||1,s=this.buffer.numberOfChannels,o=void 0;for(o=0;o<s;o++){var u=this.splitPeaks[o],l=this.buffer.getChannelData(o),c=void 0;for(c=t;c<=r;c++){var h=~~(c*a),f=~~(h+a),d=0,p=0,v=void 0;for(v=h;v<f;v+=i){var y=l[v];y>p&&(p=y),y<d&&(d=y)}u[2*c]=p,u[2*c+1]=d,(0==o||p>this.mergedPeaks[2*c])&&(this.mergedPeaks[2*c]=p),(0==o||d<this.mergedPeaks[2*c+1])&&(this.mergedPeaks[2*c+1]=d)}}return this.params.splitChannels?this.splitPeaks:this.mergedPeaks}},{key:"getPlayedPercents",value:function(){return this.state.getPlayedPercents.call(this)}},{key:"disconnectSource",value:function(){this.source&&this.source.disconnect()}},{key:"destroy",value:function(){this.isPaused()||this.pause(),this.unAll(),this.buffer=null,this.disconnectFilters(),this.disconnectSource(),this.gainNode.disconnect(),this.scriptNode.disconnect(),this.analyser.disconnect(),this.params.closeAudioContext&&("function"==typeof this.ac.close&&"closed"!=this.ac.state&&this.ac.close(),this.ac=null,this.params.audioContext?this.params.audioContext=null:window.WaveSurferAudioContext=null,window.WaveSurferOfflineAudioContext=null)}},{key:"load",value:function(e){this.startPosition=0,this.lastPlay=this.ac.currentTime,this.buffer=e,this.createSource()}},{key:"createSource",value:function(){this.disconnectSource(),this.source=this.ac.createBufferSource(),this.source.start=this.source.start||this.source.noteGrainOn,this.source.stop=this.source.stop||this.source.noteOff,this.source.playbackRate.value=this.playbackRate,this.source.buffer=this.buffer,this.source.connect(this.analyser)}},{key:"isPaused",value:function(){return this.state!==this.states[c]}},{key:"getDuration",value:function(){return this.buffer?this.buffer.duration:this.explicitDuration?this.explicitDuration:0}},{key:"seekTo",value:function(e,t){if(this.buffer)return this.scheduledPause=null,null==e&&(e=this.getCurrentTime())>=this.getDuration()&&(e=0),null==t&&(t=this.getDuration()),this.startPosition=e,this.lastPlay=this.ac.currentTime,this.state===this.states[f]&&this.setState(h),{start:e,end:t}}},{key:"getPlayedTime",value:function(){return(this.ac.currentTime-this.lastPlay)*this.playbackRate}},{key:"play",value:function(e,t){if(this.buffer){this.createSource();var r=this.seekTo(e,t);e=r.start,t=r.end,this.scheduledPause=t,this.source.start(0,e,t-e),"suspended"==this.ac.state&&this.ac.resume&&this.ac.resume(),this.setState(c),this.fireEvent("play")}}},{key:"pause",value:function(){this.scheduledPause=null,this.startPosition+=this.getPlayedTime(),this.source&&this.source.stop(0),this.setState(h),this.fireEvent("pause")}},{key:"getCurrentTime",value:function(){return this.state.getCurrentTime.call(this)}},{key:"getPlaybackRate",value:function(){return this.playbackRate}},{key:"setPlaybackRate",value:function(e){e=e||1,this.isPaused()?this.playbackRate=e:(this.pause(),this.playbackRate=e,this.play())}}]),t}(l.Observer);d.scriptBufferSize=256,t.default=d,e.exports=t.default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=r(0),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(u),c=r(13),h=n(c),f=r(3),d=n(f),p=r(15),v=n(p),y=r(16),m=n(y),k=(function(){function e(t,r){s(this,e)}o(e,[{key:"create",value:function(e){}}]),o(e,[{key:"init",value:function(){}},{key:"destroy",value:function(){}}])}(),function(e){function t(e){var r;s(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));if(n.defaultParams={audioContext:null,audioRate:1,autoCenter:!0,backend:"WebAudio",barHeight:1,container:null,cursorColor:"#333",cursorWidth:1,dragSelection:!0,fillParent:!0,forceDecode:!1,height:128,hideScrollbar:!1,interact:!0,loopSelection:!0,maxCanvasWidth:4e3,mediaContainer:null,mediaControls:!1,mediaType:"audio",minPxPerSec:20,normalize:!1,partialRender:!1,pixelRatio:window.devicePixelRatio||screen.deviceXDPI/screen.logicalXDPI,plugins:[],progressColor:"#555",removeMediaElementOnDestroy:!0,renderer:h.default,responsive:!1,scrollParent:!1,skipLength:2,splitChannels:!1,waveColor:"#999"},n.backends={MediaElement:v.default,WebAudio:d.default},n.util=l,n.params=l.extend({},n.defaultParams,e),n.container="string"==typeof e.container?document.querySelector(n.params.container):n.params.container,!n.container)throw new Error("Container element not found");if(null==n.params.mediaContainer?n.mediaContainer=n.container:"string"==typeof n.params.mediaContainer?n.mediaContainer=document.querySelector(n.params.mediaContainer):n.mediaContainer=n.params.mediaContainer,!n.mediaContainer)throw new Error("Media Container element not found");if(n.params.maxCanvasWidth<=1)throw new Error("maxCanvasWidth must be greater than 1");if(n.params.maxCanvasWidth%2==1)throw new Error("maxCanvasWidth must be an even number");if(n.savedVolume=0,n.isMuted=!1,n.tmpEvents=[],n.currentAjax=null,n.arraybuffer=null,n.drawer=null,n.backend=null,n.peakCache=null,"function"!=typeof n.params.renderer)throw new Error("Renderer parameter is invalid");n.Drawer=n.params.renderer,n.Backend=n.backends[n.params.backend],n.initialisedPluginList={},n.isDestroyed=!1,n.isReady=!1;var i=0;return n._onResize=l.debounce(function(){i==n.drawer.wrapper.clientWidth||n.params.scrollParent||(i=n.drawer.wrapper.clientWidth,n.drawer.fireEvent("redraw"))},"number"==typeof n.params.responsive?n.params.responsive:100),r=n,a(n,r)}return i(t,e),o(t,null,[{key:"create",value:function(e){return new t(e).init()}}]),o(t,[{key:"init",value:function(){return this.registerPlugins(this.params.plugins),this.createDrawer(),this.createBackend(),this.createPeakCache(),this}},{key:"registerPlugins",value:function(e){var t=this;return e.forEach(function(e){return t.addPlugin(e)}),e.forEach(function(e){e.deferInit||t.initPlugin(e.name)}),this.fireEvent("plugins-registered",e),this}},{key:"addPlugin",value:function(e){var t=this;if(!e.name)throw new Error("Plugin does not have a name!");if(!e.instance)throw new Error("Plugin "+e.name+" does not have an instance property!");e.staticProps&&Object.keys(e.staticProps).forEach(function(r){t[r]=e.staticProps[r]});var r=e.instance;return Object.getOwnPropertyNames(l.Observer.prototype).forEach(function(e){r.prototype[e]=l.Observer.prototype[e]}),this[e.name]=new r(e.params||{},this),this.fireEvent("plugin-added",e.name),this}},{key:"initPlugin",value:function(e){if(!this[e])throw new Error("Plugin "+e+" has not been added yet!");return this.initialisedPluginList[e]&&this.destroyPlugin(e),this[e].init(),this.initialisedPluginList[e]=!0,this.fireEvent("plugin-initialised",e),this}},{key:"destroyPlugin",value:function(e){if(!this[e])throw new Error("Plugin "+e+" has not been added yet and cannot be destroyed!");if(!this.initialisedPluginList[e])throw new Error("Plugin "+e+" is not active and cannot be destroyed!");if("function"!=typeof this[e].destroy)throw new Error("Plugin "+e+" does not have a destroy function!");return this[e].destroy(),delete this.initialisedPluginList[e],this.fireEvent("plugin-destroyed",e),this}},{key:"destroyAllPlugins",value:function(){var e=this;Object.keys(this.initialisedPluginList).forEach(function(t){return e.destroyPlugin(t)})}},{key:"createDrawer",value:function(){var e=this;this.drawer=new this.Drawer(this.container,this.params),this.drawer.init(),this.fireEvent("drawer-created",this.drawer),!1!==this.params.responsive&&(window.addEventListener("resize",this._onResize,!0),window.addEventListener("orientationchange",this._onResize,!0)),this.drawer.on("redraw",function(){e.drawBuffer(),e.drawer.progress(e.backend.getPlayedPercents())}),this.drawer.on("click",function(t,r){setTimeout(function(){return e.seekTo(r)},0)}),this.drawer.on("scroll",function(t){e.params.partialRender&&e.drawBuffer(),e.fireEvent("scroll",t)})}},{key:"createBackend",value:function(){var e=this;this.backend&&this.backend.destroy(),"AudioElement"==this.params.backend&&(this.params.backend="MediaElement"),"WebAudio"!=this.params.backend||this.Backend.prototype.supportsWebAudio.call(null)||(this.params.backend="MediaElement"),this.backend=new this.Backend(this.params),this.backend.init(),this.fireEvent("backend-created",this.backend),this.backend.on("finish",function(){return e.fireEvent("finish")}),this.backend.on("play",function(){return e.fireEvent("play")}),this.backend.on("pause",function(){return e.fireEvent("pause")}),this.backend.on("audioprocess",function(t){e.drawer.progress(e.backend.getPlayedPercents()),e.fireEvent("audioprocess",t)})}},{key:"createPeakCache",value:function(){this.params.partialRender&&(this.peakCache=new m.default)}},{key:"getDuration",value:function(){return this.backend.getDuration()}},{key:"getCurrentTime",value:function(){return this.backend.getCurrentTime()}},{key:"setCurrentTime",value:function(e){this.getDuration()>=e?this.seekTo(1):this.seekTo(e/this.getDuration())}},{key:"play",value:function(e,t){var r=this;this.fireEvent("interaction",function(){return r.play(e,t)}),this.backend.play(e,t)}},{key:"pause",value:function(){this.backend.isPaused()||this.backend.pause()}},{key:"playPause",value:function(){this.backend.isPaused()?this.play():this.pause()}},{key:"isPlaying",value:function(){return!this.backend.isPaused()}},{key:"skipBackward",value:function(e){this.skip(-e||-this.params.skipLength)}},{key:"skipForward",value:function(e){this.skip(e||this.params.skipLength)}},{key:"skip",value:function(e){var t=this.getDuration()||1,r=this.getCurrentTime()||0;r=Math.max(0,Math.min(t,r+(e||0))),this.seekAndCenter(r/t)}},{key:"seekAndCenter",value:function(e){this.seekTo(e),this.drawer.recenter(e)}},{key:"seekTo",value:function(e){var t=this;if("number"!=typeof e||!isFinite(e)||e<0||e>1)return console.error("Error calling wavesurfer.seekTo, parameter must be a number between 0 and 1!");this.fireEvent("interaction",function(){return t.seekTo(e)});var r=this.backend.isPaused();r||this.backend.pause();var n=this.params.scrollParent;this.params.scrollParent=!1,this.backend.seekTo(e*this.getDuration()),this.drawer.progress(e),r||this.backend.play(),this.params.scrollParent=n,this.fireEvent("seek",e)}},{key:"stop",value:function(){this.pause(),this.seekTo(0),this.drawer.progress(0)}},{key:"setVolume",value:function(e){this.backend.setVolume(e)}},{key:"getVolume",value:function(){return this.backend.getVolume()}},{key:"setPlaybackRate",value:function(e){this.backend.setPlaybackRate(e)}},{key:"getPlaybackRate",value:function(){return this.backend.getPlaybackRate()}},{key:"toggleMute",value:function(){this.setMute(!this.isMuted)}},{key:"setMute",value:function(e){e!==this.isMuted&&(e?(this.savedVolume=this.backend.getVolume(),this.backend.setVolume(0),this.isMuted=!0):(this.backend.setVolume(this.savedVolume),this.isMuted=!1))}},{key:"getMute",value:function(){return this.isMuted}},{key:"getFilters",value:function(){return this.backend.filters||[]}},{key:"toggleScroll",value:function(){this.params.scrollParent=!this.params.scrollParent,this.drawBuffer()}},{key:"toggleInteraction",value:function(){this.params.interact=!this.params.interact}},{key:"getWaveColor",value:function(){return this.params.waveColor}},{key:"setWaveColor",value:function(e){this.params.waveColor=e,this.drawBuffer()}},{key:"getProgressColor",value:function(){return this.params.progressColor}},{key:"setProgressColor",value:function(e){this.params.progressColor=e,this.drawBuffer()}},{key:"getCursorColor",value:function(){return this.params.cursorColor}},{key:"setCursorColor",value:function(e){this.params.cursorColor=e,this.drawer.updateCursor()}},{key:"getHeight",value:function(){return this.params.height}},{key:"setHeight",value:function(e){this.params.height=e,this.drawer.setHeight(e*this.params.pixelRatio),this.drawBuffer()}},{key:"drawBuffer",value:function(){var e=Math.round(this.getDuration()*this.params.minPxPerSec*this.params.pixelRatio),t=this.drawer.getWidth(),r=e,n=this.drawer.getScrollX(),a=Math.max(n+t,r);this.params.fillParent&&(!this.params.scrollParent||e<t)&&(r=t,n=0,a=r);var i=void 0;if(this.params.partialRender){var s=this.peakCache.addRangeToPeakCache(r,n,a),o=void 0;for(o=0;o<s.length;o++)i=this.backend.getPeaks(r,s[o][0],s[o][1]),this.drawer.drawPeaks(i,r,s[o][0],s[o][1])}else i=this.backend.getPeaks(r,n,a),this.drawer.drawPeaks(i,r,n,a);this.fireEvent("redraw",i,r)}},{key:"zoom",value:function(e){e?(this.params.minPxPerSec=e,this.params.scrollParent=!0):(this.params.minPxPerSec=this.defaultParams.minPxPerSec,this.params.scrollParent=!1),this.drawBuffer(),this.drawer.progress(this.backend.getPlayedPercents()),this.drawer.recenter(this.getCurrentTime()/this.getDuration()),this.fireEvent("zoom",e)}},{key:"loadArrayBuffer",value:function(e){var t=this;this.decodeArrayBuffer(e,function(e){t.isDestroyed||t.loadDecodedBuffer(e)})}},{key:"loadDecodedBuffer",value:function(e){this.backend.load(e),this.drawBuffer(),this.fireEvent("ready"),this.isReady=!0}},{key:"loadBlob",value:function(e){var t=this,r=new FileReader;r.addEventListener("progress",function(e){return t.onProgress(e)}),r.addEventListener("load",function(e){return t.loadArrayBuffer(e.target.result)}),r.addEventListener("error",function(){return t.fireEvent("error","Error reading file")}),r.readAsArrayBuffer(e),this.empty()}},{key:"load",value:function(e,t,r,n){if(this.empty(),this.isMuted=!1,r){var a={"Preload is not 'auto', 'none' or 'metadata'":-1===["auto","metadata","none"].indexOf(r),"Peaks are not provided":!t,"Backend is not of type MediaElement":"MediaElement"!==this.params.backend,"Url is not of type string":"string"!=typeof e},i=Object.keys(a).filter(function(e){return a[e]});i.length&&(console.warn("Preload parameter of wavesurfer.load will be ignored because:\n\t- "+i.join("\n\t- ")),r=null)}switch(this.params.backend){case"WebAudio":return this.loadBuffer(e,t,n);case"MediaElement":return this.loadMediaElement(e,t,r,n)}}},{key:"loadBuffer",value:function(e,t,r){var n=this,a=function(t){return t&&n.tmpEvents.push(n.once("ready",t)),n.getArrayBuffer(e,function(e){return n.loadArrayBuffer(e)})};if(!t)return a();this.backend.setPeaks(t,r),this.drawBuffer(),this.tmpEvents.push(this.once("interaction",a))}},{key:"loadMediaElement",value:function(e,t,r,n){var a=this,i=e;if("string"==typeof e)this.backend.load(i,this.mediaContainer,t,r);else{var s=e;this.backend.loadElt(s,t),i=s.src}this.tmpEvents.push(this.backend.once("canplay",function(){a.drawBuffer(),a.fireEvent("ready"),a.isReady=!0}),this.backend.once("error",function(e){return a.fireEvent("error",e)})),t&&this.backend.setPeaks(t,n),t&&!this.params.forceDecode||!this.backend.supportsWebAudio()||this.getArrayBuffer(i,function(e){a.decodeArrayBuffer(e,function(e){a.backend.buffer=e,a.backend.setPeaks(null),a.drawBuffer(),a.fireEvent("waveform-ready")})})}},{key:"decodeArrayBuffer",value:function(e,t){var r=this;this.arraybuffer=e,this.backend.decodeArrayBuffer(e,function(n){r.isDestroyed||r.arraybuffer!=e||(t(n),r.arraybuffer=null)},function(){return r.fireEvent("error","Error decoding audiobuffer")})}},{key:"getArrayBuffer",value:function(e,t){var r=this,n=l.ajax({url:e,responseType:"arraybuffer"});return this.currentAjax=n,this.tmpEvents.push(n.on("progress",function(e){r.onProgress(e)}),n.on("success",function(e,n){t(e),r.currentAjax=null}),n.on("error",function(e){r.fireEvent("error","XHR error: "+e.target.statusText),r.currentAjax=null})),n}},{key:"onProgress",value:function(e){var t=void 0;t=e.lengthComputable?e.loaded/e.total:e.loaded/(e.loaded+1e6),this.fireEvent("loading",Math.round(100*t),e.target)}},{key:"exportPCM",value:function(e,t,r,n){e=e||1024,n=n||0,t=t||1e4,r=r||!1;var a=this.backend.getPeaks(e,n),i=[].map.call(a,function(e){return Math.round(e*t)/t}),s=JSON.stringify(i);return r||window.open("data:application/json;charset=utf-8,"+encodeURIComponent(s)),s}},{key:"exportImage",value:function(e,t){return e||(e="image/png"),t||(t=1),this.drawer.getImage(e,t)}},{key:"cancelAjax",value:function(){this.currentAjax&&(this.currentAjax.xhr.abort(),this.currentAjax=null)}},{key:"clearTmpEvents",value:function(){this.tmpEvents.forEach(function(e){return e.un()})}},{key:"empty",value:function(){this.backend.isPaused()||(this.stop(),this.backend.disconnectSource()),this.cancelAjax(),this.clearTmpEvents(),this.drawer.progress(0),this.drawer.setWidth(0),this.drawer.drawPeaks({length:this.drawer.getWidth()},0)}},{key:"destroy",value:function(){this.destroyAllPlugins(),this.fireEvent("destroy"),this.cancelAjax(),this.clearTmpEvents(),this.unAll(),!1!==this.params.responsive&&(window.removeEventListener("resize",this._onResize,!0),window.removeEventListener("orientationchange",this._onResize,!0)),this.backend.destroy(),this.drawer.destroy(),this.isDestroyed=!0,this.arraybuffer=null}}]),t}(l.Observer));k.util=l,t.default=k,e.exports=t.default},function(e,t,r){"use strict";function n(e){var t=new i.default,r=new XMLHttpRequest,n=!1;return r.open(e.method||"GET",e.url,!0),r.responseType=e.responseType||"json",r.addEventListener("progress",function(e){t.fireEvent("progress",e),e.lengthComputable&&e.loaded==e.total&&(n=!0)}),r.addEventListener("load",function(e){n||t.fireEvent("progress",e),t.fireEvent("load",e),200==r.status||206==r.status?t.fireEvent("success",r.response,e):t.fireEvent("error",e)}),r.addEventListener("error",function(e){return t.fireEvent("error",e)}),r.send(),t.xhr=r,t}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var a=r(1),i=function(e){return e&&e.__esModule?e:{default:e}}(a);e.exports=t.default},function(e,t,r){"use strict";function n(){return"wavesurfer_"+Math.random().toString(32).substring(2)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n,e.exports=t.default},function(e,t,r){"use strict";function n(e){var t=-1/0;return Object.keys(e).forEach(function(r){e[r]>t&&(t=e[r])}),t}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n,e.exports=t.default},function(e,t,r){"use strict";function n(e){var t=Number(1/0);return Object.keys(e).forEach(function(r){e[r]<t&&(t=e[r])}),t}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n,e.exports=t.default},function(e,t,r){"use strict";function n(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return r.forEach(function(t){Object.keys(t).forEach(function(r){e[r]=t[r]})}),e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n,e.exports=t.default},function(e,t,r){"use strict";function n(e,t){return Object.keys(t).forEach(function(r){e.style[r]!==t[r]&&(e.style[r]=t[r])}),e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n,e.exports=t.default},function(e,t,r){"use strict";function n(e){return function(){for(var t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];return(0,i.default)(function(){return e.apply(void 0,r)})}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var a=r(2),i=function(e){return e&&e.__esModule?e:{default:e}}(a);e.exports=t.default},function(e,t){e.exports=function(e,t,r){function n(){var l=Date.now()-o;l<t&&l>=0?a=setTimeout(n,t-l):(a=null,r||(u=e.apply(s,i),s=i=null))}var a,i,s,o,u;null==t&&(t=100);var l=function(){s=this,i=arguments,o=Date.now();var l=r&&!a;return a||(a=setTimeout(n,t)),l&&(u=e.apply(s,i),s=i=null),u};return l.clear=function(){a&&(clearTimeout(a),a=null)},l.flush=function(){a&&(u=e.apply(s,i),s=i=null,clearTimeout(a),a=null)},l}},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=r(14),u=function(e){return e&&e.__esModule?e:{default:e}}(o),l=r(0),c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(l),h=function(e){function t(e,r){n(this,t);var i=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,r));return i.maxCanvasWidth=r.maxCanvasWidth,i.maxCanvasElementWidth=Math.round(r.maxCanvasWidth/r.pixelRatio),i.hasProgressCanvas=r.waveColor!=r.progressColor,i.halfPixel=.5/r.pixelRatio,i.canvases=[],i.progressWave=null,i}return i(t,e),s(t,[{key:"init",value:function(){this.createWrapper(),this.createElements()}},{key:"createElements",value:function(){this.progressWave=this.wrapper.appendChild(this.style(document.createElement("wave"),{position:"absolute",zIndex:3,left:0,top:0,bottom:0,overflow:"hidden",width:"0",display:"none",boxSizing:"border-box",borderRightStyle:"solid",pointerEvents:"none"})),this.addCanvas(),this.updateCursor()}},{key:"updateCursor",value:function(){this.style(this.progressWave,{borderRightWidth:this.params.cursorWidth+"px",borderRightColor:this.params.cursorColor})}},{key:"updateSize",value:function(){for(var e=this,t=Math.round(this.width/this.params.pixelRatio),r=Math.ceil(t/this.maxCanvasElementWidth);this.canvases.length<r;)this.addCanvas();for(;this.canvases.length>r;)this.removeCanvas();this.canvases.forEach(function(t,r){var n=e.maxCanvasWidth+2*Math.ceil(e.params.pixelRatio/2);r==e.canvases.length-1&&(n=e.width-e.maxCanvasWidth*(e.canvases.length-1)),e.updateDimensions(t,n,e.height),e.clearWaveForEntry(t)})}},{key:"addCanvas",value:function(){var e={},t=this.maxCanvasElementWidth*this.canvases.length;e.wave=this.wrapper.appendChild(this.style(document.createElement("canvas"),{position:"absolute",zIndex:2,left:t+"px",top:0,bottom:0,height:"100%",pointerEvents:"none"})),e.waveCtx=e.wave.getContext("2d"),this.hasProgressCanvas&&(e.progress=this.progressWave.appendChild(this.style(document.createElement("canvas"),{position:"absolute",left:t+"px",top:0,bottom:0,height:"100%"})),e.progressCtx=e.progress.getContext("2d")),this.canvases.push(e)}},{key:"removeCanvas",value:function(){var e=this.canvases.pop();e.wave.parentElement.removeChild(e.wave),this.hasProgressCanvas&&e.progress.parentElement.removeChild(e.progress)}},{key:"updateDimensions",value:function(e,t,r){var n=Math.round(t/this.params.pixelRatio),a=Math.round(this.width/this.params.pixelRatio);e.start=e.waveCtx.canvas.offsetLeft/a||0,e.end=e.start+n/a,e.waveCtx.canvas.width=t,e.waveCtx.canvas.height=r,this.style(e.waveCtx.canvas,{width:n+"px"}),this.style(this.progressWave,{display:"block"}),this.hasProgressCanvas&&(e.progressCtx.canvas.width=t,e.progressCtx.canvas.height=r,this.style(e.progressCtx.canvas,{width:n+"px"}))}},{key:"clearWave",value:function(){var e=this;this.canvases.forEach(function(t){return e.clearWaveForEntry(t)})}},{key:"clearWaveForEntry",value:function(e){e.waveCtx.clearRect(0,0,e.waveCtx.canvas.width,e.waveCtx.canvas.height),this.hasProgressCanvas&&e.progressCtx.clearRect(0,0,e.progressCtx.canvas.width,e.progressCtx.canvas.height)}},{key:"drawBars",value:function(e,t,r,n){var a=this;return this.prepareDraw(e,t,r,n,function(e){var t=e.absmax,i=e.hasMinVals,s=(e.height,e.offsetY),o=e.halfH,u=e.peaks;if(void 0!==r){var l=i?2:1,c=u.length/l,h=a.params.barWidth*a.params.pixelRatio,f=Math.max(a.params.pixelRatio,~~(h/2)),d=h+f,p=c/a.width,v=r,y=n,m=void 0;for(m=v;m<y;m+=d){var k=u[Math.floor(m*p*l)]||0,g=Math.round(k/t*o);a.fillRect(m+a.halfPixel,o-g+s,h+a.halfPixel,2*g)}}})}},{key:"drawWave",value:function(e,t,r,n){var a=this;return this.prepareDraw(e,t,r,n,function(e){var t=e.absmax,i=e.hasMinVals,s=(e.height,e.offsetY),o=e.halfH,u=e.peaks;if(!i){var l=[],c=u.length,h=void 0;for(h=0;h<c;h++)l[2*h]=u[h],l[2*h+1]=-u[h];u=l}void 0!==r&&a.drawLine(u,t,o,s,r,n),a.fillRect(0,o+s-a.halfPixel,a.width,a.halfPixel)})}},{key:"drawLine",value:function(e,t,r,n,a,i){var s=this;this.canvases.forEach(function(o){s.setFillStyles(o),s.drawLineToContext(o,o.waveCtx,e,t,r,n,a,i),s.drawLineToContext(o,o.progressCtx,e,t,r,n,a,i)})}},{key:"drawLineToContext",value:function(e,t,r,n,a,i,s,o){if(t){var u=r.length/2,l=this.params.fillParent&&this.width!=u?this.width/u:1,c=Math.round(u*e.start),h=Math.round(u*e.end)+1;if(!(c>o||h<s)){var f=Math.min(c,s),d=Math.max(h,o),p=void 0,v=void 0;for(t.beginPath(),t.moveTo((f-c)*l+this.halfPixel,a+i),p=f;p<d;p++){var y=r[2*p]||0,m=Math.round(y/n*a);t.lineTo((p-c)*l+this.halfPixel,a-m+i)}for(v=d-1;v>=f;v--){var k=r[2*v+1]||0,g=Math.round(k/n*a);t.lineTo((v-c)*l+this.halfPixel,a-g+i)}t.closePath(),t.fill()}}}},{key:"fillRect",value:function(e,t,r,n){var a=Math.floor(e/this.maxCanvasWidth),i=Math.min(Math.ceil((e+r)/this.maxCanvasWidth)+1,this.canvases.length),s=void 0;for(s=a;s<i;s++){var o=this.canvases[s],u=s*this.maxCanvasWidth,l={x1:Math.max(e,s*this.maxCanvasWidth),y1:t,x2:Math.min(e+r,s*this.maxCanvasWidth+o.waveCtx.canvas.width),y2:t+n};l.x1<l.x2&&(this.setFillStyles(o),this.fillRectToContext(o.waveCtx,l.x1-u,l.y1,l.x2-l.x1,l.y2-l.y1),this.fillRectToContext(o.progressCtx,l.x1-u,l.y1,l.x2-l.x1,l.y2-l.y1))}}},{key:"prepareDraw",value:function(e,t,r,n,a){var i=this;return c.frame(function(){if(e[0]instanceof Array){var s=e;if(i.params.splitChannels)return i.setHeight(s.length*i.params.height*i.params.pixelRatio),s.forEach(function(e,t){return i.prepareDraw(e,t,r,n,a)});e=s[0]}var o=1/i.params.barHeight;if(i.params.normalize){var u=c.max(e),l=c.min(e);o=-l>u?-l:u}var h=[].some.call(e,function(e){return e<0}),f=i.params.height*i.params.pixelRatio;return a({absmax:o,hasMinVals:h,height:f,offsetY:f*t||0,halfH:f/2,peaks:e})})()}},{key:"fillRectToContext",value:function(e,t,r,n,a){e&&e.fillRect(t,r,n,a)}},{key:"setFillStyles",value:function(e){e.waveCtx.fillStyle=this.params.waveColor,this.hasProgressCanvas&&(e.progressCtx.fillStyle=this.params.progressColor)}},{key:"getImage",value:function(e,t){var r=this.canvases.map(function(r){return r.wave.toDataURL(e,t)});return r.length>1?r:r[0]}},{key:"updateProgress",value:function(e){this.style(this.progressWave,{width:e+"px"})}}]),t}(u.default);t.default=h,e.exports=t.default},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=r(0),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(o),l=function(e){function t(e,r){n(this,t);var i=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return i.container=e,i.params=r,i.width=0,i.height=r.height*i.params.pixelRatio,i.lastPos=0,i.wrapper=null,i}return i(t,e),s(t,[{key:"style",value:function(e,t){return u.style(e,t)}},{key:"createWrapper",value:function(){this.wrapper=this.container.appendChild(document.createElement("wave")),this.style(this.wrapper,{display:"block",position:"relative",userSelect:"none",webkitUserSelect:"none",height:this.params.height+"px"}),(this.params.fillParent||this.params.scrollParent)&&this.style(this.wrapper,{width:"100%",overflowX:this.params.hideScrollbar?"hidden":"auto",overflowY:"hidden"}),this.setupWrapperEvents()}},{key:"handleEvent",value:function(e,t){!t&&e.preventDefault();var r=e.targetTouches?e.targetTouches[0].clientX:e.clientX,n=this.wrapper.getBoundingClientRect(),a=this.width,i=this.getWidth(),s=void 0;return!this.params.fillParent&&a<i?(s=(r-n.left)*this.params.pixelRatio/a||0)>1&&(s=1):s=(r-n.left+this.wrapper.scrollLeft)/this.wrapper.scrollWidth||0,s}},{key:"setupWrapperEvents",value:function(){var e=this;this.wrapper.addEventListener("click",function(t){var r=e.wrapper.offsetHeight-e.wrapper.clientHeight;if(0!=r){var n=e.wrapper.getBoundingClientRect();if(t.clientY>=n.bottom-r)return}e.params.interact&&e.fireEvent("click",t,e.handleEvent(t))}),this.wrapper.addEventListener("scroll",function(t){return e.fireEvent("scroll",t)})}},{key:"drawPeaks",value:function(e,t,r,n){this.setWidth(t)||this.clearWave(),this.params.barWidth?this.drawBars(e,0,r,n):this.drawWave(e,0,r,n)}},{key:"resetScroll",value:function(){null!==this.wrapper&&(this.wrapper.scrollLeft=0)}},{key:"recenter",value:function(e){var t=this.wrapper.scrollWidth*e;this.recenterOnPosition(t,!0)}},{key:"recenterOnPosition",value:function(e,t){var r=this.wrapper.scrollLeft,n=~~(this.wrapper.clientWidth/2),a=this.wrapper.scrollWidth-this.wrapper.clientWidth,i=e-n,s=i-r;if(0!=a){if(!t&&-n<=s&&s<n){s=Math.max(-5,Math.min(5,s)),i=r+s}i=Math.max(0,Math.min(a,i)),i!=r&&(this.wrapper.scrollLeft=i)}}},{key:"getScrollX",value:function(){return Math.round(this.wrapper.scrollLeft*this.params.pixelRatio)}},{key:"getWidth",value:function(){return Math.round(this.container.clientWidth*this.params.pixelRatio)}},{key:"setWidth",value:function(e){return this.width!=e&&(this.width=e,this.params.fillParent||this.params.scrollParent?this.style(this.wrapper,{width:""}):this.style(this.wrapper,{width:~~(this.width/this.params.pixelRatio)+"px"}),this.updateSize(),!0)}},{key:"setHeight",value:function(e){return e!=this.height&&(this.height=e,this.style(this.wrapper,{height:~~(this.height/this.params.pixelRatio)+"px"}),this.updateSize(),!0)}},{key:"progress",value:function(e){var t=1/this.params.pixelRatio,r=Math.round(e*this.width)*t;if(r<this.lastPos||r-this.lastPos>=t){if(this.lastPos=r,this.params.scrollParent&&this.params.autoCenter){var n=~~(this.wrapper.scrollWidth*e);this.recenterOnPosition(n)}this.updateProgress(r)}}},{key:"destroy",value:function(){this.unAll(),this.wrapper&&(this.wrapper.parentNode==this.container&&this.container.removeChild(this.wrapper),this.wrapper=null)}},{key:"updateCursor",value:function(){}},{key:"updateSize",value:function(){}},{key:"drawBars",value:function(e,t,r,n){}},{key:"drawWave",value:function(e,t,r,n){}},{key:"clearWave",value:function(){}},{key:"updateProgress",value:function(e){}}]),t}(u.Observer);t.default=l,e.exports=t.default},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=function e(t,r,n){null===t&&(t=Function.prototype);var a=Object.getOwnPropertyDescriptor(t,r);if(void 0===a){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,r,n)}if("value"in a)return a.value;var s=a.get;if(void 0!==s)return s.call(n)},u=r(3),l=function(e){return e&&e.__esModule?e:{default:e}}(u),c=r(0),h=(function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);t.default=e}(c),function(e){function t(e){n(this,t);var r=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.params=e,r.media={currentTime:0,duration:0,paused:!0,playbackRate:1,play:function(){},pause:function(){}},r.mediaType=e.mediaType.toLowerCase(),r.elementPosition=e.elementPosition,r.peaks=null,r.playbackRate=1,r.buffer=null,r.onPlayEnd=null,r}return i(t,e),s(t,[{key:"init",value:function(){this.setPlaybackRate(this.params.audioRate),this.createTimer()}},{key:"createTimer",value:function(){var e=this,t=function t(){if(!e.isPaused()){e.fireEvent("audioprocess",e.getCurrentTime());(window.requestAnimationFrame||window.webkitRequestAnimationFrame)(t)}};this.on("play",t)}},{key:"load",value:function(e,t,r,n){var a=document.createElement(this.mediaType);a.controls=this.params.mediaControls,a.autoplay=this.params.autoplay||!1,a.preload=null==n?"auto":n,a.src=e,a.style.width="100%";var i=t.querySelector(this.mediaType);i&&t.removeChild(i),t.appendChild(a),this._load(a,r)}},{key:"loadElt",value:function(e,t){e.controls=this.params.mediaControls,e.autoplay=this.params.autoplay||!1,this._load(e,t)}},{key:"_load",value:function(e,t){var r=this;"function"==typeof e.load&&e.load(),e.addEventListener("error",function(){r.fireEvent("error","Error loading media element")}),e.addEventListener("canplay",function(){r.fireEvent("canplay")}),e.addEventListener("ended",function(){r.fireEvent("finish")}),e.addEventListener("play",function(){r.fireEvent("play")}),e.addEventListener("pause",function(){r.fireEvent("pause")}),this.media=e,this.peaks=t,this.onPlayEnd=null,this.buffer=null,this.setPlaybackRate(this.playbackRate)}},{key:"isPaused",value:function(){return!this.media||this.media.paused}},{key:"getDuration",value:function(){if(this.explicitDuration)return this.explicitDuration;var e=(this.buffer||this.media).duration;return e>=1/0&&(e=this.media.seekable.end(0)),e}},{key:"getCurrentTime",value:function(){return this.media&&this.media.currentTime}},{key:"getPlayedPercents",value:function(){return this.getCurrentTime()/this.getDuration()||0}},{key:"getPlaybackRate",value:function(){return this.playbackRate||this.media.playbackRate}},{key:"setPlaybackRate",value:function(e){this.playbackRate=e||1,this.media.playbackRate=this.playbackRate}},{key:"seekTo",value:function(e){null!=e&&(this.media.currentTime=e),this.clearPlayEnd()}},{key:"play",value:function(e,t){this.seekTo(e),this.media.play(),t&&this.setPlayEnd(t)}},{key:"pause",value:function(){this.media&&this.media.pause(),this.clearPlayEnd()}},{key:"setPlayEnd",value:function(e){var t=this;this._onPlayEnd=function(r){r>=e&&(t.pause(),t.seekTo(e))},this.on("audioprocess",this._onPlayEnd)}},{key:"clearPlayEnd",value:function(){this._onPlayEnd&&(this.un("audioprocess",this._onPlayEnd),this._onPlayEnd=null)}},{key:"getPeaks",value:function(e,r,n){return this.buffer?o(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"getPeaks",this).call(this,e,r,n):this.peaks||[]}},{key:"getVolume",value:function(){return this.media.volume}},{key:"setVolume",value:function(e){this.media.volume=e}},{key:"destroy",value:function(){this.pause(),this.unAll(),this.params.removeMediaElementOnDestroy&&this.media&&this.media.parentNode&&this.media.parentNode.removeChild(this.media),this.media=null}}]),t}(l.default));t.default=h,e.exports=t.default},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=function(){function e(){n(this,e),this.clearPeakCache()}return a(e,[{key:"clearPeakCache",value:function(){this.peakCacheRanges=[],this.peakCacheLength=-1}},{key:"addRangeToPeakCache",value:function(e,t,r){e!=this.peakCacheLength&&(this.clearPeakCache(),this.peakCacheLength=e);for(var n=[],a=0;a<this.peakCacheRanges.length&&this.peakCacheRanges[a]<t;)a++;for(a%2==0&&n.push(t);a<this.peakCacheRanges.length&&this.peakCacheRanges[a]<=r;)n.push(this.peakCacheRanges[a]),a++;a%2==0&&n.push(r),n=n.filter(function(e,t,r){return 0==t?e!=r[t+1]:t==r.length-1?e!=r[t-1]:e!=r[t-1]&&e!=r[t+1]}),this.peakCacheRanges=this.peakCacheRanges.concat(n),this.peakCacheRanges=this.peakCacheRanges.sort(function(e,t){return e-t}).filter(function(e,t,r){return 0==t?e!=r[t+1]:t==r.length-1?e!=r[t-1]:e!=r[t-1]&&e!=r[t+1]});var i=[];for(a=0;a<n.length;a+=2)i.push([n[a],n[a+1]]);return i}},{key:"getCacheRanges",value:function(){var e=[],t=void 0;for(t=0;t<this.peakCacheRanges.length;t+=2)e.push([this.peakCacheRanges[t],this.peakCacheRanges[t+1]]);return e}}]),e}();t.default=i,e.exports=t.default}])});
//# sourceMappingURL=wavesurfer.min.js.map
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("microphone",[],t):"object"==typeof exports?exports.microphone=t():(e.WaveSurfer=e.WaveSurfer||{},e.WaveSurfer.microphone=t())}("undefined"!=typeof self?self:this,function(){return function(e){function t(i){if(r[i])return r[i].exports;var n=r[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,i){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="localhost:8080/dist/plugin/",t(t.s=5)}({5:function(e,t,r){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),o=function(){function e(t,r){var n=this;i(this,e),this.params=t,this.wavesurfer=r,this.active=!1,this.paused=!1,this.reloadBufferFunction=function(e){return n.reloadBuffer(e)};var o=function(e,t,r){var i=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia;return i?new Promise(function(t,r){i.call(navigator,e,t,r)}):Promise.reject(new Error("getUserMedia is not implemented in this browser"))};void 0===navigator.mediaDevices&&(navigator.mediaDevices={}),void 0===navigator.mediaDevices.getUserMedia&&(navigator.mediaDevices.getUserMedia=o),this.constraints=this.params.constraints||{video:!1,audio:!0},this.bufferSize=this.params.bufferSize||4096,this.numberOfInputChannels=this.params.numberOfInputChannels||1,this.numberOfOutputChannels=this.params.numberOfOutputChannels||1,this._onBackendCreated=function(){n.micContext=n.wavesurfer.backend.getAudioContext()}}return n(e,null,[{key:"create",value:function(t){return{name:"microphone",deferInit:!(!t||!t.deferInit)&&t.deferInit,params:t,instance:e}}}]),n(e,[{key:"init",value:function(){this.wavesurfer.on("backend-created",this._onBackendCreated),this.wavesurfer.backend&&this._onBackendCreated()}},{key:"destroy",value:function(){this.paused=!0,this.wavesurfer.un("backend-created",this._onBackendCreated),this.stop()}},{key:"start",value:function(){var e=this;navigator.mediaDevices.getUserMedia(this.constraints).then(function(t){return e.gotStream(t)}).catch(function(t){return e.deviceError(t)})}},{key:"togglePlay",value:function(){this.active?(this.paused=!this.paused,this.paused?this.pause():this.play()):this.start()}},{key:"play",value:function(){this.paused=!1,this.connect()}},{key:"pause",value:function(){this.paused=!0,this.disconnect()}},{key:"stop",value:function(){this.active&&(this.stopDevice(),this.wavesurfer.empty())}},{key:"stopDevice",value:function(){if(this.active=!1,this.disconnect(),this.stream){var e=this.detectBrowser();if(("chrome"===e.browser&&e.version>=45||"firefox"===e.browser&&e.version>=44||"edge"===e.browser)&&this.stream.getTracks)return void this.stream.getTracks().forEach(function(e){return e.stop()});this.stream.stop()}}},{key:"connect",value:function(){void 0!==this.stream&&(this.mediaStreamSource=this.micContext.createMediaStreamSource(this.stream),this.levelChecker=this.micContext.createScriptProcessor(this.bufferSize,this.numberOfInputChannels,this.numberOfOutputChannels),this.mediaStreamSource.connect(this.levelChecker),this.levelChecker.connect(this.micContext.destination),this.levelChecker.onaudioprocess=this.reloadBufferFunction)}},{key:"disconnect",value:function(){void 0!==this.mediaStreamSource&&this.mediaStreamSource.disconnect(),void 0!==this.levelChecker&&(this.levelChecker.disconnect(),this.levelChecker.onaudioprocess=void 0)}},{key:"reloadBuffer",value:function(e){this.paused||(this.wavesurfer.empty(),this.wavesurfer.loadDecodedBuffer(e.inputBuffer))}},{key:"gotStream",value:function(e){this.stream=e,this.active=!0,this.play(),this.fireEvent("deviceReady",e)}},{key:"deviceError",value:function(e){this.fireEvent("deviceError",e)}},{key:"extractVersion",value:function(e,t,r){var i=e.match(t);return i&&i.length>=r&&parseInt(i[r],10)}},{key:"detectBrowser",value:function(){var e={};return e.browser=null,e.version=null,e.minVersion=null,"undefined"!=typeof window&&window.navigator?navigator.mozGetUserMedia?(e.browser="firefox",e.version=this.extractVersion(navigator.userAgent,/Firefox\/([0-9]+)\./,1),e.minVersion=31,e):navigator.webkitGetUserMedia&&window.webkitRTCPeerConnection?(e.browser="chrome",e.version=this.extractVersion(navigator.userAgent,/Chrom(e|ium)\/([0-9]+)\./,2),e.minVersion=38,e):navigator.mediaDevices&&navigator.userAgent.match(/Edge\/(\d+).(\d+)$/)?(e.browser="edge",e.version=this.extractVersion(navigator.userAgent,/Edge\/(\d+).(\d+)$/,2),e.minVersion=10547,e):(e.browser="Not a supported browser.",e):(e.browser="Not a supported browser.",e)}}]),e}();t.default=o,e.exports=t.default}})});
//# sourceMappingURL=wavesurfer.microphone.min.js.map
/**
 * videojs-wavesurfer
 * @version 2.1.3
 * @see https://github.com/collab-project/videojs-wavesurfer
 * @copyright 2014-2017 Collab
 * @license MIT
 */
!function e(t,r,i){function o(a,n){if(!r[a]){if(!t[a]){var l="function"==typeof require&&require;if(!n&&l)return l(a,!0);if(s)return s(a,!0);var u=new Error("Cannot find module '"+a+"'");throw u.code="MODULE_NOT_FOUND",u}var h=r[a]={exports:{}};t[a][0].call(h.exports,function(e){var r=t[a][1][e];return o(r||e)},h,h.exports,e,t,r,i)}return r[a].exports}for(var s="function"==typeof require&&require,a=0;a<i.length;a++)o(i[a]);return o}({1:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});r.default={debug:!1,msDisplayMax:3}},{}],2:[function(e,t,r){"use strict";function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}Object.defineProperty(r,"__esModule",{value:!0});var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),s=function e(t,r,i){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,r);if(void 0===o){var s=Object.getPrototypeOf(t);return null===s?void 0:e(s,r,i)}if("value"in o)return o.value;var a=o.get;if(void 0!==a)return a.call(i)},a=videojs.getTech("Html5"),n=function(e){function t(e,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),e.nativeTextTracks=!1;var o=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,r));return o.activePlayer=videojs(e.playerId),o.waveready=!1,o.activePlayer.on("waveReady",function(){o.waveready=!0}),o.playerIsUsingWavesurfer()?(o.activePlayer.activeWavesurferPlugin.on("timeupdate",function(){o.trigger("timeupdate")}),o):i(o)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a),o(t,[{key:"playerIsUsingWavesurfer",value:function(){var e=videojs.getPlugins();return"wavesurfer"in e&&!("record"in e)}},{key:"play",value:function(){return this.playerIsUsingWavesurfer()?this.activePlayer.activeWavesurferPlugin.play():s(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"play",this).call(this)}},{key:"pause",value:function(){return this.playerIsUsingWavesurfer()?this.activePlayer.activeWavesurferPlugin.pause():s(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"pause",this).call(this)}},{key:"currentTime",value:function(){return this.playerIsUsingWavesurfer()?this.waveready?this.activePlayer.activeWavesurferPlugin.getCurrentTime():0:s(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"currentTime",this).call(this)}},{key:"duration",value:function(){return this.playerIsUsingWavesurfer()?this.waveready?this.activePlayer.activeWavesurferPlugin.getDuration():0:s(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"duration",this).call(this)}},{key:"setCurrentTime",value:function(e){return this.playerIsUsingWavesurfer()?this.waveready?this.activePlayer.activeWavesurferPlugin.surfer.seekTo(e/this.activePlayer.activeWavesurferPlugin.surfer.getDuration()):0:s(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"currentTime",this).call(this,e)}},{key:"setPlaybackRate",value:function(e){return this.playerIsUsingWavesurfer()&&this.activePlayer.activeWavesurferPlugin.surfer.setPlaybackRate(e),s(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"setPlaybackRate",this).call(this,e)}}]),t}();n.isSupported=function(){return!0},r.default=n},{}],3:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});r.default=function(e,t,r){e=e<0?0:e,t=t||e;var i=Math.floor(e%60),o=Math.floor(e/60%60),s=Math.floor(e/3600),a=Math.floor(t/60%60),n=Math.floor(t/3600),l=Math.floor(1e3*(e-i));return(isNaN(e)||e===1/0)&&(s=o=i=l="-"),t>0&&t<r?(l<100&&(l=l<10?"00"+l:"0"+l),l=":"+l):l="",s=s>0||n>0?s+":":"",o=((s||a>=10)&&o<10?"0"+o:o)+":",i=i<10?"0"+i:i,s+o+i+l}},{}],4:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});r.default=function(e,t,r){!0===r&&("error"===t?videojs.log.error(e):"warn"===t?videojs.log.warn(e):videojs.log(e))}},{}],5:[function(e,t,r){(function(e){var r;r="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{},t.exports=r}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],6:[function(e,t,r){(function(r){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var s=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),a=i(e(4)),n=i(e(3)),l=i(e(1)),u=i(e(2)),h=i(e(5)),f=i("undefined"!=typeof window?window.videojs:void 0!==r?r.videojs:null),p=i("undefined"!=typeof window?window.WaveSurfer:void 0!==r?r.WaveSurfer:null),c=f.default.getPlugin("plugin"),y="vjs-wavedisplay",d=function(e){function t(e,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var i=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,r));if(r=f.default.mergeOptions(l.default,r),i.waveReady=!1,i.waveFinished=!1,i.liveMode=!1,i.debug="true"===r.debug.toString(),i.msDisplayMax=parseFloat(r.msDisplayMax),i.player.activeWavesurferPlugin=i,void 0!==i.player.options_.plugins.wavesurfer&&i.player.addClass("videojs-wavesurfer"),"live"===r.src){if(void 0===p.default.microphone)return i.onWaveError("Could not find wavesurfer.js microphone plugin!"),o(i);i.liveMode=!0,i.waveReady=!0}return i.player.one("ready",i.initialize.bind(i)),i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,c),s(t,[{key:"initialize",value:function(){if(this.player.bigPlayButton.hide(),!0===this.player.usingNativeControls_&&void 0!==this.player.tech_.el_&&(this.player.tech_.el_.controls=!1),!0===this.player.options_.controls){this.player.controlBar.show(),this.player.controlBar.el_.style.display="flex",this.player.controlBar.progressControl.hide();[this.player.controlBar.currentTimeDisplay,this.player.controlBar.timeDivider,this.player.controlBar.durationDisplay].forEach(function(e){void 0!==e&&(e.el_.style.display="block",e.show())}),void 0!==this.player.controlBar.remainingTimeDisplay&&this.player.controlBar.remainingTimeDisplay.hide(),this.player.controlBar.playToggle.on(["tap","click"],this.onPlayToggle.bind(this)),this.liveMode||this.player.controlBar.playToggle.hide()}var e=this.parseOptions(this.player.options_.plugins.wavesurfer);this.surfer=p.default.create(e),this.surfer.on("error",this.onWaveError.bind(this)),this.surfer.on("finish",this.onWaveFinish.bind(this)),!0===this.liveMode&&this.surfer.microphone.on("deviceError",this.onWaveError.bind(this)),this.surferReady=this.onWaveReady.bind(this),this.surferProgress=this.onWaveProgress.bind(this),this.surferSeek=this.onWaveSeek.bind(this),this.liveMode||this.setupPlaybackEvents(!0),this.player.on("volumechange",this.onVolumeChange.bind(this)),this.player.on("fullscreenchange",this.onScreenChange.bind(this)),!0===this.player.options_.fluid&&(this.surfer.drawer.wrapper.className=y,this.responsiveWave=p.default.util.debounce(this.onResizeChange.bind(this),150),h.default.addEventListener("resize",this.responsiveWave)),this.startPlayers()}},{key:"parseOptions",value:function(e){var t=this.player.el_.getBoundingClientRect();this.originalWidth=this.player.options_.width||t.width,this.originalHeight=this.player.options_.height||t.height;var r=this.player.controlBar.height();if(!0===this.player.options_.controls&&0===r&&(r=30),void 0===e.container&&(e.container=this.player.el_),void 0===e.waveformHeight){var i=t.height;e.height=i-r}else e.height=opts.waveformHeight;return e.splitChannels&&!0===e.splitChannels&&(e.height/=2),!0===this.liveMode&&(e.plugins=[p.default.microphone.create(e)],this.log("wavesurfer.js microphone plugin enabled.")),e}},{key:"startPlayers",value:function(){var e=this.player.options_.plugins.wavesurfer;void 0!==e.src?void 0===this.surfer.microphone?(this.player.loadingSpinner.show(),this.load(e.src,e.peaks)):(this.player.loadingSpinner.hide(),e.wavesurfer=this.surfer):this.player.loadingSpinner.hide()}},{key:"setupPlaybackEvents",value:function(e){!1===e?(this.surfer.un("ready",this.surferReady),this.surfer.un("audioprocess",this.surferProgress),this.surfer.un("seek",this.surferSeek)):!0===e&&(this.surfer.on("ready",this.surferReady),this.surfer.on("audioprocess",this.surferProgress),this.surfer.on("seek",this.surferSeek))}},{key:"load",value:function(e,t){var r=this;if(e instanceof Blob||e instanceof File)this.log("Loading object: "+JSON.stringify(e)),this.surfer.loadBlob(e);else if(void 0!==t){var i=p.default.util.ajax({url:t,responseType:"json"});i.on("success",function(i,o){r.log("Loading URL: "+e+"\nLoading Peak Data URL: "+t),r.surfer.load(e,i.data)}),i.on("error",function(i){r.log("Unable to retrieve peak data from "+t+". Status code: "+i.target.status,"warn"),r.log("Loading URL: "+e),r.surfer.load(e)})}else this.log("Loading URL: "+e),this.surfer.load(e)}},{key:"play",value:function(){if(this.player.controlBar.playToggle.handlePlay(),this.liveMode)if(this.surfer.microphone.active){!this.surfer.microphone.paused?this.pause():(this.log("Resume microphone"),this.surfer.microphone.play())}else this.log("Start microphone"),this.surfer.microphone.start();else this.log("Start playback"),this.player.play(),this.surfer.play()}},{key:"pause",value:function(){this.player.controlBar.playToggle.handlePause(),this.liveMode?(this.log("Pause microphone"),this.surfer.microphone.pause()):(this.log("Pause playback"),this.waveFinished?this.waveFinished=!1:this.surfer.pause(),this.setCurrentTime())}},{key:"dispose",value:function(){this.liveMode&&this.surfer.microphone&&(this.surfer.microphone.destroy(),this.log("Destroyed microphone plugin")),this.surfer.destroy(),this.log("Destroyed plugin")}},{key:"destroy",value:function(){this.player.dispose()}},{key:"setVolume",value:function(e){void 0!==e&&(this.log("Changing volume to: "+e),this.player.volume(e))}},{key:"exportImage",value:function(e,t){return this.surfer.exportImage(e,t)}},{key:"getCurrentTime",value:function(){var e=this.surfer.getCurrentTime();return e=isNaN(e)?0:e}},{key:"setCurrentTime",value:function(e,t){this.trigger("timeupdate"),void 0===e&&(e=this.surfer.getCurrentTime()),void 0===t&&(t=this.surfer.getDuration()),e=isNaN(e)?0:e,t=isNaN(t)?0:t;var r=Math.min(e,t);this.player.controlBar.currentTimeDisplay.formattedTime_=this.player.controlBar.currentTimeDisplay.contentEl().lastChild.textContent=(0,n.default)(r,t,this.msDisplayMax)}},{key:"getDuration",value:function(){var e=this.surfer.getDuration();return e=isNaN(e)?0:e}},{key:"setDuration",value:function(e){void 0===e&&(e=this.surfer.getDuration()),e=isNaN(e)?0:e,this.player.controlBar.durationDisplay.formattedTime_=this.player.controlBar.durationDisplay.contentEl().lastChild.textContent=(0,n.default)(e,e,this.msDisplayMax)}},{key:"onWaveReady",value:function(){this.waveReady=!0,this.waveFinished=!1,this.liveMode=!1,this.log("Waveform is ready"),this.player.trigger("waveReady"),this.setCurrentTime(),this.setDuration(),this.player.controlBar.playToggle.show(),this.player.loadingSpinner.hide(),!0===this.player.options_.autoplay&&this.play()}},{key:"onWaveFinish",value:function(){var e=this;this.log("Finished playback"),this.player.trigger("playbackFinish"),!0===this.player.options_.loop?(this.surfer.stop(),this.play()):(this.waveFinished=!0,this.pause(),this.player.trigger("ended"),this.surfer.once("seek",function(){e.player.controlBar.playToggle.removeClass("vjs-ended"),e.player.trigger("pause")}))}},{key:"onWaveProgress",value:function(e){this.setCurrentTime()}},{key:"onWaveSeek",value:function(){this.setCurrentTime()}},{key:"onWaveError",value:function(e){this.player.trigger("error",e),this.log(e,"error")}},{key:"onPlayToggle",value:function(){this.player.controlBar.playToggle.hasClass("vjs-ended")&&this.player.controlBar.playToggle.removeClass("vjs-ended"),this.surfer.isPlaying()?this.pause():this.play()}},{key:"onVolumeChange",value:function(){var e=this.player.volume();this.player.muted()&&(e=0),this.surfer.setVolume(e)}},{key:"onScreenChange",value:function(){var e=this,t=this.player.setInterval(function(){var r=void 0,i=void 0;if(e.player.isFullscreen()||(r=e.originalWidth,i=e.originalHeight),e.waveReady){if(e.liveMode&&!e.surfer.microphone.active)return;e.redrawWaveform(r,i)}e.player.clearInterval(t)},100)}},{key:"onResizeChange",value:function(){void 0!==this.surfer&&this.redrawWaveform()}},{key:"redrawWaveform",value:function(e,t){var r=this.player.el_.getBoundingClientRect();void 0===e&&(e=r.width),void 0===t&&(t=r.height),this.surfer.drawer.destroy(),this.surfer.params.width=e,this.surfer.params.height=t-this.player.controlBar.height(),this.surfer.createDrawer(),this.surfer.drawer.wrapper.className=y,this.surfer.drawBuffer(),this.surfer.drawer.progress(this.surfer.backend.getPlayedPercents())}},{key:"log",value:function(e,t){(0,a.default)(e,t,this.debug)}}]),t}();d.VERSION="2.1.3",f.default.Wavesurfer=d,f.default.registerPlugin("wavesurfer",d),f.default.registerTech("Html5",u.default),t.exports={Wavesurfer:d}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}]},{},[6]);