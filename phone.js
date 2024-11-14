if (window.innerWidth > 300 && window.innerWidth < 600) {

window.addEventListener('load', loadAnim)

orderButton.addEventListener('click', () => {})
readMoreButton.addEventListener('click', () => {})
nextButton.addEventListener('click', nextImg2)
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
    let position = 600
    
        nextButton.disabled = true
        
        setTimeout(() => {
            nextButton.disabled = false // COOLDOWN
        }, 2000);
    
        if (burgers.includes(1)) {
            burgerOne.style.transition = '2s'
            nextButton.disabled = true
            setTimeout(() => {
            nextButton.disabled = false // COOLDOWN
        }, 2000);
            let anim = setInterval(() => {
                if (position >= 1400) {
                    clearInterval(anim)
                    burgers.shift()
                    burgers.push(2)
                    animationNext2(position)
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
    
        if (burgers.includes(2)) {
            burgerTwo.style.transition = '2s'
            nextButton.disabled = true
        
        setTimeout(() => {
            nextButton.disabled = false // COOLDOWN
        }, 2000);
    
            let anim = setInterval(() => {
                if (position >= 1400) {
                    clearInterval(anim)
                    burgers.shift()
                    burgers.push(3)
                    animationNext2(position)
                    nextButton.disabled = true
                    setTimeout(() => {
                        nextButton.disabled = false
                    }, 2000);
                } else {
                    position += 200
                    burgerTwo.style.left = position + 'px'
                    console.log(position)
                    setTimeout(() => {
                        burgerTwo.style.display = 'none'
                    }, 1500);
    
    
                }
        }, 10)
        }
    
        if (burgers.includes(3)) {
            burgerThree.style.transition = '2s'
            nextButton.disabled = true
        
        setTimeout(() => {
            nextButton.disabled = false // COOLDOWN
        }, 2000);
    
            let anim = setInterval(() => {
                if (position >= 1400) {
                    clearInterval(anim)
                    burgers.shift()
                    burgers.push(4)
                    animationNext2(position)
                    nextButton.disabled = true
                    setTimeout(() => {
                        nextButton.disabled = false
                    }, 2000);
                } else {
                    position += 200
                    burgerThree.style.left = position + 'px'
                    console.log(position)
                    setTimeout(() => {
                        burgerThree.style.display = 'none'
                    }, 1500);
    
    
                }
        }, 10)
        }
    
        if (burgers.includes(4)) {
            burgerFour.style.transition = '2s'
            nextButton.disabled = true
        
        setTimeout(() => {
            nextButton.disabled = false // COOLDOWN
        }, 2000);
    
            let anim = setInterval(() => {
                if (position >= 1400) {
                    clearInterval(anim)
                    burgers.shift()
                    burgers.push(1)
                    animationNext2(position)
                    nextButton.disabled = true
                    setTimeout(() => {
                        nextButton.disabled = false
                    }, 2000);
                } else {
                    position += 200
                    burgerFour.style.left = position + 'px'
                    console.log(position)
                    setTimeout(() => {
                        burgerFour.style.display = 'none'
                    }, 1500);
    
    
                }
        }, 10)
        }
    
    }
}

function animationNext2(posicao) {
    if (burgers.includes(1)) {
        burgerOne.style.display = 'flex'

        setTimeout(() => {

            let anim = setInterval(() => {
                burgerOne.style.transition = '2s'
                if (posicao <= 600) {
                    clearInterval(anim)
                    burgerOne.style.width = 650 + 'px'
                } else {
                    posicao -= 15
                    burgerOne.style.left = posicao + 'px'
                }
            }, 10)
        }, 1500);
    }

    if (burgers.includes(2)) {
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

    if (burgers.includes(3)) {
        burgerThree.style.display = 'flex'
        burgerThree.style.top =  85 + 'px'
    
        setTimeout(() => {
            let anim = setInterval(() => {
                burgerThree.style.transition = '2s'
                if (posicao <= 600) {
                    clearInterval(anim)
                } else {
                    posicao -= 15
                    burgerThree.style.left = posicao + 'px'
                }
            }, 10)
        }, 1500);
    }
   
    if (burgers.includes(4)) {
        burgerFour.style.display = 'flex'
        burgerFour.style.top =  85 + 'px'
    
        setTimeout(() => {
            let anim = setInterval(() => {
                burgerFour.style.transition = '2s'
                if (posicao <= 600) {
                    clearInterval(anim)
                } else {
                    posicao -= 15
                    burgerFour.style.left = posicao + 'px'
                }
            }, 10)
        }, 1500);
    }   
}

function prevImg() {
    let position = 600
    
    prevButton.disabled = true

    setTimeout(() => {
        prevButton.disabled = false // COOLDOWN
    }, 3000);

    if (burgers.includes(1)) {
        let anim = setInterval(() => {
            if (position >= 1400) {
                clearInterval(anim)
                burgers.shift()
                burgers.push(4)
                animationNext(position)
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

    if (burgers.includes(2)) {
        let anim = setInterval(() => {
            if (position >= 1400) {
                clearInterval(anim)
                burgers.shift()
                burgers.push(1)
                animationNext(position)
            } else {
                position += 200
                burgerTwo.style.left = position + 'px'
                console.log(position)
                setTimeout(() => {
                    burgerTwo.style.display = 'none'
                }, 1500);


            }
    }, 10)
    }

    if (burgers.includes(3)) {
        let anim = setInterval(() => {
            if (position >= 1400) {
                clearInterval(anim)
                burgers.shift()
                burgers.push(2)
                animationNext(position)
            } else {
                position += 200
                burgerThree.style.left = position + 'px'
                console.log(position)
                setTimeout(() => {
                    burgerThree.style.display = 'none'
                }, 1500);


            }
    }, 10)
    }

    if (burgers.includes(4)) {
        let anim = setInterval(() => {
            if (position >= 1400) {
                clearInterval(anim)
                burgers.shift()
                burgers.push(3)
                animationNext(position)
            } else {
                position += 200
                burgerFour.style.left = position + 'px'
                console.log(position)
                setTimeout(() => {
                    burgerFour.style.display = 'none'
                }, 1500);
            }
    }, 10)
    }
        
}
