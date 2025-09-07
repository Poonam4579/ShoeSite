let total_count;

on_load();


function on_load() {
  // FOR ADDED ITEMS
  let saved_count = localStorage.getItem("shoeID's");
  total_count = saved_count ? JSON.parse(saved_count) : [];

  let saved_count2 = localStorage.getItem("shoeID's");

  total_count = saved_count2 ? JSON.parse(saved_count2) : [];
  
  container_of_shoe_function(shoes_data);
  update_count();

  heart_function();
  hamburger_function_load();
  cart_trolly();
  
 
};


function container_of_shoe_function(shoe_products) {
  let for_container = document.querySelector('#section2 .container');

  //NUMBER OF SHOE ADDED WITH FOR EACH AND ADDED IN INNER HTML 
  shoe_products.forEach(shoe => {
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
<button class= "in-container-cart-btn" data-id = ${shoe.id}>Add to Cart</button>
<div class= "shoe">
<button class= "in-container-wishlist-btn"> </button>
<button class= "in-container-red-heart-btn"></button>

</div>
 </span>
 </div>
</div>`
  });
};


//HEART BUTTON
function heart_function() {
  let products = document.querySelectorAll('.shoe');

  products.forEach(product => {

    let white_heart_btn = product.querySelector('.in-container-wishlist-btn');
    let red_heart_btn = product.querySelector('.in-container-red-heart-btn');
    if (!white_heart_btn || !red_heart_btn) return;
  
    white_heart_btn.addEventListener("click", () => {
      white_heart_btn.style.display = "none";
      red_heart_btn.style.display = "block"
    });

    red_heart_btn.addEventListener("click", () => {
      white_heart_btn.style.display = "block";
      red_heart_btn.style.display = "none";
    });
  });
  
};

// HUMBARGER THING
function hamburger_function_load() {
  let for_humbarger = document.querySelector('.humburger-btn');
  let for_side_page = document.querySelector('.side-page');
  let for_close = document.querySelector('.close');

  for_humbarger.addEventListener("click", () => {
    for_side_page.classList.toggle("show");
  });
  for_close.addEventListener("click", () => {
    for_side_page.classList.remove("show");
  });
};


//ADD IN LOCAL STORAGE
function local_shoe_store(shoeID) {
  
  total_count.push(shoeID);
  localStorage.setItem("shoeID's", JSON.stringify(total_count));
  console.log(total_count);

  update_count();
};


//ADD CART COUNT ON DISPLAY

function cart_trolly() {
  // let cart_button = document.querySelector('.in-container-cart-btn');
  let for_container = document.querySelector('#section2 .container');

  for_container.addEventListener("click", (e) => {
    if (e.target.classList.contains("in-container-cart-btn")) {
      //THAT e TARGERTS THE CLASS THAT CONTAINS THAT CART BUTTON (MEANS THE CLASS OF CART BUTTON), SO WHENEVER THE BUTTONS CLICKED THE COUNT WILL ADDED
      
     
      let cart2 = e.target.dataset.id;

      local_shoe_store(cart2);

      // cart_count.innerText = local_shoe_store(`${shoes_data.id}`);
     
    };
  });
};


  function update_count() {
      
        let cart_count = document.querySelector('.cart-items-count');
        
        if (total_count.length > 0) {
          cart_count.style.display = "block";
          cart_count.innerText = total_count.length;
        }
    else {
          cart_count.style.display = "none";
    };
    
};





