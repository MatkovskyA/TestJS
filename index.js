const buttonBlock = document.querySelector('#button');
const textHidden = document.querySelector('#content');


buttonBlock.addEventListener('click', function () {
    textHidden.classList.toggle('content-hidden') ? buttonBlock.textContent = 'Открыть блок' : buttonBlock.textContent = 'Закрыть блок'
})

// Accordion---------------------------------

const titlesAcc = document.querySelectorAll('[data-name="accordion-title"]');

titlesAcc.forEach(function (item) {
    item.addEventListener('click', function (){

        this.nextElementSibling.classList.toggle('hidden')
    })
})

// Tabs--------------------------
//все заголовки
const tabsTitle  = document.querySelectorAll('[data-tab]');
//все контент боксы
const contentBoxes = document.querySelectorAll('[data-tab-content]')

tabsTitle.forEach(function (item) {
    item.addEventListener('click', function(){

        //скрыли все контет боксы
        contentBoxes.forEach(function(item){
            item.classList.add('hidden');
            });

            //выбираем нужный бокс и отображаем
        const contentBox = document.querySelector('#' + this.dataset.tab);
        contentBox.classList.remove('hidden');
    
    
    })
})

// modalki
//переменные - кнопки, модалки и кнопки
const buttonsModal = document.querySelectorAll('[data-modal-button]');
const modals = document.querySelectorAll('[data-modal]')
const buttonsClose = document.querySelectorAll('[data-modal-close]')
const modalsWindow = document.querySelectorAll('.modal-window');

//Кнопки открытия модалки
buttonsModal.forEach(function (item){
    item.addEventListener('click', function(){
        const modalId = this.dataset.modalButton;
        const modalVisible = document.querySelector('#' + modalId)
        modalVisible.classList.remove('hidden')

//находим открываемой модалки блок модал-виндоу и отключаем клики по нему(на верх его родителю)
        modalVisible.querySelector('.modal-window').addEventListener('click', function(event) {
            event.stopPropagation();
        })
    })
})
//Кнопки закрытия модалки
buttonsClose.forEach(function(item) {
    item.addEventListener('click', function(){
        const thisModal = this.closest('[data-modal]');
        thisModal.classList.add('hidden')
    })
})

// закрытие модалок по фону
modals.forEach(function(item) {
    item.addEventListener('click', function(){
        this.classList.add('hidden')
    })
})


// modalWindow.addEventListener('click', function(event) {
//     event.stopPropagation();
// })

// для закрытия по одному окну
// buttonsClose.addEventListener('click', function() {
//     modal.classList.add('hidden')
// })

// modal.addEventListener('click', function(){
//     modal.classList.add('hidden')
// })

// modalWindow.addEventListener('click', function(event) {
//     event.stopPropagation();
// })