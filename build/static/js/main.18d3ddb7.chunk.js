(this["webpackJsonpreact-todo"]=this["webpackJsonpreact-todo"]||[]).push([[0],{12:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var n=c(1),o=c(7),i=c.n(o),a=c(2),s=c(5),l=(c(12),c(0)),r={backgroundColor:"#c1ffff",width:"400px",height:"30px",padding:"8px",margin:"8px",borderRadius:"8px"},j=function(e){var t=e.todoText,c=e.onChange,n=e.onClick,o=e.disabled;return Object(l.jsxs)("div",{style:r,children:[Object(l.jsx)("input",{disabled:o,placeholder:"TODO\u3092\u5165\u529b",value:t,onChange:c}),Object(l.jsx)("button",{disabled:o,onClick:n,children:"\u8ffd\u52a0"})]})},d=function(e){var t=e.todos,c=e.onClickComplete,n=e.onClickDelete;return Object(l.jsxs)("div",{className:"imcomplete-area",children:[Object(l.jsx)("p",{className:"title",children:"\u672a\u5b8c\u4e86\u306eTODO"}),Object(l.jsx)("ul",{children:t.map((function(e,t){return Object(l.jsxs)("li",{className:"list-row",children:[Object(l.jsx)("p",{className:"text",children:e}),Object(l.jsx)("button",{onClick:function(){return c(t)},children:"\u5b8c\u4e86"}),Object(l.jsx)("button",{onClick:function(){return n(t)},children:"\u524a\u9664"})]},t)}))})]})},b=function(e){var t=e.todos,c=e.onClickBack;return Object(l.jsxs)("div",{className:"complete-area",children:[Object(l.jsx)("p",{className:"title",children:"\u5b8c\u4e86\u306eTODO"}),Object(l.jsx)("ul",{children:t.map((function(e,t){return Object(l.jsxs)("li",{className:"list-row",children:[Object(l.jsx)("p",{className:"text",children:e}),Object(l.jsx)("button",{onClick:function(){return c(t)},children:"\u623b\u3059"})]},t)}))})]})},u=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),c=t[0],o=t[1],i=Object(n.useState)([]),r=Object(s.a)(i,2),u=r[0],O=r[1],x=Object(n.useState)([]),h=Object(s.a)(x,2),p=h[0],f=h[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(j,{todoText:c,onChange:function(e){return o(e.target.value)},onClick:function(){if(""!==c){var e=[].concat(Object(a.a)(u),[c]);O(e),o("")}},disabled:u.length>=5}),u.length>=5&&Object(l.jsx)("p",{style:{color:"red"},children:"\u767b\u9332\u3067\u304d\u308btodo\u306f5\u500b\u307e\u3067"}),Object(l.jsx)(d,{todos:u,onClickComplete:function(e){var t=Object(a.a)(u);t.splice(e,1);var c=[].concat(Object(a.a)(p),[u[e]]);O(t),f(c)},onClickDelete:function(e){var t=Object(a.a)(u);t.splice(e,1),O(t)}}),Object(l.jsx)(b,{todos:p,onClickBack:function(e){var t=Object(a.a)(p);t.splice(e,1);var c=[].concat(Object(a.a)(u),[p[e]]);f(t),O(c)}})]})};i.a.render(Object(l.jsx)(u,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.18d3ddb7.chunk.js.map