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
            case width >= 1366 && width < 1920:
                burgerOne.style.display = 'flex'
                burgerOne.style.top = 105 + 'px'
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
     let position = 600
     let currentBurger = getCurrentBurger()
     currentBurger.style.transition = '2s';
     

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
        cooldown(nextButton, prevButton)
        let position = returnPosition()
        debugBurger(currentBurger)

        currentBurger.style.transition = '2s'

            
                setTimeout(() => {
                    let anim = setInterval(() => {
                        if (posicao <= 775) {
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
            debugBurger(currentBurger)

     let currentBurger = getCurrentBurger()
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
        case window.innerWidth >= 1366 && window.innerWidth < 1920:
            return position = 700
            break
            case window.innerWidth >= 1366 && window.innerWidth < 1920:
            return position = 600

    }
}

function debugBurger(currentBurger) {

    switch (true) {
        case window.innerWidth > 1200 && window.innerWidth <= 1366: 
        currentBurger.style.display = 'flex'
        currentBurger.style.width = 653 + 'px'
        currentBurger.style.top = 55 + 'px'
        burgerThree.style.top = 85 + 'px'
        burgerFour.style.top = 80 + 'px'
        burgerFour.style.width = 690 + 'px'

    break
    case window.innerWidth > 1366 && window.innerWidth <= 1920:
        currentBurger.style.display = 'flex'
        currentBurger.style.width = 890 + 'px'
        currentBurger.style.top = 110 + 'px'
        burgerThree.style.top = 123 + 'px'
        burgerFour.style.top = 170 + 'px'
        burgerFour.style.width = 890 + 'px'
    }

}
         }