import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useCurrency } from '@/app/context/CurrencyContext';
import { FontAwesome } from '@expo/vector-icons';
import currencyImg from '@/assets/images/currencyB.png'

const CurrencyConverterScreen = () => {
  const {
    baseCurrency,
    targetCurrency,
    convertedAmount,
    amount,
    exchangeRate,
    currencyList,
    setAmount,
    setBaseCurrency,
    setTargetCurrency,
    convertCurrency,
  } = useCurrency();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (currencyList.length > 0) {
      setLoading(false); // Set loading to false once currency list is loaded
    }
  }, [currencyList]);

  const handleConvert = async () => {
    setLoading(true);
    await convertCurrency();
    setLoading(false);
  };

  if (loading) {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View className="flex-1 items-center justify-center bg-white p-6">
      <Text className="text-2xl font-bold text-gray-800 mb-6">Currency Converter</Text>
      <Image
        source={currencyImg} // Replace with your icon path
        style={{ width: 300, height: 300, marginBottom: 16 }}
      />
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
          {currencyList.map((currency) => (
            <Picker.Item key={currency} label={currency} value={currency} />
          ))}
        </Picker>

        <FontAwesome name="exchange" size={24} color="gray" />

        <Picker
          selectedValue={targetCurrency}
          style={{ width: '40%' }}
          onValueChange={(value) => setTargetCurrency(value)}
        >
          {currencyList.map((currency) => (
            <Picker.Item key={currency} label={currency} value={currency} />
          ))}
        </Picker>
      </View>
      <Text className="text-2xl font-bold text-green-600 mb-6">Exchange Rate: {exchangeRate}</Text>
      <Text className="text-2xl font-bold text-green-600 mb-6">{convertedAmount}</Text>

      <TouchableOpacity
        onPress={handleConvert}
        className="bg-blue-500 py-4 rounded-lg items-center w-full"
      >
        <Text className="text-center text-white font-bold">Convert</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CurrencyConverterScreen;
