import { createElement } from '../../utils/createElement';
import styles from './character.module.css';
import type { Character } from '../../types';

export function createCharacterCard({
  name,
  thumbnail,
  status,
  species,
  origin,
}: Character): HTMLElement {
  return createElement('section', {
    className: styles['card'],
    childElements: [
      createElement('img', {
        src: thumbnail,
        alt: '',
        className: styles['card__img'],
      }),
      createElement('article', {
        className: styles['content'],
        childElements: [
          createElement('div', {
            className: styles['content__section'],
            childElements: [
              createElement('p', {
                className: styles['character'],
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
            className: styles['content__section'],
            childElements: [
              createElement('p', {
                className: styles['location'],
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
            className: styles['content__section'],
            childElements: [
              createElement('p', {
                className: styles['first-seen'],
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
