import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image} from 'react-native'
import { Input, Card, CardItem, Item, Icon, Body} from 'native-base';
import axios from 'axios'

function Home({ navigation }){
    const [post, setPost] = useState([])
    const [search, setSearch] = useState('')
    const [query, setQuery] = useState('avengers')
    
    const apikey = 'YOUR API_KEY'

    useEffect(() => {
        getMovies()
      }, [query])

    const getMovies = () => {
        axios.get(`http://www.omdbapi.com/?s=${query}&apikey=${apikey}`)
          .then(response => setPost(response.data.Search))
          .catch(error => setPost(error))
      }
    
    
  const getSearch = (event) => {
    setSearch(event.target.value)
  }

  const onChange = (event) => {
    event.preventDefault()
    setQuery(search)
    getSearch(event)
    setSearch('')
  }
    return (
        <View style={styles.container}>
          
             <Item regular style={styles.input}>
            <Icon active name='search' />
            <Input placeholder='Search'
            returnKeyType='search'
            onSubmitEditing={onChange}
            onChangeText={(search)=> setSearch(search)}
            />
          </Item>
          

            <FlatList
            data={post}
            renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('Details', item)}>
              <Card style={styles.card}>
            
              <CardItem cardBody>
                <Image source={{uri: item.Poster}} style={{height: 300, flex: 1,}}/>
              </CardItem>
              <CardItem>
                
                  <Body>
                    <Text style={styles.title}>{item.Title}</Text>
                  </Body>

              </CardItem>
              </Card>
              </TouchableOpacity>
            )}/>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    input: {
      marginRight:14,
      marginLeft:14,
      borderColor:'gray',
      margin:22,
      borderEndWidth:2,
      borderTopWidth:2,
      borderLeftWidth:2,
      borderBottomWidth:2,
      backgroundColor: '#f2f5f3'
    },
    title: {
      fontSize:18,
      fontWeight: 'bold'
    },
    card: {
      marginBottom:12,
      marginLeft:20,
      marginRight:20,
      borderColor:'gray',
      borderWidth:2
    }
  });

export default Home

  
