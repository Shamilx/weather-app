import { configureStore } from "@reduxjs/toolkit";

// slices
import locationsSlice from "../features/locations/locationsSlice";

export const store = configureStore({
    reducer: {
        locationsSlice
    }
})

export type StoreType = ReturnType<typeof store.getState>;