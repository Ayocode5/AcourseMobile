import React from 'react';
import {View, Text} from 'native-base';
import colors from '../../../../assets/colors/colors';
import CardContinueClass from './CardContinueClass';

export default function ContinueClass() {
  return (
    <View>
      <Text
        fontSize="18px"
        fontWeight={500}
        color={colors.black}
        marginTop={'32px'}
        marginBottom={'16px'}>
        Continue Class
      </Text>

      <CardContinueClass
        key={1}
        category="Design"
        nameClass="Graphic Design for Intermediate"
        noOfClassDone="8"
        noOfClassTotal="10"
        currentProgress="75"
        thumbClass={require('../../../../assets/images/course_1.png')}
      />
      <CardContinueClass
        key={2}
        category="Development"
        nameClass="Javascript For Beginner"
        noOfClassDone="13"
        noOfClassTotal="15"
        currentProgress="90"
        thumbClass={require('../../../../assets/images/course_2.png')}
      />
      <CardContinueClass
        key={3}
        category="Design"
        nameClass="UX Design: Design Thinking"
        noOfClassDone="4"
        noOfClassTotal="8"
        currentProgress="50"
        thumbClass={require('../../../../assets/images/course_3.png')}
      />
    </View>
  );
}
