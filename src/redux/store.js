import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import trucksReducer from "./trucks/slice";
import filtersReducer  from "./filters/slice";

const trucksPersistConfig = {
  key: "trucks",
  storage,
  whitelist: ["favourites"],
};
const persistedTrucksReducer = persistReducer(trucksPersistConfig, trucksReducer);

export const store = configureStore({
    reducer: {
    trucks: persistedTrucksReducer,
    filters: filtersReducer,
  },
   middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);