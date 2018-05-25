import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AddInventComponent} from './add-invent/add-invent.component';
import {ListComponent} from './list/list.component';
import {HistoryComponent} from './history/history.component';
import {ConfirmComponent} from './confirm/confirm.component';
import {WebStorageModule} from 'ngx-store';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {LogoutComponent} from './logout/logout.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', pathMatch: 'full', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'add', component: AddInventComponent},
  {path: 'list', component: ListComponent},
  {path: 'history', component: HistoryComponent},
  {path: 'confirm', component: ConfirmComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AddInventComponent,
    ListComponent,
    HistoryComponent,
    ConfirmComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    WebStorageModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
