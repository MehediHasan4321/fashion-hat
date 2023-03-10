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
        //showDatailsOnDisplay(data)
        count++
        setInnerTextByIdAndValue('card-number', count)
    })
}
/* const loadproductDetails = (id)=>{
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res=>res.json())
    .then(data=> showDatailsOnDisplay(data))
} */