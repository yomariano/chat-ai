import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";

import { HomeScreen } from "./HomeScreen";
import { ChatScreen } from "./ChatScreen";

const StackNavigator = stackNavigatorFactory();

export const MainStack = () => (
    <BaseNavigationContainer>
        <StackNavigator.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#65adf1",
                },
                headerTintColor: "#ffffff",
                headerShown: true,
            }}
        >
            <StackNavigator.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: "Select Model" }}
            />
            <StackNavigator.Screen
                name="Chat"
                component={ChatScreen}
                options={({ route }) => ({ title: `Chat with ${route.params.model}` })}
            />
        </StackNavigator.Navigator>
    </BaseNavigationContainer>
);