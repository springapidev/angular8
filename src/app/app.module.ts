import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopnavComponent } from './topnav/topnav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FormComponent } from './form/form.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { TableListComponent } from './table-list/table-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { TreeComponent } from './tree/tree.component';
import { MatTreeModule } from '@angular/material/tree';
import { DragndropComponent } from './dragndrop/dragndrop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { SignupComponent } from './signup/signup.component';
import { CardviewComponent } from './cardview/cardview.component';
import { ListchainingComponent } from './listchaining/listchaining.component';
import { MatCheckboxModule, MatTabsModule } from '@angular/material';
import { TabsComponent } from './tabs/tabs.component';
import { SimpleHttpComponent } from './simple-http/simple-http.component';
import { HttpClientModule } from '@angular/common/http';
import { MoreHttpComponent } from './more-http/more-http.component';
import { SwitchexComponent } from './switchex/switchex.component';
import { StyleexComponent } from './styleex/styleex.component';
import { ClassexComponent } from './classex/classex.component';
import { NgmodelexComponent } from './ngmodelex/ngmodelex.component';
import { CustomvalidationexexComponent } from './customvalidationexex/customvalidationexex.component';
import { HttpcrudexComponent } from './httpcrudex/httpcrudex.component';


@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    FormComponent,
    DashboardComponent,
    TableListComponent,
    TreeComponent,
    DragndropComponent,
    AutocompleteComponent,
    SignupComponent,
    CardviewComponent,
    ListchainingComponent,
    TabsComponent,
    SimpleHttpComponent,
    MoreHttpComponent,
    SwitchexComponent,
    StyleexComponent,
    ClassexComponent,
    NgmodelexComponent,
    CustomvalidationexexComponent,
    HttpcrudexComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTreeModule,
    DragDropModule,
    MatTabsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
