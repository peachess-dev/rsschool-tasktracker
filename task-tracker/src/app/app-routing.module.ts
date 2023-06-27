import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/login/login.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { BoardComponent } from './components/new-board/new-board.component';
import { BoardOverviewComponent } from './board/components/overview/overview.component';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomePageComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'main', component: MainPageComponent },
  {
    path: 'boards',
    loadChildren: () =>
      import('./board/board.module').then((m) => m.BoardModule),
  },
  { path: '**', component: ErrorComponent }, //should always be the last route because it matches every route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
