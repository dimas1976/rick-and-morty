import '../types';
import { AllCharactersFromAPI, Character, CharacterFromAPI } from '../types';
export async function getCharacters(): Promise<Character[]> {
  const response = await fetch('https://rickandmortyapi.com/api/character');
  const data: AllCharactersFromAPI = await response.json();
  const characters = data.results;
  const formattedCharacters: Character[] = characters.map((character) => {
    const formattedCharacter = {
      name: character.name,
      thumbnail: character.image,
      status: character.status,
      species: character.species,
      origin: character.origin.name,
    };
    return formattedCharacter;
  });
  return formattedCharacters;
}
