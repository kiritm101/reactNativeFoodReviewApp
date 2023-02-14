import axios from "axios";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { withNavigation } from "react-navigation";
import yelp from "../api/yelp";
import useRestaurants from "../hooks/useRestaurants";
import RestaurantItem from './RestaurantItem';

 function Restaurants({term,navigation}) {
    // const [response,searchRestaurants]=useRestaurants();
    const [{response,loading}, setResults] = useState("")
    const searchRestaurants= async(term)=>{
        setResults({response:null,loading:true})
        const response=await yelp.get('/search'
        ,{params: {
            limit:15,
            term:term,
            location:"Toronto"}
            }
       
            )
                // console.log(response)
                setResults({response:response.data.businesses,loading:false})
 
        // axios({
        //     method: 'get',
        //     url: 'http://bit.ly/2mTM3nY',
        //     responseType: 'stream'
        //   })
        //     .then(function (response) {
        //       response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
        //       console.log(response)
        //     }).catch((err)=>{console.log(err)});
        // axios({
        //     method: 'get',
        //     url: 'https://api.yelp.com/v3/businesses/search',
        //     headers: {
        //         Authorization: `Bearer fuefE5XzFBOYQrWACxEa1NzsOuUyCd9iKXGlotUC-9H4l5WHkveHLsd5yk60F7KGX1Mj9hKZ4M7eZYlMg0UfxdtYpTexTmCHPvGlCfPtKbHgThE90LtoQYyRfIMbYnYx`,
        //       },
        //   data: {
        //     limit:15,
        //     term:"Desert",
        //     location:"Toronto"}
        //   }).then(function (response) {
        //           console.log(response)
        //         }).catch((err)=>{console.log(err)});;
        //     }
    
    }
    useEffect(() => {
     
   
    
        searchRestaurants(term)
      
      }, [term])
    
    console.log(response)
    if (loading) {
        return(<ActivityIndicator size="large" marginVertical={30}></ActivityIndicator>)
    }

   return(
    <View style={styles.container}>
        <Text style={styles.header}>Top restaurants</Text>
       <View>

        <FlatList data={response} key={(restaurant)=>{restaurant.id}}
          renderItem={({item})=>{return(
          <TouchableOpacity   onPress={() => navigation.navigate("RestaurantScreen", { id: item.id })}>
          <View>
<Text>{item.name}</Text>
          <RestaurantItem restaurant={item}></RestaurantItem>
          </View>
          </TouchableOpacity>
            )}}></FlatList>
       </View>
    </View>
   ) 
}
const styles=StyleSheet.create({

    container:{
        marginHorizontal:25,
        marginVertical:15,
        // flex:1
    },
    header:{
        fontWeight:"bold",
        fontSize:20,
        paddingBottom:10,
        // height:100
    }
}
)
export default withNavigation(Restaurants);