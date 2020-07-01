import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function NewListingButton({ onPress }) {
  return (
      <TouchableOpacity onPress={onPress}>
    <View style={styles.container}>
        <Image style={styles.image} source={require('../assets/logo.png')} />
        {/* <MaterialCommunityIcons name="plus-circle" color={colors.white} size={50} /> */}
    </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
      alignItems: 'center', 
      backgroundColor: colors.white,
      borderColor: colors.white, 
      borderWidth: 10, 
      borderRadius: 40,
      bottom: 35, 
      height: 80,
      justifyContent: 'center', 
      width: 80, 
  },
  image: {
    width: 90,
    height: 90, 
  }
});

export default NewListingButton;