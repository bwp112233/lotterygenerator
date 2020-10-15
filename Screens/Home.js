import React from 'react';
import { StyleSheet, View, ScrollView, Pressable } from 'react-native';
import GameSelect from '../Components/GameSelect';

const Home = (props) => {
    return (
        <ScrollView style={styles.container}>
            <View >
                <Pressable onPress={() => props.navigation.navigate('Game', { megaBall: false, game: 3, maxNum: 9, name: 'Pick 3' })}>
                    <GameSelect img={require('../Assets/Images/pick3.png')} />
                </Pressable>
                <Pressable onPress={() => props.navigation.navigate('Game', { megaBall: false, game: 4, maxNum: 9, name: 'Pick 4' })}>
                    <GameSelect img={require('../Assets/Images/pick4.png')} />
                </Pressable>
                <Pressable onPress={() => props.navigation.navigate('Game', { megaBall: false, game: 5, maxNum: 9, name: 'Pick 5' })}>
                    <GameSelect img={require('../Assets/Images/pick5.png')} />
                </Pressable>
                <Pressable onPress={() => props.navigation.navigate('Game', { ballName: 'Megaball', megaMax: 25, megaBall: true, game: 5, maxNum: 70, name: 'Mega Millions' })}>
                    <GameSelect img={require('../Assets/Images/MM.png')} />
                </Pressable>
                <Pressable onPress={() => props.navigation.navigate('Game', { ballName: 'Powerball', megaMax: 26, megaBall: true, game: 5, maxNum: 69, name: 'Powerball' })}>
                    <GameSelect img={require('../Assets/Images/PB.png')} />
                </Pressable>
            </View>
        </ScrollView>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: 'rgba(0, 126, 14, .15)',
    },
});
