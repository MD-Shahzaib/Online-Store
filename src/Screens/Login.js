import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
// Vector-icons.
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Login = ({ navigation }) => {
    return (
        <View style={styles.mainConatiner} >
            <View style={styles.title}>
                <Text style={styles.text1}>SAYLANI WELFARE</Text>
                <Text style={styles.text2}>ONLINE DISCOUNT STORE</Text>
            </View>
            <View style={styles.textBox}>
                <View style={styles.inputBox}>
                    <TextInput placeholder='Email' style={styles.input} />
                    <Fontisto name="email" size={30} color="#BAC4C7" style={styles.inputIcon} />
                </View>
                <View style={styles.inputBox}>
                    <TextInput placeholder='Password' style={styles.input} />
                    <Ionicons name="eye" size={30} color="#BAC4C7" style={styles.inputIcon} />
                </View>
                <Text style={styles.forgotText} onPress={() => alert("Page does not exsist or create")}
                >Forgot Password?</Text>
            </View>
            <TouchableOpacity>
                <Text style={styles.startBtn} onPress={() => navigation.navigate('BottomNavigation')}>Sign In</Text>
                <Text style={styles.accountText} onPress={() => navigation.navigate('Register')}>Don't have an account? Register</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Login;

const styles = StyleSheet.create({
    mainConatiner: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    title: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text1: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#6cd205',
    },
    text2: {
        fontSize: 14,
        fontWeight: '700',
        color: '#0c6fa6',
    },
    textBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderBottomColor: '#BAC4C7',
        marginBottom: 10,
        paddingHorizontal: 5,
    },
    inputIcon: {
        paddingHorizontal: 5,
    },
    input: {
        flex: 0.6,
    },
    startBtn: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 5,
        textAlign: 'center',
        width: 180,
        borderColor: "#6cd205",
        borderRadius: 10,
        paddingTop: 10,
        paddingBottom: 5,
        paddingLeft: 20,
        paddingRight: 20,
        fontSize: 25,
        fontWeight: 800,
        color: 'aliceblue',
        shadowColor: 'gray',
        elevation: 3,
        backgroundColor: '#6cd205',
    },
    forgotText: {
        fontWeight: 'bold',
        color: '#0c6fa6',
        fontSize: 14,
        width: 222,
        marginTop: 5,
    },
    accountText: {
        fontWeight: 'bold',
        color: '#0c6fa6',
        fontSize: 12,
        marginTop: 15,
    }
})