(this.webpackJsonpccw=this.webpackJsonpccw||[]).push([[0],{101:function(e,t,n){},126:function(e,t,n){"use strict";n.r(t);var a,c=n(0),s=n.n(c),r=n(31),i=n.n(r),o=(n(101),n(48)),j=n(13),l=(n(102),n(51)),u=n.n(l),d=n(69),b=n(41),h=n(84),p=n(129),O=n(6),f=p.a.Meta,m=function(e){var t=e.name,n=void 0===t?"unkonw":t,a=e.image,c=void 0===a?"":a;return Object(O.jsx)(p.a,{hoverable:!0,style:{margin:5,maxWidth:"40vw"},cover:Object(O.jsx)("img",{alt:n,src:c}),children:Object(O.jsx)(f,{title:n})})},x=n(92),g=n.n(x).a.create({baseURL:a||"https://api.opensea.io/api/v1/",timeout:1e4}),v=n(65),k=n(47),w=n(35),y=n(93),_=n.n(y);var C=function(){var e=Object(c.useState)([]),t=Object(b.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(0),r=Object(b.a)(s,2),i=r[0],j=r[1],l=Object(c.useState)(!0),p=Object(b.a)(l,2),f=p[0],x=p[1],y=Object(c.useState)("0x960DE9907A2e2f5363646d48D7FB675Cd2892e91"),C=Object(b.a)(y,2),M=C[0],S=C[1];function F(){return B.apply(this,arguments)}function B(){return(B=Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:g.get("/assets",{params:{format:"json",owner:M,offset:20*i,limit:20}}).then((function(e){e.data.assets.length?(a((function(t){return t.concat(e.data.assets)})),j(i+1)):x(!1)})).catch((function(e){console.error(e)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(){return(L=Object(d.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_()();case 2:if(!e.sent){e.next=11;break}return e.next=6,window.ethereum.request({method:"eth_requestAccounts"});case 6:t=e.sent,n=t[0],S(n),e.next=12;break;case 11:console.error("Please install MetaMask!");case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){j(0),a([]),F()}),[M]),Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(v.a,{type:"primary",shape:"round",size:"large",onClick:function(){!function(){L.apply(this,arguments)}()},children:"connect MetaMask"}),Object(O.jsx)(h.a,{dataLength:n.length,next:F,hasMore:f,loader:Object(O.jsx)("h4",{children:"Loading..."}),endMessage:Object(O.jsx)("p",{style:{textAlign:"center"},children:Object(O.jsx)("b",{children:"\u5230\u5e95\u56c9\uff01"})}),children:Object(O.jsx)(k.a,{children:n.map((function(e){return Object(O.jsx)(w.a,{md:12,children:Object(O.jsx)(o.b,{to:"/detail/".concat(e.asset_contract.address,"/").concat(e.token_id),children:Object(O.jsx)(m,{name:e.name,image:e.image_preview_url})})},"".concat(e.asset_contract.address,"/").concat(e.token_id))}))})})]})},M=n(131),S=n(130),F=function(){var e=Object(j.f)(),t=Object(j.e)(),n=Object(c.useState)([]),a=Object(b.a)(n,2),s=a[0],r=a[1];function i(){t.goBack()}var o=Object(c.useCallback)((function(){g.get("/asset/".concat(e.pathname.split("/")[2],"/").concat(e.pathname.split("/")[3])).then((function(e){r(e.data)})).catch((function(e){console.log(e)}))}),[e]);return Object(c.useEffect)((function(){o()}),[o]),Object(O.jsxs)("div",{className:"datail",children:[Object(O.jsx)(S.a,{className:"site-page-header",onBack:function(){return i()},title:s.name}),s.name?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("img",{className:"detail_img",src:s.image_url,alt:s.name}),Object(O.jsxs)("div",{className:"detail_content",children:[Object(O.jsx)("h1",{children:s.name}),Object(O.jsx)("p",{children:s.description}),Object(O.jsx)(v.a,{type:"primary",shape:"round",size:"large",onClick:function(){i()},children:"Permalink"})]})]}):Object(O.jsx)(M.a,{})]})};var B=function(){return Object(O.jsxs)(o.a,{basename:"/CryptoCollectableWallet",children:[Object(O.jsx)(j.a,{exact:!0,path:"/",component:C}),Object(O.jsx)(j.a,{path:"/detail/:contractid/:token",component:F})]})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,133)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};i.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(B,{})}),document.getElementById("root")),L()}},[[126,1,2]]]);
//# sourceMappingURL=main.acbe4630.chunk.js.map