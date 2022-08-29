import React from 'react';
import {NativeBaseProvider, ScrollView} from 'native-base';
import HeaderMyClass from './Header/HeaderMyClass';
import ContinueClass from './ContinueClass/ContinueClass';
import {SafeAreaView} from 'react-native';

export default function MyClassScreen() {
  return (
    <NativeBaseProvider>
      <SafeAreaView>
        <ScrollView width={'100%'} px={'32px'} mt="24px">
          <HeaderMyClass />
          <ContinueClass />
        </ScrollView>
      </SafeAreaView>
    </NativeBaseProvider>
  );
}
