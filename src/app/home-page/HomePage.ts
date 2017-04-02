/**
 * Created by Kartik on 5/02/17.
 */
export class HomePage {
  id: number;
  title: string;
  body: string;
  full_url: string;
  main_image_url: string;
  linkedIn: string;
  github: string;
  stackOverflow: string;
  heading: string;


  constructor(homePageObj: any) {
    if (homePageObj) {
      this.id = homePageObj.id;
      this.title = homePageObj.title;
      this.body = homePageObj.body;
      this.full_url = homePageObj.full_url;
      this.main_image_url = homePageObj.main_image_url;
      this.linkedIn = homePageObj.linkedIn;
      this.github = homePageObj.github;
      this.stackOverflow = homePageObj.stackOverflow;
      this.heading = homePageObj.heading;
    }
  }
}
