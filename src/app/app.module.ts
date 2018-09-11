import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './routes/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//import { MaterialComponentsModuleModule } from './material-components-module/material-components-module.module'


import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SearchService } from './shared/services/search.service';
import { ContactComponent } from './home/contact/contact.component';
import { FeaturesComponent } from './home/features/features.component';
import { PopularComponent } from './home/popular/popular.component';
import { CardComponent } from './home/popular/card/card.component';
import { SearchComponent } from './home/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    FeaturesComponent,
    PopularComponent,
    CardComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
//    MaterialComponentsModuleModule
    
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }

