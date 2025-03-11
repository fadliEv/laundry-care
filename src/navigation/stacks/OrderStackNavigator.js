import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SCREEN_PATH } from "../PathNavigator";
import OrderScreen from "../../screens/order/OrderScreen";
import OnFixingScreen from "../../screens/commons/OnFixingScreen";
import OrderSummaryScreen from "../../screens/order/OrderSummaryScreen";

const Stack = createNativeStackNavigator();

const OrderStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={SCREEN_PATH.ORDER} component={OrderScreen} />            
            <Stack.Screen name={SCREEN_PATH.ORDER_SUMMARY} component={OrderSummaryScreen} />            
        </Stack.Navigator>
    );
};

export default OrderStackNavigator;
