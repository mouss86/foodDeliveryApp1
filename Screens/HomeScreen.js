import React from "react";
import {View, Text, FlatList,TouchableOpacity, StyleSheet} from "react-native";




const HomeScreen = ({navigation}) => {
    const categories = [
        {id:'1', title: 'African Food'},
        {id:'2', title: 'European Food'},
        {id:'3', title: 'Asian Food'},
        {id:'4', title: 'Latino American Food'},
        {id:'5', title: 'Fast Food'},
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