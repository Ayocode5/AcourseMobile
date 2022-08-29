import React from 'react';
import {View, Text, VStack, HStack, Image} from 'native-base';
import colors from '../../../../assets/colors/colors';
import IcDownload from '../../../../assets/icons/ic_download.png';
import IcSaved from '../../../../assets/icons/ic_saved.png';
import IcHistory from '../../../../assets/icons/ic_history.png';
import IcArrowRight from '../../../../assets/icons/ic_arrow_right.png';

export default function MyClasses() {
  return (
    <View>
      <Text
        fontSize="18px"
        fontWeight={500}
        color={colors.black}
        marginBottom={'30px'}>
        My Classes
      </Text>

      <VStack space={'24px'}>
        {/* Downloaded Class */}
        <HStack alignItems={'center'} justifyContent={'space-between'}>
          <HStack alignItems={'center'} space={'17px'}>
            <Image alt="icDownload" source={IcDownload} size={'24px'} />
            <VStack>
              <Text fontSize="16px" fontWeight={500} color={colors.black}>
                Downloaded Class
              </Text>
              <Text fontSize="14px" fontWeight={400} color={colors.lightGrey}>
                4 Class
              </Text>
            </VStack>
          </HStack>
          <Image alt="icArrowRight" source={IcArrowRight} size={'16px'} />
        </HStack>

        {/* Saved Class */}
        <HStack alignItems={'center'} justifyContent={'space-between'}>
          <HStack alignItems={'center'} space={'17px'}>
            <Image alt="icSaved" source={IcSaved} size={'24px'} />
            <VStack>
              <Text fontSize="16px" fontWeight={500} color={colors.black}>
                Saved Class
              </Text>
              <Text fontSize="14px" fontWeight={400} color={colors.lightGrey}>
                8 Class
              </Text>
            </VStack>
          </HStack>
          <Image alt="icArrowRight" source={IcArrowRight} size={'16px'} />
        </HStack>

        {/* Watch History */}
        <HStack alignItems={'center'} justifyContent={'space-between'}>
          <HStack alignItems={'center'} space={'17px'}>
            <Image alt="icHistory" source={IcHistory} size={'24px'} />
            <VStack>
              <Text fontSize="16px" fontWeight={500} color={colors.black}>
                Watch History
              </Text>
              <Text fontSize="14px" fontWeight={400} color={colors.lightGrey}>
                3 Class
              </Text>
            </VStack>
          </HStack>
          <Image alt="icArrowRight" source={IcArrowRight} size={'16px'} />
        </HStack>
      </VStack>
    </View>
  );
}
