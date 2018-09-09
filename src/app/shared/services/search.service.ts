import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  search(from: string, to: string, depart: string, rebound?: string): Observable<any> {
    return null;
  }
}
