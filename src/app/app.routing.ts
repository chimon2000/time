import { Routes, RouterModule } from '@angular/router'

import { TimesComponent } from './times';
import { TimeDetailComponent } from './times/time-detail';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/security/auth.guard';

const routes: Routes = [
    { path: '', redirectTo: 'times', pathMatch: 'full' },
    {
        'path': 'login',
        component: LoginComponent
    }
]

export const AppRouting = RouterModule.forRoot(routes)