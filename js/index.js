const sliderContainer = document.getElementById('custom-slider')
let isOpen = true
document.getElementById('shoping-icon').addEventListener('click',()=>{
    if(isOpen){
        sliderContainer.style.width = '350px'
        isOpen = false
    }else{
        sliderContainer.style.width = '0px'
        isOpen = true
    }
    
})

