import { createSlice } from "@reduxjs/toolkit";

export const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
        filterParams: {},
    },
    reducers: {
        getFilters: (state, action) => {
            state.filterParams = action.payload;
        }
    }
});
export const { getFilters} = filtersSlice.actions;

export default filtersSlice.reducer;