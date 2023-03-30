import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, FlatList } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

// import img1 from '../Images/Home-Slider/item1.jpg'
// import img2 from '../Images/Home-Slider/item2.jpg'
// import img3 from '../Images/Home-Slider/item3.jpg'
// import img4 from '../Images/Home-Slider/item4.avif'

const data = [
    {
        // image: img1,
        catagory: 'Fruits'
    },
    {
        // image: img2,
        catagory: 'Vegetables'
    },
    {
        // image: img3,
        catagory: 'Meat'
    },
    {
        // image: img4,
        catagory: 'Grocery'
    },
    {
        // image: img1,
        catagory: 'Masala'
    },
]

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
                    backgroundColor: 'lightblue',
                    marginVertical: 10
                }}
            >
                <Text
                    style={{
                        fontWeight: 'bold',
                        color: 'gray',
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
                                    backgroundColor: 'lightgray',
                                    paddingHorizontal: 5,
                                    paddingVertical: 5,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <Image
                                    source={require('../Images/Home-Slider/item1.jpg')}
                                    style={{
                                        width: 90,
                                        height: 50,
                                        borderRadius: 10,
                                        marginVertical: 5,
                                        borderColor: 'green',
                                        borderWidth: 2,
                                    }}
                                />
                                <Text
                                    style={{
                                        backgroundColor: 'gray',
                                        width: 90,
                                        textAlign: 'center',
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
            {/* <View style={styles.listItems}>
                <FlatList
                // data={DATA}
                // renderItem={({ item }) => <Item title={item.title} />}
                // keyExtractor={item => item.id}
                />
            </View> */}

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
        backgroundColor: '#cecfcf',
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
})