import { View, Text, Pressable } from 'react-native'
import React, {useState, useContext} from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useSelector } from 'react-redux';






const SellScrapCategorySelector = (props) => {
  const itemsCategory = useSelector(state => state.itemsList)
  const {categories, loading} = itemsCategory



  return (
    <>
    {categories.map((category, index) => (
      <View key={index} style={{width:"50%", height:hp('13'), justifyContent:"center", alignItems:"center"}}>
      <Pressable onPress={() => props.setSelectedCategory(category.categoryName)} style={{width:wp('46'), height:hp('11'), flexDirection:"row", borderStyle:"dashed", borderColor:"black", borderWidth:1}}>
            <View style={{width:"45%", height:"100%", justifyContent:"center", alignItems:"center"}}>
              <View style={{backgroundColor:"green", height:hp('7'), width:hp('7'), borderRadius:180}}></View>
            </View>
            <View style={{width:"56%", justifyContent:"center"}}>
              <Text style={{fontWeight:"bold", marginBottom:hp('0.5')}}>{category.categoryName}</Text>
              <Text style={{fontSize:hp('1.7')}}>Old Newspaper, Kraft, Books etc..</Text>
            </View>
            
    </Pressable>
    </View>
   

    ))}
            
    </>
    
  )
}

export default React.memo(SellScrapCategorySelector)