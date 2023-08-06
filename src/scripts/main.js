document.addEventListener('DOMContentLoaded', function(){
    const buttonsCharac = document.querySelectorAll('[data-tab-button]');
    const buttonsAct = document.querySelectorAll('[data-tab-button2')
    
    for (let i =0; i < buttonsCharac.length; i++){
        buttonsCharac[i].addEventListener('click', function(botao){

            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`)
            escondeAbas();
            aba.classList.add('characters__list__item--is-active');
            removeBotaoAtivo();
            botao.target.classList.add('characters__tabs__button--is-active');
            
        })
    }

    for (let i = 0; i < buttonsAct.length; i++){
        buttonsAct[i].addEventListener('click', function(botao2){
            const abaAlvo = botao2.target.dataset.tabButton2;
            const aba = document.querySelector(`[data-tab-id2=${abaAlvo}]`);
            escondeAbas2();
            aba.classList.add('actors__list__item--is-active');
            removeBotaoAtivo2();
            botao2.target.classList.add('actors__tabs__button--is-active')

        })
    }



})

function removeBotaoAtivo(){
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++){
        buttons[i].classList.remove('characters__tabs__button--is-active');
    }

}

function removeBotaoAtivo2(){
    const buttons = document.querySelectorAll('[data-tab-button2');

    for (let i =0; i < buttons.length; i ++){
        buttons[i].classList.remove('actors__tabs__button--is-active');
    }
}

function escondeAbas(){
    const tabsId = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsId.length; i++){
        tabsId[i].classList.remove('characters__list__item--is-active');
    }

}

function escondeAbas2(){
    const tabId = document.querySelectorAll('[data-tab-id2]');

    for (let i =0; i < tabId.length; i++){
        tabId[i].classList.remove('actors__list__item--is-active')
    }

}