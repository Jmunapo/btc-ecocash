import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsPopoverPage } from './tabs-popover';

@NgModule({
  declarations: [
    TabsPopoverPage,
  ],
  imports: [
    IonicPageModule.forChild(TabsPopoverPage),
  ],
})
export class TabsPopoverPageModule {}
