import React from 'react';
import {View, Text, HStack, Pressable} from 'native-base';
import colors from '../../../../assets/colors/colors';

export default function HeaderCart() {
  return (
    <View marginTop={'24px'}>
      <HStack alignItems={'center'} justifyContent={'space-between'}>
        <View />
        <Text
          fontSize="18px"
          fontWeight={500}
          color={colors.black}
          textAlign={'center'}>
          My Cart
        </Text>

        <Pressable onPress={() => console.log('pressed!')}>
          <Text
            fontSize="16px"
            fontWeight={500}
            color={colors.blue}
            textAlign={'center'}>
            Edit
          </Text>
        </Pressable>
      </HStack>
    </View>
  );
}
