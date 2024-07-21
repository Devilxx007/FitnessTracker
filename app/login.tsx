import { View, Text,TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRouter } from 'expo-router'



const Login = () => {

    const [email, setemail] = useState('')

    const [password, setpassword] = useState('')

    const router = useRouter()

    const handleLogin = async ()=>{

        try {

            console.log("inside try block");
            
            const response = await fetch('https://fitness-be-veud.onrender.com/api/auth/login',{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            })
            const data = await response.json()

            console.log("Login Successful",data);
            
        } catch (error) {
            console.error("Login Unsucessful",error)
        }
    }

    return ( 
    <View className=' flex-1 flex-col px-3  gap-5 bg-white'>
        
            <View className=' mx-3'>
                <Text className=' text-[38px] font-bold'>Welcome Back! Glad to see you. Again!</Text>
            </View>
        

        <View className=' flex '>
            <TextInput
            className='  border text-[16px] px-2 text-black border-black w-[80%] rounded-lg py-2'
            placeholder='Enter your E-Mail'
            placeholderTextColor={'black'}
            onChangeText={(value)=>{setemail(value)}}
            value={email}
            />
        </View>

        <View className='flex '>
        <TextInput
            className='  border text-[16px] px-2 text-black border-black w-[80%] rounded-lg py-2'
            placeholder='Enter your password'
            placeholderTextColor={'black'}
            onChangeText={(value)=>{setpassword(value)}}
            value={password}
            />
        </View>

        <View className = ' flex flex-row items-center'>
            <Text className=' text-lg font-semibold'>Don't have an account ?</Text>
            <TouchableOpacity onPress={()=>{router.push('/signup')}} className=' ml-2'>
            <Text className=' text-lg font-semibold text-blue-600'>Register Now</Text>
            </TouchableOpacity>
            
        </View>

        <TouchableOpacity onPress={handleLogin} className=' bg-black px-4 py-2 rounded-full'>
            <View>
                <Text className=' text-white text-center text-[25px] font-bold'>Login</Text>
            </View>
        </TouchableOpacity>
    </View>
  )
}

export default Login