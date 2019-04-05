import Dashboard from 'views/Dashboard.jsx';
import AdvCloudIndex from 'views/advcloud/AdvCloudIndex.jsx';
import AtexIndex from 'views/atex/AtexIndex.jsx'

var routes = [
    {
        path: '/index',
        name: 'Dashboard DASH',
        icon: 'ni ni-tv-2 text-primary',
        component: Dashboard,
        layout: '/dashboard'
    }, {
        path: '/index',
        name: 'Atex DASH',
        icon: 'ni ni-tv-2 text-primary',
        component: AtexIndex,
        layout: '/atex'
    }, {
        path: '/index',
        name: 'AdvCloud DASH',
        icon: 'ni ni-tv-2 text-primary',
        component: AdvCloudIndex,
        layout: '/advcloud'
    },
];

export default routes;