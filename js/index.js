//Global Variable...
let count = 0
let isOpen = true
let arr = []
window.onload = () => {
    loadProductData()
}

const loadProductData = () => {
    fetch('https://fakestoreapi.com/products')
        .then(respose => respose.json())
        .then(data => {
            displayData(data)
            arr.push(data)
        })
}


function productPrice(id) {
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res => res.json())
    .then(data => {
        calculatePrice(data)
        count++
        setInnerTextByIdAndValue('card-number', count)
    })
}
console.log(arr)

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
                <button onclick="productPrice(${id})"
                class="bg-green-700 text-white text-xl text-center px-2 py-1 rounded w-[45%]">Details</button>
            </div>
        </div>
        `
    }
}


function getInnerTextById(id) {
    const elementString = document.getElementById(id).innerText;
    const stringToNumber = parseInt(elementString);
    return stringToNumber
}

function setInnerTextByIdAndValue(id, value) {
    const element = document.getElementById(id);
    element.innerText = value
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

document.getElementById("search-inp").addEventListener("keyup",function(e){
    const value = this.value.toLowerCase();
    const newArray = arr[0].filter(product=>{
        return product.title.toLowerCase().includes(value)
    })
    
    if(e.key ==='Enter'){
        displayData(newArray)
    }
    
})

document.addEventListener("scroll",()=>{
    const navBar = document.getElementById("nav-bar")
    navBar.style.position = 'fixed'
})
