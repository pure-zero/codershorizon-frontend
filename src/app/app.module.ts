import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { BlogIndexComponent } from './blog-index/blog-index.component';

const appRoutes: Routes = [
    {
        path: 'home.HomePage/:id',
        component: HomePageComponent
    },
    {
        path: 'blog.BlogIndexPage/:id',
        component: BlogIndexComponent
    },
    {
        path: '',
        component: HomePageComponent
    },
  ];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomePageComponent,
    BlogIndexComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
