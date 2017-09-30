import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';

//????
import { AppRoutingModule }        from './routing.module';

//Components
import { AppComponent } from './app.component';
import { StartComponent } from './start.component';

//Services???

@NgModule({
  declarations: [
    AppComponent,
    StartComponent
    //InventoryComponent
    //BookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
