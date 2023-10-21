import React from "react";
import {View, Text, Flatlist,TouchableOpacity} from "react-native";

const DetailScreen = ({route}) => {
    const dishes = [
     {id:1, title: ['Couscous au mouton','Attieke avec du poisson']},
     {id:1, title: ['Paella Espagnole','La burrata italienne']},
     {id:1, title: ['Pho bo','Vermicelles de patate douce sautes']},
     {id:1, title: ['Empanadas','Ceviche']},
     {id:1, title: ['Burggers','Pizzas']},
    ];

    return(
        <View>
            <Flatlist
            data={dishes}
            keyExtractor={(item) => item.id.toString()}
            renderItem= {({item}) =>
            <Text>{item.title}</Text>
        } 
            />
        </View>
    );
};