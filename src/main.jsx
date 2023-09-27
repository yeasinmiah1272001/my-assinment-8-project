import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
;
import { RouterProvider } from 'react-router-dom';
import myCreatedRoute from './Router/Router.jsx';



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <RouterProvider router={myCreatedRoute}></RouterProvider>

  </React.StrictMode>
);
 