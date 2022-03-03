import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainTranslatorComponent } from './components/main-translator/main-translator.component';
import { TransTextsComponent } from './components/trans-texts/trans-texts.component';
import { TransFilesComponent } from './components/trans-files/trans-files.component';
import { LoginComponent } from './components/login/login.component';
import { InfoComponent } from './components/info/info.component';
import { InfoVersionsComponent } from './components/info-versions/info-versions.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: MainTranslatorComponent },
  { path: 'info', component: InfoVersionsComponent },
  { path: 'texts', component: TransTextsComponent },
  { path: 'files', component: TransFilesComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
