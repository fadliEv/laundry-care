import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SCREEN_PATH } from "../PathNavigator";
import OrderScreen from "../../screens/order/OrderScreen";

const Stack = createNativeStackNavigator();

const OrderStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={SCREEN_PATH.ORDER} component={OrderScreen} />            
        </Stack.Navigator>
    );
};

export default OrderStackNavigator;
