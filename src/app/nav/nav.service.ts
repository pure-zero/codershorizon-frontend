import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {environment} from "../../environments/environment";
import {Observable} from 'rxjs/Rx';

@Injectable()
export class NavService {

  constructor(private http: Http) {
  }

  getNavPages() {
    return Observable.forkJoin(
      this.http.get(environment.API_BASE_URL + "pages/?fields=title&format=json&show_in_menus=True&type=home.Homepage")
        .map((res:Response) => res.json()),
      this.http.get(environment.API_BASE_URL + "pages/?fields=title&format=json&show_in_menus=True&type=blog.BlogIndexPage")
        .map(res => res.json())
    );
  }
}
