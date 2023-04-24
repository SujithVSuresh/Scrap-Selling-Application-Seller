import { View, Text, ScrollView, Button, Pressable } from 'react-native'
import React, {useState} from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import SellScrapCategorySelector from '../components/SellScrapCategorySelector';
import SellScrapProductSelector from '../components/SellScrapProductSelector';
import SellScrapImageSelector from '../components/SellScrapImageSelector';
import DateTimePickerComponent from '../components/DateTimePickerComponent';
import { useNavigation } from '@react-navigation/native';
import  Icon  from 'react-native-vector-icons/Ionicons';




const SellScrapScreen = ({navigation, route}) => {
  const { category } = route.params;

  const [selectedCategory, setSelectedCategory] = useState(category);


  //const [date, setDate] = useState(new Date());
  //{"selectedCategory": selectedCategory, "selectedProducts":selectedProducts, "selectedImage":pickedImagePath, "pickupDate":date, "pickupAddress":[]}
  //const navigation = useNavigation()
  //console.log(state.selectedImages.length!==0 && state.selectedProducts.length!==0)

  return (
    <>
    <ScrollView style={{backgroundColor:"white", paddingHorizontal:4}}>
    <View style={{marginTop:5}}>
        <Text style={{fontWeight:"600", marginTop:5, fontSize:hp('2.4')}}>Category - {selectedCategory}</Text>
        
        <View style={{flexDirection:"row", marginVertical:0, flexWrap:"wrap"}}>
        
            <SellScrapCategorySelector selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>

        </View>

      </View>

      <View>
      <Text style={{fontWeight:"600", marginTop:5, fontSize:hp('2.4')}}>Choose product to sell from</Text>
      <View style={{flexDirection:"row", justifyContent:"space-between", marginVertical:7, flexWrap:"wrap"}}>
      <SellScrapProductSelector selectedCategoryForItems={selectedCategory} state={"state"}/>

        </View>
      </View>

     {/*
      <View>
        <Text>Select Images</Text>
        <SellScrapImageSelector dispatch={dispatch} state={state.selectedImages} /> 


        

      </View>
      */}
   {/*
      <View style={{marginVertical:5}}>
        <Text>Choose a date</Text>
        <DateTimePickerComponent date={date} setDate={setDate}/>
      </View>
      

   */} 
   </ScrollView>
      
    <View style={{alignItems:"center", backgroundColor:"white",  width:'100%', justifyContent:"center", height:"10%"}}>
       <Pressable disabled={false} onPress={(e) => navigation.navigate("PickupAddressSelectorScreen", {"pathName":"sellPath"})} style={{justifyContent:"center", alignItems:"center", width:"90%", height:"80%", backgroundColor:"seagreen", borderRadius:10, zIndex:1}}>
         <Text style={{color:"white", fontSize:hp('2.5'), fontWeight:"600"}}>Next</Text>
        </Pressable>
    </View>
    </>
  
    
  )
}

export default SellScrapScreen