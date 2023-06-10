//create a variable myAge and set its value to your age

let myAge = 24;

//log the myAge variable to the

console.log(myAge);

let firstBatch = 19
let secondBatch = 20

let sum = firstBatch + secondBatch
console.log(sum)

//create two variables myAge and human Dog ratio

let myAges = 24;
let humanDogRatio = 7;

//multiply the two together and store the result in myDogAge
let myDogAge = myAges * humanDogRatio;

//log myDogAge to the console
console.log(myDogAge);
//create a variable bonusPoints,initialize it to 50,increase it to 100
//decrease it down to 25,and then finally increase it to 70
let bonusPoints = 50;
console.log(bonusPoints)  
bonusPoints = bonusPoints + 50;
console.log(bonusPoints)
bonusPoints = bonusPoints - 75;
console.log(bonusPoints)
bonusPoints = bonusPoints + 45;
console.log(bonusPoints)

//setting up race using functions
function countdown(){
    console.log(5)
    console.log(4)
}
countdown()

//create a function that logs out the number 42
function countNumber(){
    console.log(42)
}
countNumber()

//create a function that logs out the sum of all the lap times
let lap1 = 34  
let lap2 = 33
let lap3 = 36
function addition(){
   let totalLap = lap1+lap2+lap3
    console.log(totalLap)
}
addition()

//create a function that increments the laps completed variable with one
//run it three times

function lapsCompleted( ){
    lap1 = lap1+1
    console.log(lap1)

}
lapsCompleted()
lapsCompleted()
lapsCompleted()

function mergeSort(num){
    if(num.length<=1){
        return num
    }
    let middle = Math.floor(num.length/2);
    let left = num.slice(0,middle);
    let right = num.slice(middle);
   return  mergeSorted(mergeSort(left),mergeSort(right));
}
function mergeSorted(left,right){
    let newNum = [];
    while(left.length && right.length){
        if(left[0]<right[0]){
        newNum.push(left.shift());
        }
        else{
            newNum.push(right.shift());
        
    }
    
}
console.log({newNum});
return [...newNum,...left,...right]

}


function binary(num,target){
    let left = 0;
    let right = num.length - 1;
    while(left<right){
        let middle = Math.floor(left+right/2);
        if(num[middle]===target){
            return middle
        }
        else if (num[middle]>target){
            right = middle - 1;

        }
        else{
            left = middle+1;
        }
    }
    return null
}
let num = [2,8,0,23,5,45,76];
console.log(mergeSort(num));
let target = 53;
console.log(binary(num,target));

//question 2 version 1
function sorted (num){
    let numsorted = num.sort((a,b)=> a -b);
    console.log(numsorted);
}
// let num = [2,8,0,23,5,45,76];
// sorted(num);

let username = "Angela"
console.log(username);
let message = "You have three new notifications"
console.log(message + ","+username);

let person = username .concat(message)
console.log(person);

// Write a function that takes a string as an argument and returns true 
//if the string is a palindrome (reads the same backwards and forwards) and false if it is not

function words(String){
        if(String.split("").reverse().join("")===String){
            return true
        }
        else {
            return false
        }
            
        }
    
   
 
console.log(words("noon"))
console.log(words("bob"))