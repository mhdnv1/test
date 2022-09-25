// . В чем разница между null и undefined?
// let prom = prompt()
// alert(prom)

// Для чего используется оператор "&&"?
// let age = 22
// let incame = 50
// if (age > 19 && incame < 60) {
//     alert(true)
// }

// . Является ли использование унарного плюса (оператор "+") самым быстрым способом преобразования строки в число?

// let num = +prompt()
// alert(typeof(num))

// Что такое DOM?

// let title = document.querySelector('h1')
// console.log(title);

// . Что такое события?
// let btn = document.querySelector('button')

// btn.addEventListener('click',()=>{
//     alert('hello')
// })

// В чем разница между операторами "==" и "==="?
// console.log('2' === 2);

// .Что такое область видимости?

// let gl = 10
// function say() {
//     let lc = 5
//     console.log(gl);

// }
// say()
// console.log(lc);

// Что такое замыкание?
// function makeCounter() {
//     let count = 0
//     return  function () {
//         return count++
//     }
// }
// let counter = makeCounter()
// alert(counter())
// alert(counter())
// alert(counter())

// Как проверить, является ли значение ложным?
// let value= false
// if (value === false) {
//     console.log('лож');
// }
// .Для чего используется директива «use strict»?
// 'use strict'
// let a = 10
// console.log(a);

// Какое значение имеет this?
// let user = {
//     name: 'john',
//     age:22,
//     sayhi(){
//         alert(this.name)
//     }
// }
// user.sayhi()

// let num ;
// console.log(typeof(num));

// var   
// let 

// Что такое параметры по умолчанию?
// function say(a=10) {
//     return a
// }
// console.log(say(5));
// .Что такое NaN? Как проверить, является ли значение NaN?
// console.log(isNaN('m'*22));

// .Как проверить, является ли значение массивом?
// let arr = [1,2,3]
// console.log(Array.isArray(arr));

// let ob = new Object()

// Дано три числа. Найти количество положительных чисел среди них;
// let num1 = +prompt('')
// let num2 = +prompt('')
// let num3 = +prompt('')
// alert((num1 > 0)+ (num2> 0)+ (num3>0))

let client = prompt('')
console.log(typeof(client));
if (client >= 0 || client < 0) {
    alert('цифра')
}else{
    alert('не  цифра')
}