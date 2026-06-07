import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './angular-material/angular-material.module';

import { AppComponent } from './app.component';
import { PicsComponent } from './pics/pics.component';
import { PicAddComponent } from './modals/pic-add/pic-add.component';

@NgModule({
  declarations: [
    AppComponent,
    PicsComponent,
    PicAddComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
