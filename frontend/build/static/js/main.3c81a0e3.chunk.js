(this.webpackJsonpinterrogate=this.webpackJsonpinterrogate||[]).push([[0],{108:function(e,a,t){e.exports=t.p+"static/media/kahoot_messenger.eb2b8205.png"},110:function(e,a,t){e.exports=t(226)},115:function(e,a,t){},116:function(e,a,t){},146:function(e,a){},148:function(e,a){},181:function(e,a){},182:function(e,a){},226:function(e,a,t){"use strict";t.r(a);var n=t(2),l=t.n(n),o=t(107),c=t.n(o),r=(t(115),t(109)),i=t(108),s=t.n(i),m=(t(116),t(29)),u=t.n(m),d=u.a.ExcelFile,h=u.a.ExcelFile.ExcelSheet,p=u.a.ExcelFile.ExcelColumn;var f=function(){var e=Object(n.useState)(!1),a=Object(r.a)(e,2),t=a[0],o=a[1];return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement("img",{src:s.a,className:"App-logo",alt:"logo"}),l.a.createElement("div",{className:"container-file-upload"},l.a.createElement("label",{htmlFor:"file-upload",className:"custom-file-upload"},l.a.createElement("i",{className:"fa fa-cloud-upload"})," Click here to upload Messenger data")),l.a.createElement("div",{className:"container-file-upload"},l.a.createElement("input",{id:"file-upload",type:"file",onChange:function(e){var a=e.target.files[0],t=new FileReader;t.onload=function(e){var a=e.target.result;fetch("http://0.0.0.0:8000/interrogate",{method:"POST",headers:{accept:"application/json","content-type":"application/json"},body:JSON.stringify({data:a})}).then((function(e){return e.json()})).then((function(e){o(e),window.document.getElementById("downloadButton").click()})).catch((function(e){console.error(e)}))},t.readAsText(a)}})),t&&l.a.createElement(d,{filename:"KahootQuiz",element:l.a.createElement("div",{id:"downloadButton"})},l.a.createElement(h,{data:t,name:"Organization"},l.a.createElement(p,{label:"Question - max 120 characters",value:"question"}),l.a.createElement(p,{label:"Answer 1 - max 75 characters",value:"answer1"}),l.a.createElement(p,{label:"Answer 2 - max 75 characters",value:"answer2"}),l.a.createElement(p,{label:"Answer 3 - max 75 characters",value:"answer3"}),l.a.createElement(p,{label:"Answer 4 - max 75 characters",value:"answer4"}),l.a.createElement(p,{label:"Time limit (sec) \u2013 5, 10, 20, 30, 60, 90, 120, or 240 secs",value:"time"}),l.a.createElement(p,{label:"Correct answer(s) - choose at least one",value:"correct"})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[110,1,2]]]);
//# sourceMappingURL=main.3c81a0e3.chunk.js.map