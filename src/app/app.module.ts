import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {StudentComponent} from "./demo1/demo1.component";
import {ClassroomComponent} from "./demo2/demo2.component";
import {FormsModule} from "@angular/forms";
import {HomeComponent} from "./page/home/home.component";
import {LoginComponent} from "./page/Login/Login.component";
import {RouterModule, Routes, ROUTES} from "@angular/router";
import {SignupComponent} from "./page/SignUp/signup.component";
import {ContactusComponent} from "./page/ContactUs/contactus.component";
import {TOSComponent} from "./page/TOS/TOS.component";
import {FoodComponent} from "./page/Food/food.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {WeatherComponent} from "./page/weather/weather.component";

//khaibao cac page tren website
const appRoutes: Routes =[
  {path: '', component: HomeComponent},
  {path: 'login', component:LoginComponent },
  {path: 'signup', component: SignupComponent},
  {path: 'contactus', component: ContactusComponent},
  {path: 'tos', component: TOSComponent},
  {path: 'food', component: FoodComponent},
  {path: 'weather', component: WeatherComponent},


]
@NgModule({
  declarations: [
    AppComponent, StudentComponent, ClassroomComponent,
    HomeComponent, LoginComponent, SignupComponent,
    ContactusComponent, TOSComponent, FoodComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    RouterModule.forRoot(appRoutes), HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
