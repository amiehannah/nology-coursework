const API_URL = "https://api.punkapi.com/v2/beers"

export const fetchBeers = () => {
    return fetch(`${API_URL}`)
      .then((response) => response.json())
      .then((jsonResponse) => {
          return jsonResponse;
      })
      .catch((error) => {
        console.log(error);
      });
  };


export const FILTER_DATA = [
  {
    name: 'High ABV (> 6.0%)',
    id: 'abv',
    checked: true,
  },
  {
    name: 'Classic Range',
    id: 'classic',
    checked: false,
  },
  {
    name: 'Acidic (ph < 4)',
    id: 'acidic',
    checked: false,
  },
];

