const foodList = document.getElementById('list');
const food = document.getElementById('element');
const buttonAdd = document.getElementById('add');
let foods = [];

buttonAdd.addEventListener('click', function () {
  foods.push(food.value);
  console.log(foods);
  renderFoods();
  food.value = '';
});

function renderFoods() {
  foodList.innerHTML = '';

  foods.forEach((item, index) => {
    const li = document.createElement('li');
    li.style.marginBottom = '10px';
    li.innerText = item;

    foodList.appendChild(li);
  });
}
