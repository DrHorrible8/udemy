let buttonStart = document.querySelector('#start'),
	budgetValue = document.querySelector('.budget-value'),
	daybudgetValue = document.querySelector('.daybudget-value'),
	levelValue = document.querySelector('.level-value'),
	expensesValue = document.querySelector('.expenses-value'),
	optionalExpensesValue = document.querySelector('.optionalexpenses-value'),
	incomeValue = document.querySelector('.income-value'),
	monthSavingsValue = document.querySelector('.monthsavings-value'),
	yearSavingsValue = document.querySelector('.yearsavings-value'),
	areasExpenses = document.querySelectorAll('.expenses-item'),
	btnExpenses = document.getElementsByTagName('button')[0],
	btnOptionalExpenses = document.getElementsByTagName('button')[1],
	btnCount = document.getElementsByTagName('button')[2],
	areasOptionalExpenses = document.querySelectorAll('.optionalexpenses-item'),
	areaIncom = document.querySelector('#income'),
	areaSavings = document.querySelector('#savings'),
	areaSum = document.querySelector('#sum'),
	areaPercent = document.querySelector('#percent'),
	areaYear = document.querySelector('.year-value'),
	areaMonth = document.querySelector('.month-value'),
	areaDay = document.querySelector('.day-value');

let money, time;

function start() {
	money = +prompt('Ваш бюджет на месяц?', '');
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

	while(isNaN(money) || money == '' || money == null) {
		money = +prompt('Ваш бюджет на месяц?', '');
	}
}
start();

let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: true,
	chooseExpences: function() {
		for (let i = 0; i < 2; i++) {
			let a = prompt('Введите обязательную статью расходов в этом месяце'),
				b = prompt('Во сколько обойдется?');
		
			if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null
				&& a != '' && b != '' && a.length < 50) {
				appData.expenses[a] = b;
			} else {
				i--;
			}
		}
	},
	detectDayBudget: function () {
		appData.moneyPerDay = (appData.budget / 30).toFixed();
		alert("Ежедневный бюджет: " + appData.moneyPerDay);
	},
	detectLevel: function() {
		if (appData.moneyPerDay < 100) {
			console.log("Минимальный уровень достатка");
			} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
				console.log("Средний уровень достатка");
			} else if (appData.moneyPerDay > 2000) {
				console.log("Высокий уровень достатка");
			} else {
				console.log("Error!");
		}
	},
	checkSavings: function() {
		if (appData.savings == true) {
			let save = +prompt('Какова сумма накоплений?'),
				percent = +prompt('Под какой процент?');
	
			appData.monthIncome = save/100/12*percent;
			alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
		}
	},
	chooseOptExpenses: function() {
		for (let i = 0; i < 3; i++) {
			let question = prompt('Статья необязательных расходов?');
			appData.optionalExpenses[i+1] = question;
		} 
	},
	chooseIncome: function() {
		let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');

		if ( (typeof(items))=== 'string' && items != '' && items != null) {
			appData.income = items.split(', ');
			appData.income.push(prompt('Может что-то еще?'));
			appData.income.sort();
			appData.income.forEach(function(item, i) {
				alert("Способы доп. заработка: " + (i+1) + " - " + item);
			})
		} else {
			alert('Неверно введены данные');
		}
	}
}

for (let key in appData) {
	console.log('Наша программа включает в себя данные: ' + key + " - " + appData[key]);
}


// let i = 0;

// while ( i < 2 ) {
// 	let a = prompt('Введите обязательную статью расходов в этом месяце'),
// 		b = prompt('Во сколько обойдется?');
	
// 	if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null
// 	&& a != '' && b != '' && a.length < 50) {
// 		console.log('Alright!');
// 		appData.expenses[a] = b;
// 	} else {
// 		console.log('Motherfucker!');
// 		i--;
// 	}
// 	i++;
// }

// let i = 0;

// do {
// 	let a = prompt('Введите обязательную статью расходов в этом месяце'),
// 		b = prompt('Во сколько обойдется?');

// 		if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null
// 		&& a != '' && b != '' && a.length < 50) {
// 			console.log('Alright!');
// 			appData.expenses[a] = b;
// 		} else {
// 			console.log('Motherfucker!');
// 			i--;
// 		}
// 		i++;
// }
// while ( i < 2 );
