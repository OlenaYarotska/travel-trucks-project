import { createSlice } from "@reduxjs/toolkit";
import { fetchTrucks, fetchTrucksById } from "./operations";

export const trucksSlice = createSlice({
    name: 'trucks',
    initialState: {
        items: [],
        page: 1,
        total: 0,
        current: null,
        loadPage: false,
        favourites: [],
        isLoading: false,
        error: null,
    },
    reducers: {
        loadMoreTrucks: (state) => {
            state.page += 1;
        },
        resetFilteredItems(state) {
            state.items = [];
            state.page = 1;
        },
        handleError(state, action) {
            state.error = action.payload;
        },
        getFavourite(state, action) {
            const truck = action.payload;
            const index = state.favourites.findIndex((item) => item.id === truck)
            if (index === -1) {
                const newTruck = state.items.find((item) => item.id === truck);
                if (newTruck) {
                    state.favourites.push(newTruck)
                }
            } else {
                    state.favourites.splice(index, 1)
                }         
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchTrucks.pending, state => {
                state.error = false;
                state.isLoading = true;
            })
            .addCase(fetchTrucks.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items = [...state.items,
                ...action.payload.items.filter((newItems) =>
                    !state.items.some((listItem) => listItem.id === newItems.id))
                ];
                state.total = action.payload.total;
                state.loadPage = state.items.length < state.total;
            })
            .addCase(fetchTrucks.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            })
            .addCase(fetchTrucksById.pending, state => {
                state.error = false;
                state.isLoading = true;
            })
            .addCase(fetchTrucksById.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            })
            .addCase(fetchTrucksById.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.current = action.payload;
        })
    }
});

export const { loadMoreTrucks, resetFilteredItems, getFavourite, handleError } = trucksSlice.actions;

export default trucksSlice.reducer;