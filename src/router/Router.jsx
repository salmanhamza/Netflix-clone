import { createBrowserRouter } from "react-router-dom";
import SignUp from "../pages/SignUp";
import LogIn from "../pages/LogIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <LogIn />,
  },
]);

export default router;
