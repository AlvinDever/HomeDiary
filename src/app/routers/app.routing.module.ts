import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JobsComponent } from '../components/jobs/jobs.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';


const routes: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    {
        path: 'jobs',
        component: JobsComponent,
        children: [
            { path: 'default', component: JobsComponent }
        ]
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
            {path: 'default', component: DashboardComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }