import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule }  from './routing.module';

//Components
import { AppComponent } from './app.component';
import { GameEngineComponent } from './game-engine.component';
import { GameEngineStartComponent } from './game-engine-start.component';
import { GameEngineInventoryComponent } from './game-engine-inventory.component';
import { GameEnginePageComponent } from './game-engine-page.component';

//Scum Quarter Components
import { ScumQuarterComponent } from './scum-quarter/scum-quarter.component';
import { ScumQuarterStartComponent } from './scum-quarter/scum-quarter-start.component';
import { ScumQuarterInventoryComponent } from './scum-quarter/scum-quarter-inventory.component';
import { ScumQuarterPageComponent } from './scum-quarter/scum-quarter-page.component';

//Services and Pipes
import { BookService } from './services/book.service';
import { DiePipe } from './services/die.pipe';



@NgModule({
  declarations: [
    AppComponent,
    GameEngineComponent,
    GameEngineStartComponent,
    GameEngineInventoryComponent,
    GameEnginePageComponent,
    DiePipe,
    
    ScumQuarterComponent,
    ScumQuarterStartComponent,
    ScumQuarterInventoryComponent,
    ScumQuarterPageComponent
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
    BookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
