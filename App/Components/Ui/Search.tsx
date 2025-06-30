import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { FC, useState } from 'react';
import Input from './Input';
import { globalFontStyles, monoBG, monoColor, monoDisplay, monoLabel, primaryColor } from '../../Assets/Styles/styles';
import SearchIcon from '../../Assets/images/svg/SearchIcon';

interface ISearch {
  placeholder?: string;
  value?: string;
  setValue: (value: string) => void;
  error: boolean;
  focused: boolean;
  propStyles?: any;
  reffer?: any;
  submit?: () => void;
  disabled?: boolean;
}

const Search: FC<ISearch> = ({
  placeholder,
  value,
  setValue,
  error,
  focused,
  propStyles,
  reffer,
  submit,
  disabled }) => {
  const [searchData, setSearchData] = useState('');
  return (
    <View style={propStyles}>
      <View style={{ ...styles.wrapper }}>
        <TouchableOpacity
          onPress={() => { }}>
          <SearchIcon />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          onChangeText={setValue}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={monoColor}
          ref={reffer}
          autoCapitalize={'none'}
          returnKeyType={'search'}
        />
      </View>
    </View>
  );
};

export default Search;
const styles = StyleSheet.create({
  input: {
    backgroundColor: monoBG,
    paddingLeft: 10,
    width: '90%',
    height: 48,
    borderRadius: 6,
    color: monoDisplay,
  },
  title: {
    color: monoLabel,
    marginBottom: 8,
  },
  wrapper: {
    paddingLeft: 20,
    height: 48,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: monoBG,
    borderColor: monoBG,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomLabel: {
    fontWeight: 'bold',
    color: primaryColor,
    textAlign: 'right',
    marginTop: '5%',
  },
});
