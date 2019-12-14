import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';
import { Routes } from '@angular/router';

export const DepartmentsRoutes: Routes=[
    {
        path:'details/:id',
        component:DetailsComponent
    },
    {
        path:'list/:page',// tu kurwa dodać list/:page
        component:ListComponent
    },
    {        
        path:'',
        component:ListComponent
    },
    {
        path:'edit/:id',
        component:EditComponent
    },
    {
        path:'add',
        component:AddComponent
    }


    
];