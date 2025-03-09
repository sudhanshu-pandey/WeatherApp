import {Image, Text, View} from 'react-native';
import React from 'react';
import styles from './CardItem.style';

interface CardItemProps {
  data: any;
}

const CardItem: React.FC<CardItemProps> = ({data}) => {
  return (
    <View style={styles.hourlyCard}>
      <Text style={styles.hourText}>{data.time.split(' ')[1]}</Text>
      <Image
        source={{uri: `https:${data.condition.icon}`}}
        style={styles.hourlyIcon}
      />
      <Text style={styles.tempText}>{data.temp_c}°C</Text>
    </View>
  );
};

export default CardItem;
