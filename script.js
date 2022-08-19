
// Select DOM Elements
const mealWrapper = document.querySelector('.meal-wrapper');
const submit1 = document.querySelector('.ingredient1-submit');
const input = document.querySelector('#ingredient1');
const selectMeal = document.querySelectorAll('.meal');
const modal = document.querySelector('.modal-outer')

//Event listners
submit1.addEventListener('click', getMeals);


function openModal(e) {
  console.log(e.target.closest('.meal'));
  modal.classList.toggle('show');
}

function getMeals(event) {
  event.preventDefault();
  console.log(input.value);
  userInput = input.value;
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${userInput}`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data.meals);
    let html = ``
    data.meals.forEach(meal => {
      html += `
        <div class="meal" data-id="${meal.idMeal}">
          <div class="meal-image">
            <img src="${meal.strMealThumb}">
          </div>
        <div class="meal-info">
          <span class="meal-category">Work in progress</span>
          <span class="meal-area">Work in progress</span>
          <h1 class="meal-title">${meal.strMeal}</h1>
        </div>
      </div>
      `
      addEventListener('click', openModal);
    })
    mealWrapper.innerHTML = html;
  });
};
