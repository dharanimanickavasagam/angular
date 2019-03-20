import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TemplateReferenceVariablesComponent } from './template-reference-variables/template-reference-variables.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateReferenceVariablesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
