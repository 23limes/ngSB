import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { SpaceData } from '../providers/space-data';
import { GreekPlanets } from '../pipes/greek-planets';
import { DetailsPage } from '../pages/details/details';
import { SpaceModalPage } from '../pages/space-modal/space-modal';
import { Planets } from '../providers/planets';
import { SpaceTextComponent } from '../components/space-text/space-text';

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    GreekPlanets,
    DetailsPage,
    SpaceModalPage,
    SpaceTextComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    DetailsPage,
    SpaceModalPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, SpaceData, Planets]
})
export class AppModule {}
