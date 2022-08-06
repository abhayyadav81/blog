import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, createAppContainer } from '@react-navigation/stack';
import IndexScreen from './src/screens/IndexScreen'
import { Provider } from './src/context/BlogContext';
import CreateScreen from './src/screens/CreateScreen';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { EvilIcons } from '@expo/vector-icons'; 
import EditScreen from './src/screens/EditScreen';
import { roundToNearestPixel } from 'react-native/Libraries/Utilities/PixelRatio';



const Stack = createStackNavigator();

function App() {
 
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={CreateScreen}>
        <Stack.Screen name="Create" component={CreateScreen} />
       
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
       
       
        <Stack.Screen name="Edit" component={EditScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

  );
};
export default App;


