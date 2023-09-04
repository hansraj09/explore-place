import { View, Text, Image, StyleSheet, TextInput, Dimensions } from 'react-native'
import React from 'react'
import Color from '../../Shared/Color'

export default function Header() {
  return (
    <View style={{display: 'flex', flexDirection: 'row', 
      justifyContent: 'space-evenly', gap: 10, alignItems: 'center'}}>
      <Image source={require('./../../../assets/logo.png')}
        style={styles.logo} />

      <View>
        <TextInput placeholder='Search' style={styles.searchbar} />
      </View>
      <Image source={require('./../../../assets/placeholder.jpg')} 
        style={styles.userimage} />
    </View>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: 50,
    height: 50,
  },
  searchbar: {
    borderWidth: 1,
    borderColor: Color.black,
    padding: 4,
    borderRadius: 50,
    paddingLeft: 10,
    width: Dimensions.get('screen').width * 0.6
  },
  userimage: {
    width: 50,
    height: 50,
    borderRadius: 100
  }
})