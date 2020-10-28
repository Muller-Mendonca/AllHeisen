
export default function initMenuMobile(){
    console.log('funcionou');
    const btnHb = document.querySelector('[data-js="btn-hamburguer"]');
    console.log(btnHb)
    btnHb.addEventListener('click', openMenu);

    function openMenu(){
        console.log('Abriu')
    };
}