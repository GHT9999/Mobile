import React , {useState} from 'react';

import {View, Text, Button,TextInput , TouchableWithoutFeedback, Keyboard} from 'react-native';






const RegisterScreen = () => {
  return (
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss();
    }}>
      
      <View style={{paddingTop: 50, paddingHorizontal: 20}}>
        
        <Text style={{ fontSize: 18, marginVertical: 10 , textAlign:'center'}}>
          New user
        </Text>
        <View style={{marginVertical: 20}}>
          <TextInput placeholder="firstname"/>
          <TextInput placeholder="lastname"/>
          <TextInput placeholder="username"/>
          <TextInput placeholder="numberphone"/>
          <TextInput placeholder="password"secureTextEntry={true}/>
          

          <Button  title="Save"  />
          
        </View>
      </View>
      </TouchableWithoutFeedback>
  );

  
};

export default RegisterScreen;
