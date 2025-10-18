import { createBrowserRouter } from "react-router";
import App from "../App";
import Loader from "../Components/Loader";
import HomePage from "../Pages/Home/Home";
import HomeLayout from "../Layout/HomeLayout";
import axios from "axios";

export const router = createBrowserRouter([
  {
    path: "/",
    hydrateFallbackElement: <Loader />,
    Component: App,
    children: [
      {
        index: true,
        loader: async () => {
          const newsRes = await axios("/news.json");
          const categoryRes = await axios("/categories.json");
          return { news: newsRes.data, category: categoryRes.data };
        },
        Component: HomeLayout
      }
    ]
  },
]);