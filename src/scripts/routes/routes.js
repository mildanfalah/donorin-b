import Home from "../views/pages/home";
import Donorin from "../views/pages/donorin";
import Profile from "../views/pages/profile";
import About from "../views/pages/about";
import Detail from "../views/pages/detail";

const routes = {
  "/": Home, // default page
  "/home": Home,
  "/donorin": Donorin,
  "/profile": Profile,
  "/detail/:id": Detail,
  "/about": About,
};

export default routes;
