

const API = 'https://www.atg.se/services/racinginfo/v1/api';

export default function fetchData(keyword, type) {
  if (type !== 'id') {
    return fetch(`${API}/products/${keyword}`);
  }
  return fetch(`${API}/games/${keyword}`);
}






