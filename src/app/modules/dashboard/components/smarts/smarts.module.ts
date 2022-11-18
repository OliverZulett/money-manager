import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmartSidebarComponent } from './smart-sidebar/smart-sidebar.component';
import { DumbsModule } from '../dumbs/dumbs.module';
import { SmartToolbarComponent } from './smart-toolbar/smart-toolbar.component';

@NgModule({
  declarations: [SmartSidebarComponent, SmartToolbarComponent],
  imports: [CommonModule, DumbsModule],
  exports: [SmartSidebarComponent, SmartToolbarComponent],
})
export class SmartsModule {}
