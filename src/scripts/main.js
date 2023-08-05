document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    
    for (let i =0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function(botao){

            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`)
            escondeAbas();
            aba.classList.add('characters__list__item--is-active');
            removeBotaoAtivo();
            botao.target.classList.add('characters__tab__button--is-active');
            
        })
    }



})

function removeBotaoAtivo(){
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++){
        buttons[i].classList.remove('characters__tab__button--is-active');
    }

}

function escondeAbas(){
    const tabsId = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsId.length; i++){
        tabsId[i].classList.remove('characters__list__item--is-active');
    }

}