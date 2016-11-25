import { Component, OnInit } from '@angular/core';
import { NavService } from './nav.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  providers: [NavService]
})
export class NavComponent implements OnInit {
  public blogIndexPages;
  public homePages;
  constructor(private navService : NavService) {
     navService.getNavPages()
       .subscribe(
         data => {
           this.homePages = data[0].pages;
           this.blogIndexPages = data[1].pages;
         },
         err => console.error(err),
         () => console.log('Loaded Navigation')
       );
  }

  ngOnInit() {
  }

}
