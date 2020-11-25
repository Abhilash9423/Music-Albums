import React,{Component} from 'react';
import {View,Text,StyleSheet,FlatList,ScrollView} from 'react-native'
import axios from 'axios'
import AlbumDetail from './AlbumDetail'
class AlbumListClass extends Component{
    constructor(props) {
        super(props);
        this.state = {albums:[]};
    }
    

    componentDidMount(){
        axios.get('http://rallycoding.herokuapp.com/api/music_albums')
        .then(response =>this.setState( {albums:response.data}) )
        console.log("componentDId")
    }
    // componentWillMount(){
    //     console.log("will")
    // }
    renderAlbums(){
        const albums = this.state.albums
    // this.state.albums.map(album => <Text>{album.title}</Text>)
    console.log("entered")
    return(
        <FlatList
            data = {albums}
            keyExtractor={albums => albums.title }
            renderItem={({item})=>{
              return(  
                    <AlbumDetail item={item} />
                    )
             }}
    />
    )
    }
    

    render(){
        console.log("hello  from  render")
        console.log(this.state)
        const albums = this.state.albums
   return (
            <ScrollView> 
            {this.renderAlbums()} 
             {/* {albums.length>0 ? 
              this.renderAlbums() 
    //         <FlatList
    //         data = {albums}
    //         keyExtractor={albums => albums.title }
    //         renderItem={({item})=>{
    //           return(  
    //                 <Text>{item.title}</Text>

    //           )
    //          }}
    // />
    :<Text>hello</Text>} */}
            </ScrollView>
   )
    }

}

const  styles = StyleSheet.create({

})

export default AlbumListClass
