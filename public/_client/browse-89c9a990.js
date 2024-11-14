'use strict';(function(r,A,c){function w(){w=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var e=arguments[b],c;for(c in e)Object.prototype.hasOwnProperty.call(e,c)&&(a[c]=e[c])}return a};return w.apply(this,arguments)}function O(a,b){if(null==a)return{};var e={},c=Object.keys(a),d;for(d=0;d<c.length;d++){var h=c[d];0<=b.indexOf(h)||(e[h]=a[h])}return e}function P(a,b){b||(b=a.slice(0));a.raw=b;return a}function Q(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,
"default")?a["default"]:a}function C(a,b){return b={exports:{}},a(b,b.exports),b.exports}function I(a,b,e,c,d){for(var g in a)if(ua(a,g)){try{if("function"!==typeof a[g]){var q=Error((c||"React class")+": "+e+" type `"+g+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof a[g]+"`.");q.name="Invariant Violation";throw q;}var l=a[g](b,g,c,e,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(u){l=u}!l||l instanceof Error||J((c||"React class")+": type specification of "+
e+" `"+g+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof l+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).");if(l instanceof Error&&!(l.message in K)){K[l.message]=!0;var R=d?d():"";J("Failed "+e+" type: "+l.message+(null!=R?R:""))}}}function F(){return null}function S(a){var b,e=a.children;a=a.css;return c.jsx("div",{css:w((b={border:"1px solid #dfe2e5",
borderRadius:3},b["@media (max-width: 700px)"]={borderRightWidth:0,borderLeftWidth:0},b),a)},e)}function T(a){var b,e=a.children;a=a.css;return c.jsx("div",{css:w((b={padding:10,background:"#f6f8fa",color:"#424242",border:"1px solid #d1d5da",borderTopLeftRadius:3,borderTopRightRadius:3,margin:"-1px -1px 0",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"},b["@media (max-width: 700px)"]={paddingRight:20,paddingLeft:20},b),a)},e)}function U(a){return a&&a.map(function(a,
e){return r.createElement(a.tag,z({key:e},a.attr),U(a.child))})}function D(a){return function(b){return r.createElement(va,z({attr:z({},a.attr)},b),U(a.child))}}function va(a){var b=function(b){var c=a.size||b.size||"1em";if(b.className)var e=b.className;a.className&&(e=(e?e+" ":"")+a.className);var h=a.attr,q=a.title,l=wa(a,["attr","title"]);return r.createElement("svg",z({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},b.attr,h,l,{className:e,style:z({color:a.color||b.color},b.style,
a.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),q&&r.createElement("title",null,q),a.children)};return void 0!==V?r.createElement(V.Consumer,null,function(a){return b(a)}):b(W)}function E(a,b){var e=b.css;b=O(b,["css"]);return c.jsx(a,w({css:w({},e,{verticalAlign:"text-bottom"})},b))}function xa(a){return E(X,a)}function ya(a){return E(Y,a)}function za(a){return E(Z,a)}function Aa(a){return E(aa,a)}function Ba(a){return E(ba,a)}function ca(a){var b=a.path,e=a.details,g=Object.keys(e).reduce(function(a,
b){var c=a.subdirs,g=a.files;b=e[b];"directory"===b.type?c.push(b):"file"===b.type&&g.push(b);return a},{subdirs:[],files:[]});a=g.subdirs;g=g.files;a.sort(da("path"));g.sort(da("path"));var d=[];"/"!==b&&d.push(c.jsx("tr",{key:".."},c.jsx("td",{css:L}),c.jsx("td",{css:y},c.jsx("a",{title:"Parent directory",href:"../",css:M},"..")),c.jsx("td",{css:y}),c.jsx("td",{css:N})));a.forEach(function(a){a=a.path.substr(1<b.length?b.length+1:1);var e=a+"/";d.push(c.jsx("tr",{key:a},c.jsx("td",{css:L},c.jsx(za,
null)),c.jsx("td",{css:y},c.jsx("a",{title:a,href:e,css:M},a)),c.jsx("td",{css:y},"-"),c.jsx("td",{css:N},"-")))});g.forEach(function(a){var e=a.size,g=a.contentType;a=a.path.substr(1<b.length?b.length+1:1);d.push(c.jsx("tr",{key:a},c.jsx("td",{css:L},"text/plain"===g||"text/markdown"===g?c.jsx(xa,null):c.jsx(ya,null)),c.jsx("td",{css:y},c.jsx("a",{title:a,href:a,css:M},a)),c.jsx("td",{css:y},ea(e)),c.jsx("td",{css:N},g)))});var h=[];0<g.length&&h.push(g.length+" file"+(1===g.length?"":"s"));0<a.length&&
h.push(a.length+" folder"+(1===a.length?"":"s"));return c.jsx(S,null,c.jsx(T,null,c.jsx("span",null,h.join(", "))),c.jsx("table",{css:{width:"100%",borderCollapse:"collapse",borderRadius:2,background:"#fff","@media (max-width: 700px)":{"& th + th + th + th, & td + td + td + td":{display:"none"}},"& tr:first-of-type td":{borderTop:0}}},c.jsx("thead",null,c.jsx("tr",null,c.jsx("th",null,c.jsx(G,null,"Icon")),c.jsx("th",null,c.jsx(G,null,"Name")),c.jsx("th",null,c.jsx(G,null,"Size")),c.jsx("th",null,
c.jsx(G,null,"Content Type")))),c.jsx("tbody",null,d)))}function Ca(a){a=a.split("/");return a[a.length-1]}function Da(a){var b=a.uri;return c.jsx("div",{css:{padding:20,textAlign:"center"}},c.jsx("img",{alt:Ca(a.path),src:b}))}function Ea(a){a=a.highlights.slice(0);var b=a.length&&""===a[a.length-1];b&&a.pop();return c.jsx("div",{className:"code-listing",css:{overflowX:"auto",overflowY:"hidden",paddingTop:5,paddingBottom:5}},c.jsx("table",{css:{border:"none",borderCollapse:"collapse",borderSpacing:0}},
c.jsx("tbody",null,a.map(function(a,b){var e=b+1;return c.jsx("tr",{key:b},c.jsx("td",{id:"L"+e,css:{paddingLeft:10,paddingRight:10,color:"rgba(27,31,35,.3)",textAlign:"right",verticalAlign:"top",width:"1%",minWidth:50,userSelect:"none"}},c.jsx("span",null,e)),c.jsx("td",{id:"LC"+e,css:{paddingLeft:10,paddingRight:10,color:"#24292e",whiteSpace:"pre"}},c.jsx("code",{dangerouslySetInnerHTML:{__html:a}})))}),!b&&c.jsx("tr",{key:"no-newline"},c.jsx("td",{css:{paddingLeft:10,paddingRight:10,color:"rgba(27,31,35,.3)",
textAlign:"right",verticalAlign:"top",width:"1%",minWidth:50,userSelect:"none"}},"\\"),c.jsx("td",{css:{paddingLeft:10,color:"rgba(27,31,35,.3)",userSelect:"none"}},"No newline at end of file")))))}function Fa(){return c.jsx("div",{css:{padding:20}},c.jsx("p",{css:{textAlign:"center"}},"No preview available."))}function fa(a){var b=a.packageName,e=a.packageVersion,g=a.path;a=a.details;var d=a.highlights,h=a.uri,q=a.language;return c.jsx(S,null,c.jsx(T,null,c.jsx("span",null,ea(a.size)),c.jsx("span",
null,q),c.jsx("span",null,c.jsx("a",{href:"/"+b+"@"+e+g,css:{display:"inline-block",marginLeft:8,padding:"2px 8px",textDecoration:"none",fontWeight:600,fontSize:"0.9rem",color:"#24292e",backgroundColor:"#eff3f6",border:"1px solid rgba(27,31,35,.2)",borderRadius:3,":hover":{backgroundColor:"#e6ebf1",borderColor:"rgba(27,31,35,.35)"},":active":{backgroundColor:"#e9ecef",borderColor:"rgba(27,31,35,.35)",boxShadow:"inset 0 0.15em 0.3em rgba(27,31,35,.15)"}}},"View Raw"))),d?c.jsx(Ea,{highlights:d}):h?
c.jsx(Da,{path:g,uri:h}):c.jsx(Fa,null))}function ha(){var a=P(["\n  .code-listing {\n    background: #fbfdff;\n    color: #383a42;\n  }\n  .code-comment,\n  .code-quote {\n    color: #a0a1a7;\n    font-style: italic;\n  }\n  .code-doctag,\n  .code-keyword,\n  .code-link,\n  .code-formula {\n    color: #a626a4;\n  }\n  .code-section,\n  .code-name,\n  .code-selector-tag,\n  .code-deletion,\n  .code-subst {\n    color: #e45649;\n  }\n  .code-literal {\n    color: #0184bb;\n  }\n  .code-string,\n  .code-regexp,\n  .code-addition,\n  .code-attribute,\n  .code-meta-string {\n    color: #50a14f;\n  }\n  .code-built_in,\n  .code-class .code-title {\n    color: #c18401;\n  }\n  .code-attr,\n  .code-variable,\n  .code-template-variable,\n  .code-type,\n  .code-selector-class,\n  .code-selector-attr,\n  .code-selector-pseudo,\n  .code-number {\n    color: #986801;\n  }\n  .code-symbol,\n  .code-bullet,\n  .code-meta,\n  .code-selector-id,\n  .code-title {\n    color: #4078f2;\n  }\n  .code-emphasis {\n    font-style: italic;\n  }\n  .code-strong {\n    font-weight: bold;\n  }\n"]);
ha=function(){return a};return a}function ia(){var a=P(["\n  html {\n    box-sizing: border-box;\n  }\n  *,\n  *:before,\n  *:after {\n    box-sizing: inherit;\n  }\n\n  html,\n  body,\n  #root {\n    height: 100%;\n    margin: 0;\n  }\n\n  body {\n    ","\n    font-size: 16px;\n    line-height: 1.5;\n    overflow-wrap: break-word;\n    background: white;\n    color: black;\n  }\n\n  code {\n    ","\n  }\n\n  th,\n  td {\n    padding: 0;\n  }\n\n  select {\n    font-size: inherit;\n  }\n\n  #root {\n    display: flex;\n    flex-direction: column;\n  }\n"]);
ia=function(){return a};return a}function ja(a){var b=a.css;a=O(a,["css"]);return c.jsx("a",w({},a,{css:w({color:"#0076ff",textDecoration:"none",":hover":{textDecoration:"underline"}},b)}))}function Ga(){return c.jsx("header",{css:{marginTop:"2rem"}},c.jsx("h1",{css:{textAlign:"center",fontSize:"3rem",letterSpacing:"0.05em"}},c.jsx("a",{href:"/",css:{color:"#000",textDecoration:"none"}},"UNPKG")))}function Ha(a){var b=a.packageName,e=a.packageVersion,g=a.availableVersions;a=a.filename;var d=[];if("/"===
a)d.push(b);else{var h="/browse/"+b+"@"+e;d.push(c.jsx(ja,{href:h+"/"},b));b=a.replace(/^\/+/,"").replace(/\/+$/,"").split("/");a=b.pop();b.forEach(function(a){h+="/"+a;d.push(c.jsx(ja,{href:h+"/"},a))});d.push(a)}return c.jsx("header",{css:{display:"flex",flexDirection:"row",alignItems:"center","@media (max-width: 700px)":{flexDirection:"column-reverse",alignItems:"flex-start"}}},c.jsx("h1",{css:{fontSize:"1.5rem",fontWeight:"normal",flex:1,wordBreak:"break-all"}},c.jsx("nav",null,d.map(function(a,
b,e){return c.jsx(r.Fragment,{key:b},0!==b&&c.jsx("span",{css:{paddingLeft:5,paddingRight:5}},"/"),b===e.length-1?c.jsx("strong",null,a):a)}))),c.jsx(Ia,{packageVersion:e,availableVersions:g,onChange:function(a){window.location.href=window.location.href.replace("@"+e,"@"+a)}}))}function Ia(a){var b=a.onChange;return c.jsx("p",{css:{marginLeft:20,"@media (max-width: 700px)":{marginLeft:0,marginBottom:0}}},c.jsx("label",null,"Version:"," ",c.jsx("select",{name:"version",defaultValue:a.packageVersion,
onChange:function(a){b&&b(a.target.value)},css:{appearance:"none",cursor:"pointer",padding:"4px 24px 4px 8px",fontWeight:600,fontSize:"0.9em",color:"#24292e",border:"1px solid rgba(27,31,35,.2)",borderRadius:3,backgroundColor:"#eff3f6",backgroundImage:"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAKCAYAAAC9vt6cAAAAAXNSR0IArs4c6QAAARFJREFUKBVjZAACNS39RhBNKrh17WI9o4quoT3Dn78HSNUMUs/CzOTI/O7Vi4dCYpJ3/jP+92BkYGAlyiBGhm8MjIxJt65e3MQM0vDu9YvLYmISILYZELOBxHABRkaGr0yMzF23r12YDFIDNgDEePv65SEhEXENBkYGFSAXuyGMjF8Z/jOsvX3tYiFIDwgwQSgIaaijnvj/P8M5IO8HsjiY/f//D4b//88A1SQhywG9jQr09PS4v/1mPAeUUPzP8B8cJowMjL+Bqu6xMQmaXL164AuyDgwDQJLa2qYSP//9vARkCoMVMzK8YeVkNbh+9uxzMB+JwGoASF5Vx0jz/98/18BqmZi171w9D2EjaaYKEwAEK00XQLdJuwAAAABJRU5ErkJggg==)",
backgroundPosition:"right 8px center",backgroundRepeat:"no-repeat",backgroundSize:"auto 25%",":hover":{backgroundColor:"#e6ebf1",borderColor:"rgba(27,31,35,.35)"},":active":{backgroundColor:"#e9ecef",borderColor:"rgba(27,31,35,.35)",boxShadow:"inset 0 0.15em 0.3em rgba(27,31,35,.15)"}}},a.availableVersions.map(function(a){return c.jsx("option",{key:a,value:a},a)}))))}function Ja(a){var b=a.packageName,e=a.packageVersion;a=a.target;return"directory"===a.type?c.jsx(ca,{path:a.path,details:a.details}):
"file"===a.type?c.jsx(fa,{packageName:b,packageVersion:e,path:a.path,details:a.details}):null}function ka(a){var b=a.packageName,e=a.packageVersion,g=a.availableVersions;g=void 0===g?[]:g;var d=a.filename;a=a.target;return c.jsx(r.Fragment,null,c.jsx(c.Global,{styles:Ka}),c.jsx(c.Global,{styles:La}),c.jsx("div",{css:{flex:"1 0 auto"}},c.jsx("div",{css:{maxWidth:940,padding:"0 20px",margin:"0 auto"}},c.jsx(Ga,null)),c.jsx("div",{css:{maxWidth:940,padding:"0 20px",margin:"0 auto"}},c.jsx(Ha,{packageName:b,
packageVersion:e,availableVersions:g,filename:d})),c.jsx("div",{css:{maxWidth:940,padding:"0 20px",margin:"0 auto","@media (max-width: 700px)":{padding:0,margin:0}}},c.jsx(Ja,{packageName:b,packageVersion:e,target:a}))),c.jsx("footer",{css:{marginTop:"5rem",background:"black",color:"#aaa"}},c.jsx("div",{css:{maxWidth:940,padding:"10px 20px",margin:"0 auto",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}},c.jsx("p",null,c.jsx("span",null,"Build: ","76f0d6d")),
c.jsx("p",null,c.jsx("span",null,"\u00a9 ",(new Date).getFullYear()," UNPKG")),c.jsx("p",{css:{fontSize:"1.5rem"}},c.jsx("a",{href:"https://twitter.com/unpkg",css:{color:"#aaa",display:"inline-block",":hover":{color:"white"}}},c.jsx(Aa,null)),c.jsx("a",{href:"https://github.com/mjackson/unpkg",css:{color:"#aaa",display:"inline-block",":hover":{color:"white"},marginLeft:"1rem"}},c.jsx(Ba,null))))))}var la="default"in r?r["default"]:r;A=A&&A.hasOwnProperty("default")?A["default"]:A;var Ma="undefined"!==
typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},k=C(function(a,b){function c(a){if("object"===typeof a&&null!==a){var b=a.$$typeof;switch(b){case d:switch(a=a.type,a){case m:case f:case q:case k:case l:case t:return a;default:switch(a=a&&a.$$typeof,a){case p:case n:case u:return a;default:return b}}case x:case v:case h:return b}}}function g(a){return c(a)===f}Object.defineProperty(b,"__esModule",{value:!0});var d=
(a="function"===typeof Symbol&&Symbol.for)?Symbol.for("react.element"):60103,h=a?Symbol.for("react.portal"):60106,q=a?Symbol.for("react.fragment"):60107,l=a?Symbol.for("react.strict_mode"):60108,k=a?Symbol.for("react.profiler"):60114,u=a?Symbol.for("react.provider"):60109,p=a?Symbol.for("react.context"):60110,m=a?Symbol.for("react.async_mode"):60111,f=a?Symbol.for("react.concurrent_mode"):60111,n=a?Symbol.for("react.forward_ref"):60112,t=a?Symbol.for("react.suspense"):60113,v=a?Symbol.for("react.memo"):
60115,x=a?Symbol.for("react.lazy"):60116;b.typeOf=c;b.AsyncMode=m;b.ConcurrentMode=f;b.ContextConsumer=p;b.ContextProvider=u;b.Element=d;b.ForwardRef=n;b.Fragment=q;b.Lazy=x;b.Memo=v;b.Portal=h;b.Profiler=k;b.StrictMode=l;b.Suspense=t;b.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===q||a===f||a===k||a===l||a===t||"object"===typeof a&&null!==a&&(a.$$typeof===x||a.$$typeof===v||a.$$typeof===u||a.$$typeof===p||a.$$typeof===n)};b.isAsyncMode=function(a){return g(a)||
c(a)===m};b.isConcurrentMode=g;b.isContextConsumer=function(a){return c(a)===p};b.isContextProvider=function(a){return c(a)===u};b.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===d};b.isForwardRef=function(a){return c(a)===n};b.isFragment=function(a){return c(a)===q};b.isLazy=function(a){return c(a)===x};b.isMemo=function(a){return c(a)===v};b.isPortal=function(a){return c(a)===h};b.isProfiler=function(a){return c(a)===k};b.isStrictMode=function(a){return c(a)===l};b.isSuspense=
function(a){return c(a)===t}});Q(k);var na=C(function(a,b){(function(){function a(a){if("object"===typeof a&&null!==a){var b=a.$$typeof;switch(b){case h:switch(a=a.type,a){case f:case n:case l:case u:case k:case v:return a;default:switch(a=a&&a.$$typeof,a){case m:case t:case p:return a;default:return b}}case H:case x:case q:return b}}}function c(b){return a(b)===n}Object.defineProperty(b,"__esModule",{value:!0});var d="function"===typeof Symbol&&Symbol.for,h=d?Symbol.for("react.element"):60103,q=
d?Symbol.for("react.portal"):60106,l=d?Symbol.for("react.fragment"):60107,k=d?Symbol.for("react.strict_mode"):60108,u=d?Symbol.for("react.profiler"):60114,p=d?Symbol.for("react.provider"):60109,m=d?Symbol.for("react.context"):60110,f=d?Symbol.for("react.async_mode"):60111,n=d?Symbol.for("react.concurrent_mode"):60111,t=d?Symbol.for("react.forward_ref"):60112,v=d?Symbol.for("react.suspense"):60113,x=d?Symbol.for("react.memo"):60115,H=d?Symbol.for("react.lazy"):60116;d=function(){};var Na=function(a){for(var b=
arguments.length,f=Array(1<b?b-1:0),c=1;c<b;c++)f[c-1]=arguments[c];var n=0;b="Warning: "+a.replace(/%s/g,function(){return f[n++]});"undefined"!==typeof console&&console.warn(b);try{throw Error(b);}catch(Ya){}},Oa=d=function(a,b){if(void 0===b)throw Error("`lowPriorityWarning(condition, format, ...args)` requires a warning message argument");if(!a){for(var f=arguments.length,c=Array(2<f?f-2:0),n=2;n<f;n++)c[n-2]=arguments[n];Na.apply(void 0,[b].concat(c))}},ma=!1;b.typeOf=a;b.AsyncMode=f;b.ConcurrentMode=
n;b.ContextConsumer=m;b.ContextProvider=p;b.Element=h;b.ForwardRef=t;b.Fragment=l;b.Lazy=H;b.Memo=x;b.Portal=q;b.Profiler=u;b.StrictMode=k;b.Suspense=v;b.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===l||a===n||a===u||a===k||a===v||"object"===typeof a&&null!==a&&(a.$$typeof===H||a.$$typeof===x||a.$$typeof===p||a.$$typeof===m||a.$$typeof===t)};b.isAsyncMode=function(b){ma||(ma=!0,Oa(!1,"The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API."));
return c(b)||a(b)===f};b.isConcurrentMode=c;b.isContextConsumer=function(b){return a(b)===m};b.isContextProvider=function(b){return a(b)===p};b.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===h};b.isForwardRef=function(b){return a(b)===t};b.isFragment=function(b){return a(b)===l};b.isLazy=function(b){return a(b)===H};b.isMemo=function(b){return a(b)===x};b.isPortal=function(b){return a(b)===q};b.isProfiler=function(b){return a(b)===u};b.isStrictMode=function(b){return a(b)===
k};b.isSuspense=function(b){return a(b)===v}})()});Q(na);var oa=C(function(a){a.exports=na}),pa=Object.getOwnPropertySymbols,Pa=Object.prototype.hasOwnProperty,Qa=Object.prototype.propertyIsEnumerable,Ra=function(){try{if(!Object.assign)return!1;var a=new String("abc");a[5]="de";if("5"===Object.getOwnPropertyNames(a)[0])return!1;var b={};for(a=0;10>a;a++)b["_"+String.fromCharCode(a)]=a;if("0123456789"!==Object.getOwnPropertyNames(b).map(function(a){return b[a]}).join(""))return!1;var c={};"abcdefghijklmnopqrst".split("").forEach(function(a){c[a]=
a});return"abcdefghijklmnopqrst"!==Object.keys(Object.assign({},c)).join("")?!1:!0}catch(g){return!1}}()?Object.assign:function(a,b){if(null===a||void 0===a)throw new TypeError("Object.assign cannot be called with null or undefined");var c=Object(a);for(var g,d=1;d<arguments.length;d++){var h=Object(arguments[d]);for(var q in h)Pa.call(h,q)&&(c[q]=h[q]);if(pa){g=pa(h);for(var l=0;l<g.length;l++)Qa.call(h,g[l])&&(c[g[l]]=h[g[l]])}}return c},J=function(){},K={},ua=Function.call.bind(Object.prototype.hasOwnProperty);
J=function(a){a="Warning: "+a;"undefined"!==typeof console&&console.error(a);try{throw Error(a);}catch(b){}};I.resetWarningCache=function(){K={}};var Sa=Function.call.bind(Object.prototype.hasOwnProperty),B=function(){};B=function(a){a="Warning: "+a;"undefined"!==typeof console&&console.error(a);try{throw Error(a);}catch(b){}};var Ta=function(a,b){function c(a,b){return a===b?0!==a||1/a===1/b:a!==a&&b!==b}function g(a){this.message=a;this.stack=""}function d(a){function f(f,n,e,t,m,v,h){t=t||"<<anonymous>>";
v=v||e;if("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"!==h){if(b)throw f=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"),f.name="Invariant Violation",f;"undefined"!==typeof console&&(h=t+":"+e,!c[h]&&3>d&&(B("You are manually calling a React.PropTypes validation function for the `"+v+"` prop on `"+t+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),
c[h]=!0,d++))}return null==n[e]?f?null===n[e]?new g("The "+m+" `"+v+"` is marked as required "+("in `"+t+"`, but its value is `null`.")):new g("The "+m+" `"+v+"` is marked as required in "+("`"+t+"`, but its value is `undefined`.")):null:a(n,e,t,m,v)}var c={},d=0,e=f.bind(null,!1);e.isRequired=f.bind(null,!0);return e}function h(a){return d(function(b,f,c,e,d,m){b=b[f];return l(b)!==a?(b=k(b),new g("Invalid "+e+" `"+d+"` of type "+("`"+b+"` supplied to `"+c+"`, expected ")+("`"+a+"`."))):null})}function q(b){switch(typeof b){case "number":case "string":case "undefined":return!0;
case "boolean":return!b;case "object":if(Array.isArray(b))return b.every(q);if(null===b||a(b))return!0;var c=b&&(p&&b[p]||b["@@iterator"]);var f="function"===typeof c?c:void 0;if(f)if(c=f.call(b),f!==b.entries)for(;!(b=c.next()).done;){if(!q(b.value))return!1}else for(;!(b=c.next()).done;){if((b=b.value)&&!q(b[1]))return!1}else return!1;return!0;default:return!1}}function l(a){var b=typeof a;return Array.isArray(a)?"array":a instanceof RegExp?"object":"symbol"===b||a&&("Symbol"===a["@@toStringTag"]||
"function"===typeof Symbol&&a instanceof Symbol)?"symbol":b}function k(a){if("undefined"===typeof a||null===a)return""+a;var b=l(a);if("object"===b){if(a instanceof Date)return"date";if(a instanceof RegExp)return"regexp"}return b}function u(a){a=k(a);switch(a){case "array":case "object":return"an "+a;case "boolean":case "date":case "regexp":return"a "+a;default:return a}}var p="function"===typeof Symbol&&Symbol.iterator,m={array:h("array"),bool:h("boolean"),func:h("function"),number:h("number"),object:h("object"),
string:h("string"),symbol:h("symbol"),any:d(F),arrayOf:function(a){return d(function(b,c,f,e,d){if("function"!==typeof a)return new g("Property `"+d+"` of component `"+f+"` has invalid PropType notation inside arrayOf.");b=b[c];if(!Array.isArray(b))return b=l(b),new g("Invalid "+e+" `"+d+"` of type "+("`"+b+"` supplied to `"+f+"`, expected an array."));for(c=0;c<b.length;c++){var n=a(b,c,f,e,d+"["+c+"]","SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");if(n instanceof Error)return n}return null})},
element:function(){return d(function(b,c,e,d,m){b=b[c];return a(b)?null:(b=l(b),new g("Invalid "+d+" `"+m+"` of type "+("`"+b+"` supplied to `"+e+"`, expected a single ReactElement.")))})}(),elementType:function(){return d(function(a,b,c,e,d){a=a[b];return oa.isValidElementType(a)?null:(a=l(a),new g("Invalid "+e+" `"+d+"` of type "+("`"+a+"` supplied to `"+c+"`, expected a single ReactElement type.")))})}(),instanceOf:function(a){return d(function(b,c,f,e,d){if(!(b[c]instanceof a)){var n=a.name||
"<<anonymous>>";b=b[c];b=b.constructor&&b.constructor.name?b.constructor.name:"<<anonymous>>";return new g("Invalid "+e+" `"+d+"` of type "+("`"+b+"` supplied to `"+f+"`, expected ")+("instance of `"+n+"`."))}return null})},node:function(){return d(function(a,b,c,e,d){return q(a[b])?null:new g("Invalid "+e+" `"+d+"` supplied to "+("`"+c+"`, expected a ReactNode."))})}(),objectOf:function(a){return d(function(b,c,f,e,d){if("function"!==typeof a)return new g("Property `"+d+"` of component `"+f+"` has invalid PropType notation inside objectOf.");
b=b[c];c=l(b);if("object"!==c)return new g("Invalid "+e+" `"+d+"` of type "+("`"+c+"` supplied to `"+f+"`, expected an object."));for(var m in b)if(Sa(b,m)&&(c=a(b,m,f,e,d+"."+m,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"),c instanceof Error))return c;return null})},oneOf:function(a){return Array.isArray(a)?d(function(b,f,e,d,m){b=b[f];for(f=0;f<a.length;f++)if(c(b,a[f]))return null;f=JSON.stringify(a,function(a,b){return"symbol"===k(b)?String(b):b});return new g("Invalid "+d+" `"+m+"` of value `"+
String(b)+"` "+("supplied to `"+e+"`, expected one of "+f+"."))}):(1<arguments.length?B("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):B("Invalid argument supplied to oneOf, expected an array."),F)},oneOfType:function(a){if(!Array.isArray(a))return B("Invalid argument supplied to oneOfType, expected an instance of array."),F;for(var b=0;b<a.length;b++){var c=a[b];if("function"!==
typeof c)return B("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+u(c)+" at index "+b+"."),F}return d(function(b,c,f,e,d){for(var m=0;m<a.length;m++)if(null==(0,a[m])(b,c,f,e,d,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"))return null;return new g("Invalid "+e+" `"+d+"` supplied to "+("`"+f+"`."))})},shape:function(a){return d(function(b,c,f,e,d){b=b[c];c=l(b);if("object"!==c)return new g("Invalid "+e+" `"+d+"` of type `"+c+"` "+("supplied to `"+f+"`, expected `object`."));
for(var m in a)if(c=a[m])if(c=c(b,m,f,e,d+"."+m,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"))return c;return null})},exact:function(a){return d(function(b,c,e,d,f){var m=b[c],n=l(m);if("object"!==n)return new g("Invalid "+d+" `"+f+"` of type `"+n+"` "+("supplied to `"+e+"`, expected `object`."));n=Ra({},b[c],a);for(var h in n){n=a[h];if(!n)return new g("Invalid "+d+" `"+f+"` key `"+h+"` supplied to `"+e+"`.\nBad object: "+JSON.stringify(b[c],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(a),
null,"  "));if(n=n(m,h,e,d,f+"."+h,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"))return n}return null})}};g.prototype=Error.prototype;m.checkPropTypes=I;m.resetWarningCache=I.resetWarningCache;return m.PropTypes=m};k=C(function(a){a.exports=Ta(oa.isElement,!0)});var Ua=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b],g;for(g in c)Object.prototype.hasOwnProperty.call(c,g)&&(a[g]=c[g])}return a},Va={border:0,clip:"rect(0 0 0 0)",height:"1px",width:"1px",margin:"-1px",
padding:0,overflow:"hidden",position:"absolute"},G=function(a){return la.createElement("div",Ua({style:Va},a))},qa=C(function(a){(function(b,c){a.exports=c()})(Ma,function(){function a(a){if(!a)return!0;if(!d(a)||0!==a.length)for(var b in a)if(u.call(a,b))return!1;return!0}function c(a){return"number"===typeof a||"[object Number]"===r.call(a)}function g(a){return"string"===typeof a||"[object String]"===r.call(a)}function d(a){return"object"===typeof a&&"number"===typeof a.length&&"[object Array]"===
r.call(a)}function h(a){var b=parseInt(a);return b.toString()===a?b:a}function k(b,d,e,l){c(d)&&(d=[d]);if(a(d))return b;if(g(d))return k(b,d.split("."),e,l);var f=h(d[0]);if(1===d.length)return d=b[f],void 0!==d&&l||(b[f]=e),d;void 0===b[f]&&(c(f)?b[f]=[]:b[f]={});return k(b[f],d.slice(1),e,l)}function l(b,e){c(e)&&(e=[e]);if(!a(b)){if(a(e))return b;if(g(e))return l(b,e.split("."));var f=h(e[0]),m=b[f];if(1===e.length)void 0!==m&&(d(b)?b.splice(f,1):delete b[f]);else if(void 0!==b[f])return l(b[f],
e.slice(1));return b}}var r=Object.prototype.toString,u=Object.prototype.hasOwnProperty,p={ensureExists:function(a,b,c){return k(a,b,c,!0)},set:function(a,b,c,d){return k(a,b,c,d)},insert:function(a,b,c,e){var f=p.get(a,b);e=~~e;d(f)||(f=[],p.set(a,b,f));f.splice(e,0,c)},empty:function(b,e){if(a(e))return b;if(!a(b)){var f,h;if(!(f=p.get(b,e)))return b;if(g(f))return p.set(b,e,"");if("boolean"===typeof f||"[object Boolean]"===r.call(f))return p.set(b,e,!1);if(c(f))return p.set(b,e,0);if(d(f))f.length=
0;else if("object"===typeof f&&"[object Object]"===r.call(f))for(h in f)u.call(f,h)&&delete f[h];else return p.set(b,e,null)}},push:function(a,b){var c=p.get(a,b);d(c)||(c=[],p.set(a,b,c));c.push.apply(c,Array.prototype.slice.call(arguments,2))},coalesce:function(a,b,c){for(var e,d=0,f=b.length;d<f;d++)if(void 0!==(e=p.get(a,b[d])))return e;return c},get:function(b,d,e){c(d)&&(d=[d]);if(a(d))return b;if(a(b))return e;if(g(d))return p.get(b,d.split("."),e);var f=h(d[0]);return 1===d.length?void 0===
b[f]?e:b[f]:p.get(b[f],d.slice(1),e)},del:function(a,b){return l(a,b)}};return p})});var ra=function(a){return function(b){return typeof b===a}};var Wa=function(a,b){var c=1,g=b||function(a,b){return b};"-"===a[0]&&(c=-1,a=a.substr(1));return function(b,e){var d;b=g(a,qa.get(b,a));e=g(a,qa.get(e,a));b<e&&(d=-1);b>e&&(d=1);b===e&&(d=0);return d*c}};var da=function(){var a=Array.prototype.slice.call(arguments),b=a.filter(ra("string")),c=a.filter(ra("function"))[0];return function(a,d){for(var e=b.length,
g=0,k=0;0===g&&k<e;)g=Wa(b[k],c)(a,d),k++;return g}};let sa="B kB MB GB TB PB EB ZB YB".split(" "),ta=(a,b)=>{let c=a;"string"===typeof b?c=a.toLocaleString(b):!0===b&&(c=a.toLocaleString());return c};var ea=(a,b)=>{if(!Number.isFinite(a))throw new TypeError(`Expected a finite number, got ${typeof a}: ${a}`);b=Object.assign({},b);if(b.signed&&0===a)return" 0 B";var c=0>a;let g=c?"-":b.signed?"+":"";c&&(a=-a);if(1>a)return a=ta(a,b.locale),g+a+" B";c=Math.min(Math.floor(Math.log10(a)/3),sa.length-
1);a=Number((a/Math.pow(1E3,c)).toPrecision(3));a=ta(a,b.locale);return g+a+" "+sa[c]},W={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},V=r.createContext&&r.createContext(W),z=window&&window.__assign||function(){z=Object.assign||function(a){for(var b,c=1,g=arguments.length;c<g;c++){b=arguments[c];for(var d in b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d])}return a};return z.apply(this,arguments)},wa=window&&window.__rest||function(a,b){var c={},g;for(g in a)Object.prototype.hasOwnProperty.call(a,
g)&&0>b.indexOf(g)&&(c[g]=a[g]);if(null!=a&&"function"===typeof Object.getOwnPropertySymbols){var d=0;for(g=Object.getOwnPropertySymbols(a);d<g.length;d++)0>b.indexOf(g[d])&&(c[g[d]]=a[g[d]])}return c},Y=function(a){return D({tag:"svg",attr:{viewBox:"0 0 12 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M8.5 1H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V4.5L8.5 1zM11 14H1V2h7l3 3v9zM5 6.98L3.5 8.5 5 10l-.5 1L2 8.5 4.5 6l.5.98zM7.5 6L10 8.5 7.5 11l-.5-.98L8.5 8.5 7 7l.5-1z"}}]})(a)};
Y.displayName="GoFileCode";var Z=function(a){return D({tag:"svg",attr:{viewBox:"0 0 14 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M13 4H7V3c0-.66-.31-1-1-1H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zM6 4H1V3h5v1z"}}]})(a)};Z.displayName="GoFileDirectory";var X=function(a){return D({tag:"svg",attr:{viewBox:"0 0 12 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"}}]})(a)};
X.displayName="GoFile";var ba=function(a){return D({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"}}]})(a)};
ba.displayName="FaGithub";var aa=function(a){return D({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"}}]})(a)};
aa.displayName="FaTwitter";var M={color:"#0076ff",textDecoration:"none",":hover":{textDecoration:"underline"}},y={paddingTop:6,paddingRight:3,paddingBottom:6,paddingLeft:3,borderTop:"1px solid #eaecef"},L=w({},y,{color:"#424242",width:17,paddingRight:2,paddingLeft:10,"@media (max-width: 700px)":{paddingLeft:20}}),N=w({},y,{textAlign:"right",paddingRight:10,"@media (max-width: 700px)":{paddingRight:20}});ca.propTypes={path:k.string.isRequired,details:k.objectOf(k.shape({path:k.string.isRequired,type:k.oneOf(["directory",
"file"]).isRequired,contentType:k.string,integrity:k.string,size:k.number})).isRequired};fa.propTypes={path:k.string.isRequired,details:k.shape({contentType:k.string.isRequired,highlights:k.arrayOf(k.string),uri:k.string,integrity:k.string.isRequired,language:k.string.isRequired,size:k.number.isRequired}).isRequired};var Ka=c.css(ia(),'\nfont-family: -apple-system,\n  BlinkMacSystemFont,\n  "Segoe UI",\n  "Roboto",\n  "Oxygen",\n  "Ubuntu",\n  "Cantarell",\n  "Fira Sans",\n  "Droid Sans",\n  "Helvetica Neue",\n  sans-serif;\n',
"\nfont-family: Menlo,\n  Monaco,\n  Lucida Console,\n  Liberation Mono,\n  DejaVu Sans Mono,\n  Bitstream Vera Sans Mono,\n  Courier New,\n  monospace;\n"),La=c.css(ha()),Xa=k.shape({path:k.string.isRequired,type:k.oneOf(["directory","file"]).isRequired,details:k.object.isRequired});ka.propTypes={packageName:k.string.isRequired,packageVersion:k.string.isRequired,availableVersions:k.arrayOf(k.string),filename:k.string.isRequired,target:Xa.isRequired};A.hydrate(la.createElement(ka,window.__DATA__||
{}),document.getElementById("root"))})(React,ReactDOM,emotionCore);
