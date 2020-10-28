
export default function initMenuMobile(){

    const btnHb = document.querySelector('[data-js="btn-hamburguer"]');
    const nav = document.querySelector('[data-js="nav"]');

    btnHb.addEventListener('click', openMenu);

    function openMenu(){
        nav.classList.toggle('active');
    };
}