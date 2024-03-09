
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    movies: [],
    movieDetails: null,
    error: null,
    loading: false,
    searching: false
};

type TFulFilledNames = keyof typeof initialState;

interface IFulFilled {
    payload: {
        name: TFulFilledNames;
        data: any;
    }
}

export const moviesSlice = createSlice({
    name: 'Movies',
    initialState,
    reducers: {
        clearDetails: () => initialState,
        searching: (state) => ({
            ...state,
            searching: true
        }),
        processing: (state) => ({
            ...state,
            loading: true
        }),
        rejected: (state, { payload }) => ({
            ...state,
            loading: false,
            error: payload,
            searching: false
        }),
        unmountMovieDetails: (state) => ({
            ...state,
            movieDetails: null
        }),
        fulfilled: (state, { payload }: IFulFilled) => ({
            ...state,
            loading: false,
            searching: false,
            [payload.name]: payload.data
        })
    }
});

export const { clearDetails, rejected, processing, searching, unmountMovieDetails, fulfilled } = moviesSlice.actions;

export default moviesSlice.reducer;