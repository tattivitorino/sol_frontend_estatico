import AtexIndex from 'views/atex/AtexIndex.jsx'

var routes = [
    {
        path: '/index',
        name: 'Dashboard',
        icon: 'fa fa-bar-chart text-atex',
        component: AtexIndex,
        layout: '/atex',
        classTipo: 'atex',
    },
    {
        path: '/index',
        name: 'Agenda dos Colaboradores',
        icon: 'fa fa-address-book text-atex',
        component: AtexIndex,
        layout: '/dashbord',
        classTipo: 'atex',
    },
    {
        path: '/index',
        name: 'Localização dos Colaboradores',
        icon: 'ni ni-square-pin text-atex',
        component: AtexIndex,
        layout: '/dashbord',
        classTipo: 'atex',
    },
    {
        path: '/index',
        name: 'Atendimentos em tempo real',
        icon: 'ni ni-chat-round text-atex',
        component: AtexIndex,
        layout: '/dashbord',
        classTipo: 'atex',
    },
    {
        path: '/index',
        name: 'Cadastros de pessoas',
        icon: 'fa fa-user-plus text-atex',
        component: AtexIndex,
        layout: '/dashbord',
        classTipo: 'atex',
    },
    {
        path: '/index',
        name: 'Receber e validar documentos',
        icon: 'fa fa-folder-open text-atex',
        component: AtexIndex,
        layout: '/dashbord',
        classTipo: 'atex',
    },
    {
        path: '/index',
        name: 'Ver atendimentos concluídos',
        icon: 'ni ni-archive-2 text-atex',
        component: AtexIndex,
        layout: '/dashbord',
        classTipo: 'atex',
    },
];

export default routes;