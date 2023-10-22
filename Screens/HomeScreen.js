import React from "react";
import {View, Text, FlatList,TouchableOpacity, StyleSheet, Image} from "react-native";




const HomeScreen = ({navigation}) => {
    const categories = [
        {id:'1', title: 'African Food', url: 'https://s.locavor.fr/data/produits/8/177716/attieke-poisson-attieke-poisson-dorade-177716-1646953065-1.jpg'},
        {id:'2', title: 'European Food', url: 'https://reactjs.org/logo-og.png'},
        {id:'3', title: 'Asian Food', url: 'https://reactjs.org/logo-og.png'},
        {id:'4', title: 'Latino American Food', url: 'https://reactjs.org/logo-og.png'},
        {id:'5', title: 'Fast Food', url: 'https://reactjs.org/logo-og.png'},
    ];

        // fonction navigation to DetailScreen

        const navigateToDetail = ( category) => {
            navigation.navigate('DetailScreen',{category});
        };

        return(
            <View>
               
                <FlatList
                //numColumns={2}
                data={categories}
                keyExtractor={item => item.id}
                 renderItem={({item})=>
                    <TouchableOpacity onPress={() => navigateToDetail(item.title)}>
                      <Text>{item.title}</Text>
                      <Image style={{width:150, height:150 }}
        source={{uri: item.url}}/>
  
                    </TouchableOpacity>}
                />
                
            </View>
        );    
};

export default HomeScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 40,
        paddingHorizontal: 20
    
    },
    item: {
        marginTop: 20,
        borderBlockColor: 'orange',
        fontSize: 24,
        marginHorizontal: 10,
        marginTop: 24,

    }
});