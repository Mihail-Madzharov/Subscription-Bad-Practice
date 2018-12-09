import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { WhySoManyComponent } from './why-so-many/why-so-many.component';
import { ItsAliveComponent } from './its-alive/its-alive.component';
import { WaterfallComponent } from './waterfall/waterfall.component';

const routes: Routes = [
  { path: 'its-alive', component: ItsAliveComponent },
  { path: 'why-so-many', component: WhySoManyComponent },
  { path: 'waterfall', component: WaterfallComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    WhySoManyComponent,
    ItsAliveComponent,
    WaterfallComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
