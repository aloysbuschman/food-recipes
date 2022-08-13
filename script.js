
// Select DOM Elements
const mealWrapper = document.querySelector('.meal-wrapper');
const submit1 = document.querySelector('.ingredient1-submit');
const input = document.querySelector('#ingredient1');

submit1.addEventListener('click', getMeals);

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
        <div class="meal">
          <div class="meal-image">
            <img src="${meal.strMealThumb}">
          </div>
        <div class="meal-info">
          <h1>${meal.strMeal}</h1>
          <span class="meal-category">Work in progress</span>
          <span class="meal-area">Work in progress</span> 
        </div>
      </div>
      `
    })
    mealWrapper.innerHTML = html;
  });
}
