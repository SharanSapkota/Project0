// var firstVal = document.querySelectorAll('.a').length
// console.log(firstVal)
// var i;
// for( i = 0; i<firstVal; i++){
//     const getVal = document.querySelectorAll('.a')[i]
//     const playOnClick = getVal.innerHTML
//     getVal.addEventListener('click', () => {
//     play(playOnClick)
  
// })
    
// }

// document.addEventListener('keypress', (e) => {
//     play(e.key)
// })



// function play(playOnClick){
// if(playOnClick =='a') {
   
// }
// else if (playOnClick =='b') {
//     console.log('b is clicked')
// }
// }

// firstVal.addEventListener('click', () => {
    
// })

// let i;

// for(i = 0; i<5; i++){
//    const a = document.getElementById('div1').innerHTML
//    console.log(a)
// }


// if (condition) {
//     Block of statements
// }
// else if (condition){

// }
// else {
//     Block of statements
// }


// const num = 1;

// if(num>1){
//     console.log('this is more than number 1 ')

// }

// else if (num === 1){
//     console.log('this is number 1')
//     const getDiv = document.getElementById('div1').innerHTML = "Number 1 "
//     console.log(getDiv)
// }

// else if (num <1){
//     console.log('less than 1')
// }

// else {
//     console.log('Error')
// }



// let i;

// for loop syntax

// for ( valueInitialization; kati samma ChannelMergerNode; increment/decrement) {
//     Block of statement
// }

// for (i = 0; i<=6; i++) {
//     const getDiv = document.('div1').innerHTML =
// }

const getButton = document.getElementById('btn');
// console.log(getButton);

getButton.addEventListener('click', ()=>{
    const playSound = new Audio('/sound/tom1.mp3');
    playSound.play();
})


let i;
const getButton1 = document.querySelectorAll('#btn')
const lengthOfBtn = getButton1.length
// console.log(lengthOfBtn)

for (i = 0; i<lengthOfBtn; i++){
    const getHTML = document.querySelectorAll('#btn')[i].innerHTML
    console.log(getHTML)
    functionABC(getHTML)
}

const functionABC = (getHTML) => {
    if(getHTML === 'a'){
        
    }
    
}
