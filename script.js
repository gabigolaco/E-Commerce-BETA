let orderButton = document.getElementById('orderButton')
let readMoreButton = document.getElementById('readmoreButton')
let nextButton = document.getElementById('nextButton')
let prevButton = document.getElementById('prevButton')

function cooldown(...button) {
    button.forEach(botao => botao.disabled = true)
    setTimeout(() => {
        button.forEach(botao => botao.disabled = false)
    }, 3000);
}

if (window.innerWidth > 720 && window.innerWidth < 2000) {     
    
let burgers = [1]
let burgerOne = document.getElementById('burgerOne')   
let burgerTwo = document.getElementById('burgerTwo')   
let burgerThree = document.getElementById('burgerThree') 
let burgerFour = document.getElementById('burgerFour')  


    orderButton.addEventListener('click', () => {})
    readMoreButton.addEventListener('click', () => {})
    nextButton.addEventListener('click', nextImg)
    prevButton.addEventListener('click', prevImg)
    
    window.addEventListener('load', loadAnimation)

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

        let width = window.innerWidth
        let position = 1200

        burgerOne.style.transition = '1s'
        burgerOne.style.left = position + 'px'
        
        
        switch (true) {
            case width >= 1280 && width < 1920:
                burgerOne.style.display = 'flex'
                burgerOne.style.top = 70 + 'px'
                let animFor1280 = setInterval(() => {
                    if (position <= 580) {
                        clearInterval(animFor1280)
                    } else {
                        position -= 30
                        burgerOne.style.left = position + 'px'
                    }
            }, 10)
            break
            case width >= 1366 && width < 1920:
                burgerOne.style.display = 'flex'
                burgerOne.style.top = 50 + 'px'
                let animFor1366 = setInterval(() => {
                    if (position <= 580) {
                        clearInterval(animFor1366)
                    } else {
                        position -= 30
                        burgerOne.style.left = position + 'px'
                    }
            }, 10)
            break
            case width >= 1920 && width < 2048:
                burgerOne.style.top = 110 + 'px'
                burgerOne.style.display = 'flex'
                let animFor1920 = setInterval(() => {
                    burgerOne.style.display = 'flex'
                    if (position <= 800) {
                        clearInterval(animFor1920)
                    } else {
                        position -= 30
                        burgerOne.style.left = position + 'px'
                    }
            }, 10)
        }
    }

 function nextImg() {
     cooldown(nextButton, prevButton)
     
     let currentBurger = getCurrentBurger()
     currentBurger.style.transition = '2s';
     let position = returnPosition()
     let anim = setInterval(() => {
        if (position >= 2000) {
            clearInterval(anim)
            burgers.push(burgers.shift() + 1)
            if (burgers[0] > 4) burgers[0] = 1;
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
        
        function animationNext(posicao) {

        let currentBurger = getCurrentBurger()
        debugBurger(currentBurger)
        cooldown(nextButton, prevButton)
        currentBurger.style.transition = '2s'

            
                setTimeout(() => {
                    let anim = setInterval(() => {
                        if (posicao <= 560) {
                            clearInterval(anim)
                        } else {
                            posicao -= 15
                            currentBurger.style.left = posicao + 'px'
                        }
                    }, 10)
                }, 1500);
        }
        
function prevImg() {
    let position = returnPosition()
    let currentBurger = getCurrentBurger()

    debugBurger(currentBurger)
    cooldown(nextButton, prevButton)

     currentBurger.style.transition = '2s';

     let anim = setInterval(() => {
        if (position >= 2000) {
            clearInterval(anim)
            if (burgers[0] === 1) burgers[0] = 5;
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

function returnPosition() {

    switch(true) {
        case window.innerWidth >= 1280 && window.innerWidth < 1366:
            return 600
            break
            case window.innerWidth >= 1366 && window.innerWidth < 1920:
            return 600
            break

    }
}

function debugBurger(currentBurger) {

    switch (true) {
        case window.innerWidth >= 1280 && window.innerWidth < 1366: 
        currentBurger.style.display = 'flex'
        currentBurger.style.width = 560 + 'px'
        currentBurger.style.top = 65 + 'px'
        burgerThree.style.width = 630 + 'px'
        burgerThree.style.top = 10 + 'px'
        burgerFour.style.top = 20 + 'px'
        burgerFour.style.width = 660 + 'px'

    break
    case window.innerWidth >= 1366 && window.innerWidth <= 1920:
        currentBurger.style.display = 'flex'
        currentBurger.style.width = 560 + 'px'
        currentBurger.style.top = 70 + 'px'
        burgerThree.style.width = 630 + 'px'
        burgerThree.style.top = 30 + 'px'
        burgerFour.style.top = 30 + 'px'
        burgerFour.style.width = 660 + 'px'
    }

}

function debugImage() {
    let width = window.innerWidth;
    let background = document.getElementById('background');


    switch(true) {
        case width >= 400 && width < 700:
        background.style.backgroundImage = "url('imgs/Novo\ Projeto.png')";
        break;
        case width >= 1366 && width < 1920:
        background.style.backgroundImage = "url('imgs/backgroundHD.png.png')";
        break;
        case width >=1920 && width < 2048:
        background.style.backgroundImage = "url('imgs/background-fullHD.png')";
        break;
    }}

    document.addEventListener('keydown', function(event) {
        if (event.ctrlKey && (event.key === '=' || event.key === '-' || event.key === '+' || event.key === '0')) {
            event.preventDefault(); // Impede o zoom
        }
    });

    document.addEventListener('wheel', function(event) {
        if (event.ctrlKey) {
            event.preventDefault(); }
    }, { passive: false }); 

         }