import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizedGuard } from './auth/guards/authorized.guard';
import { CoursesComponent } from './features/courses/courses/courses.component';
import { CoursesLayoutComponent } from './courses-layout.component';
import { NotAuthorizedGuard } from './auth/guards/not-authorized.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'courses',
    pathMatch: 'full'
  },
  {
    canLoad: [AuthorizedGuard],
    path: 'courses',
    loadChildren: () => import('./features/courses/courses.module').then(m => m.CoursesModule)
  },
  {
    path: "login",
    canActivate: [NotAuthorizedGuard],
    loadChildren: () =>
      import("./features/login/login.module").then((m) => m.LoginModule),
  },
  {
    path: "registration",
    canActivate: [NotAuthorizedGuard],
    loadChildren: () =>
      import("./features/registration/registration.module").then((m) => m.RegistrationModule),
  },
  // {
  //   path: 'login',
  //   loadChildren: () => import('./features/login/login-routing.module').then(m => m.LoginRoutingModule)
  // }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
  