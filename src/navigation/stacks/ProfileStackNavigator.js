import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SCREEN_PATH } from "../PathNavigator";
import DashboardScreen from "../../screens/dashboard/DashboardScreen";
import ProfileScreen from "../../screens/profile/ProfileScreen";
import ChangeProfileScreen from "../../screens/profile/change-profile/ChangeProfileScreen";

const Stack = createNativeStackNavigator();

const ProfileStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={SCREEN_PATH.PROFILE} component={ProfileScreen} />            
            <Stack.Screen name={SCREEN_PATH.CHANGE_PROFILE} component={ChangeProfileScreen} />            
        </Stack.Navigator>
    );
};

export default ProfileStackNavigator;
