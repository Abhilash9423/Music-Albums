import React from 'react'
import {Text,StyleSheet,View} from 'react-native'


const Header = (props) => {
    return(
        <View style={styles.mainView}>
        <View  style={styles.viewBorder} >
    <Text style={styles.textStyle} >{props.value}</Text>
        </View>
        </View>
    )
}


const styles = StyleSheet.create({
        textStyle:{
            fontSize:20,
            textAlign:'center'
        },
        viewBorder:{
            // height:'6%',
            // width:'20%',
            width:'20%',
            // borderWidth:1,
            // borderColor:'black',
        },
        mainView:{
            height:60,
            width:'100%',
            // borderWidth:1,
            // borderColor:'black',
            backgroundColor:'#F8F8F8',
            // marginTop:5,
            alignItems:'center',
            flexDirection:'column',
            justifyContent:'center',
            shadowColor:'#333',
            shadowOffset:{width:0,height:2},
            shadowOpacity:0.4,
            elevation:5,    
            position:'relative'        
        }

})

export default Header