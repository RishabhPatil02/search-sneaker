(this.webpackJsonpsearch=this.webpackJsonpsearch||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(1),a=c.n(s),r=c(6),i=c.n(r),l=(c(13),c(3)),o=c.n(l),d=c(7),j=c(4),h=(c(5),function(e){var t=e.title,c=e.color,s=e.gender,a=e.image,r=e.shoe;return Object(n.jsxs)("div",{className:"card card-1",children:[Object(n.jsx)("img",{src:a,alt:"",className:"shoe-image"}),Object(n.jsxs)("div",{className:"black-part",children:[Object(n.jsx)("div",{className:"child-title",children:t}),Object(n.jsx)("div",{className:"child-color",children:c}),Object(n.jsx)("div",{className:"child-gender",children:s}),Object(n.jsxs)("div",{className:"button",id:"button-5",children:[Object(n.jsx)("div",{id:"translate",className:"child",onClick:function(){window.location.href="https://www.google.com/search?q=".concat(r,"&rlz=1C1CHBF_enIN920IN920&sxsrf=ALeKk03qKNLvbfg3i3X0cCPxjHwW4zkSzw:1605282798927&source=lnms&tbm=shop&sa=X&ved=2ahUKEwizx_m38P_sAhUyxjgGHeQ8D28Q_AUoAXoECA4QAw&biw=822&bih=600")}}),Object(n.jsx)("a",{children:"Buy"})]})]})]})}),b=function(){var e=Object(s.useState)([]),t=Object(j.a)(e,2),c=t[0],a=t[1],r=Object(s.useState)(""),i=Object(j.a)(r,2),l=i[0],b=i[1];Object(s.useEffect)((function(){u()}),[l]);var u=function(){var e=Object(d.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.thesneakerdatabase.com/v1/sneakers?limit=100&brand=".concat(l));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,a(n.results),console.log(c);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)("header",{children:Object(n.jsx)("div",{class:"logo",children:Object(n.jsxs)("b",{children:["No",Object(n.jsx)("span",{children:" br"}),"ai",Object(n.jsx)("span",{children:"n"}),"er"]})})}),Object(n.jsx)("form",{children:Object(n.jsxs)("div",{class:"input-field",children:[Object(n.jsx)("input",{type:"text",id:"name",required:!0,onChange:function(e){b(e.target.value)}}),Object(n.jsx)("label",{for:"name",children:"Search brand"})]})}),Object(n.jsx)("div",{className:"flex-box",children:c.map((function(e){return Object(n.jsx)(h,{title:e.shoe,color:e.colorway,gender:e.gender,image:e.media.thumbUrl,shoe:e.title},e.id)}))})]})},u=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,16)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),a(e),r(e)}))};i.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(b,{})}),document.getElementById("root")),u()},5:function(e,t,c){}},[[15,1,2]]]);
//# sourceMappingURL=main.6f614674.chunk.js.map