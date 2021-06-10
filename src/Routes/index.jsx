import {Author,Authors,Posts,NewAuthor} from '../pages/index';
const Routes = [
    {
        path: '/',
        component: Authors
    },
    {
        path: '/author/:id',
        component: Author
    },
    {
        path: '/posts/:id',
        component: Posts
    },
    {
        path: '/addAuthor',
        component: NewAuthor
    },
];

export default Routes;