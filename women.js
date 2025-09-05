 let saved_count = localStorage.getItem("shoeID's");

total_count = saved_count ? JSON.parse(saved_count) : [];
  
gender_category();
update_count();

 heart_function();
  hamburger_function_load();
  cart_trolly();

 

function gender_category() {
  let all_btn = document.querySelectorAll('.about');

  all_btn.forEach(btn => {
    
      let m_btn = btn.dataset.gender;

      if (m_btn === 'women') {
        filtered = shoes_data.filter(shoe => shoe.category === 'women');
        container_of_shoe_function(filtered);
      };
    });
  };
    
