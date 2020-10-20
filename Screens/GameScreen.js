import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable, ScrollView } from 'react-native';
import Number from '../Components/Number';
import Megaball from '../Components/Megaball';

const GameScreen = (props) => {
    const { game, maxNum, megaBall, megaMax, ballName } = props.route.params;
    const [nums, setNums] = useState([]);
    const [mega, setMega] = useState([]);

    const pick = () => {

        const arr = [];
        if (megaBall === false) {
            for (let i = 0; i < game; i++) {
                const num = Math.ceil(Math.random() * maxNum);
                arr.push(num);
            }
            setNums(arr);
        } else {
            while (arr.length < game) {
                const r = Math.ceil(Math.random() * maxNum);
                if (arr.includes(r)) {
                    continue;
                } else {
                    arr.push(r);
                }
                arr.length === game && setNums(arr);
                console.log(nums);
            }

        }
        // setNums(arr);
        megaBall === true && setMega([<Megaball key={1} num={Math.ceil(Math.random() * megaMax)} />])
    }

    return (
        <View style={styles.container}>
            <ScrollView >
                {nums.length === 0 && <View style={styles.cash}>
                    <Text style={styles.cashText}>$</Text></View>}
                <View style={styles.numContainer}>
                    {nums.length > 0 && nums.map((e, i) => {
                        return <Number key={i} num={nums[i]} />
                    })}
                </View>
                {mega.length > 0 && <View style={styles.megaHeader}><Text style={styles.megaText}>{ballName}:</Text></View>}
                {megaBall === true && <View style={styles.numContainer}>

                    {mega}
                </View>}
            </ScrollView>
            <View style={styles.buttonContainer}>
                <Pressable onPress={pick} style={styles.button}>
                    <Text style={styles.text}>PRESS HERE</Text>
                </Pressable>
            </View>
        </View>
    )
}


export default GameScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'rgba(0, 126, 14, .15)',
    },
    numContainer: {
        flex: 1,
        marginTop: 56,
        borderBottomColor: 'black',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    button: {
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(0, 126, 14)',
        paddingVertical: 40,
        paddingHorizontal: 30

    },
    buttonContainer: {
        width: '100%',

    },
    text: {
        color: 'white',
        fontWeight: "200",
        fontSize: 30,
        marginVertical: 20,
        marginHorizontal: 20
    },
    megaHeader: {
        marginTop: 40,
        marginBottom: -40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    megaText: {
        fontSize: 50,
        fontWeight: '500',
        shadowOffset: { width: 3, height: 3, },
        shadowColor: 'black',
        shadowOpacity: .3,
    },
    cash: {
        marginTop: '70%',
        justifyContent: 'center',
        alignItems: 'center',

    },
    cashText: {
        color: 'rgba(0, 126, 14, .17)',
        fontSize: 200
    }
});
