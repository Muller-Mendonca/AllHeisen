
export default function initMenuMobile(btn, content){

    const btnHb = document.querySelector(btn);
    const nav = document.querySelector(content);

    btnHb.addEventListener('click', openMenu);

    function openMenu(){
        nav.classList.toggle('active');
    };
}