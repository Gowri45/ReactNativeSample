import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import { exp } from 'react-native-reanimated';
import AppStyles from '../assets/styles/AppStyles';
import Home from './HomeScreen';
import { useLinkProps } from '@react-navigation/native';

const LoginScreen= ({ navigation }) => {
  
  const [email, setEmail] = useState('test');
  const [password,setPassword] = useState('');
  return(
    <ImageBackground style={AppStyles.loginBackground}
        source={require('../assets/images/background.png')}>
          <View style={AppStyles.loginContainer}>
       <View style={AppStyles.loginInputView} >
           <TextInput  
            style={AppStyles.loginInputText}
            placeholder="Email..." 
            type='email'
            placeholderTextColor="#003f5c"
             onChangeText={value => setEmail(value)}
            />
        </View>
        <View style={AppStyles.loginInputView} >
           <TextInput  
            style={AppStyles.loginInputText}
            placeholder="Password..." 
            secureTextEntry
            placeholderTextColor="#003f5c"
            onChangeText={text => setPassword(text)}
           />
        </View>
            <TouchableOpacity 
            style={AppStyles.loginBtn} 
            onPress={() => validate({navigation},email,password)}>
           <Text style={AppStyles.loginText}>Signup</Text>
         </TouchableOpacity>
        </View>
        </ImageBackground>
  );
}
 validate=({navigation},email,password)=>{
  navigation.navigate('Home');
  const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   if(email=='' || password=='')
  {
    alert('Enter a valid email address and password')
  }
  else if (reg.test(email) === true){
    navigation.navigate('Home');
  }
  
  else{
   alert('Invalid Email');
 } 
}

export default LoginScreen;



