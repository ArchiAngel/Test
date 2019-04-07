const money = prompt("Ваш бюджет на месяц?");
const time = prompt("Введите дату в формате YYYY-MM-DD");

appData = {
    userMoney : money, 
    userTimeData : time,
    savings : false,
    incame : [],
    optionalExpenses : {},
    expenses : {}
}

for(let i = 0; i < 2;i++)
{
    let a = prompt("Введите обязательную статью расходов в этом месяце","");
    let b = prompt("Во сколько это обойдется?","");


    if( (typeof(a)) === "string" 
    && (typeof(a)) != null 
    && a != "" 
    && (typeof(b)) != null 
    && b != "" 
    && a.length < 50)
    {
        console.log("Done!");
        appData.expenses[a] = b;
    }
    else{
        console.log("Error");
        
        let a = prompt("Введите обязательную статью расходов в этом месяце","");
        let b = prompt("Во сколько это обойдется?","");


        if( (typeof(a)) === "string" 
        && (typeof(a)) != null 
        && a != "" 
        && (typeof(b)) != null 
        && b != "" 
        && a.length < 50)
        {
            console.log("Done!");
            appData.expenses[a] = b;
        }
    }
}

appData.MoneyPerDay = appData.userMoney / 30;

console.log(appData);
alert(appData.MoneyPerDay);
 
/*
let tir = 0;
while (tir < 2){
    let a = prompt("Введите обязательную статью расходов в этом месяце","");
    let b = prompt("Во сколько это обойдется?","");

    appData.expenses[a] = b";
    tir++;

}
*/
let doI = 0;
do {
    let a = prompt("Введите обязательную статью расходов в этом месяце","");
    let b = prompt("Во сколько это обойдется?","");

    appData.expenses[a] = b;
    doI++;
} while (doI < 2)