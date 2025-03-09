import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import SearchBar from '../../components/SearchBar';
import {CONSTANTS} from '../../shared/constants';
import styles from './SearchScreen.style';

interface SearchScreenProps {
  searchText: string;
  onChangeText: (text: string) => void;
  searchResults: any[];
  loading: boolean;
  error: string | null;
  SearchItemSelect: (text: any) => void;
}

const SearchScreen: React.FC<SearchScreenProps> = ({
  searchText,
  onChangeText,
  searchResults,
  loading,
  error,
  SearchItemSelect,
}) => {
  const renderItem = ({item}: {item: any}) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => SearchItemSelect(item.name)}>
      <Text style={styles.itemText}>{item.name}</Text>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={styles.container}>
      <SearchBar
        placeholder={CONSTANTS.SEARCHCITY}
        onChange={onChangeText}
        value={searchText}
        autoFocus={true}
        backIconVisible={true}
      />
      {loading && (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="blue" />
        </View>
      )}

      {error && <Text style={styles.errorText}>Error: {error}</Text>}

      {!loading && (searchResults?.length ?? 0) === 0 && (
        <View style={styles.centeredContainer}>
          <Text style={styles.noItemsText}>{CONSTANTS.NOITEM}</Text>
        </View>
      )}

      {!loading && (
        <FlatList
          data={searchResults}
          keyExtractor={item => item.id?.toString() || item.name}
          renderItem={renderItem}
          style={styles.flatlistContainer}
        />
      )}
    </SafeAreaView>
  );
};

export default SearchScreen;
