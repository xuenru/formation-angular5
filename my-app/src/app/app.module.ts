import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { Page404Module } from './page404/page404.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CollectionService } from './core/services/collection/collection.service';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment.prod';
import { AngularFirestoreModule } from 'angularfire2/firestore';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    HomeModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    Page404Module,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [CollectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
