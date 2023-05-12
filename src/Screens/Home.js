import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, FlatList } from 'react-native';
// Vector-icons.
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';


// ) Temporary-Data.
const data = [
    {
        catagory: 'Fruits',
        desc: 'This is product description',
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

const Home = ({ navigation }) => {
    return (
        // MAIN-CONTAINER.
        <View style={styles.homeContainer}>

            {/* TOP-NAV. */}
            <View style={styles.topNav}>
                <View style={styles.title}>
                    <Text style={styles.text1}>SAYLANI WELFARE</Text>
                    <Text style={styles.text2}>ONLINE DISCOUNT STORE</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                    <MaterialIcons name="shopping-cart" color="black" size={25} />
                </TouchableOpacity>
            </View>

            {/* IMAGE-BOX. */}
            <View style={styles.homeBannerBox} >
                <Image source={require("../Images/homeImage.jpg")} style={styles.homeBanner} />
            </View>

            {/* SEARCH-INPUT. */}
            <View style={styles.inputBox}>
                <Ionicons name="search" size={30} color="gray" />
                <TextInput
                    style={styles.homeSearchInput}
                    placeholder="Search by product name"
                    keyboardType="default"
                />
            </View>

            {/* CATOGERY-SLIDER. */}
            <View style={styles.catogerySliderContainer}>
                <Text style={styles.catogerySliderHeading}>Shop by Category</Text>
                <FlatList
                    data={data}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={styles.csliderItemBox}>
                                <Image style={styles.csliderItemImage} source={require('../Images/Home-Slider/item1.jpg')} />
                                <Text style={styles.csliderItemTitle}>{item.catagory}</Text>
                            </View>
                        )
                    }}
                />
            </View>

            {/* LIST-ITEMS. */}
            <View>
                <FlatList data={data} renderItem={({ item, index }) => {
                    return (
                        <View style={styles.shopItemBox}>
                            <Image source={require('../Images/Home-Slider/item1.jpg')} style={styles.shopItemImage} />
                            <View style={styles.shopItemTextBox}>
                                <View style={styles.shopItemTextBoxTop}>
                                    <Text style={styles.shopItemTextBoxTitle}>{item.catagory}</Text>
                                    <Text style={styles.shopItemTextBoxPrice}>Rs: {item.price} - Per Kg</Text>
                                </View>
                                <View style={styles.shopItemTextBoxbottom}>
                                    <Text>{item.desc.slice(0, 32)}..</Text>
                                    <View style={styles.shopItemTextBoxbottomIcon}>
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
    homeContainer: {
        flex: 1,
        paddingHorizontal: 10,
    },
    topNav: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
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
    homeBannerBox: {
        marginVertical: 10,
    },
    homeBanner: {
        width: 340,
        height: 200,
        borderRadius: 10,
    },
    inputBox: {
        backgroundColor: '#cecfcf',
        borderRadius: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        height: 40,
    },
    homeSearchInput: {
        marginLeft: 10,
        marginRight: 10,
        width: 270,
    },
    catogerySliderContainer: {
        // backgroundColor: '#cecfcf',
        marginVertical: 10
    },
    catogerySliderHeading: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 15,
    },
    csliderItemBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 15,
    },
    csliderItemImage: {
        width: 80,
        height: 50,
        borderRadius: 10,
        marginTop: 5,
        borderColor: '#6cd205',
        borderWidth: 2,
    },
    csliderItemTitle: {
        fontWeight: 'bold',
        fontSize: 12,
        color: '#6cd205',
        textAlign: 'center',
        width: 80,
    },
    shopItemBox: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 5,
    },
    shopItemImage: {
        width: 85,
        height: 60,
        borderRadius: 10,
        marginTop: 5,
        borderColor: '#6cd205',
        borderWidth: 2,
    },
    shopItemTextBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'red',
    },
    shopItemTextBoxTop: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 250,
        // backgroundColor: 'yellow',
    },
    shopItemTextBoxTitle: {
        fontWeight: 'bold',
        width: 120,
        color: 'black',
    },
    shopItemTextBoxPrice: {
        fontWeight: 'bold',
        width: 120,
        textAlign: 'right',
        color: 'black',
    },
    shopItemTextBoxbottom: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 250,
    },
    shopItemTextBoxbottomIcon: {
        backgroundColor: '#6cd205',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
    },

});