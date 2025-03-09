import React, {useCallback, useEffect, useRef, useState} from 'react';
import HomeScreen from '../views/home/HomeScreen';
import {navigate, push} from '../services/navigation';
import {CONSTANTS, SCREENS} from '../shared/constants';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../redux/store';
import {fetchWeather} from '../redux/slice/weatherSlice';
import {Alert, TextInput} from 'react-native';

const HomeScreenViewModel = () => {
  const [query, setQuery] = useState<String>('');
  const {data, loading, error} = useSelector(
    (state: RootState) => state.weather,
  );
  const [forecastDays, setForecastDays] = useState(
    data?.forecast?.forecastday?.length.toString() || 3,
  );
  const debounceTimeout = useRef<NodeJS.Timeout | null>(null);
  const textInputRef = useRef<TextInput | null>(null);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    console.log(data);
    setForecastDays(3);
  },[data?.location?.name])

  const goToSearchScreen = useCallback(() => {
    push(SCREENS.SEARCH, {initialQuery: query});
  }, [query]);

  const CardItemPress = (data: any) => {
    console.log(data);
    navigate(SCREENS.DETAIL, data);
  }

  const TextChange = useCallback(
    (text: string) => {
      let dayCount = Number(text);
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }
      if (dayCount > 12 || dayCount <= 0) {
        Alert.alert(CONSTANTS.INFO, CONSTANTS.MAXIMMINUMFORECASTDAY);
        setForecastDays(3);
        textInputRef.current?.blur();
        dispatch(fetchWeather({location: data.location.name, day: 3}));
        return;
      }

      setForecastDays((prev: number) => (prev !== dayCount ? dayCount : prev));

      debounceTimeout.current = setTimeout(() => {
        if (data?.location?.name) {
          textInputRef.current?.blur();
          dispatch(
            fetchWeather({location: data.location.name, day: dayCount || 3}),
          );
        }
      }, 1000);
    },
    [data?.location?.name, dispatch, forecastDays],
  );

  return (
    <HomeScreen
      {...{
        goToSearchScreen,
        data,
        loading,
        error,
        TextChange,
        forecastDays,
        textInputRef,
        CardItemPress
      }}
    />
  );
};

export default HomeScreenViewModel;
