function onClick(event) {
  console.log(event)
}

function onKeyDown(event) {
  console.log(event.keyCode)
}

const inputBox = document.getElementById('sup')

function onInputKeyDown(event){
  console.log(event)
  if (event.keyCode === 71) {
    event.preventDefault()
  } else {
  }
}






const p = document.getElementById('yellow')

function onYellowClick() {
  
}

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
for (let div of divs) {
  div.addEventListener('click', (event) => {
    console.log(event)
    event.stopPropagation()
  })
}