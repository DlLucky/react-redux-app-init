(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{45:function(t,e,r){"use strict";function n(t,e){return void 0===e&&(e={}),{type:t,data:e}}r.r(e),r.d(e,"changeLoginState",function(){return n})},46:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjAiIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjAgMCAxMjggMTI4IiB4bWw6c3BhY2U9InByZXNlcnZlIj48Zz48Y2lyY2xlIGN4PSIxNiIgY3k9IjY0IiByPSIxNiIgZmlsbD0iIzAwMDAwMCIgZmlsbC1vcGFjaXR5PSIxIi8+PGNpcmNsZSBjeD0iMTYiIGN5PSI2NCIgcj0iMTQuMzQ0IiBmaWxsPSIjMDAwMDAwIiBmaWxsLW9wYWNpdHk9IjEiIHRyYW5zZm9ybT0icm90YXRlKDQ1IDY0IDY0KSIvPjxjaXJjbGUgY3g9IjE2IiBjeT0iNjQiIHI9IjEyLjUzMSIgZmlsbD0iIzAwMDAwMCIgZmlsbC1vcGFjaXR5PSIxIiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA2NCA2NCkiLz48Y2lyY2xlIGN4PSIxNiIgY3k9IjY0IiByPSIxMC43NSIgZmlsbD0iIzAwMDAwMCIgZmlsbC1vcGFjaXR5PSIxIiB0cmFuc2Zvcm09InJvdGF0ZSgxMzUgNjQgNjQpIi8+PGNpcmNsZSBjeD0iMTYiIGN5PSI2NCIgcj0iMTAuMDYzIiBmaWxsPSIjMDAwMDAwIiBmaWxsLW9wYWNpdHk9IjEiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA2NCA2NCkiLz48Y2lyY2xlIGN4PSIxNiIgY3k9IjY0IiByPSI4LjA2MyIgZmlsbD0iIzAwMDAwMCIgZmlsbC1vcGFjaXR5PSIxIiB0cmFuc2Zvcm09InJvdGF0ZSgyMjUgNjQgNjQpIi8+PGNpcmNsZSBjeD0iMTYiIGN5PSI2NCIgcj0iNi40MzgiIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMSIgdHJhbnNmb3JtPSJyb3RhdGUoMjcwIDY0IDY0KSIvPjxjaXJjbGUgY3g9IjE2IiBjeT0iNjQiIHI9IjUuMzc1IiBmaWxsPSIjMDAwMDAwIiBmaWxsLW9wYWNpdHk9IjEiIHRyYW5zZm9ybT0icm90YXRlKDMxNSA2NCA2NCkiLz48YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InJvdGF0ZSIgdmFsdWVzPSIwIDY0IDY0OzMxNSA2NCA2NDsyNzAgNjQgNjQ7MjI1IDY0IDY0OzE4MCA2NCA2NDsxMzUgNjQgNjQ7OTAgNjQgNjQ7NDUgNjQgNjQiIGNhbGNNb2RlPSJkaXNjcmV0ZSIgZHVyPSI3MjBtcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZVRyYW5zZm9ybT48L2c+PC9zdmc+"},51:function(t,e,r){"use strict";r.r(e);var n=r(0),o=r.n(n),i=r(6),s=r.n(i),a=r(32),c=r(8),u={login:"http://"+window.location.host+"/mokeJson/login.json"},l={searchParams:"URLSearchParams"in self,iterable:"Symbol"in self&&"iterator"in Symbol,blob:"FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in self,arrayBuffer:"ArrayBuffer"in self};if(l.arrayBuffer)var h=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],d=ArrayBuffer.isView||function(t){return t&&h.indexOf(Object.prototype.toString.call(t))>-1};function f(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function y(t){return"string"!=typeof t&&(t=String(t)),t}function p(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return l.iterable&&(e[Symbol.iterator]=function(){return e}),e}function b(t){this.map={},t instanceof b?t.forEach(function(t,e){this.append(e,t)},this):Array.isArray(t)?t.forEach(function(t){this.append(t[0],t[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function m(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function I(t){return new Promise(function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}})}function g(t){var e=new FileReader,r=I(e);return e.readAsArrayBuffer(t),r}function w(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function j(){return this.bodyUsed=!1,this._initBody=function(t){var e;this._bodyInit=t,t?"string"==typeof t?this._bodyText=t:l.blob&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:l.formData&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:l.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():l.arrayBuffer&&l.blob&&((e=t)&&DataView.prototype.isPrototypeOf(e))?(this._bodyArrayBuffer=w(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):l.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(t)||d(t))?this._bodyArrayBuffer=w(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):l.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},l.blob&&(this.blob=function(){var t=m(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?m(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(g)}),this.text=function(){var t,e,r,n=m(this);if(n)return n;if(this._bodyBlob)return t=this._bodyBlob,e=new FileReader,r=I(e),e.readAsText(t),r;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),r=new Array(e.length),n=0;n<e.length;n++)r[n]=String.fromCharCode(e[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},l.formData&&(this.formData=function(){return this.text().then(N)}),this.json=function(){return this.text().then(JSON.parse)},this}b.prototype.append=function(t,e){t=f(t),e=y(e);var r=this.map[t];this.map[t]=r?r+", "+e:e},b.prototype.delete=function(t){delete this.map[f(t)]},b.prototype.get=function(t){return t=f(t),this.has(t)?this.map[t]:null},b.prototype.has=function(t){return this.map.hasOwnProperty(f(t))},b.prototype.set=function(t,e){this.map[f(t)]=y(e)},b.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},b.prototype.keys=function(){var t=[];return this.forEach(function(e,r){t.push(r)}),p(t)},b.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),p(t)},b.prototype.entries=function(){var t=[];return this.forEach(function(e,r){t.push([r,e])}),p(t)},l.iterable&&(b.prototype[Symbol.iterator]=b.prototype.entries);var v=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function A(t,e){var r,n,o=(e=e||{}).body;if(t instanceof A){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new b(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,o||null==t._bodyInit||(o=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new b(e.headers)),this.method=(r=e.method||this.method||"GET",n=r.toUpperCase(),v.indexOf(n)>-1?n:r),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function N(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var r=t.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(n),decodeURIComponent(o))}}),e}function S(t,e){e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new b(e.headers),this.url=e.url||"",this._initBody(t)}A.prototype.clone=function(){return new A(this,{body:this._bodyInit})},j.call(A.prototype),j.call(S.prototype),S.prototype.clone=function(){return new S(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new b(this.headers),url:this.url})},S.error=function(){var t=new S(null,{status:0,statusText:""});return t.type="error",t};var B=[301,302,303,307,308];S.redirect=function(t,e){if(-1===B.indexOf(e))throw new RangeError("Invalid status code");return new S(null,{status:e,headers:{location:t}})};var P=self.DOMException;try{new P}catch(t){(P=function(t,e){this.message=t,this.name=e;var r=Error(t);this.stack=r.stack}).prototype=Object.create(Error.prototype),P.prototype.constructor=P}function x(t,e){return new Promise(function(r,n){var o=new A(t,e);if(o.signal&&o.signal.aborted)return n(new P("Aborted","AbortError"));var i=new XMLHttpRequest;function s(){i.abort()}i.onload=function(){var t,e,n={status:i.status,statusText:i.statusText,headers:(t=i.getAllResponseHeaders()||"",e=new b,t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(t){var r=t.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();e.append(n,o)}}),e)};n.url="responseURL"in i?i.responseURL:n.headers.get("X-Request-URL");var o="response"in i?i.response:i.responseText;r(new S(o,n))},i.onerror=function(){n(new TypeError("Network request failed"))},i.ontimeout=function(){n(new TypeError("Network request failed"))},i.onabort=function(){n(new P("Aborted","AbortError"))},i.open(o.method,o.url,!0),"include"===o.credentials?i.withCredentials=!0:"omit"===o.credentials&&(i.withCredentials=!1),"responseType"in i&&l.blob&&(i.responseType="blob"),o.headers.forEach(function(t,e){i.setRequestHeader(e,t)}),o.signal&&(o.signal.addEventListener("abort",s),i.onreadystatechange=function(){4===i.readyState&&o.signal.removeEventListener("abort",s)}),i.send(void 0===o._bodyInit?null:o._bodyInit)})}x.polyfill=!0,self.fetch||(self.fetch=x,self.Headers=b,self.Request=A,self.Response=S);var E,D,M,T=r(46),C=r.n(T),Z=(r(41),r(45));function Y(){return(Y=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}r.d(e,"default",function(){return _});var _=Object(a.b)(null,function(t){return Object(c.bindActionCreators)(Y({},Z),t)})((M=D=function(t){var e,r;function n(e){var r;return(r=t.call(this,e)||this).goLogin=function(){var t,e,n,o,i=r.state,s=i.userName,a=i.userPwd;s?(a||alert("请输入密码"),r.setState({loading:!0}),(t={url:u.login,type:"get"},e=t.headers||{"Content-Type":"application/json;charset=utf-8"},n=t.body||{},o={url:t.url,method:t.type||"post",credentials:"include",headers:e,body:"get"===t.type||"head"===t.type?void 0:JSON.stringify(n)},fetch(o.url,o).then(function(t){if(t.status>=200&&t.status<300)return t;var e=new Error(t.statusText);throw e.response=t,e}).then(function(t){return t.json()}).then(function(t){return t.success?t.result:Promise.reject(t)}).catch(function(t){alert(t.msg||t.errorMsg||"网络异常，稍后再试"),Promise.reject(t)})).then(function(t){setTimeout(function(){sessionStorage.setItem("username",t.name),r.setState({loading:!1}),r.props.history.push("/"),r.props.changeLoginState("CANCEL_LOGIN_STATE",t)},1500)}).catch(function(t){alert(t.errorMsg)})):alert("请输入用户名")},r.state={userName:"",userPwd:"",loading:!1},r}r=t,(e=n).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r;var i=n.prototype;return i.componentDidMount=function(){var t=this;document.addEventListener("keyup",function(e){13===e.keyCode&&t.goLogin()})},i.render=function(){var t=this,e=this.state,r=e.userName,n=e.userPwd,i=e.loading;return o.a.createElement("div",{id:"loginArea"},o.a.createElement("ul",{className:"loginContent"},o.a.createElement("li",{className:"title"},"React App Init"),o.a.createElement("li",{className:"userItemBox"},o.a.createElement("input",{type:"text",placeholder:"请输入用户名",value:r,onChange:function(e){return t.setState({userName:e.target.value})}}),o.a.createElement("input",{type:"password",placeholder:"请输入密码",value:n,onChange:function(e){return t.setState({userPwd:e.target.value})}})),i?o.a.createElement("li",{className:"loading"},o.a.createElement("img",{src:C.a,alt:"loading"}),o.a.createElement("span",null,"登录中...")):o.a.createElement("li",{className:"loginBotton"},o.a.createElement("button",{type:"button",onClick:this.goLogin},"登录"))))},n}(n.Component),D.propTypes={changeLoginState:s.a.func,history:s.a.object},E=M))||E}}]);