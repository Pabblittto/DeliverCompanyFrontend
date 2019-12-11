import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { Routes } from '@angular/router';

export const DepartmentsRoutes: Routes=[
    {
        path:'detail/:id',
        component:DetailComponent
    },
    {
        path:'list/:page',
        component:ListComponent
    }
];