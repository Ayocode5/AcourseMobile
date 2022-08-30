import React from 'react';
import {View, Text, VStack} from 'native-base';
import IcCheck from '../../../../assets/icons/ic_check.png';
import IcProfile from '../../../../assets/images/profile_pic.png';
import colors from '../../../../assets/colors/colors';
import NotificationTile from './NotificationTile';

export default function AllNotification() {
  return (
    <View marginTop={'32px'}>
      <Text fontSize="16px" fontWeight={500} color={colors.black}>
        All Notification
      </Text>
      <VStack marginTop={'16px'} space={'12px'}>
        <NotificationTile
          key={1}
          image={IcCheck}
          content={
            'Thankyou! Your payment for the "UX Design: Design Thinking" class was successful. Enjoy the class!'
          }
          timestamp={'1m'}
        />
        <NotificationTile
          key={2}
          image={IcProfile}
          content={
            "Cody Fisher replied to your comment “Thank you for joining this class if you feel you do not understand the lesson presented, do not hesitate to ask questions. I'll help you. Have a nice day!”"
          }
          timestamp={'25m'}
        />
        <NotificationTile
          key={3}
          image={IcCheck}
          content={
            "The project for the “Javascript for Beginner” class has been successfully uploaded. Don't forget to do it!"
          }
          timestamp={'2h'}
        />
        <NotificationTile
          key={4}
          image={IcCheck}
          content={
            'Your project for the "UI Design: Design System" class has been uploaded successfully.'
          }
          timestamp={'1d'}
        />
        <NotificationTile
          key={5}
          image={IcCheck}
          content={
            'Your project for the "Figma: Create UI Component" class has been uploaded successfully.'
          }
          timestamp={'1d'}
        />
      </VStack>
    </View>
  );
}
