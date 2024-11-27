if (window.innerWidth > 400 && window.innerWidth < 700) {

let burgers = [1]
let burgerOne = document.getElementById('burgerOne')   
let burgerTwo = document.getElementById('burgerTwo')   
let burgerThree = document.getElementById('burgerThree') 
let burgerFour = document.getElementById('burgerFour')  

window.addEventListener('load', loadAnimation)

orderButton.addEventListener('click', () => {})
readMoreButton.addEventListener('click', () => {})
nextButton.addEventListener('click', nextImg)
prevButton.addEventListener('click', prevImg)

function getCurrentBurger() {
    switch (burgers[0]) {
        case 1: return burgerOne;
        case 2: return burgerTwo;
        case 3: return burgerThree;
        case 4: return burgerFour;
        default: return burgerOne;
    }
}



function loadAnimation() {
    
    cooldown(nextButton, prevButton)

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
            }
    }, 10)
}

function nextImg() {
    let position = 600
    
    cooldown(nextButton, prevButton)

    let currentBurger = getCurrentBurger()

         currentBurger.style.transition = '2s'
         
            let anim = setInterval(() => {
                if (position >= 1400) {
                    clearInterval(anim)
                    burgers.push(burgers.shift() + 1)
                    if (burgers[0] > 4) burgers[0] = 1
                    animationNext(position)
                } else {
                    position += 50
                    currentBurger.style.left = position + 'px'
                    console.log(position)
                    setTimeout(() => {
                        currentBurger.style.display = 'none'
                    }, 1500);
    
    
                }
        }, 10)
        } 
    
        }
    

function animationNext(posicao) {

    cooldown(nextButton, prevButton)

    let currentBurger = getCurrentBurger()
     currentBurger.style.display = 'flex'
     currentBurger.style.width = 235 + 'px'
     currentBurger.style.top = 402 + 'px'
     burgerFour.style.width = 250 + 'px'
     currentBurger.style.transition = '2s'

        setTimeout(() => {

            let anim = setInterval(() => {
                if (posicao <= 80) {
                    clearInterval(anim)
                } else {
                    posicao -= 15
                    currentBurger.style.left = posicao + 'px'
                }
            }, 10)
        }, 1500);


}

function prevImg() {
    let position = 600

    cooldown(nextButton, prevButton)

    let currentBurger = getCurrentBurger()
    currentBurger.style.transition = '2s';

let anim = setInterval(() => {
if (position >= 1400) {
    clearInterval(anim)
    
    burgers.push(burgers.shift() - 1)
    animationNext(position)
} else {
    position += 200
    currentBurger.style.left = position + 'px'
    console.log(position)
    setTimeout(() => {
        currentBurger.style.display = 'none'
    }, 1500);
}
}, 10)

}

