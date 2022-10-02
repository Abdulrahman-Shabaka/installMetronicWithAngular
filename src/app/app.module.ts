import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './layouts/auth/auth.component';
import { MainComponent } from './layouts/main/main.component';
import { AuthModule } from './modules/auth/auth.module';
import { ErrorsModule } from './modules/errors/errors.module';
import { MainModule } from './modules/main/main.module';
import { HeaderComponent } from './layouts/main/components/header/header.component';
import { FooterComponent } from './layouts/main/components/footer/footer.component';
import { SideMenuComponent } from './layouts/main/components/side-menu/side-menu.component';
import { LoginComponent } from './layouts/auth/components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    SideMenuComponent,
    LoginComponent
    
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    MainModule,
    ErrorsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
