import { createElement } from '../../utils/createElement';

export function createCharacterCard() {
  createElement('section', {
    className: 'card',
    childElements: [
      createElement('img', {
        src: 'https://rickandmortyapi.com/api/character/avatar/92.jpeg',
        alt: '',
      }),
      createElement('article', {
        className: 'content',
        childElements: [
          createElement('div', {
            className: 'content__section',
            childElements: [
              createElement('p', {
                className: 'character',
                innerText: 'Davin',
                childElements: [
                  createElement('span', {
                    innerText: 'Dead-Human',
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
                    innerText: 'Earth (C-137)',
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
