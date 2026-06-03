

const buttonTwo = document.querySelector('.btn-2');
function alertBtn(){
    alert('I love the Python')
};


buttonTwo.addEventListener("click", alertBtn);

const newBackground = document.querySelector('.box-3');

function changeBgColor(){
    newBackground.style.backgroundColor ='blue';

}

newBackground.addEventListener("mouseover",changeBgColor);