import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from "./App" 
import { ConversionProvider } from './context/conversion' 

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el)

root.render( 
        <ConversionProvider> 
                <App /> 
        </ConversionProvider>   
    )