(
    function(){
        let p = document.getElementsByClassName("value")[0];
        let callTrack = setInterval(getKey, 100);
        function getKey(){
            p = document.getElementsByClassName("value")[0];
            console.log("key ---> " + p.innerHTML);
            if(p.innerHTML >0){
                confirm('Confrm someone is coming >...') ? clearLoop()   : window.location.reload();
            }
            function clearLoop(){
                clearInterval(callTrack);
            }
        }
            
    }
)()
