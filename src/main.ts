import './style.css';
import './utils/createElement';
import { createElement } from './utils/createElement';
import { createCharacterCard } from './components/character/character';
import type { Character } from './types';

const character: Character = {
  name: 'Morty Smith',
  thumbnail: '',
  status: 'Alive',
  species: 'Human',
  origin: 'Earth (C-137)',
};

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
        createElement('div', {
          className: 'cards',
          childElements: [
            createCharacterCard(character),
            createCharacterCard(character),
            createCharacterCard(character),
            createCharacterCard(character),
          ],
        }),
      ],
    }),
  ],
});

const app = document.querySelector<HTMLDivElement>('#app');

if (app !== null) {
  app.append(container);
}
