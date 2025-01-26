const e=["slide1","slide2","slide3","slide4","slide5"];let t=0;function s(t){e.forEach(e=>{document.getElementById(e).classList.remove("active")}),document.getElementById(e[t]).classList.add("active")}setInterval(function(){s(t=(t+1)%e.length)},3e3),s(t);
//# sourceMappingURL=index.cde3bbbf.js.map
