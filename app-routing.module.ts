import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { APICOMPComponent } from './apicomp/apicomp.component';
import { Apicomp2Component } from './apicomp2/apicomp2.component';
import { MovieComponent } from './movie/movie.component';
import { MovielistComponent } from './movielist/movielist.component';


const routes: Routes = [
  {path:'',component:APICOMPComponent},
{path:'api',component:APICOMPComponent},
{path:'api2',component:Apicomp2Component},
{path:'movie',component:MovieComponent},
{path:'moviepath',component:MovielistComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
