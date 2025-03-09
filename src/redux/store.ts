import {configureStore} from '@reduxjs/toolkit';
import searchCityReducer from './slice/SearchCitySlice';
import weatherReducer from './slice/weatherSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';

const WeatherPersistConfig = {
  key: 'weather',
  storage: AsyncStorage,
};

const WeatherPersistReducer = persistReducer(
  WeatherPersistConfig,
  weatherReducer,
);

export const store = configureStore({
  reducer: {
    searchCity: searchCityReducer,
    weather: WeatherPersistReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
