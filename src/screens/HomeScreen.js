import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import CategoryItem from '../components/CategoryItem';
import Header from '../components/Header';
import Restaurants from '../components/Restaurants';


import Search from '../components/Search';
export default function HomeScreen() {
    // const term="Burger"
    const [term, setterm] = useState("Burger")
    const commonCategories=[
      {name:"Burger",imageUrl:require("../assets/images/burger.png")},
      {name:"Pizza",imageUrl:require("../assets/images/pizza.png")},
      {name:"Desert",imageUrl:require("../assets/images/cake.png")},
      {name:"Smoothies",imageUrl:require("../assets/images/smoothies.png")},
      {name:"Pasta",imageUrl:require("../assets/images/pasta.png")},
      {name:"steak",imageUrl:require("../assets/images/steak.png")}
    ]
    return (
      <View >
        <StatusBar />
        <Header />
       <Search setTerm={setterm} />
       {/* <CategoryItem name="Burger" imageUrl={require("./src/assets/images/burger.png")}></CategoryItem>
       <CategoryItem name="Pizza" imageUrl={require("./src/assets/images/pizza.png")}></CategoryItem>
       <CategoryItem name="Desert" imageUrl={require("./src/assets/images/cake.png")}></CategoryItem> */}
       {/* ["Steak","choco"].map(function name(var e) {
        <CategoryItem name="j"></CategoryItem>
       }) */}
       <View>
  
       <FlatList   horizontal showsHorizontalScrollIndicator={false}   data={commonCategories}    key={(category) => category.name} renderItem={({item,index})=>{
        return(
          <CategoryItem name={item.name} imageUrl={item.imageUrl} index={index} active={item.name==term} handlePress={()=>{setterm(item.name)}}></CategoryItem>
        )
       }}>
        
       </FlatList>
       </View>
       <Restaurants term={term}></Restaurants>
        {/* <Text style={styles.container} >Open up App.js to start working on your app!,,,,!</Text> */}
      </View>
    );
  }
  
  // const styles = StyleSheet.create({
  //   container: {
  //     // flex: 1,
  //     // backgroundColor: '#fff',
  //     // alignItems: 'center',
  //     // justifyContent: 'center',
     
  //   }
  // });