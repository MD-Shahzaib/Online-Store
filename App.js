import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const App = () => {
  return (
    <View style={styles.Conatiner} >
      <Image source={require("./src/Images/logo.png")} />
      <Text>SAYLANI WELFARE</Text>
      <Text>ONLINE DISCOUNT STORE</Text>
      {/* <Button>Get Started</Button> */}
      <TouchableOpacity>
        <Text>Get Started</Text>
      </TouchableOpacity>
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  Conatiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "aliceblue"
  }
})