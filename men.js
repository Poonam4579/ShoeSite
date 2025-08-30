
gender_category();
 heart_function();
  hamburger_function_load();
  cart_trolly();



//FILTER FOR MEN

function gender_category() {
  let all_btn = document.querySelectorAll('.about');

  all_btn.forEach(btn => {
    
      let m_btn = btn.dataset.gender;

      if (m_btn === 'men') {
        filtered = shoes_data.filter(shoe => shoe.category === 'men');
        container_of_shoe_function(filtered);
      };
    });
  };
    
