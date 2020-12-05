
export default function initModal(){

    const modalBg = document.getElementById('modal-bg');
    const modalClose = document.getElementById('modal-close');

    function loading(){
        setTimeout(function(){
            modalBg.classList.add('bg-active')
            console.log('funcionando')
        },1000)
    }

    addEventListener('load', loading())
        
    modalClose.addEventListener('click', function(){
        modalBg.classList.remove('bg-active');
    })
};