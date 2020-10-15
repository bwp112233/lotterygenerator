import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

export default GameSelect = (props) => {
    return (
        <View style={style.view}>
            <Image resizeMode='contain' style={style.img} source={props.img} />
            <Image resizeMode='contain' style={style.arrow} source={require('../Assets/Images/arrow.png')} />
        </View>
    )
}

const style = StyleSheet.create({
    view: {
        flex: 1,
        flexDirection: 'row',
        height: 120,
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
        marginTop: 10,
        backgroundColor: 'white'
    },
    img: {
        width: '65%',
        height: '65%'
    },
    button: {
        flex: 1
    },
    arrow: {
        width: '40%',
        height: '40%'
    }
});