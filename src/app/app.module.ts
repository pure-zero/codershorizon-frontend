import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { BlogIndexComponent } from './blog-index/blog-index.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

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
        path: 'blog.BlogPage/:id',
        component: BlogPostComponent
    },
    {
        path: '',
        component: HomePageComponent
    },
    {
        path: '**',
        component:PageNotFoundComponent
    }
  ];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomePageComponent,
    BlogIndexComponent,
    BlogPostComponent,
    PageNotFoundComponent
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
