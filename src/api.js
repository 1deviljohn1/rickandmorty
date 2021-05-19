const API_CHARATERS_URL = 'https://rickandmortyapi.com/api/character';

const fetchCharacters = async (page = 1) => {
  const query = `${API_CHARATERS_URL}/?page=${page}`;
  const res = await fetch(query);
  const data = await res.json();
  return data;
};

const fetchCharacterById = async (id) => {
  const query = `${API_CHARATERS_URL}/${id}`;
  const res = await fetch(query);
  const data = await res.json();
  return data;
};

export { fetchCharacters, fetchCharacterById };
