import "./src/styles/global.css";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import store, { persistor } from "./src/redux/store";
import { PersistGate } from 'redux-persist/integration/react';
import MainNavigation from './src/navigation/MainNavigation';
import { NativeBaseProvider} from "native-base";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar translucent />
        <NativeBaseProvider>
          <MainNavigation />
        </NativeBaseProvider>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});