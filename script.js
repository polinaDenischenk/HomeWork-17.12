const text = document.createElement('div');
text.textContent = 'Текст внутри контейнера';
document.body.appendChild(text);

const arr = document.createElement('button');
arr.textContent = 'Применить';
arr.addEventListener('click' , function(){
    console.log('Блок создан');
})
document.body.appendChild(arr);

const element = document.createElement('body');
element.textContent = 'Блок создан при нажатии на кнопку';
element.style.color = 'red';
document.body.appendChild(element)