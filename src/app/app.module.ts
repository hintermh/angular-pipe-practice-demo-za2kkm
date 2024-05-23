import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';

import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';

import { PipeComponent } from './pipe';

import {
  CheckDemoComponent,
  CanFlyPipe,
  CanFlyPipeNotPure,
} from './check-demo/check-demo.component';

import { AsyncMessageComponent } from './async-pipe/async-pipe.component';

import { TextPipesComponent } from './text-pipes/text-pipes.component';
import { DateComponent } from './date/date.component';
import { RateComponent } from './rate/rate.component';
import { PriceComponent } from './price/price.component';
import { DebugComponent } from './debug/debug.component';
import { SliceComponent } from './slice/slice.component';
import { PipeInComponentComponent } from './pipe-in-component/pipe-in-component.component';
import { CustomPipePipe } from './custom-pipe.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    PipeComponent,
    PipeDemoComponent,
    CustomPipeComponent,
    TextPipesComponent,
    DateComponent,
    RateComponent,
    PriceComponent,
    DebugComponent,
    SliceComponent,
    PipeInComponentComponent,
    CustomPipePipe,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
