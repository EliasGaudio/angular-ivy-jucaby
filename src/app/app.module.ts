import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Solapa1Component } from './solapa1/solapa1.component';
import { Solapa2Component } from './solapa2/solapa2.component';
import { TopbarComponent } from './topbar/topbar.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: Solapa1Component },
      {
        path: 'reservas/:id/:sala/:butacas',
        component: Solapa2Component,
        data: { data: 'Test Data' }
      }
    ]),
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    Solapa1Component,
    TopbarComponent,
    Solapa2Component
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
