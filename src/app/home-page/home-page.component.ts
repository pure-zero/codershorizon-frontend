/*
*
* Component to render the Homeepage views
*
 */
import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HomePage} from "./HomePage";
import {environment} from "../../environments/environment";
import {PageService} from "../page.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers: [PageService]
})
export class HomePageComponent implements OnInit, OnDestroy{
  id: number;
  private sub: any;
  public homePage: HomePage;
  public cmsURL: string;
  errorMessage: string;
  constructor(private pageService : PageService, private route: ActivatedRoute) {
    this.cmsURL = environment.BASE_URL;
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.pageService.getPage(this.id)
      .subscribe(
        homePage => this.homePage = new HomePage(homePage),
        error =>  this.errorMessage = <any>error
      );
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
