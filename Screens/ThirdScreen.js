import React from "react";
import { View, Text, FlatList, Image } from "react-native";

const ThirdScreen = ({ route }) => {

  const dishes = [
    {  id: '0',  ImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Injera_with_eight_kinds_of_stew.jpg'},
    { id: '1', ImageUrl: 'https://media.istockphoto.com/id/881818362/vector/spanish-food-cuisine-illustration.jpg?s=612x612&w=0&k=20&c=UIFjlReZs2D1r0o7EwwaOGWHcpdgX1eLUBWtwIQM1Lo='},
    {id: '2', ImageUrl: 'https://fullsuitcase.com/wp-content/uploads/2023/03/Traditional-French-food-and-typical-dishes-to-try-in-France.jpg'},
    {id:'3', ImageUrl: 'https://images.immediate.co.uk/production/volatile/sites/30/2022/10/Pork-carnitas-b94893e.jpg?quality=90&resize=556,505'},
    {id:'4' ,ImageUrl: 'https://www.tastingtable.com/img/gallery/13-popular-colombian-foods-you-have-to-try-at-least-once/l-intro-1675794102.jpg'},
    {id:'5',ImageUrl: ' https://www.burgerdudes.se/wp-content/uploads/2021/12/dine_baconcheese_dec21_ny-rec.jpg'},
    // ... Ajoutez les autres plats ici
  ];


  
  

  return (
    <View>
      <Text>{route.params.foodid}</Text>
      <FlatList
        numColumns={2}
        data={dishes}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
            
          <View>
            
             
            
            <Image
              style={{ width: 150, height: 150, marginHorizontal: 30, marginTop: 20 }}
              source={{ uri: item.ImageUrl }}
            />
          </View>
        )}
      />
    </View>
  );
};

export default ThirdScreen;


/*

[ ]
*/
