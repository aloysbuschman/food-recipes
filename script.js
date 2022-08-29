// Select DOM Elements
const mealWrapper = document.querySelector('.meal-wrapper');
const submitBtn = document.querySelector('.ingredient1-submit');
const inputField = document.querySelector('#ingredient1');
const selectMeal = document.querySelectorAll('.meal');
const modal = document.querySelector('.modal-outer');
const closeModalBtn = document.querySelector('.close-modal');

//Event listeners
// submitBtn.addEventListener('click', getMeals3);
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


async function getMeals3() {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=cheese`);
  const fetchedMeals =  await response.json();
  
  
  let html = ''
  
  fetchedMeals.meals.forEach(async (meal) => {
    const response2 =  await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`);
    const mealDetails = await response2.json();
    console.log({mealDetails});
    html += `
      <div class="meal" data-id="${meal.idMeal}">
        <div class="meal-image">
          <img src="${meal.strMealThumb}">
      </div>
      <div class="meal-info">
        <span class="meal-category">${mealDetails.meals[0].strCategory}</span>
        <span class="meal-area">${mealDetails.meals[0].strArea}</span>
        <h1 class="meal-title">${meal.strMeal}</h1>
        </div>
      </div>
    `
    addEventListener('click', openModal);
    console.log(html)
  })
  console.log({fetchedMeals})
  mealWrapper.innerHTML = html;
};

getMeals3();