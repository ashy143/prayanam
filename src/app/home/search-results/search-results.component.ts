import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  private from: string;
  private to: string;
  private onwardDate: string;
  private results: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data
      .subscribe((data: { results: any }) => {
        // When API is hooked up, this should be the search results.
        this.results = data;
      });
    this.route.params.subscribe(params => {
      this.from = params['from'];
      this.to = params['to'];
      this.onwardDate = params['onwardDate'];
    })
  }
}
