import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';

import { SearchResolveService } from '../shared/services/search-resolve.service';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    // {
    //     path: 'search/:from/:to/:depart',
    //     component: SearchComponent,
    //     resolve: {
    //         results: SearchResolveService
    //     }
    // },
    {
        path: '**',
        // redirect to home for now, can create a 404 page later
        redirectTo: 'home'
    }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [ SearchResolveService ]
})
export class AppRoutingModule {}