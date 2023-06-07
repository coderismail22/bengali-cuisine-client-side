import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import NotFound from "../pages/Shared/NotFound/NotFound";
import Login from "../pages/LoginRegister/Login/Login";
import Register from "../pages/LoginRegister/Register/Register";
import RecipesPage from "../pages/Recipes/RecipesPage/RecipesPage";

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
        path: "login",
        element: <Login></Login>
      },
      {
        path: "register",
        element: <Register></Register>
      },
      {
          path: "recipes/:id",
        element: <RecipesPage></RecipesPage>,
        loader: ({ params }) => fetch(`http://localhost:5000/recipes/${params.id}`),
      }

    ]
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);

export default router;
