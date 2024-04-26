import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./component/HomeConponent";
import Hello from './component/HelloConponent';
import { NavigationContainer } from '@react-navigation/native';
import storage from './storage/storage';
import Test from "./component/testComponent"
const Stack = createNativeStackNavigator();

export default function App() {
  const [shouldSkip, setShouldSkip] = React.useState(false);

  React.useEffect(() => {
    const loadData = async () => {
      try {
        const ret = await storage.load({ key: 'skip' });
        setShouldSkip(ret.status === 'true');
      } catch (error) {
        console.log();
      }
    };
    loadData();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {!shouldSkip ? (
          <Stack.Screen
            name="Home"
            component={Home}
          />
        ) : null}
        <Stack.Screen name="Hello" component={Hello} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
