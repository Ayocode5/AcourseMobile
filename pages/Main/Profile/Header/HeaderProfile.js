import React from 'react';
import {View, Text, HStack, Pressable, Image} from 'native-base';
import colors from '../../../../assets/colors/colors';
import IcSettings from '../../../../assets/icons/ic_gear.png';

export default function HeaderProfile() {
  return (
    <View>
      <HStack alignItems={'center'} justifyContent={'space-between'}>
        <View />
        <Text
          fontSize="18px"
          fontWeight={500}
          color={colors.black}
          textAlign={'center'}>
          Profile
        </Text>

        <Pressable onPress={() => console.log('pressed!')}>
          <Image alt="icSettings" source={IcSettings} size={'18px'} />
        </Pressable>
      </HStack>
    </View>
  );
}
