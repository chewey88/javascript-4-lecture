// const chrisObj = {
//     name: `Chris`,
//     age: 32,
//     handsome: true,
//     hobby: `rockhounding`,
// }
console.log('File connected')

const formButton = document.getElementById('story-button')

const listItems = document.getElementsByTagName('li')

const headerText = document.querySelector('.title')

headerText.classList.add('dark-mode')
console.dir(headerText.innerText)

// const updatedStyles = {
//     color: `red`,
//     fontSize: `25px`,
//     textDecoration: 
// }

// headerText.innerText = `I am in control now`

// headerText.style.color = `red`

// headerText.style.fontSize = `50px`
// different ways to edit from JavaScript
// headerText.style = `color: red; text-decoration: underline; font-size: 24px`

function showMeTheMoney(){
    // console.log(`$$$$$$$$$`)
}

function changeColor(e){ /* e stands for event*/
    e.preventDefault()
    const contentHold = document.querySelector(`.content-hold`)
    const colorInput = document.getElementById('color-input')
    // console.log(contentHold)
    // console.log(colorInput)
    contentHold.style.background = colorInput.value
}

formButton.addEventListener('click', changeColor) /* 2nd arguement tells it to do it everytime the event occurs instead of just once */

function addAPart(){
    const newLi = document.createElement('li')
    const listItems = document.querySelectorAll('li')
    
    newLi.addEventListener('dblclick', function(){
        newLi.remove()
    })

    newLi.innerText = `ACT ${listItems.length + 1} is THE GREATEST`
    const partList = document.getElementById(`part-list`)
    partList.appendChild(newLi)
}
document.getElementById('part-button').addEventListener(`click`, addAPart)