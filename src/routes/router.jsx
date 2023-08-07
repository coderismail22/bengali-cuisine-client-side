import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import NotFound from "../pages/Shared/NotFound/NotFound";
import Login from "../pages/LoginRegister/Login/Login";
import Register from "../pages/LoginRegister/Register/Register";
import RecipesPage from "../pages/Recipes/RecipesPage/RecipesPage";
import PrivateRoute from "./PrivateRoute";
import Blog from "../pages/Home/Blog/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        // TODO:PRIVATE ROUTE
          path: "recipes/:id",
        element: <PrivateRoute><RecipesPage></RecipesPage></PrivateRoute>,
        loader: ({ params }) => fetch(`https://assignment-10-server-lemon.vercel.app/recipes/${params.id}`),
      }

    ]
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);

export default router;
