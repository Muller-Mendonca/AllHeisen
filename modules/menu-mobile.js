
export default function initMenuMobile(btn, content){

    const btnHb = document.querySelector(btn);
    const nav = document.querySelector(content);

    const events = ['click', 'touchstart'];

    function openMenu(){
        nav.classList.toggle('active');
    };

    if(window.innerWidth < 600){
        btnHb.addEventListener(events[1], openMenu);
    };
};