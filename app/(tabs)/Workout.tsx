import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect,useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {exerciseOptions, fetchData} from '@/assets/utils/fetchData'

interface Exercise {
    bodyPart: string;
    equipment: string;
    gifUrl: string;
    id: string;
    name: string;
    target: string;
    secondaryMuscles: string[];
    instructions: string[];
}

const Workout = () => {

    const [ExerciseData,setExerciseData] = useState<Exercise[] | null>(null);
   

    const fetching = async () => {
        const data = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=10&offset=0', exerciseOptions);
        setExerciseData(data);
        console.log("this is the exercise data",ExerciseData)
    };

    useEffect(() => {
        fetching();
    }, []);

  return (
    <ScrollView>
        <SafeAreaView>
        <View className=' flex flex-row justify-between border items-center border-black py-5 mx-8 rounded-[22px]'>
            <Text className=" text-lg font-medium px-3">Daily Workout Schedule</Text>
            <TouchableOpacity className = ' border border-black px-5 py-3 rounded-full mx-2'>
                <Text>Check</Text>
            </TouchableOpacity>
        </View>
        </SafeAreaView>
    </ScrollView>
  )
}

export default Workout
