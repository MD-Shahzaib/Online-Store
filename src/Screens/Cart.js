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
                                <Image source={require('../Images/Home-Slider/item1.jpg')} style={styles.listItemImg} />
                                <View style={styles.listItemQuantityBox}>
                                    <View style={styles.removeQuantity}>
                                        <Ionicons name='remove' color='black' size={15} />
                                    </View>
                                    <Text style={styles.quantity}>{item.quantity}</Text>
                                    <View style={styles.addQuantity}>
                                        <Ionicons name='add' color='black' size={15} />
                                    </View>
                                </View>
                                <Text>Rs: {item.price}</Text>
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
        backgroundColor: "lightblue",
    },

    // TOP-NAV.
    nav: {
        flex: 0.1,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
        backgroundColor: '#81c5f5',
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
        backgroundColor: '#d6ecfb',
        flex: 0.5,
    },
    listItem: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 5,
        backgroundColor: '#0098ff',
        flexDirection: 'row',
    },
    listItemImg: {
        width: 85,
        height: 60,
        borderRadius: 10,
        marginTop: 5,
        borderColor: '#6cd205',
        borderWidth: 2,
    },
    listItemQuantityBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    quantity: {
        backgroundColor: '#6cd205',
    },
    removeQuantity: {
        backgroundColor: 'gray',
    },
    addQuantity: {
        backgroundColor: '#6cd205',
    },
})