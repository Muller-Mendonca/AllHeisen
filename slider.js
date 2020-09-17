
(function(){
    "use strict"

    
    let currentImageIndex = 0;
    let images = document.querySelectorAll('#slider img');
    images[0].classList.add('selected');

    function nextImage(){

        images[currentImageIndex].classList.remove('selected');

        currentImageIndex++;
        
        if(currentImageIndex >= images.length)
           currentImageIndex = 0;

       images[currentImageIndex].classList.add('selected');
    }
    
    function start(){
        setInterval(() => {
            nextImage();
        }, 2000)
    }
    start();

})();

