import { Routes } from '@angular/router';
import { Documentation } from './documentation/documentation';
import { Crud } from './crud/crud';
import { Empty } from './empty/empty';
import { Submenu111 } from './submenu111/submenu111';   
import { Submenu112 } from './submenu112/submenu112';
import { Submenu121 } from './submenu121/submenu121';
import { Submenu122 } from './submenu122/submenu122';


export default [
    { path: 'documentation', component: Documentation },
    { path: 'crud', component: Crud },
    { path: 'empty', component: Empty },
    { path: 'submenu121', component: Submenu121 },
    { path: 'submenu122', component: Submenu122 },
    { path: 'submenu111', component: Submenu111 },
    { path: 'submenu112', component: Submenu112 },
    { path: '**', redirectTo: '/notfound' }
] as Routes;
