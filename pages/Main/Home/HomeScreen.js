import React from 'react';
import {NativeBaseProvider, View, ScrollView} from 'native-base';
import HeaderSection from './Header/HeaderSection';
import ProgressSection from './Progress/ProgressSection';
import PopularClass from './PopularClass/PopularClass';
import {SafeAreaView} from 'react-native';

export default function HomeScreen() {
  return (
    <NativeBaseProvider>
      <SafeAreaView>
        <ScrollView width={'100%'} px={'32px'} mt="44px">
          <HeaderSection />
          <ProgressSection />
          <PopularClass />
        </ScrollView>
      </SafeAreaView>
    </NativeBaseProvider>
  );
}
