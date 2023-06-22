import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import InvoiceMaker from "../screens/InvoiceMaker";

const Stack = createStackNavigator();

export default function MainNavigation() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Home"
					component={HomeScreen}
					options={{ headerShown: false }}
				/>
        <Stack.Screen name="InvoiceMaker" component={InvoiceMaker}/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
