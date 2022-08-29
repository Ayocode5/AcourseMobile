/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, Image, Flex, Box, Spacer, Progress} from 'native-base';
import colors from '../../../../assets/colors/colors';

export default function CardContinueClass({
  category,
  nameClass,
  thumbClass,
  noOfClassDone,
  noOfClassTotal,
  currentProgress,
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
          maxWidth="180px"
          marginY={'5px'}>
          {nameClass}
        </Text>
        <Flex
          flexDirection={'row'}
          justifyContent={'flex-start'}
          alignItems={'center'}>
          <Text fontSize="10px" fontWeight={400} color={colors.lightGrey}>
            {noOfClassDone}
          </Text>
          <Text
            fontSize="10px"
            fontWeight={400}
            color={colors.lightGrey}
            marginX={'2px'}>
            of
          </Text>
          <Text fontSize="10px" fontWeight={400} color={colors.lightGrey}>
            {noOfClassTotal} Lessons
          </Text>
        </Flex>

        <Spacer />

        <Flex flexDirection={'row'} alignItems={'center'}>
          <Progress
            w={'65%'}
            bg={colors.lightBlue}
            value={currentProgress}
            _filledTrack={{
              bg: '#4279EE',
            }}
          />
          <Text
            color={colors.black}
            fontWeight={500}
            fontSize="10px"
            marginLeft={'8px'}
            mb={0}
            pb={0}>
            {currentProgress}%
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
}
