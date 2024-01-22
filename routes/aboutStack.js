import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { NavigationContainer } from "@react-navigation/native";
import AboutView from "../Screens/about";

const Stack = createNativeStackNavigator();

export default function AboutNavigator( route ) {
  return (
    <Stack.Navigator initialRouteName="About" screenOptions={{headerShown: false}}>
        <Stack.Group screenOptions={{ headerStyle: { backgroundColor: 'lightblue' } }}>
            <Stack.Screen name="AboutScreen" component={AboutView} options={{title: 'About GameZone', headerTitleAlign: 'center'}} />
        </Stack.Group>
    </Stack.Navigator>
  );
}