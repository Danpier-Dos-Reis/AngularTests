import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { ContentoneComponent } from './child/contentone/contentone.component';
import { ContenttwoComponent } from './child/contenttwo/contenttwo.component';
import { ContentthreeComponent } from './child/contentthree/contentthree.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ContentoneComponent,
    ContenttwoComponent,
    ContentthreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
