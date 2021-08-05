import '../types';
export async function getCharacters(): Promise<[]> {
  const response = await fetch('https://rickandmortyapi.com/api/character');
  const data = await response.json();
  const characters = data.results;
  console.log(characters);
  return characters;
}
