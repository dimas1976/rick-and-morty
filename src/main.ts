import './style.css';

const app = document.querySelector<HTMLDivElement>('#app');

const main = document.createElement('main');
const header = document.createElement('header');
const title = document.createElement('h1');
title.innerText = 'Hallo Rick';
const input = document.createElement('input');
input.placeholder = 'Enter Data';

header.append(title);
main.append(input);

if (app !== null) {
  app.append(header, main);
}
