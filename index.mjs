// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function n(n,i,s,o){var l,a;if(!t(n))throw new TypeError(r("invalid argument. First argument must be a collection. Value: `%s`.",n));if(!e(i))throw new TypeError(r("invalid argument. Second argument must be a function. Value: `%s`.",i));if(!e(s))throw new TypeError(r("invalid argument. Third argument must be a function. Value: `%s`.",s));if(0===(l=n.length)&&(i.call(o,void 0,void 0,n),0===(l=n.length)))return n;a=0;do{i.call(o,n[a],a,n),a+=1,l=n.length}while(a<l&&s(n[a-1],a-1,n));return n}export{n as default};
//# sourceMappingURL=index.mjs.map
