import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: "create-account", redirectTo: "create-account", pathMatch: "full" },
  {
    path: "create-account",
    loadChildren: () =>
      import('./create-account/create-account.module').then((m) => m.CreateAccountModule),
  },
  {
    path: 'sign-in',
    loadChildren: () =>
      import('./sign-in/sign-in.module').then((m) => m.SignInModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
