import { API_KEY, BASE_API_URL } from './constants';

export const fetchMovies = (searchQuery, carrentPage) => {
  return fetch(
    `${BASE_API_URL}?q=${searchQuery}&page=${carrentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=8`,
  )
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(
        new Error(`Word ${this.state.searchImage} is not exist`),
      );
    })
}
