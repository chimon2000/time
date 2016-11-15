import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TimesComponent } from './times.component';
import { TimeDetailComponent } from './time-detail';
import { TimeListComponent } from './time-list';
import { TimeFormComponent } from './time-form';
import { AuthGuard } from '../shared/security';

const TIMES_ROUTES: Routes = [
    {
        path: 'times', component: TimesComponent,
        // children: [
        //     {
        //         path: '',
        //         component: TimeListComponent
        //     },
        //     {
        //         path: 'detail/:id',
        //         component: TimeDetailComponent
        //     }
        // ],
        canActivate: [AuthGuard]
    }
]

export const TimesRoutes: ModuleWithProviders = RouterModule.forChild(TIMES_ROUTES)