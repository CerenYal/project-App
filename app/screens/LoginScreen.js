import React,{ useState } from 'react';
import { StyleSheet, Image, View } from 'react-native';
import Screen from '../components/Screen';
import AppButton from '../components/Button/AppButton';
import AppTextInput from '../components/AppTextInput';

function LoginScreen(props) {
    const [email, setEmail ] = useState();
    const [password, setPassword ] = useState();
    return(
        <Screen>
            <Image 
            style={styles.logo}
            source={require('../assets/logo.png')}/>
        <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="email"
        keyboardType="email-address"
        onChangeText={text => setEmail(text) }
        placeholder="Email"
        textContentType="emailAddress"
        />
        <AppTextInput 
        autoCapitalize="none"
        autoCorrect={false}
        icon="lock"
        onChangeText={text => setPassword(text) }
        placeholder="Password"
        secureTextEntry
        textContentType="password"
        />
        <AppButton title="Login" onPress={()=> console.log(email, password)} />
        </Screen>
    );
}

const styles = StyleSheet.create({
    logo: {
        width: 80,
        height: 80, 
        alignSelf: 'center', 
        marginTop: 50,
        marginBottom: 20, 
    }
})

export default LoginScreen;