import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import styles from './DetailScreen.style';
import Glyphs from '../../assets/Glyphs';
import { CONSTANTS } from '../../shared/constants';
import CardItem from './components/CardItem';

interface WeatherDetailScreenProps {
  date: string;
  day: {maxtemp_c: number; mintemp_c: number};
  hour: {
    time: string;
    temp_c: number;
    condition: {icon: string; text: string};
  }[];
  BackButtonPress: () => void;
}

const WeatherDetailScreen: React.FC<WeatherDetailScreenProps> = ({
  date,
  day,
  hour,
  BackButtonPress
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <TouchableOpacity style={styles.arrowButton} onPress={BackButtonPress}>
            <Image source={Glyphs.Arrow} style={styles.backArrowIcon} />
        </TouchableOpacity>
        <Text style={styles.date}>
        {new Intl.DateTimeFormat('en-US', {
          weekday: 'short',
          month: 'short',
          day: '2-digit',
        }).format(new Date(date))}
        </Text>
        {hour.length > 0 && (
          <>
            <Image
              source={{uri: `https:${hour[0].condition.icon}`}}
              style={styles.icon}
            />
            <Text style={styles.condition}>{hour[0].condition.text}</Text>
          </>
        )}

        <Text style={styles.temp}>
          {day.maxtemp_c}°C / {day.mintemp_c}°C
        </Text>
      </View>

      <Text style={styles.hourlyTitle}>{CONSTANTS.HRSFCT}</Text>

      <FlatList
        data={hour}
        keyExtractor={item => item.time}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.hourlyContainer}
        numColumns={3}
        renderItem={({item}) => <CardItem data={item} />}
      />
    </SafeAreaView>
  );
};

export default WeatherDetailScreen;
