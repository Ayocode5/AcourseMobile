import React from 'react';
import {View, Text, Flex, Pressable} from 'native-base';
import colors from '../../../../assets/colors/colors';
import {useNavigation} from '@react-navigation/native';
import CardPopularClass from './CardPopularClass';

export default function PopularClass() {
  const navigation = useNavigation();

  return (
    <View mt="29px">
      <Flex flexDirection={'row'} justify={'space-between'} mb={'11px'}>
        <Text color={colors.black} fontWeight={500} fontSize="16px">
          Popular Class
        </Text>
        <Pressable onPress={() => navigation.push('ProfileScreen')}>
          <Text color={colors.blue} fontWeight={500} fontSize="12px">
            See All
          </Text>
        </Pressable>
      </Flex>

      <CardPopularClass
        key={1}
        category="Design"
        nameClass="UX Design: Design Thinking"
        duration="1h 43m"
        lessons="10"
        price="25.00"
        thumbClass={require('../../../../assets/images/course_3.png')}
      />

      <CardPopularClass
        key={2}
        category="Development"
        nameClass="Swift Introduction for iOS App Development"
        duration="1h 43m"
        lessons="10"
        price="25.00"
        thumbClass={require('../../../../assets/images/course_2.png')}
      />
    </View>
  );
}
