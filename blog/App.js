import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IndexScreen from './src/screens/IndexScreen';
import { Provider } from './src/context/BlogContext';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import { Feather, EvilIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import EditScreen from './src/screens/EditScreen';


const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Index">
                <Stack.Screen name="Index"
                              component={ IndexScreen }
                              options={ ( { navigation } ) => ( {
                                  title: 'Blogs',
                                  headerRight: () => (
                                      <TouchableOpacity onPress={ () => navigation.navigate( 'CreateBlog' ) }>
                                          <Feather name="plus"
                                                   size={ 30 }/>
                                      </TouchableOpacity>
                                  )
                              } ) }/>
                <Stack.Screen name="ShowBlog"
                              component={ ShowScreen }
                              options={ ( { navigation, route } ) => ( {
                                  title: 'Blogs',
                                  headerRight: () => (
                                      <TouchableOpacity onPress={ () =>
                                          navigation.navigate( 'EditBlog', { id: route.params.id } ) }>
                                          <EvilIcons name="pencil"
                                                     size={ 30 }/>
                                      </TouchableOpacity>
                                  )
                              } ) }/>
                <Stack.Screen name="CreateBlog"
                              component={ CreateScreen }
                              options={ { title: 'Create Blog' } }/>
                <Stack.Screen name="EditBlog"
                              component={ EditScreen }
                              options={ { title: 'Edit Blog' } }/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default () => {
    return (
        <Provider>
            <App/>
        </Provider>
    );
}