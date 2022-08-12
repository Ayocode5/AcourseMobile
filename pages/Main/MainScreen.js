import React from 'react';
import HomeScreen from './HomeScreen';
import MyClassScreen from './MyClassScreen';
import CartScreen from './CartScreen';
import NotificationScreen from './NotificationScreen';
import ProfileScreen from './ProfileScreen';
import colors from '../../assets/colors/colors';

import {Image, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function MainScreen() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.blue,
        tabBarInactiveTintColor: colors.darkGrey,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 70,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <View>
                <Image
                  source={
                    focused
                      ? require('../../assets/images/nav_home_active.png')
                      : require('../../assets/images/nav_home.png')
                  }
                  resizeMode="contain"
                  style={{width: 25}}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="My Class"
        component={MyClassScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <View>
                <Image
                  source={
                    focused
                      ? require('../../assets/images/nav_my_class_active.png')
                      : require('../../assets/images/nav_my_class.png')
                  }
                  resizeMode="contain"
                  style={{width: 25}}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <View>
                <Image
                  source={
                    focused
                      ? require('../../assets/images/nav_cart_active.png')
                      : require('../../assets/images/nav_cart.png')
                  }
                  resizeMode="contain"
                  style={{width: 25}}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <View>
                <Image
                  source={
                    focused
                      ? require('../../assets/images/nav_notif_active.png')
                      : require('../../assets/images/nav_notif.png')
                  }
                  resizeMode="contain"
                  style={{width: 25}}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <View>
                <Image
                  source={
                    focused
                      ? require('../../assets/images/nav_profile_active.png')
                      : require('../../assets/images/nav_profile.png')
                  }
                  resizeMode="contain"
                  style={{width: 25}}
                />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
