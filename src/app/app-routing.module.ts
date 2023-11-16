import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { usuarioLogueadoGuard } from './guards/usuario-logueado.guard';
import { usuarioSinLoguearGuard } from './guards/usuario-sin-loguear.guard';

const routes: Routes = [
  {
    path:'login',
    canActivate: [usuarioSinLoguearGuard],
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path:'register',
    canActivate: [usuarioSinLoguearGuard],
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule)
  },
  {
    path:'contacts',
    canActivate: [usuarioLogueadoGuard],
    loadChildren: () => import('./pages/contacts/contacts.module').then(m => m.ContactsModule)
  },

  {
    path:'contacts/:id',
    loadChildren: () => import('./pages/details-contact/details-contact.module').then(m => m.DetailsContactModule)
  },
  {
    path: '',
    redirectTo: 'contacts',
    pathMatch: 'full'
    },
  {
    path: '**',
    loadChildren: () => import('./pages/error/error.module').then(m => m.ErrorModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

