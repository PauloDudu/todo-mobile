import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Login from './src/pages/Login';

export default function App() {
  return (
    <SafeAreaProvider style={{paddingTop: 24}}>
      <StatusBar style="dark" backgroundColor="#F0F0F5" />
      <Login />
    </SafeAreaProvider>
  );
}
