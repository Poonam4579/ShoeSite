map_shoe_data2();
wishlist_shoe_data();
// remove();

//MAP FUNCTION TO ACCESS ALL THE DATA FROM SELECTED ID THAT ARE IN CART (total_count)
function map_shoe_data2() {
  //USE MAP TO GET THE SHOE DATA FROM THE TOTAL_COUNT 
  let map_object = wishlist_count.map(items => {
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
function wishlist_shoe_data() {
  let element_wishlist_data = document.querySelector('#section2_wishlist_container');

  let mapped_items2 = map_shoe_data2();
  let innerHTML = '';
  mapped_items2.forEach(count2 => {
    innerHTML += selected_wishlist_items(count2);
  });
  element_wishlist_data.innerHTML = innerHTML;
  remove2();

};

//REMOVE BUTTON
function remove2() {
  let remove_btn_element2 = document.querySelectorAll('.in-container-red-heart-btn');

  // let for_cart = element_cart_data;
  remove_btn_element2.forEach(Rbtn2 => {
    Rbtn2.addEventListener("click", () => {

      Rbtn2.closest('.box1').remove();
      wishlist_shoe_data();
    
    });
  });
};

//ADD TO CART BUTTON


    // all the shoe_data items
function selected_wishlist_items(selected_shoes2) {
  return `<div class="box1">
    <div class="w-img">
      <img src="../${selected_shoes2.shoeImage}" alt="w-shoe">
    </div>
    <span class="for-price">
      <p class="w-price">${selected_shoes2. actual_price}</p>
      <p class="w-dis">${selected_shoes2.discount}</p>
      <p class="w-c-price">${selected_shoes2.cur_price}</p>
    </span>
    <div class="for-cart">
    <button class="w-add-to-cart data-id ="${selected_shoes2.id}">Add to Cart +</button>
    </div>

  </div>
  `
}

