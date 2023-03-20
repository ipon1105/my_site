// Основная функция, передаем в нее обрабатываемый тег
// или this (для текущего тега)
let timerId;
let lastEl;

function onPopover(t) {
    console.log('Popover ON; lastEl = '+ lastEl);
    if (lastEl && lastEl != t)
        clear();
    lastEl = t;
    if (timerId) 
        clearTimeout(timerId);
    
    t.getElementsByClassName('Popover')[0].style.display = 'block';
}

// Функция закрывает все подсказки
function clear() {
    console.log('Popover OFF');
    
    let arr = document.getElementsByClassName('Popover');
    for (let i = 0; i < arr.length; i++){
        arr[i].style.display = 'none';
    }
}

function offPopover(){
    timerId = setTimeout(function(){
        clear();
    },500);
}