// problem is we want to react to clicks on the <main> tag 

const main = document.getElementById('main')

// AddEventListener has 2 options 
// 1. is the event that we care about 
// 2. is the function that is supposed to run when that event happens 

// add parament for event in the function 

function onClick(event) {
  console.log(event)
}

main.addEventListener('click', onClick)

// document level evetns: online/offline, global help button/scrolling 

// order matters - will always take first for the event

// document.addEventListener('online/offline', onClick)

function onKeyDown(event) {
  console.log(event.keyCode)
}
document.addEventListener('keydown' , onKeyDown)

const inputBox = document.getElementById('sup')

function onInputKeyDown(event) {
  console.log(event)
  if (event.keyCode === 71) { 
    event.preventDefault()
  }
}
inputBox.addEventListener('keydown', onInputKeyDown)

const p = document.getElementById('yellow')

function onYellowClick(){
  
}

p.addEventListener('click', (event) => {
  console.log(event)
  // how do we make something yellow? 
  p.style.backgroundColor = 'yellow'
})

// anonymous arrow functions (event) => {}
// ES6 Javascript (in 2015) 

// 1st step - always find the element first 

const button = document.getElementById('plus')

button.addEventListener('click', () => {
  const newP = document.createElement('p')
  newP.innerHTML = 'Congratulations!'
  main.appendChild(newP)
})

const divs = document.querySelectorAll('div')

for (let div of divs) {
  div.addEventListener('click', (event) =>{
    console.log(event)
    event.stopPropagation() // stops bubbling from happening 
  })
}
// array [div1, div2]
// for loop iteration 
// event bubbling - cause of a lot of bugs in front end applications 














