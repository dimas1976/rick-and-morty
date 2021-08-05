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

const cards = createElement('div', {
  className: 'cards',
  childElements: characters.map((character) => createCharacterCard(character)),
});

const input = createElement('input', {
  className: 'main__input',
  placeholder: 'Search...',
  oninput: async () => {
    cards.innerHTML = '';
    const searchName = input.value;

    const filteredCharacters = await getCharacters(searchName);
    console.log('Filtered cards', filteredCharacters);
    const createFilteredCharacterCards = filteredCharacters.map((character) =>
      createCharacterCard(character)
    );
    cards.append(...createFilteredCharacterCards);
  },
});

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
      childElements: [input, cards],
    }),
  ],
});

const app = document.querySelector<HTMLDivElement>('#app');

if (app !== null) {
  app.append(container);
}
