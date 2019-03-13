import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClassBinderExampleComponent } from './class-binder-example/class-binder-example.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassBinderExampleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
