import React, { useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useCurrency } from '@/app/context/CurrencyContext';
import { FontAwesome } from '@expo/vector-icons';

const CurrencyConverterScreen = () => {
  const {
    baseCurrency,
    targetCurrency,
    convertedAmount,
    amount,
    setAmount,
    setBaseCurrency,
    setTargetCurrency,
    convertCurrency,
  } = useCurrency();

  useEffect(() => {
    convertCurrency();
  }, [amount, baseCurrency, targetCurrency]);

  return (
    <View className="flex-1 items-center justify-center bg-white p-6">
      <Text className="text-2xl font-bold text-gray-800 mb-6">Currency Converter</Text>

      {/* <Image
        source={require('../assets/currency-exchange-icon.png')} // Replace with your icon path
        style={{ width: 100, height: 100, marginBottom: 16 }}
      /> */}

      <Text className="self-start text-gray-600 mb-2">Amount</Text>
      <TextInput
        placeholder="Enter amount"
        keyboardType="numeric"
        value={amount}
        onChangeText={(value) => setAmount(value)}
        className="border border-gray-300 w-full p-3 mb-4 rounded text-center"
      />

      <View className="flex-row items-center justify-between w-full mb-4">
        <Picker
          selectedValue={baseCurrency}
          style={{ width: '40%' }}
          onValueChange={(value) => setBaseCurrency(value)}
        >
          <Picker.Item label="USD" value="USD" />
          <Picker.Item label="EUR" value="EUR" />
          {/* Add more currency options as needed */}
        </Picker>

        <FontAwesome name="exchange" size={24} color="gray" />

        <Picker
          selectedValue={targetCurrency}
          style={{ width: '40%' }}
          onValueChange={(value) => setTargetCurrency(value)}
        >
          <Picker.Item label="PKR" value="PKR" />
          <Picker.Item label="INR" value="INR" />
          {/* Add more currency options as needed */}
        </Picker>
      </View>

      {/* <Text className="text-gray-600 text-lg mb-2">Rate {conversionRate}</Text> */}
      <Text className="text-2xl font-bold text-green-600 mb-6">{convertedAmount}</Text>

      <TouchableOpacity
        onPress={convertCurrency}
        className="bg-blue-500 p-3 rounded w-full"
      >
        <Text className="text-center text-white font-semibold">Convert</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CurrencyConverterScreen;
