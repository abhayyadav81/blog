import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, createAppContainer } from '@react-navigation/stack';
import IndexScreen from './src/screens/IndexScreen'
import { Provider } from './src/context/BlogContext';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { EvilIcons } from '@expo/vector-icons'; 
import EditScreen from './src/screens/EditScreen';
import { roundToNearestPixel } from 'react-native/Libraries/Utilities/PixelRatio';

function HomeScreen(props) {
  return (
    <View style={{ justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="go to IndexScreen" onPress={() => props.navigation.navigate('Index')} />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
 
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Index" component={IndexScreen}
         options={({navigation})=>({
          headerTitle: 'Index',
          headerRight: () => (
            
            <TouchableOpacity onPress={()=>navigation.navigate('Create')}>
             <Feather name="plus" size={30} color="black" />
            </TouchableOpacity>
          ),
        })} 
        />
        <Stack.Screen name="Show" component={ShowScreen} 
         options={({route,navigation})=>({
          headerTitle: 'Index',
          headerRight: () => (
            
            <TouchableOpacity onPress={()=>navigation.navigate('Edit',{id: route.params.id})}>
             <EvilIcons name="pencil" size={35} color="black" />
            </TouchableOpacity>
          ),
        })} 
        />
        <Stack.Screen name="Create" component={CreateScreen} />
        <Stack.Screen name="Edit" component={EditScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

  );
};
export default App;


