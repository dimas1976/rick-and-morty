import { createElement } from '../../utils/createElement';
import './character.css';
import type { Character } from '../../types';

export function createCharacterCard({
  name,
  status,
  species,
  origin,
}: Character): HTMLElement {
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
                innerText: name,
                childElements: [
                  createElement('span', {
                    innerText: status + '-' + species,
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
                    innerText: origin,
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
