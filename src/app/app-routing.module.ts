import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailComponentComponent } from './email-component/email-component.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:"sendemail",
    component:EmailComponentComponent,
    pathMatch:"full"
  },
  
  {
    path:'',
    component:HomeComponent,
    pathMatch:"full"
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
