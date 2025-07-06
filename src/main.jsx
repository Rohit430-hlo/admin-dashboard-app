import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import '@syncfusion/ej2-base/styles/tailwind.css';
// import '@syncfusion/ej2-buttons/styles/tailwind.css';
// import '@syncfusion/ej2-react-richtexteditor/styles/tailwind.css';

// import '@syncfusion/ej2-base/styles/tailwind.css';
// import '@syncfusion/ej2-buttons/styles/tailwind.css';
// import '@syncfusion/ej2-inputs/styles/tailwind.css';
// import '@syncfusion/ej2-lists/styles/tailwind.css';
// import '@syncfusion/ej2-navigations/styles/tailwind.css';
// import '@syncfusion/ej2-popups/styles/tailwind.css';
// import '@syncfusion/ej2-react-richtexteditor/styles/tailwind.css';


import '@syncfusion/ej2-base/styles/material.css';
import '@syncfusion/ej2-buttons/styles/material.css';
import '@syncfusion/ej2-inputs/styles/material.css';
import '@syncfusion/ej2-lists/styles/material.css';
import '@syncfusion/ej2-navigations/styles/material.css';
import '@syncfusion/ej2-popups/styles/material.css';


import { ContextProvider } from './context/ContextProvider.jsx'
import { ToastContainer } from 'react-toastify';


createRoot(document.getElementById('root')).render(

    <ContextProvider>

    <App />
    <ToastContainer/>
    </ContextProvider>
    
  
)
