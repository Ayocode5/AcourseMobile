import React from 'react';
import {NativeBaseProvider, ScrollView, Text} from 'native-base';
import {SafeAreaView} from 'react-native';
import HeaderNotification from './Header/HeaderNotification';
import AllNotification from './AllNotification/AllNotification';

export default function NotificationScreen() {
  return (
    <NativeBaseProvider>
      <SafeAreaView>
        <ScrollView width={'100%'} height={'100%'} px={'32px'}>
          <HeaderNotification />
          <AllNotification />
        </ScrollView>
      </SafeAreaView>
    </NativeBaseProvider>
  );
}
