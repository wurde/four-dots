!function(e){var t={};function r(n){if(t[n])return t[n].exports;var s=t[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(n,s,function(t){return e[t]}.bind(null,s));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);
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
const n=new WeakMap,s=e=>"function"==typeof e&&n.has(e),i=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,o=(e,t,r=null)=>{for(;t!==r;){const r=t.nextSibling;e.removeChild(t),t=r}},a={},l={},c=`{{lit-${String(Math.random()).slice(2)}}}`,d=`\x3c!--${c}--\x3e`,p=new RegExp(`${c}|${d}`);class u{constructor(e,t){this.parts=[],this.element=t;const r=[],n=[],s=document.createTreeWalker(t.content,133,null,!1);let i=0,o=-1,a=0;const{strings:l,values:{length:d}}=e;for(;a<d;){const e=s.nextNode();if(null!==e){if(o++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:r}=t;let n=0;for(let e=0;e<r;e++)h(t[e].name,"$lit$")&&n++;for(;n-- >0;){const t=l[a],r=m.exec(t)[2],n=r.toLowerCase()+"$lit$",s=e.getAttribute(n);e.removeAttribute(n);const i=s.split(p);this.parts.push({type:"attribute",index:o,name:r,strings:i}),a+=i.length-1}}"TEMPLATE"===e.tagName&&(n.push(e),s.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(c)>=0){const n=e.parentNode,s=t.split(p),i=s.length-1;for(let t=0;t<i;t++){let r,i=s[t];if(""===i)r=y();else{const e=m.exec(i);null!==e&&h(e[2],"$lit$")&&(i=i.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),r=document.createTextNode(i)}n.insertBefore(r,e),this.parts.push({type:"node",index:++o})}""===s[i]?(n.insertBefore(y(),e),r.push(e)):e.data=s[i],a+=i}}else if(8===e.nodeType)if(e.data===c){const t=e.parentNode;null!==e.previousSibling&&o!==i||(o++,t.insertBefore(y(),e)),i=o,this.parts.push({type:"node",index:o}),null===e.nextSibling?e.data="":(r.push(e),o--),a++}else{let t=-1;for(;-1!==(t=e.data.indexOf(c,t+1));)this.parts.push({type:"node",index:-1}),a++}}else s.currentNode=n.pop()}for(const e of r)e.parentNode.removeChild(e)}}const h=(e,t)=>{const r=e.length-t.length;return r>=0&&e.slice(r)===t},f=e=>-1!==e.index,y=()=>document.createComment(""),m=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
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
class g{constructor(e,t,r){this.__parts=[],this.template=e,this.processor=t,this.options=r}update(e){let t=0;for(const r of this.__parts)void 0!==r&&r.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=i?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],r=this.template.parts,n=document.createTreeWalker(e,133,null,!1);let s,o=0,a=0,l=n.nextNode();for(;o<r.length;)if(s=r[o],f(s)){for(;a<s.index;)a++,"TEMPLATE"===l.nodeName&&(t.push(l),n.currentNode=l.content),null===(l=n.nextNode())&&(n.currentNode=t.pop(),l=n.nextNode());if("node"===s.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(l.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,s.name,s.strings,this.options));o++}else this.__parts.push(void 0),o++;return i&&(document.adoptNode(e),customElements.upgrade(e)),e}}
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
 */const b=` ${c} `;class _{constructor(e,t,r,n){this.strings=e,this.values=t,this.type=r,this.processor=n}getHTML(){const e=this.strings.length-1;let t="",r=!1;for(let n=0;n<e;n++){const e=this.strings[n],s=e.lastIndexOf("\x3c!--");r=(s>-1||r)&&-1===e.indexOf("--\x3e",s+1);const i=m.exec(e);t+=null===i?e+(r?b:d):e.substr(0,i.index)+i[1]+i[2]+"$lit$"+i[3]+c}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}
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
const v=e=>null===e||!("object"==typeof e||"function"==typeof e),S=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class w{constructor(e,t,r){this.dirty=!0,this.element=e,this.name=t,this.strings=r,this.parts=[];for(let e=0;e<r.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new x(this)}_getValue(){const e=this.strings,t=e.length-1;let r="";for(let n=0;n<t;n++){r+=e[n];const t=this.parts[n];if(void 0!==t){const e=t.value;if(v(e)||!S(e))r+="string"==typeof e?e:String(e);else for(const t of e)r+="string"==typeof t?t:String(t)}}return r+=e[t],r}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class x{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===a||v(e)&&e===this.value||(this.value=e,s(e)||(this.committer.dirty=!0))}commit(){for(;s(this.value);){const e=this.value;this.value=a,e(this)}this.value!==a&&this.committer.commit()}}class P{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(y()),this.endNode=e.appendChild(y())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=y()),e.__insert(this.endNode=y())}insertAfterPart(e){e.__insert(this.startNode=y()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){for(;s(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=a,e(this)}const e=this.__pendingValue;e!==a&&(v(e)?e!==this.value&&this.__commitText(e):e instanceof _?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):S(e)?this.__commitIterable(e):e===l?(this.value=l,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,r="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=r:this.__commitNode(document.createTextNode(r)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof g&&this.value.template===t)this.value.update(e.values);else{const r=new g(t,e.processor,this.options),n=r._clone();r.update(e.values),this.__commitNode(n),this.value=r}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let r,n=0;for(const s of e)r=t[n],void 0===r&&(r=new P(this.options),t.push(r),0===n?r.appendIntoPart(this):r.insertAfterPart(t[n-1])),r.setValue(s),r.commit(),n++;n<t.length&&(t.length=n,this.clear(r&&r.endNode))}clear(e=this.startNode){o(this.startNode.parentNode,e.nextSibling,this.endNode)}}class C{constructor(e,t,r){if(this.value=void 0,this.__pendingValue=void 0,2!==r.length||""!==r[0]||""!==r[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=r}setValue(e){this.__pendingValue=e}commit(){for(;s(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=a,e(this)}if(this.__pendingValue===a)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=a}}class N extends w{constructor(e,t,r){super(e,t,r),this.single=2===r.length&&""===r[0]&&""===r[1]}_createPart(){return new O(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class O extends x{}let j=!1;try{const e={get capture(){return j=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class R{constructor(e,t,r){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=r,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;s(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=a,e(this)}if(this.__pendingValue===a)return;const e=this.__pendingValue,t=this.value,r=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),n=null!=e&&(null==t||r);r&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=A(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=a}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const A=e=>e&&(j?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)
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
 */;const E=new class{handleAttributeExpressions(e,t,r,n){const s=t[0];if("."===s){return new N(e,t.slice(1),r).parts}return"@"===s?[new R(e,t.slice(1),n.eventContext)]:"?"===s?[new C(e,t.slice(1),r)]:new w(e,t,r).parts}handleTextExpression(e){return new P(e)}};
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
 */function T(e){let t=k.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},k.set(e.type,t));let r=t.stringsArray.get(e.strings);if(void 0!==r)return r;const n=e.strings.join(c);return r=t.keyString.get(n),void 0===r&&(r=new u(e,e.getTemplateElement()),t.keyString.set(n,r)),t.stringsArray.set(e.strings,r),r}const k=new Map,V=new WeakMap;
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
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const $=(e,...t)=>new _(e,t,"html",E);function M(e,t){const{element:{content:r},parts:n}=e,s=document.createTreeWalker(r,133,null,!1);let i=z(n),o=n[i],a=-1,l=0;const c=[];let d=null;for(;s.nextNode();){a++;const e=s.currentNode;for(e.previousSibling===d&&(d=null),t.has(e)&&(c.push(e),null===d&&(d=e)),null!==d&&l++;void 0!==o&&o.index===a;)o.index=null!==d?-1:o.index-l,i=z(n,i),o=n[i]}c.forEach(e=>e.parentNode.removeChild(e))}const U=e=>{let t=11===e.nodeType?0:1;const r=document.createTreeWalker(e,133,null,!1);for(;r.nextNode();)t++;return t},z=(e,t=-1)=>{for(let r=t+1;r<e.length;r++){const t=e[r];if(f(t))return r}return-1};
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
const I=(e,t)=>`${e}--${t}`;let F=!0;void 0===window.ShadyCSS?F=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),F=!1);const q=e=>t=>{const r=I(t.type,e);let n=k.get(r);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},k.set(r,n));let s=n.stringsArray.get(t.strings);if(void 0!==s)return s;const i=t.strings.join(c);if(s=n.keyString.get(i),void 0===s){const r=t.getTemplateElement();F&&window.ShadyCSS.prepareTemplateDom(r,e),s=new u(t,r),n.keyString.set(i,s)}return n.stringsArray.set(t.strings,s),s},D=["html","svg"],B=new Set,L=(e,t,r)=>{B.add(e);const n=r?r.element:document.createElement("template"),s=t.querySelectorAll("style"),{length:i}=s;if(0===i)return void window.ShadyCSS.prepareTemplateStyles(n,e);const o=document.createElement("style");for(let e=0;e<i;e++){const t=s[e];t.parentNode.removeChild(t),o.textContent+=t.textContent}(e=>{D.forEach(t=>{const r=k.get(I(t,e));void 0!==r&&r.keyString.forEach(e=>{const{element:{content:t}}=e,r=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{r.add(e)}),M(e,r)})})})(e);const a=n.content;r?function(e,t,r=null){const{element:{content:n},parts:s}=e;if(null==r)return void n.appendChild(t);const i=document.createTreeWalker(n,133,null,!1);let o=z(s),a=0,l=-1;for(;i.nextNode();){for(l++,i.currentNode===r&&(a=U(t),r.parentNode.insertBefore(t,r));-1!==o&&s[o].index===l;){if(a>0){for(;-1!==o;)s[o].index+=a,o=z(s,o);return}o=z(s,o)}}}(r,o,a.firstChild):a.insertBefore(o,a.firstChild),window.ShadyCSS.prepareTemplateStyles(n,e);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)t.insertBefore(l.cloneNode(!0),t.firstChild);else if(r){a.insertBefore(o,a.firstChild);const e=new Set;e.add(o),M(r,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const W={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},H=(e,t)=>t!==e&&(t==t||e==e),J={attribute:!0,type:String,converter:W,reflect:!1,hasChanged:H},G=Promise.resolve(!0);class K extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=G,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,r)=>{const n=this._attributeNameForProperty(r,t);void 0!==n&&(this._attributeToPropertyMap.set(n,r),e.push(n))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=J){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const r="symbol"==typeof e?Symbol():`__${e}`;Object.defineProperty(this.prototype,e,{get(){return this[r]},set(t){const n=this[e];this[r]=t,this._requestUpdate(e,n)},configurable:!0,enumerable:!0})}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const r of t)this.createProperty(r,e[r])}}static _attributeNameForProperty(e,t){const r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,r=H){return r(e,t)}static _propertyValueFromAttribute(e,t){const r=t.type,n=t.converter||W,s="function"==typeof n?n:n.fromAttribute;return s?s(e,r):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const r=t.type,n=t.converter;return(n&&n.toAttribute||W.toAttribute)(e,r)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this._updateState=32|this._updateState,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,r){t!==r&&this._attributeToProperty(e,r)}_propertyToAttribute(e,t,r=J){const n=this.constructor,s=n._attributeNameForProperty(e,r);if(void 0!==s){const e=n._propertyValueToAttribute(t,r);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(s):this.setAttribute(s,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const r=this.constructor,n=r._attributeToPropertyMap.get(e);if(void 0!==n){const e=r._classProperties.get(n)||J;this._updateState=16|this._updateState,this[n]=r._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}_requestUpdate(e,t){let r=!0;if(void 0!==e){const n=this.constructor,s=n._classProperties.get(e)||J;n._valueHasChanged(this[e],t,s.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==s.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,s))):r=!1}!this._hasRequestedUpdate&&r&&this._enqueueUpdate()}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){let e,t;this._updateState=4|this._updateState;const r=this._updatePromise;this._updatePromise=new Promise((r,n)=>{e=r,t=n});try{await r}catch(e){}this._hasConnected||await new Promise(e=>this._hasConnectedResolver=e);try{const e=this.performUpdate();null!=e&&await e}catch(e){t(e)}e(!this._hasRequestedUpdate)}get _hasConnected(){return 32&this._updateState}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e&&this.update(t)}catch(t){throw e=!1,t}finally{this._markUpdated()}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0)}updated(e){}firstUpdated(e){}}K.finalized=!0;
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
const Q=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:r,elements:n}=t;return{kind:r,elements:n,finisher(t){window.customElements.define(e,t)}}})(e,t),X=(e,t)=>"method"!==t.kind||!t.descriptor||"value"in t.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}}:Object.assign({},t,{finisher(r){r.createProperty(t.key,e)}});function Y(e){return(t,r)=>void 0!==r?((e,t,r)=>{t.constructor.createProperty(r,e)})(e,t,r):X(e,t)}const Z="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ee=Symbol();class te{constructor(e,t){if(t!==ee)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(Z?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const re=(e,...t)=>{const r=t.reduce((t,r,n)=>t+(e=>{if(e instanceof te)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(r)+e[n+1],e[0]);return new te(r,ee)};
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
(window.litElementVersions||(window.litElementVersions=[])).push("2.2.1");const ne=e=>e.flat?e.flat(1/0):function e(t,r=[]){for(let n=0,s=t.length;n<s;n++){const s=t[n];Array.isArray(s)?e(s,r):r.push(s)}return r}(e);class se extends K{static finalize(){super.finalize.call(this),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const e=this.styles,t=[];if(Array.isArray(e)){ne(e).reduceRight((e,t)=>(e.add(t),e),new Set).forEach(e=>t.unshift(e))}else e&&t.push(e);return t}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Z?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){super.update(e);const t=this.render();t instanceof _&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){}}se.finalized=!0,se.render=(e,t,r)=>{if(!r||"object"!=typeof r||!r.scopeName)throw new Error("The `scopeName` option is required.");const n=r.scopeName,s=V.has(t),i=F&&11===t.nodeType&&!!t.host,a=i&&!B.has(n),l=a?document.createDocumentFragment():t;if(((e,t,r)=>{let n=V.get(t);void 0===n&&(o(t,t.firstChild),V.set(t,n=new P(Object.assign({templateFactory:T},r))),n.appendInto(t)),n.setValue(e),n.commit()})(e,l,Object.assign({templateFactory:q(n)},r)),a){const e=V.get(l);V.delete(l);const r=e.value instanceof g?e.value.template:void 0;L(n,l,r),o(t,t.firstChild),t.appendChild(l),V.set(t,e)}!s&&i&&window.ShadyCSS.styleElement(t.host)};let ie=class extends se{dispatch(e,t){this.dispatchEvent(new CustomEvent(e,{detail:t}))}render(){return $``}};ie=function(e,t,r,n){var s,i=arguments.length,o=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,r,o):s(t,r))||o);return i>3&&o&&Object.defineProperty(t,r,o),o}([Q("event-stream")],ie);
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
const oe=new WeakMap,ae=(le=e=>t=>{if(!(t instanceof x)||t instanceof O||"style"!==t.committer.name||t.committer.parts.length>1)throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");const{committer:r}=t,{style:n}=r.element;oe.has(t)||(n.cssText=r.strings.join(" "));const s=oe.get(t);for(const t in s)t in e||(-1===t.indexOf("-")?n[t]=null:n.removeProperty(t));for(const t in e)-1===t.indexOf("-")?n[t]=e[t]:n.setProperty(t,e[t]);oe.set(t,e)},(...e)=>{const t=le(...e);return n.set(t,!0),t});var le,ce=function(e,t,r,n){var s,i=arguments.length,o=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,r,o):s(t,r))||o);return i>3&&o&&Object.defineProperty(t,r,o),o},de=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let pe=class extends se{render(){return $`
      <div style=${ae({visibility:this.visibility})}>
        Congratulations! <br /><span class="winner-player"></span>
      </div>
    `}};pe.styles=re`
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
  `,ce([Y({type:String}),de("design:type",Object)],pe.prototype,"visibility",void 0),pe=ce([Q("four-dot-winneralert")],pe);var ue=function(e,t,r,n){var s,i=arguments.length,o=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,r,o):s(t,r))||o);return i>3&&o&&Object.defineProperty(t,r,o),o},he=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let fe=class extends se{render(){return $`
      <header>
        <h1>Four Dots</h1>
        <button type="button" @click="${this.restartGame}">
          Restart
        </button>
      </header>
    `}};fe.styles=re`
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
  `,ue([Y({type:Function}),he("design:type",Object)],fe.prototype,"restartGame",void 0),fe=ue([Q("four-dot-header")],fe);var ye=function(e,t,r,n){var s,i=arguments.length,o=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,r,o):s(t,r))||o);return i>3&&o&&Object.defineProperty(t,r,o),o},me=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let ge=class extends se{addDot(){this.dispatchEvent(new CustomEvent("change-player",{bubbles:!0,composed:!0,detail:{currentPlayer:"blue"==this.currentPlayer?"black":"blue"}}))}render(){return $`
      <button @click="${this.addDot}">+</button>
    `}};ge.styles=re`
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
  `,ye([Y({type:Number}),me("design:type",Object)],ge.prototype,"colIndex",void 0),ye([Y({type:String}),me("design:type",Object)],ge.prototype,"currentPlayer",void 0),ye([Y({type:Function}),me("design:type",Object)],ge.prototype,"setCurrentPlayer",void 0),ge=ye([Q("add-dot-btn")],ge);var be=function(e,t,r,n){var s,i=arguments.length,o=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,r,o):s(t,r))||o);return i>3&&o&&Object.defineProperty(t,r,o),o},_e=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let ve=class extends se{render(){return $`
      <tr>
        ${this.columns.map(e=>$`
            <td colIndex="${e}" rowIndex="${this.rowIndex}"></td>
          `)}
      </tr>
    `}};ve.styles=re`
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
  `,be([Y({type:Array}),_e("design:type",Object)],ve.prototype,"columns",void 0),be([Y({type:Number}),_e("design:type",Object)],ve.prototype,"rowIndex",void 0),ve=be([Q("table-row")],ve);var Se=function(e,t,r,n){var s,i=arguments.length,o=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,r,o):s(t,r))||o);return i>3&&o&&Object.defineProperty(t,r,o),o},we=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let xe=class extends se{constructor(){super(...arguments),this.columns=Array.from(Array(12),(e,t)=>t),this.counter=0}setCurrentPlayer(e){this.currentPlayer=e,alert("NOW")}render(){return $`
      <main>
        ${this.currentPlayer}
        <table>
          <thead>
            <tr>
              ${this.columns.map(e=>$`
                  <th>
                    <add-dot-btn
                      colIndex="${e}"
                      currentPlayer="${this.currentPlayer}"
                      .setCurrentPlayer="${this.setCurrentPlayer}"
                    ></add-dot-btn>
                  </th>
                `)}
            </tr>
          </thead>
          <tbody>
            ${this.columns.map(e=>$`
                <table-row
                  rowIndex="${e}"
                  columns=${JSON.stringify(this.columns)}
                ></table-row>
              `)}
          </tbody>
        </table>
      </main>
    `}};xe.styles=re`
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
  `,Se([Y({type:Array}),we("design:type",Object)],xe.prototype,"columns",void 0),Se([Y({type:String}),we("design:type",Object)],xe.prototype,"currentPlayer",void 0),Se([Y({type:Number}),we("design:type",Object)],xe.prototype,"counter",void 0),xe=Se([Q("four-dot-board")],xe),r.d(t,"FourDotsApp",(function(){return Ne}));var Pe=function(e,t,r,n){var s,i=arguments.length,o=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,r,o):s(t,r))||o);return i>3&&o&&Object.defineProperty(t,r,o),o},Ce=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Ne=class extends se{constructor(){super(),this.board=this.createBoard(),this.currentPlayer="blue",this.visibility="hidden",this.addEventListener("change-player",e=>{this.currentPlayer=e.detail.currentPlayer})}createBoard(){let e=[];for(let t=0;t<12;t++)e.push(new Array(12));return e}restartGame(){this.currentPlayer="blue",this.visibility="hidden",this.board=this.createBoard()}render(){return $`
      <event-stream></event-stream>
      <four-dot-winneralert
        visibility="${this.visibility}"
      ></four-dot-winneralert>
      <four-dot-header .restartGame="${this.restartGame}"></four-dot-header>
      <four-dot-board
        board=${JSON.stringify(this.board)}
        currentPlayer="${this.currentPlayer}"
      ></four-dot-board>
    `}};Pe([Y({type:Array}),Ce("design:type",Object)],Ne.prototype,"board",void 0),Pe([Y({type:String}),Ce("design:type",Object)],Ne.prototype,"currentPlayer",void 0),Pe([Y({type:String}),Ce("design:type",Object)],Ne.prototype,"visibility",void 0),Ne=Pe([Q("four-dots-app"),Ce("design:paramtypes",[])],Ne)}]);