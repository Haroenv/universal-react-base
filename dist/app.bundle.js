webpackJsonp([0],{0:function(e,t,n){e.exports=n(1)},1:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}n(2);var o=n(292),a=r(o),u=n(444),l=r(u),i=n(445),c=n(502),s=n(522),f=r(s),d=n(543),p=(r(d),n(547)),m=r(p),h=JSON.parse(window.__INITIAL_STATE__),E=i.browserHistory,_=(0,m.default)(h);l.default.render(a.default.createElement(c.Provider,{store:_},a.default.createElement(i.Router,{children:f.default,history:E})),document.getElementById("root"))},522:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(292),a=r(o),u=n(445),l=n(523),i=r(l),c=n(527),s=r(c),f=n(529),d=r(f),p=n(531),m=r(p),h=n(539),E=r(h),_=n(541),v=r(_);t.default=a.default.createElement(u.Route,{path:"/",component:i.default},a.default.createElement(u.IndexRoute,{component:s.default}),a.default.createElement(u.Route,{path:"/about",component:d.default}),a.default.createElement(u.Route,{path:"/posts",component:m.default}),a.default.createElement(u.Route,{path:"/post/:id",component:E.default}),a.default.createElement(u.Route,{path:"/login",component:v.default}))},523:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(292),a=r(o),u=n(524),l=r(u),i=n(525),c=r(i),s=function(e){return a.default.createElement("div",{className:l.default.root},a.default.createElement("header",{className:l.default.header},a.default.createElement("h1",{className:l.default.heading},"The Dots"),a.default.createElement(c.default,null)),a.default.createElement("div",null,e.children))};t.default=s},524:function(e,t){e.exports={root:"_1IFck",header:"_3TdEg",heading:"_20Usz"}},525:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(292),a=r(o),u=n(445),l=n(526),i=r(l),c=function(){return a.default.createElement("ul",{className:i.default.navigation},a.default.createElement("li",{className:i.default.item},a.default.createElement(u.Link,{to:"/",className:i.default.link,activeClassName:i.default.active,onlyActiveOnIndex:!0},"Home")),a.default.createElement("li",{className:i.default.item},a.default.createElement(u.Link,{to:"/about",className:i.default.link,activeClassName:i.default.active},"About")),a.default.createElement("li",{className:i.default.item},a.default.createElement(u.Link,{to:"/posts",className:i.default.link,activeClassName:i.default.active},"Posts")),a.default.createElement("li",{className:i.default.itemLogin},a.default.createElement(u.Link,{to:"/login",className:i.default.link,activeClassName:i.default.active},"Login")))};t.default=c},526:function(e,t){e.exports={navigation:"_23NL1",item:"_1FUX8",itemLogin:"_1_FQp",link:"_1nG9K",active:"_3snzJ"}},527:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(292),a=r(o),u=n(528),l=r(u),i=function(){return a.default.createElement("header",null,a.default.createElement("h3",{className:l.default.heading},"Homepage"),a.default.createElement("span",{className:l.default.description},"Nothing to see here yet."))};t.default=i},528:function(e,t){e.exports={heading:"_5Is01 RFZht",description:"_34oHU _17oWr"}},529:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(292),a=r(o),u=n(530),l=r(u),i=function(){return a.default.createElement("header",null,a.default.createElement("h3",{className:l.default.heading},"About"),a.default.createElement("span",{className:l.default.description},"Nothing to see here yet."))};t.default=i},530:function(e,t){e.exports={heading:"_3jaew RFZht",description:"_8iny2 _17oWr"}},531:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(292),c=r(i),s=n(502),f=n(532),d=n(536),p=r(d),m=n(538),h=r(m),E=function(e){function t(){return o(this,t),a(this,Object.getPrototypeOf(t).apply(this,arguments))}return u(t,e),l(t,[{key:"componentWillMount",value:function(){var e=this.props.dispatch;e((0,f.fetchPosts)())}},{key:"constructPosts",value:function(){return this.props.posts.items.map(function(e){return c.default.createElement(p.default,{key:e.id,id:e.id,author:e.author,title:e.title,text:e.text})})}},{key:"render",value:function(){var e=this.constructPosts();return console.log("the posts are rendered",e),c.default.createElement("div",null,c.default.createElement("header",null,c.default.createElement("h3",{className:h.default.heading},"Posts"),c.default.createElement("span",{className:h.default.description},"Blog posts from our members.")),c.default.createElement("div",null,e))}}]),t}(i.Component),_=function(e){return{posts:e.posts}};E=(0,s.connect)(_)(E),t.default=E},532:function(e,t,n){"use strict";function r(){return{type:s}}function o(e){return{type:f,posts:e}}function a(){return{type:d}}function u(e){return{type:p,post:e}}function l(){return function(e){return e(r()),(0,c.fetch)((0,c.apiPath)("/posts")).then(function(e){return e.json()}).then(function(t){console.log("Got response from the server. The JSON is here."),e(o(t))})}}function i(e){return function(t){return t(a()),(0,c.fetch)((0,c.apiPath)("/posts/"+e)).then(function(e){return e.json()}).then(function(e){return t(u(e))})}}Object.defineProperty(t,"__esModule",{value:!0}),t.RECEIVE_POST=t.REQUEST_POST=t.RECEIVE_POSTS=t.REQUEST_POSTS=void 0,t.fetchPosts=l,t.fetchPost=i;var c=n(533),s=t.REQUEST_POSTS="REQUEST_POSTS",f=t.RECEIVE_POSTS="RECEIVE_POSTS",d=t.REQUEST_POST="REQUEST_POST",p=t.RECEIVE_POST="RECEIVE_POST"},533:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e){return l+e}Object.defineProperty(t,"__esModule",{value:!0}),t.fetch=void 0,t.apiPath=o;var a=n(534),u=r(a),l="http://localhost:3001";t.fetch=u.default},536:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(292),a=r(o),u=n(445),l=n(537),i=r(l),c=function(e){var t=e.id,n=e.author,r=e.title,o=e.text;return a.default.createElement("div",{className:i.default.post},a.default.createElement("h5",{className:i.default.title},a.default.createElement(u.Link,{to:"/post/"+t,className:i.default.link,activeClassName:i.default.active,onlyActiveOnIndex:!0},r)),a.default.createElement("em",{className:i.default.author}," by ",n),a.default.createElement("p",{className:i.default.text},o))};t.default=c},537:function(e,t){e.exports={post:"_2KdPz",author:"_1KaDY _1iBZX",title:"_2rchd bcagj",text:"_1GbPe _2winc"}},538:function(e,t){e.exports={heading:"_24q7z RFZht",description:"_3o4q2 _17oWr"}},539:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(292),c=r(i),s=n(502),f=n(445),d=n(532),p=n(540),m=r(p),h=function(e){function t(){return o(this,t),a(this,Object.getPrototypeOf(t).apply(this,arguments))}return u(t,e),l(t,[{key:"componentDidMount",value:function(){var e=this.props.dispatch;e((0,d.fetchPost)(this.props.routeParams.id))}},{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement("header",{className:m.default.header},c.default.createElement("h3",{className:m.default.title},this.props.post.title),c.default.createElement("em",{className:m.default.author},"by ",this.props.post.author),c.default.createElement(f.Link,{to:"/posts",className:m.default.close},"← BACK TO POSTS")),c.default.createElement("p",{className:m.default.text},this.props.post.text))}}]),t}(i.Component),E=function(e){return{post:e.posts.post}};h=(0,s.connect)(E)(h),t.default=h},540:function(e,t){e.exports={header:"_1CHkS",title:"zBoja bcagj",author:"_3__B- _1iBZX",text:"T6i5E _2winc",close:"_1PEiO"}},541:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(292),a=r(o),u=n(542),l=r(u),i=function(){return a.default.createElement("div",null,a.default.createElement("header",{className:l.default.header},a.default.createElement("h3",{className:l.default.heading},"Login"),a.default.createElement("span",{className:l.default.description},"Please enter your details to login.")),a.default.createElement("form",null,a.default.createElement("label",{className:l.default.label,htmlFor:"login-email"},"Email_"),a.default.createElement("input",{className:l.default.input,type:"text",name:"login-email",placeholder:"Type in your email…"}),a.default.createElement("label",{className:l.default.label,htmlFor:"login-password"},"Password_"),a.default.createElement("input",{className:l.default.input,type:"password",name:"login-password",placeholder:"Type in your password…"}),a.default.createElement("input",{className:l.default.submit,type:"submit",value:"Go!"})))};t.default=i},542:function(e,t){e.exports={heading:"JcdLQ RFZht",description:"_2p4hQ _17oWr",label:"gRZHu",input:"_2e1K9",submit:"_2eojt _2e1K9"}},543:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(508),a=n(544),u=r(a),l=n(545),i=r(l),c=(0,o.combineReducers)({posts:u.default,notes:i.default});t.default=c},544:function(e,t,n){"use strict";function r(){var e=arguments.length<=0||void 0===arguments[0]?u:arguments[0],t=arguments[1];switch(t.type){case a.REQUEST_POSTS:return e;case a.RECEIVE_POSTS:return o({},e,{items:t.posts});case a.REQUEST_POST:return e;case a.RECEIVE_POST:return o({},e,{post:t.post});default:return e}}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(532),u={items:[],post:{}};t.default=r},545:function(e,t,n){"use strict";function r(){var e=arguments.length<=0||void 0===arguments[0]?u:arguments[0],t=arguments[1];switch(t.type){case a.REQUEST_NOTES:return e;case a.RECEIVE_NOTES:return o({},e,{items:t.notes});default:return e}}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(546),u={notes:[]};t.default=r},546:function(e,t,n){"use strict";function r(){return{type:l}}function o(e){return{type:i,posts:e}}function a(){return function(e){return e(r()),(0,u.fetch)((0,u.apiPath)("/notes")).then(function(e){return e.json()}).then(function(t){return e(o(t))})}}Object.defineProperty(t,"__esModule",{value:!0}),t.RECEIVE_NOTES=t.REQUEST_NOTES=void 0,t.fetchNotes=a;var u=n(533),l=t.REQUEST_NOTES="REQUEST_NOTES",i=t.RECEIVE_NOTES="RECEIVE_NOTES"},547:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e){var t=(0,a.createStore)(f.default,e,(0,a.applyMiddleware)(l.default,(0,c.default)()));return t}Object.defineProperty(t,"__esModule",{value:!0});var a=n(508),u=n(548),l=r(u),i=n(549),c=r(i),s=n(543),f=r(s);t.default=o},549:function(e,t){"use strict";function n(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function r(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}function o(e,t,o,a){switch("undefined"==typeof e?"undefined":r(e)){case"object":return"function"==typeof e[a]?e[a].apply(e,n(o)):e[a];case"function":return e(t);default:return e}}function a(){function e(){N.forEach(function(e,t){var n=e.started,a=e.startedTime,l=e.action,c=e.prevState,s=e.error,d=e.took,p=e.nextState,h=N[t+1];h&&(p=h.prevState,d=h.started-n);var _=g(l),v="function"==typeof f?f(function(){return p},l):f,y=i(a),b=T.title?"color: "+T.title(_)+";":null,S="action "+(E?y:"")+" "+_.type+" "+(m?"(in "+d.toFixed(2)+" ms)":"");try{v?T.title?u.groupCollapsed("%c "+S,b):u.groupCollapsed(S):T.title?u.group("%c "+S,b):u.group(S)}catch(O){u.log(S)}var P=o(r,_,[c],"prevState"),w=o(r,_,[_],"action"),j=o(r,_,[s,c],"error"),R=o(r,_,[p],"nextState");P&&(T.prevState?u[P]("%c prev state","color: "+T.prevState(c)+"; font-weight: bold",c):u[P]("prev state",c)),w&&(T.action?u[w]("%c action","color: "+T.action(_)+"; font-weight: bold",_):u[w]("action",_)),s&&j&&(T.error?u[j]("%c error","color: "+T.error(s,c)+"; font-weight: bold",s):u[j]("error",s)),R&&(T.nextState?u[R]("%c next state","color: "+T.nextState(p)+"; font-weight: bold",p):u[R]("next state",p));try{u.groupEnd()}catch(O){u.log("—— log end ——")}}),N.length=0}var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],n=t.level,r=void 0===n?"log":n,a=t.logger,u=void 0===a?console:a,l=t.logErrors,s=void 0===l?!0:l,f=t.collapsed,d=t.predicate,p=t.duration,m=void 0===p?!1:p,h=t.timestamp,E=void 0===h?!0:h,_=t.transformer,v=t.stateTransformer,y=void 0===v?function(e){return e}:v,b=t.actionTransformer,g=void 0===b?function(e){return e}:b,S=t.errorTransformer,O=void 0===S?function(e){return e}:S,P=t.colors,T=void 0===P?{title:function(){return"#000000"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}}:P;if("undefined"==typeof u)return function(){return function(e){return function(t){return e(t)}}};_&&console.error("Option 'transformer' is deprecated, use stateTransformer instead");var N=[];return function(t){var n=t.getState;return function(t){return function(r){if("function"==typeof d&&!d(n,r))return t(r);var o={};N.push(o),o.started=c.now(),o.startedTime=new Date,o.prevState=y(n()),o.action=r;var a=void 0;if(s)try{a=t(r)}catch(u){o.error=O(u)}else a=t(r);if(o.took=c.now()-o.started,o.nextState=y(n()),e(),o.error)throw o.error;return a}}}}var u=function(e,t){return new Array(t+1).join(e)},l=function(e,t){return u("0",t-e.toString().length)+e},i=function(e){return"@ "+l(e.getHours(),2)+":"+l(e.getMinutes(),2)+":"+l(e.getSeconds(),2)+"."+l(e.getMilliseconds(),3)},c="undefined"!=typeof performance&&"function"==typeof performance.now?performance:Date;e.exports=a}});