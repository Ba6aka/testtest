'Use strict';

const box = document.getElementById('box'),
    buttons = document.querySelectorAll('button'),
    circle = document.getElementsByClassName('circle'),
    oneHeart = document.querySelector('.heart'),
    hearts = document.querySelectorAll('.heart'),
    wrapper = document.querySelector('.wrapper');



buttons.forEach(item => {
    item.style.cssText = 'border-radius: 100%; background-color: blue';
});

const div = document.createElement('div');
div.classList.add('black');
wrapper.append(div);
