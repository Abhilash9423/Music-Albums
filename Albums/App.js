
import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import Header from './src/components/Header'
import AlbumList from './src/components/AlbumList'
import AlbumListClass from './src/components/AlbumListClass'
const App = () => {
  return(
    <View style={{flex:1}}>
        <Header value="Albums"/>
        <AlbumList/>
        <AlbumListClass/>
    </View>
  ) 
}
export default App;
