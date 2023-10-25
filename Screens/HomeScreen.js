import React from "react";
import {View, Text, FlatList,TouchableOpacity, StyleSheet, Image} from "react-native";




const HomeScreen = ({navigation}) => {
    const categories = [
        {id:'0', title: 'African Food', url: 'https://img.freepik.com/photos-gratuite/jeunes-cuisiniers-afro-americains-souriants-uniforme-chef-bras-croises-se-tenir-dos-dos-isole-mur-blanc_141793-33420.jpg?w=360'},
        {id:'1', title: 'European Food', url: 'https://www.georgesblanc.com/media/cache/jadro_resize/rc/GAS7BAQx1695628045/jadroRoot/medias/5696541fae7e3/569dfe7c3231a/frederic-blanc.png'},
        {id:'2', title: 'Asian Food', url: 'https://previews.123rf.com/images/zinkevych/zinkevych1504/zinkevych150400488/39028328-cuisinier-asiatique-hospitali%C3%A8re-jeune-chef-japonais-dans-un-geste-de-bienvenue-traditionnelle.jpg'},
        {id:'3', title: 'Latino American Food', url: 'https://images.getbento.com/accounts/88914bec0cf8bfbadeb3d56c8d55b421/media/images/16585Blog-La-Mar.Gaston-Acurio-1-copy.jpeg?w=600&fit=max&auto=compress,format&h=600'},
        {id:'4', title: 'Fast Food', url: 'https://www.shutterstock.com/shutterstock/photos/1845381931/display_1500/stock-vector-fast-food-poster-burgers-fastfood-menu-and-sandwiches-vector-restaurant-meals-and-snacks-fast-1845381931.jpg'},
    ];

        // fonction navigation to DetailScreen

        const navigateToDetail = ( category) => {
            navigation.navigate('DetailScreen',{ foodid: category});
        };

        return(
            <View>
               
                <FlatList
                numColumns={2}
                data={categories}
                keyExtractor={item => item.id}
                 renderItem={({item})=>
                    <TouchableOpacity onPress={() => navigateToDetail(item.id)}  >
                      <Text>{item.title}</Text>
                      <Text style={{marginHorizontal:10,justifyContent:'center', textAlignVertical:'center'}}/>
                      <Image style={{width:150, height:150,marginHorizontal:30, marginTop:20 }}
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
        marginHorizontal: 10
        
        

    },
});