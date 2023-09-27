import { Outlet, createBrowserRouter } from "react-router-dom";
import LayOut from "../LayOut/LayOut";
import Home from "../Pages/Home/Home";

import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import ErrPage from "../Pages/ErrPage/ErrPage";
import SinglecardPage from "../Pages/SinglecardPage/SinglecardPage";


const myCreatedRoute = createBrowserRouter([
  {
    path: "/",
    element: <LayOut></LayOut>,
    errorElement: <ErrPage></ErrPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/pHero.json"),
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/cards/:id",
        element: <SinglecardPage></SinglecardPage>,
        loader: () => fetch("/pHero.json"),
      },
    ],
  },
]);

export default myCreatedRoute;