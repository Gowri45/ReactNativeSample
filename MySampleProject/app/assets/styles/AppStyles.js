import {StyleSheet, OpaqueColorValue} from 'react-native';
import Colours from './Colours'

export const AppStyles = StyleSheet.create({
    loginBackground:{
        flex: 1,  
        resizeMode: 'cover'
      },
        loginContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      resizeMode: 'cover'
    },
      loginInputView:{
      width:"80%",
      backgroundColor:Colours.white,
      borderRadius:25,
      height:65,
      marginBottom:20,
      justifyContent:"center",
      padding:20
    },
    loginInputText:{
      height:65,
      color:"black"
    },
      loginBtn:{
      width:"80%",
      backgroundColor: Colours.loginBtn,
      borderRadius:25,
      height:65,
      alignItems:"center",
      justifyContent:"center",
      marginTop:40,
      marginBottom:10
    },
    loginText:{
      color: Colours.black
    },
    homeContainer: {
        flex: 1,
      },
      homeItem: {
        backgroundColor: Colours.itemBackground,
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius:20,
        opacity: 0.8
      },
      homeTitle: {
        fontSize: 32,
      },
      homeBackground: {
          flex: 1,
          padding:5,
          resizeMode: 'cover'
      },
      userDetailsText: {
        fontSize: 20,
      },

});
export default AppStyles;