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

const loadProductData = ()=>{
    fetch('https://fakestoreapi.com/products')
    .then(respose=>respose.json())
    .then(data=>displayData(data))
}
loadProductData()
function displayData(products){
    
    const productContainer = document.getElementById('product-cart-container')
    for(const product of products){
       // console.log(product)
        const {image,title,price,id} = product
        productContainer.innerHTML += `
        <div class="w-[320px] h-[400px] p-1 bg-sky-200 rounded-md relative">
            <img class="w-full h-[200px]" src="${image}" alt="">
            <h1 class="text-xl mt-2">${title}</h1>
            <h3 class="text-2xl absolute left-4 bottom-16">Product Price : $<span>${price}</span></h3>
            <button onclick="productPrice(${id})"
            class="bg-green-700 text-white text-2xl text-center px-5 py-2 absolute bottom-0  left-0 w-full">Add
            To Cart</button>
        </div>
        `
    }
}

function productPrice(id){
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res=>res.json())
    .then(data=>calculatePrice(data))
}

function getInnerTextById(id){
    const elementString = document.getElementById(id).innerText;
    const stringToNumber = parseInt(elementString);
    return stringToNumber
}

function setInnerTextByIdAndValue(id,value){
    const element = document.getElementById(id);
    element.innerText = value
}

function calculatePrice(product){
    const {price} = product
    const oldPrice = getInnerTextById('price');
    const newPrice = price;
    const totalPrice = oldPrice + newPrice
    const shopingCost = getInnerTextById('shiping-cost')
    const totalVat = (totalPrice + shopingCost)*15/100;
    const totalPayableAmount = totalPrice + shopingCost + totalVat
    setInnerTextByIdAndValue('price',totalPrice.toFixed(2))
    setInnerTextByIdAndValue('total-vat',totalVat.toFixed(2))
    setInnerTextByIdAndValue('total-payable-price',totalPayableAmount.toFixed(2))
}