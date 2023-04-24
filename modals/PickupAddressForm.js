import { View, Text, Modal, TextInput, Pressable, ScrollView } from 'react-native'
import React, {useState} from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



const PickupAddressForm = (props) => {


  const [houseOrFlatNo, setHouseOrFlatNo] = useState('')
  const [landmark, setLandmark] = useState('')
  const [addressName, setAddressName] = useState('')

  props.pickupAddress['landmark'] = landmark;
  props.pickupAddress['houseOrFlatNo'] = houseOrFlatNo;
  props.pickupAddress['addressName'] = addressName;

  console.log("thenga1", props.pickupAddress)

  const addPickupAddressFunc = () => {
    console.log("thenga", props.pickupAddress)
    addPickupAddress(props.pickupAddress)
    props.onModalClose()

  }

  return (
  
      <Modal
        //swipeDirection="down"
        //onSwipeComplete={(e) => { setModalVisible(false); }}
        animationType="slide"
        transparent={true}
        visible={props.visible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
            <View style={{backgroundColor:"lightblue", height:"60%", marginTop:"auto", borderTopStartRadius:20, borderTopEndRadius:20, padding:10, }}>
              <ScrollView>
              <View>
              <Text>Location</Text>
              <View style={{flexDirection:"row"}}>
              {props.pickupAddress.location.map(x => <Text>{x} | </Text>)}
              </View>
              </View>

              <View>
              <Text>House / Flat No</Text>
              <TextInput onChangeText={(text) => setHouseOrFlatNo(text)} style={{ 
              height: hp('6'),
              borderBottomWidth: 1,
              padding: 10,}}/>
              </View>

              <View>
              <Text>Landmark</Text>
              <TextInput onChangeText={(text) => setLandmark(text)} style={{ 
              height: hp('6'),
              borderBottomWidth: 1,
              padding: 10,}}/>
              </View>

              <View>
              <Text>Save As</Text>
              <TextInput  onChangeText={(text) => setAddressName(text)} style={{ 
              
              height: hp('6'),
              borderBottomWidth: 1,
              padding: 0,}}
              placeholder="Eg: My Home "
              />
              </View>

          

              <View style={{flexDirection:"row", justifyContent:"space-around"}}>
                <Pressable onPress={(e) => props.onModalClose()} style={{height:hp('7'), width:'45%', backgroundColor:"yellow"}}>
                <Text>Cancel</Text>
                </Pressable>
                <Pressable onPress={(e) => addPickupAddressFunc()} style={{height:hp('7'), width:'45%', backgroundColor:"yellow"}}>
                  <Text>Save</Text>

                </Pressable>

              </View>
              </ScrollView>
            </View>
            
        </Modal>

  )
}

export default PickupAddressForm