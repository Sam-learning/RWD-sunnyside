const navSlide=()=>{
    const burger = document.querySelector('.burger')
    const rightbox = document.querySelector('.rightbox')

    burger.addEventListener('click',()=>{
        rightbox.classList.toggle('rightbox-active')
    })
}

navSlide()