import { useAppDispatch } from '../hooks';
import { fulfilled, processing, rejected, searching } from '../appSlices/movieSlice';
import { TRequestType } from '../shared/interfaces';
import { api } from '../shared/utils';

const useMovies = () => {
  const dispatch = useAppDispatch();

  /**
   * Search for Movies
   * @param search {String}
   */
  const searchMovies = (search: string, searchType: TRequestType): void => {
    dispatch(searchType === "search" ? searching() : processing());
    api(search, searchType).then((response: any) => {
      dispatch(fulfilled({ name: "movies", data: response.description }))
    }).catch((error) => {
      dispatch(rejected(error.message));
    })
  }

  /**
   * Get Movie Details
   * @param movieId { String}
   */
  const getMovieDetails = (movieId: string): void => {
    dispatch(processing());
    api(movieId, "details").then((response) => {
      dispatch(fulfilled({ name: "movieDetails", data: response }))
    }).catch((error) => {
      dispatch(rejected(error.message));
    })
  }

  return {
    searchMovies,
    getMovieDetails
  }
}

export default useMovies