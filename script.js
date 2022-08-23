// Select DOM Elements
const mealWrapper = document.querySelector('.meal-wrapper');
const submitBtn = document.querySelector('.ingredient1-submit');
const inputField = document.querySelector('#ingredient1');
const selectMeal = document.querySelectorAll('.meal');
const modal = document.querySelector('.modal-outer');
const closeModalBtn = document.querySelector('.close-modal');

//Event listeners
submitBtn.addEventListener('click', getMeals2);
closeModalBtn.addEventListener('click', closeModal);

// Functions 

function getMeals(event) {
  // Prevents page reload after user input
  event.preventDefault();
  console.log(inputField.value);
  userInput = inputField.value;
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

function openModal(e) {
  console.log(e.target.closest('.meal'));
  if (e.target.closest('.meal')) {
    modal.classList.toggle('show');
  }
};

function closeModal(e) {
    modal.classList.toggle('show');
};



// Call the API
function getMeals2(event) {
  // Declare variables
  let recipeId;
  let userInput;
  let html;
  // Prevent page from reloading and get userInput
  event.preventDefault();
  userInput = inputField.value;
  console.log({userInput});
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${userInput}`)
  .then((response) => response.json())
    .then((data) => {

    // Store the recipe data to a variable
    console.log(data.meals);
    recipeId = data.meals[0].idMeal

    // Fetch another API
    return fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`);

  }).then((response) => response.json())
  .then((recipeDetails) => {
    console.log(recipeId, recipeDetails.meals[0]);
})};