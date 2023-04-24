import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, {useState, useEffect} from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useDispatch, useSelector } from 'react-redux'
import { createSellRequestOrderReview, deleteSellRequestOrderReview} from '../redux/actions/sellRequestsActions'
import  Icon  from 'react-native-vector-icons/Ionicons';
import { SELLREQUESTS_CREATE_ORDER_REVIEW_SUCCESS, SELLREQUESTS_DELETE_ORDER_REVIEW_SUCCESS } from '../redux/constants/sellRequestsConstants';


const CreateAndListUserReview = (props) => {
  const dispatch = useDispatch()

  const [reviewText, setReviewText] = useState("")
  console.log(reviewText)

  const reviewCreator = useSelector(state => state.createOrderReview)
  const {review} = reviewCreator


  const reviewDelete = useSelector(state => state.deleteOrderReview)
  const {review:deleteReviewData} = reviewDelete

  useEffect(() => {
 

    dispatch({
      type:"SELLREQUESTS_CREATE_ORDER_REVIEW_SUCCESS",
      payload:{}
  }) 
  dispatch({
    type: "SELLREQUESTS_DELETE_ORDER_REVIEW_SUCCESS",
    payload:{}
}) 

  }, [])



  return (
    <View
         style={{width:"100%", 
          minHeight:hp('8'), 
          //backgroundColor: "#e7eae5", 
          flexDirection:"row",
          borderWidth:0.5,
          borderColor:"lightgray",
          padding:10,
          }} 
          >
            <View style={{flex:5}}>
          {

            props.orderReview !== null && Object.keys(deleteReviewData).length === 0 ? (
                <>
                <TouchableOpacity onPress={() => dispatch(deleteSellRequestOrderReview(props.orderId))}><Icon name='trash-outline' size={hp('3')}/></TouchableOpacity> 
              <Text>{props.orderReview.reviewText}</Text>
              <Text style={{fontSize:hp('1.8'), color:"gray", marginTop:5}}>{props.orderReview.reviewedDate}</Text>
                </>

              ) : Object.keys(review).length !== 0 ? (
                <>
                <TouchableOpacity onPress={() => dispatch(deleteSellRequestOrderReview(props.orderId))}><Icon name='trash-outline' size={hp('3')}/></TouchableOpacity> 
                <Text>{props.orderReview.reviewText}</Text>
              <Text style={{fontSize:hp('1.8'), color:"gray", marginTop:5}}>{props.orderReview.reviewedDate}</Text>
                </>

              ) : (
                <>
  
                <TextInput onChangeText={text => setReviewText(text)} multiline={true} numberOfLines={15} textAlignVertical="top" style={{width:"100%", padding:8, marginBottom:9, height:hp("15"), borderWidth:0.5, borderColor:"gray"}}></TextInput>
                  <TouchableOpacity onPress={() => dispatch(createSellRequestOrderReview(reviewText, props.orderId))} style={{justifyContent:"center", alignItems:"center", width:"100%", height:hp("7"), backgroundColor:"seagreen", borderRadius:10, zIndex:1}}>
               <Text style={{color:"white", fontSize:hp('2.5'), fontWeight:"600"}}>Add review</Text>
              </TouchableOpacity>
                </>
              )

          }    
              
        
        
            
            </View>


          </View>
  )
}

export default CreateAndListUserReview