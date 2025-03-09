import {Image, Keyboard, StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Glyphs from '../../assets/Glyphs';
import { pop } from '../../services/navigation';

interface SearchBarProps {
  placeholder: string;
  value?: string;
  onChange: (text: string) => void;
  onFocus?: () => void;
  backIconVisible?: boolean;
  autoFocus?: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder,
  value,
  onChange,
  onFocus,
  backIconVisible = false,
  autoFocus = false,
}) => {

  const backButtonPress = () => {
    Keyboard.dismiss();
    pop();
  }

  return (
    <View style={styles.container}>
      {backIconVisible && (
        <TouchableOpacity style={styles.backArrowStyle} onPress={backButtonPress}>
          <Image source={Glyphs.Arrow} style={styles.backArrowIcon} />
        </TouchableOpacity>
      )}
      <TextInput
        style={[styles.input,{paddingHorizontal: backIconVisible ? 30 : 10}]}
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
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    borderRadius: 5,
    borderWidth: 0.5,
    padding: 15,
  },
  input: {
    flex: 1,
    fontSize: 16
  },
  backArrowIcon: {
    width: 20,
    height: 20,
    marginHorizontal: 8,
    alignSelf:'center'
  },
  backArrowStyle:{
    position: 'absolute',
    zIndex: 2,
    elevation: 2,
    height: 40,
    width: 40,
    borderRadius:10,
    justifyContent:'center'
  }
});
