import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainLayout from './Components/MainLayout/MainLayout';
import Home from './Components/Home/Home';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import AddCampaign from './Components/AddCampaign/AddCampaign';
import CardsCampaign from './Components/CardsCampaign/CardsCampaign';
import CardDetails from './Components/CardDetails/CardDetails';










import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
     
      {
        path: "/addCampaign",
        element: <AddCampaign></AddCampaign>,
      },
      {
        path: "/campaigns",
        element: <CardsCampaign></CardsCampaign>,
        loader: () => fetch('http://localhost:5000/campaign')
      },
      {
        path: "/campaigns/:id",
        element: <CardDetails></CardDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/campaign/${params.id}`)
      }
    ],
    errorElement: <ErrorPage></ErrorPage>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <RouterProvider router={router} />
  </StrictMode>,
)
