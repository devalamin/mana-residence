import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../components/Root/Root';
import HomeLayout from '../components/HomeLayout/HomeLayout';
import Details from '../components/Details/Details';
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import PrivateRoute from './PrivateRoute';
import PrivateAuthRoute from './PrivateAuthRoute';
import Profile from '../components/Profile/Profile';

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
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader: () => fetch('/data.json')
            },
            {
                path: '/login',
                element: <PrivateAuthRoute><Login></Login></PrivateAuthRoute>
            },
            {
                path: '/register',
                element: <PrivateAuthRoute><Register></Register></PrivateAuthRoute>
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])

export default router;