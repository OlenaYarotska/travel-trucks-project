import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/";

export const fetchTrucks = createAsyncThunk(
    "campers/fetchAll", async (_, thunkAPI) => {
        const { trucks, filters } = thunkAPI.getState();
        const { page } = trucks;
        const { location, form, AC, kitchen, TV, bathroom, transmission } = filters.filterParams;

        const params = new URLSearchParams({
            page,
            limit: 4,
            ...(location && { location }),
            ...(form && { form }),
            ...(AC && { AC: true }),
            ...(kitchen && { kitchen: true }),
            ...(TV && { TV: true }),
            ...(bathroom && { bathroom: true }),
            ...(transmission && { transmission: "automatic" }),
        });
         try {
             const response = await axios.get(`/campers?${params}`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }

);
export const fetchTrucksById = createAsyncThunk(
    "campers/fetchTruckById",
    async (id, thunkAPI) => {
        try {
            const response = await axios.get(`/campers/${id}`);
            return response.data;
        } catch (error) {
           return thunkAPI.rejectWithValue(error.message); 
        }
    }
);

