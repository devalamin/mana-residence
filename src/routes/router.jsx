import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../components/Root/Root';
import HomeLayout from '../components/HomeLayout/HomeLayout';
import Details from '../components/Details/Details';
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <HomeLayout></HomeLayout>
            },
            {
                path: '/property/:id',
                element: <Details></Details>,
                loader: () => fetch('/data.json')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    }
])

export default router;