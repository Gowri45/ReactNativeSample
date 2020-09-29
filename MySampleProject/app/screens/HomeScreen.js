import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, ImageBackground,TouchableHighlight,Alert } from 'react-native';
import UserDetails from '../data/UserDetails.json'
import AppStyles from '../assets/styles/AppStyles'
import App from '../../App';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Item = ({ title }) => (
  <View style={AppStyles.homeItem}>
    <Text style={AppStyles.homeTitle}>{title}</Text>
  </View>
);

const Home = ({ navigation }) => {
const renderItem = (item ) => (
      <TouchableOpacity onPress={()=>navigation.navigate('User Details',{item:item})}>
    <Item title={item.preferredFullName} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={AppStyles.homeContainer}>
    <ImageBackground 
    style={AppStyles.homeBackground}
    source={require('../assets/images/background.png')}>
      <FlatList
        data={UserDetails.Employees}
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={item => item.userId}/>
    
      </ImageBackground>
    </SafeAreaView>
  );
}


export default Home;
