

const buttonResult1 = document.querySelector('.result-btn1')

const number1 = document.querySelector('.number1');
const number2 = document.querySelector('.number2');


buttonResult1.addEventListener('click', adding); 

function adding(){
    let a = number1.value;
    let b = number2.value;

    let result1 = Number(a) + Number(b);
    alert(result1)


}




const buttonResult2 = document.querySelector('.result-btn2')

const number3 = document.querySelector('.number3');
const number4 = document.querySelector('.number4');


buttonResult2.addEventListener('click', removing); 

function removing(){
    let a = number3.value;
    let b = number4.value;

    let result2 = Number(a) - Number(b);
    alert(result2)


}






const buttonResult3 = document.querySelector('.result-btn3')

const number5 = document.querySelector('.number5');
const number6 = document.querySelector('.number6');


buttonResult3.addEventListener('click', dividing); 

function dividing(){
    let a = number5.value;
    let b = number6.value;

    let result3 = Number(a) / Number(b);
    alert(result3)

}



const buttonResult4 = document.querySelector('.result-btn4')

const number7 = document.querySelector('.number7');
const number8 = document.querySelector('.number8');


buttonResult4.addEventListener('click', multiplying); 

function multiplying(){
    let a = number7.value;
    let b = number8.value;

    let result4 = Number(a) * Number(b);
    alert(result4);


}