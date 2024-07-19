import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native'
import GenderCard from '@/components/GenderCard'
import Slider from '@react-native-community/slider'

const SignUp = () => {
  const [name, setname] = useState<String>('')
  const [email, setemail] = useState<String>('')
  const [password, setpassword] = useState('')
  const [age, setage] = useState<Number>()
  const [height, setheight] = useState(0)
  const [weight, setweight] = useState(0)
  const [gender, setgender] = useState(null)
  return (
    <ScrollView className=" flex-1 flex-col bg-white">
      <SafeAreaView className=" px-3">
        <Text className=" text-[38px] ">Give us some basic information</Text>
      </SafeAreaView>

      {/* Form View */}
      <View className=" flex flex-col gap-3">
        <View className=" flex px-3 gap-2">
          <Text className=" text-[26px] font-bold">Name</Text>
          <TextInput
            keyboardType="default"
            onChangeText={(value) => {
              setname(value)
            }}
            className=" border px-2 border-black w-[80%] rounded-md py-2"
          />
        </View>

        <View className=" flex px-3 gap-2">
          <Text className=" text-[26px] font-bold">Email</Text>
          <TextInput
            keyboardType="default"
            onChangeText={(value) => {
              setemail(value)
            }}
            className=" border px-2 border-black w-[80%] rounded-md py-2"
          />
        </View>

        <View className=" flex px-3 gap-2">
          <Text className=" text-[26px] font-bold">Password</Text>
          <TextInput
            keyboardType="visible-password"
            onChangeText={(value) => {
              setpassword(value)
            }}
            className=" border px-2 border-black w-[80%] rounded-md py-2"
          />
        </View>

        <View className=" flex px-3 gap-2">
          <Text className=" text-[26px] font-bold">Age</Text>
          <TextInput
            keyboardType="number-pad"
            onChangeText={(value) => {
              setage(value)
            }}
            className=" border px-2 border-black w-[80%] rounded-md py-2"
          />
        </View>

        <View className=" flex flex-row justify-between mt-2 px-3">
          <GenderCard sex="male" />
          <GenderCard sex="female" />
        </View>
        <View className=" flex px-3 gap-2">
          <View className="flex flex-row items-center justify-between">
            <Text className=" text-[26px] font-bold">Height (in cm)</Text>
            <TextInput
            keyboardType='numeric'
              className=" border w-[50%] px-2 rounded-md"
              value={String(height)}
            />
          </View>
          <Slider
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
            <Text className=" text-[26px] font-bold">Weight (in kg)</Text>
            <TextInput
            keyboardType='numeric'
              className=" border w-[50%] px-2 rounded-md"
              value={String(weight)}
            />
          </View>
          <Slider
            onValueChange={(value) => {
              setweight(value)
            }}
            minimumValue={0}
            maximumValue={150}
            step={1}
            value={weight}
          />
        </View>
      </View>
    </ScrollView>
  )
}

export default SignUp
