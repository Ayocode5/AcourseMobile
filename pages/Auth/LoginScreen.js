import React, {useState} from 'react';
import {
  NativeBaseProvider,
  Text,
  Box,
  VStack,
  Alert,
  Button,
  Spacer,
  HStack,
  Pressable,
} from 'native-base';
import {useNavigation} from '@react-navigation/native';

import TextField from '../../components/TextField';
import colors from '../../assets/colors/colors';

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [isAlertEmail, setAlertEmail] = useState(false);
  const [isAlertPwd, setAlertPwd] = useState(false);

  function onPress() {
    console.log(`cek email: ${email}`);
    console.log(`cek password: ${pwd}`);

    if (!email.trim()) {
      setAlertEmail(true);
    } else {
      setAlertEmail(false);
    }
    if (!pwd.trim()) {
      setAlertPwd(true);
    } else {
      setAlertPwd(false);
    }
    if (email.trim() && pwd.trim()) {
      setAlertEmail(false);
      setAlertPwd(false);
      navigation.reset({index: 0, routes: [{name: 'MainScreen'}]});
    }
  }

  return (
    <NativeBaseProvider>
      <Box flex={1} bg={colors.background} safeArea>
        <VStack my="6" mx="8" height="full">
          <Box alignItems="center" justifyContent="center">
            <Text fontSize="xl" bold>
              Login
            </Text>
          </Box>

          <TextField
            fieldName="Email"
            placeholder="Input Your Email..."
            type="text"
            txt={email}
            inputValue={email => setEmail(email)}
            isAlert={isAlertEmail}
          />

          <TextField
            fieldName="Password"
            placeholder="Input Your Password..."
            type="password"
            txt={pwd}
            inputValue={pwd => setPwd(pwd)}
            isAlert={isAlertPwd}
          />

          <Box mt="8">
            <Button
              onPress={onPress}
              backgroundColor={colors.blue}
              size="lg"
              rounded="2xl">
              Login
            </Button>
          </Box>

          <Spacer />

          <Box alignItems="center" justifyContent="center" mb="12">
            <HStack>
              <Text mr="1">Don’t have an account?</Text>
              <Pressable onPress={() => navigation.push('SignUpScreen')}>
                <Text color={colors.blue} bold>
                  Sign Up
                </Text>
              </Pressable>
            </HStack>
          </Box>
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
}
