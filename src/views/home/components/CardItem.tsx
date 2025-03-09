import {Image, Pressable, Text } from 'react-native';
import React from 'react';
import styles from './CardItem.style';

interface CardItemProps {
  data: any;
  CardItemPress: (data: any) => void;
}

const CardItem: React.FC<CardItemProps> = ({data, CardItemPress}) => {
  return (
    <Pressable style={styles.forecastItem} onPress={CardItemPress}>
      <Text style={styles.forecastText}>
        {new Intl.DateTimeFormat('en-US', {
          weekday: 'short',
          month: 'short',
          day: '2-digit',
        }).format(new Date(data.date))}
      </Text>
      <Image
        source={{uri: `https:${data.hour[12].condition.icon}`}}
        style={styles.hourlyIcon}
      />
      <Text style={[styles.forecastText, { color: '#1e5eff' }]}>Min: {data.day.mintemp_c}°C</Text>
      <Text style={[styles.forecastText, { color: '#ff6200' }]}>Max: {data.day.maxtemp_c}°C</Text>
    </Pressable>
  );
};

export default CardItem;
