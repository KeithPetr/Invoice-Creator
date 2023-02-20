const inputEl = document.getElementById("text-input");
const taskListEl = document.getElementById("task-list");
const optionValue = document.getElementById("option-value");
const addBtn = document.getElementById("add-btn");
const totalAmountEl = document.getElementById("total-amount-display");
const sendBtn = document.getElementById("send-btn");
const removeBtn = document.getElementById("remove-btn");
const darkModeBtn = document.querySelector('.dark-mode-btn');

let taskArray = [];
let totalAmountArray = [];

// ----- Add task to task list by clicking the plus sign -----

function addTasks() {
  if (inputEl.value === "" || taskArray.includes(inputEl.value)) {
  } else {
    taskArray.push(inputEl.value);
    totalAmountArray.push(optionValue.value);
    renderArray();
  }
}

// ------ Create the innerHTML to show each item under the tasks heading

function renderArray() {
  let string = "";
  for (let i = 0; i < taskArray.length; i++) {
    string += `
    <div class='output-info-container'>
        <div class='output-info'>
            <p class='task-item'>${taskArray[i]}</p>
            <button type='button' class='remove-btn' id='remove-btn'data-removeid="${[i]}">Remove</button>
        </div>
        <p class='task-item-total' id='task-item-total'>$${
          totalAmountArray[i]
        }</p>
    </div>
    `;
    inputEl.value = "";
  }
  if (totalAmountArray.length === 0) {
    totalAmountEl.innerHTML = `
    <p></p>
    <p class="sum">$0</p>
    `;
  } else {
    totalAmountEl.innerHTML = `
    <p class="note-text">We accept cash, credit card or PayPal</p>
    <p class="sum">$${totalAmountArray.reduce((a, b) => +a + +b)}</p>
    `;
  }
  taskListEl.innerHTML = string;
}

// ------ Remove a specific item from the taskArray -----

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("remove-btn")) {
    const indexOfItem = e.target.dataset.removeid;
    taskArray.splice(indexOfItem, 1);
    totalAmountArray.splice(indexOfItem, 1);
    renderArray();
  }
});

// ------ Clears the arrays and display elements ------

function sendInvoice() {
  taskArray = [];
  totalAmountArray = [];
  inputEl.value = "";
  taskListEl.innerHTML = "";
  totalAmountEl.innerHTML = `
  <p></p>
  <p class="sum">$0</p>
  `;
}

// ------ Switch between dark and light mode ------

function toggleDarkMode() {
  const body = document.querySelector('body');
  body.classList.toggle('dark-mode');
}

sendBtn.addEventListener("click", sendInvoice);
addBtn.addEventListener("click", addTasks);
darkModeBtn.addEventListener('click', toggleDarkMode);

renderArray()