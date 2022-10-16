import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StateProvider } from './StateProvider';
import reducer, { initialState } from "./reducer";
import { Provider } from 'react-redux';
import store from './Store';
import { PersistGate } from 'redux-persist/integration/react';
import persistStore from 'redux-persist/es/persistStore';
import { StoreContext } from "./context";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
  <StateProvider initialState={initialState} reducer={reducer}>
   <Provider store={store} context={StoreContext}>
  {/* <PersistGate loading={null} persistor={persistStore}> */}
    <App />
    {/* </PersistGate> */}
     </Provider>
    </StateProvider>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
