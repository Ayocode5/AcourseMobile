import React from 'react';
import {View, Text} from 'native-base';
import colors from '../../../../assets/colors/colors';

export default function HeaderNotification() {
  return (
    <View marginTop={'24px'}>
      <Text
        fontSize="18px"
        fontWeight={500}
        color={colors.black}
        textAlign={'center'}>
        Notification
      </Text>
    </View>
  );
}
