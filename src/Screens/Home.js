import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, FlatList } from 'react-native';
// Icons.
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Temporary Data Todo(fetch data from API).
const data = [
    {
        catagory: 'Fruits',
        desc: 'This is product description sdsafff fffssss sssssss',
        price: '500',
    },
    {
        catagory: 'Vegetables',
        desc: 'This is product description',
        price: '500',
    },
    {
        catagory: 'Meat',
        desc: 'This is product description',
        price: '500',
    },
    {
        catagory: 'Grocery',
        desc: 'This is product description',
        price: '500',
    },
    {
        catagory: 'Masala',
        desc: 'This is product description',
        price: '500',
    },
];

const Home = () => {
    return (
        // MAIN-CONTAINER.
        <View style={styles.homeContainer}>

            {/* TOP-NAV. */}
            <View style={styles.topNav}>
                <View style={styles.title}>
                    <Text style={styles.text1}>SAYLANI WELFARE</Text>
                    <Text style={styles.text2}>ONLINE DISCOUNT STORE</Text>
                </View>
                <TouchableOpacity>
                    <MaterialIcons
                        name="shopping-cart"
                        color="black"
                        size={25}
                    />
                </TouchableOpacity>
            </View>

            {/* IMAGE-BOX. */}
            <View style={{ marginVertical: 10 }}>
                <Image source={require("../Images/homeImage.jpg")} style={{ width: 340, height: 200, borderRadius: 10 }} />
            </View>

            {/* SEARCH-INPUT. */}
            <View style={{ backgroundColor: '#cecfcf', borderRadius: 50, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', height: 40, }}>
                <Ionicons name="search" size={30} color="gray" />
                <TextInput
                    style={{ marginLeft: 10, marginRight: 10, width: 270 }}
                    placeholder="Search by product name"
                    keyboardType="default"
                />
            </View>

            {/* CATOGERY-SLIDER. */}
            <View
                style={{
                    // backgroundColor: '#cecfcf',
                    marginVertical: 10
                }}
            >
                <Text
                    style={{
                        fontWeight: 'bold',
                        color: 'black',
                        fontSize: 15
                    }}
                >
                    Shop by Category
                </Text>
                <FlatList
                    data={data}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => {
                        return (
                            <View
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    paddingRight: 15,
                                }}
                            >
                                <Image
                                    source={require('../Images/Home-Slider/item1.jpg')}
                                    style={{
                                        width: 80,
                                        height: 50,
                                        borderRadius: 10,
                                        marginTop: 5,
                                        borderColor: '#6cd205',
                                        borderWidth: 2,
                                    }}
                                />
                                <Text
                                    style={{
                                        fontWeight: 'bold',
                                        fontSize: 12,
                                        color: '#6cd205',
                                        textAlign: 'center',
                                        width: 80,
                                    }}
                                >
                                    {item.catagory}
                                </Text>
                            </View>
                        )
                    }}
                />
            </View>

            {/* LIST-ITEMS. */}
            <View>
                <FlatList data={data} renderItem={({ item, index }) => {
                    return (
                        <View
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                flexDirection: 'row',
                                marginVertical: 5,
                            }}>
                            <Image
                                source={require('../Images/Home-Slider/item1.jpg')}
                                style={{
                                    width: 85,
                                    height: 60,
                                    borderRadius: 10,
                                    marginTop: 5,
                                    borderColor: '#6cd205',
                                    borderWidth: 2,
                                }}
                            />
                            <View
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    // backgroundColor: 'red',
                                }}>
                                <View
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        // backgroundColor: 'yellow',
                                        width: 250,
                                    }}>
                                    <Text style={{ fontWeight: 'bold', width: 120, color: 'black', }}>{item.catagory}</Text>
                                    <Text style={{ fontWeight: 'bold', width: 120, textAlign: 'right', color: 'black', }}>Rs: {item.price} - Per Kg</Text>
                                </View>
                                <View
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        width: 250,
                                    }}>
                                    <Text>{item.desc.slice(0, 32)}..</Text>
                                    <View style={{ backgroundColor: '#6cd205', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 10 }}>
                                        <Ionicons name='add' color='white' size={25} />
                                    </View>
                                </View>
                            </View>
                        </View>
                    )
                }} />
            </View>

        </View >
    )
}

export default Home;

const styles = StyleSheet.create({
    // MAIN-CONTAINER.
    homeContainer: {
        flex: 1,
        paddingHorizontal: 10,
        // backgroundColor: '#e7e7e7',
    },

    // TOP-NAV.
    topNav: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // backgroundColor: '#cecfcf',
    },
    title: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    text1: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#6cd205',
    },
    text2: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#0c6fa6',
        width: 200,
    },
});