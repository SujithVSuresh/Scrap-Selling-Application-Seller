import { View, Text, FlatList } from 'react-native'
import React, {useContext, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { getAllUserReviews } from '../redux/actions/sellRequestsActions'


const UserReview = () => {

  const dispatch = useDispatch()

  const userReviews = useSelector(state => state.reviewList)
  const {reviews, loading} = userReviews
  console.log(reviews)


    useEffect(() => {
      dispatch(getAllUserReviews())
      }, [])

  

    const renderItem = ({ item }) => (
        <View style={{backgroundColor:"#e7eae5", borderRadius: 10, marginRight:8, justifyContent:"space-between", padding:10, maxWidth:250}}>
          

   
        <Text >{item.reviewText}</Text>
        <View style={{flexDirection:"row", justifyContent:"space-between"}}>
            <Text style={{color:"gray", fontSize:hp('2')}}>Ziyad</Text>
            <Text style={{color:"gray", fontSize:hp('2')}}>{item.reviewedDate}</Text>
          </View>

        </View>
      );
  return (
    <FlatList
    data={reviews}
    renderItem={renderItem}
    keyExtractor={item => item.id}
    horizontal={true}
    showsHorizontalScrollIndicator={false}
  />
  )
}

export default UserReview