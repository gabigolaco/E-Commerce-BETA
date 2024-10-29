let orderButton = document.getElementById('orderButton')
let readMoreButton = document.getElementById('readmoreButton')
let nextButton = document.getElementById('nextButton')
let prevButton = document.getElementById('prevButton')

orderButton.addEventListener('click', () => {})
readMoreButton.addEventListener('click', () => {})
nextButton.addEventListener('click', nextImg)
prevButton.addEventListener('click', () => {})

window.addEventListener('load', loadAnimation)

let burgerOne = document.getElementById('burgerOne')   
let burgerTwo = document.getElementById('burgerTwo')   
let burgerThree = document.getElementById('burgerThree')   

function loadAnimation() {
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

function nextImg() {
    nextButton.disabled = true
    
    setTimeout(() => {
        nextButton.disabled = false // COOLDOWN
    }, 2000);

    let position = 600
    burgerOne.style.transition = '2s'
    if (burgerOne.offsetLeft === position) {
        let anim = setInterval(() => {
            if (position >= 1400) {
                clearInterval(anim)
                animationTwo(position)
            } else {
                position += 200
                burgerOne.style.left = position + 'px'
                console.log(position)
                setTimeout(() => {
                    burgerOne.style.display = 'none'
                }, 1500);


            }
    }, 10)
    }
}

function animationTwo(posicao) {
    burgerTwo.style.display = 'flex'

    setTimeout(() => {
        let anim = setInterval(() => {
            burgerTwo.style.transition = '2s'
            if (posicao <= 600) {
                clearInterval(anim)
            } else {
                posicao -= 15
                burgerTwo.style.left = posicao + 'px'
            }
        }, 10)
    }, 1500);
   

}
