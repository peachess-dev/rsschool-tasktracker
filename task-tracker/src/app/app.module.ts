import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PrimengModule } from './primeng-imports.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { BoardsComponent } from './components/boards/boards.component';
import { BoardComponent } from './components/new-board/new-board.component';
import { ListComponent } from './components/list/list.component';
import { TaskComponent } from './components/task/task.component';
import { TaskformComponent } from './components/taskform/taskform.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, // Core
    FooterComponent, // Core
    WelcomePageComponent,
    LoginComponent, // Core
    ErrorComponent, // Core
    RegistrationComponent, // Core
    MainPageComponent,
    NavigationComponent, // Core
    BoardsComponent, // Boards
    BoardComponent, // boards
    ListComponent, // Boards
    TaskComponent, // boards
    TaskformComponent, // boards
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule,
    // CoreModule
    // BoardsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
