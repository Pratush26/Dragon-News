import { createBrowserRouter } from "react-router";
import App from "../App";
import Loader from "../Components/Loader";
import HomeLayout from "../Layout/Home/HomeLayout";
import axios from "axios";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import CareerLayout from "../Layout/CareerLayout";
import DetailsLayout from "../Layout/DetailsLayout";
import AboutPage from "../Pages/About";
import HomePage from "../Pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    hydrateFallbackElement: <Loader />,
    Component: App,
    children: [
      {
        path: '/',
        loader: async () => {
          const newsRes = await axios("/news.json");
          const categoryRes = await axios("/categories.json");
          return { news: newsRes.data, category: categoryRes.data };
        },
        Component: HomeLayout,
        children: [
          {
            index: true,
            loader: () => axios("/news.json"),
            Component: HomePage
          },
          {
            path: '/:category',
            loader: () => axios("/news.json"),
            Component: HomePage
          }
        ]
      },
      {
        path: '/details/:id',
        Component: DetailsLayout,
      },
      {
        path: '/career',
        Component: CareerLayout,
        children: [
          {
            index: true,
            Component: Register
          },
          {
            path: '/career/login',
            Component: Login
          }
        ]
      },
      {
        path: '/about',
        Component: AboutPage
      },
    ]
  },
]);