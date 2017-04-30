export class BlogIndexPage{
  id: number;
  title: string;
  intro: string;
  related_links: RelatedLink[];

  constructor(blogIndexObj: any) {
    if (blogIndexObj) {
      this.id = blogIndexObj.id;
      this.title = blogIndexObj.title;
      this.intro = blogIndexObj.intro;
      this.related_links = blogIndexObj.related_links as RelatedLink[];
    }
  }
}

export class RelatedLink{
  page_number: number;
  title: string;
  constructor(relatedLinksObj: any){
    this.page_number = relatedLinksObj.page_number;
    this.title = relatedLinksObj.title;
  }
}
