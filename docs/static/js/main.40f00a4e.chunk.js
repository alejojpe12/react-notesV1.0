(this["webpackJsonpjournal-app"]=this["webpackJsonpjournal-app"]||[]).push([[0],{166:function(e,t,a){},167:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(31),o=a.n(c),i=a(7),u=a(8),l=a.n(u),s=a(12),m=a(19),d=a(9),p=a(20),f=a(34),b=a(5),h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(n.useState)(e),a=Object(m.a)(t,2),r=a[0],c=a[1],o=function(e){var t=e.target;c(Object(b.a)(Object(b.a)({},r),{},Object(f.a)({},t.name,t.value)))},i=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;c(t)};return[r,o,i]},v="[Auth] Login",E="[Auth] Logout",g="[UI] Set Error",j="[UI] Remove Error",_="[UI] Start loading",y="[UI] Finish loading",O="[Notes] New note",N="[Notes] Set active note",w="[Notes] Load note",x="[Notes] Upadate note",k="[Notes] Delete note",S="[Notes] Logout cleaning",C=a(27);a(168),a(74);C.a.initializeApp({apiKey:"AIzaSyAMNzqLqWmXonTF3Ya34jFzibBScDhrtls",authDomain:"react-journal-13781.firebaseapp.com",projectId:"react-journal-13781",storageBucket:"react-journal-13781.appspot.com",messagingSenderId:"857911536643",appId:"1:857911536643:web:7f4510d581702132c2f236"});var I=C.a.firestore(),A=new C.a.auth.GoogleAuthProvider,P=function(e){return{type:g,payload:e}},L=function(){return{type:y}},D=a(21),R=a.n(D),U=function(){var e=Object(s.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.collection("".concat(t,"/journal/notes")).get();case 2:return a=e.sent,n=[],a.forEach((function(e){n.push(Object(b.a)({id:e.id},e.data()))})),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(s.a)(l.a.mark((function e(t){var a,n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.cloudinary.com/v1_1/alejo-jpe/upload",(a=new FormData).append("upload_preset","react-journal"),a.append("file",t),e.prev=4,e.next=7,fetch("https://api.cloudinary.com/v1_1/alejo-jpe/upload",{method:"POST",body:a});case 7:if(!(n=e.sent).ok){e.next=15;break}return e.next=11,n.json();case 11:return r=e.sent,e.abrupt("return",r.secure_url);case 15:return e.next=17,n.json();case 17:throw e.sent;case 18:e.next=23;break;case 20:throw e.prev=20,e.t0=e.catch(4),e.t0;case 23:case"end":return e.stop()}}),e,null,[[4,20]])})));return function(t){return e.apply(this,arguments)}}(),q=function(e,t){return{type:N,payload:Object(b.a)({id:e},t)}},z=function(e,t){return{type:O,payload:Object(b.a)({id:e},t)}},F=function(e){return function(){var t=Object(s.a)(l.a.mark((function t(a){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,U(e);case 2:n=t.sent,a(T(n));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},T=function(e){return{type:w,payload:e}},W=function(e){return function(){var t=Object(s.a)(l.a.mark((function t(a,n){var r,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n().auth.uid,e.url||delete e.url,delete(c=Object(b.a)({},e)).id,t.next=6,I.doc("".concat(r,"/journal/notes/").concat(e.id)).update(c);case 6:a(X(e.id,c)),R.a.fire("saved",e.title,"success");case 8:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()},X=function(e,t){return{type:x,payload:{id:e,note:Object(b.a)({id:e},t)}}},G=function(e){return{type:k,payload:e}},J=function(e,t){return{type:v,payload:{uid:e,displayName:t}}},M=function(e,t){return function(a){a({type:_}),C.a.auth().signInWithEmailAndPassword(e,t).then((function(e){var t=e.user;a(J(t.uid,t.displayName)),a(L())})).catch((function(e){console.log(e),a(L()),R.a.fire("Error",e.message,"error")}))}},K=function(){return{type:E}},V=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.ui})).loading,a=h({email:"",password:""}),n=Object(m.a)(a,2),c=n[0],o=n[1],u=c.email,l=c.password;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"auth-container",className:"auth__box-container animate__animated animate__fadeInRightBig"},r.a.createElement("h3",{className:"auth__title"},"login"),r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e(M(u,l))}},r.a.createElement("input",{type:"text",placeholder:"Email",name:"email",className:"auth__input",autoComplete:"off",value:u,onChange:o}),r.a.createElement("input",{type:"password",placeholder:"Password",name:"password",className:"auth__input",value:l,onChange:o}),r.a.createElement("button",{type:"Submit",className:"btn btn-primary btn-block",disabled:t},"Login"),r.a.createElement("div",{className:"auth__social-networks"},r.a.createElement("p",null,"Login with social networks"),r.a.createElement("div",{className:"google-btn",onClick:function(){e((function(e){C.a.auth().signInWithPopup(A).then((function(t){var a=t.user;e(J(a.uid,a.displayName))}))}))}},r.a.createElement("div",{className:"google-icon-wrapper"},r.a.createElement("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"google button"})),r.a.createElement("p",{className:"btn-text"},r.a.createElement("b",null,"Sign in with google")))),r.a.createElement(p.b,{to:"/auth/register",className:"link"},"Create a new account"))))},Y=a(61),H=a.n(Y),Q=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.ui})).msgError;console.log(t);var a=h({name:"",email:"",password:"",password2:""}),n=Object(m.a)(a,2),c=n[0],o=n[1],u=c.name,d=c.email,f=c.password,b=c.password2,v=function(){return 0===u.trim().length?(e(P("Name is required")),!1):H.a.isEmail(d)?f!==b||f.length<5?(e(P("Password should be at least 6 characters and match each other")),!1):(e({type:j}),!0):(e(P("Email is required")),!1)},E="animate__fadeInRightBig";return r.a.createElement("div",{id:"auth-container",className:"auth__box-container animate__animated ".concat(E)},r.a.createElement("h3",{className:"auth__title"},"Register"),r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),v()&&e(function(e,t,a){return function(n){C.a.auth().createUserWithEmailAndPassword(e,t).then(function(){var e=Object(s.a)(l.a.mark((function e(t){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.user,e.next=3,r.updateProfile({displayName:a});case 3:n(J(r.uid,r.displayName));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e),R.a.fire("Error",e.message,"error")}))}}(d,f,u))}},t&&r.a.createElement("div",{className:"auth__alert-error"},t),r.a.createElement("input",{type:"text",placeholder:"Name",name:"name",className:"auth__input",autoComplete:"off",value:u,onChange:o}),r.a.createElement("input",{type:"text",placeholder:"Email",name:"email",className:"auth__input",autoComplete:"off",value:d,onChange:o}),r.a.createElement("input",{type:"password",placeholder:"Password",name:"password",className:"auth__input",value:f,onChange:o}),r.a.createElement("input",{type:"password",placeholder:"Confirm password",name:"password2",className:"auth__input",value:b,onChange:o}),r.a.createElement("button",{type:"Submit",className:"btn btn-primary btn-block mb-5"},"Register"),r.a.createElement(p.b,{to:"/auth/login",className:"link",onClick:function(){E="animate__fadeOutRightBig"}},"Already register?")))},Z=function(){return r.a.createElement("div",{className:"auth__main"},r.a.createElement(d.d,null,r.a.createElement(d.b,{exact:!0,path:"/auth/login",component:V}),r.a.createElement(d.b,{exact:!0,path:"/auth/register",component:Q}),r.a.createElement(d.a,{to:"/auth/login"})))},$=a(62),ee=a.n($),te=function(e){var t=e.id,a=e.date,n=e.title,c=e.body,o=e.url,u=ee()(a),l=Object(i.b)();return r.a.createElement("div",{className:"journal__entry pointer animate__animated animate__flipInX",onClick:function(){l(q(t,{date:a,title:n,body:c,url:o}))}},o&&r.a.createElement("div",{className:"journal__entry-picture",style:{backgroundSize:"cover",backgroundImage:"url(".concat(o,")")}}),r.a.createElement("div",{className:"journal__body-entry"},r.a.createElement("p",{className:"journal__entry-title"},n),r.a.createElement("p",{className:"journal__entry-body"},c)),r.a.createElement("div",{className:"journal__entry-date-box"},r.a.createElement("span",null,u.format("dddd")),r.a.createElement("h4",null,u.format("Do"))))},ae=function(){var e=Object(i.c)((function(e){return e.notes})).notes;return r.a.createElement("div",{className:"journal__entries"},e.map((function(e){return r.a.createElement(te,Object.assign({key:e.id},e))})))},ne=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.auth})).name;return r.a.createElement("aside",{className:"journal__sidebar"},r.a.createElement("div",{className:"journal__sidebar-navbar"},r.a.createElement("h3",{className:"mt-5"},r.a.createElement("i",{className:"far fa-moon"}),r.a.createElement("span",null,t)),r.a.createElement("button",{className:"btn",onClick:function(){e(function(){var e=Object(s.a)(l.a.mark((function e(t,a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.auth().signOut();case 2:t(K()),t({type:S,payload:{active:void 0,notes:void 0}});case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}())}},"Logout")),r.a.createElement("div",{className:"journal__new-entry"},r.a.createElement("i",{className:"far fa-calendar-plus fa-5x",onClick:function(){e(function(){var e=Object(s.a)(l.a.mark((function e(t,a){var n,r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a().auth.uid,r={title:"",body:"",date:(new Date).getTime()},e.next=4,I.collection("".concat(n,"/journal/notes")).add(r);case 4:c=e.sent,t(q(c.id,r)),t(z(c.id,r));case 7:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}())}}),r.a.createElement("p",{className:"mt-5"},"New entry")),r.a.createElement(ae,null))},re=function(){return r.a.createElement("div",{className:"nothing__main-content"},r.a.createElement("p",null,"Select something",r.a.createElement("br",null),"create entry!"),r.a.createElement("i",{className:"far fa-star fa-4x mt-5"}))},ce=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.notes})).active;return r.a.createElement("div",{className:"notes__appbar"},r.a.createElement("span",null,"28 de Agosto 2020"),r.a.createElement("input",{id:"fileSelector",type:"file",name:"file",style:{display:"none"},onChange:function(t){var a=t.target.files[0];a&&e(function(e){return function(){var t=Object(s.a)(l.a.mark((function t(a,n){var r,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n().notes.active,R.a.fire({title:"Uploading...",text:"Please wait...",allowOutsideClick:!1,didOpen:function(){R.a.showLoading()}}),t.next=4,B(e);case 4:c=t.sent,r.url=c,a(W(r)),R.a.close();case 8:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()}(a))}}),r.a.createElement("div",null,r.a.createElement("button",{className:"btn",onClick:function(){document.querySelector("#fileSelector").click()}},"Picture"),r.a.createElement("button",{className:"btn",onClick:function(){e(W(t))}},"Save")))},oe=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.notes})).active,a=h(t),c=Object(m.a)(a,3),o=c[0],u=c[1],d=c[2],p=o.body,f=o.title,v=o.id,E=Object(n.useRef)(t.id);Object(n.useEffect)((function(){t.id!==E.current&&(d(t),E.current=t.id)}),[t,d]),Object(n.useEffect)((function(){e(q(o.id,Object(b.a)({},o)))}),[o,e]);return r.a.createElement("div",{className:"notes__main-content"},r.a.createElement(ce,null),r.a.createElement("div",{className:"notes__content"},r.a.createElement("input",{type:"text",placeholder:"Some awesome",className:"notes__title-input",name:"title",autoComplete:"off",value:f,onChange:u}),r.a.createElement("textarea",{placeholder:"What happened today?",className:"notes__textarea",name:"body",value:p,onChange:u}),t.url&&r.a.createElement("div",{className:"notes__image"},r.a.createElement("img",{src:t.url,alt:"img"}))),r.a.createElement("button",{className:"btn btn-danger",onClick:function(){e(function(e){return function(){var t=Object(s.a)(l.a.mark((function t(a,n){var r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n().auth.uid,t.next=3,I.doc("".concat(r,"/journal/notes/").concat(e)).delete();case 3:a(G(e));case 4:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()}(v))}},"Delete"))},ie=function(){var e=Object(i.c)((function(e){return e.notes})).active;return r.a.createElement("div",{className:"journal__main-content ".concat("animate__animated animate__fadeIn animate__faster")},r.a.createElement(ne,null),r.a.createElement("main",null,e?r.a.createElement(oe,null):r.a.createElement(re,null)))},ue=a(35),le=function(e){var t=e.isAuthenticated,a=e.component,n=Object(ue.a)(e,["isAuthenticated","component"]);return localStorage.setItem("lastPath",n.location.pathname),r.a.createElement(d.b,Object.assign({},n,{component:function(e){return t?r.a.createElement(a,e):r.a.createElement(d.a,{to:"/auth/login"})}}))},se=function(e){var t=e.isAuthenticated,a=e.component,n=Object(ue.a)(e,["isAuthenticated","component"]);return r.a.createElement(d.b,Object.assign({},n,{component:function(e){return t?r.a.createElement(d.a,{to:"/"}):r.a.createElement(a,e)}}))},me=function(){return r.a.createElement("div",{className:"loading_background animate__fadeIn"},r.a.createElement("h1",{className:"loading_title"},"Loading"))},de=function(){var e=Object(i.b)(),t=Object(n.useState)(!0),a=Object(m.a)(t,2),c=a[0],o=a[1],u=Object(n.useState)(!1),f=Object(m.a)(u,2),b=f[0],h=f[1];return Object(n.useEffect)((function(){C.a.auth().onAuthStateChanged(function(){var t=Object(s.a)(l.a.mark((function t(a){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(null===a||void 0===a?void 0:a.uid)?(e(J(a.uid,a.displayName)),h(!0),e(F(a.uid))):h(!1),o(!1);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}),[e,o,h]),c?r.a.createElement(me,null):r.a.createElement(p.a,null,r.a.createElement("div",null,r.a.createElement(d.d,null,r.a.createElement(se,{path:"/auth",component:Z,isAuthenticated:b}),r.a.createElement(le,{exact:!0,isAuthenticated:b,path:"/",component:ie}),r.a.createElement(d.a,{to:"/auth/login"}))))},pe=a(28),fe=a(63),be={loading:!1,msgError:null},he=a(42),ve={notes:[],active:null},Ee="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||pe.c,ge=Object(pe.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return{uid:t.payload.uid,name:t.payload.displayName};case E:return{};default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(b.a)(Object(b.a)({},e),{},{msgError:t.payload});case j:return Object(b.a)(Object(b.a)({},e),{},{msgError:null});case _:return Object(b.a)(Object(b.a)({},e),{},{loading:!0});case y:return Object(b.a)(Object(b.a)({},e),{},{loading:!1});default:return e}},notes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(b.a)(Object(b.a)({},e),{},{active:Object(b.a)({},t.payload)});case O:return Object(b.a)(Object(b.a)({},e),{},{notes:[t.payload].concat(Object(he.a)(e.notes))});case w:return Object(b.a)(Object(b.a)({},e),{},{notes:Object(he.a)(t.payload)});case x:return Object(b.a)(Object(b.a)({},e),{},{notes:e.notes.map((function(e){return e.id===t.payload.id?t.payload.note:e}))});case k:return Object(b.a)(Object(b.a)({},e),{},{active:null,notes:e.notes.filter((function(e){return e.id!==t.payload}))});case S:return Object(b.a)(Object(b.a)({},e),{},{notes:[],active:null});default:return e}}}),je=Object(pe.d)(ge,Ee(Object(pe.a)(fe.a))),_e=function(){return r.a.createElement(i.a,{store:je},r.a.createElement(de,null))};a(166);o.a.render(r.a.createElement(_e,null),document.getElementById("root"))},64:function(e,t,a){e.exports=a(167)}},[[64,1,2]]]);
//# sourceMappingURL=main.40f00a4e.chunk.js.map