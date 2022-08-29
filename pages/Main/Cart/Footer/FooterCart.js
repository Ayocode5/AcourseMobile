import React from 'react';
import {HStack, View, Text, VStack, Box, Button, Spacer} from 'native-base';
import colors from '../../../../assets/colors/colors';

export default function FooterCart() {
  return (
    <View>
      <HStack>
        <VStack>
          <Text fontSize="14px" fontWeight={400} color={colors.black}>
            Total
          </Text>
          <HStack>
            <Text
              fontSize="10px"
              fontWeight={500}
              mr={'4px'}
              style={{alignSelf: 'flex-start'}}
              color={colors.black}>
              $
            </Text>
            <Text fontSize="18px" fontWeight={500} color={colors.black}>
              43.00
            </Text>
          </HStack>
        </VStack>

        <Spacer />

        <Box width={'168px'}>
          <Button
            onPress={() => console.log('pressed!')}
            backgroundColor={colors.blue}
            size="lg"
            rounded="2xl">
            Checkout
          </Button>
        </Box>
      </HStack>
    </View>
  );
}
