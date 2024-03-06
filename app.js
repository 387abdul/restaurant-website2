// console.log('I am here');
let FirstProductRow = document.getElementById('product');

let basket = JSON.parse(localStorage.getItem('HalloweenProducts')) || [];

let generateFirstProductRow = () => {
    FirstProductRow.innerHTML = HalloweenProducts.map((x) => {
        let {id,name,image,description,price} = x;
        // console.log(id);
    });
}
generateFirstProductRow()