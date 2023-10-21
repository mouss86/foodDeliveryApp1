import React from "react";
import {View, Text, Flatlist,TouchableOpacity} from "react-native";
import {createStackNavigator} from '@react-navigation/native-stack';



const HomeScreen = ({navigation}) => {
    const categories = [
        {id:1, title: 'African Food'},
        {id:2, title: 'European Food'},
        {id:3, title: 'Asian Food'},
        {id:4, title: 'Latino American Food'},
        {id:5, title: 'Fast Food'},
    ]

        // fonction navigation to DetailScreen

        const navigateToDetail = ( category) => {
            navigation.navigate('DetailScreen',{category});
        };

        return(
            <View>
                <Flatlist
                data={categories}
                keyExtractor={(item) => item.id.toString()}
                 renderItem={({item})=>{
                    <TouchableOpacity onPress={() => navigateToDetail(item.title)}>
                        <Text>{item.title}</Text>

                    </TouchableOpacity>
                 }}
                 
                    
                />
            </View>
        )

    
}