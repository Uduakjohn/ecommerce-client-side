import {configureStore} from "@reduxjs/toolkit";
 import userSlice from "./features/userSlice";
import appApi from "./services/appApi";
 //import AsyncStorage from '@react-native-community/async-storage';

//persist our store
 import storage from "redux-persist/lib/storage";
 import { combineReducers } from "@reduxjs/toolkit";
 import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";
//import persistReducer from "redux-persist/es/persistReducer";



 const persistConfig = {
    key: 'root',
     storage:storage,
    timeout:null,
    whitelist : ['fetchedMemeSlice','loadMemesSlice'],
     blackList:[appApi.reducerPath],
 };

 //reducers
const reducer = combineReducers({
    user:userSlice,
        [appApi.reducerPath]:appApi.reducer,
     });
    

// // //persist our store
 const persistedReducer = persistReducer(persistConfig,reducer);

// // // creating the store
 const store = configureStore({
reducer:persistedReducer,
middleware: [thunk, appApi.middleware],
 })
  export default store;


