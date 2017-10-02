import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

//????
import { AppRoutingModule }        from './routing.module';

//Components
import { AppComponent } from './app.component';
import { ScumQuarterComponent } from './scum-quarter.component';


//Services???
import { BookService } from './book.service';
import { HeroService } from './hero.service';

@NgModule({
  declarations: [
    AppComponent,
    ScumQuarterComponent
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
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
