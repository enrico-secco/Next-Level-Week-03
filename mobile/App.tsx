import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { useFonts } from 'expo-font';
import {Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold} from '@expo-google-fonts/nunito'

import Routes from './src/routes'

export default function App() {

  const [fontsLoaded] = useFonts({ /*fontsLoaded vai retornar true ou false, se elas foram carregadas ou não */
    Nunito_600SemiBold, 
    Nunito_700Bold,
    Nunito_800ExtraBold,
    /* nunito700: nunito_700Bold -> criação de "atalho" */
  })

  if(!fontsLoaded){
    return null;
  }

  return (
    <Routes />
  )
}


