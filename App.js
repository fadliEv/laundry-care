import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./src/contexts/authContext";
import { SafeAreaView } from "react-native-safe-area-context";
import RootNavigator from "./src/navigation/RootNavigator";


export default function App() {
  return (
      <AuthProvider>
          <NavigationContainer>
              <SafeAreaView style={{ flex: 1 }}>
                  <RootNavigator />                  
              </SafeAreaView>
          </NavigationContainer>
      </AuthProvider>
  );
}