import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormComponent } from './form/form.component';
import { TableListComponent } from './table-list/table-list.component';
import { DragndropComponent } from './dragndrop/dragndrop.component';
import { TreeComponent } from './tree/tree.component';
import { SignupComponent } from './signup/signup.component';
import { CardviewComponent } from './cardview/cardview.component';
import { ListchainingComponent } from './listchaining/listchaining.component';
import { TabsComponent } from './tabs/tabs.component';
import { SimpleHttpComponent } from './simple-http/simple-http.component';
import { MoreHttpComponent } from './more-http/more-http.component';
import { SwitchexComponent } from './switchex/switchex.component';
import { StyleexComponent } from './styleex/styleex.component';
import { ClassexComponent } from './classex/classex.component';
import { NgmodelexComponent } from './ngmodelex/ngmodelex.component';
import { CustomvalidationexexComponent } from './customvalidationexex/customvalidationexex.component';
import { HttpcrudexComponent } from './httpcrudex/httpcrudex.component';

const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'form',component:FormComponent},
  {path:'table',component:TableListComponent},
  {path:'dragndrop',component:DragndropComponent},
  {path:'signup',component:SignupComponent},
  {path:'cardview',component:CardviewComponent},
  {path:'listchaining',component:ListchainingComponent},
  {path:'tabs',component:TabsComponent},
  {path:'simple-http',component:SimpleHttpComponent},
  {path:'tree',component:TreeComponent},
  {path:'more-http',component:MoreHttpComponent},
  {path:'httpcrudex',component:HttpcrudexComponent},
  {path:'switchex',component:SwitchexComponent},
  {path:'styleex',component:StyleexComponent},
  {path:'classex',component:ClassexComponent},
  {path:'modelex',component:NgmodelexComponent},
  {path:'validationex',component:CustomvalidationexexComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
