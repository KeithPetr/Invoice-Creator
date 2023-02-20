const inputEl = document.getElementById("text-input");
const taskListEl = document.getElementById("task-list");
const optionValue = document.getElementById("option-value");
const addBtn = document.getElementById("add-btn");
const totalAmountEl = document.getElementById("total-amount-display");

let taskArray = [];
let totalAmountArray = [];

function renderTasks() {
  let string = "";
  taskArray.push(inputEl.value);
  totalAmountArray.push(optionValue.value);
  for (let i = 0; i < taskArray.length; i++) {
    string += `
    <div class='output-info-container'>
        <div class='output-info'>
            <p class='task-item'>${taskArray[i]}</p>
            <button type='button' class='remove-btn' id='remove-btn'>Remove</button>
        </div>
        <p class='task-item-total' id='task-item-total'>$${totalAmountArray[i]}</p>
    </div>
    `;
    inputEl.value = "";
    console.log(taskArray);
  }
  totalAmountEl.innerHTML = `
  <p>$${totalAmountArray.reduce((a, b) => +a + +b)}</p>
  `
  taskListEl.innerHTML = string;
}

addBtn.addEventListener("click", renderTasks);


