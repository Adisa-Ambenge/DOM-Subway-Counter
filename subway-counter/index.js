let count1 = document.getElementById("count1") //methods pass in arguments
console.log(count1)
let count = 0;
function increment(){
    count = count + 1 //increment
    count1.innerText=count
   console.log (count)
}
increment() 

function save(){
    console.log(count)
}
save( )