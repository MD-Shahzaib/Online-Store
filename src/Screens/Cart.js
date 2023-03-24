import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Cart = () => {
    return (
        <View style={styles.cartBox}>
            <Text>Cart</Text>
        </View>
    )
}

export default Cart;

const styles = StyleSheet.create({
    cartBox: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "blue",
    }
})