import { Routes } from '@angular/router';
import { ListComponent } from './features/list/list.component';
import { AddComponent } from './features/add/add.component';
import { EditComponent } from './features/edit/edit.component';

export const routes: Routes = [
    {path: 'lista', component: ListComponent},
    {path: '', redirectTo: 'lista', pathMatch: 'full'},
    {path: 'cadastrar', loadComponent: () => import('./features/add/add.component').then(m => AddComponent)},
    {path: 'editar', loadComponent: () => import('./features/edit/edit.component').then(m => EditComponent)}
];
