import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
// import icons from react-native-vector-icons.
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Register = ({ navigation }) => {
    return (
        <View style={styles.mainConatiner} >
            <View style={styles.title}>
                <Text style={styles.text1}>SAYLANI WELFARE</Text>
                <Text style={styles.text2}>ONLINE DISCOUNT STORE</Text>
            </View>
            <View style={styles.textBox}>
                <TextInput
                    placeholder='Full Name'
                    style={styles.input}
                />

                <MaterialIcons name="account-circle" size={30} color="red" />



                <TextInput
                    placeholder='Phone No'
                    style={styles.input}
                />
                <TextInput
                    placeholder='Email'
                    style={styles.input}
                />
                <TextInput
                    placeholder='Password'
                    style={styles.input}
                />
            </View>
            <TouchableOpacity>
                <Text style={styles.startBtn} onPress={() => navigation.navigate('Login')}>Sign Up</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Register;

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
        // backgroundColor: 'cyan',
    },
    textBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'cyan',
        borderWidth: 2,
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
    input: {
        marginTop: 5,
        marginBottom: 5,
        borderWidth: 2,
        width: 250,
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
        backgroundColor: '#6cd205',
        shadowColor: 'gray',
        elevation: 3,
    },
})