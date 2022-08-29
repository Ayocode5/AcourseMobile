import {View, VStack} from 'native-base';
import React from 'react';
import CardCartItems from './CardCartItems';

export default function CartItems() {
  return (
    <View>
      <VStack marginTop={'27px'}>
        <CardCartItems
          key={1}
          category="Design"
          nameClass="Graphic Design for Intermediate"
          duration="1h 43m"
          lessons="10"
          price="25.00"
          thumbClass={require('../../../../assets/images/course_1.png')}
        />
        <CardCartItems
          key={2}
          category="Development"
          nameClass="Javascript For Beginner"
          duration="1h 25m"
          lessons="8"
          price="18.00"
          thumbClass={require('../../../../assets/images/course_2.png')}
        />
      </VStack>
    </View>
  );
}
