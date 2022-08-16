import React from 'react';
import {NativeBaseProvider, View} from 'native-base';
import HeaderSection from './Header/HeaderSection';
import ProgressSection from './Progress/ProgressSection';

export default function HomeScreen() {
  return (
    <NativeBaseProvider>
      <View width={'100%'} px={'32px'} mt="44px">
        <HeaderSection />
        <ProgressSection />
      </View>
    </NativeBaseProvider>
  );
}
