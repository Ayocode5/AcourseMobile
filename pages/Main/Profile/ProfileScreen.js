import React from 'react';
import {NativeBaseProvider, ScrollView} from 'native-base';
import HeaderProfile from './Header/HeaderProfile';
import AccountInfo from './AccountInfo/AccountInfo';
import MyClasses from './MyClasses/MyClasses';
import {SafeAreaView} from 'react-native';

export default function ProfileScreen() {
  return (
    <NativeBaseProvider>
      <SafeAreaView>
        <ScrollView width={'100%'} height={'100%'} px={'32px'} mt="24px">
          <HeaderProfile />
          <AccountInfo />
          <MyClasses />
        </ScrollView>
      </SafeAreaView>
    </NativeBaseProvider>
  );
}
