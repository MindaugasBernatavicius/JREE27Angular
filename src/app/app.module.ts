import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { LifecycleMethodsComponent } from './components/lifecycle-methods/lifecycle-methods.component';
import { StarComponent } from './components/star/star.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DatabindingComponent,
    DirectivesComponent,
    HomeComponent,
    AboutComponent,
    LifecycleMethodsComponent,
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      // localhost:4200/home --> load the HomeComponent
      { path: 'home', component: HomeComponent },
      { path: 'databinding-examples', component: DatabindingComponent },
      { path: 'directives-examples', component: DirectivesComponent },
      { path: 'lifecycle-methods-examples', component: LifecycleMethodsComponent },
      { path: 'about', component: AboutComponent },
      // for URLs that do not exist/not valid for you app, we can return a default page or a 404
      { path: '**', redirectTo: 'home', pathMatch: 'full' },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
