(this["webpackJsonpweater-app-test"]=this["webpackJsonpweater-app-test"]||[]).push([[0],{33:function(e,t,a){e.exports=a(60)},38:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(25),i=a.n(o),c=a(26),l=a(8),d=a(27),s=a(28),m=a(31),p=(a(38),a(4)),u=a(71),f=a(30),g=a(5),h=a(72),b=Object(f.a)({root:{height:10,backgroundColor:Object(g.c)("#ff6c5c",.5)},bar:{borderRadius:20,backgroundColor:"#fcba03"}})(h.a),v=Object(u.a)((function(e){return{rootHeader:{width:"100%",height:"10px",order:"3",backgroundColor:"#38373b",color:"#fff",marginBottom:"0.2em",padding:"10px",display:"inline-table","& p":{backgroundColor:"#363636",paddingBottom:"0.8em",paddingLeft:"1em",fontSize:"0.5em"}},progressHeader:{height:"15px",backgroundColor:"#38373b",color:"#fff",borderRadius:"7px",width:"100%",border:"1px solid black"}}}));function E(){var e=v(),t=Object(n.useState)(0),a=Object(p.a)(t,2),o=a[0],i=a[1],c=Object(n.useState)(!0),l=Object(p.a)(c,2),d=l[0];l[1];return Object(n.useEffect)((function(){var e=null;return console.log(o),console.log(d),101===o&&i(0),d?e=setInterval((function(){i((function(e){return e+1}))}),1e3):d||0===o?i(0):clearInterval(e),function(){return clearInterval(e)}}),[d,o]),console.log(o),r.a.createElement("div",{className:e.rootHeader},r.a.createElement("p",null,"Reloading in ",r.a.createElement("span",null,o),"s"),r.a.createElement(b,{className:e.progressHeader,variant:"determinate",color:"primary",value:o}))}var y=a(12),w=a.n(y),j=Object(u.a)({mainTopHeader:{order:"1",backgroundColor:"#363636",color:"#fff",display:"flex",justifyContent:"space-between",height:"2em",padding:"1em",paddingBottom:"2em"},headerCity:{fontSize:"1.3em",width:"17%"},headerTime:{border:"1px solid #000",height:"fit-content",fontSize:"0.6em",padding:"0.7em",borderRadius:"4px"},headerCurrentWeather:{fontSize:"1.5em"}});function O(){var e=j(),t=new Date,a=t.getHours(),o=(a=a%12||12)+":"+t.getMinutes(),i="https://api.openweathermap.org/data/2.5/weather?q=".concat("London,UK","&APPID=").concat("02e8d71b0387ff5174b1913ab68d9663","&units=metric&cnt=40"),c=Object(n.useState)([]),l=Object(p.a)(c,2),d=l[0],s=l[1];return Object(n.useEffect)((function(){w.a.get(i).then((function(e){s(e.data.main.temp)})).catch((function(e){return console.log(e)}))}),[]),r.a.createElement("div",{className:e.mainHeader},r.a.createElement("div",{className:e.mainTopHeader},r.a.createElement("div",{className:e.headerCity},r.a.createElement("span",null,"LONDON")),r.a.createElement("div",{className:e.headerTime},r.a.createElement("span",null,"*** "),r.a.createElement("span",null,o," GTM "),r.a.createElement("span",null," ***")),r.a.createElement("div",{className:e.headerCurrentWeather},Math.floor(d),"\xb0")),r.a.createElement(E,null))}var x=Object(u.a)({mainDailyReport:{backgroundColor:"#696969",color:"#fff",display:"flex",justifyContent:"space-between",margin:"4px",borderRadius:"2px",padding:"0.2em 0",alignItems:"center"},DailyReportDay:{fontSize:"1.4em",padding:"10px",paddingLeft:"1em"},DailyReportTemperature:{fontSize:"2em",padding:"10px",paddingLeft:"0",width:"20%"},DailyReportContition:{display:"flex",flexDirection:"column",textAlign:"center",width:"35%",paddingRight:"0.3em",alignItems:"flex-end"},DailyReportContitionDescription:{fontSize:"0.8em",textTransform:"uppercase",fontWeight:"100",fontFamily:"monospace"}});function D(){var e="https://api.openweathermap.org/data/2.5/forecast?q=".concat("London,UK","&APPID=").concat("02e8d71b0387ff5174b1913ab68d9663","&units=metric&cnt=40"),t=x(),a=Object(n.useState)([]),o=Object(p.a)(a,2),i=o[0],c=o[1];return Object(n.useEffect)((function(){w.a.get(e).then((function(e){c(e.data.list)})).catch((function(e){return console.log(e)}))}),[]),r.a.createElement("div",null,i.map((function(e,a){return r.a.createElement("div",{className:t.mainDailyReport,key:a},r.a.createElement("div",{className:t.DailyReportDay},e.dt_txt),r.a.createElement("div",{className:t.DailyReportTemperature},r.a.createElement("span",null,Math.floor(e.main.temp),"\xb0")),r.a.createElement("div",{className:t.DailyReportContition},r.a.createElement("span",null,r.a.createElement("img",{src:"http://openweathermap.org/img/w/".concat(e.weather[0].icon,".png"),alt:"img"})),r.a.createElement("span",{className:t.DailyReportContitionDescription},e.weather[0].description)))})))}var C=Object(u.a)({mainDailyReport:{backgroundColor:"#363636",color:"#fff",display:"flex"}});function R(){var e=C();return r.a.createElement("div",{className:e.historyMain},r.a.createElement(D,null))}var k=function(e){function t(){return Object(c.a)(this,t),Object(d.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(O,null),r.a.createElement(R,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[33,1,2]]]);
//# sourceMappingURL=main.c6d63fbd.chunk.js.map