import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRoutes from './routes/AppRoutes';
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {ContextProvider} from './context';
import "./resources/css/auth.style.css";
import "./resources/css/master.css";



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <ContextProvider>
          <AppRoutes />
      </ContextProvider>
      </Router>
  </React.StrictMode>,
)
