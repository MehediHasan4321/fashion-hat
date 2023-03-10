const loadproductDetails =(id)=>{
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res=>res.json())
    .then(data=> showDatailsOnDisplay(data))
}


function showDatailsOnDisplay(data){
    console.log(data)
}