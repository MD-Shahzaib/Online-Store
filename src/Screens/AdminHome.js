import { Image, StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
// Vector-Icons.
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const AdminHome = ({ navigation }) => {

    // Temporary Data, Todo(fetch data from API).
    const data = [
        {
            productName: "Mango",
            productPrice: "$25",
            productUnit: "1.kg",
        },
        {
            productName: "Apple",
            productPrice: "$25",
            productUnit: "1.kg",
        },
        {
            productName: "Orange",
            productPrice: "$25",
            productUnit: "1.kg",
        },
        {
            productName: "Strawberry",
            productPrice: "$25",
            productUnit: "1.kg",
        },
        {
            productName: "Banana",
            productPrice: "$25",
            productUnit: "1.kg",
        },
        {
            productName: "Mango",
            productPrice: "$25",
            productUnit: "1.kg",
        },
        {
            productName: "Apple",
            productPrice: "$25",
            productUnit: "1.kg",
        },
        {
            productName: "Orange",
            productPrice: "$25",
            productUnit: "1.kg",
        },
        {
            productName: "Strawberry",
            productPrice: "$25",
            productUnit: "1.kg",
        },
        {
            productName: "Banana",
            productPrice: "$25",
            productUnit: "1.kg",
        },
        {
            productName: "Mango",
            productPrice: "$25",
            productUnit: "1.kg",
        },
        {
            productName: "Apple",
            productPrice: "$25",
            productUnit: "1.kg",
        },
        {
            productName: "Orange",
            productPrice: "$25",
            productUnit: "1.kg",
        },
        {
            productName: "Strawberry",
            productPrice: "$25",
            productUnit: "1.kg",
        },
        {
            productName: "Banana",
            productPrice: "$25",
            productUnit: "1.kg",
        },
        {
            productName: "Mango",
            productPrice: "$25",
            productUnit: "1.kg",
        },
        {
            productName: "Apple",
            productPrice: "$25",
            productUnit: "1.kg",
        },
        {
            productName: "Orange",
            productPrice: "$25",
            productUnit: "1.kg",
        },
        {
            productName: "Strawberry",
            productPrice: "$25",
            productUnit: "1.kg",
        },
        {
            productName: "Banana",
            productPrice: "$25",
            productUnit: "1.kg",
        },
    ]

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

            {/* All-Products-Container */}
            <View style={styles.allProductsContainer}>
                <Text style={styles.apcHeading}>All Products</Text>
                <FlatList data={data} renderItem={({ item, index }) => {
                    return (
                        <View style={styles.productsContainer}>
                            <View style={styles.productsLeftBox}>
                                <View>
                                    <Image
                                        source={require("../Images/orange.jpg")}
                                        style={styles.productimage}
                                    />
                                </View>
                                <View style={styles.textContainer}>
                                    <Text style={styles.pName}>{item.productName}</Text>
                                    <Text style={styles.pUnit}>{item.productUnit}</Text>
                                </View>
                            </View>
                            <View>
                                <Text style={styles.pPrice}>{item.productPrice}</Text>
                            </View>
                        </View>
                    )
                }} />
            </View >
        </>
    )
}

export default AdminHome;

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

    // All-Products-Container.
    allProductsContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    apcHeading: {
        fontSize: 22,
        fontWeight: '700',
        color: "#024F9D",
        width: "95%",
        marginVertical: 10,
    },
    productsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: "#61B846",
        borderWidth: 2,
        width: 350,
        borderRadius: 15,
        overflow: 'hidden',
        paddingHorizontal: 10,
        backgroundColor: "white",
        marginBottom: 10,
    },
    productsLeftBox: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    productimage: {
        width: 120,
        height: 80,
    },
    textContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    pName: {
        color: "#61B846",
        fontSize: 18,
        fontWeight: '700',
        width: 120,
        textAlign: 'center',
    },
    pUnit: {
        color: "#BFBCBC",
        width: 120,
        fontWeight: '700',
        textAlign: 'center',
    },
    pPrice: {
        color: "#BFBCBC",
        width: 50,
        fontWeight: '700',
        textAlign: 'center',
    },
});