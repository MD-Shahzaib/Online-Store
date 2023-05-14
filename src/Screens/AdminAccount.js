import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, FlatList } from 'react-native';
// Vector-Icons.
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const AdminAccount = () => {

    // Temporary Data, Todo(fetch data from API).
    const data = [
        {
            productName: "Apple",
        },
        {
            productName: "Apple",
        },
    ]

    return (
        <>
            {/* MAIN-CONTAINER */}
            <View style={styles.accountContainer}>

                {/* PROFILE-BOX */}
                <View style={styles.profileBox}>
                    <Text style={styles.settings}>Settings</Text>
                    <View style={styles.profileImgBox}>
                        <Image
                            source={require('../Images/profilePhoto.png')}
                            style={styles.profileImg}
                        />
                    </View>
                    <View style={styles.inputBox}>
                        <TextInput placeholder='Update Full Name' style={styles.input} />
                        <Feather name="check" size={25} color="#8cc188" style={styles.inputIcon} />
                    </View>
                </View>

                {/* INPUT-BOX */}
                <View style={styles.inputContainer}>
                    <View style={styles.inputProductImg}>
                        <MaterialIcons name="camera-alt" color="gray" size={40} />
                    </View>
                    <View style={styles.inputProductName}>
                        <TextInput style={styles.inputName} placeholder="Item Name" />
                        <TouchableOpacity >
                            <Text style={styles.addBtn}>ADD</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* All-Products-Container */}
                <View style={styles.allProductsContainer}>
                    <Text style={styles.heading}>All Categories</Text>
                    <FlatList data={data} renderItem={({ item, index }) => {
                        return (
                            <View style={styles.productsContainer}>
                                <Image
                                    source={require("../Images/orange.jpg")}
                                    style={styles.productImage}
                                />
                                <Text style={styles.productName}>{item.productName}</Text>
                            </View>
                        )
                    }} />
                </View >

                {/* LOGOUT-BUTTON */}
                <TouchableOpacity>
                    <Text style={styles.logout} onPress={() => alert('logout alert')}>Logout</Text>
                </TouchableOpacity>

            </View >
        </>
    )
}

export default AdminAccount;

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
        color: '#024F9D',
        fontSize: 22,
        fontWeight: '700',
        width: "50%",
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
        width: "60%",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomColor: '#959799',
        borderBottomWidth: 1,
        marginVertical: 5,
    },
    inputIcon: {
        position: 'absolute',
        right: 5,
    },
    input: {
        padding: 1,
    },

    // INPUT-BOX.
    inputContainer: {
        display: 'flex',
        alignItems: 'center',
        paddingTop: 10,
    },
    inputProductImg: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D9D9D9',
        borderRadius: 10,
        width: "80%",
        height: 70,
    },
    inputProductName: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        width: "80%",
        marginVertical: 10,
    },
    inputName: {
        paddingHorizontal: 10,
        paddingVertical: 7,
        borderRadius: 10,
        backgroundColor: '#D9D9D9',
        width: "70%",
    },
    addBtn: {
        backgroundColor: "#61B846",
        paddingVertical: 10,
        textAlign: 'center',
        paddingHorizontal: 15,
        borderRadius: 10,
        color: "white",
        fontSize: 15,
        fontWeight: '700',
    },

    // All-Categories-Container
    allProductsContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        fontSize: 22,
        fontWeight: '700',
        color: "#024F9D",
        width: "80%",
        marginBottom: 10,
    },
    productsContainer: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        borderColor: "#61B846",
        borderWidth: 2,
        borderRadius: 15,
        overflow: 'hidden',
        backgroundColor: "white",
        shadowColor: 'gray',
        elevation: 4,
        width: 270,
        marginBottom: 10,
    },
    productImage: {
        width: 50,
        height: 40,
        marginHorizontal: 10
    },
    productName: {
        color: "#61B846",
        fontSize: 18,
        fontWeight: '700',
        width: "50%",
    },

    // LOGOUT-BUTTON.
    logout: {
        color: 'aliceblue',
        fontSize: 25,
        fontWeight: 800,
        borderRadius: 10,
        padding: 10,
        textAlign: 'center',
        backgroundColor: '#61B846',
        shadowColor: 'gray',
        elevation: 3,
    }
});