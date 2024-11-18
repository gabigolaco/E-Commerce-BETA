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
     cooldown(nextButton, prevButton)
     let position = 600
     let currentBurger = getCurrentBurger()
     currentBurger.style.transition = '2s';

     let anim = setInterval(() => {
        if (position >= 1400) {
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

                currentBurger.style.display = 'flex'
                currentBurger.style.top =  85 + 'px'
                currentBurger.style.width = 650 + 'px'
                burgerFour.style.width = 700 + 'px'
                currentBurger.style.transition = '2s'
            
                setTimeout(() => {
                    let anim = setInterval(() => {
                        if (posicao <= 600) {
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
        
    }