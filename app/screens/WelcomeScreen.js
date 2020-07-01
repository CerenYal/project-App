import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';
import AppButton from '../components/AppButton';
import colors from '../config/colors';

function WelcomeScreen({ navigation }) {
    return (
        <ImageBackground 
        blurRadius={5}
        style={styles.background}
        >
        
        <View style={styles.logoContainer}>
        <Image 
        style={styles.logo}
        source={require('../assets/logo.png')} />
        <Text style={styles.tagline}>HAZELNUT</Text>
        </View>

        <View style={styles.buttonsContainer}>
        <AppButton title="Login" color="gold" onPress={()=> navigation.navigate("Login")} />
        <AppButton title="Register" color="gold" onPress={()=> navigation.navigate("Register")} />
        

        </View>
        
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1, 
        justifyContent: "flex-end", 
        alignItems: 'center', 
        backgroundColor: colors.white, 
    }, 
    buttonsContainer: {
        padding: 20,
        width: '100%', 
    },
    logo: {
       width: 130,
       height: 130, 
       
    },
    logoContainer: {
        position: 'absolute',
       top: 170, 
       alignItems: 'center', 
    },
    tagline: {
    fontSize: 26, 
    fontWeight: "500",
    paddingVertical: 0,
    color: colors.black, 
    


    }
    
});

export default WelcomeScreen;
