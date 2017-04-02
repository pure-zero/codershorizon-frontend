/*
*
* Component to render the Homeepage views
*
 */
import {Component, OnInit, OnDestroy} from '@angular/core';
import {HomePageService} from './home-page.service';
import {ActivatedRoute} from '@angular/router';
import {HomePage} from "./HomePage";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers: [HomePageService]
})
export class HomePageComponent implements OnInit, OnDestroy{
  id: number;
  private sub: any;
  public homePage: HomePage;
  public cmsURL: string;
  errorMessage: string;
  constructor(private homePageService : HomePageService, private route: ActivatedRoute) {
    this.cmsURL = environment.BASE_URL;
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.homePageService.getHomePage(this.id)
      .subscribe(
        homePage => this.homePage = homePage,
        error =>  this.errorMessage = <any>error
      );
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
