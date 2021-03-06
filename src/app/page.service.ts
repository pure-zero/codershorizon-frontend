import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/publishReplay';
import {environment} from "../environments/environment";

@Injectable()
export class PageService {
  id: number;
  pageStore: JSON[] = [];
  lastObservable: Observable<JSON>;
  constructor(private http: Http){
  }
  getPage(GUID: number): Observable<JSON>{
    if(GUID) {
      return this.http
        .get(environment.API_BASE_URL + "pages/" + GUID + "/")
        .map(
          response =>{
            this.pageStore[GUID] = this.extractData(response);
            return this.pageStore[GUID];

          })
        .publishReplay(1)
        .refCount()
        .catch(this.handleError);
    } else {
      return this.http
        .get(environment.API_BASE_URL + "pages/?type=home.Homepage")
        .map((res: Response) => res.json()).publishReplay(1).refCount()
        .flatMap(
          data => {
            return this.http
              .get(data.pages[0].meta.detail_url).publishReplay(1).refCount()
              .map(
                response => {
                  this.pageStore[0] = this.extractData(response);
                  return this.pageStore[0];
                })
              .catch(this.handleError);
          });
    }
  }
  private extractData(res: Response) : JSON {
    let body = res.json();
    return body;
  }
  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
