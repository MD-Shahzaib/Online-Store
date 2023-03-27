import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Account = () => {
    return (
        <View style={styles.accountbox}>
            <Text style={{ color: 'white', }}>Account</Text>
        </View>
    )
}

export default Account;

const styles = StyleSheet.create({
    accountbox: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "gray",
    }
})