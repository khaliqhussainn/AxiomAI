// import {Text, SafeAreaView} from 'react-native';
import React from 'react';
import AppNavigation from './src/navigation'
import { useEffect } from "react";
import SplashScreen from "./SplashScreen";
import { useState } from "react";



export default function App() {
  const [isShowSplash, setIsShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsShowSplash(false);
    }, 3000);
  });
  return (
    <>
      {
      isShowSplash ? ( <SplashScreen /> ) :
      (
        <AppNavigation/>
      )
    }
    </>
  );
}
