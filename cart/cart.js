
map_shoe_data();
cart_shoe_data();
remove();

//MAP FUNCTION TO ACCESS ALL THE DATA FROM SELECTED ID THAT ARE IN CART (total_count)
function map_shoe_data() {
  //USE MAP TO GET THE SHOE DATA FROM THE TOTAL_COUNT 
  let map_object = total_count.map(items => {
    for (i = 0; i < shoes_data.length; i++) {
      if (items === shoes_data[i].id) {
        return shoes_data[i];
      };
    };
  });
  console.log(map_object);
  return map_object;
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
  remove();
};

//REMOVE BUTTON
function remove() {
  let remove_btn_element = document.querySelectorAll('.remove-btn');

  // let for_cart = element_cart_data;
  remove_btn_element.forEach(Rbtn => {
    Rbtn.addEventListener("click", () => {

      let clicked = Rbtn.dataset.id;

     Rbtn.closest('.for-flex').remove();

      //UPDATE ARRAY ID
      total_count = total_count.filter(Uarray =>  Uarray !== clicked )
      cart_shoe_data();

    });
  });
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
      <button class="remove-btn" data-id = ${selected_shoes.id}> Remove</button>
       <div class="line"></div>
    </div>
    </div>`
}

