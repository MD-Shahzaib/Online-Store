import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const Home = () => {
    return (
        <View style={styles.homeContainer}>
            <View style={styles.topNav}>
                <View style={styles.title}>
                    <Text style={styles.text1}>SAYLANI WELFARE</Text>
                    <Text style={styles.text2}>ONLINE DISCOUNT STORE</Text>
                </View>
                <TouchableOpacity>
                    <MaterialIcons name="shopping-cart" color="black" size={30} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Home;


const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        backgroundColor: 'green',
        // paddingHorizontal: 5,
        // paddingVertical: 5,
        // display: 'flex',
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        // alignItems: 'center'
    },
    topNav: {
        backgroundColor: 'yellow',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    text1: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#6cd205',
    },
    text2: {
        fontSize: 14,
        fontWeight: '700',
        color: '#0c6fa6',
    },
})