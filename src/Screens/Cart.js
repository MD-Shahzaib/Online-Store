import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image, TextInput } from 'react-native'
// Icons.
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';

// Temporary Data Todo(fetch data from API).
const data = [
    {
        catagory: 'Fruits',
        quantity: 1,
        price: '500',
    },
    {
        catagory: 'Vegetables',
        quantity: 1,
        price: '500',
    },
    {
        catagory: 'Meat',
        quantity: 1,
        price: '500',
    },
];

const Cart = ({ navigation }) => {
    return (
        <>
            {/* MAIN-CONTAINER. */}
            <View style={styles.cartBox}>

                {/* TOP-NAV. */}
                <View style={styles.nav}>
                    <View>
                        <Text style={styles.navText1}>Shopping</Text>
                        <Text style={styles.navText2}>Cart</Text>
                    </View>
                    <TouchableOpacity>
                        <MaterialIcons name="delete" color="black" size={25} />
                    </TouchableOpacity>
                </View>

                {/* LIST-ITEMS. */}
                {/* <View style={styles.listContainer}>
                    <FlatList data={data} renderItem={({ item, index }) => {
                        return (
                            <View style={styles.listItem}>
                                <View style={styles.listItemImgBox}>
                                    <Image source={require('../Images/Home-Slider/item1.jpg')} style={styles.listItemImg} />
                                    <Text style={styles.catagory}>{item.catagory}</Text>
                                </View>
                                <View style={styles.listItemQuantityBox}>
                                    <View style={styles.removeQuantity}>
                                        <Ionicons name='remove' color='white' size={20} />
                                    </View>
                                    <Text style={styles.quantity}>{item.quantity}</Text>
                                    <View style={styles.addQuantity}>
                                        <Ionicons name='add' color='white' size={20} />
                                    </View>
                                </View>
                                <Text style={styles.price}>&#8360; {item.price}</Text>
                            </View>
                        )
                    }} />
                </View> */}

                {/* TOTAL-BOX */}
                <View style={styles.totalBox}>
                    <Text style={styles.totalText}>Total</Text>
                    <Text style={styles.totalPrice}>&#8360; 485.00</Text>
                </View>

                {/* PLACE-ORDER-INPUT */}
                <View style={styles.inputContainer}>
                    <View style={styles.inputBox}>
                        <TextInput placeholder='Full Name' style={styles.input} />
                        <MaterialIcons name="account-circle" size={30} color="#BAC4C7" style={styles.inputIcon} />
                    </View>
                    <View style={styles.inputBox}>
                        <TextInput placeholder='Email' style={styles.input} />
                        <Fontisto name="email" size={30} color="#BAC4C7" style={styles.inputIcon} />
                    </View>
                    <View style={styles.inputBox}>
                        <TextInput placeholder='Phone Number' style={styles.input} />
                        <Fontisto name="phone" size={30} color="#BAC4C7" style={styles.inputIcon} />
                    </View>
                    <View style={styles.inputBox}>
                        <TextInput placeholder='Shipping Address' style={styles.input} />
                        <Ionicons name="location" size={30} color="#BAC4C7" style={styles.inputIcon} />
                    </View>
                    {/* PLACE-ORDER-BUTTON */}
                    <TouchableOpacity>
                        <Text style={styles.placeOrder} onPress={() => navigation.navigate('Account')}>Place Order</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </>
    )
}

export default Cart;

const styles = StyleSheet.create({
    // MAIN-CONTAINER.
    cartBox: {
        flex: 1,
        paddingHorizontal: 10,
        // backgroundColor: "lightblue",
    },

    // TOP-NAV.
    nav: {
        // flex: 0.1,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
        // backgroundColor: '#81c5f5',
    },
    navText1: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#0c6fa6',
        width: 120,
        // backgroundColor: 'yellow',
    },
    navText2: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#6cd205',
    },

    // LIST-ITEMS.
    listContainer: {
        // backgroundColor: '#d6ecfb',
        // flex: 0.43,
        paddingBottom: 5,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
    },
    listItem: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        // backgroundColor: '#0098ff',
    },
    listItemImgBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    listItemImg: {
        width: 100,
        height: 70,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#6cd205',
    },
    catagory: {
        width: 80,
        marginLeft: 5,
        color: 'black',
        fontWeight: 'bold',
    },
    listItemQuantityBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    removeQuantity: {
        padding: 2,
        borderRadius: 5,
        backgroundColor: 'red',
    },
    quantity: {
        fontWeight: 'bold',
        marginHorizontal: 5,
        paddingHorizontal: 5,
        color: 'black',
        backgroundColor: 'black',
        color: 'white',
        borderRadius: 50,
    },
    addQuantity: {
        padding: 2,
        borderRadius: 5,
        backgroundColor: '#6cd205',
    },
    price: {
        fontSize: 15,
        fontWeight: 'bold',
        width: 50,
        color: 'black',
    },

    // TOTAL-BOX.
    totalBox: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: 5,
    },
    totalText: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'black',
        width: 100,
    },
    totalPrice: {
        fontWeight: 'bold',
        fontSize: 16,
        width: 100,
        color: '#6cd205',
        textAlign: 'right'
    },

    // PLACE-ORDER-INPUT.
    inputContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#71D69C',
        marginTop: 5,
    },
    inputBox: {
        backgroundColor: '#44815e',
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
        backgroundColor: '#7197d6',
    },
    input: {
        flex: 0.9,
    },

    // PLACE-ORDER-BUTTON.
    placeOrder: {
        backgroundColor: 'green',
        padding: 10,
    }
})