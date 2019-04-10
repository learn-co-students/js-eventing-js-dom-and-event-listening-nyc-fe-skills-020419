const main = document.getElementById('main')
function onClick(){
  console.log('hey the click happened.')
}
main.addEventListener('click', onClick)

// function onClick(event){
// console.log(event);
// }
// function onKeyDown(event){
// console.log(event.KeyCode)
//main.addEventListener('keydown' onKeyDown)
// }
const inputBox = document.getElementById('hey')
function onInputKeyDown(event){
  if (event.keyCode === 71){
    event.preventDefault()
  }
  console.log(event)
}
inputBox.addEventListener('keydown', onInputKeyDown)

const p = document.getElementById('yellow')
// function OnYellowClick(event){
  
// }
p.addEventListener('click', (event) => {
  p.style.backgroundColor = yellow  
} )