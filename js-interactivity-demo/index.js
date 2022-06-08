let count = 0;

const minusBtn = document.querySelector('#minus-btn');
const resetBtn = document.querySelector('#reset-btn');
const plusBtn = document.querySelector('#plus-btn');

const counter = document.getElementById('counter');

const buttons = document.querySelectorAll('.theme-buttons');

function increase(){
    count += 1
    counter.textContent = count
}

const decrease = function(){
    count -= 1
    counter.textContent = count
}

const reset = () => {
    count = 0
    counter.textContent = count
}

function selectTheme(event){
    let theme = event.target.textContent
    document.querySelector('body').className = theme
    document.querySelector('main').className = theme
}

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', selectTheme)
}

minusBtn.addEventListener('click', decrease)
resetBtn.addEventListener('click', reset)
plusBtn.addEventListener('click', increase)