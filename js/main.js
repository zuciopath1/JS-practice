const name = 'zurab';

function toUpper(text){
    const uppercased = text.toUpperCase();
    console.log(uppercased);
    }

toUpper(name);
/*
I created a function in the following 
code that I used on a variable called 
,,name'' to make it uppercase and gave 
value to the text to do so.
*/

const schedule = ['get up','move','turn left','move','die'];
console.log(schedule);
schedule.pop(); //removes the last element.
schedule.push('die'); //adds specified element to the end of the array.
schedule.reverse(); //array has been reversed.
//=============================================


// TASK-2 //

let total=0;
for(let i=0; i<=287; i++){
    total = total + i;
}
console.log('the total is:'+total);
// =================================
//if the item is even, it adds it to the evens array, 
//if the item is odd, it adds it to the odds array.
let nums = [1,2,3,4,5,6,7,8,9,78,77];
const evens = [];
const odds = [];

for (let i = 0; i <= nums.length; i++) {
    if ((nums[i] % 2) === 1) {
        odds.push(nums[i]);
    }
    else {
        evens.push(nums[i]);
    }
}
console.log(evens);
console.log(odds);
//===============================

const join= (...strings) => strings.join('');
console.log(join('hello'+''+'world'));

let pattern = '';
for (let i = 1; i < 10; i++) {
    pattern += i + ' ';
    console.log(pattern);
}
// 
// program to find the square of a number
// function is declared inside the variable
let x = function (num) { return num * num };
console.log(x(28));
let y = x(15);
console.log(y);
//=================================
const arr = ['ONE', 'TWO', 'THREE'];
const lower = [];
arr.forEach(element => {
  lower.push(element.toLowerCase());
});

console.log(lower);
//==================
const mySentence = "javascript surprised me by being so challenging.";
const words = mySentence.split(" ");

for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
}
console.log(words);


// ==================================
// const signUp =document.querySelector('#signUp');
// const submit = document.querySelector('#none');
// console.log('signUp')

// signUp.addEventListener('click', (event) =>{
//         main.style.display = 'block';
// })

// none.addEventListener('click', () =>{
//     main.style.display = 'none';
// });

const form = document.querySelector('#form');
const firstName = document.querySelector('input[name=firstname]');
const lastName = document.querySelector('input[name=lastname]');
const country = document.querySelector('#country');
const ul = document.querySelector('#ul');
form.addEventListener('submit', (event)=>{
    event.preventDefault('submited');
    if(!firstName.value.trim() || !lastName.value.trim()){
        alert('empty field');
        return;
    }
    const li = document.createElement('li');
    li.textContent=`${firstName.value} ${lastName.value} ${country.value}`;
    ul.appendChild(li);
    console.log('submited',firstName.value='',lastName.value='',country.value, firstName.focus());
});