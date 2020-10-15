import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Megaball = (props) => {
    return (
        <View style={styles.box}>
            <Text style={styles.number}>{props.num}</Text>
        </View>
    )
}

export default Megaball;

const styles = StyleSheet.create({
    box: {

        backgroundColor: '#e93b38',
        width: 100,
        height: 100,
        borderRadius: 50,
        borderColor: '#ee6461',
        borderWidth: 1,
        justifyContent: "center",
        alignItems: 'center',
        margin: 5,
        shadowOffset: { width: 5, height: 5, },
        shadowColor: 'black',
        shadowOpacity: .3,
    },
    number: {
        color: 'white',
        fontSize: 60,
        shadowOffset: { width: 2, height: 2, },
        shadowColor: 'black',
        shadowOpacity: .3,
    }

});