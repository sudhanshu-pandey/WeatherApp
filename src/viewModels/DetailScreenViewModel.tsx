import React from 'react';
import {useRoute} from '@react-navigation/native';
import WeatherDetailScreen from '../views/detail/DetailScreen';
import {DetailScreenRouteProp} from '../route/navigationTypes';
import {pop} from '../services/navigation';

const DetailScreenViewModel = () => {
  const route = useRoute<DetailScreenRouteProp>();
  const {date, day, hour} = route.params;

  const BackButtonPress = () => {
    pop();
  };

  return (
    <WeatherDetailScreen
      {...{
        date,
        day,
        hour,
        BackButtonPress,
      }}
    />
  );
};

export default DetailScreenViewModel;
