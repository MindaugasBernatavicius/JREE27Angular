import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app-component/app.component';
import { HeaderComponent } from './header-component/header.component';
import { FooterComponent } from './footer-component/footer.component';
import { DatabindingComponent } from './databinding-component/databinding.component';
import { DirectivesComponent } from './directives-component/directives.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home-component/home.component';
import { AboutComponent } from './about-component/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DatabindingComponent,
    DirectivesComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      // localhost:4200/home --> load the HomeComponent
      { path: 'home', component: HomeComponent },
      { path: 'databinding-examples', component: DatabindingComponent },
      { path: 'directives-examples', component: DirectivesComponent },
      { path: 'about', component: AboutComponent },
      // for URLs that do not exist/not valid for you app, we can return a default page or a 404
      { path: '**', redirectTo: 'home', pathMatch: 'full' },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
