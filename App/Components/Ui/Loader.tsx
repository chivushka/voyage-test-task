import {ActivityIndicator, StyleSheet, View} from 'react-native';
import React, {FC} from 'react';
import {primaryColor} from '../../Assets/Styles/styles';

const Loader: FC = () => {
  return (
      <ActivityIndicator
      style={styles.loader}
      size="large"
      color={primaryColor}
    />    
  );
};

export default Loader;

const styles = StyleSheet.create({
  loaderContainer:{
    position:'absolute',
    top:0,
    left:0,
    width:'100%',
    height:'100%',
    backgroundColor:'white',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    zIndex:10,
  },
  loader: {
    flex: 1,
  },
});
