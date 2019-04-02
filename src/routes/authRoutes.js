import Login from "views/auth/Login.jsx"
import Register from "views/auth/Register.jsx"

var authRoutes = [
  {
    path: "/login",
    name: "Atex",
    icon: "ni ni-tv-2 text-primary",
    component: Login,
    layout: "/auth"
  },{
    path: "/register",
    name: "Adv Cloud",
    icon: "ni ni-tv-2 text-primary",
    component: Register,
    layout: "/auth"
  },
];
export default authRoutes;