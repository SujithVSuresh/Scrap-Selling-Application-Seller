import Carousel from 'react-native-reanimated-carousel';
import { View, Text, ScrollView, FlatList, Pressable} from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import  Icon  from 'react-native-vector-icons/Ionicons';
import ProductCategory from '../components/ProductCategory';

import { SimpleAccordion } from 'react-native-simple-accordion';
import { useNavigation } from '@react-navigation/native';
import { getAllAddresses } from '../redux/actions/sellRequestsActions';


import UserReview from '../components/UserReview';



const HomeScreen = () => {
  const navigation = useNavigation()

  

  const data = [
    {
      title: 'What would you like to sell ?',
      backgroundColor: 'lightgreen',
    },
    {
      title: 'List the scrap items for selling',
      backgroundColor: 'lightblue',
    },
    {
      title: 'Scrap buyer will arrive at your home.',
      backgroundColor: 'lightgray',
    },
    {
      title: 'Scrap sold :)',
      backgroundColor: '#FFEBB4',
    }
  ]




  return (
    <>
    <View style={{width:'100%', height:hp('9'), backgroundColor:"seagreen", paddingHorizontal:10, flexDirection:"row", alignItems:"center"}}>
      <Pressable onPress={() => navigation.openDrawer()}><Icon name="menu-sharp" color="white" size={hp('4.5')}/></Pressable>
      <Text style={{fontSize:hp('4'), color:"white", fontWeight:"bold", marginLeft:wp('3')}}>ScrapDeal</Text>
    </View>
    <ScrollView style={{paddingHorizontal:10, paddingTop:10, backgroundColor:"white"}}>

      <Carousel
                loop
                pagingEnabled={true}
                style={{borderRadius:10, alignSelf:"center"}}
                width={wp('90')}
                height={hp('20')}
                autoPlay={true}
                data={data}
                scrollAnimationDuration={2000}
                //onSnapToItem={(index) => console.log('current index:', index)}
                renderItem={({ item, index }) => (
                    <View
                        style={{
                            flex: 1,
                            borderWidth: 0,
                            justifyContent: 'center',
                            backgroundColor: item.backgroundColor
                        }}
                    >
                        <Text style={{ textAlign: 'center', fontSize: hp("3.8"), fontWeight:"700" }}>
                            {item.title}
                        </Text>
                    </View>
                )}
            />
       
        <View style={{marginTop:10, width:"100%", flexDirection:"row", flexWrap:'wrap'}}>
        {/*<Text style={{fontSize:hp('5'), fontWeight:"700", textAlign:"center"}}>What would you like to sell ?</Text> */}
          <ProductCategory />
        </View> 

        <View style={{marginTop:10, width:"100%", height:hp("17.5")}}>
          <Text style={{fontWeight:"700", marginBottom:8, fontSize:hp('2.4')}}>Customer Reviews</Text>
        <UserReview />
  
        </View>

        <View style={{marginTop:10, height:hp("11")}}>

        </View>     
   
    </ScrollView>
    <View style={{height:hp("11"), width:"100%", position:"absolute", bottom:0, justifyContent:"center", alignItems:"center"}}>
    <Pressable disabled={false} onPress={(e) => navigation.navigate("SellScrapScreen", {"category":"Paper"})} style={{width:wp('90'), height:hp("8"), backgroundColor:"seagreen", borderRadius:15, justifyContent:"center", alignItems:"center"}}>
      <Text style={{color:'white', fontSize:hp("3.5"), fontWeight:"700"}}>Sell Scrap</Text>

    </Pressable>
    </View>
    
    </>
  )
}

export default HomeScreen;