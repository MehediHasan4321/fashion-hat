//Global Variable...
let count = 0
let isOpen = true
const body =  document.body
let lastScroll = 0;
let arr = []
window.onload = () => {
    loadProductData()
}


function displayData(products) {

    const productContainer = document.getElementById('product-cart-container')

    productContainer.innerHTML = ''
    for (const product of products) {

        const { image, title, price, id } = product
        productContainer.innerHTML += `
            <div class="w-[320px] h-[400px] p-1 bg-sky-200 rounded-md relative">
                <img class="w-full h-[200px]" src="${image}" alt="">
                <h1 class="text-xl mt-2">${title}</h1>
                <h3 class="text-2xl absolute left-4 bottom-16">Product Price : $<span>${price}</span></h3>
                <div class=" flex justify-center items-center gap-5 absolute bottom-2  left-0 right-2 w-full">
                    <button onclick="productPrice(${id})"
                    class="bg-green-700 text-white text-xl text-center px-2 py-1 rounded w-[45%]">Add
                    To Cart</button>
                    
                </div>
            </div>
        `
    }


}

function calculatePrice(product) {
    const { price } = product
    const oldPrice = getInnerTextById('price');
    const newPrice = price;
    const totalPrice = oldPrice + newPrice
    const shopingCost = getInnerTextById('shiping-cost')
    const totalVat = (totalPrice + shopingCost) * 15 / 100;
    const totalPayableAmount = totalPrice + shopingCost + totalVat
    setInnerTextByIdAndValue('price', totalPrice.toFixed(2))
    setInnerTextByIdAndValue('total-vat', totalVat.toFixed(2))
    setInnerTextByIdAndValue('total-payable-price', totalPayableAmount.toFixed(2))
}



document.getElementById('shoping-icon').addEventListener('click', () => {
    const sliderContainer = document.getElementById('custom-slider')
    if (isOpen) {
        sliderContainer.style.width = '350px'
        isOpen = false
    } else {
        sliderContainer.style.width = '0px'
        isOpen = true
    }

})

function productDetailsPage() {

    location.href = 'product-checkout.html'
}


document.getElementById("search-inp").addEventListener("keyup", function (e) {
    const value = this.value.toLowerCase();
    const newArray = arr[0].filter(product => {
        return product.title.toLowerCase().includes(value)
    })

    if (e.key === 'Enter') {
        displayData(newArray)
    }

})



function checkoutPage(id) {
    fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then(data => console.log(data))
}

window.addEventListener("scroll",()=>{
    const currentScroll = window.pageYOffset;
    if(currentScroll <= 0){
        body.classList.remove('scroll-up')
    }
    if(currentScroll > lastScroll && !body.classList.contains("scroll-down")){
        body.classList.remove('scroll-up')
        body.classList.add('scroll-down')
    }
    if(currentScroll < lastScroll && body.classList.contains("scroll-down")){
        body.classList.remove('scroll-down')
        body.classList.add('scroll-up')
    }

    lastScroll = currentScroll;
})