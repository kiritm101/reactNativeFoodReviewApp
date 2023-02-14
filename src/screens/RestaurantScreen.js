import { View,Text, FlatList, Image, Dimensions } from "react-native";
import useRestaurant from './../hooks/useRestaurant';
import { useEffect } from 'react';

export default function RestaurantScreen({navigation}) {
    const dimensions=Dimensions.get("window")
    const imaageWidth=dimensions.width
    const imaageHeight=(dimensions.width*9)/16
const [results,searchRestaurants] =useRestaurant();
    const id=navigation.getParam("id")
    useEffect(() => {
      searchRestaurants(id)
    
     
    }, [])
    
    return(
        <View>
            <Text>Hello from screen 2</Text>
            <Text> Made by Kirit m in React-native</Text>
            <Text>{id}</Text>
        <FlatList data={results.photos} key={(photo)=>{photo}} renderItem={({item})=>{
         return (<Image source={{uri: item}} style={{width:imaageWidth,height:imaageHeight}}></Image>)
        }}>

        </FlatList>
        </View>
    )
} 