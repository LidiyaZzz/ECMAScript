// Урок 1. Функциональный Javascript
 
/* 1) 
Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки
*/

const arr = [1, 5, 7, 9];
const minNumber = Math.min(...arr);
console.log(minNumber);


/* 2) 
Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.
*/

function createCounter() {
    let count = 0;

    return {
        increment: function() {
            count++;
        },
        decrement: function() {
            count--;
        },
        getCount: function() {
            return count;
        }
    };
}

const counter = createCounter();
counter.increment();
counter.increment();
counter.decrement();
console.log(counter.getCount()); // Output: 1

/* 2) 
Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.
*/

function findElementByClass(root, className) {
    if (root.classList && root.classList.contains(className)) {
        return root;
    }

    for (const child of root.children) {
        const result = findElementByClass(child, className);
        if (result) {
            return result;
        }
    }

    return null;
}

const rootElement = document.getElementById('root');
const element = findElementByClass(rootElement, 'hw1');
console.log(element); // Output: <element class="my-class">...</element>