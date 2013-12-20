//! Mirador 0.8.0
//! Built on 2013-12-20
/*! jQuery v1.9.1 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license
*/(function(e,t){var n,r,i=typeof t,o=e.document,a=e.location,s=e.jQuery,u=e.$,l={},c=[],p="1.9.1",f=c.concat,d=c.push,h=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=p.trim,b=function(e,t){return new b.fn.init(e,t,r)},x=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^[\],:{}\s]*$/,E=/(?:^|:|,)(?:\s*\[)+/g,S=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,A=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,j=/^-ms-/,D=/-([\da-z])/gi,L=function(e,t){return t.toUpperCase()},H=function(e){(o.addEventListener||"load"===e.type||"complete"===o.readyState)&&(q(),b.ready())},q=function(){o.addEventListener?(o.removeEventListener("DOMContentLoaded",H,!1),e.removeEventListener("load",H,!1)):(o.detachEvent("onreadystatechange",H),e.detachEvent("onload",H))};b.fn=b.prototype={jquery:p,constructor:b,init:function(e,n,r){var i,a;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof b?n[0]:n,b.merge(this,b.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:o,!0)),C.test(i[1])&&b.isPlainObject(n))for(i in n)b.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(a=o.getElementById(i[2]),a&&a.parentNode){if(a.id!==i[2])return r.find(e);this.length=1,this[0]=a}return this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):b.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),b.makeArray(e,this))},selector:"",length:0,size:function(){return this.length},toArray:function(){return h.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=b.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return b.each(this,e,t)},ready:function(e){return b.ready.promise().done(e),this},slice:function(){return this.pushStack(h.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(b.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:d,sort:[].sort,splice:[].splice},b.fn.init.prototype=b.fn,b.extend=b.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},u=1,l=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},u=2),"object"==typeof s||b.isFunction(s)||(s={}),l===u&&(s=this,--u);l>u;u++)if(null!=(o=arguments[u]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(b.isPlainObject(r)||(n=b.isArray(r)))?(n?(n=!1,a=e&&b.isArray(e)?e:[]):a=e&&b.isPlainObject(e)?e:{},s[i]=b.extend(c,a,r)):r!==t&&(s[i]=r));return s},b.extend({noConflict:function(t){return e.$===b&&(e.$=u),t&&e.jQuery===b&&(e.jQuery=s),b},isReady:!1,readyWait:1,holdReady:function(e){e?b.readyWait++:b.ready(!0)},ready:function(e){if(e===!0?!--b.readyWait:!b.isReady){if(!o.body)return setTimeout(b.ready);b.isReady=!0,e!==!0&&--b.readyWait>0||(n.resolveWith(o,[b]),b.fn.trigger&&b(o).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===b.type(e)},isArray:Array.isArray||function(e){return"array"===b.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if(!e||"object"!==b.type(e)||e.nodeType||b.isWindow(e))return!1;try{if(e.constructor&&!y.call(e,"constructor")&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||y.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=b.buildFragment([e],t,i),i&&b(i).remove(),b.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=b.trim(n),n&&k.test(n.replace(S,"@").replace(A,"]").replace(E,"")))?Function("return "+n)():(b.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||b.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&b.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(j,"ms-").replace(D,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:v&&!v.call("\ufeff\u00a0")?function(e){return null==e?"":v.call(e)}:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?b.merge(n,"string"==typeof e?[e]:e):d.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(g)return g.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return f.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),b.isFunction(e)?(r=h.call(arguments,2),i=function(){return e.apply(n||this,r.concat(h.call(arguments)))},i.guid=e.guid=e.guid||b.guid++,i):t},access:function(e,n,r,i,o,a,s){var u=0,l=e.length,c=null==r;if("object"===b.type(r)){o=!0;for(u in r)b.access(e,n,u,r[u],!0,a,s)}else if(i!==t&&(o=!0,b.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(b(e),n)})),n))for(;l>u;u++)n(e[u],r,s?i:i.call(e[u],u,n(e[u],r)));return o?e:c?n.call(e):l?n(e[0],r):a},now:function(){return(new Date).getTime()}}),b.ready.promise=function(t){if(!n)if(n=b.Deferred(),"complete"===o.readyState)setTimeout(b.ready);else if(o.addEventListener)o.addEventListener("DOMContentLoaded",H,!1),e.addEventListener("load",H,!1);else{o.attachEvent("onreadystatechange",H),e.attachEvent("onload",H);var r=!1;try{r=null==e.frameElement&&o.documentElement}catch(i){}r&&r.doScroll&&function a(){if(!b.isReady){try{r.doScroll("left")}catch(e){return setTimeout(a,50)}q(),b.ready()}}()}return n.promise(t)},b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=b.type(e);return b.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=b(o);var _={};function F(e){var t=_[e]={};return b.each(e.match(w)||[],function(e,n){t[n]=!0}),t}b.Callbacks=function(e){e="string"==typeof e?_[e]||F(e):b.extend({},e);var n,r,i,o,a,s,u=[],l=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=u.length,n=!0;u&&o>a;a++)if(u[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,u&&(l?l.length&&c(l.shift()):r?u=[]:p.disable())},p={add:function(){if(u){var t=u.length;(function i(t){b.each(t,function(t,n){var r=b.type(n);"function"===r?e.unique&&p.has(n)||u.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=u.length:r&&(s=t,c(r))}return this},remove:function(){return u&&b.each(arguments,function(e,t){var r;while((r=b.inArray(t,u,r))>-1)u.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?b.inArray(e,u)>-1:!(!u||!u.length)},empty:function(){return u=[],this},disable:function(){return u=l=r=t,this},disabled:function(){return!u},lock:function(){return l=t,r||p.disable(),this},locked:function(){return!l},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!u||i&&!l||(n?l.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},b.extend({Deferred:function(e){var t=[["resolve","done",b.Callbacks("once memory"),"resolved"],["reject","fail",b.Callbacks("once memory"),"rejected"],["notify","progress",b.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return b.Deferred(function(n){b.each(t,function(t,o){var a=o[0],s=b.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&b.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?b.extend(e,r):r}},i={};return r.pipe=r.then,b.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=h.call(arguments),r=n.length,i=1!==r||e&&b.isFunction(e.promise)?r:0,o=1===i?e:b.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?h.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,u,l;if(r>1)for(s=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&b.isFunction(n[t].promise)?n[t].promise().done(a(t,l,n)).fail(o.reject).progress(a(t,u,s)):--i;return i||o.resolveWith(l,n),o.promise()}}),b.support=function(){var t,n,r,a,s,u,l,c,p,f,d=o.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*"),r=d.getElementsByTagName("a")[0],!n||!r||!n.length)return{};s=o.createElement("select"),l=s.appendChild(o.createElement("option")),a=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={getSetAttribute:"t"!==d.className,leadingWhitespace:3===d.firstChild.nodeType,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:"/a"===r.getAttribute("href"),opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:!!a.value,optSelected:l.selected,enctype:!!o.createElement("form").enctype,html5Clone:"<:nav></:nav>"!==o.createElement("nav").cloneNode(!0).outerHTML,boxModel:"CSS1Compat"===o.compatMode,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},a.checked=!0,t.noCloneChecked=a.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!l.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}a=o.createElement("input"),a.setAttribute("value",""),t.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),t.radioValue="t"===a.value,a.setAttribute("checked","t"),a.setAttribute("name","t"),u=o.createDocumentFragment(),u.appendChild(a),t.appendChecked=a.checked,t.checkClone=u.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;return d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip,b(function(){var n,r,a,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",u=o.getElementsByTagName("body")[0];u&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",u.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",a=d.getElementsByTagName("td"),a[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===a[0].offsetHeight,a[0].style.display="",a[1].style.display="none",t.reliableHiddenOffsets=p&&0===a[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=4===d.offsetWidth,t.doesNotIncludeMarginInBodyOffset=1!==u.offsetTop,e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(o.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(u.style.zoom=1)),u.removeChild(n),n=d=a=r=null)}),n=s=u=l=r=a=null,t}();var O=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,B=/([A-Z])/g;function P(e,n,r,i){if(b.acceptData(e)){var o,a,s=b.expando,u="string"==typeof n,l=e.nodeType,p=l?b.cache:e,f=l?e[s]:e[s]&&s;if(f&&p[f]&&(i||p[f].data)||!u||r!==t)return f||(l?e[s]=f=c.pop()||b.guid++:f=s),p[f]||(p[f]={},l||(p[f].toJSON=b.noop)),("object"==typeof n||"function"==typeof n)&&(i?p[f]=b.extend(p[f],n):p[f].data=b.extend(p[f].data,n)),o=p[f],i||(o.data||(o.data={}),o=o.data),r!==t&&(o[b.camelCase(n)]=r),u?(a=o[n],null==a&&(a=o[b.camelCase(n)])):a=o,a}}function R(e,t,n){if(b.acceptData(e)){var r,i,o,a=e.nodeType,s=a?b.cache:e,u=a?e[b.expando]:b.expando;if(s[u]){if(t&&(o=n?s[u]:s[u].data)){b.isArray(t)?t=t.concat(b.map(t,b.camelCase)):t in o?t=[t]:(t=b.camelCase(t),t=t in o?[t]:t.split(" "));for(r=0,i=t.length;i>r;r++)delete o[t[r]];if(!(n?$:b.isEmptyObject)(o))return}(n||(delete s[u].data,$(s[u])))&&(a?b.cleanData([e],!0):b.support.deleteExpando||s!=s.window?delete s[u]:s[u]=null)}}}b.extend({cache:{},expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?b.cache[e[b.expando]]:e[b.expando],!!e&&!$(e)},data:function(e,t,n){return P(e,t,n)},removeData:function(e,t){return R(e,t)},_data:function(e,t,n){return P(e,t,n,!0)},_removeData:function(e,t){return R(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&b.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),b.fn.extend({data:function(e,n){var r,i,o=this[0],a=0,s=null;if(e===t){if(this.length&&(s=b.data(o),1===o.nodeType&&!b._data(o,"parsedAttrs"))){for(r=o.attributes;r.length>a;a++)i=r[a].name,i.indexOf("data-")||(i=b.camelCase(i.slice(5)),W(o,i,s[i]));b._data(o,"parsedAttrs",!0)}return s}return"object"==typeof e?this.each(function(){b.data(this,e)}):b.access(this,function(n){return n===t?o?W(o,e,b.data(o,e)):null:(this.each(function(){b.data(this,e,n)}),t)},null,n,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){b.removeData(this,e)})}});function W(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(B,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:O.test(r)?b.parseJSON(r):r}catch(o){}b.data(e,n,r)}else r=t}return r}function $(e){var t;for(t in e)if(("data"!==t||!b.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}b.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=b._data(e,n),r&&(!i||b.isArray(r)?i=b._data(e,n,b.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=b.queue(e,t),r=n.length,i=n.shift(),o=b._queueHooks(e,t),a=function(){b.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),o.cur=i,i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return b._data(e,n)||b._data(e,n,{empty:b.Callbacks("once memory").add(function(){b._removeData(e,t+"queue"),b._removeData(e,n)})})}}),b.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?b.queue(this[0],e):n===t?this:this.each(function(){var t=b.queue(this,e,n);b._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&b.dequeue(this,e)})},dequeue:function(e){return this.each(function(){b.dequeue(this,e)})},delay:function(e,t){return e=b.fx?b.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=b.Deferred(),a=this,s=this.length,u=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=b._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(u));return u(),o.promise(n)}});var I,z,X=/[\t\r\n]/g,U=/\r/g,V=/^(?:input|select|textarea|button|object)$/i,Y=/^(?:a|area)$/i,J=/^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,G=/^(?:checked|selected)$/i,Q=b.support.getSetAttribute,K=b.support.input;b.fn.extend({attr:function(e,t){return b.access(this,b.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){b.removeAttr(this,e)})},prop:function(e,t){return b.access(this,b.prop,e,t,arguments.length>1)},removeProp:function(e){return e=b.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,u="string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=b.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,u=0===arguments.length||"string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?b.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e,r="boolean"==typeof t;return b.isFunction(e)?this.each(function(n){b(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var o,a=0,s=b(this),u=t,l=e.match(w)||[];while(o=l[a++])u=r?u:!s.hasClass(o),s[u?"addClass":"removeClass"](o)}else(n===i||"boolean"===n)&&(this.className&&b._data(this,"__className__",this.className),this.className=this.className||e===!1?"":b._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(X," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=b.isFunction(e),this.each(function(n){var o,a=b(this);1===this.nodeType&&(o=i?e.call(this,n,a.val()):e,null==o?o="":"number"==typeof o?o+="":b.isArray(o)&&(o=b.map(o,function(e){return null==e?"":e+""})),r=b.valHooks[this.type]||b.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=b.valHooks[o.type]||b.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(U,""):null==n?"":n)}}}),b.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,u=0>i?s:o?i:0;for(;s>u;u++)if(n=r[u],!(!n.selected&&u!==i||(b.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&b.nodeName(n.parentNode,"optgroup"))){if(t=b(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n=b.makeArray(t);return b(e).find("option").each(function(){this.selected=b.inArray(b(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attr:function(e,n,r){var o,a,s,u=e.nodeType;if(e&&3!==u&&8!==u&&2!==u)return typeof e.getAttribute===i?b.prop(e,n,r):(a=1!==u||!b.isXMLDoc(e),a&&(n=n.toLowerCase(),o=b.attrHooks[n]||(J.test(n)?z:I)),r===t?o&&a&&"get"in o&&null!==(s=o.get(e,n))?s:(typeof e.getAttribute!==i&&(s=e.getAttribute(n)),null==s?t:s):null!==r?o&&a&&"set"in o&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r):(b.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=b.propFix[n]||n,J.test(n)?!Q&&G.test(n)?e[b.camelCase("default-"+n)]=e[r]=!1:e[r]=!1:b.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!b.support.radioValue&&"radio"===t&&b.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!b.isXMLDoc(e),a&&(n=b.propFix[n]||n,o=b.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):V.test(e.nodeName)||Y.test(e.nodeName)&&e.href?0:t}}}}),z={get:function(e,n){var r=b.prop(e,n),i="boolean"==typeof r&&e.getAttribute(n),o="boolean"==typeof r?K&&Q?null!=i:G.test(n)?e[b.camelCase("default-"+n)]:!!i:e.getAttributeNode(n);return o&&o.value!==!1?n.toLowerCase():t},set:function(e,t,n){return t===!1?b.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&b.propFix[n]||n,n):e[b.camelCase("default-"+n)]=e[n]=!0,n}},K&&Q||(b.attrHooks.value={get:function(e,n){var r=e.getAttributeNode(n);return b.nodeName(e,"input")?e.defaultValue:r&&r.specified?r.value:t},set:function(e,n,r){return b.nodeName(e,"input")?(e.defaultValue=n,t):I&&I.set(e,n,r)}}),Q||(I=b.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&("id"===n||"name"===n||"coords"===n?""!==r.value:r.specified)?r.value:t},set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},b.attrHooks.contenteditable={get:I.get,set:function(e,t,n){I.set(e,""===t?!1:t,n)}},b.each(["width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}})})),b.support.hrefNormalized||(b.each(["href","src","width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return null==r?t:r}})}),b.each(["href","src"],function(e,t){b.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}})),b.support.style||(b.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),b.support.optSelected||(b.propHooks.selected=b.extend(b.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),b.support.enctype||(b.propFix.enctype="encoding"),b.support.checkOn||b.each(["radio","checkbox"],function(){b.valHooks[this]={get:function(e){return null===e.getAttribute("value")?"on":e.value}}}),b.each(["radio","checkbox"],function(){b.valHooks[this]=b.extend(b.valHooks[this],{set:function(e,n){return b.isArray(n)?e.checked=b.inArray(b(e).val(),n)>=0:t}})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}b.event={global:{},add:function(e,n,r,o,a){var s,u,l,c,p,f,d,h,g,m,y,v=b._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=b.guid++),(u=v.events)||(u=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof b===i||e&&b.event.triggered===e.type?t:b.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(w)||[""],l=n.length;while(l--)s=rt.exec(n[l])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),p=b.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=b.event.special[g]||{},d=b.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&b.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=u[g])||(h=u[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),b.event.global[g]=!0;e=null}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,p,f,d,h,g,m=b.hasData(e)&&b._data(e);if(m&&(c=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(s=rt.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=b.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),u=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));u&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||b.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)b.event.remove(e,d+t[l],n,r,!0);b.isEmptyObject(c)&&(delete m.handle,b._removeData(e,"events"))}},trigger:function(n,r,i,a){var s,u,l,c,p,f,d,h=[i||o],g=y.call(n,"type")?n.type:n,m=y.call(n,"namespace")?n.namespace.split("."):[];if(l=f=i=i||o,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+b.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),u=0>g.indexOf(":")&&"on"+g,n=n[b.expando]?n:new b.Event(g,"object"==typeof n&&n),n.isTrigger=!0,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:b.makeArray(r,[n]),p=b.event.special[g]||{},a||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!a&&!p.noBubble&&!b.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(l=l.parentNode);l;l=l.parentNode)h.push(l),f=l;f===(i.ownerDocument||o)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((l=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(b._data(l,"events")||{})[n.type]&&b._data(l,"handle"),s&&s.apply(l,r),s=u&&l[u],s&&b.acceptData(l)&&s.apply&&s.apply(l,r)===!1&&n.preventDefault();if(n.type=g,!(a||n.isDefaultPrevented()||p._default&&p._default.apply(i.ownerDocument,r)!==!1||"click"===g&&b.nodeName(i,"a")||!b.acceptData(i)||!u||!i[g]||b.isWindow(i))){f=i[u],f&&(i[u]=null),b.event.triggered=g;try{i[g]()}catch(v){}b.event.triggered=t,f&&(i[u]=f)}return n.result}},dispatch:function(e){e=b.event.fix(e);var n,r,i,o,a,s=[],u=h.call(arguments),l=(b._data(this,"events")||{})[e.type]||[],c=b.event.special[e.type]||{};if(u[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=b.event.handlers.call(this,e,l),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((b.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,u),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],u=n.delegateCount,l=e.target;if(u&&l.nodeType&&(!e.button||"click"!==e.type))for(;l!=this;l=l.parentNode||this)if(1===l.nodeType&&(l.disabled!==!0||"click"!==e.type)){for(o=[],a=0;u>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?b(r,this).index(l)>=0:b.find(r,this,null,[l]).length),o[r]&&o.push(i);o.length&&s.push({elem:l,handlers:o})}return n.length>u&&s.push({elem:this,handlers:n.slice(u)}),s},fix:function(e){if(e[b.expando])return e;var t,n,r,i=e.type,a=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new b.Event(a),t=r.length;while(t--)n=r[t],e[n]=a[n];return e.target||(e.target=a.srcElement||o),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,a):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,a,s=n.button,u=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||o,a=i.documentElement,r=i.body,e.pageX=n.clientX+(a&&a.scrollLeft||r&&r.scrollLeft||0)-(a&&a.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(a&&a.scrollTop||r&&r.scrollTop||0)-(a&&a.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&u&&(e.relatedTarget=u===e.target?n.toElement:u),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},click:{trigger:function(){return b.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t}},focus:{trigger:function(){if(this!==o.activeElement&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===o.activeElement&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=b.extend(new b.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?b.event.trigger(i,null,t):b.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},b.removeEvent=o.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},b.Event=function(e,n){return this instanceof b.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&b.extend(this,n),this.timeStamp=e&&e.timeStamp||b.now(),this[b.expando]=!0,t):new b.Event(e,n)},b.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},b.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){b.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;
return(!i||i!==r&&!b.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),b.support.submitBubbles||(b.event.special.submit={setup:function(){return b.nodeName(this,"form")?!1:(b.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=b.nodeName(n,"input")||b.nodeName(n,"button")?n.form:t;r&&!b._data(r,"submitBubbles")&&(b.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),b._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&b.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return b.nodeName(this,"form")?!1:(b.event.remove(this,"._submit"),t)}}),b.support.changeBubbles||(b.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(b.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),b.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),b.event.simulate("change",this,e,!0)})),!1):(b.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!b._data(t,"changeBubbles")&&(b.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||b.event.simulate("change",this.parentNode,e,!0)}),b._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return b.event.remove(this,"._change"),!Z.test(this.nodeName)}}),b.support.focusinBubbles||b.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){b.event.simulate(t,e.target,b.event.fix(e),!0)};b.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),b.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return b().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=b.guid++)),this.each(function(){b.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,b(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){b.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){b.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?b.event.trigger(e,n,r,!0):t}}),function(e,t){var n,r,i,o,a,s,u,l,c,p,f,d,h,g,m,y,v,x="sizzle"+-new Date,w=e.document,T={},N=0,C=0,k=it(),E=it(),S=it(),A=typeof t,j=1<<31,D=[],L=D.pop,H=D.push,q=D.slice,M=D.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},_="[\\x20\\t\\r\\n\\f]",F="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=F.replace("w","w#"),B="([*^$|!~]?=)",P="\\["+_+"*("+F+")"+_+"*(?:"+B+_+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+O+")|)|)"+_+"*\\]",R=":("+F+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+P.replace(3,8)+")*)|.*)\\)|)",W=RegExp("^"+_+"+|((?:^|[^\\\\])(?:\\\\.)*)"+_+"+$","g"),$=RegExp("^"+_+"*,"+_+"*"),I=RegExp("^"+_+"*([\\x20\\t\\r\\n\\f>+~])"+_+"*"),z=RegExp(R),X=RegExp("^"+O+"$"),U={ID:RegExp("^#("+F+")"),CLASS:RegExp("^\\.("+F+")"),NAME:RegExp("^\\[name=['\"]?("+F+")['\"]?\\]"),TAG:RegExp("^("+F.replace("w","w*")+")"),ATTR:RegExp("^"+P),PSEUDO:RegExp("^"+R),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+_+"*(even|odd|(([+-]|)(\\d*)n|)"+_+"*(?:([+-]|)"+_+"*(\\d+)|))"+_+"*\\)|)","i"),needsContext:RegExp("^"+_+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+_+"*((?:-\\d)?\\d*)"+_+"*\\)|)(?=[^-]|$)","i")},V=/[\x20\t\r\n\f]*[+~]/,Y=/^[^{]+\{\s*\[native code/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,G=/^(?:input|select|textarea|button)$/i,Q=/^h\d$/i,K=/'|\\/g,Z=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,et=/\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,tt=function(e,t){var n="0x"+t-65536;return n!==n?t:0>n?String.fromCharCode(n+65536):String.fromCharCode(55296|n>>10,56320|1023&n)};try{q.call(w.documentElement.childNodes,0)[0].nodeType}catch(nt){q=function(e){var t,n=[];while(t=this[e++])n.push(t);return n}}function rt(e){return Y.test(e+"")}function it(){var e,t=[];return e=function(n,r){return t.push(n+=" ")>i.cacheLength&&delete e[t.shift()],e[n]=r}}function ot(e){return e[x]=!0,e}function at(e){var t=p.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}}function st(e,t,n,r){var i,o,a,s,u,l,f,g,m,v;if((t?t.ownerDocument||t:w)!==p&&c(t),t=t||p,n=n||[],!e||"string"!=typeof e)return n;if(1!==(s=t.nodeType)&&9!==s)return[];if(!d&&!r){if(i=J.exec(e))if(a=i[1]){if(9===s){if(o=t.getElementById(a),!o||!o.parentNode)return n;if(o.id===a)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(a))&&y(t,o)&&o.id===a)return n.push(o),n}else{if(i[2])return H.apply(n,q.call(t.getElementsByTagName(e),0)),n;if((a=i[3])&&T.getByClassName&&t.getElementsByClassName)return H.apply(n,q.call(t.getElementsByClassName(a),0)),n}if(T.qsa&&!h.test(e)){if(f=!0,g=x,m=t,v=9===s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){l=ft(e),(f=t.getAttribute("id"))?g=f.replace(K,"\\$&"):t.setAttribute("id",g),g="[id='"+g+"'] ",u=l.length;while(u--)l[u]=g+dt(l[u]);m=V.test(e)&&t.parentNode||t,v=l.join(",")}if(v)try{return H.apply(n,q.call(m.querySelectorAll(v),0)),n}catch(b){}finally{f||t.removeAttribute("id")}}}return wt(e.replace(W,"$1"),t,n,r)}a=st.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},c=st.setDocument=function(e){var n=e?e.ownerDocument||e:w;return n!==p&&9===n.nodeType&&n.documentElement?(p=n,f=n.documentElement,d=a(n),T.tagNameNoComments=at(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),T.attributes=at(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return"boolean"!==t&&"string"!==t}),T.getByClassName=at(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",e.getElementsByClassName&&e.getElementsByClassName("e").length?(e.lastChild.className="e",2===e.getElementsByClassName("e").length):!1}),T.getByName=at(function(e){e.id=x+0,e.innerHTML="<a name='"+x+"'></a><div name='"+x+"'></div>",f.insertBefore(e,f.firstChild);var t=n.getElementsByName&&n.getElementsByName(x).length===2+n.getElementsByName(x+0).length;return T.getIdNotName=!n.getElementById(x),f.removeChild(e),t}),i.attrHandle=at(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==A&&"#"===e.firstChild.getAttribute("href")})?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},T.getIdNotName?(i.find.ID=function(e,t){if(typeof t.getElementById!==A&&!d){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){return e.getAttribute("id")===t}}):(i.find.ID=function(e,n){if(typeof n.getElementById!==A&&!d){var r=n.getElementById(e);return r?r.id===e||typeof r.getAttributeNode!==A&&r.getAttributeNode("id").value===e?[r]:t:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){var n=typeof e.getAttributeNode!==A&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=T.tagNameNoComments?function(e,n){return typeof n.getElementsByTagName!==A?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},i.find.NAME=T.getByName&&function(e,n){return typeof n.getElementsByName!==A?n.getElementsByName(name):t},i.find.CLASS=T.getByClassName&&function(e,n){return typeof n.getElementsByClassName===A||d?t:n.getElementsByClassName(e)},g=[],h=[":focus"],(T.qsa=rt(n.querySelectorAll))&&(at(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||h.push("\\["+_+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||h.push(":checked")}),at(function(e){e.innerHTML="<input type='hidden' i=''/>",e.querySelectorAll("[i^='']").length&&h.push("[*^$]="+_+"*(?:\"\"|'')"),e.querySelectorAll(":enabled").length||h.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),h.push(",.*:")})),(T.matchesSelector=rt(m=f.matchesSelector||f.mozMatchesSelector||f.webkitMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&at(function(e){T.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",R)}),h=RegExp(h.join("|")),g=RegExp(g.join("|")),y=rt(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},v=f.compareDocumentPosition?function(e,t){var r;return e===t?(u=!0,0):(r=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t))?1&r||e.parentNode&&11===e.parentNode.nodeType?e===n||y(w,e)?-1:t===n||y(w,t)?1:0:4&r?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return u=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:0;if(o===a)return ut(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?ut(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},u=!1,[0,0].sort(v),T.detectDuplicates=u,p):p},st.matches=function(e,t){return st(e,null,null,t)},st.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&c(e),t=t.replace(Z,"='$1']"),!(!T.matchesSelector||d||g&&g.test(t)||h.test(t)))try{var n=m.call(e,t);if(n||T.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(r){}return st(t,p,null,[e]).length>0},st.contains=function(e,t){return(e.ownerDocument||e)!==p&&c(e),y(e,t)},st.attr=function(e,t){var n;return(e.ownerDocument||e)!==p&&c(e),d||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):d||T.attributes?e.getAttribute(t):((n=e.getAttributeNode(t))||e.getAttribute(t))&&e[t]===!0?t:n&&n.specified?n.value:null},st.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},st.uniqueSort=function(e){var t,n=[],r=1,i=0;if(u=!T.detectDuplicates,e.sort(v),u){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e};function ut(e,t){var n=t&&e,r=n&&(~t.sourceIndex||j)-(~e.sourceIndex||j);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function lt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function ct(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function pt(e){return ot(function(t){return t=+t,ot(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}o=st.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=st.selectors={cacheLength:50,createPseudo:ot,match:U,find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(et,tt),e[3]=(e[4]||e[5]||"").replace(et,tt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||st.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&st.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return U.CHILD.test(e[0])?null:(e[4]?e[2]=e[4]:n&&z.test(n)&&(t=ft(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){return"*"===e?function(){return!0}:(e=e.replace(et,tt).toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[e+" "];return t||(t=RegExp("(^|"+_+")"+e+"("+_+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==A&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=st.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!u&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[x]||(m[x]={}),l=c[e]||[],d=l[0]===N&&l[1],f=l[0]===N&&l[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[N,d,f];break}}else if(v&&(l=(t[x]||(t[x]={}))[e])&&l[0]===N)f=l[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[x]||(p[x]={}))[e]=[N,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||st.error("unsupported pseudo: "+e);return r[x]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?ot(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=M.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:ot(function(e){var t=[],n=[],r=s(e.replace(W,"$1"));return r[x]?ot(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:ot(function(e){return function(t){return st(e,t).length>0}}),contains:ot(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:ot(function(e){return X.test(e||"")||st.error("unsupported lang: "+e),e=e.replace(et,tt).toLowerCase(),function(t){var n;do if(n=d?t.getAttribute("xml:lang")||t.getAttribute("lang"):t.lang)return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return Q.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:pt(function(){return[0]}),last:pt(function(e,t){return[t-1]}),eq:pt(function(e,t,n){return[0>n?n+t:n]}),even:pt(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:pt(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:pt(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:pt(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}};for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[n]=lt(n);for(n in{submit:!0,reset:!0})i.pseudos[n]=ct(n);function ft(e,t){var n,r,o,a,s,u,l,c=E[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=i.preFilter;while(s){(!n||(r=$.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),u.push(o=[])),n=!1,(r=I.exec(s))&&(n=r.shift(),o.push({value:n,type:r[0].replace(W," ")}),s=s.slice(n.length));for(a in i.filter)!(r=U[a].exec(s))||l[a]&&!(r=l[a](r))||(n=r.shift(),o.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?st.error(e):E(e,u).slice(0)}function dt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function ht(e,t,n){var i=t.dir,o=n&&"parentNode"===i,a=C++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,s){var u,l,c,p=N+" "+a;if(s){while(t=t[i])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[x]||(t[x]={}),(l=c[i])&&l[0]===p){if((u=l[1])===!0||u===r)return u===!0}else if(l=c[i]=[p],l[1]=e(t,n,s)||r,l[1]===!0)return!0}}function gt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function mt(e,t,n,r,i){var o,a=[],s=0,u=e.length,l=null!=t;for(;u>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),l&&t.push(s));return a}function yt(e,t,n,r,i,o){return r&&!r[x]&&(r=yt(r)),i&&!i[x]&&(i=yt(i,o)),ot(function(o,a,s,u){var l,c,p,f=[],d=[],h=a.length,g=o||xt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:mt(g,f,e,s,u),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,u),r){l=mt(y,d),r(l,[],s,u),c=l.length;while(c--)(p=l[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(p=y[c])&&l.push(m[c]=p);i(null,y=[],l,u)}c=y.length;while(c--)(p=y[c])&&(l=i?M.call(o,p):f[c])>-1&&(o[l]=!(a[l]=p))}}else y=mt(y===a?y.splice(h,y.length):y),i?i(null,a,y,u):H.apply(a,y)})}function vt(e){var t,n,r,o=e.length,a=i.relative[e[0].type],s=a||i.relative[" "],u=a?1:0,c=ht(function(e){return e===t},s,!0),p=ht(function(e){return M.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;o>u;u++)if(n=i.relative[e[u].type])f=[ht(gt(f),n)];else{if(n=i.filter[e[u].type].apply(null,e[u].matches),n[x]){for(r=++u;o>r;r++)if(i.relative[e[r].type])break;return yt(u>1&&gt(f),u>1&&dt(e.slice(0,u-1)).replace(W,"$1"),n,r>u&&vt(e.slice(u,r)),o>r&&vt(e=e.slice(r)),o>r&&dt(e))}f.push(n)}return gt(f)}function bt(e,t){var n=0,o=t.length>0,a=e.length>0,s=function(s,u,c,f,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,T=l,C=s||a&&i.find.TAG("*",d&&u.parentNode||u),k=N+=null==T?1:Math.random()||.1;for(w&&(l=u!==p&&u,r=n);null!=(h=C[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,u,c)){f.push(h);break}w&&(N=k,r=++n)}o&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,o&&b!==v){g=0;while(m=t[g++])m(x,y,u,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=L.call(f));y=mt(y)}H.apply(f,y),w&&!s&&y.length>0&&v+t.length>1&&st.uniqueSort(f)}return w&&(N=k,l=T),x};return o?ot(s):s}s=st.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=ft(e)),n=t.length;while(n--)o=vt(t[n]),o[x]?r.push(o):i.push(o);o=S(e,bt(i,r))}return o};function xt(e,t,n){var r=0,i=t.length;for(;i>r;r++)st(e,t[r],n);return n}function wt(e,t,n,r){var o,a,u,l,c,p=ft(e);if(!r&&1===p.length){if(a=p[0]=p[0].slice(0),a.length>2&&"ID"===(u=a[0]).type&&9===t.nodeType&&!d&&i.relative[a[1].type]){if(t=i.find.ID(u.matches[0].replace(et,tt),t)[0],!t)return n;e=e.slice(a.shift().value.length)}o=U.needsContext.test(e)?0:a.length;while(o--){if(u=a[o],i.relative[l=u.type])break;if((c=i.find[l])&&(r=c(u.matches[0].replace(et,tt),V.test(a[0].type)&&t.parentNode||t))){if(a.splice(o,1),e=r.length&&dt(a),!e)return H.apply(n,q.call(r,0)),n;break}}}return s(e,p)(r,t,d,n,V.test(e)),n}i.pseudos.nth=i.pseudos.eq;function Tt(){}i.filters=Tt.prototype=i.pseudos,i.setFilters=new Tt,c(),st.attr=b.attr,b.find=st,b.expr=st.selectors,b.expr[":"]=b.expr.pseudos,b.unique=st.uniqueSort,b.text=st.getText,b.isXMLDoc=st.isXML,b.contains=st.contains}(e);var at=/Until$/,st=/^(?:parents|prev(?:Until|All))/,ut=/^.[^:#\[\.,]*$/,lt=b.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};b.fn.extend({find:function(e){var t,n,r,i=this.length;if("string"!=typeof e)return r=this,this.pushStack(b(e).filter(function(){for(t=0;i>t;t++)if(b.contains(r[t],this))return!0}));for(n=[],t=0;i>t;t++)b.find(e,this[t],n);return n=this.pushStack(i>1?b.unique(n):n),n.selector=(this.selector?this.selector+" ":"")+e,n},has:function(e){var t,n=b(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(b.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e,!1))},filter:function(e){return this.pushStack(ft(this,e,!0))},is:function(e){return!!e&&("string"==typeof e?lt.test(e)?b(e,this.context).index(this[0])>=0:b.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,o=[],a=lt.test(e)||"string"!=typeof e?b(e,t||this.context):0;for(;i>r;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&11!==n.nodeType){if(a?a.index(n)>-1:b.find.matchesSelector(n,e)){o.push(n);break}n=n.parentNode}}return this.pushStack(o.length>1?b.unique(o):o)},index:function(e){return e?"string"==typeof e?b.inArray(this[0],b(e)):b.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?b(e,t):b.makeArray(e&&e.nodeType?[e]:e),r=b.merge(this.get(),n);return this.pushStack(b.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),b.fn.andSelf=b.fn.addBack;function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}b.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return b.dir(e,"parentNode")},parentsUntil:function(e,t,n){return b.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return b.dir(e,"nextSibling")},prevAll:function(e){return b.dir(e,"previousSibling")},nextUntil:function(e,t,n){return b.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return b.dir(e,"previousSibling",n)},siblings:function(e){return b.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return b.sibling(e.firstChild)},contents:function(e){return b.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:b.merge([],e.childNodes)}},function(e,t){b.fn[e]=function(n,r){var i=b.map(this,t,n);return at.test(e)||(r=n),r&&"string"==typeof r&&(i=b.filter(r,i)),i=this.length>1&&!ct[e]?b.unique(i):i,this.length>1&&st.test(e)&&(i=i.reverse()),this.pushStack(i)}}),b.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),1===t.length?b.find.matchesSelector(t[0],e)?[t[0]]:[]:b.find.matches(e,t)},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!b(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(t=t||0,b.isFunction(t))return b.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return b.grep(e,function(e){return e===t===n});if("string"==typeof t){var r=b.grep(e,function(e){return 1===e.nodeType});if(ut.test(t))return b.filter(t,r,!n);t=b.filter(t,r)}return b.grep(e,function(e){return b.inArray(e,t)>=0===n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Nt=/^(?:checkbox|radio)$/i,Ct=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:b.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(o),Dt=jt.appendChild(o.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,b.fn.extend({text:function(e){return b.access(this,function(e){return e===t?b.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(b.isFunction(e))return this.each(function(t){b(this).wrapAll(e.call(this,t))});if(this[0]){var t=b(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return b.isFunction(e)?this.each(function(t){b(this).wrapInner(e.call(this,t))}):this.each(function(){var t=b(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=b.isFunction(e);return this.each(function(n){b(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){b.nodeName(this,"body")||b(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.insertBefore(e,this.firstChild)})},before:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=0;for(;null!=(n=this[r]);r++)(!e||b.filter(e,[n]).length>0)&&(t||1!==n.nodeType||b.cleanData(Ot(n)),n.parentNode&&(t&&b.contains(n.ownerDocument,n)&&Mt(Ot(n,"script")),n.parentNode.removeChild(n)));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&b.cleanData(Ot(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&b.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return b.clone(this,e,t)})},html:function(e){return b.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!b.support.htmlSerialize&&mt.test(e)||!b.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(b.cleanData(Ot(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){var t=b.isFunction(e);return t||"string"==typeof e||(e=b(e).not(this).detach()),this.domManip([e],!0,function(e){var t=this.nextSibling,n=this.parentNode;n&&(b(this).remove(),n.insertBefore(e,t))})},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=f.apply([],e);var i,o,a,s,u,l,c=0,p=this.length,d=this,h=p-1,g=e[0],m=b.isFunction(g);if(m||!(1>=p||"string"!=typeof g||b.support.checkClone)&&Ct.test(g))return this.each(function(i){var o=d.eq(i);m&&(e[0]=g.call(this,i,n?o.html():t)),o.domManip(e,n,r)});if(p&&(l=b.buildFragment(e,this[0].ownerDocument,!1,this),i=l.firstChild,1===l.childNodes.length&&(l=i),i)){for(n=n&&b.nodeName(i,"tr"),s=b.map(Ot(l,"script"),Ht),a=s.length;p>c;c++)o=l,c!==h&&(o=b.clone(o,!0,!0),a&&b.merge(s,Ot(o,"script"))),r.call(n&&b.nodeName(this[c],"table")?Lt(this[c],"tbody"):this[c],o,c);if(a)for(u=s[s.length-1].ownerDocument,b.map(s,qt),c=0;a>c;c++)o=s[c],kt.test(o.type||"")&&!b._data(o,"globalEval")&&b.contains(u,o)&&(o.src?b.ajax({url:o.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):b.globalEval((o.text||o.textContent||o.innerHTML||"").replace(St,"")));l=i=null}return this}});function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function Ht(e){var t=e.getAttributeNode("type");return e.type=(t&&t.specified)+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function Mt(e,t){var n,r=0;for(;null!=(n=e[r]);r++)b._data(n,"globalEval",!t||b._data(t[r],"globalEval"))}function _t(e,t){if(1===t.nodeType&&b.hasData(e)){var n,r,i,o=b._data(e),a=b._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)b.event.add(t,n,s[n][r])}a.data&&(a.data=b.extend({},a.data))}}function Ft(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!b.support.noCloneEvent&&t[b.expando]){i=b._data(t);for(r in i.events)b.removeEvent(t,r,i.handle);t.removeAttribute(b.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),b.support.html5Clone&&e.innerHTML&&!b.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Nt.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}b.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){b.fn[e]=function(e){var n,r=0,i=[],o=b(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),b(o[r])[t](n),d.apply(i,n.get());return this.pushStack(i)}});function Ot(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||b.nodeName(o,n)?s.push(o):b.merge(s,Ot(o,n));return n===t||n&&b.nodeName(e,n)?b.merge([e],s):s}function Bt(e){Nt.test(e.type)&&(e.defaultChecked=e.checked)}b.extend({clone:function(e,t,n){var r,i,o,a,s,u=b.contains(e.ownerDocument,e);if(b.support.html5Clone||b.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(b.support.noCloneEvent&&b.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||b.isXMLDoc(e)))for(r=Ot(o),s=Ot(e),a=0;null!=(i=s[a]);++a)r[a]&&Ft(i,r[a]);if(t)if(n)for(s=s||Ot(e),r=r||Ot(o),a=0;null!=(i=s[a]);a++)_t(i,r[a]);else _t(e,o);return r=Ot(o,"script"),r.length>0&&Mt(r,!u&&Ot(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,u,l,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===b.type(o))b.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),u=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[u]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!b.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!b.support.tbody){o="table"!==u||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)b.nodeName(l=o.childNodes[i],"tbody")&&!l.childNodes.length&&o.removeChild(l)
}b.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),b.support.appendChecked||b.grep(Ot(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===b.inArray(o,r))&&(a=b.contains(o.ownerDocument,o),s=Ot(f.appendChild(o),"script"),a&&Mt(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,u=b.expando,l=b.cache,p=b.support.deleteExpando,f=b.event.special;for(;null!=(n=e[s]);s++)if((t||b.acceptData(n))&&(o=n[u],a=o&&l[o])){if(a.events)for(r in a.events)f[r]?b.event.remove(n,r):b.removeEvent(n,r,a.handle);l[o]&&(delete l[o],p?delete n[u]:typeof n.removeAttribute!==i?n.removeAttribute(u):n[u]=null,c.push(o))}}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+x+")(.*)$","i"),Yt=RegExp("^("+x+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+x+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===b.css(e,"display")||!b.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=b._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=b._data(r,"olddisplay",un(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&b._data(r,"olddisplay",i?n:b.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}b.fn.extend({css:function(e,n){return b.access(this,function(e,n,r){var i,o,a={},s=0;if(b.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=b.css(e,n[s],!1,o);return a}return r!==t?b.style(e,n,r):b.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){var t="boolean"==typeof e;return this.each(function(){(t?e:nn(this))?b(this).show():b(this).hide()})}}),b.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":b.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,u=b.camelCase(n),l=e.style;if(n=b.cssProps[u]||(b.cssProps[u]=tn(l,u)),s=b.cssHooks[n]||b.cssHooks[u],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:l[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(b.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||b.cssNumber[u]||(r+="px"),b.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(l[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{l[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,u=b.camelCase(n);return n=b.cssProps[u]||(b.cssProps[u]=tn(e.style,u)),s=b.cssHooks[n]||b.cssHooks[u],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||b.isNumeric(o)?o||0:a):a},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s.getPropertyValue(n)||s[n]:t,l=e.style;return s&&(""!==u||b.contains(e.ownerDocument,e)||(u=b.style(e,n)),Yt.test(u)&&Ut.test(n)&&(i=l.width,o=l.minWidth,a=l.maxWidth,l.minWidth=l.maxWidth=l.width=u,u=s.width,l.width=i,l.minWidth=o,l.maxWidth=a)),u}):o.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s[n]:t,l=e.style;return null==u&&l&&l[n]&&(u=l[n]),Yt.test(u)&&!zt.test(n)&&(i=l.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),l.left="fontSize"===n?"1em":u,u=l.pixelLeft+"px",l.left=i,a&&(o.left=a)),""===u?"auto":u});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=b.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=b.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=b.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=b.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=b.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(b.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function un(e){var t=o,n=Gt[e];return n||(n=ln(e,t),"none"!==n&&n||(Pt=(Pt||b("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=ln(e,t),Pt.detach()),Gt[e]=n),n}function ln(e,t){var n=b(t.createElement(e)).appendTo(t.body),r=b.css(n[0],"display");return n.remove(),r}b.each(["height","width"],function(e,n){b.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(b.css(e,"display"))?b.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,i),i):0)}}}),b.support.opacity||(b.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=b.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===b.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),b(function(){b.support.reliableMarginRight||(b.cssHooks.marginRight={get:function(e,n){return n?b.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!b.support.pixelPosition&&b.fn.position&&b.each(["top","left"],function(e,n){b.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?b(e).position()[n]+"px":r):t}}})}),b.expr&&b.expr.filters&&(b.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!b.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||b.css(e,"display"))},b.expr.filters.visible=function(e){return!b.expr.filters.hidden(e)}),b.each({margin:"",padding:"",border:"Width"},function(e,t){b.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(b.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;b.fn.extend({serialize:function(){return b.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=b.prop(this,"elements");return e?b.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!b(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Nt.test(e))}).map(function(e,t){var n=b(this).val();return null==n?null:b.isArray(n)?b.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),b.param=function(e,n){var r,i=[],o=function(e,t){t=b.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=b.ajaxSettings&&b.ajaxSettings.traditional),b.isArray(e)||e.jquery&&!b.isPlainObject(e))b.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(b.isArray(t))b.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==b.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}b.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){b.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),b.fn.hover=function(e,t){return this.mouseenter(e).mouseleave(t||e)};var mn,yn,vn=b.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Nn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Cn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=b.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=a.href}catch(Ln){yn=o.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];if(b.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(u){var l;return o[u]=!0,b.each(e[u]||[],function(e,u){var c=u(n,r,i);return"string"!=typeof c||a||o[c]?a?!(l=c):t:(n.dataTypes.unshift(c),s(c),!1)}),l}return s(n.dataTypes[0])||!o["*"]&&s("*")}function Mn(e,n){var r,i,o=b.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&b.extend(!0,e,r),e}b.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,u=e.indexOf(" ");return u>=0&&(i=e.slice(u,e.length),e=e.slice(0,u)),b.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&b.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?b("<div>").append(b.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},b.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){b.fn[t]=function(e){return this.on(t,e)}}),b.each(["get","post"],function(e,n){b[n]=function(e,r,i,o){return b.isFunction(r)&&(o=o||i,i=r,r=t),b.ajax({url:e,type:n,dataType:o,data:r,success:i})}}),b.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Nn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":b.parseJSON,"text xml":b.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Mn(Mn(e,b.ajaxSettings),t):Mn(b.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,u,l,c,p=b.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?b(f):b.event,h=b.Deferred(),g=b.Callbacks("once memory"),m=p.statusCode||{},y={},v={},x=0,T="canceled",N={readyState:0,getResponseHeader:function(e){var t;if(2===x){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===x?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return x||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return x||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>x)for(t in e)m[t]=[m[t],e[t]];else N.always(e[N.status]);return this},abort:function(e){var t=e||T;return l&&l.abort(t),k(0,t),this}};if(h.promise(N).complete=g.add,N.success=N.done,N.error=N.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=b.trim(p.dataType||"*").toLowerCase().match(w)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?80:443))==(mn[3]||("http:"===mn[1]?80:443)))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=b.param(p.data,p.traditional)),qn(An,p,n,N),2===x)return N;u=p.global,u&&0===b.active++&&b.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Cn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(b.lastModified[o]&&N.setRequestHeader("If-Modified-Since",b.lastModified[o]),b.etag[o]&&N.setRequestHeader("If-None-Match",b.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&N.setRequestHeader("Content-Type",p.contentType),N.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)N.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,N,p)===!1||2===x))return N.abort();T="abort";for(i in{success:1,error:1,complete:1})N[i](p[i]);if(l=qn(jn,p,n,N)){N.readyState=1,u&&d.trigger("ajaxSend",[N,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){N.abort("timeout")},p.timeout));try{x=1,l.send(y,k)}catch(C){if(!(2>x))throw C;k(-1,C)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,C=n;2!==x&&(x=2,s&&clearTimeout(s),l=t,a=i||"",N.readyState=e>0?4:0,r&&(w=_n(p,N,r)),e>=200&&300>e||304===e?(p.ifModified&&(T=N.getResponseHeader("Last-Modified"),T&&(b.lastModified[o]=T),T=N.getResponseHeader("etag"),T&&(b.etag[o]=T)),204===e?(c=!0,C="nocontent"):304===e?(c=!0,C="notmodified"):(c=Fn(p,w),C=c.state,y=c.data,v=c.error,c=!v)):(v=C,(e||!C)&&(C="error",0>e&&(e=0))),N.status=e,N.statusText=(n||C)+"",c?h.resolveWith(f,[y,C,N]):h.rejectWith(f,[N,C,v]),N.statusCode(m),m=t,u&&d.trigger(c?"ajaxSuccess":"ajaxError",[N,p,c?y:v]),g.fireWith(f,[N,C]),u&&(d.trigger("ajaxComplete",[N,p]),--b.active||b.event.trigger("ajaxStop")))}return N},getScript:function(e,n){return b.get(e,t,n,"script")},getJSON:function(e,t,n){return b.get(e,t,n,"json")}});function _n(e,n,r){var i,o,a,s,u=e.contents,l=e.dataTypes,c=e.responseFields;for(s in c)s in r&&(n[c[s]]=r[s]);while("*"===l[0])l.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in u)if(u[s]&&u[s].test(o)){l.unshift(s);break}if(l[0]in r)a=l[0];else{for(s in r){if(!l[0]||e.converters[s+" "+l[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==l[0]&&l.unshift(a),r[a]):t}function Fn(e,t){var n,r,i,o,a={},s=0,u=e.dataTypes.slice(),l=u[0];if(e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u[1])for(i in e.converters)a[i.toLowerCase()]=e.converters[i];for(;r=u[++s];)if("*"!==r){if("*"!==l&&l!==r){if(i=a[l+" "+r]||a["* "+r],!i)for(n in a)if(o=n.split(" "),o[1]===r&&(i=a[l+" "+o[0]]||a["* "+o[0]])){i===!0?i=a[n]:a[n]!==!0&&(r=o[0],u.splice(s--,0,r));break}if(i!==!0)if(i&&e["throws"])t=i(t);else try{t=i(t)}catch(c){return{state:"parsererror",error:i?c:"No conversion from "+l+" to "+r}}}l=r}return{state:"success",data:t}}b.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return b.globalEval(e),e}}}),b.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),b.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=o.head||b("head")[0]||o.documentElement;return{send:function(t,i){n=o.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var On=[],Bn=/(=)\?(?=&|$)|\?\?/;b.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=On.pop()||b.expando+"_"+vn++;return this[e]=!0,e}}),b.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,u=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return u||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=b.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,u?n[u]=n[u].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||b.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,On.push(o)),s&&b.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}b.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=b.ajaxSettings.xhr(),b.support.cors=!!Rn&&"withCredentials"in Rn,Rn=b.support.ajax=!!Rn,Rn&&b.ajaxTransport(function(n){if(!n.crossDomain||b.support.cors){var r;return{send:function(i,o){var a,s,u=n.xhr();if(n.username?u.open(n.type,n.url,n.async,n.username,n.password):u.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)u[s]=n.xhrFields[s];n.mimeType&&u.overrideMimeType&&u.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)u.setRequestHeader(s,i[s])}catch(l){}u.send(n.hasContent&&n.data||null),r=function(e,i){var s,l,c,p;try{if(r&&(i||4===u.readyState))if(r=t,a&&(u.onreadystatechange=b.noop,$n&&delete Pn[a]),i)4!==u.readyState&&u.abort();else{p={},s=u.status,l=u.getAllResponseHeaders(),"string"==typeof u.responseText&&(p.text=u.responseText);try{c=u.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,l)},n.async?4===u.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},b(e).unload($n)),Pn[a]=r),u.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+x+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n,r,i=this.createTween(e,t),o=Yn.exec(t),a=i.cur(),s=+a||0,u=1,l=20;if(o){if(n=+o[2],r=o[3]||(b.cssNumber[e]?"":"px"),"px"!==r&&s){s=b.css(i.elem,e,!0)||n||1;do u=u||".5",s/=u,b.style(i.elem,e,s+r);while(u!==(u=i.cur()/a)&&1!==u&&--l)}i.unit=r,i.start=s,i.end=o[1]?s+(o[1]+1)*n:n}return i}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=b.now()}function Zn(e,t){b.each(t,function(t,n){var r=(Qn[t]||[]).concat(Qn["*"]),i=0,o=r.length;for(;o>i;i++)if(r[i].call(e,t,n))return})}function er(e,t,n){var r,i,o=0,a=Gn.length,s=b.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,a=0,u=l.tweens.length;for(;u>a;a++)l.tweens[a].run(o);return s.notifyWith(e,[l,o,n]),1>o&&u?n:(s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:b.extend({},t),opts:b.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=b.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?s.resolveWith(e,[l,t]):s.rejectWith(e,[l,t]),this}}),c=l.props;for(tr(c,l.opts.specialEasing);a>o;o++)if(r=Gn[o].call(l,e,c,l.opts))return r;return Zn(l,c),b.isFunction(l.opts.start)&&l.opts.start.call(e,l),b.fx.timer(b.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function tr(e,t){var n,r,i,o,a;for(i in e)if(r=b.camelCase(i),o=t[r],n=e[i],b.isArray(n)&&(o=n[1],n=e[i]=n[0]),i!==r&&(e[r]=n,delete e[i]),a=b.cssHooks[r],a&&"expand"in a){n=a.expand(n),delete e[r];for(i in n)i in e||(e[i]=n[i],t[i]=o)}else t[r]=o}b.Animation=b.extend(er,{tweener:function(e,t){b.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,u,l,c,p,f=this,d=e.style,h={},g=[],m=e.nodeType&&nn(e);n.queue||(c=b._queueHooks(e,"fx"),null==c.unqueued&&(c.unqueued=0,p=c.empty.fire,c.empty.fire=function(){c.unqueued||p()}),c.unqueued++,f.always(function(){f.always(function(){c.unqueued--,b.queue(e,"fx").length||c.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],"inline"===b.css(e,"display")&&"none"===b.css(e,"float")&&(b.support.inlineBlockNeedsLayout&&"inline"!==un(e.nodeName)?d.zoom=1:d.display="inline-block")),n.overflow&&(d.overflow="hidden",b.support.shrinkWrapBlocks||f.always(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]}));for(i in t)if(a=t[i],Vn.exec(a)){if(delete t[i],u=u||"toggle"===a,a===(m?"hide":"show"))continue;g.push(i)}if(o=g.length){s=b._data(e,"fxshow")||b._data(e,"fxshow",{}),"hidden"in s&&(m=s.hidden),u&&(s.hidden=!m),m?b(e).show():f.done(function(){b(e).hide()}),f.done(function(){var t;b._removeData(e,"fxshow");for(t in h)b.style(e,t,h[t])});for(i=0;o>i;i++)r=g[i],l=f.createTween(r,m?s[r]:0),h[r]=s[r]||b.style(e,r),r in s||(s[r]=l.start,m&&(l.end=l.start,l.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}b.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(b.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?b.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=b.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){b.fx.step[e.prop]?b.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[b.cssProps[e.prop]]||b.cssHooks[e.prop])?b.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},b.each(["toggle","show","hide"],function(e,t){var n=b.fn[t];b.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),b.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=b.isEmptyObject(e),o=b.speed(t,n,r),a=function(){var t=er(this,b.extend({},e),o);a.finish=function(){t.stop(!0)},(i||b._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=b.timers,a=b._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&b.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=b._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=b.timers,a=r?r.length:0;for(n.finish=!0,b.queue(this,e,[]),i&&i.cur&&i.cur.finish&&i.cur.finish.call(this),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}b.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){b.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),b.speed=function(e,t,n){var r=e&&"object"==typeof e?b.extend({},e):{complete:n||!n&&t||b.isFunction(e)&&e,duration:e,easing:n&&t||t&&!b.isFunction(t)&&t};return r.duration=b.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in b.fx.speeds?b.fx.speeds[r.duration]:b.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){b.isFunction(r.old)&&r.old.call(this),r.queue&&b.dequeue(this,r.queue)},r},b.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},b.timers=[],b.fx=rr.prototype.init,b.fx.tick=function(){var e,n=b.timers,r=0;for(Xn=b.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||b.fx.stop(),Xn=t},b.fx.timer=function(e){e()&&b.timers.push(e)&&b.fx.start()},b.fx.interval=13,b.fx.start=function(){Un||(Un=setInterval(b.fx.tick,b.fx.interval))},b.fx.stop=function(){clearInterval(Un),Un=null},b.fx.speeds={slow:600,fast:200,_default:400},b.fx.step={},b.expr&&b.expr.filters&&(b.expr.filters.animated=function(e){return b.grep(b.timers,function(t){return e===t.elem}).length}),b.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){b.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,b.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},b.offset={setOffset:function(e,t,n){var r=b.css(e,"position");"static"===r&&(e.style.position="relative");var i=b(e),o=i.offset(),a=b.css(e,"top"),s=b.css(e,"left"),u=("absolute"===r||"fixed"===r)&&b.inArray("auto",[a,s])>-1,l={},c={},p,f;u?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),b.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(l.top=t.top-o.top+p),null!=t.left&&(l.left=t.left-o.left+f),"using"in t?t.using.call(e,l):i.css(l)}},b.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===b.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),b.nodeName(e[0],"html")||(n=e.offset()),n.top+=b.css(e[0],"borderTopWidth",!0),n.left+=b.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-b.css(r,"marginTop",!0),left:t.left-n.left-b.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||o.documentElement;while(e&&!b.nodeName(e,"html")&&"static"===b.css(e,"position"))e=e.offsetParent;return e||o.documentElement})}}),b.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);b.fn[e]=function(i){return b.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?b(a).scrollLeft():o,r?o:b(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return b.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}b.each({Height:"height",Width:"width"},function(e,n){b.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){b.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return b.access(this,function(n,r,i){var o;return b.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?b.css(n,r,s):b.style(n,r,i,s)},n,a?i:t,a,null)}})}),e.jQuery=e.$=b,"function"==typeof define&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return b})})(window);

/*! jQuery UI - v1.10.3 - 2013-06-06
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js, jquery.ui.draggable.js, jquery.ui.resizable.js, jquery.ui.button.js, jquery.ui.dialog.js, jquery.ui.menu.js, jquery.ui.slider.js
* Copyright 2013 jQuery Foundation and other contributors Licensed MIT */

(function(e,t){function i(t,i){var a,n,r,o=t.nodeName.toLowerCase();return"area"===o?(a=t.parentNode,n=a.name,t.href&&n&&"map"===a.nodeName.toLowerCase()?(r=e("img[usemap=#"+n+"]")[0],!!r&&s(r)):!1):(/input|select|textarea|button|object/.test(o)?!t.disabled:"a"===o?t.href||i:i)&&s(t)}function s(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")}).length}var a=0,n=/^ui-id-\d+$/;e.ui=e.ui||{},e.extend(e.ui,{version:"1.10.3",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({focus:function(t){return function(i,s){return"number"==typeof i?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),s&&s.call(t)},i)}):t.apply(this,arguments)}}(e.fn.focus),scrollParent:function(){var t;return t=e.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(e.css(this,"position"))&&/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!t.length?e(document):t},zIndex:function(i){if(i!==t)return this.css("zIndex",i);if(this.length)for(var s,a,n=e(this[0]);n.length&&n[0]!==document;){if(s=n.css("position"),("absolute"===s||"relative"===s||"fixed"===s)&&(a=parseInt(n.css("zIndex"),10),!isNaN(a)&&0!==a))return a;n=n.parent()}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++a)})},removeUniqueId:function(){return this.each(function(){n.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(i){return!!e.data(i,t)}}):function(t,i,s){return!!e.data(t,s[3])},focusable:function(t){return i(t,!isNaN(e.attr(t,"tabindex")))},tabbable:function(t){var s=e.attr(t,"tabindex"),a=isNaN(s);return(a||s>=0)&&i(t,!a)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(i,s){function a(t,i,s,a){return e.each(n,function(){i-=parseFloat(e.css(t,"padding"+this))||0,s&&(i-=parseFloat(e.css(t,"border"+this+"Width"))||0),a&&(i-=parseFloat(e.css(t,"margin"+this))||0)}),i}var n="Width"===s?["Left","Right"]:["Top","Bottom"],r=s.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+s]=function(i){return i===t?o["inner"+s].call(this):this.each(function(){e(this).css(r,a(this,i)+"px")})},e.fn["outer"+s]=function(t,i){return"number"!=typeof t?o["outer"+s].call(this,t):this.each(function(){e(this).css(r,a(this,t,!0,i)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,e.camelCase(i)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.support.selectstart="onselectstart"in document.createElement("div"),e.fn.extend({disableSelection:function(){return this.bind((e.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),e.extend(e.ui,{plugin:{add:function(t,i,s){var a,n=e.ui[t].prototype;for(a in s)n.plugins[a]=n.plugins[a]||[],n.plugins[a].push([i,s[a]])},call:function(e,t,i){var s,a=e.plugins[t];if(a&&e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType)for(s=0;a.length>s;s++)e.options[a[s][0]]&&a[s][1].apply(e.element,i)}},hasScroll:function(t,i){if("hidden"===e(t).css("overflow"))return!1;var s=i&&"left"===i?"scrollLeft":"scrollTop",a=!1;return t[s]>0?!0:(t[s]=1,a=t[s]>0,t[s]=0,a)}})})(jQuery);(function(e,t){var i=0,s=Array.prototype.slice,n=e.cleanData;e.cleanData=function(t){for(var i,s=0;null!=(i=t[s]);s++)try{e(i).triggerHandler("remove")}catch(a){}n(t)},e.widget=function(i,s,n){var a,r,o,h,l={},u=i.split(".")[0];i=i.split(".")[1],a=u+"-"+i,n||(n=s,s=e.Widget),e.expr[":"][a.toLowerCase()]=function(t){return!!e.data(t,a)},e[u]=e[u]||{},r=e[u][i],o=e[u][i]=function(e,i){return this._createWidget?(arguments.length&&this._createWidget(e,i),t):new o(e,i)},e.extend(o,r,{version:n.version,_proto:e.extend({},n),_childConstructors:[]}),h=new s,h.options=e.widget.extend({},h.options),e.each(n,function(i,n){return e.isFunction(n)?(l[i]=function(){var e=function(){return s.prototype[i].apply(this,arguments)},t=function(e){return s.prototype[i].apply(this,e)};return function(){var i,s=this._super,a=this._superApply;return this._super=e,this._superApply=t,i=n.apply(this,arguments),this._super=s,this._superApply=a,i}}(),t):(l[i]=n,t)}),o.prototype=e.widget.extend(h,{widgetEventPrefix:r?h.widgetEventPrefix:i},l,{constructor:o,namespace:u,widgetName:i,widgetFullName:a}),r?(e.each(r._childConstructors,function(t,i){var s=i.prototype;e.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete r._childConstructors):s._childConstructors.push(o),e.widget.bridge(i,o)},e.widget.extend=function(i){for(var n,a,r=s.call(arguments,1),o=0,h=r.length;h>o;o++)for(n in r[o])a=r[o][n],r[o].hasOwnProperty(n)&&a!==t&&(i[n]=e.isPlainObject(a)?e.isPlainObject(i[n])?e.widget.extend({},i[n],a):e.widget.extend({},a):a);return i},e.widget.bridge=function(i,n){var a=n.prototype.widgetFullName||i;e.fn[i]=function(r){var o="string"==typeof r,h=s.call(arguments,1),l=this;return r=!o&&h.length?e.widget.extend.apply(null,[r].concat(h)):r,o?this.each(function(){var s,n=e.data(this,a);return n?e.isFunction(n[r])&&"_"!==r.charAt(0)?(s=n[r].apply(n,h),s!==n&&s!==t?(l=s&&s.jquery?l.pushStack(s.get()):s,!1):t):e.error("no such method '"+r+"' for "+i+" widget instance"):e.error("cannot call methods on "+i+" prior to initialization; "+"attempted to call method '"+r+"'")}):this.each(function(){var t=e.data(this,a);t?t.option(r||{})._init():e.data(this,a,new n(r,this))}),l}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,s){s=e(s||this.defaultElement||this)[0],this.element=e(s),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this.bindings=e(),this.hoverable=e(),this.focusable=e(),s!==this&&(e.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===s&&this.destroy()}}),this.document=e(s.style?s.ownerDocument:s.document||s),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(i,s){var n,a,r,o=i;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof i)if(o={},n=i.split("."),i=n.shift(),n.length){for(a=o[i]=e.widget.extend({},this.options[i]),r=0;n.length-1>r;r++)a[n[r]]=a[n[r]]||{},a=a[n[r]];if(i=n.pop(),s===t)return a[i]===t?null:a[i];a[i]=s}else{if(s===t)return this.options[i]===t?null:this.options[i];o[i]=s}return this._setOptions(o),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!t).attr("aria-disabled",t),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(i,s,n){var a,r=this;"boolean"!=typeof i&&(n=s,s=i,i=!1),n?(s=a=e(s),this.bindings=this.bindings.add(s)):(n=s,s=this.element,a=this.widget()),e.each(n,function(n,o){function h(){return i||r.options.disabled!==!0&&!e(this).hasClass("ui-state-disabled")?("string"==typeof o?r[o]:o).apply(r,arguments):t}"string"!=typeof o&&(h.guid=o.guid=o.guid||h.guid||e.guid++);var l=n.match(/^(\w+)\s*(.*)$/),u=l[1]+r.eventNamespace,c=l[2];c?a.delegate(c,u,h):s.bind(u,h)})},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(t).undelegate(t)},_delay:function(e,t){function i(){return("string"==typeof e?s[e]:e).apply(s,arguments)}var s=this;return setTimeout(i,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,i,s){var n,a,r=this.options[t];if(s=s||{},i=e.Event(i),i.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i.target=this.element[0],a=i.originalEvent)for(n in a)n in i||(i[n]=a[n]);return this.element.trigger(i,s),!(e.isFunction(r)&&r.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,i){e.Widget.prototype["_"+t]=function(s,n,a){"string"==typeof n&&(n={effect:n});var r,o=n?n===!0||"number"==typeof n?i:n.effect||i:t;n=n||{},"number"==typeof n&&(n={duration:n}),r=!e.isEmptyObject(n),n.complete=a,n.delay&&s.delay(n.delay),r&&e.effects&&e.effects.effect[o]?s[t](n):o!==t&&s[o]?s[o](n.duration,n.easing,a):s.queue(function(i){e(this)[t](),a&&a.call(s[0]),i()})}})})(jQuery);(function(e){var t=!1;e(document).mouseup(function(){t=!1}),e.widget("ui.mouse",{version:"1.10.3",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.bind("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).bind("click."+this.widgetName,function(i){return!0===e.data(i.target,t.widgetName+".preventClickEvent")?(e.removeData(i.target,t.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):undefined}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(i){if(!t){this._mouseStarted&&this._mouseUp(i),this._mouseDownEvent=i;var s=this,n=1===i.which,a="string"==typeof this.options.cancel&&i.target.nodeName?e(i.target).closest(this.options.cancel).length:!1;return n&&!a&&this._mouseCapture(i)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){s.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(i)&&this._mouseDelayMet(i)&&(this._mouseStarted=this._mouseStart(i)!==!1,!this._mouseStarted)?(i.preventDefault(),!0):(!0===e.data(i.target,this.widgetName+".preventClickEvent")&&e.removeData(i.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return s._mouseMove(e)},this._mouseUpDelegate=function(e){return s._mouseUp(e)},e(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),i.preventDefault(),t=!0,!0)):!0}},_mouseMove:function(t){return e.ui.ie&&(!document.documentMode||9>document.documentMode)&&!t.button?this._mouseUp(t):this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==!1,this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted)},_mouseUp:function(t){return e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&e.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),!1},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})})(jQuery);(function(t,e){function i(t,e,i){return[parseFloat(t[0])*(p.test(t[0])?e/100:1),parseFloat(t[1])*(p.test(t[1])?i/100:1)]}function s(e,i){return parseInt(t.css(e,i),10)||0}function n(e){var i=e[0];return 9===i.nodeType?{width:e.width(),height:e.height(),offset:{top:0,left:0}}:t.isWindow(i)?{width:e.width(),height:e.height(),offset:{top:e.scrollTop(),left:e.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:e.outerWidth(),height:e.outerHeight(),offset:e.offset()}}t.ui=t.ui||{};var a,o=Math.max,r=Math.abs,h=Math.round,l=/left|center|right/,c=/top|center|bottom/,u=/[\+\-]\d+(\.[\d]+)?%?/,d=/^\w+/,p=/%$/,f=t.fn.position;t.position={scrollbarWidth:function(){if(a!==e)return a;var i,s,n=t("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),o=n.children()[0];return t("body").append(n),i=o.offsetWidth,n.css("overflow","scroll"),s=o.offsetWidth,i===s&&(s=n[0].clientWidth),n.remove(),a=i-s},getScrollInfo:function(e){var i=e.isWindow?"":e.element.css("overflow-x"),s=e.isWindow?"":e.element.css("overflow-y"),n="scroll"===i||"auto"===i&&e.width<e.element[0].scrollWidth,a="scroll"===s||"auto"===s&&e.height<e.element[0].scrollHeight;return{width:a?t.position.scrollbarWidth():0,height:n?t.position.scrollbarWidth():0}},getWithinInfo:function(e){var i=t(e||window),s=t.isWindow(i[0]);return{element:i,isWindow:s,offset:i.offset()||{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:s?i.width():i.outerWidth(),height:s?i.height():i.outerHeight()}}},t.fn.position=function(e){if(!e||!e.of)return f.apply(this,arguments);e=t.extend({},e);var a,p,m,g,v,b,_=t(e.of),y=t.position.getWithinInfo(e.within),w=t.position.getScrollInfo(y),x=(e.collision||"flip").split(" "),k={};return b=n(_),_[0].preventDefault&&(e.at="left top"),p=b.width,m=b.height,g=b.offset,v=t.extend({},g),t.each(["my","at"],function(){var t,i,s=(e[this]||"").split(" ");1===s.length&&(s=l.test(s[0])?s.concat(["center"]):c.test(s[0])?["center"].concat(s):["center","center"]),s[0]=l.test(s[0])?s[0]:"center",s[1]=c.test(s[1])?s[1]:"center",t=u.exec(s[0]),i=u.exec(s[1]),k[this]=[t?t[0]:0,i?i[0]:0],e[this]=[d.exec(s[0])[0],d.exec(s[1])[0]]}),1===x.length&&(x[1]=x[0]),"right"===e.at[0]?v.left+=p:"center"===e.at[0]&&(v.left+=p/2),"bottom"===e.at[1]?v.top+=m:"center"===e.at[1]&&(v.top+=m/2),a=i(k.at,p,m),v.left+=a[0],v.top+=a[1],this.each(function(){var n,l,c=t(this),u=c.outerWidth(),d=c.outerHeight(),f=s(this,"marginLeft"),b=s(this,"marginTop"),D=u+f+s(this,"marginRight")+w.width,T=d+b+s(this,"marginBottom")+w.height,C=t.extend({},v),M=i(k.my,c.outerWidth(),c.outerHeight());"right"===e.my[0]?C.left-=u:"center"===e.my[0]&&(C.left-=u/2),"bottom"===e.my[1]?C.top-=d:"center"===e.my[1]&&(C.top-=d/2),C.left+=M[0],C.top+=M[1],t.support.offsetFractions||(C.left=h(C.left),C.top=h(C.top)),n={marginLeft:f,marginTop:b},t.each(["left","top"],function(i,s){t.ui.position[x[i]]&&t.ui.position[x[i]][s](C,{targetWidth:p,targetHeight:m,elemWidth:u,elemHeight:d,collisionPosition:n,collisionWidth:D,collisionHeight:T,offset:[a[0]+M[0],a[1]+M[1]],my:e.my,at:e.at,within:y,elem:c})}),e.using&&(l=function(t){var i=g.left-C.left,s=i+p-u,n=g.top-C.top,a=n+m-d,h={target:{element:_,left:g.left,top:g.top,width:p,height:m},element:{element:c,left:C.left,top:C.top,width:u,height:d},horizontal:0>s?"left":i>0?"right":"center",vertical:0>a?"top":n>0?"bottom":"middle"};u>p&&p>r(i+s)&&(h.horizontal="center"),d>m&&m>r(n+a)&&(h.vertical="middle"),h.important=o(r(i),r(s))>o(r(n),r(a))?"horizontal":"vertical",e.using.call(this,t,h)}),c.offset(t.extend(C,{using:l}))})},t.ui.position={fit:{left:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollLeft:s.offset.left,a=s.width,r=t.left-e.collisionPosition.marginLeft,h=n-r,l=r+e.collisionWidth-a-n;e.collisionWidth>a?h>0&&0>=l?(i=t.left+h+e.collisionWidth-a-n,t.left+=h-i):t.left=l>0&&0>=h?n:h>l?n+a-e.collisionWidth:n:h>0?t.left+=h:l>0?t.left-=l:t.left=o(t.left-r,t.left)},top:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollTop:s.offset.top,a=e.within.height,r=t.top-e.collisionPosition.marginTop,h=n-r,l=r+e.collisionHeight-a-n;e.collisionHeight>a?h>0&&0>=l?(i=t.top+h+e.collisionHeight-a-n,t.top+=h-i):t.top=l>0&&0>=h?n:h>l?n+a-e.collisionHeight:n:h>0?t.top+=h:l>0?t.top-=l:t.top=o(t.top-r,t.top)}},flip:{left:function(t,e){var i,s,n=e.within,a=n.offset.left+n.scrollLeft,o=n.width,h=n.isWindow?n.scrollLeft:n.offset.left,l=t.left-e.collisionPosition.marginLeft,c=l-h,u=l+e.collisionWidth-o-h,d="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,p="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,f=-2*e.offset[0];0>c?(i=t.left+d+p+f+e.collisionWidth-o-a,(0>i||r(c)>i)&&(t.left+=d+p+f)):u>0&&(s=t.left-e.collisionPosition.marginLeft+d+p+f-h,(s>0||u>r(s))&&(t.left+=d+p+f))},top:function(t,e){var i,s,n=e.within,a=n.offset.top+n.scrollTop,o=n.height,h=n.isWindow?n.scrollTop:n.offset.top,l=t.top-e.collisionPosition.marginTop,c=l-h,u=l+e.collisionHeight-o-h,d="top"===e.my[1],p=d?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,f="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,m=-2*e.offset[1];0>c?(s=t.top+p+f+m+e.collisionHeight-o-a,t.top+p+f+m>c&&(0>s||r(c)>s)&&(t.top+=p+f+m)):u>0&&(i=t.top-e.collisionPosition.marginTop+p+f+m-h,t.top+p+f+m>u&&(i>0||u>r(i))&&(t.top+=p+f+m))}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments)}}},function(){var e,i,s,n,a,o=document.getElementsByTagName("body")[0],r=document.createElement("div");e=document.createElement(o?"div":"body"),s={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},o&&t.extend(s,{position:"absolute",left:"-1000px",top:"-1000px"});for(a in s)e.style[a]=s[a];e.appendChild(r),i=o||document.documentElement,i.insertBefore(e,i.firstChild),r.style.cssText="position: absolute; left: 10.7432222px;",n=t(r).offset().left,t.support.offsetFractions=n>10&&11>n,e.innerHTML="",i.removeChild(e)}()})(jQuery);(function(e){e.widget("ui.draggable",e.ui.mouse,{version:"1.10.3",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"!==this.options.helper||/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative"),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._mouseInit()},_destroy:function(){this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._mouseDestroy()},_mouseCapture:function(t){var i=this.options;return this.helper||i.disabled||e(t.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(t),this.handle?(e(i.iframeFix===!0?"iframe":i.iframeFix).each(function(){e("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1e3}).css(e(this).offset()).appendTo("body")}),!0):!1)},_mouseStart:function(t){var i=this.options;return this.helper=this._createHelper(t),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),e.ui.ddmanager&&(e.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(),this.offsetParent=this.helper.offsetParent(),this.offsetParentCssPosition=this.offsetParent.css("position"),this.offset=this.positionAbs=this.element.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},this.offset.scroll=!1,e.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.originalPosition=this.position=this._generatePosition(t),this.originalPageX=t.pageX,this.originalPageY=t.pageY,i.cursorAt&&this._adjustOffsetFromHelper(i.cursorAt),this._setContainment(),this._trigger("start",t)===!1?(this._clear(),!1):(this._cacheHelperProportions(),e.ui.ddmanager&&!i.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this._mouseDrag(t,!0),e.ui.ddmanager&&e.ui.ddmanager.dragStart(this,t),!0)},_mouseDrag:function(t,i){if("fixed"===this.offsetParentCssPosition&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(t),this.positionAbs=this._convertPositionTo("absolute"),!i){var s=this._uiHash();if(this._trigger("drag",t,s)===!1)return this._mouseUp({}),!1;this.position=s.position}return this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),!1},_mouseStop:function(t){var i=this,s=!1;return e.ui.ddmanager&&!this.options.dropBehaviour&&(s=e.ui.ddmanager.drop(this,t)),this.dropped&&(s=this.dropped,this.dropped=!1),"original"!==this.options.helper||e.contains(this.element[0].ownerDocument,this.element[0])?("invalid"===this.options.revert&&!s||"valid"===this.options.revert&&s||this.options.revert===!0||e.isFunction(this.options.revert)&&this.options.revert.call(this.element,s)?e(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){i._trigger("stop",t)!==!1&&i._clear()}):this._trigger("stop",t)!==!1&&this._clear(),!1):!1},_mouseUp:function(t){return e("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)}),e.ui.ddmanager&&e.ui.ddmanager.dragStop(this,t),e.ui.mouse.prototype._mouseUp.call(this,t)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(t){return this.options.handle?!!e(t.target).closest(this.element.find(this.options.handle)).length:!0},_createHelper:function(t){var i=this.options,s=e.isFunction(i.helper)?e(i.helper.apply(this.element[0],[t])):"clone"===i.helper?this.element.clone().removeAttr("id"):this.element;return s.parents("body").length||s.appendTo("parent"===i.appendTo?this.element[0].parentNode:i.appendTo),s[0]===this.element[0]||/(fixed|absolute)/.test(s.css("position"))||s.css("position","absolute"),s},_adjustOffsetFromHelper:function(t){"string"==typeof t&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_getParentOffset:function(){var t=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&e.ui.ie)&&(t={top:0,left:0}),{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var e=this.element.position();return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:e.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,i,s,n=this.options;return n.containment?"window"===n.containment?(this.containment=[e(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,e(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,e(window).scrollLeft()+e(window).width()-this.helperProportions.width-this.margins.left,e(window).scrollTop()+(e(window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],undefined):"document"===n.containment?(this.containment=[0,0,e(document).width()-this.helperProportions.width-this.margins.left,(e(document).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],undefined):n.containment.constructor===Array?(this.containment=n.containment,undefined):("parent"===n.containment&&(n.containment=this.helper[0].parentNode),i=e(n.containment),s=i[0],s&&(t="hidden"!==i.css("overflow"),this.containment=[(parseInt(i.css("borderLeftWidth"),10)||0)+(parseInt(i.css("paddingLeft"),10)||0),(parseInt(i.css("borderTopWidth"),10)||0)+(parseInt(i.css("paddingTop"),10)||0),(t?Math.max(s.scrollWidth,s.offsetWidth):s.offsetWidth)-(parseInt(i.css("borderRightWidth"),10)||0)-(parseInt(i.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(t?Math.max(s.scrollHeight,s.offsetHeight):s.offsetHeight)-(parseInt(i.css("borderBottomWidth"),10)||0)-(parseInt(i.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relative_container=i),undefined):(this.containment=null,undefined)},_convertPositionTo:function(t,i){i||(i=this.position);var s="absolute"===t?1:-1,n="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent;return this.offset.scroll||(this.offset.scroll={top:n.scrollTop(),left:n.scrollLeft()}),{top:i.top+this.offset.relative.top*s+this.offset.parent.top*s-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():this.offset.scroll.top)*s,left:i.left+this.offset.relative.left*s+this.offset.parent.left*s-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():this.offset.scroll.left)*s}},_generatePosition:function(t){var i,s,n,a,o=this.options,r="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,h=t.pageX,l=t.pageY;return this.offset.scroll||(this.offset.scroll={top:r.scrollTop(),left:r.scrollLeft()}),this.originalPosition&&(this.containment&&(this.relative_container?(s=this.relative_container.offset(),i=[this.containment[0]+s.left,this.containment[1]+s.top,this.containment[2]+s.left,this.containment[3]+s.top]):i=this.containment,t.pageX-this.offset.click.left<i[0]&&(h=i[0]+this.offset.click.left),t.pageY-this.offset.click.top<i[1]&&(l=i[1]+this.offset.click.top),t.pageX-this.offset.click.left>i[2]&&(h=i[2]+this.offset.click.left),t.pageY-this.offset.click.top>i[3]&&(l=i[3]+this.offset.click.top)),o.grid&&(n=o.grid[1]?this.originalPageY+Math.round((l-this.originalPageY)/o.grid[1])*o.grid[1]:this.originalPageY,l=i?n-this.offset.click.top>=i[1]||n-this.offset.click.top>i[3]?n:n-this.offset.click.top>=i[1]?n-o.grid[1]:n+o.grid[1]:n,a=o.grid[0]?this.originalPageX+Math.round((h-this.originalPageX)/o.grid[0])*o.grid[0]:this.originalPageX,h=i?a-this.offset.click.left>=i[0]||a-this.offset.click.left>i[2]?a:a-this.offset.click.left>=i[0]?a-o.grid[0]:a+o.grid[0]:a)),{top:l-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():this.offset.scroll.top),left:h-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():this.offset.scroll.left)}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1},_trigger:function(t,i,s){return s=s||this._uiHash(),e.ui.plugin.call(this,t,[i,s]),"drag"===t&&(this.positionAbs=this._convertPositionTo("absolute")),e.Widget.prototype._trigger.call(this,t,i,s)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),e.ui.plugin.add("draggable","connectToSortable",{start:function(t,i){var s=e(this).data("ui-draggable"),n=s.options,a=e.extend({},i,{item:s.element});s.sortables=[],e(n.connectToSortable).each(function(){var i=e.data(this,"ui-sortable");i&&!i.options.disabled&&(s.sortables.push({instance:i,shouldRevert:i.options.revert}),i.refreshPositions(),i._trigger("activate",t,a))})},stop:function(t,i){var s=e(this).data("ui-draggable"),n=e.extend({},i,{item:s.element});e.each(s.sortables,function(){this.instance.isOver?(this.instance.isOver=0,s.cancelHelperRemoval=!0,this.instance.cancelHelperRemoval=!1,this.shouldRevert&&(this.instance.options.revert=this.shouldRevert),this.instance._mouseStop(t),this.instance.options.helper=this.instance.options._helper,"original"===s.options.helper&&this.instance.currentItem.css({top:"auto",left:"auto"})):(this.instance.cancelHelperRemoval=!1,this.instance._trigger("deactivate",t,n))})},drag:function(t,i){var s=e(this).data("ui-draggable"),n=this;e.each(s.sortables,function(){var a=!1,o=this;this.instance.positionAbs=s.positionAbs,this.instance.helperProportions=s.helperProportions,this.instance.offset.click=s.offset.click,this.instance._intersectsWith(this.instance.containerCache)&&(a=!0,e.each(s.sortables,function(){return this.instance.positionAbs=s.positionAbs,this.instance.helperProportions=s.helperProportions,this.instance.offset.click=s.offset.click,this!==o&&this.instance._intersectsWith(this.instance.containerCache)&&e.contains(o.instance.element[0],this.instance.element[0])&&(a=!1),a})),a?(this.instance.isOver||(this.instance.isOver=1,this.instance.currentItem=e(n).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item",!0),this.instance.options._helper=this.instance.options.helper,this.instance.options.helper=function(){return i.helper[0]},t.target=this.instance.currentItem[0],this.instance._mouseCapture(t,!0),this.instance._mouseStart(t,!0,!0),this.instance.offset.click.top=s.offset.click.top,this.instance.offset.click.left=s.offset.click.left,this.instance.offset.parent.left-=s.offset.parent.left-this.instance.offset.parent.left,this.instance.offset.parent.top-=s.offset.parent.top-this.instance.offset.parent.top,s._trigger("toSortable",t),s.dropped=this.instance.element,s.currentItem=s.element,this.instance.fromOutside=s),this.instance.currentItem&&this.instance._mouseDrag(t)):this.instance.isOver&&(this.instance.isOver=0,this.instance.cancelHelperRemoval=!0,this.instance.options.revert=!1,this.instance._trigger("out",t,this.instance._uiHash(this.instance)),this.instance._mouseStop(t,!0),this.instance.options.helper=this.instance.options._helper,this.instance.currentItem.remove(),this.instance.placeholder&&this.instance.placeholder.remove(),s._trigger("fromSortable",t),s.dropped=!1)})}}),e.ui.plugin.add("draggable","cursor",{start:function(){var t=e("body"),i=e(this).data("ui-draggable").options;t.css("cursor")&&(i._cursor=t.css("cursor")),t.css("cursor",i.cursor)},stop:function(){var t=e(this).data("ui-draggable").options;t._cursor&&e("body").css("cursor",t._cursor)}}),e.ui.plugin.add("draggable","opacity",{start:function(t,i){var s=e(i.helper),n=e(this).data("ui-draggable").options;s.css("opacity")&&(n._opacity=s.css("opacity")),s.css("opacity",n.opacity)},stop:function(t,i){var s=e(this).data("ui-draggable").options;s._opacity&&e(i.helper).css("opacity",s._opacity)}}),e.ui.plugin.add("draggable","scroll",{start:function(){var t=e(this).data("ui-draggable");t.scrollParent[0]!==document&&"HTML"!==t.scrollParent[0].tagName&&(t.overflowOffset=t.scrollParent.offset())},drag:function(t){var i=e(this).data("ui-draggable"),s=i.options,n=!1;i.scrollParent[0]!==document&&"HTML"!==i.scrollParent[0].tagName?(s.axis&&"x"===s.axis||(i.overflowOffset.top+i.scrollParent[0].offsetHeight-t.pageY<s.scrollSensitivity?i.scrollParent[0].scrollTop=n=i.scrollParent[0].scrollTop+s.scrollSpeed:t.pageY-i.overflowOffset.top<s.scrollSensitivity&&(i.scrollParent[0].scrollTop=n=i.scrollParent[0].scrollTop-s.scrollSpeed)),s.axis&&"y"===s.axis||(i.overflowOffset.left+i.scrollParent[0].offsetWidth-t.pageX<s.scrollSensitivity?i.scrollParent[0].scrollLeft=n=i.scrollParent[0].scrollLeft+s.scrollSpeed:t.pageX-i.overflowOffset.left<s.scrollSensitivity&&(i.scrollParent[0].scrollLeft=n=i.scrollParent[0].scrollLeft-s.scrollSpeed))):(s.axis&&"x"===s.axis||(t.pageY-e(document).scrollTop()<s.scrollSensitivity?n=e(document).scrollTop(e(document).scrollTop()-s.scrollSpeed):e(window).height()-(t.pageY-e(document).scrollTop())<s.scrollSensitivity&&(n=e(document).scrollTop(e(document).scrollTop()+s.scrollSpeed))),s.axis&&"y"===s.axis||(t.pageX-e(document).scrollLeft()<s.scrollSensitivity?n=e(document).scrollLeft(e(document).scrollLeft()-s.scrollSpeed):e(window).width()-(t.pageX-e(document).scrollLeft())<s.scrollSensitivity&&(n=e(document).scrollLeft(e(document).scrollLeft()+s.scrollSpeed)))),n!==!1&&e.ui.ddmanager&&!s.dropBehaviour&&e.ui.ddmanager.prepareOffsets(i,t)}}),e.ui.plugin.add("draggable","snap",{start:function(){var t=e(this).data("ui-draggable"),i=t.options;t.snapElements=[],e(i.snap.constructor!==String?i.snap.items||":data(ui-draggable)":i.snap).each(function(){var i=e(this),s=i.offset();this!==t.element[0]&&t.snapElements.push({item:this,width:i.outerWidth(),height:i.outerHeight(),top:s.top,left:s.left})})},drag:function(t,i){var s,n,a,o,r,h,l,u,c,d,p=e(this).data("ui-draggable"),f=p.options,m=f.snapTolerance,g=i.offset.left,v=g+p.helperProportions.width,b=i.offset.top,y=b+p.helperProportions.height;for(c=p.snapElements.length-1;c>=0;c--)r=p.snapElements[c].left,h=r+p.snapElements[c].width,l=p.snapElements[c].top,u=l+p.snapElements[c].height,r-m>v||g>h+m||l-m>y||b>u+m||!e.contains(p.snapElements[c].item.ownerDocument,p.snapElements[c].item)?(p.snapElements[c].snapping&&p.options.snap.release&&p.options.snap.release.call(p.element,t,e.extend(p._uiHash(),{snapItem:p.snapElements[c].item})),p.snapElements[c].snapping=!1):("inner"!==f.snapMode&&(s=m>=Math.abs(l-y),n=m>=Math.abs(u-b),a=m>=Math.abs(r-v),o=m>=Math.abs(h-g),s&&(i.position.top=p._convertPositionTo("relative",{top:l-p.helperProportions.height,left:0}).top-p.margins.top),n&&(i.position.top=p._convertPositionTo("relative",{top:u,left:0}).top-p.margins.top),a&&(i.position.left=p._convertPositionTo("relative",{top:0,left:r-p.helperProportions.width}).left-p.margins.left),o&&(i.position.left=p._convertPositionTo("relative",{top:0,left:h}).left-p.margins.left)),d=s||n||a||o,"outer"!==f.snapMode&&(s=m>=Math.abs(l-b),n=m>=Math.abs(u-y),a=m>=Math.abs(r-g),o=m>=Math.abs(h-v),s&&(i.position.top=p._convertPositionTo("relative",{top:l,left:0}).top-p.margins.top),n&&(i.position.top=p._convertPositionTo("relative",{top:u-p.helperProportions.height,left:0}).top-p.margins.top),a&&(i.position.left=p._convertPositionTo("relative",{top:0,left:r}).left-p.margins.left),o&&(i.position.left=p._convertPositionTo("relative",{top:0,left:h-p.helperProportions.width}).left-p.margins.left)),!p.snapElements[c].snapping&&(s||n||a||o||d)&&p.options.snap.snap&&p.options.snap.snap.call(p.element,t,e.extend(p._uiHash(),{snapItem:p.snapElements[c].item})),p.snapElements[c].snapping=s||n||a||o||d)}}),e.ui.plugin.add("draggable","stack",{start:function(){var t,i=this.data("ui-draggable").options,s=e.makeArray(e(i.stack)).sort(function(t,i){return(parseInt(e(t).css("zIndex"),10)||0)-(parseInt(e(i).css("zIndex"),10)||0)});s.length&&(t=parseInt(e(s[0]).css("zIndex"),10)||0,e(s).each(function(i){e(this).css("zIndex",t+i)}),this.css("zIndex",t+s.length))}}),e.ui.plugin.add("draggable","zIndex",{start:function(t,i){var s=e(i.helper),n=e(this).data("ui-draggable").options;s.css("zIndex")&&(n._zIndex=s.css("zIndex")),s.css("zIndex",n.zIndex)},stop:function(t,i){var s=e(this).data("ui-draggable").options;s._zIndex&&e(i.helper).css("zIndex",s._zIndex)}})})(jQuery);(function(e){function t(e){return parseInt(e,10)||0}function i(e){return!isNaN(parseInt(e,10))}e.widget("ui.resizable",e.ui.mouse,{version:"1.10.3",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_create:function(){var t,i,s,n,a,o=this,r=this.options;if(this.element.addClass("ui-resizable"),e.extend(this,{_aspectRatio:!!r.aspectRatio,aspectRatio:r.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:r.helper||r.ghost||r.animate?r.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)&&(this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.data("ui-resizable")),this.elementIsWrapper=!0,this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")}),this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css({margin:this.originalElement.css("margin")}),this._proportionallyResize()),this.handles=r.handles||(e(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),t=this.handles.split(","),this.handles={},i=0;t.length>i;i++)s=e.trim(t[i]),a="ui-resizable-"+s,n=e("<div class='ui-resizable-handle "+a+"'></div>"),n.css({zIndex:r.zIndex}),"se"===s&&n.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),this.handles[s]=".ui-resizable-"+s,this.element.append(n);this._renderAxis=function(t){var i,s,n,a;t=t||this.element;for(i in this.handles)this.handles[i].constructor===String&&(this.handles[i]=e(this.handles[i],this.element).show()),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)&&(s=e(this.handles[i],this.element),a=/sw|ne|nw|se|n|s/.test(i)?s.outerHeight():s.outerWidth(),n=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join(""),t.css(n,a),this._proportionallyResize()),e(this.handles[i]).length},this._renderAxis(this.element),this._handles=e(".ui-resizable-handle",this.element).disableSelection(),this._handles.mouseover(function(){o.resizing||(this.className&&(n=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),o.axis=n&&n[1]?n[1]:"se")}),r.autoHide&&(this._handles.hide(),e(this.element).addClass("ui-resizable-autohide").mouseenter(function(){r.disabled||(e(this).removeClass("ui-resizable-autohide"),o._handles.show())}).mouseleave(function(){r.disabled||o.resizing||(e(this).addClass("ui-resizable-autohide"),o._handles.hide())})),this._mouseInit()},_destroy:function(){this._mouseDestroy();var t,i=function(t){e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};return this.elementIsWrapper&&(i(this.element),t=this.element,this.originalElement.css({position:t.css("position"),width:t.outerWidth(),height:t.outerHeight(),top:t.css("top"),left:t.css("left")}).insertAfter(t),t.remove()),this.originalElement.css("resize",this.originalResizeStyle),i(this.originalElement),this},_mouseCapture:function(t){var i,s,n=!1;for(i in this.handles)s=e(this.handles[i])[0],(s===t.target||e.contains(s,t.target))&&(n=!0);return!this.options.disabled&&n},_mouseStart:function(i){var s,n,a,o=this.options,r=this.element.position(),h=this.element;return this.resizing=!0,/absolute/.test(h.css("position"))?h.css({position:"absolute",top:h.css("top"),left:h.css("left")}):h.is(".ui-draggable")&&h.css({position:"absolute",top:r.top,left:r.left}),this._renderProxy(),s=t(this.helper.css("left")),n=t(this.helper.css("top")),o.containment&&(s+=e(o.containment).scrollLeft()||0,n+=e(o.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:s,top:n},this.size=this._helper?{width:h.outerWidth(),height:h.outerHeight()}:{width:h.width(),height:h.height()},this.originalSize=this._helper?{width:h.outerWidth(),height:h.outerHeight()}:{width:h.width(),height:h.height()},this.originalPosition={left:s,top:n},this.sizeDiff={width:h.outerWidth()-h.width(),height:h.outerHeight()-h.height()},this.originalMousePosition={left:i.pageX,top:i.pageY},this.aspectRatio="number"==typeof o.aspectRatio?o.aspectRatio:this.originalSize.width/this.originalSize.height||1,a=e(".ui-resizable-"+this.axis).css("cursor"),e("body").css("cursor","auto"===a?this.axis+"-resize":a),h.addClass("ui-resizable-resizing"),this._propagate("start",i),!0},_mouseDrag:function(t){var i,s=this.helper,n={},a=this.originalMousePosition,o=this.axis,r=this.position.top,h=this.position.left,l=this.size.width,u=this.size.height,c=t.pageX-a.left||0,d=t.pageY-a.top||0,p=this._change[o];return p?(i=p.apply(this,[t,c,d]),this._updateVirtualBoundaries(t.shiftKey),(this._aspectRatio||t.shiftKey)&&(i=this._updateRatio(i,t)),i=this._respectSize(i,t),this._updateCache(i),this._propagate("resize",t),this.position.top!==r&&(n.top=this.position.top+"px"),this.position.left!==h&&(n.left=this.position.left+"px"),this.size.width!==l&&(n.width=this.size.width+"px"),this.size.height!==u&&(n.height=this.size.height+"px"),s.css(n),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),e.isEmptyObject(n)||this._trigger("resize",t,this.ui()),!1):!1},_mouseStop:function(t){this.resizing=!1;var i,s,n,a,o,r,h,l=this.options,u=this;return this._helper&&(i=this._proportionallyResizeElements,s=i.length&&/textarea/i.test(i[0].nodeName),n=s&&e.ui.hasScroll(i[0],"left")?0:u.sizeDiff.height,a=s?0:u.sizeDiff.width,o={width:u.helper.width()-a,height:u.helper.height()-n},r=parseInt(u.element.css("left"),10)+(u.position.left-u.originalPosition.left)||null,h=parseInt(u.element.css("top"),10)+(u.position.top-u.originalPosition.top)||null,l.animate||this.element.css(e.extend(o,{top:h,left:r})),u.helper.height(u.size.height),u.helper.width(u.size.width),this._helper&&!l.animate&&this._proportionallyResize()),e("body").css("cursor","auto"),this.element.removeClass("ui-resizable-resizing"),this._propagate("stop",t),this._helper&&this.helper.remove(),!1},_updateVirtualBoundaries:function(e){var t,s,n,a,o,r=this.options;o={minWidth:i(r.minWidth)?r.minWidth:0,maxWidth:i(r.maxWidth)?r.maxWidth:1/0,minHeight:i(r.minHeight)?r.minHeight:0,maxHeight:i(r.maxHeight)?r.maxHeight:1/0},(this._aspectRatio||e)&&(t=o.minHeight*this.aspectRatio,n=o.minWidth/this.aspectRatio,s=o.maxHeight*this.aspectRatio,a=o.maxWidth/this.aspectRatio,t>o.minWidth&&(o.minWidth=t),n>o.minHeight&&(o.minHeight=n),o.maxWidth>s&&(o.maxWidth=s),o.maxHeight>a&&(o.maxHeight=a)),this._vBoundaries=o},_updateCache:function(e){this.offset=this.helper.offset(),i(e.left)&&(this.position.left=e.left),i(e.top)&&(this.position.top=e.top),i(e.height)&&(this.size.height=e.height),i(e.width)&&(this.size.width=e.width)},_updateRatio:function(e){var t=this.position,s=this.size,n=this.axis;return i(e.height)?e.width=e.height*this.aspectRatio:i(e.width)&&(e.height=e.width/this.aspectRatio),"sw"===n&&(e.left=t.left+(s.width-e.width),e.top=null),"nw"===n&&(e.top=t.top+(s.height-e.height),e.left=t.left+(s.width-e.width)),e},_respectSize:function(e){var t=this._vBoundaries,s=this.axis,n=i(e.width)&&t.maxWidth&&t.maxWidth<e.width,a=i(e.height)&&t.maxHeight&&t.maxHeight<e.height,o=i(e.width)&&t.minWidth&&t.minWidth>e.width,r=i(e.height)&&t.minHeight&&t.minHeight>e.height,h=this.originalPosition.left+this.originalSize.width,l=this.position.top+this.size.height,u=/sw|nw|w/.test(s),c=/nw|ne|n/.test(s);return o&&(e.width=t.minWidth),r&&(e.height=t.minHeight),n&&(e.width=t.maxWidth),a&&(e.height=t.maxHeight),o&&u&&(e.left=h-t.minWidth),n&&u&&(e.left=h-t.maxWidth),r&&c&&(e.top=l-t.minHeight),a&&c&&(e.top=l-t.maxHeight),e.width||e.height||e.left||!e.top?e.width||e.height||e.top||!e.left||(e.left=null):e.top=null,e},_proportionallyResize:function(){if(this._proportionallyResizeElements.length){var e,t,i,s,n,a=this.helper||this.element;for(e=0;this._proportionallyResizeElements.length>e;e++){if(n=this._proportionallyResizeElements[e],!this.borderDif)for(this.borderDif=[],i=[n.css("borderTopWidth"),n.css("borderRightWidth"),n.css("borderBottomWidth"),n.css("borderLeftWidth")],s=[n.css("paddingTop"),n.css("paddingRight"),n.css("paddingBottom"),n.css("paddingLeft")],t=0;i.length>t;t++)this.borderDif[t]=(parseInt(i[t],10)||0)+(parseInt(s[t],10)||0);n.css({height:a.height()-this.borderDif[0]-this.borderDif[2]||0,width:a.width()-this.borderDif[1]-this.borderDif[3]||0})}}},_renderProxy:function(){var t=this.element,i=this.options;this.elementOffset=t.offset(),this._helper?(this.helper=this.helper||e("<div style='overflow:hidden;'></div>"),this.helper.addClass(this._helper).css({width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++i.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(e,t){return{width:this.originalSize.width+t}},w:function(e,t){var i=this.originalSize,s=this.originalPosition;return{left:s.left+t,width:i.width-t}},n:function(e,t,i){var s=this.originalSize,n=this.originalPosition;return{top:n.top+i,height:s.height-i}},s:function(e,t,i){return{height:this.originalSize.height+i}},se:function(t,i,s){return e.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[t,i,s]))},sw:function(t,i,s){return e.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[t,i,s]))},ne:function(t,i,s){return e.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[t,i,s]))},nw:function(t,i,s){return e.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[t,i,s]))}},_propagate:function(t,i){e.ui.plugin.call(this,t,[i,this.ui()]),"resize"!==t&&this._trigger(t,i,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),e.ui.plugin.add("resizable","animate",{stop:function(t){var i=e(this).data("ui-resizable"),s=i.options,n=i._proportionallyResizeElements,a=n.length&&/textarea/i.test(n[0].nodeName),o=a&&e.ui.hasScroll(n[0],"left")?0:i.sizeDiff.height,r=a?0:i.sizeDiff.width,h={width:i.size.width-r,height:i.size.height-o},l=parseInt(i.element.css("left"),10)+(i.position.left-i.originalPosition.left)||null,u=parseInt(i.element.css("top"),10)+(i.position.top-i.originalPosition.top)||null;i.element.animate(e.extend(h,u&&l?{top:u,left:l}:{}),{duration:s.animateDuration,easing:s.animateEasing,step:function(){var s={width:parseInt(i.element.css("width"),10),height:parseInt(i.element.css("height"),10),top:parseInt(i.element.css("top"),10),left:parseInt(i.element.css("left"),10)};n&&n.length&&e(n[0]).css({width:s.width,height:s.height}),i._updateCache(s),i._propagate("resize",t)}})}}),e.ui.plugin.add("resizable","containment",{start:function(){var i,s,n,a,o,r,h,l=e(this).data("ui-resizable"),u=l.options,c=l.element,d=u.containment,p=d instanceof e?d.get(0):/parent/.test(d)?c.parent().get(0):d;p&&(l.containerElement=e(p),/document/.test(d)||d===document?(l.containerOffset={left:0,top:0},l.containerPosition={left:0,top:0},l.parentData={element:e(document),left:0,top:0,width:e(document).width(),height:e(document).height()||document.body.parentNode.scrollHeight}):(i=e(p),s=[],e(["Top","Right","Left","Bottom"]).each(function(e,n){s[e]=t(i.css("padding"+n))}),l.containerOffset=i.offset(),l.containerPosition=i.position(),l.containerSize={height:i.innerHeight()-s[3],width:i.innerWidth()-s[1]},n=l.containerOffset,a=l.containerSize.height,o=l.containerSize.width,r=e.ui.hasScroll(p,"left")?p.scrollWidth:o,h=e.ui.hasScroll(p)?p.scrollHeight:a,l.parentData={element:p,left:n.left,top:n.top,width:r,height:h}))},resize:function(t){var i,s,n,a,o=e(this).data("ui-resizable"),r=o.options,h=o.containerOffset,l=o.position,u=o._aspectRatio||t.shiftKey,c={top:0,left:0},d=o.containerElement;d[0]!==document&&/static/.test(d.css("position"))&&(c=h),l.left<(o._helper?h.left:0)&&(o.size.width=o.size.width+(o._helper?o.position.left-h.left:o.position.left-c.left),u&&(o.size.height=o.size.width/o.aspectRatio),o.position.left=r.helper?h.left:0),l.top<(o._helper?h.top:0)&&(o.size.height=o.size.height+(o._helper?o.position.top-h.top:o.position.top),u&&(o.size.width=o.size.height*o.aspectRatio),o.position.top=o._helper?h.top:0),o.offset.left=o.parentData.left+o.position.left,o.offset.top=o.parentData.top+o.position.top,i=Math.abs((o._helper?o.offset.left-c.left:o.offset.left-c.left)+o.sizeDiff.width),s=Math.abs((o._helper?o.offset.top-c.top:o.offset.top-h.top)+o.sizeDiff.height),n=o.containerElement.get(0)===o.element.parent().get(0),a=/relative|absolute/.test(o.containerElement.css("position")),n&&a&&(i-=o.parentData.left),i+o.size.width>=o.parentData.width&&(o.size.width=o.parentData.width-i,u&&(o.size.height=o.size.width/o.aspectRatio)),s+o.size.height>=o.parentData.height&&(o.size.height=o.parentData.height-s,u&&(o.size.width=o.size.height*o.aspectRatio))},stop:function(){var t=e(this).data("ui-resizable"),i=t.options,s=t.containerOffset,n=t.containerPosition,a=t.containerElement,o=e(t.helper),r=o.offset(),h=o.outerWidth()-t.sizeDiff.width,l=o.outerHeight()-t.sizeDiff.height;t._helper&&!i.animate&&/relative/.test(a.css("position"))&&e(this).css({left:r.left-n.left-s.left,width:h,height:l}),t._helper&&!i.animate&&/static/.test(a.css("position"))&&e(this).css({left:r.left-n.left-s.left,width:h,height:l})}}),e.ui.plugin.add("resizable","alsoResize",{start:function(){var t=e(this).data("ui-resizable"),i=t.options,s=function(t){e(t).each(function(){var t=e(this);t.data("ui-resizable-alsoresize",{width:parseInt(t.width(),10),height:parseInt(t.height(),10),left:parseInt(t.css("left"),10),top:parseInt(t.css("top"),10)})})};"object"!=typeof i.alsoResize||i.alsoResize.parentNode?s(i.alsoResize):i.alsoResize.length?(i.alsoResize=i.alsoResize[0],s(i.alsoResize)):e.each(i.alsoResize,function(e){s(e)})},resize:function(t,i){var s=e(this).data("ui-resizable"),n=s.options,a=s.originalSize,o=s.originalPosition,r={height:s.size.height-a.height||0,width:s.size.width-a.width||0,top:s.position.top-o.top||0,left:s.position.left-o.left||0},h=function(t,s){e(t).each(function(){var t=e(this),n=e(this).data("ui-resizable-alsoresize"),a={},o=s&&s.length?s:t.parents(i.originalElement[0]).length?["width","height"]:["width","height","top","left"];e.each(o,function(e,t){var i=(n[t]||0)+(r[t]||0);i&&i>=0&&(a[t]=i||null)}),t.css(a)})};"object"!=typeof n.alsoResize||n.alsoResize.nodeType?h(n.alsoResize):e.each(n.alsoResize,function(e,t){h(e,t)})},stop:function(){e(this).removeData("resizable-alsoresize")}}),e.ui.plugin.add("resizable","ghost",{start:function(){var t=e(this).data("ui-resizable"),i=t.options,s=t.size;t.ghost=t.originalElement.clone(),t.ghost.css({opacity:.25,display:"block",position:"relative",height:s.height,width:s.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass("string"==typeof i.ghost?i.ghost:""),t.ghost.appendTo(t.helper)},resize:function(){var t=e(this).data("ui-resizable");t.ghost&&t.ghost.css({position:"relative",height:t.size.height,width:t.size.width})},stop:function(){var t=e(this).data("ui-resizable");t.ghost&&t.helper&&t.helper.get(0).removeChild(t.ghost.get(0))}}),e.ui.plugin.add("resizable","grid",{resize:function(){var t=e(this).data("ui-resizable"),i=t.options,s=t.size,n=t.originalSize,a=t.originalPosition,o=t.axis,r="number"==typeof i.grid?[i.grid,i.grid]:i.grid,h=r[0]||1,l=r[1]||1,u=Math.round((s.width-n.width)/h)*h,c=Math.round((s.height-n.height)/l)*l,d=n.width+u,p=n.height+c,f=i.maxWidth&&d>i.maxWidth,m=i.maxHeight&&p>i.maxHeight,g=i.minWidth&&i.minWidth>d,v=i.minHeight&&i.minHeight>p;i.grid=r,g&&(d+=h),v&&(p+=l),f&&(d-=h),m&&(p-=l),/^(se|s|e)$/.test(o)?(t.size.width=d,t.size.height=p):/^(ne)$/.test(o)?(t.size.width=d,t.size.height=p,t.position.top=a.top-c):/^(sw)$/.test(o)?(t.size.width=d,t.size.height=p,t.position.left=a.left-u):(t.size.width=d,t.size.height=p,t.position.top=a.top-c,t.position.left=a.left-u)}})})(jQuery);(function(t){var e,i,s,n,a="ui-button ui-widget ui-state-default ui-corner-all",o="ui-state-hover ui-state-active ",r="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",h=function(){var e=t(this);setTimeout(function(){e.find(":ui-button").button("refresh")},1)},l=function(e){var i=e.name,s=e.form,n=t([]);return i&&(i=i.replace(/'/g,"\\'"),n=s?t(s).find("[name='"+i+"']"):t("[name='"+i+"']",e.ownerDocument).filter(function(){return!this.form})),n};t.widget("ui.button",{version:"1.10.3",defaultElement:"<button>",options:{disabled:null,text:!0,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,h),"boolean"!=typeof this.options.disabled?this.options.disabled=!!this.element.prop("disabled"):this.element.prop("disabled",this.options.disabled),this._determineButtonType(),this.hasTitle=!!this.buttonElement.attr("title");var o=this,r=this.options,c="checkbox"===this.type||"radio"===this.type,u=c?"":"ui-state-active",d="ui-state-focus";null===r.label&&(r.label="input"===this.type?this.buttonElement.val():this.buttonElement.html()),this._hoverable(this.buttonElement),this.buttonElement.addClass(a).attr("role","button").bind("mouseenter"+this.eventNamespace,function(){r.disabled||this===e&&t(this).addClass("ui-state-active")}).bind("mouseleave"+this.eventNamespace,function(){r.disabled||t(this).removeClass(u)}).bind("click"+this.eventNamespace,function(t){r.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}),this.element.bind("focus"+this.eventNamespace,function(){o.buttonElement.addClass(d)}).bind("blur"+this.eventNamespace,function(){o.buttonElement.removeClass(d)}),c&&(this.element.bind("change"+this.eventNamespace,function(){n||o.refresh()}),this.buttonElement.bind("mousedown"+this.eventNamespace,function(t){r.disabled||(n=!1,i=t.pageX,s=t.pageY)}).bind("mouseup"+this.eventNamespace,function(t){r.disabled||(i!==t.pageX||s!==t.pageY)&&(n=!0)})),"checkbox"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){return r.disabled||n?!1:undefined}):"radio"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){if(r.disabled||n)return!1;t(this).addClass("ui-state-active"),o.buttonElement.attr("aria-pressed","true");var e=o.element[0];l(e).not(e).map(function(){return t(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")}):(this.buttonElement.bind("mousedown"+this.eventNamespace,function(){return r.disabled?!1:(t(this).addClass("ui-state-active"),e=this,o.document.one("mouseup",function(){e=null}),undefined)}).bind("mouseup"+this.eventNamespace,function(){return r.disabled?!1:(t(this).removeClass("ui-state-active"),undefined)}).bind("keydown"+this.eventNamespace,function(e){return r.disabled?!1:((e.keyCode===t.ui.keyCode.SPACE||e.keyCode===t.ui.keyCode.ENTER)&&t(this).addClass("ui-state-active"),undefined)}).bind("keyup"+this.eventNamespace+" blur"+this.eventNamespace,function(){t(this).removeClass("ui-state-active")}),this.buttonElement.is("a")&&this.buttonElement.keyup(function(e){e.keyCode===t.ui.keyCode.SPACE&&t(this).click()})),this._setOption("disabled",r.disabled),this._resetButton()},_determineButtonType:function(){var t,e,i;this.type=this.element.is("[type=checkbox]")?"checkbox":this.element.is("[type=radio]")?"radio":this.element.is("input")?"input":"button","checkbox"===this.type||"radio"===this.type?(t=this.element.parents().last(),e="label[for='"+this.element.attr("id")+"']",this.buttonElement=t.find(e),this.buttonElement.length||(t=t.length?t.siblings():this.element.siblings(),this.buttonElement=t.filter(e),this.buttonElement.length||(this.buttonElement=t.find(e))),this.element.addClass("ui-helper-hidden-accessible"),i=this.element.is(":checked"),i&&this.buttonElement.addClass("ui-state-active"),this.buttonElement.prop("aria-pressed",i)):this.buttonElement=this.element},widget:function(){return this.buttonElement},_destroy:function(){this.element.removeClass("ui-helper-hidden-accessible"),this.buttonElement.removeClass(a+" "+o+" "+r).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()),this.hasTitle||this.buttonElement.removeAttr("title")},_setOption:function(t,e){return this._super(t,e),"disabled"===t?(e?this.element.prop("disabled",!0):this.element.prop("disabled",!1),undefined):(this._resetButton(),undefined)},refresh:function(){var e=this.element.is("input, button")?this.element.is(":disabled"):this.element.hasClass("ui-button-disabled");e!==this.options.disabled&&this._setOption("disabled",e),"radio"===this.type?l(this.element[0]).each(function(){t(this).is(":checked")?t(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true"):t(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")}):"checkbox"===this.type&&(this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true"):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false"))},_resetButton:function(){if("input"===this.type)return this.options.label&&this.element.val(this.options.label),undefined;var e=this.buttonElement.removeClass(r),i=t("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(e.empty()).text(),s=this.options.icons,n=s.primary&&s.secondary,a=[];s.primary||s.secondary?(this.options.text&&a.push("ui-button-text-icon"+(n?"s":s.primary?"-primary":"-secondary")),s.primary&&e.prepend("<span class='ui-button-icon-primary ui-icon "+s.primary+"'></span>"),s.secondary&&e.append("<span class='ui-button-icon-secondary ui-icon "+s.secondary+"'></span>"),this.options.text||(a.push(n?"ui-button-icons-only":"ui-button-icon-only"),this.hasTitle||e.attr("title",t.trim(i)))):a.push("ui-button-text-only"),e.addClass(a.join(" "))}}),t.widget("ui.buttonset",{version:"1.10.3",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(t,e){"disabled"===t&&this.buttons.button("option",t,e),this._super(t,e)},refresh:function(){var e="rtl"===this.element.css("direction");this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return t(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(e?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(e?"ui-corner-left":"ui-corner-right").end().end()},_destroy:function(){this.element.removeClass("ui-buttonset"),this.buttons.map(function(){return t(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")}})})(jQuery);(function(t){var e={buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},i={maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0};t.widget("ui.dialog",{version:"1.10.3",options:{appendTo:"body",autoOpen:!0,buttons:[],closeOnEscape:!0,closeText:"close",dialogClass:"",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(e){var i=t(this).css(e).offset().top;0>i&&t(this).css("top",e.top-i)}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),this.options.title=this.options.title||this.originalTitle,this._createWrapper(),this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&t.fn.draggable&&this._makeDraggable(),this.options.resizable&&t.fn.resizable&&this._makeResizable(),this._isOpen=!1},_init:function(){this.options.autoOpen&&this.open()},_appendTo:function(){var e=this.options.appendTo;return e&&(e.jquery||e.nodeType)?t(e):this.document.find(e||"body").eq(0)},_destroy:function(){var t,e=this.originalPosition;this._destroyOverlay(),this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(),this.uiDialog.stop(!0,!0).remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),t=e.parent.children().eq(e.index),t.length&&t[0]!==this.element[0]?t.before(this.element):e.parent.append(this.element)},widget:function(){return this.uiDialog},disable:t.noop,enable:t.noop,close:function(e){var i=this;this._isOpen&&this._trigger("beforeClose",e)!==!1&&(this._isOpen=!1,this._destroyOverlay(),this.opener.filter(":focusable").focus().length||t(this.document[0].activeElement).blur(),this._hide(this.uiDialog,this.options.hide,function(){i._trigger("close",e)}))},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(t,e){var i=!!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;return i&&!e&&this._trigger("focus",t),i},open:function(){var e=this;return this._isOpen?(this._moveToTop()&&this._focusTabbable(),undefined):(this._isOpen=!0,this.opener=t(this.document[0].activeElement),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this._show(this.uiDialog,this.options.show,function(){e._focusTabbable(),e._trigger("focus")}),this._trigger("open"),undefined)},_focusTabbable:function(){var t=this.element.find("[autofocus]");t.length||(t=this.element.find(":tabbable")),t.length||(t=this.uiDialogButtonPane.find(":tabbable")),t.length||(t=this.uiDialogTitlebarClose.filter(":tabbable")),t.length||(t=this.uiDialog),t.eq(0).focus()},_keepFocus:function(e){function i(){var e=this.document[0].activeElement,i=this.uiDialog[0]===e||t.contains(this.uiDialog[0],e);i||this._focusTabbable()}e.preventDefault(),i.call(this),this._delay(i)},_createWrapper:function(){this.uiDialog=t("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front "+this.options.dialogClass).hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo()),this._on(this.uiDialog,{keydown:function(e){if(this.options.closeOnEscape&&!e.isDefaultPrevented()&&e.keyCode&&e.keyCode===t.ui.keyCode.ESCAPE)return e.preventDefault(),this.close(e),undefined;if(e.keyCode===t.ui.keyCode.TAB){var i=this.uiDialog.find(":tabbable"),s=i.filter(":first"),n=i.filter(":last");e.target!==n[0]&&e.target!==this.uiDialog[0]||e.shiftKey?e.target!==s[0]&&e.target!==this.uiDialog[0]||!e.shiftKey||(n.focus(1),e.preventDefault()):(s.focus(1),e.preventDefault())}},mousedown:function(t){this._moveToTop(t)&&this._focusTabbable()}}),this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})},_createTitlebar:function(){var e;this.uiDialogTitlebar=t("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog),this._on(this.uiDialogTitlebar,{mousedown:function(e){t(e.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.focus()}}),this.uiDialogTitlebarClose=t("<button></button>").button({label:this.options.closeText,icons:{primary:"ui-icon-closethick"},text:!1}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar),this._on(this.uiDialogTitlebarClose,{click:function(t){t.preventDefault(),this.close(t)}}),e=t("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar),this._title(e),this.uiDialog.attr({"aria-labelledby":e.attr("id")})},_title:function(t){this.options.title||t.html("&#160;"),t.text(this.options.title)},_createButtonPane:function(){this.uiDialogButtonPane=t("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),this.uiButtonSet=t("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane),this._createButtons()},_createButtons:function(){var e=this,i=this.options.buttons;return this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),t.isEmptyObject(i)||t.isArray(i)&&!i.length?(this.uiDialog.removeClass("ui-dialog-buttons"),undefined):(t.each(i,function(i,s){var n,a;s=t.isFunction(s)?{click:s,text:i}:s,s=t.extend({type:"button"},s),n=s.click,s.click=function(){n.apply(e.element[0],arguments)},a={icons:s.icons,text:s.showText},delete s.icons,delete s.showText,t("<button></button>",s).button(a).appendTo(e.uiButtonSet)}),this.uiDialog.addClass("ui-dialog-buttons"),this.uiDialogButtonPane.appendTo(this.uiDialog),undefined)},_makeDraggable:function(){function e(t){return{position:t.position,offset:t.offset}}var i=this,s=this.options;this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(s,n){t(this).addClass("ui-dialog-dragging"),i._blockFrames(),i._trigger("dragStart",s,e(n))},drag:function(t,s){i._trigger("drag",t,e(s))},stop:function(n,a){s.position=[a.position.left-i.document.scrollLeft(),a.position.top-i.document.scrollTop()],t(this).removeClass("ui-dialog-dragging"),i._unblockFrames(),i._trigger("dragStop",n,e(a))}})},_makeResizable:function(){function e(t){return{originalPosition:t.originalPosition,originalSize:t.originalSize,position:t.position,size:t.size}}var i=this,s=this.options,n=s.resizable,a=this.uiDialog.css("position"),o="string"==typeof n?n:"n,e,s,w,se,sw,ne,nw";this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:s.maxWidth,maxHeight:s.maxHeight,minWidth:s.minWidth,minHeight:this._minHeight(),handles:o,start:function(s,n){t(this).addClass("ui-dialog-resizing"),i._blockFrames(),i._trigger("resizeStart",s,e(n))},resize:function(t,s){i._trigger("resize",t,e(s))},stop:function(n,a){s.height=t(this).height(),s.width=t(this).width(),t(this).removeClass("ui-dialog-resizing"),i._unblockFrames(),i._trigger("resizeStop",n,e(a))}}).css("position",a)},_minHeight:function(){var t=this.options;return"auto"===t.height?t.minHeight:Math.min(t.minHeight,t.height)},_position:function(){var t=this.uiDialog.is(":visible");t||this.uiDialog.show(),this.uiDialog.position(this.options.position),t||this.uiDialog.hide()},_setOptions:function(s){var n=this,a=!1,o={};t.each(s,function(t,s){n._setOption(t,s),t in e&&(a=!0),t in i&&(o[t]=s)}),a&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",o)},_setOption:function(t,e){var i,s,n=this.uiDialog;"dialogClass"===t&&n.removeClass(this.options.dialogClass).addClass(e),"disabled"!==t&&(this._super(t,e),"appendTo"===t&&this.uiDialog.appendTo(this._appendTo()),"buttons"===t&&this._createButtons(),"closeText"===t&&this.uiDialogTitlebarClose.button({label:""+e}),"draggable"===t&&(i=n.is(":data(ui-draggable)"),i&&!e&&n.draggable("destroy"),!i&&e&&this._makeDraggable()),"position"===t&&this._position(),"resizable"===t&&(s=n.is(":data(ui-resizable)"),s&&!e&&n.resizable("destroy"),s&&"string"==typeof e&&n.resizable("option","handles",e),s||e===!1||this._makeResizable()),"title"===t&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))},_size:function(){var t,e,i,s=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),s.minWidth>s.width&&(s.width=s.minWidth),t=this.uiDialog.css({height:"auto",width:s.width}).outerHeight(),e=Math.max(0,s.minHeight-t),i="number"==typeof s.maxHeight?Math.max(0,s.maxHeight-t):"none","auto"===s.height?this.element.css({minHeight:e,maxHeight:i,height:"auto"}):this.element.height(Math.max(0,s.height-t)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var e=t(this);return t("<div>").css({position:"absolute",width:e.outerWidth(),height:e.outerHeight()}).appendTo(e.parent()).offset(e.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_allowInteraction:function(e){return t(e.target).closest(".ui-dialog").length?!0:!!t(e.target).closest(".ui-datepicker").length},_createOverlay:function(){if(this.options.modal){var e=this,i=this.widgetFullName;t.ui.dialog.overlayInstances||this._delay(function(){t.ui.dialog.overlayInstances&&this.document.bind("focusin.dialog",function(s){e._allowInteraction(s)||(s.preventDefault(),t(".ui-dialog:visible:last .ui-dialog-content").data(i)._focusTabbable())})}),this.overlay=t("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()),this._on(this.overlay,{mousedown:"_keepFocus"}),t.ui.dialog.overlayInstances++}},_destroyOverlay:function(){this.options.modal&&this.overlay&&(t.ui.dialog.overlayInstances--,t.ui.dialog.overlayInstances||this.document.unbind("focusin.dialog"),this.overlay.remove(),this.overlay=null)}}),t.ui.dialog.overlayInstances=0,t.uiBackCompat!==!1&&t.widget("ui.dialog",t.ui.dialog,{_position:function(){var e,i=this.options.position,s=[],n=[0,0];i?(("string"==typeof i||"object"==typeof i&&"0"in i)&&(s=i.split?i.split(" "):[i[0],i[1]],1===s.length&&(s[1]=s[0]),t.each(["left","top"],function(t,e){+s[t]===s[t]&&(n[t]=s[t],s[t]=e)}),i={my:s[0]+(0>n[0]?n[0]:"+"+n[0])+" "+s[1]+(0>n[1]?n[1]:"+"+n[1]),at:s.join(" ")}),i=t.extend({},t.ui.dialog.prototype.options.position,i)):i=t.ui.dialog.prototype.options.position,e=this.uiDialog.is(":visible"),e||this.uiDialog.show(),this.uiDialog.position(i),e||this.uiDialog.hide()}})})(jQuery);(function(t){t.widget("ui.menu",{version:"1.10.3",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0}).bind("click"+this.eventNamespace,t.proxy(function(t){this.options.disabled&&t.preventDefault()},this)),this.options.disabled&&this.element.addClass("ui-state-disabled").attr("aria-disabled","true"),this._on({"mousedown .ui-menu-item > a":function(t){t.preventDefault()},"click .ui-state-disabled > a":function(t){t.preventDefault()},"click .ui-menu-item:has(a)":function(e){var i=t(e.target).closest(".ui-menu-item");!this.mouseHandled&&i.not(".ui-state-disabled").length&&(this.mouseHandled=!0,this.select(e),i.has(".ui-menu").length?this.expand(e):this.element.is(":focus")||(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(e){var i=t(e.currentTarget);i.siblings().children(".ui-state-active").removeClass("ui-state-active"),this.focus(e,i)},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(t,e){var i=this.active||this.element.children(".ui-menu-item").eq(0);e||this.focus(t,i)},blur:function(e){this._delay(function(){t.contains(this.element[0],this.document[0].activeElement)||this.collapseAll(e)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(e){t(e.target).closest(".ui-menu").length||this.collapseAll(e),this.mouseHandled=!1}})},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(),this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var e=t(this);e.data("ui-menu-submenu-carat")&&e.remove()}),this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")},_keydown:function(e){function i(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}var s,n,a,o,r,h=!0;switch(e.keyCode){case t.ui.keyCode.PAGE_UP:this.previousPage(e);break;case t.ui.keyCode.PAGE_DOWN:this.nextPage(e);break;case t.ui.keyCode.HOME:this._move("first","first",e);break;case t.ui.keyCode.END:this._move("last","last",e);break;case t.ui.keyCode.UP:this.previous(e);break;case t.ui.keyCode.DOWN:this.next(e);break;case t.ui.keyCode.LEFT:this.collapse(e);break;case t.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(e);break;case t.ui.keyCode.ENTER:case t.ui.keyCode.SPACE:this._activate(e);break;case t.ui.keyCode.ESCAPE:this.collapse(e);break;default:h=!1,n=this.previousFilter||"",a=String.fromCharCode(e.keyCode),o=!1,clearTimeout(this.filterTimer),a===n?o=!0:a=n+a,r=RegExp("^"+i(a),"i"),s=this.activeMenu.children(".ui-menu-item").filter(function(){return r.test(t(this).children("a").text())}),s=o&&-1!==s.index(this.active.next())?this.active.nextAll(".ui-menu-item"):s,s.length||(a=String.fromCharCode(e.keyCode),r=RegExp("^"+i(a),"i"),s=this.activeMenu.children(".ui-menu-item").filter(function(){return r.test(t(this).children("a").text())})),s.length?(this.focus(e,s),s.length>1?(this.previousFilter=a,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter):delete this.previousFilter}h&&e.preventDefault()},_activate:function(t){this.active.is(".ui-state-disabled")||(this.active.children("a[aria-haspopup='true']").length?this.expand(t):this.select(t))},refresh:function(){var e,i=this.options.icons.submenu,s=this.element.find(this.options.menus);s.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var e=t(this),s=e.prev("a"),n=t("<span>").addClass("ui-menu-icon ui-icon "+i).data("ui-menu-submenu-carat",!0);s.attr("aria-haspopup","true").prepend(n),e.attr("aria-labelledby",s.attr("id"))}),e=s.add(this.element),e.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","presentation").children("a").uniqueId().addClass("ui-corner-all").attr({tabIndex:-1,role:this._itemRole()}),e.children(":not(.ui-menu-item)").each(function(){var e=t(this);/[^\-\u2014\u2013\s]/.test(e.text())||e.addClass("ui-widget-content ui-menu-divider")}),e.children(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!t.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(t,e){"icons"===t&&this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(e.submenu),this._super(t,e)},focus:function(t,e){var i,s;this.blur(t,t&&"focus"===t.type),this._scrollIntoView(e),this.active=e.first(),s=this.active.children("a").addClass("ui-state-focus"),this.options.role&&this.element.attr("aria-activedescendant",s.attr("id")),this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"),t&&"keydown"===t.type?this._close():this.timer=this._delay(function(){this._close()},this.delay),i=e.children(".ui-menu"),i.length&&/^mouse/.test(t.type)&&this._startOpening(i),this.activeMenu=e.parent(),this._trigger("focus",t,{item:e})},_scrollIntoView:function(e){var i,s,n,a,o,r;this._hasScroll()&&(i=parseFloat(t.css(this.activeMenu[0],"borderTopWidth"))||0,s=parseFloat(t.css(this.activeMenu[0],"paddingTop"))||0,n=e.offset().top-this.activeMenu.offset().top-i-s,a=this.activeMenu.scrollTop(),o=this.activeMenu.height(),r=e.height(),0>n?this.activeMenu.scrollTop(a+n):n+r>o&&this.activeMenu.scrollTop(a+n-o+r))},blur:function(t,e){e||clearTimeout(this.timer),this.active&&(this.active.children("a").removeClass("ui-state-focus"),this.active=null,this._trigger("blur",t,{item:this.active}))},_startOpening:function(t){clearTimeout(this.timer),"true"===t.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(t)},this.delay))},_open:function(e){var i=t.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden","true"),e.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(i)},collapseAll:function(e,i){clearTimeout(this.timer),this.timer=this._delay(function(){var s=i?this.element:t(e&&e.target).closest(this.element.find(".ui-menu"));s.length||(s=this.element),this._close(s),this.blur(e),this.activeMenu=s},this.delay)},_close:function(t){t||(t=this.active?this.active.parent():this.element),t.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find("a.ui-state-active").removeClass("ui-state-active")},collapse:function(t){var e=this.active&&this.active.parent().closest(".ui-menu-item",this.element);e&&e.length&&(this._close(),this.focus(t,e))},expand:function(t){var e=this.active&&this.active.children(".ui-menu ").children(".ui-menu-item").first();e&&e.length&&(this._open(e.parent()),this._delay(function(){this.focus(t,e)}))},next:function(t){this._move("next","first",t)},previous:function(t){this._move("prev","last",t)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(t,e,i){var s;this.active&&(s="first"===t||"last"===t?this.active["first"===t?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[t+"All"](".ui-menu-item").eq(0)),s&&s.length&&this.active||(s=this.activeMenu.children(".ui-menu-item")[e]()),this.focus(i,s)},nextPage:function(e){var i,s,n;return this.active?(this.isLastItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return i=t(this),0>i.offset().top-s-n}),this.focus(e,i)):this.focus(e,this.activeMenu.children(".ui-menu-item")[this.active?"last":"first"]())),undefined):(this.next(e),undefined)},previousPage:function(e){var i,s,n;return this.active?(this.isFirstItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return i=t(this),i.offset().top-s+n>0}),this.focus(e,i)):this.focus(e,this.activeMenu.children(".ui-menu-item").first())),undefined):(this.next(e),undefined)},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(e){this.active=this.active||t(e.target).closest(".ui-menu-item");var i={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(e,!0),this._trigger("select",e,i)}})})(jQuery);(function(t){var e=5;t.widget("ui.slider",t.ui.mouse,{version:"1.10.3",widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all"),this._refresh(),this._setOption("disabled",this.options.disabled),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var e,i,s=this.options,n=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),a="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",o=[];for(i=s.values&&s.values.length||1,n.length>i&&(n.slice(i).remove(),n=n.slice(0,i)),e=n.length;i>e;e++)o.push(a);this.handles=n.add(t(o.join("")).appendTo(this.element)),this.handle=this.handles.eq(0),this.handles.each(function(e){t(this).data("ui-slider-handle-index",e)})},_createRange:function(){var e=this.options,i="";e.range?(e.range===!0&&(e.values?e.values.length&&2!==e.values.length?e.values=[e.values[0],e.values[0]]:t.isArray(e.values)&&(e.values=e.values.slice(0)):e.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"",bottom:""}):(this.range=t("<div></div>").appendTo(this.element),i="ui-slider-range ui-widget-header ui-corner-all"),this.range.addClass(i+("min"===e.range||"max"===e.range?" ui-slider-range-"+e.range:""))):this.range=t([])},_setupEvents:function(){var t=this.handles.add(this.range).filter("a");this._off(t),this._on(t,this._handleEvents),this._hoverable(t),this._focusable(t)},_destroy:function(){this.handles.remove(),this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),this._mouseDestroy()},_mouseCapture:function(e){var i,s,n,a,o,r,h,l,u=this,c=this.options;return c.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),i={x:e.pageX,y:e.pageY},s=this._normValueFromMouse(i),n=this._valueMax()-this._valueMin()+1,this.handles.each(function(e){var i=Math.abs(s-u.values(e));(n>i||n===i&&(e===u._lastChangedValue||u.values(e)===c.min))&&(n=i,a=t(this),o=e)}),r=this._start(e,o),r===!1?!1:(this._mouseSliding=!0,this._handleIndex=o,a.addClass("ui-state-active").focus(),h=a.offset(),l=!t(e.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=l?{left:0,top:0}:{left:e.pageX-h.left-a.width()/2,top:e.pageY-h.top-a.height()/2-(parseInt(a.css("borderTopWidth"),10)||0)-(parseInt(a.css("borderBottomWidth"),10)||0)+(parseInt(a.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(e,o,s),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(t){var e={x:t.pageX,y:t.pageY},i=this._normValueFromMouse(e);return this._slide(t,this._handleIndex,i),!1},_mouseStop:function(t){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(t,this._handleIndex),this._change(t,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(t){var e,i,s,n,a;return"horizontal"===this.orientation?(e=this.elementSize.width,i=t.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(e=this.elementSize.height,i=t.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),s=i/e,s>1&&(s=1),0>s&&(s=0),"vertical"===this.orientation&&(s=1-s),n=this._valueMax()-this._valueMin(),a=this._valueMin()+s*n,this._trimAlignValue(a)},_start:function(t,e){var i={handle:this.handles[e],value:this.value()};return this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._trigger("start",t,i)},_slide:function(t,e,i){var s,n,a;this.options.values&&this.options.values.length?(s=this.values(e?0:1),2===this.options.values.length&&this.options.range===!0&&(0===e&&i>s||1===e&&s>i)&&(i=s),i!==this.values(e)&&(n=this.values(),n[e]=i,a=this._trigger("slide",t,{handle:this.handles[e],value:i,values:n}),s=this.values(e?0:1),a!==!1&&this.values(e,i,!0))):i!==this.value()&&(a=this._trigger("slide",t,{handle:this.handles[e],value:i}),a!==!1&&this.value(i))},_stop:function(t,e){var i={handle:this.handles[e],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._trigger("stop",t,i)},_change:function(t,e){if(!this._keySliding&&!this._mouseSliding){var i={handle:this.handles[e],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._lastChangedValue=e,this._trigger("change",t,i)}},value:function(t){return arguments.length?(this.options.value=this._trimAlignValue(t),this._refreshValue(),this._change(null,0),undefined):this._value()},values:function(e,i){var s,n,a;if(arguments.length>1)return this.options.values[e]=this._trimAlignValue(i),this._refreshValue(),this._change(null,e),undefined;if(!arguments.length)return this._values();if(!t.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(e):this.value();for(s=this.options.values,n=arguments[0],a=0;s.length>a;a+=1)s[a]=this._trimAlignValue(n[a]),this._change(null,a);this._refreshValue()},_setOption:function(e,i){var s,n=0;switch("range"===e&&this.options.range===!0&&("min"===i?(this.options.value=this._values(0),this.options.values=null):"max"===i&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),t.isArray(this.options.values)&&(n=this.options.values.length),t.Widget.prototype._setOption.apply(this,arguments),e){case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue();break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),s=0;n>s;s+=1)this._change(null,s);this._animateOff=!1;break;case"min":case"max":this._animateOff=!0,this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_value:function(){var t=this.options.value;return t=this._trimAlignValue(t)},_values:function(t){var e,i,s;if(arguments.length)return e=this.options.values[t],e=this._trimAlignValue(e);if(this.options.values&&this.options.values.length){for(i=this.options.values.slice(),s=0;i.length>s;s+=1)i[s]=this._trimAlignValue(i[s]);return i}return[]},_trimAlignValue:function(t){if(this._valueMin()>=t)return this._valueMin();if(t>=this._valueMax())return this._valueMax();var e=this.options.step>0?this.options.step:1,i=(t-this._valueMin())%e,s=t-i;return 2*Math.abs(i)>=e&&(s+=i>0?e:-e),parseFloat(s.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var e,i,s,n,a,o=this.options.range,r=this.options,h=this,l=this._animateOff?!1:r.animate,u={};this.options.values&&this.options.values.length?this.handles.each(function(s){i=100*((h.values(s)-h._valueMin())/(h._valueMax()-h._valueMin())),u["horizontal"===h.orientation?"left":"bottom"]=i+"%",t(this).stop(1,1)[l?"animate":"css"](u,r.animate),h.options.range===!0&&("horizontal"===h.orientation?(0===s&&h.range.stop(1,1)[l?"animate":"css"]({left:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({width:i-e+"%"},{queue:!1,duration:r.animate})):(0===s&&h.range.stop(1,1)[l?"animate":"css"]({bottom:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({height:i-e+"%"},{queue:!1,duration:r.animate}))),e=i}):(s=this.value(),n=this._valueMin(),a=this._valueMax(),i=a!==n?100*((s-n)/(a-n)):0,u["horizontal"===this.orientation?"left":"bottom"]=i+"%",this.handle.stop(1,1)[l?"animate":"css"](u,r.animate),"min"===o&&"horizontal"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({width:i+"%"},r.animate),"max"===o&&"horizontal"===this.orientation&&this.range[l?"animate":"css"]({width:100-i+"%"},{queue:!1,duration:r.animate}),"min"===o&&"vertical"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({height:i+"%"},r.animate),"max"===o&&"vertical"===this.orientation&&this.range[l?"animate":"css"]({height:100-i+"%"},{queue:!1,duration:r.animate}))},_handleEvents:{keydown:function(i){var s,n,a,o,r=t(i.target).data("ui-slider-handle-index");switch(i.keyCode){case t.ui.keyCode.HOME:case t.ui.keyCode.END:case t.ui.keyCode.PAGE_UP:case t.ui.keyCode.PAGE_DOWN:case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(i.preventDefault(),!this._keySliding&&(this._keySliding=!0,t(i.target).addClass("ui-state-active"),s=this._start(i,r),s===!1))return}switch(o=this.options.step,n=a=this.options.values&&this.options.values.length?this.values(r):this.value(),i.keyCode){case t.ui.keyCode.HOME:a=this._valueMin();break;case t.ui.keyCode.END:a=this._valueMax();break;case t.ui.keyCode.PAGE_UP:a=this._trimAlignValue(n+(this._valueMax()-this._valueMin())/e);break;case t.ui.keyCode.PAGE_DOWN:a=this._trimAlignValue(n-(this._valueMax()-this._valueMin())/e);break;case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:if(n===this._valueMax())return;a=this._trimAlignValue(n+o);break;case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(n===this._valueMin())return;a=this._trimAlignValue(n-o)}this._slide(i,r,a)},click:function(t){t.preventDefault()},keyup:function(e){var i=t(e.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(e,i),this._change(e,i),t(e.target).removeClass("ui-state-active"))}}})})(jQuery);
/*
 * jQuery UI Touch Punch 0.2.2
 *
 * Copyright 2011, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 */
(function(b){b.support.touch="ontouchend" in document;if(!b.support.touch){return;}var c=b.ui.mouse.prototype,e=c._mouseInit,a;function d(g,h){if(g.originalEvent.touches.length>1){return;}g.preventDefault();var i=g.originalEvent.changedTouches[0],f=document.createEvent("MouseEvents");f.initMouseEvent(h,true,true,window,1,i.screenX,i.screenY,i.clientX,i.clientY,false,false,false,false,0,null);g.target.dispatchEvent(f);}c._touchStart=function(g){var f=this;if(a||!f._mouseCapture(g.originalEvent.changedTouches[0])){return;}a=true;f._touchMoved=false;d(g,"mouseover");d(g,"mousemove");d(g,"mousedown");};c._touchMove=function(f){if(!a){return;}this._touchMoved=true;d(f,"mousemove");};c._touchEnd=function(f){if(!a){return;}d(f,"mouseup");d(f,"mouseout");if(!this._touchMoved){d(f,"click");}a=false;};c._mouseInit=function(){var f=this;f.element.bind("touchstart",b.proxy(f,"_touchStart")).bind("touchmove",b.proxy(f,"_touchMove")).bind("touchend",b.proxy(f,"_touchEnd"));e.call(f);};})(jQuery);
/*! jquery-dialogextend 2.0.2 2013-08-06 */
(function(){var i;i=jQuery,i.widget("ui.dialogExtend",{version:"2.0.0",modes:{},options:{closable:!0,dblclick:!1,titlebar:!1,icons:{close:"ui-icon-closethick",restore:"ui-icon-newwin"},load:null,beforeRestore:null,restore:null},_create:function(){return this._state="normal",i(this.element[0]).data("ui-dialog")||i.error("jQuery.dialogExtend Error : Only jQuery UI Dialog element is accepted"),this._verifyOptions(),this._initStyles(),this._initButtons(),this._initTitleBar(),this._setState("normal"),this._on("load",function(i){return console.log("test",i)}),this._trigger("load")},_setState:function(t){return i(this.element[0]).removeClass("ui-dialog-"+this._state).addClass("ui-dialog-"+t),this._state=t},_verifyOptions:function(){var t,e,o;!this.options.dblclick||this.options.dblclick in this.modes||(i.error("jQuery.dialogExtend Error : Invalid <dblclick> value '"+this.options.dblclick+"'"),this.options.dblclick=!1),this.options.titlebar&&"none"!==(e=this.options.titlebar)&&"transparent"!==e&&(i.error("jQuery.dialogExtend Error : Invalid <titlebar> value '"+this.options.titlebar+"'"),this.options.titlebar=!1),o=[];for(t in this.modes)this["_verifyOptions_"+t]?o.push(this["_verifyOptions_"+t]()):o.push(void 0);return o},_initStyles:function(){var t,e,o;i(".dialog-extend-css").length||(e="",e+='<style class="dialog-extend-css" type="text/css">',e+=".ui-dialog .ui-dialog-titlebar-buttonpane>a { float: right; }",e+=".ui-dialog .ui-dialog-titlebar-restore { width: 19px; height: 18px; }",e+=".ui-dialog .ui-dialog-titlebar-restore span { display: block; margin: 1px; }",e+=".ui-dialog .ui-dialog-titlebar-restore:hover,",e+=".ui-dialog .ui-dialog-titlebar-restore:focus { padding: 0; }",e+=".ui-dialog .ui-dialog-titlebar ::selection { background-color: transparent; }",e+="</style>",i(e).appendTo("body")),o=[];for(t in this.modes)o.push(this["_initStyles_"+t]());return o},_initButtons:function(){var t,e,o,n,a,l=this;n=i(this.element[0]).dialog("widget").find(".ui-dialog-titlebar"),t=i('<div class="ui-dialog-titlebar-buttonpane"></div>').appendTo(n),t.css({position:"absolute",top:"50%",right:"0.3em","margin-top":"-10px",height:"18px"}),n.find(".ui-dialog-titlebar-close").css({position:"relative","float":"right",top:"auto",right:"auto",margin:0}).find(".ui-icon").removeClass("ui-icon-closethick").addClass(this.options.icons.close).end().appendTo(t).end(),t.append('<a class="ui-dialog-titlebar-restore ui-corner-all ui-state-default" href="#"><span class="ui-icon '+this.options.icons.restore+'">restore</span></a>').find(".ui-dialog-titlebar-restore").attr("role","button").mouseover(function(){return i(this).addClass("ui-state-hover")}).mouseout(function(){return i(this).removeClass("ui-state-hover")}).focus(function(){return i(this).addClass("ui-state-focus")}).blur(function(){return i(this).removeClass("ui-state-focus")}).end().find(".ui-dialog-titlebar-close").toggle(this.options.closable).end().find(".ui-dialog-titlebar-restore").hide().click(function(i){return i.preventDefault(),l.restore()}).end(),a=this.modes;for(o in a)e=a[o],this._initModuleButton(o,e);return n.dblclick(function(){return l.options.dblclick?"normal"!==l._state?l.restore():l[l.options.dblclick]():void 0}).select(function(){return!1})},_initModuleButton:function(t,e){var o,n=this;return o=i(this.element[0]).dialog("widget").find(".ui-dialog-titlebar-buttonpane"),o.append('<a class="ui-dialog-titlebar-'+t+' ui-corner-all ui-state-default" href="#"><span class="ui-icon '+this.options.icons[t]+'">'+t+"</span></a>").find(".ui-dialog-titlebar-"+t).attr("role","button").mouseover(function(){return i(this).addClass("ui-state-hover")}).mouseout(function(){return i(this).removeClass("ui-state-hover")}).focus(function(){return i(this).addClass("ui-state-focus")}).blur(function(){return i(this).removeClass("ui-state-focus")}).end().find(".ui-dialog-titlebar-"+t).toggle(this.options[e.option]).click(function(i){return i.preventDefault(),n[t]()}).end()},_initTitleBar:function(){var t;switch(this.options.titlebar){case!1:return 0;case"none":return i(this.element[0]).dialog("option","draggable")&&(t=i("<div />").addClass("ui-dialog-draggable-handle").css("cursor","move").height(5),i(this.element[0]).dialog("widget").prepend(t).draggable("option","handle",t)),i(this.element[0]).dialog("widget").find(".ui-dialog-titlebar").find(".ui-dialog-title").html("&nbsp;").end().css({"background-color":"transparent","background-image":"none",border:0,position:"absolute",right:0,top:0,"z-index":9999}).end();case"transparent":return i(this.element[0]).dialog("widget").find(".ui-dialog-titlebar").css({"background-color":"transparent","background-image":"none",border:0});default:return i.error("jQuery.dialogExtend Error : Invalid <titlebar> value '"+this.options.titlebar+"'")}},state:function(){return this._state},restore:function(){return this._trigger("beforeRestore"),this._restore(),this._setState("normal"),this._toggleButtons(),this._trigger("restore")},_restore:function(){return"normal"!==this._state?this["_restore_"+this._state]():void 0},_saveSnapshot:function(){return"normal"===this._state?(null==this.options.containerCls&&(this.options.containerCls="body"),this.original_config_resizable=i(this.element[0]).dialog("option","resizable"),this.original_config_draggable=i(this.element[0]).dialog("option","draggable"),this.original_size_height=i(this.element[0]).dialog("widget").outerHeight(),this.original_size_width=i(this.element[0]).dialog("option","width"),this.original_size_maxHeight=i(this.element[0]).dialog("option","maxHeight"),this.original_position_mode=i(this.element[0]).dialog("widget").css("position"),this.original_position_left=i(this.element[0]).dialog("widget").offset().left-i(this.options.containerCls).scrollLeft(),this.original_position_top=i(this.element[0]).dialog("widget").offset().top-i(this.options.containerCls).scrollTop(),this.original_titlebar_wrap=i(this.element[0]).dialog("widget").find(".ui-dialog-titlebar").css("white-space")):void 0},_loadSnapshot:function(){return{config:{resizable:this.original_config_resizable,draggable:this.original_config_draggable},size:{height:this.original_size_height,width:this.original_size_width,maxHeight:this.original_size_maxHeight},position:{mode:this.original_position_mode,left:this.original_position_left,top:this.original_position_top},titlebar:{wrap:this.original_titlebar_wrap}}},_toggleButtons:function(){var t,e,o,n;i(this.element[0]).dialog("widget").find(".ui-dialog-titlebar-restore").toggle("normal"!==this._state).css({right:"1.4em"}).end(),o=this.modes,n=[];for(e in o)t=o[e],n.push(i(this.element[0]).dialog("widget").find(".ui-dialog-titlebar-"+e).toggle(this._state!==t.state&&this.options[t.option]));return n}})}).call(this),function(){var i;i=jQuery,i.extend(!0,i.ui.dialogExtend.prototype,{modes:{collapse:{option:"collapsable",state:"collapsed"}},options:{collapsable:!1,icons:{collapse:"ui-icon-triangle-1-s"},beforeCollapse:null,collapse:null},collapse:function(){var t;return t=i(this.element[0]).dialog("widget").find(".ui-dialog-titlebar").height()+15,this._trigger("beforeCollapse"),"normal"!==this._state&&this._restore(),this._saveSnapshot(),i(this.element[0]).dialog("option",{resizable:!1,height:t,maxHeight:t}).on("dialogclose",this._collapse_restore).hide().dialog("widget").find(".ui-dialog-buttonpane:visible").hide().end().find(".ui-dialog-titlebar").css("white-space","nowrap").end().find(".ui-dialog-content"),this._setState("collapsed"),this._toggleButtons(),this._trigger("collapse")},_restore_collapsed:function(){var t;return t=this._loadSnapshot(),i(this.element[0]).show().dialog("widget").find(".ui-dialog-buttonpane:hidden").show().end().find(".ui-dialog-titlebar").css("white-space",t.titlebar.wrap).end().find(".ui-dialog-content").dialog("option",{resizable:t.config.resizable,height:t.size.height,maxHeight:t.size.maxHeight}).off("dialogclose",this._collapse_restore)},_initStyles_collapse:function(){var t;return i(".dialog-extend-collapse-css").length?void 0:(t="",t+='<style class="dialog-extend-collapse-css" type="text/css">',t+=".ui-dialog .ui-dialog-titlebar-collapse { width: 19px; height: 18px; }",t+=".ui-dialog .ui-dialog-titlebar-collapse span { display: block; margin: 1px; }",t+=".ui-dialog .ui-dialog-titlebar-collapse:hover,",t+=".ui-dialog .ui-dialog-titlebar-collapse:focus { padding: 0; }",t+="</style>",i(t).appendTo("body"))},_collapse_restore:function(){return i(this).dialogExtend("restore")}})}.call(this),function(){var i;i=jQuery,i.extend(!0,i.ui.dialogExtend.prototype,{modes:{maximize:{option:"maximizable",state:"maximized"}},options:{maximizable:!1,icons:{maximize:"ui-icon-extlink"},beforeMaximize:null,maximize:null},maximize:function(){var t,e;return null==this.options.mainMenuHeight&&(this.options.mainMenuHeight=0),null==this.options.statusBarHeight&&(this.options.statusBarHeight=0),t=i(window).height()-(this.options.mainMenuHeight+this.options.statusBarHeight),e=i(window).width(),this._trigger("beforeMaximize"),"normal"!==this._state&&this._restore(),this._saveSnapshot(),i(this.element[0]).dialog("option","draggable")&&i(this.element[0]).dialog("widget").draggable("option","handle",null).find(".ui-dialog-draggable-handle").css("cursor","text").end(),i(this.element[0]).dialog("widget").css("position","fixed").find(".ui-dialog-content").show().dialog("widget").find(".ui-dialog-buttonpane").show().end().find(".ui-dialog-content").dialog("option",{resizable:!1,draggable:!1,height:t,width:e,position:{my:"left top",at:"left top+"+this.options.mainMenuHeight}}),this._setState("maximized"),this._toggleButtons(),this._trigger("maximize")},_restore_maximized:function(){var t;return t=this._loadSnapshot(),i(this.element[0]).dialog("widget").css("position",t.position.mode).find(".ui-dialog-titlebar").css("white-space",t.titlebar.wrap).end().find(".ui-dialog-content").dialog("option",{resizable:t.config.resizable,draggable:t.config.draggable,height:t.size.height,width:t.size.width,maxHeight:t.size.maxHeight,position:{my:"left top",at:"left+"+t.position.left+" top+"+t.position.top}}),i(this.element[0]).dialog("option","draggable")?i(this.element[0]).dialog("widget").draggable("option","handle",i(this.element[0]).dialog("widget").find(".ui-dialog-draggable-handle").length?i(this.element[0]).dialog("widget").find(".ui-dialog-draggable-handle"):".ui-dialog-titlebar").find(".ui-dialog-draggable-handle").css("cursor","move"):void 0},_initStyles_maximize:function(){var t;return i(".dialog-extend-maximize-css").length?void 0:(t="",t+='<style class="dialog-extend-maximize-css" type="text/css">',t+=".ui-dialog .ui-dialog-titlebar-maximize { width: 19px; height: 18px; }",t+=".ui-dialog .ui-dialog-titlebar-maximize span { display: block; margin: 1px; }",t+=".ui-dialog .ui-dialog-titlebar-maximize:hover,",t+=".ui-dialog .ui-dialog-titlebar-maximize:focus { padding: 0; }",t+="</style>",i(t).appendTo("body"))}})}.call(this),function(){var i;i=jQuery,i.extend(!0,i.ui.dialogExtend.prototype,{modes:{minimize:{option:"minimizable",state:"minimized"}},options:{minimizable:!1,minimizeLocation:"left",icons:{minimize:"ui-icon-minus"},beforeMinimize:null,minimize:null},minimize:function(){var t,e,o,n;return e=i(this.element[0]).dialog("widget").find(".ui-dialog-titlebar").height()+15,o=200,t=i("#dialog-extend-fixed-container").length?i("#dialog-extend-fixed-container"):i('<div id="dialog-extend-fixed-container"></div>').appendTo("body"),t.css({position:"fixed",bottom:1,left:1,right:1,"z-index":9999}),n=i("<div/>").css({"float":this.options.minimizeLocation,margin:1}),t.append(n),i(this.element[0]).data("dialog-extend-minimize-overlay",n),this._trigger("beforeMinimize"),this._saveSnapshot(),i(this.element[0]).dialog("option","draggable")&&i(this.element[0]).dialog("widget").draggable("option","handle",null).find(".ui-dialog-draggable-handle").css("cursor","text").end(),i(this.element[0]).dialog("option",{resizable:!1,draggable:!1,height:e,width:o}).on("dialogclose",this._minimize_removeOverlay).dialog("widget").css("position","static").appendTo(n).find(".ui-dialog-content").dialog("widget").find(".ui-dialog-titlebar").each(function(){var t,e,o;return o=i(this),t=o.find(".ui-dialog-titlebar-buttonpane"),e=o.find(".ui-dialog-title"),e.css({overflow:"hidden",width:o.width()-t.width()+10})}).end().find(".ui-dialog-content").hide().dialog("widget").find(".ui-dialog-buttonpane:visible").hide().end().find(".ui-dialog-titlebar").css("white-space","nowrap").end().find(".ui-dialog-content"),this._setState("minimized"),this._toggleButtons(),this._trigger("minimize")},_restore_minimized:function(){var t;return t=this._loadSnapshot(),i(this.element[0]).dialog("widget").appendTo("body").css({"float":"none",margin:0,position:t.position.mode}).find(".ui-dialog-content").dialog("widget").find(".ui-dialog-title").css("width","auto").end().find(".ui-dialog-content").show().dialog("widget").find(".ui-dialog-buttonpane:hidden").show().end().find(".ui-dialog-titlebar").css("white-space",t.titlebar.wrap).end().find(".ui-dialog-content").dialog("option",{resizable:t.config.resizable,draggable:t.config.draggable,height:t.size.height,width:t.size.width,maxHeight:t.size.maxHeight,position:{my:"left top",at:"left+"+t.position.left+" top+"+t.position.top}}).off("dialogclose",this._minimize_removeOverlay),i(this.element[0]).dialog("option","draggable")&&i(this.element[0]).dialog("widget").draggable("option","handle",i(this.element[0]).dialog("widget").find(".ui-dialog-draggable-handle").length?i(this.element[0]).dialog("widget").find(".ui-dialog-draggable-handle"):".ui-dialog-titlebar").find(".ui-dialog-draggable-handle").css("cursor","move"),i(this.element[0]).data("dialog-extend-minimize-overlay").remove(),i(this.element[0]).removeData("dialog-extend-overlay")},_initStyles_minimize:function(){var t;return i(".dialog-extend-minimize-css").length?void 0:(t="",t+='<style class="dialog-extend-minimize-css" type="text/css">',t+=".ui-dialog .ui-dialog-titlebar-minimize { width: 19px; height: 18px; }",t+=".ui-dialog .ui-dialog-titlebar-minimize span { display: block; margin: 1px; }",t+=".ui-dialog .ui-dialog-titlebar-minimize:hover,",t+=".ui-dialog .ui-dialog-titlebar-minimize:focus { padding: 0; }",t+="</style>",i(t).appendTo("body"))},_verifyOptions_minimize:function(){var t;return!this.options.minimizeLocation||"left"!==(t=this.options.minimizeLocation)&&"right"!==t?(i.error("jQuery.dialogExtend Error : Invalid <minimizeLocation> value '"+this.options.minimizeLocation+"'"),this.options.minimizeLocation="left"):void 0},_minimize_removeOverlay:function(){return i(this).dialogExtend("restore"),i(this).dialog("widget").appendTo(i("body")),i(this).data("dialog-extend-minimize-overlay").remove(),i(this).removeData("dialog-extend-overlay")}})}.call(this);
/**
 * Copyright (c) 2007-2013 Ariel Flesler - aflesler<a>gmail<d>com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * @author Ariel Flesler
 * @version 1.4.6
 */
;(function($){var h=$.scrollTo=function(a,b,c){$(window).scrollTo(a,b,c)};h.defaults={axis:'xy',duration:parseFloat($.fn.jquery)>=1.3?0:1,limit:true};h.window=function(a){return $(window)._scrollable()};$.fn._scrollable=function(){return this.map(function(){var a=this,isWin=!a.nodeName||$.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!isWin)return a;var b=(a.contentWindow||a).document||a.ownerDocument||a;return/webkit/i.test(navigator.userAgent)||b.compatMode=='BackCompat'?b.body:b.documentElement})};$.fn.scrollTo=function(e,f,g){if(typeof f=='object'){g=f;f=0}if(typeof g=='function')g={onAfter:g};if(e=='max')e=9e9;g=$.extend({},h.defaults,g);f=f||g.duration;g.queue=g.queue&&g.axis.length>1;if(g.queue)f/=2;g.offset=both(g.offset);g.over=both(g.over);return this._scrollable().each(function(){if(e==null)return;var d=this,$elem=$(d),targ=e,toff,attr={},win=$elem.is('html,body');switch(typeof targ){case'number':case'string':if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(targ)){targ=both(targ);break}targ=$(targ,this);if(!targ.length)return;case'object':if(targ.is||targ.style)toff=(targ=$(targ)).offset()}$.each(g.axis.split(''),function(i,a){var b=a=='x'?'Left':'Top',pos=b.toLowerCase(),key='scroll'+b,old=d[key],max=h.max(d,a);if(toff){attr[key]=toff[pos]+(win?0:old-$elem.offset()[pos]);if(g.margin){attr[key]-=parseInt(targ.css('margin'+b))||0;attr[key]-=parseInt(targ.css('border'+b+'Width'))||0}attr[key]+=g.offset[pos]||0;if(g.over[pos])attr[key]+=targ[a=='x'?'width':'height']()*g.over[pos]}else{var c=targ[pos];attr[key]=c.slice&&c.slice(-1)=='%'?parseFloat(c)/100*max:c}if(g.limit&&/^\d+$/.test(attr[key]))attr[key]=attr[key]<=0?0:Math.min(attr[key],max);if(!i&&g.queue){if(old!=attr[key])animate(g.onAfterFirst);delete attr[key]}});animate(g.onAfter);function animate(a){$elem.animate(attr,f,g.easing,a&&function(){a.call(this,targ,g)})}}).end()};h.max=function(a,b){var c=b=='x'?'Width':'Height',scroll='scroll'+c;if(!$(a).is('html,body'))return a[scroll]-$(a)[c.toLowerCase()]();var d='client'+c,html=a.ownerDocument.documentElement,body=a.ownerDocument.body;return Math.max(html[scroll],body[scroll])-Math.min(html[d],body[d])};function both(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);

var Handlebars = (function() {
// handlebars/safe-string.js
var __module4__ = (function() {
  "use strict";
  var __exports__;
  // Build out our basic SafeString type
  function SafeString(string) {
    this.string = string;
  }

  SafeString.prototype.toString = function() {
    return "" + this.string;
  };

  __exports__ = SafeString;
  return __exports__;
})();

// handlebars/utils.js
var __module3__ = (function(__dependency1__) {
  "use strict";
  var __exports__ = {};
  var SafeString = __dependency1__;

  var isArray = Array.isArray;

  var escape = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "`": "&#x60;"
  };

  var badChars = /[&<>"'`]/g;
  var possible = /[&<>"'`]/;

  function escapeChar(chr) {
    return escape[chr] || "&amp;";
  }

  function extend(obj, value) {
    for(var key in value) {
      if(value.hasOwnProperty(key)) {
        obj[key] = value[key];
      }
    }
  }

  __exports__.extend = extend;function escapeExpression(string) {
    // don't escape SafeStrings, since they're already safe
    if (string instanceof SafeString) {
      return string.toString();
    } else if (!string && string !== 0) {
      return "";
    }

    // Force a string conversion as this will be done by the append regardless and
    // the regex test will do this transparently behind the scenes, causing issues if
    // an object's to string has escaped characters in it.
    string = "" + string;

    if(!possible.test(string)) { return string; }
    return string.replace(badChars, escapeChar);
  }

  __exports__.escapeExpression = escapeExpression;function isEmpty(value) {
    if (!value && value !== 0) {
      return true;
    } else if (isArray(value) && value.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  __exports__.isEmpty = isEmpty;
  return __exports__;
})(__module4__);

// handlebars/exception.js
var __module5__ = (function() {
  "use strict";
  var __exports__;

  var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];

  function Exception(/* message */) {
    var tmp = Error.prototype.constructor.apply(this, arguments);

    // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
    for (var idx = 0; idx < errorProps.length; idx++) {
      this[errorProps[idx]] = tmp[errorProps[idx]];
    }
  }

  Exception.prototype = new Error();

  __exports__ = Exception;
  return __exports__;
})();

// handlebars/base.js
var __module2__ = (function(__dependency1__, __dependency2__) {
  "use strict";
  var __exports__ = {};
  /*globals Exception, Utils */
  var Utils = __dependency1__;
  var Exception = __dependency2__;

  var VERSION = "1.1.0";
  __exports__.VERSION = VERSION;var COMPILER_REVISION = 4;
  __exports__.COMPILER_REVISION = COMPILER_REVISION;
  var REVISION_CHANGES = {
    1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
    2: '== 1.0.0-rc.3',
    3: '== 1.0.0-rc.4',
    4: '>= 1.0.0'
  };
  __exports__.REVISION_CHANGES = REVISION_CHANGES;
  var toString = Object.prototype.toString,
      objectType = '[object Object]';

  // Sourced from lodash
  // https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
  var isFunction = function(value) {
    return typeof value === 'function';
  };
  // fallback for older versions of Chrome and Safari
  if (isFunction(/x/)) {
    isFunction = function(value) {
      return typeof value === 'function' && toString.call(value) === '[object Function]';
    };
  }

  function isArray(value) {
    return (value && typeof value === 'object') ? toString.call(value) === '[object Array]' : false;
  }

  function HandlebarsEnvironment(helpers, partials) {
    this.helpers = helpers || {};
    this.partials = partials || {};

    registerDefaultHelpers(this);
  }

  __exports__.HandlebarsEnvironment = HandlebarsEnvironment;HandlebarsEnvironment.prototype = {
    constructor: HandlebarsEnvironment,

    logger: logger,
    log: log,

    registerHelper: function(name, fn, inverse) {
      if (toString.call(name) === objectType) {
        if (inverse || fn) { throw new Exception('Arg not supported with multiple helpers'); }
        Utils.extend(this.helpers, name);
      } else {
        if (inverse) { fn.not = inverse; }
        this.helpers[name] = fn;
      }
    },

    registerPartial: function(name, str) {
      if (toString.call(name) === objectType) {
        Utils.extend(this.partials,  name);
      } else {
        this.partials[name] = str;
      }
    }
  };

  function registerDefaultHelpers(instance) {
    instance.registerHelper('helperMissing', function(arg) {
      if(arguments.length === 2) {
        return undefined;
      } else {
        throw new Error("Missing helper: '" + arg + "'");
      }
    });

    instance.registerHelper('blockHelperMissing', function(context, options) {
      var inverse = options.inverse || function() {}, fn = options.fn;

      if (isFunction(context)) { context = context.call(this); }

      if(context === true) {
        return fn(this);
      } else if(context === false || context == null) {
        return inverse(this);
      } else if (isArray(context)) {
        if(context.length > 0) {
          return instance.helpers.each(context, options);
        } else {
          return inverse(this);
        }
      } else {
        return fn(context);
      }
    });

    instance.registerHelper('each', function(context, options) {
      var fn = options.fn, inverse = options.inverse;
      var i = 0, ret = "", data;

      if (isFunction(context)) { context = context.call(this); }

      if (options.data) {
        data = createFrame(options.data);
      }

      if(context && typeof context === 'object') {
        if (isArray(context)) {
          for(var j = context.length; i<j; i++) {
            if (data) {
              data.index = i;
              data.first = (i === 0)
              data.last  = (i === (context.length-1));
            }
            ret = ret + fn(context[i], { data: data });
          }
        } else {
          for(var key in context) {
            if(context.hasOwnProperty(key)) {
              if(data) { data.key = key; }
              ret = ret + fn(context[key], {data: data});
              i++;
            }
          }
        }
      }

      if(i === 0){
        ret = inverse(this);
      }

      return ret;
    });

    instance.registerHelper('if', function(conditional, options) {
      if (isFunction(conditional)) { conditional = conditional.call(this); }

      // Default behavior is to render the positive path if the value is truthy and not empty.
      // The `includeZero` option may be set to treat the condtional as purely not empty based on the
      // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
      if ((!options.hash.includeZero && !conditional) || Utils.isEmpty(conditional)) {
        return options.inverse(this);
      } else {
        return options.fn(this);
      }
    });

    instance.registerHelper('unless', function(conditional, options) {
      return instance.helpers['if'].call(this, conditional, {fn: options.inverse, inverse: options.fn, hash: options.hash});
    });

    instance.registerHelper('with', function(context, options) {
      if (isFunction(context)) { context = context.call(this); }

      if (!Utils.isEmpty(context)) return options.fn(context);
    });

    instance.registerHelper('log', function(context, options) {
      var level = options.data && options.data.level != null ? parseInt(options.data.level, 10) : 1;
      instance.log(level, context);
    });
  }

  var logger = {
    methodMap: { 0: 'debug', 1: 'info', 2: 'warn', 3: 'error' },

    // State enum
    DEBUG: 0,
    INFO: 1,
    WARN: 2,
    ERROR: 3,
    level: 3,

    // can be overridden in the host environment
    log: function(level, obj) {
      if (logger.level <= level) {
        var method = logger.methodMap[level];
        if (typeof console !== 'undefined' && console[method]) {
          console[method].call(console, obj);
        }
      }
    }
  };
  __exports__.logger = logger;
  function log(level, obj) { logger.log(level, obj); }

  __exports__.log = log;var createFrame = function(object) {
    var obj = {};
    Utils.extend(obj, object);
    return obj;
  };
  __exports__.createFrame = createFrame;
  return __exports__;
})(__module3__, __module5__);

// handlebars/runtime.js
var __module6__ = (function(__dependency1__, __dependency2__, __dependency3__) {
  "use strict";
  var __exports__ = {};
  /*global Utils */
  var Utils = __dependency1__;
  var Exception = __dependency2__;
  var COMPILER_REVISION = __dependency3__.COMPILER_REVISION;
  var REVISION_CHANGES = __dependency3__.REVISION_CHANGES;

  function checkRevision(compilerInfo) {
    var compilerRevision = compilerInfo && compilerInfo[0] || 1,
        currentRevision = COMPILER_REVISION;

    if (compilerRevision !== currentRevision) {
      if (compilerRevision < currentRevision) {
        var runtimeVersions = REVISION_CHANGES[currentRevision],
            compilerVersions = REVISION_CHANGES[compilerRevision];
        throw new Error("Template was precompiled with an older version of Handlebars than the current runtime. "+
              "Please update your precompiler to a newer version ("+runtimeVersions+") or downgrade your runtime to an older version ("+compilerVersions+").");
      } else {
        // Use the embedded version info since the runtime doesn't know about this revision yet
        throw new Error("Template was precompiled with a newer version of Handlebars than the current runtime. "+
              "Please update your runtime to a newer version ("+compilerInfo[1]+").");
      }
    }
  }

  // TODO: Remove this line and break up compilePartial

  function template(templateSpec, env) {
    if (!env) {
      throw new Error("No environment passed to template");
    }

    var invokePartialWrapper;
    if (env.compile) {
      invokePartialWrapper = function(partial, name, context, helpers, partials, data) {
        // TODO : Check this for all inputs and the options handling (partial flag, etc). This feels
        // like there should be a common exec path
        var result = invokePartial.apply(this, arguments);
        if (result) { return result; }

        var options = { helpers: helpers, partials: partials, data: data };
        partials[name] = env.compile(partial, { data: data !== undefined }, env);
        return partials[name](context, options);
      };
    } else {
      invokePartialWrapper = function(partial, name /* , context, helpers, partials, data */) {
        var result = invokePartial.apply(this, arguments);
        if (result) { return result; }
        throw new Exception("The partial " + name + " could not be compiled when running in runtime-only mode");
      };
    }

    // Just add water
    var container = {
      escapeExpression: Utils.escapeExpression,
      invokePartial: invokePartialWrapper,
      programs: [],
      program: function(i, fn, data) {
        var programWrapper = this.programs[i];
        if(data) {
          programWrapper = program(i, fn, data);
        } else if (!programWrapper) {
          programWrapper = this.programs[i] = program(i, fn);
        }
        return programWrapper;
      },
      merge: function(param, common) {
        var ret = param || common;

        if (param && common && (param !== common)) {
          ret = {};
          Utils.extend(ret, common);
          Utils.extend(ret, param);
        }
        return ret;
      },
      programWithDepth: programWithDepth,
      noop: noop,
      compilerInfo: null
    };

    return function(context, options) {
      options = options || {};
      var namespace = options.partial ? options : env,
          helpers,
          partials;

      if (!options.partial) {
        helpers = options.helpers;
        partials = options.partials;
      }
      var result = templateSpec.call(
            container,
            namespace, context,
            helpers,
            partials,
            options.data);

      if (!options.partial) {
        checkRevision(container.compilerInfo);
      }

      return result;
    };
  }

  __exports__.template = template;function programWithDepth(i, fn, data /*, $depth */) {
    var args = Array.prototype.slice.call(arguments, 3);

    var prog = function(context, options) {
      options = options || {};

      return fn.apply(this, [context, options.data || data].concat(args));
    };
    prog.program = i;
    prog.depth = args.length;
    return prog;
  }

  __exports__.programWithDepth = programWithDepth;function program(i, fn, data) {
    var prog = function(context, options) {
      options = options || {};

      return fn(context, options.data || data);
    };
    prog.program = i;
    prog.depth = 0;
    return prog;
  }

  __exports__.program = program;function invokePartial(partial, name, context, helpers, partials, data) {
    var options = { partial: true, helpers: helpers, partials: partials, data: data };

    if(partial === undefined) {
      throw new Exception("The partial " + name + " could not be found");
    } else if(partial instanceof Function) {
      return partial(context, options);
    }
  }

  __exports__.invokePartial = invokePartial;function noop() { return ""; }

  __exports__.noop = noop;
  return __exports__;
})(__module3__, __module5__, __module2__);

// handlebars.runtime.js
var __module1__ = (function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __dependency5__) {
  "use strict";
  var __exports__;
  var base = __dependency1__;

  // Each of these augment the Handlebars object. No need to setup here.
  // (This is done to easily share code between commonjs and browse envs)
  var SafeString = __dependency2__;
  var Exception = __dependency3__;
  var Utils = __dependency4__;
  var runtime = __dependency5__;

  // For compatibility and usage outside of module systems, make the Handlebars object a namespace
  var create = function() {
    var hb = new base.HandlebarsEnvironment();

    Utils.extend(hb, base);
    hb.SafeString = SafeString;
    hb.Exception = Exception;
    hb.Utils = Utils;

    hb.VM = runtime;
    hb.template = function(spec) {
      return runtime.template(spec, hb);
    };

    return hb;
  };

  var Handlebars = create();
  Handlebars.create = create;

  __exports__ = Handlebars;
  return __exports__;
})(__module2__, __module4__, __module5__, __module3__, __module6__);

// handlebars/compiler/ast.js
var __module7__ = (function(__dependency1__) {
  "use strict";
  var __exports__ = {};
  var Exception = __dependency1__;

  function ProgramNode(statements, inverseStrip, inverse) {
    this.type = "program";
    this.statements = statements;
    this.strip = {};

    if(inverse) {
      this.inverse = new ProgramNode(inverse, inverseStrip);
      this.strip.right = inverseStrip.left;
    } else if (inverseStrip) {
      this.strip.left = inverseStrip.right;
    }
  }

  __exports__.ProgramNode = ProgramNode;function MustacheNode(rawParams, hash, open, strip) {
    this.type = "mustache";
    this.hash = hash;
    this.strip = strip;

    var escapeFlag = open[3] || open[2];
    this.escaped = escapeFlag !== '{' && escapeFlag !== '&';

    var id = this.id = rawParams[0];
    var params = this.params = rawParams.slice(1);

    // a mustache is an eligible helper if:
    // * its id is simple (a single part, not `this` or `..`)
    var eligibleHelper = this.eligibleHelper = id.isSimple;

    // a mustache is definitely a helper if:
    // * it is an eligible helper, and
    // * it has at least one parameter or hash segment
    this.isHelper = eligibleHelper && (params.length || hash);

    // if a mustache is an eligible helper but not a definite
    // helper, it is ambiguous, and will be resolved in a later
    // pass or at runtime.
  }

  __exports__.MustacheNode = MustacheNode;function PartialNode(partialName, context, strip) {
    this.type         = "partial";
    this.partialName  = partialName;
    this.context      = context;
    this.strip = strip;
  }

  __exports__.PartialNode = PartialNode;function BlockNode(mustache, program, inverse, close) {
    if(mustache.id.original !== close.path.original) {
      throw new Exception(mustache.id.original + " doesn't match " + close.path.original);
    }

    this.type = "block";
    this.mustache = mustache;
    this.program  = program;
    this.inverse  = inverse;

    this.strip = {
      left: mustache.strip.left,
      right: close.strip.right
    };

    (program || inverse).strip.left = mustache.strip.right;
    (inverse || program).strip.right = close.strip.left;

    if (inverse && !program) {
      this.isInverse = true;
    }
  }

  __exports__.BlockNode = BlockNode;function ContentNode(string) {
    this.type = "content";
    this.string = string;
  }

  __exports__.ContentNode = ContentNode;function HashNode(pairs) {
    this.type = "hash";
    this.pairs = pairs;
  }

  __exports__.HashNode = HashNode;function IdNode(parts) {
    this.type = "ID";

    var original = "",
        dig = [],
        depth = 0;

    for(var i=0,l=parts.length; i<l; i++) {
      var part = parts[i].part;
      original += (parts[i].separator || '') + part;

      if (part === ".." || part === "." || part === "this") {
        if (dig.length > 0) { throw new Exception("Invalid path: " + original); }
        else if (part === "..") { depth++; }
        else { this.isScoped = true; }
      }
      else { dig.push(part); }
    }

    this.original = original;
    this.parts    = dig;
    this.string   = dig.join('.');
    this.depth    = depth;

    // an ID is simple if it only has one part, and that part is not
    // `..` or `this`.
    this.isSimple = parts.length === 1 && !this.isScoped && depth === 0;

    this.stringModeValue = this.string;
  }

  __exports__.IdNode = IdNode;function PartialNameNode(name) {
    this.type = "PARTIAL_NAME";
    this.name = name.original;
  }

  __exports__.PartialNameNode = PartialNameNode;function DataNode(id) {
    this.type = "DATA";
    this.id = id;
  }

  __exports__.DataNode = DataNode;function StringNode(string) {
    this.type = "STRING";
    this.original =
      this.string =
      this.stringModeValue = string;
  }

  __exports__.StringNode = StringNode;function IntegerNode(integer) {
    this.type = "INTEGER";
    this.original =
      this.integer = integer;
    this.stringModeValue = Number(integer);
  }

  __exports__.IntegerNode = IntegerNode;function BooleanNode(bool) {
    this.type = "BOOLEAN";
    this.bool = bool;
    this.stringModeValue = bool === "true";
  }

  __exports__.BooleanNode = BooleanNode;function CommentNode(comment) {
    this.type = "comment";
    this.comment = comment;
  }

  __exports__.CommentNode = CommentNode;
  return __exports__;
})(__module5__);

// handlebars/compiler/parser.js
var __module9__ = (function() {
  "use strict";
  var __exports__;
  /* Jison generated parser */
  var handlebars = (function(){
  var parser = {trace: function trace() { },
  yy: {},
  symbols_: {"error":2,"root":3,"statements":4,"EOF":5,"program":6,"simpleInverse":7,"statement":8,"openInverse":9,"closeBlock":10,"openBlock":11,"mustache":12,"partial":13,"CONTENT":14,"COMMENT":15,"OPEN_BLOCK":16,"inMustache":17,"CLOSE":18,"OPEN_INVERSE":19,"OPEN_ENDBLOCK":20,"path":21,"OPEN":22,"OPEN_UNESCAPED":23,"CLOSE_UNESCAPED":24,"OPEN_PARTIAL":25,"partialName":26,"partial_option0":27,"inMustache_repetition0":28,"inMustache_option0":29,"dataName":30,"param":31,"STRING":32,"INTEGER":33,"BOOLEAN":34,"hash":35,"hash_repetition_plus0":36,"hashSegment":37,"ID":38,"EQUALS":39,"DATA":40,"pathSegments":41,"SEP":42,"$accept":0,"$end":1},
  terminals_: {2:"error",5:"EOF",14:"CONTENT",15:"COMMENT",16:"OPEN_BLOCK",18:"CLOSE",19:"OPEN_INVERSE",20:"OPEN_ENDBLOCK",22:"OPEN",23:"OPEN_UNESCAPED",24:"CLOSE_UNESCAPED",25:"OPEN_PARTIAL",32:"STRING",33:"INTEGER",34:"BOOLEAN",38:"ID",39:"EQUALS",40:"DATA",42:"SEP"},
  productions_: [0,[3,2],[6,2],[6,3],[6,2],[6,1],[6,1],[6,0],[4,1],[4,2],[8,3],[8,3],[8,1],[8,1],[8,1],[8,1],[11,3],[9,3],[10,3],[12,3],[12,3],[13,4],[7,2],[17,3],[17,1],[31,1],[31,1],[31,1],[31,1],[31,1],[35,1],[37,3],[26,1],[26,1],[26,1],[30,2],[21,1],[41,3],[41,1],[27,0],[27,1],[28,0],[28,2],[29,0],[29,1],[36,1],[36,2]],
  performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

  var $0 = $$.length - 1;
  switch (yystate) {
  case 1: return new yy.ProgramNode($$[$0-1]);
  break;
  case 2:this.$ = new yy.ProgramNode([], $$[$0-1], $$[$0]);
  break;
  case 3:this.$ = new yy.ProgramNode($$[$0-2], $$[$0-1], $$[$0]);
  break;
  case 4:this.$ = new yy.ProgramNode($$[$0-1], $$[$0], []);
  break;
  case 5:this.$ = new yy.ProgramNode($$[$0]);
  break;
  case 6:this.$ = new yy.ProgramNode([]);
  break;
  case 7:this.$ = new yy.ProgramNode([]);
  break;
  case 8:this.$ = [$$[$0]];
  break;
  case 9: $$[$0-1].push($$[$0]); this.$ = $$[$0-1];
  break;
  case 10:this.$ = new yy.BlockNode($$[$0-2], $$[$0-1].inverse, $$[$0-1], $$[$0]);
  break;
  case 11:this.$ = new yy.BlockNode($$[$0-2], $$[$0-1], $$[$0-1].inverse, $$[$0]);
  break;
  case 12:this.$ = $$[$0];
  break;
  case 13:this.$ = $$[$0];
  break;
  case 14:this.$ = new yy.ContentNode($$[$0]);
  break;
  case 15:this.$ = new yy.CommentNode($$[$0]);
  break;
  case 16:this.$ = new yy.MustacheNode($$[$0-1][0], $$[$0-1][1], $$[$0-2], stripFlags($$[$0-2], $$[$0]));
  break;
  case 17:this.$ = new yy.MustacheNode($$[$0-1][0], $$[$0-1][1], $$[$0-2], stripFlags($$[$0-2], $$[$0]));
  break;
  case 18:this.$ = {path: $$[$0-1], strip: stripFlags($$[$0-2], $$[$0])};
  break;
  case 19:this.$ = new yy.MustacheNode($$[$0-1][0], $$[$0-1][1], $$[$0-2], stripFlags($$[$0-2], $$[$0]));
  break;
  case 20:this.$ = new yy.MustacheNode($$[$0-1][0], $$[$0-1][1], $$[$0-2], stripFlags($$[$0-2], $$[$0]));
  break;
  case 21:this.$ = new yy.PartialNode($$[$0-2], $$[$0-1], stripFlags($$[$0-3], $$[$0]));
  break;
  case 22:this.$ = stripFlags($$[$0-1], $$[$0]);
  break;
  case 23:this.$ = [[$$[$0-2]].concat($$[$0-1]), $$[$0]];
  break;
  case 24:this.$ = [[$$[$0]], null];
  break;
  case 25:this.$ = $$[$0];
  break;
  case 26:this.$ = new yy.StringNode($$[$0]);
  break;
  case 27:this.$ = new yy.IntegerNode($$[$0]);
  break;
  case 28:this.$ = new yy.BooleanNode($$[$0]);
  break;
  case 29:this.$ = $$[$0];
  break;
  case 30:this.$ = new yy.HashNode($$[$0]);
  break;
  case 31:this.$ = [$$[$0-2], $$[$0]];
  break;
  case 32:this.$ = new yy.PartialNameNode($$[$0]);
  break;
  case 33:this.$ = new yy.PartialNameNode(new yy.StringNode($$[$0]));
  break;
  case 34:this.$ = new yy.PartialNameNode(new yy.IntegerNode($$[$0]));
  break;
  case 35:this.$ = new yy.DataNode($$[$0]);
  break;
  case 36:this.$ = new yy.IdNode($$[$0]);
  break;
  case 37: $$[$0-2].push({part: $$[$0], separator: $$[$0-1]}); this.$ = $$[$0-2];
  break;
  case 38:this.$ = [{part: $$[$0]}];
  break;
  case 41:this.$ = [];
  break;
  case 42:$$[$0-1].push($$[$0]);
  break;
  case 45:this.$ = [$$[$0]];
  break;
  case 46:$$[$0-1].push($$[$0]);
  break;
  }
  },
  table: [{3:1,4:2,8:3,9:4,11:5,12:6,13:7,14:[1,8],15:[1,9],16:[1,11],19:[1,10],22:[1,12],23:[1,13],25:[1,14]},{1:[3]},{5:[1,15],8:16,9:4,11:5,12:6,13:7,14:[1,8],15:[1,9],16:[1,11],19:[1,10],22:[1,12],23:[1,13],25:[1,14]},{5:[2,8],14:[2,8],15:[2,8],16:[2,8],19:[2,8],20:[2,8],22:[2,8],23:[2,8],25:[2,8]},{4:19,6:17,7:18,8:3,9:4,11:5,12:6,13:7,14:[1,8],15:[1,9],16:[1,11],19:[1,20],20:[2,7],22:[1,12],23:[1,13],25:[1,14]},{4:19,6:21,7:18,8:3,9:4,11:5,12:6,13:7,14:[1,8],15:[1,9],16:[1,11],19:[1,20],20:[2,7],22:[1,12],23:[1,13],25:[1,14]},{5:[2,12],14:[2,12],15:[2,12],16:[2,12],19:[2,12],20:[2,12],22:[2,12],23:[2,12],25:[2,12]},{5:[2,13],14:[2,13],15:[2,13],16:[2,13],19:[2,13],20:[2,13],22:[2,13],23:[2,13],25:[2,13]},{5:[2,14],14:[2,14],15:[2,14],16:[2,14],19:[2,14],20:[2,14],22:[2,14],23:[2,14],25:[2,14]},{5:[2,15],14:[2,15],15:[2,15],16:[2,15],19:[2,15],20:[2,15],22:[2,15],23:[2,15],25:[2,15]},{17:22,21:23,30:24,38:[1,27],40:[1,26],41:25},{17:28,21:23,30:24,38:[1,27],40:[1,26],41:25},{17:29,21:23,30:24,38:[1,27],40:[1,26],41:25},{17:30,21:23,30:24,38:[1,27],40:[1,26],41:25},{21:32,26:31,32:[1,33],33:[1,34],38:[1,27],41:25},{1:[2,1]},{5:[2,9],14:[2,9],15:[2,9],16:[2,9],19:[2,9],20:[2,9],22:[2,9],23:[2,9],25:[2,9]},{10:35,20:[1,36]},{4:37,8:3,9:4,11:5,12:6,13:7,14:[1,8],15:[1,9],16:[1,11],19:[1,10],20:[2,6],22:[1,12],23:[1,13],25:[1,14]},{7:38,8:16,9:4,11:5,12:6,13:7,14:[1,8],15:[1,9],16:[1,11],19:[1,20],20:[2,5],22:[1,12],23:[1,13],25:[1,14]},{17:22,18:[1,39],21:23,30:24,38:[1,27],40:[1,26],41:25},{10:40,20:[1,36]},{18:[1,41]},{18:[2,41],24:[2,41],28:42,32:[2,41],33:[2,41],34:[2,41],38:[2,41],40:[2,41]},{18:[2,24],24:[2,24]},{18:[2,36],24:[2,36],32:[2,36],33:[2,36],34:[2,36],38:[2,36],40:[2,36],42:[1,43]},{21:44,38:[1,27],41:25},{18:[2,38],24:[2,38],32:[2,38],33:[2,38],34:[2,38],38:[2,38],40:[2,38],42:[2,38]},{18:[1,45]},{18:[1,46]},{24:[1,47]},{18:[2,39],21:49,27:48,38:[1,27],41:25},{18:[2,32],38:[2,32]},{18:[2,33],38:[2,33]},{18:[2,34],38:[2,34]},{5:[2,10],14:[2,10],15:[2,10],16:[2,10],19:[2,10],20:[2,10],22:[2,10],23:[2,10],25:[2,10]},{21:50,38:[1,27],41:25},{8:16,9:4,11:5,12:6,13:7,14:[1,8],15:[1,9],16:[1,11],19:[1,10],20:[2,2],22:[1,12],23:[1,13],25:[1,14]},{4:51,8:3,9:4,11:5,12:6,13:7,14:[1,8],15:[1,9],16:[1,11],19:[1,10],20:[2,4],22:[1,12],23:[1,13],25:[1,14]},{14:[2,22],15:[2,22],16:[2,22],19:[2,22],20:[2,22],22:[2,22],23:[2,22],25:[2,22]},{5:[2,11],14:[2,11],15:[2,11],16:[2,11],19:[2,11],20:[2,11],22:[2,11],23:[2,11],25:[2,11]},{14:[2,17],15:[2,17],16:[2,17],19:[2,17],20:[2,17],22:[2,17],23:[2,17],25:[2,17]},{18:[2,43],21:55,24:[2,43],29:52,30:59,31:53,32:[1,56],33:[1,57],34:[1,58],35:54,36:60,37:61,38:[1,62],40:[1,26],41:25},{38:[1,63]},{18:[2,35],24:[2,35],32:[2,35],33:[2,35],34:[2,35],38:[2,35],40:[2,35]},{14:[2,16],15:[2,16],16:[2,16],19:[2,16],20:[2,16],22:[2,16],23:[2,16],25:[2,16]},{5:[2,19],14:[2,19],15:[2,19],16:[2,19],19:[2,19],20:[2,19],22:[2,19],23:[2,19],25:[2,19]},{5:[2,20],14:[2,20],15:[2,20],16:[2,20],19:[2,20],20:[2,20],22:[2,20],23:[2,20],25:[2,20]},{18:[1,64]},{18:[2,40]},{18:[1,65]},{8:16,9:4,11:5,12:6,13:7,14:[1,8],15:[1,9],16:[1,11],19:[1,10],20:[2,3],22:[1,12],23:[1,13],25:[1,14]},{18:[2,23],24:[2,23]},{18:[2,42],24:[2,42],32:[2,42],33:[2,42],34:[2,42],38:[2,42],40:[2,42]},{18:[2,44],24:[2,44]},{18:[2,25],24:[2,25],32:[2,25],33:[2,25],34:[2,25],38:[2,25],40:[2,25]},{18:[2,26],24:[2,26],32:[2,26],33:[2,26],34:[2,26],38:[2,26],40:[2,26]},{18:[2,27],24:[2,27],32:[2,27],33:[2,27],34:[2,27],38:[2,27],40:[2,27]},{18:[2,28],24:[2,28],32:[2,28],33:[2,28],34:[2,28],38:[2,28],40:[2,28]},{18:[2,29],24:[2,29],32:[2,29],33:[2,29],34:[2,29],38:[2,29],40:[2,29]},{18:[2,30],24:[2,30],37:66,38:[1,67]},{18:[2,45],24:[2,45],38:[2,45]},{18:[2,38],24:[2,38],32:[2,38],33:[2,38],34:[2,38],38:[2,38],39:[1,68],40:[2,38],42:[2,38]},{18:[2,37],24:[2,37],32:[2,37],33:[2,37],34:[2,37],38:[2,37],40:[2,37],42:[2,37]},{5:[2,21],14:[2,21],15:[2,21],16:[2,21],19:[2,21],20:[2,21],22:[2,21],23:[2,21],25:[2,21]},{5:[2,18],14:[2,18],15:[2,18],16:[2,18],19:[2,18],20:[2,18],22:[2,18],23:[2,18],25:[2,18]},{18:[2,46],24:[2,46],38:[2,46]},{39:[1,68]},{21:55,30:59,31:69,32:[1,56],33:[1,57],34:[1,58],38:[1,27],40:[1,26],41:25},{18:[2,31],24:[2,31],38:[2,31]}],
  defaultActions: {15:[2,1],49:[2,40]},
  parseError: function parseError(str, hash) {
      throw new Error(str);
  },
  parse: function parse(input) {
      var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = "", yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
      this.lexer.setInput(input);
      this.lexer.yy = this.yy;
      this.yy.lexer = this.lexer;
      this.yy.parser = this;
      if (typeof this.lexer.yylloc == "undefined")
          this.lexer.yylloc = {};
      var yyloc = this.lexer.yylloc;
      lstack.push(yyloc);
      var ranges = this.lexer.options && this.lexer.options.ranges;
      if (typeof this.yy.parseError === "function")
          this.parseError = this.yy.parseError;
      function popStack(n) {
          stack.length = stack.length - 2 * n;
          vstack.length = vstack.length - n;
          lstack.length = lstack.length - n;
      }
      function lex() {
          var token;
          token = self.lexer.lex() || 1;
          if (typeof token !== "number") {
              token = self.symbols_[token] || token;
          }
          return token;
      }
      var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
      while (true) {
          state = stack[stack.length - 1];
          if (this.defaultActions[state]) {
              action = this.defaultActions[state];
          } else {
              if (symbol === null || typeof symbol == "undefined") {
                  symbol = lex();
              }
              action = table[state] && table[state][symbol];
          }
          if (typeof action === "undefined" || !action.length || !action[0]) {
              var errStr = "";
              if (!recovering) {
                  expected = [];
                  for (p in table[state])
                      if (this.terminals_[p] && p > 2) {
                          expected.push("'" + this.terminals_[p] + "'");
                      }
                  if (this.lexer.showPosition) {
                      errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
                  } else {
                      errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1?"end of input":"'" + (this.terminals_[symbol] || symbol) + "'");
                  }
                  this.parseError(errStr, {text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected});
              }
          }
          if (action[0] instanceof Array && action.length > 1) {
              throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
          }
          switch (action[0]) {
          case 1:
              stack.push(symbol);
              vstack.push(this.lexer.yytext);
              lstack.push(this.lexer.yylloc);
              stack.push(action[1]);
              symbol = null;
              if (!preErrorSymbol) {
                  yyleng = this.lexer.yyleng;
                  yytext = this.lexer.yytext;
                  yylineno = this.lexer.yylineno;
                  yyloc = this.lexer.yylloc;
                  if (recovering > 0)
                      recovering--;
              } else {
                  symbol = preErrorSymbol;
                  preErrorSymbol = null;
              }
              break;
          case 2:
              len = this.productions_[action[1]][1];
              yyval.$ = vstack[vstack.length - len];
              yyval._$ = {first_line: lstack[lstack.length - (len || 1)].first_line, last_line: lstack[lstack.length - 1].last_line, first_column: lstack[lstack.length - (len || 1)].first_column, last_column: lstack[lstack.length - 1].last_column};
              if (ranges) {
                  yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
              }
              r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
              if (typeof r !== "undefined") {
                  return r;
              }
              if (len) {
                  stack = stack.slice(0, -1 * len * 2);
                  vstack = vstack.slice(0, -1 * len);
                  lstack = lstack.slice(0, -1 * len);
              }
              stack.push(this.productions_[action[1]][0]);
              vstack.push(yyval.$);
              lstack.push(yyval._$);
              newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
              stack.push(newState);
              break;
          case 3:
              return true;
          }
      }
      return true;
  }
  };


  function stripFlags(open, close) {
    return {
      left: open[2] === '~',
      right: close[0] === '~' || close[1] === '~'
    };
  }

  /* Jison generated lexer */
  var lexer = (function(){
  var lexer = ({EOF:1,
  parseError:function parseError(str, hash) {
          if (this.yy.parser) {
              this.yy.parser.parseError(str, hash);
          } else {
              throw new Error(str);
          }
      },
  setInput:function (input) {
          this._input = input;
          this._more = this._less = this.done = false;
          this.yylineno = this.yyleng = 0;
          this.yytext = this.matched = this.match = '';
          this.conditionStack = ['INITIAL'];
          this.yylloc = {first_line:1,first_column:0,last_line:1,last_column:0};
          if (this.options.ranges) this.yylloc.range = [0,0];
          this.offset = 0;
          return this;
      },
  input:function () {
          var ch = this._input[0];
          this.yytext += ch;
          this.yyleng++;
          this.offset++;
          this.match += ch;
          this.matched += ch;
          var lines = ch.match(/(?:\r\n?|\n).*/g);
          if (lines) {
              this.yylineno++;
              this.yylloc.last_line++;
          } else {
              this.yylloc.last_column++;
          }
          if (this.options.ranges) this.yylloc.range[1]++;

          this._input = this._input.slice(1);
          return ch;
      },
  unput:function (ch) {
          var len = ch.length;
          var lines = ch.split(/(?:\r\n?|\n)/g);

          this._input = ch + this._input;
          this.yytext = this.yytext.substr(0, this.yytext.length-len-1);
          //this.yyleng -= len;
          this.offset -= len;
          var oldLines = this.match.split(/(?:\r\n?|\n)/g);
          this.match = this.match.substr(0, this.match.length-1);
          this.matched = this.matched.substr(0, this.matched.length-1);

          if (lines.length-1) this.yylineno -= lines.length-1;
          var r = this.yylloc.range;

          this.yylloc = {first_line: this.yylloc.first_line,
            last_line: this.yylineno+1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length:
                this.yylloc.first_column - len
            };

          if (this.options.ranges) {
              this.yylloc.range = [r[0], r[0] + this.yyleng - len];
          }
          return this;
      },
  more:function () {
          this._more = true;
          return this;
      },
  less:function (n) {
          this.unput(this.match.slice(n));
      },
  pastInput:function () {
          var past = this.matched.substr(0, this.matched.length - this.match.length);
          return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
      },
  upcomingInput:function () {
          var next = this.match;
          if (next.length < 20) {
              next += this._input.substr(0, 20-next.length);
          }
          return (next.substr(0,20)+(next.length > 20 ? '...':'')).replace(/\n/g, "");
      },
  showPosition:function () {
          var pre = this.pastInput();
          var c = new Array(pre.length + 1).join("-");
          return pre + this.upcomingInput() + "\n" + c+"^";
      },
  next:function () {
          if (this.done) {
              return this.EOF;
          }
          if (!this._input) this.done = true;

          var token,
              match,
              tempMatch,
              index,
              col,
              lines;
          if (!this._more) {
              this.yytext = '';
              this.match = '';
          }
          var rules = this._currentRules();
          for (var i=0;i < rules.length; i++) {
              tempMatch = this._input.match(this.rules[rules[i]]);
              if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                  match = tempMatch;
                  index = i;
                  if (!this.options.flex) break;
              }
          }
          if (match) {
              lines = match[0].match(/(?:\r\n?|\n).*/g);
              if (lines) this.yylineno += lines.length;
              this.yylloc = {first_line: this.yylloc.last_line,
                             last_line: this.yylineno+1,
                             first_column: this.yylloc.last_column,
                             last_column: lines ? lines[lines.length-1].length-lines[lines.length-1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length};
              this.yytext += match[0];
              this.match += match[0];
              this.matches = match;
              this.yyleng = this.yytext.length;
              if (this.options.ranges) {
                  this.yylloc.range = [this.offset, this.offset += this.yyleng];
              }
              this._more = false;
              this._input = this._input.slice(match[0].length);
              this.matched += match[0];
              token = this.performAction.call(this, this.yy, this, rules[index],this.conditionStack[this.conditionStack.length-1]);
              if (this.done && this._input) this.done = false;
              if (token) return token;
              else return;
          }
          if (this._input === "") {
              return this.EOF;
          } else {
              return this.parseError('Lexical error on line '+(this.yylineno+1)+'. Unrecognized text.\n'+this.showPosition(),
                      {text: "", token: null, line: this.yylineno});
          }
      },
  lex:function lex() {
          var r = this.next();
          if (typeof r !== 'undefined') {
              return r;
          } else {
              return this.lex();
          }
      },
  begin:function begin(condition) {
          this.conditionStack.push(condition);
      },
  popState:function popState() {
          return this.conditionStack.pop();
      },
  _currentRules:function _currentRules() {
          return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules;
      },
  topState:function () {
          return this.conditionStack[this.conditionStack.length-2];
      },
  pushState:function begin(condition) {
          this.begin(condition);
      }});
  lexer.options = {};
  lexer.performAction = function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {


  function strip(start, end) {
    return yy_.yytext = yy_.yytext.substr(start, yy_.yyleng-end);
  }


  var YYSTATE=YY_START
  switch($avoiding_name_collisions) {
  case 0:
                                     if(yy_.yytext.slice(-2) === "\\\\") {
                                       strip(0,1);
                                       this.begin("mu");
                                     } else if(yy_.yytext.slice(-1) === "\\") {
                                       strip(0,1);
                                       this.begin("emu");
                                     } else {
                                       this.begin("mu");
                                     }
                                     if(yy_.yytext) return 14;

  break;
  case 1:return 14;
  break;
  case 2:
                                     if(yy_.yytext.slice(-1) !== "\\") this.popState();
                                     if(yy_.yytext.slice(-1) === "\\") strip(0,1);
                                     return 14;

  break;
  case 3:strip(0,4); this.popState(); return 15;
  break;
  case 4:return 25;
  break;
  case 5:return 16;
  break;
  case 6:return 20;
  break;
  case 7:return 19;
  break;
  case 8:return 19;
  break;
  case 9:return 23;
  break;
  case 10:return 22;
  break;
  case 11:this.popState(); this.begin('com');
  break;
  case 12:strip(3,5); this.popState(); return 15;
  break;
  case 13:return 22;
  break;
  case 14:return 39;
  break;
  case 15:return 38;
  break;
  case 16:return 38;
  break;
  case 17:return 42;
  break;
  case 18:/*ignore whitespace*/
  break;
  case 19:this.popState(); return 24;
  break;
  case 20:this.popState(); return 18;
  break;
  case 21:yy_.yytext = strip(1,2).replace(/\\"/g,'"'); return 32;
  break;
  case 22:yy_.yytext = strip(1,2).replace(/\\'/g,"'"); return 32;
  break;
  case 23:return 40;
  break;
  case 24:return 34;
  break;
  case 25:return 34;
  break;
  case 26:return 33;
  break;
  case 27:return 38;
  break;
  case 28:yy_.yytext = strip(1,2); return 38;
  break;
  case 29:return 'INVALID';
  break;
  case 30:return 5;
  break;
  }
  };
  lexer.rules = [/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|$)))/,/^(?:[\s\S]*?--\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{!--)/,/^(?:\{\{![\s\S]*?\}\})/,/^(?:\{\{(~)?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s])))/,/^(?:false(?=([~}\s])))/,/^(?:-?[0-9]+(?=([~}\s])))/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.]))))/,/^(?:\[[^\]]*\])/,/^(?:.)/,/^(?:$)/];
  lexer.conditions = {"mu":{"rules":[4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],"inclusive":false},"emu":{"rules":[2],"inclusive":false},"com":{"rules":[3],"inclusive":false},"INITIAL":{"rules":[0,1,30],"inclusive":true}};
  return lexer;})()
  parser.lexer = lexer;
  function Parser () { this.yy = {}; }Parser.prototype = parser;parser.Parser = Parser;
  return new Parser;
  })();__exports__ = handlebars;
  return __exports__;
})();

// handlebars/compiler/base.js
var __module8__ = (function(__dependency1__, __dependency2__) {
  "use strict";
  var __exports__ = {};
  var parser = __dependency1__;
  var AST = __dependency2__;

  __exports__.parser = parser;

  function parse(input) {
    // Just return if an already-compile AST was passed in.
    if(input.constructor === AST.ProgramNode) { return input; }

    parser.yy = AST;
    return parser.parse(input);
  }

  __exports__.parse = parse;
  return __exports__;
})(__module9__, __module7__);

// handlebars/compiler/javascript-compiler.js
var __module11__ = (function(__dependency1__) {
  "use strict";
  var __exports__;
  var COMPILER_REVISION = __dependency1__.COMPILER_REVISION;
  var REVISION_CHANGES = __dependency1__.REVISION_CHANGES;
  var log = __dependency1__.log;

  function Literal(value) {
    this.value = value;
  }

  function JavaScriptCompiler() {}

  JavaScriptCompiler.prototype = {
    // PUBLIC API: You can override these methods in a subclass to provide
    // alternative compiled forms for name lookup and buffering semantics
    nameLookup: function(parent, name /* , type*/) {
      var wrap,
          ret;
      if (parent.indexOf('depth') === 0) {
        wrap = true;
      }

      if (/^[0-9]+$/.test(name)) {
        ret = parent + "[" + name + "]";
      } else if (JavaScriptCompiler.isValidJavaScriptVariableName(name)) {
        ret = parent + "." + name;
      }
      else {
        ret = parent + "['" + name + "']";
      }

      if (wrap) {
        return '(' + parent + ' && ' + ret + ')';
      } else {
        return ret;
      }
    },

    appendToBuffer: function(string) {
      if (this.environment.isSimple) {
        return "return " + string + ";";
      } else {
        return {
          appendToBuffer: true,
          content: string,
          toString: function() { return "buffer += " + string + ";"; }
        };
      }
    },

    initializeBuffer: function() {
      return this.quotedString("");
    },

    namespace: "Handlebars",
    // END PUBLIC API

    compile: function(environment, options, context, asObject) {
      this.environment = environment;
      this.options = options || {};

      log('debug', this.environment.disassemble() + "\n\n");

      this.name = this.environment.name;
      this.isChild = !!context;
      this.context = context || {
        programs: [],
        environments: [],
        aliases: { }
      };

      this.preamble();

      this.stackSlot = 0;
      this.stackVars = [];
      this.registers = { list: [] };
      this.compileStack = [];
      this.inlineStack = [];

      this.compileChildren(environment, options);

      var opcodes = environment.opcodes, opcode;

      this.i = 0;

      for(var l=opcodes.length; this.i<l; this.i++) {
        opcode = opcodes[this.i];

        if(opcode.opcode === 'DECLARE') {
          this[opcode.name] = opcode.value;
        } else {
          this[opcode.opcode].apply(this, opcode.args);
        }

        // Reset the stripNext flag if it was not set by this operation.
        if (opcode.opcode !== this.stripNext) {
          this.stripNext = false;
        }
      }

      // Flush any trailing content that might be pending.
      this.pushSource('');

      return this.createFunctionContext(asObject);
    },

    preamble: function() {
      var out = [];

      if (!this.isChild) {
        var namespace = this.namespace;

        var copies = "helpers = this.merge(helpers, " + namespace + ".helpers);";
        if (this.environment.usePartial) { copies = copies + " partials = this.merge(partials, " + namespace + ".partials);"; }
        if (this.options.data) { copies = copies + " data = data || {};"; }
        out.push(copies);
      } else {
        out.push('');
      }

      if (!this.environment.isSimple) {
        out.push(", buffer = " + this.initializeBuffer());
      } else {
        out.push("");
      }

      // track the last context pushed into place to allow skipping the
      // getContext opcode when it would be a noop
      this.lastContext = 0;
      this.source = out;
    },

    createFunctionContext: function(asObject) {
      var locals = this.stackVars.concat(this.registers.list);

      if(locals.length > 0) {
        this.source[1] = this.source[1] + ", " + locals.join(", ");
      }

      // Generate minimizer alias mappings
      if (!this.isChild) {
        for (var alias in this.context.aliases) {
          if (this.context.aliases.hasOwnProperty(alias)) {
            this.source[1] = this.source[1] + ', ' + alias + '=' + this.context.aliases[alias];
          }
        }
      }

      if (this.source[1]) {
        this.source[1] = "var " + this.source[1].substring(2) + ";";
      }

      // Merge children
      if (!this.isChild) {
        this.source[1] += '\n' + this.context.programs.join('\n') + '\n';
      }

      if (!this.environment.isSimple) {
        this.pushSource("return buffer;");
      }

      var params = this.isChild ? ["depth0", "data"] : ["Handlebars", "depth0", "helpers", "partials", "data"];

      for(var i=0, l=this.environment.depths.list.length; i<l; i++) {
        params.push("depth" + this.environment.depths.list[i]);
      }

      // Perform a second pass over the output to merge content when possible
      var source = this.mergeSource();

      if (!this.isChild) {
        var revision = COMPILER_REVISION,
            versions = REVISION_CHANGES[revision];
        source = "this.compilerInfo = ["+revision+",'"+versions+"'];\n"+source;
      }

      if (asObject) {
        params.push(source);

        return Function.apply(this, params);
      } else {
        var functionSource = 'function ' + (this.name || '') + '(' + params.join(',') + ') {\n  ' + source + '}';
        log('debug', functionSource + "\n\n");
        return functionSource;
      }
    },
    mergeSource: function() {
      // WARN: We are not handling the case where buffer is still populated as the source should
      // not have buffer append operations as their final action.
      var source = '',
          buffer;
      for (var i = 0, len = this.source.length; i < len; i++) {
        var line = this.source[i];
        if (line.appendToBuffer) {
          if (buffer) {
            buffer = buffer + '\n    + ' + line.content;
          } else {
            buffer = line.content;
          }
        } else {
          if (buffer) {
            source += 'buffer += ' + buffer + ';\n  ';
            buffer = undefined;
          }
          source += line + '\n  ';
        }
      }
      return source;
    },

    // [blockValue]
    //
    // On stack, before: hash, inverse, program, value
    // On stack, after: return value of blockHelperMissing
    //
    // The purpose of this opcode is to take a block of the form
    // `{{#foo}}...{{/foo}}`, resolve the value of `foo`, and
    // replace it on the stack with the result of properly
    // invoking blockHelperMissing.
    blockValue: function() {
      this.context.aliases.blockHelperMissing = 'helpers.blockHelperMissing';

      var params = ["depth0"];
      this.setupParams(0, params);

      this.replaceStack(function(current) {
        params.splice(1, 0, current);
        return "blockHelperMissing.call(" + params.join(", ") + ")";
      });
    },

    // [ambiguousBlockValue]
    //
    // On stack, before: hash, inverse, program, value
    // Compiler value, before: lastHelper=value of last found helper, if any
    // On stack, after, if no lastHelper: same as [blockValue]
    // On stack, after, if lastHelper: value
    ambiguousBlockValue: function() {
      this.context.aliases.blockHelperMissing = 'helpers.blockHelperMissing';

      var params = ["depth0"];
      this.setupParams(0, params);

      var current = this.topStack();
      params.splice(1, 0, current);

      // Use the options value generated from the invocation
      params[params.length-1] = 'options';

      this.pushSource("if (!" + this.lastHelper + ") { " + current + " = blockHelperMissing.call(" + params.join(", ") + "); }");
    },

    // [appendContent]
    //
    // On stack, before: ...
    // On stack, after: ...
    //
    // Appends the string value of `content` to the current buffer
    appendContent: function(content) {
      if (this.pendingContent) {
        content = this.pendingContent + content;
      }
      if (this.stripNext) {
        content = content.replace(/^\s+/, '');
      }

      this.pendingContent = content;
    },

    // [strip]
    //
    // On stack, before: ...
    // On stack, after: ...
    //
    // Removes any trailing whitespace from the prior content node and flags
    // the next operation for stripping if it is a content node.
    strip: function() {
      if (this.pendingContent) {
        this.pendingContent = this.pendingContent.replace(/\s+$/, '');
      }
      this.stripNext = 'strip';
    },

    // [append]
    //
    // On stack, before: value, ...
    // On stack, after: ...
    //
    // Coerces `value` to a String and appends it to the current buffer.
    //
    // If `value` is truthy, or 0, it is coerced into a string and appended
    // Otherwise, the empty string is appended
    append: function() {
      // Force anything that is inlined onto the stack so we don't have duplication
      // when we examine local
      this.flushInline();
      var local = this.popStack();
      this.pushSource("if(" + local + " || " + local + " === 0) { " + this.appendToBuffer(local) + " }");
      if (this.environment.isSimple) {
        this.pushSource("else { " + this.appendToBuffer("''") + " }");
      }
    },

    // [appendEscaped]
    //
    // On stack, before: value, ...
    // On stack, after: ...
    //
    // Escape `value` and append it to the buffer
    appendEscaped: function() {
      this.context.aliases.escapeExpression = 'this.escapeExpression';

      this.pushSource(this.appendToBuffer("escapeExpression(" + this.popStack() + ")"));
    },

    // [getContext]
    //
    // On stack, before: ...
    // On stack, after: ...
    // Compiler value, after: lastContext=depth
    //
    // Set the value of the `lastContext` compiler value to the depth
    getContext: function(depth) {
      if(this.lastContext !== depth) {
        this.lastContext = depth;
      }
    },

    // [lookupOnContext]
    //
    // On stack, before: ...
    // On stack, after: currentContext[name], ...
    //
    // Looks up the value of `name` on the current context and pushes
    // it onto the stack.
    lookupOnContext: function(name) {
      this.push(this.nameLookup('depth' + this.lastContext, name, 'context'));
    },

    // [pushContext]
    //
    // On stack, before: ...
    // On stack, after: currentContext, ...
    //
    // Pushes the value of the current context onto the stack.
    pushContext: function() {
      this.pushStackLiteral('depth' + this.lastContext);
    },

    // [resolvePossibleLambda]
    //
    // On stack, before: value, ...
    // On stack, after: resolved value, ...
    //
    // If the `value` is a lambda, replace it on the stack by
    // the return value of the lambda
    resolvePossibleLambda: function() {
      this.context.aliases.functionType = '"function"';

      this.replaceStack(function(current) {
        return "typeof " + current + " === functionType ? " + current + ".apply(depth0) : " + current;
      });
    },

    // [lookup]
    //
    // On stack, before: value, ...
    // On stack, after: value[name], ...
    //
    // Replace the value on the stack with the result of looking
    // up `name` on `value`
    lookup: function(name) {
      this.replaceStack(function(current) {
        return current + " == null || " + current + " === false ? " + current + " : " + this.nameLookup(current, name, 'context');
      });
    },

    // [lookupData]
    //
    // On stack, before: ...
    // On stack, after: data, ...
    //
    // Push the data lookup operator
    lookupData: function() {
      this.push('data');
    },

    // [pushStringParam]
    //
    // On stack, before: ...
    // On stack, after: string, currentContext, ...
    //
    // This opcode is designed for use in string mode, which
    // provides the string value of a parameter along with its
    // depth rather than resolving it immediately.
    pushStringParam: function(string, type) {
      this.pushStackLiteral('depth' + this.lastContext);

      this.pushString(type);

      if (typeof string === 'string') {
        this.pushString(string);
      } else {
        this.pushStackLiteral(string);
      }
    },

    emptyHash: function() {
      this.pushStackLiteral('{}');

      if (this.options.stringParams) {
        this.register('hashTypes', '{}');
        this.register('hashContexts', '{}');
      }
    },
    pushHash: function() {
      this.hash = {values: [], types: [], contexts: []};
    },
    popHash: function() {
      var hash = this.hash;
      this.hash = undefined;

      if (this.options.stringParams) {
        this.register('hashContexts', '{' + hash.contexts.join(',') + '}');
        this.register('hashTypes', '{' + hash.types.join(',') + '}');
      }
      this.push('{\n    ' + hash.values.join(',\n    ') + '\n  }');
    },

    // [pushString]
    //
    // On stack, before: ...
    // On stack, after: quotedString(string), ...
    //
    // Push a quoted version of `string` onto the stack
    pushString: function(string) {
      this.pushStackLiteral(this.quotedString(string));
    },

    // [push]
    //
    // On stack, before: ...
    // On stack, after: expr, ...
    //
    // Push an expression onto the stack
    push: function(expr) {
      this.inlineStack.push(expr);
      return expr;
    },

    // [pushLiteral]
    //
    // On stack, before: ...
    // On stack, after: value, ...
    //
    // Pushes a value onto the stack. This operation prevents
    // the compiler from creating a temporary variable to hold
    // it.
    pushLiteral: function(value) {
      this.pushStackLiteral(value);
    },

    // [pushProgram]
    //
    // On stack, before: ...
    // On stack, after: program(guid), ...
    //
    // Push a program expression onto the stack. This takes
    // a compile-time guid and converts it into a runtime-accessible
    // expression.
    pushProgram: function(guid) {
      if (guid != null) {
        this.pushStackLiteral(this.programExpression(guid));
      } else {
        this.pushStackLiteral(null);
      }
    },

    // [invokeHelper]
    //
    // On stack, before: hash, inverse, program, params..., ...
    // On stack, after: result of helper invocation
    //
    // Pops off the helper's parameters, invokes the helper,
    // and pushes the helper's return value onto the stack.
    //
    // If the helper is not found, `helperMissing` is called.
    invokeHelper: function(paramSize, name) {
      this.context.aliases.helperMissing = 'helpers.helperMissing';

      var helper = this.lastHelper = this.setupHelper(paramSize, name, true);
      var nonHelper = this.nameLookup('depth' + this.lastContext, name, 'context');

      this.push(helper.name + ' || ' + nonHelper);
      this.replaceStack(function(name) {
        return name + ' ? ' + name + '.call(' +
            helper.callParams + ") " + ": helperMissing.call(" +
            helper.helperMissingParams + ")";
      });
    },

    // [invokeKnownHelper]
    //
    // On stack, before: hash, inverse, program, params..., ...
    // On stack, after: result of helper invocation
    //
    // This operation is used when the helper is known to exist,
    // so a `helperMissing` fallback is not required.
    invokeKnownHelper: function(paramSize, name) {
      var helper = this.setupHelper(paramSize, name);
      this.push(helper.name + ".call(" + helper.callParams + ")");
    },

    // [invokeAmbiguous]
    //
    // On stack, before: hash, inverse, program, params..., ...
    // On stack, after: result of disambiguation
    //
    // This operation is used when an expression like `{{foo}}`
    // is provided, but we don't know at compile-time whether it
    // is a helper or a path.
    //
    // This operation emits more code than the other options,
    // and can be avoided by passing the `knownHelpers` and
    // `knownHelpersOnly` flags at compile-time.
    invokeAmbiguous: function(name, helperCall) {
      this.context.aliases.functionType = '"function"';

      this.pushStackLiteral('{}');    // Hash value
      var helper = this.setupHelper(0, name, helperCall);

      var helperName = this.lastHelper = this.nameLookup('helpers', name, 'helper');

      var nonHelper = this.nameLookup('depth' + this.lastContext, name, 'context');
      var nextStack = this.nextStack();

      this.pushSource('if (' + nextStack + ' = ' + helperName + ') { ' + nextStack + ' = ' + nextStack + '.call(' + helper.callParams + '); }');
      this.pushSource('else { ' + nextStack + ' = ' + nonHelper + '; ' + nextStack + ' = typeof ' + nextStack + ' === functionType ? ' + nextStack + '.call(' + helper.callParams + ') : ' + nextStack + '; }');
    },

    // [invokePartial]
    //
    // On stack, before: context, ...
    // On stack after: result of partial invocation
    //
    // This operation pops off a context, invokes a partial with that context,
    // and pushes the result of the invocation back.
    invokePartial: function(name) {
      var params = [this.nameLookup('partials', name, 'partial'), "'" + name + "'", this.popStack(), "helpers", "partials"];

      if (this.options.data) {
        params.push("data");
      }

      this.context.aliases.self = "this";
      this.push("self.invokePartial(" + params.join(", ") + ")");
    },

    // [assignToHash]
    //
    // On stack, before: value, hash, ...
    // On stack, after: hash, ...
    //
    // Pops a value and hash off the stack, assigns `hash[key] = value`
    // and pushes the hash back onto the stack.
    assignToHash: function(key) {
      var value = this.popStack(),
          context,
          type;

      if (this.options.stringParams) {
        type = this.popStack();
        context = this.popStack();
      }

      var hash = this.hash;
      if (context) {
        hash.contexts.push("'" + key + "': " + context);
      }
      if (type) {
        hash.types.push("'" + key + "': " + type);
      }
      hash.values.push("'" + key + "': (" + value + ")");
    },

    // HELPERS

    compiler: JavaScriptCompiler,

    compileChildren: function(environment, options) {
      var children = environment.children, child, compiler;

      for(var i=0, l=children.length; i<l; i++) {
        child = children[i];
        compiler = new this.compiler();

        var index = this.matchExistingProgram(child);

        if (index == null) {
          this.context.programs.push('');     // Placeholder to prevent name conflicts for nested children
          index = this.context.programs.length;
          child.index = index;
          child.name = 'program' + index;
          this.context.programs[index] = compiler.compile(child, options, this.context);
          this.context.environments[index] = child;
        } else {
          child.index = index;
          child.name = 'program' + index;
        }
      }
    },
    matchExistingProgram: function(child) {
      for (var i = 0, len = this.context.environments.length; i < len; i++) {
        var environment = this.context.environments[i];
        if (environment && environment.equals(child)) {
          return i;
        }
      }
    },

    programExpression: function(guid) {
      this.context.aliases.self = "this";

      if(guid == null) {
        return "self.noop";
      }

      var child = this.environment.children[guid],
          depths = child.depths.list, depth;

      var programParams = [child.index, child.name, "data"];

      for(var i=0, l = depths.length; i<l; i++) {
        depth = depths[i];

        if(depth === 1) { programParams.push("depth0"); }
        else { programParams.push("depth" + (depth - 1)); }
      }

      return (depths.length === 0 ? "self.program(" : "self.programWithDepth(") + programParams.join(", ") + ")";
    },

    register: function(name, val) {
      this.useRegister(name);
      this.pushSource(name + " = " + val + ";");
    },

    useRegister: function(name) {
      if(!this.registers[name]) {
        this.registers[name] = true;
        this.registers.list.push(name);
      }
    },

    pushStackLiteral: function(item) {
      return this.push(new Literal(item));
    },

    pushSource: function(source) {
      if (this.pendingContent) {
        this.source.push(this.appendToBuffer(this.quotedString(this.pendingContent)));
        this.pendingContent = undefined;
      }

      if (source) {
        this.source.push(source);
      }
    },

    pushStack: function(item) {
      this.flushInline();

      var stack = this.incrStack();
      if (item) {
        this.pushSource(stack + " = " + item + ";");
      }
      this.compileStack.push(stack);
      return stack;
    },

    replaceStack: function(callback) {
      var prefix = '',
          inline = this.isInline(),
          stack;

      // If we are currently inline then we want to merge the inline statement into the
      // replacement statement via ','
      if (inline) {
        var top = this.popStack(true);

        if (top instanceof Literal) {
          // Literals do not need to be inlined
          stack = top.value;
        } else {
          // Get or create the current stack name for use by the inline
          var name = this.stackSlot ? this.topStackName() : this.incrStack();

          prefix = '(' + this.push(name) + ' = ' + top + '),';
          stack = this.topStack();
        }
      } else {
        stack = this.topStack();
      }

      var item = callback.call(this, stack);

      if (inline) {
        if (this.inlineStack.length || this.compileStack.length) {
          this.popStack();
        }
        this.push('(' + prefix + item + ')');
      } else {
        // Prevent modification of the context depth variable. Through replaceStack
        if (!/^stack/.test(stack)) {
          stack = this.nextStack();
        }

        this.pushSource(stack + " = (" + prefix + item + ");");
      }
      return stack;
    },

    nextStack: function() {
      return this.pushStack();
    },

    incrStack: function() {
      this.stackSlot++;
      if(this.stackSlot > this.stackVars.length) { this.stackVars.push("stack" + this.stackSlot); }
      return this.topStackName();
    },
    topStackName: function() {
      return "stack" + this.stackSlot;
    },
    flushInline: function() {
      var inlineStack = this.inlineStack;
      if (inlineStack.length) {
        this.inlineStack = [];
        for (var i = 0, len = inlineStack.length; i < len; i++) {
          var entry = inlineStack[i];
          if (entry instanceof Literal) {
            this.compileStack.push(entry);
          } else {
            this.pushStack(entry);
          }
        }
      }
    },
    isInline: function() {
      return this.inlineStack.length;
    },

    popStack: function(wrapped) {
      var inline = this.isInline(),
          item = (inline ? this.inlineStack : this.compileStack).pop();

      if (!wrapped && (item instanceof Literal)) {
        return item.value;
      } else {
        if (!inline) {
          this.stackSlot--;
        }
        return item;
      }
    },

    topStack: function(wrapped) {
      var stack = (this.isInline() ? this.inlineStack : this.compileStack),
          item = stack[stack.length - 1];

      if (!wrapped && (item instanceof Literal)) {
        return item.value;
      } else {
        return item;
      }
    },

    quotedString: function(str) {
      return '"' + str
        .replace(/\\/g, '\\\\')
        .replace(/"/g, '\\"')
        .replace(/\n/g, '\\n')
        .replace(/\r/g, '\\r')
        .replace(/\u2028/g, '\\u2028')   // Per Ecma-262 7.3 + 7.8.4
        .replace(/\u2029/g, '\\u2029') + '"';
    },

    setupHelper: function(paramSize, name, missingParams) {
      var params = [];
      this.setupParams(paramSize, params, missingParams);
      var foundHelper = this.nameLookup('helpers', name, 'helper');

      return {
        params: params,
        name: foundHelper,
        callParams: ["depth0"].concat(params).join(", "),
        helperMissingParams: missingParams && ["depth0", this.quotedString(name)].concat(params).join(", ")
      };
    },

    // the params and contexts arguments are passed in arrays
    // to fill in
    setupParams: function(paramSize, params, useRegister) {
      var options = [], contexts = [], types = [], param, inverse, program;

      options.push("hash:" + this.popStack());

      inverse = this.popStack();
      program = this.popStack();

      // Avoid setting fn and inverse if neither are set. This allows
      // helpers to do a check for `if (options.fn)`
      if (program || inverse) {
        if (!program) {
          this.context.aliases.self = "this";
          program = "self.noop";
        }

        if (!inverse) {
         this.context.aliases.self = "this";
          inverse = "self.noop";
        }

        options.push("inverse:" + inverse);
        options.push("fn:" + program);
      }

      for(var i=0; i<paramSize; i++) {
        param = this.popStack();
        params.push(param);

        if(this.options.stringParams) {
          types.push(this.popStack());
          contexts.push(this.popStack());
        }
      }

      if (this.options.stringParams) {
        options.push("contexts:[" + contexts.join(",") + "]");
        options.push("types:[" + types.join(",") + "]");
        options.push("hashContexts:hashContexts");
        options.push("hashTypes:hashTypes");
      }

      if(this.options.data) {
        options.push("data:data");
      }

      options = "{" + options.join(",") + "}";
      if (useRegister) {
        this.register('options', options);
        params.push('options');
      } else {
        params.push(options);
      }
      return params.join(", ");
    }
  };

  var reservedWords = (
    "break else new var" +
    " case finally return void" +
    " catch for switch while" +
    " continue function this with" +
    " default if throw" +
    " delete in try" +
    " do instanceof typeof" +
    " abstract enum int short" +
    " boolean export interface static" +
    " byte extends long super" +
    " char final native synchronized" +
    " class float package throws" +
    " const goto private transient" +
    " debugger implements protected volatile" +
    " double import public let yield"
  ).split(" ");

  var compilerWords = JavaScriptCompiler.RESERVED_WORDS = {};

  for(var i=0, l=reservedWords.length; i<l; i++) {
    compilerWords[reservedWords[i]] = true;
  }

  JavaScriptCompiler.isValidJavaScriptVariableName = function(name) {
    if(!JavaScriptCompiler.RESERVED_WORDS[name] && /^[a-zA-Z_$][0-9a-zA-Z_$]+$/.test(name)) {
      return true;
    }
    return false;
  };

  __exports__ = JavaScriptCompiler;
  return __exports__;
})(__module2__);

// handlebars/compiler/compiler.js
var __module10__ = (function(__dependency1__, __dependency2__, __dependency3__, __dependency4__) {
  "use strict";
  var __exports__ = {};
  var Exception = __dependency1__;
  var parse = __dependency2__.parse;
  var JavaScriptCompiler = __dependency3__;
  var AST = __dependency4__;

  function Compiler() {}

  __exports__.Compiler = Compiler;// the foundHelper register will disambiguate helper lookup from finding a
  // function in a context. This is necessary for mustache compatibility, which
  // requires that context functions in blocks are evaluated by blockHelperMissing,
  // and then proceed as if the resulting value was provided to blockHelperMissing.

  Compiler.prototype = {
    compiler: Compiler,

    disassemble: function() {
      var opcodes = this.opcodes, opcode, out = [], params, param;

      for (var i=0, l=opcodes.length; i<l; i++) {
        opcode = opcodes[i];

        if (opcode.opcode === 'DECLARE') {
          out.push("DECLARE " + opcode.name + "=" + opcode.value);
        } else {
          params = [];
          for (var j=0; j<opcode.args.length; j++) {
            param = opcode.args[j];
            if (typeof param === "string") {
              param = "\"" + param.replace("\n", "\\n") + "\"";
            }
            params.push(param);
          }
          out.push(opcode.opcode + " " + params.join(" "));
        }
      }

      return out.join("\n");
    },

    equals: function(other) {
      var len = this.opcodes.length;
      if (other.opcodes.length !== len) {
        return false;
      }

      for (var i = 0; i < len; i++) {
        var opcode = this.opcodes[i],
            otherOpcode = other.opcodes[i];
        if (opcode.opcode !== otherOpcode.opcode || opcode.args.length !== otherOpcode.args.length) {
          return false;
        }
        for (var j = 0; j < opcode.args.length; j++) {
          if (opcode.args[j] !== otherOpcode.args[j]) {
            return false;
          }
        }
      }

      len = this.children.length;
      if (other.children.length !== len) {
        return false;
      }
      for (i = 0; i < len; i++) {
        if (!this.children[i].equals(other.children[i])) {
          return false;
        }
      }

      return true;
    },

    guid: 0,

    compile: function(program, options) {
      this.opcodes = [];
      this.children = [];
      this.depths = {list: []};
      this.options = options;

      // These changes will propagate to the other compiler components
      var knownHelpers = this.options.knownHelpers;
      this.options.knownHelpers = {
        'helperMissing': true,
        'blockHelperMissing': true,
        'each': true,
        'if': true,
        'unless': true,
        'with': true,
        'log': true
      };
      if (knownHelpers) {
        for (var name in knownHelpers) {
          this.options.knownHelpers[name] = knownHelpers[name];
        }
      }

      return this.accept(program);
    },

    accept: function(node) {
      var strip = node.strip || {},
          ret;
      if (strip.left) {
        this.opcode('strip');
      }

      ret = this[node.type](node);

      if (strip.right) {
        this.opcode('strip');
      }

      return ret;
    },

    program: function(program) {
      var statements = program.statements;

      for(var i=0, l=statements.length; i<l; i++) {
        this.accept(statements[i]);
      }
      this.isSimple = l === 1;

      this.depths.list = this.depths.list.sort(function(a, b) {
        return a - b;
      });

      return this;
    },

    compileProgram: function(program) {
      var result = new this.compiler().compile(program, this.options);
      var guid = this.guid++, depth;

      this.usePartial = this.usePartial || result.usePartial;

      this.children[guid] = result;

      for(var i=0, l=result.depths.list.length; i<l; i++) {
        depth = result.depths.list[i];

        if(depth < 2) { continue; }
        else { this.addDepth(depth - 1); }
      }

      return guid;
    },

    block: function(block) {
      var mustache = block.mustache,
          program = block.program,
          inverse = block.inverse;

      if (program) {
        program = this.compileProgram(program);
      }

      if (inverse) {
        inverse = this.compileProgram(inverse);
      }

      var type = this.classifyMustache(mustache);

      if (type === "helper") {
        this.helperMustache(mustache, program, inverse);
      } else if (type === "simple") {
        this.simpleMustache(mustache);

        // now that the simple mustache is resolved, we need to
        // evaluate it by executing `blockHelperMissing`
        this.opcode('pushProgram', program);
        this.opcode('pushProgram', inverse);
        this.opcode('emptyHash');
        this.opcode('blockValue');
      } else {
        this.ambiguousMustache(mustache, program, inverse);

        // now that the simple mustache is resolved, we need to
        // evaluate it by executing `blockHelperMissing`
        this.opcode('pushProgram', program);
        this.opcode('pushProgram', inverse);
        this.opcode('emptyHash');
        this.opcode('ambiguousBlockValue');
      }

      this.opcode('append');
    },

    hash: function(hash) {
      var pairs = hash.pairs, pair, val;

      this.opcode('pushHash');

      for(var i=0, l=pairs.length; i<l; i++) {
        pair = pairs[i];
        val  = pair[1];

        if (this.options.stringParams) {
          if(val.depth) {
            this.addDepth(val.depth);
          }
          this.opcode('getContext', val.depth || 0);
          this.opcode('pushStringParam', val.stringModeValue, val.type);
        } else {
          this.accept(val);
        }

        this.opcode('assignToHash', pair[0]);
      }
      this.opcode('popHash');
    },

    partial: function(partial) {
      var partialName = partial.partialName;
      this.usePartial = true;

      if(partial.context) {
        this.ID(partial.context);
      } else {
        this.opcode('push', 'depth0');
      }

      this.opcode('invokePartial', partialName.name);
      this.opcode('append');
    },

    content: function(content) {
      this.opcode('appendContent', content.string);
    },

    mustache: function(mustache) {
      var options = this.options;
      var type = this.classifyMustache(mustache);

      if (type === "simple") {
        this.simpleMustache(mustache);
      } else if (type === "helper") {
        this.helperMustache(mustache);
      } else {
        this.ambiguousMustache(mustache);
      }

      if(mustache.escaped && !options.noEscape) {
        this.opcode('appendEscaped');
      } else {
        this.opcode('append');
      }
    },

    ambiguousMustache: function(mustache, program, inverse) {
      var id = mustache.id,
          name = id.parts[0],
          isBlock = program != null || inverse != null;

      this.opcode('getContext', id.depth);

      this.opcode('pushProgram', program);
      this.opcode('pushProgram', inverse);

      this.opcode('invokeAmbiguous', name, isBlock);
    },

    simpleMustache: function(mustache) {
      var id = mustache.id;

      if (id.type === 'DATA') {
        this.DATA(id);
      } else if (id.parts.length) {
        this.ID(id);
      } else {
        // Simplified ID for `this`
        this.addDepth(id.depth);
        this.opcode('getContext', id.depth);
        this.opcode('pushContext');
      }

      this.opcode('resolvePossibleLambda');
    },

    helperMustache: function(mustache, program, inverse) {
      var params = this.setupFullMustacheParams(mustache, program, inverse),
          name = mustache.id.parts[0];

      if (this.options.knownHelpers[name]) {
        this.opcode('invokeKnownHelper', params.length, name);
      } else if (this.options.knownHelpersOnly) {
        throw new Error("You specified knownHelpersOnly, but used the unknown helper " + name);
      } else {
        this.opcode('invokeHelper', params.length, name);
      }
    },

    ID: function(id) {
      this.addDepth(id.depth);
      this.opcode('getContext', id.depth);

      var name = id.parts[0];
      if (!name) {
        this.opcode('pushContext');
      } else {
        this.opcode('lookupOnContext', id.parts[0]);
      }

      for(var i=1, l=id.parts.length; i<l; i++) {
        this.opcode('lookup', id.parts[i]);
      }
    },

    DATA: function(data) {
      this.options.data = true;
      if (data.id.isScoped || data.id.depth) {
        throw new Exception('Scoped data references are not supported: ' + data.original);
      }

      this.opcode('lookupData');
      var parts = data.id.parts;
      for(var i=0, l=parts.length; i<l; i++) {
        this.opcode('lookup', parts[i]);
      }
    },

    STRING: function(string) {
      this.opcode('pushString', string.string);
    },

    INTEGER: function(integer) {
      this.opcode('pushLiteral', integer.integer);
    },

    BOOLEAN: function(bool) {
      this.opcode('pushLiteral', bool.bool);
    },

    comment: function() {},

    // HELPERS
    opcode: function(name) {
      this.opcodes.push({ opcode: name, args: [].slice.call(arguments, 1) });
    },

    declare: function(name, value) {
      this.opcodes.push({ opcode: 'DECLARE', name: name, value: value });
    },

    addDepth: function(depth) {
      if(isNaN(depth)) { throw new Error("EWOT"); }
      if(depth === 0) { return; }

      if(!this.depths[depth]) {
        this.depths[depth] = true;
        this.depths.list.push(depth);
      }
    },

    classifyMustache: function(mustache) {
      var isHelper   = mustache.isHelper;
      var isEligible = mustache.eligibleHelper;
      var options    = this.options;

      // if ambiguous, we can possibly resolve the ambiguity now
      if (isEligible && !isHelper) {
        var name = mustache.id.parts[0];

        if (options.knownHelpers[name]) {
          isHelper = true;
        } else if (options.knownHelpersOnly) {
          isEligible = false;
        }
      }

      if (isHelper) { return "helper"; }
      else if (isEligible) { return "ambiguous"; }
      else { return "simple"; }
    },

    pushParams: function(params) {
      var i = params.length, param;

      while(i--) {
        param = params[i];

        if(this.options.stringParams) {
          if(param.depth) {
            this.addDepth(param.depth);
          }

          this.opcode('getContext', param.depth || 0);
          this.opcode('pushStringParam', param.stringModeValue, param.type);
        } else {
          this[param.type](param);
        }
      }
    },

    setupMustacheParams: function(mustache) {
      var params = mustache.params;
      this.pushParams(params);

      if(mustache.hash) {
        this.hash(mustache.hash);
      } else {
        this.opcode('emptyHash');
      }

      return params;
    },

    // this will replace setupMustacheParams when we're done
    setupFullMustacheParams: function(mustache, program, inverse) {
      var params = mustache.params;
      this.pushParams(params);

      this.opcode('pushProgram', program);
      this.opcode('pushProgram', inverse);

      if(mustache.hash) {
        this.hash(mustache.hash);
      } else {
        this.opcode('emptyHash');
      }

      return params;
    }
  };

  function precompile(input, options) {
    if (input == null || (typeof input !== 'string' && input.constructor !== AST.ProgramNode)) {
      throw new Exception("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + input);
    }

    options = options || {};
    if (!('data' in options)) {
      options.data = true;
    }

    var ast = parse(input);
    var environment = new Compiler().compile(ast, options);
    return new JavaScriptCompiler().compile(environment, options);
  }

  __exports__.precompile = precompile;function compile(input, options, env) {
    if (input == null || (typeof input !== 'string' && input.constructor !== AST.ProgramNode)) {
      throw new Exception("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + input);
    }

    options = options || {};

    if (!('data' in options)) {
      options.data = true;
    }

    var compiled;

    function compileInput() {
      var ast = parse(input);
      var environment = new Compiler().compile(ast, options);
      var templateSpec = new JavaScriptCompiler().compile(environment, options, undefined, true);
      return env.template(templateSpec);
    }

    // Template is only compiled on first use and cached after that point.
    return function(context, options) {
      if (!compiled) {
        compiled = compileInput();
      }
      return compiled.call(this, context, options);
    };
  }

  __exports__.compile = compile;
  return __exports__;
})(__module5__, __module8__, __module11__, __module7__);

// handlebars.js
var __module0__ = (function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __dependency5__) {
  "use strict";
  var __exports__;
  var Handlebars = __dependency1__;

  // Compiler imports
  var AST = __dependency2__;
  var Parser = __dependency3__.parser;
  var parse = __dependency3__.parse;
  var Compiler = __dependency4__.Compiler;
  var compile = __dependency4__.compile;
  var precompile = __dependency4__.precompile;
  var JavaScriptCompiler = __dependency5__;

  var _create = Handlebars.create;
  var create = function() {
    var hb = _create();

    hb.compile = function(input, options) {
      return compile(input, options, hb);
    };
    hb.precompile = precompile;

    hb.AST = AST;
    hb.Compiler = Compiler;
    hb.JavaScriptCompiler = JavaScriptCompiler;
    hb.Parser = Parser;
    hb.parse = parse;

    return hb;
  };

  Handlebars = create();
  Handlebars.create = create;

  __exports__ = Handlebars;
  return __exports__;
})(__module1__, __module7__, __module8__, __module10__, __module11__);

  return __module0__;
})();

//! OpenSeadragon 0.9.129
//! Built on 2013-08-05
//! Git commit: v0.9.129-29-g967f2e4-dirty
//! http://openseadragon.github.io
//! License: http://openseadragon.github.io/license/
window.OpenSeadragon=window.OpenSeadragon||function(a){return new OpenSeadragon.Viewer(a)},function(a){var b={"[object Boolean]":"boolean","[object Number]":"number","[object String]":"string","[object Function]":"function","[object Array]":"array","[object Date]":"date","[object RegExp]":"regexp","[object Object]":"object"},c=Object.prototype.toString,d=Object.prototype.hasOwnProperty;a.isFunction=function(b){return"function"===a.type(b)},a.isArray=Array.isArray||function(b){return"array"===a.type(b)},a.isWindow=function(a){return a&&"object"==typeof a&&"setInterval"in a},a.type=function(a){return null===a||void 0===a?String(a):b[c.call(a)]||"object"},a.isPlainObject=function(b){if(!b||"object"!==OpenSeadragon.type(b)||b.nodeType||a.isWindow(b))return!1;if(b.constructor&&!d.call(b,"constructor")&&!d.call(b.constructor.prototype,"isPrototypeOf"))return!1;var c;for(c in b);return void 0===c||d.call(b,c)},a.isEmptyObject=function(a){for(var b in a)return!1;return!0}}(OpenSeadragon),function(a){function b(a,b){return b&&a!=document.body?document.body:a.offsetParent}a.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=arguments.length,i=!1,j=1;for("boolean"==typeof g&&(i=g,g=arguments[1]||{},j=2),"object"==typeof g||OpenSeadragon.isFunction(g)||(g={}),h===j&&(g=this,--j);h>j;j++)if(a=arguments[j],null!==a||void 0!==a)for(b in a)c=g[b],d=a[b],g!==d&&(i&&d&&(OpenSeadragon.isPlainObject(d)||(e=OpenSeadragon.isArray(d)))?(e?(e=!1,f=c&&OpenSeadragon.isArray(c)?c:[]):f=c&&OpenSeadragon.isPlainObject(c)?c:{},g[b]=OpenSeadragon.extend(i,f,d)):void 0!==d&&(g[b]=d));return g},a.extend(a,{DEFAULT_SETTINGS:{xmlPath:null,tileSources:null,tileHost:null,panHorizontal:!0,panVertical:!0,constrainDuringPan:!1,wrapHorizontal:!1,wrapVertical:!1,visibilityRatio:.5,minPixelRatio:.5,defaultZoomLevel:0,minZoomLevel:null,maxZoomLevel:null,springStiffness:7,clickTimeThreshold:300,clickDistThreshold:5,zoomPerClick:2,zoomPerScroll:1.2,zoomPerSecond:1,animationTime:1.2,blendTime:0,alwaysBlend:!1,autoHideControls:!0,immediateRender:!1,minZoomImageRatio:.9,maxZoomPixelRatio:1.1,showSequenceControl:!0,preserveViewport:!1,showNavigationControl:!0,controlsFadeDelay:2e3,controlsFadeLength:1500,mouseNavEnabled:!0,showNavigator:!1,navigatorId:null,navigatorHeight:null,navigatorWidth:null,navigatorPosition:null,navigatorSizeRatio:.2,showReferenceStrip:!1,referenceStripScroll:"horizontal",referenceStripElement:null,referenceStripHeight:null,referenceStripWidth:null,referenceStripPosition:"BOTTOM_LEFT",referenceStripSizeRatio:.2,collectionRows:3,collectionLayout:"horizontal",collectionMode:!1,collectionTileSize:800,onPageChange:null,imageLoaderLimit:0,maxImageCacheCount:200,timeout:3e4,prefixUrl:"/images/",navImages:{zoomIn:{REST:"zoomin_rest.png",GROUP:"zoomin_grouphover.png",HOVER:"zoomin_hover.png",DOWN:"zoomin_pressed.png"},zoomOut:{REST:"zoomout_rest.png",GROUP:"zoomout_grouphover.png",HOVER:"zoomout_hover.png",DOWN:"zoomout_pressed.png"},home:{REST:"home_rest.png",GROUP:"home_grouphover.png",HOVER:"home_hover.png",DOWN:"home_pressed.png"},fullpage:{REST:"fullpage_rest.png",GROUP:"fullpage_grouphover.png",HOVER:"fullpage_hover.png",DOWN:"fullpage_pressed.png"},previous:{REST:"previous_rest.png",GROUP:"previous_grouphover.png",HOVER:"previous_hover.png",DOWN:"previous_pressed.png"},next:{REST:"next_rest.png",GROUP:"next_grouphover.png",HOVER:"next_hover.png",DOWN:"next_pressed.png"}},navPrevNextWrap:!1,debugMode:!1,debugGridColor:"#437AB2"},SIGNAL:"----seadragon----",delegate:function(a,b){return function(){var c=arguments;return void 0===c&&(c=[]),b.apply(a,c)}},BROWSERS:{UNKNOWN:0,IE:1,FIREFOX:2,SAFARI:3,CHROME:4,OPERA:5},getElement:function(a){return"string"==typeof a&&(a=document.getElementById(a)),a},getElementPosition:function(c){var d,e,f=new a.Point;for(c=a.getElement(c),d="fixed"==a.getElementStyle(c).position,e=b(c,d);e;)f.x+=c.offsetLeft,f.y+=c.offsetTop,d&&(f=f.plus(a.getPageScroll())),c=e,d="fixed"==a.getElementStyle(c).position,e=b(c,d);return f},getElementSize:function(b){return b=a.getElement(b),new a.Point(b.clientWidth,b.clientHeight)},getElementStyle:document.documentElement.currentStyle?function(b){return b=a.getElement(b),b.currentStyle}:function(b){return b=a.getElement(b),window.getComputedStyle(b,"")},getEvent:function(b){return a.getEvent=b?function(a){return a}:function(){return window.event},a.getEvent(b)},getMousePosition:function(b){if("number"==typeof b.pageX)a.getMousePosition=function(b){var c=new a.Point;return b=a.getEvent(b),c.x=b.pageX,c.y=b.pageY,c};else{if("number"!=typeof b.clientX)throw new Error("Unknown event mouse position, no known technique.");a.getMousePosition=function(b){var c=new a.Point;return b=a.getEvent(b),c.x=b.clientX+document.body.scrollLeft+document.documentElement.scrollLeft,c.y=b.clientY+document.body.scrollTop+document.documentElement.scrollTop,c}}return a.getMousePosition(b)},getPageScroll:function(){var b=document.documentElement||{},c=document.body||{};return a.getPageScroll="number"==typeof window.pageXOffset?function(){return new a.Point(window.pageXOffset,window.pageYOffset)}:c.scrollLeft||c.scrollTop?function(){return new a.Point(document.body.scrollLeft,document.body.scrollTop)}:b.scrollLeft||b.scrollTop?function(){return new a.Point(document.documentElement.scrollLeft,document.documentElement.scrollTop)}:function(){return new a.Point(0,0)},a.getPageScroll()},getWindowSize:function(){var b=document.documentElement||{},c=document.body||{};if("number"==typeof window.innerWidth)a.getWindowSize=function(){return new a.Point(window.innerWidth,window.innerHeight)};else if(b.clientWidth||b.clientHeight)a.getWindowSize=function(){return new a.Point(document.documentElement.clientWidth,document.documentElement.clientHeight)};else{if(!c.clientWidth&&!c.clientHeight)throw new Error("Unknown window size, no known technique.");a.getWindowSize=function(){return new a.Point(document.body.clientWidth,document.body.clientHeight)}}return a.getWindowSize()},makeCenteredNode:function(b){b=a.getElement(b);var c=[a.makeNeutralElement("div"),a.makeNeutralElement("div"),a.makeNeutralElement("div")];return a.extend(c[0].style,{display:"table",height:"100%",width:"100%"}),a.extend(c[1].style,{display:"table-row"}),a.extend(c[2].style,{display:"table-cell",verticalAlign:"middle",textAlign:"center"}),c[0].appendChild(c[1]),c[1].appendChild(c[2]),c[2].appendChild(b),c[0]},makeNeutralElement:function(a){var b=document.createElement(a),c=b.style;return c.background="transparent none",c.border="none",c.margin="0px",c.padding="0px",c.position="static",b},now:function(){return a.now=Date.now?Date.now:function(){return(new Date).getTime()},a.now()},makeTransparentImage:function(b){return a.makeTransparentImage=function(b){var c=a.makeNeutralElement("img");return c.src=b,c},a.Browser.vendor==a.BROWSERS.IE&&a.Browser.version<7&&(a.makeTransparentImage=function(b){var c=a.makeNeutralElement("img"),d=null;return d=a.makeNeutralElement("span"),d.style.display="inline-block",c.onload=function(){d.style.width=d.style.width||c.width+"px",d.style.height=d.style.height||c.height+"px",c.onload=null,c=null},c.src=b,d.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+b+"', sizingMethod='scale')",d}),a.makeTransparentImage(b)},setElementOpacity:function(b,c,d){var e,f;b=a.getElement(b),d&&!a.Browser.alpha&&(c=Math.round(c)),a.Browser.opacity?b.style.opacity=1>c?c:"":1>c?(e=Math.round(100*c),f="alpha(opacity="+e+")",b.style.filter=f):b.style.filter=""},addClass:function(b,c){b=a.getElement(b),b.className?-1===(" "+b.className+" ").indexOf(" "+c+" ")&&(b.className+=" "+c):b.className=c},removeClass:function(b,c){var d,e,f=[];for(b=a.getElement(b),d=b.className.split(/\s+/),e=0;e<d.length;e++)d[e]&&d[e]!==c&&f.push(d[e]);b.className=f.join(" ")},addEvent:function(b,c,d,e){if(b=a.getElement(b),b.addEventListener)a.addEvent=function(b,c,d,e){b=a.getElement(b),b.addEventListener(c,d,e)};else{if(!b.attachEvent)throw new Error("Unable to attach event handler, no known technique.");a.addEvent=function(b,c,d,e){b=a.getElement(b),b.attachEvent("on"+c,d),e&&b.setCapture&&b.setCapture()}}return a.addEvent(b,c,d,e)},removeEvent:function(b,c,d,e){if(b=a.getElement(b),b.removeEventListener)a.removeEvent=function(b,c,d,e){b=a.getElement(b),b.removeEventListener(c,d,e)};else{if(!b.detachEvent)throw new Error("Unable to detach event handler, no known technique.");a.removeEvent=function(b,c,d,e){b=a.getElement(b),b.detachEvent("on"+c,d),e&&b.releaseCapture&&b.releaseCapture()}}return a.removeEvent(b,c,d,e)},cancelEvent:function(b){b=a.getEvent(b),a.cancelEvent=b.preventDefault?function(a){a.preventDefault()}:function(b){b=a.getEvent(b),b.cancel=!0,b.returnValue=!1},a.cancelEvent(b)},stopEvent:function(b){b=a.getEvent(b),a.stopEvent=b.stopPropagation?function(a){a.stopPropagation()}:function(b){b=a.getEvent(b),b.cancelBubble=!0},a.stopEvent(b)},createCallback:function(a,b){var c,d=[];for(c=2;c<arguments.length;c++)d.push(arguments[c]);return function(){var c,e=d.concat([]);for(c=0;c<arguments.length;c++)e.push(arguments[c]);return b.apply(a,e)}},getUrlParameter:function(a){var b=e[a];return b?b:null},createAjaxRequest:function(){var b;if(window.XMLHttpRequest)a.createAjaxRequest=function(){return new XMLHttpRequest},b=new XMLHttpRequest;else if(window.ActiveXObject)for(var d=0;d<c.length;d++)try{b=new ActiveXObject(c[d]),a.createAjaxRequest=function(){return new ActiveXObject(c[d])};break}catch(e){continue}if(!b)throw new Error("Browser doesn't support XMLHttpRequest.");return b},makeAjaxRequest:function(b,c,d){var e=a.createAjaxRequest();if(!a.isFunction(c))throw new Error("makeAjaxRequest requires a success callback");e.onreadystatechange=function(){4==e.readyState&&(e.onreadystatechange=function(){},200==e.status?c(e):(a.console.log("AJAX request returned %s: %s",e.status,b),a.isFunction(d)&&d(e)))};try{e.open("GET",b,!0),e.send(null)}catch(f){a.console.log("%s while making AJAX request: %s",f.name,f.message),e.onreadystatechange=function(){},a.isFunction(d)&&d(e,f)}},jsonp:function(b){var c,d=b.url,e=document.head||document.getElementsByTagName("head")[0]||document.documentElement,f=b.callbackName||"openseadragon"+a.now(),g=window[f],h="$1"+f+"$2",i=b.param||"callback",j=b.callback;d=d.replace(/(\=)\?(&|$)|\?\?/i,h),d+=(/\?/.test(d)?"&":"?")+i+"="+f,window[f]=function(b){if(g)window[f]=g;else try{delete window[f]}catch(c){}j&&a.isFunction(j)&&j(b)},c=document.createElement("script"),(void 0!==b.async||!1!==b.async)&&(c.async="async"),b.scriptCharset&&(c.charset=b.scriptCharset),c.src=d,c.onload=c.onreadystatechange=function(a,b){(b||!c.readyState||/loaded|complete/.test(c.readyState))&&(c.onload=c.onreadystatechange=null,e&&c.parentNode&&e.removeChild(c),c=void 0)},e.insertBefore(c,e.firstChild)},createFromDZI:function(){throw"OpenSeadragon.createFromDZI is deprecated, use Viewer.open."},parseXml:function(b){if(window.ActiveXObject)a.parseXml=function(a){var b=null;return b=new ActiveXObject("Microsoft.XMLDOM"),b.async=!1,b.loadXML(a),b};else{if(!window.DOMParser)throw new Error("Browser doesn't support XML DOM.");a.parseXml=function(a){var b,c=null;return b=new DOMParser,c=b.parseFromString(a,"text/xml")}}return a.parseXml(b)},imageFormatSupported:function(a){return a=a?a:"",!!d[a.toLowerCase()]}}),a.Browser={vendor:a.BROWSERS.UNKNOWN,version:0,alpha:!0};var c=["Msxml2.XMLHTTP","Msxml3.XMLHTTP","Microsoft.XMLHTTP"],d={bmp:!1,jpeg:!0,jpg:!0,png:!0,tif:!1,wdp:!1},e={};!function(){var b=(navigator.appName,navigator.appVersion),c=navigator.userAgent;switch(navigator.appName){case"Microsoft Internet Explorer":window.attachEvent&&window.ActiveXObject&&(a.Browser.vendor=a.BROWSERS.IE,a.Browser.version=parseFloat(c.substring(c.indexOf("MSIE")+5,c.indexOf(";",c.indexOf("MSIE")))));break;case"Netscape":window.addEventListener&&(c.indexOf("Firefox")>=0?(a.Browser.vendor=a.BROWSERS.FIREFOX,a.Browser.version=parseFloat(c.substring(c.indexOf("Firefox")+8))):c.indexOf("Safari")>=0&&(a.Browser.vendor=c.indexOf("Chrome")>=0?a.BROWSERS.CHROME:a.BROWSERS.SAFARI,a.Browser.version=parseFloat(c.substring(c.substring(0,c.indexOf("Safari")).lastIndexOf("/")+1,c.indexOf("Safari")))));break;case"Opera":a.Browser.vendor=a.BROWSERS.OPERA,a.Browser.version=parseFloat(b)}var d,f,g,h=window.location.search.substring(1),i=h.split("&");for(g=0;g<i.length;g++)d=i[g],f=d.indexOf("="),f>0&&(e[d.substring(0,f)]=decodeURIComponent(d.substring(f+1)));a.Browser.alpha=!(a.Browser.vendor==a.BROWSERS.IE&&a.Browser.version<9||a.Browser.vendor==a.BROWSERS.CHROME&&a.Browser.version<2),a.Browser.opacity=!(a.Browser.vendor==a.BROWSERS.IE&&a.Browser.version<9)}();var f=function(){};a.console=window.console||{log:f,debug:f,info:f,warn:f,error:f},function(b){var c=b.requestAnimationFrame||b.mozRequestAnimationFrame||b.webkitRequestAnimationFrame||b.msRequestAnimationFrame,d=b.cancelAnimationFrame||b.mozCancelAnimationFrame||b.webkitCancelAnimationFrame||b.msCancelAnimationFrame;if(c&&d)a.requestAnimationFrame=function(){return c.apply(b,arguments)},a.cancelAnimationFrame=function(){return d.apply(b,arguments)};else{var e,f=[],g=[],h=0;a.requestAnimationFrame=function(b){return f.push([++h,b]),e||(e=setInterval(function(){if(f.length){var b=a.now(),c=g;for(g=f,f=c;g.length;)g.shift()[1](b)}else clearInterval(e),e=void 0},20)),h},a.cancelAnimationFrame=function(a){var b,c;for(b=0,c=f.length;c>b;b+=1)if(f[b][0]===a)return f.splice(b,1),void 0;for(b=0,c=g.length;c>b;b+=1)if(g[b][0]===a)return g.splice(b,1),void 0}}}(window),a._processDZIError=function(a){var b=a.getElementsByTagName("Message")[0],c=b.firstChild.nodeValue;throw new Error(c)}}(OpenSeadragon),function(a){var b={supportsFullScreen:!1,isFullScreen:function(){return!1},requestFullScreen:function(){},cancelFullScreen:function(){},fullScreenEventName:"",prefix:""},c="webkit moz o ms khtml".split(" ");if("undefined"!=typeof document.cancelFullScreen)b.supportsFullScreen=!0;else for(var d=0,e=c.length;e>d;d++)if(b.prefix=c[d],"undefined"!=typeof document[b.prefix+"CancelFullScreen"]){b.supportsFullScreen=!0;break}b.supportsFullScreen?(b.fullScreenEventName=b.prefix+"fullscreenchange",b.isFullScreen=function(){switch(this.prefix){case"":return document.fullScreen;case"webkit":return document.webkitIsFullScreen;default:return document[this.prefix+"FullScreen"]}},b.requestFullScreen=function(a){return""===this.prefix?a.requestFullScreen():a[this.prefix+"RequestFullScreen"]()},b.cancelFullScreen=function(){return""===this.prefix?document.cancelFullScreen():document[this.prefix+"CancelFullScreen"]()}):"undefined"!=typeof window.ActiveXObject&&(b.requestFullScreen=function(){var a=new ActiveXObject("WScript.Shell");return null!==a&&a.SendKeys("{F11}"),!1},b.cancelFullScreen=b.requestFullScreen),a.extend(a,b)}(OpenSeadragon),function(a){a.EventHandler=function(){this.events={}},a.EventHandler.prototype={addHandler:function(b,c){var d=this.events[b];d||(this.events[b]=d=[]),c&&a.isFunction(c)&&(d[d.length]=c)},removeHandler:function(b,c){var d,e=this.events[b],f=[];if(e&&a.isArray(e)){for(d=0;d<e.length;d++)e[d]!==c&&f.push(e[d]);this.events[b]=f}},removeAllHandlers:function(a){this.events[a]=[]},getHandler:function(a){var b=this.events[a];return b&&b.length?(b=1===b.length?[b[0]]:Array.apply(null,b),function(a,c){var d,e=b.length;for(d=0;e>d;d++)b[d]&&b[d](a,c)}):null},raiseEvent:function(a,b){var c=this.getHandler(a);c&&(b||(b={}),c(this,b))}}}(OpenSeadragon),function(a){function b(b){var c,d,e=["mouseover","mouseout","mousedown","mouseup","click","DOMMouseScroll","mousewheel","touchstart","touchmove","touchend","keypress","focus","blur"],f=H[b.hash];if(!f.tracking){for(d=0;d<e.length;d++)c=e[d],a.addEvent(b.element,c,f[c],!1);f.tracking=!0,F[b.hash]=b}}function c(b){var c,d,e=["mouseover","mouseout","mousedown","mouseup","click","DOMMouseScroll","mousewheel","touchstart","touchmove","touchend","keypress","focus","blur"],g=H[b.hash];if(g.tracking){for(d=0;d<e.length;d++)c=e[d],a.removeEvent(b.element,c,g[c],!1);f(b),g.tracking=!1,delete F[b.hash]}}function d(a){return H[a.hash].insideElement}function e(b){var c=H[b.hash];c.capturing||(a.Browser.vendor==a.BROWSERS.IE&&a.Browser.version<9?(a.removeEvent(b.element,"mouseup",c.mouseup,!1),a.addEvent(b.element,"mouseup",c.mouseupie,!0),a.addEvent(b.element,"mousemove",c.mousemoveie,!0)):(a.addEvent(window,"mouseup",c.mouseupwindow,!0),a.addEvent(window,"mousemove",c.mousemove,!0)),c.capturing=!0)}function f(b){var c=H[b.hash];c.capturing&&(a.Browser.vendor==a.BROWSERS.IE&&a.Browser.version<9?(a.removeEvent(b.element,"mousemove",c.mousemoveie,!0),a.removeEvent(b.element,"mouseup",c.mouseupie,!0),a.addEvent(b.element,"mouseup",c.mouseup,!1)):(a.removeEvent(window,"mousemove",c.mousemove,!0),a.removeEvent(window,"mouseup",c.mouseupwindow,!0)),c.capturing=!1)}function g(a,b,c){var d;for(d in F)F.hasOwnProperty(d)&&a.hash!=d&&b(F[d],c)}function h(b,c){var d;b.focusHandler&&(d=b.focusHandler(b,c),d===!1&&a.cancelEvent(c))}function i(b,c){var d;b.blurHandler&&(d=b.blurHandler(b,c),d===!1&&a.cancelEvent(c))}function j(b,c){var d;b.keyHandler&&(d=b.keyHandler(b,c.keyCode?c.keyCode:c.charCode,c.shiftKey),d||a.cancelEvent(c))}function k(b,c){var d,e=H[b.hash];c=a.getEvent(c),a.Browser.vendor==a.BROWSERS.IE&&a.Browser.version<9&&e.capturing&&!A(c.srcElement,b.element)&&g(b,k,c);var f=c.target?c.target:c.srcElement,h=c.relatedTarget?c.relatedTarget:c.fromElement;A(b.element,f)&&!A(b.element,h)&&(e.insideElement=!0,b.enterHandler&&(d=b.enterHandler(b,z(c,b.element),e.buttonDown,D),d===!1&&a.cancelEvent(c)))}function l(b,c){var d,e=H[b.hash];c=a.getEvent(c),a.Browser.vendor==a.BROWSERS.IE&&a.Browser.version<9&&e.capturing&&!A(c.srcElement,b.element)&&g(b,l,c);var f=c.target?c.target:c.srcElement,h=c.relatedTarget?c.relatedTarget:c.toElement;A(b.element,f)&&!A(b.element,h)&&(e.insideElement=!1,b.exitHandler&&(d=b.exitHandler(b,z(c,b.element),e.buttonDown,D),d===!1&&a.cancelEvent(c)))}function m(b,c,d){var f,g=H[b.hash];c=a.getEvent(c),2!=c.button&&(g.buttonDown=!0,g.lastPoint=y(c),g.lastMouseDownPoint=g.lastPoint,g.lastMouseDownTime=a.now(),b.pressHandler&&(f=b.pressHandler(b,z(c,b.element)),f===!1&&a.cancelEvent(c)),(b.pressHandler||b.dragHandler)&&a.cancelEvent(c),d||(a.Browser.vendor==a.BROWSERS.IE&&a.Browser.version<9&&E?a.Browser.vendor==a.BROWSERS.IE&&a.Browser.version<9&&G.push(b):(e(b),E=!0,G=[b])))}function n(b,c){var d,e;1==c.touches.length&&1==c.targetTouches.length&&1==c.changedTouches.length&&(H[b.hash].lastTouch=c.touches[0],k(b,c.changedTouches[0]),m(b,c.touches[0],!0)),2==c.touches.length&&(d=y(c.touches[0]),e=y(c.touches[1]),H[b.hash].lastPinchDelta=Math.abs(d.x-e.x)+Math.abs(d.y-e.y),H[b.hash].pinchMidpoint=new a.Point((d.x+e.x)/2,(d.y+e.y)/2)),c.preventDefault()}function o(b,c){var d,e=H[b.hash],f=e.buttonDown,g=e.insideElement;c=a.getEvent(c),2!=c.button&&(e.buttonDown=!1,b.releaseHandler&&(d=b.releaseHandler(b,z(c,b.element),f,g),d===!1&&a.cancelEvent(c)),f&&g&&u(b,c))}function p(a,b){0===b.touches.length&&0===b.targetTouches.length&&1==b.changedTouches.length&&(H[a.hash].lastTouch=null,r(a,b.changedTouches[0],!0),l(a,b.changedTouches[0])),2==b.touches.length+b.changedTouches.length&&(H[a.hash].lastPinchDelta=null,H[a.hash].pinchMidpoint=null),b.preventDefault()}function q(b,c){var e,g;if(c=a.getEvent(c),2!=c.button){for(g=0;g<G.length;g++)e=G[g],d(e)||o(e,c);f(b),E=!1,c.srcElement.fireEvent("on"+c.type,document.createEventObject(c)),a.stopEvent(c)}}function r(a,b,c){H[a.hash].insideElement||o(a,b),c||f(a)}function s(b,c){b.clickHandler&&a.cancelEvent(c)}function t(b,c){var d,e=0;c||(c=window.event),c.wheelDelta?(e=c.wheelDelta,window.opera&&(e=-e)):c.detail&&(e=-c.detail),e=e>0?1:-1,b.scrollHandler&&(d=b.scrollHandler(b,z(c,b.element),e,c.shiftKey),d===!1&&a.cancelEvent(c))}function u(b,c){var d,e=H[b.hash];if(c=a.getEvent(c),2!=c.button){var f=a.now()-e.lastMouseDownTime,g=y(c),h=e.lastMouseDownPoint.distanceTo(g),i=f<=b.clickTimeThreshold&&h<=b.clickDistThreshold;b.clickHandler&&(d=b.clickHandler(b,z(c,b.element),i,c.shiftKey),d===!1&&a.cancelEvent(c))}}function v(b,c){var d,e,f,g=H[b.hash];c=a.getEvent(c),f=y(c),d=f.minus(g.lastPoint),g.lastPoint=f,b.dragHandler&&(e=b.dragHandler(b,z(c,b.element),d,c.shiftKey),e===!1&&a.cancelEvent(c))}function w(a,b){var c,d,e;1===b.touches.length&&1===b.targetTouches.length&&1===b.changedTouches.length&&H[a.hash].lastTouch.identifier===b.touches[0].identifier?v(a,b.touches[0]):2===b.touches.length&&(c=y(b.touches[0]),d=y(b.touches[1]),e=Math.abs(c.x-d.x)+Math.abs(c.y-d.y),Math.abs(H[a.hash].lastPinchDelta-e)>75&&(t(a,{shift:!1,pageX:H[a.hash].pinchMidpoint.x,pageY:H[a.hash].pinchMidpoint.y,detail:H[a.hash].lastPinchDelta>e?1:-1}),H[a.hash].lastPinchDelta=e)),b.preventDefault()}function x(b,c){var d;for(d=0;d<G.length;d++)v(G[d],c);a.stopEvent(c)}function y(b){return a.getMousePosition(b)}function z(b,c){var d=a.getMousePosition(b),e=a.getElementPosition(c);return d.minus(e)}function A(a,b){for(var c=document.body;b&&a!=b&&c!=b;)try{b=b.parentNode}catch(d){return!1}return a==b}function B(){D=!0}function C(){D=!1}var D=!1,E=!1,F={},G=[],H={};a.MouseTracker=function(b){var c=arguments;a.isPlainObject(b)||(b={element:c[0],clickTimeThreshold:c[1],clickDistThreshold:c[2]}),this.hash=Math.random(),this.element=a.getElement(b.element),this.clickTimeThreshold=b.clickTimeThreshold,this.clickDistThreshold=b.clickDistThreshold,this.enterHandler=b.enterHandler||null,this.exitHandler=b.exitHandler||null,this.pressHandler=b.pressHandler||null,this.releaseHandler=b.releaseHandler||null,this.scrollHandler=b.scrollHandler||null,this.clickHandler=b.clickHandler||null,this.dragHandler=b.dragHandler||null,this.keyHandler=b.keyHandler||null,this.focusHandler=b.focusHandler||null,this.blurHandler=b.blurHandler||null;var d=this;H[this.hash]={mouseover:function(a){k(d,a)},mouseout:function(a){l(d,a)},mousedown:function(a){m(d,a)},mouseup:function(a){o(d,a)},click:function(a){s(d,a)},DOMMouseScroll:function(a){t(d,a)},mousewheel:function(a){t(d,a)},mouseupie:function(a){q(d,a)},mousemoveie:function(a){x(d,a)},mouseupwindow:function(a){r(d,a)},mousemove:function(a){v(d,a)},touchstart:function(a){n(d,a)},touchmove:function(a){w(d,a)},touchend:function(a){p(d,a)},keypress:function(a){j(d,a)},focus:function(a){h(d,a)},blur:function(a){i(d,a)},tracking:!1,capturing:!1,buttonDown:!1,insideElement:!1,lastPoint:null,lastMouseDownTime:null,lastMouseDownPoint:null,lastPinchDelta:0}},a.MouseTracker.prototype={isTracking:function(){return H[this.hash].tracking},setTracking:function(a){return a?b(this):c(this),this},enterHandler:function(){},exitHandler:function(){},pressHandler:function(){},releaseHandler:function(){},scrollHandler:function(){},clickHandler:function(){},dragHandler:function(){},keyHandler:function(){},focusHandler:function(){},blurHandler:function(){}},function(){a.Browser.vendor==a.BROWSERS.IE&&a.Browser.version<9?(a.addEvent(document,"mousedown",B,!1),a.addEvent(document,"mouseup",C,!1)):(a.addEvent(window,"mousedown",B,!0),a.addEvent(window,"mouseup",C,!0))}()}(OpenSeadragon),function(a){a.ControlAnchor={NONE:0,TOP_LEFT:1,TOP_RIGHT:2,BOTTOM_RIGHT:3,BOTTOM_LEFT:4},a.Control=function(b,c,d){var e=b.parentNode;"number"==typeof c&&(a.console.error("Passing an anchor directly into the OpenSeadragon.Control constructor is deprecated; please use an options object instead.  Support for this deprecated variant is scheduled for removal in December 2013"),c={anchor:c}),c.attachToViewer="undefined"==typeof c.attachToViewer?!0:c.attachToViewer,this.autoFade="undefined"==typeof c.autoFade?!0:c.autoFade,this.element=b,this.anchor=c.anchor,this.container=d,this.wrapper=a.makeNeutralElement("span"),this.wrapper.style.display="inline-block",this.wrapper.appendChild(this.element),this.anchor==a.ControlAnchor.NONE&&(this.wrapper.style.width=this.wrapper.style.height="100%"),c.attachToViewer?this.anchor==a.ControlAnchor.TOP_RIGHT||this.anchor==a.ControlAnchor.BOTTOM_RIGHT?this.container.insertBefore(this.wrapper,this.container.firstChild):this.container.appendChild(this.wrapper):e.appendChild(this.wrapper)},a.Control.prototype={destroy:function(){this.wrapper.removeChild(this.element),this.container.removeChild(this.wrapper)},isVisible:function(){return"none"!=this.wrapper.style.display},setVisible:function(a){this.wrapper.style.display=a?"inline-block":"none"},setOpacity:function(b){this.element[a.SIGNAL]&&a.Browser.vendor==a.BROWSERS.IE?a.setElementOpacity(this.element,b,!0):a.setElementOpacity(this.wrapper,b,!0)}}}(OpenSeadragon),function(a){function b(a,b){var c,d=a.controls;for(c=d.length-1;c>=0;c--)if(d[c].element==b)return c;return-1}a.ControlDock=function(b){var c,d,e=["topleft","topright","bottomright","bottomleft"];for(a.extend(!0,this,{id:"controldock-"+a.now()+"-"+Math.floor(1e6*Math.random()),container:a.makeNeutralElement("form"),controls:[]},b),this.element&&(this.element=a.getElement(this.element),this.element.appendChild(this.container),this.element.style.position="relative",this.container.style.width="100%",this.container.style.height="100%"),d=0;d<e.length;d++)c=e[d],this.controls[c]=a.makeNeutralElement("div"),this.controls[c].style.position="absolute",c.match("left")&&(this.controls[c].style.left="0px"),c.match("right")&&(this.controls[c].style.right="0px"),c.match("top")&&(this.controls[c].style.top="0px"),c.match("bottom")&&(this.controls[c].style.bottom="0px");this.container.appendChild(this.controls.topleft),this.container.appendChild(this.controls.topright),this.container.appendChild(this.controls.bottomright),this.container.appendChild(this.controls.bottomleft)},a.ControlDock.prototype={addControl:function(c,d){c=a.getElement(c);var e=null;if(!(b(this,c)>=0)){switch(d.anchor){case a.ControlAnchor.TOP_RIGHT:e=this.controls.topright,c.style.position="relative",c.style.paddingRight="0px",c.style.paddingTop="0px";break;case a.ControlAnchor.BOTTOM_RIGHT:e=this.controls.bottomright,c.style.position="relative",c.style.paddingRight="0px",c.style.paddingBottom="0px";break;case a.ControlAnchor.BOTTOM_LEFT:e=this.controls.bottomleft,c.style.position="relative",c.style.paddingLeft="0px",c.style.paddingBottom="0px";break;case a.ControlAnchor.TOP_LEFT:e=this.controls.topleft,c.style.position="relative",c.style.paddingLeft="0px",c.style.paddingTop="0px";break;default:case a.ControlAnchor.NONE:e=this.container,c.style.margin="0px",c.style.padding="0px"}this.controls.push(new a.Control(c,d,e)),c.style.display="inline-block"}},removeControl:function(c){c=a.getElement(c);var d=b(this,c);return d>=0&&(this.controls[d].destroy(),this.controls.splice(d,1)),this},clearControls:function(){for(;this.controls.length>0;)this.controls.pop().destroy();return this},areControlsEnabled:function(){var a;for(a=this.controls.length-1;a>=0;a--)if(this.controls[a].isVisible())return!0;return!1},setControlsEnabled:function(a){var b;for(b=this.controls.length-1;b>=0;b--)this.controls[b].setVisible(a);return this}}}(OpenSeadragon),function($){function _getSafeElemSize(a){return a=$.getElement(a),new $.Point(0===a.clientWidth?1:a.clientWidth,0===a.clientHeight?1:a.clientHeight)}function openTileSource(a,b){var c,d,e=a;for(e.source&&e.close(),e.canvas.innerHTML="",THIS[e.hash].prevContainerSize=_getSafeElemSize(e.container),e.collectionMode?(e.source=new $.TileSourceCollection({rows:e.collectionRows,layout:e.collectionLayout,tileSize:e.collectionTileSize,tileSources:e.tileSources,tileMargin:e.collectionTileMargin}),e.viewport=e.viewport?e.viewport:new $.Viewport({collectionMode:!0,collectionTileSource:e.source,containerSize:THIS[e.hash].prevContainerSize,contentSize:e.source.dimensions,springStiffness:e.springStiffness,animationTime:e.animationTime,showNavigator:!1,minZoomImageRatio:1,maxZoomPixelRatio:1,viewer:e})):(b&&(e.source=b),e.viewport=e.viewport?e.viewport:new $.Viewport({containerSize:THIS[e.hash].prevContainerSize,contentSize:e.source.dimensions,springStiffness:e.springStiffness,animationTime:e.animationTime,minZoomImageRatio:e.minZoomImageRatio,maxZoomPixelRatio:e.maxZoomPixelRatio,visibilityRatio:e.visibilityRatio,wrapHorizontal:e.wrapHorizontal,wrapVertical:e.wrapVertical,defaultZoomLevel:e.defaultZoomLevel,minZoomLevel:e.minZoomLevel,maxZoomLevel:e.maxZoomLevel,viewer:e})),e.preserveViewport&&e.viewport.resetContentSize(e.source.dimensions),e.source.overlays=e.source.overlays||[],e.drawer=new $.Drawer({viewer:e,source:e.source,viewport:e.viewport,element:e.canvas,overlays:[].concat(e.overlays).concat(e.source.overlays),maxImageCacheCount:e.maxImageCacheCount,imageLoaderLimit:e.imageLoaderLimit,minZoomImageRatio:e.minZoomImageRatio,wrapHorizontal:e.wrapHorizontal,wrapVertical:e.wrapVertical,immediateRender:e.immediateRender,blendTime:e.blendTime,alwaysBlend:e.alwaysBlend,minPixelRatio:e.collectionMode?0:e.minPixelRatio,timeout:e.timeout,debugMode:e.debugMode,debugGridColor:e.debugGridColor}),e.showNavigator&&!e.collectionMode&&(e.navigator?e.navigator.open(b):e.navigator=new $.Navigator({id:e.navigatorId,position:e.navigatorPosition,sizeRatio:e.navigatorSizeRatio,height:e.navigatorHeight,width:e.navigatorWidth,tileSources:b,tileHost:e.tileHost,prefixUrl:e.prefixUrl,overlays:e.overlays,viewer:e})),e.showReferenceStrip&&!e.referenceStrip&&(e.referenceStrip=new $.ReferenceStrip({id:e.referenceStripElement,position:e.referenceStripPosition,sizeRatio:e.referenceStripSizeRatio,scroll:e.referenceStripScroll,height:e.referenceStripHeight,width:e.referenceStripWidth,tileSources:e.tileSources,tileHost:e.tileHost,prefixUrl:e.prefixUrl,overlays:e.overlays,viewer:e})),THIS[e.hash].animating=!1,THIS[e.hash].forceRedraw=!0,e._updateRequestId=scheduleUpdate(e,updateMulti),d=0;d<e.overlayControls.length;d++)c=e.overlayControls[d],c.point?e.drawer.addOverlay(c.id,new $.Point(c.point.X,c.point.Y),$.OverlayPlacement.TOP_LEFT):e.drawer.addOverlay(c.id,new $.Rect(c.rect.Point.X,c.rect.Point.Y,c.rect.Width,c.rect.Height),c.placement);return VIEWERS[e.hash]=e,e.raiseEvent("open",{source:b,viewer:e}),e}function scheduleUpdate(a,b){return $.requestAnimationFrame(function(){b(a)})}function scheduleControlsFade(a){$.requestAnimationFrame(function(){updateControlsFade(a)})}function beginControlsAutoHide(a){a.autoHideControls&&(a.controlsShouldFade=!0,a.controlsFadeBeginTime=$.now()+a.controlsFadeDelay,window.setTimeout(function(){scheduleControlsFade(a)},a.controlsFadeDelay))}function updateControlsFade(a){var b,c,d,e;if(a.controlsShouldFade){for(b=$.now(),c=b-a.controlsFadeBeginTime,d=1-c/a.controlsFadeLength,d=Math.min(1,d),d=Math.max(0,d),e=a.controls.length-1;e>=0;e--)a.controls[e].autoFade&&a.controls[e].setOpacity(d);d>0&&scheduleControlsFade(a)}}function abortControlsAutoHide(a){var b;for(a.controlsShouldFade=!1,b=a.controls.length-1;b>=0;b--)a.controls[b].setOpacity(1)}function onFocus(){abortControlsAutoHide(this)}function onBlur(){beginControlsAutoHide(this)}function onCanvasClick(a,b,c,d){var e,f;this.viewport&&c&&(e=this.zoomPerClick,f=d?1/e:e,this.viewport.zoomBy(f,this.viewport.pointFromPixel(b,!0)),this.viewport.applyConstraints()),this.raiseEvent("canvas-click",{tracker:a,position:b,quick:c,shift:d})}function onCanvasDrag(a,b,c,d){this.viewport&&(this.panHorizontal||(c.x=0),this.panVertical||(c.y=0),this.viewport.panBy(this.viewport.deltaPointsFromPixels(c.negate())),this.constrainDuringPan&&this.viewport.applyConstraints()),this.raiseEvent("canvas-click",{tracker:a,position:b,delta:c,shift:d})}function onCanvasRelease(a,b,c,d){c&&this.viewport&&this.viewport.applyConstraints(),this.raiseEvent("canvas-release",{tracker:a,position:b,insideElementPress:c,insideElementRelease:d})}function onCanvasScroll(a,b,c,d){var e;return this.viewport&&(e=Math.pow(this.zoomPerScroll,c),this.viewport.zoomBy(e,this.viewport.pointFromPixel(b,!0)),this.viewport.applyConstraints()),this.raiseEvent("canvas-scroll",{tracker:a,position:b,scroll:c,shift:d}),!1}function onContainerExit(a,b,c,d){c||(THIS[this.hash].mouseInside=!1,THIS[this.hash].animating||beginControlsAutoHide(this)),this.raiseEvent("container-exit",{tracker:a,position:b,buttonDownElement:c,buttonDownAny:d})
}function onContainerRelease(a,b,c,d){d||(THIS[this.hash].mouseInside=!1,THIS[this.hash].animating||beginControlsAutoHide(this)),this.raiseEvent("container-release",{tracker:a,position:b,insideElementPress:c,insideElementRelease:d})}function onContainerEnter(a,b,c,d){THIS[this.hash].mouseInside=!0,abortControlsAutoHide(this),this.raiseEvent("container-enter",{tracker:a,position:b,buttonDownElement:c,buttonDownAny:d})}function updateMulti(a){return a.source?(updateOnce(a),a.source&&(a._updateRequestId=scheduleUpdate(a,updateMulti)),void 0):(a._updateRequestId=null,void 0)}function updateOnce(a){var b,c;a.source&&(b=_getSafeElemSize(a.container),b.equals(THIS[a.hash].prevContainerSize)||(a.viewport.resize(b,!0),THIS[a.hash].prevContainerSize=b),c=a.viewport.update(),a.referenceStrip&&(c=a.referenceStrip.update(a.viewport)||c),!THIS[a.hash].animating&&c&&(a.raiseEvent("animationstart"),abortControlsAutoHide(a)),c?(a.drawer.update(),a.navigator&&a.navigator.update(a.viewport),a.raiseEvent("animation")):(THIS[a.hash].forceRedraw||a.drawer.needsUpdate())&&(a.drawer.update(),a.navigator&&a.navigator.update(a.viewport),THIS[a.hash].forceRedraw=!1),THIS[a.hash].animating&&!c&&(a.raiseEvent("animationfinish"),THIS[a.hash].mouseInside||beginControlsAutoHide(a)),THIS[a.hash].animating=c)}function resolveUrl(a,b){return a?a+b:b}function beginZoomingIn(){THIS[this.hash].lastZoomTime=$.now(),THIS[this.hash].zoomFactor=this.zoomPerSecond,THIS[this.hash].zooming=!0,scheduleZoom(this)}function beginZoomingOut(){THIS[this.hash].lastZoomTime=$.now(),THIS[this.hash].zoomFactor=1/this.zoomPerSecond,THIS[this.hash].zooming=!0,scheduleZoom(this)}function endZooming(){THIS[this.hash].zooming=!1}function scheduleZoom(a){$.requestAnimationFrame($.delegate(a,doZoom))}function doZoom(){var a,b,c;THIS[this.hash].zooming&&this.viewport&&(a=$.now(),b=a-THIS[this.hash].lastZoomTime,c=Math.pow(THIS[this.hash].zoomFactor,b/1e3),this.viewport.zoomBy(c),this.viewport.applyConstraints(),THIS[this.hash].lastZoomTime=a,scheduleZoom(this))}function doSingleZoomIn(){this.viewport&&(THIS[this.hash].zooming=!1,this.viewport.zoomBy(this.zoomPerClick/1),this.viewport.applyConstraints())}function doSingleZoomOut(){this.viewport&&(THIS[this.hash].zooming=!1,this.viewport.zoomBy(1/this.zoomPerClick),this.viewport.applyConstraints())}function lightUp(){this.buttons.emulateEnter(),this.buttons.emulateExit()}function onHome(){this.viewport&&this.viewport.goHome()}function onFullPage(){this.setFullPage(!this.isFullPage()),this.buttons&&this.buttons.emulateExit(),this.fullPageButton.element.focus(),this.viewport&&this.viewport.applyConstraints()}function onPrevious(){var a=THIS[this.hash].sequence-1;this.navPrevNextWrap&&0>a&&(a+=this.tileSources.length),this.goToPage(a)}function onNext(){var a=THIS[this.hash].sequence+1;this.navPrevNextWrap&&a>=this.tileSources.length&&(a=0),this.goToPage(a)}var THIS={},VIEWERS={};$.Viewer=function(a){var b,c=arguments,d=this;$.isPlainObject(a)||(a={id:c[0],xmlPath:c.length>1?c[1]:void 0,prefixUrl:c.length>2?c[2]:void 0,controls:c.length>3?c[3]:void 0,overlays:c.length>4?c[4]:void 0,overlayControls:c.length>5?c[5]:void 0}),a.config&&($.extend(!0,a,a.config),delete a.config),$.extend(!0,this,{id:a.id,hash:a.id,element:null,canvas:null,container:null,overlays:[],overlayControls:[],previousBody:[],customControls:[],source:null,drawer:null,drawers:[],viewport:null,navigator:null,collectionViewport:null,collectionDrawer:null,navImages:null,buttons:null,profiler:null},$.DEFAULT_SETTINGS,a),THIS[this.hash]={fsBoundsDelta:new $.Point(1,1),prevContainerSize:null,animating:!1,forceRedraw:!1,mouseInside:!1,group:null,zooming:!1,zoomFactor:null,lastZoomTime:null,sequenced:!1,sequence:0,fullPage:!1,onfullscreenchange:null},this._updateRequestId=null,$.EventHandler.call(this),this.addHandler("open-failed",function(a,b){var c=$.getString("Errors.Open-Failed",b.source,b.message);d._showMessage(c)}),$.ControlDock.call(this,a);var e;for(this.xmlPath&&(this.tileSources=[this.xmlPath]),this.tileSources&&($.isArray(this.tileSources)?(this.tileSources.length>1&&(THIS[this.hash].sequenced=!0),e=this.tileSources[0]):e=this.tileSources,this.open(e)),this.element=this.element||document.getElementById(this.id),this.canvas=$.makeNeutralElement("div"),this.keyboardCommandArea=$.makeNeutralElement("textarea"),this.canvas.className="openseadragon-canvas",function(a){a.width="100%",a.height="100%",a.overflow="hidden",a.position="absolute",a.top="0px",a.left="0px"}(this.canvas.style),this.container.className="openseadragon-container",function(a){a.width="100%",a.height="100%",a.position="relative",a.overflow="hidden",a.left="0px",a.top="0px",a.textAlign="left"}(this.container.style),this.keyboardCommandArea.className="keyboard-command-area",function(a){a.width="100%",a.height="100%",a.overflow="hidden",a.position="absolute",a.top="0px",a.left="0px",a.resize="none"}(this.keyboardCommandArea.style),this.container.insertBefore(this.canvas,this.container.firstChild),this.container.insertBefore(this.keyboardCommandArea,this.container.firstChild),this.element.appendChild(this.container),this.bodyWidth=document.body.style.width,this.bodyHeight=document.body.style.height,this.bodyOverflow=document.body.style.overflow,this.docOverflow=document.documentElement.style.overflow,this.keyboardCommandArea.innerTracker=new $.MouseTracker({_this:this,element:this.keyboardCommandArea,focusHandler:function(){var a=$.getElementPosition(this.element);window.scrollTo(0,a.y)},keyHandler:function(a,b,c){switch(b){case 61:return d.viewport.zoomBy(1.1),d.viewport.applyConstraints(),!1;case 45:return d.viewport.zoomBy(.9),d.viewport.applyConstraints(),!1;case 48:return d.viewport.goHome(),d.viewport.applyConstraints(),!1;case 119:case 87:case 38:return c?d.viewport.zoomBy(1.1):d.viewport.panBy(new $.Point(0,-.05)),d.viewport.applyConstraints(),!1;case 115:case 83:case 40:return c?d.viewport.zoomBy(.9):d.viewport.panBy(new $.Point(0,.05)),d.viewport.applyConstraints(),!1;case 97:case 37:return d.viewport.panBy(new $.Point(-.05,0)),d.viewport.applyConstraints(),!1;case 100:case 39:return d.viewport.panBy(new $.Point(.05,0)),d.viewport.applyConstraints(),!1;default:return!0}}}).setTracking(!0),this.innerTracker=new $.MouseTracker({element:this.canvas,clickTimeThreshold:this.clickTimeThreshold,clickDistThreshold:this.clickDistThreshold,clickHandler:$.delegate(this,onCanvasClick),dragHandler:$.delegate(this,onCanvasDrag),releaseHandler:$.delegate(this,onCanvasRelease),scrollHandler:$.delegate(this,onCanvasScroll)}).setTracking(this.mouseNavEnabled?!0:!1),this.outerTracker=new $.MouseTracker({element:this.container,clickTimeThreshold:this.clickTimeThreshold,clickDistThreshold:this.clickDistThreshold,enterHandler:$.delegate(this,onContainerEnter),exitHandler:$.delegate(this,onContainerExit),releaseHandler:$.delegate(this,onContainerRelease)}).setTracking(this.mouseNavEnabled?!0:!1),this.toolbar&&(this.toolbar=new $.ControlDock({element:this.toolbar})),this.bindStandardControls(),this.bindSequenceControls(),b=0;b<this.customControls.length;b++)this.addControl(this.customControls[b].id,{anchor:this.customControls[b].anchor});$.requestAnimationFrame(function(){beginControlsAutoHide(d)})},$.extend($.Viewer.prototype,$.EventHandler.prototype,$.ControlDock.prototype,{isOpen:function(){return!!this.source},openDzi:function(a){return this.open(a)},openTileSource:function(a){return this.open(a)},open:function(tileSource){var _this=this,customTileSource,readySource,$TileSource,options;return _this._hideMessage(),"string"==$.type(tileSource)&&(tileSource.match(/\s*<.*/)?tileSource=$.parseXml(tileSource):tileSource.match(/\s*[\{\[].*/)&&(tileSource=eval("("+tileSource+")"))),setTimeout(function(){if("string"==$.type(tileSource))tileSource=new $.TileSource(tileSource,function(a){openTileSource(_this,a)}),tileSource.addHandler("open-failed",function(a,b){_this.raiseEvent("open-failed",b)});else if($.isPlainObject(tileSource)||tileSource.nodeType)if($.isFunction(tileSource.getTileUrl))customTileSource=new $.TileSource(tileSource),customTileSource.getTileUrl=tileSource.getTileUrl,openTileSource(_this,customTileSource);else{if($TileSource=$.TileSource.determineType(_this,tileSource),!$TileSource)return _this.raiseEvent("open-failed",{message:"Unable to load TileSource",source:tileSource}),void 0;options=$TileSource.prototype.configure.apply(_this,[tileSource]),readySource=new $TileSource(options),openTileSource(_this,readySource)}else openTileSource(_this,tileSource)},1),this},close:function(){return null!==this._updateRequestId&&($.cancelAnimationFrame(this._updateRequestId),this._updateRequestId=null),this.navigator&&this.navigator.close(),this.drawer&&this.drawer.clearOverlays(),this.source=null,this.drawer=null,this.viewport=this.preserveViewport?this.viewport:null,this.canvas.innerHTML="",VIEWERS[this.hash]=null,delete VIEWERS[this.hash],this.raiseEvent("close",{viewer:this}),this},isMouseNavEnabled:function(){return this.innerTracker.isTracking()},setMouseNavEnabled:function(a){return this.innerTracker.setTracking(a),this.raiseEvent("mouse-enabled",{enabled:a,viewer:this}),this},areControlsEnabled:function(){var a,b=this.controls.length;for(a=0;a<this.controls.length;a++)b=b&&this.controls[a].isVisibile();return b},setControlsEnabled:function(a){return a?abortControlsAutoHide(this):beginControlsAutoHide(this),this.raiseEvent("controls-enabled",{enabled:a,viewer:this}),this},isFullPage:function(){return THIS[this.hash].fullPage},setFullPage:function(a){var b,c,d,e,f,g,h=document.body,i=h.style,j=document.documentElement.style,k=this.canvas.style,l=this;if(a!=this.isFullPage()){if(a){for(this.bodyOverflow=i.overflow,this.docOverflow=j.overflow,i.overflow="hidden",j.overflow="hidden",this.bodyWidth=i.width,this.bodyHeight=i.height,i.width="100%",i.height="100%",this.previousBody=[],THIS[this.hash].prevElementParent=this.element.parentNode,THIS[this.hash].prevNextSibling=this.element.nextSibling,THIS[this.hash].prevElementSize=$.getElementSize(this.element),f=h.childNodes.length,g=0;f>g;g++)this.previousBody.push(h.childNodes[0]),h.removeChild(h.childNodes[0]);this.toolbar&&this.toolbar.element&&(this.toolbar.parentNode=this.toolbar.element.parentNode,this.toolbar.nextSibling=this.toolbar.element.nextSibling,h.appendChild(this.toolbar.element),$.addClass(this.toolbar.element,"fullpage")),$.addClass(this.element,"fullpage"),h.appendChild(this.element),$.supportsFullScreen?(THIS[this.hash].onfullscreenchange=function(){$.isFullScreen()?l.setFullPage(!0):l.setFullPage(!1)},$.requestFullScreen(document.body),document.addEventListener($.fullScreenEventName,THIS[this.hash].onfullscreenchange),this.element.style.height="100%",this.element.style.width="100%"):(this.element.style.height=$.getWindowSize().y+"px",this.element.style.width=$.getWindowSize().x+"px"),this.toolbar&&this.toolbar.element&&(this.element.style.height=$.getElementSize(this.element).y-$.getElementSize(this.toolbar.element).y+"px"),THIS[this.hash].fullPage=!0,$.delegate(this,onContainerEnter)()}else{for($.supportsFullScreen&&(document.removeEventListener($.fullScreenEventName,THIS[this.hash].onfullscreenchange),$.cancelFullScreen(document)),i.overflow=this.bodyOverflow,j.overflow=this.docOverflow,i.width=this.bodyWidth,i.height=this.bodyHeight,k.backgroundColor="",k.color="",h.removeChild(this.element),f=this.previousBody.length,g=0;f>g;g++)h.appendChild(this.previousBody.shift());$.removeClass(this.element,"fullpage"),THIS[this.hash].prevElementParent.insertBefore(this.element,THIS[this.hash].prevNextSibling),this.toolbar&&this.toolbar.element&&(h.removeChild(this.toolbar.element),$.removeClass(this.toolbar.element,"fullpage"),this.toolbar.parentNode.insertBefore(this.toolbar.element,this.toolbar.nextSibling),delete this.toolbar.parentNode,delete this.toolbar.nextSibling),this.element.style.height=THIS[this.hash].prevElementSize.y+"px",this.element.style.width=THIS[this.hash].prevElementSize.x+"px",THIS[this.hash].fullPage=!1,$.delegate(this,onContainerExit)()}if(this.raiseEvent("fullpage",{fullpage:a,viewer:this}),this.viewport){if(b=this.viewport.getBounds(),this.viewport.resize(THIS[this.hash].prevContainerSize),c=this.viewport.getBounds(),a)THIS[this.hash].fsBoundsDelta=new $.Point(c.width/b.width,c.height/b.height);else{this.viewport.update(),this.viewport.zoomBy(Math.max(THIS[this.hash].fsBoundsDelta.x,THIS[this.hash].fsBoundsDelta.y),null,!0);for(e in VIEWERS)d=VIEWERS[e],d!==this&&d!=this.navigator&&(d.open(d.source),d.navigator&&d.navigator.open(d.source))}THIS[this.hash].forceRedraw=!0,updateOnce(this)}return this}},isVisible:function(){return"hidden"!=this.container.style.visibility},setVisible:function(a){return this.container.style.visibility=a?"":"hidden",this.raiseEvent("visible",{visible:a,viewer:this}),this},bindSequenceControls:function(){var a=$.delegate(this,onFocus),b=$.delegate(this,onBlur),c=$.delegate(this,onNext),d=$.delegate(this,onPrevious),e=this.navImages,f=!0;return this.showSequenceControl&&THIS[this.hash].sequenced&&((this.previousButton||this.nextButton)&&(f=!1),this.previousButton=new $.Button({element:this.previousButton?$.getElement(this.previousButton):null,clickTimeThreshold:this.clickTimeThreshold,clickDistThreshold:this.clickDistThreshold,tooltip:$.getString("Tooltips.PreviousPage"),srcRest:resolveUrl(this.prefixUrl,e.previous.REST),srcGroup:resolveUrl(this.prefixUrl,e.previous.GROUP),srcHover:resolveUrl(this.prefixUrl,e.previous.HOVER),srcDown:resolveUrl(this.prefixUrl,e.previous.DOWN),onRelease:d,onFocus:a,onBlur:b}),this.nextButton=new $.Button({element:this.nextButton?$.getElement(this.nextButton):null,clickTimeThreshold:this.clickTimeThreshold,clickDistThreshold:this.clickDistThreshold,tooltip:$.getString("Tooltips.NextPage"),srcRest:resolveUrl(this.prefixUrl,e.next.REST),srcGroup:resolveUrl(this.prefixUrl,e.next.GROUP),srcHover:resolveUrl(this.prefixUrl,e.next.HOVER),srcDown:resolveUrl(this.prefixUrl,e.next.DOWN),onRelease:c,onFocus:a,onBlur:b}),this.navPrevNextWrap||this.previousButton.disable(),f&&(this.paging=new $.ButtonGroup({buttons:[this.previousButton,this.nextButton],clickTimeThreshold:this.clickTimeThreshold,clickDistThreshold:this.clickDistThreshold}),this.pagingControl=this.paging.element,this.toolbar?this.toolbar.addControl(this.pagingControl,{anchor:$.ControlAnchor.BOTTOM_RIGHT}):this.addControl(this.pagingControl,{anchor:$.ControlAnchor.TOP_LEFT}))),this},bindStandardControls:function(){var a=$.delegate(this,beginZoomingIn),b=$.delegate(this,endZooming),c=$.delegate(this,doSingleZoomIn),d=$.delegate(this,beginZoomingOut),e=$.delegate(this,doSingleZoomOut),f=$.delegate(this,onHome),g=$.delegate(this,onFullPage),h=$.delegate(this,onFocus),i=$.delegate(this,onBlur),j=this.navImages,k=[],l=!0;return this.showNavigationControl&&((this.zoomInButton||this.zoomOutButton||this.homeButton||this.fullPageButton)&&(l=!1),k.push(this.zoomInButton=new $.Button({element:this.zoomInButton?$.getElement(this.zoomInButton):null,clickTimeThreshold:this.clickTimeThreshold,clickDistThreshold:this.clickDistThreshold,tooltip:$.getString("Tooltips.ZoomIn"),srcRest:resolveUrl(this.prefixUrl,j.zoomIn.REST),srcGroup:resolveUrl(this.prefixUrl,j.zoomIn.GROUP),srcHover:resolveUrl(this.prefixUrl,j.zoomIn.HOVER),srcDown:resolveUrl(this.prefixUrl,j.zoomIn.DOWN),onPress:a,onRelease:b,onClick:c,onEnter:a,onExit:b,onFocus:h,onBlur:i})),k.push(this.zoomOutButton=new $.Button({element:this.zoomOutButton?$.getElement(this.zoomOutButton):null,clickTimeThreshold:this.clickTimeThreshold,clickDistThreshold:this.clickDistThreshold,tooltip:$.getString("Tooltips.ZoomOut"),srcRest:resolveUrl(this.prefixUrl,j.zoomOut.REST),srcGroup:resolveUrl(this.prefixUrl,j.zoomOut.GROUP),srcHover:resolveUrl(this.prefixUrl,j.zoomOut.HOVER),srcDown:resolveUrl(this.prefixUrl,j.zoomOut.DOWN),onPress:d,onRelease:b,onClick:e,onEnter:d,onExit:b,onFocus:h,onBlur:i})),k.push(this.homeButton=new $.Button({element:this.homeButton?$.getElement(this.homeButton):null,clickTimeThreshold:this.clickTimeThreshold,clickDistThreshold:this.clickDistThreshold,tooltip:$.getString("Tooltips.Home"),srcRest:resolveUrl(this.prefixUrl,j.home.REST),srcGroup:resolveUrl(this.prefixUrl,j.home.GROUP),srcHover:resolveUrl(this.prefixUrl,j.home.HOVER),srcDown:resolveUrl(this.prefixUrl,j.home.DOWN),onRelease:f,onFocus:h,onBlur:i})),k.push(this.fullPageButton=new $.Button({element:this.fullPageButton?$.getElement(this.fullPageButton):null,clickTimeThreshold:this.clickTimeThreshold,clickDistThreshold:this.clickDistThreshold,tooltip:$.getString("Tooltips.FullPage"),srcRest:resolveUrl(this.prefixUrl,j.fullpage.REST),srcGroup:resolveUrl(this.prefixUrl,j.fullpage.GROUP),srcHover:resolveUrl(this.prefixUrl,j.fullpage.HOVER),srcDown:resolveUrl(this.prefixUrl,j.fullpage.DOWN),onRelease:g,onFocus:h,onBlur:i})),l&&(this.buttons=new $.ButtonGroup({buttons:k,clickTimeThreshold:this.clickTimeThreshold,clickDistThreshold:this.clickDistThreshold}),this.navControl=this.buttons.element,this.addHandler("open",$.delegate(this,lightUp)),this.toolbar?this.toolbar.addControl(this.navControl,{anchor:$.ControlAnchor.TOP_LEFT}):this.addControl(this.navControl,{anchor:$.ControlAnchor.TOP_LEFT}))),this},goToPage:function(a){return this.raiseEvent("page",{page:a,viewer:this}),this.tileSources.length>a&&(THIS[this.hash].sequence=a,this.nextButton&&(this.tileSources.length-1===a?this.navPrevNextWrap||this.nextButton.disable():this.nextButton.enable()),this.previousButton&&(a>0?this.previousButton.enable():this.navPrevNextWrap||this.previousButton.disable()),this.open(this.tileSources[a])),$.isFunction(this.onPageChange)&&this.onPageChange({page:a,viewer:this}),this.referenceStrip&&this.referenceStrip.setFocus(a),this},_showMessage:function(a){this._hideMessage();var b=$.makeNeutralElement("div");b.appendChild(document.createTextNode(a)),this.messageDiv=$.makeCenteredNode(b),$.addClass(this.messageDiv,"openseadragon-message"),this.container.appendChild(this.messageDiv)},_hideMessage:function(){var a=this.messageDiv;a&&(a.parentNode.removeChild(a),delete this.messageDiv)}})}(OpenSeadragon),function(a){function b(b,c){var d,e,f;this.drag?this.drag=!1:this.viewer.viewport&&(e=this.viewport.deltaPointsFromPixels(c),f=this.viewer.viewport.getBounds().getSize(),d=new a.Rect(e.x-f.x/2,e.y-f.y/2,f.x,f.y),this.viewer.source.aspectRatio>this.viewer.viewport.getAspectRatio()?d.y=d.y-(this.viewerSizeInPoints.y-1/this.viewer.source.aspectRatio)/2:d.x=d.x-(this.viewerSizeInPoints.x-1)/2,this.viewer.viewport.fitBounds(d),this.viewer.viewport.applyConstraints())}function c(a,b,c){this.viewer.viewport&&(this.drag=!0,this.panHorizontal||(c.x=0),this.panVertical||(c.y=0),this.viewer.viewport.panBy(this.viewport.deltaPointsFromPixels(c)))}function d(a,b,c){c&&this.viewer.viewport&&this.viewer.viewport.applyConstraints()}a.Navigator=function(e){var f,g=e.viewer,h=a.getElementSize(g.element);e.id?(this.element=document.getElementById(e.id),e.controlOptions={anchor:a.ControlAnchor.NONE,attachToViewer:!1,autoFade:!1}):(e.id="navigator-"+a.now(),this.element=a.makeNeutralElement("div"),e.controlOptions={anchor:a.ControlAnchor.TOP_RIGHT,attachToViewer:!0,autoFade:!0}),this.element.id=e.id,this.element.className+=" navigator",e=a.extend(!0,{sizeRatio:a.DEFAULT_SETTINGS.navigatorSizeRatio},e,{element:this.element,showNavigator:!1,mouseNavEnabled:!1,showNavigationControl:!1,showSequenceControl:!1,immediateRender:!0,blendTime:0,animationTime:0}),e.minPixelRatio=this.minPixelRatio=g.minPixelRatio,this.viewerSizeInPoints=g.viewport.deltaPointsFromPixels(h),this.borderWidth=2,this.fudge=new a.Point(1,1),this.totalBorderWidths=new a.Point(2*this.borderWidth,2*this.borderWidth).minus(this.fudge),function(a,b){a.margin="0px",a.border=b+"px solid #555",a.padding="0px",a.background="#000",a.opacity=.8,a.overflow="hidden"}(this.element.style,this.borderWidth),this.displayRegion=a.makeNeutralElement("div"),this.displayRegion.id=this.element.id+"-displayregion",this.displayRegion.className="displayregion",function(a,b){a.position="relative",a.top="0px",a.left="0px",a.fontSize="0px",a.overflow="hidden",a.border=b+"px solid #900",a.margin="0px",a.padding="0px",a.background="transparent",a["float"]="left",a.cssFloat="left",a.styleFloat="left",a.zIndex=999999999,a.cursor="default"}(this.displayRegion.style,this.borderWidth),this.element.innerTracker=new a.MouseTracker({element:this.element,dragHandler:a.delegate(this,c),clickHandler:a.delegate(this,b),releaseHandler:a.delegate(this,d),scrollHandler:function(){return!1}}).setTracking(!0),g.addControl(this.element,e.controlOptions),e.width&&e.height?(this.element.style.width=e.width+"px",this.element.style.height=e.height+"px"):(this.element.style.width=h.x*e.sizeRatio+"px",this.element.style.height=h.y*e.sizeRatio+"px"),a.Viewer.apply(this,[e]),this.element.getElementsByTagName("form")[0].appendChild(this.displayRegion),f=this.element.getElementsByTagName("textarea")[0],f&&f.parentNode.removeChild(f)},a.extend(a.Navigator.prototype,a.EventHandler.prototype,a.Viewer.prototype,{update:function(a){var b,c,d;a&&this.viewport&&(b=a.getBounds(!0),c=this.viewport.pixelFromPoint(b.getTopLeft()),d=this.viewport.pixelFromPoint(b.getBottomRight()).minus(this.totalBorderWidths),function(a){a.top=c.y+"px",a.left=c.x+"px";var b=Math.abs(c.x-d.x),e=Math.abs(c.y-d.y);a.width=Math.max(b,0)+"px",a.height=Math.max(e,0)+"px"}(this.displayRegion.style))},open:function(b){var c=this.viewer.viewport.containerSize.times(this.sizeRatio);return this.minPixelRatio=b.tileSize>c.x||b.tileSize>c.y?Math.min(c.x,c.y)/b.tileSize:this.viewer.minPixelRatio,a.Viewer.prototype.open.apply(this,[b])}})}(OpenSeadragon),function(a){var b={Errors:{Dzc:"Sorry, we don't support Deep Zoom Collections!",Dzi:"Hmm, this doesn't appear to be a valid Deep Zoom Image.",Xml:"Hmm, this doesn't appear to be a valid Deep Zoom Image.",ImageFormat:"Sorry, we don't support {0}-based Deep Zoom Images.",Security:"It looks like a security restriction stopped us from loading this Deep Zoom Image.",Status:"This space unintentionally left blank ({0} {1}).","Open-Failed":"Unable to open {0}: {1}"},Tooltips:{FullPage:"Toggle full page",Home:"Go home",ZoomIn:"Zoom in",ZoomOut:"Zoom out",NextPage:"Next page",PreviousPage:"Previous page"}};a.extend(a,{getString:function(c){var d,e=c.split("."),f=null,g=arguments,h=b;for(d=0;d<e.length-1;d++)h=h[e[d]]||{};return f=h[e[d]],"string"!=typeof f&&(a.console.debug("Untranslated source string:",c),f=""),f.replace(/\{\d+\}/g,function(a){var b=parseInt(a.match(/\d+/),10)+1;return b<g.length?g[b]:""})},setString:function(a,c){var d,e=a.split("."),f=b;for(d=0;d<e.length-1;d++)f[e[d]]||(f[e[d]]={}),f=f[e[d]];f[e[d]]=c}})}(OpenSeadragon),function(a){a.Point=function(a,b){this.x="number"==typeof a?a:0,this.y="number"==typeof b?b:0},a.Point.prototype={plus:function(b){return new a.Point(this.x+b.x,this.y+b.y)},minus:function(b){return new a.Point(this.x-b.x,this.y-b.y)},times:function(b){return new a.Point(this.x*b,this.y*b)},divide:function(b){return new a.Point(this.x/b,this.y/b)},negate:function(){return new a.Point(-this.x,-this.y)},distanceTo:function(a){return Math.sqrt(Math.pow(this.x-a.x,2)+Math.pow(this.y-a.y,2))},apply:function(b){return new a.Point(b(this.x),b(this.y))},equals:function(b){return b instanceof a.Point&&this.x===b.x&&this.y===b.y},toString:function(){return"("+Math.round(this.x)+","+Math.round(this.y)+")"}}}(OpenSeadragon),function($){function processResponse(xhr){var responseText=xhr.responseText,status=xhr.status,statusText,data;if(!xhr)throw new Error($.getString("Errors.Security"));if(200!==xhr.status&&0!==xhr.status)throw status=xhr.status,statusText=404==status?"Not Found":xhr.statusText,new Error($.getString("Errors.Status",status,statusText));if(responseText.match(/\s*<.*/))try{data=xhr.responseXML&&xhr.responseXML.documentElement?xhr.responseXML:$.parseXml(responseText)}catch(e){data=xhr.responseText}else data=responseText.match(/\s*[\{\[].*/)?eval("("+responseText+")"):responseText;return data}$.TileSource=function(a){var b,c,d=null,e=arguments;for(b=$.isPlainObject(a)?a:{width:e[0],height:e[1],tileSize:e[2],tileOverlap:e[3],minLevel:e[4],maxLevel:e[5]},$.EventHandler.call(this),$.extend(!0,this,b),c=0;c<arguments.length;c++)if($.isFunction(arguments[c])){d=arguments[c],this.addHandler("ready",function(a,b){d(b)});break}"string"==$.type(arguments[0])?(this.aspectRatio=1,this.dimensions=new $.Point(10,10),this.tileSize=0,this.tileOverlap=0,this.minLevel=0,this.maxLevel=0,this.ready=!1,this.getImageInfo(arguments[0])):(this.ready=!0,this.aspectRatio=b.width&&b.height?b.width/b.height:1,this.dimensions=new $.Point(b.width,b.height),this.tileSize=b.tileSize?b.tileSize:0,this.tileOverlap=b.tileOverlap?b.tileOverlap:0,this.minLevel=b.minLevel?b.minLevel:0,this.maxLevel=void 0!==b.maxLevel&&null!==b.maxLevel?b.maxLevel:b.width&&b.height?Math.ceil(Math.log(Math.max(b.width,b.height))/Math.log(2)):0,d&&$.isFunction(d)&&d(this))},$.TileSource.prototype={getLevelScale:function(a){var b,c={};for(b=0;b<=this.maxLevel;b++)c[b]=1/Math.pow(2,this.maxLevel-b);return this.getLevelScale=function(a){return c[a]},this.getLevelScale(a)},getNumTiles:function(a){var b=this.getLevelScale(a),c=Math.ceil(b*this.dimensions.x/this.tileSize),d=Math.ceil(b*this.dimensions.y/this.tileSize);return new $.Point(c,d)},getPixelRatio:function(a){var b=this.dimensions.times(this.getLevelScale(a)),c=1/b.x,d=1/b.y;return new $.Point(c,d)},getClosestLevel:function(a){var b,c,d=Math.floor(Math.max(a.x,a.y)/this.tileSize);for(b=this.minLevel;b<this.maxLevel&&(c=this.getNumTiles(b),!(Math.max(c.x,c.y)+1>=d));b++);return Math.max(0,b-1)},getTileAtPoint:function(a,b){var c=b.times(this.dimensions.x).times(this.getLevelScale(a)),d=Math.floor(c.x/this.tileSize),e=Math.floor(c.y/this.tileSize);return new $.Point(d,e)},getTileBounds:function(a,b,c){var d=this.dimensions.times(this.getLevelScale(a)),e=0===b?0:this.tileSize*b-this.tileOverlap,f=0===c?0:this.tileSize*c-this.tileOverlap,g=this.tileSize+(0===b?1:2)*this.tileOverlap,h=this.tileSize+(0===c?1:2)*this.tileOverlap,i=1/d.x;return g=Math.min(g,d.x-e),h=Math.min(h,d.y-f),new $.Rect(e*i,f*i,g*i,h*i)},getImageInfo:function(a){var b,c,d,e,f,g,h,i=this;a&&(f=a.split("/"),g=f[f.length-1],h=g.lastIndexOf("."),h>-1&&(f[f.length-1]=g.slice(0,h))),c=function(b){var c=$.TileSource.determineType(i,b,a);return c?(e=c.prototype.configure.apply(i,[b,a]),d=new c(e),i.ready=!0,i.raiseEvent("ready",d),void 0):(i.raiseEvent("open-failed",{message:"Unable to load TileSource",source:a}),void 0)},a.match(/\.js$/)?(b=a.split("/").pop().replace(".js",""),$.jsonp({url:a,async:!1,callbackName:b,callback:c})):$.makeAjaxRequest(a,function(a){var b=processResponse(a);c(b)},function(b){i.raiseEvent("open-failed",{message:"HTTP "+b.status+" attempting to load TileSource",source:a})})},supports:function(){return!1},configure:function(){throw new Error("Method not implemented.")},getTileUrl:function(){throw new Error("Method not implemented.")},tileExists:function(a,b,c){var d=this.getNumTiles(a);return a>=this.minLevel&&a<=this.maxLevel&&b>=0&&c>=0&&b<d.x&&c<d.y}},$.extend(!0,$.TileSource.prototype,$.EventHandler.prototype),$.TileSource.determineType=function(a,b,c){var d;for(d in OpenSeadragon)if(d.match(/.+TileSource$/)&&$.isFunction(OpenSeadragon[d])&&$.isFunction(OpenSeadragon[d].prototype.supports)&&OpenSeadragon[d].prototype.supports.call(a,b,c))return OpenSeadragon[d];$.console.error("No TileSource was able to open %s %s",c,b)}}(OpenSeadragon),function(a){function b(b,d){if(!d||!d.documentElement)throw new Error(a.getString("Errors.Xml"));var e,f,g,h,i,j=d.documentElement,k=j.tagName,l=null,m=[];if("Image"==k)try{if(h=j.getElementsByTagName("Size")[0],l={Image:{xmlns:"http://schemas.microsoft.com/deepzoom/2008",Url:j.getAttribute("Url"),Format:j.getAttribute("Format"),DisplayRect:null,Overlap:parseInt(j.getAttribute("Overlap"),10),TileSize:parseInt(j.getAttribute("TileSize"),10),Size:{Height:parseInt(h.getAttribute("Height"),10),Width:parseInt(h.getAttribute("Width"),10)}}},!a.imageFormatSupported(l.Image.Format))throw new Error(a.getString("Errors.ImageFormat",l.Image.Format.toUpperCase()));for(e=j.getElementsByTagName("DisplayRect"),i=0;i<e.length;i++)f=e[i],g=f.getElementsByTagName("Rect")[0],m.push({Rect:{X:parseInt(g.getAttribute("X"),10),Y:parseInt(g.getAttribute("Y"),10),Width:parseInt(g.getAttribute("Width"),10),Height:parseInt(g.getAttribute("Height"),10),MinLevel:parseInt(f.getAttribute("MinLevel"),10),MaxLevel:parseInt(f.getAttribute("MaxLevel"),10)}});return m.length&&(l.Image.DisplayRect=m),c(b,l)}catch(n){throw n instanceof Error?n:new Error(a.getString("Errors.Dzi"))}else{if("Collection"==k)throw new Error(a.getString("Errors.Dzc"));if("Error"==k)return a._processDZIError(j)}throw new Error(a.getString("Errors.Dzi"))}function c(b,c){var d,e,f=c.Image,g=f.Url,h=f.Format,i=f.Size,j=f.DisplayRect||[],k=parseInt(i.Width,10),l=parseInt(i.Height,10),m=parseInt(f.TileSize,10),n=parseInt(f.Overlap,10),o=[];for(e=0;e<j.length;e++)d=j[e].Rect,o.push(new a.DisplayRect(parseInt(d.X,10),parseInt(d.Y,10),parseInt(d.Width,10),parseInt(d.Height,10),parseInt(d.MinLevel,10),parseInt(d.MaxLevel,10)));return a.extend(!0,{width:k,height:l,tileSize:m,tileOverlap:n,minLevel:null,maxLevel:null,tilesUrl:g,fileFormat:h,displayRects:o},c)}a.DziTileSource=function(b){var c,d,e,f;if(f=a.isPlainObject(b)?b:{width:arguments[0],height:arguments[1],tileSize:arguments[2],tileOverlap:arguments[3],tilesUrl:arguments[4],fileFormat:arguments[5],displayRects:arguments[6],minLevel:arguments[7],maxLevel:arguments[8]},this._levelRects={},this.tilesUrl=f.tilesUrl,this.fileFormat=f.fileFormat,this.displayRects=f.displayRects,this.displayRects)for(c=this.displayRects.length-1;c>=0;c--)for(d=this.displayRects[c],e=d.minLevel;e<=d.maxLevel;e++)this._levelRects[e]||(this._levelRects[e]=[]),this._levelRects[e].push(d);a.TileSource.apply(this,[f])},a.extend(a.DziTileSource.prototype,a.TileSource.prototype,{supports:function(a){var b;return a.Image?b=a.Image.xmlns:a.documentElement&&"Image"==a.documentElement.tagName&&(b=a.documentElement.namespaceURI),"http://schemas.microsoft.com/deepzoom/2008"==b||"http://schemas.microsoft.com/deepzoom/2009"==b},configure:function(d,e){var f;return f=a.isPlainObject(d)?c(this,d):b(this,d),e&&!f.tilesUrl&&(f.tilesUrl=e.replace(/([^\/]+)\.(dzi|xml|js)$/,"$1_files/")),f},getTileUrl:function(a,b,c){return[this.tilesUrl,a,"/",b,"_",c,".",this.fileFormat].join("")},tileExists:function(a,b,c){var d,e,f,g,h,i,j,k=this._levelRects[a];if(!k||!k.length)return!0;for(j=k.length-1;j>=0;j--)if(d=k[j],!(a<d.minLevel||a>d.maxLevel)&&(e=this.getLevelScale(a),f=d.x*e,g=d.y*e,h=f+d.width*e,i=g+d.height*e,f=Math.floor(f/this.tileSize),g=Math.floor(g/this.tileSize),h=Math.ceil(h/this.tileSize),i=Math.ceil(i/this.tileSize),b>=f&&h>b&&c>=g&&i>c))return!0;return!1}})}(OpenSeadragon),function(a){function b(b,e){if(!e||!e.documentElement)throw new Error(a.getString("Errors.Xml"));var f=e.documentElement,g=f.tagName,h=null;if("info"==g)try{return h={ns:f.namespaceURI},c(f,h),d(b,h)}catch(i){throw i instanceof Error?i:new Error(a.getString("Errors.IIIF"))}throw new Error(a.getString("Errors.IIIF"))}function c(b,d,e){var f,g;if(3==b.nodeType&&e)g=b.nodeValue.trim(),g.match(/^\d*$/)&&(g=Number(g)),d[e]?(a.isArray(d[e])||(d[e]=[d[e]]),d[e].push(g)):d[e]=g;else if(1==b.nodeType)for(f=0;f<b.childNodes.length;f++)c(b.childNodes[f],d,b.nodeName)}function d(a,b){return b.image_host&&(b.tilesUrl=b.image_host),b}a.IIIFTileSource=function(b){if(a.extend(!0,this,b),!(this.height&&this.width&&this.identifier&&this.tilesUrl))throw new Error("IIIF required parameters not provided.");if(b.tileSize=this.tile_width,!b.maxLevel){var c=-1,d=this.scale_factors||this.scale_factor;if(d instanceof Array)for(var e=0;e<d.length;e++){var f=Number(d[e]);!isNaN(f)&&f>c&&(c=f)}b.maxLevel=0>c?Number(Math.ceil(Math.log(Math.max(this.width,this.height),2))):c}a.TileSource.apply(this,[b])
},a.extend(a.IIIFTileSource.prototype,a.TileSource.prototype,{supports:function(a){return a.ns&&"http://library.stanford.edu/iiif/image-api/ns/"==a.ns||a.profile&&("http://library.stanford.edu/iiif/image-api/compliance.html#level1"==a.profile||"http://library.stanford.edu/iiif/image-api/compliance.html#level2"==a.profile||"http://library.stanford.edu/iiif/image-api/compliance.html#level3"==a.profile||"http://library.stanford.edu/iiif/image-api/compliance.html"==a.profile)||a.documentElement&&"info"==a.documentElement.tagName&&"http://library.stanford.edu/iiif/image-api/ns/"==a.documentElement.namespaceURI},configure:function(c,e){var f,g,h;return g=a.isPlainObject(c)?d(this,c):b(this,c),e&&!g.tilesUrl&&(f=e.split("/"),f.pop(),f=f.join("/"),"http"!==e.substring(0,4)&&(h=location.protocol+"//"+location.host,f=h+f),g.tilesUrl=f.replace(c.identifier,"")),g},getTileUrl:function(a,b,c){var d,e,f,g,h,i="0",j="native.jpg",k=Math.pow(.5,this.maxLevel-a),l="pct:"+100*k,m=Math.ceil(this.width*k),n=Math.ceil(this.height*k),o=Math.ceil(this.tileSize/k),p=Math.ceil(this.tileSize/k);return m<this.tile_width&&n<this.tile_height?d="full":(e=b*o,f=c*p,g=Math.min(o,this.width-e),h=Math.min(p,this.height-f),d=[e,f,g,h].join(",")),[this.tilesUrl.replace(/\/$/,""),encodeURIComponent(this.identifier),d,l,i,j].join("/")}})}(OpenSeadragon),function(a){a.OsmTileSource=function(b){var c;c=a.isPlainObject(b)?b:{width:arguments[0],height:arguments[1],tileSize:arguments[2],tileOverlap:arguments[3],tilesUrl:arguments[4]},c.width&&c.height||(c.width=65572864,c.height=65572864),c.tileSize||(c.tileSize=256,c.tileOverlap=0),c.tilesUrl||(c.tilesUrl="http://tile.openstreetmap.org/"),c.minLevel=8,a.TileSource.apply(this,[c])},a.extend(a.OsmTileSource.prototype,a.TileSource.prototype,{supports:function(a){return a.type&&"openstreetmaps"==a.type},configure:function(a){return a},getTileUrl:function(a,b,c){return this.tilesUrl+(a-8)+"/"+b+"/"+c+".png"}})}(OpenSeadragon),function(a){a.TmsTileSource=function(b){var c;c=a.isPlainObject(b)?b:{width:arguments[0],height:arguments[1],tileSize:arguments[2],tileOverlap:arguments[3],tilesUrl:arguments[4]};var d,e=256*Math.ceil(c.width/256),f=256*Math.ceil(c.height/256);d=e>f?e/256:f/256,c.maxLevel=Math.ceil(Math.log(d)/Math.log(2))-1,c.tileSize=256,c.width=e,c.height=f,a.TileSource.apply(this,[c])},a.extend(a.TmsTileSource.prototype,a.TileSource.prototype,{supports:function(a){return a.type&&"tiledmapservice"==a.type},configure:function(a){return a},getTileUrl:function(a,b,c){var d=this.getNumTiles(a).y-1;return this.tilesUrl+a+"/"+b+"/"+(d-c)+".png"}})}(OpenSeadragon),function(a){function b(a){var b,c,d=[];for(c=0;c<a.length;c++)b=a[c],b.height&&b.width&&b.url&&(b.url.toLowerCase().match(/^.*\.(png|jpg|jpeg|gif)$/)||b.mimetype&&b.mimetype.toLowerCase().match(/^.*\/(png|jpg|jpeg|gif)$/))&&d.push({url:b.url,width:Number(b.width),height:Number(b.height)});return d.sort(function(a,b){return a.height-b.height})}function c(b,c){if(!c||!c.documentElement)throw new Error(a.getString("Errors.Xml"));var e,f,g=c.documentElement,h=g.tagName,i=null,j=[];if("image"==h)try{for(i={type:g.getAttribute("type"),levels:[]},j=g.getElementsByTagName("level"),f=0;f<j.length;f++)e=j[f],i.levels.push({url:e.getAttribute("url"),width:parseInt(e.getAttribute("width"),10),height:parseInt(e.getAttribute("height"),10)});return d(b,i)}catch(k){throw k instanceof Error?k:new Error("Unknown error parsing Legacy Image Pyramid XML.")}else{if("collection"==h)throw new Error("Legacy Image Pyramid Collections not yet supported.");if("error"==h)throw new Error("Error: "+c)}throw new Error("Unknown element "+h)}function d(a,b){return b.levels}a.LegacyTileSource=function(c){var d,e,f;a.isArray(c)&&(d={type:"legacy-image-pyramid",levels:c}),d.levels=b(d.levels),e=d.levels[d.levels.length-1].width,f=d.levels[d.levels.length-1].height,a.extend(!0,d,{width:e,height:f,tileSize:Math.max(f,e),tileOverlap:0,minLevel:0,maxLevel:d.levels.length-1}),a.TileSource.apply(this,[d]),this.levels=d.levels},a.extend(a.LegacyTileSource.prototype,a.TileSource.prototype,{supports:function(a){return a.type&&"legacy-image-pyramid"==a.type||a.documentElement&&"legacy-image-pyramid"==a.documentElement.getAttribute("type")},configure:function(b){var e;return e=a.isPlainObject(b)?d(this,b):c(this,b)},getLevelScale:function(a){var b=0/0;return a>=this.minLevel&&a<=this.maxLevel&&(b=this.levels[a].width/this.levels[this.maxLevel].width),b},getNumTiles:function(b){var c=this.getLevelScale(b);return c?new a.Point(1,1):new a.Point(0,0)},getTileAtPoint:function(){return new a.Point(0,0)},getTileUrl:function(a){var b=null;return a>=this.minLevel&&a<=this.maxLevel&&(b=this.levels[a].url),b}})}(OpenSeadragon),function(a){a.TileSourceCollection=function(b){var c;c=a.isPlainObject(b)?b:{tileSize:arguments[0],tileSources:arguments[1],rows:arguments[2],layout:arguments[3]},c.layout||(c.layout="horizontal");var d=0,e=1,f=Math.ceil(c.tileSources.length/c.rows),g=f>=c.rows?f:c.rows;for("horizontal"==c.layout?(c.width=c.tileSize*f,c.height=c.tileSize*c.rows):(c.height=c.tileSize*f,c.width=c.tileSize*c.rows),c.tileOverlap=-c.tileMargin,c.tilesPerRow=f;e<c.tileSize*g;)e=2*e,d++;c.minLevel=d,a.TileSource.apply(this,[c])},a.extend(a.TileSourceCollection.prototype,a.TileSource.prototype,{getTileBounds:function(b,c,d){var e=this.dimensions.times(this.getLevelScale(b)),f=this.tileSize*c-this.tileOverlap,g=this.tileSize*d-this.tileOverlap,h=this.tileSize+1*this.tileOverlap,i=this.tileSize+1*this.tileOverlap,j=1/e.x;return h=Math.min(h,e.x-f),i=Math.min(i,e.y-g),new a.Rect(f*j,g*j,h*j,i*j)},configure:function(){},getTileUrl:function(){return null}})}(OpenSeadragon),function(a){function b(b){a.requestAnimationFrame(function(){c(b)})}function c(c){var d,e,f;c.shouldFade&&(d=a.now(),e=d-c.fadeBeginTime,f=1-e/c.fadeLength,f=Math.min(1,f),f=Math.max(0,f),c.imgGroup&&a.setElementOpacity(c.imgGroup,f,!0),f>0&&b(c))}function d(c){c.shouldFade=!0,c.fadeBeginTime=a.now()+c.fadeDelay,window.setTimeout(function(){b(c)},c.fadeDelay)}function e(b){b.shouldFade=!1,b.imgGroup&&a.setElementOpacity(b.imgGroup,1,!0)}function f(b,c){b.element.disabled||(c>=a.ButtonState.GROUP&&b.currentState==a.ButtonState.REST&&(e(b),b.currentState=a.ButtonState.GROUP),c>=a.ButtonState.HOVER&&b.currentState==a.ButtonState.GROUP&&(b.imgHover&&(b.imgHover.style.visibility=""),b.currentState=a.ButtonState.HOVER),c>=a.ButtonState.DOWN&&b.currentState==a.ButtonState.HOVER&&(b.imgDown&&(b.imgDown.style.visibility=""),b.currentState=a.ButtonState.DOWN))}function g(b,c){b.element.disabled||(c<=a.ButtonState.HOVER&&b.currentState==a.ButtonState.DOWN&&(b.imgDown&&(b.imgDown.style.visibility="hidden"),b.currentState=a.ButtonState.HOVER),c<=a.ButtonState.GROUP&&b.currentState==a.ButtonState.HOVER&&(b.imgHover&&(b.imgHover.style.visibility="hidden"),b.currentState=a.ButtonState.GROUP),c<=a.ButtonState.REST&&b.currentState==a.ButtonState.GROUP&&(d(b),b.currentState=a.ButtonState.REST))}a.ButtonState={REST:0,GROUP:1,HOVER:2,DOWN:3},a.Button=function(b){var c=this;a.EventHandler.call(this),a.extend(!0,this,{tooltip:null,srcRest:null,srcGroup:null,srcHover:null,srcDown:null,clickTimeThreshold:a.DEFAULT_SETTINGS.clickTimeThreshold,clickDistThreshold:a.DEFAULT_SETTINGS.clickDistThreshold,fadeDelay:0,fadeLength:2e3,onPress:null,onRelease:null,onClick:null,onEnter:null,onExit:null,onFocus:null,onBlur:null},b),this.element=b.element||a.makeNeutralElement("button"),this.element.href=this.element.href||"#",b.element||(this.imgRest=a.makeTransparentImage(this.srcRest),this.imgGroup=a.makeTransparentImage(this.srcGroup),this.imgHover=a.makeTransparentImage(this.srcHover),this.imgDown=a.makeTransparentImage(this.srcDown),this.element.appendChild(this.imgRest),this.element.appendChild(this.imgGroup),this.element.appendChild(this.imgHover),this.element.appendChild(this.imgDown),this.imgGroup.style.position=this.imgHover.style.position=this.imgDown.style.position="absolute",this.imgGroup.style.top=this.imgHover.style.top=this.imgDown.style.top="0px",this.imgGroup.style.left=this.imgHover.style.left=this.imgDown.style.left="0px",this.imgHover.style.visibility=this.imgDown.style.visibility="hidden",a.Browser.vendor==a.BROWSERS.FIREFOX&&a.Browser.version<3&&(this.imgGroup.style.top=this.imgHover.style.top=this.imgDown.style.top="")),this.addHandler("onPress",this.onPress),this.addHandler("onRelease",this.onRelease),this.addHandler("onClick",this.onClick),this.addHandler("onEnter",this.onEnter),this.addHandler("onExit",this.onExit),this.addHandler("onFocus",this.onFocus),this.addHandler("onBlur",this.onBlur),this.currentState=a.ButtonState.GROUP,this.fadeBeginTime=null,this.shouldFade=!1,this.element.style.display="inline-block",this.element.style.position="relative",this.element.title=this.tooltip,this.tracker=new a.MouseTracker({element:this.element,clickTimeThreshold:this.clickTimeThreshold,clickDistThreshold:this.clickDistThreshold,enterHandler:function(b,d,e,g){e?(f(c,a.ButtonState.DOWN),c.raiseEvent("onEnter",c)):g||f(c,a.ButtonState.HOVER)},focusHandler:function(a,b,d,e){this.enterHandler(a,b,d,e),c.raiseEvent("onFocus",c)},exitHandler:function(b,d,e){g(c,a.ButtonState.GROUP),e&&c.raiseEvent("onExit",c)},blurHandler:function(a,b,d,e){this.exitHandler(a,b,d,e),c.raiseEvent("onBlur",c)},pressHandler:function(){f(c,a.ButtonState.DOWN),c.raiseEvent("onPress",c)},releaseHandler:function(b,d,e,h){e&&h?(g(c,a.ButtonState.HOVER),c.raiseEvent("onRelease",c)):e?g(c,a.ButtonState.GROUP):f(c,a.ButtonState.HOVER)},clickHandler:function(a,b,d){d&&c.raiseEvent("onClick",c)},keyHandler:function(a,b){return 13===b?(c.raiseEvent("onClick",c),c.raiseEvent("onRelease",c),!1):!0}}).setTracking(!0),g(this,a.ButtonState.REST)},a.extend(a.Button.prototype,a.EventHandler.prototype,{notifyGroupEnter:function(){f(this,a.ButtonState.GROUP)},notifyGroupExit:function(){g(this,a.ButtonState.REST)},disable:function(){this.notifyGroupExit(),this.element.disabled=!0,a.setElementOpacity(this.element,.2,!0)},enable:function(){this.element.disabled=!1,a.setElementOpacity(this.element,1,!0),this.notifyGroupEnter()}})}(OpenSeadragon),function(a){a.ButtonGroup=function(b){a.extend(!0,this,{buttons:[],clickTimeThreshold:a.DEFAULT_SETTINGS.clickTimeThreshold,clickDistThreshold:a.DEFAULT_SETTINGS.clickDistThreshold,labelText:""},b);var c,d=this.buttons.concat([]),e=this;if(this.element=b.element||a.makeNeutralElement("fieldgroup"),!b.group)for(this.label=a.makeNeutralElement("label"),this.element.style.display="inline-block",this.element.appendChild(this.label),c=0;c<d.length;c++)this.element.appendChild(d[c].element);this.tracker=new a.MouseTracker({element:this.element,clickTimeThreshold:this.clickTimeThreshold,clickDistThreshold:this.clickDistThreshold,enterHandler:function(){var a;for(a=0;a<e.buttons.length;a++)e.buttons[a].notifyGroupEnter()},exitHandler:function(){var a,b=arguments.length>2?arguments[2]:null;if(!b)for(a=0;a<e.buttons.length;a++)e.buttons[a].notifyGroupExit()},releaseHandler:function(){var a,b=arguments.length>3?arguments[3]:null;if(!b)for(a=0;a<e.buttons.length;a++)e.buttons[a].notifyGroupExit()}}).setTracking(!0)},a.ButtonGroup.prototype={emulateEnter:function(){this.tracker.enterHandler()},emulateExit:function(){this.tracker.exitHandler()}}}(OpenSeadragon),function(a){a.Rect=function(a,b,c,d){this.x="number"==typeof a?a:0,this.y="number"==typeof b?b:0,this.width="number"==typeof c?c:0,this.height="number"==typeof d?d:0},a.Rect.prototype={getAspectRatio:function(){return this.width/this.height},getTopLeft:function(){return new a.Point(this.x,this.y)},getBottomRight:function(){return new a.Point(this.x+this.width,this.y+this.height)},getCenter:function(){return new a.Point(this.x+this.width/2,this.y+this.height/2)},getSize:function(){return new a.Point(this.width,this.height)},equals:function(b){return b instanceof a.Rect&&this.x===b.x&&this.y===b.y&&this.width===b.width&&this.height===b.height},toString:function(){return"["+Math.round(100*this.x)+","+Math.round(100*this.y)+","+Math.round(100*this.width)+"x"+Math.round(100*this.height)+"]"}}}(OpenSeadragon),function(a){function b(b,c,e){var f=Number(this.element.style.marginLeft.replace("px","")),g=Number(this.element.style.marginTop.replace("px","")),h=Number(this.element.style.width.replace("px","")),i=Number(this.element.style.height.replace("px","")),j=a.getElementSize(this.viewer.canvas);return this.dragging=!0,this.element&&("horizontal"==this.scroll?-e.x>0?f>-(h-j.x)&&(this.element.style.marginLeft=f+2*e.x+"px",d(this,j.x,f+2*e.x)):-e.x<0&&0>f&&(this.element.style.marginLeft=f+2*e.x+"px",d(this,j.x,f+2*e.x)):-e.y>0?g>-(i-j.y)&&(this.element.style.marginTop=g+2*e.y+"px",d(this,j.y,g+2*e.y)):-e.y<0&&0>g&&(this.element.style.marginTop=g+2*e.y+"px",d(this,j.y,g+2*e.y))),!1}function c(b,c,e){var f=Number(this.element.style.marginLeft.replace("px","")),g=Number(this.element.style.marginTop.replace("px","")),h=Number(this.element.style.width.replace("px","")),i=Number(this.element.style.height.replace("px","")),j=a.getElementSize(this.viewer.canvas);return this.element&&("horizontal"==this.scroll?e>0?f>-(h-j.x)&&(this.element.style.marginLeft=f-60*e+"px",d(this,j.x,f-60*e)):0>e&&0>f&&(this.element.style.marginLeft=f-60*e+"px",d(this,j.x,f-60*e)):0>e?g>j.y-i&&(this.element.style.marginTop=g+60*e+"px",d(this,j.y,g+60*e)):e>0&&0>g&&(this.element.style.marginTop=g+60*e+"px",d(this,j.y,g+60*e))),!1}function d(b,c,d){var e,f,g,h,i,j,k;for(e="horizontal"==b.scroll?b.panelWidth:b.panelHeight,f=Math.ceil(c/e)+5,g=Math.ceil((Math.abs(d)+c)/e)+1,f=g-f,f=0>f?0:f,j=f;g>j&&j<b.panels.length;j++)k=b.panels[j],k.activePanel||(h=new a.Viewer({id:k.id,tileSources:[b.viewer.tileSources[j]],element:k,navigatorSizeRatio:b.sizeRatio,showNavigator:!1,mouseNavEnabled:!1,showNavigationControl:!1,showSequenceControl:!1,immediateRender:!0,blendTime:0,animationTime:0}),h.displayRegion=a.makeNeutralElement("textarea"),h.displayRegion.id=k.id+"-displayregion",h.displayRegion.className="displayregion",i=h.displayRegion.style,i.position="relative",i.top="0px",i.left="0px",i.fontSize="0px",i.overflow="hidden",i.float="left",i.cssFloat="left",i.styleFloat="left",i.zIndex=999999999,i.cursor="default",i.width=b.panelWidth-4+"px",i.height=b.panelHeight-4+"px",h.displayRegion.innerTracker=new a.MouseTracker({element:h.displayRegion}),k.getElementsByTagName("form")[0].appendChild(h.displayRegion),k.activePanel=!0)}function e(a){return"horizontal"==this.scroll?a.element.style.marginBottom="0px":a.element.style.marginLeft="0px",!1}function f(b){return"horizontal"==this.scroll?b.element.style.marginBottom="-"+a.getElementSize(b.element).y/2+"px":b.element.style.marginLeft="-"+a.getElementSize(b.element).x/2+"px",!1}function g(a,b){switch(b){case 61:return c.call(this,this.tracker,null,1,null),!1;case 45:return c.call(this,this.tracker,null,-1,null),!1;case 48:case 119:case 87:case 38:return c.call(this,this.tracker,null,1,null),!1;case 115:case 83:case 40:return c.call(this,this.tracker,null,-1,null),!1;case 97:case 37:return c.call(this,this.tracker,null,-1,null),!1;case 100:case 39:return c.call(this,this.tracker,null,1,null),!1;default:return!0}}var h={};a.ReferenceStrip=function(i){var j,k,l,m=this,n=i.viewer,o=a.getElementSize(n.element);for(i.id||(i.id="referencestrip-"+a.now(),this.element=a.makeNeutralElement("div"),this.element.id=i.id,this.element.className="referencestrip"),i=a.extend(!0,{sizeRatio:a.DEFAULT_SETTINGS.referenceStripSizeRatio,position:a.DEFAULT_SETTINGS.referenceStripPosition,scroll:a.DEFAULT_SETTINGS.referenceStripScroll,clickTimeThreshold:a.DEFAULT_SETTINGS.clickTimeThreshold},i,{element:this.element,showNavigator:!1,mouseNavEnabled:!1,showNavigationControl:!1,showSequenceControl:!1}),a.extend(this,i),h[this.id]={animating:!1},this.minPixelRatio=this.viewer.minPixelRatio,k=this.element.style,k.marginTop="0px",k.marginRight="0px",k.marginBottom="0px",k.marginLeft="0px",k.left="0px",k.bottom="0px",k.border="0px",k.background="#000",k.position="relative",a.setElementOpacity(this.element,.8),this.viewer=n,this.innerTracker=new a.MouseTracker({element:this.element,dragHandler:a.delegate(this,b),scrollHandler:a.delegate(this,c),enterHandler:a.delegate(this,e),exitHandler:a.delegate(this,f),keyHandler:a.delegate(this,g)}).setTracking(!0),i.width&&i.height?(this.element.style.width=i.width+"px",this.element.style.height=i.height+"px",n.addControl(this.element,{anchor:a.ControlAnchor.BOTTOM_LEFT})):"horizontal"==i.scroll?(this.element.style.width=o.x*i.sizeRatio*n.tileSources.length+12*n.tileSources.length+"px",this.element.style.height=o.y*i.sizeRatio+"px",n.addControl(this.element,{anchor:a.ControlAnchor.BOTTOM_LEFT})):(this.element.style.height=o.y*i.sizeRatio*n.tileSources.length+12*n.tileSources.length+"px",this.element.style.width=o.x*i.sizeRatio+"px",n.addControl(this.element,{anchor:a.ControlAnchor.TOP_LEFT})),this.panelWidth=o.x*this.sizeRatio+8,this.panelHeight=o.y*this.sizeRatio+8,this.panels=[],l=0;l<n.tileSources.length;l++)j=a.makeNeutralElement("div"),j.id=this.element.id+"-"+l,j.style.width=m.panelWidth+"px",j.style.height=m.panelHeight+"px",j.style.display="inline",j.style.float="left",j.style.cssFloat="left",j.style.styleFloat="left",j.style.padding="2px",j.innerTracker=new a.MouseTracker({element:j,clickTimeThreshold:this.clickTimeThreshold,clickDistThreshold:this.clickDistThreshold,pressHandler:function(b){b.dragging=a.now()},releaseHandler:function(b,c,d,e){var f=b.element.id,g=Number(f.split("-")[2]),h=a.now();d&&e&&b.dragging&&h-b.dragging<b.clickTimeThreshold&&(b.dragging=null,n.goToPage(g))}}).setTracking(!0),this.element.appendChild(j),j.activePanel=!1,this.panels.push(j);d(this,"vertical"==this.scroll?o.y:o.y,0),this.setFocus(0)},a.extend(a.ReferenceStrip.prototype,a.EventHandler.prototype,a.Viewer.prototype,{setFocus:function(b){var c,f=a.getElement(this.element.id+"-"+b),g=a.getElementSize(this.viewer.canvas),h=Number(this.element.style.width.replace("px","")),i=Number(this.element.style.height.replace("px","")),j=-Number(this.element.style.marginLeft.replace("px","")),k=-Number(this.element.style.marginTop.replace("px",""));this.currentSelected!==f&&(this.currentSelected&&(this.currentSelected.style.background="#000"),this.currentSelected=f,this.currentSelected.style.background="#999","horizontal"==this.scroll?(c=Number(b)*(this.panelWidth+3),c>j+g.x-this.panelWidth?(c=Math.min(c,h-g.x),this.element.style.marginLeft=-c+"px",d(this,g.x,-c)):j>c&&(c=Math.max(0,c-g.x/2),this.element.style.marginLeft=-c+"px",d(this,g.x,-c))):(c=Number(b)*(this.panelHeight+3),c>k+g.y-this.panelHeight?(c=Math.min(c,i-g.y),this.element.style.marginTop=-c+"px",d(this,g.y,-c)):k>c&&(c=Math.max(0,c-g.y/2),this.element.style.marginTop=-c+"px",d(this,g.y,-c))),this.currentPage=b,a.getElement(f.id+"-displayregion").focus(),e.call(this,this.innerTracker))},update:function(){return h[this.id].animating?(a.console.log("image reference strip update"),!0):!1}})}(OpenSeadragon),function(a){a.DisplayRect=function(b,c,d,e,f,g){a.Rect.apply(this,[b,c,d,e]),this.minLevel=f,this.maxLevel=g},a.extend(a.DisplayRect.prototype,a.Rect.prototype)}(OpenSeadragon),function(a){function b(a,b){return(1-Math.exp(a*-b))/(1-Math.exp(-a))}a.Spring=function(b){var c=arguments;"object"!=typeof b&&(b={initial:c.length&&"number"==typeof c[0]?c[0]:0,springStiffness:c.length>1?c[1].springStiffness:5,animationTime:c.length>1?c[1].animationTime:1.5}),a.extend(!0,this,b),this.current={value:"number"==typeof this.initial?this.initial:0,time:a.now()},this.start={value:this.current.value,time:this.current.time},this.target={value:this.current.value,time:this.current.time}},a.Spring.prototype={resetTo:function(a){this.target.value=a,this.target.time=this.current.time,this.start.value=this.target.value,this.start.time=this.target.time},springTo:function(a){this.start.value=this.current.value,this.start.time=this.current.time,this.target.value=a,this.target.time=this.start.time+1e3*this.animationTime},shiftBy:function(a){this.start.value+=a,this.target.value+=a},update:function(){this.current.time=a.now(),this.current.value=this.current.time>=this.target.time?this.target.value:this.start.value+(this.target.value-this.start.value)*b(this.springStiffness,(this.current.time-this.start.time)/(this.target.time-this.start.time))}}}(OpenSeadragon),function(a){var b={};a.Tile=function(a,b,c,d,e,f){this.level=a,this.x=b,this.y=c,this.bounds=d,this.exists=e,this.url=f,this.loaded=!1,this.loading=!1,this.element=null,this.image=null,this.style=null,this.position=null,this.size=null,this.blendStart=null,this.opacity=null,this.distance=null,this.visibility=null,this.beingDrawn=!1,this.lastTouchTime=0},a.Tile.prototype={toString:function(){return this.level+"/"+this.x+"_"+this.y},drawHTML:function(b){return this.loaded&&this.image?(this.element||(this.element=a.makeNeutralElement("img"),this.element.src=this.url,this.element.style.msInterpolationMode="nearest-neighbor",this.style=this.element.style,this.style.position="absolute"),this.element.parentNode!=b&&b.appendChild(this.element),this.style.top=this.position.y+"px",this.style.left=this.position.x+"px",this.style.height=this.size.y+"px",this.style.width=this.size.x+"px",a.setElementOpacity(this.element,this.opacity),void 0):(a.console.warn("Attempting to draw tile %s when it's not yet loaded.",this.toString()),void 0)},drawCanvas:function(c){var d,e,f=this.position,g=this.size;return this.loaded&&(this.image||b[this.url])?(c.globalAlpha=this.opacity,1==c.globalAlpha&&this.url.match(".png")&&c.clearRect(f.x+1,f.y+1,g.x-2,g.y-2),b[this.url]||(e=document.createElement("canvas"),e.width=this.image.width,e.height=this.image.height,d=e.getContext("2d"),d.drawImage(this.image,0,0),b[this.url]=d,this.image=null),d=b[this.url],c.drawImage(d.canvas,0,0,d.canvas.width,d.canvas.height,f.x,f.y,g.x,g.y),void 0):(a.console.warn("Attempting to draw tile %s when it's not yet loaded.",this.toString()),void 0)},unload:function(){this.element&&this.element.parentNode&&this.element.parentNode.removeChild(this.element),b[this.url]&&delete b[this.url],this.element=null,this.image=null,this.loaded=!1,this.loading=!1}}}(OpenSeadragon),function(a){a.OverlayPlacement={CENTER:0,TOP_LEFT:1,TOP:2,TOP_RIGHT:3,RIGHT:4,BOTTOM_RIGHT:5,BOTTOM:6,BOTTOM_LEFT:7,LEFT:8},a.Overlay=function(b,c,d){var e;e=a.isPlainObject(b)?b:{element:b,location:c,placement:d},this.element=e.element,this.scales=e.location instanceof a.Rect,this.bounds=new a.Rect(e.location.x,e.location.y,e.location.width,e.location.height),this.position=new a.Point(e.location.x,e.location.y),this.size=new a.Point(e.location.width,e.location.height),this.style=e.element.style,this.placement=e.location instanceof a.Point?e.placement:a.OverlayPlacement.TOP_LEFT,this.onDraw=e.onDraw},a.Overlay.prototype={adjust:function(b,c){switch(this.placement){case a.OverlayPlacement.TOP_LEFT:break;case a.OverlayPlacement.TOP:b.x-=c.x/2;break;case a.OverlayPlacement.TOP_RIGHT:b.x-=c.x;break;case a.OverlayPlacement.RIGHT:b.x-=c.x,b.y-=c.y/2;break;case a.OverlayPlacement.BOTTOM_RIGHT:b.x-=c.x,b.y-=c.y;break;case a.OverlayPlacement.BOTTOM:b.x-=c.x/2,b.y-=c.y;break;case a.OverlayPlacement.BOTTOM_LEFT:b.y-=c.y;break;case a.OverlayPlacement.LEFT:b.y-=c.y/2;break;default:case a.OverlayPlacement.CENTER:b.x-=c.x/2,b.y-=c.y/2}},destroy:function(){var a=this.element,b=this.style;a.parentNode&&(a.parentNode.removeChild(a),a.prevElementParent&&(b.display="none",document.body.appendChild(a))),b.top="",b.left="",b.position="",this.scales&&(b.width="",b.height="")},drawHTML:function(b){var c,d,e=this.element,f=this.style,g=this.scales;e.parentNode!=b&&(e.prevElementParent=e.parentNode,e.prevNextSibling=e.nextSibling,b.appendChild(e)),g||(this.size=a.getElementSize(e)),c=this.position,d=this.size,this.adjust(c,d),c=c.apply(Math.floor),d=d.apply(Math.ceil),this.onDraw?this.onDraw(c,d,e):(f.left=c.x+"px",f.top=c.y+"px",f.position="absolute",f.display="block",g&&(f.width=d.x+"px",f.height=d.y+"px"))},update:function(b,c){this.scales=b instanceof a.Rect,this.bounds=new a.Rect(b.x,b.y,b.width,b.height),this.placement=b instanceof a.Point?c:a.OverlayPlacement.TOP_LEFT}}}(OpenSeadragon),function(a){function b(b,c){var d=null,e=c.height&&c.width?new a.Rect(c.x||c.px,c.y||c.py,c.width,c.height):new a.Point(c.x||c.px,c.y||c.py),f=c.id?c.id:"openseadragon-overlay-"+Math.floor(1e7*Math.random());return d=a.getElement(c.id),d||(d=document.createElement("a"),d.href="#/overlay/"+f),d.id=f,a.addClass(d,c.className?c.className:"openseadragon-overlay"),void 0!==c.px&&(e=b.viewport.imageToViewportRectangle(e)),c.placement?new a.Overlay({element:d,location:b.viewport.pointFromPixel(e),placement:a.OverlayPlacement[c.placement.toUpperCase()],onDraw:c.onDraw}):new a.Overlay({element:d,location:e,onDraw:c.onDraw})}function c(b){b.updateAgain=!1,b.viewer&&b.viewer.raiseEvent("update-viewport",{viewer:b.viewer});for(var c,e,f,h,i,j,k,m,n=null,o=!1,p=a.now(),q=b.viewport.getContainerSize(),r=b.viewport.getBounds(!0),t=r.getTopLeft(),v=r.getBottomRight(),w=b.viewport.deltaPixelsFromPoints(b.source.getPixelRatio(0),!0).x,x=Math.max(b.source.minLevel,Math.floor(Math.log(b.minZoomImageRatio)/Math.log(2))),y=Math.min(Math.abs(b.source.maxLevel),Math.abs(Math.floor(Math.log(w/b.minPixelRatio)/Math.log(2))));b.lastDrawn.length>0;)c=b.lastDrawn.pop(),c.beingDrawn=!1;if(b.canvas.innerHTML="",A&&((b.canvas.width!=q.x||b.canvas.height!=q.y)&&(b.canvas.width=q.x,b.canvas.height=q.y),b.context.clearRect(0,0,q.x,q.y)),!(!b.wrapHorizontal&&(v.x<0||t.x>1)||!b.wrapVertical&&(v.y<0||t.y>b.normHeight))){b.wrapHorizontal||(t.x=Math.max(t.x,0),v.x=Math.min(v.x,1)),b.wrapVertical||(t.y=Math.max(t.y,0),v.y=Math.min(v.y,b.normHeight)),x=Math.min(x,y);var z;for(e=y;e>=x;e--){if(z=!1,f=b.viewport.deltaPixelsFromPoints(b.source.getPixelRatio(e),!0).x,!o&&f>=b.minPixelRatio||e==x)z=!0,o=!0;else if(!o)continue;if(h=b.viewport.deltaPixelsFromPoints(b.source.getPixelRatio(e),!1).x,i=b.viewport.deltaPixelsFromPoints(b.source.getPixelRatio(Math.max(b.source.getClosestLevel(b.viewport.containerSize)-1,0)),!1).x,j=b.immediateRender?1:i,k=Math.min(1,(f-.5)/.5),m=j/Math.abs(j-h),n=d(b,o,z,e,k,m,t,v,p,n),l(b.coverage,e))break}u(b,b.lastDrawn),s(b.viewport,b.overlays,b.container),n&&(g(b,n,p),b.updateAgain=!0)}}function d(a,b,c,d,f,g,h,i,j,k){var l,m,n,p,q,r=a.viewport.pixelFromPoint(a.viewport.getCenter());for(a.viewer&&a.viewer.raiseEvent("update-level",{viewer:a.viewer,havedrawn:b,level:d,opacity:f,visibility:g,topleft:h,bottomright:i,currenttime:j,best:k}),n=a.source.getTileAtPoint(d,h),p=a.source.getTileAtPoint(d,i),q=a.source.getNumTiles(d),o(a.coverage,d),a.wrapHorizontal||(p.x=Math.min(p.x,q.x-1)),a.wrapVertical||(p.y=Math.min(p.y,q.y-1)),l=n.x;l<=p.x;l++)for(m=n.y;m<=p.y;m++)k=e(a,c,b,l,m,d,f,g,r,q,j,k);return k}function e(a,b,c,d,e,g,h,k,l,o,p,r){var s=f(d,e,g,a.source,a.tilesMatrix,p,o,a.normHeight),t=b;if(a.viewer&&a.viewer.raiseEvent("update-tile",{viewer:a.viewer,tile:s}),n(a.coverage,g,d,e,!1),!s.exists)return r;if(c&&!t&&(m(a.coverage,g,d,e)?n(a.coverage,g,d,e,!0):t=!0),!t)return r;if(i(s,a.source.tileOverlap,a.viewport,l,k),s.loaded){var u=j(a,s,d,e,g,h,p);u&&(a.updateAgain=!0)}else s.loading||(r=q(r,s));return r}function f(b,c,d,e,f,g,h,i){var j,k,l,m,n,o;return f[d]||(f[d]={}),f[d][b]||(f[d][b]={}),f[d][b][c]||(j=(h.x+b%h.x)%h.x,k=(h.y+c%h.y)%h.y,l=e.getTileBounds(d,j,k),m=e.tileExists(d,j,k),n=e.getTileUrl(d,j,k),l.x+=1*(b-j)/h.x,l.y+=i*(c-k)/h.y,f[d][b][c]=new a.Tile(d,b,c,l,m,n)),o=f[d][b][c],o.lastTouchTime=g,o}function g(a,b,c){a.viewport.collectionMode?(a.midUpdate=!1,h(a,b,c)):b.loading=a.loadImage(b.url,function(d){h(a,b,c,d)})}function h(b,c,d,e){var f,g,h,i,j,k,l,m,n,o;if(c.loading=!1,b.midUpdate)return a.console.warn("Tile load callback in middle of drawing routine."),void 0;if(e||b.viewport.collectionMode){if(d<b.lastResetTime)return a.console.log("Ignoring tile %s loaded before reset: %s",c,c.url),void 0}else if(a.console.log("Tile %s failed to load: %s",c,c.url),!b.debugMode)return c.exists=!1,void 0;if(c.loaded=!0,c.image=e,f=b.tilesLoaded.length,b.tilesLoaded.length>=b.maxImageCacheCount){for(g=Math.ceil(Math.log(b.source.tileSize)/Math.log(2)),h=null,k=-1,o=b.tilesLoaded.length-1;o>=0;o--)l=b.tilesLoaded[o],l.level<=b.cutoff||l.beingDrawn||(h?(m=l.lastTouchTime,i=h.lastTouchTime,n=l.level,j=h.level,(i>m||m==i&&n>j)&&(h=l,k=o)):(h=l,k=o));h&&k>=0&&(h.unload(),f=k)}b.tilesLoaded[f]=c,b.updateAgain=!0}function i(b,c,d,e,f){var g=b.bounds.getTopLeft(),h=b.bounds.getSize(),i=d.pixelFromPoint(g,!0),j=d.pixelFromPoint(g,!1),k=d.deltaPixelsFromPoints(h,!0),l=d.deltaPixelsFromPoints(h,!1),m=j.plus(l.divide(2)),n=e.distanceTo(m);c||(k=k.plus(new a.Point(1,1))),b.position=i,b.size=k,b.distance=n,b.visibility=f}function j(a,b,c,d,e,f,g){var h,i,j=1e3*a.blendTime;if(b.blendStart||(b.blendStart=g),h=g-b.blendStart,i=j?Math.min(1,h/j):1,a.alwaysBlend&&(i*=f),b.opacity=i,a.lastDrawn.push(b),1==i)n(a.coverage,e,c,d,!0);else if(j>h)return!0;return!1}function k(a){a.tilesMatrix={},a.tilesLoaded=[]}function l(a,b,c,d){var e,f,g,h;if(!a[b])return!1;if(void 0===c||void 0===d){e=a[b];for(g in e)if(e.hasOwnProperty(g)){f=e[g];for(h in f)if(f.hasOwnProperty(h)&&!f[h])return!1}return!0}return void 0===a[b][c]||void 0===a[b][c][d]||a[b][c][d]===!0}function m(a,b,c,d){return void 0===c||void 0===d?l(a,b+1):l(a,b+1,2*c,2*d)&&l(a,b+1,2*c,2*d+1)&&l(a,b+1,2*c+1,2*d)&&l(a,b+1,2*c+1,2*d+1)}function n(b,c,d,e,f){return b[c]?(b[c][d]||(b[c][d]={}),b[c][d][e]=f,void 0):(a.console.warn("Setting coverage for a tile before its level's coverage has been reset: %s",c),void 0)}function o(a,b){a[b]={}}function p(a,b){var c;for(c=a.length-1;c>=0;c--)if(a[c].element==b)return c;return-1}function q(a,b){return a?b.visibility>a.visibility?b:b.visibility==a.visibility&&b.distance<a.distance?b:a:b}function r(b,c,d,e){b.onload=null,b.onabort=null,b.onerror=null,e&&window.clearTimeout(e),a.requestAnimationFrame(function(){c(b.src,d?b:null)})}function s(a,b,c){var d,e=b.length;for(d=0;e>d;d++)t(a,b[d],c)}function t(a,b,c){b.position=a.pixelFromPoint(b.bounds.getTopLeft(),!0),b.size=a.deltaPixelsFromPoints(b.bounds.getSize(),!0),b.drawHTML(c)}function u(b,c){var d,e,f,g,h,i,j,k;for(d=c.length-1;d>=0;d--){if(e=c[d],b.viewport.collectionMode?(f=e.x+"/"+e.y,h=b.viewport,k=h.collectionTileSource,b.collectionOverlays[f]?(g=b.collectionOverlays[f],g.viewport&&(g.viewport.resize(e.size,!0),g.viewport.goHome(!0))):(i="horizontal"==k.layout?e.y+e.x*k.rows:e.x+e.y*k.rows,j=i<k.tileSources.length?k.tileSources[i]:null,j&&(b.collectionOverlays[f]=g=new a.Viewer({element:a.makeNeutralElement("div"),mouseNavEnabled:!1,showNavigator:!1,showSequenceControl:!1,showNavigationControl:!1,tileSources:[j]}),z&&(g.element.style.border="1px solid rgba(255,255,255,0.38)",g.element.style["-webkit-box-reflect"]="below 0px -webkit-gradient(linear,left top,left bottom,from(transparent),color-stop(62%,transparent),to(rgba(255,255,255,0.62)))"),b.addOverlay(g.element,e.bounds)))):(A?e.drawCanvas(b.context):e.drawHTML(b.canvas),e.beingDrawn=!0),b.debugMode)try{v(b,e,c.length,d)}catch(l){a.console.error(l)}b.viewer&&b.viewer.raiseEvent("tile-drawn",{viewer:b.viewer,tile:e})}}function v(a,b,c,d){A&&(a.context.save(),a.context.lineWidth=2,a.context.font="small-caps bold 13px ariel",a.context.strokeStyle=a.debugGridColor,a.context.fillStyle=a.debugGridColor,a.context.strokeRect(b.position.x,b.position.y,b.size.x,b.size.y),0===b.x&&0===b.y&&(a.context.fillText("Zoom: "+a.viewport.getZoom(),b.position.x,b.position.y-30),a.context.fillText("Pan: "+a.viewport.getBounds().toString(),b.position.x,b.position.y-20)),a.context.fillText("Level: "+b.level,b.position.x+10,b.position.y+20),a.context.fillText("Column: "+b.x,b.position.x+10,b.position.y+30),a.context.fillText("Row: "+b.y,b.position.x+10,b.position.y+40),a.context.fillText("Order: "+d+" of "+c,b.position.x+10,b.position.y+50),a.context.fillText("Size: "+b.size.toString(),b.position.x+10,b.position.y+60),a.context.fillText("Position: "+b.position.toString(),b.position.x+10,b.position.y+70),a.context.restore())
}var w=a.getWindowSize(),x=a.Browser.vendor,y=a.Browser.version,z=x==a.BROWSERS.FIREFOX||x==a.BROWSERS.OPERA||x==a.BROWSERS.SAFARI&&y>=4||x==a.BROWSERS.CHROME&&y>=2||x==a.BROWSERS.IE&&y>=9,A=z&&!(w.x<=400||w.y<=400)&&!navigator.appVersion.match("Mobile")&&a.isFunction(document.createElement("canvas").getContext);a.Drawer=function(c){var d,e=arguments;for(a.isPlainObject(c)||(c={source:e[0],viewport:e[1],element:e[2]}),a.extend(!0,this,{viewer:null,downloading:0,tilesMatrix:{},tilesLoaded:[],coverage:{},lastDrawn:[],lastResetTime:0,midUpdate:!1,updateAgain:!0,overlays:[],collectionOverlays:{},maxImageCacheCount:a.DEFAULT_SETTINGS.maxImageCacheCount,imageLoaderLimit:a.DEFAULT_SETTINGS.imageLoaderLimit,minZoomImageRatio:a.DEFAULT_SETTINGS.minZoomImageRatio,wrapHorizontal:a.DEFAULT_SETTINGS.wrapHorizontal,wrapVertical:a.DEFAULT_SETTINGS.wrapVertical,immediateRender:a.DEFAULT_SETTINGS.immediateRender,blendTime:a.DEFAULT_SETTINGS.blendTime,alwaysBlend:a.DEFAULT_SETTINGS.alwaysBlend,minPixelRatio:a.DEFAULT_SETTINGS.minPixelRatio,debugMode:a.DEFAULT_SETTINGS.debugMode,timeout:a.DEFAULT_SETTINGS.timeout},c),this.container=a.getElement(this.element),this.canvas=a.makeNeutralElement(A?"canvas":"div"),this.context=A?this.canvas.getContext("2d"):null,this.normHeight=this.source.dimensions.y/this.source.dimensions.x,this.element=this.container,this.canvas.style.width="100%",this.canvas.style.height="100%",this.canvas.style.position="absolute",this.container.style.textAlign="left",this.container.appendChild(this.canvas),d=0;d<this.overlays.length;d++)a.isPlainObject(this.overlays[d])?this.overlays[d]=b(this,this.overlays[d]):a.isFunction(this.overlays[d])},a.Drawer.prototype={addOverlay:function(b,c,d,e){var f;return f=a.isPlainObject(b)?b:{element:b,location:c,placement:d,onDraw:e},b=a.getElement(f.element),p(this.overlays,b)>=0?void 0:(this.overlays.push(new a.Overlay({element:b,location:f.location,placement:f.placement,onDraw:f.onDraw})),this.updateAgain=!0,this.viewer&&this.viewer.raiseEvent("add-overlay",{viewer:this.viewer,element:b,location:f.location,placement:f.placement}),this)},updateOverlay:function(b,c,d){var e;return b=a.getElement(b),e=p(this.overlays,b),e>=0&&(this.overlays[e].update(c,d),this.updateAgain=!0),this.viewer&&this.viewer.raiseEvent("update-overlay",{viewer:this.viewer,element:b,location:c,placement:d}),this},removeOverlay:function(b){var c;return b=a.getElement(b),c=p(this.overlays,b),c>=0&&(this.overlays[c].destroy(),this.overlays.splice(c,1),this.updateAgain=!0),this.viewer&&this.viewer.raiseEvent("remove-overlay",{viewer:this.viewer,element:b}),this},clearOverlays:function(){for(;this.overlays.length>0;)this.overlays.pop().destroy(),this.updateAgain=!0;return this.viewer&&this.viewer.raiseEvent("clear-overlay",{viewer:this.viewer}),this},needsUpdate:function(){return this.updateAgain},numTilesLoaded:function(){return this.tilesLoaded.length},reset:function(){return k(this),this.lastResetTime=a.now(),this.updateAgain=!0,this},update:function(){return this.midUpdate=!0,c(this),this.midUpdate=!1,this},loadImage:function(b,c){var d,e,f,g=this,h=!1;return(!this.imageLoaderLimit||this.downloading<this.imageLoaderLimit)&&(this.downloading++,d=new Image,f=function(d,e){if(g.downloading--,"function"==typeof c)try{c(e)}catch(f){a.console.error("%s while executing %s callback: %s",f.name,b,f.message,f)}},d.onload=function(){r(d,f,!0,e)},d.onabort=d.onerror=function(){r(d,f,!1,e)},e=window.setTimeout(function(){r(d,f,!1,e)},this.timeout),h=!0,d.src=b),h}}}(OpenSeadragon),function(a){a.Viewport=function(b){var c=arguments;c.length&&c[0]instanceof a.Point&&(b={containerSize:c[0],contentSize:c[1],config:c[2]}),b.config&&(a.extend(!0,b,b.config),delete b.config),a.extend(!0,this,{containerSize:null,contentSize:null,zoomPoint:null,viewer:null,springStiffness:a.DEFAULT_SETTINGS.springStiffness,animationTime:a.DEFAULT_SETTINGS.animationTime,minZoomImageRatio:a.DEFAULT_SETTINGS.minZoomImageRatio,maxZoomPixelRatio:a.DEFAULT_SETTINGS.maxZoomPixelRatio,visibilityRatio:a.DEFAULT_SETTINGS.visibilityRatio,wrapHorizontal:a.DEFAULT_SETTINGS.wrapHorizontal,wrapVertical:a.DEFAULT_SETTINGS.wrapVertical,defaultZoomLevel:a.DEFAULT_SETTINGS.defaultZoomLevel,minZoomLevel:a.DEFAULT_SETTINGS.minZoomLevel,maxZoomLevel:a.DEFAULT_SETTINGS.maxZoomLevel},b),this.centerSpringX=new a.Spring({initial:0,springStiffness:this.springStiffness,animationTime:this.animationTime}),this.centerSpringY=new a.Spring({initial:0,springStiffness:this.springStiffness,animationTime:this.animationTime}),this.zoomSpring=new a.Spring({initial:1,springStiffness:this.springStiffness,animationTime:this.animationTime}),this.resetContentSize(this.contentSize),this.goHome(!0),this.update()},a.Viewport.prototype={resetContentSize:function(b){return this.contentSize=b,this.contentAspectX=this.contentSize.x/this.contentSize.y,this.contentAspectY=this.contentSize.y/this.contentSize.x,this.fitWidthBounds=new a.Rect(0,0,1,this.contentAspectY),this.fitHeightBounds=new a.Rect(0,0,this.contentAspectY,this.contentAspectY),this.homeBounds=new a.Rect(0,0,1,this.contentAspectY),this.viewer&&this.viewer.raiseEvent("reset-size",{contentSize:b,viewer:this.viewer}),this},getHomeZoom:function(){var a=this.contentAspectX/this.getAspectRatio();return this.defaultZoomLevel?this.defaultZoomLevel:a>=1?1:a},getHomeBounds:function(){var b=this.homeBounds.getCenter(),c=1/this.getHomeZoom(),d=c/this.getAspectRatio();return new a.Rect(b.x-c/2,b.y-d/2,c,d)},goHome:function(a){return this.viewer&&this.viewer.raiseEvent("home",{immediately:a,viewer:this.viewer}),this.fitBounds(this.getHomeBounds(),a)},getMinZoom:function(){var a=this.getHomeZoom(),b=this.minZoomLevel?this.minZoomLevel:this.minZoomImageRatio*a;return Math.min(b,a)},getMaxZoom:function(){var a=this.maxZoomLevel?this.maxZoomLevel:this.contentSize.x*this.maxZoomPixelRatio/this.containerSize.x;return Math.max(a,this.getHomeZoom())},getAspectRatio:function(){return this.containerSize.x/this.containerSize.y},getContainerSize:function(){return new a.Point(this.containerSize.x,this.containerSize.y)},getBounds:function(b){var c=this.getCenter(b),d=1/this.getZoom(b),e=d/this.getAspectRatio();return new a.Rect(c.x-d/2,c.y-e/2,d,e)},getCenter:function(b){var c,d,e,f,g,h,i,j,k=new a.Point(this.centerSpringX.current.value,this.centerSpringY.current.value),l=new a.Point(this.centerSpringX.target.value,this.centerSpringY.target.value);return b?k:this.zoomPoint?(c=this.pixelFromPoint(this.zoomPoint,!0),d=this.getZoom(),e=1/d,f=e/this.getAspectRatio(),g=new a.Rect(k.x-e/2,k.y-f/2,e,f),h=this.zoomPoint.minus(g.getTopLeft()).times(this.containerSize.x/g.width),i=h.minus(c),j=i.divide(this.containerSize.x*d),l.plus(j)):l},getZoom:function(a){return a?this.zoomSpring.current.value:this.zoomSpring.target.value},applyConstraints:function(a){var b,c,d,e,f,g,h,i=this.getZoom(),j=Math.max(Math.min(i,this.getMaxZoom()),this.getMinZoom()),k=0,l=0;return i!=j&&this.zoomTo(j,this.zoomPoint,a),b=this.getBounds(),c=this.visibilityRatio*b.width,d=this.visibilityRatio*b.height,e=b.x+b.width,f=1-b.x,g=b.y+b.height,h=this.contentAspectY-b.y,this.wrapHorizontal||(c>e&&(k=c-e),c>f&&(k=k?(k+f-c)/2:f-c)),this.wrapVertical||(d>g&&(l=d-g),d>h&&(l=l?(l+h-d)/2:h-d)),(k||l||a)&&(b.x+=k,b.y+=l,b.width>1&&(b.x=.5-b.width/2),b.height>this.contentAspectY&&(b.y=this.contentAspectY/2-b.height/2),this.fitBounds(b,a)),this.viewer&&this.viewer.raiseEvent("constrain",{immediately:a,viewer:this.viewer}),this},ensureVisible:function(a){return this.applyConstraints(a)},fitBounds:function(b,c){var d,e,f,g,h=this.getAspectRatio(),i=b.getCenter(),j=new a.Rect(b.x,b.y,b.width,b.height);return j.getAspectRatio()>=h?(j.height=b.width/h,j.y=i.y-j.height/2):(j.width=b.height*h,j.x=i.x-j.width/2),this.panTo(this.getCenter(!0),!0),this.zoomTo(this.getZoom(!0),null,!0),d=this.getBounds(),e=this.getZoom(),f=1/j.width,f==e||j.width==d.width?this.panTo(i,c):(g=d.getTopLeft().times(this.containerSize.x/d.width).minus(j.getTopLeft().times(this.containerSize.x/j.width)).divide(this.containerSize.x/d.width-this.containerSize.x/j.width),this.zoomTo(f,g,c))},fitVertically:function(a){var b=this.getCenter();return this.wrapHorizontal&&(b.x=(1+b.x%1)%1,this.centerSpringX.resetTo(b.x),this.centerSpringX.update()),this.wrapVertical&&(b.y=(this.contentAspectY+b.y%this.contentAspectY)%this.contentAspectY,this.centerSpringY.resetTo(b.y),this.centerSpringY.update()),this.fitBounds(this.fitHeightBounds,a)},fitHorizontally:function(a){var b=this.getCenter();return this.wrapHorizontal&&(b.x=(this.contentAspectX+b.x%this.contentAspectX)%this.contentAspectX,this.centerSpringX.resetTo(b.x),this.centerSpringX.update()),this.wrapVertical&&(b.y=(1+b.y%1)%1,this.centerSpringY.resetTo(b.y),this.centerSpringY.update()),this.fitBounds(this.fitWidthBounds,a)},panBy:function(b,c){var d=new a.Point(this.centerSpringX.target.value,this.centerSpringY.target.value);return this.panTo(d.plus(b),c)},panTo:function(a,b){return b?(this.centerSpringX.resetTo(a.x),this.centerSpringY.resetTo(a.y)):(this.centerSpringX.springTo(a.x),this.centerSpringY.springTo(a.y)),this.viewer&&this.viewer.raiseEvent("pan",{center:a,immediately:b,viewer:this.viewer}),this},zoomBy:function(a,b,c){return this.zoomTo(this.zoomSpring.target.value*a,b,c)},zoomTo:function(b,c,d){return this.zoomPoint=c instanceof a.Point?c:null,d?this.zoomSpring.resetTo(b):this.zoomSpring.springTo(b),this.viewer&&this.viewer.raiseEvent("zoom",{zoom:b,refPoint:c,immediately:d,viewer:this.viewer}),this},resize:function(b,c){var d=this.getBounds(),e=d,f=b.x/this.containerSize.x;return this.containerSize=new a.Point(b.x,b.y),c&&(e.width=d.width*f,e.height=e.width/this.getAspectRatio()),this.viewer&&this.viewer.raiseEvent("resize",{newContainerSize:b,maintain:c,viewer:this.viewer}),this.fitBounds(e,!0)},update:function(){var a,b,c,d,e=this.centerSpringX.current.value,f=this.centerSpringY.current.value,g=this.zoomSpring.current.value;return this.zoomPoint&&(a=this.pixelFromPoint(this.zoomPoint,!0)),this.zoomSpring.update(),this.zoomPoint&&this.zoomSpring.current.value!=g?(b=this.pixelFromPoint(this.zoomPoint,!0),c=b.minus(a),d=this.deltaPointsFromPixels(c,!0),this.centerSpringX.shiftBy(d.x),this.centerSpringY.shiftBy(d.y)):this.zoomPoint=null,this.centerSpringX.update(),this.centerSpringY.update(),this.centerSpringX.current.value!=e||this.centerSpringY.current.value!=f||this.zoomSpring.current.value!=g},deltaPixelsFromPoints:function(a,b){return a.times(this.containerSize.x*this.getZoom(b))},deltaPointsFromPixels:function(a,b){return a.divide(this.containerSize.x*this.getZoom(b))},pixelFromPoint:function(a,b){var c=this.getBounds(b);return a.minus(c.getTopLeft()).times(this.containerSize.x/c.width)},pointFromPixel:function(a,b){var c=this.getBounds(b);return a.divide(this.containerSize.x/c.width).plus(c.getTopLeft())},viewportToImageCoordinates:function(b,c){return new a.Point(b*this.contentSize.x,c*this.contentSize.y*this.contentAspectX)},imageToViewportCoordinates:function(b,c){return new a.Point(b/this.contentSize.x,c/this.contentSize.y/this.contentAspectX)},imageToViewportRectangle:function(b,c,d,e){var f,g,h;return 1==arguments.length?(h=b,this.imageToViewportRectangle(h.x,h.y,h.width,h.height)):(f=this.imageToViewportCoordinates(b,c),g=this.imageToViewportCoordinates(d,e),new a.Rect(f.x,f.y,g.x,g.y))}}}(OpenSeadragon);
/*
//@ sourceMappingURL=openseadragon.min.js.map
*/
(function(e,t,n,r){function u(t,n){this.element=t;this.options=e.extend({},o,n);this._defaults=o;this._name=s;this.init()}function a(){return!!("ontouchstart"in t)}function f(){var e=n.body||n.documentElement;var t=e.style;var r="transition";if(typeof t[r]=="string"){return true}v=["Moz","Webkit","Khtml","O","ms"],r=r.charAt(0).toUpperCase()+r.substr(1);for(var i=0;i<v.length;i++){if(typeof t[v[i]+r]=="string"){return true}}return false}var s="tooltipster",o={animation:"fade",arrow:true,arrowColor:"",content:"",delay:200,fixedWidth:0,maxWidth:0,functionBefore:function(e,t){t()},functionReady:function(e,t){},functionAfter:function(e){},icon:"(?)",iconDesktop:false,iconTouch:false,iconTheme:".tooltipster-icon",interactive:false,interactiveTolerance:350,offsetX:0,offsetY:0,onlyOne:true,position:"top",speed:350,timer:0,theme:".tooltipster-default",touchDevices:true,trigger:"hover",updateAnimation:true};var l=true;if(!f()){l=false}var c=a();e(t).on("mousemove.tooltipster",function(){c=false;e(t).off("mousemove.tooltipster")});u.prototype={init:function(){var t=e(this.element);var i=this;var s=true;if(i.options.touchDevices==false&&c){s=false}if(n.all&&!n.querySelector){s=false}if(s==true){if(this.options.iconDesktop==true&&!c||this.options.iconTouch==true&&c){var o=t.attr("title");t.removeAttr("title");var u=i.options.iconTheme;var a=e('<span class="'+u.replace(".","")+'" title="'+o+'">'+this.options.icon+"</span>");a.insertAfter(t);t.data("tooltipsterIcon",a);t=a}var f=e.trim(i.options.content).length>0?i.options.content:t.attr("title");t.data("tooltipsterContent",f);t.removeAttr("title");if(this.options.touchDevices==true&&c&&(this.options.trigger=="click"||this.options.trigger=="hover")){t.bind("touchstart",function(e,t){i.showTooltip()})}else{if(this.options.trigger=="hover"){t.on("mouseenter.tooltipster",function(){i.showTooltip()});if(this.options.interactive==true){t.on("mouseleave.tooltipster",function(){var e=t.data("tooltipster");var n=false;if(e!==r&&e!==""){e.mouseenter(function(){n=true});e.mouseleave(function(){n=false});var s=setTimeout(function(){if(n==true){e.mouseleave(function(e){if(e.target.tagName!="SELECT"&&e.target.tagName!="OPTION"){i.hideTooltip()}})}else{i.hideTooltip()}},i.options.interactiveTolerance)}else{i.hideTooltip()}})}else{t.on("mouseleave.tooltipster",function(e){i.hideTooltip()})}}if(this.options.trigger=="click"){t.on("click.tooltipster",function(){if(t.data("tooltipster")==""||t.data("tooltipster")==r){i.showTooltip()}else{i.hideTooltip()}})}}}},showTooltip:function(t){var n=e(this.element);var i=this;if(n.data("tooltipsterIcon")!==r){n=n.data("tooltipsterIcon")}if(!n.hasClass("tooltipster-disable")){if(e(".tooltipster-base").not(".tooltipster-dying").length>0&&i.options.onlyOne==true){e(".tooltipster-base").not(".tooltipster-dying").not(n.data("tooltipster")).each(function(){e(this).addClass("tooltipster-kill");var t=e(this).data("origin");t.data("plugin_tooltipster").hideTooltip()})}n.clearQueue().delay(i.options.delay).queue(function(){i.options.functionBefore(n,function(){if(n.data("tooltipster")!==r&&n.data("tooltipster")!==""){var t=n.data("tooltipster");if(!t.hasClass("tooltipster-kill")){var s="tooltipster-"+i.options.animation;t.removeClass("tooltipster-dying");if(l==true){t.clearQueue().addClass(s+"-show")}if(i.options.timer>0){var o=t.data("tooltipsterTimer");clearTimeout(o);o=setTimeout(function(){t.data("tooltipsterTimer",r);i.hideTooltip()},i.options.timer);t.data("tooltipsterTimer",o)}if(i.options.touchDevices==true&&c){e("body").bind("touchstart",function(t){if(i.options.interactive==true){var n=e(t.target);var r=true;n.parents().each(function(){if(e(this).hasClass("tooltipster-base")){r=false}});if(r==true){i.hideTooltip();e("body").unbind("touchstart")}}else{i.hideTooltip();e("body").unbind("touchstart")}})}}}else{e("body").css("overflow-x","hidden");var u=n.data("tooltipsterContent");var a=i.options.theme;var h=a.replace(".","");var s="tooltipster-"+i.options.animation;var p="-webkit-transition-duration: "+i.options.speed+"ms; -webkit-animation-duration: "+i.options.speed+"ms; -moz-transition-duration: "+i.options.speed+"ms; -moz-animation-duration: "+i.options.speed+"ms; -o-transition-duration: "+i.options.speed+"ms; -o-animation-duration: "+i.options.speed+"ms; -ms-transition-duration: "+i.options.speed+"ms; -ms-animation-duration: "+i.options.speed+"ms; transition-duration: "+i.options.speed+"ms; animation-duration: "+i.options.speed+"ms;";var d=i.options.fixedWidth>0?"width:"+i.options.fixedWidth+"px;":"";var v=i.options.maxWidth>0?"max-width:"+i.options.maxWidth+"px;":"";var m=i.options.interactive==true?"pointer-events: auto;":"";var t=e('<div class="tooltipster-base '+h+" "+s+'" style="'+d+" "+v+" "+m+" "+p+'"></div>');var g=e('<div class="tooltipster-content"></div>');g.html(u);t.append(g);t.appendTo("body");n.data("tooltipster",t);t.data("origin",n);i.positionTooltip();i.options.functionReady(n,t);if(l==true){t.addClass(s+"-show")}else{t.css("display","none").removeClass(s).fadeIn(i.options.speed)}var y=u;var b=setInterval(function(){var r=n.data("tooltipsterContent");if(e("body").find(n).length==0){t.addClass("tooltipster-dying");i.hideTooltip()}else if(y!==r&&r!==""){y=r;t.find(".tooltipster-content").html(r);if(i.options.updateAnimation==true){if(f()){t.css({width:"","-webkit-transition":"all "+i.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms","-moz-transition":"all "+i.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms","-o-transition":"all "+i.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms","-ms-transition":"all "+i.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms",transition:"all "+i.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms"}).addClass("tooltipster-content-changing");setTimeout(function(){t.removeClass("tooltipster-content-changing");setTimeout(function(){t.css({"-webkit-transition":i.options.speed+"ms","-moz-transition":i.options.speed+"ms","-o-transition":i.options.speed+"ms","-ms-transition":i.options.speed+"ms",transition:i.options.speed+"ms"})},i.options.speed)},i.options.speed)}else{t.fadeTo(i.options.speed,.5,function(){t.fadeTo(i.options.speed,1)})}}i.positionTooltip()}if(e("body").find(t).length==0||e("body").find(n).length==0){clearInterval(b)}},200);if(i.options.timer>0){var o=setTimeout(function(){t.data("tooltipsterTimer",r);i.hideTooltip()},i.options.timer+i.options.speed);t.data("tooltipsterTimer",o)}if(i.options.touchDevices==true&&c){e("body").bind("touchstart",function(t){if(i.options.interactive==true){var n=e(t.target);var r=true;n.parents().each(function(){if(e(this).hasClass("tooltipster-base")){r=false}});if(r==true){i.hideTooltip();e("body").unbind("touchstart")}}else{i.hideTooltip();e("body").unbind("touchstart")}})}t.mouseleave(function(e){if(e.target.tagName!="SELECT"&&e.target.tagName!="OPTION"){i.hideTooltip()}})}});n.dequeue()})}},hideTooltip:function(t){var n=e(this.element);var i=this;if(n.data("tooltipsterIcon")!==r){n=n.data("tooltipsterIcon")}var s=n.data("tooltipster");if(s==r){s=e(".tooltipster-dying")}n.clearQueue();if(s!==r&&s!==""){var o=s.data("tooltipsterTimer");if(o!==r){clearTimeout(o)}var u="tooltipster-"+i.options.animation;if(l==true){s.clearQueue().removeClass(u+"-show").addClass("tooltipster-dying").delay(i.options.speed).queue(function(){s.remove();n.data("tooltipster","");e("body").css("verflow-x","");i.options.functionAfter(n)})}else{s.clearQueue().addClass("tooltipster-dying").fadeOut(i.options.speed,function(){s.remove();n.data("tooltipster","");e("body").css("verflow-x","");i.options.functionAfter(n)})}}},positionTooltip:function(n){var s=e(this.element);var o=this;if(s.data("tooltipsterIcon")!==r){s=s.data("tooltipsterIcon")}if(s.data("tooltipster")!==r&&s.data("tooltipster")!==""){var u=s.data("tooltipster");u.css("width","");var a=e(t).width();var f=s.outerWidth(false);var l=s.outerHeight(false);var c=u.outerWidth(false);var h=u.innerWidth()+1;var p=u.outerHeight(false);var d=s.offset();var v=d.top;var m=d.left;var g=r;if(s.is("area")){var y=s.attr("shape");var b=s.parent().attr("name");var w=e('img[usemap="#'+b+'"]');var E=w.offset().left;var S=w.offset().top;var x=s.attr("coords")!==r?s.attr("coords").split(","):r;if(y=="circle"){var T=parseInt(x[0]);var N=parseInt(x[1]);var C=parseInt(x[2]);l=C*2;f=C*2;v=S+N-C;m=E+T-C}else if(y=="rect"){var T=parseInt(x[0]);var N=parseInt(x[1]);var k=parseInt(x[2]);var L=parseInt(x[3]);l=L-N;f=k-T;v=S+N;m=E+T}else if(y=="poly"){var A=[];var O=[];var M=0,_=0,D=0,P=0;var H="even";for(i=0;i<x.length;i++){var B=parseInt(x[i]);if(H=="even"){if(B>D){D=B;if(i==0){M=D}}if(B<M){M=B}H="odd"}else{if(B>P){P=B;if(i==1){_=P}}if(B<_){_=B}H="even"}}l=P-_;f=D-M;v=S+_;m=E+M}else{l=w.outerHeight(false);f=w.outerWidth(false);v=S;m=E}}if(o.options.fixedWidth==0){u.css({width:h+"px","padding-left":"0px","padding-right":"0px"})}var j=0,F=0;var I=parseInt(o.options.offsetY);var q=parseInt(o.options.offsetX);var R="";function U(){var n=e(t).scrollLeft();if(j-n<0){var r=j-n;j=n;u.data("arrow-reposition",r)}if(j+c-n>a){var r=j-(a+n-c);j=a+n-c;u.data("arrow-reposition",r)}}function z(n,r){if(v-e(t).scrollTop()-p-I-12<0&&r.indexOf("top")>-1){o.options.position=n;g=r}if(v+l+p+12+I>e(t).scrollTop()+e(t).height()&&r.indexOf("bottom")>-1){o.options.position=n;g=r;F=v-p-I-12}}if(o.options.position=="top"){var W=m+c-(m+f);j=m+q-W/2;F=v-p-I-12;U();z("bottom","top")}if(o.options.position=="top-left"){j=m+q;F=v-p-I-12;U();z("bottom-left","top-left")}if(o.options.position=="top-right"){j=m+f+q-c;F=v-p-I-12;U();z("bottom-right","top-right")}if(o.options.position=="bottom"){var W=m+c-(m+f);j=m-W/2+q;F=v+l+I+12;U();z("top","bottom")}if(o.options.position=="bottom-left"){j=m+q;F=v+l+I+12;U();z("top-left","bottom-left")}if(o.options.position=="bottom-right"){j=m+f+q-c;F=v+l+I+12;U();z("top-right","bottom-right")}if(o.options.position=="left"){j=m-q-c-12;myLeftMirror=m+q+f+12;var X=v+p-(v+s.outerHeight(false));F=v-X/2-I;if(j<0&&myLeftMirror+c>a){var V=parseFloat(u.css("border-width"))*2;var J=c+j-V;u.css("width",J+"px");p=u.outerHeight(false);j=m-q-J-12-V;X=v+p-(v+s.outerHeight(false));F=v-X/2-I}else if(j<0){j=m+q+f+12;u.data("arrow-reposition","left")}}if(o.options.position=="right"){j=m+q+f+12;myLeftMirror=m-q-c-12;var X=v+p-(v+s.outerHeight(false));F=v-X/2-I;if(j+c>a&&myLeftMirror<0){var V=parseFloat(u.css("border-width"))*2;var J=a-j-V;u.css("width",J+"px");p=u.outerHeight(false);X=v+p-(v+s.outerHeight(false));F=v-X/2-I}else if(j+c>a){j=m-q-c-12;u.data("arrow-reposition","right")}}if(o.options.arrow==true){var K="tooltipster-arrow-"+o.options.position;if(o.options.arrowColor.length<1){var Q=u.css("background-color")}else{var Q=o.options.arrowColor}var G=u.data("arrow-reposition");if(!G){G=""}else if(G=="left"){K="tooltipster-arrow-right";G=""}else if(G=="right"){K="tooltipster-arrow-left";G=""}else{G="left:"+G+"px;"}if(o.options.position=="top"||o.options.position=="top-left"||o.options.position=="top-right"){var Y=parseFloat(u.css("border-bottom-width"));var Z=u.css("border-bottom-color")}else if(o.options.position=="bottom"||o.options.position=="bottom-left"||o.options.position=="bottom-right"){var Y=parseFloat(u.css("border-top-width"));var Z=u.css("border-top-color")}else if(o.options.position=="left"){var Y=parseFloat(u.css("border-right-width"));var Z=u.css("border-right-color")}else if(o.options.position=="right"){var Y=parseFloat(u.css("border-left-width"));var Z=u.css("border-left-color")}else{var Y=parseFloat(u.css("border-bottom-width"));var Z=u.css("border-bottom-color")}if(Y>1){Y++}var et="";if(Y!==0){var tt="";var nt="border-color: "+Z+";";if(K.indexOf("bottom")!==-1){tt="margin-top: -"+Y+"px;"}else if(K.indexOf("top")!==-1){tt="margin-bottom: -"+Y+"px;"}else if(K.indexOf("left")!==-1){tt="margin-right: -"+Y+"px;"}else if(K.indexOf("right")!==-1){tt="margin-left: -"+Y+"px;"}et='<span class="tooltipster-arrow-border" style="'+tt+" "+nt+';"></span>'}u.find(".tooltipster-arrow").remove();R='<div class="'+K+' tooltipster-arrow" style="'+G+'">'+et+'<span style="border-color:'+Q+';"></span></div>';u.append(R)}u.css({top:F+"px",left:j+"px"});if(g!==r){o.options.position=g}}}};e.fn[s]=function(t){if(typeof t==="string"){var n=this;var i=arguments[1];if(n.data("plugin_tooltipster")==r){var o=n.find("*");n=e();o.each(function(){if(e(this).data("plugin_tooltipster")!==r){n.push(e(this))}})}n.each(function(){switch(t.toLowerCase()){case"show":e(this).data("plugin_tooltipster").showTooltip();break;case"hide":e(this).data("plugin_tooltipster").hideTooltip();break;case"disable":e(this).addClass("tooltipster-disable");break;case"enable":e(this).removeClass("tooltipster-disable");break;case"destroy":e(this).data("plugin_tooltipster").hideTooltip();e(this).data("plugin_tooltipster","").attr("title",n.data("tooltipsterContent")).data("tooltipsterContent","").data("plugin_tooltipster","").off("mouseenter.tooltipster mouseleave.tooltipster click.tooltipster");break;case"update":if(e(this).data("tooltipsterIcon")==r){e(this).data("tooltipsterContent",i)}else{var s=e(this).data("tooltipsterIcon");s.data("tooltipsterContent",i)}break;case"reposition":e(this).data("plugin_tooltipster").positionTooltip();break}});return this}return this.each(function(){if(!e.data(this,"plugin_"+s)){e.data(this,"plugin_"+s,new u(this,t))}var n=e(this).data("plugin_tooltipster").options;if(n.iconDesktop==true&&!c||n.iconTouch==true&&c){var r=e(this).data("plugin_tooltipster");e(this).next().data("plugin_tooltipster",r)}})};if(c){t.addEventListener("orientationchange",function(){if(e(".tooltipster-base").length>0){e(".tooltipster-base").each(function(){var t=e(this).data("origin");t.data("plugin_tooltipster").hideTooltip()})}},false)}e(t).on("resize.tooltipster",function(){var t=e(".tooltipster-base").data("origin");if(t!==null&&t!==r){t.tooltipster("reposition")}})})(jQuery,window,document)
d3=function(){function n(n){return null!=n&&!isNaN(n)}function t(n){return n.length}function e(n){for(var t=1;n*t%1;)t*=10;return t}function r(n,t){try{for(var e in t)Object.defineProperty(n.prototype,e,{value:t[e],enumerable:!1})}catch(r){n.prototype=t}}function i(){}function u(){}function a(n,t,e){return function(){var r=e.apply(t,arguments);return r===t?n:r}}function o(){}function c(n){function t(){for(var t,r=e,i=-1,u=r.length;++i<u;)(t=r[i].on)&&t.apply(this,arguments);return n}var e=[],r=new i;return t.on=function(t,i){var u,a=r.get(t);return arguments.length<2?a&&a.on:(a&&(a.on=null,e=e.slice(0,u=e.indexOf(a)).concat(e.slice(u+1)),r.remove(t)),i&&e.push(r.set(t,{on:i})),n)},t}function l(){ua.event.stopPropagation(),ua.event.preventDefault()}function f(){for(var n,t=ua.event;n=t.sourceEvent;)t=n;return t}function s(n,t){function e(){n.on(t,null)}n.on(t,function(){l(),e()},!0),setTimeout(e,0)}function h(n){for(var t=new o,e=0,r=arguments.length;++e<r;)t[arguments[e]]=c(t);return t.of=function(e,r){return function(i){try{var u=i.sourceEvent=ua.event;i.target=n,ua.event=i,t[i.type].apply(e,r)}finally{ua.event=u}}},t}function g(n,t){var e=n.ownerSVGElement||n;if(e.createSVGPoint){var r=e.createSVGPoint();if(0>pa&&(oa.scrollX||oa.scrollY)){e=ua.select(aa.body).append("svg").style("position","absolute").style("top",0).style("left",0);var i=e[0][0].getScreenCTM();pa=!(i.f||i.e),e.remove()}return pa?(r.x=t.pageX,r.y=t.pageY):(r.x=t.clientX,r.y=t.clientY),r=r.matrixTransform(n.getScreenCTM().inverse()),[r.x,r.y]}var u=n.getBoundingClientRect();return[t.clientX-u.left-n.clientLeft,t.clientY-u.top-n.clientTop]}function p(n){for(var t=-1,e=n.length,r=[];++t<e;)r.push(n[t]);return r}function d(n){return Array.prototype.slice.call(n)}function m(n){return va(n,wa),n}function v(n){return function(){return ya(n,this)}}function y(n){return function(){return Ma(n,this)}}function M(n,t){function e(){this.removeAttribute(n)}function r(){this.removeAttributeNS(n.space,n.local)}function i(){this.setAttribute(n,t)}function u(){this.setAttributeNS(n.space,n.local,t)}function a(){var e=t.apply(this,arguments);null==e?this.removeAttribute(n):this.setAttribute(n,e)}function o(){var e=t.apply(this,arguments);null==e?this.removeAttributeNS(n.space,n.local):this.setAttributeNS(n.space,n.local,e)}return n=ua.ns.qualify(n),null==t?n.local?r:e:"function"==typeof t?n.local?o:a:n.local?u:i}function x(n){return n.trim().replace(/\s+/g," ")}function b(n){return RegExp("(?:^|\\s+)"+ua.requote(n)+"(?:\\s+|$)","g")}function _(n,t){function e(){for(var e=-1;++e<i;)n[e](this,t)}function r(){for(var e=-1,r=t.apply(this,arguments);++e<i;)n[e](this,r)}n=n.trim().split(/\s+/).map(w);var i=n.length;return"function"==typeof t?r:e}function w(n){var t=b(n);return function(e,r){if(i=e.classList)return r?i.add(n):i.remove(n);var i=e.getAttribute("class")||"";r?(t.lastIndex=0,t.test(i)||e.setAttribute("class",x(i+" "+n))):e.setAttribute("class",x(i.replace(t," ")))}}function S(n,t,e){function r(){this.style.removeProperty(n)}function i(){this.style.setProperty(n,t,e)}function u(){var r=t.apply(this,arguments);null==r?this.style.removeProperty(n):this.style.setProperty(n,r,e)}return null==t?r:"function"==typeof t?u:i}function E(n,t){function e(){delete this[n]}function r(){this[n]=t}function i(){var e=t.apply(this,arguments);null==e?delete this[n]:this[n]=e}return null==t?e:"function"==typeof t?i:r}function k(n){return{__data__:n}}function A(n){return function(){return _a(this,n)}}function N(n){return arguments.length||(n=ua.ascending),function(t,e){return!t-!e||n(t.__data__,e.__data__)}}function q(){}function T(n,t,e){function r(){var t=this[a];t&&(this.removeEventListener(n,t,t.$),delete this[a])}function i(){var i=c(t,da(arguments));r.call(this),this.addEventListener(n,this[a]=i,i.$=e),i._=t}function u(){var t,e=RegExp("^__on([^.]+)"+ua.requote(n)+"$");for(var r in this)if(t=r.match(e)){var i=this[r];this.removeEventListener(t[1],i,i.$),delete this[r]}}var a="__on"+n,o=n.indexOf("."),c=C;o>0&&(n=n.substring(0,o));var l=ka.get(n);return l&&(n=l,c=z),o?t?i:r:t?q:u}function C(n,t){return function(e){var r=ua.event;ua.event=e,t[0]=this.__data__;try{n.apply(this,t)}finally{ua.event=r}}}function z(n,t){var e=C(n,t);return function(n){var t=this,r=n.relatedTarget;r&&(r===t||r.compareDocumentPosition(t)&8)||e.call(t,n)}}function D(n,t){for(var e=0,r=n.length;r>e;e++)for(var i,u=n[e],a=0,o=u.length;o>a;a++)(i=u[a])&&t(i,a,e);return n}function j(n){return va(n,Aa),n}function L(){}function F(n,t,e){return new H(n,t,e)}function H(n,t,e){this.h=n,this.s=t,this.l=e}function P(n,t,e){function r(n){return n>360?n-=360:0>n&&(n+=360),60>n?u+(a-u)*n/60:180>n?a:240>n?u+(a-u)*(240-n)/60:u}function i(n){return Math.round(r(n)*255)}var u,a;return n=isNaN(n)?0:(n%=360)<0?n+360:n,t=isNaN(t)?0:0>t?0:t>1?1:t,e=0>e?0:e>1?1:e,a=.5>=e?e*(1+t):e+t-e*t,u=2*e-a,tt(i(n+120),i(n),i(n-120))}function R(n){return n>0?1:0>n?-1:0}function O(n){return Math.acos(Math.max(-1,Math.min(1,n)))}function Y(n){return n>1?Da/2:-1>n?-Da/2:Math.asin(n)}function U(n){return(Math.exp(n)-Math.exp(-n))/2}function I(n){return(Math.exp(n)+Math.exp(-n))/2}function V(n){return(n=Math.sin(n/2))*n}function X(n,t,e){return new Z(n,t,e)}function Z(n,t,e){this.h=n,this.c=t,this.l=e}function B(n,t,e){return isNaN(n)&&(n=0),isNaN(t)&&(t=0),$(e,Math.cos(n*=La)*t,Math.sin(n)*t)}function $(n,t,e){return new J(n,t,e)}function J(n,t,e){this.l=n,this.a=t,this.b=e}function G(n,t,e){var r=(n+16)/116,i=r+t/500,u=r-e/200;return i=W(i)*Ra,r=W(r)*Oa,u=W(u)*Ya,tt(nt(3.2404542*i-1.5371385*r-.4985314*u),nt(-.969266*i+1.8760108*r+.041556*u),nt(.0556434*i-.2040259*r+1.0572252*u))}function K(n,t,e){return n>0?X(Math.atan2(e,t)*Fa,Math.sqrt(t*t+e*e),n):X(0/0,0/0,n)}function W(n){return n>.206893034?n*n*n:(n-4/29)/7.787037}function Q(n){return n>.008856?Math.pow(n,1/3):7.787037*n+4/29}function nt(n){return Math.round(255*(.00304>=n?12.92*n:1.055*Math.pow(n,1/2.4)-.055))}function tt(n,t,e){return new et(n,t,e)}function et(n,t,e){this.r=n,this.g=t,this.b=e}function rt(n){return 16>n?"0"+Math.max(0,n).toString(16):Math.min(255,n).toString(16)}function it(n,t,e){var r,i,u,a=0,o=0,c=0;if(r=/([a-z]+)\((.*)\)/i.exec(n))switch(i=r[2].split(","),r[1]){case"hsl":return e(parseFloat(i[0]),parseFloat(i[1])/100,parseFloat(i[2])/100);case"rgb":return t(ct(i[0]),ct(i[1]),ct(i[2]))}return(u=Va.get(n))?t(u.r,u.g,u.b):(null!=n&&n.charAt(0)==="#"&&(n.length===4?(a=n.charAt(1),a+=a,o=n.charAt(2),o+=o,c=n.charAt(3),c+=c):n.length===7&&(a=n.substring(1,3),o=n.substring(3,5),c=n.substring(5,7)),a=parseInt(a,16),o=parseInt(o,16),c=parseInt(c,16)),t(a,o,c))}function ut(n,t,e){var r,i,u=Math.min(n/=255,t/=255,e/=255),a=Math.max(n,t,e),o=a-u,c=(a+u)/2;return o?(i=.5>c?o/(a+u):o/(2-a-u),r=n==a?(t-e)/o+(e>t?6:0):t==a?(e-n)/o+2:(n-t)/o+4,r*=60):(r=0/0,i=c>0&&1>c?0:r),F(r,i,c)}function at(n,t,e){n=ot(n),t=ot(t),e=ot(e);var r=Q((.4124564*n+.3575761*t+.1804375*e)/Ra),i=Q((.2126729*n+.7151522*t+.072175*e)/Oa),u=Q((.0193339*n+.119192*t+.9503041*e)/Ya);return $(116*i-16,500*(r-i),200*(i-u))}function ot(n){return(n/=255)<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4)}function ct(n){var t=parseFloat(n);return n.charAt(n.length-1)==="%"?Math.round(2.55*t):t}function lt(n){return"function"==typeof n?n:function(){return n}}function ft(n){return n}function st(n){return function(t,e,r){return arguments.length===2&&"function"==typeof e&&(r=e,e=null),ht(t,e,n,r)}}function ht(n,t,e,r){function i(){var n,t=c.status;if(!t&&c.responseText||t>=200&&300>t||304===t){try{n=e.call(u,c)}catch(r){return a.error.call(u,r),void 0}a.load.call(u,n)}else a.error.call(u,c)}var u={},a=ua.dispatch("progress","load","error"),o={},c=new(oa.XDomainRequest&&/^(http(s)?:)?\/\//.test(n)?XDomainRequest:XMLHttpRequest);return"onload"in c?c.onload=c.onerror=i:c.onreadystatechange=function(){c.readyState>3&&i()},c.onprogress=function(n){var t=ua.event;ua.event=n;try{a.progress.call(u,c)}finally{ua.event=t}},u.header=function(n,t){return n=(n+"").toLowerCase(),arguments.length<2?o[n]:(null==t?delete o[n]:o[n]=t+"",u)},u.mimeType=function(n){return arguments.length?(t=null==n?null:n+"",u):t},u.response=function(n){return e=n,u},["get","post"].forEach(function(n){u[n]=function(){return u.send.apply(u,[n].concat(da(arguments)))}}),u.send=function(e,r,i){if(arguments.length===2&&"function"==typeof r&&(i=r,r=null),c.open(e,n,!0),null==t||"accept"in o||(o.accept=t+",*/*"),c.setRequestHeader)for(var a in o)c.setRequestHeader(a,o[a]);return null!=t&&c.overrideMimeType&&c.overrideMimeType(t),null!=i&&u.on("error",i).on("load",function(n){i(null,n)}),c.send(null==r?null:r),u},u.abort=function(){return c.abort(),u},ua.rebind(u,a,"on"),null==r?u:u.get(gt(r))}function gt(n){return n.length===1?function(t,e){n(null==t?e:null)}:n}function pt(n,t){function e(n,e,u){arguments.length<3&&(u=e,e=null);var a=ua.xhr(n,t,u);return a.row=function(n){return arguments.length?a.response((e=n)==null?r:i(n)):e},a.row(e)}function r(n){return e.parse(n.responseText)}function i(n){return function(t){return e.parse(t.responseText,n)}}function a(t){return t.map(o).join(n)}function o(n){return c.test(n)?'"'+n.replace(/\"/g,'""')+'"':n}var c=RegExp('["'+n+"\n]"),l=n.charCodeAt(0);return e.parse=function(n,t){var r;return e.parseRows(n,function(n,e){if(r)return r(n,e-1);var i=Function("d","return {"+n.map(function(n,t){return JSON.stringify(n)+": d["+t+"]"}).join(",")+"}");r=t?function(n,e){return t(i(n),e)}:i})},e.parseRows=function(n,t){function e(){if(f>=c)return a;if(i)return i=!1,u;var t=f;if(n.charCodeAt(t)===34){for(var e=t;e++<c;)if(n.charCodeAt(e)===34){if(n.charCodeAt(e+1)!==34)break;++e}f=e+2;var r=n.charCodeAt(e+1);return 13===r?(i=!0,n.charCodeAt(e+2)===10&&++f):10===r&&(i=!0),n.substring(t+1,e).replace(/""/g,'"')}for(;c>f;){var r=n.charCodeAt(f++),o=1;if(10===r)i=!0;else if(13===r)i=!0,n.charCodeAt(f)===10&&(++f,++o);else if(r!==l)continue;return n.substring(t,f-o)}return n.substring(t)}for(var r,i,u={},a={},o=[],c=n.length,f=0,s=0;(r=e())!==a;){for(var h=[];r!==u&&r!==a;)h.push(r),r=e();(!t||(h=t(h,s++)))&&o.push(h)}return o},e.format=function(t){if(Array.isArray(t[0]))return e.formatRows(t);var r=new u,i=[];return t.forEach(function(n){for(var t in n)r.has(t)||i.push(r.add(t))}),[i.map(o).join(n)].concat(t.map(function(t){return i.map(function(n){return o(t[n])}).join(n)})).join("\n")},e.formatRows=function(n){return n.map(a).join("\n")},e}function dt(){var n=mt(),t=vt()-n;t>24?(isFinite(t)&&(clearTimeout($a),$a=setTimeout(dt,t)),Ba=0):(Ba=1,Ja(dt))}function mt(){for(var n=Date.now(),t=Xa;t;)n>=t.time&&(t.flush=t.callback(n-t.time)),t=t.next;return n}function vt(){for(var n,t=Xa,e=1/0;t;)t.flush?t=n?n.next=t.next:Xa=t.next:(t.time<e&&(e=t.time),t=(n=t).next);return Za=n,e}function yt(n,t){var e=Math.pow(10,Math.abs(8-t)*3);return{scale:t>8?function(n){return n/e}:function(n){return n*e},symbol:n}}function Mt(n,t){return t-(n?Math.ceil(Math.log(n)/Math.LN10):1)}function xt(n){return n+""}function bt(n,t){n&&uo.hasOwnProperty(n.type)&&uo[n.type](n,t)}function _t(n,t,e){var r,i=-1,u=n.length-e;for(t.lineStart();++i<u;)r=n[i],t.point(r[0],r[1]);t.lineEnd()}function wt(n,t){var e=-1,r=n.length;for(t.polygonStart();++e<r;)_t(n[e],t,1);t.polygonEnd()}function St(){function n(n,t){n*=La,t=t*La/2+Da/4;var e=n-r,a=Math.cos(t),o=Math.sin(t),c=u*o,l=i*a+c*Math.cos(e),f=c*Math.sin(e);oo+=Math.atan2(f,l),r=n,i=a,u=o}var t,e,r,i,u;co.point=function(a,o){co.point=n,r=(t=a)*La,i=Math.cos(o=(e=o)*La/2+Da/4),u=Math.sin(o)},co.lineEnd=function(){n(t,e)}}function Et(n){var t=n[0],e=n[1],r=Math.cos(e);return[r*Math.cos(t),r*Math.sin(t),Math.sin(e)]}function kt(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]}function At(n,t){return[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]]}function Nt(n,t){n[0]+=t[0],n[1]+=t[1],n[2]+=t[2]}function qt(n,t){return[n[0]*t,n[1]*t,n[2]*t]}function Tt(n){var t=Math.sqrt(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);n[0]/=t,n[1]/=t,n[2]/=t}function Ct(n){return[Math.atan2(n[1],n[0]),Math.asin(Math.max(-1,Math.min(1,n[2])))]}function zt(n,t){return Math.abs(n[0]-t[0])<ja&&Math.abs(n[1]-t[1])<ja}function Dt(n,t){if(!lo){++fo,n*=La;var e=Math.cos(t*=La);so+=(e*Math.cos(n)-so)/fo,ho+=(e*Math.sin(n)-ho)/fo,go+=(Math.sin(t)-go)/fo}}function jt(){var n,t;lo=1,Lt(),lo=2;var e=po.point;po.point=function(r,i){e(n=r,t=i)},po.lineEnd=function(){po.point(n,t),Ft(),po.lineEnd=Ft}}function Lt(){function n(n,i){n*=La;var u=Math.cos(i*=La),a=u*Math.cos(n),o=u*Math.sin(n),c=Math.sin(i),l=Math.atan2(Math.sqrt((l=e*c-r*o)*l+(l=r*a-t*c)*l+(l=t*o-e*a)*l),t*a+e*o+r*c);fo+=l,so+=l*(t+(t=a)),ho+=l*(e+(e=o)),go+=l*(r+(r=c))}var t,e,r;lo>1||(1>lo&&(lo=1,fo=so=ho=go=0),po.point=function(i,u){i*=La;var a=Math.cos(u*=La);t=a*Math.cos(i),e=a*Math.sin(i),r=Math.sin(u),po.point=n})}function Ft(){po.point=Dt}function Ht(){return!0}function Pt(n,t,e,r,i){var u=[],a=[];if(n.forEach(function(n){if(!((t=n.length-1)<=0)){var t,e=n[0],r=n[t];if(zt(e,r)){i.lineStart();for(var o=0;t>o;++o)i.point((e=n[o])[0],e[1]);return i.lineEnd(),void 0}var c={point:e,points:n,other:null,visited:!1,entry:!0,subject:!0},l={point:e,points:[e],other:c,visited:!1,entry:!1,subject:!1};c.other=l,u.push(c),a.push(l),c={point:r,points:[r],other:null,visited:!1,entry:!1,subject:!0},l={point:r,points:[r],other:c,visited:!1,entry:!0,subject:!1},c.other=l,u.push(c),a.push(l)}}),a.sort(t),Rt(u),Rt(a),u.length){if(e)for(var o=1,c=!e(a[0].point),l=a.length;l>o;++o)a[o].entry=c=!c;for(var f,s,h,g=u[0];;){for(f=g;f.visited;)if((f=f.next)===g)return;s=f.points,i.lineStart();do{if(f.visited=f.other.visited=!0,f.entry){if(f.subject)for(var o=0;o<s.length;o++)i.point((h=s[o])[0],h[1]);else r(f.point,f.next.point,1,i);f=f.next}else{if(f.subject){s=f.prev.points;for(var o=s.length;--o>=0;)i.point((h=s[o])[0],h[1])}else r(f.point,f.prev.point,-1,i);f=f.prev}f=f.other,s=f.points}while(!f.visited);i.lineEnd()}}}function Rt(n){if(t=n.length){for(var t,e,r=0,i=n[0];++r<t;)i.next=e=n[r],e.prev=i,i=e;i.next=e=n[0],e.prev=i}}function Ot(n,t,e){return function(r){function i(t,e){n(t,e)&&r.point(t,e)}function u(n,t){m.point(n,t)}function a(){v.point=u,m.lineStart()}function o(){v.point=i,m.lineEnd()}function c(n,t){M.point(n,t),d.push([n,t])}function l(){M.lineStart(),d=[]}function f(){c(d[0][0],d[0][1]),M.lineEnd();var n,t=M.clean(),e=y.buffer(),i=e.length;if(!i)return p=!0,g+=It(d,-1),d=null,void 0;if(d=null,1&t){n=e[0],h+=It(n,1);var u,i=n.length-1,a=-1;for(r.lineStart();++a<i;)r.point((u=n[a])[0],u[1]);return r.lineEnd(),void 0}i>1&&2&t&&e.push(e.pop().concat(e.shift())),s.push(e.filter(Yt))}var s,h,g,p,d,m=t(r),v={point:i,lineStart:a,lineEnd:o,polygonStart:function(){v.point=c,v.lineStart=l,v.lineEnd=f,p=!1,g=h=0,s=[],r.polygonStart()},polygonEnd:function(){v.point=i,v.lineStart=a,v.lineEnd=o,s=ua.merge(s),s.length?Pt(s,Vt,null,e,r):(-ja>h||p&&-ja>g)&&(r.lineStart(),e(null,null,1,r),r.lineEnd()),r.polygonEnd(),s=null},sphere:function(){r.polygonStart(),r.lineStart(),e(null,null,1,r),r.lineEnd(),r.polygonEnd()}},y=Ut(),M=t(y);return v}}function Yt(n){return n.length>1}function Ut(){var n,t=[];return{lineStart:function(){t.push(n=[])},point:function(t,e){n.push([t,e])},lineEnd:q,buffer:function(){var e=t;return t=[],n=null,e},rejoin:function(){t.length>1&&t.push(t.pop().concat(t.shift()))}}}function It(n,t){if(!(e=n.length))return 0;for(var e,r,i,u=0,a=0,o=n[0],c=o[0],l=o[1],f=Math.cos(l),s=Math.atan2(t*Math.sin(c)*f,Math.sin(l)),h=1-t*Math.cos(c)*f,g=s;++u<e;)o=n[u],f=Math.cos(l=o[1]),r=Math.atan2(t*Math.sin(c=o[0])*f,Math.sin(l)),i=1-t*Math.cos(c)*f,Math.abs(h-2)<ja&&Math.abs(i-2)<ja||(Math.abs(i)<ja||Math.abs(h)<ja||(Math.abs(Math.abs(r-s)-Da)<ja?i+h>2&&(a+=4*(r-s)):a+=Math.abs(h-2)<ja?4*(r-g):((3*Da+r-s)%(2*Da)-Da)*(h+i)),g=s,s=r,h=i);return a}function Vt(n,t){return((n=n.point)[0]<0?n[1]-Da/2-ja:Da/2-n[1])-((t=t.point)[0]<0?t[1]-Da/2-ja:Da/2-t[1])}function Xt(n){var t,e=0/0,r=0/0,i=0/0;return{lineStart:function(){n.lineStart(),t=1},point:function(u,a){var o=u>0?Da:-Da,c=Math.abs(u-e);Math.abs(c-Da)<ja?(n.point(e,r=(r+a)/2>0?Da/2:-Da/2),n.point(i,r),n.lineEnd(),n.lineStart(),n.point(o,r),n.point(u,r),t=0):i!==o&&c>=Da&&(Math.abs(e-i)<ja&&(e-=i*ja),Math.abs(u-o)<ja&&(u-=o*ja),r=Zt(e,r,u,a),n.point(i,r),n.lineEnd(),n.lineStart(),n.point(o,r),t=0),n.point(e=u,r=a),i=o},lineEnd:function(){n.lineEnd(),e=r=0/0},clean:function(){return 2-t}}}function Zt(n,t,e,r){var i,u,a=Math.sin(n-e);return Math.abs(a)>ja?Math.atan((Math.sin(t)*(u=Math.cos(r))*Math.sin(e)-Math.sin(r)*(i=Math.cos(t))*Math.sin(n))/(i*u*a)):(t+r)/2}function Bt(n,t,e,r){var i;if(null==n)i=e*Da/2,r.point(-Da,i),r.point(0,i),r.point(Da,i),r.point(Da,0),r.point(Da,-i),r.point(0,-i),r.point(-Da,-i),r.point(-Da,0),r.point(-Da,i);else if(Math.abs(n[0]-t[0])>ja){var u=(n[0]<t[0]?1:-1)*Da;i=e*u/2,r.point(-u,i),r.point(0,i),r.point(u,i)}else r.point(t[0],t[1])}function $t(n){function t(n,t){return Math.cos(n)*Math.cos(t)>u}function e(n){var e,u,c,l,f;return{lineStart:function(){l=c=!1,f=1},point:function(s,h){var g,p=[s,h],d=t(s,h),m=a?d?0:i(s,h):d?i(s+(0>s?Da:-Da),h):0;if(!e&&(l=c=d)&&n.lineStart(),d!==c&&(g=r(e,p),(zt(e,g)||zt(p,g))&&(p[0]+=ja,p[1]+=ja,d=t(p[0],p[1]))),d!==c)f=0,d?(n.lineStart(),g=r(p,e),n.point(g[0],g[1])):(g=r(e,p),n.point(g[0],g[1]),n.lineEnd()),e=g;else if(o&&e&&a^d){var v;m&u||!(v=r(p,e,!0))||(f=0,a?(n.lineStart(),n.point(v[0][0],v[0][1]),n.point(v[1][0],v[1][1]),n.lineEnd()):(n.point(v[1][0],v[1][1]),n.lineEnd(),n.lineStart(),n.point(v[0][0],v[0][1])))}!d||e&&zt(e,p)||n.point(p[0],p[1]),e=p,c=d,u=m},lineEnd:function(){c&&n.lineEnd(),e=null},clean:function(){return f|(l&&c)<<1}}}function r(n,t,e){var r=Et(n),i=Et(t),a=[1,0,0],o=At(r,i),c=kt(o,o),l=o[0],f=c-l*l;if(!f)return!e&&n;var s=u*c/f,h=-u*l/f,g=At(a,o),p=qt(a,s),d=qt(o,h);Nt(p,d);var m=g,v=kt(p,m),y=kt(m,m),M=v*v-y*(kt(p,p)-1);if(!(0>M)){var x=Math.sqrt(M),b=qt(m,(-v-x)/y);if(Nt(b,p),b=Ct(b),!e)return b;var _,w=n[0],S=t[0],E=n[1],k=t[1];w>S&&(_=w,w=S,S=_);var A=S-w,N=Math.abs(A-Da)<ja,q=N||ja>A;if(!N&&E>k&&(_=E,E=k,k=_),q?N?E+k>0^b[1]<(Math.abs(b[0]-w)<ja?E:k):E<=b[1]&&b[1]<=k:A>Da^(w<=b[0]&&b[0]<=S)){var T=qt(m,(-v+x)/y);return Nt(T,p),[b,Ct(T)]}}}function i(t,e){var r=a?n:Da-n,i=0;return-r>t?i|=1:t>r&&(i|=2),-r>e?i|=4:e>r&&(i|=8),i}var u=Math.cos(n),a=u>0,o=Math.abs(u)>ja,c=oe(n,6*La);return Ot(t,e,c)}function Jt(n,t,e,r){function i(r,i){return Math.abs(r[0]-n)<ja?i>0?0:3:Math.abs(r[0]-e)<ja?i>0?2:1:Math.abs(r[1]-t)<ja?i>0?1:0:i>0?3:2}function u(n,t){return a(n.point,t.point)}function a(n,t){var e=i(n,1),r=i(t,1);return e!==r?e-r:0===e?t[1]-n[1]:1===e?n[0]-t[0]:2===e?n[1]-t[1]:t[0]-n[0]}function o(i,u){var a=u[0]-i[0],o=u[1]-i[1],c=[0,1];return Math.abs(a)<ja&&Math.abs(o)<ja?n<=i[0]&&i[0]<=e&&t<=i[1]&&i[1]<=r:Gt(n-i[0],a,c)&&Gt(i[0]-e,-a,c)&&Gt(t-i[1],o,c)&&Gt(i[1]-r,-o,c)?(c[1]<1&&(u[0]=i[0]+c[1]*a,u[1]=i[1]+c[1]*o),c[0]>0&&(i[0]+=c[0]*a,i[1]+=c[0]*o),!0):!1}return function(c){function l(u){var a=i(u,-1),o=f([0===a||3===a?n:e,a>1?r:t]);return o}function f(n){for(var t=0,e=M.length,r=n[1],i=0;e>i;++i)for(var u,a=1,o=M[i],c=o.length,l=o[0];c>a;++a)u=o[a],l[1]<=r?u[1]>r&&s(l,u,n)>0&&++t:u[1]<=r&&s(l,u,n)<0&&--t,l=u;return 0!==t}function s(n,t,e){return(t[0]-n[0])*(e[1]-n[1])-(e[0]-n[0])*(t[1]-n[1])}function h(u,o,c,l){var f=0,s=0;if(null==u||(f=i(u,c))!==(s=i(o,c))||a(u,o)<0^c>0){do l.point(0===f||3===f?n:e,f>1?r:t);while((f=(f+c+4)%4)!==s)}else l.point(o[0],o[1])}function g(i,u){return i>=n&&e>=i&&u>=t&&r>=u}function p(n,t){g(n,t)&&c.point(n,t)}function d(){T.point=v,M&&M.push(x=[]),A=!0,k=!1,S=E=0/0}function m(){y&&(v(b,_),w&&k&&q.rejoin(),y.push(q.buffer())),T.point=p,k&&c.lineEnd()}function v(n,t){n=Math.max(-vo,Math.min(vo,n)),t=Math.max(-vo,Math.min(vo,t));var e=g(n,t);if(M&&x.push([n,t]),A)b=n,_=t,w=e,A=!1,e&&(c.lineStart(),c.point(n,t));else if(e&&k)c.point(n,t);else{var r=[S,E],i=[n,t];o(r,i)?(k||(c.lineStart(),c.point(r[0],r[1])),c.point(i[0],i[1]),e||c.lineEnd()):e&&(c.lineStart(),c.point(n,t))}S=n,E=t,k=e}var y,M,x,b,_,w,S,E,k,A,N=c,q=Ut(),T={point:p,lineStart:d,lineEnd:m,polygonStart:function(){c=q,y=[],M=[]},polygonEnd:function(){c=N,(y=ua.merge(y)).length?(c.polygonStart(),Pt(y,u,l,h,c),c.polygonEnd()):f([n,t])&&(c.polygonStart(),c.lineStart(),h(null,null,1,c),c.lineEnd(),c.polygonEnd()),y=M=x=null}};return T}}function Gt(n,t,e){if(Math.abs(t)<ja)return 0>=n;var r=n/t;if(t>0){if(r>e[1])return!1;r>e[0]&&(e[0]=r)}else{if(r<e[0])return!1;r<e[1]&&(e[1]=r)}return!0}function Kt(n,t){function e(e,r){return e=n(e,r),t(e[0],e[1])}return n.invert&&t.invert&&(e.invert=function(e,r){return e=t.invert(e,r),e&&n.invert(e[0],e[1])}),e}function Wt(n){function t(t){function r(e,r){e=n(e,r),t.point(e[0],e[1])}function u(){f=0/0,d.point=a,t.lineStart()}function a(r,u){var a=Et([r,u]),o=n(r,u);e(f,s,l,h,g,p,f=o[0],s=o[1],l=r,h=a[0],g=a[1],p=a[2],i,t),t.point(f,s)}function o(){d.point=r,t.lineEnd()}function c(){var n,r,c,m,v,y,M;u(),d.point=function(t,e){a(n=t,r=e),c=f,m=s,v=h,y=g,M=p,d.point=a},d.lineEnd=function(){e(f,s,l,h,g,p,c,m,n,v,y,M,i,t),d.lineEnd=o,o()}}var l,f,s,h,g,p,d={point:r,lineStart:u,lineEnd:o,polygonStart:function(){t.polygonStart(),d.lineStart=c},polygonEnd:function(){t.polygonEnd(),d.lineStart=u}};return d}function e(t,i,u,a,o,c,l,f,s,h,g,p,d,m){var v=l-t,y=f-i,M=v*v+y*y;if(M>4*r&&d--){var x=a+h,b=o+g,_=c+p,w=Math.sqrt(x*x+b*b+_*_),S=Math.asin(_/=w),E=Math.abs(Math.abs(_)-1)<ja?(u+s)/2:Math.atan2(b,x),k=n(E,S),A=k[0],N=k[1],q=A-t,T=N-i,C=y*q-v*T;(C*C/M>r||Math.abs((v*q+y*T)/M-.5)>.3)&&(e(t,i,u,a,o,c,A,N,E,x/=w,b/=w,_,d,m),m.point(A,N),e(A,N,E,x,b,_,l,f,s,h,g,p,d,m))}}var r=.5,i=16;return t.precision=function(n){return arguments.length?(i=(r=n*n)>0&&16,t):Math.sqrt(r)},t}function Qt(n){return ne(function(){return n})()}function ne(n){function t(n){return n=a(n[0]*La,n[1]*La),[n[0]*f+o,c-n[1]*f]}function e(n){return n=a.invert((n[0]-o)/f,(c-n[1])/f),n&&[n[0]*Fa,n[1]*Fa]}function r(){a=Kt(u=re(d,m,v),i);var n=i(g,p);return o=s-n[0]*f,c=h+n[1]*f,t}var i,u,a,o,c,l=Wt(function(n,t){return n=i(n,t),[n[0]*f+o,c-n[1]*f]}),f=150,s=480,h=250,g=0,p=0,d=0,m=0,v=0,y=mo,M=ft,x=null,b=null;return t.stream=function(n){return te(u,y(l(M(n))))},t.clipAngle=function(n){return arguments.length?(y=null==n?(x=n,mo):$t((x=+n)*La),t):x},t.clipExtent=function(n){return arguments.length?(b=n,M=null==n?ft:Jt(n[0][0],n[0][1],n[1][0],n[1][1]),t):b},t.scale=function(n){return arguments.length?(f=+n,r()):f},t.translate=function(n){return arguments.length?(s=+n[0],h=+n[1],r()):[s,h]},t.center=function(n){return arguments.length?(g=n[0]%360*La,p=n[1]%360*La,r()):[g*Fa,p*Fa]},t.rotate=function(n){return arguments.length?(d=n[0]%360*La,m=n[1]%360*La,v=n.length>2?n[2]%360*La:0,r()):[d*Fa,m*Fa,v*Fa]},ua.rebind(t,l,"precision"),function(){return i=n.apply(this,arguments),t.invert=i.invert&&e,r()}}function te(n,t){return{point:function(e,r){r=n(e*La,r*La),e=r[0],t.point(e>Da?e-2*Da:-Da>e?e+2*Da:e,r[1])},sphere:function(){t.sphere()},lineStart:function(){t.lineStart()},lineEnd:function(){t.lineEnd()},polygonStart:function(){t.polygonStart()},polygonEnd:function(){t.polygonEnd()}}}function ee(n,t){return[n,t]}function re(n,t,e){return n?t||e?Kt(ue(n),ae(t,e)):ue(n):t||e?ae(t,e):ee}function ie(n){return function(t,e){return t+=n,[t>Da?t-2*Da:-Da>t?t+2*Da:t,e]}}function ue(n){var t=ie(n);return t.invert=ie(-n),t}function ae(n,t){function e(n,t){var e=Math.cos(t),o=Math.cos(n)*e,c=Math.sin(n)*e,l=Math.sin(t),f=l*r+o*i;return[Math.atan2(c*u-f*a,o*r-l*i),Math.asin(Math.max(-1,Math.min(1,f*u+c*a)))]}var r=Math.cos(n),i=Math.sin(n),u=Math.cos(t),a=Math.sin(t);return e.invert=function(n,t){var e=Math.cos(t),o=Math.cos(n)*e,c=Math.sin(n)*e,l=Math.sin(t),f=l*u-c*a;return[Math.atan2(c*u+l*a,o*r+f*i),Math.asin(Math.max(-1,Math.min(1,f*r-o*i)))]},e}function oe(n,t){var e=Math.cos(n),r=Math.sin(n);return function(i,u,a,o){null!=i?(i=ce(e,i),u=ce(e,u),(a>0?u>i:i>u)&&(i+=2*a*Da)):(i=n+2*a*Da,u=n);for(var c,l=a*t,f=i;a>0?f>u:u>f;f-=l)o.point((c=Ct([e,-r*Math.cos(f),-r*Math.sin(f)]))[0],c[1])}}function ce(n,t){var e=Et(t);e[0]-=n,Tt(e);var r=O(-e[1]);return((-e[2]<0?-r:r)+2*Math.PI-ja)%(2*Math.PI)}function le(n,t,e){var r=ua.range(n,t-ja,e).concat(t);return function(n){return r.map(function(t){return[n,t]})}}function fe(n,t,e){var r=ua.range(n,t-ja,e).concat(t);return function(n){return r.map(function(t){return[t,n]})}}function se(n){return n.source}function he(n){return n.target}function ge(n,t,e,r){var i=Math.cos(t),u=Math.sin(t),a=Math.cos(r),o=Math.sin(r),c=i*Math.cos(n),l=i*Math.sin(n),f=a*Math.cos(e),s=a*Math.sin(e),h=2*Math.asin(Math.sqrt(V(r-t)+i*a*V(e-n))),g=1/Math.sin(h),p=h?function(n){var t=Math.sin(n*=h)*g,e=Math.sin(h-n)*g,r=e*c+t*f,i=e*l+t*s,a=e*u+t*o;return[Math.atan2(i,r)*Fa,Math.atan2(a,Math.sqrt(r*r+i*i))*Fa]}:function(){return[n*Fa,t*Fa]};return p.distance=h,p}function pe(){function n(n,i){var u=Math.sin(i*=La),a=Math.cos(i),o=Math.abs((n*=La)-t),c=Math.cos(o);yo+=Math.atan2(Math.sqrt((o=a*Math.sin(o))*o+(o=r*u-e*a*c)*o),e*u+r*a*c),t=n,e=u,r=a}var t,e,r;Mo.point=function(i,u){t=i*La,e=Math.sin(u*=La),r=Math.cos(u),Mo.point=n},Mo.lineEnd=function(){Mo.point=Mo.lineEnd=q}}function de(n){var t=0,e=Da/3,r=ne(n),i=r(t,e);return i.parallels=function(n){return arguments.length?r(t=n[0]*Da/180,e=n[1]*Da/180):[180*(t/Da),180*(e/Da)]},i}function me(n,t){function e(n,t){var e=Math.sqrt(u-2*i*Math.sin(t))/i;return[e*Math.sin(n*=i),a-e*Math.cos(n)]}var r=Math.sin(n),i=(r+Math.sin(t))/2,u=1+r*(2*i-r),a=Math.sqrt(u)/i;return e.invert=function(n,t){var e=a-t;return[Math.atan2(n,e)/i,Y((u-(n*n+e*e)*i*i)/(2*i))]},e}function ve(){function n(n,t){bo+=i*n-r*t,r=n,i=t}var t,e,r,i;ko.point=function(u,a){ko.point=n,t=r=u,e=i=a},ko.lineEnd=function(){n(t,e)}}function ye(n,t){_o>n&&(_o=n),n>So&&(So=n),wo>t&&(wo=t),t>Eo&&(Eo=t)}function Me(){function n(n,t){a.push("M",n,",",t,u)}function t(n,t){a.push("M",n,",",t),o.point=e}function e(n,t){a.push("L",n,",",t)}function r(){o.point=n}function i(){a.push("Z")}var u=xe(4.5),a=[],o={point:n,lineStart:function(){o.point=t},lineEnd:r,polygonStart:function(){o.lineEnd=i},polygonEnd:function(){o.lineEnd=r,o.point=n},pointRadius:function(n){return u=xe(n),o},result:function(){if(a.length){var n=a.join("");return a=[],n}}};return o}function xe(n){return"m0,"+n+"a"+n+","+n+" 0 1,1 0,"+-2*n+"a"+n+","+n+" 0 1,1 0,"+2*n+"z"}function be(n,t){lo||(so+=n,ho+=t,++go)}function _e(){function n(n,r){var i=n-t,u=r-e,a=Math.sqrt(i*i+u*u);so+=a*(t+n)/2,ho+=a*(e+r)/2,go+=a,t=n,e=r}var t,e;if(1!==lo){if(!(1>lo))return;lo=1,so=ho=go=0}No.point=function(r,i){No.point=n,t=r,e=i}}function we(){No.point=be}function Se(){function n(n,t){var e=i*n-r*t;so+=e*(r+n),ho+=e*(i+t),go+=3*e,r=n,i=t}var t,e,r,i;2>lo&&(lo=2,so=ho=go=0),No.point=function(u,a){No.point=n,t=r=u,e=i=a},No.lineEnd=function(){n(t,e)}}function Ee(n){function t(t,e){n.moveTo(t,e),n.arc(t,e,a,0,2*Da)}function e(t,e){n.moveTo(t,e),o.point=r}function r(t,e){n.lineTo(t,e)}function i(){o.point=t}function u(){n.closePath()}var a=4.5,o={point:t,lineStart:function(){o.point=e},lineEnd:i,polygonStart:function(){o.lineEnd=u},polygonEnd:function(){o.lineEnd=i,o.point=t},pointRadius:function(n){return a=n,o},result:q};return o}function ke(n){var t=Wt(function(t,e){return n([t*Fa,e*Fa])});return function(n){return n=t(n),{point:function(t,e){n.point(t*La,e*La)},sphere:function(){n.sphere()},lineStart:function(){n.lineStart()},lineEnd:function(){n.lineEnd()},polygonStart:function(){n.polygonStart()},polygonEnd:function(){n.polygonEnd()}}}}function Ae(n,t){function e(t,e){var r=Math.cos(t),i=Math.cos(e),u=n(r*i);return[u*i*Math.sin(t),u*Math.sin(e)]}return e.invert=function(n,e){var r=Math.sqrt(n*n+e*e),i=t(r),u=Math.sin(i),a=Math.cos(i);return[Math.atan2(n*u,r*a),Math.asin(r&&e*u/r)]},e}function Ne(n,t){function e(n,t){var e=Math.abs(Math.abs(t)-Da/2)<ja?0:a/Math.pow(i(t),u);return[e*Math.sin(u*n),a-e*Math.cos(u*n)]}var r=Math.cos(n),i=function(n){return Math.tan(Da/4+n/2)},u=n===t?Math.sin(n):Math.log(r/Math.cos(t))/Math.log(i(t)/i(n)),a=r*Math.pow(i(n),u)/u;return u?(e.invert=function(n,t){var e=a-t,r=R(u)*Math.sqrt(n*n+e*e);return[Math.atan2(n,e)/u,2*Math.atan(Math.pow(a/r,1/u))-Da/2]},e):Te}function qe(n,t){function e(n,t){var e=u-t;return[e*Math.sin(i*n),u-e*Math.cos(i*n)]}var r=Math.cos(n),i=n===t?Math.sin(n):(r-Math.cos(t))/(t-n),u=r/i+n;return Math.abs(i)<ja?ee:(e.invert=function(n,t){var e=u-t;return[Math.atan2(n,e)/i,u-R(i)*Math.sqrt(n*n+e*e)]},e)}function Te(n,t){return[n,Math.log(Math.tan(Da/4+t/2))]}function Ce(n){var t,e=Qt(n),r=e.scale,i=e.translate,u=e.clipExtent;return e.scale=function(){var n=r.apply(e,arguments);return n===e?t?e.clipExtent(null):e:n},e.translate=function(){var n=i.apply(e,arguments);return n===e?t?e.clipExtent(null):e:n},e.clipExtent=function(n){var a=u.apply(e,arguments);if(a===e){if(t=null==n){var o=Da*r(),c=i();u([[c[0]-o,c[1]-o],[c[0]+o,c[1]+o]])}}else t&&(a=null);return a},e.clipExtent(null)}function ze(n,t){var e=Math.cos(t)*Math.sin(n);return[Math.log((1+e)/(1-e))/2,Math.atan2(Math.tan(t),Math.cos(n))]}function De(n){function t(t){function a(){l.push("M",u(n(f),o))}for(var c,l=[],f=[],s=-1,h=t.length,g=lt(e),p=lt(r);++s<h;)i.call(this,c=t[s],s)?f.push([+g.call(this,c,s),+p.call(this,c,s)]):f.length&&(a(),f=[]);return f.length&&a(),l.length?l.join(""):null}var e=je,r=Le,i=Ht,u=Fe,a=u.key,o=.7;return t.x=function(n){return arguments.length?(e=n,t):e},t.y=function(n){return arguments.length?(r=n,t):r},t.defined=function(n){return arguments.length?(i=n,t):i},t.interpolate=function(n){return arguments.length?(a="function"==typeof n?u=n:(u=jo.get(n)||Fe).key,t):a},t.tension=function(n){return arguments.length?(o=n,t):o},t}function je(n){return n[0]}function Le(n){return n[1]}function Fe(n){return n.join("L")}function He(n){return Fe(n)+"Z"}function Pe(n){for(var t=0,e=n.length,r=n[0],i=[r[0],",",r[1]];++t<e;)i.push("V",(r=n[t])[1],"H",r[0]);return i.join("")}function Re(n){for(var t=0,e=n.length,r=n[0],i=[r[0],",",r[1]];++t<e;)i.push("H",(r=n[t])[0],"V",r[1]);return i.join("")}function Oe(n,t){return n.length<4?Fe(n):n[1]+Ie(n.slice(1,n.length-1),Ve(n,t))}function Ye(n,t){return n.length<3?Fe(n):n[0]+Ie((n.push(n[0]),n),Ve([n[n.length-2]].concat(n,[n[1]]),t))}function Ue(n,t){return n.length<3?Fe(n):n[0]+Ie(n,Ve(n,t))}function Ie(n,t){if(t.length<1||n.length!=t.length&&n.length!=t.length+2)return Fe(n);var e=n.length!=t.length,r="",i=n[0],u=n[1],a=t[0],o=a,c=1;if(e&&(r+="Q"+(u[0]-a[0]*2/3)+","+(u[1]-a[1]*2/3)+","+u[0]+","+u[1],i=n[1],c=2),t.length>1){o=t[1],u=n[c],c++,r+="C"+(i[0]+a[0])+","+(i[1]+a[1])+","+(u[0]-o[0])+","+(u[1]-o[1])+","+u[0]+","+u[1];for(var l=2;l<t.length;l++,c++)u=n[c],o=t[l],r+="S"+(u[0]-o[0])+","+(u[1]-o[1])+","+u[0]+","+u[1]}if(e){var f=n[c];r+="Q"+(u[0]+o[0]*2/3)+","+(u[1]+o[1]*2/3)+","+f[0]+","+f[1]}return r}function Ve(n,t){for(var e,r=[],i=(1-t)/2,u=n[0],a=n[1],o=1,c=n.length;++o<c;)e=u,u=a,a=n[o],r.push([i*(a[0]-e[0]),i*(a[1]-e[1])]);return r}function Xe(n){if(n.length<3)return Fe(n);var t=1,e=n.length,r=n[0],i=r[0],u=r[1],a=[i,i,i,(r=n[1])[0]],o=[u,u,u,r[1]],c=[i,",",u];for(Ge(c,a,o);++t<e;)r=n[t],a.shift(),a.push(r[0]),o.shift(),o.push(r[1]),Ge(c,a,o);for(t=-1;++t<2;)a.shift(),a.push(r[0]),o.shift(),o.push(r[1]),Ge(c,a,o);return c.join("")}function Ze(n){if(n.length<4)return Fe(n);for(var t,e=[],r=-1,i=n.length,u=[0],a=[0];++r<3;)t=n[r],u.push(t[0]),a.push(t[1]);for(e.push(Je(Ho,u)+","+Je(Ho,a)),--r;++r<i;)t=n[r],u.shift(),u.push(t[0]),a.shift(),a.push(t[1]),Ge(e,u,a);return e.join("")}function Be(n){for(var t,e,r=-1,i=n.length,u=i+4,a=[],o=[];++r<4;)e=n[r%i],a.push(e[0]),o.push(e[1]);for(t=[Je(Ho,a),",",Je(Ho,o)],--r;++r<u;)e=n[r%i],a.shift(),a.push(e[0]),o.shift(),o.push(e[1]),Ge(t,a,o);return t.join("")}function $e(n,t){var e=n.length-1;if(e)for(var r,i,u=n[0][0],a=n[0][1],o=n[e][0]-u,c=n[e][1]-a,l=-1;++l<=e;)r=n[l],i=l/e,r[0]=t*r[0]+(1-t)*(u+i*o),r[1]=t*r[1]+(1-t)*(a+i*c);return Xe(n)}function Je(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]+n[3]*t[3]}function Ge(n,t,e){n.push("C",Je(Lo,t),",",Je(Lo,e),",",Je(Fo,t),",",Je(Fo,e),",",Je(Ho,t),",",Je(Ho,e))}function Ke(n,t){return(t[1]-n[1])/(t[0]-n[0])
}function We(n){for(var t=0,e=n.length-1,r=[],i=n[0],u=n[1],a=r[0]=Ke(i,u);++t<e;)r[t]=(a+(a=Ke(i=u,u=n[t+1])))/2;return r[t]=a,r}function Qe(n){for(var t,e,r,i,u=[],a=We(n),o=-1,c=n.length-1;++o<c;)t=Ke(n[o],n[o+1]),Math.abs(t)<1e-6?a[o]=a[o+1]=0:(e=a[o]/t,r=a[o+1]/t,i=e*e+r*r,i>9&&(i=3*t/Math.sqrt(i),a[o]=i*e,a[o+1]=i*r));for(o=-1;++o<=c;)i=(n[Math.min(c,o+1)][0]-n[Math.max(0,o-1)][0])/(6*(1+a[o]*a[o])),u.push([i||0,a[o]*i||0]);return u}function nr(n){return n.length<3?Fe(n):n[0]+Ie(n,Qe(n))}function tr(n,t,e,r){var i,u,a,o,c,l,f;return i=r[n],u=i[0],a=i[1],i=r[t],o=i[0],c=i[1],i=r[e],l=i[0],f=i[1],(f-a)*(o-u)-(c-a)*(l-u)>0}function er(n,t,e){return(e[0]-t[0])*(n[1]-t[1])<(e[1]-t[1])*(n[0]-t[0])}function rr(n,t,e,r){var i=n[0],u=e[0],a=t[0]-i,o=r[0]-u,c=n[1],l=e[1],f=t[1]-c,s=r[1]-l,h=(o*(c-l)-s*(i-u))/(s*a-o*f);return[i+h*a,c+h*f]}function ir(n,t){var e={list:n.map(function(n,t){return{index:t,x:n[0],y:n[1]}}).sort(function(n,t){return n.y<t.y?-1:n.y>t.y?1:n.x<t.x?-1:n.x>t.x?1:0}),bottomSite:null},r={list:[],leftEnd:null,rightEnd:null,init:function(){r.leftEnd=r.createHalfEdge(null,"l"),r.rightEnd=r.createHalfEdge(null,"l"),r.leftEnd.r=r.rightEnd,r.rightEnd.l=r.leftEnd,r.list.unshift(r.leftEnd,r.rightEnd)},createHalfEdge:function(n,t){return{edge:n,side:t,vertex:null,l:null,r:null}},insert:function(n,t){t.l=n,t.r=n.r,n.r.l=t,n.r=t},leftBound:function(n){var t=r.leftEnd;do t=t.r;while(t!=r.rightEnd&&i.rightOf(t,n));return t=t.l},del:function(n){n.l.r=n.r,n.r.l=n.l,n.edge=null},right:function(n){return n.r},left:function(n){return n.l},leftRegion:function(n){return n.edge==null?e.bottomSite:n.edge.region[n.side]},rightRegion:function(n){return n.edge==null?e.bottomSite:n.edge.region[Po[n.side]]}},i={bisect:function(n,t){var e={region:{l:n,r:t},ep:{l:null,r:null}},r=t.x-n.x,i=t.y-n.y,u=r>0?r:-r,a=i>0?i:-i;return e.c=n.x*r+n.y*i+.5*(r*r+i*i),u>a?(e.a=1,e.b=i/r,e.c/=r):(e.b=1,e.a=r/i,e.c/=i),e},intersect:function(n,t){var e=n.edge,r=t.edge;if(!e||!r||e.region.r==r.region.r)return null;var i=e.a*r.b-e.b*r.a;if(Math.abs(i)<1e-10)return null;var u,a,o=(e.c*r.b-r.c*e.b)/i,c=(r.c*e.a-e.c*r.a)/i,l=e.region.r,f=r.region.r;l.y<f.y||l.y==f.y&&l.x<f.x?(u=n,a=e):(u=t,a=r);var s=o>=a.region.r.x;return s&&u.side==="l"||!s&&u.side==="r"?null:{x:o,y:c}},rightOf:function(n,t){var e=n.edge,r=e.region.r,i=t.x>r.x;if(i&&n.side==="l")return 1;if(!i&&n.side==="r")return 0;if(e.a===1){var u=t.y-r.y,a=t.x-r.x,o=0,c=0;if(!i&&e.b<0||i&&e.b>=0?c=o=u>=e.b*a:(c=t.x+t.y*e.b>e.c,e.b<0&&(c=!c),c||(o=1)),!o){var l=r.x-e.region.l.x;c=e.b*(a*a-u*u)<l*u*(1+2*a/l+e.b*e.b),e.b<0&&(c=!c)}}else{var f=e.c-e.a*t.x,s=t.y-f,h=t.x-r.x,g=f-r.y;c=s*s>h*h+g*g}return n.side==="l"?c:!c},endPoint:function(n,e,r){n.ep[e]=r,n.ep[Po[e]]&&t(n)},distance:function(n,t){var e=n.x-t.x,r=n.y-t.y;return Math.sqrt(e*e+r*r)}},u={list:[],insert:function(n,t,e){n.vertex=t,n.ystar=t.y+e;for(var r=0,i=u.list,a=i.length;a>r;r++){var o=i[r];if(!(n.ystar>o.ystar||n.ystar==o.ystar&&t.x>o.vertex.x))break}i.splice(r,0,n)},del:function(n){for(var t=0,e=u.list,r=e.length;r>t&&e[t]!=n;++t);e.splice(t,1)},empty:function(){return u.list.length===0},nextEvent:function(n){for(var t=0,e=u.list,r=e.length;r>t;++t)if(e[t]==n)return e[t+1];return null},min:function(){var n=u.list[0];return{x:n.vertex.x,y:n.ystar}},extractMin:function(){return u.list.shift()}};r.init(),e.bottomSite=e.list.shift();for(var a,o,c,l,f,s,h,g,p,d,m,v,y,M=e.list.shift();;)if(u.empty()||(a=u.min()),M&&(u.empty()||M.y<a.y||M.y==a.y&&M.x<a.x))o=r.leftBound(M),c=r.right(o),h=r.rightRegion(o),v=i.bisect(h,M),s=r.createHalfEdge(v,"l"),r.insert(o,s),d=i.intersect(o,s),d&&(u.del(o),u.insert(o,d,i.distance(d,M))),o=s,s=r.createHalfEdge(v,"r"),r.insert(o,s),d=i.intersect(s,c),d&&u.insert(s,d,i.distance(d,M)),M=e.list.shift();else{if(u.empty())break;o=u.extractMin(),l=r.left(o),c=r.right(o),f=r.right(c),h=r.leftRegion(o),g=r.rightRegion(c),m=o.vertex,i.endPoint(o.edge,o.side,m),i.endPoint(c.edge,c.side,m),r.del(o),u.del(c),r.del(c),y="l",h.y>g.y&&(p=h,h=g,g=p,y="r"),v=i.bisect(h,g),s=r.createHalfEdge(v,y),r.insert(l,s),i.endPoint(v,Po[y],m),d=i.intersect(l,s),d&&(u.del(l),u.insert(l,d,i.distance(d,h))),d=i.intersect(s,f),d&&u.insert(s,d,i.distance(d,h))}for(o=r.right(r.leftEnd);o!=r.rightEnd;o=r.right(o))t(o.edge)}function ur(n){return n.x}function ar(n){return n.y}function or(){return{leaf:!0,nodes:[],point:null,x:null,y:null}}function cr(n,t,e,r,i,u){if(!n(t,e,r,i,u)){var a=.5*(e+i),o=.5*(r+u),c=t.nodes;c[0]&&cr(n,c[0],e,r,a,o),c[1]&&cr(n,c[1],a,r,i,o),c[2]&&cr(n,c[2],e,o,a,u),c[3]&&cr(n,c[3],a,o,i,u)}}function lr(n,t){n=ua.rgb(n),t=ua.rgb(t);var e=n.r,r=n.g,i=n.b,u=t.r-e,a=t.g-r,o=t.b-i;return function(n){return"#"+rt(Math.round(e+u*n))+rt(Math.round(r+a*n))+rt(Math.round(i+o*n))}}function fr(n){var t=[n.a,n.b],e=[n.c,n.d],r=hr(t),i=sr(t,e),u=hr(gr(e,t,-i))||0;t[0]*e[1]<e[0]*t[1]&&(t[0]*=-1,t[1]*=-1,r*=-1,i*=-1),this.rotate=(r?Math.atan2(t[1],t[0]):Math.atan2(-e[0],e[1]))*Fa,this.translate=[n.e,n.f],this.scale=[r,u],this.skew=u?Math.atan2(i,u)*Fa:0}function sr(n,t){return n[0]*t[0]+n[1]*t[1]}function hr(n){var t=Math.sqrt(sr(n,n));return t&&(n[0]/=t,n[1]/=t),t}function gr(n,t,e){return n[0]+=e*t[0],n[1]+=e*t[1],n}function pr(n,t){return t-=n=+n,function(e){return n+t*e}}function dr(n,t){var e,r=[],i=[],u=ua.transform(n),a=ua.transform(t),o=u.translate,c=a.translate,l=u.rotate,f=a.rotate,s=u.skew,h=a.skew,g=u.scale,p=a.scale;return o[0]!=c[0]||o[1]!=c[1]?(r.push("translate(",null,",",null,")"),i.push({i:1,x:pr(o[0],c[0])},{i:3,x:pr(o[1],c[1])})):c[0]||c[1]?r.push("translate("+c+")"):r.push(""),l!=f?(l-f>180?f+=360:f-l>180&&(l+=360),i.push({i:r.push(r.pop()+"rotate(",null,")")-2,x:pr(l,f)})):f&&r.push(r.pop()+"rotate("+f+")"),s!=h?i.push({i:r.push(r.pop()+"skewX(",null,")")-2,x:pr(s,h)}):h&&r.push(r.pop()+"skewX("+h+")"),g[0]!=p[0]||g[1]!=p[1]?(e=r.push(r.pop()+"scale(",null,",",null,")"),i.push({i:e-4,x:pr(g[0],p[0])},{i:e-2,x:pr(g[1],p[1])})):(p[0]!=1||p[1]!=1)&&r.push(r.pop()+"scale("+p+")"),e=i.length,function(n){for(var t,u=-1;++u<e;)r[(t=i[u]).i]=t.x(n);return r.join("")}}function mr(n,t){var e,r={},i={};for(e in n)e in t?r[e]=Mr(e)(n[e],t[e]):i[e]=n[e];for(e in t)e in n||(i[e]=t[e]);return function(n){for(e in r)i[e]=r[e](n);return i}}function vr(n,t){var e,r,i,u,a,o=0,c=0,l=[],f=[];for(n+="",t+="",Oo.lastIndex=0,r=0;e=Oo.exec(t);++r)e.index&&l.push(t.substring(o,c=e.index)),f.push({i:l.length,x:e[0]}),l.push(null),o=Oo.lastIndex;for(o<t.length&&l.push(t.substring(o)),r=0,u=f.length;(e=Oo.exec(n))&&u>r;++r)if(a=f[r],a.x==e[0]){if(a.i)if(l[a.i+1]==null)for(l[a.i-1]+=a.x,l.splice(a.i,1),i=r+1;u>i;++i)f[i].i--;else for(l[a.i-1]+=a.x+l[a.i+1],l.splice(a.i,2),i=r+1;u>i;++i)f[i].i-=2;else if(l[a.i+1]==null)l[a.i]=a.x;else for(l[a.i]=a.x+l[a.i+1],l.splice(a.i+1,1),i=r+1;u>i;++i)f[i].i--;f.splice(r,1),u--,r--}else a.x=pr(parseFloat(e[0]),parseFloat(a.x));for(;u>r;)a=f.pop(),l[a.i+1]==null?l[a.i]=a.x:(l[a.i]=a.x+l[a.i+1],l.splice(a.i+1,1)),u--;return l.length===1?l[0]==null?(a=f[0].x,function(n){return a(n)+""}):function(){return t}:function(n){for(r=0;u>r;++r)l[(a=f[r]).i]=a.x(n);return l.join("")}}function yr(n,t){for(var e,r=ua.interpolators.length;--r>=0&&!(e=ua.interpolators[r](n,t)););return e}function Mr(n){return"transform"==n?dr:yr}function xr(n,t){var e,r=[],i=[],u=n.length,a=t.length,o=Math.min(n.length,t.length);for(e=0;o>e;++e)r.push(yr(n[e],t[e]));for(;u>e;++e)i[e]=n[e];for(;a>e;++e)i[e]=t[e];return function(n){for(e=0;o>e;++e)i[e]=r[e](n);return i}}function br(n){return function(t){return 0>=t?0:t>=1?1:n(t)}}function _r(n){return function(t){return 1-n(1-t)}}function wr(n){return function(t){return.5*(.5>t?n(2*t):2-n(2-2*t))}}function Sr(n){return n*n}function Er(n){return n*n*n}function kr(n){if(0>=n)return 0;if(n>=1)return 1;var t=n*n,e=t*n;return 4*(.5>n?e:3*(n-t)+e-.75)}function Ar(n){return function(t){return Math.pow(t,n)}}function Nr(n){return 1-Math.cos(n*Da/2)}function qr(n){return Math.pow(2,10*(n-1))}function Tr(n){return 1-Math.sqrt(1-n*n)}function Cr(n,t){var e;return arguments.length<2&&(t=.45),arguments.length?e=t/(2*Da)*Math.asin(1/n):(n=1,e=t/4),function(r){return 1+n*Math.pow(2,10*-r)*Math.sin(2*(r-e)*Da/t)}}function zr(n){return n||(n=1.70158),function(t){return t*t*((n+1)*t-n)}}function Dr(n){return 1/2.75>n?7.5625*n*n:2/2.75>n?7.5625*(n-=1.5/2.75)*n+.75:2.5/2.75>n?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375}function jr(n,t){n=ua.hcl(n),t=ua.hcl(t);var e=n.h,r=n.c,i=n.l,u=t.h-e,a=t.c-r,o=t.l-i;return isNaN(a)&&(a=0,r=isNaN(r)?t.c:r),isNaN(u)?(u=0,e=isNaN(e)?t.h:e):u>180?u-=360:-180>u&&(u+=360),function(n){return B(e+u*n,r+a*n,i+o*n)+""}}function Lr(n,t){n=ua.hsl(n),t=ua.hsl(t);var e=n.h,r=n.s,i=n.l,u=t.h-e,a=t.s-r,o=t.l-i;return isNaN(a)&&(a=0,r=isNaN(r)?t.s:r),isNaN(u)?(u=0,e=isNaN(e)?t.h:e):u>180?u-=360:-180>u&&(u+=360),function(n){return P(e+u*n,r+a*n,i+o*n)+""}}function Fr(n,t){n=ua.lab(n),t=ua.lab(t);var e=n.l,r=n.a,i=n.b,u=t.l-e,a=t.a-r,o=t.b-i;return function(n){return G(e+u*n,r+a*n,i+o*n)+""}}function Hr(n,t){return t-=n,function(e){return Math.round(n+t*e)}}function Pr(n,t){return t=t-(n=+n)?1/(t-n):0,function(e){return(e-n)*t}}function Rr(n,t){return t=t-(n=+n)?1/(t-n):0,function(e){return Math.max(0,Math.min(1,(e-n)*t))}}function Or(n){for(var t=n.source,e=n.target,r=Ur(t,e),i=[t];t!==r;)t=t.parent,i.push(t);for(var u=i.length;e!==r;)i.splice(u,0,e),e=e.parent;return i}function Yr(n){for(var t=[],e=n.parent;null!=e;)t.push(n),n=e,e=e.parent;return t.push(n),t}function Ur(n,t){if(n===t)return n;for(var e=Yr(n),r=Yr(t),i=e.pop(),u=r.pop(),a=null;i===u;)a=i,i=e.pop(),u=r.pop();return a}function Ir(n){n.fixed|=2}function Vr(n){n.fixed&=-7}function Xr(n){n.fixed|=4,n.px=n.x,n.py=n.y}function Zr(n){n.fixed&=-5}function Br(n,t,e){var r=0,i=0;if(n.charge=0,!n.leaf)for(var u,a=n.nodes,o=a.length,c=-1;++c<o;)u=a[c],null!=u&&(Br(u,t,e),n.charge+=u.charge,r+=u.charge*u.cx,i+=u.charge*u.cy);if(n.point){n.leaf||(n.point.x+=Math.random()-.5,n.point.y+=Math.random()-.5);var l=t*e[n.point.index];n.charge+=n.pointCharge=l,r+=l*n.point.x,i+=l*n.point.y}n.cx=r/n.charge,n.cy=i/n.charge}function $r(n,t){return ua.rebind(n,t,"sort","children","value"),n.nodes=n,n.links=Wr,n}function Jr(n){return n.children}function Gr(n){return n.value}function Kr(n,t){return t.value-n.value}function Wr(n){return ua.merge(n.map(function(n){return(n.children||[]).map(function(t){return{source:n,target:t}})}))}function Qr(n){return n.x}function ni(n){return n.y}function ti(n,t,e){n.y0=t,n.y=e}function ei(n){return ua.range(n.length)}function ri(n){for(var t=-1,e=n[0].length,r=[];++t<e;)r[t]=0;return r}function ii(n){for(var t,e=1,r=0,i=n[0][1],u=n.length;u>e;++e)(t=n[e][1])>i&&(r=e,i=t);return r}function ui(n){return n.reduce(ai,0)}function ai(n,t){return n+t[1]}function oi(n,t){return ci(n,Math.ceil(Math.log(t.length)/Math.LN2+1))}function ci(n,t){for(var e=-1,r=+n[0],i=(n[1]-r)/t,u=[];++e<=t;)u[e]=i*e+r;return u}function li(n){return[ua.min(n),ua.max(n)]}function fi(n,t){return n.parent==t.parent?1:2}function si(n){var t=n.children;return t&&t.length?t[0]:n._tree.thread}function hi(n){var t,e=n.children;return e&&(t=e.length)?e[t-1]:n._tree.thread}function gi(n,t){var e=n.children;if(e&&(i=e.length))for(var r,i,u=-1;++u<i;)t(r=gi(e[u],t),n)>0&&(n=r);return n}function pi(n,t){return n.x-t.x}function di(n,t){return t.x-n.x}function mi(n,t){return n.depth-t.depth}function vi(n,t){function e(n,r){var i=n.children;if(i&&(a=i.length))for(var u,a,o=null,c=-1;++c<a;)u=i[c],e(u,o),o=u;t(n,r)}e(n,null)}function yi(n){for(var t,e=0,r=0,i=n.children,u=i.length;--u>=0;)t=i[u]._tree,t.prelim+=e,t.mod+=e,e+=t.shift+(r+=t.change)}function Mi(n,t,e){n=n._tree,t=t._tree;var r=e/(t.number-n.number);n.change+=r,t.change-=r,t.shift+=e,t.prelim+=e,t.mod+=e}function xi(n,t,e){return n._tree.ancestor.parent==t.parent?n._tree.ancestor:e}function bi(n,t){return n.value-t.value}function _i(n,t){var e=n._pack_next;n._pack_next=t,t._pack_prev=n,t._pack_next=e,e._pack_prev=t}function wi(n,t){n._pack_next=t,t._pack_prev=n}function Si(n,t){var e=t.x-n.x,r=t.y-n.y,i=n.r+t.r;return i*i-e*e-r*r>.001}function Ei(n){function t(n){f=Math.min(n.x-n.r,f),s=Math.max(n.x+n.r,s),h=Math.min(n.y-n.r,h),g=Math.max(n.y+n.r,g)}if((e=n.children)&&(l=e.length)){var e,r,i,u,a,o,c,l,f=1/0,s=-1/0,h=1/0,g=-1/0;if(e.forEach(ki),r=e[0],r.x=-r.r,r.y=0,t(r),l>1&&(i=e[1],i.x=i.r,i.y=0,t(i),l>2))for(u=e[2],qi(r,i,u),t(u),_i(r,u),r._pack_prev=u,_i(u,i),i=r._pack_next,a=3;l>a;a++){qi(r,i,u=e[a]);var p=0,d=1,m=1;for(o=i._pack_next;o!==i;o=o._pack_next,d++)if(Si(o,u)){p=1;break}if(1==p)for(c=r._pack_prev;c!==o._pack_prev&&!Si(c,u);c=c._pack_prev,m++);p?(m>d||d==m&&i.r<r.r?wi(r,i=o):wi(r=c,i),a--):(_i(r,u),i=u,t(u))}var v=(f+s)/2,y=(h+g)/2,M=0;for(a=0;l>a;a++)u=e[a],u.x-=v,u.y-=y,M=Math.max(M,u.r+Math.sqrt(u.x*u.x+u.y*u.y));n.r=M,e.forEach(Ai)}}function ki(n){n._pack_next=n._pack_prev=n}function Ai(n){delete n._pack_next,delete n._pack_prev}function Ni(n,t,e,r){var i=n.children;if(n.x=t+=r*n.x,n.y=e+=r*n.y,n.r*=r,i)for(var u=-1,a=i.length;++u<a;)Ni(i[u],t,e,r)}function qi(n,t,e){var r=n.r+e.r,i=t.x-n.x,u=t.y-n.y;if(r&&(i||u)){var a=t.r+e.r,o=i*i+u*u;a*=a,r*=r;var c=.5+(r-a)/(2*o),l=Math.sqrt(Math.max(0,2*a*(r+o)-(r-=o)*r-a*a))/(2*o);e.x=n.x+c*i+l*u,e.y=n.y+c*u-l*i}else e.x=n.x+r,e.y=n.y}function Ti(n){return 1+ua.max(n,function(n){return n.y})}function Ci(n){return n.reduce(function(n,t){return n+t.x},0)/n.length}function zi(n){var t=n.children;return t&&t.length?zi(t[0]):n}function Di(n){var t,e=n.children;return e&&(t=e.length)?Di(e[t-1]):n}function ji(n){return{x:n.x,y:n.y,dx:n.dx,dy:n.dy}}function Li(n,t){var e=n.x+t[3],r=n.y+t[0],i=n.dx-t[1]-t[3],u=n.dy-t[0]-t[2];return 0>i&&(e+=i/2,i=0),0>u&&(r+=u/2,u=0),{x:e,y:r,dx:i,dy:u}}function Fi(n){var t=n[0],e=n[n.length-1];return e>t?[t,e]:[e,t]}function Hi(n){return n.rangeExtent?n.rangeExtent():Fi(n.range())}function Pi(n,t,e,r){var i=e(n[0],n[1]),u=r(t[0],t[1]);return function(n){return u(i(n))}}function Ri(n,t){var e,r=0,i=n.length-1,u=n[r],a=n[i];return u>a&&(e=r,r=i,i=e,e=u,u=a,a=e),(t=t(a-u))&&(n[r]=t.floor(u),n[i]=t.ceil(a)),n}function Oi(n,t,e,r){var i=[],u=[],a=0,o=Math.min(n.length,t.length)-1;for(n[o]<n[0]&&(n=n.slice().reverse(),t=t.slice().reverse());++a<=o;)i.push(e(n[a-1],n[a])),u.push(r(t[a-1],t[a]));return function(t){var e=ua.bisect(n,t,1,o)-1;return u[e](i[e](t))}}function Yi(n,t,e,r){function i(){var i=Math.min(n.length,t.length)>2?Oi:Pi,c=r?Rr:Pr;return a=i(n,t,c,e),o=i(t,n,c,yr),u}function u(n){return a(n)}var a,o;return u.invert=function(n){return o(n)},u.domain=function(t){return arguments.length?(n=t.map(Number),i()):n},u.range=function(n){return arguments.length?(t=n,i()):t},u.rangeRound=function(n){return u.range(n).interpolate(Hr)},u.clamp=function(n){return arguments.length?(r=n,i()):r},u.interpolate=function(n){return arguments.length?(e=n,i()):e},u.ticks=function(t){return Xi(n,t)},u.tickFormat=function(t,e){return Zi(n,t,e)},u.nice=function(){return Ri(n,Ii),i()},u.copy=function(){return Yi(n,t,e,r)},i()}function Ui(n,t){return ua.rebind(n,t,"range","rangeRound","interpolate","clamp")}function Ii(n){return n=Math.pow(10,Math.round(Math.log(n)/Math.LN10)-1),n&&{floor:function(t){return Math.floor(t/n)*n},ceil:function(t){return Math.ceil(t/n)*n}}}function Vi(n,t){var e=Fi(n),r=e[1]-e[0],i=Math.pow(10,Math.floor(Math.log(r/t)/Math.LN10)),u=t/r*i;return.15>=u?i*=10:.35>=u?i*=5:.75>=u&&(i*=2),e[0]=Math.ceil(e[0]/i)*i,e[1]=Math.floor(e[1]/i)*i+.5*i,e[2]=i,e}function Xi(n,t){return ua.range.apply(ua,Vi(n,t))}function Zi(n,t,e){var r=-Math.floor(Math.log(Vi(n,t)[2])/Math.LN10+.01);return ua.format(e?e.replace(no,function(n,t,e,i,u,a,o,c,l,f){return[t,e,i,u,a,o,c,l||"."+(r-2*("%"===f)),f].join("")}):",."+r+"f")}function Bi(n,t,e,r,i){function u(t){return n(e(t))}function a(){return e===$i?{floor:o,ceil:c}:{floor:function(n){return-c(-n)},ceil:function(n){return-o(-n)}}}function o(n){return Math.pow(t,Math.floor(Math.log(n)/Math.log(t)))}function c(n){return Math.pow(t,Math.ceil(Math.log(n)/Math.log(t)))}return u.invert=function(t){return r(n.invert(t))},u.domain=function(t){return arguments.length?(t[0]<0?(e=Gi,r=Ki):(e=$i,r=Ji),n.domain((i=t.map(Number)).map(e)),u):i},u.base=function(n){return arguments.length?(t=+n,u):t},u.nice=function(){return n.domain(Ri(i,a).map(e)),u},u.ticks=function(){var i=Fi(n.domain()),u=[];if(i.every(isFinite)){var a=Math.log(t),o=Math.floor(i[0]/a),c=Math.ceil(i[1]/a),l=r(i[0]),f=r(i[1]),s=t%1?2:t;if(e===Gi)for(u.push(-Math.pow(t,-o));o++<c;)for(var h=s-1;h>0;h--)u.push(-Math.pow(t,-o)*h);else{for(;c>o;o++)for(var h=1;s>h;h++)u.push(Math.pow(t,o)*h);u.push(Math.pow(t,o))}for(o=0;u[o]<l;o++);for(c=u.length;u[c-1]>f;c--);u=u.slice(o,c)}return u},u.tickFormat=function(n,i){if(arguments.length<2&&(i=Jo),!arguments.length)return i;var a,o=Math.log(t),c=Math.max(.1,n/u.ticks().length),l=e===Gi?(a=-1e-12,Math.floor):(a=1e-12,Math.ceil);return function(n){return n/r(o*l(e(n)/o+a))<=c?i(n):""}},u.copy=function(){return Bi(n.copy(),t,e,r,i)},Ui(u,n)}function $i(n){return Math.log(0>n?0:n)}function Ji(n){return Math.exp(n)}function Gi(n){return-Math.log(n>0?0:-n)}function Ki(n){return-Math.exp(-n)}function Wi(n,t,e){function r(t){return n(i(t))}var i=Qi(t),u=Qi(1/t);return r.invert=function(t){return u(n.invert(t))},r.domain=function(t){return arguments.length?(n.domain((e=t.map(Number)).map(i)),r):e},r.ticks=function(n){return Xi(e,n)},r.tickFormat=function(n,t){return Zi(e,n,t)},r.nice=function(){return r.domain(Ri(e,Ii))},r.exponent=function(a){return arguments.length?(i=Qi(t=a),u=Qi(1/t),n.domain(e.map(i)),r):t},r.copy=function(){return Wi(n.copy(),t,e)},Ui(r,n)}function Qi(n){return function(t){return 0>t?-Math.pow(-t,n):Math.pow(t,n)}}function nu(n,t){function e(t){return a[((u.get(t)||u.set(t,n.push(t)))-1)%a.length]}function r(t,e){return ua.range(n.length).map(function(n){return t+e*n})}var u,a,o;return e.domain=function(r){if(!arguments.length)return n;n=[],u=new i;for(var a,o=-1,c=r.length;++o<c;)u.has(a=r[o])||u.set(a,n.push(a));return e[t.t].apply(e,t.a)},e.range=function(n){return arguments.length?(a=n,o=0,t={t:"range",a:arguments},e):a},e.rangePoints=function(i,u){arguments.length<2&&(u=0);var c=i[0],l=i[1],f=(l-c)/(Math.max(1,n.length-1)+u);return a=r(n.length<2?(c+l)/2:c+f*u/2,f),o=0,t={t:"rangePoints",a:arguments},e},e.rangeBands=function(i,u,c){arguments.length<2&&(u=0),arguments.length<3&&(c=u);var l=i[1]<i[0],f=i[l-0],s=i[1-l],h=(s-f)/(n.length-u+2*c);return a=r(f+h*c,h),l&&a.reverse(),o=h*(1-u),t={t:"rangeBands",a:arguments},e},e.rangeRoundBands=function(i,u,c){arguments.length<2&&(u=0),arguments.length<3&&(c=u);var l=i[1]<i[0],f=i[l-0],s=i[1-l],h=Math.floor((s-f)/(n.length-u+2*c)),g=s-f-(n.length-u)*h;return a=r(f+Math.round(g/2),h),l&&a.reverse(),o=Math.round(h*(1-u)),t={t:"rangeRoundBands",a:arguments},e},e.rangeBand=function(){return o},e.rangeExtent=function(){return Fi(t.a[0])},e.copy=function(){return nu(n,t)},e.domain(n)}function tu(n,t){function e(){var e=0,u=t.length;for(i=[];++e<u;)i[e-1]=ua.quantile(n,e/u);return r}function r(n){return isNaN(n=+n)?0/0:t[ua.bisect(i,n)]}var i;return r.domain=function(t){return arguments.length?(n=t.filter(function(n){return!isNaN(n)}).sort(ua.ascending),e()):n},r.range=function(n){return arguments.length?(t=n,e()):t},r.quantiles=function(){return i},r.copy=function(){return tu(n,t)},e()}function eu(n,t,e){function r(t){return e[Math.max(0,Math.min(a,Math.floor(u*(t-n))))]}function i(){return u=e.length/(t-n),a=e.length-1,r}var u,a;return r.domain=function(e){return arguments.length?(n=+e[0],t=+e[e.length-1],i()):[n,t]},r.range=function(n){return arguments.length?(e=n,i()):e},r.copy=function(){return eu(n,t,e)},i()}function ru(n,t){function e(e){return t[ua.bisect(n,e)]}return e.domain=function(t){return arguments.length?(n=t,e):n},e.range=function(n){return arguments.length?(t=n,e):t},e.copy=function(){return ru(n,t)},e}function iu(n){function t(n){return+n}return t.invert=t,t.domain=t.range=function(e){return arguments.length?(n=e.map(t),t):n},t.ticks=function(t){return Xi(n,t)},t.tickFormat=function(t,e){return Zi(n,t,e)},t.copy=function(){return iu(n)},t}function uu(n){return n.innerRadius}function au(n){return n.outerRadius}function ou(n){return n.startAngle}function cu(n){return n.endAngle}function lu(n){for(var t,e,r,i=-1,u=n.length;++i<u;)t=n[i],e=t[0],r=t[1]+nc,t[0]=e*Math.cos(r),t[1]=e*Math.sin(r);return n}function fu(n){function t(t){function c(){d.push("M",o(n(v),s),f,l(n(m.reverse()),s),"Z")}for(var h,g,p,d=[],m=[],v=[],y=-1,M=t.length,x=lt(e),b=lt(i),_=e===r?function(){return g}:lt(r),w=i===u?function(){return p}:lt(u);++y<M;)a.call(this,h=t[y],y)?(m.push([g=+x.call(this,h,y),p=+b.call(this,h,y)]),v.push([+_.call(this,h,y),+w.call(this,h,y)])):m.length&&(c(),m=[],v=[]);return m.length&&c(),d.length?d.join(""):null}var e=je,r=je,i=0,u=Le,a=Ht,o=Fe,c=o.key,l=o,f="L",s=.7;return t.x=function(n){return arguments.length?(e=r=n,t):r},t.x0=function(n){return arguments.length?(e=n,t):e},t.x1=function(n){return arguments.length?(r=n,t):r},t.y=function(n){return arguments.length?(i=u=n,t):u},t.y0=function(n){return arguments.length?(i=n,t):i},t.y1=function(n){return arguments.length?(u=n,t):u},t.defined=function(n){return arguments.length?(a=n,t):a},t.interpolate=function(n){return arguments.length?(c="function"==typeof n?o=n:(o=jo.get(n)||Fe).key,l=o.reverse||o,f=o.closed?"M":"L",t):c},t.tension=function(n){return arguments.length?(s=n,t):s},t}function su(n){return n.radius}function hu(n){return[n.x,n.y]}function gu(n){return function(){var t=n.apply(this,arguments),e=t[0],r=t[1]+nc;return[e*Math.cos(r),e*Math.sin(r)]}}function pu(){return 64}function du(){return"circle"}function mu(n){var t=Math.sqrt(n/Da);return"M0,"+t+"A"+t+","+t+" 0 1,1 0,"+-t+"A"+t+","+t+" 0 1,1 0,"+t+"Z"}function vu(n,t){return va(n,ac),n.id=t,n}function yu(n,t,e,r){var i=n.id;return D(n,"function"==typeof e?function(n,u,a){n.__transition__[i].tween.set(t,r(e.call(n,n.__data__,u,a)))}:(e=r(e),function(n){n.__transition__[i].tween.set(t,e)}))}function Mu(n){return null==n&&(n=""),function(){this.textContent=n}}function xu(n,t,e,r){var u=n.__transition__||(n.__transition__={active:0,count:0}),a=u[e];if(!a){var o=r.time;return a=u[e]={tween:new i,event:ua.dispatch("start","end"),time:o,ease:r.ease,delay:r.delay,duration:r.duration},++u.count,ua.timer(function(r){function i(r){return u.active>e?l():(u.active=e,h.start.call(n,f,t),a.tween.forEach(function(e,r){(r=r.call(n,f,t))&&d.push(r)}),c(r)||ua.timer(c,0,o),1)}function c(r){if(u.active!==e)return l();for(var i=(r-g)/p,a=s(i),o=d.length;o>0;)d[--o].call(n,a);return i>=1?(l(),h.end.call(n,f,t),1):void 0}function l(){return--u.count?delete u[e]:delete n.__transition__,1}var f=n.__data__,s=a.ease,h=a.event,g=a.delay,p=a.duration,d=[];return r>=g?i(r):ua.timer(i,g,o),1},0,o),a}}function bu(n,t){n.attr("transform",function(n){return"translate("+t(n)+",0)"})}function _u(n,t){n.attr("transform",function(n){return"translate(0,"+t(n)+")"})}function wu(n,t,e){if(r=[],e&&t.length>1){for(var r,i,u,a=Fi(n.domain()),o=-1,c=t.length,l=(t[1]-t[0])/++e;++o<c;)for(i=e;--i>0;)(u=+t[o]-i*l)>=a[0]&&r.push(u);for(--o,i=0;++i<e&&(u=+t[o]+i*l)<a[1];)r.push(u)}return r}function Su(){this._=new Date(arguments.length>1?Date.UTC.apply(this,arguments):arguments[0])}function Eu(n,t,e){function r(t){var e=n(t),r=u(e,1);return r-t>t-e?e:r}function i(e){return t(e=n(new gc(e-1)),1),e}function u(n,e){return t(n=new gc(+n),e),n}function a(n,r,u){var a=i(n),o=[];if(u>1)for(;r>a;)e(a)%u||o.push(new Date(+a)),t(a,1);else for(;r>a;)o.push(new Date(+a)),t(a,1);return o}function o(n,t,e){try{gc=Su;var r=new Su;return r._=n,a(r,t,e)}finally{gc=Date}}n.floor=n,n.round=r,n.ceil=i,n.offset=u,n.range=a;var c=n.utc=ku(n);return c.floor=c,c.round=ku(r),c.ceil=ku(i),c.offset=ku(u),c.range=o,n}function ku(n){return function(t,e){try{gc=Su;var r=new Su;return r._=t,n(r,e)._}finally{gc=Date}}}function Au(n,t,e,r){for(var i,u,a=0,o=t.length,c=e.length;o>a;){if(r>=c)return-1;if(i=t.charCodeAt(a++),37===i){if(u=Cc[t.charAt(a++)],!u||(r=u(n,e,r))<0)return-1}else if(i!=e.charCodeAt(r++))return-1}return r}function Nu(n){return RegExp("^(?:"+n.map(ua.requote).join("|")+")","i")}function qu(n){for(var t=new i,e=-1,r=n.length;++e<r;)t.set(n[e].toLowerCase(),e);return t}function Tu(n,t,e){n+="";var r=n.length;return e>r?Array(e-r+1).join(t)+n:n}function Cu(n,t,e){Sc.lastIndex=0;var r=Sc.exec(t.substring(e));return r?e+=r[0].length:-1}function zu(n,t,e){wc.lastIndex=0;var r=wc.exec(t.substring(e));return r?e+=r[0].length:-1}function Du(n,t,e){Ac.lastIndex=0;var r=Ac.exec(t.substring(e));return r?(n.m=Nc.get(r[0].toLowerCase()),e+=r[0].length):-1}function ju(n,t,e){Ec.lastIndex=0;var r=Ec.exec(t.substring(e));return r?(n.m=kc.get(r[0].toLowerCase()),e+=r[0].length):-1}function Lu(n,t,e){return Au(n,""+Tc.c,t,e)}function Fu(n,t,e){return Au(n,""+Tc.x,t,e)}function Hu(n,t,e){return Au(n,""+Tc.X,t,e)}function Pu(n,t,e){zc.lastIndex=0;var r=zc.exec(t.substring(e,e+4));return r?(n.y=+r[0],e+=r[0].length):-1}function Ru(n,t,e){zc.lastIndex=0;var r=zc.exec(t.substring(e,e+2));return r?(n.y=Ou(+r[0]),e+=r[0].length):-1}function Ou(n){return n+(n>68?1900:2e3)}function Yu(n,t,e){zc.lastIndex=0;var r=zc.exec(t.substring(e,e+2));return r?(n.m=r[0]-1,e+=r[0].length):-1}function Uu(n,t,e){zc.lastIndex=0;var r=zc.exec(t.substring(e,e+2));return r?(n.d=+r[0],e+=r[0].length):-1}function Iu(n,t,e){zc.lastIndex=0;var r=zc.exec(t.substring(e,e+2));return r?(n.H=+r[0],e+=r[0].length):-1}function Vu(n,t,e){zc.lastIndex=0;var r=zc.exec(t.substring(e,e+2));return r?(n.M=+r[0],e+=r[0].length):-1}function Xu(n,t,e){zc.lastIndex=0;var r=zc.exec(t.substring(e,e+2));return r?(n.S=+r[0],e+=r[0].length):-1}function Zu(n,t,e){zc.lastIndex=0;var r=zc.exec(t.substring(e,e+3));return r?(n.L=+r[0],e+=r[0].length):-1}function Bu(n,t,e){var r=Dc.get(t.substring(e,e+=2).toLowerCase());return null==r?-1:(n.p=r,e)}function $u(n){var t=n.getTimezoneOffset(),e=t>0?"-":"+",r=~~(Math.abs(t)/60),i=Math.abs(t)%60;return e+Tu(r,"0",2)+Tu(i,"0",2)}function Ju(n){return n.toISOString()}function Gu(n,t,e){function r(t){return n(t)}return r.invert=function(t){return Ku(n.invert(t))},r.domain=function(t){return arguments.length?(n.domain(t),r):n.domain().map(Ku)},r.nice=function(n){return r.domain(Ri(r.domain(),function(){return n}))},r.ticks=function(e,i){var u=Fi(r.domain());if("function"!=typeof e){var a=u[1]-u[0],o=a/e,c=ua.bisect(Lc,o);if(c==Lc.length)return t.year(u,e);if(!c)return n.ticks(e).map(Ku);Math.log(o/Lc[c-1])<Math.log(Lc[c]/o)&&--c,e=t[c],i=e[1],e=e[0].range}return e(u[0],new Date(+u[1]+1),i)},r.tickFormat=function(){return e},r.copy=function(){return Gu(n.copy(),t,e)},Ui(r,n)}function Ku(n){return new Date(n)}function Wu(n){return function(t){for(var e=n.length-1,r=n[e];!r[1](t);)r=n[--e];return r[0](t)}}function Qu(n){var t=new Date(n,0,1);return t.setFullYear(n),t}function na(n){var t=n.getFullYear(),e=Qu(t),r=Qu(t+1);return t+(n-e)/(r-e)}function ta(n){var t=new Date(Date.UTC(n,0,1));return t.setUTCFullYear(n),t}function ea(n){var t=n.getUTCFullYear(),e=ta(t),r=ta(t+1);return t+(n-e)/(r-e)}function ra(n){return JSON.parse(n.responseText)}function ia(n){var t=aa.createRange();return t.selectNode(aa.body),t.createContextualFragment(n.responseText)}var ua={version:"3.1.10"};Date.now||(Date.now=function(){return+new Date});var aa=document,oa=window;try{aa.createElement("div").style.setProperty("opacity",0,"")}catch(ca){var la=oa.CSSStyleDeclaration.prototype,fa=la.setProperty;la.setProperty=function(n,t,e){fa.call(this,n,t+"",e)}}ua.ascending=function(n,t){return t>n?-1:n>t?1:n>=t?0:0/0},ua.descending=function(n,t){return n>t?-1:t>n?1:t>=n?0:0/0},ua.min=function(n,t){var e,r,i=-1,u=n.length;if(arguments.length===1){for(;++i<u&&((e=n[i])==null||e!=e);)e=void 0;for(;++i<u;)(r=n[i])!=null&&e>r&&(e=r)}else{for(;++i<u&&((e=t.call(n,n[i],i))==null||e!=e);)e=void 0;for(;++i<u;)(r=t.call(n,n[i],i))!=null&&e>r&&(e=r)}return e},ua.max=function(n,t){var e,r,i=-1,u=n.length;if(arguments.length===1){for(;++i<u&&((e=n[i])==null||e!=e);)e=void 0;for(;++i<u;)(r=n[i])!=null&&r>e&&(e=r)}else{for(;++i<u&&((e=t.call(n,n[i],i))==null||e!=e);)e=void 0;for(;++i<u;)(r=t.call(n,n[i],i))!=null&&r>e&&(e=r)}return e},ua.extent=function(n,t){var e,r,i,u=-1,a=n.length;if(arguments.length===1){for(;++u<a&&((e=i=n[u])==null||e!=e);)e=i=void 0;for(;++u<a;)(r=n[u])!=null&&(e>r&&(e=r),r>i&&(i=r))}else{for(;++u<a&&((e=i=t.call(n,n[u],u))==null||e!=e);)e=void 0;for(;++u<a;)(r=t.call(n,n[u],u))!=null&&(e>r&&(e=r),r>i&&(i=r))}return[e,i]},ua.sum=function(n,t){var e,r=0,i=n.length,u=-1;if(arguments.length===1)for(;++u<i;)isNaN(e=+n[u])||(r+=e);else for(;++u<i;)isNaN(e=+t.call(n,n[u],u))||(r+=e);return r},ua.mean=function(t,e){var r,i=t.length,u=0,a=-1,o=0;if(arguments.length===1)for(;++a<i;)n(r=t[a])&&(u+=(r-u)/++o);else for(;++a<i;)n(r=e.call(t,t[a],a))&&(u+=(r-u)/++o);return o?u:void 0},ua.quantile=function(n,t){var e=(n.length-1)*t+1,r=Math.floor(e),i=+n[r-1],u=e-r;return u?i+u*(n[r]-i):i},ua.median=function(t,e){return arguments.length>1&&(t=t.map(e)),t=t.filter(n),t.length?ua.quantile(t.sort(ua.ascending),.5):void 0},ua.bisector=function(n){return{left:function(t,e,r,i){for(arguments.length<3&&(r=0),arguments.length<4&&(i=t.length);i>r;){var u=r+i>>>1;n.call(t,t[u],u)<e?r=u+1:i=u}return r},right:function(t,e,r,i){for(arguments.length<3&&(r=0),arguments.length<4&&(i=t.length);i>r;){var u=r+i>>>1;e<n.call(t,t[u],u)?i=u:r=u+1}return r}}};var sa=ua.bisector(function(n){return n});ua.bisectLeft=sa.left,ua.bisect=ua.bisectRight=sa.right,ua.shuffle=function(n){for(var t,e,r=n.length;r;)e=Math.random()*r--|0,t=n[r],n[r]=n[e],n[e]=t;return n},ua.permute=function(n,t){for(var e=[],r=-1,i=t.length;++r<i;)e[r]=n[t[r]];return e},ua.zip=function(){if(!(i=arguments.length))return[];for(var n=-1,e=ua.min(arguments,t),r=Array(e);++n<e;)for(var i,u=-1,a=r[n]=Array(i);++u<i;)a[u]=arguments[u][n];return r},ua.transpose=function(n){return ua.zip.apply(ua,n)},ua.keys=function(n){var t=[];for(var e in n)t.push(e);return t},ua.values=function(n){var t=[];for(var e in n)t.push(n[e]);return t},ua.entries=function(n){var t=[];for(var e in n)t.push({key:e,value:n[e]});return t},ua.merge=function(n){return Array.prototype.concat.apply([],n)},ua.range=function(n,t,r){if(arguments.length<3&&(r=1,arguments.length<2&&(t=n,n=0)),1/0===(t-n)/r)throw Error("infinite range");var i,u=[],a=e(Math.abs(r)),o=-1;if(n*=a,t*=a,r*=a,0>r)for(;(i=n+r*++o)>t;)u.push(i/a);else for(;(i=n+r*++o)<t;)u.push(i/a);return u},ua.map=function(n){var t=new i;for(var e in n)t.set(e,n[e]);return t},r(i,{has:function(n){return ha+n in this},get:function(n){return this[ha+n]},set:function(n,t){return this[ha+n]=t},remove:function(n){return n=ha+n,n in this&&delete this[n]},keys:function(){var n=[];return this.forEach(function(t){n.push(t)}),n},values:function(){var n=[];return this.forEach(function(t,e){n.push(e)}),n},entries:function(){var n=[];return this.forEach(function(t,e){n.push({key:t,value:e})}),n},forEach:function(n){for(var t in this)t.charCodeAt(0)===ga&&n.call(this,t.substring(1),this[t])}});var ha="\0",ga=ha.charCodeAt(0);ua.nest=function(){function n(t,o,c){if(c>=a.length)return r?r.call(u,o):e?o.sort(e):o;for(var l,f,s,h,g=-1,p=o.length,d=a[c++],m=new i;++g<p;)(h=m.get(l=d(f=o[g])))?h.push(f):m.set(l,[f]);return t?(f=t(),s=function(e,r){f.set(e,n(t,r,c))}):(f={},s=function(e,r){f[e]=n(t,r,c)}),m.forEach(s),f}function t(n,e){if(e>=a.length)return n;var r=[],i=o[e++];return n.forEach(function(n,i){r.push({key:n,values:t(i,e)})}),i?r.sort(function(n,t){return i(n.key,t.key)}):r}var e,r,u={},a=[],o=[];return u.map=function(t,e){return n(e,t,0)},u.entries=function(e){return t(n(ua.map,e,0),0)},u.key=function(n){return a.push(n),u},u.sortKeys=function(n){return o[a.length-1]=n,u},u.sortValues=function(n){return e=n,u},u.rollup=function(n){return r=n,u},u},ua.set=function(n){var t=new u;if(n)for(var e=0;e<n.length;e++)t.add(n[e]);return t},r(u,{has:function(n){return ha+n in this
},add:function(n){return this[ha+n]=!0,n},remove:function(n){return n=ha+n,n in this&&delete this[n]},values:function(){var n=[];return this.forEach(function(t){n.push(t)}),n},forEach:function(n){for(var t in this)t.charCodeAt(0)===ga&&n.call(this,t.substring(1))}}),ua.behavior={},ua.rebind=function(n,t){for(var e,r=1,i=arguments.length;++r<i;)n[e=arguments[r]]=a(n,t,t[e]);return n},ua.dispatch=function(){for(var n=new o,t=-1,e=arguments.length;++t<e;)n[arguments[t]]=c(n);return n},o.prototype.on=function(n,t){var e=n.indexOf("."),r="";if(e>=0&&(r=n.substring(e+1),n=n.substring(0,e)),n)return arguments.length<2?this[n].on(r):this[n].on(r,t);if(arguments.length===2){if(null==t)for(n in this)this.hasOwnProperty(n)&&this[n].on(r,null);return this}},ua.event=null,ua.mouse=function(n){return g(n,f())};var pa=/WebKit/.test(oa.navigator.userAgent)?-1:0,da=d;try{da(aa.documentElement.childNodes)[0].nodeType}catch(ma){da=p}var va=[].__proto__?function(n,t){n.__proto__=t}:function(n,t){for(var e in t)n[e]=t[e]};ua.touches=function(n,t){return arguments.length<2&&(t=f().touches),t?da(t).map(function(t){var e=g(n,t);return e.identifier=t.identifier,e}):[]},ua.behavior.drag=function(){function n(){this.on("mousedown.drag",t).on("touchstart.drag",t)}function t(){function n(){var n=a.parentNode;return null!=f?ua.touches(n).filter(function(n){return n.identifier===f})[0]:ua.mouse(n)}function t(){if(!a.parentNode)return i();var t=n(),e=t[0]-h[0],r=t[1]-h[1];g|=e|r,h=t,l(),o({type:"drag",x:t[0]+u[0],y:t[1]+u[1],dx:e,dy:r})}function i(){o({type:"dragend"}),g&&(l(),ua.event.target===c&&s(p,"click")),p.on(null!=f?"touchmove.drag-"+f:"mousemove.drag",null).on(null!=f?"touchend.drag-"+f:"mouseup.drag",null)}var u,a=this,o=e.of(a,arguments),c=ua.event.target,f=ua.event.touches?ua.event.changedTouches[0].identifier:null,h=n(),g=0,p=ua.select(oa).on(null!=f?"touchmove.drag-"+f:"mousemove.drag",t).on(null!=f?"touchend.drag-"+f:"mouseup.drag",i,!0);r?(u=r.apply(a,arguments),u=[u.x-h[0],u.y-h[1]]):u=[0,0],null==f&&l(),o({type:"dragstart"})}var e=h(n,"drag","dragstart","dragend"),r=null;return n.origin=function(t){return arguments.length?(r=t,n):r},ua.rebind(n,e,"on")};var ya=function(n,t){return t.querySelector(n)},Ma=function(n,t){return t.querySelectorAll(n)},xa=aa.documentElement,ba=xa.matchesSelector||xa.webkitMatchesSelector||xa.mozMatchesSelector||xa.msMatchesSelector||xa.oMatchesSelector,_a=function(n,t){return ba.call(n,t)};"function"==typeof Sizzle&&(ya=function(n,t){return Sizzle(n,t)[0]||null},Ma=function(n,t){return Sizzle.uniqueSort(Sizzle(n,t))},_a=Sizzle.matchesSelector),ua.selection=function(){return Na};var wa=ua.selection.prototype=[];wa.select=function(n){var t,e,r,i,u=[];"function"!=typeof n&&(n=v(n));for(var a=-1,o=this.length;++a<o;){u.push(t=[]),t.parentNode=(r=this[a]).parentNode;for(var c=-1,l=r.length;++c<l;)(i=r[c])?(t.push(e=n.call(i,i.__data__,c)),e&&"__data__"in i&&(e.__data__=i.__data__)):t.push(null)}return m(u)},wa.selectAll=function(n){var t,e,r=[];"function"!=typeof n&&(n=y(n));for(var i=-1,u=this.length;++i<u;)for(var a=this[i],o=-1,c=a.length;++o<c;)(e=a[o])&&(r.push(t=da(n.call(e,e.__data__,o))),t.parentNode=e);return m(r)};var Sa={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};ua.ns={prefix:Sa,qualify:function(n){var t=n.indexOf(":"),e=n;return t>=0&&(e=n.substring(0,t),n=n.substring(t+1)),Sa.hasOwnProperty(e)?{space:Sa[e],local:n}:n}},wa.attr=function(n,t){if(arguments.length<2){if("string"==typeof n){var e=this.node();return n=ua.ns.qualify(n),n.local?e.getAttributeNS(n.space,n.local):e.getAttribute(n)}for(t in n)this.each(M(t,n[t]));return this}return this.each(M(n,t))},ua.requote=function(n){return n.replace(Ea,"\\$&")};var Ea=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;wa.classed=function(n,t){if(arguments.length<2){if("string"==typeof n){var e=this.node(),r=(n=n.trim().split(/^|\s+/g)).length,i=-1;if(t=e.classList){for(;++i<r;)if(!t.contains(n[i]))return!1}else for(t=e.getAttribute("class");++i<r;)if(!b(n[i]).test(t))return!1;return!0}for(t in n)this.each(_(t,n[t]));return this}return this.each(_(n,t))},wa.style=function(n,t,e){var r=arguments.length;if(3>r){if("string"!=typeof n){2>r&&(t="");for(e in n)this.each(S(e,n[e],t));return this}if(2>r)return oa.getComputedStyle(this.node(),null).getPropertyValue(n);e=""}return this.each(S(n,t,e))},wa.property=function(n,t){if(arguments.length<2){if("string"==typeof n)return this.node()[n];for(t in n)this.each(E(t,n[t]));return this}return this.each(E(n,t))},wa.text=function(n){return arguments.length?this.each("function"==typeof n?function(){var t=n.apply(this,arguments);this.textContent=null==t?"":t}:null==n?function(){this.textContent=""}:function(){this.textContent=n}):this.node().textContent},wa.html=function(n){return arguments.length?this.each("function"==typeof n?function(){var t=n.apply(this,arguments);this.innerHTML=null==t?"":t}:null==n?function(){this.innerHTML=""}:function(){this.innerHTML=n}):this.node().innerHTML},wa.append=function(n){function t(){return this.appendChild(aa.createElementNS(this.namespaceURI,n))}function e(){return this.appendChild(aa.createElementNS(n.space,n.local))}return n=ua.ns.qualify(n),this.select(n.local?e:t)},wa.insert=function(n,t){function e(e,r){return this.insertBefore(aa.createElementNS(this.namespaceURI,n),t.call(this,e,r))}function r(e,r){return this.insertBefore(aa.createElementNS(n.space,n.local),t.call(this,e,r))}return n=ua.ns.qualify(n),"function"!=typeof t&&(t=v(t)),this.select(n.local?r:e)},wa.remove=function(){return this.each(function(){var n=this.parentNode;n&&n.removeChild(this)})},wa.data=function(n,t){function e(n,e){var r,u,a,o=n.length,s=e.length,h=Math.min(o,s),g=Array(s),p=Array(s),d=Array(o);if(t){var m,v=new i,y=new i,M=[];for(r=-1;++r<o;)m=t.call(u=n[r],u.__data__,r),v.has(m)?d[r]=u:v.set(m,u),M.push(m);for(r=-1;++r<s;)m=t.call(e,a=e[r],r),(u=v.get(m))?(g[r]=u,u.__data__=a):y.has(m)||(p[r]=k(a)),y.set(m,a),v.remove(m);for(r=-1;++r<o;)v.has(M[r])&&(d[r]=n[r])}else{for(r=-1;++r<h;)u=n[r],a=e[r],u?(u.__data__=a,g[r]=u):p[r]=k(a);for(;s>r;++r)p[r]=k(e[r]);for(;o>r;++r)d[r]=n[r]}p.update=g,p.parentNode=g.parentNode=d.parentNode=n.parentNode,c.push(p),l.push(g),f.push(d)}var r,u,a=-1,o=this.length;if(!arguments.length){for(n=Array(o=(r=this[0]).length);++a<o;)(u=r[a])&&(n[a]=u.__data__);return n}var c=j([]),l=m([]),f=m([]);if("function"==typeof n)for(;++a<o;)e(r=this[a],n.call(r,r.parentNode.__data__,a));else for(;++a<o;)e(r=this[a],n);return l.enter=function(){return c},l.exit=function(){return f},l},wa.datum=function(n){return arguments.length?this.property("__data__",n):this.property("__data__")},wa.filter=function(n){var t,e,r,i=[];"function"!=typeof n&&(n=A(n));for(var u=0,a=this.length;a>u;u++){i.push(t=[]),t.parentNode=(e=this[u]).parentNode;for(var o=0,c=e.length;c>o;o++)(r=e[o])&&n.call(r,r.__data__,o)&&t.push(r)}return m(i)},wa.order=function(){for(var n=-1,t=this.length;++n<t;)for(var e,r=this[n],i=r.length-1,u=r[i];--i>=0;)(e=r[i])&&(u&&u!==e.nextSibling&&u.parentNode.insertBefore(e,u),u=e);return this},wa.sort=function(n){n=N.apply(this,arguments);for(var t=-1,e=this.length;++t<e;)this[t].sort(n);return this.order()},wa.on=function(n,t,e){var r=arguments.length;if(3>r){if("string"!=typeof n){2>r&&(t=!1);for(e in n)this.each(T(e,n[e],t));return this}if(2>r)return(r=this.node()["__on"+n])&&r._;e=!1}return this.each(T(n,t,e))};var ka=ua.map({mouseenter:"mouseover",mouseleave:"mouseout"});ka.forEach(function(n){"on"+n in aa&&ka.remove(n)}),wa.each=function(n){return D(this,function(t,e,r){n.call(t,t.__data__,e,r)})},wa.call=function(n){var t=da(arguments);return n.apply(t[0]=this,t),this},wa.empty=function(){return!this.node()},wa.node=function(){for(var n=0,t=this.length;t>n;n++)for(var e=this[n],r=0,i=e.length;i>r;r++){var u=e[r];if(u)return u}return null};var Aa=[];ua.selection.enter=j,ua.selection.enter.prototype=Aa,Aa.append=wa.append,Aa.insert=wa.insert,Aa.empty=wa.empty,Aa.node=wa.node,Aa.select=function(n){for(var t,e,r,i,u,a=[],o=-1,c=this.length;++o<c;){r=(i=this[o]).update,a.push(t=[]),t.parentNode=i.parentNode;for(var l=-1,f=i.length;++l<f;)(u=i[l])?(t.push(r[l]=e=n.call(i.parentNode,u.__data__,l)),e.__data__=u.__data__):t.push(null)}return m(a)},wa.transition=function(){var n,t,e=rc||++oc,r=[],i=Object.create(cc);i.time=Date.now();for(var u=-1,a=this.length;++u<a;){r.push(n=[]);for(var o=this[u],c=-1,l=o.length;++c<l;)(t=o[c])&&xu(t,c,e,i),n.push(t)}return vu(r,e)},ua.select=function(n){var t=["string"==typeof n?ya(n,aa):n];return t.parentNode=xa,m([t])},ua.selectAll=function(n){var t=da("string"==typeof n?Ma(n,aa):n);return t.parentNode=xa,m([t])};var Na=ua.select(xa);ua.behavior.zoom=function(){function n(){this.on("mousedown.zoom",o).on("mousemove.zoom",f).on(Ca+".zoom",c).on("dblclick.zoom",g).on("touchstart.zoom",p).on("touchmove.zoom",d).on("touchend.zoom",p)}function t(n){return[(n[0]-w[0])/S,(n[1]-w[1])/S]}function e(n){return[n[0]*S+w[0],n[1]*S+w[1]]}function r(n){S=Math.max(E[0],Math.min(E[1],n))}function i(n,t){t=e(t),w[0]+=n[0]-t[0],w[1]+=n[1]-t[1]}function u(){M&&M.domain(y.range().map(function(n){return(n-w[0])/S}).map(y.invert)),b&&b.domain(x.range().map(function(n){return(n-w[1])/S}).map(x.invert))}function a(n){u(),ua.event.preventDefault(),n({type:"zoom",scale:S,translate:w})}function o(){function n(){c=1,i(ua.mouse(r),h),a(u)}function e(){c&&l(),f.on("mousemove.zoom",null).on("mouseup.zoom",null),c&&ua.event.target===o&&s(f,"click.zoom")}var r=this,u=k.of(r,arguments),o=ua.event.target,c=0,f=ua.select(oa).on("mousemove.zoom",n).on("mouseup.zoom",e),h=t(ua.mouse(r));oa.focus(),l()}function c(){m||(m=t(ua.mouse(this))),r(Math.pow(2,qa()*.002)*S),i(ua.mouse(this),m),a(k.of(this,arguments))}function f(){m=null}function g(){var n=ua.mouse(this),e=t(n),u=Math.log(S)/Math.LN2;r(Math.pow(2,ua.event.shiftKey?Math.ceil(u)-1:Math.floor(u)+1)),i(n,e),a(k.of(this,arguments))}function p(){var n=ua.touches(this),e=Date.now();if(v=S,m={},n.forEach(function(n){m[n.identifier]=t(n)}),l(),n.length===1){if(500>e-_){var u=n[0],o=t(n[0]);r(2*S),i(u,o),a(k.of(this,arguments))}_=e}}function d(){var n=ua.touches(this),t=n[0],e=m[t.identifier];if(u=n[1]){var u,o=m[u.identifier];t=[(t[0]+u[0])/2,(t[1]+u[1])/2],e=[(e[0]+o[0])/2,(e[1]+o[1])/2],r(ua.event.scale*v)}i(t,e),_=null,a(k.of(this,arguments))}var m,v,y,M,x,b,_,w=[0,0],S=1,E=Ta,k=h(n,"zoom");return n.translate=function(t){return arguments.length?(w=t.map(Number),u(),n):w},n.scale=function(t){return arguments.length?(S=+t,u(),n):S},n.scaleExtent=function(t){return arguments.length?(E=null==t?Ta:t.map(Number),n):E},n.x=function(t){return arguments.length?(M=t,y=t.copy(),w=[0,0],S=1,n):M},n.y=function(t){return arguments.length?(b=t,x=t.copy(),w=[0,0],S=1,n):b},ua.rebind(n,k,"on")};var qa,Ta=[0,1/0],Ca="onwheel"in aa?(qa=function(){return-ua.event.deltaY*(ua.event.deltaMode?120:1)},"wheel"):"onmousewheel"in aa?(qa=function(){return ua.event.wheelDelta},"mousewheel"):(qa=function(){return-ua.event.detail},"MozMousePixelScroll");L.prototype.toString=function(){return this.rgb()+""},ua.hsl=function(n,t,e){return arguments.length===1?n instanceof H?F(n.h,n.s,n.l):it(""+n,ut,F):F(+n,+t,+e)};var za=H.prototype=new L;za.brighter=function(n){return n=Math.pow(.7,arguments.length?n:1),F(this.h,this.s,this.l/n)},za.darker=function(n){return n=Math.pow(.7,arguments.length?n:1),F(this.h,this.s,n*this.l)},za.rgb=function(){return P(this.h,this.s,this.l)};var Da=Math.PI,ja=1e-6,La=Da/180,Fa=180/Da;ua.hcl=function(n,t,e){return arguments.length===1?n instanceof Z?X(n.h,n.c,n.l):n instanceof J?K(n.l,n.a,n.b):K((n=at((n=ua.rgb(n)).r,n.g,n.b)).l,n.a,n.b):X(+n,+t,+e)};var Ha=Z.prototype=new L;Ha.brighter=function(n){return X(this.h,this.c,Math.min(100,this.l+Pa*(arguments.length?n:1)))},Ha.darker=function(n){return X(this.h,this.c,Math.max(0,this.l-Pa*(arguments.length?n:1)))},Ha.rgb=function(){return B(this.h,this.c,this.l).rgb()},ua.lab=function(n,t,e){return arguments.length===1?n instanceof J?$(n.l,n.a,n.b):n instanceof Z?B(n.l,n.c,n.h):at((n=ua.rgb(n)).r,n.g,n.b):$(+n,+t,+e)};var Pa=18,Ra=.95047,Oa=1,Ya=1.08883,Ua=J.prototype=new L;Ua.brighter=function(n){return $(Math.min(100,this.l+Pa*(arguments.length?n:1)),this.a,this.b)},Ua.darker=function(n){return $(Math.max(0,this.l-Pa*(arguments.length?n:1)),this.a,this.b)},Ua.rgb=function(){return G(this.l,this.a,this.b)},ua.rgb=function(n,t,e){return arguments.length===1?n instanceof et?tt(n.r,n.g,n.b):it(""+n,tt,P):tt(~~n,~~t,~~e)};var Ia=et.prototype=new L;Ia.brighter=function(n){n=Math.pow(.7,arguments.length?n:1);var t=this.r,e=this.g,r=this.b,i=30;return t||e||r?(t&&i>t&&(t=i),e&&i>e&&(e=i),r&&i>r&&(r=i),tt(Math.min(255,Math.floor(t/n)),Math.min(255,Math.floor(e/n)),Math.min(255,Math.floor(r/n)))):tt(i,i,i)},Ia.darker=function(n){return n=Math.pow(.7,arguments.length?n:1),tt(Math.floor(n*this.r),Math.floor(n*this.g),Math.floor(n*this.b))},Ia.hsl=function(){return ut(this.r,this.g,this.b)},Ia.toString=function(){return"#"+rt(this.r)+rt(this.g)+rt(this.b)};var Va=ua.map({aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"});Va.forEach(function(n,t){Va.set(n,it(t,tt,P))}),ua.functor=lt,ua.xhr=st(ft),ua.csv=pt(",","text/csv"),ua.tsv=pt("	","text/tab-separated-values");var Xa,Za,Ba,$a;ua.timer=function(n,t,e){if(arguments.length<3){if(arguments.length<2)t=0;else if(!isFinite(t))return;e=Date.now()}var r=e+t,i={callback:n,time:r,next:null};Za?Za.next=i:Xa=i,Za=i,Ba||($a=clearTimeout($a),Ba=1,Ja(dt))},ua.timer.flush=function(){mt(),vt()};var Ja=oa.requestAnimationFrame||oa.webkitRequestAnimationFrame||oa.mozRequestAnimationFrame||oa.oRequestAnimationFrame||oa.msRequestAnimationFrame||function(n){setTimeout(n,17)},Ga=".",Ka=",",Wa=[3,3],Qa=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"].map(yt);ua.formatPrefix=function(n,t){var e=0;return n&&(0>n&&(n*=-1),t&&(n=ua.round(n,Mt(n,t))),e=1+Math.floor(1e-12+Math.log(n)/Math.LN10),e=Math.max(-24,Math.min(24,Math.floor((0>=e?e+1:e-1)/3)*3))),Qa[8+e/3]},ua.round=function(n,t){return t?Math.round(n*(t=Math.pow(10,t)))/t:Math.round(n)},ua.format=function(n){var t=no.exec(n),e=t[1]||" ",r=t[2]||">",i=t[3]||"",u=t[4]||"",a=t[5],o=+t[6],c=t[7],l=t[8],f=t[9],s=1,h="",g=!1;switch(l&&(l=+l.substring(1)),(a||"0"===e&&"="===r)&&(a=e="0",r="=",c&&(o-=Math.floor((o-1)/4))),f){case"n":c=!0,f="g";break;case"%":s=100,h="%",f="f";break;case"p":s=100,h="%",f="r";break;case"b":case"o":case"x":case"X":u&&(u="0"+f.toLowerCase());case"c":case"d":g=!0,l=0;break;case"s":s=-1,f="r"}"#"===u&&(u=""),"r"!=f||l||(f="g"),null!=l&&("g"==f?l=Math.max(1,Math.min(21,l)):("e"==f||"f"==f)&&(l=Math.max(0,Math.min(20,l)))),f=to.get(f)||xt;var p=a&&c;return function(n){if(g&&n%1)return"";var t=0>n||0===n&&0>1/n?(n=-n,"-"):i;if(0>s){var d=ua.formatPrefix(n,l);n=d.scale(n),h=d.symbol}else n*=s;n=f(n,l),!a&&c&&(n=eo(n));var m=u.length+n.length+(p?0:t.length),v=o>m?Array(m=o-m+1).join(e):"";return p&&(n=eo(v+n)),Ga&&n.replace(".",Ga),t+=u,("<"===r?t+n+v:">"===r?v+t+n:"^"===r?v.substring(0,m>>=1)+t+n+v.substring(m):t+(p?n:v+n))+h}};var no=/(?:([^{])?([<>=^]))?([+\- ])?(#)?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i,to=ua.map({b:function(n){return n.toString(2)},c:function(n){return String.fromCharCode(n)},o:function(n){return n.toString(8)},x:function(n){return n.toString(16)},X:function(n){return n.toString(16).toUpperCase()},g:function(n,t){return n.toPrecision(t)},e:function(n,t){return n.toExponential(t)},f:function(n,t){return n.toFixed(t)},r:function(n,t){return(n=ua.round(n,Mt(n,t))).toFixed(Math.max(0,Math.min(20,Mt(n*(1+1e-15),t))))}}),eo=ft;if(Wa){var ro=Wa.length;eo=function(n){for(var t=n.lastIndexOf("."),e=t>=0?"."+n.substring(t+1):(t=n.length,""),r=[],i=0,u=Wa[0];t>0&&u>0;)r.push(n.substring(t-=u,t+u)),u=Wa[i=(i+1)%ro];return r.reverse().join(Ka||"")+e}}ua.geo={},ua.geo.stream=function(n,t){n&&io.hasOwnProperty(n.type)?io[n.type](n,t):bt(n,t)};var io={Feature:function(n,t){bt(n.geometry,t)},FeatureCollection:function(n,t){for(var e=n.features,r=-1,i=e.length;++r<i;)bt(e[r].geometry,t)}},uo={Sphere:function(n,t){t.sphere()},Point:function(n,t){var e=n.coordinates;t.point(e[0],e[1])},MultiPoint:function(n,t){for(var e,r=n.coordinates,i=-1,u=r.length;++i<u;)e=r[i],t.point(e[0],e[1])},LineString:function(n,t){_t(n.coordinates,t,0)},MultiLineString:function(n,t){for(var e=n.coordinates,r=-1,i=e.length;++r<i;)_t(e[r],t,0)},Polygon:function(n,t){wt(n.coordinates,t)},MultiPolygon:function(n,t){for(var e=n.coordinates,r=-1,i=e.length;++r<i;)wt(e[r],t)},GeometryCollection:function(n,t){for(var e=n.geometries,r=-1,i=e.length;++r<i;)bt(e[r],t)}};ua.geo.area=function(n){return ao=0,ua.geo.stream(n,co),ao};var ao,oo,co={sphere:function(){ao+=4*Da},point:q,lineStart:q,lineEnd:q,polygonStart:function(){oo=0,co.lineStart=St},polygonEnd:function(){var n=2*oo;ao+=0>n?4*Da+n:n,co.lineStart=co.lineEnd=co.point=q}};ua.geo.bounds=function(){function n(n,t){M.push(x=[f=n,h=n]),s>t&&(s=t),t>g&&(g=t)}function t(t,e){var r=Et([t*La,e*La]);if(v){var i=At(v,r),u=[i[1],-i[0],0],a=At(u,i);Tt(a),a=Ct(a);var c=t-p,l=c>0?1:-1,d=a[0]*Fa*l,m=Math.abs(c)>180;if(m^(d>l*p&&l*t>d)){var y=a[1]*Fa;y>g&&(g=y)}else if(d=(d+360)%360-180,m^(d>l*p&&l*t>d)){var y=-a[1]*Fa;s>y&&(s=y)}else s>e&&(s=e),e>g&&(g=e);m?p>t?o(f,t)>o(f,h)&&(h=t):o(t,h)>o(f,h)&&(f=t):h>=f?(f>t&&(f=t),t>h&&(h=t)):t>p?o(f,t)>o(f,h)&&(h=t):o(t,h)>o(f,h)&&(f=t)}else n(t,e);v=r,p=t}function e(){b.point=t}function r(){x[0]=f,x[1]=h,b.point=n,v=null}function i(n,e){if(v){var r=n-p;y+=Math.abs(r)>180?r+(r>0?360:-360):r}else d=n,m=e;co.point(n,e),t(n,e)}function u(){co.lineStart()}function a(){i(d,m),co.lineEnd(),Math.abs(y)>ja&&(f=-(h=180)),x[0]=f,x[1]=h,v=null}function o(n,t){return(t-=n)<0?t+360:t}function c(n,t){return n[0]-t[0]}function l(n,t){return t[0]<=t[1]?t[0]<=n&&n<=t[1]:n<t[0]||t[1]<n}var f,s,h,g,p,d,m,v,y,M,x,b={point:n,lineStart:e,lineEnd:r,polygonStart:function(){b.point=i,b.lineStart=u,b.lineEnd=a,y=0,co.polygonStart()},polygonEnd:function(){co.polygonEnd(),b.point=n,b.lineStart=e,b.lineEnd=r,0>oo?(f=-(h=180),s=-(g=90)):y>ja?g=90:-ja>y&&(s=-90),x[0]=f,x[1]=h}};return function(n){g=h=-(f=s=1/0),M=[],ua.geo.stream(n,b),M.sort(c);for(var t,e=1,r=M.length,i=M[0],u=[i];r>e;++e)t=M[e],l(t[0],i)||l(t[1],i)?(o(i[0],t[1])>o(i[0],i[1])&&(i[1]=t[1]),o(t[0],i[1])>o(i[0],i[1])&&(i[0]=t[0])):u.push(i=t);for(var a,t,p=-1/0,r=u.length-1,e=0,i=u[r];r>=e;i=t,++e)t=u[e],(a=o(i[1],t[0]))>p&&(p=a,f=t[0],h=i[1]);return M=x=null,[[f,s],[h,g]]}}(),ua.geo.centroid=function(n){lo=fo=so=ho=go=0,ua.geo.stream(n,po);var t;return fo&&Math.abs(t=Math.sqrt(so*so+ho*ho+go*go))>ja?[Math.atan2(ho,so)*Fa,Math.asin(Math.max(-1,Math.min(1,go/t)))*Fa]:void 0};var lo,fo,so,ho,go,po={sphere:function(){2>lo&&(lo=2,fo=so=ho=go=0)},point:Dt,lineStart:Lt,lineEnd:Ft,polygonStart:function(){2>lo&&(lo=2,fo=so=ho=go=0),po.lineStart=jt},polygonEnd:function(){po.lineStart=Lt}},mo=Ot(Ht,Xt,Bt),vo=1e9;ua.geo.projection=Qt,ua.geo.projectionMutator=ne,(ua.geo.equirectangular=function(){return Qt(ee)}).raw=ee.invert=ee,ua.geo.rotation=function(n){function t(t){return t=n(t[0]*La,t[1]*La),t[0]*=Fa,t[1]*=Fa,t}return n=re(n[0]%360*La,n[1]*La,n.length>2?n[2]*La:0),t.invert=function(t){return t=n.invert(t[0]*La,t[1]*La),t[0]*=Fa,t[1]*=Fa,t},t},ua.geo.circle=function(){function n(){var n="function"==typeof r?r.apply(this,arguments):r,t=re(-n[0]*La,-n[1]*La,0).invert,i=[];return e(null,null,1,{point:function(n,e){i.push(n=t(n,e)),n[0]*=Fa,n[1]*=Fa}}),{type:"Polygon",coordinates:[i]}}var t,e,r=[0,0],i=6;return n.origin=function(t){return arguments.length?(r=t,n):r},n.angle=function(r){return arguments.length?(e=oe((t=+r)*La,i*La),n):t},n.precision=function(r){return arguments.length?(e=oe(t*La,(i=+r)*La),n):i},n.angle(90)},ua.geo.distance=function(n,t){var e,r=(t[0]-n[0])*La,i=n[1]*La,u=t[1]*La,a=Math.sin(r),o=Math.cos(r),c=Math.sin(i),l=Math.cos(i),f=Math.sin(u),s=Math.cos(u);return Math.atan2(Math.sqrt((e=s*a)*e+(e=l*f-c*s*o)*e),c*f+l*s*o)},ua.geo.graticule=function(){function n(){return{type:"MultiLineString",coordinates:t()}}function t(){return ua.range(Math.ceil(u/m)*m,i,m).map(h).concat(ua.range(Math.ceil(l/v)*v,c,v).map(g)).concat(ua.range(Math.ceil(r/p)*p,e,p).filter(function(n){return Math.abs(n%m)>ja}).map(f)).concat(ua.range(Math.ceil(o/d)*d,a,d).filter(function(n){return Math.abs(n%v)>ja}).map(s))}var e,r,i,u,a,o,c,l,f,s,h,g,p=10,d=p,m=90,v=360,y=2.5;return n.lines=function(){return t().map(function(n){return{type:"LineString",coordinates:n}})},n.outline=function(){return{type:"Polygon",coordinates:[h(u).concat(g(c).slice(1),h(i).reverse().slice(1),g(l).reverse().slice(1))]}},n.extent=function(t){return arguments.length?n.majorExtent(t).minorExtent(t):n.minorExtent()},n.majorExtent=function(t){return arguments.length?(u=+t[0][0],i=+t[1][0],l=+t[0][1],c=+t[1][1],u>i&&(t=u,u=i,i=t),l>c&&(t=l,l=c,c=t),n.precision(y)):[[u,l],[i,c]]},n.minorExtent=function(t){return arguments.length?(r=+t[0][0],e=+t[1][0],o=+t[0][1],a=+t[1][1],r>e&&(t=r,r=e,e=t),o>a&&(t=o,o=a,a=t),n.precision(y)):[[r,o],[e,a]]},n.step=function(t){return arguments.length?n.majorStep(t).minorStep(t):n.minorStep()},n.majorStep=function(t){return arguments.length?(m=+t[0],v=+t[1],n):[m,v]},n.minorStep=function(t){return arguments.length?(p=+t[0],d=+t[1],n):[p,d]},n.precision=function(t){return arguments.length?(y=+t,f=le(o,a,90),s=fe(r,e,y),h=le(l,c,90),g=fe(u,i,y),n):y},n.majorExtent([[-180,-90+ja],[180,90-ja]]).minorExtent([[-180,-80-ja],[180,80+ja]])},ua.geo.greatArc=function(){function n(){return{type:"LineString",coordinates:[t||r.apply(this,arguments),e||i.apply(this,arguments)]}}var t,e,r=se,i=he;return n.distance=function(){return ua.geo.distance(t||r.apply(this,arguments),e||i.apply(this,arguments))},n.source=function(e){return arguments.length?(r=e,t="function"==typeof e?null:e,n):r},n.target=function(t){return arguments.length?(i=t,e="function"==typeof t?null:t,n):i},n.precision=function(){return arguments.length?n:0},n},ua.geo.interpolate=function(n,t){return ge(n[0]*La,n[1]*La,t[0]*La,t[1]*La)},ua.geo.length=function(n){return yo=0,ua.geo.stream(n,Mo),yo};var yo,Mo={sphere:q,point:q,lineStart:pe,lineEnd:q,polygonStart:q,polygonEnd:q};(ua.geo.conicEqualArea=function(){return de(me)}).raw=me,ua.geo.albers=function(){return ua.geo.conicEqualArea().rotate([96,0]).center([-.6,38.7]).parallels([29.5,45.5]).scale(1070)},ua.geo.albersUsa=function(){function n(n){var u=n[0],a=n[1];return t=null,e(u,a),t||(r(u,a),t)||i(u,a),t}var t,e,r,i,u=ua.geo.albers(),a=ua.geo.conicEqualArea().rotate([154,0]).center([-2,58.5]).parallels([55,65]),o=ua.geo.conicEqualArea().rotate([157,0]).center([-3,19.9]).parallels([8,18]),c={point:function(n,e){t=[n,e]}};return n.invert=function(n){var t=u.scale(),e=u.translate(),r=(n[0]-e[0])/t,i=(n[1]-e[1])/t;return(i>=.12&&.234>i&&r>=-.425&&-.214>r?a:i>=.166&&.234>i&&r>=-.214&&-.115>r?o:u).invert(n)},n.stream=function(n){var t=u.stream(n),e=a.stream(n),r=o.stream(n);return{point:function(n,i){t.point(n,i),e.point(n,i),r.point(n,i)},sphere:function(){t.sphere(),e.sphere(),r.sphere()},lineStart:function(){t.lineStart(),e.lineStart(),r.lineStart()},lineEnd:function(){t.lineEnd(),e.lineEnd(),r.lineEnd()},polygonStart:function(){t.polygonStart(),e.polygonStart(),r.polygonStart()},polygonEnd:function(){t.polygonEnd(),e.polygonEnd(),r.polygonEnd()}}},n.precision=function(t){return arguments.length?(u.precision(t),a.precision(t),o.precision(t),n):u.precision()},n.scale=function(t){return arguments.length?(u.scale(t),a.scale(.35*t),o.scale(t),n.translate(u.translate())):u.scale()},n.translate=function(t){if(!arguments.length)return u.translate();var l=u.scale(),f=+t[0],s=+t[1];return e=u.translate(t).clipExtent([[f-.455*l,s-.238*l],[f+.455*l,s+.238*l]]).stream(c).point,r=a.translate([f-.307*l,s+.201*l]).clipExtent([[f-.425*l+ja,s+.12*l+ja],[f-.214*l-ja,s+.234*l-ja]]).stream(c).point,i=o.translate([f-.205*l,s+.212*l]).clipExtent([[f-.214*l+ja,s+.166*l+ja],[f-.115*l-ja,s+.234*l-ja]]).stream(c).point,n},n.scale(1070)};var xo,bo,_o,wo,So,Eo,ko={point:q,lineStart:q,lineEnd:q,polygonStart:function(){bo=0,ko.lineStart=ve},polygonEnd:function(){ko.lineStart=ko.lineEnd=ko.point=q,xo+=Math.abs(bo/2)}},Ao={point:ye,lineStart:q,lineEnd:q,polygonStart:q,polygonEnd:q},No={point:be,lineStart:_e,lineEnd:we,polygonStart:function(){No.lineStart=Se},polygonEnd:function(){No.point=be,No.lineStart=_e,No.lineEnd=we}};ua.geo.path=function(){function n(n){return n&&ua.geo.stream(n,r(i.pointRadius("function"==typeof u?+u.apply(this,arguments):u))),i.result()}var t,e,r,i,u=4.5;return n.area=function(n){return xo=0,ua.geo.stream(n,r(ko)),xo},n.centroid=function(n){return lo=so=ho=go=0,ua.geo.stream(n,r(No)),go?[so/go,ho/go]:void 0},n.bounds=function(n){return So=Eo=-(_o=wo=1/0),ua.geo.stream(n,r(Ao)),[[_o,wo],[So,Eo]]},n.projection=function(e){return arguments.length?(r=(t=e)?e.stream||ke(e):ft,n):t},n.context=function(t){return arguments.length?(i=(e=t)==null?new Me:new Ee(t),n):e},n.pointRadius=function(t){return arguments.length?(u="function"==typeof t?t:+t,n):u},n.projection(ua.geo.albersUsa()).context(null)};var qo=Ae(function(n){return Math.sqrt(2/(1+n))},function(n){return 2*Math.asin(n/2)});(ua.geo.azimuthalEqualArea=function(){return Qt(qo)}).raw=qo;var To=Ae(function(n){var t=Math.acos(n);return t&&t/Math.sin(t)},ft);(ua.geo.azimuthalEquidistant=function(){return Qt(To)}).raw=To,(ua.geo.conicConformal=function(){return de(Ne)}).raw=Ne,(ua.geo.conicEquidistant=function(){return de(qe)}).raw=qe;var Co=Ae(function(n){return 1/n},Math.atan);(ua.geo.gnomonic=function(){return Qt(Co)}).raw=Co,Te.invert=function(n,t){return[n,2*Math.atan(Math.exp(t))-Da/2]},(ua.geo.mercator=function(){return Ce(Te)}).raw=Te;var zo=Ae(function(){return 1},Math.asin);(ua.geo.orthographic=function(){return Qt(zo)}).raw=zo;var Do=Ae(function(n){return 1/(1+n)},function(n){return 2*Math.atan(n)});(ua.geo.stereographic=function(){return Qt(Do)}).raw=Do,ze.invert=function(n,t){return[Math.atan2(U(n),Math.cos(t)),Y(Math.sin(t)/I(n))]},(ua.geo.transverseMercator=function(){return Ce(ze)}).raw=ze,ua.geom={},ua.svg={},ua.svg.line=function(){return De(ft)};var jo=ua.map({linear:Fe,"linear-closed":He,"step-before":Pe,"step-after":Re,basis:Xe,"basis-open":Ze,"basis-closed":Be,bundle:$e,cardinal:Ue,"cardinal-open":Oe,"cardinal-closed":Ye,monotone:nr});jo.forEach(function(n,t){t.key=n,t.closed=/-closed$/.test(n)});var Lo=[0,2/3,1/3,0],Fo=[0,1/3,2/3,0],Ho=[0,1/6,2/3,1/6];ua.geom.hull=function(n){function t(n){if(n.length<3)return[];var t,i,u,a,o,c,l,f,s,h,g,p,d=lt(e),m=lt(r),v=n.length,y=v-1,M=[],x=[],b=0;if(d===je&&r===Le)t=n;else for(u=0,t=[];v>u;++u)t.push([+d.call(this,i=n[u],u),+m.call(this,i,u)]);for(u=1;v>u;++u)(t[u][1]<t[b][1]||t[u][1]==t[b][1]&&t[u][0]<t[b][0])&&(b=u);for(u=0;v>u;++u)u!==b&&(c=t[u][1]-t[b][1],o=t[u][0]-t[b][0],M.push({angle:Math.atan2(c,o),index:u}));for(M.sort(function(n,t){return n.angle-t.angle}),g=M[0].angle,h=M[0].index,s=0,u=1;y>u;++u){if(a=M[u].index,g==M[u].angle){if(o=t[h][0]-t[b][0],c=t[h][1]-t[b][1],l=t[a][0]-t[b][0],f=t[a][1]-t[b][1],o*o+c*c>=l*l+f*f){M[u].index=-1;continue}M[s].index=-1}g=M[u].angle,s=u,h=a}for(x.push(b),u=0,a=0;2>u;++a)M[a].index>-1&&(x.push(M[a].index),u++);for(p=x.length;y>a;++a)if(!(M[a].index<0)){for(;!tr(x[p-2],x[p-1],M[a].index,t);)--p;x[p++]=M[a].index}var _=[];for(u=p-1;u>=0;--u)_.push(n[x[u]]);return _}var e=je,r=Le;return arguments.length?t(n):(t.x=function(n){return arguments.length?(e=n,t):e},t.y=function(n){return arguments.length?(r=n,t):r},t)},ua.geom.polygon=function(n){return n.area=function(){for(var t=0,e=n.length,r=n[e-1][1]*n[0][0]-n[e-1][0]*n[0][1];++t<e;)r+=n[t-1][1]*n[t][0]-n[t-1][0]*n[t][1];return.5*r},n.centroid=function(t){var e,r,i=-1,u=n.length,a=0,o=0,c=n[u-1];for(arguments.length||(t=-1/(6*n.area()));++i<u;)e=c,c=n[i],r=e[0]*c[1]-c[0]*e[1],a+=(e[0]+c[0])*r,o+=(e[1]+c[1])*r;return[a*t,o*t]},n.clip=function(t){for(var e,r,i,u,a,o,c=-1,l=n.length,f=n[l-1];++c<l;){for(e=t.slice(),t.length=0,u=n[c],a=e[(i=e.length)-1],r=-1;++r<i;)o=e[r],er(o,f,u)?(er(a,f,u)||t.push(rr(a,o,f,u)),t.push(o)):er(a,f,u)&&t.push(rr(a,o,f,u)),a=o;f=u}return t},n},ua.geom.delaunay=function(n){var t=n.map(function(){return[]}),e=[];return ir(n,function(e){t[e.region.l.index].push(n[e.region.r.index])}),t.forEach(function(t,r){var i=n[r],u=i[0],a=i[1];t.forEach(function(n){n.angle=Math.atan2(n[0]-u,n[1]-a)}),t.sort(function(n,t){return n.angle-t.angle});for(var o=0,c=t.length-1;c>o;o++)e.push([i,t[o],t[o+1]])}),e},ua.geom.voronoi=function(n){function t(n){var t,r,a,o=n.map(function(){return[]}),c=lt(i),l=lt(u),f=n.length,s=1e6;if(c===je&&l===Le)t=n;else for(t=[],a=0;f>a;++a)t.push([+c.call(this,r=n[a],a),+l.call(this,r,a)]);if(ir(t,function(n){var t,e,r,i,u,a;n.a===1&&n.b>=0?(t=n.ep.r,e=n.ep.l):(t=n.ep.l,e=n.ep.r),n.a===1?(u=t?t.y:-s,r=n.c-n.b*u,a=e?e.y:s,i=n.c-n.b*a):(r=t?t.x:-s,u=n.c-n.a*r,i=e?e.x:s,a=n.c-n.a*i);var c=[r,u],l=[i,a];o[n.region.l.index].push(c,l),o[n.region.r.index].push(c,l)}),o=o.map(function(n,e){var r=t[e][0],i=t[e][1],u=n.map(function(n){return Math.atan2(n[0]-r,n[1]-i)
}),a=ua.range(n.length).sort(function(n,t){return u[n]-u[t]});return a.filter(function(n,t){return!t||u[n]-u[a[t-1]]>ja}).map(function(t){return n[t]})}),o.forEach(function(n,e){var r=n.length;if(!r)return n.push([-s,-s],[-s,s],[s,s],[s,-s]);if(!(r>2)){var i=t[e],u=n[0],a=n[1],o=i[0],c=i[1],l=u[0],f=u[1],h=a[0],g=a[1],p=Math.abs(h-l),d=g-f;if(Math.abs(d)<ja){var m=f>c?-s:s;n.push([-s,m],[s,m])}else if(ja>p){var v=l>o?-s:s;n.push([v,-s],[v,s])}else{var m=(l-o)*(g-f)>(h-l)*(f-c)?s:-s,y=Math.abs(d)-p;Math.abs(y)<ja?n.push([0>d?m:-m,m]):(y>0&&(m*=-1),n.push([-s,m],[s,m]))}}}),e)for(a=0;f>a;++a)e(o[a]);for(a=0;f>a;++a)o[a].point=n[a];return o}var e,r=null,i=je,u=Le;return arguments.length?t(n):(t.x=function(n){return arguments.length?(i=n,t):i},t.y=function(n){return arguments.length?(u=n,t):u},t.size=function(n){return arguments.length?(null==n?e=null:(r=[+n[0],+n[1]],e=ua.geom.polygon([[0,0],[0,r[1]],r,[r[0],0]]).clip),t):r},t.links=function(n){var t,e,r,a=n.map(function(){return[]}),o=[],c=lt(i),l=lt(u),f=n.length;if(c===je&&l===Le)t=n;else for(r=0;f>r;++r)t.push([+c.call(this,e=n[r],r),+l.call(this,e,r)]);return ir(t,function(t){var e=t.region.l.index,r=t.region.r.index;a[e][r]||(a[e][r]=a[r][e]=!0,o.push({source:n[e],target:n[r]}))}),o},t.triangles=function(n){if(i===je&&u===Le)return ua.geom.delaunay(n);var t,e,r,a,o,c=lt(i),l=lt(u);for(a=0,t=[],o=n.length;o>a;++a)e=[+c.call(this,r=n[a],a),+l.call(this,r,a)],e.data=r,t.push(e);return ua.geom.delaunay(t).map(function(n){return n.map(function(n){return n.data})})},t)};var Po={l:"r",r:"l"};ua.geom.quadtree=function(n,t,e,r,i){function u(n){function u(n,t,e,r,i,u,a,o){if(!isNaN(e)&&!isNaN(r))if(n.leaf){var c=n.x,f=n.y;if(null!=c)if(Math.abs(c-e)+Math.abs(f-r)<.01)l(n,t,e,r,i,u,a,o);else{var s=n.point;n.x=n.y=n.point=null,l(n,s,c,f,i,u,a,o),l(n,t,e,r,i,u,a,o)}else n.x=e,n.y=r,n.point=t}else l(n,t,e,r,i,u,a,o)}function l(n,t,e,r,i,a,o,c){var l=.5*(i+o),f=.5*(a+c),s=e>=l,h=r>=f,g=(h<<1)+s;n.leaf=!1,n=n.nodes[g]||(n.nodes[g]=or()),s?i=l:o=l,h?a=f:c=f,u(n,t,e,r,i,a,o,c)}var f,s,h,g,p,d,m,v,y,M=lt(o),x=lt(c);if(null!=t)d=t,m=e,v=r,y=i;else if(v=y=-(d=m=1/0),s=[],h=[],p=n.length,a)for(g=0;p>g;++g)f=n[g],f.x<d&&(d=f.x),f.y<m&&(m=f.y),f.x>v&&(v=f.x),f.y>y&&(y=f.y),s.push(f.x),h.push(f.y);else for(g=0;p>g;++g){var b=+M(f=n[g],g),_=+x(f,g);d>b&&(d=b),m>_&&(m=_),b>v&&(v=b),_>y&&(y=_),s.push(b),h.push(_)}var w=v-d,S=y-m;w>S?y=m+w:v=d+S;var E=or();if(E.add=function(n){u(E,n,+M(n,++g),+x(n,g),d,m,v,y)},E.visit=function(n){cr(n,E,d,m,v,y)},g=-1,null==t){for(;++g<p;)u(E,n[g],s[g],h[g],d,m,v,y);--g}else n.forEach(E.add);return s=h=n=f=null,E}var a,o=je,c=Le;return(a=arguments.length)?(o=ur,c=ar,3===a&&(i=e,r=t,e=t=0),u(n)):(u.x=function(n){return arguments.length?(o=n,u):o},u.y=function(n){return arguments.length?(c=n,u):c},u.size=function(n){return arguments.length?(null==n?t=e=r=i=null:(t=e=0,r=+n[0],i=+n[1]),u):null==t?null:[r,i]},u)},ua.interpolateRgb=lr,ua.transform=function(n){var t=aa.createElementNS(ua.ns.prefix.svg,"g");return(ua.transform=function(n){if(null!=n){t.setAttribute("transform",n);var e=t.transform.baseVal.consolidate()}return new fr(e?e.matrix:Ro)})(n)},fr.prototype.toString=function(){return"translate("+this.translate+")rotate("+this.rotate+")skewX("+this.skew+")scale("+this.scale+")"};var Ro={a:1,b:0,c:0,d:1,e:0,f:0};ua.interpolateNumber=pr,ua.interpolateTransform=dr,ua.interpolateObject=mr,ua.interpolateString=vr;var Oo=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;ua.interpolate=yr,ua.interpolators=[function(n,t){var e=typeof t;return("string"===e?Va.has(t)||/^(#|rgb\(|hsl\()/.test(t)?lr:vr:t instanceof L?lr:"object"===e?Array.isArray(t)?xr:mr:pr)(n,t)}],ua.interpolateArray=xr;var Yo=function(){return ft},Uo=ua.map({linear:Yo,poly:Ar,quad:function(){return Sr},cubic:function(){return Er},sin:function(){return Nr},exp:function(){return qr},circle:function(){return Tr},elastic:Cr,back:zr,bounce:function(){return Dr}}),Io=ua.map({"in":ft,out:_r,"in-out":wr,"out-in":function(n){return wr(_r(n))}});ua.ease=function(n){var t=n.indexOf("-"),e=t>=0?n.substring(0,t):n,r=t>=0?n.substring(t+1):"in";return e=Uo.get(e)||Yo,r=Io.get(r)||ft,br(r(e.apply(null,Array.prototype.slice.call(arguments,1))))},ua.interpolateHcl=jr,ua.interpolateHsl=Lr,ua.interpolateLab=Fr,ua.interpolateRound=Hr,ua.layout={},ua.layout.bundle=function(){return function(n){for(var t=[],e=-1,r=n.length;++e<r;)t.push(Or(n[e]));return t}},ua.layout.chord=function(){function n(){var n,l,s,h,g,p={},d=[],m=ua.range(u),v=[];for(e=[],r=[],n=0,h=-1;++h<u;){for(l=0,g=-1;++g<u;)l+=i[h][g];d.push(l),v.push(ua.range(u)),n+=l}for(a&&m.sort(function(n,t){return a(d[n],d[t])}),o&&v.forEach(function(n,t){n.sort(function(n,e){return o(i[t][n],i[t][e])})}),n=(2*Da-f*u)/n,l=0,h=-1;++h<u;){for(s=l,g=-1;++g<u;){var y=m[h],M=v[y][g],x=i[y][M],b=l,_=l+=x*n;p[y+"-"+M]={index:y,subindex:M,startAngle:b,endAngle:_,value:x}}r[y]={index:y,startAngle:s,endAngle:l,value:(l-s)/n},l+=f}for(h=-1;++h<u;)for(g=h-1;++g<u;){var w=p[h+"-"+g],S=p[g+"-"+h];(w.value||S.value)&&e.push(w.value<S.value?{source:S,target:w}:{source:w,target:S})}c&&t()}function t(){e.sort(function(n,t){return c((n.source.value+n.target.value)/2,(t.source.value+t.target.value)/2)})}var e,r,i,u,a,o,c,l={},f=0;return l.matrix=function(n){return arguments.length?(u=(i=n)&&i.length,e=r=null,l):i},l.padding=function(n){return arguments.length?(f=n,e=r=null,l):f},l.sortGroups=function(n){return arguments.length?(a=n,e=r=null,l):a},l.sortSubgroups=function(n){return arguments.length?(o=n,e=null,l):o},l.sortChords=function(n){return arguments.length?(c=n,e&&t(),l):c},l.chords=function(){return e||n(),e},l.groups=function(){return r||n(),r},l},ua.layout.force=function(){function n(n){return function(t,e,r,i){if(t.point!==n){var u=t.cx-n.x,a=t.cy-n.y,o=1/Math.sqrt(u*u+a*a);if(d>(i-e)*o){var c=t.charge*o*o;return n.px-=u*c,n.py-=a*c,!0}if(t.point&&isFinite(o)){var c=t.pointCharge*o*o;n.px-=u*c,n.py-=a*c}}return!t.charge}}function t(n){n.px=ua.event.x,n.py=ua.event.y,o.resume()}var e,r,i,u,a,o={},c=ua.dispatch("start","tick","end"),l=[1,1],f=.9,s=Vo,h=Xo,g=-30,p=.1,d=.8,m=[],v=[];return o.tick=function(){if((r*=.99)<.005)return c.end({type:"end",alpha:r=0}),!0;var t,e,o,s,h,d,y,M,x,b=m.length,_=v.length;for(e=0;_>e;++e)o=v[e],s=o.source,h=o.target,M=h.x-s.x,x=h.y-s.y,(d=M*M+x*x)&&(d=r*u[e]*((d=Math.sqrt(d))-i[e])/d,M*=d,x*=d,h.x-=M*(y=s.weight/(h.weight+s.weight)),h.y-=x*y,s.x+=M*(y=1-y),s.y+=x*y);if((y=r*p)&&(M=l[0]/2,x=l[1]/2,e=-1,y))for(;++e<b;)o=m[e],o.x+=(M-o.x)*y,o.y+=(x-o.y)*y;if(g)for(Br(t=ua.geom.quadtree(m),r,a),e=-1;++e<b;)(o=m[e]).fixed||t.visit(n(o));for(e=-1;++e<b;)o=m[e],o.fixed?(o.x=o.px,o.y=o.py):(o.x-=(o.px-(o.px=o.x))*f,o.y-=(o.py-(o.py=o.y))*f);c.tick({type:"tick",alpha:r})},o.nodes=function(n){return arguments.length?(m=n,o):m},o.links=function(n){return arguments.length?(v=n,o):v},o.size=function(n){return arguments.length?(l=n,o):l},o.linkDistance=function(n){return arguments.length?(s="function"==typeof n?n:+n,o):s},o.distance=o.linkDistance,o.linkStrength=function(n){return arguments.length?(h="function"==typeof n?n:+n,o):h},o.friction=function(n){return arguments.length?(f=+n,o):f},o.charge=function(n){return arguments.length?(g="function"==typeof n?n:+n,o):g},o.gravity=function(n){return arguments.length?(p=+n,o):p},o.theta=function(n){return arguments.length?(d=+n,o):d},o.alpha=function(n){return arguments.length?(n=+n,r?r=n>0?n:0:n>0&&(c.start({type:"start",alpha:r=n}),ua.timer(o.tick)),o):r},o.start=function(){function n(n,r){for(var i,u=t(e),a=-1,o=u.length;++a<o;)if(!isNaN(i=u[a][n]))return i;return Math.random()*r}function t(){if(!c){for(c=[],r=0;p>r;++r)c[r]=[];for(r=0;d>r;++r){var n=v[r];c[n.source.index].push(n.target),c[n.target.index].push(n.source)}}return c[e]}var e,r,c,f,p=m.length,d=v.length,y=l[0],M=l[1];for(e=0;p>e;++e)(f=m[e]).index=e,f.weight=0;for(e=0;d>e;++e)f=v[e],typeof f.source=="number"&&(f.source=m[f.source]),typeof f.target=="number"&&(f.target=m[f.target]),++f.source.weight,++f.target.weight;for(e=0;p>e;++e)f=m[e],isNaN(f.x)&&(f.x=n("x",y)),isNaN(f.y)&&(f.y=n("y",M)),isNaN(f.px)&&(f.px=f.x),isNaN(f.py)&&(f.py=f.y);if(i=[],"function"==typeof s)for(e=0;d>e;++e)i[e]=+s.call(this,v[e],e);else for(e=0;d>e;++e)i[e]=s;if(u=[],"function"==typeof h)for(e=0;d>e;++e)u[e]=+h.call(this,v[e],e);else for(e=0;d>e;++e)u[e]=h;if(a=[],"function"==typeof g)for(e=0;p>e;++e)a[e]=+g.call(this,m[e],e);else for(e=0;p>e;++e)a[e]=g;return o.resume()},o.resume=function(){return o.alpha(.1)},o.stop=function(){return o.alpha(0)},o.drag=function(){return e||(e=ua.behavior.drag().origin(ft).on("dragstart.force",Ir).on("drag.force",t).on("dragend.force",Vr)),arguments.length?(this.on("mouseover.force",Xr).on("mouseout.force",Zr).call(e),void 0):e},ua.rebind(o,c,"on")};var Vo=20,Xo=1;ua.layout.hierarchy=function(){function n(t,a,o){var c=i.call(e,t,a);if(t.depth=a,o.push(t),c&&(l=c.length)){for(var l,f,s=-1,h=t.children=[],g=0,p=a+1;++s<l;)f=n(c[s],p,o),f.parent=t,h.push(f),g+=f.value;r&&h.sort(r),u&&(t.value=g)}else u&&(t.value=+u.call(e,t,a)||0);return t}function t(n,r){var i=n.children,a=0;if(i&&(o=i.length))for(var o,c=-1,l=r+1;++c<o;)a+=t(i[c],l);else u&&(a=+u.call(e,n,r)||0);return u&&(n.value=a),a}function e(t){var e=[];return n(t,0,e),e}var r=Kr,i=Jr,u=Gr;return e.sort=function(n){return arguments.length?(r=n,e):r},e.children=function(n){return arguments.length?(i=n,e):i},e.value=function(n){return arguments.length?(u=n,e):u},e.revalue=function(n){return t(n,0),n},e},ua.layout.partition=function(){function n(t,e,r,i){var u=t.children;if(t.x=e,t.y=t.depth*i,t.dx=r,t.dy=i,u&&(a=u.length)){var a,o,c,l=-1;for(r=t.value?r/t.value:0;++l<a;)n(o=u[l],e,c=o.value*r,i),e+=c}}function t(n){var e=n.children,r=0;if(e&&(i=e.length))for(var i,u=-1;++u<i;)r=Math.max(r,t(e[u]));return 1+r}function e(e,u){var a=r.call(this,e,u);return n(a[0],0,i[0],i[1]/t(a[0])),a}var r=ua.layout.hierarchy(),i=[1,1];return e.size=function(n){return arguments.length?(i=n,e):i},$r(e,r)},ua.layout.pie=function(){function n(u){var a=u.map(function(e,r){return+t.call(n,e,r)}),o=+("function"==typeof r?r.apply(this,arguments):r),c=(("function"==typeof i?i.apply(this,arguments):i)-o)/ua.sum(a),l=ua.range(u.length);null!=e&&l.sort(e===Zo?function(n,t){return a[t]-a[n]}:function(n,t){return e(u[n],u[t])});var f=[];return l.forEach(function(n){var t;f[n]={data:u[n],value:t=a[n],startAngle:o,endAngle:o+=t*c}}),f}var t=Number,e=Zo,r=0,i=2*Da;return n.value=function(e){return arguments.length?(t=e,n):t},n.sort=function(t){return arguments.length?(e=t,n):e},n.startAngle=function(t){return arguments.length?(r=t,n):r},n.endAngle=function(t){return arguments.length?(i=t,n):i},n};var Zo={};ua.layout.stack=function(){function n(o,c){var l=o.map(function(e,r){return t.call(n,e,r)}),f=l.map(function(t){return t.map(function(t,e){return[u.call(n,t,e),a.call(n,t,e)]})}),s=e.call(n,f,c);l=ua.permute(l,s),f=ua.permute(f,s);var h,g,p,d=r.call(n,f,c),m=l.length,v=l[0].length;for(g=0;v>g;++g)for(i.call(n,l[0][g],p=d[g],f[0][g][1]),h=1;m>h;++h)i.call(n,l[h][g],p+=f[h-1][g][1],f[h][g][1]);return o}var t=ft,e=ei,r=ri,i=ti,u=Qr,a=ni;return n.values=function(e){return arguments.length?(t=e,n):t},n.order=function(t){return arguments.length?(e="function"==typeof t?t:Bo.get(t)||ei,n):e},n.offset=function(t){return arguments.length?(r="function"==typeof t?t:$o.get(t)||ri,n):r},n.x=function(t){return arguments.length?(u=t,n):u},n.y=function(t){return arguments.length?(a=t,n):a},n.out=function(t){return arguments.length?(i=t,n):i},n};var Bo=ua.map({"inside-out":function(n){var t,e,r=n.length,i=n.map(ii),u=n.map(ui),a=ua.range(r).sort(function(n,t){return i[n]-i[t]}),o=0,c=0,l=[],f=[];for(t=0;r>t;++t)e=a[t],c>o?(o+=u[e],l.push(e)):(c+=u[e],f.push(e));return f.reverse().concat(l)},reverse:function(n){return ua.range(n.length).reverse()},"default":ei}),$o=ua.map({silhouette:function(n){var t,e,r,i=n.length,u=n[0].length,a=[],o=0,c=[];for(e=0;u>e;++e){for(t=0,r=0;i>t;t++)r+=n[t][e][1];r>o&&(o=r),a.push(r)}for(e=0;u>e;++e)c[e]=(o-a[e])/2;return c},wiggle:function(n){var t,e,r,i,u,a,o,c,l,f=n.length,s=n[0],h=s.length,g=[];for(g[0]=c=l=0,e=1;h>e;++e){for(t=0,i=0;f>t;++t)i+=n[t][e][1];for(t=0,u=0,o=s[e][0]-s[e-1][0];f>t;++t){for(r=0,a=(n[t][e][1]-n[t][e-1][1])/(2*o);t>r;++r)a+=(n[r][e][1]-n[r][e-1][1])/o;u+=a*n[t][e][1]}g[e]=c-=i?u/i*o:0,l>c&&(l=c)}for(e=0;h>e;++e)g[e]-=l;return g},expand:function(n){var t,e,r,i=n.length,u=n[0].length,a=1/i,o=[];for(e=0;u>e;++e){for(t=0,r=0;i>t;t++)r+=n[t][e][1];if(r)for(t=0;i>t;t++)n[t][e][1]/=r;else for(t=0;i>t;t++)n[t][e][1]=a}for(e=0;u>e;++e)o[e]=0;return o},zero:ri});ua.layout.histogram=function(){function n(n,u){for(var a,o,c=[],l=n.map(e,this),f=r.call(this,l,u),s=i.call(this,f,l,u),u=-1,h=l.length,g=s.length-1,p=t?1:1/h;++u<g;)a=c[u]=[],a.dx=s[u+1]-(a.x=s[u]),a.y=0;if(g>0)for(u=-1;++u<h;)o=l[u],o>=f[0]&&o<=f[1]&&(a=c[ua.bisect(s,o,1,g)-1],a.y+=p,a.push(n[u]));return c}var t=!0,e=Number,r=li,i=oi;return n.value=function(t){return arguments.length?(e=t,n):e},n.range=function(t){return arguments.length?(r=lt(t),n):r},n.bins=function(t){return arguments.length?(i="number"==typeof t?function(n){return ci(n,t)}:lt(t),n):i},n.frequency=function(e){return arguments.length?(t=!!e,n):t},n},ua.layout.tree=function(){function n(n,i){function u(n,t){var r=n.children,i=n._tree;if(r&&(a=r.length)){for(var a,c,l,f=r[0],s=f,h=-1;++h<a;)l=r[h],u(l,c),s=o(l,c,s),c=l;yi(n);var g=.5*(f._tree.prelim+l._tree.prelim);t?(i.prelim=t._tree.prelim+e(n,t),i.mod=i.prelim-g):i.prelim=g}else t&&(i.prelim=t._tree.prelim+e(n,t))}function a(n,t){n.x=n._tree.prelim+t;var e=n.children;if(e&&(r=e.length)){var r,i=-1;for(t+=n._tree.mod;++i<r;)a(e[i],t)}}function o(n,t,r){if(t){for(var i,u=n,a=n,o=t,c=n.parent.children[0],l=u._tree.mod,f=a._tree.mod,s=o._tree.mod,h=c._tree.mod;o=hi(o),u=si(u),o&&u;)c=si(c),a=hi(a),a._tree.ancestor=n,i=o._tree.prelim+s-u._tree.prelim-l+e(o,u),i>0&&(Mi(xi(o,n,r),n,i),l+=i,f+=i),s+=o._tree.mod,l+=u._tree.mod,h+=c._tree.mod,f+=a._tree.mod;o&&!hi(a)&&(a._tree.thread=o,a._tree.mod+=s-f),u&&!si(c)&&(c._tree.thread=u,c._tree.mod+=l-h,r=n)}return r}var c=t.call(this,n,i),l=c[0];vi(l,function(n,t){n._tree={ancestor:n,prelim:0,mod:0,change:0,shift:0,number:t?t._tree.number+1:0}}),u(l),a(l,-l._tree.prelim);var f=gi(l,di),s=gi(l,pi),h=gi(l,mi),g=f.x-e(f,s)/2,p=s.x+e(s,f)/2,d=h.depth||1;return vi(l,function(n){n.x=(n.x-g)/(p-g)*r[0],n.y=n.depth/d*r[1],delete n._tree}),c}var t=ua.layout.hierarchy().sort(null).value(null),e=fi,r=[1,1];return n.separation=function(t){return arguments.length?(e=t,n):e},n.size=function(t){return arguments.length?(r=t,n):r},$r(n,t)},ua.layout.pack=function(){function n(n,i){var u=t.call(this,n,i),a=u[0];a.x=0,a.y=0,vi(a,function(n){n.r=Math.sqrt(n.value)}),vi(a,Ei);var o=r[0],c=r[1],l=Math.max(2*a.r/o,2*a.r/c);if(e>0){var f=e*l/2;vi(a,function(n){n.r+=f}),vi(a,Ei),vi(a,function(n){n.r-=f}),l=Math.max(2*a.r/o,2*a.r/c)}return Ni(a,o/2,c/2,1/l),u}var t=ua.layout.hierarchy().sort(bi),e=0,r=[1,1];return n.size=function(t){return arguments.length?(r=t,n):r},n.padding=function(t){return arguments.length?(e=+t,n):e},$r(n,t)},ua.layout.cluster=function(){function n(n,i){var u,a=t.call(this,n,i),o=a[0],c=0;vi(o,function(n){var t=n.children;t&&t.length?(n.x=Ci(t),n.y=Ti(t)):(n.x=u?c+=e(n,u):0,n.y=0,u=n)});var l=zi(o),f=Di(o),s=l.x-e(l,f)/2,h=f.x+e(f,l)/2;return vi(o,function(n){n.x=(n.x-s)/(h-s)*r[0],n.y=(1-(o.y?n.y/o.y:1))*r[1]}),a}var t=ua.layout.hierarchy().sort(null).value(null),e=fi,r=[1,1];return n.separation=function(t){return arguments.length?(e=t,n):e},n.size=function(t){return arguments.length?(r=t,n):r},$r(n,t)},ua.layout.treemap=function(){function n(n,t){for(var e,r,i=-1,u=n.length;++i<u;)r=(e=n[i]).value*(0>t?0:t),e.area=isNaN(r)||0>=r?0:r}function t(e){var u=e.children;if(u&&u.length){var a,o,c,l=s(e),f=[],h=u.slice(),p=1/0,d="slice"===g?l.dx:"dice"===g?l.dy:"slice-dice"===g?e.depth&1?l.dy:l.dx:Math.min(l.dx,l.dy);for(n(h,l.dx*l.dy/e.value),f.area=0;(c=h.length)>0;)f.push(a=h[c-1]),f.area+=a.area,"squarify"!==g||(o=r(f,d))<=p?(h.pop(),p=o):(f.area-=f.pop().area,i(f,d,l,!1),d=Math.min(l.dx,l.dy),f.length=f.area=0,p=1/0);f.length&&(i(f,d,l,!0),f.length=f.area=0),u.forEach(t)}}function e(t){var r=t.children;if(r&&r.length){var u,a=s(t),o=r.slice(),c=[];for(n(o,a.dx*a.dy/t.value),c.area=0;u=o.pop();)c.push(u),c.area+=u.area,u.z!=null&&(i(c,u.z?a.dx:a.dy,a,!o.length),c.length=c.area=0);r.forEach(e)}}function r(n,t){for(var e,r=n.area,i=0,u=1/0,a=-1,o=n.length;++a<o;)(e=n[a].area)&&(u>e&&(u=e),e>i&&(i=e));return r*=r,t*=t,r?Math.max(t*i*p/r,r/(t*u*p)):1/0}function i(n,t,e,r){var i,u=-1,a=n.length,o=e.x,l=e.y,f=t?c(n.area/t):0;if(t==e.dx){for((r||f>e.dy)&&(f=e.dy);++u<a;)i=n[u],i.x=o,i.y=l,i.dy=f,o+=i.dx=Math.min(e.x+e.dx-o,f?c(i.area/f):0);i.z=!0,i.dx+=e.x+e.dx-o,e.y+=f,e.dy-=f}else{for((r||f>e.dx)&&(f=e.dx);++u<a;)i=n[u],i.x=o,i.y=l,i.dx=f,l+=i.dy=Math.min(e.y+e.dy-l,f?c(i.area/f):0);i.z=!1,i.dy+=e.y+e.dy-l,e.x+=f,e.dx-=f}}function u(r){var i=a||o(r),u=i[0];return u.x=0,u.y=0,u.dx=l[0],u.dy=l[1],a&&o.revalue(u),n([u],u.dx*u.dy/u.value),(a?e:t)(u),h&&(a=i),i}var a,o=ua.layout.hierarchy(),c=Math.round,l=[1,1],f=null,s=ji,h=!1,g="squarify",p=.5*(1+Math.sqrt(5));return u.size=function(n){return arguments.length?(l=n,u):l},u.padding=function(n){function t(t){var e=n.call(u,t,t.depth);return null==e?ji(t):Li(t,"number"==typeof e?[e,e,e,e]:e)}function e(t){return Li(t,n)}if(!arguments.length)return f;var r;return s=(f=n)==null?ji:(r=typeof n)=="function"?t:"number"===r?(n=[n,n,n,n],e):e,u},u.round=function(n){return arguments.length?(c=n?Math.round:Number,u):c!=Number},u.sticky=function(n){return arguments.length?(h=n,a=null,u):h},u.ratio=function(n){return arguments.length?(p=n,u):p},u.mode=function(n){return arguments.length?(g=n+"",u):g},$r(u,o)},ua.random={normal:function(n,t){var e=arguments.length;return 2>e&&(t=1),1>e&&(n=0),function(){var e,r,i;do e=Math.random()*2-1,r=Math.random()*2-1,i=e*e+r*r;while(!i||i>1);return n+t*e*Math.sqrt(-2*Math.log(i)/i)}},logNormal:function(){var n=ua.random.normal.apply(ua,arguments);return function(){return Math.exp(n())}},irwinHall:function(n){return function(){for(var t=0,e=0;n>e;e++)t+=Math.random();return t/n}}},ua.scale={},ua.scale.linear=function(){return Yi([0,1],[0,1],yr,!1)},ua.scale.log=function(){return Bi(ua.scale.linear().domain([0,Math.LN10]),10,$i,Ji,[1,10])};var Jo=ua.format(".0e");ua.scale.pow=function(){return Wi(ua.scale.linear(),1,[0,1])},ua.scale.sqrt=function(){return ua.scale.pow().exponent(.5)},ua.scale.ordinal=function(){return nu([],{t:"range",a:[[]]})},ua.scale.category10=function(){return ua.scale.ordinal().range(Go)},ua.scale.category20=function(){return ua.scale.ordinal().range(Ko)},ua.scale.category20b=function(){return ua.scale.ordinal().range(Wo)},ua.scale.category20c=function(){return ua.scale.ordinal().range(Qo)};var Go=["#1f77b4","#ff7f0e","#2ca02c","#d62728","#9467bd","#8c564b","#e377c2","#7f7f7f","#bcbd22","#17becf"],Ko=["#1f77b4","#aec7e8","#ff7f0e","#ffbb78","#2ca02c","#98df8a","#d62728","#ff9896","#9467bd","#c5b0d5","#8c564b","#c49c94","#e377c2","#f7b6d2","#7f7f7f","#c7c7c7","#bcbd22","#dbdb8d","#17becf","#9edae5"],Wo=["#393b79","#5254a3","#6b6ecf","#9c9ede","#637939","#8ca252","#b5cf6b","#cedb9c","#8c6d31","#bd9e39","#e7ba52","#e7cb94","#843c39","#ad494a","#d6616b","#e7969c","#7b4173","#a55194","#ce6dbd","#de9ed6"],Qo=["#3182bd","#6baed6","#9ecae1","#c6dbef","#e6550d","#fd8d3c","#fdae6b","#fdd0a2","#31a354","#74c476","#a1d99b","#c7e9c0","#756bb1","#9e9ac8","#bcbddc","#dadaeb","#636363","#969696","#bdbdbd","#d9d9d9"];ua.scale.quantile=function(){return tu([],[])},ua.scale.quantize=function(){return eu(0,1,[0,1])},ua.scale.threshold=function(){return ru([.5],[0,1])},ua.scale.identity=function(){return iu([0,1])},ua.svg.arc=function(){function n(){var n=t.apply(this,arguments),u=e.apply(this,arguments),a=r.apply(this,arguments)+nc,o=i.apply(this,arguments)+nc,c=(a>o&&(c=a,a=o,o=c),o-a),l=Da>c?"0":"1",f=Math.cos(a),s=Math.sin(a),h=Math.cos(o),g=Math.sin(o);return c>=tc?n?"M0,"+u+"A"+u+","+u+" 0 1,1 0,"+-u+"A"+u+","+u+" 0 1,1 0,"+u+"M0,"+n+"A"+n+","+n+" 0 1,0 0,"+-n+"A"+n+","+n+" 0 1,0 0,"+n+"Z":"M0,"+u+"A"+u+","+u+" 0 1,1 0,"+-u+"A"+u+","+u+" 0 1,1 0,"+u+"Z":n?"M"+u*f+","+u*s+"A"+u+","+u+" 0 "+l+",1 "+u*h+","+u*g+"L"+n*h+","+n*g+"A"+n+","+n+" 0 "+l+",0 "+n*f+","+n*s+"Z":"M"+u*f+","+u*s+"A"+u+","+u+" 0 "+l+",1 "+u*h+","+u*g+"L0,0"+"Z"}var t=uu,e=au,r=ou,i=cu;return n.innerRadius=function(e){return arguments.length?(t=lt(e),n):t},n.outerRadius=function(t){return arguments.length?(e=lt(t),n):e},n.startAngle=function(t){return arguments.length?(r=lt(t),n):r},n.endAngle=function(t){return arguments.length?(i=lt(t),n):i},n.centroid=function(){var n=(t.apply(this,arguments)+e.apply(this,arguments))/2,u=(r.apply(this,arguments)+i.apply(this,arguments))/2+nc;return[Math.cos(u)*n,Math.sin(u)*n]},n};var nc=-Da/2,tc=2*Da-1e-6;ua.svg.line.radial=function(){var n=De(lu);return n.radius=n.x,delete n.x,n.angle=n.y,delete n.y,n},Pe.reverse=Re,Re.reverse=Pe,ua.svg.area=function(){return fu(ft)},ua.svg.area.radial=function(){var n=fu(lu);return n.radius=n.x,delete n.x,n.innerRadius=n.x0,delete n.x0,n.outerRadius=n.x1,delete n.x1,n.angle=n.y,delete n.y,n.startAngle=n.y0,delete n.y0,n.endAngle=n.y1,delete n.y1,n},ua.svg.chord=function(){function n(n,o){var c=t(this,u,n,o),l=t(this,a,n,o);return"M"+c.p0+r(c.r,c.p1,c.a1-c.a0)+(e(c,l)?i(c.r,c.p1,c.r,c.p0):i(c.r,c.p1,l.r,l.p0)+r(l.r,l.p1,l.a1-l.a0)+i(l.r,l.p1,c.r,c.p0))+"Z"}function t(n,t,e,r){var i=t.call(n,e,r),u=o.call(n,i,r),a=c.call(n,i,r)+nc,f=l.call(n,i,r)+nc;return{r:u,a0:a,a1:f,p0:[u*Math.cos(a),u*Math.sin(a)],p1:[u*Math.cos(f),u*Math.sin(f)]}}function e(n,t){return n.a0==t.a0&&n.a1==t.a1}function r(n,t,e){return"A"+n+","+n+" 0 "+ +(e>Da)+",1 "+t}function i(n,t,e,r){return"Q 0,0 "+r}var u=se,a=he,o=su,c=ou,l=cu;return n.radius=function(t){return arguments.length?(o=lt(t),n):o},n.source=function(t){return arguments.length?(u=lt(t),n):u},n.target=function(t){return arguments.length?(a=lt(t),n):a},n.startAngle=function(t){return arguments.length?(c=lt(t),n):c},n.endAngle=function(t){return arguments.length?(l=lt(t),n):l},n},ua.svg.diagonal=function(){function n(n,i){var u=t.call(this,n,i),a=e.call(this,n,i),o=(u.y+a.y)/2,c=[u,{x:u.x,y:o},{x:a.x,y:o},a];return c=c.map(r),"M"+c[0]+"C"+c[1]+" "+c[2]+" "+c[3]}var t=se,e=he,r=hu;return n.source=function(e){return arguments.length?(t=lt(e),n):t},n.target=function(t){return arguments.length?(e=lt(t),n):e},n.projection=function(t){return arguments.length?(r=t,n):r},n},ua.svg.diagonal.radial=function(){var n=ua.svg.diagonal(),t=hu,e=n.projection;return n.projection=function(n){return arguments.length?e(gu(t=n)):t},n},ua.svg.symbol=function(){function n(n,r){return(ec.get(t.call(this,n,r))||mu)(e.call(this,n,r))}var t=du,e=pu;return n.type=function(e){return arguments.length?(t=lt(e),n):t},n.size=function(t){return arguments.length?(e=lt(t),n):e},n};var ec=ua.map({circle:mu,cross:function(n){var t=Math.sqrt(n/5)/2;return"M"+-3*t+","+-t+"H"+-t+"V"+-3*t+"H"+t+"V"+-t+"H"+3*t+"V"+t+"H"+t+"V"+3*t+"H"+-t+"V"+t+"H"+-3*t+"Z"},diamond:function(n){var t=Math.sqrt(n/(2*uc)),e=t*uc;return"M0,"+-t+"L"+e+",0"+" 0,"+t+" "+-e+",0"+"Z"},square:function(n){var t=Math.sqrt(n)/2;return"M"+-t+","+-t+"L"+t+","+-t+" "+t+","+t+" "+-t+","+t+"Z"},"triangle-down":function(n){var t=Math.sqrt(n/ic),e=t*ic/2;return"M0,"+e+"L"+t+","+-e+" "+-t+","+-e+"Z"},"triangle-up":function(n){var t=Math.sqrt(n/ic),e=t*ic/2;return"M0,"+-e+"L"+t+","+e+" "+-t+","+e+"Z"}});ua.svg.symbolTypes=ec.keys();var rc,ic=Math.sqrt(3),uc=Math.tan(30*La),ac=[],oc=0,cc={ease:kr,delay:0,duration:250};ac.call=wa.call,ac.empty=wa.empty,ac.node=wa.node,ua.transition=function(n){return arguments.length?rc?n.transition():n:Na.transition()},ua.transition.prototype=ac,ac.select=function(n){var t,e,r,i=this.id,u=[];"function"!=typeof n&&(n=v(n));for(var a=-1,o=this.length;++a<o;){u.push(t=[]);for(var c=this[a],l=-1,f=c.length;++l<f;)(r=c[l])&&(e=n.call(r,r.__data__,l))?("__data__"in r&&(e.__data__=r.__data__),xu(e,l,i,r.__transition__[i]),t.push(e)):t.push(null)}return vu(u,i)},ac.selectAll=function(n){var t,e,r,i,u,a=this.id,o=[];"function"!=typeof n&&(n=y(n));for(var c=-1,l=this.length;++c<l;)for(var f=this[c],s=-1,h=f.length;++s<h;)if(r=f[s]){u=r.__transition__[a],e=n.call(r,r.__data__,s),o.push(t=[]);for(var g=-1,p=e.length;++g<p;)xu(i=e[g],g,a,u),t.push(i)}return vu(o,a)},ac.filter=function(n){var t,e,r,i=[];"function"!=typeof n&&(n=A(n));for(var u=0,a=this.length;a>u;u++){i.push(t=[]);for(var e=this[u],o=0,c=e.length;c>o;o++)(r=e[o])&&n.call(r,r.__data__,o)&&t.push(r)}return vu(i,this.id,this.time).ease(this.ease())},ac.tween=function(n,t){var e=this.id;return arguments.length<2?this.node().__transition__[e].tween.get(n):D(this,null==t?function(t){t.__transition__[e].tween.remove(n)}:function(r){r.__transition__[e].tween.set(n,t)})},ac.attr=function(n,t){function e(){this.removeAttribute(o)}function r(){this.removeAttributeNS(o.space,o.local)}function i(n){return null==n?e:(n+="",function(){var t,e=this.getAttribute(o);return e!==n&&(t=a(e,n),function(n){this.setAttribute(o,t(n))})})}function u(n){return null==n?r:(n+="",function(){var t,e=this.getAttributeNS(o.space,o.local);return e!==n&&(t=a(e,n),function(n){this.setAttributeNS(o.space,o.local,t(n))})})}if(arguments.length<2){for(t in n)this.attr(t,n[t]);return this}var a=Mr(n),o=ua.ns.qualify(n);return yu(this,"attr."+n,t,o.local?u:i)},ac.attrTween=function(n,t){function e(n,e){var r=t.call(this,n,e,this.getAttribute(i));return r&&function(n){this.setAttribute(i,r(n))}}function r(n,e){var r=t.call(this,n,e,this.getAttributeNS(i.space,i.local));return r&&function(n){this.setAttributeNS(i.space,i.local,r(n))}}var i=ua.ns.qualify(n);return this.tween("attr."+n,i.local?r:e)},ac.style=function(n,t,e){function r(){this.style.removeProperty(n)}function i(t){return null==t?r:(t+="",function(){var r,i=oa.getComputedStyle(this,null).getPropertyValue(n);return i!==t&&(r=a(i,t),function(t){this.style.setProperty(n,r(t),e)})})}var u=arguments.length;if(3>u){if("string"!=typeof n){2>u&&(t="");for(e in n)this.style(e,n[e],t);return this}e=""}var a=Mr(n);return yu(this,"style."+n,t,i)},ac.styleTween=function(n,t,e){function r(r,i){var u=t.call(this,r,i,oa.getComputedStyle(this,null).getPropertyValue(n));return u&&function(t){this.style.setProperty(n,u(t),e)}}return arguments.length<3&&(e=""),this.tween("style."+n,r)},ac.text=function(n){return yu(this,"text",n,Mu)},ac.remove=function(){return this.each("end.transition",function(){var n;!this.__transition__&&(n=this.parentNode)&&n.removeChild(this)})},ac.ease=function(n){var t=this.id;return arguments.length<1?this.node().__transition__[t].ease:("function"!=typeof n&&(n=ua.ease.apply(ua,arguments)),D(this,function(e){e.__transition__[t].ease=n}))},ac.delay=function(n){var t=this.id;return D(this,"function"==typeof n?function(e,r,i){e.__transition__[t].delay=n.call(e,e.__data__,r,i)|0}:(n|=0,function(e){e.__transition__[t].delay=n}))},ac.duration=function(n){var t=this.id;return D(this,"function"==typeof n?function(e,r,i){e.__transition__[t].duration=Math.max(1,n.call(e,e.__data__,r,i)|0)}:(n=Math.max(1,0|n),function(e){e.__transition__[t].duration=n}))},ac.each=function(n,t){var e=this.id;if(arguments.length<2){var r=cc,i=rc;rc=e,D(this,function(t,r,i){cc=t.__transition__[e],n.call(t,t.__data__,r,i)}),cc=r,rc=i}else D(this,function(r){r.__transition__[e].event.on(n,t)});return this},ac.transition=function(){for(var n,t,e,r,i=this.id,u=++oc,a=[],o=0,c=this.length;c>o;o++){a.push(n=[]);for(var t=this[o],l=0,f=t.length;f>l;l++)(e=t[l])&&(r=Object.create(e.__transition__[i]),r.delay+=r.duration,xu(e,l,u,r)),n.push(e)}return vu(a,u)},ua.svg.axis=function(){function n(n){n.each(function(){var n,s=ua.select(this),h=null==l?e.ticks?e.ticks.apply(e,c):e.domain():l,g=null==t?e.tickFormat?e.tickFormat.apply(e,c):String:t,p=wu(e,h,f),d=s.selectAll(".tick.minor").data(p,String),m=d.enter().insert("line",".tick").attr("class","tick minor").style("opacity",1e-6),v=ua.transition(d.exit()).style("opacity",1e-6).remove(),y=ua.transition(d).style("opacity",1),M=s.selectAll(".tick.major").data(h,String),x=M.enter().insert("g","path").attr("class","tick major").style("opacity",1e-6),b=ua.transition(M.exit()).style("opacity",1e-6).remove(),_=ua.transition(M).style("opacity",1),w=Hi(e),S=s.selectAll(".domain").data([0]),E=(S.enter().append("path").attr("class","domain"),ua.transition(S)),k=e.copy(),A=this.__chart__||k;this.__chart__=k,x.append("line"),x.append("text");var N=x.select("line"),q=_.select("line"),T=M.select("text").text(g),C=x.select("text"),z=_.select("text");switch(r){case"bottom":n=bu,m.attr("y2",u),y.attr("x2",0).attr("y2",u),N.attr("y2",i),C.attr("y",Math.max(i,0)+o),q.attr("x2",0).attr("y2",i),z.attr("x",0).attr("y",Math.max(i,0)+o),T.attr("dy",".71em").style("text-anchor","middle"),E.attr("d","M"+w[0]+","+a+"V0H"+w[1]+"V"+a);break;case"top":n=bu,m.attr("y2",-u),y.attr("x2",0).attr("y2",-u),N.attr("y2",-i),C.attr("y",-(Math.max(i,0)+o)),q.attr("x2",0).attr("y2",-i),z.attr("x",0).attr("y",-(Math.max(i,0)+o)),T.attr("dy","0em").style("text-anchor","middle"),E.attr("d","M"+w[0]+","+-a+"V0H"+w[1]+"V"+-a);break;case"left":n=_u,m.attr("x2",-u),y.attr("x2",-u).attr("y2",0),N.attr("x2",-i),C.attr("x",-(Math.max(i,0)+o)),q.attr("x2",-i).attr("y2",0),z.attr("x",-(Math.max(i,0)+o)).attr("y",0),T.attr("dy",".32em").style("text-anchor","end"),E.attr("d","M"+-a+","+w[0]+"H0V"+w[1]+"H"+-a);break;case"right":n=_u,m.attr("x2",u),y.attr("x2",u).attr("y2",0),N.attr("x2",i),C.attr("x",Math.max(i,0)+o),q.attr("x2",i).attr("y2",0),z.attr("x",Math.max(i,0)+o).attr("y",0),T.attr("dy",".32em").style("text-anchor","start"),E.attr("d","M"+a+","+w[0]+"H0V"+w[1]+"H"+a)}if(e.ticks)x.call(n,A),_.call(n,k),b.call(n,k),m.call(n,A),y.call(n,k),v.call(n,k);else{var D=k.rangeBand()/2,j=function(n){return k(n)+D};x.call(n,j),_.call(n,j)}})}var t,e=ua.scale.linear(),r=lc,i=6,u=6,a=6,o=3,c=[10],l=null,f=0;return n.scale=function(t){return arguments.length?(e=t,n):e},n.orient=function(t){return arguments.length?(r=t in fc?t+"":lc,n):r},n.ticks=function(){return arguments.length?(c=arguments,n):c},n.tickValues=function(t){return arguments.length?(l=t,n):l},n.tickFormat=function(e){return arguments.length?(t=e,n):t},n.tickSize=function(t,e){if(!arguments.length)return i;var r=arguments.length-1;return i=+t,u=r>1?+e:i,a=r>0?+arguments[r]:i,n},n.tickPadding=function(t){return arguments.length?(o=+t,n):o},n.tickSubdivide=function(t){return arguments.length?(f=+t,n):f},n};var lc="bottom",fc={top:1,right:1,bottom:1,left:1};ua.svg.brush=function(){function n(u){u.each(function(){var u,a=ua.select(this),l=a.selectAll(".background").data([0]),s=a.selectAll(".extent").data([0]),h=a.selectAll(".resize").data(f,String);a.style("pointer-events","all").on("mousedown.brush",i).on("touchstart.brush",i),l.enter().append("rect").attr("class","background").style("visibility","hidden").style("cursor","crosshair"),s.enter().append("rect").attr("class","extent").style("cursor","move"),h.enter().append("g").attr("class",function(n){return"resize "+n}).style("cursor",function(n){return sc[n]}).append("rect").attr("x",function(n){return/[ew]$/.test(n)?-3:null}).attr("y",function(n){return/^[ns]/.test(n)?-3:null}).attr("width",6).attr("height",6).style("visibility","hidden"),h.style("display",n.empty()?"none":null),h.exit().remove(),o&&(u=Hi(o),l.attr("x",u[0]).attr("width",u[1]-u[0]),e(a)),c&&(u=Hi(c),l.attr("y",u[0]).attr("height",u[1]-u[0]),r(a)),t(a)})}function t(n){n.selectAll(".resize").attr("transform",function(n){return"translate("+s[+/e$/.test(n)][0]+","+s[+/^s/.test(n)][1]+")"})}function e(n){n.select(".extent").attr("x",s[0][0]),n.selectAll(".extent,.n>rect,.s>rect").attr("width",s[1][0]-s[0][0])}function r(n){n.select(".extent").attr("y",s[0][1]),n.selectAll(".extent,.e>rect,.w>rect").attr("height",s[1][1]-s[0][1])}function i(){function i(){var n=ua.event.changedTouches;
return n?ua.touches(y,n)[0]:ua.mouse(y)}function f(){ua.event.keyCode==32&&(E||(m=null,k[0]-=s[1][0],k[1]-=s[1][1],E=2),l())}function h(){ua.event.keyCode==32&&2==E&&(k[0]+=s[1][0],k[1]+=s[1][1],E=0,l())}function g(){var n=i(),u=!1;v&&(n[0]+=v[0],n[1]+=v[1]),E||(ua.event.altKey?(m||(m=[(s[0][0]+s[1][0])/2,(s[0][1]+s[1][1])/2]),k[0]=s[+(n[0]<m[0])][0],k[1]=s[+(n[1]<m[1])][1]):m=null),w&&p(n,o,0)&&(e(b),u=!0),S&&p(n,c,1)&&(r(b),u=!0),u&&(t(b),x({type:"brush",mode:E?"move":"resize"}))}function p(n,t,e){var r,i,a=Hi(t),o=a[0],c=a[1],l=k[e],f=s[1][e]-s[0][e];return E&&(o-=l,c-=f+l),r=Math.max(o,Math.min(c,n[e])),E?i=(r+=l)+f:(m&&(l=Math.max(o,Math.min(c,2*m[e]-r))),r>l?(i=r,r=l):i=l),s[0][e]!==r||s[1][e]!==i?(u=null,s[0][e]=r,s[1][e]=i,!0):void 0}function d(){g(),b.style("pointer-events","all").selectAll(".resize").style("display",n.empty()?"none":null),ua.select("body").style("cursor",null),A.on("mousemove.brush",null).on("mouseup.brush",null).on("touchmove.brush",null).on("touchend.brush",null).on("keydown.brush",null).on("keyup.brush",null),x({type:"brushend"}),l()}var m,v,y=this,M=ua.select(ua.event.target),x=a.of(y,arguments),b=ua.select(y),_=M.datum(),w=!/^(n|s)$/.test(_)&&o,S=!/^(e|w)$/.test(_)&&c,E=M.classed("extent"),k=i(),A=ua.select(oa).on("mousemove.brush",g).on("mouseup.brush",d).on("touchmove.brush",g).on("touchend.brush",d).on("keydown.brush",f).on("keyup.brush",h);if(E)k[0]=s[0][0]-k[0],k[1]=s[0][1]-k[1];else if(_){var N=+/w$/.test(_),q=+/^n/.test(_);v=[s[1-N][0]-k[0],s[1-q][1]-k[1]],k[0]=s[N][0],k[1]=s[q][1]}else ua.event.altKey&&(m=k.slice());b.style("pointer-events","none").selectAll(".resize").style("display",null),ua.select("body").style("cursor",M.style("cursor")),x({type:"brushstart"}),g(),l()}var u,a=h(n,"brushstart","brush","brushend"),o=null,c=null,f=hc[0],s=[[0,0],[0,0]];return n.x=function(t){return arguments.length?(o=t,f=hc[!o<<1|!c],n):o},n.y=function(t){return arguments.length?(c=t,f=hc[!o<<1|!c],n):c},n.extent=function(t){var e,r,i,a,l;return arguments.length?(u=[[0,0],[0,0]],o&&(e=t[0],r=t[1],c&&(e=e[0],r=r[0]),u[0][0]=e,u[1][0]=r,o.invert&&(e=o(e),r=o(r)),e>r&&(l=e,e=r,r=l),s[0][0]=0|e,s[1][0]=0|r),c&&(i=t[0],a=t[1],o&&(i=i[1],a=a[1]),u[0][1]=i,u[1][1]=a,c.invert&&(i=c(i),a=c(a)),i>a&&(l=i,i=a,a=l),s[0][1]=0|i,s[1][1]=0|a),n):(t=u||s,o&&(e=t[0][0],r=t[1][0],u||(e=s[0][0],r=s[1][0],o.invert&&(e=o.invert(e),r=o.invert(r)),e>r&&(l=e,e=r,r=l))),c&&(i=t[0][1],a=t[1][1],u||(i=s[0][1],a=s[1][1],c.invert&&(i=c.invert(i),a=c.invert(a)),i>a&&(l=i,i=a,a=l))),o&&c?[[e,i],[r,a]]:o?[e,r]:c&&[i,a])},n.clear=function(){return u=null,s[0][0]=s[0][1]=s[1][0]=s[1][1]=0,n},n.empty=function(){return o&&s[0][0]===s[1][0]||c&&s[0][1]===s[1][1]},ua.rebind(n,a,"on")};var sc={n:"ns-resize",e:"ew-resize",s:"ns-resize",w:"ew-resize",nw:"nwse-resize",ne:"nesw-resize",se:"nwse-resize",sw:"nesw-resize"},hc=[["n","e","s","w","nw","ne","se","sw"],["e","w"],["n","s"],[]];ua.time={};var gc=Date,pc=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];Su.prototype={getDate:function(){return this._.getUTCDate()},getDay:function(){return this._.getUTCDay()},getFullYear:function(){return this._.getUTCFullYear()},getHours:function(){return this._.getUTCHours()},getMilliseconds:function(){return this._.getUTCMilliseconds()},getMinutes:function(){return this._.getUTCMinutes()},getMonth:function(){return this._.getUTCMonth()},getSeconds:function(){return this._.getUTCSeconds()},getTime:function(){return this._.getTime()},getTimezoneOffset:function(){return 0},valueOf:function(){return this._.valueOf()},setDate:function(){dc.setUTCDate.apply(this._,arguments)},setDay:function(){dc.setUTCDay.apply(this._,arguments)},setFullYear:function(){dc.setUTCFullYear.apply(this._,arguments)},setHours:function(){dc.setUTCHours.apply(this._,arguments)},setMilliseconds:function(){dc.setUTCMilliseconds.apply(this._,arguments)},setMinutes:function(){dc.setUTCMinutes.apply(this._,arguments)},setMonth:function(){dc.setUTCMonth.apply(this._,arguments)},setSeconds:function(){dc.setUTCSeconds.apply(this._,arguments)},setTime:function(){dc.setTime.apply(this._,arguments)}};var dc=Date.prototype,mc="%a %b %e %X %Y",vc="%m/%d/%Y",yc="%H:%M:%S",Mc=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],xc=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],bc=["January","February","March","April","May","June","July","August","September","October","November","December"],_c=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];ua.time.year=Eu(function(n){return n=ua.time.day(n),n.setMonth(0,1),n},function(n,t){n.setFullYear(n.getFullYear()+t)},function(n){return n.getFullYear()}),ua.time.years=ua.time.year.range,ua.time.years.utc=ua.time.year.utc.range,ua.time.day=Eu(function(n){var t=new gc(1970,0);return t.setFullYear(n.getFullYear(),n.getMonth(),n.getDate()),t},function(n,t){n.setDate(n.getDate()+t)},function(n){return n.getDate()-1}),ua.time.days=ua.time.day.range,ua.time.days.utc=ua.time.day.utc.range,ua.time.dayOfYear=function(n){var t=ua.time.year(n);return Math.floor((n-t-(n.getTimezoneOffset()-t.getTimezoneOffset())*6e4)/864e5)},pc.forEach(function(n,t){n=n.toLowerCase(),t=7-t;var e=ua.time[n]=Eu(function(n){return(n=ua.time.day(n)).setDate(n.getDate()-(n.getDay()+t)%7),n},function(n,t){n.setDate(n.getDate()+Math.floor(t)*7)},function(n){var e=ua.time.year(n).getDay();return Math.floor((ua.time.dayOfYear(n)+(e+t)%7)/7)-(e!==t)});ua.time[n+"s"]=e.range,ua.time[n+"s"].utc=e.utc.range,ua.time[n+"OfYear"]=function(n){var e=ua.time.year(n).getDay();return Math.floor((ua.time.dayOfYear(n)+(e+t)%7)/7)}}),ua.time.week=ua.time.sunday,ua.time.weeks=ua.time.sunday.range,ua.time.weeks.utc=ua.time.sunday.utc.range,ua.time.weekOfYear=ua.time.sundayOfYear,ua.time.format=function(n){function t(t){for(var r,i,u,a=[],o=-1,c=0;++o<e;)n.charCodeAt(o)===37&&(a.push(n.substring(c,o)),(i=qc[r=n.charAt(++o)])!=null&&(r=n.charAt(++o)),(u=Tc[r])&&(r=u(t,null==i?"e"===r?" ":"0":i)),a.push(r),c=o+1);return a.push(n.substring(c,o)),a.join("")}var e=n.length;return t.parse=function(t){var e={y:1900,m:0,d:1,H:0,M:0,S:0,L:0},r=Au(e,n,t,0);if(r!=t.length)return null;"p"in e&&(e.H=e.H%12+e.p*12);var i=new gc;return i.setFullYear(e.y,e.m,e.d),i.setHours(e.H,e.M,e.S,e.L),i},t.toString=function(){return n},t};var wc=Nu(Mc),Sc=Nu(xc),Ec=Nu(bc),kc=qu(bc),Ac=Nu(_c),Nc=qu(_c),qc={"-":"",_:" ",0:"0"},Tc={a:function(n){return xc[n.getDay()]},A:function(n){return Mc[n.getDay()]},b:function(n){return _c[n.getMonth()]},B:function(n){return bc[n.getMonth()]},c:ua.time.format(mc),d:function(n,t){return Tu(n.getDate(),t,2)},e:function(n,t){return Tu(n.getDate(),t,2)},H:function(n,t){return Tu(n.getHours(),t,2)},I:function(n,t){return Tu(n.getHours()%12||12,t,2)},j:function(n,t){return Tu(1+ua.time.dayOfYear(n),t,3)},L:function(n,t){return Tu(n.getMilliseconds(),t,3)},m:function(n,t){return Tu(n.getMonth()+1,t,2)},M:function(n,t){return Tu(n.getMinutes(),t,2)},p:function(n){return n.getHours()>=12?"PM":"AM"},S:function(n,t){return Tu(n.getSeconds(),t,2)},U:function(n,t){return Tu(ua.time.sundayOfYear(n),t,2)},w:function(n){return n.getDay()},W:function(n,t){return Tu(ua.time.mondayOfYear(n),t,2)},x:ua.time.format(vc),X:ua.time.format(yc),y:function(n,t){return Tu(n.getFullYear()%100,t,2)},Y:function(n,t){return Tu(n.getFullYear()%1e4,t,4)},Z:$u,"%":function(){return"%"}},Cc={a:Cu,A:zu,b:Du,B:ju,c:Lu,d:Uu,e:Uu,H:Iu,I:Iu,L:Zu,m:Yu,M:Vu,p:Bu,S:Xu,x:Fu,X:Hu,y:Ru,Y:Pu},zc=/^\s*\d+/,Dc=ua.map({am:0,pm:1});ua.time.format.utc=function(n){function t(n){try{gc=Su;var t=new gc;return t._=n,e(t)}finally{gc=Date}}var e=ua.time.format(n);return t.parse=function(n){try{gc=Su;var t=e.parse(n);return t&&t._}finally{gc=Date}},t.toString=e.toString,t};var jc=ua.time.format.utc("%Y-%m-%dT%H:%M:%S.%LZ");ua.time.format.iso=Date.prototype.toISOString&&+new Date("2000-01-01T00:00:00.000Z")?Ju:jc,Ju.parse=function(n){var t=new Date(n);return isNaN(t)?null:t},Ju.toString=jc.toString,ua.time.second=Eu(function(n){return new gc(Math.floor(n/1e3)*1e3)},function(n,t){n.setTime(n.getTime()+Math.floor(t)*1e3)},function(n){return n.getSeconds()}),ua.time.seconds=ua.time.second.range,ua.time.seconds.utc=ua.time.second.utc.range,ua.time.minute=Eu(function(n){return new gc(Math.floor(n/6e4)*6e4)},function(n,t){n.setTime(n.getTime()+Math.floor(t)*6e4)},function(n){return n.getMinutes()}),ua.time.minutes=ua.time.minute.range,ua.time.minutes.utc=ua.time.minute.utc.range,ua.time.hour=Eu(function(n){var t=n.getTimezoneOffset()/60;return new gc((Math.floor(n/36e5-t)+t)*36e5)},function(n,t){n.setTime(n.getTime()+Math.floor(t)*36e5)},function(n){return n.getHours()}),ua.time.hours=ua.time.hour.range,ua.time.hours.utc=ua.time.hour.utc.range,ua.time.month=Eu(function(n){return n=ua.time.day(n),n.setDate(1),n},function(n,t){n.setMonth(n.getMonth()+t)},function(n){return n.getMonth()}),ua.time.months=ua.time.month.range,ua.time.months.utc=ua.time.month.utc.range;var Lc=[1e3,5e3,15e3,3e4,6e4,3e5,9e5,18e5,36e5,108e5,216e5,432e5,864e5,1728e5,6048e5,2592e6,7776e6,31536e6],Fc=[[ua.time.second,1],[ua.time.second,5],[ua.time.second,15],[ua.time.second,30],[ua.time.minute,1],[ua.time.minute,5],[ua.time.minute,15],[ua.time.minute,30],[ua.time.hour,1],[ua.time.hour,3],[ua.time.hour,6],[ua.time.hour,12],[ua.time.day,1],[ua.time.day,2],[ua.time.week,1],[ua.time.month,1],[ua.time.month,3],[ua.time.year,1]],Hc=[[ua.time.format("%Y"),Ht],[ua.time.format("%B"),function(n){return n.getMonth()}],[ua.time.format("%b %d"),function(n){return n.getDate()!=1}],[ua.time.format("%a %d"),function(n){return n.getDay()&&n.getDate()!=1}],[ua.time.format("%I %p"),function(n){return n.getHours()}],[ua.time.format("%I:%M"),function(n){return n.getMinutes()}],[ua.time.format(":%S"),function(n){return n.getSeconds()}],[ua.time.format(".%L"),function(n){return n.getMilliseconds()}]],Pc=ua.scale.linear(),Rc=Wu(Hc);Fc.year=function(n,t){return Pc.domain(n.map(na)).ticks(t).map(Qu)},ua.time.scale=function(){return Gu(ua.scale.linear(),Fc,Rc)};var Oc=Fc.map(function(n){return[n[0].utc,n[1]]}),Yc=[[ua.time.format.utc("%Y"),Ht],[ua.time.format.utc("%B"),function(n){return n.getUTCMonth()}],[ua.time.format.utc("%b %d"),function(n){return n.getUTCDate()!=1}],[ua.time.format.utc("%a %d"),function(n){return n.getUTCDay()&&n.getUTCDate()!=1}],[ua.time.format.utc("%I %p"),function(n){return n.getUTCHours()}],[ua.time.format.utc("%I:%M"),function(n){return n.getUTCMinutes()}],[ua.time.format.utc(":%S"),function(n){return n.getUTCSeconds()}],[ua.time.format.utc(".%L"),function(n){return n.getUTCMilliseconds()}]],Uc=Wu(Yc);return Oc.year=function(n,t){return Pc.domain(n.map(ea)).ticks(t).map(ta)},ua.time.scale.utc=function(){return Gu(ua.scale.linear(),Oc,Uc)},ua.text=st(function(n){return n.responseText}),ua.json=function(n,t){return ht(n,"application/json",ra,t)},ua.html=function(n,t){return ht(n,"text/html",ia,t)},ua.xml=st(function(n){return n.responseXML}),ua}();
/*! URI.js v1.11.2 http://medialize.github.com/URI.js/ */
/* build contains: IPv6.js, punycode.js, SecondLevelDomains.js, URI.js, URITemplate.js */
(function(f,l){"object"===typeof exports?module.exports=l():"function"===typeof define&&define.amd?define(l):f.IPv6=l(f)})(this,function(f){var l=f&&f.IPv6;return{best:function(h){h=h.toLowerCase().split(":");var f=h.length,d=8;""===h[0]&&""===h[1]&&""===h[2]?(h.shift(),h.shift()):""===h[0]&&""===h[1]?h.shift():""===h[f-1]&&""===h[f-2]&&h.pop();f=h.length;-1!==h[f-1].indexOf(".")&&(d=7);var q;for(q=0;q<f&&""!==h[q];q++);if(q<d)for(h.splice(q,1,"0000");h.length<d;)h.splice(q,0,"0000");for(q=0;q<d;q++){for(var f=
h[q].split(""),l=0;3>l;l++)if("0"===f[0]&&1<f.length)f.splice(0,1);else break;h[q]=f.join("")}var f=-1,n=l=0,e=-1,u=!1;for(q=0;q<d;q++)u?"0"===h[q]?n+=1:(u=!1,n>l&&(f=e,l=n)):"0"==h[q]&&(u=!0,e=q,n=1);n>l&&(f=e,l=n);1<l&&h.splice(f,l,"");f=h.length;d="";""===h[0]&&(beststr=":");for(q=0;q<f;q++){d+=h[q];if(q===f-1)break;d+=":"}""===h[f-1]&&(d+=":");return d},noConflict:function(){f.IPv6===this&&(f.IPv6=l);return this}}});
(function(f){function l(a){throw RangeError(c[a]);}function h(a,b){for(var c=a.length;c--;)a[c]=b(a[c]);return a}function p(a){for(var b=[],c=0,d=a.length,k,g;c<d;)k=a.charCodeAt(c++),55296<=k&&56319>=k&&c<d?(g=a.charCodeAt(c++),56320==(g&64512)?b.push(((k&1023)<<10)+(g&1023)+65536):(b.push(k),c--)):b.push(k);return b}function d(a){return h(a,function(a){var b="";65535<a&&(a-=65536,b+=x(a>>>10&1023|55296),a=56320|a&1023);return b+=x(a)}).join("")}function q(a,b,c){var d=0;a=c?B(a/y):a>>1;for(a+=B(a/
b);a>k*m>>1;d+=g)a=B(a/k);return B(d+(k+1)*a/(a+s))}function A(a){var b=[],c=a.length,k,e=0,f=D,h=w,x,u,v,t,s;x=a.lastIndexOf(E);0>x&&(x=0);for(u=0;u<x;++u)128<=a.charCodeAt(u)&&l("not-basic"),b.push(a.charCodeAt(u));for(x=0<x?x+1:0;x<c;){u=e;k=1;for(v=g;;v+=g){x>=c&&l("invalid-input");t=a.charCodeAt(x++);t=10>t-48?t-22:26>t-65?t-65:26>t-97?t-97:g;(t>=g||t>B((C-e)/k))&&l("overflow");e+=t*k;s=v<=h?r:v>=h+m?m:v-h;if(t<s)break;t=g-s;k>B(C/t)&&l("overflow");k*=t}k=b.length+1;h=q(e-u,k,0==u);B(e/k)>C-
f&&l("overflow");f+=B(e/k);e%=k;b.splice(e++,0,f)}return d(b)}function n(a){var b,c,d,k,e,f,h,u,t,v=[],s,z,n;a=p(a);s=a.length;b=D;c=0;e=w;for(f=0;f<s;++f)t=a[f],128>t&&v.push(x(t));for((d=k=v.length)&&v.push(E);d<s;){h=C;for(f=0;f<s;++f)t=a[f],t>=b&&t<h&&(h=t);z=d+1;h-b>B((C-c)/z)&&l("overflow");c+=(h-b)*z;b=h;for(f=0;f<s;++f)if(t=a[f],t<b&&++c>C&&l("overflow"),t==b){u=c;for(h=g;;h+=g){t=h<=e?r:h>=e+m?m:h-e;if(u<t)break;n=u-t;u=g-t;v.push(x(t+n%u+22+75*(26>t+n%u)-0));u=B(n/u)}v.push(x(u+22+75*(26>
u)-0));e=q(c,z,d==k);c=0;++d}++c;++b}return v.join("")}var e="object"==typeof exports&&exports,u="object"==typeof module&&module&&module.exports==e&&module,v="object"==typeof global&&global;if(v.global===v||v.window===v)f=v;var z,C=2147483647,g=36,r=1,m=26,s=38,y=700,w=72,D=128,E="-",F=/^xn--/,a=/[^ -~]/,b=/\x2E|\u3002|\uFF0E|\uFF61/g,c={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},k=g-r,B=
Math.floor,x=String.fromCharCode,t;z={version:"1.2.3",ucs2:{decode:p,encode:d},decode:A,encode:n,toASCII:function(c){return h(c.split(b),function(b){return a.test(b)?"xn--"+n(b):b}).join(".")},toUnicode:function(a){return h(a.split(b),function(a){return F.test(a)?A(a.slice(4).toLowerCase()):a}).join(".")}};if("function"==typeof define&&"object"==typeof define.amd&&define.amd)define(function(){return z});else if(e&&!e.nodeType)if(u)u.exports=z;else for(t in z)z.hasOwnProperty(t)&&(e[t]=z[t]);else f.punycode=
z})(this);
(function(f,l){"object"===typeof exports?module.exports=l():"function"===typeof define&&define.amd?define(l):f.SecondLevelDomains=l(f)})(this,function(f){var l=f&&f.SecondLevelDomains,h=Object.prototype.hasOwnProperty,p={list:{ac:"com|gov|mil|net|org",ae:"ac|co|gov|mil|name|net|org|pro|sch",af:"com|edu|gov|net|org",al:"com|edu|gov|mil|net|org",ao:"co|ed|gv|it|og|pb",ar:"com|edu|gob|gov|int|mil|net|org|tur",at:"ac|co|gv|or",au:"asn|com|csiro|edu|gov|id|net|org",ba:"co|com|edu|gov|mil|net|org|rs|unbi|unmo|unsa|untz|unze",bb:"biz|co|com|edu|gov|info|net|org|store|tv",
bh:"biz|cc|com|edu|gov|info|net|org",bn:"com|edu|gov|net|org",bo:"com|edu|gob|gov|int|mil|net|org|tv",br:"adm|adv|agr|am|arq|art|ato|b|bio|blog|bmd|cim|cng|cnt|com|coop|ecn|edu|eng|esp|etc|eti|far|flog|fm|fnd|fot|fst|g12|ggf|gov|imb|ind|inf|jor|jus|lel|mat|med|mil|mus|net|nom|not|ntr|odo|org|ppg|pro|psc|psi|qsl|rec|slg|srv|tmp|trd|tur|tv|vet|vlog|wiki|zlg",bs:"com|edu|gov|net|org",bz:"du|et|om|ov|rg",ca:"ab|bc|mb|nb|nf|nl|ns|nt|nu|on|pe|qc|sk|yk",ck:"biz|co|edu|gen|gov|info|net|org",cn:"ac|ah|bj|com|cq|edu|fj|gd|gov|gs|gx|gz|ha|hb|he|hi|hl|hn|jl|js|jx|ln|mil|net|nm|nx|org|qh|sc|sd|sh|sn|sx|tj|tw|xj|xz|yn|zj",
co:"com|edu|gov|mil|net|nom|org",cr:"ac|c|co|ed|fi|go|or|sa",cy:"ac|biz|com|ekloges|gov|ltd|name|net|org|parliament|press|pro|tm","do":"art|com|edu|gob|gov|mil|net|org|sld|web",dz:"art|asso|com|edu|gov|net|org|pol",ec:"com|edu|fin|gov|info|med|mil|net|org|pro",eg:"com|edu|eun|gov|mil|name|net|org|sci",er:"com|edu|gov|ind|mil|net|org|rochest|w",es:"com|edu|gob|nom|org",et:"biz|com|edu|gov|info|name|net|org",fj:"ac|biz|com|info|mil|name|net|org|pro",fk:"ac|co|gov|net|nom|org",fr:"asso|com|f|gouv|nom|prd|presse|tm",
gg:"co|net|org",gh:"com|edu|gov|mil|org",gn:"ac|com|gov|net|org",gr:"com|edu|gov|mil|net|org",gt:"com|edu|gob|ind|mil|net|org",gu:"com|edu|gov|net|org",hk:"com|edu|gov|idv|net|org",id:"ac|co|go|mil|net|or|sch|web",il:"ac|co|gov|idf|k12|muni|net|org","in":"ac|co|edu|ernet|firm|gen|gov|i|ind|mil|net|nic|org|res",iq:"com|edu|gov|i|mil|net|org",ir:"ac|co|dnssec|gov|i|id|net|org|sch",it:"edu|gov",je:"co|net|org",jo:"com|edu|gov|mil|name|net|org|sch",jp:"ac|ad|co|ed|go|gr|lg|ne|or",ke:"ac|co|go|info|me|mobi|ne|or|sc",
kh:"com|edu|gov|mil|net|org|per",ki:"biz|com|de|edu|gov|info|mob|net|org|tel",km:"asso|com|coop|edu|gouv|k|medecin|mil|nom|notaires|pharmaciens|presse|tm|veterinaire",kn:"edu|gov|net|org",kr:"ac|busan|chungbuk|chungnam|co|daegu|daejeon|es|gangwon|go|gwangju|gyeongbuk|gyeonggi|gyeongnam|hs|incheon|jeju|jeonbuk|jeonnam|k|kg|mil|ms|ne|or|pe|re|sc|seoul|ulsan",kw:"com|edu|gov|net|org",ky:"com|edu|gov|net|org",kz:"com|edu|gov|mil|net|org",lb:"com|edu|gov|net|org",lk:"assn|com|edu|gov|grp|hotel|int|ltd|net|ngo|org|sch|soc|web",
lr:"com|edu|gov|net|org",lv:"asn|com|conf|edu|gov|id|mil|net|org",ly:"com|edu|gov|id|med|net|org|plc|sch",ma:"ac|co|gov|m|net|org|press",mc:"asso|tm",me:"ac|co|edu|gov|its|net|org|priv",mg:"com|edu|gov|mil|nom|org|prd|tm",mk:"com|edu|gov|inf|name|net|org|pro",ml:"com|edu|gov|net|org|presse",mn:"edu|gov|org",mo:"com|edu|gov|net|org",mt:"com|edu|gov|net|org",mv:"aero|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro",mw:"ac|co|com|coop|edu|gov|int|museum|net|org",mx:"com|edu|gob|net|org",my:"com|edu|gov|mil|name|net|org|sch",
nf:"arts|com|firm|info|net|other|per|rec|store|web",ng:"biz|com|edu|gov|mil|mobi|name|net|org|sch",ni:"ac|co|com|edu|gob|mil|net|nom|org",np:"com|edu|gov|mil|net|org",nr:"biz|com|edu|gov|info|net|org",om:"ac|biz|co|com|edu|gov|med|mil|museum|net|org|pro|sch",pe:"com|edu|gob|mil|net|nom|org|sld",ph:"com|edu|gov|i|mil|net|ngo|org",pk:"biz|com|edu|fam|gob|gok|gon|gop|gos|gov|net|org|web",pl:"art|bialystok|biz|com|edu|gda|gdansk|gorzow|gov|info|katowice|krakow|lodz|lublin|mil|net|ngo|olsztyn|org|poznan|pwr|radom|slupsk|szczecin|torun|warszawa|waw|wroc|wroclaw|zgora",
pr:"ac|biz|com|edu|est|gov|info|isla|name|net|org|pro|prof",ps:"com|edu|gov|net|org|plo|sec",pw:"belau|co|ed|go|ne|or",ro:"arts|com|firm|info|nom|nt|org|rec|store|tm|www",rs:"ac|co|edu|gov|in|org",sb:"com|edu|gov|net|org",sc:"com|edu|gov|net|org",sh:"co|com|edu|gov|net|nom|org",sl:"com|edu|gov|net|org",st:"co|com|consulado|edu|embaixada|gov|mil|net|org|principe|saotome|store",sv:"com|edu|gob|org|red",sz:"ac|co|org",tr:"av|bbs|bel|biz|com|dr|edu|gen|gov|info|k12|name|net|org|pol|tel|tsk|tv|web",tt:"aero|biz|cat|co|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel",
tw:"club|com|ebiz|edu|game|gov|idv|mil|net|org",mu:"ac|co|com|gov|net|or|org",mz:"ac|co|edu|gov|org",na:"co|com",nz:"ac|co|cri|geek|gen|govt|health|iwi|maori|mil|net|org|parliament|school",pa:"abo|ac|com|edu|gob|ing|med|net|nom|org|sld",pt:"com|edu|gov|int|net|nome|org|publ",py:"com|edu|gov|mil|net|org",qa:"com|edu|gov|mil|net|org",re:"asso|com|nom",ru:"ac|adygeya|altai|amur|arkhangelsk|astrakhan|bashkiria|belgorod|bir|bryansk|buryatia|cbg|chel|chelyabinsk|chita|chukotka|chuvashia|com|dagestan|e-burg|edu|gov|grozny|int|irkutsk|ivanovo|izhevsk|jar|joshkar-ola|kalmykia|kaluga|kamchatka|karelia|kazan|kchr|kemerovo|khabarovsk|khakassia|khv|kirov|koenig|komi|kostroma|kranoyarsk|kuban|kurgan|kursk|lipetsk|magadan|mari|mari-el|marine|mil|mordovia|mosreg|msk|murmansk|nalchik|net|nnov|nov|novosibirsk|nsk|omsk|orenburg|org|oryol|penza|perm|pp|pskov|ptz|rnd|ryazan|sakhalin|samara|saratov|simbirsk|smolensk|spb|stavropol|stv|surgut|tambov|tatarstan|tom|tomsk|tsaritsyn|tsk|tula|tuva|tver|tyumen|udm|udmurtia|ulan-ude|vladikavkaz|vladimir|vladivostok|volgograd|vologda|voronezh|vrn|vyatka|yakutia|yamal|yekaterinburg|yuzhno-sakhalinsk",
rw:"ac|co|com|edu|gouv|gov|int|mil|net",sa:"com|edu|gov|med|net|org|pub|sch",sd:"com|edu|gov|info|med|net|org|tv",se:"a|ac|b|bd|c|d|e|f|g|h|i|k|l|m|n|o|org|p|parti|pp|press|r|s|t|tm|u|w|x|y|z",sg:"com|edu|gov|idn|net|org|per",sn:"art|com|edu|gouv|org|perso|univ",sy:"com|edu|gov|mil|net|news|org",th:"ac|co|go|in|mi|net|or",tj:"ac|biz|co|com|edu|go|gov|info|int|mil|name|net|nic|org|test|web",tn:"agrinet|com|defense|edunet|ens|fin|gov|ind|info|intl|mincom|nat|net|org|perso|rnrt|rns|rnu|tourism",tz:"ac|co|go|ne|or",
ua:"biz|cherkassy|chernigov|chernovtsy|ck|cn|co|com|crimea|cv|dn|dnepropetrovsk|donetsk|dp|edu|gov|if|in|ivano-frankivsk|kh|kharkov|kherson|khmelnitskiy|kiev|kirovograd|km|kr|ks|kv|lg|lugansk|lutsk|lviv|me|mk|net|nikolaev|od|odessa|org|pl|poltava|pp|rovno|rv|sebastopol|sumy|te|ternopil|uzhgorod|vinnica|vn|zaporizhzhe|zhitomir|zp|zt",ug:"ac|co|go|ne|or|org|sc",uk:"ac|bl|british-library|co|cym|gov|govt|icnet|jet|lea|ltd|me|mil|mod|national-library-scotland|nel|net|nhs|nic|nls|org|orgn|parliament|plc|police|sch|scot|soc",
us:"dni|fed|isa|kids|nsn",uy:"com|edu|gub|mil|net|org",ve:"co|com|edu|gob|info|mil|net|org|web",vi:"co|com|k12|net|org",vn:"ac|biz|com|edu|gov|health|info|int|name|net|org|pro",ye:"co|com|gov|ltd|me|net|org|plc",yu:"ac|co|edu|gov|org",za:"ac|agric|alt|bourse|city|co|cybernet|db|edu|gov|grondar|iaccess|imt|inca|landesign|law|mil|net|ngo|nis|nom|olivetti|org|pix|school|tm|web",zm:"ac|co|com|edu|gov|net|org|sch"},has_expression:null,is_expression:null,has:function(d){return!!d.match(p.has_expression)},
is:function(d){return!!d.match(p.is_expression)},get:function(d){return(d=d.match(p.has_expression))&&d[1]||null},noConflict:function(){f.SecondLevelDomains===this&&(f.SecondLevelDomains=l);return this},init:function(){var d="",f;for(f in p.list)h.call(p.list,f)&&(d+="|("+("("+p.list[f]+")."+f)+")");p.has_expression=RegExp("\\.("+d.substr(1)+")$","i");p.is_expression=RegExp("^("+d.substr(1)+")$","i")}};p.init();return p});
(function(f,l){"object"===typeof exports?module.exports=l(require("./punycode"),require("./IPv6"),require("./SecondLevelDomains")):"function"===typeof define&&define.amd?define(["./punycode","./IPv6","./SecondLevelDomains"],l):f.URI=l(f.punycode,f.IPv6,f.SecondLevelDomains,f)})(this,function(f,l,h,p){function d(a,b){if(!(this instanceof d))return new d(a,b);void 0===a&&(a="undefined"!==typeof location?location.href+"":"");this.href(a);return void 0!==b?this.absoluteTo(b):this}function q(a){return a.replace(/([.*+?^=!:${}()|[\]\/\\])/g,
"\\$1")}function A(a){return void 0===a?"Undefined":String(Object.prototype.toString.call(a)).slice(8,-1)}function n(a){return"Array"===A(a)}function e(a,b){var c,d;if(n(b)){c=0;for(d=b.length;c<d;c++)if(!e(a,b[c]))return!1;return!0}var g=A(b);c=0;for(d=a.length;c<d;c++)if("RegExp"===g){if("string"===typeof a[c]&&a[c].match(b))return!0}else if(a[c]===b)return!0;return!1}function u(a,b){if(!n(a)||!n(b)||a.length!==b.length)return!1;a.sort();b.sort();for(var c=0,d=a.length;c<d;c++)if(a[c]!==b[c])return!1;
return!0}function v(a){return escape(a)}function z(a){return encodeURIComponent(a).replace(/[!'()*]/g,v).replace(/\*/g,"%2A")}var C=p&&p.URI,g=d.prototype,r=Object.prototype.hasOwnProperty;d._parts=function(){return{protocol:null,username:null,password:null,hostname:null,urn:null,port:null,path:null,query:null,fragment:null,duplicateQueryParameters:d.duplicateQueryParameters,escapeQuerySpace:d.escapeQuerySpace}};d.duplicateQueryParameters=!1;d.escapeQuerySpace=!0;d.protocol_expression=/^[a-z][a-z0-9-+-]*$/i;
d.idn_expression=/[^a-z0-9\.-]/i;d.punycode_expression=/(xn--)/i;d.ip4_expression=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;d.ip6_expression=/^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;
d.find_uri_expression=/\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?\u00ab\u00bb\u201c\u201d\u2018\u2019]))/ig;d.defaultPorts={http:"80",https:"443",ftp:"21",gopher:"70",ws:"80",wss:"443"};d.invalid_hostname_characters=/[^a-zA-Z0-9\.-]/;d.domAttributes={a:"href",blockquote:"cite",link:"href",base:"href",script:"src",form:"action",img:"src",area:"href",
iframe:"src",embed:"src",source:"src",track:"src",input:"src"};d.getDomAttribute=function(a){if(a&&a.nodeName){var b=a.nodeName.toLowerCase();return"input"===b&&"image"!==a.type?void 0:d.domAttributes[b]}};d.encode=z;d.decode=decodeURIComponent;d.iso8859=function(){d.encode=escape;d.decode=unescape};d.unicode=function(){d.encode=z;d.decode=decodeURIComponent};d.characters={pathname:{encode:{expression:/%(24|26|2B|2C|3B|3D|3A|40)/ig,map:{"%24":"$","%26":"&","%2B":"+","%2C":",","%3B":";","%3D":"=",
"%3A":":","%40":"@"}},decode:{expression:/[\/\?#]/g,map:{"/":"%2F","?":"%3F","#":"%23"}}},reserved:{encode:{expression:/%(21|23|24|26|27|28|29|2A|2B|2C|2F|3A|3B|3D|3F|40|5B|5D)/ig,map:{"%3A":":","%2F":"/","%3F":"?","%23":"#","%5B":"[","%5D":"]","%40":"@","%21":"!","%24":"$","%26":"&","%27":"'","%28":"(","%29":")","%2A":"*","%2B":"+","%2C":",","%3B":";","%3D":"="}}}};d.encodeQuery=function(a,b){var c=d.encode(a+"");return b?c.replace(/%20/g,"+"):c};d.decodeQuery=function(a,b){a+="";try{return d.decode(b?
a.replace(/\+/g,"%20"):a)}catch(c){return a}};d.recodePath=function(a){a=(a+"").split("/");for(var b=0,c=a.length;b<c;b++)a[b]=d.encodePathSegment(d.decode(a[b]));return a.join("/")};d.decodePath=function(a){a=(a+"").split("/");for(var b=0,c=a.length;b<c;b++)a[b]=d.decodePathSegment(a[b]);return a.join("/")};var m={encode:"encode",decode:"decode"},s,y=function(a,b){return function(c){return d[b](c+"").replace(d.characters[a][b].expression,function(c){return d.characters[a][b].map[c]})}};for(s in m)d[s+
"PathSegment"]=y("pathname",m[s]);d.encodeReserved=y("reserved","encode");d.parse=function(a,b){var c;b||(b={});c=a.indexOf("#");-1<c&&(b.fragment=a.substring(c+1)||null,a=a.substring(0,c));c=a.indexOf("?");-1<c&&(b.query=a.substring(c+1)||null,a=a.substring(0,c));"//"===a.substring(0,2)?(b.protocol=null,a=a.substring(2),a=d.parseAuthority(a,b)):(c=a.indexOf(":"),-1<c&&(b.protocol=a.substring(0,c)||null,b.protocol&&!b.protocol.match(d.protocol_expression)?b.protocol=void 0:"file"===b.protocol?a=a.substring(c+
3):"//"===a.substring(c+1,c+3)?(a=a.substring(c+3),a=d.parseAuthority(a,b)):(a=a.substring(c+1),b.urn=!0)));b.path=a;return b};d.parseHost=function(a,b){var c=a.indexOf("/"),d;-1===c&&(c=a.length);"["===a.charAt(0)?(d=a.indexOf("]"),b.hostname=a.substring(1,d)||null,b.port=a.substring(d+2,c)||null):a.indexOf(":")!==a.lastIndexOf(":")?(b.hostname=a.substring(0,c)||null,b.port=null):(d=a.substring(0,c).split(":"),b.hostname=d[0]||null,b.port=d[1]||null);b.hostname&&"/"!==a.substring(c).charAt(0)&&(c++,
a="/"+a);return a.substring(c)||"/"};d.parseAuthority=function(a,b){a=d.parseUserinfo(a,b);return d.parseHost(a,b)};d.parseUserinfo=function(a,b){var c=a.indexOf("/"),k=-1<c?a.lastIndexOf("@",c):a.indexOf("@");-1<k&&(-1===c||k<c)?(c=a.substring(0,k).split(":"),b.username=c[0]?d.decode(c[0]):null,c.shift(),b.password=c[0]?d.decode(c.join(":")):null,a=a.substring(k+1)):(b.username=null,b.password=null);return a};d.parseQuery=function(a,b){if(!a)return{};a=a.replace(/&+/g,"&").replace(/^\?*&*|&+$/g,
"");if(!a)return{};for(var c={},k=a.split("&"),g=k.length,e,f,h=0;h<g;h++)e=k[h].split("="),f=d.decodeQuery(e.shift(),b),e=e.length?d.decodeQuery(e.join("="),b):null,c[f]?("string"===typeof c[f]&&(c[f]=[c[f]]),c[f].push(e)):c[f]=e;return c};d.build=function(a){var b="";a.protocol&&(b+=a.protocol+":");a.urn||!b&&!a.hostname||(b+="//");b+=d.buildAuthority(a)||"";"string"===typeof a.path&&("/"!==a.path.charAt(0)&&"string"===typeof a.hostname&&(b+="/"),b+=a.path);"string"===typeof a.query&&a.query&&(b+=
"?"+a.query);"string"===typeof a.fragment&&a.fragment&&(b+="#"+a.fragment);return b};d.buildHost=function(a){var b="";if(a.hostname)d.ip6_expression.test(a.hostname)?b=a.port?b+("["+a.hostname+"]:"+a.port):b+a.hostname:(b+=a.hostname,a.port&&(b+=":"+a.port));else return"";return b};d.buildAuthority=function(a){return d.buildUserinfo(a)+d.buildHost(a)};d.buildUserinfo=function(a){var b="";a.username&&(b+=d.encode(a.username),a.password&&(b+=":"+d.encode(a.password)),b+="@");return b};d.buildQuery=
function(a,b,c){var k="",g,e,f,h;for(e in a)if(r.call(a,e)&&e)if(n(a[e]))for(g={},f=0,h=a[e].length;f<h;f++)void 0!==a[e][f]&&void 0===g[a[e][f]+""]&&(k+="&"+d.buildQueryParameter(e,a[e][f],c),!0!==b&&(g[a[e][f]+""]=!0));else void 0!==a[e]&&(k+="&"+d.buildQueryParameter(e,a[e],c));return k.substring(1)};d.buildQueryParameter=function(a,b,c){return d.encodeQuery(a,c)+(null!==b?"="+d.encodeQuery(b,c):"")};d.addQuery=function(a,b,c){if("object"===typeof b)for(var k in b)r.call(b,k)&&d.addQuery(a,k,b[k]);
else if("string"===typeof b)void 0===a[b]?a[b]=c:("string"===typeof a[b]&&(a[b]=[a[b]]),n(c)||(c=[c]),a[b]=a[b].concat(c));else throw new TypeError("URI.addQuery() accepts an object, string as the name parameter");};d.removeQuery=function(a,b,c){var k;if(n(b))for(c=0,k=b.length;c<k;c++)a[b[c]]=void 0;else if("object"===typeof b)for(k in b)r.call(b,k)&&d.removeQuery(a,k,b[k]);else if("string"===typeof b)if(void 0!==c)if(a[b]===c)a[b]=void 0;else{if(n(a[b])){k=a[b];var g={},e,f;if(n(c))for(e=0,f=c.length;e<
f;e++)g[c[e]]=!0;else g[c]=!0;e=0;for(f=k.length;e<f;e++)void 0!==g[k[e]]&&(k.splice(e,1),f--,e--);a[b]=k}}else a[b]=void 0;else throw new TypeError("URI.addQuery() accepts an object, string as the first parameter");};d.hasQuery=function(a,b,c,k){if("object"===typeof b){for(var g in b)if(r.call(b,g)&&!d.hasQuery(a,g,b[g]))return!1;return!0}if("string"!==typeof b)throw new TypeError("URI.hasQuery() accepts an object, string as the name parameter");switch(A(c)){case "Undefined":return b in a;case "Boolean":return a=
Boolean(n(a[b])?a[b].length:a[b]),c===a;case "Function":return!!c(a[b],b,a);case "Array":return n(a[b])?(k?e:u)(a[b],c):!1;case "RegExp":return n(a[b])?k?e(a[b],c):!1:Boolean(a[b]&&a[b].match(c));case "Number":c=String(c);case "String":return n(a[b])?k?e(a[b],c):!1:a[b]===c;default:throw new TypeError("URI.hasQuery() accepts undefined, boolean, string, number, RegExp, Function as the value parameter");}};d.commonPath=function(a,b){var c=Math.min(a.length,b.length),d;for(d=0;d<c;d++)if(a.charAt(d)!==
b.charAt(d)){d--;break}if(1>d)return a.charAt(0)===b.charAt(0)&&"/"===a.charAt(0)?"/":"";if("/"!==a.charAt(d)||"/"!==b.charAt(d))d=a.substring(0,d).lastIndexOf("/");return a.substring(0,d+1)};d.withinString=function(a,b){return a.replace(d.find_uri_expression,b)};d.ensureValidHostname=function(a){if(a.match(d.invalid_hostname_characters)){if(!f)throw new TypeError("Hostname '"+a+"' contains characters other than [A-Z0-9.-] and Punycode.js is not available");if(f.toASCII(a).match(d.invalid_hostname_characters))throw new TypeError("Hostname '"+
a+"' contains characters other than [A-Z0-9.-]");}};d.noConflict=function(a){if(a)return a={URI:this.noConflict()},URITemplate&&"function"==typeof URITemplate.noConflict&&(a.URITemplate=URITemplate.noConflict()),l&&"function"==typeof l.noConflict&&(a.IPv6=l.noConflict()),SecondLevelDomains&&"function"==typeof SecondLevelDomains.noConflict&&(a.SecondLevelDomains=SecondLevelDomains.noConflict()),a;p.URI===this&&(p.URI=C);return this};g.build=function(a){if(!0===a)this._deferred_build=!0;else if(void 0===
a||this._deferred_build)this._string=d.build(this._parts),this._deferred_build=!1;return this};g.clone=function(){return new d(this)};g.valueOf=g.toString=function(){return this.build(!1)._string};m={protocol:"protocol",username:"username",password:"password",hostname:"hostname",port:"port"};y=function(a){return function(b,c){if(void 0===b)return this._parts[a]||"";this._parts[a]=b||null;this.build(!c);return this}};for(s in m)g[s]=y(m[s]);m={query:"?",fragment:"#"};y=function(a,b){return function(c,
d){if(void 0===c)return this._parts[a]||"";null!==c&&(c+="",c.charAt(0)===b&&(c=c.substring(1)));this._parts[a]=c;this.build(!d);return this}};for(s in m)g[s]=y(s,m[s]);m={search:["?","query"],hash:["#","fragment"]};y=function(a,b){return function(c,d){var e=this[a](c,d);return"string"===typeof e&&e.length?b+e:e}};for(s in m)g[s]=y(m[s][1],m[s][0]);g.pathname=function(a,b){if(void 0===a||!0===a){var c=this._parts.path||(this._parts.hostname?"/":"");return a?d.decodePath(c):c}this._parts.path=a?d.recodePath(a):
"/";this.build(!b);return this};g.path=g.pathname;g.href=function(a,b){var c;if(void 0===a)return this.toString();this._string="";this._parts=d._parts();var k=a instanceof d,e="object"===typeof a&&(a.hostname||a.path||a.pathname);a.nodeName&&(e=d.getDomAttribute(a),a=a[e]||"",e=!1);!k&&(e&&void 0!==a.pathname)&&(a=a.toString());if("string"===typeof a)this._parts=d.parse(a,this._parts);else if(k||e)for(c in k=k?a._parts:a,k)r.call(this._parts,c)&&(this._parts[c]=k[c]);else throw new TypeError("invalid input");
this.build(!b);return this};g.is=function(a){var b=!1,c=!1,k=!1,e=!1,g=!1,f=!1,u=!1,m=!this._parts.urn;this._parts.hostname&&(m=!1,c=d.ip4_expression.test(this._parts.hostname),k=d.ip6_expression.test(this._parts.hostname),b=c||k,g=(e=!b)&&h&&h.has(this._parts.hostname),f=e&&d.idn_expression.test(this._parts.hostname),u=e&&d.punycode_expression.test(this._parts.hostname));switch(a.toLowerCase()){case "relative":return m;case "absolute":return!m;case "domain":case "name":return e;case "sld":return g;
case "ip":return b;case "ip4":case "ipv4":case "inet4":return c;case "ip6":case "ipv6":case "inet6":return k;case "idn":return f;case "url":return!this._parts.urn;case "urn":return!!this._parts.urn;case "punycode":return u}return null};var w=g.protocol,D=g.port,E=g.hostname;g.protocol=function(a,b){if(void 0!==a&&a&&(a=a.replace(/:(\/\/)?$/,""),a.match(/[^a-zA-z0-9\.+-]/)))throw new TypeError("Protocol '"+a+"' contains characters other than [A-Z0-9.+-]");return w.call(this,a,b)};g.scheme=g.protocol;
g.port=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0!==a&&(0===a&&(a=null),a&&(a+="",":"===a.charAt(0)&&(a=a.substring(1)),a.match(/[^0-9]/))))throw new TypeError("Port '"+a+"' contains characters other than [0-9]");return D.call(this,a,b)};g.hostname=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0!==a){var c={};d.parseHost(a,c);a=c.hostname}return E.call(this,a,b)};g.host=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a)return this._parts.hostname?
d.buildHost(this._parts):"";d.parseHost(a,this._parts);this.build(!b);return this};g.authority=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a)return this._parts.hostname?d.buildAuthority(this._parts):"";d.parseAuthority(a,this._parts);this.build(!b);return this};g.userinfo=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a){if(!this._parts.username)return"";var c=d.buildUserinfo(this._parts);return c.substring(0,c.length-1)}"@"!==a[a.length-1]&&(a+=
"@");d.parseUserinfo(a,this._parts);this.build(!b);return this};g.resource=function(a,b){var c;if(void 0===a)return this.path()+this.search()+this.hash();c=d.parse(a);this._parts.path=c.path;this._parts.query=c.query;this._parts.fragment=c.fragment;this.build(!b);return this};g.subdomain=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a){if(!this._parts.hostname||this.is("IP"))return"";var c=this._parts.hostname.length-this.domain().length-1;return this._parts.hostname.substring(0,
c)||""}c=this._parts.hostname.length-this.domain().length;c=this._parts.hostname.substring(0,c);c=RegExp("^"+q(c));a&&"."!==a.charAt(a.length-1)&&(a+=".");a&&d.ensureValidHostname(a);this._parts.hostname=this._parts.hostname.replace(c,a);this.build(!b);return this};g.domain=function(a,b){if(this._parts.urn)return void 0===a?"":this;"boolean"===typeof a&&(b=a,a=void 0);if(void 0===a){if(!this._parts.hostname||this.is("IP"))return"";var c=this._parts.hostname.match(/\./g);if(c&&2>c.length)return this._parts.hostname;
c=this._parts.hostname.length-this.tld(b).length-1;c=this._parts.hostname.lastIndexOf(".",c-1)+1;return this._parts.hostname.substring(c)||""}if(!a)throw new TypeError("cannot set domain empty");d.ensureValidHostname(a);!this._parts.hostname||this.is("IP")?this._parts.hostname=a:(c=RegExp(q(this.domain())+"$"),this._parts.hostname=this._parts.hostname.replace(c,a));this.build(!b);return this};g.tld=function(a,b){if(this._parts.urn)return void 0===a?"":this;"boolean"===typeof a&&(b=a,a=void 0);if(void 0===
a){if(!this._parts.hostname||this.is("IP"))return"";var c=this._parts.hostname.lastIndexOf("."),c=this._parts.hostname.substring(c+1);return!0!==b&&h&&h.list[c.toLowerCase()]?h.get(this._parts.hostname)||c:c}if(a)if(a.match(/[^a-zA-Z0-9-]/))if(h&&h.is(a))c=RegExp(q(this.tld())+"$"),this._parts.hostname=this._parts.hostname.replace(c,a);else throw new TypeError("TLD '"+a+"' contains characters other than [A-Z0-9]");else{if(!this._parts.hostname||this.is("IP"))throw new ReferenceError("cannot set TLD on non-domain host");
c=RegExp(q(this.tld())+"$");this._parts.hostname=this._parts.hostname.replace(c,a)}else throw new TypeError("cannot set TLD empty");this.build(!b);return this};g.directory=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a||!0===a){if(!this._parts.path&&!this._parts.hostname)return"";if("/"===this._parts.path)return"/";var c=this._parts.path.length-this.filename().length-1,c=this._parts.path.substring(0,c)||(this._parts.hostname?"/":"");return a?d.decodePath(c):c}c=this._parts.path.length-
this.filename().length;c=this._parts.path.substring(0,c);c=RegExp("^"+q(c));this.is("relative")||(a||(a="/"),"/"!==a.charAt(0)&&(a="/"+a));a&&"/"!==a.charAt(a.length-1)&&(a+="/");a=d.recodePath(a);this._parts.path=this._parts.path.replace(c,a);this.build(!b);return this};g.filename=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a||!0===a){if(!this._parts.path||"/"===this._parts.path)return"";var c=this._parts.path.lastIndexOf("/"),c=this._parts.path.substring(c+1);return a?
d.decodePathSegment(c):c}c=!1;"/"===a.charAt(0)&&(a=a.substring(1));a.match(/\.?\//)&&(c=!0);var k=RegExp(q(this.filename())+"$");a=d.recodePath(a);this._parts.path=this._parts.path.replace(k,a);c?this.normalizePath(b):this.build(!b);return this};g.suffix=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a||!0===a){if(!this._parts.path||"/"===this._parts.path)return"";var c=this.filename(),k=c.lastIndexOf(".");if(-1===k)return"";c=c.substring(k+1);c=/^[a-z0-9%]+$/i.test(c)?c:
"";return a?d.decodePathSegment(c):c}"."===a.charAt(0)&&(a=a.substring(1));if(c=this.suffix())k=a?RegExp(q(c)+"$"):RegExp(q("."+c)+"$");else{if(!a)return this;this._parts.path+="."+d.recodePath(a)}k&&(a=d.recodePath(a),this._parts.path=this._parts.path.replace(k,a));this.build(!b);return this};g.segment=function(a,b,c){var d=this._parts.urn?":":"/",e=this.path(),g="/"===e.substring(0,1),e=e.split(d);void 0!==a&&"number"!==typeof a&&(c=b,b=a,a=void 0);if(void 0!==a&&"number"!==typeof a)throw Error("Bad segment '"+
a+"', must be 0-based integer");g&&e.shift();0>a&&(a=Math.max(e.length+a,0));if(void 0===b)return void 0===a?e:e[a];if(null===a||void 0===e[a])if(n(b)){e=[];a=0;for(var f=b.length;a<f;a++)if(b[a].length||e.length&&e[e.length-1].length)e.length&&!e[e.length-1].length&&e.pop(),e.push(b[a])}else{if(b||"string"===typeof b)""===e[e.length-1]?e[e.length-1]=b:e.push(b)}else b||"string"===typeof b&&b.length?e[a]=b:e.splice(a,1);g&&e.unshift("");return this.path(e.join(d),c)};g.segmentCoded=function(a,b,c){var e,
g;"number"!==typeof a&&(c=b,b=a,a=void 0);if(void 0===b){a=this.segment(a,b,c);if(n(a))for(e=0,g=a.length;e<g;e++)a[e]=d.decode(a[e]);else a=void 0!==a?d.decode(a):void 0;return a}if(n(b))for(e=0,g=b.length;e<g;e++)b[e]=d.decode(b[e]);else b="string"===typeof b?d.encode(b):b;return this.segment(a,b,c)};var F=g.query;g.query=function(a,b){if(!0===a)return d.parseQuery(this._parts.query,this._parts.escapeQuerySpace);if("function"===typeof a){var c=d.parseQuery(this._parts.query,this._parts.escapeQuerySpace),
e=a.call(this,c);this._parts.query=d.buildQuery(e||c,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace);this.build(!b);return this}return void 0!==a&&"string"!==typeof a?(this._parts.query=d.buildQuery(a,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace),this.build(!b),this):F.call(this,a,b)};g.setQuery=function(a,b,c){var e=d.parseQuery(this._parts.query,this._parts.escapeQuerySpace);if("object"===typeof a)for(var g in a)r.call(a,g)&&(e[g]=a[g]);else if("string"===
typeof a)e[a]=void 0!==b?b:null;else throw new TypeError("URI.addQuery() accepts an object, string as the name parameter");this._parts.query=d.buildQuery(e,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace);"string"!==typeof a&&(c=b);this.build(!c);return this};g.addQuery=function(a,b,c){var e=d.parseQuery(this._parts.query,this._parts.escapeQuerySpace);d.addQuery(e,a,void 0===b?null:b);this._parts.query=d.buildQuery(e,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace);
"string"!==typeof a&&(c=b);this.build(!c);return this};g.removeQuery=function(a,b,c){var e=d.parseQuery(this._parts.query,this._parts.escapeQuerySpace);d.removeQuery(e,a,b);this._parts.query=d.buildQuery(e,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace);"string"!==typeof a&&(c=b);this.build(!c);return this};g.hasQuery=function(a,b,c){var e=d.parseQuery(this._parts.query,this._parts.escapeQuerySpace);return d.hasQuery(e,a,b,c)};g.setSearch=g.setQuery;g.addSearch=g.addQuery;g.removeSearch=
g.removeQuery;g.hasSearch=g.hasQuery;g.normalize=function(){return this._parts.urn?this.normalizeProtocol(!1).normalizeQuery(!1).normalizeFragment(!1).build():this.normalizeProtocol(!1).normalizeHostname(!1).normalizePort(!1).normalizePath(!1).normalizeQuery(!1).normalizeFragment(!1).build()};g.normalizeProtocol=function(a){"string"===typeof this._parts.protocol&&(this._parts.protocol=this._parts.protocol.toLowerCase(),this.build(!a));return this};g.normalizeHostname=function(a){this._parts.hostname&&
(this.is("IDN")&&f?this._parts.hostname=f.toASCII(this._parts.hostname):this.is("IPv6")&&l&&(this._parts.hostname=l.best(this._parts.hostname)),this._parts.hostname=this._parts.hostname.toLowerCase(),this.build(!a));return this};g.normalizePort=function(a){"string"===typeof this._parts.protocol&&this._parts.port===d.defaultPorts[this._parts.protocol]&&(this._parts.port=null,this.build(!a));return this};g.normalizePath=function(a){if(this._parts.urn||!this._parts.path||"/"===this._parts.path)return this;
var b,c=this._parts.path,e,g;"/"!==c.charAt(0)&&(b=!0,c="/"+c);for(c=c.replace(/(\/(\.\/)+)|(\/\.$)/g,"/").replace(/\/{2,}/g,"/");;){e=c.indexOf("/../");if(-1===e)break;else if(0===e){c=c.substring(3);break}g=c.substring(0,e).lastIndexOf("/");-1===g&&(g=e);c=c.substring(0,g)+c.substring(e+3)}b&&this.is("relative")&&(c=c.substring(1));c=d.recodePath(c);this._parts.path=c;this.build(!a);return this};g.normalizePathname=g.normalizePath;g.normalizeQuery=function(a){"string"===typeof this._parts.query&&
(this._parts.query.length?this.query(d.parseQuery(this._parts.query,this._parts.escapeQuerySpace)):this._parts.query=null,this.build(!a));return this};g.normalizeFragment=function(a){this._parts.fragment||(this._parts.fragment=null,this.build(!a));return this};g.normalizeSearch=g.normalizeQuery;g.normalizeHash=g.normalizeFragment;g.iso8859=function(){var a=d.encode,b=d.decode;d.encode=escape;d.decode=decodeURIComponent;this.normalize();d.encode=a;d.decode=b;return this};g.unicode=function(){var a=
d.encode,b=d.decode;d.encode=z;d.decode=unescape;this.normalize();d.encode=a;d.decode=b;return this};g.readable=function(){var a=this.clone();a.username("").password("").normalize();var b="";a._parts.protocol&&(b+=a._parts.protocol+"://");a._parts.hostname&&(a.is("punycode")&&f?(b+=f.toUnicode(a._parts.hostname),a._parts.port&&(b+=":"+a._parts.port)):b+=a.host());a._parts.hostname&&(a._parts.path&&"/"!==a._parts.path.charAt(0))&&(b+="/");b+=a.path(!0);if(a._parts.query){for(var c="",e=0,g=a._parts.query.split("&"),
h=g.length;e<h;e++){var u=(g[e]||"").split("="),c=c+("&"+d.decodeQuery(u[0],this._parts.escapeQuerySpace).replace(/&/g,"%26"));void 0!==u[1]&&(c+="="+d.decodeQuery(u[1],this._parts.escapeQuerySpace).replace(/&/g,"%26"))}b+="?"+c.substring(1)}return b+=d.decodeQuery(a.hash(),!0)};g.absoluteTo=function(a){var b=this.clone(),c=["protocol","username","password","hostname","port"],e,g;if(this._parts.urn)throw Error("URNs do not have any generally defined hierarchical components");a instanceof d||(a=new d(a));
b._parts.protocol||(b._parts.protocol=a._parts.protocol);if(this._parts.hostname)return b;for(e=0;g=c[e];e++)b._parts[g]=a._parts[g];c=["query","path"];for(e=0;g=c[e];e++)!b._parts[g]&&a._parts[g]&&(b._parts[g]=a._parts[g]);"/"!==b.path().charAt(0)&&(a=a.directory(),b._parts.path=(a?a+"/":"")+b._parts.path,b.normalizePath());b.build();return b};g.relativeTo=function(a){var b=this.clone().normalize(),c,e,g,f;if(b._parts.urn)throw Error("URNs do not have any generally defined hierarchical components");
a=(new d(a)).normalize();c=b._parts;e=a._parts;g=b.path();f=a.path();if("/"!==g.charAt(0))throw Error("URI is already relative");if("/"!==f.charAt(0))throw Error("Cannot calculate a URI relative to another relative URI");c.protocol===e.protocol&&(c.protocol=null);if(c.username===e.username&&c.password===e.password&&null===c.protocol&&null===c.username&&null===c.password&&c.hostname===e.hostname&&c.port===e.port)c.hostname=null,c.port=null;else return b.build();if(g===f)return c.path="",b.build();
a=d.commonPath(b.path(),a.path());if(!a)return b.build();e=e.path.substring(a.length).replace(/[^\/]*$/,"").replace(/.*?\//g,"../");c.path=e+c.path.substring(a.length);return b.build()};g.equals=function(a){var b=this.clone();a=new d(a);var c={},e={},g={},f;b.normalize();a.normalize();if(b.toString()===a.toString())return!0;c=b.query();e=a.query();b.query("");a.query("");if(b.toString()!==a.toString()||c.length!==e.length)return!1;c=d.parseQuery(c,this._parts.escapeQuerySpace);e=d.parseQuery(e,this._parts.escapeQuerySpace);
for(f in c)if(r.call(c,f)){if(!n(c[f])){if(c[f]!==e[f])return!1}else if(!u(c[f],e[f]))return!1;g[f]=!0}for(f in e)if(r.call(e,f)&&!g[f])return!1;return!0};g.duplicateQueryParameters=function(a){this._parts.duplicateQueryParameters=!!a;return this};g.escapeQuerySpace=function(a){this._parts.escapeQuerySpace=!!a;return this};return d});
(function(f,l){"object"===typeof exports?module.exports=l(require("./URI")):"function"===typeof define&&define.amd?define(["./URI"],l):f.URITemplate=l(f.URI,f)})(this,function(f,l){function h(d){if(h._cache[d])return h._cache[d];if(!(this instanceof h))return new h(d);this.expression=d;h._cache[d]=this;return this}function p(d){this.data=d;this.cache={}}var d=l&&l.URITemplate,q=Object.prototype.hasOwnProperty,A=h.prototype,n={"":{prefix:"",separator:",",named:!1,empty_name_separator:!1,encode:"encode"},
"+":{prefix:"",separator:",",named:!1,empty_name_separator:!1,encode:"encodeReserved"},"#":{prefix:"#",separator:",",named:!1,empty_name_separator:!1,encode:"encodeReserved"},".":{prefix:".",separator:".",named:!1,empty_name_separator:!1,encode:"encode"},"/":{prefix:"/",separator:"/",named:!1,empty_name_separator:!1,encode:"encode"},";":{prefix:";",separator:";",named:!0,empty_name_separator:!1,encode:"encode"},"?":{prefix:"?",separator:"&",named:!0,empty_name_separator:!0,encode:"encode"},"&":{prefix:"&",
separator:"&",named:!0,empty_name_separator:!0,encode:"encode"}};h._cache={};h.EXPRESSION_PATTERN=/\{([^a-zA-Z0-9%_]?)([^\}]+)(\}|$)/g;h.VARIABLE_PATTERN=/^([^*:]+)((\*)|:(\d+))?$/;h.VARIABLE_NAME_PATTERN=/[^a-zA-Z0-9%_]/;h.expand=function(d,f){var v=n[d.operator],l=v.named?"Named":"Unnamed",q=d.variables,g=[],r,m,s;for(s=0;m=q[s];s++)r=f.get(m.name),r.val.length?g.push(h["expand"+l](r,v,m.explode,m.explode&&v.separator||",",m.maxlength,m.name)):r.type&&g.push("");return g.length?v.prefix+g.join(v.separator):
""};h.expandNamed=function(d,h,v,l,q,g){var r="",m=h.encode;h=h.empty_name_separator;var s=!d[m].length,n=2===d.type?"":f[m](g),w,p,A;p=0;for(A=d.val.length;p<A;p++)q?(w=f[m](d.val[p][1].substring(0,q)),2===d.type&&(n=f[m](d.val[p][0].substring(0,q)))):s?(w=f[m](d.val[p][1]),2===d.type?(n=f[m](d.val[p][0]),d[m].push([n,w])):d[m].push([void 0,w])):(w=d[m][p][1],2===d.type&&(n=d[m][p][0])),r&&(r+=l),v?r+=n+(h||w?"=":"")+w:(p||(r+=f[m](g)+(h||w?"=":"")),2===d.type&&(r+=n+","),r+=w);return r};h.expandUnnamed=
function(d,h,l,q,n,g){g="";var r=h.encode;h=h.empty_name_separator;var m=!d[r].length,s,p,w,A;w=0;for(A=d.val.length;w<A;w++)n?p=f[r](d.val[w][1].substring(0,n)):m?(p=f[r](d.val[w][1]),d[r].push([2===d.type?f[r](d.val[w][0]):void 0,p])):p=d[r][w][1],g&&(g+=q),2===d.type&&(s=n?f[r](d.val[w][0].substring(0,n)):d[r][w][0],g+=s,g=l?g+(h||p?"=":""):g+","),g+=p;return g};h.noConflict=function(){l.URITemplate===h&&(l.URITemplate=d);return h};A.expand=function(d){var f="";this.parts&&this.parts.length||this.parse();
d instanceof p||(d=new p(d));for(var l=0,n=this.parts.length;l<n;l++)f+="string"===typeof this.parts[l]?this.parts[l]:h.expand(this.parts[l],d);return f};A.parse=function(){var d=this.expression,f=h.EXPRESSION_PATTERN,l=h.VARIABLE_PATTERN,q=h.VARIABLE_NAME_PATTERN,p=[],g=0,r,m,s;for(f.lastIndex=0;;){m=f.exec(d);if(null===m){p.push(d.substring(g));break}else p.push(d.substring(g,m.index)),g=m.index+m[0].length;if(!n[m[1]])throw Error('Unknown Operator "'+m[1]+'" in "'+m[0]+'"');if(!m[3])throw Error('Unclosed Expression "'+
m[0]+'"');r=m[2].split(",");for(var y=0,w=r.length;y<w;y++){s=r[y].match(l);if(null===s)throw Error('Invalid Variable "'+r[y]+'" in "'+m[0]+'"');if(s[1].match(q))throw Error('Invalid Variable Name "'+s[1]+'" in "'+m[0]+'"');r[y]={name:s[1],explode:!!s[3],maxlength:s[4]&&parseInt(s[4],10)}}if(!r.length)throw Error('Expression Missing Variable(s) "'+m[0]+'"');p.push({expression:m[0],operator:m[1],variables:r})}p.length||p.push(d);this.parts=p;return this};p.prototype.get=function(d){var f=this.data,
h={type:0,val:[],encode:[],encodeReserved:[]},l;if(void 0!==this.cache[d])return this.cache[d];this.cache[d]=h;f="[object Function]"===String(Object.prototype.toString.call(f))?f(d):"[object Function]"===String(Object.prototype.toString.call(f[d]))?f[d](d):f[d];if(void 0!==f&&null!==f)if("[object Array]"===String(Object.prototype.toString.call(f))){l=0;for(d=f.length;l<d;l++)void 0!==f[l]&&null!==f[l]&&h.val.push([void 0,String(f[l])]);h.val.length&&(h.type=3)}else if("[object Object]"===String(Object.prototype.toString.call(f))){for(l in f)q.call(f,
l)&&(void 0!==f[l]&&null!==f[l])&&h.val.push([l,String(f[l])]);h.val.length&&(h.type=2)}else h.type=1,h.val.push([void 0,String(f)]);return h};f.expand=function(d,l){var n=(new h(d)).expand(l);return new f(n)};return h});

window.Mirador = window.Mirador || function(config) {

  if (Mirador.DEFAULT_SETTINGS.workspaceAutoSave) {

    // retrieve any saved settings or configuration options from
    // the localstorage database, merging them with the current
    // settings and configuration.
    //
    // acts as a "guard" function in the initialisation process.
    Mirador.settingsLoader = new Mirador.SettingsLoader(config);

    config = Mirador.settingsLoader.config;
  }

  // Render viewer using loaded manifests data
  Mirador.viewer = new Mirador.Viewer(config);

  // Fetch manifest, parse and render widgets from config
  Mirador.manifests = new Mirador.ManifestsLoader(config);
};

(function($) {

  /**
   * Default values for settings
   */
  $.DEFAULT_SETTINGS = {

    'workspaceAutoSave': true,

    'showNoImageChoiceOption': true,

    'initialLayout': 'stackAll3Columns',

    'availableViews': {
      'imageView': {
        'label': 'Image View'
      },
      'scrollView': {
        'label': 'Scroll View'
      },
      'thumbnailsView': {
        'label': 'Thumbnails View'
      },
      'metadataView': {
        'label': 'Metadata View'
      }
    },

    'maxWidgetsLimit': 10,

    // main (top) menu
    'mainMenu': {
      'height': 25,
      'width': '100%'
    },

    // status bar
    'statusBar': {
      'show': true,
      'height': 25,
      'width': '100%'
    },

    // scale
    'scale': {
      'height': 60,
      'maxWidth': 230
    },

    // widget
    'widget': {
      'height': 400,
      'width': 400
    },

    // widget toolbar
    'widgetToolbar': {
      'height': 25
    },

    // widget status bar
    'widgetStatusBar': {
      'height': 26
    },

    // image view
    'imageView': {
      'height': 400,
      'width': 350,
      'annotationsList': {
        'display':true,
        'width': 200

      }
    },

    // scroll view
    'scrollView': {
      'height': 400,
      'imageLabelHeight': 25,
      'toolbarHeight': 25,
      'width': 600
    },

    // thumbnails view
    'thumbnailsView': {
      'height': 400,
      'thumbsMaxHeight': 150,
      'thumbsMinHeight': 50,
      'thumbsDefaultZoom': 0.5,
      'width': 600
    },

    // metadata view
    'metadataView': {
      'height': 400,
      'width': 600
    },

    // parameters of saving system
    'saveController': {
      'saveInterval': 8000 // number of milliseconds between automatic saves.
    },

    // linked image views configuration
    'lockController' : {
      'lockProfile' : 'lazyZoom',
      'notifyMaxMin' : false
    }
  };


  $.isValidView = function(view) {
    return (typeof $.DEFAULT_SETTINGS.availableViews.view === 'undefined');
  };


  $.inArrayToBoolean = function(index) {
    return index === -1 ? false : true;
  };


  $.castToArray = function(obj) {
    return (typeof obj === 'string') ? [obj] : obj;
  };


  $.cls = function(name) {
    return '.' + name;
  };


  // Removes duplicates from an array.
  $.getUniques = function(arr) {
    var temp = {},
    unique = [];

    for (var i = 0; i < arr.length; i++) {
      temp[arr[i]] = true;
    }

    for (var k in temp) {
      unique.push(k);
    }

    return unique;
  };


  $.getTitlePrefix = function(details) {
    var prefixes = [];

    if (details && details.label) {
      prefixes.push(details.label);
    }

    return prefixes.join(' / ');
  };


  $.trimString = function(str) {
    return str.replace(/^\s+|\s+$/g, '');
  };


  $.trimStringBy = function(str, length) {
    if (str.length > length) {
      str = str.substr(0, length) + '...';
    }

    return str;
  };


  // Base code from https://github.com/padolsey/prettyprint.js. Modified to fit Mirador needs
  $.stringifyObject = function(obj, nestingMargin) {
    var type = typeof obj,
        str,
        first = true,
        increment = 15,
        delimiter = '<br/>';

    if (typeof nestingMargin === 'undefined') {
      nestingMargin = 0;
    }

    if (obj instanceof Array) {
      str = '[ ';

      $.each(obj, function (i, item) {
        str += (i === 0 ? '' : ', ') + $.stringifyObject(item, nestingMargin + increment);
      });

      return str + ' ]';
    }

    if (typeof obj === 'object') {
      str = '<div style="margin-left:' +  nestingMargin + 'px">';

      for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
          str += (first ? '' : delimiter) + i + ': ' + $.stringifyObject(obj[i], nestingMargin + increment);
          first = false;
        }
      }

      return str + '</div>';
    }

    if (type === 'regexp') {
      return '/' + obj.source + '/';
    }

    return obj.toString();
  };


  $.getJsonFromUrl = function(url, async) {
    var json;

    jQuery.ajax({
      url: url,
      dataType: 'json',
      async: async || false,

      success: function(data) {
        json = data;
      },

      error: function(xhr, status, error) {
        console.log(xhr, status, error);
      }
    });

    return json;
  };


  $.getViewLabel = function(type) {
    var view = $.DEFAULT_SETTINGS.availableViews[type];

    return (view && view.label) ? view.label : type;
  };


  $.extractLabelFromAttribute = function(attr) {
    var label = attr;

    label = label.replace(/^@/, '');
    label = label.replace(/([A-Z])/g, ' $1');
    label = label.replace(/\s{2,}/g, ' ');
    label = label.replace(/\w\S*/g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });

    return label;
  };


  $.toString = function(obj, delimiter) {
    var str = '',
    joint = delimiter || ' ';

    if (jQuery.type(obj) === 'string') {
      str = obj;
    }

    if (jQuery.isArray(obj)) {
      str = obj.join(joint);
    }

    return str;
  };


  /* --------------------------------------------------------------------------
     Methods related to manifest data
     -------------------------------------------------------------------------- */

  $.getManifestIdByUri = function(uri) {
    var id;

    id = jQuery.map($.manifests, function(manifest, manifestId) {
      if (uri === manifest.uri) {
        return manifestId;
      }
    });

    return id[0] || id;
  };


  $.getMetadataByManifestId = function(manifestId) {
    return $.manifests[manifestId].metadata;
  };


  $.getImagesListByManifestId = function(manifestId) {
    return $.manifests[manifestId].sequences[0].imagesList;
  };


  $.getCollectionTitle = function(metadata) {
    return metadata.details.label || '';
  };


  $.getImageTitlesAndIds = function(images) {
    var data = [];

    jQuery.each(images, function(index, image) {
      data.push({
        'title': image.title,
        'id': image.id
      });
    });

    return data;
  };


  $.genUUID = function() {
    var idNum = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16|0, v = c == 'x' ? r : (r&0x3|0x8);
      return v.toString(16);
    });

    return "uuid-" + idNum;
  };


  $.throttle = function(func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;

    if (typeof options !== 'undefined') {
      options = {};
    }

    var later = function() {
      previous = options.leading === false ? 0 : new Date();
      timeout = null;
      result = func.apply(context, args);
    };
    return function() {
      var now = new Date();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0) {
        clearTimeout(timeout);
        timeout = null;
        previous = now;
        result = func.apply(context, args);
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };


  $.debounce = function(func, wait, immediate) {
    var timeout, args, context, timestamp, result;
    return function() {
      context = this;
      args = arguments;
      timestamp = new Date();
      var later = function() {
        var last = (new Date()) - timestamp;
        if (last < wait) {
          timeout = setTimeout(later, wait - last);
        } else {
          timeout = null;
          if (!immediate) result = func.apply(context, args);
        }
      };
      var callNow = immediate && !timeout;
      if (!timeout) {
        timeout = setTimeout(later, wait);
      }
      if (callNow) result = func.apply(context, args);
      return result;
    };
  };
  
  $.parseRegion  = function(url) {
    url = new URI(url);
    var regionString = url.hash(); 
    regionArray = regionString.split('=')[1].split(',');
    return regionArray;
  };

  $.getOsdFrame = function(region, currentImg) {
    var imgWidth = currentImg.width,
    imgHeight = currentImg.height,
    canvasWidth = currentImg.canvasWidth,
    canvasHeight = currentImg.canvasHeight,
    widthNormaliser = imgWidth/canvasWidth,
    heightNormaliser = imgHeight/canvasHeight,
    rectX = (region[0]*widthNormaliser)/imgWidth,
    rectY = (region[1]*heightNormaliser)/imgWidth,
    rectW = (region[2]*widthNormaliser)/imgWidth,
    rectH = (region[3]*heightNormaliser)/imgWidth;

    var osdFrame = new OpenSeadragon.Rect(rectX,rectY,rectW,rectH);

    return osdFrame;
  };

}(Mirador));


/* --------------------------------------------------------------------------
   jQuery extensions
   -------------------------------------------------------------------------- */

// for scroll view
// source: http://stackoverflow.com/questions/14035083/jquery-bind-event-on-scroll-stops
jQuery.fn.scrollStop = function(callback) {
  $(this).scroll(function() {
    var self  = this,
    $this = $(self);

    if ($this.data('scrollTimeout')) {
      clearTimeout($this.data('scrollTimeout'));
    }

    $this.data('scrollTimeout', setTimeout(callback, 250, self));
  });
};

(function($) {

  $.ManifestsLoader = function(config) {
    return this.getManifestsData(config);
  };


  $.ManifestsLoader.prototype = {

    getManifestsData: function(config) {
      var _this = this,
      manifests = {},
      loadingOrder = [],
      arrDfds = [];

      jQuery.each(config.data, function(index, collection) {
        if (_this.hasWidgets(collection)) {
          loadingOrder.unshift(index);
        } else {
          loadingOrder.push(index);
        }
      });

      jQuery.each(loadingOrder, function(index, order) {
        var manifestId = 'manifest-' + ($.genUUID()),
            collection = config.data[order],
            dfd = jQuery.Deferred(),
            manifest;

        if (!jQuery.isEmptyObject(collection)) {

          manifest = new $.Manifest(collection.manifestUri, dfd);
          arrDfds.push(dfd);

          dfd.done(function(loaded) {
            if (loaded) {
              manifests[manifestId] = {
                uri:        $.trimString(collection.manifestUri),
                metadata:   manifest.metadata,
                sequences:  manifest.sequences,
                location:   collection.location || '-'
              };

              if (_this.hasWidgets(collection)) {
                $.viewer.renderWidgetsForCollection(collection);
              }

              $.viewer.addStatusBarMessage('left', 'Loaded ' + collection.manifestUri, 600);
            }
          });
        }

      });

      jQuery.when.apply(null, arrDfds).done(function() {
        var message = 'Loaded ' + $.viewer.numManifestsLoaded + ' of ' + (arrDfds.length) + ' manifests to viewer';

        $.viewer.updateLoadWindowContent();
        $.viewer.addStatusBarMessage('left', message, 1000, true);

      }).done(function() {
        if ($.viewer.workspaceAutoSave) {
          $.viewer.saveController.save();
        }
      });

      return manifests;
    },


    hasWidgets: function(collection) {
      return (
        typeof collection.widgets !== 'undefined' &&
        collection.widgets &&
        !jQuery.isEmptyObject(collection.widgets) &&
        collection.widgets.length > 0
      );
    }

  };

}(Mirador));

(function($) {

  $.Viewer = function(options) {

    jQuery.extend(true, this, {
      id:                     options.id,
      hash:                   options.id,
      data:                   null,
      element:                null,
      canvas:                 null,
      initialLayout:          $.DEFAULT_SETTINGS.initialLayout || 'cascade',
      layout:                 null,
      mainMenu:               null,
      numManifestsLoaded:     0,
      showStatusBar:          $.DEFAULT_SETTINGS.statusBar.show,
      statusBar:              null,
      widgets:                [],
      collectionsListingCls:  'mirador-listing-collections',
      mainMenuLoadWindowCls:  '.mirador-main-menu .load-window',
      workspaceAutoSave:      $.DEFAULT_SETTINGS.workspaceAutoSave,

      lastWidgetPosition: {
        x: 'left',
        y: 'top',
        offset: 0
      }

    }, $.DEFAULT_SETTINGS, options);

    this.element = this.element || jQuery('#' + this.id);

    if (this.data) {
      this.create();
    }

    // Add event coordinator, "lockController" to Mirador Namespace. This object
    // manages zoom events on imageView viewObjects. Must be loaded asynchronously to allow
    // viewport objects to finish being constructed from ajax requests.
    this.lockController = new $.LockController();

    if (this.workspaceAutoSave) {
      this.saveController = new $.SaveController();
    }
  };


  $.Viewer.prototype = {

    create: function() {
      // add main menu
      this.mainMenu = new $.MainMenu({ appendTo: this.element });

      // add viewer area
      this.canvas =
        jQuery('<div/>')
      .addClass('mirador-viewer')
      .appendTo(this.element);

      this.canvas.height(this.canvas.height() - this.mainMenu.element.outerHeight(true));

      // add status bar
      if (this.showStatusBar) {
        this.statusBar = new $.StatusBar({ appendTo: this.element });
        this.canvas.height(this.canvas.height() - this.statusBar.element.outerHeight(true));
      }

      // add layout configuration
      this.layout = new $.Layout();

    },


    renderWidgetsForCollection: function(collection) {
      var _this = this;

      jQuery.each(collection.widgets, function(index, config) {
        if (!jQuery.isEmptyObject(config) && $.isValidView(config.type)) {
          config.manifestId = $.getManifestIdByUri(collection.manifestUri);
          _this.addWidget(config);
        }
      });

      if (typeof this.initialLayout !== 'undefined') {
        $.viewer.layout.applyLayout(this.initialLayout);
      }
    },


    addWidget: function(config) {
      jQuery.extend(true, config, {
        appendTo: this.canvas,
        id: 'mirador-widget-' + ($.genUUID()),
        position: {
          my: this.getWidgetPosition()
        }
      });

      this.widgets.push(new $.Widget(config));
    },


    removeWidget: function(id) {
      jQuery.each($.viewer.widgets, function(index, widget) {

        console.log(widget);

        if (widget && widget.id === id) {
          if (widget.type === 'imageView') {
            $.viewer.lockController.removeLockedView(widget.id);
            console.log(widget.type);
            console.log('removed image view');
          }
          $.viewer.widgets.splice(index, 1);
        }
      });
    },


    loadImageView: function(manifestId, imageId, openAt) {
      $.viewer.addWidget({
        height:     $.DEFAULT_SETTINGS.imageView.height,
        manifestId: manifestId,
        openAt:     openAt,
        imageId:    imageId,
        type:       'imageView',
        width:      $.DEFAULT_SETTINGS.imageView.width
      });
    },


    loadScrollView: function(manifestId) {
      $.viewer.addWidget({
        height:     $.DEFAULT_SETTINGS.scrollView.height,
        manifestId: manifestId,
        type:       'scrollView',
        width:      $.DEFAULT_SETTINGS.scrollView.width
      });
    },


    loadThumbnailsView: function(manifestId) {
      $.viewer.addWidget({
        height:     $.DEFAULT_SETTINGS.thumbnailsView.height,
        manifestId: manifestId,
        type:       'thumbnailsView',
        width:      $.DEFAULT_SETTINGS.thumbnailsView.width
      });
    },


    loadMetadataView: function(manifestId) {
      $.viewer.addWidget({
        height:     $.DEFAULT_SETTINGS.metadataView.height,
        manifestId: manifestId,
        type:       'metadataView',
        width:      $.DEFAULT_SETTINGS.metadataView.width
      });
    },


    getWidgetPosition: function() {
      var offsetIncrement = 25,
      positionX = this.lastWidgetPosition.x + '+' + this.lastWidgetPosition.offset,
      positionY = this.lastWidgetPosition.y + '+' + this.lastWidgetPosition.offset;

      this.lastWidgetPosition.offset += offsetIncrement;

      return positionX + ' ' + positionY;
    },


    updateLoadWindowContent: function() {
      var tplData = {
        cssCls:  this.collectionsListingCls,
        collections: []
      },
      groupedList = this.arrangeCollectionsFromManifests(),
      locations = [];

      // sort by location name
      jQuery.each(groupedList, function(location, list) {
        locations.push(location);
      });

      jQuery.each(locations.sort(), function(index, location) {
        tplData.collections.push({
          location: location,
          list: groupedList[location]
        });
      });

      $.loadWindowContent = $.Templates.mainMenu.loadWindowContent(tplData);

      jQuery(this.mainMenuLoadWindowCls).tooltipster('update', $.loadWindowContent);
    },


    arrangeCollectionsFromManifests: function() {
      var groupedList = {};

      if (!jQuery.isEmptyObject($.manifests)) {
        jQuery.each($.manifests, function(manifestId, manifest) {
          var location = manifest.location;

          if (typeof groupedList[location] === 'undefined') {
            groupedList[location] = [];
          }

          groupedList[location].push({
            manifestId:       manifestId,
            collectionTitle:  $.trimStringBy($.getCollectionTitle(manifest.metadata), 60),
            imageData:        $.getImageTitlesAndIds(manifest.sequences[0].imagesList)
          });
        });
      }

      // sort by collection title
      jQuery.each(groupedList, function(location, list) {
        groupedList[location] = groupedList[location].sort(function(a, b) {
          return a.collectionTitle.localeCompare(b.collectionTitle);
        });
      });

      return groupedList;
    },


    addStatusBarMessage: function(position, content, delay, hide) {
      var elTextFrame = this.statusBar.element.find('.mirador-status-bar-msg-' + position);

      if (isNaN(delay)) {
        delay = 0;
      }

      if (hide && typeof hide !== 'boolean') {
        hide = true;
      }

      elTextFrame.text(content);

      if (hide) {
        setTimeout(function() { elTextFrame.fadeOut(); }, delay);
      }

    }

  };

}(Mirador));

(function($){

  $.Templates = {

    /* Main menu
    ---------------------------------------------------------------------------- */
    mainMenu: {
      // template for rendering main menu at the top
      menuItems: Handlebars.compile([
        '<ul class="{{mainMenuCls}}">',
          '<li>',
            '<a href="javascript:;" class="bookmark-workspace" title="Bookmark Workspace">',
              '<span class="icon-bookmark-workspace"></span>Bookmark Workspace',
            '</a>',
          '</li>',
          '<li>',
            '<a href="javascript:;" class="load-window" title="Load Window">',
              '<span class="icon-load-window"></span>Load Window',
            '</a>',
          '</li>',
          '<li>',
            '<a href="javascript:;" class="window-options" title="Window Options">',
              '<span class="icon-window-options"></span>Window Options',
            '</a>',
          '</li>',
          '<li>',
            '<a href="javascript:;" class="clear-local-storage" title="Clear saved workspace and reload">',
              '<span class="icon-clear-local-storage"></span>',
            '</a>',
          '</li>',

        '</ul>'
      ].join('')),

      // template for rendering window options menu
      windowOptionsMenu: Handlebars.compile([
        '<ul class="{{windowOptionsMenuCls}}">',
          '<li><a class="cascade-all" href="javascript:;">Cascade All</a></li>',
          '<li><a class="tile-all-vertically" href="javascript:;">Tile All Vertically</li>',
          '<li><a class="tile-all-horizontally" href="javascript:;">Tile All Horizontally</a></li>',
          '<li><a class="stack-all-vertically-2-cols" href="javascript:;">Stack Vertically (2 columns)</a></li>',
          '<li><a class="stack-all-vertically-3-cols" href="javascript:;">Stack Vertically (3 columns)</a></li>',
          '<li class="ui-state-disabled"><a href="javascript:;">Open Recent</a></li>',
          '<li><a class="close-all" href="javascript:;">Close All</a></li>',
        '</ul>'
      ].join('')),

      // template for rendering load window's manuscripts' select box and images list
      loadWindowContent: Handlebars.compile([
        '<fieldset class="{{cssCls}}">',
          '<legend>Available/Loaded manuscripts</legend>',
          '<select>',
            '{{#collections}}',
              '<optgroup label="{{location}}">',
                '{{#list}}',
                  '<option data-manifest-id="{{manifestId}}">{{collectionTitle}}</option>',
                '{{/list}}',
              '</optgroup>',
            '{{/collections}}',
          '</select><br/>',
          '<a href="javascript:;" class="mirador-btn mirador-icon-thumbnails-view"></a>',
          '<a href="javascript:;" class="mirador-btn mirador-icon-scroll-view"></a>',
          '<a href="javascript:;" class="mirador-btn mirador-icon-metadata-view"></a>',
          '{{#collections}}',
            '{{#list}}',
              '<ul class="ul-{{manifestId}}">',
                '{{#imageData}}',
                  '<li><a href="javascript:;" data-image-id="{{id}}" data-manifest-id="{{../manifestId}}">{{trimTitlePrefix title}}</a></li>',
                '{{/imageData}}',
              '</ul>',
            '{{/list}}',
          '{{/collections}}',
        '</fieldset>'
      ].join('')),

      // template for rendering clear local storage dialog
      clearLocalStorage: Handlebars.compile([
        '<div class="{{cssCls}}">',
          '<p>Do you want to delete your saved workspace, and reload the viewer?</p>',
          '<p>',
            '<a class="btn-cancel" href="javascript: jQuery(\'{{selectorClearLocalStorage}}\').tooltipster(\'hide\');">Cancel</a>',
            '<a class="btn-clear" href="javascript: localStorage.clear(); location.reload();">Clear</a>',
          '</p>',
        '</div>'
      ].join(''))

    },

    /* Status bar
    ---------------------------------------------------------------------------- */
    statusBar: {
      textFrames: Handlebars.compile([
        '<div class="mirador-status-bar-msg-left"></div>',
        '<div class="mirador-status-bar-msg-right"></div>'
      ].join(''))
    },


    /* Widget
    ---------------------------------------------------------------------------- */
    widget: {
      // template for rendering widget with placeholders for toolbar and status bar
      initialLayout: Handlebars.compile([
        '<div class="{{widgetToolbarCls}}"></div>',
        '<div class="{{widgetContentCls}}">Loading...</div>',
        '<div class="{{widgetStatusBarCls}}"></div>'
      ].join(''))
    },


    /* Image view
    ---------------------------------------------------------------------------- */
    imageView: {
      // template for rendering tool bar with nav links
      navToolbar: Handlebars.compile([
        '<div class="{{navToolbarCls}}">',
          '<a href="javascript:;" class="mirador-btn mirador-icon-annotations"><i class="icon-comments"></i></a>',
          '<a href="javascript:;" class="mirador-btn mirador-icon-choices"></a>',
          '<a href="javascript:;" class="mirador-btn mirador-icon-metadata-view"></a>',
          '<a href="javascript:;" class="mirador-btn mirador-icon-scroll-view"></a>',
          '<a href="javascript:;" class="mirador-btn mirador-icon-thumbnails-view"></a>',
          '<a href="javascript:;" class="mirador-btn mirador-icon-previous"></a>',
          '<a href="javascript:;" class="mirador-btn mirador-icon-next"></a>',
        '</div>'
      ].join('')),

      statusbar: Handlebars.compile([
        '<div class="{{statusbarCls}}">',
          '<a href="javascript:;" class="mirador-btn mirador-icon-lock"></a>',
          '<div class="mirador-image-dimensions">',
          '<span class="noDimensionsWarning">No Dimensions Given</span>',
            '<textarea rows="1" class="mirador-image-view-physical-dimensions x">{{width}}</textarea>',
            '<span>✕</span>',
            '<textarea rows="1" class="mirador-image-view-physical-dimensions y">{{height}}</textarea>',
            '<span class="units">mm',
              '<select class="unit-selector">',
                '<option value="mm">millimeters</option>',
                '<option value="cm">centimeters</option>',
                '<option value="m">meters</option>',
              '</select>',
            '</span>',
          '</div>',
        '</div>'
      ].join('')),
      
      annotationPanel: Handlebars.compile([
        '<div class="annotationListPanel">',
        '<div class="resizeGrip"></div>',
        '{{> annotationStats}}',
          '<ul class="annotationList">',
          '{{#each annotations}}',
            '{{> annotationListing}}',
          '{{/each}}',
          '</ul>',
        '</div>'
      ].join('')),
      
      annotationStats: (function() {
        var templateString = 
        ['<div class="annotationPanelHeader">',
          '<h4>Annotation List (<span class="annotationsTotal">{{annotationCount}}</span>)</h4>',
          '<div class="annoSearch">',
          '<select id="annotationTypeSelector" name="annotationTypes">',
          '<option value="All">All (<span class="annotationCount">{{annotationCount}}</span>)</option>',
          '<option value="Image Annotations">Image Annotations (<span class="imageAnnotationCount">{{imageAnnotationCount}}</span>)</option>',
          '<option value="text annotations">text annotations (<span class="textAnnotationCount">{{textAnnotationCount}}</span>)</option>',
          '</select>',
          '</div>',
        '</div>'
        ].join('');
        Handlebars.registerPartial('annotationStats', templateString);
        return Handlebars.compile(templateString);
      })(),
      
      noAnnotationMessage: (function() {
        var templateString = 
        ['<div class="annotationPanelHeader">',
            '<h4>No Annotations Provided</h4>',
         '</div>'
        ].join('');
        Handlebars.registerPartial('annotationStats', templateString);
        return Handlebars.compile(templateString);
      })(),

      annotationListing: (function() {
        var templateString = 
          ['<li id="listing_{{id}}" class="annotationListing">',
              '{{#if title}}',
              '<h3>{{title}}</h3>',
              '{{/if}}',
              '<p>{{content}}</p>',
          '</li>'
        ].join('');
        Handlebars.registerPartial('annotationListing', templateString);
        return Handlebars.compile(templateString);
      })(),

      annotationDetail: Handlebars.compile([
        '<div class="annotationDetails">',
          '<div class="annotationNumber">{{annotationNumber}}</div>',
          '<a class="annotationDetailToggle mirador-icon-annotationDetail-toggle" title="Hide this detail panel."><i class="icon-eye-close"></i></a>',
          '<p>{{body}}</p>',
        '</div>'
      ].join('')),
      
      annotationDetailToggle: Handlebars.compile([
        '<div class="displayBottomPanelButton">',
          '<a class="annotationDetailToggle mirador-icon-annotationDetail-toggle" title="Display annotation details in bottom panel."><i class="icon-eye-open"></i></a>',
        '</div>'
      ].join('')),

      imageChoices: Handlebars.compile([
        '<ul class="mirador-image-view-choices">',
          '{{#choicesInfo}}',
            '<li><a href="javascript:;" class="mirador-image-view-choice" data-choice="{{label}}" data-image-url="{{imageUrl}}">{{label}}</a></li>',
          '{{/choicesInfo}}',
        '</ul>'
      ].join(''))

    },


    /* Scroll view
    ---------------------------------------------------------------------------- */
    scrollView: {
      // template for rendering frame for hosting images
      imagesFrame: Handlebars.compile([
        '<div class="{{frameCls}}"></div>'
      ].join('')),

      // template for rendering images in scroll view
      listImages: Handlebars.compile([
        '{{#images}}',
          '<div id="{{id}}" class="item">',
            '<div class="header" style="height: {{../toolbarHeight}}px">',
              '<div id="{{id}}-osd-toolbar" class="toolbar">',
                '<a href="javascript:;" class="enable-zoom">Enable zoom</a>',
              '</div>',
            '</div>',
            '<div id="{{id}}-osd" class="image-instance">',
              '<img class="static-thumb">',
            '</div>',
            '<div class="title">{{title}}</div>',
          '</div>',
        '{{/images}}'
      ].join('')),

      // template for rendering tool bar with nav links
      navToolbar: Handlebars.compile([
        '<div class="{{navToolbarCls}}">',
          '<a href="javascript:;" class="mirador-btn mirador-icon-metadata-view"></a>',
          '<a href="javascript:;" class="mirador-btn mirador-icon-thumbnails-view"></a>',
        '</div>'
      ].join(''))
    },


    /* Thumbnails view
    ---------------------------------------------------------------------------- */
    thumbnailsView: {
      // template for rendering images in thumbnails view
      listImages: Handlebars.compile([
        '<ul class="{{listingCssCls}} listing-thumbs">',
          '{{#thumbs}}',
            '<li>',
              '<a href="javascript:;">',
                '<img title="{{title}}" data-image-id="{{id}}" src="{{thumbUrl}}" height="{{../defaultHeight}}">',
                '<div class="thumb-label">{{title}}</div>',
              '</a>',
            '</li>',
          '{{/thumbs}}',
        '</ul>'
      ].join('')),

      // template for rendering tool bar with nav links
      navToolbar: Handlebars.compile([
        '<div class="{{navToolbarCls}}">',
          '<a href="javascript:;" class="mirador-btn mirador-icon-metadata-view"></a>',
          '<a href="javascript:;" class="mirador-btn mirador-icon-scroll-view"></a>',
        '</div>'
      ].join(''))
    },


    /* Metadata view
    ---------------------------------------------------------------------------- */
    metadataView: {
      // template for rendering basic metadata terms
      listTerms: Handlebars.compile([
        '<div class="sub-title">About (Metadata about this manuscript\'s manifest file):</div>',
        '<dl class="{{metadataListingCls}}">',
          '{{#each about}}',
            '<dt>{{label}}:</dt><dd>{{value}}</dd>',
          '{{/each}}',
        '</dl>',
        '<div class="sub-title">Details (Metadata about physical object/intellectual work):</div>',
        '<dl class="{{metadataListingCls}}">',
          '{{#each details}}',
            '<dt>{{label}}:</dt><dd>{{value}}</dd>',
          '{{/each}}',
        '</dl>',
        '<div class="sub-title">Rights Metadata:</div>',
        '<dl class="{{metadataListingCls}}">',
          '{{#each rights}}',
            '<dt>{{label}}:</dt><dd>{{value}}</dd>',
          '{{/each}}',
        '</dl>',
        '<div class="sub-title">Linking Metadata:</div>',
        '<dl class="{{metadataListingCls}}">',
          '{{#each links}}',
            '<dt>{{label}}:</dt><dd>{{value}}</dd>',
          '{{/each}}',
        '</dl>'
      ].join(''), { noEscape: true }),

      // template for rendering tool bar with nav links
      navToolbar: Handlebars.compile([
        '<div class="{{navToolbarCls}}">',
          '<a href="javascript:;" class="mirador-btn mirador-icon-scroll-view"></a>',
          '<a href="javascript:;" class="mirador-btn mirador-icon-thumbnails-view"></a>',
        '</div>'
      ].join(''))

    }
  };


  /* Helpers
  ---------------------------------------------------------------------------- */
  Handlebars.registerHelper('trimTitlePrefix', function(title) {
    title = title.replace(/^Beinecke MS \w+,? \[?/, '');
    title = title.replace(/\]$/, '');

    return title;
  });


}(Mirador));

(function($) {

  $.MainMenuWindowOptions = function(options) {

    jQuery.extend(true, this, {
      menuContent:           null,
      windowOptionsMenuCls: 'window-options-menu'
    }, options);

    this.html = this.html || '<div/>';

    this.render();
    this.attachEvents();
  };


  $.MainMenuWindowOptions.prototype = {

    render: function() {
      this.html = $.Templates.mainMenu.windowOptionsMenu({
        windowOptionsMenuCls: this.windowOptionsMenuCls
      });
    },


    attachEvents: function() {
      var elCascadeAll          = '.' + this.windowOptionsMenuCls + ' .cascade-all',
          elTileAllVertically   = '.' + this.windowOptionsMenuCls + ' .tile-all-vertically',
          elTileAllHorizontally = '.' + this.windowOptionsMenuCls + ' .tile-all-horizontally',
          elStackAll2Cols       = '.' + this.windowOptionsMenuCls + ' .stack-all-vertically-2-cols',
          elStackAll3Cols       = '.' + this.windowOptionsMenuCls + ' .stack-all-vertically-3-cols',
          elCloseAll            = '.' + this.windowOptionsMenuCls + ' .close-all',
          _this                 = this;

      jQuery(document).on('click', elCascadeAll, function() {
        $.viewer.layout.cascadeAll();
      });

      jQuery(document).on('click', elTileAllVertically, function() {
        $.viewer.layout.tileAllVertically();
      });

      jQuery(document).on('click', elTileAllHorizontally, function() {
        $.viewer.layout.tileAllHorizontally();
      });

      jQuery(document).on('click', elStackAll2Cols, function() {
        $.viewer.layout.stackAllByColumns(2);
      });

      jQuery(document).on('click', elStackAll3Cols, function() {
        $.viewer.layout.stackAllByColumns(3);
      });

      jQuery(document).on('click', elCloseAll, function() {
        $.viewer.layout.closeAll();
      });
    }

  };

}(Mirador));
(function($) {

  $.MainMenuLoadWindow = function(options) {

    jQuery.extend(true, this, {
      element:                null,
      width:                  300,
      collectionsListingCls:  'mirador-listing-collections'
    }, options);

    this.element  = this.element || jQuery('<div/>');
    this.attachEvents();
  };


  $.MainMenuLoadWindow.prototype = {

    // load window event handlers
    attachEvents: function() {
      var selectorListing         = '.' + this.collectionsListingCls,
          selectorSelect          = selectorListing + ' select',
          selectorUl              = selectorListing + ' ul',
          selectorScrollView      = selectorListing + ' a.mirador-icon-scroll-view',
          selectorMetadataView    = selectorListing + ' a.mirador-icon-metadata-view',
          selectorThumbnailsView  = selectorListing + ' a.mirador-icon-thumbnails-view',
          _this                   = this;

      // attach onChange event handler for collections select list
      jQuery(document).on('change', selectorSelect, function() {
        var manifestId = jQuery(this).find('option:selected').data('manifest-id');

        jQuery(selectorUl).hide();
        jQuery(selectorUl + '.ul-' + manifestId).show();
      });

      // attach click event handler for images in the list
      jQuery(document).on('click', selectorUl, function(event) {
        var elemTarget = jQuery(event.target),
            manifestId,
            imageId,
            openAt;

        manifestId = elemTarget.data('manifest-id');
        imageId = elemTarget.data('image-id');

        $.viewer.loadImageView(manifestId, imageId);
      });

      // attach click event for thumbnails view icon
      jQuery(document).on('click', selectorThumbnailsView, function() {
        var manifestId = jQuery(selectorSelect).find('option:selected').data('manifest-id');

        $.viewer.loadThumbnailsView(manifestId);
      });

      // attach click event for scroll view icon
      jQuery(document).on('click', selectorScrollView, function() {
        var manifestId = jQuery(selectorSelect).find('option:selected').data('manifest-id');

        $.viewer.loadScrollView(manifestId);
      });

      // attach click event for metadata view icon
      jQuery(document).on('click', selectorMetadataView, function() {
        var manifestId = jQuery(selectorSelect).find('option:selected').data('manifest-id');

        $.viewer.loadMetadataView(manifestId);
      });
    }


  };



}(Mirador));

(function($) {

  $.MainMenu = function(options) {

    jQuery.extend(true, this, {
      element:                    null,
      mainMenuHeight:             $.DEFAULT_SETTINGS.mainMenu.height,
      mainMenuWidth:              $.DEFAULT_SETTINGS.mainMenu.width,
      windowOptionsMenu:          null,
      loadWindow:                 null,
      clearLocalStorage:          '',
      viewerCls:                  'mirador-viewer',
      mainMenuBarCls:             'mirador-main-menu-bar',
      mainMenuCls:                'mirador-main-menu',
      windowOptionsMenuCls:       'mirador-window-options-menu',
      clearLocalStorageCls:       'clear-local-storage',
      clearLocalStorageDialogCls: 'mirador-main-menu-clear-local-storage',
      collectionsListingCls:      'mirador-listing-collections'
    }, options);

    this.element  = this.element || jQuery('<div/>');

    this.render();
    this.attachMainMenuEvents();
  };


  $.MainMenu.prototype = {

    render: function() {
      this.element
        .addClass(this.mainMenuBarCls)
        .height(this.mainMenuHeight)
        .width(this.mainMenuWidth)
        .appendTo(this.appendTo);

      this.element.append($.Templates.mainMenu.menuItems({
        mainMenuCls: this.mainMenuCls
      }));

      this.windowOptionsMenu = new $.MainMenuWindowOptions({
        windowOptionsMenuCls: this.windowOptionsMenuCls
      });

      $.loadWindowContent = "Loading...";

      this.loadWindow = new $.MainMenuLoadWindow({
        collectionsListingCls:  this.collectionsListingCls
      });

      this.clearLocalStorage = $.Templates.mainMenu.clearLocalStorage({
        cssCls: this.clearLocalStorageDialogCls,
        selectorClearLocalStorage: '.' + this.mainMenuCls + ' .' + this.clearLocalStorageCls
      });


    },


    attachMainMenuEvents: function() {
      var elMainMenu = this.element.find('.' + this.mainMenuCls);
          selectorBookmarkWorkspace = '.bookmark-workspace',
          selectorLoadWindow        = '.load-window',
          selectorWindowOptions     = '.window-options',
          selectorClearLocalStorage = '.' + this.clearLocalStorageCls,
          selectorWindowOptionsMenu = '.' + this.mainMenuBarCls + ' .' + this.windowOptionsMenuCls,
          _this = this;

      // menu 'Bookmark Workspace'
      elMainMenu.on('click', selectorBookmarkWorkspace, function() {
      });

      // menu 'Load Window'
      elMainMenu.find(selectorLoadWindow).tooltipster({
        arrow: true,
        content: _this.loadWindow.element,
        interactive: true,
        position: 'bottom',
        theme: '.tooltipster-mirador',

        functionReady: function(origin, continueTooltip) {
          var heightTooltipster = jQuery('.' + _this.viewerCls).height() * 0.8;

          jQuery('.' + _this.collectionsListingCls).height(heightTooltipster);
          jQuery('.' + _this.collectionsListingCls + ' ul').height(heightTooltipster - 70);
        }

      });

      // Window Options
      elMainMenu.find(selectorWindowOptions).tooltipster({
        arrow: true,
        content: _this.windowOptionsMenu.html,
        interactive: true,
        theme: '.tooltipster-mirador'
      });

      // menu 'Clear Local Storage'
      elMainMenu.find(selectorClearLocalStorage).tooltipster({
        arrow: true,
        content: _this.clearLocalStorage,
        interactive: true,
        theme: '.tooltipster-mirador'
      });

    }

  };

}(Mirador));
(function($) {

  $.StatusBar = function(options) {

    jQuery.extend(true, this, {
      element:          null,
      statusBarHeight:  $.DEFAULT_SETTINGS.statusBar.height,
      statusBarWidth:   $.DEFAULT_SETTINGS.statusBar.width,
      statusBarBarCls:  'mirador-status-bar'
    }, options);

    this.element  = this.element || jQuery('<div/>');

    this.render();
  };


  $.StatusBar.prototype = {

    render: function() {
      this.element
        .addClass(this.statusBarBarCls)
        .height(this.statusBarHeight)
        .width(this.statusBarWidth)
        .appendTo(this.appendTo);

      this.element.append($.Templates.statusBar.textFrames({}));
      this.xbox = this.element.find('.x');
      this.ybox = this.element.find('.y');
    }


  };

}(Mirador));

(function($) {

  $.Layout = function(options) {

    jQuery.extend(true, this, {
      rowPadding: 10,
      columnPadding: 10,
      cascade: {
        x: 10,
        y: 40,
        offset: 25
      }
    }, options);

  };

  $.Layout.prototype = {

    cascadeAll: function() {
      var _this = this,
          offset = 0,
          x, y,
          canvas = {};

      canvas.top  = $.viewer.mainMenu.element.outerHeight(true);
      canvas.left = this.columnPadding;

      jQuery.each($.viewer.widgets, function(index, widget) {
        x = _this.cascade.x + offset;
        y = _this.cascade.y + offset;

        widget.setPosition(x, y);
        widget.moveToTop();

        offset += _this.cascade.offset;
      });
    },


    tileAllVertically: function() {
      this.stackAllByColumns(1);
    },


    tileAllHorizontally: function() {
      this.stackAllByColumns($.viewer.widgets.length);
    },


    stackAllByColumns: function(columns) {
      var _this = this,
          rows,
          widgetWidth,
          widgetHeight,
          canvas = {},
          columnIndex,
          rowIndex = 0;

      canvas.top    = $.viewer.mainMenu.element.outerHeight(true) + this.rowPadding;
      canvas.width  = $.viewer.canvas.width() - this.columnPadding;
      canvas.height = $.viewer.canvas.height() - this.rowPadding;

      rows = Math.ceil($.viewer.widgets.length / columns);

      widgetWidth  = Math.floor(canvas.width / columns) - this.columnPadding;
      widgetHeight = Math.ceil(canvas.height / rows) - this.rowPadding;

      jQuery.each($.viewer.widgets, function(index, widget) {
        var x = 0, y = 0;

        columnIndex = index % columns;

        if (columnIndex === 0 && index !== 0) {
          ++rowIndex;
        }

        x = _this.columnPadding + (columnIndex * (_this.columnPadding + widgetWidth));
        y = canvas.top + (rowIndex * (_this.rowPadding + widgetHeight));

        widget.setPositionAndSize(x, y, widgetWidth, widgetHeight);
      });

    },


    closeAll: function() {
      jQuery.each($.viewer.widgets.slice(), function(index, widget) {
        if (widget) {
          widget.close();
        }
      });
    },


    applyLayout: function(layout) {

      switch (layout) {
        case 'cascade':
          this.cascadeAll();
          break;

      case 'tileAllVertically':
          this.tileAllVertically();
          break;

      case 'tileAllHorizontally':
          this.tileAllHorizontally();
          break;

      case 'stackAll2Columns':
          this.stackAllByColumns(2);
          break;

      case 'stackAll3Columns':
          this.stackAllByColumns(3);
          break;

       default:
        this.cascadeAll();
      }
    }

  };



}(Mirador));

(function($){

  $.Manifest = function(manifestUri, dfd) {

    jQuery.extend(true, this, {
      uri:        manifestUri,
      jsonLd:     null,
      sequences:  [],

      metadata: {
        about:    {},
        details:  {},
        rights:   {},
        links:    {}
      },

      showNoImageChoiceOption: $.DEFAULT_SETTINGS.showNoImageChoiceOption
    });

    this.loadManifestDataFromURI(dfd);
  };

  $.Manifest.prototype = {

    loadManifestDataFromURI: function(dfd) {
      var _this = this;

      jQuery.ajax({
        url: _this.uri,
        dataType: 'json',
        async: true,

        success: function(jsonLd) {
          _this.jsonLd = jsonLd;

          _this.sequences = _this.parseSequences();
          _this.parseMetadata();

          dfd.resolve(true);
        },

        error: function() {
          console.log('Failed loading ' + _this.uri);
          dfd.resolve(false);
        }
      });

      delete this.jsonLd; // clear memory
    },


    parseSequences: function() {
      var _this = this,
      sequences = [];

      jQuery.each(this.jsonLd.sequences, function(index, sequence) {
        if (sequence['@type'] === 'sc:Sequence') {
          sequences.push({
            id: sequence['@id'],
            imagesList: _this.getImagesList(sequence)
          });
        }
      });

      return sequences;
    },


    getImagesList: function(sequence) {
      var _this = this,
      imagesList = [];

      jQuery.each(sequence.canvases, function(index, canvas) {
        var images = [],
        imageObj;

        if (canvas['@type'] === 'sc:Canvas') {
          images = canvas.resources || canvas.images;

          jQuery.each(images, function(index, image) {
            if (image['@type'] === 'oa:Annotation') {
              imageObj = _this.getImageObject(image);

              imageObj.title = canvas.label || '';
              imageObj.canvasWidth = canvas.width; 
              imageObj.canvasHeight = canvas.height; 
              if (canvas.otherContent) {
                imageObj.annotations = jQuery.map(canvas.otherContent, function( annotation ){
                  if(annotation['@id'].indexOf(".json") >= 0) {
                    return annotation['@id'];
                  }
                  return ( annotation['@id'] + ".json" );
                });
              }
              if (!_this.isDetailImage(image.on)) {
                imagesList.push(imageObj);
              }
            }
          });

        }
      });

      return imagesList;
    },


    getImageObject: function(image) {
      var resource = image.resource,
      imageObj;
      if (resource.hasOwnProperty('@type') && resource['@type'] === 'oa:Choice') {
        imageObj = this.getImageObjWithChoices(image.resource);

      } else {
        imageObj = this.getImageProperties(resource);
      }

      if (this.showNoImageChoiceOption) {
        imageObj.choices.push(this.getNoImageChoiceObj());
      }

      return(imageObj);
    },


    getImageProperties: function(image) {
      var imageObj = {
        height:       image.height || 0,
        width:        image.width || 0,
        id:           image.service['@id'],
        imageUrl:     image.service['@id'].replace(/\/$/, ''),
        choices:      [],
        choiceLabel:  image.label || 'Default'
      };

      imageObj.aspectRatio  = (imageObj.width / imageObj.height) || 1;

      return imageObj;
    },


    getImageObjWithChoices: function(resource) {
      var _this = this,
      items = [],
      imageObj,
      choice,
      choiceIndex = 1;

      // remove after Rob converts 'item' object to an array
      if (!jQuery.isArray(resource.item)) {
        items.push(resource.item);
      } else {
        items = resource.item;
      }

      // get the default image object first
      imageObj = this.getImageProperties(resource['default']);

      if (imageObj.choiceLabel === '') {
        imageObj.choiceLabel = 'Choice ' + choiceIndex;
      }

      // iterate each choice and store in default object
      jQuery.each(items, function(index, item) {
        choice = _this.getImageProperties(item);

        if (choice.choiceLabel === '') {
          choiceIndex += 1;
          choice.choiceLabel = 'Choice ' + choiceIndex;
        }

        imageObj.choices.push(choice);
      });

      return imageObj;
    },


    getNoImageChoiceObj: function() {
      return {
        height:       0,
        width:        0,
        imageUrl:     null,
        choices:      [],
        choiceLabel:  'No Image',
        aspectRatio:  1
      };
    },


    isDetailImage: function(on) {
      return (/#xywh/).test(on);
    },


    parseMetadata: function() {
      this.parseMetadataAbout();
      this.parseMetadataDetails();
      this.parseMetadataRights();
      this.parseMetadataLinks();
      ++$.viewer.numManifestsLoaded;
    },


    parseMetadataAbout: function() {
      this.metadata.about = {
        '@context': this.jsonLd['@context'] || '',
        '@id':      this.jsonLd['@id'] || ''
      };
    },


    parseMetadataDetails: function() {
      this.metadata.details = {
        'label':        this.jsonLd.label || '',
        'agent':        this.jsonLd.agent || '',
        'location':     this.jsonLd.location || '',
        'date':         this.jsonLd.date || '',
        'description':  this.jsonLd.description || ''
      };
    },


    parseMetadataRights: function() {
      this.metadata.rights = {
        'license':      this.jsonLd.license || '',
        'attribution':  this.jsonLd.attribution || ''
      };
    },


    parseMetadataLinks: function() {
      this.metadata.links = {
        'service':  this.jsonLd.service || '',
        'seeAlso':  this.jsonLd.seeAlso || '',
        'within':   this.jsonLd.within || ''
      };
    }

  };

}(Mirador));

(function($) {

  $.AnnotationsLayer = function(options) {

    jQuery.extend(true, this, {
      sidePanel:  null,
      bottomPanel:       null,
      regionController:  null,
      width:             $.DEFAULT_SETTINGS.imageView.annotationsList.width,
      parent:            null,
      stateEvents:       {},
      showList:          true,
      annotationUrls:    null,
      annotations:       [],
      commentAnnotations: 0,
      textAnnotations: 0,
      visible:        false,
      selectedAnnotation: null,
      hoveredAnnotation: null,
      annotationListCls: 'mirador-annotation-list'
    }, options);

    this.create();
  };


  $.AnnotationsLayer.prototype = {

    create: function() {
      var _this = this;


      // returns a promise object constructed using 
      // jQuery.when.apply(this, [deferred array]);
      _this.getAnnotations().done( function() {
        _this.bottomPanel = new $.AnnotationBottomPanel({parent: _this});
        _this.regionController = new $.AnnotationLayerRegionController({parent: _this});
        _this.sidePanel = new $.AnnotationLayerSidePanel({parent: _this});
      });

      this.bindEvents();
    },

    get: function(prop) {
      return this[prop];
    },

    set: function(prop, value, options) {
      _this = this;
      this[prop] = value;
      _this.event(prop + ':set').publish(value, options);
    },

    event: function(id) {

      var event = id && this.stateEvents[id];

      if (!event) {

        this.callbacks = jQuery.Callbacks();

        event = {
          publish: this.callbacks.fire,
          subscribe: this.callbacks.add,
          unsubscribe: this.callbacks.remove
        };

        if (id) {
          this.stateEvents[id] = event;
        }
      }
      return event;
    },

    getAnnotations: function() {
      var _this = this,
      requests = [];

      _this.set('annotations', []);

      if (!_this.annotationUrls) {
        _this.annotations = [];
        return jQuery.when(function() { return; });
      }

      jQuery.each(_this.annotationUrls, function(index, url) {
        var request =  jQuery.ajax(
          {
          url: url,
          dataType: 'json',
          async: true,

          success: function(jsonLd) {
            jQuery.each(jsonLd.resources, function(index, resource) {
              var annotation = {
                region: $.parseRegion(resource.on),
                title: null,
                content: resource.resource.full ? resource.resource.full.chars : resource.resource.chars,
                type: (resource.motivation).split(':')[1],
                id: $.genUUID()
              };          

              annotation.osdFrame = $.getOsdFrame(annotation.region, _this.parent.currentImg);

              _this.annotations.push(annotation);
            });

            _this.computeAnnotationStats();
          },

          error: function() {
            console.log('Failed loading ' + uri);
          }
        });

        requests.push(request);

      });

      return jQuery.when.apply(this, requests);
    },

    bindEvents: function() {
      var _this = this;

      // model events
      _this.event('visible:set').subscribe( function(value) {
        if (value === false) { _this.hide(); } else { _this.show(); }
      });
      _this.event('disabled:set').subscribe( function(value) {
        if (value === true) { _this.hide(); } else { _this.show(); }
      });
      _this.event('selectedAnnotation:set').subscribe( function(value, options) {
        if (value === null) {
          _this.deselect(); 
          return;
        }
        _this.focusSelected(value, options);
      });
      _this.event('hoveredAnnotation:set').subscribe( function(value, options) {
        _this.accentHovered(value, options);
      });
      _this.event('annotationUrls:set').subscribe( function(value, options) {
        if (value) { console.log(value); }
        _this.changePage();
      });
    },

    computeAnnotationStats: function() {
      var comments = 0,
      transcriptions = 0; 

      jQuery.each(_this.annotations, function(index, annotation) {
        if (annotation.type === 'commenting') { comments ++; } else { transcriptions ++; }
      });

      _this.commentAnnotations = comments;
      _this.textAnnotations = transcriptions;
    },

    setVisible: function() {
      var _this = this;

      if (_this.get('visible') === false) {
        _this.set("visible", true);
      }  else {
        _this.set("visible", false);
      }
    },

    changePage: function() {
      var _this = this;

      if (_this.annotations === null) {
        _this.set('visible', false);
        return;
      }

      if ( _this.selectedAnnotation ) {
        _this.set('selectedAnnotation', null);
      }

      _this.getAnnotations().done( function() {
        _this.sidePanel.render();
        _this.regionController.render();
      });
    },

    accentHovered: function(id, source) {
      var _this = this;

      if (source === 'listing') {
        _this.regionController.accentHovered(id);
      } else {
        _this.sidePanel.accentHovered(id);
      }
    },

    focusSelected: function(id, source) {
      var _this = this;

      _this.sidePanel.focusSelected(id, source);
      _this.regionController.focusSelected(id);
      _this.bottomPanel.focusSelected(id);
    },

    deselect: function() {
      _this.bottomPanel.deselect();
      _this.sidePanel.deselect();
      _this.regionController.deselect();
    },

    append: function(item) {
      this.element.append(item);
    },

    show: function() {
      var _this = this;
      this.parent.parent.element.find('.mirador-widget-content').css('padding-right', _this.width);
      this.sidePanel.show();
      this.regionController.show();
      this.bottomPanel.show();
    },

    hide: function() {
      this.parent.parent.element.find('.mirador-widget-content').css('padding-right', 0);
      this.sidePanel.hide();
      this.regionController.hide();
      this.bottomPanel.hide();
      // ensures the user won't accidentally be unable to view annotation details in 
      // the annotation layer in the future. Resets the default visibility of the 
      // bottom panel to true.
      this.bottomPanel.hidden = false;
    }

  };

}(Mirador));

(function($) {

  $.Widget = function(options) {

    jQuery.extend(true, this, {
      appendTo:             'body',
      autoOpen:             true,
      containerCls:         '.mirador-viewer',
      closeOnEscape:        false,
      content:              null,
      draggable:            true,
      element:              null,
      height:               $.DEFAULT_SETTINGS.widget.height,
      id:                   null,
      metadataDetails:      null,
      openAt:               null,
      showStatusbar:        true,
      showToolbar:          true,
      statusbar:            null,
      toolbar:              null,
      type:                 'thumbnailsView',
      viewObj:              null,
      widgetCls:            'mirador-widget',
      widgetContentCls:     'mirador-widget-content',
      widgetStatusbarCls:   'mirador-widget-statusbar',
      widgetToolbarCls:     'mirador-widget-toolbar',
      width:                $.DEFAULT_SETTINGS.widget.width,

      position: {
        'my': 'left top',
        'at': 'left+50 top+50',
        'of': '.mirador-viewer',
        'collision' : 'fit',
        'within' : '.mirador-viewer'
      },

      dialogOptions: {
        'resize': function(event, ui) {},
        'resizeStop': function(event, ui) {},
        'close': function(event, ui) {}
      },

      dialogExtendOptions: {
        'maximizable': true,
        'collapsable': true,
        'icons': {
          'maximize': 'ui-icon-arrow-4-diag',
          'collapse': 'ui-icon-minus'
        },
        // limit maximized widget height to not hide main menu and status bar
        'mainMenuHeight': $.viewer.mainMenu.element.outerHeight(true),
        'statusBarHeight': $.viewer.statusBar.element.outerHeight(true)
      }

    }, options);

    this.element          = this.element || jQuery('<div/>');
    this.metadataDetails  = $.getMetadataByManifestId(this.manifestId).details;
    this.imagesList       = $.getImagesListByManifestId(this.manifestId);

    this.create();
    this.attachEvents();
  };


  $.Widget.prototype = {

    create: function() {

      this.dialogExtendOptions.containerCls  = this.containerCls;

      this.element
        .addClass(this.widgetCls)
        .attr('id', this.id)
        .attr('title', this.getTitle())
        .appendTo(this.appendTo)
        .dialog(this)
        .dialog(this.dialogOptions)
        .dialogExtend(this.dialogExtendOptions)

        // Settings that will execute when resized.
        .parent().resizable({
          containment: this.containerCls // Constrains the resizing to the div.
        })
        // Settings that execute when the dialog is dragged. If parent isn't used the text content will have dragging enabled.
        .draggable({
          containment: this.containerCls // The element the dialog is constrained to.
        });

      this.element.dialog('option', 'id', this.id);

      this.toolbar = new $.WidgetToolbar({
        parent: this,
        showToolbar: this.showToolbar
      });

      this.statusbar = new $.WidgetStatusBar({
        parent: this,
        showStatusbar: this.showStatusbar
      });

      this.content = new $.WidgetContent({
        parent: this
      });

      this.render();
    },


    render: function() {
      switch (this.type) {
        case 'imageView':
          this.renderImageView();
        break;

        case 'scrollView':
          this.renderScrollView();
        break;

        case 'thumbnailsView':
          this.renderThumbnailsView();
        break;

        case 'metadataView':
          this.renderMetadataView();
        break;

        default:
          break;
      }
    },


    renderImageView: function() {
      this.viewObj = new $.ImageView({
        imagesList: this.imagesList,
        manifestId: this.manifestId,
        element:    this.content.element,
        imageId:    this.imageId,
        openAt:     this.openAt,
        parent:     this
      });

      this.viewObj.render();
    },


    renderScrollView: function() {
      this.viewObj = new $.ScrollView({
        imagesList: this.imagesList,
        manifestId: this.manifestId,
        element:    this.content.element,
        parent:     this
      });

      this.viewObj.render();
    },


    renderThumbnailsView: function() {
      this.viewObj = new $.ThumbnailsView({
        imagesList: this.imagesList,
        manifestId: this.manifestId,
        element:    this.content.element,
        parent:     this
      });

      this.viewObj.render();
    },


    renderMetadataView: function() {
      this.viewObj = new $.MetadataView({
        manifestId: this.manifestId,
        element:    this.content.element,
        parent:     this
      });

      this.viewObj.render();
    },


    setPosition: function(x, y) {
      this.element.dialog('option', 'position', [x, y]);
    },


    setSize: function(w, h) {
      var widget = this;
      this.element.dialog('option', 'width', w);
      this.element.dialog('option', 'height', h);

      this.element.trigger('dialogresize');
      this.element.trigger('dialogresizestop');
      // setTimeout(function(){if (widget.type === 'imageView') {console.log("type detected");widget.viewObj.osd.viewport.goHome();}},100);
    },


    setPositionAndSize: function(x, y, w, h) {
      this.setPosition(x, y);
      this.setSize(w, h);
    },


    moveToTop: function() {
      this.element.dialog('moveToTop');
    },


    getHeight: function() {
      return this.element.dialog('option', 'height');
    },


    getWidth: function() {
      return this.element.dialog('option', 'width');
    },


    close: function() {
      this.element.dialog('destroy');
      this.element.remove();

      $.viewer.removeWidget(this.id);
    },


    attachEvents: function() {
      var _this = this;

      this.element.dialog({
        close: function(event, ui) {
          _this.close();
        }
      });
    },


    getTitle: function() {
      return $.getViewLabel(this.type) + ' : ' + $.getTitlePrefix(this.metadataDetails);
      // return $.getTitlePrefix(this.metadataDetails);
    }

  };

}(Mirador));

(function($) {

  $.WidgetToolbar = function(options) {

    jQuery.extend(true, this, {
      appendTo:       'body',
      element:        null,
      height:         $.DEFAULT_SETTINGS.widgetToolbar.height,
      parent:         null,
      showToolbar:    false,
      toolbarCls:     'mirador-widget-toolbar'
    }, options);

    this.element = this.element || jQuery('<div/>');
    this.create();
  };


  $.WidgetToolbar.prototype = {

    create: function() {
      this.element
        .addClass(this.toolbarCls)
        .height(this.height)
        .appendTo(this.parent.element);

      this.hide();

      if (this.showToolbar) this.show();
    },


    append: function(item) {
      this.element.append(item);
    },


    show: function() {
      this.element.show();
    },


    hide: function() {
      this.element.hide();
    }


  };

}(Mirador));

(function($) {

  // Lock controller.
  // Stores a list of widget/manifest ids.
  // These specified views are locked together.
  // they will zoom together, pan together, flow together.

  // This will be an object with an accessible function to call zoom and pan
  // on all the items "under-written" ("sub"-"scribed").

  $.LockController = function(options) {

    jQuery.extend(this, {
      translationMethod:     null,
      lockedViews:           [],
      lockProfile:           "lazyZoom"
    }, options);
  };

  $.LockController.prototype = {
    LockOptions: {

      // These pprofiles provide different behavior for locking,
      // based on whether the user wants locked images to pan
      // or zoom together, share an absolute or relative scale,
      // increment by relative or absolute units, and/or decouple
      // from one another once the limits of available data have
      // been reached (maximum zoom, image extremities, etc.

      relativeZoom: function(view, data) {
        // Panning is disabled but the zoom level is kept
        // relative to the leader. If the leader is zoomed to
        // level 4.239873, the followers will zoom to 4.239873.
        // This is regardless of their aspect ratio or their
        // given physical or pixel dimensions. This means that
        // the features being examined may not be presented at
        // an accurate relative size.

        view.viewport.panTo(view.viewport.getCenter());
        view.viewport.zoomTo(data.leaderZoom, view.viewport.getCenter());
      },

      relativeLock: function(view, data) {
        // All zooming and panning are relatively mirrored across
        // all locked views. All views will reach their edges (when panning),
        // or their maximum and minimum zoom levels (when zooming), at the same
        // time.
        //
        // Useful when similar documents, or examining two views of a
        // single document.
        var leaderBounds = data.leaderBounds;
        // console.log(view);
        // console.log(leaderBounds);
        view.viewport.fitBounds(leaderBounds);
      },

      dimensionalZoom: function(view, data) {
        // Dimensional zoom locks only the physical dimensions of the
        // locked views, so that panning does nothing, while their
        // scales always read with equally-sized units.
        // Reliable physical units (Centimetres, etc. ) which could
        // be faithfully measured with a ruler held up to the screen
        // are not currently possible without either: explicit information
        // about the user's particular make of monitor; or
        // a calibration process for each session.
        // For a rant concerning this fact, c.f.:
        //

        // Useful for comparisons of features maintaining their
        // correct physical proportions.
        var viewCenter = view.viewport.getCenter();

        leaderViewportPixelWidth = data.leaderContainerWidth;
        followerViewportPixelWidth = view.viewport.getContainerSize().x;
        viewportRatio = followerViewportPixelWidth/leaderViewportPixelWidth;

        // Construct target Rect variables from collected data.
        var followerTargetRectWidth = ((data.leaderBounds.width*data.leaderWidth)/view.width)*viewportRatio,
        followerTargetRectHeight = view.viewport.getAspectRatio()*followerTargetRectWidth,

        // calculate position of top right corner such that the
        // center maintains the same real coordinates for that image.
        followerTargetRectX = viewCenter.x - ( followerTargetRectWidth/2 ),
        followerTargetRectY = viewCenter.y - ( followerTargetRectHeight/2 );
        console.log(followerTargetRectHeight);

        followerTargetRect = new OpenSeadragon.Rect(followerTargetRectX, followerTargetRectY, followerTargetRectWidth, followerTargetRectHeight);
        console.log(followerTargetRect);
        console.log('updated');

        view.viewport.fitBounds(followerTargetRect);

      },

      dimensionalLock: function(view, data) {
        var viewCenter = view.viewport.getCenter();

        leaderViewportPixelWidth = data.leaderContainerWidth;
        followerViewportPixelWidth = view.viewport.getContainerSize().x;
        viewportRatio = followerViewportPixelWidth/leaderViewportPixelWidth;

        // Construct target Rect variables from collected data.
        var followerTargetRectWidth = ((data.leaderBounds.width*data.leaderWidth)/view.width)*viewportRatio,
        followerTargetRectHeight = view.viewport.getAspectRatio*followerTargetRectWidth,

        // calculate position of top right corner such that the
        // center maintains the same real coordinates for that image.
        followerTargetRectX = viewCenter.x - ( followerTargetRectWidth/2 ),
        followerTargetRectY = viewCenter.y - ( followerTargetRectHeight/2 );

        followerTargetRect = new OpenSeadragon.Rect(followerTargetRectX, followerTargetRectY, followerTargetRectWidth, followerTargetRectHeight);

        view.viewport.fitBounds(followerTargetRect);

      },

      lazyZoom : function(view, data) {
        // Zoom respective images by the same amount relative to
        // each image's own coordinates, starting from each 
        // image's own current zoom level, alleviating the "inverted zoom" 
        // behaviour seen in relativeZoom.
        
        // console.log(data); 
        // Save (follower) view's current center for zoom statement. 
        var viewCenter = view.viewport.getCenter(),
        // and derive scale factor for zoom statement. 
        zoomFactor = data.leaderZoom/data.leaderOldZoom,
        // cache the min and max zoom to prevent over- and
        // under-zooming the followers.
        maxZoom = view.viewport.getMaxZoom(),
        minZoom = view.viewport.getMinZoom(),
        // pre-calculate the floating-point result
        // of the zoom operation to prevent it if it
        // threatens to create over- or under-zooming.
        zoomResult = view.viewport.getZoom()*zoomFactor;
        
        // console.log("max: "+maxZoom);
        // console.log("min: "+minZoom);
        // console.log("current: "+view.viewport.getZoom());
        console.log("factor: "+zoomFactor);
        // console.log("result: "+zoomResult); 
        // console.log("result2: "+zoomResult); 

        // zoom statement.
        // conditional guarantees that the zoom event will not 
        // exceed the follower's bounds. If so, block the event.
        if ( maxZoom >= zoomResult && minZoom <= zoomResult ) {
          view.viewport.zoomBy(zoomFactor, viewCenter);
        } else if (maxZoom < zoomResult) {
          view.viewport.zoomTo(maxZoom, viewCenter);
          console.log("reachedMax"); 
        } else if ( minZoom > zoomResult) {
          view.viewport.zoomTo(minZoom, viewCenter);
          console.log("reachedMin"); 
        }

        // // set zoomLevel on followers to ensure proper anti-yo-yo
        // // measures when they are called upon to lead.
        // var liveParentWidget = jQuery.grep($.viewer.widgets, function(widget, index){ return ( widget.id === data.leaderId );})[0];
        // liveParentWidget.viewObj.zoomLevel = view.viewport.getZoom();
      },

      lazyLock : function(view, data) {
        // Zoom and pan respective images by the same amount relative to
        // each image's own coordinates, starting from each 
        // image's own current zoom level and pan position, alleviating 
        // the "inverted zoom" behaviour seen in relativeZoom and allowing 
        // for synchronous panning.

      } //,

      // physicalDimensions : function() {
      //     // This presumes we can accurately map to physical Dimensions.
      //     // This would simply configure some global variable
      //     // specific to a certain session or user that allows them
      //     // to hard-wire a scale. For instance, we could store a calibration cookie
      //     // that is created after we force them to put a ruler up to
      //     // the screen and click some button when it is a perfect
      //     // centimetre.
      // }
    },

    addLockedView : function(viewObj) {
      // add a new widgetId to the list of locked views.
      lockObj = {
        viewId: viewObj.parent.id,
        rectObj: viewObj.osd.viewport.getBounds(),
        zoomLevel: viewObj.zoomLevel,
        width: viewObj.width,
        units: viewObj.units,
        viewport: viewObj.osd.viewport
      };

      this.lockedViews.push(lockObj);
    },

    broadcast : function(leaderId) {
      var _this = this;
      // execute translated zoom and pan events on all the subscribed elements.
      // options: translate an actual zoom event (zoomBy)
      //          translate the destination rect and fitBounds. This has the advantage of taking
      //          care of both the zoom and pan at the same time.
      var leader = jQuery.map(_this.lockedViews, function(view) { if (view.viewId === leaderId) return view; })[0],
      data = {
        leaderId: leaderId,
        leaderBounds: leader.viewport.getBounds(),
        leaderCenter: leader.viewport.getCenter(),
        leaderOldZoom: leader.zoomLevel,
        leaderZoom: leader.viewport.getZoom(),
        leaderWidth: leader.width,
        leaderContainerWidth: leader.viewport.getContainerSize().x
      },
      filteredViews = jQuery.map( _this.lockedViews, function(view) { if (view.viewId != leaderId) return view; });

      jQuery.each(filteredViews, function(i, view) {
        _this.LockOptions[_this.lockProfile](view, data);
      });
      
      leader.zoomLevel = leader.viewport.getZoom();

    },

    removeLockedView : function(id) {

      // remove this element from the list of elements on which to execute the translated
      // locking and zooming commands by id.

      for (var i=0; i<this.lockedViews.length; i++) {
        if (this.lockedViews[i].viewId === id) {
          this.lockedViews.splice(i, 1);  //removes 1 element at position i
          break;
        }

      }

    }
  };

}(Mirador));


(function($) {

  $.Iiif = {

    // Temporary method to create Stanford IIIF URI from Stanford stacks non-IIIF URI
    getUri: function(uri) {
      var iiifUri = uri,
      match = /http?:\/\/stacks.stanford.edu\/image\/(\w+\/\S+)/i.exec(uri);

      if (match && match.length === 2) {
        iiifUri = 'https://stacks.stanford.edu/image/iiif/' + encodeURIComponent(match[1]);
      }

      return iiifUri;
    },


    getUriWithHeight: function(uri, height) {
      uri = uri.replace(/\/$/, '');
      return this.getUri(uri) + '/full/,' + height + '/0/native.jpg';
    },


    prepJsonForOsd: function(json) {
      json.image_host     = this.getImageHostUrl(json);
      json.scale_factors  = this.packageScaleFactors(json);
      json.profile        = json.profile.replace(/image-api\/1.\d/, 'image-api');

      return json;
    },


    getImageHostUrl: function(json) {
      var regex,
          matches = [];

      if (!json.hasOwnProperty('image_host')) {

        json.image_host = json.tilesUrl || json['@id'] || '';

       if (json.hasOwnProperty('identifier')) {
          regex = new RegExp('/?' + json.identifier + '/?$', 'i');
          json.image_host = json.image_host.replace(regex, '');

        } else {
          regex = new RegExp('(.*\/)(.*)$');
          matches = regex.exec(json.image_host);

          if (matches.length > 1) {
            json.image_host = matches[1];
            json.identifier = matches[2];
          }
        }
      }

      return json.image_host;
    },


    packageScaleFactors: function(json) {
      var newScaleFactors = [];

      if (json.hasOwnProperty('scale_factors') && jQuery.isArray(json.scale_factors)) {
        for (var i = 0; i < json.scale_factors.length; i++) {
          newScaleFactors.push(i);
        }
      }

      return newScaleFactors;
    }

  };


}(Mirador));


(function($) {

  $.ImageView = function(options) {

    jQuery.extend(this, {
      currentImg:       null,
      currentImgIndex:  0,
      element:          null,
      elemChoice:       null,
      height:           null,
      width:            null,
      units:            "mm",
      unitsLong:        "Millimetres",
      imageId:          null,
      imagesList:       [],
      leading:          false,
      locked:           false,
      navToolbarCls:    'mirador-image-view-nav-toolbar',
      annotationsLayer:  null,
      openAt:           null,
      zoomLevel:        null,
      osd:              null,
      osdBounds:        null,
      osdCls:           'mirador-osd',
      osdToolbarCls:    'mirador-osd-toolbar',
      parent:           null,
      scale:            null,
      scaleCls:         'mirador-image-scale',
      selectedChoice:   '',
      statusbarCls:     'mirador-image-view-statusbar',
      imageViewBgCls:   'mirador-image-view-bg'
    }, options);


    if (this.imageId !== null) {
      this.currentImgIndex = this.getImageIndexById(this.imageId);
    }

    if (this.openAt !== null) {
      this.currentImgIndex = this.getImageIndexByTitle(this.openAt);
    }

    this.parent.element.find('.mirador-widget-content').addClass(this.imageViewBgCls);

    this.currentImg = this.imagesList[this.currentImgIndex];
  };


  $.ImageView.prototype = {

    render: function() {
      this.addToolbarNav();
      this.createOpenSeadragonInstance(this.currentImg.imageUrl);
      this.addStatusbarNav();
      this.attachWindowEvents();
      this.addAnnotationsLayer();
    },


    createOpenSeadragonInstance: function(imageUrl, osdBounds) {
      var infoJsonUrl = $.Iiif.getUri(imageUrl) + '/info.json',
      osdId = 'mirador-osd-' + $.genUUID(),
      osdToolBarId = osdId + '-toolbar',
      infoJson,
      elemOsd,
      _this = this;

      this.element.find('.' + this.osdCls).remove();

      this.addOpenSeadragonToolBar(osdToolBarId);

      infoJson = $.getJsonFromUrl(infoJsonUrl, false);

      elemOsd =
        jQuery('<div/>')
      .addClass(this.osdCls)
      .attr('id', osdId)
      .appendTo(this.element);

      this.osd = $.OpenSeadragon({
        'id':           elemOsd.attr('id'),
        'toolbar':      osdToolBarId,
        'tileSources':  $.Iiif.prepJsonForOsd(infoJson)
      });

      this.osd.addHandler('open', function(){
        _this.addScale();
        _this.attachOsdEvents();
        _this.zoomLevel = _this.osd.viewport.getZoom();

        if (typeof osdBounds != 'undefined') {
          _this.osd.viewport.fitBounds(osdBounds, true);
        }
      });

      this.parent.element.dialog('option', 'title', this.getTitle());

      // hide browser based full-screen icon
      this.parent.toolbar.element.find('.' + this.osdToolbarCls + ' button:last-child').hide();

      this.renderChoices();
    },


    clearOpenSeadragonInstance: function() {
      this.element.find('.' + this.osdCls).remove();
      // this.element.find('.' + this.scaleCls).remove();
      this.osd = null;

      this.renderChoices();
    },


    addOpenSeadragonToolBar: function(id) {
      var osdToolbar =
        jQuery('<div/>')
      .addClass(this.osdToolbarCls)
      .attr('id', id);

      this.parent.toolbar.element.find('.' + this.osdToolbarCls).remove();
      this.parent.toolbar.append(osdToolbar);
    },


    renderChoices: function() {
      var _this = this,
      choicesInfo = [];

      this.clearChoices();

      if (this.currentImg.choices.length > 0) {
        choicesInfo.push({
          label: this.currentImg.choiceLabel,
          imageUrl: this.currentImg.imageUrl
        });

        jQuery.each(this.currentImg.choices, function(index, choice) {
          choicesInfo.push({
            label: choice.choiceLabel,
            imageUrl: choice.imageUrl
          });
        });

        this.elemChoice.show();
        this.selectedChoice = this.currentImg.choiceLabel;

        this.elemChoice.tooltipster({
          arrow: true,
          content: $.Templates.imageView.imageChoices({ choicesInfo: choicesInfo }),
          functionReady: function() { _this.addImageChoiceEvents(); },
          interactive: true,
          position: 'bottom',
          theme: '.tooltipster-mirador'
        });

        this.addImageChoiceEvents();
      }
    },


    addImageChoiceEvents: function() {
      var _this = this,
      elemOptionChoices = jQuery(document).find('.mirador-image-view-choices');

      elemOptionChoices.find('li a').each(function(index) {
        jQuery(this).removeClass('mirador-image-view-choice-selected');

        if (jQuery(this).data('choice') === _this.selectedChoice) {
          jQuery(this).addClass('mirador-image-view-choice-selected');
        }
      });


      elemOptionChoices.on('click', 'li a', function(event) {
        var selectedChoice = jQuery(event.target),
        dfd = jQuery.Deferred();

        _this.storeCurrentOsdBounds(dfd);

        dfd.done(function() {
          if (selectedChoice.data('choice') !== 'No Image') {
            _this.createOpenSeadragonInstance(selectedChoice.data('image-url'), _this.osdBounds);
          } else {
            _this.clearOpenSeadragonInstance();
          }
        });

        _this.selectedChoice = selectedChoice.data('choice');

        elemOptionChoices.find('li a').removeClass('mirador-image-view-choice-selected');
        selectedChoice.addClass('mirador-image-view-choice-selected');
      });

    },


    clearChoices: function() {
      if (this.elemChoice.data('plugin_tooltipster') !== '') {
        this.elemChoice.tooltipster('destroy');
      }

      this.elemChoice.hide();
    },


    storeCurrentOsdBounds: function(dfd) {
      if (this.parent.viewObj.osd !== null) {
        this.osdBounds = this.parent.viewObj.osd.viewport.getBounds();
      }
      dfd.resolve();
    },


    addToolbarNav: function() {
      this.parent.toolbar.append($.Templates.imageView.navToolbar({
        navToolbarCls: this.navToolbarCls,
        hasAnnotations: this.currentImg.annotations
      }));

      this.elemChoice = this.parent.toolbar.element.find('.' + this.navToolbarCls + ' .mirador-icon-choices');
      this.elemChoice.hide();

      this.attachNavEvents();
    },


    addStatusbarNav: function() {
      this.parent.statusbar.append($.Templates.imageView.statusbar({
        statusbarCls: this.statusbarCls,
        width: this.width,
        height: this.height
      }));

      this.attachStatusbarEvents();
    },


    addScale: function() {
      if (!this.scale) {
        this.scale = new $.WidgetScale({
          parent: this,
          showScale: true
        });
      }
    },


    addAnnotationsLayer: function() {
      this.annotationsLayer = new $.AnnotationsLayer({
        parent: this,
        annotationUrls: this.currentImg.annotations
      });
    },


    getImageIndexByTitle: function(title) {
      var _this = this,
      imgIndex = 0;

      jQuery.each(this.imagesList, function(index, img) {
        if ($.trimString(img.title) === $.trimString(title)) {
          imgIndex = index;
        }
      });

      return imgIndex;
    },


    getImageIndexById: function(id) {
      var _this = this,
          imgIndex = 0;

      jQuery.each(this.imagesList, function(index, img) {
        if ($.trimString(img.id) === $.trimString(id)) {
          imgIndex = index;
        }
      });

      return imgIndex;
    },


    getTitle: function() {
      var titles = [];

      titles.push(
        $.getViewLabel(this.parent.type) + ' : ' +
        $.getTitlePrefix(this.parent.metadataDetails)
      );

      if (this.currentImg.title) {
        titles.push(this.currentImg.title);
      }

      return titles.join(" / ");
    },


    setHeight: function(h) {
      this.height = h;
    },


    setWidth: function(w) {
      this.width = w;
    },


    next: function() {
      var next = this.currentImgIndex + 1,
      infoJsonUrl;

      if (this.locked) {
        return;
      }
      

      if (next < this.imagesList.length) {
        this.currentImgIndex = next;
        this.currentImg = this.imagesList[next];

        infoJsonUrl = this.currentImg.imageUrl;

        this.createOpenSeadragonInstance(infoJsonUrl);
        this.annotationsLayer.set('annotationUrls', this.currentImg.annotations);
      }
    },


    prev: function() {
      var prev = this.currentImgIndex - 1,
      infoJsonUrl;

      if (this.locked) {
        return;
      }
      

      if (prev >= 0) {
        this.currentImgIndex = prev;
        this.currentImg = this.imagesList[prev];

        this.createOpenSeadragonInstance(this.currentImg.imageUrl);
        this.annotationsLayer.set('annotationUrls', this.currentImg.annotations);
      }
    },


    attachWindowEvents: function() {
      var _this = this;

      this.parent.element.on({
        // It is necessary to know which view to use as
        // the "leader" for event broadcasting in order to
        // prevent an infinite loop. This is accomplished by
        // tracking mouse position for now until OSD integrates
        // events that don't broadcast events.
        mouseenter: function() {
          _this.leading = true;
        },
        mouseleave: function(){
          _this.leading = false;
        }
      });

      this.parent.element.dialog({
        resize: function(event, ui) {
          _this.osd.viewport.ensureVisible();
        }
      });

      this.parent.element.bind('dialogextendmaximize dialogextendrestore', function(event, ui) {
        _this.osd.viewport.ensureVisible();
      });
    },


    attachOsdEvents: function() {
      var _this = this,
      newWidth = null;

      this.osd.addHandler('zoom', function() { _this.broadcast(); });
      this.osd.addHandler('pan', function() { _this.broadcast(); });
    },


    attachNavEvents: function() {
      var navToolbar = this.parent.toolbar.element.find('.' + this.navToolbarCls),
      selectorAnnotationsView = '.mirador-icon-annotations',
      selectorMetadataView    = '.mirador-icon-metadata-view',
      selectorScrollView      = '.mirador-icon-scroll-view',
      selectorThumbnailsView  = '.mirador-icon-thumbnails-view',
      selectorNext            = '.mirador-icon-next',
      selectorPrevious        = '.mirador-icon-previous',
      _this = this;

      navToolbar.on('click', selectorPrevious, function() {
        _this.prev();
      });

      navToolbar.on('click', selectorNext, function() {
        _this.next();
      });

      navToolbar.on('click', selectorMetadataView, function() {
        $.viewer.loadMetadataView(_this.manifestId);
      });

      navToolbar.on('click', selectorScrollView, function() {
        $.viewer.loadScrollView(_this.manifestId);
      });

      navToolbar.on('click', selectorThumbnailsView, function() {
        $.viewer.loadThumbnailsView(_this.manifestId);
      });

      navToolbar.on('click', selectorAnnotationsView, function() {
        _this.annotationsLayer.setVisible();
      });

    },


    attachStatusbarEvents: function() {
      var statusbar = this.parent.statusbar.element.find('.' + this.statusbarCls),
      lockCls = '.mirador-icon-lock',
      dimensionCls = '.mirador-image-view-physical-dimensions',
      unitCls = '.units',
      _this = this;

      statusbar.on('click', lockCls, function() {
        if (_this.locked) {
          _this.unlock();
        } else {
          _this.lock();
        }
      });

      statusbar.on('keypress paste keyup', dimensionCls, function(e) { _this.dimensionChange(e); });

      statusbar.on('input', unitCls, function() { _this.unitChange(); });

    },

    // Event Handlers
    broadcast: function() {
      this.scale.render();

      if (this.osd !== null && this.osd.viewport !== null) {
        this.zoomLevel = this.osd.viewport.getZoom();
      }

      // This if statement detects if the view is both locked and
      // is a "leader" (the mouse is currently hovered over it
      // or it has focus). See lines ~185, attachWindowEvents()
      // for this logic.

      if (this.locked === true && this.leading === true) {
        $.viewer.lockController.broadcast(this.parent.id);
      }
    },

    reachedExtent : function (minmax) {
      // console.log('reached: '+minmax);
    },

    lock: function() {
      this.locked = true;
      this.parent.element.parent().addClass('locked');
      $.viewer.lockController.addLockedView(this.parent.viewObj);
    },

    unlock: function() {
      this.locked = false;
      this.parent.element.parent().removeClass('locked');
      $.viewer.lockController.removeLockedView(this.parent.id);
    },

    dimensionChange: function(e) {
      var valid = (/[0-9]|\./.test(String.fromCharCode(e.keyCode)) && !e.shiftKey),
      textAreaClass = e.currentTarget.className,
      dimension = textAreaClass.charAt(textAreaClass.length-1),
      aspectRatio = this.parent.viewObj.currentImg.aspectRatio,
      width,
      height;
      // check if the value of the number is an integer 0-9
      // if not, declare invalid
      if (!valid) {
        e.preventDefault();
      }
      console.log(e.type+ " : " + e.key);

      // check if keystroke is "enter"
      // if so, exit or deselect the box
      if ((e.keyCode || e.which) === 13) {
        e.target.blur();
      }

      if (dimension === 'x') {
        width = this.parent.statusbar.element.find('.x').val();
        height = Math.floor(aspectRatio * width); 
        if (!width) {
          console.log('empty');
          this.parent.statusbar.element.find('.y').val('');
        } else {
          this.parent.statusbar.element.find('.y').val(height);
        }
      } else {
        height = this.parent.statusbar.element.find('.y').val();
        width = Math.floor(height/aspectRatio);
        if (!height) {
          console.log('empty');
          this.parent.statusbar.element.find('.x').val('');
        } else {
          this.parent.statusbar.element.find('.x').val(width);
        }
        this.height = height;
        this.width = width;

      }
      console.log(dimension);
      console.log("width: " + width);
      console.log(width);
      console.log("height:" + height);
      console.log(height);
      
      unitCls = '.units';

      this.setWidth(width);
      this.setHeight(height);

      if (width) {
        this.scale.dimensionsProvided = true;
      } else {
        this.scale.dimensionsProvided = false;
      }
      this.scale.render();
    },

    unitChange: function() {
      // console.log('units updated');
    }

  };

}(Mirador));

(function($) {

  $.ScrollView = function(options) {
    jQuery.extend(this, {
      element:              null,
      imagesList:           [],
      currentImg:           null,
      frameCls:             'scroll-view-frame',
      imageItemCls:         'item',
      parent:               null,
      imagesFrame:          null,
      tplData:              {},
      toolbarHeight:        $.DEFAULT_SETTINGS.scrollView.toolbarHeight,
      imageLabelHeight:     $.DEFAULT_SETTINGS.scrollView.imageLabelHeight,
      maxItemHeight:        0,
      navToolbarCls:        'mirador-scroll-view-nav-toolbar'
    }, options);
  };


  $.ScrollView.prototype = {

    render: function() {
      this.element.html('');
      this.setProperties();
      this.loadContent();
      this.attachEvents();
    },


    setProperties: function() {
      var _this = this,
          attrs = [];

      jQuery.each(this.imagesList, function(index, image) {
        var domId = _this.parent.element.attr('id') + '-item-' + index;

        attrs[domId] = {};
        attrs[domId].aspectRatio = (image.width / image.height).toFixed(2);
        attrs[domId].infoJsonUrl = $.Iiif.getUri(image.imageUrl) + '/info.json';
        attrs[domId].imageUrl    = image.imageUrl;
      });

      this.imagesList.attrs = attrs;
    },


    appendImagesFrame: function() {
      this.imagesFrame = jQuery($.Templates.scrollView.imagesFrame({
        frameCls: this.frameCls
      }));

      this.element.append(this.imagesFrame);
    },


    generateTemplateData: function() {
      var _this  = this,
          images = [];

      jQuery.each(this.imagesList, function(index, image) {
        var domId = _this.parent.element.attr('id') + '-item-' + index;

        images.push({
          id:    domId,
          title: image.title
        });
      });

      return ({
        'toolbarHeight': this.toolbarHeight,
        'images': images
      });
    },


    addToolbarNav: function() {
      this.parent.toolbar.append($.Templates.scrollView.navToolbar({
        navToolbarCls: this.navToolbarCls
      }));
    },


    getMaxItemHeight: function() {
      var padding = 0,
          scrollHeight = 5;

      padding += parseInt(this.imagesFrame.css('padding-top'), 10);
      padding += parseInt(this.imagesFrame.css('padding-bottom'), 10);

      return this.imagesFrame.height() - padding;
    },


    loadContent: function() {
      this.appendImagesFrame();
      this.addToolbarNav();

      this.imagesFrame.append($.Templates.scrollView.listImages(this.generateTemplateData()));

      this.setFrameAndItemsDimensions();
      this.loadImagesInViewPort();
    },


    setFrameAndItemsDimensions: function() {
      var _this = this,
          selectorImageItem = '.' + this.imageItemCls,
          itemHeight        = this.getMaxItemHeight(),
          imageHeight       = itemHeight - (this.toolbarHeight + this.imageLabelHeight);
          totalItemWidth    = 0;

      this.imagesFrame.find(selectorImageItem).each(function(index) {
        var domId           = _this.parent.element.attr('id') + '-item-' + index,
            itemWidth       = Math.round(_this.imagesList.attrs[domId].aspectRatio * imageHeight),
            elImageInstance = jQuery(this).find('.image-instance');

        jQuery(this).width(itemWidth).height(itemHeight);

        elImageInstance.height(imageHeight);

        totalItemWidth += jQuery(this).outerWidth(true);
      });

      this.imagesFrame.width(totalItemWidth + 15);
    },


    loadImagesInViewPort: function() {
      var _this = this,
          selectorImageItem = this.element.find('.' + this.frameCls + ' .' + this.imageItemCls),
          viewportWidth     = jQuery(this.element).width();

      jQuery(selectorImageItem).each(function(index) {
        var elImageItem     = jQuery(this),
            domId           = elImageItem.attr('id'),
            elImageInstance = elImageItem.find('.image-instance'),
            elStaticThumb   = elImageItem.find('.static-thumb'),
            elEnableZoom    = elImageItem.find('.enable-zoom'),
            isInViewport    = _this.isItemInViewport(viewportWidth, elImageItem),
            imgSrc, imageUrl;

        elImageInstance.find('.openseadragon-container').remove();
        elImageItem.find('.toolbar form').remove();

        elEnableZoom
          .unbind()
          .show()
          .click(function() {
            _this.showOsdContent(domId, elStaticThumb, elEnableZoom);
          });

       elStaticThumb.height('100%').width('100%').show();

        if (isInViewport) {
          imageUrl = _this.imagesList.attrs[domId].imageUrl;
          imgSrc   = $.Iiif.getUriWithHeight(imageUrl, jQuery(elImageInstance).height());

          elStaticThumb.attr('src', imgSrc);
        }

      });

    },


    showOsdContent: function(domId, elStaticThumb, elEnableZoom) {
      var infoJson;

      elEnableZoom.hide();
      elStaticThumb.hide();

      infoJson = $.getJsonFromUrl(this.imagesList.attrs[domId].infoJsonUrl, false);

      $.OpenSeadragon({
        'id':           domId + '-osd',
        'toolbar':      domId + '-osd-toolbar',
        'tileSources':  $.Iiif.prepJsonForOsd(infoJson)
      });

      // hide browser based full-screen icon
      jQuery('#' + domId + '-osd-toolbar button:last-child').hide();
    },


    isItemInViewport: function(viewportWidth, item) {
      var position = item.position().left + item.width();

      return (position > 0 && item.position().left < viewportWidth);
    },


    attachEvents: function() {
      this.attachWindowEvents();
      this.attachNavEvents();
      this.attachKeyboardScrollingEvents();
    },


    attachWindowEvents: function() {
      var _this = this;

      this.parent.element.dialog({
        resizeStop: function(event, ui) {
          _this.setFrameAndItemsDimensions();
          _this.loadImagesInViewPort();
        }
      });

      this.parent.element.on('dialogresizestop dialogextendmaximize dialogextendrestore', function(event, ui) {
        _this.setFrameAndItemsDimensions();
        _this.loadImagesInViewPort();
      });

    },


    attachKeyboardScrollingEvents: function() {
      var _this = this,
          duration = 300,
          leftArrowKey = 37,
          rightArrowKey = 39,
          elScrollFrame = jQuery('#' + this.parent.id + ' .' + this.frameCls);

      // to detect if cursor is above this widget's scroll frame
      elScrollFrame.on('mouseenter', function() { elScrollFrame.data('hover', true); });
      elScrollFrame.on('mouseleave', function() { elScrollFrame.data('hover', false); });

      jQuery(document).on('keydown', function(event) {
        var scrollWidth = _this.element.width(),
            posLeft;

        if (elScrollFrame.data('hover')) {

          posLeft = _this.element.scrollLeft();

          if (event.keyCode === leftArrowKey) {
            _this.element.animate({ scrollLeft: posLeft - scrollWidth}, duration);
          }

          if (event.keyCode === rightArrowKey) {
            _this.element.animate({ scrollLeft: posLeft + scrollWidth}, duration);
          }
        }

      });
    },


    attachNavEvents: function() {
      var _this = this,
          navToolbar = this.parent.toolbar.element.find('.' + this.navToolbarCls),
          selectorMetadataView   = '.mirador-icon-metadata-view',
          selectorThumbnailsView = '.mirador-icon-thumbnails-view';

      this.element.scrollStop(function() {
        _this.loadImagesInViewPort();
      });

      navToolbar.on('click', selectorMetadataView, function() {
        $.viewer.loadMetadataView(_this.manifestId);
      });

      navToolbar.on('click', selectorThumbnailsView, function() {
        $.viewer.loadThumbnailsView(_this.manifestId);
      });

    }

  };


}(Mirador));
(function($) {

  $.MetadataView = function(options) {

    jQuery.extend(this, {
      currentImg:           null,
      element:              null,
      parent:               null,
      metadata:             null,
      metadataListingCls:   'metadata-listing',
      navToolbarCls:        'mirador-metadata-view-nav-toolbar'
    }, options);

    this.metadata = $.getMetadataByManifestId(this.manifestId);
  };


  $.MetadataView.prototype = {

    render: function() {
      var _this = this,
          types = [ 'about', 'details', 'rights', 'links' ],
          tplData = {
            metadataListingCls: this.metadataListingCls
          };

      jQuery.each(types, function(index, type) {
        tplData[type] = [];

        jQuery.each(_this.metadata[type], function(key, value) {

          if (typeof value === 'object') {
            value = $.stringifyObject(value);
          }

          if (value && value !== '') {
            tplData[type].push({
              label: $.extractLabelFromAttribute(key),
              value: _this.addLinksToUris(value)
            });

          }
        });
      });

      this.element.append($.Templates.metadataView.listTerms(tplData));

      this.addToolbarNav();
      this.attachEvents();
    },


    addToolbarNav: function() {
      this.parent.toolbar.append($.Templates.metadataView.navToolbar({
        navToolbarCls: this.navToolbarCls
      }));
    },


    attachEvents: function() {
      var navToolbar = this.parent.toolbar.element.find('.' + this.navToolbarCls),
          selectorScrollView     = '.mirador-icon-scroll-view',
          selectorThumbnailsView = '.mirador-icon-thumbnails-view',
          _this = this;

      navToolbar.on('click', selectorScrollView, function() {
        $.viewer.loadScrollView(_this.manifestId);
      });

      navToolbar.on('click', selectorThumbnailsView, function() {
        $.viewer.loadThumbnailsView(_this.manifestId);
      });
    },


    addLinksToUris: function(text) {
      // http://stackoverflow.com/questions/8188645/javascript-regex-to-match-a-url-in-a-field-of-text
      var regexUrl = /(http|ftp|https):\/\/[\w\-]+(\.[\w\-]+)+([\w.,@?\^=%&amp;:\/~+#\-]*[\w@?\^=%&amp;\/~+#\-])?/gi,
          textWithLinks = text,
          matches;

      if (typeof text === 'string') {
        matches = text.match(regexUrl);

        if (matches) {
          jQuery.each(matches, function(index, match) {
            textWithLinks = textWithLinks.replace(match, '<a href="' + match + '" target="_blank">' + match + '</a>');
          });
        }
      }

      return textWithLinks;
    }


  };


}(Mirador));
(function($) {

  $.ThumbnailsView = function(options) {

    jQuery.extend(this, {
      currentImg:           null,
      element:              null,
      imagesList:           [],
      sliderCls:            'thumbnails-view-slider',
      sliderId:             '',
      thumbsListingCls:     '',
      thumbsMaxHeight:      $.DEFAULT_SETTINGS.thumbnailsView.thumbsMaxHeight,
      thumbsMinHeight:      $.DEFAULT_SETTINGS.thumbnailsView.thumbsMinHeight,
      thumbsDefaultZoom:    $.DEFAULT_SETTINGS.thumbnailsView.thumbsDefaultZoom,
      thumbsDefaultHeight:  this.thumbsMinHeight,
      parent:               null,
      navToolbarCls:        'mirador-thumbnails-view-nav-toolbar'
    }, options);

  };


  $.ThumbnailsView.prototype = {

    render: function() {
      this.sliderId         = this.parent.element.attr('id') + '-thumbs-slider';
      this.thumbsListingCls = this.parent.element.attr('id') + '-thumbs-listing';

      this.thumbsDefaultHeight = this.thumbsMinHeight + ((this.thumbsMaxHeight - this.thumbsMinHeight) * this.thumbsDefaultZoom);

      this.element.html('');
      this.addToolbarNav();
      this.loadContent();
      this.setUpSlider();
      this.attachEvents();
    },


    loadContent: function() {
      var _this = this,
      tplData = {
        defaultHeight:  this.thumbsDefaultHeight,
        listingCssCls:  this.thumbsListingCls
      };

      tplData.thumbs = jQuery.map(this.imagesList, function(image, index) {
        return {
          thumbUrl: $.Iiif.getUriWithHeight(image.imageUrl, _this.thumbsMaxHeight),
          title:    image.title,
          id:       image.id
        };
      });

      this.element.append($.Templates.thumbnailsView.listImages(tplData));
    },


    addToolbarNav: function() {
      this.parent.toolbar.append($.Templates.thumbnailsView.navToolbar({
        navToolbarCls: this.navToolbarCls
      }));
    },


    setUpSlider: function() {
      var slider =
        jQuery('<div/>')
      .attr('id', this.sliderId)
      .addClass(this.sliderCls)
      .slider({
        max:    this.thumbsMaxHeight,
        min:    this.thumbsMinHeight,
        value:  this.thumbsDefaultHeight,
        step:   1
      });
      this.parent.toolbar.append(slider);
    },


    attachEvents: function() {
      this.attachKeyboardScrollingEvents();
      this.attachNavEvents();
    },


    attachKeyboardScrollingEvents: function() {
      var _this = this,
          duration = 300,
          upArrowKey = 38,
          downArrowKey = 40,
          elThumbsFrame = this.parent.content.element;

      // to detect if cursor is above this widget's scroll frame
      elThumbsFrame.on('mouseenter', function() { elThumbsFrame.data('hover', true); });
      elThumbsFrame.on('mouseleave', function() { elThumbsFrame.data('hover', false); });

      jQuery(document).on('keydown', function(event) {
        var scrollHeight = _this.parent.content.element.height(),
            posTop;

        if (elThumbsFrame.data('hover')) {
          posTop = _this.element.scrollTop();

          if (event.keyCode === upArrowKey) {
            _this.element.animate({ scrollTop: posTop - scrollHeight}, duration);
          }

          if (event.keyCode === downArrowKey) {
            _this.element.animate({ scrollTop: posTop + scrollHeight}, duration);
          }
        }

      });
    },


    attachNavEvents: function() {
      var selectorImagesListing = '.' + this.thumbsListingCls + ' li img',
          selectorImageLinks    = '.' + this.thumbsListingCls + ' li a',
          selectorSlider        = '#' + this.sliderId,
          navToolbar            = this.parent.toolbar.element.find('.' + this.navToolbarCls),
          selectorScrollView    = '.mirador-icon-scroll-view',
          selectorMetadataView  = '.mirador-icon-metadata-view',
          _this = this;

      jQuery(selectorSlider).on('slide', function(event, ui) {
        jQuery(selectorImagesListing).attr('height', ui.value);
      });

      jQuery(selectorImageLinks).on('click', function(event) {
        var elemTarget  = jQuery(event.target),
            imageId;

        imageId = elemTarget.data('image-id');
        $.viewer.loadImageView(_this.manifestId, imageId);
      });

      navToolbar.on('click', selectorMetadataView, function() {
        $.viewer.loadMetadataView(_this.manifestId);
      });

      navToolbar.on('click', selectorScrollView, function() {
        $.viewer.loadScrollView(_this.manifestId);
      });

    }

  };


}(Mirador));

(function($) {

  $.WidgetStatusBar = function(options) {

    jQuery.extend(true, this, {
      appendTo:       'body',
      element:        null,
      height:         $.DEFAULT_SETTINGS.widgetStatusBar.height,
      parent:         null,
      showStatusbar:  false,
      statusbarCls:   'mirador-widget-statusbar'
    }, options);

    this.element = this.element || jQuery('<div/>');
    this.create();
  };


  $.WidgetStatusBar.prototype = {

    create: function() {
      this.element
        .addClass(this.statusbarCls)
        .height(this.height)
        .appendTo(this.parent.element);

      this.hide();
      if (this.showStatusbar) this.show();
    },

    append: function(item) {
      this.element.append(item);
    },

    show: function() {
      this.element.show();
    },

    hide: function() {
      this.element.hide();
    }
  };

}(Mirador));

(function($) {

  $.WidgetContent = function(options) {

    jQuery.extend(true, this, {
      appendTo:       'body',
      element:        null,
      contentCls:     'mirador-widget-content',
      parent:         null
    }, options);

    this.element = this.element || jQuery('<div/>');
    this.create();
  };


  $.WidgetContent.prototype = {

    create: function() {
      var _this = this;

      this.element
        .addClass(this.contentCls)
        .height(_this.getHeight())
        .appendTo(this.parent.element);

        this.parent.element.on('dialogresize dialogresizestop dialogextendmaximize dialogextendrestore', function(event, ui) {
          _this.updateHeight();
        });
    },


    updateHeight: function() {
      this.element.height(this.getHeight());
    },


    getHeight: function() {
      // widget content height = dialog's height - toolbar's height - status bar's height
      var height = this.parent.element.height();

      height -= this.parent.toolbar.element.outerHeight(true);
      height -= this.parent.statusbar.element.outerHeight(true);

      return height;
    },


    show: function() {
      this.element.show();
    },


    hide: function() {
      this.element.hide();
    }


  };

}(Mirador));


(function($) {

  $.OpenSeadragon = function(options) {

    return OpenSeadragon(

      jQuery.extend({
        preserveViewport: true,
        visibilityRatio:  1,
        minZoomLevel:     0,
        defaultZoomLevel: 0,
        prefixUrl:        'images/openseadragon/',
        navImages: {
          zoomIn: {
            REST:   'zoom-in.png',
            GROUP:  'zoom-in.png',
            HOVER:  'zoom-in-hover.png',
            DOWN:   'zoom-in-hover.png'
          },
          zoomOut: {
            REST:   'zoom-out.png',
            GROUP:  'zoom-out.png',
            HOVER:  'zoom-out-hover.png',
            DOWN:   'zoom-out-hover.png'
          },
          home: {
            REST:   'fit.png',
            GROUP:  'fit.png',
            HOVER:  'fit-hover.png',
            DOWN:   'fit-hover.png'
          },
          fullpage: {
            REST:   'full-screen.png',
            GROUP:  'full-screen.png',
            HOVER:  'full-screen-hover.png',
            DOWN:   'full-screen-hover.png'
          },
          previous: {
            REST:   'previous.png',
            GROUP:  'previous.png',
            HOVER:  'previous-hover.png',
            DOWN:   'previous-hover.png'
          },
          next: {
            REST:   'next.png',
            GROUP:  'next.png',
            HOVER:  'next-hover.png',
            DOWN:   'next-hover.png'
          }
        }
      }, options)

    );

  };

}(Mirador));
(function($) {

  $.WidgetScale = function(options) {
    jQuery.extend(true, this, {
      appendTo:           'body',
      element:            null,
      parent:             null,
      height:             $.DEFAULT_SETTINGS.scale.height,
      width:              $.DEFAULT_SETTINGS.scale.maxWidth,
      physicalScaleWidth: null,
      showScale:          false,
      scaleCls:           'mirador-image-scale',
      dimensionsProvided: false,
      visualisation:      {},
      controlElement:     null
    }, options);

    jQuery(this.parent.element).find("." + this.scaleCls).remove();

    this.element = this.element || jQuery('<svg/>');
    this.create();
  };

  $.WidgetScale.prototype = {

    create: function() {

      var _this = this;

      scaleDimensions = this.calculateScaleDimensions();
      visPadding = 10;

      if (this.height === null || this.width === null ) {
        console.log("no dimensions");
      }

      var w = this.width + visPadding*3;
      var h = this.height;

      _this.controlElement = _this.parent.parent.element.find('.mirador-image-dimensions');

      var scale = this.visualisation.scale = d3.select(this.parent.element[0])
      .append('svg')
      .attr('class', this.scaleCls)
      .attr('height', h)
      .attr('width', w);
      console.log(this.scaleCls);
      var xScale = this.visualisation.xScaleFunction = d3.scale.linear()
      .domain([0, d3.max(scaleDimensions)])
      .range([visPadding, w - (visPadding*2)]);

      var axis = this.visualisation.axis = d3.svg.axis()
      .scale(xScale)
      .orient('bottom')
      .ticks(4);

      scale.append('g')
      .attr('class', 'axis x')
      .attr('transform', 'translate(' + visPadding + ',' + ( h - visPadding * 4.5 ) + ')')
      .call(axis);

      scale.append('text')
      .attr('class', 'scale-units')
      .text(_this.parent.unitsLong)
      .attr('transform', 'translate(' + visPadding + ',' + ( h - visPadding ) + ')');

      this.render();
    },

    render: (function() {

      return $.debounce( function(width) {
        var scale = this.visualisation.scale,
        axis = this.visualisation.axis,
        xScaleFunction = this.visualisation.xScaleFunction,
        newWidth = this.calculateScaleDimensions();

        xScaleFunction.domain([0, d3.max(newWidth)]);

        scale.select('.x.axis')
        .transition()
        .duration(850)
        .call(axis);

        if (this.showScale && this.dimensionsProvided )  {
          this.visualisation.scale.attr('class', this.scaleCls);
          this.controlElement.removeClass('noDimensionsSet');
        } else {
          this.visualisation.scale.attr('class', function() { return this.scaleCls + ' hidden'; });
          this.controlElement.addClass('noDimensionsSet');
        }
      }, 50);
    })(),

    calculateScaleDimensions: function() {
      var _this = this;
      var scaleSize = null;
      var viewportPercentWidth;

      // get width of viewport in pixels.
      // getBounds() returns an openseadragon Rect object.
      var viewportPixelWidth = _this.parent.parent.element.width();
      var scalePixelWidth = _this.width;

      // divide by width of scale in pixels to get the scale ratio.
      var scaleRatio = scalePixelWidth/viewportPixelWidth;

      // get width of viewport as a multiple of the image width.
      if (_this.parent.osd !== null && _this.parent.osd.viewport !== null) {
        viewportPercentWidth = _this.parent.osd.viewport.getBounds().width;
      }

      // get width in absolute dimensions.
      // divide to get the phsyical width of current viewport.
      physicalViewportWidth = _this.parent.width*viewportPercentWidth;

      // multiply by scale ratio to get width of scale.
      scaleSize = physicalViewportWidth*scaleRatio;
      return [scaleSize];
    },

    show: function() {
      this.element.fadeIn();
    },

    hide: function() {
      this.element.fadeOut();
    }


  };

}(Mirador));

// Manage the saving and retrieval of settings and
// initialisation options.

(function($) {

  $.SettingsLoader = function(options) {
    var _this = this;
    jQuery.extend(true, this, {
      config : (_this.load()) ? _this.load() : options
    });
    // console.log('loaded Object:');
    // console.log(_this.load());
  };

  $.SettingsLoader.prototype = {
    load : function() {
      if (!localStorage.getItem('Mirador_data')) {
        console.log("No saved session available");
        return false;
      }
      console.log('session restored');
      return JSON.parse(localStorage.getItem('Mirador_data'));
    }
  };

})(Mirador);

// Manage the saving and retrieval of settings and // initialisation options.

(function($) {
  $.SaveController = function(options) {
    jQuery.extend(true, this, {
      saveInterval: $.DEFAULT_SETTINGS.saveController.saveInterval
    });
  };

  $.SaveController.prototype = {
    buildJSON : function() {

      var widgetIndex = {},
      configData = {
        id: 'viewer',
        data: [
        ]
      },
      buildWidgetJSON = function(widget) {

        var widgetState = {
          height: widget.getHeight(),
          width: widget.getWidth(),
          type: widget.type,
          position: widget.position
        };

        if (widgetState.type === 'imageView') {
          widgetState.openAt = widget.openAt,
          widgetState.zoomState = (function(bounds) {

            return {
              x: bounds.x,
              y: bounds.y,
              width: bounds.width,
              height: bounds.height
            };

          })(widget.viewObj.osd.viewport.getBounds()),
          widgetState.dimensions = [],
          widgetState.lockedViews = [];
        }
        if (widgetState.type === "thumbnailsView") {

        }
        if (widgetState.type === "scrollView") {

        }
        // osdRect: 34,
        // scrollTop: 384,
        // thumbSize: 34,
        // scrollLeft: 234
        return widgetState;
      };

      // Build widgetIndex object for later reference. Add
      // objects as properties, with keys as manifestIds
      // and values of widget configuration properties.
      // See options for output examples.
      jQuery.each($.viewer.widgets, function(index, widget) {
        if (!widgetIndex[widget.manifestId]) {
          widgetIndex[widget.manifestId] = [];
        }
        widgetIndex[widget.manifestId].push(buildWidgetJSON(widget));
      });
      // console.log('widgetIndex');
      // console.log(widgetIndex);

      jQuery.each($.manifests, function(item) {

        var manifestEntry = {
          manifestUri: $.manifests[item].uri,
          title: $.getTitlePrefix($.getMetadataByManifestId(item).details)[0],
          widgets: [],
          location: $.manifests[item].location || '-'
        };

        if ( widgetIndex.hasOwnProperty(item) ) {

          manifestEntry.widgets = widgetIndex[item];

        }

        configData.data.push( manifestEntry );

      });

      // console.log('configData');
      // console.log(configData);

      return JSON.stringify(configData);
    },

    save : function() {
      if ($.viewer) {
        localStorage.setItem('Mirador_data', this.buildJSON());
      }

      // console.log("saved at " + Date.now());

      setTimeout( function(){
        $.viewer.saveController.save();
        $.viewer.addStatusBarMessage('right', 'Workspace saved at ' + (new Date()), 1000, false);
      }, ($.viewer) ? $.viewer.saveController.saveInterval : $.DEFAULT_SETTINGS.saveController.saveInterval);
    }
  };

})(Mirador);

(function($) {

  $.AnnotationBottomPanel = function(options) {
    jQuery.extend(true, this, {
      visible: false,
      parent: null,
      hidden: false
    }, options);


    this.create();
  };

  $.AnnotationBottomPanel.prototype = {

    create: function() {
      var _this = this,
      templateData = null;
      this.element = jQuery($.Templates.imageView.annotationDetail(templateData));
      this.showPanelButton = jQuery($.Templates.imageView.annotationDetailToggle());
      this.annotationViewport = _this.parent.parent.parent.element.find('.mirador-widget-content');
      this.annotationViewport.append(_this.element);
      this.annotationViewport.append(_this.showPanelButton.hide());
      _this.hide();
      _this.bindEvents();
    },

    focusSelected: function(id) {
      this.visible = true;
      this.render();
      this.show();
    },

    bindEvents: function() {
      var _this = this;
      this.element.find('.annotationDetailToggle').on('click', function() { _this.toggleHidden(); });
      this.showPanelButton.find('.annotationDetailToggle').on('click', function() { _this.toggleHidden(); });
    },

    render: function() {
      var _this = this,
      id = _this.parent.selectedAnnotation,

      annotationText = jQuery.grep(_this.parent.annotations, function(a) {
        return a.id === id;
      })[0].content;

      _this.element.find('p').fadeOut(function() {
        jQuery(this).text(annotationText).fadeIn();
      });
    },

    deselect: function() {
      var _this = this;
      _this.visible = false;
      _this.hidden = false;
      _this.hide();
    },

    toggleHidden: function() {
      var _this = this;
      console.log("toggle called");
      
      if (_this.hidden) {
        _this.hidden = false;
        _this.show();
        return;
      }

      _this.hidden = true;
      _this.hide();
    },

    show: function() {
      var _this = this;
      if (this.hidden || !this.visible) return;
      _this.showPanelButton.fadeOut('fast');
      this.element.animate({ height: '20%', opacity: 1, display:'block' });   
    },

    hide: function() {
      var _this = this;
      this.element.animate({ height: 0, opacity: 0, display: 'none' });
      if (!_this.hidden || !_this.visible) {
        _this.showPanelButton.fadeOut('fast');
        return;
      }
      _this.showPanelButton.fadeIn('slow');
    }

  };

}(Mirador));

(function($) {

  $.AnnotationLayerRegionController = function(options) {
    jQuery.extend(true, this, {
      visible:true,
      lastSelected: null,
      lastHovered: null
    }, options);

    this.create();
  };

  $.AnnotationLayerRegionController.prototype = {

    create: function() {
      this.render();
      this.hide();
    },

    append: function(item) {
      this.element.append(item);
    },

    sortRegionsBySize: function(a, b) {
      var areaA = parseInt(a.region[2], 10)*parseInt(a.region[3], 10);
      var areaB = parseInt(b.region[2], 10)*parseInt(b.region[3], 10);
      return areaB - areaA;
    },

    render: function() {
      var _this = this,

      // using the Array.prototype.slice() below creates a duplicate of the array, 
      // instead of sorting it in place, which would shuffle the list order of 
      // annotations, an undesired effect.
      annotationsBySize = this.parent.get('annotations').slice().sort(this.sortRegionsBySize);

      if (_this.parent.get('visible')) {

        jQuery.each(annotationsBySize, function(index, annotation) {
          var elemString = '<div class="annotation" id="region_'+ annotation.id + '">',
          elem = jQuery(elemString)[0];

          _this.parent.parent.osd.drawer.addOverlay(elem, annotation.osdFrame);
        });

        setTimeout( function() { _this.bindEvents(); }, 200);
      }
    },

    bindEvents: function() {
      var _this = this;
      jQuery('.annotation').on('click', function(event) { _this.clickRegion(event); } );
      jQuery('.annotation').on('mouseenter', function(event) { _this.hoverRegion(event); } );
      jQuery('.annotation').on('mouseleave', function() { _this.leaveRegion(event); } );
    },

    leaveRegion: function() {
      this.parent.set('hoveredAnnotation', null, 'region');
    },

    clickRegion: function(event) {
      var _this = this,
      id = jQuery(event.target).attr('id').split('_')[1];

      _this.parent.set('selectedAnnotation', id, 'region');
    },

    hoverRegion: function(event) {
      var _this = this,
      id = jQuery(event.target).attr('id').split('_')[1];

      _this.parent.set('hoveredAnnotation', id, 'region');
    },
    
    accentHovered: function(id) {
      var _this = this;

      if ( id === null ) {
        if (_this.lastHovered === null) { } else { _this.lastHovered.removeClass('hovered'); }
      }

      var hoveredElementId = '#region_' + id,
      hoveredElement = jQuery(hoveredElementId);
      
      if (_this.lastHovered === null) { } else { _this.lastHovered.removeClass('hovered'); }
      if ( !hoveredElement.hasClass('selected') ) { hoveredElement.addClass('hovered'); }
      _this.lastHovered = hoveredElement;
    },
    
    focusSelected: function(id) {
      var _this = this,
      selectedElementId = '#region_' + id,
      selectedElement = jQuery(selectedElementId);
      
      if (_this.lastSelected === null) { } else {_this.lastSelected.removeClass('selected');}
      selectedElement.removeClass('hovered');
      selectedElement.addClass('selected');
      _this.lastSelected = selectedElement;

      var annotationFrame = jQuery.grep(_this.parent.annotations, function(a) { return a.id === id; } )[0].osdFrame;
      _this.parent.parent.osd.viewport.fitBounds(annotationFrame);
    },

    deselect: function() {
      var _this = this;
      _this.lastSelected.removeClass('selected');
    },

    show: function() {
      this.render();
    },

    hide: function() {
      if (!this.parent.annotationUrls) {
        return;
      }
      this.parent.parent.osd.drawer.clearOverlays();
    }

  };

}(Mirador));

(function($) {

  $.AnnotationListing = function(options) {
    jQuery.extend(true, this, {
      element:null,
      id: null,
      title: null,
      content: null
    }, options);

    this.create();
  };

  $.AnnotationListing.prototype = {

    create: function() {
      this.render();
    },

    render: function() {
      templateData = {
        id: this.id,
        title: this.title,
        content: this.content
      };

      this.element = jQuery($.Templates.imageView.annotationListing(templateData));
      this.parent.listShell.append(this.element);
      this.bindEvents();
    },

    bindEvents: function() {
      var _this = this;
      this.element.on('click', function() { _this.parent.parent.set('selectedAnnotation', _this.id, 'listing');} );
      this.element.on('mouseover', function() { _this.parent.parent.set('hoveredAnnotation', _this.id, 'listing');} );
      this.element.on('mouseleave', function() { _this.parent.parent.set('hoveredAnnotation', null, 'listing');} );
    },

    show: function() {
      this.element.fadeIn();
    },

    hide: function() {
      this.element.fadeOut();
    }

  };

}(Mirador));

(function($) {

  $.AnnotationLayerSidePanel = function(options) {
    jQuery.extend(true, this, {
      element: null,
      listShell: null,
      visible: true,
      listings: [],
      lastSelected: null,
      lastHovered: null
    }, options);

    this.create();
  };

  $.AnnotationLayerSidePanel.prototype = {

    create: function() {
      var templateData = {
        annotations: this.parent.get('annotations'),
        annotationCount: this.parent.get('annotations').length,
        imageAnnotationCount: this.parent.get('commentAnnotations'), // filtered
        textAnnotationCount: this.parent.get('textAnnotations') // filtered
      };

      this.element = jQuery($.Templates.imageView.annotationPanel(templateData));
      this.listShell = this.element.find('.annotationList');
      this.listStats = this.element.find('.annotationPanelHeader');
      this.parent.parent.element.append(this.element);
      this.render();
      if (!this.parent.get('visible')) {
        this.element.hide();
      }
    },
    
    bindEvents: function() {
    },
    
    render: function() {
      var _this = this;
      this.listings = [];
      this.listShell.empty();

      var templateData = {
        annotations: this.parent.get('annotations'),
        annotationCount: this.parent.get('annotations').length,
        imageAnnotationCount: this.parent.get('commentAnnotations'), // filtered
        textAnnotationCount: this.parent.get('textAnnotations') // filtered
      };

      this.listStats.replaceWith($.Templates.imageView.annotationStats(templateData));
      this.listStats = this.element.find('.annotationPanelHeader');

      jQuery.each(this.parent.get('annotations'), function(index, annotation) {

        var listing = new $.AnnotationListing({
          id: annotation.id,
          title: annotation.title,
          content: annotation.content,
          parent: _this
        });

        _this.listings.push(listing);

      });

      this.bindEvents();
    },

    focusSelected: function(id, source) {
      var _this = this;

      var selectedElementId = '#listing_' + id,
      selectedElement = jQuery(selectedElementId);

      if ( _this.lastSelected === null) { } else { _this.lastSelected.removeClass('selected'); }
      selectedElement.removeClass('hovered');
      selectedElement.addClass('selected');
      _this.lastSelected = selectedElement;

      if (source !== 'listing') {
        _this.listShell.stop().scrollTo(selectedElement, 500);
      } 

    },

    deselect: function() {
      var _this = this;

      if ( _this.lastSelected === null ) { } else { _this.lastSelected.removeClass('selected'); }
      _this.lastSelected = null;
    },

    accentHovered: function(id) {
      var _this = this;

      if ( id === null ) {
        if (_this.lastHovered === null) { } else { _this.lastHovered.removeClass('hovered'); }
      }

      var hoveredElementId = '#listing_' + id,
      hoveredElement = jQuery(hoveredElementId);

      if (_this.lastHovered === null) { } else { _this.lastHovered.removeClass('hovered'); }
      if ( !hoveredElement.hasClass('selected') ) { hoveredElement.addClass('hovered'); }
      _this.lastHovered = hoveredElement;
    },

    show: function() {
      this.render();
      this.element.stop().show();
    },

    hide: function() {
      this.element.stop().hide();
    }

  };

}(Mirador));
