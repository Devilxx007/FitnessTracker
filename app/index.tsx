import { View, Text,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const Home = () => {
    const router = useRouter()
  return (
    <View className=' flex-1 flex-col justify-center bg-white'>
      <View className=' flex items-center w-[100%] h-[40%] bg-[#D0D0D0] relative'>
      </View>
      <View className=' left-[42] top-[-40%] '>
        <Image source={require('@/assets/images/HomeLog.png')}/>
      </View>
      <View className=' absolute'>
        <Text className=' font-bold text-[36px] mt-[70%] p-3'>
            Welcome to your personal health tracker
        </Text>
      </View>
      <View className=' flex flex-row justify-between px-5 mb-[5%]' >
        <TouchableOpacity onPress={()=>{router.push('/login')}} className=' bg-black px-5 py-3 rounded-full'>
            <View>
                <Text className=' text-2xl font-bold text-white '>Sign-In</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{router.push('/signup')}} className=' bg-black px-5 py-3 rounded-full'>
            <View>
                <Text className=' text-2xl font-bold text-white '>Sign-Up</Text>
            </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default Home