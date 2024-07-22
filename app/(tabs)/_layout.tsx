import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Tabs } from 'expo-router'
import AsyncStorage from '@react-native-async-storage/async-storage'
const TabsLayout = () => {

  const [gender, setgender] = useState('')

  const getUser = async()=>{
    try {
      const savedUser = await AsyncStorage.getItem("Data")
      const currentUser = await JSON.parse(savedUser)
      setgender(currentUser?.gender)
    } catch (error) {
      console.error("Error in fetching user",error)
    }
  }

  useEffect(()=>{
    getUser()
  })

  return (
    <Tabs>
        <Tabs.Screen name='index'/>

        {/* Cycle will be protected route only available for females */}

        <Tabs.Screen name='Cycle' redirect={gender !== "Female"}/>

        
        <Tabs.Screen name='Profile'/>
    </Tabs>
  )
}

export default TabsLayout