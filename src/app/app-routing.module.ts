import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewAnimalComponent } from './new-animal.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'animal'},
  {path:'animal', component: NewAnimalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
