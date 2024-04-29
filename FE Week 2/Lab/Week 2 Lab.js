let actionImageElem = document.getElementById('action');
let counterDisplayElem = document.querySelector('.counter-display');
let counterMinusElem = document.querySelector('.counter-minus');
let counterPlusElem = document.querySelector('.counter-plus');
let counterResetElem = document.querySelector('.counter-reset');

let count = 0;

updateDisplay();

counterMinusElem.addEventListener("click",()=>{
    count--;
    updateDisplay();
    actionImageElem.src = "Week 2 Lab img/기분 나쁜 팽도리.jpg";
    setTimeout(() => {
        actionImageElem.src = "Week 2 Lab img/무념무상 팽도리.jpg";
    }, 1000); /*1000미리초, 즉 1초 기다린 후 actionImageElem.src ~코드를 실행하는 것이다.*/
});

counterPlusElem.addEventListener("click",()=>{
    count++;
    updateDisplay();
    actionImageElem.src = "Week 2 Lab img/기분 좋은 팽도리.jpg";
    setTimeout(() => {
        actionImageElem.src = "Week 2 Lab img/무념무상 팽도리.jpg";
    }, 1000);
});

counterResetElem.addEventListener("click",()=>{
    count = 0;
    updateDisplay();
});

function updateDisplay() {
    counterDisplayElem.innerHTML = count;
}