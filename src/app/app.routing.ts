import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { UserComponent } from './user/user.component';
import { USER_ROUTES } from './user/user.routes';

const APP_ROUTES: Routes = [
    { path: "user/:id", component: UserComponent },
    { path: "user/:id", component: UserComponent, children: USER_ROUTES },
    { path: "user", redirectTo: "/user/1", pathMatch: 'full' },
    { path: "**", redirectTo: "" }, // Will take effective if specified route is ther than defined routes
    { path: "", component: HomeComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);