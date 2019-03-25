const main = document.getElementById('main')

function onClick(event) {
  console.log('hey the click happened')
}
main.addEventListener('click', onClick)

function onKeyDown(event) {
  console.log(event.keyCode)
}

main.addEventListener('click', onClick)
// document.addEventListener('keydown', onKeyDown)

const inputBox = document.getElementById ('baby')
function onInputKeyDown(event) {
  console.log(event)




if (event.keyCode === 71) {
  event.preventDefault()
} else {

}
}
inputBox.addEventListener('keydown', onInputKeyDown)










const p =document.getElementById('yellow')

function onYellowClick() {
}
p.addEventListener('click', (event) => {
  console.log(event)
  p.style.backgroundColor ='yellow'
})



const button = document.getElementById('pink')

button.addEventListener('click', () => {
  const newP= document.createElement("p")
  newP.innerHTML = "Congratulations! Here's your Birth Chart"
  main.appendChild(newP)
})


const divs = document.querySelectorAll('div')

for (let div of divs) {
  div.addEventListener("click", (event) => {
    console.log(event)
    event.stopPropagation()
  })
}