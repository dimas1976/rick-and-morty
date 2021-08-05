import './style.css';
import './utils/createElement';
import { createElement } from './utils/createElement';
import { createCharacterCard } from './components/character/character';
import type {
  Character,
  CharacterFromAPI,
  AllCharactersFromAPI,
} from './types';
import { getCharacters } from './utils/api';

const characters: Character[] = await getCharacters();

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
          placeholder: 'Search...',
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
