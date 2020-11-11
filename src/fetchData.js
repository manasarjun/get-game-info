
function fetchData(keyword) {
  return fetch(`https://www.atg.se/services/racinginfo/v1/api/products/${keyword}`)
}

export default fetchData;