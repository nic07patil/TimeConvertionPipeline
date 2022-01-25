import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { AppComponent } from './app.component';
import { ToLocalTimePipe } from './pipes/to-local-time.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule, MatRadioModule],
  declarations: [AppComponent, ToLocalTimePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
