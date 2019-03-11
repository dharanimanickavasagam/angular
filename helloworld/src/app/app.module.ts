import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';
import { ExampleClassComponent } from './example-class/example-class.component';
import { ExampleAttributeComponent } from './example-attribute/example-attribute.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    ExampleClassComponent,
    ExampleAttributeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
