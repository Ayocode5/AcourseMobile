import React from 'react';
import {HStack, Text, View, VStack, Image, Center} from 'native-base';
import IcOnProgress from '../../../../assets/icons/ic_onProgress.png';
import IcSuccessful from '../../../../assets/icons/ic_check.png';
import colors from '../../../../assets/colors/colors';

export default function HeaderMyClass() {
  return (
    <View>
      <Text
        fontSize="18px"
        fontWeight={500}
        color={colors.black}
        textAlign={'center'}>
        My Class
      </Text>

      <HStack
        space={'4'}
        display={'flex'}
        justifyContent={'center'}
        marginTop={'24px'}>
        {/* On Progress */}
        <View
          width={155}
          height={81}
          rounded={'2xl'}
          backgroundColor={colors.white}>
          <Center height={'full'}>
            <HStack space={'12px'}>
              <Image
                alt="icOnProgress"
                source={IcOnProgress}
                width={'24px'}
                height={'24px'}
              />
              <VStack>
                <Text fontSize="18px" fontWeight={500} color={colors.blue}>
                  3
                </Text>
                <Text fontSize="12px" fontWeight={400} color={colors.blue}>
                  On Progress
                </Text>
              </VStack>
            </HStack>
          </Center>
        </View>
        {/* Successful */}
        <View
          width={155}
          height={81}
          rounded={'2xl'}
          backgroundColor={colors.white}>
          <Center height={'full'}>
            <HStack space={'12px'}>
              <Image
                alt="icSuccessful"
                source={IcSuccessful}
                width={'24px'}
                height={'24px'}
              />
              <VStack>
                <Text
                  fontSize="18px"
                  fontWeight={500}
                  color={colors.lightGreen}>
                  6
                </Text>
                <Text
                  fontSize="12px"
                  fontWeight={400}
                  color={colors.lightGreen}>
                  Successful
                </Text>
              </VStack>
            </HStack>
          </Center>
        </View>
      </HStack>
    </View>
  );
}
