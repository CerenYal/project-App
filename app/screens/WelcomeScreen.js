import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

function WelcomeScreen(props) {
    return (
        <View 
        style={styles.background}>

        <Image 
        style={styles.logo} 
        source={require('../assets/logo.png')} />

        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1, 
        backgroundColor: '#000', 
        justifyContent: 'center', 
        alignItems: 'center', 
    }, 
    logo: {
        width: 100, 
        height: 100, 
    }, 
      
});

export default WelcomeScreen;
