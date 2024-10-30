import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { MotiView } from 'moti';


const OnboardingScreen = () => {
  const router = useRouter();

  return (
    <View className="flex-1 items-center justify-center bg-white p-6">
      {/* Animated Currency Icons */}
      <View className="flex-row space-x-4 mb-10">
        <MotiView
          from={{ translateY: -10 }}
          animate={{ translateY: 10 }}
          transition={{
            type: 'timing',
            duration: 1000,
            loop: true,
          }}
        >
          <Text className="text-4xl">💵</Text>
        </MotiView>
        <MotiView
          from={{ translateY: -10 }}
          animate={{ translateY: 10 }}
          transition={{
            type: 'timing',
            duration: 1200,
            loop: true,
          }}
        >
          <Text className="text-4xl">💶</Text>
        </MotiView>
        <MotiView
          from={{ translateY: -10 }}
          animate={{ translateY: 10 }}
          transition={{
            type: 'timing',
            duration: 1400,
            loop: true,
          }}
        >
          <Text className="text-4xl">💷</Text>
        </MotiView>
        <MotiView
          from={{ translateY: -10 }}
          animate={{ translateY: 10 }}
          transition={{
            type: 'timing',
            duration: 1600,
            loop: true,
          }}
        >
          <Text className="text-4xl">💴</Text>
        </MotiView>
      </View>

      {/* Heading and Description */}
      <Text className="text-3xl font-bold mb-4 text-center">Welcome to Exchango!</Text>
      <Text className="text-lg text-gray-500 text-center mb-10">
        Your reliable currency converter, anytime, anywhere.
      </Text>

      {/* Get Started Button */}
      <TouchableOpacity
        onPress={() => router.push("/home")}
         className="bg-blue-500 py-4 rounded-lg items-center w-full"
      >
        <Text className="text-white text-lg font-semibold">Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OnboardingScreen;
