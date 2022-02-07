(
    function(){
        let p = document.getElementById("rkey");
        let callTrack = setInterval(getKey, 100);
        function getKey(){
            p = document.getElementById("rkey");
            console.log("key ---> " + p.innerHTML);
            if(p.innerHTML >0){
                confirm('Confrm someone is coming ...') ? clearLoop()   : window.location.reload();
                // window.location.reload();
                // console.log("reload");
                // clearLoop(callTrack);
            }
            function clearLoop(){
                clearInterval(callTrack);
            }
        }
            
    }
)()


// (function(){let script = document.createElement("script");script.src = "script.js";document.body.appendChild(script);})