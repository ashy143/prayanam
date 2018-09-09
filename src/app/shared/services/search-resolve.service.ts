import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { SearchService } from './search.service';

@Injectable({
  providedIn: 'root'
})
export class SearchResolveService implements Resolve<any> {

  constructor(private searchService: SearchService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    // get route params and get results
  	return this.searchService.search(
      route.params.from,
      route.params.to,
      route.params.depart,
      route.queryParamMap.get('rebound'));
  }
}
