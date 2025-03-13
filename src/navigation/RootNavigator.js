import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./TabNavigator";
import AuthStackNavigator from "./stacks/AuthStackNavigator";
import { SCREEN_PATH } from "./PathNavigator";
import { useAuth } from "../context/authContext";


const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const {currentUser} = useAuth()  
  
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
