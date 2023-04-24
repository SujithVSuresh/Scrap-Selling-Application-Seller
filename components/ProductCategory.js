import { View, Text, ActivityIndicator, TouchableOpacity } from 'react-native'
import React, {useEffect} from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { getAllItemsList } from '../redux/actions/itemsActions';



const ProductCategory = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation()

    const itemsCategory = useSelector(state => state.itemsList)
    const {categories, loading} = itemsCategory

  useEffect(() => {
    dispatch(getAllItemsList())

  }, [])
  return (
    <>
    {loading ? <ActivityIndicator size="large" color="#00ff00"/> : categories?.map((category, index) => (
      <View key={index} style={{marginHorizontal:hp('0.77'), marginVertical:hp('0.77')}}>
          <TouchableOpacity onPress={() => navigation.navigate('SellScrapScreen', {category: category.categoryName})} style={{width:hp('14'), height:hp('14'), borderRadius:180, backgroundColor:"#e7eae5", marginBottom:1, justifyContent:"center", alignItems:"center"}}>
          <Icon name={category.categoryName==="Electronics" ? "desktop-outline" : category.categoryName==="Clothes" ? "shirt-outline" : category.categoryName==="Paper" ? "newspaper-outline" : category.categoryName==="Plastic" ? "disc-outline" : category.categoryName==="Metals" ? "car-outline" : ""} size={hp('7.5')}/>
          </TouchableOpacity>
          
          <Text style={{textAlign:"center", fontSize:hp('2.5')}}>{category.categoryName}</Text>
        
    </View>

    ))}
    </>
    
  )
}

export default ProductCategory