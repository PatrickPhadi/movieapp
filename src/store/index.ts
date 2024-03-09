import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import moviesReducer from '../appSlices/movieSlice';

const store = configureStore({
    reducer: moviesReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;