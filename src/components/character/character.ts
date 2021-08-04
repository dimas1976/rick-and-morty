import { createElement } from '../../utils/createElement';
import './character.css';

export function createCharacterCard(character): HTMLElement {
  return createElement('section', {
    className: 'card',
    childElements: [
      createElement('img', {
        src: 'https://rickandmortyapi.com/api/character/avatar/92.jpeg',
        alt: '',
        className: 'card__img',
      }),
      createElement('article', {
        className: 'content',
        childElements: [
          createElement('div', {
            className: 'content__section',
            childElements: [
              createElement('p', {
                className: 'character',
                innerText: character.name,
                childElements: [
                  createElement('span', {
                    innerText: character.status + '-' + character.species,
                  }),
                ],
              }),
            ],
          }),
          createElement('div', {
            className: 'content__section',
            childElements: [
              createElement('p', {
                className: 'location',
                innerText: 'Last known location',
                childElements: [
                  createElement('span', {
                    innerText: character.origin,
                  }),
                ],
              }),
            ],
          }),
          createElement('div', {
            className: 'content__section',
            childElements: [
              createElement('p', {
                className: 'first-seen',
                innerText: 'First seen in:',
                childElements: [
                  createElement('span', {
                    innerText: 'Pilot',
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
