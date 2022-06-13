import * as React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeViewModel, SignInViveModel } from '../../viewModel';
import { COLORS, icons } from '../../config';
import TabBarItem from './TabBarItem';


const Tab = createBottomTabNavigator();

export default function TabNavigation() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarHideOnKeyboard: true,

                tabBarStyle: {
                    flex: 1,
                    height: 90,
                    borderRadius: 10,
                    backgroundColor: COLORS.light,
                    position: 'absolute',
                    shadowOffset: { width: 1, height: 2 },
                    shadowOpacity: 1,
                    shadowRadius: 3,
                    elevation: 2,
                },
            }}>
            <Tab.Screen name="HomeTab" component={HomeViewModel}
                options={{
                    tabBarIcon: ({ focused }: any) => (
                        <TabBarItem focused={focused} ICON={icons.home} label={'Home'} />
                    ),
                }} />
            <Tab.Screen name="Category" component={HomeViewModel}  options={{
                    tabBarIcon: ({ focused }: any) => (
                        <TabBarItem focused={focused} ICON={icons.coupon} label={'Category'} />
                    ),
                }}/>
            <Tab.Screen name="Scan" component={HomeViewModel} options={{
                    tabBarIcon: ({ focused }: any) => (
                        <TabBarItem focused={focused} ICON={icons.qrCode} label={''} />
                    ),
                }} />
            <Tab.Screen name="Promo" component={HomeViewModel} options={{
                    tabBarIcon: ({ focused }: any) => (
                        <TabBarItem focused={focused} ICON={icons.gift} label={'Promo'} />
                    ),
                }} />
            <Tab.Screen name="User" component={HomeViewModel}  options={{
                    tabBarIcon: ({ focused }: any) => (
                        <TabBarItem focused={focused} ICON={icons.user} label={'User'} />
                    ),
                }}/>

        </Tab.Navigator>
    );
}