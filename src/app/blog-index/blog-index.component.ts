import {Component, OnInit, OnDestroy} from '@angular/core';
import {PageService} from "../page.service";
import {ActivatedRoute, Router} from '@angular/router';
import {BlogIndexPage, RelatedLink} from "./BlogIndexPage";

@Component({
  selector: 'app-blog-index',
  templateUrl: './blog-index.component.html',
  styleUrls: ['./blog-index.component.css'],
  providers: [PageService]
})
export class BlogIndexComponent implements OnInit {
  id: number;
  private sub: any;
  public blogIndex: BlogIndexPage;
  errorMessage: string;
  constructor(private pageService : PageService,  private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.pageService.getPage(this.id)
      .subscribe(
        blogIndex => this.blogIndex = new BlogIndexPage(blogIndex),
        error =>  this.errorMessage = <any>error
      );
  }
}
