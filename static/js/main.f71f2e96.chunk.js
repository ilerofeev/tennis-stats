(this["webpackJsonptennis-stats"]=this["webpackJsonptennis-stats"]||[]).push([[0],{101:function(e,a,t){e.exports=t(206)},206:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),o=t(7),l=t.n(o);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=t(96),i=t(31),d=t(244),s=t(242),m=t(245),p=t(247),g=t(243),h=t(246),u=t(241),b=t(87),f=t.n(b),E=t(248),x=t(238),w=t(14),v=t(83),k=t.n(v),W=t(6),y={colorBackground:"#eee",colorPrimary:"#3c4858",colorSecondary:"#999",colorOrange:"#ffa726",colorGreen:"#66bb6a",colorRed:"#ef5350",colorBlue:"#26c6da",colorChart:"hsla(0,0%,100%,.8)",buttonHover:"rgba(200, 200, 200, 0.2)",blockShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.14)",shadowOrange:"0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0 rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2)",shadowGreen:"0 4px 20px 0 rgba(0, 0, 0,.14), 0 7px 10px -5px rgba(76, 175, 80,.4)",shadowRed:"0 4px 20px 0 rgba(0, 0, 0,.14), 0 7px 10px -5px rgba(244, 67, 54,.4)",shadowBlue:"0 4px 20px 0 rgba(0, 0, 0,.14), 0 7px 10px -5px rgba(0, 172, 193,.4)",linearOrange:"linear-gradient(60deg, #ffa726, #fb8c00)",linearGreen:"linear-gradient(60deg, #66bb6a, #43a047)",linearRed:"linear-gradient(60deg, #ef5350, #e53935)",linearBlue:"linear-gradient(60deg, #26c6da, #00acc1)",greenArrow:"#4caf50"},B=t(89),S=t.n(B),O=t(88),N=t.n(O),C=Object(x.a)((function(e){return{root:{"& ::-webkit-scrollbar":{display:"none"},display:"flex","& .MuiSvgIcon-root":{color:"white"},"& .MuiListItem-button":{color:"white",width:"90%",margin:"auto","&:hover":{backgroundColor:y.buttonHover},borderRadius:5},"& .MuiListItemIcon-root":{minWidth:45}},backgroundFilter:{backgroundColor:"rgba(0, 0, 0, 0.5)",width:"100%",height:"100%",position:"absolute",left:0,top:0},drawer:Object(i.a)({position:"relative",height:"100%",backgroundColor:"black",overflow:"hidden",background:"url(".concat(k.a,")"),backgroundPosition:"60% center",backgroundRepeat:"no-repeat"},e.breakpoints.up("md"),{width:240,flexShrink:0}),appBar:Object(i.a)({},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(240,"px)"),marginLeft:240}),menuDivider:{width:"90%",margin:"auto",backgroundColor:y.colorSecondary},menuButton:Object(i.a)({marginRight:e.spacing(2)},e.breakpoints.up("xs"),{display:"none"}),toolbar:e.mixins.toolbar,menuHeader:{color:"white",fontWeight:400,margin:"10px 12px !important",fontSize:18,textTransform:"uppercase","&:hover":{cursor:"default !important",backgroundColor:"transparent !important"}},drawerPaper:{width:240},content:{minWidth:460,overflow:"auto",height:"100vh",backgroundColor:y.colorBackground,flexGrow:1,padding:e.spacing(2)}}})),R=function(e){var a=e.children,t=C(),r=Object(w.a)(),o=Object(W.f)(),l=n.a.useState(!1),i=Object(c.a)(l,2),b=i[0],x=i[1],v=[{label:"Main page",path:"/main",icon:n.a.createElement(f.a,null)},{label:"Month stats",path:"/stats",icon:n.a.createElement(N.a,null)}],k=n.a.createElement("div",{className:t.drawer},n.a.createElement("div",{className:t.backgroundFilter}," "),n.a.createElement(h.a,{className:t.menuHeader},n.a.createElement(u.a,null,n.a.createElement(S.a,null)),n.a.createElement(E.a,{primary:"tennis stats"})),n.a.createElement(s.a,{className:t.menuDivider}),n.a.createElement(g.a,null,v.map((function(e){return n.a.createElement(h.a,{button:!0,key:e.path,onClick:function(){return o.push(e.path)}},n.a.createElement(u.a,null,e.icon),n.a.createElement(E.a,{primary:e.label}))}))));return n.a.createElement("div",{className:t.root},n.a.createElement(d.a,null),n.a.createElement("nav",{className:t.drawer,"aria-label":"mailbox folders"},n.a.createElement(p.a,{smDown:!0,implementation:"css"},n.a.createElement(m.a,{variant:"temporary",anchor:"rtl"===r.direction?"right":"left",open:b,onClose:function(){x(!b)},classes:{paper:t.drawerPaper},ModalProps:{keepMounted:!0}},k)),n.a.createElement(p.a,{smDown:!0,implementation:"css"},n.a.createElement(m.a,{classes:{paper:t.drawerPaper},variant:"permanent",open:!0},k))),n.a.createElement("main",{className:t.content},a))},j=Object(x.a)({pageTitle:{padding:15,fontSize:18,color:y.colorPrimary,fontWeight:300,marginBottom:50}}),T=Object(x.a)({iconWrapper:{padding:20,marginRight:15,float:"left",marginTop:-30,borderRadius:3},orangeWrapper:{background:y.linearOrange,boxShadow:y.shadowOrange},greenWrapper:{background:y.linearGreen,boxShadow:y.shadowGreen},redWrapper:{background:y.linearRed,boxShadow:y.shadowRed},blueWrapper:{background:y.linearBlue,boxShadow:y.shadowBlue},icon:{"& > svg":{width:40,height:40,lineHeight:40}}}),A=function(e){var a=e.color,t=e.icon,r=T();return n.a.createElement("div",{className:[r.iconWrapper,"Orange"===a?r.orangeWrapper:"Green"===a?r.greenWrapper:"Red"===a?r.redWrapper:r.blueWrapper].join(" ")},n.a.createElement("span",{className:r.icon},t))},z=Object(x.a)({cardWrapper:{padding:15},card:{display:"block",backgroundColor:"#fff",minWidth:250,width:"calc(25% - 30px)",borderRadius:3,boxShadow:y.blockShadow,padding:15,marginBottom:40},infoTitle:{textAlign:"right",margin:0,color:y.colorSecondary},infoDescription:{textAlign:"right",margin:"0 0 20px 0",color:y.colorPrimary,fontSize:"1.825em",fontWeight:300},hint:{marginTop:15,fontSize:12,color:y.colorSecondary},divider:{backgroundColor:y.colorBackground}}),M=function(e){var a=e.color,t=e.icon,r=e.data,o=z();return n.a.createElement("div",{className:o.cardWrapper},n.a.createElement("div",{className:o.card},n.a.createElement(A,{color:a,icon:t}),n.a.createElement("p",{className:o.infoTitle},r.title),n.a.createElement("h3",{className:o.infoDescription},r.description)," ",n.a.createElement(s.a,{className:o.divider}),n.a.createElement("div",{className:o.hint},r.hint)))},L=t(90),P=t.n(L),D=t(91),G=t.n(D),H=t(92),I=t.n(H),F=t(93),J=t.n(F),$=t(95),K=Object($.a)({breakpoints:{values:{xs:0,sm:600,md:960,lg:1280,xl:1920}}}),q=Object(x.a)({cardsWrapper:Object(i.a)({display:"flex",flexWrap:"wrap",justifyContent:"center"},K.breakpoints.up("lg"),{justifyContent:"space-between"})});var Q=function(){var e=q();return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:e.cardsWrapper},n.a.createElement(M,{data:{title:"Average coefficient",description:"1.78",hint:"Last 6 months"},color:"Orange",icon:n.a.createElement(P.a,null)}),n.a.createElement(M,{data:{title:"Profit",description:"538$",hint:"Last 6 months, flat 30$"},color:"Green",icon:n.a.createElement(G.a,null)}),n.a.createElement(M,{data:{title:"Win",description:"67%",hint:"Last 6 months"},color:"Blue",icon:n.a.createElement(I.a,null)}),n.a.createElement(M,{data:{title:"ROI",description:"".concat(Math.floor(.78*67-33),"%"),hint:"Last 6 months"},color:"Red",icon:n.a.createElement(J.a,null)})))},U=t(42),V=t(94),X=t.n(V),Y=Object(x.a)({chartTitle:{fontWeight:300,color:y.colorPrimary,fontSize:18,marginBottom:5},chartDescription:{fontSize:14,color:y.colorSecondary,margin:0,display:"flex",alignItems:"flex-start","& > svg":{color:"".concat(y.greenArrow," !important"),fontSize:18},"& > span:nth-child(2)":{color:y.greenArrow}},chartWrapper:{minWidth:280,width:"33%",padding:15,marginBottom:40},chartBlock:{minHeight:260,padding:15,borderRadius:3,backgroundColor:"#fff",boxShadow:y.blockShadow},chart:{height:200,margin:"-35px 0 15px 0",boxShadow:y.shadowGreen,background:y.linearGreen,padding:"10px 15px",borderRadius:3}});var Z=function(){var e={labels:["1","5","10","15","20","25","30"],datasets:[{label:"",fill:!1,lineTension:.3,borderColor:y.colorChart,pointBackgroundColor:"#fff",pointRadius:4,pointHitRadius:0,data:[5,13,10,17,29,25,34]}]},a=Y();return n.a.createElement("div",{className:a.chartWrapper},n.a.createElement("div",{className:a.chartBlock},n.a.createElement("div",{className:a.chart},n.a.createElement(U.Line,{data:e,options:{maintainAspectRatio:!1,legend:{display:!1}}})),n.a.createElement("div",{className:a.chartTitle},"Last month"),n.a.createElement("span",{className:a.chartDescription},n.a.createElement(X.a,null)," ",n.a.createElement("span",null,"9% "),"\xa0",n.a.createElement("span",null,"increase last 5 days"))))},_=Object(x.a)({chartTitle:{fontWeight:300,color:y.colorPrimary,fontSize:18,marginBottom:5},chartDescription:{fontSize:14,color:y.colorSecondary,margin:0,display:"flex",alignItems:"flex-start","& span:first-child":{color:y.greenArrow}},chartWrapper:{minWidth:280,width:"33%",padding:15,marginBottom:40},chartBlock:{minHeight:260,padding:15,borderRadius:3,backgroundColor:"#fff",boxShadow:y.blockShadow},chart:{height:200,margin:"-35px 0 15px 0",padding:"10px 15px",borderRadius:3},chartOrange:{boxShadow:y.shadowOrange,background:y.linearOrange},chartBlue:{boxShadow:y.shadowBlue,background:y.linearBlue}}),ee=function(e){var a=e.horizontal,t=e.color,r=e.data,o=_();return n.a.createElement("div",{className:o.chartWrapper},n.a.createElement("div",{className:o.chartBlock},n.a.createElement("div",{className:[o.chart,"Orange"===t?o.chartOrange:o.chartBlue].join(" ")},a?n.a.createElement(U.HorizontalBar,{data:r,options:{maintainAspectRatio:!1,legend:{display:!1}}}):n.a.createElement(U.Bar,{data:r,options:{maintainAspectRatio:!1,legend:{display:!1}}})),n.a.createElement("div",{className:o.chartTitle},"Last 6 months"),n.a.createElement("span",{className:o.chartDescription},n.a.createElement("span",null,"37% "),"\xa0",n.a.createElement("span",null,"on average"))))},ae=Object(x.a)({chartsBlock:{marginLeft:-10,marginRight:-10,display:"flex",justifyContent:"center",flexWrap:"wrap"}});var te=function(){var e=ae(),a={labels:["January","February","March","April","May","June","July"],datasets:[{backgroundColor:y.colorChart,borderColor:y.colorChart,borderWidth:1,data:[65,59,80,81,56,55,53]}]},t={labels:["WTA line","WTA live","EK free","EK paid","Basket line"],datasets:[{backgroundColor:y.colorChart,borderColor:y.colorChart,borderWidth:1,data:[33,32,52,34,24]}]};return n.a.createElement("div",{className:e.chartsBlock},n.a.createElement(ee,{color:"Orange",data:a}),n.a.createElement(Z,null),n.a.createElement(ee,{color:"Blue",horizontal:!0,data:t}))};var re=function(){var e=j();return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:e.pageTitle},"Statistics"),n.a.createElement(Q,null),n.a.createElement(te,null))};var ne=function(){var e=j();return n.a.createElement("div",{className:e.pageTitle},"Month stats")};var oe=function(){return n.a.createElement(R,null,n.a.createElement(W.b,{exact:!0,path:"/main",component:re}),n.a.createElement(W.b,{exact:!0,path:"/stats",component:ne}),n.a.createElement(W.a,{to:"/main"}))},le=t(61);l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(d.a,null),n.a.createElement(le.a,null,n.a.createElement(oe,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},83:function(e,a,t){e.exports=t.p+"static/media/background.a1e2e792.jpeg"}},[[101,1,2]]]);
//# sourceMappingURL=main.f71f2e96.chunk.js.map