import React from 'react'
import { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,

} from 'react-native'
import { useRouter } from 'expo-router'
import { icons, SIZES } from '../../../constants'



import styles from './welcome.style'

const Welcome = () => {
  return (
    <View>
      {/* First View */}
      <View
        style={styles.container}
      >
        <Text
          style={styles.userName}
        >Welcome Youssef</Text>
        <Text
          style={styles.welcomeMessage}
        >find your perfect job</Text>
      </View>
       {/* Second  View */}
       <View
       style={styles.searchContainer} >
        
        <View
        style={styles.searchWrapper}
        >
          <TextInput
          style={styles.searchInput}
          
          />
        </View>
       
    
       </View>

    </View>
  )
}

export default Welcome