// Select DOM Elements
const mealWrapper = document.querySelector('.meal-wrapper');
const submitBtn = document.querySelector('.ingredient1-submit');
const inputField = document.querySelector('#ingredient1');
const selectMeal = document.querySelectorAll('.meal');
const modal = document.querySelector('.modal-outer');
const closeModalBtn = document.querySelector('.close-modal');

//Event listeners
submitBtn.addEventListener('click', getMeals);
closeModalBtn.addEventListener('click', closeModal);

// Functions 
async function getMeals(event) {
  event.preventDefault();
  userInput = inputField.value;
  
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${userInput}`);
  const fetchedMeals =  await response.json();
  
  
  let html = ''
  
  fetchedMeals.meals.forEach(async (meal) => {
    const response2 =  await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`);
    const mealDetails = await response2.json();
    // console.log({mealDetails});
    html += `
      <div class="meal" data-id="${meal.idMeal}">
        <div class="meal-image">
          <img src="${meal.strMealThumb}">
      </div>
      <div class="meal-info">
        <span class="meal-category">Category: ${mealDetails.meals[0].strCategory}</span>
        <span class="meal-area">Area: ${mealDetails.meals[0].strArea}</span>
        <h1 class="meal-title">${meal.strMeal}</h1>
        </div>
      </div>
    `
    addEventListener('click', openModal);
    // console.log(html);
    mealWrapper.innerHTML = html; // Doesn't work yet
  })
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