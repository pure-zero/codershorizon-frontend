
export class BlogPost{
  title: string;
  date: Date;
  intro: string;
  body:string;
  main_image_url: string;
  full_url: string;

  constructor(blogPostObj: any){
    if(blogPostObj){
      this.title = blogPostObj.title;
      this.date = new Date(blogPostObj.date);
      this.intro = blogPostObj.intro;
      this.body  = blogPostObj.body;
      this.main_image_url = blogPostObj.main_image_url;
      this.full_url = blogPostObj.full_url;
    }
  }
}
