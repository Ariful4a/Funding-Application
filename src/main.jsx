import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainLayout from './Components/MainLayout/MainLayout';
import Home from './Components/Home.js/Home';
import Campaigns from './Components/Campaigns/Campaigns';
import AddCampaign from './Components/AddCampaign/AddCampaign';
import ErrorPage from './Components/ErrorPage/ErrorPage';




import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/campaigns",
        element: <Campaigns></Campaigns>,
      },
      {
        path: "/addCampaign",
        element: <AddCampaign></AddCampaign>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <RouterProvider router={router} />
  </StrictMode>,
)
