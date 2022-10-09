import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {loadStripe} from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

import { BrowserRouter  } from 'react-router-dom';

//const stripePromise = loadStripe('pk_test_51LqYiuSDGv53EHeHb1QF9QKaScHAe9BeceNediLCvmChxRj5vquNK6y5PfRgI9e5g6uvvYECedd2CnPx4aBN6g6W00DOC4Ribo');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
     <BrowserRouter>
    <App />
    </BrowserRouter>
 
  </React.StrictMode>
);
