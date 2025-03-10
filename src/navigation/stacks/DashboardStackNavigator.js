import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SCREEN_PATH } from "../PathNavigator";
import DashboardScreen from "../../screens/dashboard/DashboardScreen";
import EventDetailScreen from "../../screens/dashboard/event-detail/EventDetailScreen";

const Stack = createNativeStackNavigator();

const DashboardStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={SCREEN_PATH.DASHBOARD} component={DashboardScreen} />   
            <Stack.Screen name={SCREEN_PATH.EVENT_DETAIL} component={EventDetailScreen} />         
        </Stack.Navigator>
    );
};

export default DashboardStackNavigator;
