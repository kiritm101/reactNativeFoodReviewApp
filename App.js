// import { StatusBar } from 'expo-status-bar';
// import { useState } from 'react';
// import { FlatList, StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import CategoryItem from './src/components/CategoryItem';
// import Header from './src/components/Header';
// import Restaurants from './src/components/Restaurants';
import HomeScreen from './src/screens/HomeScreen';
import RestaurantScreen from './src/screens/RestaurantScreen';
// import Search from './src/components/Search';


  const navigator=createStackNavigator({
    Home:HomeScreen,
    RestaurantScreen:RestaurantScreen
  },{
    initialRouteName:"Home"
  })
export default createAppContainer(navigator)
