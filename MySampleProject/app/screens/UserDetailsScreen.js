import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, ImageBackground } from 'react-native';
import UserDetails from '../data/UserDetails.json'
import AppStyles from '../assets/styles/AppStyles'


const userDetails = ({ navigation,route }) => {
  const { item } = route.params
console.log("data",item);
  

  return (
    <View style={AppStyles.homeContainer}>
    <ImageBackground 
    style={AppStyles.homeBackground}
    source={require('../assets/images/background.png')}>
      <View style={AppStyles.homeItem}>
    <Text style={AppStyles.userDetailsText}>Employee Name: {item.preferredFullName}</Text>
    <Text style={AppStyles.userDetailsText}>Job Title: {item.jobTitleName}</Text>
    <Text style={AppStyles.userDetailsText}>Email: {item.emailAddress}</Text>
    <Text style={AppStyles.userDetailsText}>Phone No: {item.phoneNumber}</Text>
    <Text style={AppStyles.userDetailsText}>Employee Code: {item.employeeCode}</Text>
   </View>
      </ImageBackground>
    </View>
  );
}

export default userDetails;
