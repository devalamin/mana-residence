import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../components/Root/Root';
import HomeLayout from '../components/HomeLayout/HomeLayout';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children:[
            {
                path:'/',
                element:<HomeLayout></HomeLayout>
            }
        ]
    }
])

export default router;