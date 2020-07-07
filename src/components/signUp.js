import React, { useState, useContext}from 'react';
import {  Image,StyleSheet,ImageBackground} from 'react-native';
import { Card,Input,Button, Text} from 'react-native-elements';
import {Context as AuthContext} from '../redux/authContext';
import {NavigationEvents} from 'react-navigation';





const SignUpScreen = ({navigation}) => {
    const {state, signUp, clearErrorMessage } = useContext(AuthContext)
    const [firstName, setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [telephoneNumber, setTelephoneNumber] = useState('')
    console.log(state)

    return(
        
    
        <ImageBackground source={require('../assets/backgroundColor.jpg')} style={styles.container}>
         <Image source={require('../assets/logo.png')} style={styles.image1}/>
         <NavigationEvents
         onWillBlur={clearErrorMessage}/>
            <Card containerStyle={{ height: 450, width:375,marginBottom:200 , borderRadius: 10}}>
                <Input
                placeholder="First Name"
                value={firstName}
                onChangeText={setFirstName}/>
                <Input
                placeholder="Last Name"
                value={lastName}
                onChangeText={setLastName}/>
                <Input
                placeholder="Email Address"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                autoCorrect={false}/>
                <Input
                placeholder="Telephone Number"
                value={telephoneNumber}
                onChangeText={setTelephoneNumber}
                keyboardType="number-pad"
                />
                <Input
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                />
                {state.errorMessage ? <Text style={styles.errorMessage}>{state.errorMessage}</Text> : null}
                <Button
                title="Enter"
                buttonStyle={{backgroundColor:'red'}}
                onPress={()=> signUp({firstName,lastName,email,password,telephoneNumber})}/>
            </Card>
        </ImageBackground>
    )
};

SignUpScreen.navigationOptions = () => {
    return {
      header: () => false,
    };
  };

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent:'center'
    },
    image1:{
        width: 175,
        height:175,
        marginTop:200 
    },
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft: 15,
        marginTop: 5
    }
})

export default SignUpScreen;