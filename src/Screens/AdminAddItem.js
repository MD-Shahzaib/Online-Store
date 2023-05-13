import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
// Icons.
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const AdminAddItem = ({ navigation }) => {
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

      {/* Add-Items-Container. */}
      <View style={styles.allProductsContainer}>
        <Text style={styles.apcHeading}>Add New Item</Text>
        <View style={styles.inputProductImg}>
          <MaterialIcons name="camera-alt" color="gray" size={60} />
        </View>
        <View style={styles.inputProductName}>
          <TextInput
            style={styles.inputName}
            placeholder="Item Name"
          />
        </View>
        <View style={styles.inputProductCatogery}>
          <TextInput style={styles.inputCatogery} placeholder="Select Catogery" />
          <MaterialIcons name="keyboard-arrow-down" color="gray" size={30} />
        </View>
        <View style={styles.inputProductDescribe}>
          <TextInput placeholder='Describe Item' multiline={true} />
        </View>
        <View style={styles.unitBox1}>
          <Text style={styles.unitText}>Unit Name:</Text>
          <TextInput style={styles.unitPlaceholder} placeholder='Pcs. / Kg / dozen' />
        </View>
        <View style={styles.unitBox2}>
          <Text style={styles.unitText}>Unit Price:</Text>
          <TextInput style={styles.unitPlaceholder} placeholder='$3.22' />
        </View>
        <TouchableOpacity>
          <Text style={styles.addProductBtn}>Add Product</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

export default AdminAddItem;

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
    padding: 5,
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
    // backgroundColor: "lightblue",
  },
  apcHeading: {
    fontSize: 22,
    fontWeight: '700',
    color: "#024F9D",
    width: "95%",
    marginVertical: 5,
  },
  inputProductImg: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    borderRadius: 20,
    width: "90%",
    height: "20%",
  },
  inputProductName: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: "90%",
    backgroundColor: 'lightgray',
    borderRadius: 20,
    marginVertical: 10,
  },
  inputProductCatogery: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: "90%",
    backgroundColor: 'lightgray',
    borderRadius: 20,
    paddingHorizontal: 15
  },
  inputProductDescribe: {
    backgroundColor: 'lightgray',
    borderRadius: 20,
    paddingHorizontal: 17,
    marginVertical: 10,
    width: "90%",
    height: "10%",
  },
  inputName: {
    marginHorizontal: 10,
    paddingVertical: 5,
    width: "90%",
  },
  inputCatogery: {
    paddingVertical: 5,
    width: "85%",
  },
  unitBox1: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    width: "90%",
  },
  unitBox2: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    width: "90%",
    marginVertical: 10,
  },
  unitText: {
    fontSize: 20,
    fontWeight: '700',
    color: "#024F9D",
    width: "40%",
  },
  unitPlaceholder: {
    backgroundColor: "lightgray",
    borderRadius: 20,
    padding: 10,
    width: "50%",
    textAlign: 'center',
  },
  addProductBtn: {
    backgroundColor: "#61B846",
    width: 250,
    textAlign: 'center',
    paddingVertical: 15,
    borderRadius: 20,
    color: "white",
    fontSize: 23,
    fontWeight: '700',
    shadowColor: '#1D2429',
    elevation: 5,
  },
});