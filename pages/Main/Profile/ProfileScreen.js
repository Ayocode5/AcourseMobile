import React from 'react';
import {NativeBaseProvider, ScrollView} from 'native-base';
import HeaderProfile from './Header/HeaderProfile';
import AccountInfo from './AccountInfo/AccountInfo';
import MyClasses from './MyClasses/MyClasses';

export default function ProfileScreen() {
  return (
    <NativeBaseProvider>
      <ScrollView width={'100%'} px={'32px'} mt="24px">
        <HeaderProfile />
        <AccountInfo />
        <MyClasses />
      </ScrollView>
    </NativeBaseProvider>
  );
}
