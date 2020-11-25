import React from 'react'
import {View,Text,StyleSheet,Image,Linking} from 'react-native'
import Card from './Card'
import CardSection from './CardSection'
import Button from './Button'


const AlbumDetail = ({item}) => {
    const {title,artist,thumbnail_image,image,url} = item
    return(
        <Card>
            <CardSection>
            <View style={styles.thumnnailContainerStyle}>
                <Image 
                source={{uri: thumbnail_image}}
                style={styles.thumbnailStyle}
                />
            </View>
            <View style={styles.headerContentStyle} >
                <Text style={styles.headerTextStyle}>{title}</Text>
                <Text>{artist}</Text>
            </View>
            </CardSection>
            <CardSection>
                <Image style={styles.imageStyle} source={{uri:image}}/>
            </CardSection>
            <CardSection>
                <Button onPress={()=>Linking.openURL(url)}  >
                    Buy Now
                </Button>
            </CardSection>
        </Card>
    )
}

const styles = StyleSheet.create({
    headerContentStyle:{
        flexDirection:'column',
        justifyContent:'space-around',
    
    },
    headerTextStyle:{
        fontSize:18
    },
    thumbnailStyle:{
        height:50,
        width:50
    },
    thumnnailContainerStyle:{
        justifyContent:'center',
        alignItems:'center',
        marginLeft:10,
        marginRight:10
    },
    imageStyle:{
        height:350,
        flex:1,
        width:null
    }

})

export default AlbumDetail