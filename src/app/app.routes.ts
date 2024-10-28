import { Routes } from '@angular/router';
import { ListComponent } from './features/list/list.component';

export const routes: Routes = [
    {path: 'lista', component: ListComponent},
    {path: '', redirectTo: 'lista', pathMatch: 'full'}
];
