import React, { useContext, useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./TabNavigator";
import AuthStackNavigator from "./stacks/AuthStackNavigator";
import { SCREEN_PATH } from "./PathNavigator";
import localStorage from "../utils/localStorage";
import { useAuth } from "../context/authContext";
import { Text, View } from "react-native";


const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const {currentUser,loading} = useAuth()

  if (loading) return <View><Text>Loading dulu...</Text></View>

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
    {currentUser ? (
      <Stack.Screen name={SCREEN_PATH.MAIN_APP} component={TabNavigator} /> 
    ) : (
      <Stack.Screen name="Auth" component={AuthStackNavigator} />
    )}
  </Stack.Navigator>
  );
};
export default RootNavigator;
