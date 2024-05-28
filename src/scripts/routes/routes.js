import Home from "../views/pages/home";
import Donorin from "../views/pages/donorin";
import Profile from "../views/pages/profile";
import About from "../views/pages/about";
import Detail from "../views/pages/detail";
import Login from "../views/pages/login";
import Register from "../views/pages/register";
import ResetPassword from "../views/pages/resetPassword";

const routes = {
  "/": Home, // default page
  "/home": Home,
  "/donorin": Donorin,
  "/profile": Profile,
  "/detail/:id": Detail,
  "/about": About,
  "/login": Login,
  "/register": Register,
  "/reset-password": ResetPassword,
};

export default routes;
