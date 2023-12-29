
import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './slices/categoriesSlice';
import detailsReducer from './slices/detailsReducer';
export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    details: detailsReducer,
  },
});

export default store;
