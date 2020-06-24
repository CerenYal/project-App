import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';
import AppButton from '../components/Button/AppButton';
import colors from '../config/colors';

function WelcomeScreen(props) {
    return (
        <ImageBackground 
        blurRadius={5}
        style={styles.background}
        >
        
        <View style={styles.logoContainer}>
        <Image 
        style={styles.logo}
        source={require('../assets/logo.png')} />
        <Text style={styles.tagline}>GET YOUR LIFE TOGETHER</Text>
        </View>

        <View style={styles.buttonsContainer}>
        <AppButton title="Login" color="third" />
        <AppButton title="Register" color="third"/>
        

        </View>
        
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1, 
        justifyContent: "flex-end", 
        alignItems: 'center', 
        backgroundColor: '#000', 
    }, 
    buttonsContainer: {
        padding: 20,
        width: '100%', 
    },
    logo: {
       width: 150,
       height: 150, 
       
    },
    logoContainer: {
        position: 'absolute',
       top: 170, 
       alignItems: 'center', 
    },
    tagline: {
    fontSize: 20, 
    fontWeight: "600",
    paddingVertical: 0,
    color: colors.third, 
    


    }
    
});

export default WelcomeScreen;
