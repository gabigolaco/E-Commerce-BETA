let orderButton = document.getElementById('orderButton')
let readMoreButton = document.getElementById('readmoreButton')
let nextButton = document.getElementById('nextButton')
let prevButton = document.getElementById('prevButton')

orderButton.addEventListener('click', () => {})
readMoreButton.addEventListener('click', () => {})
prevButton.addEventListener('click', () => {})

window.addEventListener('load', loadAnimation)

function loadAnimation() {
let burgerOne = document.getElementById('burgerOne')   
 let position = -600
 burgerOne.style.right = position + 'px'
 burgerOne.style.display = 'flex'

 let anim = setInterval(() => {
    if (position >= 115) {
        clearInterval(anim)
    } else {
        position += 10
        burgerOne.style.right = position + 'px'
    }
}, 1)
burgerOne.style.transition = '1s'
}