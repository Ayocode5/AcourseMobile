import React, {Component} from 'react';
import {NativeBaseProvider, Text, Box} from 'native-base';
import LoginScreen from './Auth/LoginScreen';
import MainScreen from './Main/MainScreen';

export default class LaunchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      component: (
        <NativeBaseProvider>
          <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
            <Text fontSize="5xl" bold>
              ACourse
            </Text>
          </Box>
        </NativeBaseProvider>
      ),
    };
  }

  componentDidMount() {
    this.timeoutHandle = setTimeout(() => {
      // this.setState({component: <LoginScreen />});
      this.setState({component: <MainScreen />});
    }, 3000);
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutHandle);
  }

  render() {
    return this.state.component;
  }
}
