const revenues = [new Income("Salary", 2100.0), new Income("Sale car", 1500)];

const expenditures = [
  new Expenditure("Rent flat", 900),
  new Expenditure("Clothing", 400),
];

let loadApp = () => {
  loadHeader();
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
    for(let expenditure of expenditures){
        totalExpenditures += expenditure.value;
    }
    return totalExpenditures;
};


