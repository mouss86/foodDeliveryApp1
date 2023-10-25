import React from "react";
import {View, Text, FlatList,TouchableOpacity, Image,} from "react-native";


const DetailScreen = ({route, navigation}) => {
    
    const dishes  = [ 
    {id:0, title: ['Ethiopian food', 'Senegalese food', 'Morrocan food', 'Ivorian food']   }, 
    {id:1, title: ['Spanish food','French food','Italian food']},
    {id:2, title: ['Chinese food','Thai food','Vietnami food']},
    {id:3, title: ['Colombian food','Mexican food']},
    {id:4, title: ['Burggers','Pizzas', 'Sandwichs']},
   
        
    
       
    
    
    ];

    // fonction navigation to ThirdScreen

    const navigateToThirdScreen = ( category) => {
        navigation.navigate('ThirdScreen',{foodid: category})

    };

     

    return(
        <View>

            <Text>{ route.params.foodid }</Text>

            <FlatList
            
            
            data={dishes[route.params.foodid].title}
            keyExtractor={(item) => item}
            renderItem= {({item}) =>
            <TouchableOpacity onPress={() => navigateToThirdScreen(item.id)}  >
            
            <><Text>{item}</Text><Text style={{  justifyContent:'center', textAlignVertical:'center', textAlign: 'center'}} /></>
            </TouchableOpacity>
            
            
  
            
           
            
            
            
            
            
        } 
            />
        </View>
    );
};
export default DetailScreen;




/*

 const dishes  = [ 
    {id:1, title: ['Couscous au mouton','Attieke avec du poisson']},
    {id:2, title: ['Paella Espagnole','La burrata italienne']},
    {id:3, title: ['Pho bo','Vermicelles de patate douce sautes']},
    {id:4, title: ['Empanadas','Ceviche']},
    {id:5, title: ['Burggers','Pizzas']},
   */