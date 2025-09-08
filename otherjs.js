hamburger_function_load();

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