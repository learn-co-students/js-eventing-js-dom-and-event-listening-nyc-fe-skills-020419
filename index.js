// We want to react to clicks on the main tag
// let main = document.getElementById('main')


// function onClick(event) {
//   console.log(event)
// }

// function onKeyDown(){
//   console.log('Hey! You clicked key number ' + event.which + ". Nice Job!")
// }

//event listener needs two inputs 1st, action 2nd function to perform
// main.addEventListener('click', onClick)
// document.addEventListener('keydown', onKeyDown)


let inputBox = document.getElementById('inputBox')



function onInputKeyDown(event) {
  if (event.which === 71) {
  event.preventDefault()
} else {
  console.log(event.which)
}
}

inputBox.addEventListener('keydown', onInputKeyDown)

