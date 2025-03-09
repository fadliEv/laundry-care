import React, { useState } from "react";
import { View, Button, ActivityIndicator } from "react-native";
import useAuth from "./src/hooks/useAuth";
import DashboardScreen from "./src/screens/dashboard/DashboardScreen";
import RegisterScreen from "./src/screens/register/RegisterScreen";
import LoginScreen from "./src/screens/login/LoginScreen";
import { AuthProvider } from "./src/contexts/authContext";

const AppContent = () => {
  const { currentUser, loading } = useAuth();
  const [isRegistering, setIsRegistering] = useState(false);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      {currentUser ? (
        <DashboardScreen />
      ) : isRegistering ? (
        <RegisterScreen onRegister={() => setIsRegistering(false)} />
      ) : (
        <LoginScreen />
      )}      
    </View>
  );
};

const App = () => (
  <AuthProvider>
    <AppContent />
  </AuthProvider>
);

export default App;
