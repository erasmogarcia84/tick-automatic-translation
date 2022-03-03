import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { MainTranslatorComponent } from './components/main-translator/main-translator.component';
import { NgDropFilesDirective } from './directives/ng-drop-files.directive';
import { TransTextsComponent } from './components/trans-texts/trans-texts.component';
import { TransFilesComponent } from './components/trans-files/trans-files.component';
import { LangsPipe } from './pipes/langs-pipe';
import { LoginComponent } from './components/login/login.component';
import { InfoComponent } from './components/info/info.component';
import { ErrorCodesPipe } from './pipes/error-codes.pipe';
import { InfoVersionsComponent } from './components/info-versions/info-versions.component';

const config = {
  apiKey: "AIzaSyCunoHb1QwcBJchUa1bAcDl3TaSI8dBBj8",
  authDomain: "tick-cloud.firebaseapp.com",
  databaseURL: "https://tick-cloud.firebaseio.com",
  projectId: "tick-cloud",
  storageBucket: "tick-cloud.appspot.com",
  messagingSenderId: "643445452006",
  appId: "1:643445452006:web:754221a7e31dd21372df27",
  measurementId: "G-8HM5EV4YVW"
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MainTranslatorComponent,
    NgDropFilesDirective,
    TransTextsComponent,
    TransFilesComponent,
    LangsPipe,
    LoginComponent,
    InfoComponent,
    ErrorCodesPipe,
    InfoVersionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
