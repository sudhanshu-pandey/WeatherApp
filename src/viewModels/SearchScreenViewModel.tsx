import React, {useRef, useState} from 'react';
import SearchScreen from '../views/search/SearchScreen';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../redux/store';
import {fetchSearchCity} from '../redux/slice/SearchCitySlice';
import { pop } from '../services/navigation';
import { fetchWeather } from '../redux/slice/weatherSlice';

const SearchScreenViewModel = () => {
  const [searchText, setSearchText] = useState<string>('');
  const debounceTimeout = useRef<NodeJS.Timeout | null>(null);
  const {searchResults, loading, error} = useSelector(
    (state: RootState) => state.searchCity,
  );
  const dispatch = useDispatch<AppDispatch>();

  const onChangeText = (text: string) => {
    setSearchText(text);

    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    debounceTimeout.current = setTimeout(() => {
      dispatch(fetchSearchCity(text));
    }, 1000);
  };

  const SearchItemSelect = (text: string) => {
    dispatch(fetchWeather({ location: text, day: 3}))
    pop();
  }

  return (
    <>
      <SearchScreen
        {...{
          searchText,
          onChangeText,
          searchResults,
          loading,
          error,
          SearchItemSelect
        }}
      />
    </>
  );
};

export default SearchScreenViewModel;
