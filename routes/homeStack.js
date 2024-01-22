import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { NavigationContainer } from "@react-navigation/native";
import HomeView from '../Screens/home';
import ReviewDetails from '../Screens/reviewDetails';

const Stack = createNativeStackNavigator();

export default function Navigator( route ) {
  return (
    <Stack.Navigator initialRouteName="GameZone" screenOptions={{headerShown: false}}>
      <Stack.Group screenOptions={{ headerStyle: { backgroundColor: 'lightblue' } }}>
        <Stack.Screen name="HomeScreen" component={HomeView} options={{title: 'GameZone', backgroundColor: 'grey'}} />
        <Stack.Screen name="Details" component={ReviewDetails} options={({ route }) => ({ title: route.params.title })} />
      </Stack.Group>
    </Stack.Navigator>
  );
}