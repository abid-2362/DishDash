/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { PaperProvider } from 'react-native-paper';
import MainNavigator from './src/navigators/MainNavigator';
import { AuthProvider } from './src/context/AuthContext';
import { navigationRef } from './src/navigators/RootNavigation';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/theme';
import { RestaurantsProvider } from './src/context/RestaurantsContext.ts';
import { LocationProvider } from './src/context/LocationContext.ts';

function NavigatorComponent() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    // backgroundColor: isDarkMode ? Colors.darker : '#FFFFFF',
  };
  return (
    <NavigationContainer ref={navigationRef}>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
      </SafeAreaView>

      <MainNavigator />
    </NavigationContainer>
  );
}

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <PaperProvider>
        <AuthProvider>
          <LocationProvider>
            <RestaurantsProvider>
              <NavigatorComponent />
            </RestaurantsProvider>
          </LocationProvider>
        </AuthProvider>
      </PaperProvider>
    </ThemeProvider>
  );
};
export default App;
