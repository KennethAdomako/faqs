const Questions = [
document.getElementById('question1'),
document.getElementById('question2'),
document.getElementById('question3'),
document.getElementById('question4'),
]

const Buttons = [
document.getElementById('button1'),
document.getElementById('button2'),
document.getElementById('button3'),
document.getElementById('button4'),
]

const Plus = [
document.getElementById('plus1'),
document.getElementById('plus2'),
document.getElementById('plus3'),
document.getElementById('plus4')
]

const minus = document.createElement('img');
minus.src = "/assets/images/icon-minus.svg";
minus.alt = "Minus sign";

Buttons.forEach((button, index) => {

button.addEventListener('click',()=>{

Questions.forEach((question,i)=>{

if (!question) return;

if (i === index) {
question.style.display = question.style.display === 'grid' ? 'none' : 'grid';
} 

else {
question.style.display = 'none';
}


})

if (Plus[index] && Plus[index].src.includes("icon-plus.svg")) {
button.replaceChild(minus, Plus[index]);
Plus[index] = minus;
} 
else {
const plus = document.createElement('img');
plus.src = "/icon-plus.svg";
plus.alt = 'Plus sign';
button.replaceChild(plus,minus);
Plus[index] = plus
}

})


});
  