import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const App = () => {
  return (
    <View style={styles.splashBox} >
      <View style={styles.box1}>
        <Image style={styles.logo} source={require("./src/Images/logo.png")} />
        <View style={styles.textBox}>
          <Text style={styles.text1}>SAYLANI WELFARE</Text>
          <Text style={styles.text2}>ONLINE DISCOUNT STORE</Text>
        </View>
      </View>
      <TouchableOpacity>
        <Text style={styles.startBtn}>Get Started</Text>
      </TouchableOpacity>
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  splashBox: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  box1: {
    flex: 0.4,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  logo: {
    width: 350,
    height: '40%',
    paddingLeft: 2,
    paddingRight: 2,
  },
  textBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text1: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#6cd205',
  },
  text2: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0c6fa6',
  },
  startBtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 5,
    borderColor: "#6cd205",
    borderRadius: 10,
    paddingTop: 10,
    paddingBottom: 5,
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 25,
    fontWeight: 800,
    color: 'aliceblue',
    backgroundColor: '#6cd205',
    shadowColor: 'gray',
    elevation: 3,
  },
})