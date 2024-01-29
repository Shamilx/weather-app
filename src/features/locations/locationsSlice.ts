import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// interface
import { LocationWeather } from "../../api/api";

// api
import { getWeather } from "../../api/api";

interface Locations {
  locations: Array<LocationWeather>;
}

const initialState: Locations = {
  locations: [],
};

export const fetchLocations = createAsyncThunk(
  "weather/locations",
  async () => {
    const mustFetch = ["London", "New York", "Tokyo", "Baku","Istanbul","Cairo","Peking","Moscow"];

    // Fetch weather data for all locations concurrently
    const responses = await Promise.all(
      mustFetch.map(async (location) => {
        try {
          const response = await getWeather(location);
          return response?.data as LocationWeather;
        } catch (error) {
          console.error(`Error fetching weather for ${location}:`, error);
          return null;
        }
      })
    );

    // Filter out null responses (failed requests) and return the fetched locations
    const fetchedLocations = responses.filter(
      (location) => location !== null
    ) as LocationWeather[];

    return fetchedLocations;
  }
);

const locationsSlice = createSlice({
  name: "locations",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchLocations.fulfilled, (state, action) => {
      state.locations = action.payload;
    });
  },
});

export default locationsSlice.reducer;
