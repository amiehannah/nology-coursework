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
    checked: false,
    handleFilter(checked) {
      console.log(checked)
      checked = !checked
      console.log(checked)
      return checked
    }
  },
  {
    name: 'Classic Range',
    id: 'classic',
    checked: false,
    handleFilter() {
      console.log(this)
      return this.checked = !this.checked
    }
  },
  {
    name: 'Acidic (ph < 4)',
    id: 'acidic',
    checked: false,
    handleFilter() {
      console.log(this)
      return this.checked = !this.checked
    }
  },
];

