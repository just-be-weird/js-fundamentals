let myaccount = {
    name: "Abhishek",
    expense: 0,
    income: 0
}
let myaccount1 = {
    name: "Jen",
    expense: 0,
    income: 0
}

let addExpense = function (acc, amnt = 0) {
    acc.expense = acc.expense + amnt
}
let addIncome = function (acc, income = 0) {
    acc.income = acc.income + income;
}
let resetAcc = function(acc) {
    acc.expense = 0;
    acc.income = 0
}
let accSum = function (acc) {
    let bal = acc.income - acc.expense;
    return `${acc.name} has ${bal} with ${acc.income}`
}
addExpense(myaccount1,1000)
addExpense(myaccount,10000)
addIncome(myaccount1,6000)
addIncome(myaccount,65000)
console.log(accSum(myaccount), accSum(myaccount1))
console.log(resetAcc(myaccount1))
console.log(myaccount1)