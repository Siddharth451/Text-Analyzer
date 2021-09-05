(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{21:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(10),s=n.n(a),l=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,l=t.getTTFB;n(e),c(e),a(e),s(e),l(e)}))},o=n(0);var r=function(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("a",{className:"navbar-brand",href:"/",children:e.tittle}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(o.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"}),Object(o.jsx)("form",{class:"d-flex",children:Object(o.jsxs)("div",{class:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(o.jsx)("input",{class:"form-check-input",type:"checkbox",id:"flexSwitchCheckDefault",onClick:e.toggleMode}),Object(o.jsxs)("label",{class:"form-check-label",for:"flexSwitchCheckDefault",children:["Enable to ","light"===e.mode?"dark":"light"," mode"]})]})})]})]})})})},i=n(2),b=n(3),d=n.n(b);function h(e){var t=Object(b.useSpeechRecognition)(),n=t.transcript,a=t.resetTranscript,s=JSON.stringify(n),l=Object(c.useState)(),r=Object(i.a)(l,2),h=r[0],j=r[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h1",{style:{color:"light"===e.mode?"black":"white"},children:e.heading}),Object(o.jsx)("div",{className:"mb-3",children:Object(o.jsx)("textarea",{className:"form-control",id:"mybox",value:h||n,onChange:function(e){j(e.target.value)},style:{backgroundColor:"light"===e.mode?"white":"grey"},rows:"8"})}),Object(o.jsxs)("div",{class:"d-grid gap-2 d-md-block",children:[Object(o.jsx)("button",{type:"button",className:"btn btn-secondary mx-2",onClick:d.a.startListening,children:"Speak"}),Object(o.jsx)("button",{type:"button",className:"btn btn-secondary mx-2",onClick:d.a.stopListening,children:"Stop"}),Object(o.jsx)("button",{type:"button",className:"btn btn-secondary mx-2",onClick:function(){var t=h.toUpperCase()||n.toUpperCase();j(t),e.showAlert("Converted to Uppercase","success")},children:"Convert to UpperCase"}),Object(o.jsx)("button",{type:"button",className:"btn btn-secondary mx-2",onClick:function(){var t=h.toLowerCase()||n.toUpperCase();j(t),e.showAlert("Converted to Lowercase","success")},children:"Convert to LowerCase"}),Object(o.jsx)("button",{type:"button",className:"btn btn-secondary mx-2",onClick:function(){j(""+a()),j("")},children:"Clear"}),Object(o.jsx)("button",{type:"button",className:"btn btn-secondary mx-2",onClick:function(){var t=document.getElementById("mybox");t.select(),navigator.clipboard.writeText(t.value||n),e.showAlert("Text copied","success")},children:"Copy"}),Object(o.jsx)("button",{type:"button",className:"btn btn-secondary mx-2",onClick:function(){var t=h.split(/[ ]+/)||n.split(/[ ]+/);j(t.join(" ")),e.showAlert(" Extra space removed","success")},children:"Remove Extra space"})]})]}),Object(o.jsxs)("div",{className:"container my-3",children:[Object(o.jsx)("h1",{style:{color:"light"===e.mode?"black":"white"},children:"Your text Summary"}),Object(o.jsxs)("p",{style:{color:"light"===e.mode?"black":"white"},children:[null!=s.split(" ")?s.split(" ").length:0+(h.length+h.length!=null?h.length:0)," Words ",null!=s.length?s.length:0+h.length," characters"]}),Object(o.jsxs)("p",{children:[.008*(null!=s.split(" ")?s.split.length:0)," Minutes Read"]}),Object(o.jsx)("h2",{style:{color:"light"===e.mode?"black":"white"},children:"Preview"}),Object(o.jsx)("p",{style:{color:"light"===e.mode?"black":"white"},children:h})]})]})}function j(e){return e.alert&&Object(o.jsx)("div",{children:Object(o.jsxs)("div",{class:"alert alert-".concat(e.alert.type," alert-dismissible fade show "),role:"alert",children:[Object(o.jsxs)("strong",{children:[e.alert.type," "]}),": ",e.alert.message]})})}var u=function(){var e=Object(c.useState)("light"),t=Object(i.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(null),l=Object(i.a)(s,2),b=l[0],d=l[1],u=function(e,t){d({message:e,type:t}),setTimeout((function(){d(null)}),1500)};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(r,{tittle:"TextUtil",mode:n,toggleMode:function(){"light"===n?(a("dark"),document.body.style.backgroundColor="#042743",u("Dark mode has been enabled","success")):(a("light"),document.body.style.backgroundColor="white",u("Light mode has been enabled","success"))}}),Object(o.jsx)(j,{alert:b}),Object(o.jsx)("div",{className:"container my-4",children:Object(o.jsx)(h,{heading:"Enter the text to analyze below",showAlert:u,mode:n})})]})};s.a.render(Object(o.jsx)(u,{}),document.getElementById("root")),l()}},[[21,1,2]]]);
//# sourceMappingURL=main.774e735e.chunk.js.map