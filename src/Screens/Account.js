import React from 'react'
import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
// Vector-Icons.
import Feather from 'react-native-vector-icons/Feather';

const Account = () => {

    // Temporary Data, Todo(fetch data from API).
    const data = [
        {
            userName: 'Shahzaib',
            phoneNumber: '03453453453',
            productName: 'Fruit',
            orderDate: 'Just Now',
            orderStatus: 'Pending',
            quantity: 3,
        },
        {
            userName: 'Zohaib',
            phoneNumber: '03455653453',
            productName: 'Vegetable',
            orderDate: '2 feb 2023',
            orderStatus: 'In Progress',
            quantity: 1,
        },
    ];

    return (
        <>
            {/* MAIN-CONTAINER */}
            <View style={styles.accountContainer}>

                {/* PROFILE-BOX */}
                <View style={styles.profileBox}>
                    <Text style={styles.settings}>Settings</Text>
                    <View style={styles.profileImgBox}>
                        <Image source={require('../Images/profilePhoto.png')} style={styles.profileImg} />
                    </View>
                    <View style={styles.inputBox}>
                        <TextInput placeholder='Update Full Name' style={styles.input} />
                        <Feather name="check" size={25} color="#8cc188" style={styles.inputIcon} />
                    </View>
                </View>

                {/* LIST-ITEMS. */}
                <View style={styles.listContainer}>
                    <Text style={styles.orderHeading}>Orders</Text>
                    <FlatList data={data} renderItem={({ item, index }) => {
                        return (
                            <View style={styles.orderItemBox}>
                                <Text style={styles.userName}>{item.userName}</Text>
                                <View style={styles.orderStatusBox}>
                                    <Text style={styles.status}>{item.orderDate} - {item.orderStatus}</Text>
                                    <Text style={styles.phoneNumber}>{item.phoneNumber}</Text>
                                </View>
                                <Text style={styles.productAndQuantity}>{item.quantity} X {item.productName}</Text>
                                <View style={styles.totalBox}>
                                    <Text style={styles.totalText}>Total</Text>
                                    <Text style={styles.totalPrice}>&#8360; 485.00</Text>
                                </View>
                            </View>
                        )
                    }} />
                </View>

                {/* LOGOUT-BUTTON */}
                <TouchableOpacity>
                    <Text style={styles.logout} onPress={() => alert('logout alert')}>Logout</Text>
                </TouchableOpacity>

            </View>
        </>
    )
}

export default Account;

const styles = StyleSheet.create({
    // MAIN-CONTAINER.
    accountContainer: {
        flex: 1,
        paddingHorizontal: 10,
    },

    // PROFILE-BOX.
    profileBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    settings: {
        color: '#0c6fa6',
        fontSize: 22,
        fontWeight: '700',
        width: 150,
        textAlign: 'center',
        marginTop: 5,
        marginBottom: 10,
    },
    profileImgBox: {
        borderWidth: 2,
        padding: 10,
        borderRadius: 100,
        borderColor: '#6cd205',
    },
    profileImg: {
        width: 100,
        height: 100
    },
    inputBox: {
        width: 200,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomColor: '#959799',
        borderBottomWidth: 1.5,
        marginVertical: 5,
    },
    inputIcon: {
        position: 'absolute',
        right: 10,
    },
    input: {
        paddingHorizontal: 5,
        padding: 1,
    },

    // LIST-ITEMS.
    listContainer: {
        marginVertical: 15,
    },
    orderHeading: {
        width: 150,
        fontSize: 18,
        fontWeight: '700',
        color: '#0c6fa6',
        marginVertical: 5,
    },
    orderItemBox: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginVertical: 5,
        borderBottomColor: '#959799',
        borderBottomWidth: 1,
    },
    userName: {
        fontSize: 18,
        fontWeight: '700'
    },
    orderStatusBox: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    status: {
        fontSize: 10,
    },
    phoneNumber: {
        fontSize: 10,
    },
    productAndQuantity: {
        fontSize: 12,
    },
    totalBox: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    totalText: {
        fontSize: 15,
        fontWeight: '700',
        width: 50,
    },
    totalPrice: {
        fontSize: 15,
        fontWeight: '700',
        width: 100,
        textAlign: 'right',
    },
    // LOGOUT-BUTTON.
    logout: {
        color: 'aliceblue',
        fontSize: 25,
        fontWeight: 800,
        borderRadius: 10,
        padding: 10,
        textAlign: 'center',
        backgroundColor: '#6cd205',
        shadowColor: 'gray',
        elevation: 3,
    }
});