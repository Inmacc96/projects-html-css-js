const revenues = [new Income("Salary", 2100.00), new Income("Sale car", 1500)];

const expenditures = [
  new Expenditure("Rent flat", 900),
  new Expenditure("Clothing", 400),
];

let loadApp = () => {
  loadHeader();
  loadRevenues();
};

let totalIncome = () => {
  let totalIncome = 0;
  for (let income of revenues) {
    totalIncome += income.value;
  }
  return totalIncome;
};

let totalExpenditures = () => {
  let totalExpenditures = 0;
  for (let expenditure of expenditures) {
    totalExpenditures += expenditure.value;
  }
  return totalExpenditures;
};

let loadHeader = () => {
  let budget = totalIncome() - totalExpenditures();
  let percentage = totalExpenditures() / totalIncome();
  document.getElementById("budget_total").innerHTML = formatCurrency(budget);
  document.getElementById("percentage").innerHTML =
    formatPercentage(percentage);
  document.getElementById("income").innerHTML = formatCurrency(totalIncome());
  document.getElementById("expenditure").innerHTML = formatCurrency(
    totalExpenditures()
  );
};

const formatCurrency = (value) => {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
};

const formatPercentage = (value) => {
  return value.toLocaleString("en-US", {
    style: "percent",
    minimumFractionDigits: 2,
  });
};

const loadRevenues = () => {
  let revenuesHTML = "";
  for (let income of revenues) {
    revenuesHTML += createIncomeHTML(income);
  }
  document.getElementById("list-revenues").innerHTML = revenuesHTML;
};

const createIncomeHTML = (income) => {
  let incomeHTML = `
    <div class="element cleanStyles">
        <div class="element_description">${income.description}</div>
          <div class="right cleanStyles">
            <div class="element_value">${formatCurrency(income.value)}</div>
            <div class="element_remove">
                <button class="element_remove--btn">
                  <ion-icon name="close-circle-outline"></ion-icon>
                </button>
            </div>
        </div>
      </div>
    `;
  return incomeHTML;
};
