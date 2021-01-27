
//Предупреждение всплывающее на сайте
//alert('Предупреждаю');

//Предупреждение, возвращающее ответ(true or false) в переменную result
//const result = confirm("Are ypu here?");
//console.log(result);

//Предупреждение, где пользователь оставляет ответ!!!ВСЕГДА STRING!!!
//typeof- определяет тип
//+ меняет тип данных(string на number)
//const answer = +prompt("Вам есть 18?", "18");
//console.log(answer + 5);

const answers = []; //массив

//заполнение массива
answers[0] = prompt('как ваше имя?','');
answers[1] = prompt('как ваша фамилия?','');
answers[2] = prompt('сколько вам лет?','');

// document.write(answers); //аналог console.log только бесполезней
console.log(typeof(answers));
console.log(typeof(null));