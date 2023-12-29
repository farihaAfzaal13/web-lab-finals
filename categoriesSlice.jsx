
import { createSlice } from '@reduxjs/toolkit';

export const categoriesSlice = createSlice({


  Reducers: (r) => {
    r.addCase(fetchCategories.fulfilled, (state, action) => {
      state.list = action.payload;
    });     
  },
});

export const fetchCategories = () => async (dispatch) => {
  try {
    const response = await fetch('https://api.emojihub.com/categories');
    const data = await response.json();
    dispatch(fetchCategories(data));
  } catch (error) {
  }
};


export const detailsSlice = createSlice({

  extraReducers: (builder) => {
    builder.addCase(fetchDetails.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export const fetchDetails = (id) => async (dispatch) => {
  try {
    const response = await fetch(`https://api.emojihub.com/categories/${id}`);
    const data = await response.json();
    dispatch(fetchDetails(data));
  } catch (error) {
 
  }
};
