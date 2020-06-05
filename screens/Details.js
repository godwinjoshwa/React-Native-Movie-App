import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

function Details({ navigation }){
    return (
        <View style={styles.container}>
          <Image source={{uri: navigation.getParam('Poster')}} style={{width: 300, height: 300}} alt={navigation.getParam('imdbID')} />
            <Text style={styles.text}>NAME : {navigation.getParam('Title')}</Text>
            <Text style={styles.text}>TYPE : {navigation.getParam('Type')}</Text>
            <Text style={styles.text}>YEAR : {navigation.getParam('Year')}</Text>
            <Text style={styles.text}>IMDBID : {navigation.getParam('imdbID')}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontSize:16,
      marginTop:20,
      fontWeight:'bold'
    }
  });
  

export default Details

