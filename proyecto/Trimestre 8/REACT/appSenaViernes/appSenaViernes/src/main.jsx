import React from 'react'
import ReactDOM from 'react-dom/client'
import Arca from './componets/Arca'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
     <BrowserRouter>
     <Arca />
     </BrowserRouter>
    
 
)
