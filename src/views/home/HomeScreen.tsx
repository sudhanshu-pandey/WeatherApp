import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from 'react-native';
import SearchBar from '../../components/SearchBar';
import CardItem from './components/CardItem';
import {CONSTANTS} from '../../shared/constants';
import styles from './HomeScreen.style';

interface HomeScreenProps {
  goToSearchScreen: () => void;
  data: any;
  loading: boolean;
  error: string | null;
  TextChange: (text: string) => void;
  forecastDays: number;
  textInputRef: React.RefObject<TextInput | null>;
  CardItemPress: (data: any) => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({
  goToSearchScreen,
  data,
  loading,
  error,
  TextChange,
  forecastDays,
  textInputRef,
  CardItemPress,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <SearchBar
        placeholder={CONSTANTS.SEARCHCITY}
        onChange={() => {}}
        onFocus={goToSearchScreen}
      />

      {error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : !data ? (
        <Text style={styles.selectCityText}>{CONSTANTS.SELECTCITY}</Text>
      ) : (
        <>
          <Text style={[styles.districtText, {color: '#32CD32'}]}>
            {data.location.name}
          </Text>
          <View style={styles.tempContainer}>
            <Image
              style={styles.icon}
              source={{uri: 'https:' + data.current.condition.icon}}
            />
            <Text style={[styles.temperatureText, {color: '#ff6200'}]}>
              {data.current.temp_c}°C
            </Text>
          </View>
          <Text style={[styles.conditionText, {color: '#4682B4'}]}>
            {data.current.condition.text}
          </Text>

          <View style={styles.weatherforcastTextContainer}>
            <Text style={styles.forecastTitle}>Weather Forecast</Text>
            <TextInput
              ref={textInputRef}
              placeholder="Day"
              keyboardType="numeric"
              style={styles.textInput}
              onChangeText={text => TextChange(text || '3')}
              value={forecastDays.toString()}
              selectTextOnFocus={true}
            />
          </View>

          <FlatList
            data={data.forecast.forecastday}
            keyExtractor={item => item.date}
            renderItem={({item}) => (
              <CardItem data={item} CardItemPress={() => CardItemPress(item)} />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.forecastList}
          />
        </>
      )}
    </SafeAreaView>
  );
};

export default React.memo(HomeScreen);
