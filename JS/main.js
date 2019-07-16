// preloader
const loadWindow = document.getElementById("PreLoader");
const header = document.getElementById("header");
const main = document.getElementById("main");
const body = document.getElementById("body");
const slider = document.getElementById('slider')
    function loaderClose(){
        loadWindow.style.display = 'none';
        header.style.position = 'fixed';
        main.style.marginTop = '120px';
        body.style.overflowY = 'scroll';
        slider.style.marginTop = '100px';
}
    window.onload = function loadWindowFunc(){
        loadWindow.style.animation = 'preloader 1s linear';
        setTimeout(loaderClose, 820);
} 
console.log('Не лезь сюда басырман')

// calculator
var calcNum = document.getElementById('calculatorNumber')

calcNum.addEventListener('click', function(){
        console.log('lol')
})
// slider
function insert(num){
        document.forms.calcInput.value = document.forms.calcInput.value + num
}
// date


