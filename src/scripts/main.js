document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    
    for (let i =0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function(botao){
            const abaAlvo = botao.target.dataset.tabButton;
            escondeAbas();
            abaAlvo.classList.add('characters__list__item--is-active');
            
            
        })
    }



})

function escondeAbas(){
    const tabsId = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsId.length; i++){
        tabsId[i].classList.remove('characters__list__item--is-active');
    }

}