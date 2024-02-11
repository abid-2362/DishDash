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
import { FavoritesProvider } from './src/context/FavoritesContext.ts';

import { FirebaseApp, getApps, initializeApp } from 'firebase/app';
import { firebaseConfig } from './src/utils/firebase.ts';
import { Auth, getReactNativePersistence, initializeAuth } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// firebase initialization
let app: FirebaseApp;
const apps = getApps();
let auth: Auth;
if (!apps || !apps.length) {
  app = initializeApp(firebaseConfig);
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage),
  });
}

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
              <FavoritesProvider>
                <NavigatorComponent />
              </FavoritesProvider>
            </RestaurantsProvider>
          </LocationProvider>
        </AuthProvider>
      </PaperProvider>
    </ThemeProvider>
  );
};
export default App;
