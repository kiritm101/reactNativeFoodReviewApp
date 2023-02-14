import { Text,StyleSheet,View, TextInput } from "react-native";

export default function Header() { 
    return (<View style={styles.container}><Text style={styles.lightHeader}>Grab Meals</Text>
    <Text style={styles.boldHeader}>Near You(Hybrid cross-platform app project By Kirit m)</Text>
    
    
    </View>
    );
 }



 const styles = StyleSheet.create({
    container: {
      // flex: 1,
      // backgroundColor: '#fff',
      // alignItems: 'center',
      // justifyContent: 'center',
      marginTop:10,
     
      marginHorizontal:25
    },
    lightHeader:{
      fontSize:35,
    },
    boldHeader:{
      fontSize:25
    }
  });