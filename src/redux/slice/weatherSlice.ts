import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getWeatherForecast } from "../../services/api/WeatherService";

interface WeatherState {
  data: any;
  loading: boolean;
  error: string | null;
}

// Initial state
const initialState: WeatherState = {
  data: null,
  loading: false,
  error: null,
};

// Thunk to fetch weather data
export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async ({ location, day }: { location: string; day: number }, { rejectWithValue }) => {
    try {
      return await getWeatherForecast(location, day);
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default weatherSlice.reducer;