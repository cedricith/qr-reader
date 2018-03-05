(function() {
    "use strict";

    window.onload = function(){
        console.log("running!!");
    }

    window.setInterval(animalListeners(), 100);

    function animalListeners() {
        console.log("current scan = " + document.querySelector("#scanned-QR").innerHTML);
    }
}());
