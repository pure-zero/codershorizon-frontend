import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PageService} from "../page.service";
import {BlogPost} from "./BlogPost";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css'],
  providers: [PageService]
})
export class BlogPostComponent implements OnInit {
  id: number;
  private sub: any;
  public blogPost: BlogPost;
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
        blogIndex => this.blogPost = new BlogPost(blogIndex),
        error =>  this.errorMessage = <any>error
      );
  }
}
