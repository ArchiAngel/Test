const money = prompt("Ваш бюджет на месяц?");
const time = prompt("Введите дату в формате YYYY-MM-DD");

appData = {
    userMoney : money, 
    userTimeData : time 
}

const questionOne =  prompt("Введите обязательную статью расходов в этом месяце");
const questionTwo = prompt("Во сколько это обойдется?");

exprenses = {
    answerOne : questionOne,
    answerTwo : questionTwo
}

alert(money/30);

console.log(appData);
console.log(exprenses);

/*
Вопросы к заданию:

1) 6

2) console.log

3) ||  "или" когда одно из условий верно то все ок
   &&  "и" все условия должны быть верны
   */
