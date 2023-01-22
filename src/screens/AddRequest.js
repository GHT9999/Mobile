import React , {useState} from 'react';

import {View, Text, Button,TextInput , TouchableWithoutFeedback, Keyboard} from 'react-native';






const AddRequest = () => {
  return (
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss();
    }}>
      
      <View style={{paddingTop: 50, paddingHorizontal: 20}}>
        
        <Text style={{ fontSize: 18, marginVertical: 10 , textAlign:'center'}}>
          New event
        </Text>
        <View style={{marginVertical: 20}}>
          <TextInput placeholder="title"/>
          <TextInput placeholder="location"/>
          <TextInput placeholder="description"/>
          
          

          <Button  title="Save"  />
          
        </View>
      </View>
      </TouchableWithoutFeedback>
  );

  
};

export default AddRequest;
