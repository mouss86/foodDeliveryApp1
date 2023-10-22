import React from "react";
import {View, Text, FlatList,TouchableOpacity} from "react-native";

const DetailScreen = ({route}) => {
    const dishes = [
     {id:1, title: ['Couscous au mouton','Attieke avec du poisson']},
     {id:2, title: ['Paella Espagnole','La burrata italienne']},
     {id:3, title: ['Pho bo','Vermicelles de patate douce sautes']},
     {id:4, title: ['Empanadas','Ceviche']},
     {id:5, title: ['Burggers','Pizzas']},
    ];

    return(
        <View>
            <FlatList
            data={dishes}
            keyExtractor={(item) => item.id.toString()}
            renderItem= {({item}) =>
            <Text>{item.title}</Text>
        } 
            />
        </View>
    )
}
export default DetailScreen