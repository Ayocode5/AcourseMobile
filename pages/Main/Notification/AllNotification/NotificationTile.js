import React from 'react';
import {View, Image, VStack, HStack, Text} from 'native-base';
import colors from '../../../../assets/colors/colors';

export default function NotificationTile({image, content, timestamp}) {
  return (
    <View>
      <HStack>
        <Image alt="icCheck" source={image} size={'32px'} />
        <VStack marginX={'24px'}>
          <Text fontSize="14px" fontWeight={400} color={colors.black}>
            {content}
          </Text>
          <Text
            fontSize="12px"
            fontWeight={400}
            color={colors.lightGrey}
            marginTop={'8px'}>
            {timestamp} ago
          </Text>
        </VStack>
      </HStack>
    </View>
  );
}
