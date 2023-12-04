(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function Xr(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const J={},wt=[],Ae=()=>{},fs=()=>!1,cs=/^on[^a-z]/,Yn=e=>cs.test(e),qr=e=>e.startsWith("onUpdate:"),ae=Object.assign,Jr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},us=Object.prototype.hasOwnProperty,H=(e,t)=>us.call(e,t),$=Array.isArray,kt=e=>Kn(e)==="[object Map]",Li=e=>Kn(e)==="[object Set]",L=e=>typeof e=="function",ne=e=>typeof e=="string",Wn=e=>typeof e=="symbol",G=e=>e!==null&&typeof e=="object",zi=e=>(G(e)||L(e))&&L(e.then)&&L(e.catch),Di=Object.prototype.toString,Kn=e=>Di.call(e),ds=e=>Kn(e).slice(8,-1),Bi=e=>Kn(e)==="[object Object]",Gr=e=>ne(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Pn=Xr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Vn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},ms=/-(\w)/g,Ne=Vn(e=>e.replace(ms,(t,n)=>n?n.toUpperCase():"")),hs=/\B([A-Z])/g,Tt=Vn(e=>e.replace(hs,"-$1").toLowerCase()),Xn=Vn(e=>e.charAt(0).toUpperCase()+e.slice(1)),cr=Vn(e=>e?`on${Xn(e)}`:""),mt=(e,t)=>!Object.is(e,t),ur=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Rn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},ps=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Ra;const wr=()=>Ra||(Ra=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Zr(e){if($(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=ne(r)?ys(r):Zr(r);if(a)for(const i in a)t[i]=a[i]}return t}else if(ne(e)||G(e))return e}const gs=/;(?![^(]*\))/g,vs=/:([^]+)/,bs=/\/\*[^]*?\*\//g;function ys(e){const t={};return e.replace(bs,"").split(gs).forEach(n=>{if(n){const r=n.split(vs);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function qn(e){let t="";if(ne(e))t=e;else if($(e))for(let n=0;n<e.length;n++){const r=qn(e[n]);r&&(t+=r+" ")}else if(G(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const xs="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",_s=Xr(xs);function Hi(e){return!!e||e===""}const Fn=e=>ne(e)?e:e==null?"":$(e)||G(e)&&(e.toString===Di||!L(e.toString))?JSON.stringify(e,Ui,2):String(e),Ui=(e,t)=>t&&t.__v_isRef?Ui(e,t.value):kt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:Li(t)?{[`Set(${t.size})`]:[...t.values()]}:G(t)&&!$(t)&&!Bi(t)?String(t):t;let ye;class ws{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=ye,!t&&ye&&(this.index=(ye.scopes||(ye.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=ye;try{return ye=this,t()}finally{ye=n}}}on(){ye=this}off(){ye=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function ks(e,t=ye){t&&t.active&&t.effects.push(e)}function As(){return ye}const Qr=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Yi=e=>(e.w&Ze)>0,Wi=e=>(e.n&Ze)>0,Os=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Ze},Es=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Yi(a)&&!Wi(a)?a.delete(e):t[n++]=a,a.w&=~Ze,a.n&=~Ze}t.length=n}},kr=new WeakMap;let zt=0,Ze=1;const Ar=30;let xe;const ut=Symbol(""),Or=Symbol("");class ea{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,ks(this,r)}run(){if(!this.active)return this.fn();let t=xe,n=Je;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=xe,xe=this,Je=!0,Ze=1<<++zt,zt<=Ar?Os(this):Fa(this),this.fn()}finally{zt<=Ar&&Es(this),Ze=1<<--zt,xe=this.parent,Je=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){xe===this?this.deferStop=!0:this.active&&(Fa(this),this.onStop&&this.onStop(),this.active=!1)}}function Fa(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Je=!0;const Ki=[];function Nt(){Ki.push(Je),Je=!1}function Mt(){const e=Ki.pop();Je=e===void 0?!0:e}function me(e,t,n){if(Je&&xe){let r=kr.get(e);r||kr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Qr()),Vi(a)}}function Vi(e,t){let n=!1;zt<=Ar?Wi(e)||(e.n|=Ze,n=!Yi(e)):n=!e.has(xe),n&&(e.add(xe),xe.deps.push(e))}function Le(e,t,n,r,a,i){const o=kr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&$(e)){const l=Number(r);o.forEach((c,d)=>{(d==="length"||!Wn(d)&&d>=l)&&s.push(c)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":$(e)?Gr(n)&&s.push(o.get("length")):(s.push(o.get(ut)),kt(e)&&s.push(o.get(Or)));break;case"delete":$(e)||(s.push(o.get(ut)),kt(e)&&s.push(o.get(Or)));break;case"set":kt(e)&&s.push(o.get(ut));break}if(s.length===1)s[0]&&Er(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);Er(Qr(l))}}function Er(e,t){const n=$(e)?e:[...e];for(const r of n)r.computed&&$a(r);for(const r of n)r.computed||$a(r)}function $a(e,t){(e!==xe||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Ps=Xr("__proto__,__v_isRef,__isVue"),Xi=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Wn)),ja=Cs();function Cs(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=U(this);for(let i=0,o=this.length;i<o;i++)me(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(U)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Nt();const r=U(this)[t].apply(this,n);return Mt(),r}}),e}function Is(e){const t=U(this);return me(t,"has",e),t.hasOwnProperty(e)}class qi{constructor(t=!1,n=!1){this._isReadonly=t,this._shallow=n}get(t,n,r){const a=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!a;if(n==="__v_isReadonly")return a;if(n==="__v_isShallow")return i;if(n==="__v_raw"&&r===(a?i?Hs:Qi:i?Zi:Gi).get(t))return t;const o=$(t);if(!a){if(o&&H(ja,n))return Reflect.get(ja,n,r);if(n==="hasOwnProperty")return Is}const s=Reflect.get(t,n,r);return(Wn(n)?Xi.has(n):Ps(n))||(a||me(t,"get",n),i)?s:le(s)?o&&Gr(n)?s:s.value:G(s)?a?eo(s):ra(s):s}}class Ji extends qi{constructor(t=!1){super(!1,t)}set(t,n,r,a){let i=t[n];if(Pt(i)&&le(i)&&!le(r))return!1;if(!this._shallow&&(!$n(r)&&!Pt(r)&&(i=U(i),r=U(r)),!$(t)&&le(i)&&!le(r)))return i.value=r,!0;const o=$(t)&&Gr(n)?Number(n)<t.length:H(t,n),s=Reflect.set(t,n,r,a);return t===U(a)&&(o?mt(r,i)&&Le(t,"set",n,r):Le(t,"add",n,r)),s}deleteProperty(t,n){const r=H(t,n);t[n];const a=Reflect.deleteProperty(t,n);return a&&r&&Le(t,"delete",n,void 0),a}has(t,n){const r=Reflect.has(t,n);return(!Wn(n)||!Xi.has(n))&&me(t,"has",n),r}ownKeys(t){return me(t,"iterate",$(t)?"length":ut),Reflect.ownKeys(t)}}class Ss extends qi{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Ts=new Ji,Ns=new Ss,Ms=new Ji(!0),ta=e=>e,Jn=e=>Reflect.getPrototypeOf(e);function dn(e,t,n=!1,r=!1){e=e.__v_raw;const a=U(e),i=U(t);n||(mt(t,i)&&me(a,"get",t),me(a,"get",i));const{has:o}=Jn(a),s=r?ta:n?ia:Kt;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function mn(e,t=!1){const n=this.__v_raw,r=U(n),a=U(e);return t||(mt(e,a)&&me(r,"has",e),me(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function hn(e,t=!1){return e=e.__v_raw,!t&&me(U(e),"iterate",ut),Reflect.get(e,"size",e)}function La(e){e=U(e);const t=U(this);return Jn(t).has.call(t,e)||(t.add(e),Le(t,"add",e,e)),this}function za(e,t){t=U(t);const n=U(this),{has:r,get:a}=Jn(n);let i=r.call(n,e);i||(e=U(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?mt(t,o)&&Le(n,"set",e,t):Le(n,"add",e,t),this}function Da(e){const t=U(this),{has:n,get:r}=Jn(t);let a=n.call(t,e);a||(e=U(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Le(t,"delete",e,void 0),i}function Ba(){const e=U(this),t=e.size!==0,n=e.clear();return t&&Le(e,"clear",void 0,void 0),n}function pn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=U(o),l=t?ta:e?ia:Kt;return!e&&me(s,"iterate",ut),o.forEach((c,d)=>r.call(a,l(c),l(d),i))}}function gn(e,t,n){return function(...r){const a=this.__v_raw,i=U(a),o=kt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=a[e](...r),d=n?ta:t?ia:Kt;return!t&&me(i,"iterate",l?Or:ut),{next(){const{value:m,done:v}=c.next();return v?{value:m,done:v}:{value:s?[d(m[0]),d(m[1])]:d(m),done:v}},[Symbol.iterator](){return this}}}}function Ke(e){return function(...t){return e==="delete"?!1:this}}function Rs(){const e={get(i){return dn(this,i)},get size(){return hn(this)},has:mn,add:La,set:za,delete:Da,clear:Ba,forEach:pn(!1,!1)},t={get(i){return dn(this,i,!1,!0)},get size(){return hn(this)},has:mn,add:La,set:za,delete:Da,clear:Ba,forEach:pn(!1,!0)},n={get(i){return dn(this,i,!0)},get size(){return hn(this,!0)},has(i){return mn.call(this,i,!0)},add:Ke("add"),set:Ke("set"),delete:Ke("delete"),clear:Ke("clear"),forEach:pn(!0,!1)},r={get(i){return dn(this,i,!0,!0)},get size(){return hn(this,!0)},has(i){return mn.call(this,i,!0)},add:Ke("add"),set:Ke("set"),delete:Ke("delete"),clear:Ke("clear"),forEach:pn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=gn(i,!1,!1),n[i]=gn(i,!0,!1),t[i]=gn(i,!1,!0),r[i]=gn(i,!0,!0)}),[e,n,t,r]}const[Fs,$s,js,Ls]=Rs();function na(e,t){const n=t?e?Ls:js:e?$s:Fs;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(H(n,a)&&a in r?n:r,a,i)}const zs={get:na(!1,!1)},Ds={get:na(!1,!0)},Bs={get:na(!0,!1)},Gi=new WeakMap,Zi=new WeakMap,Qi=new WeakMap,Hs=new WeakMap;function Us(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ys(e){return e.__v_skip||!Object.isExtensible(e)?0:Us(ds(e))}function ra(e){return Pt(e)?e:aa(e,!1,Ts,zs,Gi)}function Ws(e){return aa(e,!1,Ms,Ds,Zi)}function eo(e){return aa(e,!0,Ns,Bs,Qi)}function aa(e,t,n,r,a){if(!G(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=Ys(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function At(e){return Pt(e)?At(e.__v_raw):!!(e&&e.__v_isReactive)}function Pt(e){return!!(e&&e.__v_isReadonly)}function $n(e){return!!(e&&e.__v_isShallow)}function to(e){return At(e)||Pt(e)}function U(e){const t=e&&e.__v_raw;return t?U(t):e}function no(e){return Rn(e,"__v_skip",!0),e}const Kt=e=>G(e)?ra(e):e,ia=e=>G(e)?eo(e):e;function ro(e){Je&&xe&&(e=U(e),Vi(e.dep||(e.dep=Qr())))}function ao(e,t){e=U(e);const n=e.dep;n&&Er(n)}function le(e){return!!(e&&e.__v_isRef===!0)}function lt(e){return Ks(e,!1)}function Ks(e,t){return le(e)?e:new Vs(e,t)}class Vs{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:U(t),this._value=n?t:Kt(t)}get value(){return ro(this),this._value}set value(t){const n=this.__v_isShallow||$n(t)||Pt(t);t=n?t:U(t),mt(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:Kt(t),ao(this))}}function Xs(e){return le(e)?e.value:e}const qs={get:(e,t,n)=>Xs(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return le(a)&&!le(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function io(e){return At(e)?e:new Proxy(e,qs)}class Js{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new ea(t,()=>{this._dirty||(this._dirty=!0,ao(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=U(this);return ro(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Gs(e,t,n=!1){let r,a;const i=L(e);return i?(r=e,a=Ae):(r=e.get,a=e.set),new Js(r,a,i||!a,n)}function Ge(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){Gn(i,t,n)}return a}function Oe(e,t,n,r){if(L(e)){const i=Ge(e,t,n,r);return i&&zi(i)&&i.catch(o=>{Gn(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Oe(e[i],t,n,r));return a}function Gn(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const c=i.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){Ge(l,null,10,[e,o,s]);return}}Zs(e,n,a,r)}function Zs(e,t,n,r=!0){console.error(e)}let Vt=!1,Pr=!1;const se=[];let Se=0;const Ot=[];let Fe=null,ot=0;const oo=Promise.resolve();let oa=null;function Qs(e){const t=oa||oo;return e?t.then(this?e.bind(this):e):t}function el(e){let t=Se+1,n=se.length;for(;t<n;){const r=t+n>>>1,a=se[r],i=Xt(a);i<e||i===e&&a.pre?t=r+1:n=r}return t}function sa(e){(!se.length||!se.includes(e,Vt&&e.allowRecurse?Se+1:Se))&&(e.id==null?se.push(e):se.splice(el(e.id),0,e),so())}function so(){!Vt&&!Pr&&(Pr=!0,oa=oo.then(fo))}function tl(e){const t=se.indexOf(e);t>Se&&se.splice(t,1)}function nl(e){$(e)?Ot.push(...e):(!Fe||!Fe.includes(e,e.allowRecurse?ot+1:ot))&&Ot.push(e),so()}function Ha(e,t=Vt?Se+1:0){for(;t<se.length;t++){const n=se[t];n&&n.pre&&(se.splice(t,1),t--,n())}}function lo(e){if(Ot.length){const t=[...new Set(Ot)];if(Ot.length=0,Fe){Fe.push(...t);return}for(Fe=t,Fe.sort((n,r)=>Xt(n)-Xt(r)),ot=0;ot<Fe.length;ot++)Fe[ot]();Fe=null,ot=0}}const Xt=e=>e.id==null?1/0:e.id,rl=(e,t)=>{const n=Xt(e)-Xt(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function fo(e){Pr=!1,Vt=!0,se.sort(rl);const t=Ae;try{for(Se=0;Se<se.length;Se++){const n=se[Se];n&&n.active!==!1&&Ge(n,null,14)}}finally{Se=0,se.length=0,lo(),Vt=!1,oa=null,(se.length||Ot.length)&&fo()}}function al(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||J;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:v}=r[d]||J;v&&(a=n.map(w=>ne(w)?w.trim():w)),m&&(a=n.map(ps))}let s,l=r[s=cr(t)]||r[s=cr(Ne(t))];!l&&i&&(l=r[s=cr(Tt(t))]),l&&Oe(l,e,6,a);const c=r[s+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Oe(c,e,6,a)}}function co(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!L(e)){const l=c=>{const d=co(c,t,!0);d&&(s=!0,ae(o,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(G(e)&&r.set(e,null),null):($(i)?i.forEach(l=>o[l]=null):ae(o,i),G(e)&&r.set(e,o),o)}function Zn(e,t){return!e||!Yn(t)?!1:(t=t.slice(2).replace(/Once$/,""),H(e,t[0].toLowerCase()+t.slice(1))||H(e,Tt(t))||H(e,t))}let _e=null,Qn=null;function jn(e){const t=_e;return _e=e,Qn=e&&e.type.__scopeId||null,t}function la(e){Qn=e}function fa(){Qn=null}function il(e,t=_e,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Qa(-1);const i=jn(t);let o;try{o=e(...a)}finally{jn(i),r._d&&Qa(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function dr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:d,renderCache:m,data:v,setupState:w,ctx:z,inheritAttrs:N}=e;let B,k;const O=jn(e);try{if(n.shapeFlag&4){const I=a||r;B=Ie(d.call(I,I,m,i,w,v,z)),k=l}else{const I=t;B=Ie(I.length>1?I(i,{attrs:l,slots:s,emit:c}):I(i,null)),k=t.props?l:ol(l)}}catch(I){Ut.length=0,Gn(I,e,1),B=M(Jt)}let F=B;if(k&&N!==!1){const I=Object.keys(k),{shapeFlag:Y}=F;I.length&&Y&7&&(o&&I.some(qr)&&(k=sl(k,o)),F=Ct(F,k))}return n.dirs&&(F=Ct(F),F.dirs=F.dirs?F.dirs.concat(n.dirs):n.dirs),n.transition&&(F.transition=n.transition),B=F,jn(O),B}const ol=e=>{let t;for(const n in e)(n==="class"||n==="style"||Yn(n))&&((t||(t={}))[n]=e[n]);return t},sl=(e,t)=>{const n={};for(const r in e)(!qr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function ll(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Ua(r,o,c):!!o;if(l&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const v=d[m];if(o[v]!==r[v]&&!Zn(c,v))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?Ua(r,o,c):!0:!!o;return!1}function Ua(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Zn(n,i))return!0}return!1}function fl({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const uo="components";function qt(e,t){return ul(uo,e,!0,t)||e}const cl=Symbol.for("v-ndc");function ul(e,t,n=!0,r=!1){const a=_e||re;if(a){const i=a.type;if(e===uo){const s=of(i,!1);if(s&&(s===t||s===Ne(t)||s===Xn(Ne(t))))return i}const o=Ya(a[e]||i[e],t)||Ya(a.appContext[e],t);return!o&&r?i:o}}function Ya(e,t){return e&&(e[t]||e[Ne(t)]||e[Xn(Ne(t))])}const dl=e=>e.__isSuspense;function ml(e,t){t&&t.pendingBranch?$(e)?t.effects.push(...e):t.effects.push(e):nl(e)}const vn={};function Cn(e,t,n){return mo(e,t,n)}function mo(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=J){var s;const l=As()===((s=re)==null?void 0:s.scope)?re:null;let c,d=!1,m=!1;if(le(e)?(c=()=>e.value,d=$n(e)):At(e)?(c=()=>e,r=!0):$(e)?(m=!0,d=e.some(I=>At(I)||$n(I)),c=()=>e.map(I=>{if(le(I))return I.value;if(At(I))return yt(I);if(L(I))return Ge(I,l,2)})):L(e)?t?c=()=>Ge(e,l,2):c=()=>{if(!(l&&l.isUnmounted))return v&&v(),Oe(e,l,3,[w])}:c=Ae,t&&r){const I=c;c=()=>yt(I())}let v,w=I=>{v=O.onStop=()=>{Ge(I,l,4)}},z;if(Zt)if(w=Ae,t?n&&Oe(t,l,3,[c(),m?[]:void 0,w]):c(),a==="sync"){const I=cf();z=I.__watcherHandles||(I.__watcherHandles=[])}else return Ae;let N=m?new Array(e.length).fill(vn):vn;const B=()=>{if(O.active)if(t){const I=O.run();(r||d||(m?I.some((Y,ie)=>mt(Y,N[ie])):mt(I,N)))&&(v&&v(),Oe(t,l,3,[I,N===vn?void 0:m&&N[0]===vn?[]:N,w]),N=I)}else O.run()};B.allowRecurse=!!t;let k;a==="sync"?k=B:a==="post"?k=()=>de(B,l&&l.suspense):(B.pre=!0,l&&(B.id=l.uid),k=()=>sa(B));const O=new ea(c,k);t?n?B():N=O.run():a==="post"?de(O.run.bind(O),l&&l.suspense):O.run();const F=()=>{O.stop(),l&&l.scope&&Jr(l.scope.effects,O)};return z&&z.push(F),F}function hl(e,t,n){const r=this.proxy,a=ne(e)?e.includes(".")?ho(r,e):()=>r[e]:e.bind(r,r);let i;L(t)?i=t:(i=t.handler,n=t);const o=re;It(this);const s=mo(a,i.bind(r),n);return o?It(o):dt(),s}function ho(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function yt(e,t){if(!G(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),le(e))yt(e.value,t);else if($(e))for(let n=0;n<e.length;n++)yt(e[n],t);else if(Li(e)||kt(e))e.forEach(n=>{yt(n,t)});else if(Bi(e))for(const n in e)yt(e[n],t);return e}function at(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Nt(),Oe(l,n,8,[e.el,s,e,t]),Mt())}}/*! #__NO_SIDE_EFFECTS__ */function pl(e,t){return L(e)?(()=>ae({name:e.name},t,{setup:e}))():e}const In=e=>!!e.type.__asyncLoader,po=e=>e.type.__isKeepAlive;function gl(e,t){go(e,"a",t)}function vl(e,t){go(e,"da",t)}function go(e,t,n=re){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(er(t,r,n),n){let a=n.parent;for(;a&&a.parent;)po(a.parent.vnode)&&bl(r,t,n,a),a=a.parent}}function bl(e,t,n,r){const a=er(t,e,r,!0);vo(()=>{Jr(r[t],a)},n)}function er(e,t,n=re,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Nt(),It(n);const s=Oe(t,n,e,o);return dt(),Mt(),s});return r?a.unshift(i):a.push(i),i}}const He=e=>(t,n=re)=>(!Zt||e==="sp")&&er(e,(...r)=>t(...r),n),yl=He("bm"),xl=He("m"),_l=He("bu"),wl=He("u"),kl=He("bum"),vo=He("um"),Al=He("sp"),Ol=He("rtg"),El=He("rtc");function Pl(e,t=re){er("ec",e,t)}const Cr=e=>e?Po(e)?ha(e)||e.proxy:Cr(e.parent):null,Ht=ae(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Cr(e.parent),$root:e=>Cr(e.root),$emit:e=>e.emit,$options:e=>ca(e),$forceUpdate:e=>e.f||(e.f=()=>sa(e.update)),$nextTick:e=>e.n||(e.n=Qs.bind(e.proxy)),$watch:e=>hl.bind(e)}),mr=(e,t)=>e!==J&&!e.__isScriptSetup&&H(e,t),Cl={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let c;if(t[0]!=="$"){const w=o[t];if(w!==void 0)switch(w){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(mr(r,t))return o[t]=1,r[t];if(a!==J&&H(a,t))return o[t]=2,a[t];if((c=e.propsOptions[0])&&H(c,t))return o[t]=3,i[t];if(n!==J&&H(n,t))return o[t]=4,n[t];Ir&&(o[t]=0)}}const d=Ht[t];let m,v;if(d)return t==="$attrs"&&me(e,"get",t),d(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==J&&H(n,t))return o[t]=4,n[t];if(v=l.config.globalProperties,H(v,t))return v[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return mr(a,t)?(a[t]=n,!0):r!==J&&H(r,t)?(r[t]=n,!0):H(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==J&&H(e,o)||mr(t,o)||(s=i[0])&&H(s,o)||H(r,o)||H(Ht,o)||H(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:H(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Wa(e){return $(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Ir=!0;function Il(e){const t=ca(e),n=e.proxy,r=e.ctx;Ir=!1,t.beforeCreate&&Ka(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:d,beforeMount:m,mounted:v,beforeUpdate:w,updated:z,activated:N,deactivated:B,beforeDestroy:k,beforeUnmount:O,destroyed:F,unmounted:I,render:Y,renderTracked:ie,renderTriggered:oe,errorCaptured:ve,serverPrefetch:ge,expose:Me,inheritAttrs:$t,components:ln,directives:fn,filters:sr}=t;if(c&&Sl(c,r,null),o)for(const Z in o){const K=o[Z];L(K)&&(r[Z]=K.bind(n))}if(a){const Z=a.call(n,n);G(Z)&&(e.data=ra(Z))}if(Ir=!0,i)for(const Z in i){const K=i[Z],nt=L(K)?K.bind(n,n):L(K.get)?K.get.bind(n,n):Ae,cn=!L(K)&&L(K.set)?K.set.bind(n):Ae,rt=qe({get:nt,set:cn});Object.defineProperty(r,Z,{enumerable:!0,configurable:!0,get:()=>rt.value,set:Ee=>rt.value=Ee})}if(s)for(const Z in s)bo(s[Z],r,n,Z);if(l){const Z=L(l)?l.call(n):l;Reflect.ownKeys(Z).forEach(K=>{$l(K,Z[K])})}d&&Ka(d,e,"c");function fe(Z,K){$(K)?K.forEach(nt=>Z(nt.bind(n))):K&&Z(K.bind(n))}if(fe(yl,m),fe(xl,v),fe(_l,w),fe(wl,z),fe(gl,N),fe(vl,B),fe(Pl,ve),fe(El,ie),fe(Ol,oe),fe(kl,O),fe(vo,I),fe(Al,ge),$(Me))if(Me.length){const Z=e.exposed||(e.exposed={});Me.forEach(K=>{Object.defineProperty(Z,K,{get:()=>n[K],set:nt=>n[K]=nt})})}else e.exposed||(e.exposed={});Y&&e.render===Ae&&(e.render=Y),$t!=null&&(e.inheritAttrs=$t),ln&&(e.components=ln),fn&&(e.directives=fn)}function Sl(e,t,n=Ae){$(e)&&(e=Sr(e));for(const r in e){const a=e[r];let i;G(a)?"default"in a?i=Sn(a.from||r,a.default,!0):i=Sn(a.from||r):i=Sn(a),le(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function Ka(e,t,n){Oe($(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function bo(e,t,n,r){const a=r.includes(".")?ho(n,r):()=>n[r];if(ne(e)){const i=t[e];L(i)&&Cn(a,i)}else if(L(e))Cn(a,e.bind(n));else if(G(e))if($(e))e.forEach(i=>bo(i,t,n,r));else{const i=L(e.handler)?e.handler.bind(n):t[e.handler];L(i)&&Cn(a,i,e)}}function ca(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>Ln(l,c,o,!0)),Ln(l,t,o)),G(t)&&i.set(t,l),l}function Ln(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&Ln(e,i,n,!0),a&&a.forEach(o=>Ln(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Tl[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Tl={data:Va,props:Xa,emits:Xa,methods:Dt,computed:Dt,beforeCreate:ce,created:ce,beforeMount:ce,mounted:ce,beforeUpdate:ce,updated:ce,beforeDestroy:ce,beforeUnmount:ce,destroyed:ce,unmounted:ce,activated:ce,deactivated:ce,errorCaptured:ce,serverPrefetch:ce,components:Dt,directives:Dt,watch:Ml,provide:Va,inject:Nl};function Va(e,t){return t?e?function(){return ae(L(e)?e.call(this,this):e,L(t)?t.call(this,this):t)}:t:e}function Nl(e,t){return Dt(Sr(e),Sr(t))}function Sr(e){if($(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ce(e,t){return e?[...new Set([].concat(e,t))]:t}function Dt(e,t){return e?ae(Object.create(null),e,t):t}function Xa(e,t){return e?$(e)&&$(t)?[...new Set([...e,...t])]:ae(Object.create(null),Wa(e),Wa(t??{})):t}function Ml(e,t){if(!e)return t;if(!t)return e;const n=ae(Object.create(null),e);for(const r in t)n[r]=ce(e[r],t[r]);return n}function yo(){return{app:null,config:{isNativeTag:fs,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Rl=0;function Fl(e,t){return function(r,a=null){L(r)||(r=ae({},r)),a!=null&&!G(a)&&(a=null);const i=yo(),o=new WeakSet;let s=!1;const l=i.app={_uid:Rl++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:uf,get config(){return i.config},set config(c){},use(c,...d){return o.has(c)||(c&&L(c.install)?(o.add(c),c.install(l,...d)):L(c)&&(o.add(c),c(l,...d))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,d){return d?(i.components[c]=d,l):i.components[c]},directive(c,d){return d?(i.directives[c]=d,l):i.directives[c]},mount(c,d,m){if(!s){const v=M(r,a);return v.appContext=i,d&&t?t(v,c):e(v,c,m),s=!0,l._container=c,c.__vue_app__=l,ha(v.component)||v.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,d){return i.provides[c]=d,l},runWithContext(c){zn=l;try{return c()}finally{zn=null}}};return l}}let zn=null;function $l(e,t){if(re){let n=re.provides;const r=re.parent&&re.parent.provides;r===n&&(n=re.provides=Object.create(r)),n[e]=t}}function Sn(e,t,n=!1){const r=re||_e;if(r||zn){const a=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:zn._context.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&L(t)?t.call(r&&r.proxy):t}}function jl(e,t,n,r=!1){const a={},i={};Rn(i,nr,1),e.propsDefaults=Object.create(null),xo(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:Ws(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Ll(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=U(a),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let v=d[m];if(Zn(e.emitsOptions,v))continue;const w=t[v];if(l)if(H(i,v))w!==i[v]&&(i[v]=w,c=!0);else{const z=Ne(v);a[z]=Tr(l,s,z,w,e,!1)}else w!==i[v]&&(i[v]=w,c=!0)}}}else{xo(e,t,a,i)&&(c=!0);let d;for(const m in s)(!t||!H(t,m)&&((d=Tt(m))===m||!H(t,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=Tr(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!H(t,m))&&(delete i[m],c=!0)}c&&Le(e,"set","$attrs")}function xo(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(Pn(l))continue;const c=t[l];let d;a&&H(a,d=Ne(l))?!i||!i.includes(d)?n[d]=c:(s||(s={}))[d]=c:Zn(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=U(n),c=s||J;for(let d=0;d<i.length;d++){const m=i[d];n[m]=Tr(a,l,m,c[m],e,!H(c,m))}}return o}function Tr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=H(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&L(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(It(a),r=c[n]=l.call(null,t),dt())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Tt(n))&&(r=!0))}return r}function _o(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!L(e)){const d=m=>{l=!0;const[v,w]=_o(m,t,!0);ae(o,v),w&&s.push(...w)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return G(e)&&r.set(e,wt),wt;if($(i))for(let d=0;d<i.length;d++){const m=Ne(i[d]);qa(m)&&(o[m]=J)}else if(i)for(const d in i){const m=Ne(d);if(qa(m)){const v=i[d],w=o[m]=$(v)||L(v)?{type:v}:ae({},v);if(w){const z=Za(Boolean,w.type),N=Za(String,w.type);w[0]=z>-1,w[1]=N<0||z<N,(z>-1||H(w,"default"))&&s.push(m)}}}const c=[o,s];return G(e)&&r.set(e,c),c}function qa(e){return e[0]!=="$"}function Ja(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function Ga(e,t){return Ja(e)===Ja(t)}function Za(e,t){return $(t)?t.findIndex(n=>Ga(n,e)):L(t)&&Ga(t,e)?0:-1}const wo=e=>e[0]==="_"||e==="$stable",ua=e=>$(e)?e.map(Ie):[Ie(e)],zl=(e,t,n)=>{if(t._n)return t;const r=il((...a)=>ua(t(...a)),n);return r._c=!1,r},ko=(e,t,n)=>{const r=e._ctx;for(const a in e){if(wo(a))continue;const i=e[a];if(L(i))t[a]=zl(a,i,r);else if(i!=null){const o=ua(i);t[a]=()=>o}}},Ao=(e,t)=>{const n=ua(t);e.slots.default=()=>n},Dl=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=U(t),Rn(t,"_",n)):ko(t,e.slots={})}else e.slots={},t&&Ao(e,t);Rn(e.slots,nr,1)},Bl=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=J;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(ae(a,t),!n&&s===1&&delete a._):(i=!t.$stable,ko(t,a)),o=t}else t&&(Ao(e,t),o={default:1});if(i)for(const s in a)!wo(s)&&o[s]==null&&delete a[s]};function Nr(e,t,n,r,a=!1){if($(e)){e.forEach((v,w)=>Nr(v,t&&($(t)?t[w]:t),n,r,a));return}if(In(r)&&!a)return;const i=r.shapeFlag&4?ha(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,c=t&&t.r,d=s.refs===J?s.refs={}:s.refs,m=s.setupState;if(c!=null&&c!==l&&(ne(c)?(d[c]=null,H(m,c)&&(m[c]=null)):le(c)&&(c.value=null)),L(l))Ge(l,s,12,[o,d]);else{const v=ne(l),w=le(l);if(v||w){const z=()=>{if(e.f){const N=v?H(m,l)?m[l]:d[l]:l.value;a?$(N)&&Jr(N,i):$(N)?N.includes(i)||N.push(i):v?(d[l]=[i],H(m,l)&&(m[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else v?(d[l]=o,H(m,l)&&(m[l]=o)):w&&(l.value=o,e.k&&(d[e.k]=o))};o?(z.id=-1,de(z,n)):z()}}}const de=ml;function Hl(e){return Ul(e)}function Ul(e,t){const n=wr();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:d,parentNode:m,nextSibling:v,setScopeId:w=Ae,insertStaticContent:z}=e,N=(f,u,h,p=null,g=null,x=null,A=!1,y=null,_=!!u.dynamicChildren)=>{if(f===u)return;f&&!Lt(f,u)&&(p=un(f),Ee(f,g,x,!0),f=null),u.patchFlag===-2&&(_=!1,u.dynamicChildren=null);const{type:b,ref:S,shapeFlag:P}=u;switch(b){case tr:B(f,u,h,p);break;case Jt:k(f,u,h,p);break;case hr:f==null&&O(u,h,p,A);break;case $e:ln(f,u,h,p,g,x,A,y,_);break;default:P&1?Y(f,u,h,p,g,x,A,y,_):P&6?fn(f,u,h,p,g,x,A,y,_):(P&64||P&128)&&b.process(f,u,h,p,g,x,A,y,_,gt)}S!=null&&g&&Nr(S,f&&f.ref,x,u||f,!u)},B=(f,u,h,p)=>{if(f==null)r(u.el=s(u.children),h,p);else{const g=u.el=f.el;u.children!==f.children&&c(g,u.children)}},k=(f,u,h,p)=>{f==null?r(u.el=l(u.children||""),h,p):u.el=f.el},O=(f,u,h,p)=>{[f.el,f.anchor]=z(f.children,u,h,p,f.el,f.anchor)},F=({el:f,anchor:u},h,p)=>{let g;for(;f&&f!==u;)g=v(f),r(f,h,p),f=g;r(u,h,p)},I=({el:f,anchor:u})=>{let h;for(;f&&f!==u;)h=v(f),a(f),f=h;a(u)},Y=(f,u,h,p,g,x,A,y,_)=>{A=A||u.type==="svg",f==null?ie(u,h,p,g,x,A,y,_):ge(f,u,g,x,A,y,_)},ie=(f,u,h,p,g,x,A,y)=>{let _,b;const{type:S,props:P,shapeFlag:T,transition:j,dirs:D}=f;if(_=f.el=o(f.type,x,P&&P.is,P),T&8?d(_,f.children):T&16&&ve(f.children,_,null,p,g,x&&S!=="foreignObject",A,y),D&&at(f,null,p,"created"),oe(_,f,f.scopeId,A,p),P){for(const W in P)W!=="value"&&!Pn(W)&&i(_,W,null,P[W],x,f.children,p,g,Re);"value"in P&&i(_,"value",null,P.value),(b=P.onVnodeBeforeMount)&&Ce(b,p,f)}D&&at(f,null,p,"beforeMount");const V=Yl(g,j);V&&j.beforeEnter(_),r(_,u,h),((b=P&&P.onVnodeMounted)||V||D)&&de(()=>{b&&Ce(b,p,f),V&&j.enter(_),D&&at(f,null,p,"mounted")},g)},oe=(f,u,h,p,g)=>{if(h&&w(f,h),p)for(let x=0;x<p.length;x++)w(f,p[x]);if(g){let x=g.subTree;if(u===x){const A=g.vnode;oe(f,A,A.scopeId,A.slotScopeIds,g.parent)}}},ve=(f,u,h,p,g,x,A,y,_=0)=>{for(let b=_;b<f.length;b++){const S=f[b]=y?Xe(f[b]):Ie(f[b]);N(null,S,u,h,p,g,x,A,y)}},ge=(f,u,h,p,g,x,A)=>{const y=u.el=f.el;let{patchFlag:_,dynamicChildren:b,dirs:S}=u;_|=f.patchFlag&16;const P=f.props||J,T=u.props||J;let j;h&&it(h,!1),(j=T.onVnodeBeforeUpdate)&&Ce(j,h,u,f),S&&at(u,f,h,"beforeUpdate"),h&&it(h,!0);const D=g&&u.type!=="foreignObject";if(b?Me(f.dynamicChildren,b,y,h,p,D,x):A||K(f,u,y,null,h,p,D,x,!1),_>0){if(_&16)$t(y,u,P,T,h,p,g);else if(_&2&&P.class!==T.class&&i(y,"class",null,T.class,g),_&4&&i(y,"style",P.style,T.style,g),_&8){const V=u.dynamicProps;for(let W=0;W<V.length;W++){const ee=V[W],be=P[ee],vt=T[ee];(vt!==be||ee==="value")&&i(y,ee,be,vt,g,f.children,h,p,Re)}}_&1&&f.children!==u.children&&d(y,u.children)}else!A&&b==null&&$t(y,u,P,T,h,p,g);((j=T.onVnodeUpdated)||S)&&de(()=>{j&&Ce(j,h,u,f),S&&at(u,f,h,"updated")},p)},Me=(f,u,h,p,g,x,A)=>{for(let y=0;y<u.length;y++){const _=f[y],b=u[y],S=_.el&&(_.type===$e||!Lt(_,b)||_.shapeFlag&70)?m(_.el):h;N(_,b,S,null,p,g,x,A,!0)}},$t=(f,u,h,p,g,x,A)=>{if(h!==p){if(h!==J)for(const y in h)!Pn(y)&&!(y in p)&&i(f,y,h[y],null,A,u.children,g,x,Re);for(const y in p){if(Pn(y))continue;const _=p[y],b=h[y];_!==b&&y!=="value"&&i(f,y,b,_,A,u.children,g,x,Re)}"value"in p&&i(f,"value",h.value,p.value)}},ln=(f,u,h,p,g,x,A,y,_)=>{const b=u.el=f?f.el:s(""),S=u.anchor=f?f.anchor:s("");let{patchFlag:P,dynamicChildren:T,slotScopeIds:j}=u;j&&(y=y?y.concat(j):j),f==null?(r(b,h,p),r(S,h,p),ve(u.children,h,S,g,x,A,y,_)):P>0&&P&64&&T&&f.dynamicChildren?(Me(f.dynamicChildren,T,h,g,x,A,y),(u.key!=null||g&&u===g.subTree)&&Oo(f,u,!0)):K(f,u,h,S,g,x,A,y,_)},fn=(f,u,h,p,g,x,A,y,_)=>{u.slotScopeIds=y,f==null?u.shapeFlag&512?g.ctx.activate(u,h,p,A,_):sr(u,h,p,g,x,A,_):Ca(f,u,_)},sr=(f,u,h,p,g,x,A)=>{const y=f.component=ef(f,p,g);if(po(f)&&(y.ctx.renderer=gt),tf(y),y.asyncDep){if(g&&g.registerDep(y,fe),!f.el){const _=y.subTree=M(Jt);k(null,_,u,h)}return}fe(y,f,u,h,g,x,A)},Ca=(f,u,h)=>{const p=u.component=f.component;if(ll(f,u,h))if(p.asyncDep&&!p.asyncResolved){Z(p,u,h);return}else p.next=u,tl(p.update),p.update();else u.el=f.el,p.vnode=u},fe=(f,u,h,p,g,x,A)=>{const y=()=>{if(f.isMounted){let{next:S,bu:P,u:T,parent:j,vnode:D}=f,V=S,W;it(f,!1),S?(S.el=D.el,Z(f,S,A)):S=D,P&&ur(P),(W=S.props&&S.props.onVnodeBeforeUpdate)&&Ce(W,j,S,D),it(f,!0);const ee=dr(f),be=f.subTree;f.subTree=ee,N(be,ee,m(be.el),un(be),f,g,x),S.el=ee.el,V===null&&fl(f,ee.el),T&&de(T,g),(W=S.props&&S.props.onVnodeUpdated)&&de(()=>Ce(W,j,S,D),g)}else{let S;const{el:P,props:T}=u,{bm:j,m:D,parent:V}=f,W=In(u);if(it(f,!1),j&&ur(j),!W&&(S=T&&T.onVnodeBeforeMount)&&Ce(S,V,u),it(f,!0),P&&fr){const ee=()=>{f.subTree=dr(f),fr(P,f.subTree,f,g,null)};W?u.type.__asyncLoader().then(()=>!f.isUnmounted&&ee()):ee()}else{const ee=f.subTree=dr(f);N(null,ee,h,p,f,g,x),u.el=ee.el}if(D&&de(D,g),!W&&(S=T&&T.onVnodeMounted)){const ee=u;de(()=>Ce(S,V,ee),g)}(u.shapeFlag&256||V&&In(V.vnode)&&V.vnode.shapeFlag&256)&&f.a&&de(f.a,g),f.isMounted=!0,u=h=p=null}},_=f.effect=new ea(y,()=>sa(b),f.scope),b=f.update=()=>_.run();b.id=f.uid,it(f,!0),b()},Z=(f,u,h)=>{u.component=f;const p=f.vnode.props;f.vnode=u,f.next=null,Ll(f,u.props,p,h),Bl(f,u.children,h),Nt(),Ha(),Mt()},K=(f,u,h,p,g,x,A,y,_=!1)=>{const b=f&&f.children,S=f?f.shapeFlag:0,P=u.children,{patchFlag:T,shapeFlag:j}=u;if(T>0){if(T&128){cn(b,P,h,p,g,x,A,y,_);return}else if(T&256){nt(b,P,h,p,g,x,A,y,_);return}}j&8?(S&16&&Re(b,g,x),P!==b&&d(h,P)):S&16?j&16?cn(b,P,h,p,g,x,A,y,_):Re(b,g,x,!0):(S&8&&d(h,""),j&16&&ve(P,h,p,g,x,A,y,_))},nt=(f,u,h,p,g,x,A,y,_)=>{f=f||wt,u=u||wt;const b=f.length,S=u.length,P=Math.min(b,S);let T;for(T=0;T<P;T++){const j=u[T]=_?Xe(u[T]):Ie(u[T]);N(f[T],j,h,null,g,x,A,y,_)}b>S?Re(f,g,x,!0,!1,P):ve(u,h,p,g,x,A,y,_,P)},cn=(f,u,h,p,g,x,A,y,_)=>{let b=0;const S=u.length;let P=f.length-1,T=S-1;for(;b<=P&&b<=T;){const j=f[b],D=u[b]=_?Xe(u[b]):Ie(u[b]);if(Lt(j,D))N(j,D,h,null,g,x,A,y,_);else break;b++}for(;b<=P&&b<=T;){const j=f[P],D=u[T]=_?Xe(u[T]):Ie(u[T]);if(Lt(j,D))N(j,D,h,null,g,x,A,y,_);else break;P--,T--}if(b>P){if(b<=T){const j=T+1,D=j<S?u[j].el:p;for(;b<=T;)N(null,u[b]=_?Xe(u[b]):Ie(u[b]),h,D,g,x,A,y,_),b++}}else if(b>T)for(;b<=P;)Ee(f[b],g,x,!0),b++;else{const j=b,D=b,V=new Map;for(b=D;b<=T;b++){const he=u[b]=_?Xe(u[b]):Ie(u[b]);he.key!=null&&V.set(he.key,b)}let W,ee=0;const be=T-D+1;let vt=!1,Ta=0;const jt=new Array(be);for(b=0;b<be;b++)jt[b]=0;for(b=j;b<=P;b++){const he=f[b];if(ee>=be){Ee(he,g,x,!0);continue}let Pe;if(he.key!=null)Pe=V.get(he.key);else for(W=D;W<=T;W++)if(jt[W-D]===0&&Lt(he,u[W])){Pe=W;break}Pe===void 0?Ee(he,g,x,!0):(jt[Pe-D]=b+1,Pe>=Ta?Ta=Pe:vt=!0,N(he,u[Pe],h,null,g,x,A,y,_),ee++)}const Na=vt?Wl(jt):wt;for(W=Na.length-1,b=be-1;b>=0;b--){const he=D+b,Pe=u[he],Ma=he+1<S?u[he+1].el:p;jt[b]===0?N(null,Pe,h,Ma,g,x,A,y,_):vt&&(W<0||b!==Na[W]?rt(Pe,h,Ma,2):W--)}}},rt=(f,u,h,p,g=null)=>{const{el:x,type:A,transition:y,children:_,shapeFlag:b}=f;if(b&6){rt(f.component.subTree,u,h,p);return}if(b&128){f.suspense.move(u,h,p);return}if(b&64){A.move(f,u,h,gt);return}if(A===$e){r(x,u,h);for(let P=0;P<_.length;P++)rt(_[P],u,h,p);r(f.anchor,u,h);return}if(A===hr){F(f,u,h);return}if(p!==2&&b&1&&y)if(p===0)y.beforeEnter(x),r(x,u,h),de(()=>y.enter(x),g);else{const{leave:P,delayLeave:T,afterLeave:j}=y,D=()=>r(x,u,h),V=()=>{P(x,()=>{D(),j&&j()})};T?T(x,D,V):V()}else r(x,u,h)},Ee=(f,u,h,p=!1,g=!1)=>{const{type:x,props:A,ref:y,children:_,dynamicChildren:b,shapeFlag:S,patchFlag:P,dirs:T}=f;if(y!=null&&Nr(y,null,h,f,!0),S&256){u.ctx.deactivate(f);return}const j=S&1&&T,D=!In(f);let V;if(D&&(V=A&&A.onVnodeBeforeUnmount)&&Ce(V,u,f),S&6)ls(f.component,h,p);else{if(S&128){f.suspense.unmount(h,p);return}j&&at(f,null,u,"beforeUnmount"),S&64?f.type.remove(f,u,h,g,gt,p):b&&(x!==$e||P>0&&P&64)?Re(b,u,h,!1,!0):(x===$e&&P&384||!g&&S&16)&&Re(_,u,h),p&&Ia(f)}(D&&(V=A&&A.onVnodeUnmounted)||j)&&de(()=>{V&&Ce(V,u,f),j&&at(f,null,u,"unmounted")},h)},Ia=f=>{const{type:u,el:h,anchor:p,transition:g}=f;if(u===$e){ss(h,p);return}if(u===hr){I(f);return}const x=()=>{a(h),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(f.shapeFlag&1&&g&&!g.persisted){const{leave:A,delayLeave:y}=g,_=()=>A(h,x);y?y(f.el,x,_):_()}else x()},ss=(f,u)=>{let h;for(;f!==u;)h=v(f),a(f),f=h;a(u)},ls=(f,u,h)=>{const{bum:p,scope:g,update:x,subTree:A,um:y}=f;p&&ur(p),g.stop(),x&&(x.active=!1,Ee(A,f,u,h)),y&&de(y,u),de(()=>{f.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},Re=(f,u,h,p=!1,g=!1,x=0)=>{for(let A=x;A<f.length;A++)Ee(f[A],u,h,p,g)},un=f=>f.shapeFlag&6?un(f.component.subTree):f.shapeFlag&128?f.suspense.next():v(f.anchor||f.el),Sa=(f,u,h)=>{f==null?u._vnode&&Ee(u._vnode,null,null,!0):N(u._vnode||null,f,u,null,null,null,h),Ha(),lo(),u._vnode=f},gt={p:N,um:Ee,m:rt,r:Ia,mt:sr,mc:ve,pc:K,pbc:Me,n:un,o:e};let lr,fr;return t&&([lr,fr]=t(gt)),{render:Sa,hydrate:lr,createApp:Fl(Sa,lr)}}function it({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Yl(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Oo(e,t,n=!1){const r=e.children,a=t.children;if($(r)&&$(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=Xe(a[i]),s.el=o.el),n||Oo(o,s)),s.type===tr&&(s.el=o.el)}}function Wl(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<c?i=s+1:o=s;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Kl=e=>e.__isTeleport,$e=Symbol.for("v-fgt"),tr=Symbol.for("v-txt"),Jt=Symbol.for("v-cmt"),hr=Symbol.for("v-stc"),Ut=[];let we=null;function Ue(e=!1){Ut.push(we=e?null:[])}function Vl(){Ut.pop(),we=Ut[Ut.length-1]||null}let Gt=1;function Qa(e){Gt+=e}function Xl(e){return e.dynamicChildren=Gt>0?we||wt:null,Vl(),Gt>0&&we&&we.push(e),e}function Ye(e,t,n,r,a,i){return Xl(R(e,t,n,r,a,i,!0))}function Mr(e){return e?e.__v_isVNode===!0:!1}function Lt(e,t){return e.type===t.type&&e.key===t.key}const nr="__vInternal",Eo=({key:e})=>e??null,Tn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ne(e)||le(e)||L(e)?{i:_e,r:e,k:t,f:!!n}:e:null);function R(e,t=null,n=null,r=0,a=null,i=e===$e?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Eo(t),ref:t&&Tn(t),scopeId:Qn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:_e};return s?(da(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=ne(n)?8:16),Gt>0&&!o&&we&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&we.push(l),l}const M=ql;function ql(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===cl)&&(e=Jt),Mr(e)){const s=Ct(e,t,!0);return n&&da(s,n),Gt>0&&!i&&we&&(s.shapeFlag&6?we[we.indexOf(e)]=s:we.push(s)),s.patchFlag|=-2,s}if(sf(e)&&(e=e.__vccOpts),t){t=Jl(t);let{class:s,style:l}=t;s&&!ne(s)&&(t.class=qn(s)),G(l)&&(to(l)&&!$(l)&&(l=ae({},l)),t.style=Zr(l))}const o=ne(e)?1:dl(e)?128:Kl(e)?64:G(e)?4:L(e)?2:0;return R(e,t,n,r,a,o,i,!0)}function Jl(e){return e?to(e)||nr in e?ae({},e):e:null}function Ct(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?Gl(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&Eo(s),ref:t&&t.ref?n&&a?$(a)?a.concat(Tn(t)):[a,Tn(t)]:Tn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==$e?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ct(e.ssContent),ssFallback:e.ssFallback&&Ct(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Rr(e=" ",t=0){return M(tr,null,e,t)}function Ie(e){return e==null||typeof e=="boolean"?M(Jt):$(e)?M($e,null,e.slice()):typeof e=="object"?Xe(e):M(tr,null,String(e))}function Xe(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Ct(e)}function da(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if($(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),da(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(nr in t)?t._ctx=_e:a===3&&_e&&(_e.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else L(t)?(t={default:t,_ctx:_e},n=32):(t=String(t),r&64?(n=16,t=[Rr(t)]):n=8);e.children=t,e.shapeFlag|=n}function Gl(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=qn([t.class,r.class]));else if(a==="style")t.style=Zr([t.style,r.style]);else if(Yn(a)){const i=t[a],o=r[a];o&&i!==o&&!($(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Ce(e,t,n,r=null){Oe(e,t,7,[n,r])}const Zl=yo();let Ql=0;function ef(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||Zl,i={uid:Ql++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new ws(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:_o(r,a),emitsOptions:co(r,a),emit:null,emitted:null,propsDefaults:J,inheritAttrs:r.inheritAttrs,ctx:J,data:J,props:J,attrs:J,slots:J,refs:J,setupState:J,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=al.bind(null,i),e.ce&&e.ce(i),i}let re=null,ma,bt,ei="__VUE_INSTANCE_SETTERS__";(bt=wr()[ei])||(bt=wr()[ei]=[]),bt.push(e=>re=e),ma=e=>{bt.length>1?bt.forEach(t=>t(e)):bt[0](e)};const It=e=>{ma(e),e.scope.on()},dt=()=>{re&&re.scope.off(),ma(null)};function Po(e){return e.vnode.shapeFlag&4}let Zt=!1;function tf(e,t=!1){Zt=t;const{props:n,children:r}=e.vnode,a=Po(e);jl(e,n,a,t),Dl(e,r);const i=a?nf(e,t):void 0;return Zt=!1,i}function nf(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=no(new Proxy(e.ctx,Cl));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?af(e):null;It(e),Nt();const i=Ge(r,e,0,[e.props,a]);if(Mt(),dt(),zi(i)){if(i.then(dt,dt),t)return i.then(o=>{ti(e,o,t)}).catch(o=>{Gn(o,e,0)});e.asyncDep=i}else ti(e,i,t)}else Co(e,t)}function ti(e,t,n){L(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:G(t)&&(e.setupState=io(t)),Co(e,n)}let ni;function Co(e,t,n){const r=e.type;if(!e.render){if(!t&&ni&&!r.render){const a=r.template||ca(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,c=ae(ae({isCustomElement:i,delimiters:s},o),l);r.render=ni(a,c)}}e.render=r.render||Ae}{It(e),Nt();try{Il(e)}finally{Mt(),dt()}}}function rf(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return me(e,"get","$attrs"),t[n]}}))}function af(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return rf(e)},slots:e.slots,emit:e.emit,expose:t}}function ha(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(io(no(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Ht)return Ht[n](e)},has(t,n){return n in t||n in Ht}}))}function of(e,t=!0){return L(e)?e.displayName||e.name:e.name||t&&e.__name}function sf(e){return L(e)&&"__vccOpts"in e}const qe=(e,t)=>Gs(e,t,Zt);function lf(e,t,n){const r=arguments.length;return r===2?G(t)&&!$(t)?Mr(t)?M(e,null,[t]):M(e,t):M(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Mr(n)&&(n=[n]),M(e,t,n))}const ff=Symbol.for("v-scx"),cf=()=>Sn(ff),uf="3.3.8",df="http://www.w3.org/2000/svg",st=typeof document<"u"?document:null,ri=st&&st.createElement("template"),mf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?st.createElementNS(df,e):st.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>st.createTextNode(e),createComment:e=>st.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>st.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{ri.innerHTML=r?`<svg>${e}</svg>`:e;const s=ri.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},hf=Symbol("_vtc");function pf(e,t,n){const r=e[hf];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const gf=Symbol("_vod");function vf(e,t,n){const r=e.style,a=ne(n);if(n&&!a){if(t&&!ne(t))for(const i in t)n[i]==null&&Fr(r,i,"");for(const i in n)Fr(r,i,n[i])}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),gf in e&&(r.display=i)}}const ai=/\s*!important$/;function Fr(e,t,n){if($(n))n.forEach(r=>Fr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=bf(e,t);ai.test(n)?e.setProperty(Tt(r),n.replace(ai,""),"important"):e[r]=n}}const ii=["Webkit","Moz","ms"],pr={};function bf(e,t){const n=pr[t];if(n)return n;let r=Ne(t);if(r!=="filter"&&r in e)return pr[t]=r;r=Xn(r);for(let a=0;a<ii.length;a++){const i=ii[a]+r;if(i in e)return pr[t]=i}return t}const oi="http://www.w3.org/1999/xlink";function yf(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(oi,t.slice(6,t.length)):e.setAttributeNS(oi,t,n);else{const i=_s(t);n==null||i&&!Hi(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function xf(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n??"";return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){e._value=n;const c=s==="OPTION"?e.getAttribute("value"):e.value,d=n??"";c!==d&&(e.value=d),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Hi(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function _f(e,t,n,r){e.addEventListener(t,n,r)}function wf(e,t,n,r){e.removeEventListener(t,n,r)}const si=Symbol("_vei");function kf(e,t,n,r,a=null){const i=e[si]||(e[si]={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=Af(t);if(r){const c=i[t]=Pf(r,a);_f(e,s,c,l)}else o&&(wf(e,s,o,l),i[t]=void 0)}}const li=/(?:Once|Passive|Capture)$/;function Af(e){let t;if(li.test(e)){t={};let r;for(;r=e.match(li);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Tt(e.slice(2)),t]}let gr=0;const Of=Promise.resolve(),Ef=()=>gr||(Of.then(()=>gr=0),gr=Date.now());function Pf(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Oe(Cf(r,n.value),t,5,[r])};return n.value=e,n.attached=Ef(),n}function Cf(e,t){if($(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const fi=/^on[a-z]/,If=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?pf(e,r,a):t==="style"?vf(e,n,r):Yn(t)?qr(t)||kf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Sf(e,t,r,a))?xf(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),yf(e,t,r,a))};function Sf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&fi.test(t)&&L(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||fi.test(t)&&ne(n)?!1:t in e}const Tf=ae({patchProp:If},mf);let ci;function Nf(){return ci||(ci=Hl(Tf))}const Mf=(...e)=>{const t=Nf().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Rf(r);if(!a)return;const i=t._component;!L(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function Rf(e){return ne(e)?document.querySelector(e):e}const Rt=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},Ff={name:"Title"},Io=e=>(la("data-v-5fa25320"),e=e(),fa(),e),$f={class:"fixed w-screen h-screen bg-black",id:"bg"},jf=Io(()=>R("div",{id:"blob"},null,-1)),Lf=Io(()=>R("div",{id:"blur"},null,-1)),zf=[jf,Lf];function Df(e,t,n,r,a,i){return Ue(),Ye("div",$f,zf)}const Bf=Rt(Ff,[["render",Df],["__scopeId","data-v-5fa25320"]]),Hf=["src"],Uf={class:"text-xl font-bold text-white"},Yf={__name:"SkillCard",props:["icon","label","bgcolor"],setup(e){const t=e,n=lt("https://skillicons.dev/icons?i="+t.icon),r=lt(t.label),a=lt(t.bgcolor),i=qe(()=>a.value?`flex items-center p-2 rounded-md border border-gray-300 shadow-sm w-fit ${a.value}`:"flex items-center p-2 rounded-md border border-gray-300 shadow-sm w-fit");return(o,s)=>(Ue(),Ye("div",{class:qn(i.value)},[R("img",{src:n.value,class:"mr-4",alt:"Skill Icon"},null,8,Hf),R("h2",Uf,Fn(r.value),1)],2))}},Wf={name:"Skills",components:{SkillCard:Yf}},Kf={class:"p-1 w-3/5"},Vf={class:"flex flex-col p-4 m-4 rounded-md bg-slate-800 h-fit"},Xf=R("h1",{class:"font-bold text-green-500"},"I'm proficient at:",-1),qf={class:"flex flex-wrap gap-4 mb-4"},Jf=R("h1",{class:"font-bold text-yellow-500"},"I'm pretty good at:",-1),Gf={class:"flex flex-wrap gap-4 mb-4"},Zf=R("h1",{class:"font-bold text-orange-500"},"I'm okay at:",-1),Qf={class:"flex flex-wrap gap-4 mb-4"},ec=R("h1",{class:"font-bold text-red-500"},"I'm learning/will be learning:",-1),tc={class:"flex flex-wrap gap-4 mb-4"};function nc(e,t,n,r,a,i){const o=qt("SkillCard");return Ue(),Ye("div",Kf,[R("div",Vf,[Xf,R("div",qf,[M(o,{icon:"html",label:"HTML5",bgcolor:"bg-green-500/30"}),M(o,{icon:"javascript",label:"Javascript",bgcolor:"bg-green-500/30"}),M(o,{icon:"css",label:"CSS3",bgcolor:"bg-green-500/30"}),M(o,{icon:"tailwind",label:"Tailwind CSS",bgcolor:"bg-green-500/30"}),M(o,{icon:"arduino",label:"Arduino",bgcolor:"bg-green-500/30"})]),Jf,R("div",Gf,[M(o,{icon:"nodejs",label:"NodeJS",bgcolor:"bg-yellow-500/30"}),M(o,{icon:"express",label:"Express",bgcolor:"bg-yellow-500/30"}),M(o,{icon:"jquery",label:"jQuery/jQueryUI",bgcolor:"bg-yellow-500/30"}),M(o,{icon:"vercel",label:"Vercel",bgcolor:"bg-yellow-500/30"})]),Zf,R("div",Qf,[M(o,{icon:"react",label:"React",bgcolor:"bg-orange-500/30"}),M(o,{icon:"vue",label:"Vue",bgcolor:"bg-orange-500/30"})]),ec,R("div",tc,[M(o,{icon:"firebase",label:"Firebase",bgcolor:"bg-red-500/30"}),M(o,{icon:"docker",label:"Docker",bgcolor:"bg-red-500/30"}),M(o,{icon:"mongodb",label:"MongoDB",bgcolor:"bg-red-500/30"})])])])}const rc=Rt(Wf,[["render",nc]]),ac={class:"w-96 shadow-xl card bg-slate-800"},ic=["src"],oc={class:"card-body"},sc={class:"card-title"},lc={class:"justify-end card-actions"},fc=["href"],cc={__name:"ProjectCard",props:["title","desc","href","imageurl"],setup(e){const t=e,n=lt(t.title),r=lt(t.desc),a=lt(t.imageurl),i=lt(t.href);return(o,s)=>(Ue(),Ye("div",ac,[R("figure",null,[R("img",{src:a.value},null,8,ic)]),R("div",oc,[R("h2",sc,Fn(n.value),1),R("p",null,Fn(r.value),1),R("div",lc,[R("a",{href:i.value,class:"bg-sky-800 hover:bg-sky-700 btn"},"Check it out",8,fc)])])]))}},uc={name:"Projects",components:{ProjectCard:cc}},dc={class:"p-6 text-white bg-gray-900 rounded-lg shadow-lg"},mc=R("h2",{class:"mb-4 text-3xl font-bold text-blue-400"},"Projects",-1),hc={class:"flex flex-col justify-center items-center"},pc={class:"flex flex-wrap gap-6"};function gc(e,t,n,r,a,i){const o=qt("ProjectCard");return Ue(),Ye("div",dc,[mc,R("div",hc,[R("div",pc,[M(o,{title:"Tuneguessr",desc:"A musical geography game. You are given a song, and the goal is to guess where it's from.",href:"tuneguessr",imageurl:""}),M(o,{title:"Research Tempest",desc:"AutoTempest but for AP Capstone (Seminar/Research). Searches multiple reputable sources in 1 query.",href:"https://github.com/bean-frog/research-tempest",imageurl:""}),M(o,{title:"PVA v2",desc:"PVA (Personal Verbal Abuser): A study timer and task organizer that yells at you. Yeah. (there's a nice mode though don't worry)",href:"pva-v2",imageurl:""}),M(o,{title:"ligma.js",desc:"A terrible javascript library that is pretty much just a few interesting things I thought of (that don't deserve their own project)",href:"projects/ligmajs.html",imageurl:""}),M(o,{title:"beansuite",desc:"Google docs/drive but worse but still cool I guess",href:"projects/beansuite.html",imageurl:""}),M(o,{title:"clock app",desc:"a simple alarm clock app that also displays weather",href:"clock-app",imageurl:""}),M(o,{title:"W I D E S H O T",desc:"what if deadshot.io could be super unplayably wide and thicc",href:"projects/wideshot.html",imageurl:""}),M(o,{title:"W I D E Z E N",desc:"what if cryzen.io could be super unplayably wide and thicc",href:"projects/widezen.html",imageurl:""})])])])}const vc=Rt(uc,[["render",gc]]);const bc={name:"Bio"},So=e=>(la("data-v-4add6c13"),e=e(),fa(),e),yc={class:"p-1 w-2/5",id:"fontlol"},xc={class:"flex flex-col items-center p-4 m-4 rounded-md bg-slate-800 h-fit"},_c=So(()=>R("h1",{class:"text-lg font-bold text-white"},"Contact",-1)),wc={class:"flex flex-row gap-4 pt-2 h-full text-white"},kc={target:"_blank",href:"https://github.com/bean-frog"},Ac={target:"_blank",href:"https://instagram.com/beanfrog_"},Oc={target:"_blank",href:"https://discord.gg/PAeZHF2yjJ"},Ec={target:"_blank",href:"mailto:beanfrog@sug.ma"},Pc={target:"_blank",href:"https://bsky.app/profile/beanfrog.bsky.social"},Cc=So(()=>R("div",{class:"flex flex-col items-center p-4 m-4 rounded-md bg-slate-800 h-fit"},[R("h1",{class:"text-lg font-bold text-white"},"Bio"),R("p",{class:"mt-6 text-white text-md"},[Rr(" Hello world! I'm "),R("abbr",{title:"'graham'"},"Graeme"),Rr(", and I'm currently a Junior (11th grade) in high school. I've been into computers and programming since 6th grade, since my first encounter with HTML in 6th grade. Since then, I've come a long way, expanding into building more robust projects and picking up frontend tools like Tailwind and Vue as well as backend technologies, most notably NodeJS and Express. Outside of VSCode, I love to hang out with my 2 golden retrievers, and make fun electronics projects with my friends. (shoutout to m-nasty u a real one) ")])],-1));function Ic(e,t,n,r,a,i){const o=qt("font-awesome-icon");return Ue(),Ye("div",yc,[R("div",xc,[_c,R("div",wc,[R("a",kc,[M(o,{class:"text-2xl",icon:"fab fa-github"})]),R("a",Ac,[M(o,{class:"text-2xl",icon:"fab fa-instagram"})]),R("a",Oc,[M(o,{class:"text-2xl",icon:"fab fa-discord"})]),R("a",Ec,[M(o,{class:"text-2xl",icon:"fas fa-envelope"})]),R("a",Pc,[M(o,{class:"text-2xl",icon:"fas fa-cloud"})])])]),Cc])}const Sc=Rt(bc,[["render",Ic],["__scopeId","data-v-4add6c13"]]);var Tc=["I do things, just not very well","based + Tailwindpilled","404: brain not found","#kb43ver RIP the legend","Go donate to 43i.org","Red Bull is overrated","My dog has 1 braincell (that's still more than me)","kys (keep yourself safe)","You just lost the game!","A Who? A What? A LERODGE!","You're telling me a SHRIMP fried this rice????","Top 10 best waterslides","Moco de Gorila goes hard","BRING ME A SHRUBBERY!","What is the airspeed velocity of an unladen swallow?","Life.... is Roblox","Tell 'em to bring out the whole ocean!","Back to the lab again, yo","*extremely loud incorrect buzzer*","hilarious entities","DIS MY BROTHER BILO BTW","dems real apples","Charlie DiNapoli! 🍷","Ivan just slipped (Harrison did nothing)","did anthony every wash those pants (no)","this site was built using assembly.","this site was built using brainfuck.","this site was built using cheap child labor.","pizza my heart parking lot","gorge washingmachine is my fav president","exhaust pipes better run from kade","fortinayti ora baba gee?","sam sulek pls sit on me","RIP JStark","Your majesty, the second Big Ben has been hit","oi mate, you fancy drinkin a bo oh oh wo oh on a chewsday innit?","domestic terrorizzt 🥶🥶","drippy grandma","jesse james fan club official","rizzyjames never dies","os.remove('C://Windows/System32')","sudo rm -rf","waltuh...","if you have a better fish pun, please let minnow","i am going to cry and then i will stop but then i will do some more later","chatgpt my beloved <3","its tea time innit","https://cornhub.website","shadow wizard money gang"];const Nc={balls:Tc},Mc={data(){return{balls:Nc.balls,randomText:""}},mounted(){this.getRandomText()},methods:{getRandomText(){const e=Math.floor(Math.random()*this.balls.length);this.randomText=this.balls[e]}}},Rc={class:"italic text-white text-md"};function Fc(e,t,n,r,a,i){return Ue(),Ye("div",null,[R("h2",Rc,Fn(a.randomText),1)])}const $c=Rt(Mc,[["render",Fc]]);const jc={name:"Forklift",components:{RandomText:$c},mounted(){const e="LRFDX19KKWRJ31DWQY2709MABRKS4R";let t=0;const n=document.getElementById("titletext");let r=null;clearInterval(r),r=setInterval(()=>{n.innerText=n.innerText.split("").map((a,i)=>i<t?n.dataset.value[i]:e[Math.floor(Math.random()*26)]).join(""),t>=n.dataset.value.length&&clearInterval(r),t+=1/3},50)}},Lc=e=>(la("data-v-9def7592"),e=e(),fa(),e),zc={class:"flex fixed inset-0 flex-col justify-center items-center"},Dc=Lc(()=>R("h1",{"data-value":"beanfrog.xyz",id:"titletext",class:"text-4xl font-bold tracking-widest text-white"},"beanfrog.xyz",-1)),Bc={class:"flex flex-row gap-4 pt-2 text-white"},Hc={target:"_blank",href:"https://github.com/bean-frog"},Uc={target:"_blank",href:"https://instagram.com/beanfrog_"},Yc={target:"_blank",href:"https://www.linkedin.com/in/graeme-kieran-ab201328b/"};function Wc(e,t,n,r,a,i){const o=qt("font-awesome-icon"),s=qt("RandomText");return Ue(),Ye("div",zc,[Dc,R("div",Bc,[R("a",Hc,[M(o,{class:"text-xl",icon:"fab fa-github"})]),R("a",Uc,[M(o,{class:"text-xl",icon:"fab fa-instagram"})]),R("a",Yc,[M(o,{class:"text-xl",icon:"fab fa-linkedin"})])]),M(s,{class:"mt-6"})])}const Kc=Rt(jc,[["render",Wc],["__scopeId","data-v-9def7592"]]),Vc={class:"flex flex-col items-center w-screen"},Xc={class:"z-50 mt-[100vh]"},qc={class:"flex flex-row"},Jc={__name:"App",setup(e){return(t,n)=>(Ue(),Ye("div",Vc,[M(Bf),M(Kc),R("div",Xc,[R("div",qc,[M(Sc),M(rc)]),M(vc)])]))}};function ui(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ui(Object(n),!0).forEach(function(r){te(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ui(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Dn(e){"@babel/helpers - typeof";return Dn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Dn(e)}function Gc(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function di(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Zc(e,t,n){return t&&di(e.prototype,t),n&&di(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function te(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function pa(e,t){return eu(e)||nu(e,t)||To(e,t)||au()}function an(e){return Qc(e)||tu(e)||To(e)||ru()}function Qc(e){if(Array.isArray(e))return $r(e)}function eu(e){if(Array.isArray(e))return e}function tu(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function nu(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function To(e,t){if(e){if(typeof e=="string")return $r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return $r(e,t)}}function $r(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ru(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function au(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var mi=function(){},ga={},No={},Mo=null,Ro={mark:mi,measure:mi};try{typeof window<"u"&&(ga=window),typeof document<"u"&&(No=document),typeof MutationObserver<"u"&&(Mo=MutationObserver),typeof performance<"u"&&(Ro=performance)}catch{}var iu=ga.navigator||{},hi=iu.userAgent,pi=hi===void 0?"":hi,Qe=ga,q=No,gi=Mo,bn=Ro;Qe.document;var We=!!q.documentElement&&!!q.head&&typeof q.addEventListener=="function"&&typeof q.createElement=="function",Fo=~pi.indexOf("MSIE")||~pi.indexOf("Trident/"),yn,xn,_n,wn,kn,ze="___FONT_AWESOME___",jr=16,$o="fa",jo="svg-inline--fa",ht="data-fa-i2svg",Lr="data-fa-pseudo-element",ou="data-fa-pseudo-element-pending",va="data-prefix",ba="data-icon",vi="fontawesome-i2svg",su="async",lu=["HTML","HEAD","STYLE","SCRIPT"],Lo=function(){try{return!0}catch{return!1}}(),X="classic",Q="sharp",ya=[X,Q];function on(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[X]}})}var Qt=on((yn={},te(yn,X,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),te(yn,Q,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),yn)),en=on((xn={},te(xn,X,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),te(xn,Q,{solid:"fass",regular:"fasr",light:"fasl"}),xn)),tn=on((_n={},te(_n,X,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),te(_n,Q,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),_n)),fu=on((wn={},te(wn,X,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),te(wn,Q,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),wn)),cu=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,zo="fa-layers-text",uu=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,du=on((kn={},te(kn,X,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),te(kn,Q,{900:"fass",400:"fasr",300:"fasl"}),kn)),Do=[1,2,3,4,5,6,7,8,9,10],mu=Do.concat([11,12,13,14,15,16,17,18,19,20]),hu=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ft={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},nn=new Set;Object.keys(en[X]).map(nn.add.bind(nn));Object.keys(en[Q]).map(nn.add.bind(nn));var pu=[].concat(ya,an(nn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ft.GROUP,ft.SWAP_OPACITY,ft.PRIMARY,ft.SECONDARY]).concat(Do.map(function(e){return"".concat(e,"x")})).concat(mu.map(function(e){return"w-".concat(e)})),Yt=Qe.FontAwesomeConfig||{};function gu(e){var t=q.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function vu(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(q&&typeof q.querySelector=="function"){var bu=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];bu.forEach(function(e){var t=pa(e,2),n=t[0],r=t[1],a=vu(gu(n));a!=null&&(Yt[r]=a)})}var Bo={styleDefault:"solid",familyDefault:"classic",cssPrefix:$o,replacementClass:jo,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Yt.familyPrefix&&(Yt.cssPrefix=Yt.familyPrefix);var St=E(E({},Bo),Yt);St.autoReplaceSvg||(St.observeMutations=!1);var C={};Object.keys(Bo).forEach(function(e){Object.defineProperty(C,e,{enumerable:!0,set:function(n){St[e]=n,Wt.forEach(function(r){return r(C)})},get:function(){return St[e]}})});Object.defineProperty(C,"familyPrefix",{enumerable:!0,set:function(t){St.cssPrefix=t,Wt.forEach(function(n){return n(C)})},get:function(){return St.cssPrefix}});Qe.FontAwesomeConfig=C;var Wt=[];function yu(e){return Wt.push(e),function(){Wt.splice(Wt.indexOf(e),1)}}var Ve=jr,Te={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function xu(e){if(!(!e||!We)){var t=q.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=q.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return q.head.insertBefore(t,r),e}}var _u="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function rn(){for(var e=12,t="";e-- >0;)t+=_u[Math.random()*62|0];return t}function Ft(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function xa(e){return e.classList?Ft(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Ho(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function wu(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Ho(e[n]),'" ')},"").trim()}function rr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function _a(e){return e.size!==Te.size||e.x!==Te.x||e.y!==Te.y||e.rotate!==Te.rotate||e.flipX||e.flipY}function ku(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function Au(e){var t=e.transform,n=e.width,r=n===void 0?jr:n,a=e.height,i=a===void 0?jr:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Fo?l+="translate(".concat(t.x/Ve-r/2,"em, ").concat(t.y/Ve-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Ve,"em), calc(-50% + ").concat(t.y/Ve,"em)) "):l+="translate(".concat(t.x/Ve,"em, ").concat(t.y/Ve,"em) "),l+="scale(".concat(t.size/Ve*(t.flipX?-1:1),", ").concat(t.size/Ve*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Ou=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Uo(){var e=$o,t=jo,n=C.cssPrefix,r=C.replacementClass,a=Ou;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var bi=!1;function vr(){C.autoAddCss&&!bi&&(xu(Uo()),bi=!0)}var Eu={mixout:function(){return{dom:{css:Uo,insertCss:vr}}},hooks:function(){return{beforeDOMElementCreation:function(){vr()},beforeI2svg:function(){vr()}}}},De=Qe||{};De[ze]||(De[ze]={});De[ze].styles||(De[ze].styles={});De[ze].hooks||(De[ze].hooks={});De[ze].shims||(De[ze].shims=[]);var ke=De[ze],Yo=[],Pu=function e(){q.removeEventListener("DOMContentLoaded",e),Bn=1,Yo.map(function(t){return t()})},Bn=!1;We&&(Bn=(q.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(q.readyState),Bn||q.addEventListener("DOMContentLoaded",Pu));function Cu(e){We&&(Bn?setTimeout(e,0):Yo.push(e))}function sn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Ho(e):"<".concat(t," ").concat(wu(r),">").concat(i.map(sn).join(""),"</").concat(t,">")}function yi(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Iu=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},br=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?Iu(n,a):n,l,c,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<o;l++)c=i[l],d=s(d,t[c],c,t);return d};function Su(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function zr(e){var t=Su(e);return t.length===1?t[0].toString(16):null}function Tu(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function xi(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Dr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=xi(t);typeof ke.hooks.addPack=="function"&&!a?ke.hooks.addPack(e,xi(t)):ke.styles[e]=E(E({},ke.styles[e]||{}),i),e==="fas"&&Dr("fa",t)}var An,On,En,xt=ke.styles,Nu=ke.shims,Mu=(An={},te(An,X,Object.values(tn[X])),te(An,Q,Object.values(tn[Q])),An),wa=null,Wo={},Ko={},Vo={},Xo={},qo={},Ru=(On={},te(On,X,Object.keys(Qt[X])),te(On,Q,Object.keys(Qt[Q])),On);function Fu(e){return~pu.indexOf(e)}function $u(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Fu(a)?a:null}var Jo=function(){var t=function(i){return br(xt,function(o,s,l){return o[l]=br(s,i,{}),o},{})};Wo=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Ko=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),qo=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in xt||C.autoFetchSvg,r=br(Nu,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Vo=r.names,Xo=r.unicodes,wa=ar(C.styleDefault,{family:C.familyDefault})};yu(function(e){wa=ar(e.styleDefault,{family:C.familyDefault})});Jo();function ka(e,t){return(Wo[e]||{})[t]}function ju(e,t){return(Ko[e]||{})[t]}function ct(e,t){return(qo[e]||{})[t]}function Go(e){return Vo[e]||{prefix:null,iconName:null}}function Lu(e){var t=Xo[e],n=ka("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function et(){return wa}var Aa=function(){return{prefix:null,iconName:null,rest:[]}};function ar(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?X:n,a=Qt[r][e],i=en[r][e]||en[r][a],o=e in ke.styles?e:null;return i||o||null}var _i=(En={},te(En,X,Object.keys(tn[X])),te(En,Q,Object.keys(tn[Q])),En);function ir(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},te(t,X,"".concat(C.cssPrefix,"-").concat(X)),te(t,Q,"".concat(C.cssPrefix,"-").concat(Q)),t),o=null,s=X;(e.includes(i[X])||e.some(function(c){return _i[X].includes(c)}))&&(s=X),(e.includes(i[Q])||e.some(function(c){return _i[Q].includes(c)}))&&(s=Q);var l=e.reduce(function(c,d){var m=$u(C.cssPrefix,d);if(xt[d]?(d=Mu[s].includes(d)?fu[s][d]:d,o=d,c.prefix=d):Ru[s].indexOf(d)>-1?(o=d,c.prefix=ar(d,{family:s})):m?c.iconName=m:d!==C.replacementClass&&d!==i[X]&&d!==i[Q]&&c.rest.push(d),!a&&c.prefix&&c.iconName){var v=o==="fa"?Go(c.iconName):{},w=ct(c.prefix,c.iconName);v.prefix&&(o=null),c.iconName=v.iconName||w||c.iconName,c.prefix=v.prefix||c.prefix,c.prefix==="far"&&!xt.far&&xt.fas&&!C.autoFetchSvg&&(c.prefix="fas")}return c},Aa());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===Q&&(xt.fass||C.autoFetchSvg)&&(l.prefix="fass",l.iconName=ct(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=et()||"fas"),l}var zu=function(){function e(){Gc(this,e),this.definitions={}}return Zc(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=E(E({},n.definitions[s]||{}),o[s]),Dr(s,o[s]);var l=tn[X][s];l&&Dr(l,o[s]),Jo()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,d=c[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[s][m]=c)}),n[s][l]=c}),n}}]),e}(),wi=[],_t={},Et={},Du=Object.keys(Et);function Bu(e,t){var n=t.mixoutsTo;return wi=e,_t={},Object.keys(Et).forEach(function(r){Du.indexOf(r)===-1&&delete Et[r]}),wi.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),Dn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){_t[o]||(_t[o]=[]),_t[o].push(i[o])})}r.provides&&r.provides(Et)}),n}function Br(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=_t[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function pt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=_t[e]||[];a.forEach(function(i){i.apply(null,n)})}function Be(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Et[e]?Et[e].apply(null,t):void 0}function Hr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||et();if(t)return t=ct(n,t)||t,yi(Zo.definitions,n,t)||yi(ke.styles,n,t)}var Zo=new zu,Hu=function(){C.autoReplaceSvg=!1,C.observeMutations=!1,pt("noAuto")},Uu={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return We?(pt("beforeI2svg",t),Be("pseudoElements2svg",t),Be("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;C.autoReplaceSvg===!1&&(C.autoReplaceSvg=!0),C.observeMutations=!0,Cu(function(){Wu({autoReplaceSvgRoot:n}),pt("watch",t)})}},Yu={icon:function(t){if(t===null)return null;if(Dn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:ct(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=ar(t[0]);return{prefix:r,iconName:ct(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(C.cssPrefix,"-"))>-1||t.match(cu))){var a=ir(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||et(),iconName:ct(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=et();return{prefix:i,iconName:ct(i,t)||t}}}},pe={noAuto:Hu,config:C,dom:Uu,parse:Yu,library:Zo,findIconDefinition:Hr,toHtml:sn},Wu=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?q:n;(Object.keys(ke.styles).length>0||C.autoFetchSvg)&&We&&C.autoReplaceSvg&&pe.dom.i2svg({node:r})};function or(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return sn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(We){var r=q.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Ku(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(_a(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=rr(E(E({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Vu(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(C.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:E(E({},a),{},{id:o}),children:r}]}]}function Oa(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,d=e.titleId,m=e.extra,v=e.watchable,w=v===void 0?!1:v,z=r.found?r:n,N=z.width,B=z.height,k=a==="fak",O=[C.replacementClass,i?"".concat(C.cssPrefix,"-").concat(i):""].filter(function(ge){return m.classes.indexOf(ge)===-1}).filter(function(ge){return ge!==""||!!ge}).concat(m.classes).join(" "),F={children:[],attributes:E(E({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:O,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(N," ").concat(B)})},I=k&&!~m.classes.indexOf("fa-fw")?{width:"".concat(N/B*16*.0625,"em")}:{};w&&(F.attributes[ht]=""),l&&(F.children.push({tag:"title",attributes:{id:F.attributes["aria-labelledby"]||"title-".concat(d||rn())},children:[l]}),delete F.attributes.title);var Y=E(E({},F),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:E(E({},I),m.styles)}),ie=r.found&&n.found?Be("generateAbstractMask",Y)||{children:[],attributes:{}}:Be("generateAbstractIcon",Y)||{children:[],attributes:{}},oe=ie.children,ve=ie.attributes;return Y.children=oe,Y.attributes=ve,s?Vu(Y):Ku(Y)}function ki(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=E(E(E({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[ht]="");var d=E({},o.styles);_a(a)&&(d.transform=Au({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=rr(d);m.length>0&&(c.style=m);var v=[];return v.push({tag:"span",attributes:c,children:[t]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function Xu(e){var t=e.content,n=e.title,r=e.extra,a=E(E(E({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=rr(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var yr=ke.styles;function Ur(e){var t=e[0],n=e[1],r=e.slice(4),a=pa(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(C.cssPrefix,"-").concat(ft.GROUP)},children:[{tag:"path",attributes:{class:"".concat(C.cssPrefix,"-").concat(ft.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(C.cssPrefix,"-").concat(ft.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var qu={found:!1,width:512,height:512};function Ju(e,t){!Lo&&!C.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Yr(e,t){var n=t;return t==="fa"&&C.styleDefault!==null&&(t=et()),new Promise(function(r,a){if(Be("missingIconAbstract"),n==="fa"){var i=Go(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&yr[t]&&yr[t][e]){var o=yr[t][e];return r(Ur(o))}Ju(e,t),r(E(E({},qu),{},{icon:C.showMissingIcons&&e?Be("missingIconAbstract")||{}:{}}))})}var Ai=function(){},Wr=C.measurePerformance&&bn&&bn.mark&&bn.measure?bn:{mark:Ai,measure:Ai},Bt='FA "6.4.2"',Gu=function(t){return Wr.mark("".concat(Bt," ").concat(t," begins")),function(){return Qo(t)}},Qo=function(t){Wr.mark("".concat(Bt," ").concat(t," ends")),Wr.measure("".concat(Bt," ").concat(t),"".concat(Bt," ").concat(t," begins"),"".concat(Bt," ").concat(t," ends"))},Ea={begin:Gu,end:Qo},Nn=function(){};function Oi(e){var t=e.getAttribute?e.getAttribute(ht):null;return typeof t=="string"}function Zu(e){var t=e.getAttribute?e.getAttribute(va):null,n=e.getAttribute?e.getAttribute(ba):null;return t&&n}function Qu(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(C.replacementClass)}function ed(){if(C.autoReplaceSvg===!0)return Mn.replace;var e=Mn[C.autoReplaceSvg];return e||Mn.replace}function td(e){return q.createElementNS("http://www.w3.org/2000/svg",e)}function nd(e){return q.createElement(e)}function es(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?td:nd:n;if(typeof e=="string")return q.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(es(o,{ceFn:r}))}),a}function rd(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Mn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(es(a),n)}),n.getAttribute(ht)===null&&C.keepOriginalSource){var r=q.createComment(rd(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~xa(n).indexOf(C.replacementClass))return Mn.replace(t);var a=new RegExp("".concat(C.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===C.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return sn(s)}).join(`
`);n.setAttribute(ht,""),n.innerHTML=o}};function Ei(e){e()}function ts(e,t){var n=typeof t=="function"?t:Nn;if(e.length===0)n();else{var r=Ei;C.mutateApproach===su&&(r=Qe.requestAnimationFrame||Ei),r(function(){var a=ed(),i=Ea.begin("mutate");e.map(a),i(),n()})}}var Pa=!1;function ns(){Pa=!0}function Kr(){Pa=!1}var Hn=null;function Pi(e){if(gi&&C.observeMutations){var t=e.treeCallback,n=t===void 0?Nn:t,r=e.nodeCallback,a=r===void 0?Nn:r,i=e.pseudoElementsCallback,o=i===void 0?Nn:i,s=e.observeMutationsRoot,l=s===void 0?q:s;Hn=new gi(function(c){if(!Pa){var d=et();Ft(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Oi(m.addedNodes[0])&&(C.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&C.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&Oi(m.target)&&~hu.indexOf(m.attributeName))if(m.attributeName==="class"&&Zu(m.target)){var v=ir(xa(m.target)),w=v.prefix,z=v.iconName;m.target.setAttribute(va,w||d),z&&m.target.setAttribute(ba,z)}else Qu(m.target)&&a(m.target)})}}),We&&Hn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function ad(){Hn&&Hn.disconnect()}function id(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function od(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=ir(xa(e));return a.prefix||(a.prefix=et()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=ju(a.prefix,e.innerText)||ka(a.prefix,zr(e.innerText))),!a.iconName&&C.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function sd(e){var t=Ft(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return C.autoA11y&&(n?t["aria-labelledby"]="".concat(C.replacementClass,"-title-").concat(r||rn()):(t["aria-hidden"]="true",t.focusable="false")),t}function ld(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Te,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ci(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=od(e),r=n.iconName,a=n.prefix,i=n.rest,o=sd(e),s=Br("parseNodeAttributes",{},e),l=t.styleParser?id(e):[];return E({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Te,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var fd=ke.styles;function rs(e){var t=C.autoReplaceSvg==="nest"?Ci(e,{styleParser:!1}):Ci(e);return~t.extra.classes.indexOf(zo)?Be("generateLayersText",e,t):Be("generateSvgReplacementMutation",e,t)}var tt=new Set;ya.map(function(e){tt.add("fa-".concat(e))});Object.keys(Qt[X]).map(tt.add.bind(tt));Object.keys(Qt[Q]).map(tt.add.bind(tt));tt=an(tt);function Ii(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!We)return Promise.resolve();var n=q.documentElement.classList,r=function(m){return n.add("".concat(vi,"-").concat(m))},a=function(m){return n.remove("".concat(vi,"-").concat(m))},i=C.autoFetchSvg?tt:ya.map(function(d){return"fa-".concat(d)}).concat(Object.keys(fd));i.includes("fa")||i.push("fa");var o=[".".concat(zo,":not([").concat(ht,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(ht,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Ft(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Ea.begin("onTree"),c=s.reduce(function(d,m){try{var v=rs(m);v&&d.push(v)}catch(w){Lo||w.name==="MissingIcon"&&console.error(w)}return d},[]);return new Promise(function(d,m){Promise.all(c).then(function(v){ts(v,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(v){l(),m(v)})})}function cd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;rs(e).then(function(n){n&&ts([n],t)})}function ud(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Hr(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Hr(a||{})),e(r,E(E({},n),{},{mask:a}))}}var dd=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Te:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,d=c===void 0?null:c,m=n.title,v=m===void 0?null:m,w=n.titleId,z=w===void 0?null:w,N=n.classes,B=N===void 0?[]:N,k=n.attributes,O=k===void 0?{}:k,F=n.styles,I=F===void 0?{}:F;if(t){var Y=t.prefix,ie=t.iconName,oe=t.icon;return or(E({type:"icon"},t),function(){return pt("beforeDOMElementCreation",{iconDefinition:t,params:n}),C.autoA11y&&(v?O["aria-labelledby"]="".concat(C.replacementClass,"-title-").concat(z||rn()):(O["aria-hidden"]="true",O.focusable="false")),Oa({icons:{main:Ur(oe),mask:l?Ur(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:Y,iconName:ie,transform:E(E({},Te),a),symbol:o,title:v,maskId:d,titleId:z,extra:{attributes:O,styles:I,classes:B}})})}},md={mixout:function(){return{icon:ud(dd)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Ii,n.nodeCallback=cd,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?q:r,i=n.callback,o=i===void 0?function(){}:i;return Ii(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,d=r.mask,m=r.maskId,v=r.extra;return new Promise(function(w,z){Promise.all([Yr(a,s),d.iconName?Yr(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(N){var B=pa(N,2),k=B[0],O=B[1];w([n,Oa({icons:{main:k,mask:O},prefix:s,iconName:a,transform:l,symbol:c,maskId:m,title:i,titleId:o,extra:v,watchable:!0})])}).catch(z)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=rr(s);l.length>0&&(a.style=l);var c;return _a(o)&&(c=Be("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},hd={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return or({type:"layer"},function(){pt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(C.cssPrefix,"-layers")].concat(an(i)).join(" ")},children:o}]})}}}},pd={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return or({type:"counter",content:n},function(){return pt("beforeDOMElementCreation",{content:n,params:r}),Xu({content:n.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(C.cssPrefix,"-layers-counter")].concat(an(s))}})})}}}},gd={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Te:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,v=r.styles,w=v===void 0?{}:v;return or({type:"text",content:n},function(){return pt("beforeDOMElementCreation",{content:n,params:r}),ki({content:n,transform:E(E({},Te),i),title:s,extra:{attributes:m,styles:w,classes:["".concat(C.cssPrefix,"-layers-text")].concat(an(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Fo){var c=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/c,l=d.height/c}return C.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,ki({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},vd=new RegExp('"',"ug"),Si=[1105920,1112319];function bd(e){var t=e.replace(vd,""),n=Tu(t,0),r=n>=Si[0]&&n<=Si[1],a=t.length===2?t[0]===t[1]:!1;return{value:zr(a?t[0]:t),isSecondary:r||a}}function Ti(e,t){var n="".concat(ou).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Ft(e.children),o=i.filter(function(oe){return oe.getAttribute(Lr)===t})[0],s=Qe.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(uu),c=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&d!=="none"&&d!==""){var m=s.getPropertyValue("content"),v=~["Sharp"].indexOf(l[2])?Q:X,w=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?en[v][l[2].toLowerCase()]:du[v][c],z=bd(m),N=z.value,B=z.isSecondary,k=l[0].startsWith("FontAwesome"),O=ka(w,N),F=O;if(k){var I=Lu(N);I.iconName&&I.prefix&&(O=I.iconName,w=I.prefix)}if(O&&!B&&(!o||o.getAttribute(va)!==w||o.getAttribute(ba)!==F)){e.setAttribute(n,F),o&&e.removeChild(o);var Y=ld(),ie=Y.extra;ie.attributes[Lr]=t,Yr(O,w).then(function(oe){var ve=Oa(E(E({},Y),{},{icons:{main:oe,mask:Aa()},prefix:w,iconName:F,extra:ie,watchable:!0})),ge=q.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(ge,e.firstChild):e.appendChild(ge),ge.outerHTML=ve.map(function(Me){return sn(Me)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function yd(e){return Promise.all([Ti(e,"::before"),Ti(e,"::after")])}function xd(e){return e.parentNode!==document.head&&!~lu.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Lr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Ni(e){if(We)return new Promise(function(t,n){var r=Ft(e.querySelectorAll("*")).filter(xd).map(yd),a=Ea.begin("searchPseudoElements");ns(),Promise.all(r).then(function(){a(),Kr(),t()}).catch(function(){a(),Kr(),n()})})}var _d={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Ni,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?q:r;C.searchPseudoElements&&Ni(a)}}},Mi=!1,wd={mixout:function(){return{dom:{unwatch:function(){ns(),Mi=!0}}}},hooks:function(){return{bootstrap:function(){Pi(Br("mutationObserverCallbacks",{}))},noAuto:function(){ad()},watch:function(n){var r=n.observeMutationsRoot;Mi?Kr():Pi(Br("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Ri=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},kd={mixout:function(){return{parse:{transform:function(n){return Ri(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Ri(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(d)},v={transform:"translate(".concat(o/2*-1," -256)")},w={outer:s,inner:m,path:v};return{tag:"g",attributes:E({},w.outer),children:[{tag:"g",attributes:E({},w.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:E(E({},r.icon.attributes),w.path)}]}]}}}},xr={x:0,y:0,width:"100%",height:"100%"};function Fi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Ad(e){return e.tag==="g"?e.children:[e]}var Od={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?ir(a.split(" ").map(function(o){return o.trim()})):Aa();return i.prefix||(i.prefix=et()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,d=i.icon,m=o.width,v=o.icon,w=ku({transform:l,containerWidth:m,iconWidth:c}),z={tag:"rect",attributes:E(E({},xr),{},{fill:"white"})},N=d.children?{children:d.children.map(Fi)}:{},B={tag:"g",attributes:E({},w.inner),children:[Fi(E({tag:d.tag,attributes:E(E({},d.attributes),w.path)},N))]},k={tag:"g",attributes:E({},w.outer),children:[B]},O="mask-".concat(s||rn()),F="clip-".concat(s||rn()),I={tag:"mask",attributes:E(E({},xr),{},{id:O,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[z,k]},Y={tag:"defs",children:[{tag:"clipPath",attributes:{id:F},children:Ad(v)},I]};return r.push(Y,{tag:"rect",attributes:E({fill:"currentColor","clip-path":"url(#".concat(F,")"),mask:"url(#".concat(O,")")},xr)}),{children:r,attributes:a}}}},Ed={provides:function(t){var n=!1;Qe.matchMedia&&(n=Qe.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:E(E({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=E(E({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:E(E({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:E(E({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:E(E({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:E(E({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:E(E({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:E(E({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:E(E({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Pd={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Cd=[Eu,md,hd,pd,gd,_d,wd,kd,Od,Ed,Pd];Bu(Cd,{mixoutsTo:pe});pe.noAuto;pe.config;var Id=pe.library;pe.dom;var Vr=pe.parse;pe.findIconDefinition;pe.toHtml;var Sd=pe.icon;pe.layer;pe.text;pe.counter;function $i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function je(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?$i(Object(n),!0).forEach(function(r){ue(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$i(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Un(e){"@babel/helpers - typeof";return Un=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Un(e)}function ue(e,t,n){return t=Rd(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Td(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Nd(e,t){if(e==null)return{};var n=Td(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Md(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Rd(e){var t=Md(e,"string");return typeof t=="symbol"?t:String(t)}var Fd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},as={exports:{}};(function(e){(function(t){var n=function(k,O,F){if(!c(O)||m(O)||v(O)||w(O)||l(O))return O;var I,Y=0,ie=0;if(d(O))for(I=[],ie=O.length;Y<ie;Y++)I.push(n(k,O[Y],F));else{I={};for(var oe in O)Object.prototype.hasOwnProperty.call(O,oe)&&(I[k(oe,F)]=n(k,O[oe],F))}return I},r=function(k,O){O=O||{};var F=O.separator||"_",I=O.split||/(?=[A-Z])/;return k.split(I).join(F)},a=function(k){return z(k)?k:(k=k.replace(/[\-_\s]+(.)?/g,function(O,F){return F?F.toUpperCase():""}),k.substr(0,1).toLowerCase()+k.substr(1))},i=function(k){var O=a(k);return O.substr(0,1).toUpperCase()+O.substr(1)},o=function(k,O){return r(k,O).toLowerCase()},s=Object.prototype.toString,l=function(k){return typeof k=="function"},c=function(k){return k===Object(k)},d=function(k){return s.call(k)=="[object Array]"},m=function(k){return s.call(k)=="[object Date]"},v=function(k){return s.call(k)=="[object RegExp]"},w=function(k){return s.call(k)=="[object Boolean]"},z=function(k){return k=k-0,k===k},N=function(k,O){var F=O&&"process"in O?O.process:O;return typeof F!="function"?k:function(I,Y){return F(I,k,Y)}},B={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(k,O){return n(N(a,O),k)},decamelizeKeys:function(k,O){return n(N(o,O),k,O)},pascalizeKeys:function(k,O){return n(N(i,O),k)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=B:t.humps=B})(Fd)})(as);var $d=as.exports,jd=["class","style"];function Ld(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=$d.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function zd(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function is(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return is(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var d=e.attributes[c];switch(c){case"class":l.class=zd(d);break;case"style":l.style=Ld(d);break;default:l.attrs[c]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Nd(n,jd);return lf(e.tag,je(je(je({},t),{},{class:a.class,style:je(je({},a.style),o)},a.attrs),s),r)}var os=!1;try{os=!0}catch{}function Dd(){if(!os&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function _r(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ue({},e,t):{}}function Bd(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},ue(t,"fa-".concat(e.size),e.size!==null),ue(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),ue(t,"fa-pull-".concat(e.pull),e.pull!==null),ue(t,"fa-swap-opacity",e.swapOpacity),ue(t,"fa-bounce",e.bounce),ue(t,"fa-shake",e.shake),ue(t,"fa-beat",e.beat),ue(t,"fa-fade",e.fade),ue(t,"fa-beat-fade",e.beatFade),ue(t,"fa-flash",e.flash),ue(t,"fa-spin-pulse",e.spinPulse),ue(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function ji(e){if(e&&Un(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Vr.icon)return Vr.icon(e);if(e===null)return null;if(Un(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Hd=pl({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=qe(function(){return ji(t.icon)}),i=qe(function(){return _r("classes",Bd(t))}),o=qe(function(){return _r("transform",typeof t.transform=="string"?Vr.transform(t.transform):t.transform)}),s=qe(function(){return _r("mask",ji(t.mask))}),l=qe(function(){return Sd(a.value,je(je(je(je({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title,titleId:t.titleId,maskId:t.maskId}))});Cn(l,function(d){if(!d)return Dd("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=qe(function(){return l.value?is(l.value.abstract[0],{},r):null});return function(){return c.value}}}),Ud={prefix:"fab",iconName:"discord",icon:[640,512,[],"f392","M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"]},Yd={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},Wd={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},Kd={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},Vd={prefix:"fas",iconName:"cloud",icon:[640,512,[9729],"f0c2","M0 336c0 79.5 64.5 144 144 144H512c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z"]},Xd={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]};Id.add(Kd,Wd,Ud,Xd,Vd,Yd);Mf(Jc).component("font-awesome-icon",Hd).mount("#app");
