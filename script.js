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
    let position = 50
    burgerOne.style.transition = '1s'
    
    
    burgerOne.style.transform = `translateX(${position}px)`;
    
    let anim = setInterval(() => {
            burgerOne.style.display = 'flex'
            if (position <= -700) {
                clearInterval(anim)
            } else {
                position -= 30
                burgerOne.style.transform = `translateX(${position}px)`;
            }
    }, 10)
    }