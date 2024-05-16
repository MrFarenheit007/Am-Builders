import React from 'react';
import  ReactDOM  from 'react-dom';
import Contact from './Pages/contact/Contact'
import {About, Properties, Gallery} from './components'
import {Map} from './containers'

import App from './App'

import {
    createBrowserRouter,
    RouterProvider,
    Route
} from 'react-router-dom'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/contact',
        element: <Contact/>
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
)