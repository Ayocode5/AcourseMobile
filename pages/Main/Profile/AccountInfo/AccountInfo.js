import React from 'react';
import {View, VStack, Image, Text, Pressable} from 'native-base';
import colors from '../../../../assets/colors/colors';

export default function AccountInfo() {
  return (
    <View marginY={'35px'}>
      <VStack alignItems={'center'}>
        <Image
          alt="profile"
          source={require('../../../../assets/images/profile_pic.png')}
          size="85px"
          style={{borderRadius: 24}}
          marginBottom={'16px'}
        />
        <Text fontSize="18px" fontWeight={500} color={colors.black}>
          Robert Fox
        </Text>
        <Pressable onPress={() => console.log('pressed!')}>
          <Text fontSize="12px" fontWeight={400} color={colors.blue}>
            View profile
          </Text>
        </Pressable>
      </VStack>
    </View>
  );
}
