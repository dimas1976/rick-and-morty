import './style.css';
import './utils/createElement';
import { createElement } from './utils/createElement';

const container = createElement('div', {
  className: 'appContainer',
  childElements: [
    createElement('header', {
      className: 'header',
      childElements: [
        createElement('h1', {
          className: 'header__heading',
          innerText: 'Rick and Morty',
        }),
      ],
    }),
    createElement('main', {
      className: 'main',
      childElements: [
        createElement('input', {
          className: 'main__input',
          placeholder: 'Search for a character',
        }),
      ],
    }),
  ],
});

/*const main = document.createElement('main');
const header = document.createElement('header');
const title = document.createElement('h1');
title.innerText = 'Rick and Morty';
const input = document.createElement('input');
input.placeholder = 'search for a character';

header.append(title);
main.append(input);*/
const app = document.querySelector<HTMLDivElement>('#app');

if (app !== null) {
  app.append(container);
}
