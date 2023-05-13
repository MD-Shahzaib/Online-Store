import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
// Icons.
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const AdminAccount = ({ navigation }) => {
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
            <View>
                <TextInput style={styles.input} placeholder="Camera-Icon" />
            </View>
            <View>
                <TextInput style={styles.input} placeholder="Item Name" />
            </View>

            {/* LIST-ITEMS. */}
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
                        </View>
                    )
                }} />
            </View>

            {/* LOGOUT-BUTTON */}
            <TouchableOpacity>
                <Text style={styles.logout} onPress={() => alert('logout alert')}>Logout</Text>
            </TouchableOpacity>
        </>
    )
}

export default AdminAccount;

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
})