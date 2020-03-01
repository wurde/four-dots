!function(e){var t={};function r(s){if(t[s])return t[s].exports;var n=t[s]={i:s,l:!1,exports:{}};return e[s].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(s,n,function(t){return e[t]}.bind(null,n));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);
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
const s=new WeakMap,n=e=>"function"==typeof e&&s.has(e),o=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,i=(e,t,r=null)=>{for(;t!==r;){const r=t.nextSibling;e.removeChild(t),t=r}},a={},l={},c=`{{lit-${String(Math.random()).slice(2)}}}`,d=`\x3c!--${c}--\x3e`,p=new RegExp(`${c}|${d}`);class u{constructor(e,t){this.parts=[],this.element=t;const r=[],s=[],n=document.createTreeWalker(t.content,133,null,!1);let o=0,i=-1,a=0;const{strings:l,values:{length:d}}=e;for(;a<d;){const e=n.nextNode();if(null!==e){if(i++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:r}=t;let s=0;for(let e=0;e<r;e++)h(t[e].name,"$lit$")&&s++;for(;s-- >0;){const t=l[a],r=m.exec(t)[2],s=r.toLowerCase()+"$lit$",n=e.getAttribute(s);e.removeAttribute(s);const o=n.split(p);this.parts.push({type:"attribute",index:i,name:r,strings:o}),a+=o.length-1}}"TEMPLATE"===e.tagName&&(s.push(e),n.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(c)>=0){const s=e.parentNode,n=t.split(p),o=n.length-1;for(let t=0;t<o;t++){let r,o=n[t];if(""===o)r=y();else{const e=m.exec(o);null!==e&&h(e[2],"$lit$")&&(o=o.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),r=document.createTextNode(o)}s.insertBefore(r,e),this.parts.push({type:"node",index:++i})}""===n[o]?(s.insertBefore(y(),e),r.push(e)):e.data=n[o],a+=o}}else if(8===e.nodeType)if(e.data===c){const t=e.parentNode;null!==e.previousSibling&&i!==o||(i++,t.insertBefore(y(),e)),o=i,this.parts.push({type:"node",index:i}),null===e.nextSibling?e.data="":(r.push(e),i--),a++}else{let t=-1;for(;-1!==(t=e.data.indexOf(c,t+1));)this.parts.push({type:"node",index:-1}),a++}}else n.currentNode=s.pop()}for(const e of r)e.parentNode.removeChild(e)}}const h=(e,t)=>{const r=e.length-t.length;return r>=0&&e.slice(r)===t},f=e=>-1!==e.index,y=()=>document.createComment(""),m=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
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
class _{constructor(e,t,r){this.__parts=[],this.template=e,this.processor=t,this.options=r}update(e){let t=0;for(const r of this.__parts)void 0!==r&&r.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=o?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],r=this.template.parts,s=document.createTreeWalker(e,133,null,!1);let n,i=0,a=0,l=s.nextNode();for(;i<r.length;)if(n=r[i],f(n)){for(;a<n.index;)a++,"TEMPLATE"===l.nodeName&&(t.push(l),s.currentNode=l.content),null===(l=s.nextNode())&&(s.currentNode=t.pop(),l=s.nextNode());if("node"===n.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(l.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,n.name,n.strings,this.options));i++}else this.__parts.push(void 0),i++;return o&&(document.adoptNode(e),customElements.upgrade(e)),e}}
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
 */const g=` ${c} `;class b{constructor(e,t,r,s){this.strings=e,this.values=t,this.type=r,this.processor=s}getHTML(){const e=this.strings.length-1;let t="",r=!1;for(let s=0;s<e;s++){const e=this.strings[s],n=e.lastIndexOf("\x3c!--");r=(n>-1||r)&&-1===e.indexOf("--\x3e",n+1);const o=m.exec(e);t+=null===o?e+(r?g:d):e.substr(0,o.index)+o[1]+o[2]+"$lit$"+o[3]+c}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}
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
const v=e=>null===e||!("object"==typeof e||"function"==typeof e),S=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class w{constructor(e,t,r){this.dirty=!0,this.element=e,this.name=t,this.strings=r,this.parts=[];for(let e=0;e<r.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new x(this)}_getValue(){const e=this.strings,t=e.length-1;let r="";for(let s=0;s<t;s++){r+=e[s];const t=this.parts[s];if(void 0!==t){const e=t.value;if(v(e)||!S(e))r+="string"==typeof e?e:String(e);else for(const t of e)r+="string"==typeof t?t:String(t)}}return r+=e[t],r}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class x{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===a||v(e)&&e===this.value||(this.value=e,n(e)||(this.committer.dirty=!0))}commit(){for(;n(this.value);){const e=this.value;this.value=a,e(this)}this.value!==a&&this.committer.commit()}}class P{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(y()),this.endNode=e.appendChild(y())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=y()),e.__insert(this.endNode=y())}insertAfterPart(e){e.__insert(this.startNode=y()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){for(;n(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=a,e(this)}const e=this.__pendingValue;e!==a&&(v(e)?e!==this.value&&this.__commitText(e):e instanceof b?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):S(e)?this.__commitIterable(e):e===l?(this.value=l,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,r="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=r:this.__commitNode(document.createTextNode(r)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof _&&this.value.template===t)this.value.update(e.values);else{const r=new _(t,e.processor,this.options),s=r._clone();r.update(e.values),this.__commitNode(s),this.value=r}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let r,s=0;for(const n of e)r=t[s],void 0===r&&(r=new P(this.options),t.push(r),0===s?r.appendIntoPart(this):r.insertAfterPart(t[s-1])),r.setValue(n),r.commit(),s++;s<t.length&&(t.length=s,this.clear(r&&r.endNode))}clear(e=this.startNode){i(this.startNode.parentNode,e.nextSibling,this.endNode)}}class N{constructor(e,t,r){if(this.value=void 0,this.__pendingValue=void 0,2!==r.length||""!==r[0]||""!==r[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=r}setValue(e){this.__pendingValue=e}commit(){for(;n(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=a,e(this)}if(this.__pendingValue===a)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=a}}class C extends w{constructor(e,t,r){super(e,t,r),this.single=2===r.length&&""===r[0]&&""===r[1]}_createPart(){return new O(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class O extends x{}let A=!1;try{const e={get capture(){return A=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class R{constructor(e,t,r){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=r,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;n(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=a,e(this)}if(this.__pendingValue===a)return;const e=this.__pendingValue,t=this.value,r=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),s=null!=e&&(null==t||r);r&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),s&&(this.__options=j(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=a}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const j=e=>e&&(A?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)
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
 */;const T=new class{handleAttributeExpressions(e,t,r,s){const n=t[0];if("."===n){return new C(e,t.slice(1),r).parts}return"@"===n?[new R(e,t.slice(1),s.eventContext)]:"?"===n?[new N(e,t.slice(1),r)]:new w(e,t,r).parts}handleTextExpression(e){return new P(e)}};
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
 */function E(e){let t=k.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},k.set(e.type,t));let r=t.stringsArray.get(e.strings);if(void 0!==r)return r;const s=e.strings.join(c);return r=t.keyString.get(s),void 0===r&&(r=new u(e,e.getTemplateElement()),t.keyString.set(s,r)),t.stringsArray.set(e.strings,r),r}const k=new Map,V=new WeakMap;
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
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const $=(e,...t)=>new b(e,t,"html",T);function M(e,t){const{element:{content:r},parts:s}=e,n=document.createTreeWalker(r,133,null,!1);let o=z(s),i=s[o],a=-1,l=0;const c=[];let d=null;for(;n.nextNode();){a++;const e=n.currentNode;for(e.previousSibling===d&&(d=null),t.has(e)&&(c.push(e),null===d&&(d=e)),null!==d&&l++;void 0!==i&&i.index===a;)i.index=null!==d?-1:i.index-l,o=z(s,o),i=s[o]}c.forEach(e=>e.parentNode.removeChild(e))}const U=e=>{let t=11===e.nodeType?0:1;const r=document.createTreeWalker(e,133,null,!1);for(;r.nextNode();)t++;return t},z=(e,t=-1)=>{for(let r=t+1;r<e.length;r++){const t=e[r];if(f(t))return r}return-1};
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
const I=(e,t)=>`${e}--${t}`;let q=!0;void 0===window.ShadyCSS?q=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),q=!1);const F=e=>t=>{const r=I(t.type,e);let s=k.get(r);void 0===s&&(s={stringsArray:new WeakMap,keyString:new Map},k.set(r,s));let n=s.stringsArray.get(t.strings);if(void 0!==n)return n;const o=t.strings.join(c);if(n=s.keyString.get(o),void 0===n){const r=t.getTemplateElement();q&&window.ShadyCSS.prepareTemplateDom(r,e),n=new u(t,r),s.keyString.set(o,n)}return s.stringsArray.set(t.strings,n),n},D=["html","svg"],L=new Set,B=(e,t,r)=>{L.add(e);const s=r?r.element:document.createElement("template"),n=t.querySelectorAll("style"),{length:o}=n;if(0===o)return void window.ShadyCSS.prepareTemplateStyles(s,e);const i=document.createElement("style");for(let e=0;e<o;e++){const t=n[e];t.parentNode.removeChild(t),i.textContent+=t.textContent}(e=>{D.forEach(t=>{const r=k.get(I(t,e));void 0!==r&&r.keyString.forEach(e=>{const{element:{content:t}}=e,r=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{r.add(e)}),M(e,r)})})})(e);const a=s.content;r?function(e,t,r=null){const{element:{content:s},parts:n}=e;if(null==r)return void s.appendChild(t);const o=document.createTreeWalker(s,133,null,!1);let i=z(n),a=0,l=-1;for(;o.nextNode();){for(l++,o.currentNode===r&&(a=U(t),r.parentNode.insertBefore(t,r));-1!==i&&n[i].index===l;){if(a>0){for(;-1!==i;)n[i].index+=a,i=z(n,i);return}i=z(n,i)}}}(r,i,a.firstChild):a.insertBefore(i,a.firstChild),window.ShadyCSS.prepareTemplateStyles(s,e);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)t.insertBefore(l.cloneNode(!0),t.firstChild);else if(r){a.insertBefore(i,a.firstChild);const e=new Set;e.add(i),M(r,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const H={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},W=(e,t)=>t!==e&&(t==t||e==e),J={attribute:!0,type:String,converter:H,reflect:!1,hasChanged:W},G=Promise.resolve(!0);class K extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=G,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,r)=>{const s=this._attributeNameForProperty(r,t);void 0!==s&&(this._attributeToPropertyMap.set(s,r),e.push(s))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=J){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const r="symbol"==typeof e?Symbol():`__${e}`;Object.defineProperty(this.prototype,e,{get(){return this[r]},set(t){const s=this[e];this[r]=t,this._requestUpdate(e,s)},configurable:!0,enumerable:!0})}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const r of t)this.createProperty(r,e[r])}}static _attributeNameForProperty(e,t){const r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,r=W){return r(e,t)}static _propertyValueFromAttribute(e,t){const r=t.type,s=t.converter||H,n="function"==typeof s?s:s.fromAttribute;return n?n(e,r):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const r=t.type,s=t.converter;return(s&&s.toAttribute||H.toAttribute)(e,r)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this._updateState=32|this._updateState,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,r){t!==r&&this._attributeToProperty(e,r)}_propertyToAttribute(e,t,r=J){const s=this.constructor,n=s._attributeNameForProperty(e,r);if(void 0!==n){const e=s._propertyValueToAttribute(t,r);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(n):this.setAttribute(n,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const r=this.constructor,s=r._attributeToPropertyMap.get(e);if(void 0!==s){const e=r._classProperties.get(s)||J;this._updateState=16|this._updateState,this[s]=r._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}_requestUpdate(e,t){let r=!0;if(void 0!==e){const s=this.constructor,n=s._classProperties.get(e)||J;s._valueHasChanged(this[e],t,n.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==n.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,n))):r=!1}!this._hasRequestedUpdate&&r&&this._enqueueUpdate()}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){let e,t;this._updateState=4|this._updateState;const r=this._updatePromise;this._updatePromise=new Promise((r,s)=>{e=r,t=s});try{await r}catch(e){}this._hasConnected||await new Promise(e=>this._hasConnectedResolver=e);try{const e=this.performUpdate();null!=e&&await e}catch(e){t(e)}e(!this._hasRequestedUpdate)}get _hasConnected(){return 32&this._updateState}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e&&this.update(t)}catch(t){throw e=!1,t}finally{this._markUpdated()}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0)}updated(e){}firstUpdated(e){}}K.finalized=!0;
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
const Q=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:r,elements:s}=t;return{kind:r,elements:s,finisher(t){window.customElements.define(e,t)}}})(e,t),X=(e,t)=>"method"!==t.kind||!t.descriptor||"value"in t.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}}:Object.assign({},t,{finisher(r){r.createProperty(t.key,e)}});function Y(e){return(t,r)=>void 0!==r?((e,t,r)=>{t.constructor.createProperty(r,e)})(e,t,r):X(e,t)}const Z="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ee=Symbol();class te{constructor(e,t){if(t!==ee)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(Z?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const re=(e,...t)=>{const r=t.reduce((t,r,s)=>t+(e=>{if(e instanceof te)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(r)+e[s+1],e[0]);return new te(r,ee)};
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
(window.litElementVersions||(window.litElementVersions=[])).push("2.2.1");const se=e=>e.flat?e.flat(1/0):function e(t,r=[]){for(let s=0,n=t.length;s<n;s++){const n=t[s];Array.isArray(n)?e(n,r):r.push(n)}return r}(e);class ne extends K{static finalize(){super.finalize.call(this),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const e=this.styles,t=[];if(Array.isArray(e)){se(e).reduceRight((e,t)=>(e.add(t),e),new Set).forEach(e=>t.unshift(e))}else e&&t.push(e);return t}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Z?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){super.update(e);const t=this.render();t instanceof b&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){}}ne.finalized=!0,ne.render=(e,t,r)=>{if(!r||"object"!=typeof r||!r.scopeName)throw new Error("The `scopeName` option is required.");const s=r.scopeName,n=V.has(t),o=q&&11===t.nodeType&&!!t.host,a=o&&!L.has(s),l=a?document.createDocumentFragment():t;if(((e,t,r)=>{let s=V.get(t);void 0===s&&(i(t,t.firstChild),V.set(t,s=new P(Object.assign({templateFactory:E},r))),s.appendInto(t)),s.setValue(e),s.commit()})(e,l,Object.assign({templateFactory:F(s)},r)),a){const e=V.get(l);V.delete(l);const r=e.value instanceof _?e.value.template:void 0;B(s,l,r),i(t,t.firstChild),t.appendChild(l),V.set(t,e)}!n&&o&&window.ShadyCSS.styleElement(t.host)};let oe=class extends ne{static get styles(){return re`
      :host {
        visibility: hidden;
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
    `}render(){return $`
      <div>
        Congratulations! <br /><span class="winner-player"></span>
      </div>
    `}};oe=function(e,t,r,s){var n,o=arguments.length,i=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,r):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,s);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(i=(o<3?n(i):o>3?n(t,r,i):n(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i}([Q("four-dot-winneralert")],oe);var ie=function(e,t,r,s){var n,o=arguments.length,i=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,r):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,s);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(i=(o<3?n(i):o>3?n(t,r,i):n(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i},ae=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let le=class extends ne{static get styles(){return re`
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
    `}render(){return $`
      <header>
        <h1>Four Dots</h1>
        <button type="button" @click="${this.restartGame}">
          Restart
        </button>
      </header>
    `}};ie([Y({type:Function}),ae("design:type",Object)],le.prototype,"restartGame",void 0),le=ie([Q("four-dot-header")],le);var ce=function(e,t,r,s){var n,o=arguments.length,i=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,r):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,s);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(i=(o<3?n(i):o>3?n(t,r,i):n(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i},de=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let pe=class extends ne{static get styles(){return re`
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
    `}addDot(){alert(this.colIndex)}render(){return $`
      <button @click="${this.addDot}">+</button>
    `}};ce([Y({type:Number}),de("design:type",Object)],pe.prototype,"colIndex",void 0),pe=ce([Q("add-dot-btn")],pe);var ue=function(e,t,r,s){var n,o=arguments.length,i=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,r):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,s);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(i=(o<3?n(i):o>3?n(t,r,i):n(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i},he=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let fe=class extends ne{static get styles(){return re`
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
    `}render(){return $`
      <tr>
        ${this.columns.map(e=>$`
            <td colIndex="${e}" rowIndex="${this.rowIndex}"></td>
          `)}
      </tr>
    `}};ue([Y({type:Array}),he("design:type",Object)],fe.prototype,"columns",void 0),ue([Y({type:Number}),he("design:type",Object)],fe.prototype,"rowIndex",void 0),fe=ue([Q("table-row")],fe);var ye=function(e,t,r,s){var n,o=arguments.length,i=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,r):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,s);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(i=(o<3?n(i):o>3?n(t,r,i):n(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i},me=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let _e=class extends ne{constructor(){super(...arguments),this.columns=Array.from(Array(12),(e,t)=>t)}static get styles(){return re`
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
    `}render(){return $`
      <main>
        <table>
          <thead>
            <tr>
              ${this.columns.map(e=>$`
                  <th>
                    <add-dot-btn colIndex=${e}></add-dot-btn>
                  </th>
                `)}
            </tr>
          </thead>
          <tbody>
            ${this.columns.map(e=>$`
                <table-row columns=${JSON.stringify(this.columns)} rowIndex="${e}"></table-row>
              `)}
          </tbody>
        </table>
      </main>
    `}};ye([Y({type:Array}),me("design:type",Object)],_e.prototype,"columns",void 0),_e=ye([Q("four-dot-board")],_e),r.d(t,"FourDotsApp",(function(){return ve}));var ge=function(e,t,r,s){var n,o=arguments.length,i=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,r):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,s);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(i=(o<3?n(i):o>3?n(t,r,i):n(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i},be=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let ve=class extends ne{constructor(){super(...arguments),this.board=[],this.currentPlayer="red"}restartGame(){this.currentPlayer="red",alert("BLAH")}render(){return $`
      <four-dot-winneralert></four-dot-winneralert>
      <four-dot-header restartGame="${this.restartGame}"></four-dot-header>
      <four-dot-board></four-dot-board>
    `}};ge([Y({type:Array}),be("design:type",Object)],ve.prototype,"board",void 0),ge([Y({type:String}),be("design:type",Object)],ve.prototype,"currentPlayer",void 0),ve=ge([Q("four-dots-app")],ve)}]);