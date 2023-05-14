import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, TextInput } from 'react-native';
import React from 'react';
// Vector-Icons.
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const AdminOrders = ({ navigation }) => {

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
            {/* Header */}
            <View style={styles.headerContainer}>
                <View style={styles.leftBox}>
                    <View style={styles.profileImgBox}>
                        <Image
                            source={require('../Images/profilePhoto.png')}
                            style={styles.profileImg}
                        />
                    </View>
                    <View style={styles.textBox}>
                        <Text style={styles.leftBoxTextTop}>Mr Ahmed</Text>
                        <Text style={styles.leftBoxTextbottom}>Admin</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={() => { navigation.navigate('AdminOrders') }}>
                    <MaterialIcons name="list-alt" color="black" size={40} />
                </TouchableOpacity>
            </View>

            {/* Orders-Container */}
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
                            <View style={styles.inputProductCatogery}>
                                <TextInput style={styles.inputCatogery} placeholder="Change status" />
                                <MaterialIcons name="keyboard-arrow-down" color="gray" size={30} />
                            </View>
                        </View>
                    )
                }} />
            </View>
        </>
    )
}

export default AdminOrders;

const styles = StyleSheet.create({
    // Header.
    headerContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderBottomWidth: 2,
        borderColor: 'lightgray',
        padding: 5
    },
    leftBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 170,
    },
    textBox: {
        width: 100,
    },
    leftBoxTextTop: {
        color: "#024F9D",
        fontSize: 20,
        fontWeight: '700',
    },
    leftBoxTextbottom: {
        color: "#61B846",
        fontSize: 20,
        fontWeight: '700',
    },
    profileImgBox: {
        borderWidth: 2,
        borderColor: "#61B846",
        borderRadius: 50,
        padding: 5
    },
    profileImg: {
        width: 50,
        height: 50,
    },

    // ORDERS-BOX. 
    listContainer: {
        paddingHorizontal: 10,
    },
    orderHeading: {
        fontSize: 18,
        fontWeight: '700',
        color: '#0c6fa6',
        marginVertical: 10,
    },
    orderItemBox: {
        paddingHorizontal: 10,
        paddingBottom: 5,
        marginBottom: 10,
        borderBottomColor: '#959799',
        borderBottomWidth: 1,
    },
    userName: {
        fontSize: 18,
        fontWeight: '700',
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
        width: "25%",
    },
    totalPrice: {
        fontSize: 15,
        fontWeight: '700',
        textAlign: 'right',
        width: "30%",
    },
    inputProductCatogery: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'lightgray',
        borderRadius: 20,
        paddingHorizontal: 15,
        marginVertical: 5,
    },
    inputCatogery: {
        paddingVertical: 5,
        width: "85%",
    },
})