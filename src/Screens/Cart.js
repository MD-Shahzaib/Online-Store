import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

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

const Cart = () => {
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
                <View style={styles.listContainer}>
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
                                <Text style={styles.price}>Rs: {item.price}</Text>
                            </View>
                        )
                    }} />
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
})