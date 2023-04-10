import React from 'react'
import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
// Icons.
import Feather from 'react-native-vector-icons/Feather';

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

const Account = () => {
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
                    <Text>orders</Text>
                    <FlatList data={data} renderItem={({ item, index }) => {
                        return (
                            <View style={styles.listItem}>
                                <View style={styles.listItemImgBox}>
                                    <Image source={require('../Images/Home-Slider/item1.jpg')} style={{ width: 50, height: 50, }} />
                                    <Text style={styles.catagory}>{item.catagory}</Text>
                                </View>
                                <View style={styles.listItemQuantityBox}>
                                    <View>
                                        {/* <Ionicons name='remove' color='#9d9f9f' size={20} /> */}
                                    </View>
                                    <Text style={styles.quantity}>{item.quantity}</Text>
                                    <View>
                                        {/* <Ionicons name='add' color='#9d9f9f' size={20} /> */}
                                    </View>
                                </View>
                                <Text style={styles.price}>&#8360; {item.price}</Text>
                            </View>
                        )
                    }} />
                </View>

                {/* LOGOUT-BUTTON */}
                <TouchableOpacity>
                    <Text style={styles.logout}>Logout</Text>
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
        backgroundColor: "#c6e7f7",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    settings: {
        color: '#0c6fa6'
    },
    profileImgBox: {
        borderColor: '#6cd205',
        borderStyle: 'solid',
        borderWidth: 2,
        borderRadius: 100,
        padding: 10,
    },
    profileImg: {
        width: 100,
        height: 100
    },
    inputBox: {
        // backgroundColor: '#74a3ba',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
    },
    inputIcon: {
        // backgroundColor: '#888cc1',
        paddingHorizontal: 5,
    },
    input: {
        paddingHorizontal: 5,
        // backgroundColor: '#8cc188',
        padding: 1,
    },

    // LOGOUT.
    logout: {
        backgroundColor: 'green',
        padding: 15,
        textAlign: 'center',
        color: 'white',
    }
})