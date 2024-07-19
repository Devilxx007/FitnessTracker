import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';

interface props{
    sex:string
}

const GenderCard = ({sex}:props) => {
  return (
    <TouchableOpacity className=' border border-black'>
      <View className=' flex flex-col gap-3 items-center px-8 py-3'>
      <FontAwesome5 name={`${sex}`} size={50} color="black" />
      <Text className='uppercase font-bold text-[25px]'>{sex}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default GenderCard