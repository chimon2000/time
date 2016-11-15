import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AngularFireModule } from 'angularfire2';
import { TextMaskModule } from 'angular2-text-mask';
import { MomentModule } from 'angular2-moment';
import { MdlModule } from 'angular2-mdl';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { TimesComponent, TimesRoutes, TimeService } from './times';
import { TimeDetailComponent } from './times/time-detail';
import { TimeFormComponent } from './times/time-form';
import { TimeListComponent } from './times/time-list';
import { AppRouting } from './app.routing';
import reducer from './app.state'
import { LoginComponent } from './login/login.component';
import { AuthGuard, AuthService } from './shared/security';
import { SharedModule } from './shared';
import { Ng2SelectModule } from 'ng2-material-select';

const firebaseConfig = {
  apiKey: "AIzaSyDUVQ3BAb5wk0QPjtFAVVMuG_JRWJU5xNE",
  authDomain: "times-1bd38.firebaseapp.com",
  databaseURL: "https://times-1bd38.firebaseio.com",
  storageBucket: "times-1bd38.appspot.com",
  messagingSenderId: "242856327620"
};

@NgModule({
  declarations: [
    AppComponent,
    TimeFormComponent,
    TimeListComponent,
    HeaderComponent,
    FooterComponent,
    TimesComponent,
    TimeDetailComponent,
    LoginComponent
  ],
  imports: [
    //Angular
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    //3rd Party
    AngularFireModule.initializeApp(firebaseConfig),
    TextMaskModule,
    MomentModule,
    MdlModule,
    Ng2SelectModule,
    //App
    AppRouting,
    TimesRoutes,
    StoreModule.provideStore(reducer, { times: [] }),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    SharedModule
  ],
  providers: [
    TimeService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
