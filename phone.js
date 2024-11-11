if (window.innerWidth > 300 && window.innerWidth < 600) {

let orderButton = document.getElementById('orderButton')
let readMoreButton = document.getElementById('readmoreButton')
let nextButton = document.getElementById('nextButton')
let prevButton = document.getElementById('prevButton')
let burgerMenuButton = document.getElementById('burgerMenuButton')

let burgerOne = document.getElementById('burgerOne')   
let burgerTwo = document.getElementById('burgerTwo')   
let burgerThree = document.getElementById('burgerThree') 
let burgerFour = document.getElementById('burgerFour')  


let burgers = [1]

window.addEventListener('load', loadAnim)

orderButton.addEventListener('click', () => {})
readMoreButton.addEventListener('click', () => {})
nextButton.addEventListener('click', () => nextImg2)
prevButton.addEventListener('click', () => {})

function loadAnim() {
    nextButton.disabled = true
    prevButton.disabled = true

    setTimeout (() => {
        nextButton.disabled = false
        prevButton.disabled = false
    }, 2000)

    let position = 2000
    burgerOne.style.transition = '1s'
    
    
    burgerOne.style.left = position + 'px'
    
    let anim = setInterval(() => {
            burgerOne.style.display = 'flex'
            if (position <= 101) {
                clearInterval(anim)
            } else {
                position -= 30
                burgerOne.style.left = position + 'px'
                console.log(position)
            }
    }, 10)
}

function nextImg2() {
    nextButton.disabled = true
    prevButton.disabled = true

    setTimeout (() => {
        nextButton.disabled = false
        prevButton.disabled = false
    }, 2000)

    let position = 1200
    burgerOne.style.transition = '1s'
    
    
    burgerOne.style.left = position + 'px'
    
    let anim = setInterval(() => {
            burgerOne.style.display = 'flex'
            if (position <= 600) {
                clearInterval(anim)
            } else {
                position -= 30
                burgerOne.style.left = position + 'px'
                console.log(position)
            }
    }, 10)
}

}