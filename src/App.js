// import logo from '.public/images';
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Items from './Items';
import Checkout from './Checkout';
import About from './About';
import { Provider } from 'react-redux';
import store from './Store';
import Prescribe from './Prescribe';

//       <img src="images/logo.jpg" className="App-logo" alt="logo" />

function App() {
  return (
    <div className="App">
    <Provider store={store}>
    <Router>
      <Header/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='items' element={<Items/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path='prescribe' element={<Prescribe/>}/>
      </Routes>
      </Router>
      </Provider>
    </div>
  );
}

export default App;
