import React from 'react';
import {View, Text, Flex, Pressable} from 'native-base';
import colors from '../../../../assets/colors/colors';
import {useNavigation} from '@react-navigation/native';
import CardPopularClass from './CardPopularClass';

export default function PopularClass() {
  const navigation = useNavigation();

  return (
    <View mt="29px">
      <Flex flexDirection={'row'} justify={'space-between'}>
        <Text color={colors.black} fontWeight={500} fontSize="16px">
          Popular Class
        </Text>
        <Pressable onPress={() => navigation.push('Progress')}>
          <Text
            onPress={() => navigation.navigate('Profile')}
            color={colors.blue}
            fontWeight={500}
            fontSize="12px">
            See All
          </Text>
        </Pressable>
      </Flex>

      <CardPopularClass
        category="Design"
        nameClass="UX Design: Design Thinking"
        duration="1h 43m"
        lessons="10"
        price="25.00"
        thumbClass={require('../../../../assets/images/course_1.png')}
      />
    </View>
  );
}
