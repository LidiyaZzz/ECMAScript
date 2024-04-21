// Урок 4. Асинхронность в Javascript
 
/* 
Задание 1: ""Получение данных о пользователе""

Реализуйте функцию getUserData, которая принимает идентификатор пользователя (ID) в качестве аргумента и использует fetch для получения данных о пользователе с заданным ID с удаленного сервера. Функция должна возвращать промис, который разрешается с данными о пользователе в виде объекта. Если пользователь с указанным ID не найден, промис должен быть отклонен с соответствующим сообщением об ошибке.

Подсказка, с последовательностью действий:
getUserData использует fetch для получения данных о пользователе с удаленного сервера. Если запрос успешен (с кодом 200), функция извлекает данные из ответа с помощью response.json() и возвращает объект с данными о пользователе. Если запрос неуспешен, функция отклоняет промис с сообщением об ошибке.
*/

function getUserData(userId) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Пользователь с идентификатором ${userId} не найден.`);
            }
            return response.json();
        });
}

getUserData(1).then(user => {
    console.log(user);
}).catch(error => {
    console.error(error.message);
});


 
/* 
Задание 2: ""Отправка данных на сервер""

Реализуйте функцию saveUserData, которая принимает объект с данными о пользователе в качестве аргумента и использует fetch для отправки этих данных на удаленный сервер для сохранения. Функция должна возвращать промис, который разрешается, если данные успешно отправлены, или отклоняется в случае ошибки.
*/

function saveUserData(userData) {
    return fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Не удалось сохранить пользовательские данные');
        }
    });
}

const user = {
    name: 'John Smith',
    age: 30,
    email: 'john@example.com'
};

saveUserData(user)
    .then(() => {
        console.log('Пользовательские данные успешно сохранены');
    })
    .catch(error => {
        console.log(error.message);
    });


 
/* 
Задание 3: ""Изменение стиля элемента через заданное время""

Напишите функцию changeStyleDelayed, которая принимает идентификатор элемента и время задержки (в миллисекундах) в качестве аргументов. Функция должна изменить стиль элемента через указанное время.
*/

function changeStyleDelayed(elementId, delay) {
    setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
            element.style.color = 'red';
            element.style.fontSize = '20px';
        } else {
            console.log(`Элемент с id ${elementId} не найден`);
        }
    }, delay);
}

changeStyleDelayed('hw4t3', 2000); // Через 2 секунды изменяет стиль элемента с id 'myElement'