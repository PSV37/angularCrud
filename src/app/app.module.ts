import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule , Routes} from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ShowuserComponent } from './showuser/showuser.component';
import { HomeComponent } from './home/home.component';
import { ConfigComponent } from './config/config.component';
import { LoginComponent } from './login/login.component';

const routes : Routes = [
  {path:'' , component:HomeComponent},
  {path:'user' , component:UserComponent},
  {path:'showuser' , component:ShowuserComponent},
  {path:'login' , component:LoginComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ShowuserComponent,
    HomeComponent,
    ConfigComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      routes
    ),
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
