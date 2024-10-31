import React from "react";
import { Stack } from "expo-router";
import "@/global.css";
import { CurrencyProvider } from "./context/CurrencyContext";
import { ThemeProvider } from "./context/ThemeContext";

const RootLayout = () => {
  return (
    <ThemeProvider>
      <CurrencyProvider>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="home" options={{ headerShown: false }} />
        </Stack>
      </CurrencyProvider>
    </ThemeProvider>
  );
};

export default RootLayout;
