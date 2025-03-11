import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./TabNavigator";
import AuthStackNavigator from "./stacks/AuthStackNavigator";
import { SCREEN_PATH } from "./PathNavigator";
import localStorage from "../utils/localStorage";


const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const token = await localStorage.getData("token");
      console.log("Tokennya : ", token);
      
      setIsAuthenticated(!!token);
    };
    checkAuth();
  }, []);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
    {isAuthenticated ? (
      <Stack.Screen name={SCREEN_PATH.MAIN_APP} component={TabNavigator} /> 
    ) : (
      <Stack.Screen name="Auth" component={AuthStackNavigator} />
    )}
  </Stack.Navigator>
  );
};
export default RootNavigator;
