import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

const Number = (props) => {
    return (
        <View style={styles.box}>
            <Text style={styles.number}>{props.num}</Text>
        </View>
    )
}

export default Number;

const styles = StyleSheet.create({
    box: {

        backgroundColor: 'white',
        width: 65,
        height: 65,
        borderRadius: 50,
        borderColor: '#D5D5D5',
        borderWidth: 1,
        justifyContent: "center",
        alignItems: 'center',
        margin: 5,
        shadowOffset: { width: 5, height: 5, },
        shadowColor: 'black',
        shadowOpacity: .3,
    },
    number: {
        color: 'black',
        fontSize: 35,
        shadowOffset: { width: 2, height: 2, },
        shadowColor: 'black',
        shadowOpacity: .3,
    }

});