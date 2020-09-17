(function(){
    'use strict';


//    var modalBtn = document.getElementById('modal-btn');
    var modalBg = document.getElementById('modal-bg');
    var modalClose = document.getElementById('modal-close');

    addEventListener('load', function(){
        modalBg.classList.add('bg-active');
    })

    modalClose.addEventListener('click', function(){
        modalBg.classList.remove('bg-active');
    })

})();