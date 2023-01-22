import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView
} from 'react-native';

const MyReservations = () => {
  
    const requests = [
      {
        key: 1,
        title: 'BIG DATA',
        location: 'Italy',
        description:
          'Event app',
        
      },
      {
        Key: 2,
       
        title: 'JAVA',
        location: 'Spain',
        description:
          'Granada is the capital city of the province of Granada, in the autonomous community of Andalusia, Spain',
        
      },
      {
        Key: 3,
        
        title: 'ANGULAR',
        location: 'Japan',
        description:
          "Cherry blossoms usually bloom between mid-March and early May. In 2022, Tokyo's cherry blossom season officially began on March 20",
       
      }
    ];
  
    const oneRequest = ({item}) => (
      <View style={styles.item}>
        
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.location}>{item.location}</Text>
        <Text style={styles.desc}>{item.description}</Text>


        
        
      </View>
    );
    headerComponent = () => {
      return <Text style={styles.listHeadline}>My Reservations</Text>;
    }
    itemSeparator = () => {
      return <View style={styles.separator} />;
    }
    return (
      <SafeAreaView>
        <FlatList data={requests}
        renderItem = {oneRequest}
        ItemSeparatorComponent = {itemSeparator}
        ListHeaderComponent={headerComponent}
          ListHeaderComponentStyle={styles.listHeader}
        />
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#fff',
      justifyContent: 'center',
    },
    listHeader: {
      height: 55,
      alignItems: 'center',
      justifyContent: 'center',
    },
    separator: {
      height: 1,
      width: '100%',
      backgroundColor: '#CCC',
    },
    listHeadline: {
      color: '#333',
      fontSize: 21,
      fontWeight: 'bold',
    },
    item: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 13,
    },
  
    avatar: {
      height: 70,
      width: 100,
    },
  
    title: {
      fontWeight: '600',
      fontSize: 16,
      marginLeft: 13,
      textAlign : 'center',
      
    },
  
    etat: {
      marginTop: 60,
    }
    ,

    location:{
      marginTop : 50,
      

    },
    desc : {

marginTop : 120,
    }
  }
  );


export default MyReservations;
