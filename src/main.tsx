
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { Theme }
import { FirebaseAppProvider } from 'reactfire';
import 'firebase/auth';


// internal imports 
import { Home, Shop, Cart, Auth } from './components'; 
import './index.css';
import { theme } from './Theme/themes'; 
import { firebaseConfig } from './firebaseConfig';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <ThemeProvider theme = { theme }>
        <Router>
          <Routes>
            <Route path='/' element={<Home title = {"Ranger's Shop of Horrors"}/>} />
            <Route path='/' element={<Auth title = {"Ranger's Shop of Horrors"}/>} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </FirebaseAppProvider>
  </React.StrictMode>,
)

