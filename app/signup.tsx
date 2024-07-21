import { View, Text, TextInput, TouchableOpacity, Platform } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native'
import GenderCard from '@/components/GenderCard'
import Slider from '@react-native-community/slider'
import { Feather } from '@expo/vector-icons'
import axios from 'axios'
import { Dropdown } from 'react-native-element-dropdown';
const activityLevelArray = [
  { label: 'Beginner', value: '1' },
  { label: 'Moderate', value: '2' },
  { label: 'Advanced', value: '3' },
]
const SignUp = () => {
  const [name, setname] = useState<String>('')
  const [email, setemail] = useState<String>('')
  const [password, setpassword] = useState('')
  const [age, setage] = useState<Number>()
  const [height, setheight] = useState(0)
  const [weight, setweight] = useState(0)
  const [gender, setgender] = useState('')
  const [activityLevel, setactivityLevel] = useState({})
  const [goals, setgoals] = useState('')

  const submitForm = async () => {
    try {
      const response = await fetch('https://fitness-be-veud.onrender.com/api/auth/register',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
          age: age,
          height: height,
          weight: weight,
          gender: gender,
          activityLevel: activityLevel.label,
          goals: goals,
        })
      })

      const data = await response.json()
      console.log("Registration successfull",data)
    } catch (error) {
       console.log("error in registration",error)
    }
  }

  

  return (
    <ScrollView className=" flex-1 flex-col bg-white">
      
        <Text className=" text-[38px] px-3 font-medium">Give us some basic information</Text>
      
      <View className=" flex flex-col gap-3">
        <View className=" flex px-3 gap-2">
          <TextInput
            placeholder="Enter your name"
            placeholderTextColor={'black'}
            keyboardType="default"
            onChangeText={(value) => {
              setname(value)
            }}
            className=" border px-2 text-[16px] text-black border-black w-[80%] rounded-lg py-2"
          />
        </View>

        <View className=" flex px-3 gap-2">
          <TextInput
            placeholderTextColor={'black'}
            placeholder="Enter your E-mail"
            keyboardType="default"
            onChangeText={(value) => {
              setemail(value)
            }}
            className=" border px-2 text-[16px] text-black border-black w-[80%] rounded-lg py-2"
          />
        </View>

        <View className=" flex px-3 gap-2">
          <TextInput
            placeholderTextColor={'black'}
            placeholder="Enter your password"
            keyboardType="visible-password"
            onChangeText={(value) => {
              setpassword(value)
            }}
            className=" border px-2 text-[16px] text-black border-black w-[80%] rounded-lg py-2"
          />
        </View>

        <View className=" flex px-3 gap-2">
          <TextInput
            placeholder="Enter your Age"
            placeholderTextColor={'black'}
            keyboardType="number-pad"
            onChangeText={(value) => {
              setage(value)
            }}
            className=" border text-[16px] px-2 text-black border-black w-[80%] rounded-lg py-2"
          />
        </View>

        <View className=" flex flex-row justify-between mt-2 px-3">
          <GenderCard sex="male" gender={gender} onSelect={setgender} />
          <GenderCard sex="female" gender={gender} onSelect={setgender} />
        </View>
        <View className=" flex px-3 gap-2">
          <View className="flex flex-row items-center justify-between">
            <Text className=" text-[18px] font-bold">Height (in cm)</Text>
            <TextInput
              keyboardType="numeric"
              className=" border w-[50%] text-[16px] px-2 py-2 rounded-lg text-black"
              value={String(height)}
            />
          </View>
          <Slider
            thumbTintColor="red"
            minimumTrackTintColor="red"
            onValueChange={(value) => {
              setheight(value)
            }}
            minimumValue={0}
            maximumValue={250}
            step={1}
            value={height}
          />
        </View>

        <View className=" flex px-3 gap-2">
          <View className="flex flex-row items-center justify-between">
            <Text className=" text-[18px] font-bold">Weight (in kg)</Text>
            <TextInput
              keyboardType="numeric"
              className=" border text-[16px] w-[50%] px-2 py-2 rounded-lg text-black"
              value={String(weight)}
            />
          </View>
          <Slider
            thumbTintColor="red"
            minimumTrackTintColor="red"
            onValueChange={(value) => {
              setweight(value)
            }}
            minimumValue={0}
            maximumValue={150}
            step={1}
            value={weight}
          />
        </View>

        <View className=' px-3'>
          <Dropdown
          className=' border border-black py-3 rounded-lg'
          placeholder='Select your activity level'
          data = {activityLevelArray}
          labelField={'label'}
          valueField={'value'}
          onChange={item=>{setactivityLevel(item)}}
          value={activityLevel}
          placeholderStyle={{
            paddingHorizontal:8,
            fontSize:18,
          }}
          selectedTextStyle={{
            paddingHorizontal:8,
            fontSize:18,
          }}
          />

        </View>
        
        <View className=' px-3' >
        <TextInput
        placeholder='Enter your goals'
        placeholderTextColor={'black'}
        className=' border border-black py-3 rounded-lg px-3 text-[18px]'
        onChangeText={(value)=>{setgoals(value)}}
        value={goals}
        />
        </View>
      </View>
      <TouchableOpacity
        onPress={submitForm}
        className="bg-black w-[15%] rounded-full flex items-center py-4 px-1 left-[80%] m-2"
      >
        <View>
          <Feather name="arrow-right" size={35} color="white" />
        </View>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default SignUp
