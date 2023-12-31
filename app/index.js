
import { useState } from 'react'
import { View, ScrollView, SafeAreaView } from 'react-native'
import { Stack, useRouter } from 'expo-router'
import { COLORS, icons, images, SIZES } from '../constants'
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components'



const Home = () => {
  const router = useRouter();
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: COLORS.lightWhite }}
    >
      <Stack.Screen
        options={{
          HeaderStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
            iconUrl={icons.menu}
              onPress={() => { router.navigate("Drawer") }}
              dimension="60%"
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn
              iconUrl={images.profile}
              onPress={() => { router.navigate("Drawer") }}
              dimension="100%"
            />
          ),
          headerTitle: "",
        }}

      />
      <ScrollView
        showsVerticalScrollIndicator={false}

      >
        <View
          style={{ flex: 1, padding: SIZES.medium, borderWidth: 2, borderColor: 'red' }}
        >
          <Welcome />
          <Popularjobs />
          <Nearbyjobs />

        </View>


      </ScrollView >

    </SafeAreaView>
  )
}

export default Home