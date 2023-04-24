import { View, Text, Pressable } from 'react-native'
import React, {useState} from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import  Icon  from 'react-native-vector-icons/Ionicons';

const DateTimePickerComponent = (props) => {
  const [datePicker, setDatePicker] = useState(false);
  

  return (
    <>
        <Pressable
         style={{width:"100%", 
          minHeight:hp('8'), 
          marginVertical:7,
          backgroundColor:"lightgray", 
          flexDirection:"row",
          borderWidth:1,
          borderStyle: 'dashed',
          borderColor:'black'}} 
          onPress={(e) => setDatePicker(true)}
          >
            <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
            <Icon name={'calendar-outline'} size={hp('4')}/>

            </View>
            <View style={{flex:5, flexDirection:"row", justifyContent:"space-between", alignItems:"center", paddingHorizontal:7}}>
             <View>
            <Text>Pickup date</Text>
            <Text style={{fontSize:hp('1.8')}}>{props.date.toDateString()}</Text>
            </View> 
            <Icon name={'pencil-outline'} size={hp('4')}/>
            </View>
          </Pressable>
          {datePicker && (
          <DateTimePicker
            value={props.date}
            mode={'date'}
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            is24Hour={true}
            onChange={(e, value) => (setDatePicker(false), props.setDate(value))}
            
          />)}
    </>
  )
}

export default DateTimePickerComponent