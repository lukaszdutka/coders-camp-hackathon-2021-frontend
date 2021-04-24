(this["webpackJsonpcoders-camp-hackathon-2021-frontend"]=this["webpackJsonpcoders-camp-hackathon-2021-frontend"]||[]).push([[0],{139:function(e,t,r){},140:function(e,t,r){},250:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),i=r(12),c=r.n(i),s=(r(139),r(295)),o=r(57),l=(r(140),r(13)),u=r(2),d=Object(n.createContext)(),j=function(e){var t=e.children,r=Object(n.useState)(localStorage.getItem("token")||""),a=Object(l.a)(r,2),i=a[0],c=a[1],s=Object(n.useState)(localStorage.getItem("profile")||null),o=Object(l.a)(s,2),j=o[0],m=o[1];return Object(u.jsx)(d.Provider,{value:{token:i,setNewToken:function(e){c(e),localStorage.setItem("token",e)},clearToken:function(){c(""),localStorage.removeItem("token")},profile:j,setNewProfile:function(e){m(e),localStorage.setItem("profile",JSON.stringify(e))},clearProfile:function(){m(null),localStorage.removeItem("profile")}},children:t})},m=r(128),h=Object(m.a)({palette:{primary:{light:"#a269f8",main:"#6e3bc4",dark:"#380992"},secondary:{light:"#c4f76d",main:"#91c43b",dark:"#5f9300"}}}),b=r(282),p=r(285),O=r(286),x=r(287),f=r(288),g=r(122),v=r.n(g),w=r(121),C=r.n(w),S=r(284),k=Object(b.a)((function(e){return{rootNav:{flexGrow:1},titleNav:{flexGrow:1,marginLeft:"20px"},welcomeTitle:{marginRight:"20px"}}})),y=function(){var e=Object(n.useContext)(d),t=e.token,r=e.profile,a=e.clearToken,i=e.clearProfile,c=k(),s=Object(S.a)("(min-width:600px)");return Object(u.jsx)("div",{className:c.rootNav,children:Object(u.jsx)(p.a,{position:"static",children:Object(u.jsxs)(O.a,{children:[Object(u.jsx)(C.a,{}),Object(u.jsx)(x.a,{className:c.titleNav,variant:"h6",children:"Questio"}),t&&Object(u.jsxs)(u.Fragment,{children:[r&&Object(u.jsx)(x.a,{variant:"h6",noWrap:!0,className:c.welcomeTitle,children:r.name}),Object(u.jsx)(f.a,{variant:"contained",color:"primary",startIcon:Object(u.jsx)(v.a,{}),onClick:function(){i(),a()},children:s&&"Log out"})]})]})})})},N=r(14),I=r(294),E=r(289),P=r(296),T=r(298),q=r(27),A=r.n(q),F=r(43),L=r(292),J=r(293),M=r(35),U=r(75),z=r(297),D=r(290),R=r(291),W=function(e){var t=e.id,r=e.name,n=e.errors,a=e.onChange;return Object(u.jsxs)(E.a,{fullWidth:!0,children:[Object(u.jsx)(z.a,{htmlFor:t,children:"Email"}),Object(u.jsx)(D.a,{type:"email",error:!!n,id:t,name:r,onChange:a,"aria-describedby":"email-input-field"}),Object(u.jsx)(R.a,{id:"FormInputHelperText",children:n||""})]})},G=function(e){var t=e.id,r=e.errors,n=e.name,a=e.onChange;return Object(u.jsxs)(E.a,{fullWidth:!0,children:[Object(u.jsx)(z.a,{htmlFor:t,children:"Password"}),Object(u.jsx)(D.a,{type:"password",error:!!r,id:t,name:n,onChange:a,"aria-describedby":"password-input-field"}),Object(u.jsx)(R.a,{id:"FormInputHelperText",children:r||""})]})},H=r(10),B=r(7),V=function(){function e(){Object(H.a)(this,e)}return Object(B.a)(e,null,[{key:"login",value:function(){var t=Object(F.a)(A.a.mark((function t(r){var n,a;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(e.apiUrl+"/login",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});case 3:return n=t.sent,t.next=6,n.json();case 6:return a=t.sent,n.ok||(a.error=!0),t.abrupt("return",{token:a.token,profile:a.user});case 11:t.prev=11,t.t0=t.catch(0),e.handleError(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()},{key:"register",value:function(){var t=Object(F.a)(A.a.mark((function t(r){var n,a;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(e.apiUrl+"/register",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});case 3:return n=t.sent,t.next=6,n.json();case 6:return a=t.sent,n.ok||(a.error=!0),t.abrupt("return",a);case 11:t.prev=11,t.t0=t.catch(0),e.handleError(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()},{key:"handleError",value:function(e){console.log(e)}}]),e}();V.apiUrl="https://camp-hackathon-2021-backend.herokuapp.com/api/users";var Z=function(){var e=Object(N.g)(),t=Object(n.useContext)(d),r=t.setNewToken,a=t.setNewProfile,i=Object(n.useState)(""),c=Object(l.a)(i,2),s=c[0],o=c[1],j=Object(n.useState)(!1),m=Object(l.a)(j,2),h=m[0],b=m[1],p=M.a({email:M.b("Enter email").email("Enter a valid email").required("Email is required"),password:M.b("Enter your password").required("Password is required").min(8,"Password should be of minimum 8 characters length").max(20,"Password can't be longer than 20 characters.").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,"Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character")}),O=function(){var t=Object(F.a)(A.a.mark((function t(n,i){var c,s;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=i.setSubmitting,o(""),h||b((function(){return!0})),t.next=5,V.login(n);case 5:(s=t.sent).error?(401===s.statusCode?o("Invalid credentials"):o("Something went wrong"),c(!1)):(a(s.profile),r(s.token),c(!1),e.push("/profile")),b((function(){return!1}));case 8:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),x=Object(U.a)({initialValues:{email:"",password:""},validationSchema:p,onSubmit:O});return Object(u.jsx)("form",{className:"login",onSubmit:x.handleSubmit,children:Object(u.jsxs)(L.a,{children:[Object(u.jsx)(W,{errors:x.errors.email,id:"email",name:"email",value:x.values.email,onChange:x.handleChange}),Object(u.jsx)(G,{errors:x.errors.password,id:"password",name:"password",value:x.values.password,onChange:x.handleChange}),Object(u.jsx)("div",{id:"formError",children:s}),Object(u.jsxs)("div",{children:[Object(u.jsx)(f.a,{variant:"outlined",color:"primary",type:"submit",disabled:x.isSubmitting,children:"Login"}),h&&Object(u.jsx)(J.a,{size:24})]})]})})},$=function(e){var t=e.id,r=e.name,n=e.errors,a=e.onChange;return Object(u.jsxs)(E.a,{fullWidth:!0,children:[Object(u.jsx)(z.a,{htmlFor:t,children:"Name"}),Object(u.jsx)(D.a,{error:!!n,id:t,name:r,onChange:function(e){return a(e)},"aria-describedby":"email-input-field"}),Object(u.jsx)(R.a,{children:n||""})]})},Q=function(e){var t=e.setAction,r=Object(n.useState)(""),a=Object(l.a)(r,2),i=a[0],c=a[1],s=Object(n.useState)(!1),o=Object(l.a)(s,2),d=o[0],j=o[1],m=M.a({email:M.b("Enter email").email("Enter a valid email").required("Email is required"),password:M.b("Enter your password").required("Password is required").min(8,"Password should be of minimum 8 characters length").max(20,"Password can't be longer than 20 characters.").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,"Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"),name:M.b("Enter your name").required("Name is required")}),h=function(){var e=Object(F.a)(A.a.mark((function e(r,n){var a,i;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.setSubmitting,c(""),d||j((function(){return!0})),e.next=5,V.register(r);case 5:(i=e.sent).error?(401===i.statusCode?c("Invalid credentials"):c("Something went wrong"),a(!1)):(a(!1),c("Account successfully created!"),setTimeout((function(){return t("login")}),2e3)),j((function(){return!1}));case 8:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),b=Object(U.a)({initialValues:{email:"",password:""},validationSchema:m,onSubmit:h});return Object(u.jsx)("form",{className:"register",onSubmit:b.handleSubmit,children:Object(u.jsxs)(L.a,{children:[Object(u.jsx)($,{errors:b.errors.name,id:"name",name:"name",value:b.values.name,onChange:b.handleChange}),Object(u.jsx)(W,{errors:b.errors.email,id:"email",name:"email",value:b.values.email,onChange:b.handleChange}),Object(u.jsx)(G,{errors:b.errors.password,id:"password",name:"password",value:b.values.password,onChange:b.handleChange}),Object(u.jsx)("div",{id:"formError",children:i}),Object(u.jsxs)("div",{children:[Object(u.jsx)(f.a,{variant:"outlined",color:"primary",type:"submit",disabled:b.isSubmitting,children:"Register"}),d&&Object(u.jsx)(J.a,{size:24})]})]})})},K=r.p+"static/media/homeImg.05c2a606.jpg",X=Object(b.a)((function(e){return{loginDiv:{width:"80%",margin:"auto"},loginImg:{border:"6px solid #91C43B",borderRadius:"10%",marginTop:"25px"},action:{marginTop:"30px"}}})),Y=function(){var e=X(),t=Object(n.useState)("login"),r=Object(l.a)(t,2),a=r[0],i=r[1];return Object(u.jsxs)(I.a,{container:!0,spacing:5,alignItems:"center",style:{margin:0,width:"100%"},children:[Object(u.jsx)(I.a,{item:!0,md:6,xs:12,children:Object(u.jsxs)("div",{className:e.loginDiv,children:["login"===a?Object(u.jsx)(Z,{}):Object(u.jsx)(Q,{setAction:i}),Object(u.jsx)("div",{className:e.action,children:Object(u.jsx)(E.a,{children:Object(u.jsxs)(P.a,{value:a,onChange:function(e){i(e.target.value)},children:[Object(u.jsx)(T.a,{value:"login",children:"Log in"}),Object(u.jsx)(T.a,{value:"register",children:"Register"})]})})})]})}),Object(u.jsx)(I.a,{item:!0,md:6,xs:12,children:Object(u.jsxs)("div",{className:e.loginDiv,children:[Object(u.jsx)(x.a,{align:"center",variant:"h4",children:"No to distraction, yes to motivation!"}),Object(u.jsx)("img",{src:K,alt:"homeImage",width:"95%",className:e.loginImg})]})})]})},_=function(){return Object(u.jsx)("div",{children:"Profil"})},ee=function(e){var t=e.path,r=e.exact,a=void 0!==r&&r,i=e.component;return Object(n.useContext)(d).token?Object(u.jsx)(N.b,{path:t,exact:a,component:i}):Object(u.jsx)(N.a,{to:"/"})},te=Object(b.a)((function(e){return{rootMain:{flexGrow:1}}})),re=function(){var e=Object(n.useContext)(d).token,t=te();return Object(u.jsx)("main",{className:t.rootMain,children:Object(u.jsxs)(N.d,{children:[Object(u.jsx)(N.b,{exact:!0,path:"/",render:function(){return e?Object(u.jsx)(_,{}):Object(u.jsx)(Y,{})}}),Object(u.jsx)(ee,{exact:!0,path:"/profile",component:_})]})})},ne=Object(b.a)((function(e){return{rootApp:{minHeight:"100vh",width:"100vw",display:"flex",flexDirection:"column"}}})),ae=function(){var e=ne();return Object(u.jsx)(j,{children:Object(u.jsx)(s.a,{theme:h,children:Object(u.jsx)(o.a,{basename:"coders-camp-hackathon-2021-frontend",children:Object(u.jsxs)("div",{className:e.rootApp,children:[Object(u.jsx)(y,{}),Object(u.jsx)(re,{})]})})})})};c.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(ae,{})}),document.getElementById("root"))}},[[250,1,2]]]);
//# sourceMappingURL=main.11eab8fb.chunk.js.map