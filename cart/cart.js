
map_shoe_data();
cart_shoe_data();

//MAP FUNCTION TO ACCESS ALL THE DATA FROM SELECTED ID THAT ARE IN CART (total_count)
function map_shoe_data() {
  //USE MAP TO GET THE SHOE DATA FROM THE TOTAL_COUNT 
  let map_object = total_count.map(items => {
    for (i = 0; i < shoes_data.length; i++) {
      if (items === shoes_data[i].id) {
        return shoes_data[i];
      };
    }
  });
  return map_object;
  console.log(map_object);
 
};

// ONLY FOR THE SELECTED ITEMS
function cart_shoe_data() {
  let element_cart_data = document.querySelector('.shoe-cart-data');

  let mapped_items = map_shoe_data();
  let innerHTML = '';
  mapped_items.forEach(count => {
    innerHTML += selected_shoe_items(count);
  });
  element_cart_data.innerHTML = innerHTML;
  
};


    // all the shoe_data items
function selected_shoe_items(selected_shoes) {
  return `<div class = "for-flex">
   <div class="shoe-cart-img">
    <img src="../${selected_shoes.shoeImage}" alt="cart-shoe-img">
    </div>
    <div class="about-cart-shoe">
      <p class="in-cart name">${selected_shoes.name}</p>
      <p class="in-cart brand">${selected_shoes. brandName} </p>
      <p class="in-cart C-price">${selected_shoes.actual_price}</p>
      <p class="in-cart discount">${selected_shoes.discount}</p>
      <p class="in-cart with-discount-price">${selected_shoes.cur_price}</p>
      <button class="remove-btn"> Remove</button>
       <div class="line"></div>
    </div>
    </div>`
}

