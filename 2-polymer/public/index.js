!function(t){var e={};function r(s){if(e[s])return e[s].exports;var n=e[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=e,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(s,n,function(e){return t[e]}.bind(null,n));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){"use strict";r.r(e);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const s=new WeakMap,n=t=>(...e)=>{const r=t(...e);return s.set(r,!0),r},i=t=>"function"==typeof t&&s.has(t),o=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,a=(t,e,r=null)=>{for(;e!==r;){const r=e.nextSibling;t.removeChild(e),e=r}},l={},c={},d=`{{lit-${String(Math.random()).slice(2)}}}`,h=`\x3c!--${d}--\x3e`,p=new RegExp(`${d}|${h}`);class u{constructor(t,e){this.parts=[],this.element=e;const r=[],s=[],n=document.createTreeWalker(e.content,133,null,!1);let i=0,o=-1,a=0;const{strings:l,values:{length:c}}=t;for(;a<c;){const t=n.nextNode();if(null!==t){if(o++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:r}=e;let s=0;for(let t=0;t<r;t++)f(e[t].name,"$lit$")&&s++;for(;s-- >0;){const e=l[a],r=b.exec(e)[2],s=r.toLowerCase()+"$lit$",n=t.getAttribute(s);t.removeAttribute(s);const i=n.split(p);this.parts.push({type:"attribute",index:o,name:r,strings:i}),a+=i.length-1}}"TEMPLATE"===t.tagName&&(s.push(t),n.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(d)>=0){const s=t.parentNode,n=e.split(p),i=n.length-1;for(let e=0;e<i;e++){let r,i=n[e];if(""===i)r=m();else{const t=b.exec(i);null!==t&&f(t[2],"$lit$")&&(i=i.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),r=document.createTextNode(i)}s.insertBefore(r,t),this.parts.push({type:"node",index:++o})}""===n[i]?(s.insertBefore(m(),t),r.push(t)):t.data=n[i],a+=i}}else if(8===t.nodeType)if(t.data===d){const e=t.parentNode;null!==t.previousSibling&&o!==i||(o++,e.insertBefore(m(),t)),i=o,this.parts.push({type:"node",index:o}),null===t.nextSibling?t.data="":(r.push(t),o--),a++}else{let e=-1;for(;-1!==(e=t.data.indexOf(d,e+1));)this.parts.push({type:"node",index:-1}),a++}}else n.currentNode=s.pop()}for(const t of r)t.parentNode.removeChild(t)}}const f=(t,e)=>{const r=t.length-e.length;return r>=0&&t.slice(r)===e},y=t=>-1!==t.index,m=()=>document.createComment(""),b=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class g{constructor(t,e,r){this.__parts=[],this.template=t,this.processor=e,this.options=r}update(t){let e=0;for(const r of this.__parts)void 0!==r&&r.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=o?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],r=this.template.parts,s=document.createTreeWalker(t,133,null,!1);let n,i=0,a=0,l=s.nextNode();for(;i<r.length;)if(n=r[i],y(n)){for(;a<n.index;)a++,"TEMPLATE"===l.nodeName&&(e.push(l),s.currentNode=l.content),null===(l=s.nextNode())&&(s.currentNode=e.pop(),l=s.nextNode());if("node"===n.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(l.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,n.name,n.strings,this.options));i++}else this.__parts.push(void 0),i++;return o&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const _=` ${d} `;class v{constructor(t,e,r,s){this.strings=t,this.values=e,this.type=r,this.processor=s}getHTML(){const t=this.strings.length-1;let e="",r=!1;for(let s=0;s<t;s++){const t=this.strings[s],n=t.lastIndexOf("\x3c!--");r=(n>-1||r)&&-1===t.indexOf("--\x3e",n+1);const i=b.exec(t);e+=null===i?t+(r?_:h):t.substr(0,i.index)+i[1]+i[2]+"$lit$"+i[3]+d}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const S=t=>null===t||!("object"==typeof t||"function"==typeof t),w=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class x{constructor(t,e,r){this.dirty=!0,this.element=t,this.name=e,this.strings=r,this.parts=[];for(let t=0;t<r.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new P(this)}_getValue(){const t=this.strings,e=t.length-1;let r="";for(let s=0;s<e;s++){r+=t[s];const e=this.parts[s];if(void 0!==e){const t=e.value;if(S(t)||!w(t))r+="string"==typeof t?t:String(t);else for(const e of t)r+="string"==typeof e?e:String(e)}}return r+=t[e],r}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class P{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===l||S(t)&&t===this.value||(this.value=t,i(t)||(this.committer.dirty=!0))}commit(){for(;i(this.value);){const t=this.value;this.value=l,t(this)}this.value!==l&&this.committer.commit()}}class C{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(m()),this.endNode=t.appendChild(m())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=m()),t.__insert(this.endNode=m())}insertAfterPart(t){t.__insert(this.startNode=m()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){for(;i(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=l,t(this)}const t=this.__pendingValue;t!==l&&(S(t)?t!==this.value&&this.__commitText(t):t instanceof v?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):w(t)?this.__commitIterable(t):t===c?(this.value=c,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,r="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=r:this.__commitNode(document.createTextNode(r)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof g&&this.value.template===e)this.value.update(t.values);else{const r=new g(e,t.processor,this.options),s=r._clone();r.update(t.values),this.__commitNode(s),this.value=r}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let r,s=0;for(const n of t)r=e[s],void 0===r&&(r=new C(this.options),e.push(r),0===s?r.appendIntoPart(this):r.insertAfterPart(e[s-1])),r.setValue(n),r.commit(),s++;s<e.length&&(e.length=s,this.clear(r&&r.endNode))}clear(t=this.startNode){a(this.startNode.parentNode,t.nextSibling,this.endNode)}}class N{constructor(t,e,r){if(this.value=void 0,this.__pendingValue=void 0,2!==r.length||""!==r[0]||""!==r[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=r}setValue(t){this.__pendingValue=t}commit(){for(;i(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=l,t(this)}if(this.__pendingValue===l)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=l}}class E extends x{constructor(t,e,r){super(t,e,r),this.single=2===r.length&&""===r[0]&&""===r[1]}_createPart(){return new A(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class A extends P{}let O=!1;try{const t={get capture(){return O=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class T{constructor(t,e,r){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=r,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;i(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=l,t(this)}if(this.__pendingValue===l)return;const t=this.__pendingValue,e=this.value,r=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),s=null!=t&&(null==e||r);r&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),s&&(this.__options=k(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=l}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const k=t=>t&&(O?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;const j=new class{handleAttributeExpressions(t,e,r,s){const n=e[0];if("."===n){return new E(t,e.slice(1),r).parts}return"@"===n?[new T(t,e.slice(1),s.eventContext)]:"?"===n?[new N(t,e.slice(1),r)]:new x(t,e,r).parts}handleTextExpression(t){return new C(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function R(t){let e=V.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},V.set(t.type,e));let r=e.stringsArray.get(t.strings);if(void 0!==r)return r;const s=t.strings.join(d);return r=e.keyString.get(s),void 0===r&&(r=new u(t,t.getTemplateElement()),e.keyString.set(s,r)),e.stringsArray.set(t.strings,r),r}const V=new Map,$=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const M=(t,...e)=>new v(t,e,"html",j);function U(t,e){const{element:{content:r},parts:s}=t,n=document.createTreeWalker(r,133,null,!1);let i=I(s),o=s[i],a=-1,l=0;const c=[];let d=null;for(;n.nextNode();){a++;const t=n.currentNode;for(t.previousSibling===d&&(d=null),e.has(t)&&(c.push(t),null===d&&(d=t)),null!==d&&l++;void 0!==o&&o.index===a;)o.index=null!==d?-1:o.index-l,i=I(s,i),o=s[i]}c.forEach(t=>t.parentNode.removeChild(t))}const z=t=>{let e=11===t.nodeType?0:1;const r=document.createTreeWalker(t,133,null,!1);for(;r.nextNode();)e++;return e},I=(t,e=-1)=>{for(let r=e+1;r<t.length;r++){const e=t[r];if(y(e))return r}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const F=(t,e)=>`${t}--${e}`;let q=!0;void 0===window.ShadyCSS?q=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),q=!1);const L=t=>e=>{const r=F(e.type,t);let s=V.get(r);void 0===s&&(s={stringsArray:new WeakMap,keyString:new Map},V.set(r,s));let n=s.stringsArray.get(e.strings);if(void 0!==n)return n;const i=e.strings.join(d);if(n=s.keyString.get(i),void 0===n){const r=e.getTemplateElement();q&&window.ShadyCSS.prepareTemplateDom(r,t),n=new u(e,r),s.keyString.set(i,n)}return s.stringsArray.set(e.strings,n),n},D=["html","svg"],W=new Set,B=(t,e,r)=>{W.add(t);const s=r?r.element:document.createElement("template"),n=e.querySelectorAll("style"),{length:i}=n;if(0===i)return void window.ShadyCSS.prepareTemplateStyles(s,t);const o=document.createElement("style");for(let t=0;t<i;t++){const e=n[t];e.parentNode.removeChild(e),o.textContent+=e.textContent}(t=>{D.forEach(e=>{const r=V.get(F(e,t));void 0!==r&&r.keyString.forEach(t=>{const{element:{content:e}}=t,r=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{r.add(t)}),U(t,r)})})})(t);const a=s.content;r?function(t,e,r=null){const{element:{content:s},parts:n}=t;if(null==r)return void s.appendChild(e);const i=document.createTreeWalker(s,133,null,!1);let o=I(n),a=0,l=-1;for(;i.nextNode();){for(l++,i.currentNode===r&&(a=z(e),r.parentNode.insertBefore(e,r));-1!==o&&n[o].index===l;){if(a>0){for(;-1!==o;)n[o].index+=a,o=I(n,o);return}o=I(n,o)}}}(r,o,a.firstChild):a.insertBefore(o,a.firstChild),window.ShadyCSS.prepareTemplateStyles(s,t);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(r){a.insertBefore(o,a.firstChild);const t=new Set;t.add(o),U(r,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const H={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},J=(t,e)=>e!==t&&(e==e||t==t),G={attribute:!0,type:String,converter:H,reflect:!1,hasChanged:J},K=Promise.resolve(!0);class Q extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=K,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,r)=>{const s=this._attributeNameForProperty(r,e);void 0!==s&&(this._attributeToPropertyMap.set(s,r),t.push(s))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=G){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const r="symbol"==typeof t?Symbol():`__${t}`;Object.defineProperty(this.prototype,t,{get(){return this[r]},set(e){const s=this[t];this[r]=e,this._requestUpdate(t,s)},configurable:!0,enumerable:!0})}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const r of e)this.createProperty(r,t[r])}}static _attributeNameForProperty(t,e){const r=e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,r=J){return r(t,e)}static _propertyValueFromAttribute(t,e){const r=e.type,s=e.converter||H,n="function"==typeof s?s:s.fromAttribute;return n?n(t,r):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const r=e.type,s=e.converter;return(s&&s.toAttribute||H.toAttribute)(t,r)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this._updateState=32|this._updateState,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,r){e!==r&&this._attributeToProperty(t,r)}_propertyToAttribute(t,e,r=G){const s=this.constructor,n=s._attributeNameForProperty(t,r);if(void 0!==n){const t=s._propertyValueToAttribute(e,r);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(n):this.setAttribute(n,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const r=this.constructor,s=r._attributeToPropertyMap.get(t);if(void 0!==s){const t=r._classProperties.get(s)||G;this._updateState=16|this._updateState,this[s]=r._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}_requestUpdate(t,e){let r=!0;if(void 0!==t){const s=this.constructor,n=s._classProperties.get(t)||G;s._valueHasChanged(this[t],e,n.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==n.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,n))):r=!1}!this._hasRequestedUpdate&&r&&this._enqueueUpdate()}requestUpdate(t,e){return this._requestUpdate(t,e),this.updateComplete}async _enqueueUpdate(){let t,e;this._updateState=4|this._updateState;const r=this._updatePromise;this._updatePromise=new Promise((r,s)=>{t=r,e=s});try{await r}catch(t){}this._hasConnected||await new Promise(t=>this._hasConnectedResolver=t);try{const t=this.performUpdate();null!=t&&await t}catch(t){e(t)}t(!this._hasRequestedUpdate)}get _hasConnected(){return 32&this._updateState}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t&&this.update(e)}catch(e){throw t=!1,e}finally{this._markUpdated()}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0)}updated(t){}firstUpdated(t){}}Q.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const X=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:r,elements:s}=e;return{kind:r,elements:s,finisher(e){window.customElements.define(t,e)}}})(t,e),Y=(t,e)=>"method"!==e.kind||!e.descriptor||"value"in e.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(r){r.createProperty(e.key,t)}}:Object.assign({},e,{finisher(r){r.createProperty(e.key,t)}});function Z(t){return(e,r)=>void 0!==r?((t,e,r)=>{e.constructor.createProperty(r,t)})(t,e,r):Y(t,e)}const tt="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,et=Symbol();class rt{constructor(t,e){if(e!==et)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(tt?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const st=(t,...e)=>{const r=e.reduce((e,r,s)=>e+(t=>{if(t instanceof rt)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(r)+t[s+1],t[0]);return new rt(r,et)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.2.1");const nt=t=>t.flat?t.flat(1/0):function t(e,r=[]){for(let s=0,n=e.length;s<n;s++){const n=e[s];Array.isArray(n)?t(n,r):r.push(n)}return r}(t);class it extends Q{static finalize(){super.finalize.call(this),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const t=this.styles,e=[];if(Array.isArray(t)){nt(t).reduceRight((t,e)=>(t.add(e),t),new Set).forEach(t=>e.unshift(t))}else t&&e.push(t);return e}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?tt?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){super.update(t);const e=this.render();e instanceof v&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){}}function ot(){let t=[];for(let e=0;e<12;e++)t.push(new Array(12));return t}it.finalized=!0,it.render=(t,e,r)=>{if(!r||"object"!=typeof r||!r.scopeName)throw new Error("The `scopeName` option is required.");const s=r.scopeName,n=$.has(e),i=q&&11===e.nodeType&&!!e.host,o=i&&!W.has(s),l=o?document.createDocumentFragment():e;if(((t,e,r)=>{let s=$.get(e);void 0===s&&(a(e,e.firstChild),$.set(e,s=new C(Object.assign({templateFactory:R},r))),s.appendInto(e)),s.setValue(t),s.commit()})(t,l,Object.assign({templateFactory:L(s)},r)),o){const t=$.get(l);$.delete(l);const r=t.value instanceof g?t.value.template:void 0;B(s,l,r),a(e,e.firstChild),e.appendChild(l),$.set(e,t)}!n&&i&&window.ShadyCSS.styleElement(e.host)};
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const at=new WeakMap,lt=n(t=>e=>{if(!(e instanceof P)||e instanceof A||"style"!==e.committer.name||e.committer.parts.length>1)throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");const{committer:r}=e,{style:s}=r.element;at.has(e)||(s.cssText=r.strings.join(" "));const n=at.get(e);for(const e in n)e in t||(-1===e.indexOf("-")?s[e]=null:s.removeProperty(e));for(const e in t)-1===e.indexOf("-")?s[e]=t[e]:s.setProperty(e,t[e]);at.set(e,t)});var ct=function(t,e,r,s){var n,i=arguments.length,o=i<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,r):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,r,s);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(i<3?n(o):i>3?n(e,r,o):n(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};let dt=class extends it{render(){return M`
      <div style=${lt({visibility:this.visibility})}>
        Congratulations! <br /><span class="winner-player"></span>
      </div>
    `}};dt.styles=st`
    div {
      position: absolute;
      left: 0;
      right: 0;
      width: 200px;
      padding: 15px;
      margin-left: auto;
      margin-right: auto;
      background-color: #fcfbfb;
      border: 10px double #e3ddd8;
      color: #333;
      font-size: 18px;
      text-align: center;
    }

    .winner-player {
      font-weight: bold;
    }
  `,ct([Z({type:String})],dt.prototype,"visibility",void 0),dt=ct([X("four-dot-winneralert")],dt);var ht=function(t,e,r,s){var n,i=arguments.length,o=i<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,r):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,r,s);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(i<3?n(o):i>3?n(e,r,o):n(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};let pt=class extends it{restartGame(){this.dispatchEvent(new CustomEvent("restart-game",{bubbles:!0,composed:!0}))}render(){return M`
      <header>
        <h1>Four Dots</h1>
        <button type="button" @click="${this.restartGame}">
          Restart
        </button>
      </header>
    `}};pt.styles=st`
    header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
    }

    button {
      background-color: #fff;
      border: 1px solid #ddd;
      border-radius: 5px;
      outline: none;
      cursor: pointer;
    }
    button:hover {
      background-color: #ddd;
      border: 1px solid #ddd;
    }
    button:active {
      background-color: #999;
      border: 1px solid #999;
    }
  `,pt=ht([X("four-dot-header")],pt);var ut=function(t,e,r,s){var n,i=arguments.length,o=i<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,r):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,r,s);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(i<3?n(o):i>3?n(e,r,o):n(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};let ft=class extends it{addDot(){this.dispatchEvent(new CustomEvent("add-dot",{bubbles:!0,composed:!0,detail:{player:this.currentPlayer,colIndex:this.colIndex}})),this.dispatchEvent(new CustomEvent("change-player",{bubbles:!0,composed:!0}))}render(){return M`
      <button @click="${this.addDot}" ?disabled="${this.disabled}">+</button>
    `}};ft.styles=st`
    button {
      background-color: #e9f6e9;
      padding: 6px;
      margin-left: 5px;
      margin-right: 5px;
      margin-bottom: 10px;
      border: 1px solid #24ae24;
      border-radius: 5px;
      outline: none;
      cursor: pointer;
      font-size: 1.1rem;
      font-weight: bold;
    }
    button:hover {
      background-color: #24ae24;
      border: 1px solid #24ae24;
      color: #fff;
    }
    button:active {
      background-color: #1c8b1c;
      border: 1px solid #1c8b1c;
      color: #fff;
    }
    button:disabled,
    button[disabled] {
      background-color: #eee;
      border: 1px solid #ddd;
      color: #999;
      cursor: inherit;
    }
  `,ut([Z({type:Boolean})],ft.prototype,"disabled",void 0),ut([Z({type:Number})],ft.prototype,"colIndex",void 0),ut([Z({type:String})],ft.prototype,"currentPlayer",void 0),ut([Z({type:Function})],ft.prototype,"setCurrentPlayer",void 0),ft=ut([X("add-dot-btn")],ft);
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const yt=new WeakMap,mt=n(t=>e=>{if(!(e instanceof P)||e instanceof A||"class"!==e.committer.name||e.committer.parts.length>1)throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");const{committer:r}=e,{element:s}=r;yt.has(e)||(s.className=r.strings.join(" "));const{classList:n}=s,i=yt.get(e);for(const e in i)e in t||n.remove(e);for(const e in t){const r=t[e];if(!i||r!==i[e]){n[r?"add":"remove"](e)}}yt.set(e,t)});var bt=function(t,e,r,s){var n,i=arguments.length,o=i<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,r):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,r,s);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(i<3?n(o):i>3?n(e,r,o):n(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};let gt=class extends it{render(){return M`
      <tr>
        ${this.columns.map((t,e)=>M`
            <td
              class=${mt({"cell-blue":"blue"==t,"cell-black":"black"==t})}
            ></td>
          `)}
      </tr>
    `}};gt.styles=st`
    * {
      box-sizing: border-box;
    }

    td {
      width: 45px;
      max-width: 45px;
      height: 45px;
      max-height: 45px;
      border: 1px solid #000;
      text-align: center;
    }

    .cell-blue {
      background-color: #71acda;
    }

    .cell-black {
      background-color: black;
    }
  `,bt([Z({type:Array})],gt.prototype,"columns",void 0),bt([Z({type:Number})],gt.prototype,"rowIndex",void 0),gt=bt([X("table-row")],gt);var _t=function(t,e,r,s){var n,i=arguments.length,o=i<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,r):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,r,s);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(i<3?n(o):i>3?n(e,r,o):n(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};let vt=class extends it{constructor(){super(...arguments),this.counter=0}setCurrentPlayer(t){this.currentPlayer=t,alert("NOW")}render(){return M`
      <main>
        <table>
          <thead>
            <tr>
              ${this.actionbar.map((t,e)=>M`
                  <th>
                    <add-dot-btn
                      colIndex="${e}"
                      currentPlayer="${this.currentPlayer}"
                      .setCurrentPlayer="${this.setCurrentPlayer}"
                      ?disabled="${t}"
                    ></add-dot-btn>
                  </th>
                `)}
            </tr>
          </thead>
          <tbody>
            ${this.board.map((t,e)=>M`
                <table-row
                  rowIndex="${e}"
                  columns=${JSON.stringify(t)}
                ></table-row>
              `)}
          </tbody>
        </table>
      </main>
    `}};vt.styles=st`
    * {
      box-sizing: border-box;
    }

    main {
      display: flex;
      justify-content: center;
    }

    table {
      border-spacing: 0px;
    }
    thead > tr {
      display: flex;
      justify-content: space-between;
    }
    tbody {
      display: flex;
      justify-content: center;
      flex-direction: column;
    }
  `,_t([Z({type:Array})],vt.prototype,"actionbar",void 0),_t([Z({type:Array})],vt.prototype,"board",void 0),_t([Z({type:String})],vt.prototype,"currentPlayer",void 0),_t([Z({type:Number})],vt.prototype,"counter",void 0),vt=_t([X("four-dot-board")],vt),r.d(e,"FourDotsApp",(function(){return wt}));var St=function(t,e,r,s){var n,i=arguments.length,o=i<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,r):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,r,s);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(i<3?n(o):i>3?n(e,r,o):n(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};let wt=class extends it{constructor(){super(),this.actionbar=new Array(12).fill(null),this.board=ot(),this.currentPlayer="blue",this.visibility="hidden",this.addEventListener("restart-game",this.restartGame),this.addEventListener("add-dot",this.updateGameState),this.addEventListener("change-player",this.changePlayer)}restartGame(){this.currentPlayer="blue",this.visibility="hidden",this.board=ot()}updateGameState(t){const{colIndex:e,player:r}=t.detail,s=function(t,e){const r=t.length;let s=0;for(let n=0;n<r;n++){if(t[n][e])return s;s=n}return s}(this.board,e);this.board[s][e]=r,0==s&&this.columnFilled(e)}changePlayer(){this.currentPlayer="blue"==this.currentPlayer?"black":"blue"}columnFilled(t){this.actionbar[t]="disabled"}render(){return M`
      <div>
        <four-dot-winneralert
          visibility="${this.visibility}"
        ></four-dot-winneralert>

        <four-dot-header></four-dot-header>

        <four-dot-board
          board=${JSON.stringify(this.board)}
          actionbar="${JSON.stringify(this.actionbar)}"
          currentPlayer="${this.currentPlayer}"
        ></four-dot-board>
      </div>
    `}};St([Z({type:Array})],wt.prototype,"actionbar",void 0),St([Z({type:Array})],wt.prototype,"board",void 0),St([Z({type:String})],wt.prototype,"currentPlayer",void 0),St([Z({type:String})],wt.prototype,"visibility",void 0),wt=St([X("four-dots-app")],wt)}]);