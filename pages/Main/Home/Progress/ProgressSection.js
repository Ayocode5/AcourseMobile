import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Flex, Text, Pressable, ScrollView} from 'native-base';
import colors from '../../../../assets/colors/colors';
import CardProgress from './CardProgress';

export default function ProgressSection() {
  const navigation = useNavigation();

  return (
    <View mt="32px">
      <Flex flexDirection={'row'} justify={'space-between'}>
        <Text color={colors.black} fontWeight={500} fontSize="16px">
          Your Progress
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

      <ScrollView horizontal={true} maxW="600" paddingBottom="8px" mt="11px">
        <CardProgress
          key={1}
          nameClass="Graphic Design for Intermediate"
          currentProgress={75}
          thumbClass={require('../../../../assets/images/course_1.png')}
        />

        <CardProgress
          key={2}
          nameClass="Javascript For Beginner"
          currentProgress={55}
          thumbClass={require('../../../../assets/images/course_2.png')}
        />

        <CardProgress
          key={3}
          nameClass="React JS for Beginner"
          currentProgress={75}
          thumbClass={require('../../../../assets/images/course_3.png')}
        />

        <CardProgress
          key={4}
          nameClass="React Native for Beginner"
          currentProgress={75}
          thumbClass={require('../../../../assets/images/course_4.png')}
        />
      </ScrollView>
    </View>
  );
}
