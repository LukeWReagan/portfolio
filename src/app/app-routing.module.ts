import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MEANComponent } from './mean/mean.component';
import { PythonComponent } from './python/python.component';
import { CSharpComponent } from './csharp/csharp.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'mean',component: MEANComponent },
  { path: 'python',component: PythonComponent },
  { path: 'csharp',component: CSharpComponent },
  { path: 'home',component: HomeComponent },
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
