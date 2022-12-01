// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).itermmin=r()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,e=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,f=n.__lookupGetter__,a=n.__lookupSetter__;r=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,r,e){var c,l,y,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((l="value"in e)&&(f.call(t,r)||a.call(t,r)?(c=t.__proto__,t.__proto__=n,delete t[r],t[r]=e.value,t.__proto__=c):t[r]=e.value),y="get"in e,p="set"in e,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(t,r,e.get),p&&u&&u.call(t,r,e.set),t};var c=r;function l(t,r,e){c(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}var y=/./;function p(t){return"boolean"==typeof t}var b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function s(){return b&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function m(t,r){return null!=t&&d.call(t,r)}var j="function"==typeof Symbol?Symbol.toStringTag:"";var g=s()?function(t){var r,e,n;if(null==t)return v.call(t);e=t[j],r=m(t,j);try{t[j]=void 0}catch(r){return v.call(t)}return n=v.call(t),r?t[j]=e:delete t[j],n}:function(t){return v.call(t)},w=Boolean.prototype.toString;var _=s();function h(t){return"object"==typeof t&&(t instanceof Boolean||(_?function(t){try{return w.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===g(t)))}function S(t){return p(t)||h(t)}function A(){return new Function("return this;")()}l(S,"isPrimitive",p),l(S,"isObject",h);var E="object"==typeof self?self:null,O="object"==typeof window?window:null,T="object"==typeof global?global:null;var N=function(t){if(arguments.length){if(!p(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return A()}if(E)return E;if(O)return O;if(T)return T;throw new Error("unexpected error. Unable to resolve global object.")}(),I=N.document&&N.document.childNodes,F=Int8Array;function P(){return/^\s*function\s*([^(]*)/i}var x=/^\s*function\s*([^(]*)/i;l(P,"REGEXP",x);var B=Array.isArray?Array.isArray:function(t){return"[object Array]"===g(t)};function V(t){return null!==t&&"object"==typeof t}function k(t){var r,e,n,o;if(("Object"===(e=g(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=x.exec(n.toString()))return r[1]}return V(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}l(V,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!B(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(V));var C="function"==typeof y||"object"==typeof F||"function"==typeof I?function(t){return k(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?k(t).toLowerCase():r};function G(t){return"function"===C(t)}function M(t){return"number"==typeof t}var R=Number,L=R.prototype.toString;var U=s();function Y(t){return"object"==typeof t&&(t instanceof R||(U?function(t){try{return L.call(t),!0}catch(t){return!1}}(t):"[object Number]"===g(t)))}function X(t){return M(t)||Y(t)}l(X,"isPrimitive",M),l(X,"isObject",Y);var q=Number.POSITIVE_INFINITY,z=R.NEGATIVE_INFINITY,D=Math.floor;function H(t){return t<q&&t>z&&D(r=t)===r;var r}function J(t){return M(t)&&H(t)}function K(t){return Y(t)&&H(t.valueOf())}function Q(t){return J(t)||K(t)}function W(t){return J(t)&&t>0}function Z(t){return K(t)&&t.valueOf()>0}function $(t){return W(t)||Z(t)}l(Q,"isPrimitive",J),l(Q,"isObject",K),l($,"isPrimitive",W),l($,"isObject",Z);var tt="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&m(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;function rt(t){return t!=t}function et(t){return 0===t&&1/t===z}var nt="function"==typeof Float64Array;var ot="function"==typeof Float64Array?Float64Array:null;var it="function"==typeof Float64Array?Float64Array:void 0;var ut=function(){var t,r,e;if("function"!=typeof ot)return!1;try{r=new ot([1,3.14,-3.14,NaN]),e=r,t=(nt&&e instanceof Float64Array||"[object Float64Array]"===g(e))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?it:function(){throw new Error("not implemented")};function ft(){var t,r=arguments,e=r[0],n="https://stdlib.io/e/"+e+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}return function t(r,e){var n,o,i,u,f;if(f=typeof(u=r),null===u||"object"!==f&&"function"!==f||!G(u.next))throw new TypeError(ft("0fR48",r));if(!W(e))throw new TypeError(ft("0fR4I",e));return i=function(t){var r,e,n,o;if(!W(t))throw new TypeError("invalid argument. Must provide a positive integer. Value: `"+t+"`.");return r=new ut(t),e=q,o=-1,n=0,function(i){var u,f;if(0===arguments.length)return 0===n?null:e;if(o=(o+1)%t,n<t)n+=1,(rt(i)||i<e||i===e&&et(i))&&(e=i);else if(rt(i)||i<e)e=i;else if(r[o]===e&&i>e||rt(r[o])){for(e=i,f=0;f<t;f++)if(f!==o){if(rt(u=r[f])){e=u;break}(u<e||u===e&&et(u))&&(e=u)}}else if(r[o]===e&&i===e&&0===i)if(et(i))e=i;else if(et(r[o]))for(e=i,f=0;f<t;f++)if(f!==o&&et(r[f])){e=r[f];break}return r[o]=i,e}}(e),l(n={},"next",(function(){var t;if(o)return{done:!0};if((t=r.next()).done)return o=!0,{done:!0};t="number"==typeof t.value?i(t.value):i(NaN);return{value:t,done:!1}})),l(n,"return",(function(t){if(o=!0,arguments.length)return{value:t,done:!0};return{done:!0}})),tt&&G(r[tt])&&l(n,tt,(function(){return t(r[tt](),e)})),n}}));
//# sourceMappingURL=index.js.map
