import React from 'react';
import {Box, Text, Flex, Image, Progress} from 'native-base';
import colors from '../../../../assets/colors/colors';

export default function CardProgress({currentProgress, thumbClass, nameClass}) {
  return (
    <Box
      alignItems={'center'}
      width={'192px'}
      overflow="hidden"
      borderRadius="24px"
      backgroundColor={colors.white}
      mr="16px">
      <Image
        style={{width: '100%', height: 128}}
        alt="course thumb"
        source={thumbClass}
      />
      <Box mt={'12px'} mb={'24px'} mx={'24px'}>
        <Text color={colors.black} fontWeight={500} fontSize="14px">
          {nameClass}
        </Text>

        <Flex
          flexDirection={'row'}
          justify={'space-between'}
          mt={'8px'}
          alignItems={'center'}>
          <Progress w={'80%'} bg={colors.lightBlue} value={currentProgress} />
          <Text
            color={colors.black}
            fontWeight={500}
            fontSize="10px"
            mb={0}
            pb={0}>
            {currentProgress}%
          </Text>
        </Flex>
      </Box>
    </Box>
  );
}
