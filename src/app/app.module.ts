import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { StudentComponent } from './student/student.component';
import { PersonListComponent } from './person-list/person-list.component';
import { BindingPracticeComponent } from './binding-practice/binding-practice.component';
import { SizerComponent } from './sizer/sizer.component';
import { DirectivespracticeComponent } from './directivespractice/directivespractice.component';
import { LoginComponent } from './login/login.component';
import { TestClass } from './person/Person';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DataBindComponent } from './data-bind/data-bind.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
      StudentComponent,
      PersonListComponent,
      BindingPracticeComponent,
      SizerComponent,
      DirectivespracticeComponent,
      LoginComponent,
      HomeComponent,
      MoviesComponent,
      NavComponent,
      PageNotFoundComponent,
      DataBindComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{
    provide: 'MyToken',
    useValue: 12345
  }, {
    provide: 'MyTest',
    useClass: TestClass
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
