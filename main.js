let hours = document.querySelector('.hours');
let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');

let button = document.querySelector('.button')
let list = document.querySelector('.list')

let addedtime = document.querySelector('.addedtime')

// функція для оновлення часу (робим нову дату, дістаєм значення і записуєм на сторінку)
function updateTime() {
    let date = new Date();
    hours.textContent = date.getHours();
    minutes.textContent = date.getMinutes();
    seconds.textContent = date.getSeconds();
}

setInterval(updateTime, 1000);

// даєм лісенера кнопці яка створює елемент списку і додає в історію значення часу яке було
button.addEventListener('click', () => {
    let elements = document.createElement('li');
    let result = hours.textContent + ':' + minutes.textContent + ':' + seconds.textContent;
    elements.textContent = result;
    list.append(elements);
    addedtime.style.display = 'block';
})





// let firstDate = new Date(2022, 4, 23);
// let secondDate = new Date(2022, 5, 12);

// let result = (secondDate - firstDate) / 1000 / 60;
// console.log(result);

// let firstDate = prompt();
// let secondDate = prompt();

// let d1 = new Date(firstDate);
// let d2 = new Date(secondDate);

// let result = (d2 - d1) / 1000 / 60 / 60 / 24;
// console.log(result);