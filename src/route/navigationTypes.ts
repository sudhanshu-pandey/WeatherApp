import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Search: undefined;
  Detail: {
    date: string;
    day: {maxtemp_c: number; mintemp_c: number};
    hour: {
      time: string;
      temp_c: number;
      condition: {icon: string; text: string};
    }[];
  };
};

export type DetailScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Detail'>;
export type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>;
