import "./index.css";


const title = document.createElement('h1');
title.textContent = 'I love JavaScript';

const image = document.createElement('img');
image.src = './assets/JavaScript.png';
image.alt = 'JawaScript'

document.body.append(title, image)