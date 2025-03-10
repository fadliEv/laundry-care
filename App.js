import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./src/contexts/authContext";
import { SafeAreaView } from "react-native-safe-area-context";
import RootNavigator from "./src/navigation/RootNavigator";
import { StatusBar } from "react-native";


export default function App() {
  return (
      <AuthProvider>
          <NavigationContainer>
              <SafeAreaView style={{ flex: 1 }}>
                  <StatusBar backgroundColor="#FF8C00" barStyle="light-content" />
                  <RootNavigator />                   
              </SafeAreaView>
          </NavigationContainer>
      </AuthProvider>
  );
}``