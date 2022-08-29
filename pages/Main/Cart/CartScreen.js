import React from 'react';
import {NativeBaseProvider, ScrollView, View} from 'native-base';
import HeaderCart from './Header/HeaderCart';
import CartItems from './CartItems/CartItems';
import FooterCart from './Footer/FooterCart';

export default function CartScreen() {
  return (
    <NativeBaseProvider>
      <ScrollView width={'100%'} px={'32px'} mt="24px">
        <HeaderCart />
        <CartItems />
      </ScrollView>
      <View mx={'32px'} my={'20px'}>
        <FooterCart />
      </View>
    </NativeBaseProvider>
  );
}
