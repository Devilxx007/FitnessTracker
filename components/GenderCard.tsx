import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { RadioButton, TouchableRipple } from 'react-native-paper';
interface props{
    sex:string,
    gender: String,
    onSelect: (gender: string) => void;
}

const GenderCard = ({sex,gender,onSelect}:props) => {
  const [checked, setchecked] = useState('')
  const handlePress = () => {
    onSelect(gender === sex ? '' : sex);
  };
  return (
    <TouchableOpacity className=' border border-black flex flex-col items-end rounded-lg'>
      <RadioButton
      value={sex}
      status={gender === `${sex}` ? 'checked' : 'unchecked'}
      onPress={handlePress}
      color='red'
      uncheckedColor='black'
      />
      <View className=' flex flex-col gap-3 items-center px-8 py-3'>
      <FontAwesome5 name={`${sex}`} size={50} color="black" />
      <Text className='uppercase font-bold text-[25px]'>{sex}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default GenderCard