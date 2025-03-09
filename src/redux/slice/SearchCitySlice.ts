import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSearchAutoComplete } from "../../services/api/WeatherService";

interface SearchCityState {
  searchResults: any[];
  loading: boolean;
  error: string | null;
}

const initialState: SearchCityState = {
  searchResults: [],
  loading: false,
  error: null,
};

export const fetchSearchCity = createAsyncThunk(
  "searchCity/fetchSearchCity",
  async (location: string, { rejectWithValue }) => {
    try {
      return await getSearchAutoComplete(location);
    } catch (error: any) {
      return rejectWithValue(error.message || "Failed to fetch search results");
    }
  }
);

const SearchCitySlice = createSlice({
  name: "searchCity",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchCity.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSearchCity.fulfilled, (state, action) => {
        state.loading = false;
        state.searchResults = action.payload;
      })
      .addCase(fetchSearchCity.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default SearchCitySlice.reducer;
