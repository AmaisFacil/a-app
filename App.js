import { hideAsync, preventAutoHideAsync} from 'expo-splash-screen';
import { PersistGate } from 'redux-persist/integration/react';
import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import * as Font from 'expo-font';

import { store, persistor } from './src/redux/store/configureStore.js';
import { LightTheme } from './src/styles/themes/light';
import Loading from './src/components/loading';
import fonts from './src/styles/fonts.js';
import Router from './src/routes';

const App = () => {

  const [appIsReady, setAppIsReady] = useState(false);

    useEffect(() => {
      (async () => {
        try {
          await preventAutoHideAsync();
          await Font.loadAsync(fonts);
        }
        catch {
        }
        finally {
          setAppIsReady(true);
        }
      })();
    }, []);


    if (!appIsReady) {
      return <Loading text='carregando...'/>;
    } else {
      hideAsync()
    }

  return (
    <Provider store={store}>
      <PersistGate loading={<Loading text={'Carregando...'} />} persistor={persistor}>
        <ThemeProvider theme={LightTheme}>
            <StatusBar  backgroundColor={LightTheme.colors.primary} barStyle="light-content" />
            <Router/>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App