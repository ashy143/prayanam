import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../main/main.component';

import { SearchResolveService } from '../shared/services/search-resolve.service';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: MainComponent
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
  exports: [ RouterModule ]
})
export class AppRoutingModule {}