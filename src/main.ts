import './style.css';
import './utils/createElement';
import { createElement } from './utils/createElement';
import { createCharacterCard } from './components/character/character';
import type { Character } from './types';
import { getCharacters } from './utils/api';

getCharacters();

const characters: Character[] = [
  {
    name: 'Morty Smith',
    thumbnail: 'https://rickandmortyapi.com/api/character/avatar/92.jpeg',
    status: 'Alive',
    species: 'Human',
    origin: 'Earth (C-137)',
  },
  {
    name: 'Ants in my Eyes Johnson',
    thumbnail: 'https://rickandmortyapi.com/api/character/avatar/20.jpeg',
    status: 'unknown',
    species: 'Human',
    origin: 'Interdimensional Cable',
  },
];

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
          childElements: characters.map((character) =>
            createCharacterCard(character)
          ),
        }),
      ],
    }),
  ],
});

const app = document.querySelector<HTMLDivElement>('#app');

if (app !== null) {
  app.append(container);
}
