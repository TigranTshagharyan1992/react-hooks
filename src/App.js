import React from 'react';
import Main from "./components/Main";
import Alert from "./components/Alert";
import {AlertContextProvider} from "./components/AlertContext";


function App() {

  return (
      <AlertContextProvider>
          <div className={'container pt-3'}>
              <Alert />
              <Main />
          </div>
      </AlertContextProvider>
  );
}

export default App;
