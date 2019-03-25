// Problem: we want to react to clicks on the <main> tag

const main = document.getElementById('main')

// addEventListener has two options

// 1. is the even that we care about
// 2. is the function that is supposed to run when the event happens

function onClick(event) {
  console.log(event)
}

function onKeyDown(event) {
  console.log(event.keyCode)
}

main.addEventListener('click', onClick)

// document.addEventListener('keydown', onKeyDown)

const inputBox = document.getElementById('sup')

function onInputKeyDown(event) {
  
  console.log(event)
  
  if(event.keyCode === 71) {
    
    event.preventDefault()
    
  }
}

inputBox.addEventListener('keydown', onInputKeyDown)

const p = document.getElementById('yellow')

//anonymous arrow functions

p.addEventListener('click', (event) => {
  
  console.log(event)
  
  p.style.backgroundColor = 'yellow'
  
})

const button = document.getElementById('plus')

button.addEventListener('click', () => {
  
  const newP = document.createElement('p')
  
  newP.innerHTML = 'Congratulations!'
  
  document.body.appendChild(newP)
  
})

const divs = document.querySelectorAll('div')

// [div1, div2, div3, div4, div5]

for(let div of divs) {
  
  div.addEventListener('click', (event) => {
    
    console.log(event)
    
    event.stopPropagation() //stops event bubbling
  })
}

// event bubbling



