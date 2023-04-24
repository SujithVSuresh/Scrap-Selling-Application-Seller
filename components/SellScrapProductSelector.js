import { View, Text, Pressable } from 'react-native'
import React, {useContext, memo} from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { useSelector, useDispatch } from 'react-redux';
import { SELLREQUESTS_ADD_SELECTED_ITEM } from '../redux/constants/sellRequestsConstants';





const SellScrapProductSelector = (props) => {
  const dispatch = useDispatch()

  const itemsCategory = useSelector(state => state.itemsList)
    const {categories, loading} = itemsCategory

    const sellReq = useSelector(state => state.createSellRequest)
    const {items, address} = sellReq
    console.log(items, address)

  const addSelectedItemsFunc = (item) => {
    dispatch({
      type:SELLREQUESTS_ADD_SELECTED_ITEM,
      payload:item
    })

  }  

  return (
    <>
    {categories.map((category) => (
      category.categoryName === props.selectedCategoryForItems && category.items.map((x, index) => (
        <View key={index} style={{width:"50%", height:hp('13'), justifyContent:"center", alignItems:"center"}}>
          {/*props.state?.includes(x.name) ? "seagreen" :*/}    
  <Pressable onPress={() => addSelectedItemsFunc(x)} style={{width:wp('46'), borderWidth:0.5, borderColor:"gray", height:hp("11"), backgroundColor: items.includes(x) ? "#e7eae5" : "white", flexDirection:"row", marginBottom:7}}>
    <View style={{width:"30%", height:"100%", justifyContent:"center", alignItems:"center", }}>
      <View style={{backgroundColor:"lightgray", height:hp('5'), width:hp('5'), borderRadius:180, justifyContent:"center", alignItems:"center"}}>
        <Icon name={'checkmark-outline'} size={hp('4')}/>
      </View>
    </View>
    <View style={{width:"70%", justifyContent:"center", }}>
      <Text style={{fontWeight:"bold", marginBottom:hp('0.5')}}>{x.itemName}</Text>
      <Text style={{fontSize:hp('2')}}>{x.rate} / KG</Text>
    </View>
  </Pressable>
  </View>

      ))
   

      ))
     
  }
    </>
  )
}

export default React.memo(SellScrapProductSelector)