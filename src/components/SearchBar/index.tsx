import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';

interface SearchBarProps {
  placeholder: string;
  value?: string;
  onChange: (text: string) => void;
  onFocus?: () => void;
  autoFocus?: boolean
}

const SearchBar: React.FC<SearchBarProps> = ({placeholder, value, onChange, onFocus, autoFocus=false}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
        autoCapitalize="none"
        onFocus={onFocus}
        autoFocus={autoFocus}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#f1f1f1",
        borderRadius: 5,
        borderWidth: 0.5,
        padding: 12
      },
      input: {
        flex: 1,
        fontSize: 16,
      },
});
