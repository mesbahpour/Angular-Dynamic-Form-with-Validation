import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guard/auth.guard';
import { NotFoundComponent } from './session/not-found/not-found.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./session/session.module').then(m => m.SessionModule) },
  { path: 'dashboard', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) , canActivate:[AuthGuard]},
  { path: 'not-found', component:NotFoundComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
