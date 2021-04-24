(this["webpackJsonpcoders-camp-hackathon-2021-frontend"]=this["webpackJsonpcoders-camp-hackathon-2021-frontend"]||[]).push([[0],{153:function(e,t,n){},154:function(e,t,n){},264:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(13),i=n.n(c),o=(n(153),n(316)),s=n(51),l=(n(154),n(10)),u=n(2),d=Object(r.createContext)(),j=function(e){var t=e.children,n=Object(r.useState)(localStorage.getItem("token")||""),a=Object(l.a)(n,2),c=a[0],i=a[1],o=Object(r.useState)(localStorage.getItem("profile")||null),s=Object(l.a)(o,2),j=s[0],h=s[1];return Object(u.jsx)(d.Provider,{value:{token:c,setNewToken:function(e){i(e),localStorage.setItem("token",e)},clearToken:function(){i(""),localStorage.removeItem("token")},profile:j,setNewProfile:function(e){h(e),localStorage.setItem("profile",JSON.stringify(e))},clearProfile:function(){h(null),localStorage.removeItem("profile")}},children:t})},h=n(142),p=Object(h.a)({palette:{primary:{light:"#a269f8",main:"#6e3bc4",dark:"#380992"},secondary:{light:"#c4f76d",main:"#91c43b",dark:"#5f9300"}}}),b=n(295),m=n(298),O=n(299),f=n(84),x=n(300),v=n(132),g=n.n(v),w=n(131),y=n.n(w),k=n(297),C=Object(b.a)((function(e){return{rootNav:{},titleNav:{flexGrow:1,marginLeft:"20px"},welcomeTitle:{marginRight:"20px"}}})),S=function(){var e=Object(r.useContext)(d),t=e.token,n=e.profile,a=e.clearToken,c=e.clearProfile,i=C(),o=Object(k.a)("(min-width:600px)");return Object(u.jsx)("div",{className:i.rootNav,children:Object(u.jsx)(m.a,{position:"static",children:Object(u.jsxs)(O.a,{children:[Object(u.jsx)(y.a,{}),Object(u.jsx)(f.a,{className:i.titleNav,variant:"h6",children:"Questio"}),t&&Object(u.jsxs)(u.Fragment,{children:[n&&Object(u.jsx)(f.a,{variant:"h6",noWrap:!0,className:i.welcomeTitle,children:n.name}),Object(u.jsx)(x.a,{variant:"contained",color:"secondary",startIcon:Object(u.jsx)(g.a,{}),onClick:function(){c(),a()},children:o&&"Log out"})]})]})})})},N=n(15),E=n(314),T=n(301),I=n(317),P=n(315),A=n(14),q=n.n(A),U=n(24),z=n(312),B=n(313),J=n(40),F=n(83),L=n(318),G=n(302),H=n(303),M=function(e){var t=e.id,n=e.name,r=e.errors,a=e.onChange;return Object(u.jsxs)(T.a,{fullWidth:!0,children:[Object(u.jsx)(L.a,{htmlFor:t,children:"Email"}),Object(u.jsx)(G.a,{type:"email",error:!!r,id:t,name:n,onChange:a,"aria-describedby":"email-input-field"}),Object(u.jsx)(H.a,{id:"FormInputHelperText",children:r||""})]})},D=function(e){var t=e.id,n=e.errors,r=e.name,a=e.onChange;return Object(u.jsxs)(T.a,{fullWidth:!0,children:[Object(u.jsx)(L.a,{htmlFor:t,children:"Password"}),Object(u.jsx)(G.a,{type:"password",error:!!n,id:t,name:r,onChange:a,"aria-describedby":"password-input-field"}),Object(u.jsx)(H.a,{id:"FormInputHelperText",children:n||""})]})},R=n(267),W=(n(304),n(319),n(307)),Q=(n(308),n(309)),_=n(310),V=n(311),Z=(n(138),n(140),n(12)),$=n(9),K=function(){function e(){Object(Z.a)(this,e)}return Object($.a)(e,null,[{key:"login",value:function(){var t=Object(U.a)(q.a.mark((function t(n){var r,a;return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(e.apiUrl+"/login",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 3:return r=t.sent,t.next=6,r.json();case 6:return a=t.sent,t.abrupt("return",{token:a.token,profile:a.user});case 10:t.prev=10,t.t0=t.catch(0),e.handleError(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()},{key:"register",value:function(){var t=Object(U.a)(q.a.mark((function t(n){var r,a;return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(e.apiUrl+"/register",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 3:return r=t.sent,t.next=6,r.json();case 6:return a=t.sent,t.abrupt("return",a);case 10:t.prev=10,t.t0=t.catch(0),e.handleError(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()},{key:"handleError",value:function(e){console.log(e)}}]),e}();K.apiUrl="https://camp-hackathon-2021-backend.herokuapp.com/api/users";var X=function(){var e=Object(N.g)(),t=Object(r.useContext)(d),n=t.setNewToken,a=t.setNewProfile,c=Object(r.useState)(""),i=Object(l.a)(c,2),o=i[0],s=i[1],j=Object(r.useState)(!1),h=Object(l.a)(j,2),p=h[0],b=h[1],m=J.a({email:J.b("Enter email").email("Enter a valid email").required("Email is required"),password:J.b("Enter your password").required("Password is required").min(8,"Password should be of minimum 8 characters length").max(20,"Password can't be longer than 20 characters.").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,"Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character")}),O=function(){var t=Object(U.a)(q.a.mark((function t(r,c){var i,o;return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=c.setSubmitting,s(""),p||b((function(){return!0})),t.next=5,K.login(r);case 5:(o=t.sent).error?(401===o.statusCode?s("Invalid credentials"):s("Something went wrong"),i(!1)):(a(o.profile),n(o.token),i(!1),e.push("/profile")),b((function(){return!1}));case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),f=Object(F.a)({initialValues:{email:"",password:""},validationSchema:m,onSubmit:O});return Object(u.jsx)("form",{className:"login",onSubmit:f.handleSubmit,children:Object(u.jsxs)(z.a,{children:[Object(u.jsx)(M,{errors:f.errors.email,id:"email",name:"email",value:f.values.email,onChange:f.handleChange}),Object(u.jsx)(D,{errors:f.errors.password,id:"password",name:"password",value:f.values.password,onChange:f.handleChange}),Object(u.jsx)("div",{id:"formError",children:o}),Object(u.jsxs)("div",{children:[Object(u.jsx)(x.a,{variant:"outlined",color:"primary",type:"submit",disabled:f.isSubmitting,children:"Login"}),p&&Object(u.jsx)(B.a,{size:24})]})]})})},Y=function(e){var t=e.id,n=e.name,r=e.errors,a=e.onChange;return Object(u.jsxs)(T.a,{fullWidth:!0,children:[Object(u.jsx)(L.a,{htmlFor:t,children:"Name"}),Object(u.jsx)(G.a,{error:!!r,id:t,name:n,onChange:function(e){return a(e)},"aria-describedby":"email-input-field"}),Object(u.jsx)(H.a,{children:r||""})]})},ee=function(e){var t=e.setAction,n=Object(r.useState)(""),a=Object(l.a)(n,2),c=a[0],i=a[1],o=Object(r.useState)(!1),s=Object(l.a)(o,2),d=s[0],j=s[1],h=J.a({email:J.b("Enter email").email("Enter a valid email").required("Email is required"),password:J.b("Enter your password").required("Password is required").min(8,"Password should be of minimum 8 characters length").max(20,"Password can't be longer than 20 characters.").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,"Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"),name:J.b("Enter your name").required("Name is required")}),p=function(){var e=Object(U.a)(q.a.mark((function e(n,r){var a,c;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.setSubmitting,i(""),d||j((function(){return!0})),e.next=5,K.register(n);case 5:(c=e.sent).error?(401===c.statusCode?i("Invalid credentials"):i("Something went wrong"),a(!1)):(a(!1),i("Account successfully created!"),setTimeout((function(){return t("login")}),2e3)),j((function(){return!1}));case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),b=Object(F.a)({initialValues:{email:"",password:""},validationSchema:h,onSubmit:p});return Object(u.jsx)("form",{className:"register",onSubmit:b.handleSubmit,children:Object(u.jsxs)(z.a,{children:[Object(u.jsx)(Y,{errors:b.errors.name,id:"name",name:"name",value:b.values.name,onChange:b.handleChange}),Object(u.jsx)(M,{errors:b.errors.email,id:"email",name:"email",value:b.values.email,onChange:b.handleChange}),Object(u.jsx)(D,{errors:b.errors.password,id:"password",name:"password",value:b.values.password,onChange:b.handleChange}),Object(u.jsx)("div",{id:"formError",children:c}),Object(u.jsxs)("div",{children:[Object(u.jsx)(x.a,{variant:"outlined",color:"primary",type:"submit",disabled:b.isSubmitting,children:"Register"}),d&&Object(u.jsx)(B.a,{size:24})]})]})})},te=n.p+"static/media/homeImg.05c2a606.jpg",ne=Object(b.a)((function(e){return{loginDiv:{width:"80%",margin:"auto"},loginImg:{border:"6px solid #91C43B",borderRadius:"10%",marginTop:"25px"},action:{marginTop:"30px"}}})),re=function(){var e=ne(),t=Object(r.useState)("login"),n=Object(l.a)(t,2),a=n[0],c=n[1],i=Object(N.g)();return Object(u.jsxs)(E.a,{container:!0,spacing:5,alignItems:"center",style:{margin:0,width:"100%"},children:[Object(u.jsxs)(E.a,{item:!0,md:6,xs:12,children:[Object(u.jsxs)("div",{className:e.loginDiv,children:["login"===a?Object(u.jsx)(X,{}):Object(u.jsx)(ee,{setAction:c}),Object(u.jsx)("div",{className:e.action,children:Object(u.jsx)(T.a,{children:Object(u.jsxs)(I.a,{value:a,onChange:function(e){c(e.target.value)},children:[Object(u.jsx)(P.a,{value:"login",children:"Log in"}),Object(u.jsx)(P.a,{value:"register",children:"Register"})]})})})]}),Object(u.jsx)(x.a,{onClick:function(){return i.push("/mentor/question")},children:"Guzik"})]}),Object(u.jsx)(E.a,{item:!0,md:6,xs:12,children:Object(u.jsxs)("div",{className:e.loginDiv,children:[Object(u.jsx)(f.a,{align:"center",variant:"h4",children:"No to distraction, yes to motivation!"}),Object(u.jsx)("img",{src:te,alt:"homeImage",width:"95%",className:e.loginImg})]})})]})},ae=n(266),ce=function(){function e(){Object(Z.a)(this,e)}return Object($.a)(e,null,[{key:"getAllCollections",value:function(){var t=Object(U.a)(q.a.mark((function t(n){var r,a;return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(e.apiUrl,{method:"GET",mode:"cors",headers:{Authorization:"Bearer ".concat(n)}});case 3:return r=t.sent,t.next=6,r.json();case 6:return a=t.sent,t.abrupt("return",a);case 10:t.prev=10,t.t0=t.catch(0),e.handleError(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()},{key:"getCollectionById",value:function(){var t=Object(U.a)(q.a.mark((function t(n,r){var a,c;return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(e.apiUrl,"/").concat(n),{method:"GET",mode:"cors",headers:{Authorization:"Bearer ".concat(r)}});case 3:return a=t.sent,t.next=6,a.json();case 6:return c=t.sent,t.abrupt("return",{id:c._id,name:c.name,questions:c.questions});case 10:t.prev=10,t.t0=t.catch(0),e.handleError(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e,n){return t.apply(this,arguments)}}()},{key:"createCollection",value:function(){var t=Object(U.a)(q.a.mark((function t(n,r){var a;return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(e.apiUrl,{method:"POST",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(r)},body:JSON.stringify(n)});case 3:return a=t.sent,t.next=6,a.json();case 6:return t.abrupt("return",t.sent);case 9:t.prev=9,t.t0=t.catch(0),e.handleError(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e,n){return t.apply(this,arguments)}}()},{key:"updateCollectionName",value:function(){var t=Object(U.a)(q.a.mark((function t(n,r,a){var c;return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(e.apiUrl,"/").concat(n),{method:"PATCH",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(a)},body:JSON.stringify(r)});case 3:return c=t.sent,t.next=6,c.json();case 6:return t.abrupt("return",t.sent);case 9:t.prev=9,t.t0=t.catch(0),e.handleError(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e,n,r){return t.apply(this,arguments)}}()},{key:"addQuestionToCollection",value:function(){var t=Object(U.a)(q.a.mark((function t(n,r,a){var c;return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(e.apiUrl,"/").concat(n),{method:"PATCH",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(a)},body:JSON.stringify(r)});case 3:return c=t.sent,t.next=6,c.json();case 6:return t.abrupt("return",t.sent);case 9:t.prev=9,t.t0=t.catch(0),e.handleError(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e,n,r){return t.apply(this,arguments)}}()},{key:"handleError",value:function(e){console.log(e)}}]),e}();ce.apiUrl="https://camp-hackathon-2021-backend.herokuapp.com/api/collections";var ie=n(141),oe=n.n(ie),se=function(){var e=Object(r.useContext)(d).token,t=Object(r.useState)([]),n=Object(l.a)(t,2),a=n[0],c=n[1];function i(){return(i=Object(U.a)(q.a.mark((function e(t){var n;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t;case 2:(n=e.sent).error||c(n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function o(e){var t=e.currentTarget.value;console.log(t)}return Object(r.useEffect)((function(){!function(e){i.apply(this,arguments)}(ce.getAllCollections(e))}),[e]),Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(Q.a,{children:[Object(u.jsx)(f.a,{variant:"h6",children:"Collections of Questions"}),a.length?a.map((function(e){return console.log(e),Object(u.jsxs)(R.a,{children:[Object(u.jsx)(W.a,{primary:e.name}),Object(u.jsx)(_.a,{children:Object(u.jsx)(V.a,{color:"primary",edge:"end","aria-label":"edit",value:e._id,onClick:o,children:Object(u.jsx)(oe.a,{})})})]},e._id)})):Object(u.jsx)(B.a,{})]})})},le=function(){return Object(u.jsxs)(E.a,{container:!0,children:[Object(u.jsx)(E.a,{item:!0,xs:12,md:6}),Object(u.jsx)(E.a,{item:!0,xs:12,md:6,children:Object(u.jsx)(ae.a,{children:Object(u.jsx)(se,{})})})]})},ue=function(e){var t=e.path,n=e.exact,a=void 0!==n&&n,c=e.component;return Object(r.useContext)(d).token?Object(u.jsx)(N.b,{path:t,exact:a,component:c}):Object(u.jsx)(N.a,{to:"/"})},de=Object(b.a)((function(e){return{rootMain:{flexGrow:1}}})),je=function(){var e=Object(r.useContext)(d).token,t=de();return Object(u.jsx)("main",{className:t.rootMain,children:Object(u.jsxs)(N.d,{children:[Object(u.jsx)(N.b,{exact:!0,path:"/",render:function(){return e?Object(u.jsx)(le,{}):Object(u.jsx)(re,{})}}),Object(u.jsx)(ue,{exact:!0,path:"/profile",component:le})]})})},he=Object(b.a)((function(e){return{rootApp:{minHeight:"100vh",width:"100vw",display:"flex",flexDirection:"column"}}})),pe=function(){var e=he();return Object(u.jsx)(j,{children:Object(u.jsx)(o.a,{theme:p,children:Object(u.jsx)(s.a,{basename:"coders-camp-hackathon-2021-frontend",children:Object(u.jsxs)("div",{className:e.rootApp,children:[Object(u.jsx)(S,{}),Object(u.jsx)(je,{})]})})})})};i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(pe,{})}),document.getElementById("root"))}},[[264,1,2]]]);
//# sourceMappingURL=main.26a4e543.chunk.js.map