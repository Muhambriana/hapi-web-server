const routes = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) =>  {
            return 'Homepage';
        },
    },
    {
        method: '*',
        path: '/',
        handler: (request, h) =>  {
            return 'Halaman tidak dapat diakses dengan method tersebut';
        },
    },
    {
        method: 'GET',
        path: '/about',
        handler: (request, h) =>  {
            return 'About page'; 
        },
    },
    {
        method: '*',
        path: '/about',
        handler: (request, h) =>  {
            return 'Halaman tidak dapat diakses dengan method'
        },
    },
    {
        method: 'GET',
        path: '/hello/{name?}',
        handler: (request, h) =>  {
            const { name = "stanger",  } = request.params;
            const { lang } = request.query;

            if(lang === 'id') {
                return `Hai, ${name}!`;
            }

            return `Hello, ${name}!`;

            // Using payload from receive request from body
            // const { username, password } = request.payload;
            // return `Welcome ${username}!`;
        },
    },
    {
        method: '*',
        path: '/{any*}',
        handler: (request, h) =>  {
            return 'Halaman tidak ditemukan'
        },
    },
];

module.exports = routes;