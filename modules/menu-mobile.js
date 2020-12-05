
export default function initMenuMobile(btn, content){

    const btnHb = document.querySelector(btn);
    const nav = document.querySelector(content);

    function openMenu(){
        nav.classList.toggle('active');
    };

    if(window.innerWidth < 600){
        btnHb.addEventListener('click', openMenu);
    };
};