(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e58f8fbe"],{"02f4":function(t,e,n){var r=n("4588"),a=n("be13");t.exports=function(t){return function(e,n){var i,c,o=String(a(e)),s=r(n),u=o.length;return s<0||s>=u?t?"":void 0:(i=o.charCodeAt(s),i<55296||i>56319||s+1===u||(c=o.charCodeAt(s+1))<56320||c>57343?t?o.charAt(s):i:t?o.slice(s,s+2):c-56320+(i-55296<<10)+65536)}}},"0390":function(t,e,n){"use strict";var r=n("02f4")(!0);t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},"0bfb":function(t,e,n){"use strict";var r=n("cb7c");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"16e4":function(t,e,n){t.exports=n.p+"static/img/tong-active.46c8dd0a.png"},"214f":function(t,e,n){"use strict";n("b0c5");var r=n("2aba"),a=n("32e9"),i=n("79e5"),c=n("be13"),o=n("2b4c"),s=n("520a"),u=o("species"),l=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),f=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var p=o(t),v=!i((function(){var e={};return e[p]=function(){return 7},7!=""[t](e)})),h=v?!i((function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[u]=function(){return n}),n[p](""),!e})):void 0;if(!v||!h||"replace"===t&&!l||"split"===t&&!f){var d=/./[p],g=n(c,p,""[t],(function(t,e,n,r,a){return e.exec===s?v&&!a?{done:!0,value:d.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}})),b=g[0],m=g[1];r(String.prototype,t,b),a(RegExp.prototype,p,2==e?function(t,e){return m.call(t,this,e)}:function(t){return m.call(t,this)})}}},"30e6":function(t,e,n){"use strict";n("af10")},4866:function(t,e,n){t.exports=n.p+"static/img/tong-inactive.f98be18f.png"},"520a":function(t,e,n){"use strict";var r=n("0bfb"),a=RegExp.prototype.exec,i=String.prototype.replace,c=a,o="lastIndex",s=function(){var t=/a/,e=/b*/g;return a.call(t,"a"),a.call(e,"a"),0!==t[o]||0!==e[o]}(),u=void 0!==/()??/.exec("")[1],l=s||u;l&&(c=function(t){var e,n,c,l,f=this;return u&&(n=new RegExp("^"+f.source+"$(?!\\s)",r.call(f))),s&&(e=f[o]),c=a.call(f,t),s&&c&&(f[o]=f.global?c.index+c[0].length:e),u&&c&&c.length>1&&i.call(c[0],n,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(c[l]=void 0)})),c}),t.exports=c},"5f1b":function(t,e,n){"use strict";var r=n("23c6"),a=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var i=n.call(t,e);if("object"!==typeof i)throw new TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(t))throw new TypeError("RegExp#exec called on incompatible receiver");return a.call(t,e)}},"6b48":function(t,e,n){"use strict";n.r(e);n("7f7f"),n("a481");var r,a=function(){var t=this,e=t._self._c;return e("van-tabbar",{staticStyle:{"z-index":"1999"},attrs:{border:!1,route:"","safe-area-inset-bottom":""},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[t._l(t.tabbar,(function(n,r){return e("van-tabbar-item",{key:r,attrs:{to:n.path,dot:n.dot,info:n.info,replace:n.replace},scopedSlots:t._u([{key:"icon",fn:function(r){return[n.customizedIcon?e("div",{staticStyle:{position:"relative",bottom:"-18px"}},[r.active?e("img",{style:n.size&&{width:n.size,height:n.size},attrs:{src:n.icon}}):t._e(),r.active?t._e():e("img",{style:n.size&&{width:n.size,height:n.size},attrs:{src:n.iconInactive}})]):e("van-icon",{attrs:{name:n.icon}})]}}],null,!0)},[n.hideText?t._e():e("span",{staticClass:"van-tabbar-item__text"},[t._v(t._s(n.name))])])}))],2)},i=[],c=n("bd86"),o=(n("ac6a"),n("f3e2"),n("ac28")),s=n("2ed4"),u={data:function(){return{active:0,tabbar:[{name:"筛查二维码",path:"/shai",pathName:"shai",icon:"qr",dot:!1,info:"",replace:!0},{name:"核酸报告",path:"/hesuan",pathName:"hesuan",icon:"orders-o",dot:!1,info:"",replace:!0},{name:"通",path:"/one",pathName:"one",icon:n("16e4"),iconInactive:n("4866"),customizedIcon:!0,hideText:!0,dot:!1,info:"",size:"18vw",replace:!1},{name:"常用筛查点",path:"/map",pathName:"map",icon:"location-o",dot:!1,info:"",replace:!0},{name:"我的",path:"/my",pathName:"my",icon:"contact",dot:!1,info:"",replace:!0}]}},watch:{},created:function(){},methods:{changeActive:function(t){var e=t.name;this.setActive(e)},setActive:function(t){var e=this;this.tabbar.forEach((function(n,r){if(n.pathName==t)return e.active=r,!1}))}},components:(r={},Object(c["a"])(r,o["a"].name,o["a"]),Object(c["a"])(r,s["a"].name,s["a"]),r)},l=u,f=(n("30e6"),n("2877")),p=Object(f["a"])(l,a,i,!1,null,"7be80b55",null);e["default"]=p.exports},a481:function(t,e,n){"use strict";var r=n("cb7c"),a=n("4bf8"),i=n("9def"),c=n("4588"),o=n("0390"),s=n("5f1b"),u=Math.max,l=Math.min,f=Math.floor,p=/\$([$&`']|\d\d?|<[^>]*>)/g,v=/\$([$&`']|\d\d?)/g,h=function(t){return void 0===t?t:String(t)};n("214f")("replace",2,(function(t,e,n,d){return[function(r,a){var i=t(this),c=void 0==r?void 0:r[e];return void 0!==c?c.call(r,i,a):n.call(String(i),r,a)},function(t,e){var a=d(n,t,this,e);if(a.done)return a.value;var f=r(t),p=String(this),v="function"===typeof e;v||(e=String(e));var b=f.global;if(b){var m=f.unicode;f.lastIndex=0}var x=[];while(1){var S=s(f,p);if(null===S)break;if(x.push(S),!b)break;var y=String(S[0]);""===y&&(f.lastIndex=o(p,i(f.lastIndex),m))}for(var L="",T=0,w=0;w<x.length;w++){S=x[w];for(var E=String(S[0]),A=u(l(c(S.index),p.length),0),k=[],M=1;M<S.length;M++)k.push(h(S[M]));var R=S.groups;if(v){var C=[E].concat(k,A,p);void 0!==R&&C.push(R);var _=String(e.apply(void 0,C))}else _=g(E,p,A,k,R,e);A>=T&&(L+=p.slice(T,A)+_,T=A+E.length)}return L+p.slice(T)}];function g(t,e,r,i,c,o){var s=r+t.length,u=i.length,l=v;return void 0!==c&&(c=a(c),l=p),n.call(o,l,(function(n,a){var o;switch(a.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,r);case"'":return e.slice(s);case"<":o=c[a.slice(1,-1)];break;default:var l=+a;if(0===l)return n;if(l>u){var p=f(l/10);return 0===p?n:p<=u?void 0===i[p-1]?a.charAt(1):i[p-1]+a.charAt(1):n}o=i[l-1]}return void 0===o?"":o}))}}))},ac6a:function(t,e,n){for(var r=n("cadf"),a=n("0d58"),i=n("2aba"),c=n("7726"),o=n("32e9"),s=n("84f2"),u=n("2b4c"),l=u("iterator"),f=u("toStringTag"),p=s.Array,v={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},h=a(v),d=0;d<h.length;d++){var g,b=h[d],m=v[b],x=c[b],S=x&&x.prototype;if(S&&(S[l]||o(S,l,p),S[f]||o(S,f,b),s[b]=p,m))for(g in r)S[g]||i(S,g,r[g],!0)}},af10:function(t,e,n){},b0c5:function(t,e,n){"use strict";var r=n("520a");n("5ca1")({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},f3e2:function(t,e,n){"use strict";var r=n("5ca1"),a=n("0a49")(0),i=n("2f21")([].forEach,!0);r(r.P+r.F*!i,"Array",{forEach:function(t){return a(this,t,arguments[1])}})}}]);