import { View, Text } from "react-native";
import React from "react";
import { Slot } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import "@/global.css";
import { CurrencyProvider } from "./context/CurrencyContext";

const RootLayout = () => {
  return (
    <CurrencyProvider>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <Slot />
        </SafeAreaView>
      </SafeAreaProvider>
    </CurrencyProvider>
  );
};

export default RootLayout;
