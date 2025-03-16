import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

import MainLayout from './Components/MainLayout/MainLayout';
import Home from './Components/Home/Home';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import AddCampaign from './Components/AddCampaign/AddCampaign';
import CardsCampaign from './Components/CardsCampaign/CardsCampaign';

import CardDetails from './Components/CardDetails/CardDetails';
import CampainLaout from './Components/MainLayout/CampainLaout';
import AuthProvider from './Components/AuthProvider/AuthProvider';
import SignUp from './Components/SignUp/SignUp';

// 🔹 Router Setup
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
    errorElement: <ErrorPage />,
  },
  {
    path: "/camlayout",
    element: <CampainLaout />,
    children: [
      {
        path: "addCampaign", 
        element: <AddCampaign />,
      },
      {
        path: "campaigns", 
        element: <CardsCampaign />,
        loader: () => fetch('http://localhost:5000/campaign'),
      },
      {
        path: "campaigns/:id",    
        element: <CardDetails />,
        loader: ({ params }) => fetch(`http://localhost:5000/campaign/${params.id}`),
      },
    ],  
    errorElement: <ErrorPage />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

// 🔹 Render the App
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
