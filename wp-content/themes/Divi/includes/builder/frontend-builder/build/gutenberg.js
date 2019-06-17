/*! This minified app bundle contains open source software from several third party developers. Please review CREDITS.md in the root directory or LICENSE.md in the current directory for complete licensing, copyright and patent information. This bundle.js file and the included code may not be redistributed without the attributions listed in LICENSE.md, including associate copyright notices and licensing information. */
!function(t,e){for(var n in e)t[n]=e[n]}(window,function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=451)}({1:function(t,e){t.exports=window.React},102:function(t,e){t.exports=window.et_gb.wp.hooks},103:function(t,e,n){var r=n(266),o=n(311);t.exports=function(t,e){var n=o(t,e);return r(n)?n:void 0}},104:function(t,e,n){var r=n(90),o=n(70),i="[object Symbol]";t.exports=function(t){return"symbol"==typeof t||o(t)&&r(t)==i}},107:function(t,e){t.exports=function(t,e){return t===e||t!=t&&e!=e}},1073:function(t,e,n){},109:function(t,e,n){var r=n(104),o=1/0;t.exports=function(t){if("string"==typeof t||r(t))return t;var e=t+"";return"0"==e&&1/t==-o?"-0":e}},11:function(t,e,n){var r=n(177),o=n(178),i=n(146),u=n(20);t.exports=function(t,e){return(u(t)?r:o)(t,i(e))}},110:function(t,e,n){var r=n(68);t.exports=function(){return r.Date.now()}},118:function(t,e){t.exports=window.et_gb.wp.data},119:function(t,e,n){var r=n(68).Symbol;t.exports=r},120:function(t,e){t.exports=function(t){return function(e){return t(e)}}},121:function(t,e){var n=9007199254740991,r=/^(?:0|[1-9]\d*)$/;t.exports=function(t,e){var o=typeof t;return!!(e=null==e?n:e)&&("number"==o||"symbol"!=o&&r.test(t))&&t>-1&&t%1==0&&t<e}},122:function(t,e,n){var r=n(20),o=n(207),i=n(273),u=n(28);t.exports=function(t,e){return r(t)?t:o(t,e)?[t]:i(u(t))}},123:function(t,e,n){var r=n(184),o=n(500);t.exports=function t(e,n,i,u,c){var a=-1,s=e.length;for(i||(i=o),c||(c=[]);++a<s;){var f=e[a];n>0&&i(f)?n>1?t(f,n-1,i,u,c):r(c,f):u||(c[c.length]=f)}return c}},124:function(t,e,n){var r=n(313),o=n(70),i=Object.prototype,u=i.hasOwnProperty,c=i.propertyIsEnumerable,a=r(function(){return arguments}())?r:function(t){return o(t)&&u.call(t,"callee")&&!c.call(t,"callee")};t.exports=a},125:function(t,e,n){(function(t){var r=n(68),o=n(213),i=e&&!e.nodeType&&e,u=i&&"object"==typeof t&&t&&!t.nodeType&&t,c=u&&u.exports===i?r.Buffer:void 0,a=(c?c.isBuffer:void 0)||o;t.exports=a}).call(this,n(174)(t))},129:function(t,e,n){var r=n(307),o=n(194),i=n(312),u=n(268),c=n(269),a=n(90),s=n(226),f=s(r),p=s(o),l=s(i),d=s(u),v=s(c),b=a;(r&&"[object DataView]"!=b(new r(new ArrayBuffer(1)))||o&&"[object Map]"!=b(new o)||i&&"[object Promise]"!=b(i.resolve())||u&&"[object Set]"!=b(new u)||c&&"[object WeakMap]"!=b(new c))&&(b=function(t){var e=a(t),n="[object Object]"==e?t.constructor:void 0,r=n?s(n):"";if(r)switch(r){case f:return"[object DataView]";case p:return"[object Map]";case l:return"[object Promise]";case d:return"[object Set]";case v:return"[object WeakMap]"}return e}),t.exports=b},130:function(t,e,n){var r=n(119),o=n(95),i=n(20),u=n(104),c=1/0,a=r?r.prototype:void 0,s=a?a.toString:void 0;t.exports=function t(e){if("string"==typeof e)return e;if(i(e))return o(e,t)+"";if(u(e))return s?s.call(e):"";var n=e+"";return"0"==n&&1/e==-c?"-0":n}},134:function(t,e,n){var r=n(41),o=n(104),i=NaN,u=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,s=/^0o[0-7]+$/i,f=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(o(t))return i;if(r(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=r(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(u,"");var n=a.test(t);return n||s.test(t)?f(t.slice(2),n?2:8):c.test(t)?i:+t}},135:function(t,e){t.exports=function(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}},138:function(t,e,n){var r=n(314),o=n(120),i=n(176),u=i&&i.isTypedArray,c=u?o(u):r;t.exports=c},139:function(t,e,n){"use strict";n.d(e,"c",function(){return u}),n.d(e,"b",function(){return c}),n.d(e,"d",function(){return a}),n.d(e,"f",function(){return s}),n.d(e,"h",function(){return f}),n.d(e,"g",function(){return p}),n.d(e,"a",function(){return l}),n.d(e,"e",function(){return d});var r=n(2),o=n.n(r),i=function(){return o()(window,"et_builder_gutenberg.helpers",{})},u=function(){return o()(i(),"postType",!1)},c=function(){return o()(i(),"postID",!1)},a=function(){return o()(i(),"vbUrl",!1)},s=function(){return o()(i(),"builderUsed",!1)},f=function(){return o()(i(),"scriptDebug",!1)},p=function(){return o()(i(),"isEnabled",!1)},l=function(){return o()(i(),"canToggle",!1)},d=function(){return o()(i(),"i18n",!1)}},141:function(t,e,n){var r=n(230);t.exports=function(t,e,n){"__proto__"==e&&r?r(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}},145:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},146:function(t,e,n){var r=n(82);t.exports=function(t){return"function"==typeof t?t:r}},147:function(t,e,n){var r=n(103)(Object,"create");t.exports=r},148:function(t,e,n){var r=n(107);t.exports=function(t,e){for(var n=t.length;n--;)if(r(t[n][0],e))return n;return-1}},149:function(t,e,n){var r=n(329);t.exports=function(t,e){var n=t.__data__;return r(e)?n["string"==typeof e?"string":"hash"]:n.map}},151:function(t,e){var n=9007199254740991;t.exports=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=n}},152:function(t,e,n){var r=n(123);t.exports=function(t){return null!=t&&t.length?r(t,1):[]}},161:function(t,e){var n=Object.prototype;t.exports=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||n)}},162:function(t,e,n){var r=n(122),o=n(109);t.exports=function(t,e){for(var n=0,i=(e=r(e,t)).length;null!=t&&n<i;)t=t[o(e[n++])];return n&&n==i?t:void 0}},174:function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},176:function(t,e,n){(function(t){var r=n(225),o=e&&!e.nodeType&&e,i=o&&"object"==typeof t&&t&&!t.nodeType&&t,u=i&&i.exports===o&&r.process,c=function(){try{var t=i&&i.require&&i.require("util").types;return t||u&&u.binding&&u.binding("util")}catch(t){}}();t.exports=c}).call(this,n(174)(t))},177:function(t,e){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length;++n<r&&!1!==e(t[n],n,t););return t}},178:function(t,e,n){var r=n(182),o=n(271)(r);t.exports=o},179:function(t,e){t.exports=function(t,e,n){return t==t&&(void 0!==n&&(t=t<=n?t:n),void 0!==e&&(t=t>=e?t:e)),t}},180:function(t,e,n){var r=n(208),o="Expected a function";function i(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError(o);var n=function(){var r=arguments,o=e?e.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var u=t.apply(this,r);return n.cache=i.set(o,u)||i,u};return n.cache=new(i.Cache||r),n}i.Cache=r,t.exports=i},182:function(t,e,n){var r=n(227),o=n(30);t.exports=function(t,e){return t&&r(t,e,o)}},183:function(t,e,n){var r=n(323),o=n(324),i=n(325),u=n(326),c=n(327);function a(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}a.prototype.clear=r,a.prototype.delete=o,a.prototype.get=i,a.prototype.has=u,a.prototype.set=c,t.exports=a},184:function(t,e){t.exports=function(t,e){for(var n=-1,r=e.length,o=t.length;++n<r;)t[o+n]=e[n];return t}},185:function(t,e,n){var r=n(141),o=n(107),i=Object.prototype.hasOwnProperty;t.exports=function(t,e,n){var u=t[e];i.call(t,e)&&o(u,n)&&(void 0!==n||e in t)||r(t,e,n)}},188:function(t,e,n){var r=n(134),o=1/0,i=1.7976931348623157e308;t.exports=function(t){return t?(t=r(t))===o||t===-o?(t<0?-1:1)*i:t==t?t:0:0===t?t:0}},193:function(t,e,n){var r=n(161),o=n(306),i=Object.prototype.hasOwnProperty;t.exports=function(t){if(!r(t))return o(t);var e=[];for(var n in Object(t))i.call(t,n)&&"constructor"!=n&&e.push(n);return e}},194:function(t,e,n){var r=n(103)(n(68),"Map");t.exports=r},195:function(t,e,n){var r=n(152),o=n(277),i=n(250);t.exports=function(t){return i(o(t,void 0,r),t+"")}},2:function(t,e,n){var r=n(162);t.exports=function(t,e,n){var o=null==t?void 0:r(t,e);return void 0===o?n:o}},20:function(t,e){var n=Array.isArray;t.exports=n},205:function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o});var r="divi",o="gutenberg"},207:function(t,e,n){var r=n(20),o=n(104),i=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,u=/^\w*$/;t.exports=function(t,e){if(r(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!o(t))||u.test(t)||!i.test(t)||null!=e&&t in Object(e)}},208:function(t,e,n){var r=n(316),o=n(328),i=n(330),u=n(331),c=n(332);function a(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}a.prototype.clear=r,a.prototype.delete=o,a.prototype.get=i,a.prototype.has=u,a.prototype.set=c,t.exports=a},211:function(t,e,n){var r=n(185),o=n(122),i=n(121),u=n(41),c=n(109);t.exports=function(t,e,n,a){if(!u(t))return t;for(var s=-1,f=(e=o(e,t)).length,p=f-1,l=t;null!=l&&++s<f;){var d=c(e[s]),v=n;if(s!=p){var b=l[d];void 0===(v=a?a(b,d,l):void 0)&&(v=u(b)?b:i(e[s+1])?[]:{})}r(l,d,v),l=l[d]}return t}},213:function(t,e){t.exports=function(){return!1}},214:function(t,e,n){var r=n(343),o=n(272);t.exports=function(t,e){return null!=t&&o(t,e,r)}},215:function(t,e){t.exports=function(t){return function(){return t}}},225:function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n(145))},226:function(t,e){var n=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return n.call(t)}catch(t){}try{return t+""}catch(t){}}return""}},227:function(t,e,n){var r=n(270)();t.exports=r},230:function(t,e,n){var r=n(103),o=function(){try{var t=r(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();t.exports=o},238:function(t,e,n){"use strict";t.exports=n(479)},243:function(t,e,n){"use strict";var r=n(1),o=n.n(r),i=n(139),u=n(7),c=n.n(u),a=n(2),s=n.n(a),f=n(118),p=Object(f.select)("core").getEntityRecord,l=function(){return s()(p("postType",Object(i.c)(),Object(i.b)()),"content.raw")},d=n(300),v=n(854),b="wp:divi/placeholder",h=function(t){return t.replace(RegExp("\x3c!-- /?"+b+" /?--\x3e","g"),"")},g=function(t){return h(t).replace(/<!-- (\/)?wp:(.+?) (\/?)-->/g,"\x3c!-- $1divi:$2 $3--\x3e")},y=!1,_=Object(i.e)().placeholder.block,x=_.title,j=_.description,w=o.a.createElement("svg",{"aria-hidden":"true",role:"img",focusable:"false",className:"dashicon dashicons-format-image",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 16 16"},o.a.createElement("path",{d:"M7.5,6H7v4h0.5c2.125,0,2.125-1.453,2.125-2C9.625,7.506,9.625,6,7.5,6z M8,3C5.239,3,3,5.239,3,8 c0,2.761,2.239,5,5,5s5-2.239,5-5C13,5.239,10.761,3,8,3z M7.5,11h-1C6.224,11,6,10.761,6,10.467V5.533C6,5.239,6.224,5,6.5,5 c0,0,0.758,0,1,0c1.241,0,3.125,0.51,3.125,3C10.625,10.521,8.741,11,7.5,11z"}));e.a={name:"divi/placeholder",tag:b,unwrap:h,settings:{title:x,description:j,icon:w,category:"embed",useOnce:!0,attributes:{content:{type:"string",source:"html"},builder:{type:"string",source:"meta",meta:"_et_pb_use_builder"},old:{type:"string",source:"meta",meta:"_et_pb_old_content"}},supports:{className:!1,customClassName:!1,html:!1},save:function(t){return o.a.createElement(d.RawHTML,null,t.attributes.content)},edit:v.a},hooks:{"divi.addPlaceholder":function(t){return function(t){return"\x3c!-- "+b+" --\x3e"+g(t)+"\x3c!-- /"+b+" --\x3e"}(y=function(t){if(c()(t)||t.indexOf("[et_pb_section")>=0)return t;var e=t;return e="[et_pb_section]"+(e="[et_pb_row]"+(e='[et_pb_column type="4_4"]'+(e="[et_pb_text]"+e+"[/et_pb_text]")+"[/et_pb_column]")+"[/et_pb_row]")+"[/et_pb_section]"}(t))},"blocks.getSaveElement":function(t,e){return"divi/placeholder"!==e.name?t:o.a.createElement(d.RawHTML,null,g(!1===y?l():y))}}}},245:function(t,e){t.exports=function(t,e){return function(n){return t(e(n))}}},246:function(t,e,n){var r=n(247),o=n(124),i=n(20),u=n(125),c=n(121),a=n(138),s=Object.prototype.hasOwnProperty;t.exports=function(t,e){var n=i(t),f=!n&&o(t),p=!n&&!f&&u(t),l=!n&&!f&&!p&&a(t),d=n||f||p||l,v=d?r(t.length,String):[],b=v.length;for(var h in t)!e&&!s.call(t,h)||d&&("length"==h||p&&("offset"==h||"parent"==h)||l&&("buffer"==h||"byteLength"==h||"byteOffset"==h)||c(h,b))||v.push(h);return v}},247:function(t,e){t.exports=function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}},250:function(t,e,n){var r=n(347),o=n(278)(r);t.exports=o},266:function(t,e,n){var r=n(54),o=n(310),i=n(41),u=n(226),c=/^\[object .+?Constructor\]$/,a=Function.prototype,s=Object.prototype,f=a.toString,p=s.hasOwnProperty,l=RegExp("^"+f.call(p).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!i(t)||o(t))&&(r(t)?l:c).test(u(t))}},267:function(t,e,n){var r=n(68)["__core-js_shared__"];t.exports=r},268:function(t,e,n){var r=n(103)(n(68),"Set");t.exports=r},269:function(t,e,n){var r=n(103)(n(68),"WeakMap");t.exports=r},270:function(t,e){t.exports=function(t){return function(e,n,r){for(var o=-1,i=Object(e),u=r(e),c=u.length;c--;){var a=u[t?c:++o];if(!1===n(i[a],a,i))break}return e}}},271:function(t,e,n){var r=n(88);t.exports=function(t,e){return function(n,o){if(null==n)return n;if(!r(n))return t(n,o);for(var i=n.length,u=e?i:-1,c=Object(n);(e?u--:++u<i)&&!1!==o(c[u],u,c););return n}}},272:function(t,e,n){var r=n(122),o=n(124),i=n(20),u=n(121),c=n(151),a=n(109);t.exports=function(t,e,n){for(var s=-1,f=(e=r(e,t)).length,p=!1;++s<f;){var l=a(e[s]);if(!(p=null!=t&&n(t,l)))break;t=t[l]}return p||++s!=f?p:!!(f=null==t?0:t.length)&&c(f)&&u(l,f)&&(i(t)||o(t))}},273:function(t,e,n){var r=n(315),o=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,i=/\\(\\)?/g,u=r(function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(o,function(t,n,r,o){e.push(r?o.replace(i,"$1"):n||t)}),e});t.exports=u},277:function(t,e,n){var r=n(135),o=Math.max;t.exports=function(t,e,n){return e=o(void 0===e?t.length-1:e,0),function(){for(var i=arguments,u=-1,c=o(i.length-e,0),a=Array(c);++u<c;)a[u]=i[e+u];u=-1;for(var s=Array(e+1);++u<e;)s[u]=i[u];return s[e]=n(a),r(t,this,s)}}},278:function(t,e){var n=800,r=16,o=Date.now;t.exports=function(t){var e=0,i=0;return function(){var u=o(),c=r-(u-i);if(i=u,c>0){if(++e>=n)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}},28:function(t,e,n){var r=n(130);t.exports=function(t){return null==t?"":r(t)}},30:function(t,e,n){var r=n(246),o=n(193),i=n(88);t.exports=function(t){return i(t)?r(t):o(t)}},300:function(t,e){t.exports=window.et_gb.wp.element},306:function(t,e,n){var r=n(245)(Object.keys,Object);t.exports=r},307:function(t,e,n){var r=n(103)(n(68),"DataView");t.exports=r},308:function(t,e,n){var r=n(119),o=Object.prototype,i=o.hasOwnProperty,u=o.toString,c=r?r.toStringTag:void 0;t.exports=function(t){var e=i.call(t,c),n=t[c];try{t[c]=void 0;var r=!0}catch(t){}var o=u.call(t);return r&&(e?t[c]=n:delete t[c]),o}},309:function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},31:function(t,e){t.exports=window.jQuery},310:function(t,e,n){var r,o=n(267),i=(r=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"";t.exports=function(t){return!!i&&i in t}},311:function(t,e){t.exports=function(t,e){return null==t?void 0:t[e]}},312:function(t,e,n){var r=n(103)(n(68),"Promise");t.exports=r},313:function(t,e,n){var r=n(90),o=n(70),i="[object Arguments]";t.exports=function(t){return o(t)&&r(t)==i}},314:function(t,e,n){var r=n(90),o=n(151),i=n(70),u={};u["[object Float32Array]"]=u["[object Float64Array]"]=u["[object Int8Array]"]=u["[object Int16Array]"]=u["[object Int32Array]"]=u["[object Uint8Array]"]=u["[object Uint8ClampedArray]"]=u["[object Uint16Array]"]=u["[object Uint32Array]"]=!0,u["[object Arguments]"]=u["[object Array]"]=u["[object ArrayBuffer]"]=u["[object Boolean]"]=u["[object DataView]"]=u["[object Date]"]=u["[object Error]"]=u["[object Function]"]=u["[object Map]"]=u["[object Number]"]=u["[object Object]"]=u["[object RegExp]"]=u["[object Set]"]=u["[object String]"]=u["[object WeakMap]"]=!1,t.exports=function(t){return i(t)&&o(t.length)&&!!u[r(t)]}},315:function(t,e,n){var r=n(180),o=500;t.exports=function(t){var e=r(t,function(t){return n.size===o&&n.clear(),t}),n=e.cache;return e}},316:function(t,e,n){var r=n(317),o=n(183),i=n(194);t.exports=function(){this.size=0,this.__data__={hash:new r,map:new(i||o),string:new r}}},317:function(t,e,n){var r=n(318),o=n(319),i=n(320),u=n(321),c=n(322);function a(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}a.prototype.clear=r,a.prototype.delete=o,a.prototype.get=i,a.prototype.has=u,a.prototype.set=c,t.exports=a},318:function(t,e,n){var r=n(147);t.exports=function(){this.__data__=r?r(null):{},this.size=0}},319:function(t,e){t.exports=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}},320:function(t,e,n){var r=n(147),o="__lodash_hash_undefined__",i=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;if(r){var n=e[t];return n===o?void 0:n}return i.call(e,t)?e[t]:void 0}},321:function(t,e,n){var r=n(147),o=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;return r?void 0!==e[t]:o.call(e,t)}},322:function(t,e,n){var r=n(147),o="__lodash_hash_undefined__";t.exports=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=r&&void 0===e?o:e,this}},323:function(t,e){t.exports=function(){this.__data__=[],this.size=0}},324:function(t,e,n){var r=n(148),o=Array.prototype.splice;t.exports=function(t){var e=this.__data__,n=r(e,t);return!(n<0||(n==e.length-1?e.pop():o.call(e,n,1),--this.size,0))}},325:function(t,e,n){var r=n(148);t.exports=function(t){var e=this.__data__,n=r(e,t);return n<0?void 0:e[n][1]}},326:function(t,e,n){var r=n(148);t.exports=function(t){return r(this.__data__,t)>-1}},327:function(t,e,n){var r=n(148);t.exports=function(t,e){var n=this.__data__,o=r(n,t);return o<0?(++this.size,n.push([t,e])):n[o][1]=e,this}},328:function(t,e,n){var r=n(149);t.exports=function(t){var e=r(this,t).delete(t);return this.size-=e?1:0,e}},329:function(t,e){t.exports=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}},330:function(t,e,n){var r=n(149);t.exports=function(t){return r(this,t).get(t)}},331:function(t,e,n){var r=n(149);t.exports=function(t){return r(this,t).has(t)}},332:function(t,e,n){var r=n(149);t.exports=function(t,e){var n=r(this,t),o=n.size;return n.set(t,e),this.size+=n.size==o?0:1,this}},343:function(t,e){t.exports=function(t,e){return null!=t&&e in Object(t)}},346:function(t,e,n){"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */var r=function(t){};t.exports=function(t,e,n,o,i,u,c,a){if(r(e),!t){var s;if(void 0===e)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var f=[n,o,i,u,c,a],p=0;(s=new Error(e.replace(/%s/g,function(){return f[p++]}))).name="Invariant Violation"}throw s.framesToPop=1,s}}},347:function(t,e,n){var r=n(215),o=n(230),i=n(82),u=o?function(t,e){return o(t,"toString",{configurable:!0,enumerable:!1,value:r(e),writable:!0})}:i;t.exports=u},397:function(t,e,n){var r=n(162),o=n(211),i=n(122);t.exports=function(t,e,n){for(var u=-1,c=e.length,a={};++u<c;){var s=e[u],f=r(t,s);n(f,s)&&o(a,i(s,t),f)}return a}},4:function(t,e){t.exports=function(t){return void 0===t}},41:function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},451:function(t,e,n){"use strict";n.r(e),function(t,r){n.d(e,"getGBContent",function(){return L}),n.d(e,"switchEditor",function(){return V});var o=n(1),i=n.n(o),u=n(243),c=n(139),a=n(205),s=n(689),f=n(2),p=n.n(f),l=n(89),d=n.n(l),v=n(7),b=n.n(v),h=n(51),g=n.n(h),y=n(690),_=n(102),x=n(118),j=n(238),w=n(856),m=n(300),O=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};Object(j.cold)(w.RichText.Content),Object(j.cold)(m.RawHTML);var P=Object(x.dispatch)("core/editor"),E=P.setupEditor,C=P.editPost,T=Object(x.select)("core/editor"),S=T.isCleanNewPost,k=T.getCurrentPost,R=T.getCurrentPostType,A=T.getEditedPostAttribute,M=T.getEditedPostContent,B=T.getBlocks,N=Object(x.select)("core/edit-post").getEditorMode,F=Object(x.dispatch)("core/edit-post").switchEditorMode,$=function(){Object(s.a)(u.a)},z=function(){Object(s.b)(u.a)},D=function(){var t=B();return 1===t.length&&p()(t,"0.name")===u.a.name},I=d()(function(){return F("visual")},100),W=Object(m.renderToString)(i.a.createElement("div",{className:"et-buttons"},i.a.createElement("button",{type:"button",className:"is-button is-default is-large components-button editor-post-switch-to-divi","data-editor":a.a},Object(y.__)("Use The Divi Builder")),i.a.createElement("button",{type:"button",className:"is-button is-default is-large components-button editor-post-switch-to-gutenberg","data-editor":a.b},Object(y.__)("Return To Default Editor")))),q=t(".page-template-options").closest(".postbox"),U=function(t){var e=r("#et_settings_meta_box_gutenberg"),n=r(".et_pb_page_setting"),o=p()(window,"et_builder_gutenberg.helpers"),i=R(),u=A("format");r("body").toggleClass("et-builder-on-gutenberg",t),e.find(".et_pb_side_nav_settings").toggle(t),e.find(".et_pb_single_title").toggle(t);var c=n.filter(":visible").length>1||!(t&&"post"!==i&&"no"===p()(o,"is3rdPartyPostType"));e.find(".et_pb_page_layout_settings").toggle(c),u&&(r(".et_divi_format_setting").hide(),r(".et_divi_format_setting.et_divi_"+u+"_settings").toggle(!t)),e.find(".et_pb_project_nav").toggle(t&&"project"===i)},G=new function e(){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.init=function(){$(),n.gbContent="",n.gbReady=!1,n.prevPostFormat="",n.unsubscribe=Object(x.subscribe)(n.onEditorContentChange),Object(x.subscribe)(n.onEditorModeChange),Object(x.subscribe)(n.onPageTemplateChange)},this.onClick=function(t){switch(t.target.getAttribute("data-editor")){case a.a:n.addPlaceholder(M()),U(!0);break;default:r("#et-switch-to-gutenberg").click()}},this.addPlaceholder=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";$(),n.gbContent=t,n.setupEditor(Object(_.applyFilters)("divi.addPlaceholder",t))},this.getGBContent=function(){return n.gbContent},this.setupEditor=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=k();E(O({},n,{content:{raw:t}})),!1!==e&&e!==n.title&&C({title:e})},this.switchEditor=function(t,e){switch(t){case a.a:window.location.href=Object(c.d)();break;default:var r=A("title");n.setupEditor(u.a.unwrap(e),r),setTimeout(function(){n.setupEditor(u.a.unwrap(e),r),z()},0),U(!1)}},this.addButton=function(){setTimeout(function(){return r(W).on("click","button",n.onClick).insertAfter(".edit-post-header-toolbar")},0)},this.fireEditorReadyEvent=function(){if(!n.gbReady){var t=void 0;"function"!=typeof Event?(t=document.createEvent("Event")).initEvent("ETGBReady",!0,!0):t=new Event("ETGBReady"),U(!0),"post"===R()&&Object(x.subscribe)(n.onPostFormatChange),document.dispatchEvent(t)}},this.preventOnEnterAddBlock=function(t){D()&&13===t.keyCode&&(t.preventDefault(),t.stopPropagation())},this.onEditorContentChange=function(){var t=k();if(!b()(t)&&n.unsubscribe){Object(c.a)()&&n.addButton(),n.fireEditorReadyEvent(),r("body").on("keydown",".editor-post-title__input",n.preventOnEnterAddBlock),n.unsubscribe(),n.unsubscribe=!1;var e=p()(t,"content");g()(e,"\x3c!-- "+u.a.tag+" ")?Object(c.g)()||n.setupEditor(u.a.unwrap(e),A("title")):Object(c.f)()||S()&&Object(c.a)()?Object(c.h)()?setTimeout(function(){return n.addPlaceholder(e)},0):n.addPlaceholder(e):(z(),U(!1))}},this.onEditorModeChange=function(){"text"===N()&&D()&&I()},this.onPageTemplateChange=function(){var e,n=A("template");b()(n)?q.each(function(){t(this).hide()}):(e=A("template"),q.each(function(){t(this).find(".page-template-options").val()===e?t(this).is(":visible")||t(this).show():t(this).hide()}),q.is(":visible")?t("#et_pb_layout").removeClass("first-visible"):t("#et_pb_layout").addClass("first-visible"))},this.onPostFormatChange=function(){var t=A("format");n.prevPostFormat!==t&&(""!==n.prevPostFormat&&U(!1),n.prevPostFormat=t)}},L=G.getGBContent,V=G.switchEditor;G.init()}.call(this,n(31),n(31))},455:function(t,e){t.exports=window.et_gb.wp.blocks},478:function(t,e){t.exports=function(t){if(!t.webpackPolyfill){var e=Object.create(t);e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),Object.defineProperty(e,"exports",{enumerable:!0}),e.webpackPolyfill=1}return e}},479:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=(r=n(1))&&"object"==typeof r&&"default"in r?r.default:r,i=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},u=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},c=function(t){function e(){return i(this,e),u(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.render=function(){return o.Children.only(this.props.children)},e}(o.Component);e.AppContainer=c,e.hot=function(){return function(t){return t}},e.areComponentsEqual=function(t,e){return t===e},e.setConfig=function(){},e.cold=function(t){return t}},48:function(t,e,n){var r=n(41),o=n(110),i=n(134),u="Expected a function",c=Math.max,a=Math.min;t.exports=function(t,e,n){var s,f,p,l,d,v,b=0,h=!1,g=!1,y=!0;if("function"!=typeof t)throw new TypeError(u);function _(e){var n=s,r=f;return s=f=void 0,b=e,l=t.apply(r,n)}function x(t){var n=t-v;return void 0===v||n>=e||n<0||g&&t-b>=p}function j(){var t=o();if(x(t))return w(t);d=setTimeout(j,function(t){var n=e-(t-v);return g?a(n,p-(t-b)):n}(t))}function w(t){return d=void 0,y&&s?_(t):(s=f=void 0,l)}function m(){var t=o(),n=x(t);if(s=arguments,f=this,v=t,n){if(void 0===d)return function(t){return b=t,d=setTimeout(j,e),h?_(t):l}(v);if(g)return d=setTimeout(j,e),_(v)}return void 0===d&&(d=setTimeout(j,e)),l}return e=i(e)||0,r(n)&&(h=!!n.leading,p=(g="maxWait"in n)?c(i(n.maxWait)||0,e):p,y="trailing"in n?!!n.trailing:y),m.cancel=function(){void 0!==d&&clearTimeout(d),b=0,s=v=f=d=void 0},m.flush=function(){return void 0===d?l:w(o())},m}},480:function(t,e,n){"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(481),o=n(346),i=n(482);t.exports=function(){function t(t,e,n,r,u,c){c!==i&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function e(){return t}t.isRequired=t;var n={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e};return n.checkPropTypes=r,n.PropTypes=n,n}},481:function(t,e,n){"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */function r(t){return function(){return t}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(t){return t},t.exports=o},482:function(t,e,n){"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},499:function(t,e,n){var r=n(397),o=n(214);t.exports=function(t,e){return r(t,e,function(e,n){return o(t,n)})}},5:function(t,e,n){t.exports=n(480)()},500:function(t,e,n){var r=n(119),o=n(124),i=n(20),u=r?r.isConcatSpreadable:void 0;t.exports=function(t){return i(t)||o(t)||!!(u&&t&&t[u])}},51:function(t,e,n){var r=n(179),o=n(130),i=n(56),u=n(28);t.exports=function(t,e,n){return t=u(t),n=null==n?0:r(i(n),0,t.length),e=o(e),t.slice(n,n+e.length)==e}},54:function(t,e,n){var r=n(90),o=n(41),i="[object AsyncFunction]",u="[object Function]",c="[object GeneratorFunction]",a="[object Proxy]";t.exports=function(t){if(!o(t))return!1;var e=r(t);return e==u||e==c||e==i||e==a}},56:function(t,e,n){var r=n(188);t.exports=function(t){var e=r(t),n=e%1;return e==e?n?e-n:e:0}},68:function(t,e,n){var r=n(225),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();t.exports=i},688:function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return s});var r=n(139),o=n(118),i=Object(o.select)("core/editor").isCleanNewPost,u=Object(o.dispatch)("core/editor").updateEditorSettings,c=function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];!function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=document.getElementById("editor").classList;e[t?"add":"remove"]("et-limited-ui"),e[i()?"add":"remove"]("et-new-post"),e[Object(r.f)()?"add":"remove"]("et-builder-used")}(t),u({templateLock:t})},a=function(){return c(!0)},s=function(){return c(!1)}},689:function(t,e,n){"use strict";n.d(e,"a",function(){return p}),n.d(e,"b",function(){return l});var r=n(11),o=n.n(r),i=n(20),u=n.n(i),c=n(4),a=n.n(c),s=n(455),f=n(102),p=function(t){var e=u()(t)?t:[t];o()(e,function(t){var e=t.name,n=t.settings,r=t.hooks,i=void 0===r?[]:r;a()(Object(s.getBlockType)(e))&&(Object(s.registerBlockType)(e,n),o()(i,function(t,n){return Object(f.addFilter)(n,e,t)}))})},l=function(t){var e=u()(t)?t:[t];o()(e,function(t){var e=t.name,n=t.hooks,r=void 0===n?[]:n;o()(r,function(t,n){return Object(f.removeFilter)(n,e)}),Object(s.unregisterBlockType)(e)})}},690:function(t,e){t.exports=window.et_gb.wp.i18n},7:function(t,e,n){var r=n(193),o=n(129),i=n(124),u=n(20),c=n(88),a=n(125),s=n(161),f=n(138),p="[object Map]",l="[object Set]",d=Object.prototype.hasOwnProperty;t.exports=function(t){if(null==t)return!0;if(c(t)&&(u(t)||"string"==typeof t||"function"==typeof t.splice||a(t)||f(t)||i(t)))return!t.length;var e=o(t);if(e==p||e==l)return!t.size;if(s(t))return!r(t).length;for(var n in t)if(d.call(t,n))return!1;return!0}},70:function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},82:function(t,e){t.exports=function(t){return t}},84:function(t,e,n){var r=n(499),o=n(195)(function(t,e){return null==t?{}:r(t,e)});t.exports=o},854:function(t,e,n){"use strict";(function(t){var r=n(238),o=n(1),i=n.n(o),u=n(5),c=n.n(u),a=n(205),s=n(688),f=n(451),p=n(118),l=n(139),d=n(855),v=n(2),b=n.n(v),h=n(84),g=n.n(h),y=(n(1073),function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}());var _=Object(l.e)().placeholder.render,x=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.getSavedMeta=function(){var t=n.props.getCurrentPost().meta;return{builder:t._et_pb_use_builder,old:t._et_pb_old_content}},n.getGBContent=function(){return Object(f.getGBContent)()||n.props.attributes.old},n.save=function(t){var e=n.props,r=e.attributes,o=e.setAttributes,i=e.savePost;switch(t){case a.a:if("on"===r.builder)return!1;var u={builder:"on"},c=n.getSavedMeta(),s=n.getGBContent();return s!==c.old&&(u.old=s),o(u),"on"!==c.builder||u.old?(i(),!0):!1;default:return o({builder:"off"}),!1}},n.divi=function(){return n.editWith(a.a)},n.gutenberg=function(){return n.editWith(a.b)},n.editWith=function(t){n.setState({editor:t}),n.save(t)?setTimeout(function(){n.unsubscribe=Object(p.subscribe)(n.waitForSave)},0):n.switchEditor(t)},n.switchEditor=function(t){return Object(f.switchEditor)(t,n.props.attributes.old)},n.isSaving=function(){return n.props.isSavingPost()||n.props.isSavingMetaBoxes()},n.waitForSave=function(){!n.isSaving()&&n.unsubscribe&&(n.unsubscribe(),n.unsubscribe=!1,n.switchEditor(n.state.editor))},n.state={editor:a.a,isNew:t.isCleanNewPost()},n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,o["Component"]),y(e,[{key:"componentDidMount",value:function(){Object(s.a)(),this.state.isNew||this.save(this.state.editor)}},{key:"componentWillUnmount",value:function(){Object(s.b)()}},{key:"render",value:function(){var t=this.state.isNew?"new":"old";return i.a.createElement("div",{className:"wp-block-divi-placeholder"},i.a.createElement("span",{className:"et-icon"}),i.a.createElement("h3",null,b()(_.title,t)),i.a.createElement("div",{className:"et-controls"},i.a.createElement("button",{type:"button",id:"et-switch-to-divi",className:"components-button is-button is-default is-large",onClick:this.divi},b()(_.divi,t)),i.a.createElement("button",{type:"button",id:"et-switch-to-gutenberg",className:"components-button is-button is-default is-large",onClick:this.gutenberg},_.default)))}}]),e}();x.propTypes={isCleanNewPost:c.a.func.isRequired,getCurrentPost:c.a.func.isRequired,savePost:c.a.func.isRequired,setAttributes:c.a.func.isRequired,isSavingPost:c.a.func.isRequired,isSavingMetaBoxes:c.a.func.isRequired,attributes:c.a.object.isRequired},e.a=Object(r.hot)(t)(Object(d.compose)(Object(p.withDispatch)(function(t){return g()(t("core/editor"),["savePost"])}),Object(p.withSelect)(function(t){return g()(t("core/editor"),["isSavingPost","isCleanNewPost","getCurrentPost"])}),Object(p.withSelect)(function(t){return g()(t("core/edit-post"),["isSavingMetaBoxes"])}))(x))}).call(this,n(478)(t))},855:function(t,e){t.exports=window.et_gb.wp.compose},856:function(t,e){t.exports=window.et_gb.wp.editor},88:function(t,e,n){var r=n(54),o=n(151);t.exports=function(t){return null!=t&&o(t.length)&&!r(t)}},89:function(t,e,n){var r=n(48),o=n(41),i="Expected a function";t.exports=function(t,e,n){var u=!0,c=!0;if("function"!=typeof t)throw new TypeError(i);return o(n)&&(u="leading"in n?!!n.leading:u,c="trailing"in n?!!n.trailing:c),r(t,e,{leading:u,maxWait:e,trailing:c})}},90:function(t,e,n){var r=n(119),o=n(308),i=n(309),u="[object Null]",c="[object Undefined]",a=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?c:u:a&&a in Object(t)?o(t):i(t)}},95:function(t,e){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o}}}));
//# sourceMappingURL=gutenberg.9e9ffe00.js.map