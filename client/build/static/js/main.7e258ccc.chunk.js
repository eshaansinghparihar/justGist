(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{120:function(e,t,n){},121:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(8),r=n.n(s),i=(n(90),n(7)),o=(n(63),n(18)),j=n(11),l=(n(91),n(23)),b=n(148),d=n(150),h=n(152),u=n(153),O=n(123),x=n(154),g=n(160),m=n(52),p=n(32),f=n.n(p),v=n(49),y=n.n(v),S=n(2),N=Object(b.a)((function(e){var t;return{container:{display:"flex",flexDirection:"column",alignItems:"center",marginTop:e.spacing(16),marginRight:"auto",marginLeft:"auto"},nodata:(t={margin:e.spacing(2),alignItems:"center",width:"100%",justifyContent:"center",display:"flex",flexDirection:"row"},Object(l.a)(t,"alignItems","center"),Object(l.a)(t,"marginLeft","auto"),Object(l.a)(t,"marginRight","auto"),t),avatar:{marginTop:e.spacing(3),backgroundColor:e.palette.secondary.light,marginLeft:"auto",marginRight:"auto",marginBottom:e.spacing(3)},subtitle1:{marginLeft:"auto",marginRight:"auto"}}}));var k=function(){var e=N(),t=Object(a.useState)(!0),n=Object(i.a)(t,2),c=n[0],s=n[1];Object(a.useEffect)((function(){setTimeout((function(){return s(!1)}),12e3)}),[]);var r=Object(j.g)();return c?Object(S.jsx)("div",{className:e.container,children:Object(S.jsx)(d.a,{color:"secondary"})}):Object(S.jsx)("div",{className:e.container,children:Object(S.jsxs)(h.a,{component:"main",children:[Object(S.jsx)(u.a,{}),Object(S.jsx)(O.a,{item:!0,alignContent:"center",spacing:2,elevation:8,children:Object(S.jsx)("div",{className:e.nodata,children:Object(S.jsxs)(x.a,{children:[Object(S.jsx)(f.a,{onClick:function(){r.goBack()},color:"secondary",fontSize:"small"}),Object(S.jsx)(g.a,{className:e.avatar,children:Object(S.jsx)(y.a,{fontSize:"large"})}),Object(S.jsx)(m.a,{component:"h3",variant:"subtitle1",children:"It's not you, It's us"}),Object(S.jsx)(m.a,{component:"h3",variant:"subtitle1",children:"Looks like we lost our way."})]})})})]})})},w=Object(b.a)((function(e){var t;return{container:{display:"flex",flexDirection:"column",alignItems:"center",marginTop:e.spacing(16),marginRight:"auto",marginLeft:"auto"},nodata:(t={margin:e.spacing(2),alignItems:"center",width:"100%",justifyContent:"center",display:"flex",flexDirection:"row"},Object(l.a)(t,"alignItems","center"),Object(l.a)(t,"marginLeft","auto"),Object(l.a)(t,"marginRight","auto"),t),avatar:{marginTop:e.spacing(3),backgroundColor:e.palette.secondary.light,marginLeft:"auto",marginRight:"auto",marginBottom:e.spacing(3)},subtitle1:{marginLeft:"auto",marginRight:"auto"}}}));var C=function(e){var t=e.error,n=w(),a=Object(j.g)();return Object(S.jsx)("div",{className:n.container,children:Object(S.jsxs)(h.a,{component:"main",children:[Object(S.jsx)(u.a,{}),Object(S.jsx)(O.a,{item:!0,alignContent:"center",spacing:2,elevation:8,children:Object(S.jsx)("div",{className:n.nodata,children:Object(S.jsxs)(x.a,{children:[Object(S.jsx)(f.a,{onClick:function(){a.goBack()},color:"secondary",fontSize:"small"}),Object(S.jsx)(g.a,{className:n.avatar,children:Object(S.jsx)(y.a,{fontSize:"large"})}),Object(S.jsx)(m.a,{component:"h3",variant:"subtitle1",children:"It's not you, It's us"}),Object(S.jsx)(m.a,{component:"h3",variant:"subtitle1",children:t})]})})})]})})};var I=function(e){var t=e.data,n=e.error,a=t.map((function(e){var t=new Date(e.publishedAt);return Object(S.jsxs)("div",{className:"container",children:[e.urlToImage?Object(S.jsx)("img",{src:e.urlToImage,className:"image"}):Object(S.jsx)("img",{}),Object(S.jsxs)("div",{className:"centered",children:[Object(S.jsx)("p",{className:"text heading",children:e.title}),e.author?Object(S.jsxs)("p",{className:"text author",children:["Written by ",Object(S.jsx)("b",{children:e.author})," on ",t.toDateString()," at ",(t.getHours()<10?"0":"")+t.getHours(),":",(t.getMinutes()<10?"0":"")+t.getMinutes()," "]}):Object(S.jsxs)("p",{className:"text author",children:["Written on ",t.toDateString()," at ",(t.getHours()<10?"0":"")+t.getHours(),":",(t.getMinutes()<10?"0":"")+t.getMinutes()]}),Object(S.jsx)("p",{className:"text description",children:e.description}),e.source.name&&Object(S.jsxs)("p",{className:"text author",children:["Read more at ",Object(S.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:Object(S.jsx)("b",{children:e.source.name})})]})]})]},e.title)}));return Object(S.jsx)("div",{children:n?Object(S.jsx)(C,{error:n}):0!==t.length&&void 0!==t?Object(S.jsx)("div",{className:"newsRender",children:a}):Object(S.jsx)(k,{})})},D=n(57),B=n(4),T=n(155),L=n(156),R=n(157),z=n(159),H=n(161),E=n(162),M=n(158),F=n(77),P=n.n(F),q=n(78),A=n.n(q),J=n(79),V=n.n(J),W=n(33),G="40vh",_=Object(b.a)((function(e){return{root:{display:"flex"},appBar:{background:"#8d1c55",zIndex:e.spacing(1),transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(G,"px)"),marginLeft:G,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:G,flexShrink:0},drawerPaper:{width:G},drawerHeader:Object(D.a)(Object(D.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-end"})}}));function K(){var e=_(),t=Object(W.a)(),n=Object(a.useState)(!1),c=Object(i.a)(n,2),s=c[0],r=c[1],j=Object(a.useState)("/"),l=Object(i.a)(j,2),b=l[0],d=l[1],h=function(){r(!1)};Object(a.useEffect)((function(){d(window.location.pathname)}));var u=function(e){return b===e};return Object(S.jsxs)("div",{children:[Object(S.jsx)(T.a,{position:"static",style:{zIndex:1251},className:e.appBar,children:Object(S.jsxs)(L.a,{children:[Object(S.jsx)(R.a,{color:"inherit","aria-label":"open drawer",onClick:function(){r(!0)},edge:"start",className:Object(B.a)(e.menuButton,s&&e.hide),children:Object(S.jsx)(P.a,{})}),Object(S.jsx)("p",{className:"heading",children:"justGist"})]})}),Object(S.jsxs)(z.a,{className:e.drawer,variant:"persistent",anchor:"left",open:s,classes:{paper:e.drawerPaper},style:{zIndex:1250},children:[Object(S.jsx)("div",{className:e.drawerHeader,children:Object(S.jsx)(R.a,{onClick:h,children:"ltr"===t.direction?Object(S.jsx)(A.a,{}):Object(S.jsx)(V.a,{})})}),Object(S.jsxs)(H.a,{children:[Object(S.jsx)(o.b,{to:"/search",style:{textDecoration:"none"},children:Object(S.jsx)(E.a,{onClick:h,selected:u("/search"),children:Object(S.jsx)(M.a,{secondary:"Search",className:"heading"})})}),Object(S.jsx)(o.b,{to:"/",style:{textDecoration:"none"},children:Object(S.jsx)(E.a,{onClick:h,selected:u("/"),children:Object(S.jsx)(M.a,{secondary:"Home",className:"heading"})})}),Object(S.jsx)(o.b,{to:"/business",style:{textDecoration:"none"},children:Object(S.jsx)(E.a,{onClick:h,selected:u("/business"),children:Object(S.jsx)(M.a,{secondary:"Business",className:"heading"})})}),Object(S.jsx)(o.b,{to:"/entertainment",style:{textDecoration:"none"},children:Object(S.jsx)(E.a,{onClick:h,selected:u("/entertainment"),children:Object(S.jsx)(M.a,{secondary:"Entertainment",className:"heading"})})}),Object(S.jsx)(o.b,{to:"/health",style:{textDecoration:"none"},children:Object(S.jsx)(E.a,{onClick:h,selected:u("/health"),children:Object(S.jsx)(M.a,{secondary:"Health",className:"heading"})})}),Object(S.jsx)(o.b,{to:"/science",style:{textDecoration:"none"},children:Object(S.jsx)(E.a,{onClick:h,selected:u("/science"),children:Object(S.jsx)(M.a,{secondary:"Science"})})}),Object(S.jsx)(o.b,{to:"/sports",style:{textDecoration:"none"},children:Object(S.jsx)(E.a,{onClick:h,selected:u("/sports"),children:Object(S.jsx)(M.a,{secondary:"Sports"})})}),Object(S.jsx)(o.b,{to:"/technology",style:{textDecoration:"none"},children:Object(S.jsx)(E.a,{onClick:h,selected:u("/technology"),children:Object(S.jsx)(M.a,{secondary:"Technology"})})})]})]})]})}var Q=n(58),U=n.n(Q),X=n(80),Y=n(59),Z=n.n(Y),$=n(81),ee=n.n($);n(120);var te=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(""),r=Object(i.a)(s,2),o=r[0],j=r[1],l=Object(a.useState)(!1),b=Object(i.a)(l,2),d=b[0],h=b[1],u=Object(a.useState)(""),O=Object(i.a)(u,2),x=O[0],g=O[1];function m(){return(m=Object(X.a)(U.a.mark((function e(){var t,n;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={question:x},e.next=3,ee.a.post("/sendquery",t,{headers:{"Content-Type":"application/json",accept:"application/json"}});case 3:"ok"===(n=e.sent).data.status?(h(!1),c(n.data.articles)):(h(!1),j(n.data.message));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var p=function(e){g(e.target.value)},v=function(){c([]),function(){m.apply(this,arguments)}(),h(!0),g("")};return Object(S.jsx)("div",{className:"App",children:o?Object(S.jsx)(C,{error:o}):0===n.length?d?Object(S.jsx)(k,{}):Object(S.jsxs)("div",{className:"divisionsearch",children:[Object(S.jsx)("h2",{className:"pageheading",children:"Search"}),Object(S.jsx)("h3",{className:"subtitle",children:"Search across any article published recently"}),Object(S.jsxs)("div",{className:"number",children:[Object(S.jsx)("input",{name:"search",value:x,placeholder:"Try searching 'Bitcoin' or 'COVID-19' ",onChange:function(e){return p(e)},className:"Input"}),""!==x&&Object(S.jsx)(Z.a,{onClick:v})]})]}):Object(S.jsxs)("div",{children:[0!==n.length&&Object(S.jsx)(f.a,{onClick:function(){c([])},fontSize:"small"}),d?Object(S.jsx)(k,{}):Object(S.jsxs)("div",{children:[Object(S.jsx)("h2",{className:"pageheading1",children:"Search"}),Object(S.jsx)("h3",{className:"subtitle",children:"Search across any article published recently"}),Object(S.jsxs)("div",{className:"number",children:[Object(S.jsx)("input",{name:"search",value:x,placeholder:"Try searching 'Bitcoin' or 'COVID-19' ",onChange:function(e){return p(e)},className:"Input"}),""!==x&&Object(S.jsx)(Z.a,{onClick:v})]}),Object(S.jsx)(I,{data:n,error:o})]})]})})};function ne(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)([]),r=Object(i.a)(s,2),l=r[0],b=r[1],d=Object(a.useState)([]),h=Object(i.a)(d,2),u=h[0],O=h[1],x=Object(a.useState)([]),g=Object(i.a)(x,2),m=g[0],p=g[1],f=Object(a.useState)([]),v=Object(i.a)(f,2),y=v[0],N=v[1],k=Object(a.useState)([]),w=Object(i.a)(k,2),C=w[0],D=w[1],B=Object(a.useState)([]),T=Object(i.a)(B,2),L=T[0],R=T[1],z=Object(a.useState)(""),H=Object(i.a)(z,2),E=H[0],M=H[1],F=Object(a.useState)(""),P=Object(i.a)(F,2),q=P[0],A=P[1],J=Object(a.useState)(""),V=Object(i.a)(J,2),W=V[0],G=V[1],_=Object(a.useState)(""),Q=Object(i.a)(_,2),U=Q[0],X=Q[1],Y=Object(a.useState)(""),Z=Object(i.a)(Y,2),$=Z[0],ee=Z[1],ne=Object(a.useState)(""),ae=Object(i.a)(ne,2),ce=ae[0],se=ae[1],re=Object(a.useState)(""),ie=Object(i.a)(re,2),oe=ie[0],je=ie[1];return Object(a.useEffect)((function(){fetch("/news").then((function(e){return e.json()})).then((function(e){"ok"===e.status?(M(""),c(e.articles)):M(e.message)})),fetch("/businessnews").then((function(e){return e.json()})).then((function(e){"ok"===e.status?(A(""),b(e.articles)):A(e.message)})),fetch("/healthnews").then((function(e){return e.json()})).then((function(e){"ok"===e.status?(X(""),p(e.articles)):X(e.message)})),fetch("/entertainmentnews").then((function(e){return e.json()})).then((function(e){"ok"===e.status?(G(""),O(e.articles)):G(e.message)})),fetch("/sciencenews").then((function(e){return e.json()})).then((function(e){"ok"===e.status?(ee(""),N(e.articles)):ee(e.message)})),fetch("/sportsnews").then((function(e){return e.json()})).then((function(e){"ok"===e.status?(se(""),D(e.articles)):se(e.message)})),fetch("/technologynews").then((function(e){return e.json()})).then((function(e){"ok"===e.status?(je(""),R(e.articles)):je(e.message)}))}),[]),Object(S.jsx)(o.a,{children:Object(S.jsxs)("div",{children:[Object(S.jsx)("div",{className:"float",children:Object(S.jsx)(K,{})}),Object(S.jsxs)(j.d,{children:[Object(S.jsx)(j.b,{exact:!0,path:"/",children:Object(S.jsx)(I,{data:n,error:E})}),Object(S.jsx)(j.b,{exact:!0,path:"/search",children:Object(S.jsx)(te,{})}),Object(S.jsx)(j.b,{exact:!0,path:"/business",children:Object(S.jsx)(I,{data:l,error:q})}),Object(S.jsx)(j.b,{exact:!0,path:"/entertainment",children:Object(S.jsx)(I,{data:u,error:W})}),Object(S.jsx)(j.b,{exact:!0,path:"/health",children:Object(S.jsx)(I,{data:m,error:U})}),Object(S.jsx)(j.b,{exact:!0,path:"/science",children:Object(S.jsx)(I,{data:y,error:$})}),Object(S.jsx)(j.b,{exact:!0,path:"/sports",children:Object(S.jsx)(I,{data:C,error:ce})}),Object(S.jsx)(j.b,{exact:!0,path:"/technology",children:Object(S.jsx)(I,{data:L,error:oe})}),Object(S.jsx)(j.a,{to:"/"})]})]})})}var ae=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,163)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};r.a.render(Object(S.jsx)(c.a.StrictMode,{children:Object(S.jsx)(ne,{})}),document.getElementById("root")),ae()},63:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){}},[[121,1,2]]]);
//# sourceMappingURL=main.7e258ccc.chunk.js.map