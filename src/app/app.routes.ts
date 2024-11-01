import { Routes } from '@angular/router';
import { ListComponent } from './features/list/list.component';
import { AddComponent } from './features/add/add.component';

export const routes: Routes = [
    {path: 'lista', component: ListComponent},
    {path: '', redirectTo: 'lista', pathMatch: 'full'},
    {path: 'cadastrar', component: AddComponent}
];
