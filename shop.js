let ProductElement = [
  {
    product: {
      image:"https://websitedemos.net/halloween-shop-04/wp-content/uploads/sites/1398/2023/09/product-06-a-300x300.jpg",
      star: '<i class="fa-regular fa-star fa-sm" style="color: #f5f5f5;"></i>',
      heading: "Ceramic Pumpkin",
      discount: "$99.00",
      price: "$59.00",
    },
  },
];
let makeHTML = (ProductElement) => {
  return `
        <div class="col-lg-4 col-md-6 col-ms-12 product1">
        <img
        src="${ProductElement.product.image}"
        alt="">
        <br>
        <div class="star">
        ${ProductElement.product.star}
        </div>
        <p class="HALLOWEEN text-light fs-5">${ProductElement.product.heading}</p>
        <p class="price"><s>${ProductElement.product.discount}</s>${ProductElement.product.price}</p>
        <button class="btn-shop">ADD TO CART</button>
        </div>
 `;
};

let currantElement = 0;

const containerElement = document.getElementById('products');
const updatePage = () => {
    let markup = makeHTML(testimonials[currantElement]);
    containerElement.innerHTML = markup;
}
updatePage();

