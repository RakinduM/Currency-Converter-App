import { View, Text } from "react-native";
import React from "react";
import { Slot } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import "@/global.css";
import { CurrencyProvider } from "./context/CurrencyContext";
import { ThemeProvider } from "./context/ThemeContext";

const RootLayout = () => {
  return (
    <ThemeProvider>
      <CurrencyProvider>
        <Slot />
      </CurrencyProvider>
    </ThemeProvider>
  );
};

export default RootLayout;
