import React from 'react';
import {NativeBaseProvider, ScrollView} from 'native-base';
import HeaderMyClass from './Header/HeaderMyClass';
import ContinueClass from './ContinueClass/ContinueClass';

export default function MyClassScreen() {
  return (
    <NativeBaseProvider>
      <ScrollView width={'100%'} px={'32px'} mt="24px">
        <HeaderMyClass />
        <ContinueClass />
      </ScrollView>
    </NativeBaseProvider>
  );
}
