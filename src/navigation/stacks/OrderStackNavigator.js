import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SCREEN_PATH } from "../PathNavigator";
import OrderScreen from "../../screens/order/OrderScreen";
import OnFixingScreen from "../../screens/commons/OnFixingScreen";

const Stack = createNativeStackNavigator();

const OrderStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={SCREEN_PATH.ORDER} component={OnFixingScreen} />            
        </Stack.Navigator>
    );
};

export default OrderStackNavigator;
