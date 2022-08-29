/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image, Flex, Box, Spacer} from 'native-base';
import colors from '../../../../assets/colors/colors';
import {Pressable} from 'react-native';

export default function CardPopularClass({
  category,
  nameClass,
  thumbClass,
  duration,
  lessons,
  price,
}) {
  return (
    <Flex
      mb={'14px'}
      flexDirection={'row'}
      backgroundColor={colors.white}
      overflow="hidden"
      borderRadius="16px">
      <Image
        alt="course thumb"
        source={thumbClass}
        style={{width: 128, height: 162, resizeMode: 'cover'}}
      />
      <Box mx="16px" mt="24px" mb="25.5px">
        <Text fontSize="10px" fontWeight={500} color={colors.blue}>
          {category}
        </Text>
        <Text
          fontSize="14px"
          fontWeight={500}
          color={colors.black}
          numberOfLines={2}
          maxWidth="180px">
          {nameClass}
        </Text>
        <Flex
          flexDirection={'row'}
          justifyContent={'flex-start'}
          alignItems={'center'}>
          <Text fontSize="10px" fontWeight={400} color={colors.lightGrey}>
            {duration}
          </Text>
          <View
            width={'3px'}
            height={'3px'}
            backgroundColor={colors.lightGrey}
            borderRadius={24}
            mx={'8px'}
          />
          <Text fontSize="10px" fontWeight={400} color={colors.lightGrey}>
            {lessons} Lessons
          </Text>
        </Flex>

        <Spacer />

        <Flex
          mt="17.5px"
          flexDirection={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}>
          <Flex flexDirection={'row'} justifyContent={'flex-start'}>
            <Text
              fontSize="10px"
              fontWeight={500}
              mr={'4px'}
              style={{alignSelf: 'flex-start'}}
              color={colors.blue}>
              $
            </Text>
            <Text
              fontSize="14px"
              fontWeight={500}
              style={{alignSelf: 'flex-start'}}
              color={colors.blue}>
              {price}
            </Text>
          </Flex>

          <Pressable onPress={() => console.log('pressed')}>
            <Image
              alt="bookmark"
              width={'14px'}
              height={'18px'}
              source={require('../../../../assets/icons/ic_bookmark.png')}
            />
          </Pressable>
        </Flex>
      </Box>
    </Flex>
  );
}
