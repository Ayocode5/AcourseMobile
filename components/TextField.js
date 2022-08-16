import React from 'react';
import {Box, VStack, Text, Input} from 'native-base';

export default function TextField({
  fieldName,
  placeholder,
  type,
  txt,
  inputValue,
  isAlert,
}) {
  return (
    <Box mt="2">
      <VStack>
        <Text fontSize="md" mb="3">
          {fieldName}
        </Text>
        <Input
          variant="outline"
          type={type}
          placeholder={placeholder}
          bg="#fff"
          borderRadius="xl"
          value={txt}
          onChangeText={inputValue}
        />
        <Text color="red.900">
          {isAlert ? `${fieldName} is required!` : ''}
        </Text>
      </VStack>
    </Box>
  );
}
