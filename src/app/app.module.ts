import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { ToDoComponent } from './shared/components/to-do/to-do.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewDataComponent } from './shared/components/view-data/view-data.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ToDoComponent,
    ViewDataComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
