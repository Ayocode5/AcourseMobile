import React from 'react';
import {Flex, Text, Image, View, Spacer} from 'native-base';
import colors from '../../../../assets/colors/colors';

export default function HeaderSection() {
  return (
    <View marginTop={'36px'}>
      <Flex
        flexDirection={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}>
        <Flex flexDirection={'row'}>
          <Image
            alt="profile"
            source={require('../../../../assets/images/profile_pic.png')}
            size="48px"
            style={{borderRadius: 24}}
          />
          <View ml="16px">
            <Text fontSize="12px" bold color={colors.lightGrey}>
              Welcome Back,
            </Text>
            <Text fontSize="18px" fontWeight={500} color={colors.black}>
              Robert Fox
            </Text>
          </View>
        </Flex>

        <Image
          alt="search"
          source={require('../../../../assets/icons/ic_search.png')}
          size="16px"
        />
      </Flex>
    </View>
  );
}
