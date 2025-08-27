let for_container = document.querySelector('#section2 .container');

//NUMBER OF SHOE ADDED WITH FOR EACH AND ADDED IN INNER HTML 
shoes_data.forEach(shoe => {
  for_container.innerHTML += `
  <div class="shoe-card">
   <div class="shoe-img">
      <img src="${shoe.shoeImage}" alt="shoe" loading="lazy">
    </div>
    <div class="all-data-div">
  <p class="shoe-name">${shoe.name}</p>
  <p class="brand-name">${shoe.brandName}</p>
  <p class="gender">${shoe.gender}</p>
  <span class="price-details">
     <p class="price">${shoe.actual_price}</p>
     <p class="discount">${shoe.discount}</p>
    <p class="current-price">${shoe.cur_price}</p>
</span>
<span class="add_btns">
<button class= "in-container-cart-btn"> Add to Cart </button>
<button class= "in-container-wishlist-btn"> 


 </button>
 </span>
 </div>
</div>`
});

//  <img src="shoe_images/360_F_1562810911_m1Dv0d3PKkiMlCGLWakKLkfVnqhhRuOk-removebg-preview.png" alt="heart"></img>

//HEART BUTTON


// HUMBARGER THING
let for_humbarger = document.querySelector('.humburger-btn');
let for_side_page = document.querySelector('.side-page');
let for_close = document.querySelector('.close');

for_humbarger.addEventListener("click", () => {
  for_side_page.classList.toggle("show");
});
for_close.addEventListener("click", () => {
  for_side_page.classList.remove("show");
});

//ADD CART COUNT ON DISPLAY


let cart_count = document.querySelector('.cart-items-count');
let cart_button = document.querySelector('.in-container-cart-btn');

let count = 0;
for_container.addEventListener("click", (e) => {
  if (e.target.classList.contains("in-container-cart-btn")) {
    //THAT e TARGERTS THE CLASS THAT CONTAINS THAT CART BUTTON (MEANS THE CLASS OF CART BUTTON), SO WHENEVER THE BUTTONS CLICKED THE COUNT WILL ADDED
    count++;
    cart_count.innerText = count;

    shoe_id_count();
  }
});

//ADD IN LOCAL STORAGE

function shoe_id_count(id) {
    
  let saveShoe = JSON.parse(localStorage.getItem("shoedata")) || [];

  let shoe_id = shoes_data.id;
  saveShoe.push(shoe_id);

  localStorage.setItem("shoedata", JSON.stringify(saveShoe));
  console.log(saveShoe);
}



