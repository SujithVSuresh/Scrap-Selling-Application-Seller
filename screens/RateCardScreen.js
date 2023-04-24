import { View, Text } from 'react-native'
import React from 'react'
import { SimpleAccordion } from 'react-native-simple-accordion';
import { useSelector } from 'react-redux';


const RateCardScreen = () => {
  const itemsCategory = useSelector(state => state.itemsList)
  const {categories} = itemsCategory


  return (
    <View style={{backgroundColor:"white", flex:1}}>
    {/*<Text style={{fontSize:hp('3'), fontWeight:"800", marginBottom:8}}>Rate Card</Text>*/}
    {categories.map((category) => ( 
      <SimpleAccordion viewInside={
        category.items.map((x) => (
        <View style={{flexDirection:"row", justifyContent:"space-between",padding:8}}>
         <Text>{x.itemName}</Text>
         <Text>{x.rate} Rs / PCs</Text>
         </View>
        ))
      } 
      title={category.categoryName}
      //viewContainerStyle={{backgroundColor: "lightgray"}}
      bannerStyle={{backgroundColor: "white", borderBottomWidth:0.5, borderColor:"gray"}}
      />

    ))}

  

  

  </View> 
  )
}

export default RateCardScreen