import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DepositPage } from './deposit';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    DepositPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(DepositPage),
  ],
})
export class DepositPageModule {}
