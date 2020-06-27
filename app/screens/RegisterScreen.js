import React,{ useState } from 'react';
import { StyleSheet } from 'react-native';
import Screen from '../components/Screen';
import AppButton from '../components/Button/AppButton';
import AppTextInput from '../components/AppTextInput';

function RegisterScreen(props) {
    const [userName, setUserName ] = useState();
    const [email, setEmail ] = useState();
    const [password, setPassword ] = useState();
    return(
        <Screen style={styles.container}>
          
        <AppTextInput 
        autoCapitalize="none"
        autoCorrect={false}
        icon="alien"
        onChangeText={text => setUserName(text) }
        placeholder="Name"
        /> 
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
        <AppButton title="Register" onPress={()=> console.log('registered: ', userName, email, password)}/>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,  
    }, 
    logo: {
        width: 80,
        height: 80, 
        alignSelf: 'center', 
        marginTop: 50,
        marginBottom: 20, 
    }
})

export default RegisterScreen;