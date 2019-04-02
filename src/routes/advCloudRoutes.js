import Dashboard from "views/Dashboard.jsx";
import AdvCloudIndex from "views/AdvCloudIndex.jsx";
import AtexIndex from "views/AtexIndex.jsx"

var routes = [
  {       
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Dashboard,
    layout: "/dashboard"
  },{
    path: "/index",
    name: "AdvCloud",
    icon: "ni ni-tv-2 text-primary",
    component: AdvCloudIndex,
    layout: "/advcloud"
  },{
    path: "/index",
    name: "Atex",
    icon: "ni ni-tv-2 text-primary",
    component: AtexIndex,
    layout: "/atex"
  },
];
export default routes;
