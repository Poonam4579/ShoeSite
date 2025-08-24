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
<button class= in-container-cart-btn> Add to Cart </button>
<button class= in-container-wishlist-btn> 
<img src="shoe_images/360_F_1562810911_m1Dv0d3PKkiMlCGLWakKLkfVnqhhRuOk-removebg-preview.png" alt="heart">
 </button>
 </span>
 </div>
</div>`
});
