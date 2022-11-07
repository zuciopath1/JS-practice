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

for (let i = 0; i < nums.length; i++) {
    if ((nums[i] % 2) === 1) {
        odds.push(nums[i]);
    }
    else {
        evens.push(nums[i]);
    }
}
console.log(evens);
console.log(odds);