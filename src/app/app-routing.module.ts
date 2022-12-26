import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './Components/details/details.component';
import { HomeComponent } from './Components/home/home.component';


const routes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'details' , component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
