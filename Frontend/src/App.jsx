import React from 'react'; // Add this import
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePages from "./components/pages.component/HomePages";
import Home from '../pages/Home';
import Galary from '../pages/Galary';
import Services from '../pages/Services';
import GalaraySingleImages from './components/pages.component/GalaraySingleImages';

// Define routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      { path: "/", element: <HomePages /> },
      { path: "garalry", element: <Galary/> }, 
      { path: "garalry/:imageurl", element: <GalaraySingleImages/> }, 
      { path: "service", element: <Services /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
