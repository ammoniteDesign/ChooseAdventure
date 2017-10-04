import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule }        from './routing.module';


//Components
import { AppComponent } from './app.component';

//Scum Quarter Components
import { ScumQuarterComponent } from './scum-quarter/scum-quarter.component';
import { ScumQuarterStartComponent } from './scum-quarter/scum-quarter-start.component';

//Services
import { BookService } from './services/book.service';
import { FunctionService } from './services/functions';

@NgModule({
  declarations: [
    AppComponent,
    ScumQuarterComponent,
    ScumQuarterStartComponent
  ],
  entryComponents: [ 
    ScumQuarterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [
  	BookService,
    FunctionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
