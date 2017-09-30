import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

//????
import { AppRoutingModule }        from './routing.module';

//Components
import { AppComponent } from './app.component';
import { StartComponent } from './start.component';

//Services???
import { BookService } from './get-book.service';


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
    AppRoutingModule,
    HttpModule
  ],
  providers: [
  	BookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
