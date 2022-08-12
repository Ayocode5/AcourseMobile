import React, {useState} from 'react';
import {
  NativeBaseProvider,
  Text,
  Box,
  VStack,
  Button,
  Spacer,
  HStack,
  Pressable,
  ScrollView,
} from 'native-base';
import {useNavigation} from '@react-navigation/native';

import TextField from '../../components/TextField';
import colors from '../../assets/colors/colors';

export default function SignUpScreen() {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [pwd, setPwd] = useState('');
  const [conPwd, setConPwd] = useState('');

  const [isAlertName, setAlertName] = useState(false);
  const [isAlertEmail, setAlertEmail] = useState(false);
  const [isAlertPhone, setAlertPhone] = useState(false);
  const [isAlertPwd, setAlertPwd] = useState(false);
  const [isAlertConPwd, setAlertConPwd] = useState(false);

  function onPress() {
    console.log(`cek name: ${name}`);
    console.log(`cek email: ${email}`);
    console.log(`cek phone: ${phone}`);
    console.log(`cek password: ${pwd}`);
    console.log(`cek confirm password: ${conPwd}`);

    if (!name.trim()) {
      setAlertName(true);
    } else {
      setAlertName(false);
    }
    if (!email.trim()) {
      setAlertEmail(true);
    } else {
      setAlertEmail(false);
    }
    if (!phone.trim()) {
      setAlertPhone(true);
    } else {
      setAlertPhone(false);
    }
    if (!pwd.trim()) {
      setAlertPwd(true);
    } else {
      setAlertPwd(false);
    }
    if (!conPwd.trim()) {
      setAlertConPwd(true);
    } else {
      setAlertConPwd(false);
    }
    if (
      name.trim() &&
      email.trim() &&
      phone.trim() &&
      pwd.trim() &&
      conPwd.trim()
    ) {
      setAlertName(false);
      setAlertEmail(false);
      setAlertPhone(false);
      setAlertPwd(false);
      setAlertConPwd(false);
      navigation.reset({index: 0, routes: [{name: 'MainScreen'}]});
    }
  }

  return (
    <NativeBaseProvider>
      <ScrollView>
        <Box flex={1} bg={colors.background} safeArea>
          <VStack my="6" mx="8" height="full">
            <Box alignItems="center" justifyContent="center">
              <Text fontSize="xl" bold>
                Sign Up
              </Text>
            </Box>

            <TextField
              fieldName="Full Name"
              placeholder="Input Your Full Name..."
              type="text"
              txt={name}
              inputValue={name => setName(name)}
              isAlert={isAlertName}
            />

            <TextField
              fieldName="Email"
              placeholder="Input Your Email..."
              type="text"
              txt={email}
              inputValue={email => setEmail(email)}
              isAlert={isAlertEmail}
            />

            <TextField
              fieldName="Phone Number"
              placeholder="Input Your Phone Number..."
              type="text"
              txt={phone}
              inputValue={phone => setPhone(phone)}
              isAlert={isAlertPhone}
            />

            <TextField
              fieldName="Password"
              placeholder="Input Your Password..."
              type="password"
              txt={pwd}
              inputValue={pwd => setPwd(pwd)}
              isAlert={isAlertPwd}
            />

            <TextField
              fieldName="Confirm Password"
              placeholder="Input Your Confirm Password..."
              type="password"
              txt={conPwd}
              inputValue={conPwd => setConPwd(conPwd)}
              isAlert={isAlertConPwd}
            />

            <Box mt="6">
              <Button
                onPress={onPress}
                backgroundColor={colors.blue}
                size="lg"
                rounded="2xl">
                Sign Up
              </Button>
            </Box>

            <Spacer />

            <Box alignItems="center" justifyContent="center" mb="12">
              <HStack>
                <Text mr="1">Already have an account?</Text>
                <Pressable onPress={() => navigation.goBack()}>
                  <Text color={colors.blue} bold>
                    Login
                  </Text>
                </Pressable>
              </HStack>
            </Box>
          </VStack>
        </Box>
      </ScrollView>
    </NativeBaseProvider>
  );
}
