(this.webpackJsonphearo=this.webpackJsonphearo||[]).push([[0],{172:function(e,a,t){"use strict";t.r(a);var n,c,i,r=t(0),s=t.n(r),l=t(133),o=t.n(l),j=t(28),d=t(144),b=t(214),m=t(215),p=t(210),u=t(140),h=t(85),O=t(18),x=t(190),g=t(219),f=t(192),v=t(193),y=t(194),w=t(195),S=t(146),C=t(197),L=t(145),R=t(2),k=function(){return Object(R.jsxs)(x.a,{align:"center",justify:{base:"center",md:"space-around",xl:"space-between"},direction:{base:"column-reverse",md:"row"},wrap:"no-wrap",minH:"65vh",mb:16,children:[Object(R.jsxs)(g.b,{spacing:4,w:{base:"60%",sm:"60%",md:"60%"},align:["center","center","flex-start","flex-start"],children:[Object(R.jsx)(f.a,{size:"4xl",fontSize:"100",textAlign:["center","center","left","left"],children:"HEARO"}),Object(R.jsx)(v.a,{size:"lg",fontSize:"25",opacity:"0.8",fontWeight:"normal",lineHeight:1.5,textAlign:["center","center","left","left"],children:"Find quiet places to socialise in Sydney."}),Object(R.jsx)(y.a,{children:Object(R.jsx)(w.a,{href:"/search",children:Object(R.jsx)(S.a,{variant:"solid",colorScheme:"teal",size:"md",mt:5,type:"submit",children:"Search"})})})]}),Object(R.jsx)(C.a,{w:{base:"40%",sm:"40%",md:"40%"},mb:{base:12,md:0},children:Object(R.jsx)(L.a,{color:"#81e6d9",size:{base:200}})})]})},N=t(56),$=t.n(N),z=t(69),q=t(9),I=t(5),T=t(220),P=t(78),A=t(201),F=t(202),_=t(222),E=t(58),D=t(216),B=Object(D.a)(n||(n=Object(E.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n        username\n      }\n    }\n  }\n"]))),V=Object(D.a)(c||(c=Object(E.a)(["\n  mutation addUser($username: String!, $email: String!, $password: String!) {\n    addUser(username: $username, email: $email, password: $password) {\n      token\n      user {\n        _id\n        username\n      }\n    }\n  }\n"]))),H=Object(D.a)(i||(i=Object(E.a)(["\n  mutation addPlace(\n    $placeName: String!\n    $placeLocation: String!\n    $placeType: String!\n    $placeComment: String!\n    $placeRating: String!\n  ) {\n    addPlace(\n      placeName: $placeName\n      placeLocation: $placeLocation\n      placeType: $placeType\n      placeComment: $placeComment\n      placeRating: $placeRating\n    ) {\n      placeName\n      placeLocation\n    }\n  }\n"]))),M=t(97),Y=t(134),U=t(114),W=new(function(){function e(){Object(M.a)(this,e)}return Object(Y.a)(e,[{key:"getProfile",value:function(){return Object(U.a)(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!(!e||this.isTokenExpired(e))}},{key:"isTokenExpired",value:function(e){return Object(U.a)(e).exp<Date.now()/1e3&&(localStorage.removeItem("id_token"),!0)}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.reload()}}]),e}()),Q=function(e){var a=Object(r.useState)({email:"",password:""}),t=Object(I.a)(a,2),n=t[0],c=t[1],i=Object(_.a)(B),s=Object(I.a)(i,2),l=s[0],o=s[1],d=o.error,b=o.data,m=function(e){var a=e.target,t=a.name,i=a.value;c(Object(j.a)(Object(j.a)({},n),{},Object(q.a)({},t,i)))},p=function(){var e=Object(z.a)($.a.mark((function e(a){var t,i;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),console.log(n),e.prev=2,e.next=5,l({variables:Object(j.a)({},n)});case 5:t=e.sent,i=t.data,W.login(i.login.token),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.error(e.t0);case 13:c({email:"",password:""});case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(a){return e.apply(this,arguments)}}();return Object(R.jsxs)(C.a,{children:[b?Object(R.jsxs)(T.a,{status:"success",children:[Object(R.jsx)(T.c,{}),Object(R.jsx)(T.d,{mr:2,children:"Success!"}),Object(R.jsx)(T.b,{children:"You have logged in!"})]}):Object(R.jsxs)("form",{onSubmit:p,children:[Object(R.jsx)(f.a,{mb:10,children:"Login"}),Object(R.jsxs)(P.a,{id:"email",isRequired:!0,children:[Object(R.jsx)(A.a,{children:"Email"}),Object(R.jsx)(F.a,{placeholder:"email",name:"email",className:"form-input",type:"email",value:n.email,onChange:m})]}),Object(R.jsxs)(P.a,{mt:5,id:"password",isRequired:!0,children:[Object(R.jsx)(A.a,{children:"Password"}),Object(R.jsx)(F.a,{placeholder:"password",className:"form-input",name:"password",type:"password",value:n.password,onChange:m})]}),Object(R.jsx)(S.a,{variant:"solid",colorScheme:"teal",size:"md",mt:5,type:"submit",children:"Login"})]}),d&&Object(R.jsx)(v.a,{children:d.message})]})},J=function(){var e=Object(r.useState)({username:"",email:"",password:""}),a=Object(I.a)(e,2),t=a[0],n=a[1],c=Object(_.a)(V),i=Object(I.a)(c,2),s=i[0],l=i[1],o=l.error,d=l.data,b=function(e){var a=e.target,c=a.name,i=a.value;n(Object(j.a)(Object(j.a)({},t),{},Object(q.a)({},c,i)))},m=function(){var e=Object(z.a)($.a.mark((function e(a){var n,c;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),console.log(t),e.prev=2,e.next=5,s({variables:Object(j.a)({},t)});case 5:n=e.sent,c=n.data,W.login(c.addUser.token),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(a){return e.apply(this,arguments)}}();return Object(R.jsxs)(C.a,{children:[d?Object(R.jsxs)(T.a,{status:"success",children:[Object(R.jsx)(T.c,{}),Object(R.jsx)(T.d,{mr:2,children:"Success!"}),Object(R.jsx)(T.b,{children:"You have created an account!"})]}):Object(R.jsxs)("form",{onSubmit:m,children:[Object(R.jsx)(f.a,{mb:10,children:"Create an account"}),Object(R.jsxs)(P.a,{id:"name",isRequired:!0,children:[Object(R.jsx)(A.a,{children:"Name"}),Object(R.jsx)(F.a,{placeholder:"name",className:"form-input",name:"username",type:"text",onChange:b,value:t.name})]}),Object(R.jsxs)(P.a,{mt:5,id:"email",isRequired:!0,children:[Object(R.jsx)(A.a,{children:"Email"}),Object(R.jsx)(F.a,{placeholder:"email",className:"form-input",name:"email",type:"email",onChange:b,value:t.email})]}),Object(R.jsxs)(P.a,{mt:5,id:"password",isRequired:!0,children:[Object(R.jsx)(A.a,{children:"Password"}),Object(R.jsx)(F.a,{placeholder:"*****",className:"form-input",name:"password",type:"password",onChange:b,value:t.password})]}),Object(R.jsx)(S.a,{variant:"solid",colorScheme:"teal",size:"md",mt:5,type:"submit",children:"Signup"})]}),o&&Object(R.jsx)(T.a,{status:"error",children:Object(R.jsx)(T.b,{children:o.message})})]})},G=t(203),K=function(){return Object(R.jsx)("form",{children:Object(R.jsxs)(x.a,{align:"center",justify:"space-between",wrap:"wrap",w:"100%",children:[Object(R.jsx)(f.a,{mb:5,children:"Search for a quiet place in Sydney"}),Object(R.jsxs)(P.a,{id:"place",mt:5,children:[Object(R.jsx)(A.a,{children:"Type of place"}),Object(R.jsxs)(G.a,{placeholder:"Select type of place",children:[Object(R.jsx)("option",{children:"Restaurant"}),Object(R.jsx)("option",{children:"Bar"}),Object(R.jsx)("option",{children:"Pub"})]})]}),Object(R.jsxs)(P.a,{isRequired:!0,id:"rating",mt:5,children:[Object(R.jsx)(A.a,{children:"Rating"}),Object(R.jsxs)(G.a,{placeholder:"How loud?",children:[Object(R.jsx)("option",{children:"Quiet"}),Object(R.jsx)("option",{children:"Average"}),Object(R.jsx)("option",{children:"Bit Loud"}),Object(R.jsx)("option",{children:"Loud"}),Object(R.jsx)("option",{children:"Very Loud"}),Object(R.jsx)("option",{children:"Very Very Loud"})]})]}),Object(R.jsx)(S.a,{type:"submit",variant:"solid",colorScheme:"teal",size:"md",mt:5,children:"Submit"})]})})},X=t(204),Z=t(205),ee=t(213),ae=t(206),te=t(207);function ne(){var e=Object(X.a)(),a=e.isOpen,t=e.onOpen,n=e.onClose;return Object(R.jsx)(R.Fragment,{children:Object(R.jsxs)(C.a,{children:[Object(R.jsxs)(x.a,{h:16,alignItems:"center",justifyContent:"space-between",children:[Object(R.jsx)(Z.a,{size:"md",icon:a?Object(R.jsx)(ae.a,{}):Object(R.jsx)(te.a,{}),"aria-label":"Open Menu",display:{md:"none"},onClick:a?n:t}),Object(R.jsx)(g.a,{spacing:8,alignItems:"center",children:Object(R.jsx)(w.a,{href:"/",children:Object(R.jsx)(v.a,{fontSize:"sm",fontWeight:"bold",children:"HEARO"})})}),Object(R.jsxs)(x.a,{alignItems:"center",children:[W.loggedIn()?Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(w.a,{href:"/me",variant:"solid",colorScheme:"teal",size:"sm",mr:4,children:"Your Dashboard"}),Object(R.jsx)(w.a,{onClick:function(e){e.preventDefault(),W.logout()},children:Object(R.jsx)(S.a,{variant:"solid",colorScheme:"teal",size:"sm",mr:4,children:"Logout"})})]}):Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(w.a,{href:"/login",variant:"solid",colorScheme:"teal",size:"sm",mr:4,children:"Login"}),Object(R.jsx)(w.a,{href:"/signup",children:Object(R.jsx)(S.a,{variant:"solid",colorScheme:"teal",size:"sm",mr:4,children:"Signup"})})]}),Object(R.jsx)(ee.a,{children:Object(R.jsxs)(ee.d,{children:[Object(R.jsx)(ee.c,{children:"Link 1"}),Object(R.jsx)(ee.c,{children:"Link 2"}),Object(R.jsx)(ee.b,{}),Object(R.jsx)(ee.c,{children:"Link 3"})]})})]})]}),a?Object(R.jsx)(C.a,{pb:4,display:{md:"none"}}):null]})})}var ce,ie,re,se,le=function(){return Object(R.jsx)(x.a,{align:"center",justify:"space-between",wrap:"wrap",w:"100%",mt:10,children:Object(R.jsx)(v.a,{fontSize:"sm",fontWeight:"bold",children:"HEARO \xa9 2021"})})},oe=Object(D.a)(ce||(ce=Object(E.a)(["\n  query user($username: String!) {\n    user(username: $username) {\n      _id\n      username\n      email\n      places {\n        _id\n        placeName\n        placeLocation\n        createdAt\n      }\n    }\n  }\n"]))),je=(Object(D.a)(ie||(ie=Object(E.a)(["\n  query getPlaces {\n    places {\n      _id\n      placeName\n      placeLocation\n      createdAt\n    }\n  }\n"]))),Object(D.a)(re||(re=Object(E.a)(["\n  query getSinglePlace($placeId: ID!) {\n    place(placeId: $placeId) {\n      _id\n      placeName\n      placeLocation\n      createdAt\n    }\n  }\n"])))),de=Object(D.a)(se||(se=Object(E.a)(["\n  query me {\n    me {\n      _id\n      username\n      email\n      places {\n        _id\n        placeName\n        placeLocation\n        createdAt\n      }\n    }\n  }\n"]))),be=t(218),me=t(208),pe=t(209),ue=function(){var e=Object(r.useState)({placeName:"",placeRating:"",placeLocation:"",placeType:"",placeComment:""}),a=Object(I.a)(e,2),t=a[0],n=a[1],c=Object(_.a)(H),i=Object(I.a)(c,2),s=i[0],l=i[1],o=l.error,d=l.data,b=function(e){var a=e.target,c=a.name,i=a.value;n(Object(j.a)(Object(j.a)({},t),{},Object(q.a)({},c,i)))},m=function(){var e=Object(z.a)($.a.mark((function e(a){var c,i;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),console.log(t),e.prev=2,e.next=5,s({variables:Object(j.a)({},t)});case 5:c=e.sent,i=c.data,console.log(i),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.error(e.t0);case 13:n({placeName:"",placeRating:"",placeLocation:"",placeType:"",placeComment:""});case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(a){return e.apply(this,arguments)}}();return Object(R.jsx)(C.a,{children:d?Object(R.jsxs)(R.Fragment,{children:[Object(R.jsxs)(T.a,{mb:5,status:"success",children:[Object(R.jsx)(T.c,{}),Object(R.jsx)(T.d,{mr:2,children:"Success!"}),Object(R.jsx)(T.b,{children:"You have added an entry!"}),Object(R.jsx)(me.a,{position:"absolute",right:"8px",top:"8px"}),";"]}),Object(R.jsxs)("form",{onSubmit:m,children:[Object(R.jsx)(f.a,{as:"h3",color:"#7FE6D1",size:"md",mb:5,children:"Rate a place based on how loud it was"}),Object(R.jsxs)(P.a,{id:"name",mt:5,isRequired:!0,children:[Object(R.jsx)(A.a,{children:"Name of place"}),Object(R.jsx)(F.a,{onChange:b,placeholder:"Name",name:"placeName",value:t.placeName})]}),Object(R.jsxs)(P.a,{id:"suburb",mt:5,isRequired:!0,children:[Object(R.jsx)(A.a,{children:"Suburb"}),Object(R.jsx)(F.a,{onChange:b,placeholder:"Suburb",name:"placeLocation",value:t.placeLocation})]}),Object(R.jsxs)(P.a,{isRequired:!0,id:"place",mt:5,children:[Object(R.jsx)(A.a,{children:"Type of place"}),Object(R.jsxs)(G.a,{onChange:b,name:"placeType",value:t.placeType,placeholder:"Select type of place",children:[Object(R.jsx)("option",{children:"Restaurant"}),Object(R.jsx)("option",{children:"Bar"}),Object(R.jsx)("option",{children:"Pub"})]})]}),Object(R.jsxs)(P.a,{isRequired:!0,id:"rating",mt:5,children:[Object(R.jsx)(A.a,{children:"Rating"}),Object(R.jsxs)(G.a,{onChange:b,placeholder:"Rating",name:"placeRating",value:t.placeRating,children:[Object(R.jsx)("option",{children:"Quiet"}),Object(R.jsx)("option",{children:"Average"}),Object(R.jsx)("option",{children:"Bit Loud"}),Object(R.jsx)("option",{children:"Loud"}),Object(R.jsx)("option",{children:"Very Loud"}),Object(R.jsx)("option",{children:"Very Very Loud"})]})]}),Object(R.jsxs)(P.a,{mt:5,id:"comment",children:[Object(R.jsx)(A.a,{children:"Comment"}),Object(R.jsx)(pe.a,{onChange:b,placeholder:"Comment",name:"placeComment",value:t.placeComment})]}),Object(R.jsx)(S.a,{variant:"solid",colorScheme:"teal",size:"md",mt:5,type:"submit",children:"Submit"})]})]}):Object(R.jsxs)("form",{onSubmit:m,children:[Object(R.jsx)(f.a,{as:"h3",color:"#7FE6D1",size:"md",mb:5,children:"Rate a place based on how loud it was"}),Object(R.jsxs)(P.a,{id:"name",mt:5,isRequired:!0,children:[Object(R.jsx)(A.a,{children:"Name of place"}),Object(R.jsx)(F.a,{onChange:b,placeholder:"Name",name:"placeName",value:t.placeName})]}),Object(R.jsxs)(P.a,{id:"suburb",mt:5,isRequired:!0,children:[Object(R.jsx)(A.a,{children:"Suburb"}),Object(R.jsx)(F.a,{onChange:b,placeholder:"Suburb",name:"placeLocation",value:t.placeLocation})]}),Object(R.jsxs)(P.a,{isRequired:!0,id:"place",mt:5,children:[Object(R.jsx)(A.a,{children:"Type of place"}),Object(R.jsxs)(G.a,{onChange:b,name:"placeType",value:t.placeType,placeholder:"Select type of place",children:[Object(R.jsx)("option",{children:"Restaurant"}),Object(R.jsx)("option",{children:"Bar"}),Object(R.jsx)("option",{children:"Pub"})]})]}),Object(R.jsxs)(P.a,{isRequired:!0,id:"rating",mt:5,children:[Object(R.jsx)(A.a,{children:"Rating"}),Object(R.jsxs)(G.a,{onChange:b,placeholder:"Rating",name:"placeRating",value:t.placeRating,children:[Object(R.jsx)("option",{children:"Quiet"}),Object(R.jsx)("option",{children:"Average"}),Object(R.jsx)("option",{children:"Bit Loud"}),Object(R.jsx)("option",{children:"Loud"}),Object(R.jsx)("option",{children:"Very Loud"}),Object(R.jsx)("option",{children:"Very Very Loud"})]})]}),Object(R.jsxs)(P.a,{mt:5,id:"comment",children:[Object(R.jsx)(A.a,{children:"Comment"}),Object(R.jsx)(pe.a,{onChange:b,placeholder:"Comment",name:"placeComment",value:t.placeComment})]}),Object(R.jsx)(S.a,{variant:"solid",colorScheme:"teal",size:"md",mt:5,type:"submit",children:"Submit"}),o&&Object(R.jsx)(v.a,{children:o.message})]})})},he=function(){var e=Object(O.g)().username,a=Object(be.a)(e?oe:de,{variables:{username:e}}),t=a.loading,n=a.data,c=(null===n||void 0===n?void 0:n.me)||(null===n||void 0===n?void 0:n.user)||{};return W.loggedIn()&&W.getProfile().data.username===e?Object(R.jsx)(O.a,{to:"/me"}):t?Object(R.jsx)("div",{children:"Loading..."}):(null===c||void 0===c?void 0:c.username)?Object(R.jsxs)(R.Fragment,{children:[Object(R.jsxs)(f.a,{mb:5,children:["Hi ",W.getProfile().data.username,"!"]}),Object(R.jsx)(ue,{}),Object(R.jsx)(f.a,{as:"h3",color:"#7FE6D1",size:"md",mt:10,mb:3,children:"Places you've added to the app."})]}):Object(R.jsxs)(T.a,{status:"error",children:[Object(R.jsx)(T.c,{}),Object(R.jsx)(T.d,{mr:2,children:"You need to be logged in to see this. "}),Object(R.jsx)(T.b,{children:"Use the navigation links above to sign up or log in!"})]})},Oe=function(){var e=Object(O.g)().placeId,a=Object(be.a)(je,{variables:{placeId:e}}),t=a.loading,n=a.data,c=(null===n||void 0===n?void 0:n.place)||{};return t?Object(R.jsx)("div",{children:"Loading..."}):Object(R.jsxs)(x.a,{align:"center",justify:"space-between",wrap:"wrap",w:"100%",p:4,children:[Object(R.jsx)(f.a,{children:"HEARO Place details"}),Object(R.jsx)(v.a,{children:c.placeName}),Object(R.jsx)(v.a,{children:c.placeLocation}),Object(R.jsx)(v.a,{children:c.placeRating}),Object(R.jsx)(v.a,{children:c.placeComment})]})},xe=function(){f.a},ge=Object(d.a)({uri:"/graphql"}),fe=Object(u.a)((function(e,a){var t=a.headers,n=localStorage.getItem("id_token");return{headers:Object(j.a)(Object(j.a)({},t),{},{authorization:n?"Bearer ".concat(n):""})}})),ve=new b.a({link:fe.concat(ge),cache:new m.a});var ye=function(e){return e.cookies,Object(R.jsx)(p.a,{client:ve,children:Object(R.jsxs)(x.a,{direction:"column",maxW:{xl:"1200px"},px:5,m:"0 auto",children:[Object(R.jsx)(ne,{}),Object(R.jsx)(h.a,{children:Object(R.jsxs)(O.d,{children:[Object(R.jsx)(O.b,{exact:!0,path:"/",component:k}),Object(R.jsx)(O.b,{exact:!0,path:"/search",component:K}),Object(R.jsx)(O.b,{exact:!0,path:"/me",component:he}),Object(R.jsx)(O.b,{exact:!0,path:"/profile/:username",component:he}),Object(R.jsx)(O.b,{exact:!0,path:"/places/:placeId",component:Oe}),Object(R.jsx)(O.b,{exact:!0,path:"/login",component:Q}),Object(R.jsx)(O.b,{exact:!0,path:"/signup",component:J}),Object(R.jsx)(O.b,{exact:!0,path:"/404",component:xe})]})}),Object(R.jsx)(le,{})]})})},we=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,223)).then((function(a){var t=a.getCLS,n=a.getFID,c=a.getFCP,i=a.getLCP,r=a.getTTFB;t(e),n(e),c(e),i(e),r(e)}))},Se=t(217),Ce=t(212),Le=t(211),Re=Object(Le.a)({fonts:{},config:{initialColorMode:"dark",useSystemColorMode:!1}});o.a.render(Object(R.jsx)(s.a.StrictMode,{children:Object(R.jsxs)(Se.a,{theme:Re,children:[Object(R.jsx)(Ce.a,{initialColorMode:Re.config.initialColorMode}),Object(R.jsx)(ye,{})]})}),document.getElementById("root")),we()}},[[172,1,2]]]);
//# sourceMappingURL=main.5924aa27.chunk.js.map