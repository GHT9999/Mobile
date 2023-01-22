import React , {useState} from 'react';
import {View, Text, Button,TextInput , TouchableWithoutFeedback, Keyboard} from 'react-native';


const LoginScreen = () => {
  

    const[login , setLogin] = useState({email : 'Admin' , pass : 'Admin'});
    const[login2 , setLogin2] = useState({email : 'imane@emsi.ma' , pass : 'imane'});
  
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = () => {
      // Perform login logic here, such as sending a request to a server
  
      if(login2.email ==username && login2.pass == password)
      {
        console.log(`Logging in with username: ${username} and password: ${password}`);
      }
      
    };
  
  
      return (
        <TouchableWithoutFeedback onPress={()=>{
          Keyboard.dismiss();
        }}>
          
          <View style={{paddingTop: 50, paddingHorizontal: 20}}>
            
            <Text style={{ fontSize: 18, marginVertical: 10}}>
              Enter Your Details to Login
            </Text>
            <View style={{marginVertical: 20}}>
              <TextInput
                value={username}
                onChangeText={setUsername}
                label="Email"
                placeholder="Enter your email address"
                
              />
              <TextInput
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
                label="Password"
                placeholder="Enter your password"
                
              />
              <Button onPress={handleLogin} title="Log In"  />
              <Text
                
                style={{
                  
                  fontWeight: 'bold',
                  textAlign: 'center',
                  fontSize: 16,
                }}>
                Don't have account ?Register
              </Text>
            </View>
          </View>
          </TouchableWithoutFeedback>
        
      );
};


export default LoginScreen;
