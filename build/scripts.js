var test={};SC.initialize({client_id:"34417f683cc3691f1c2db4f3b1311cc8"}),function(){function e(e,c){SC.get("/tracks/"+c,{limit:1},function(n){e.style.backgroundImage="url("+n.artwork_url.replace("-large","-t300x300")+")",e.addEventListener("click",function(){t&&t.unload(),SC.stream("/tracks/"+c,function(e){t=e,t.play()})})})}for(var t=null,c=document.querySelectorAll(".player"),n=0;n<c.length;n++){var a=c[n],r=a.dataset.track;e(a,r)}}(),function(){var e=function(){var e=document.querySelector(".menu"),t=!0===e.classList.contains("open");t?e.className=e.className.replace(" open",""):e.className+=" open"},t=document.querySelector(".hamburger");t&&t.addEventListener("click",e)}();
//# sourceMappingURL=scripts.js.map