import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../components/Root/Root';
import HomeLayout from '../components/HomeLayout/HomeLayout';
import Details from '../components/Details/Details';

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
            }
        ]
    }
])

export default router;