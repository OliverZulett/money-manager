import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmartsModule } from './smarts/smarts.module';
import { DumbsModule } from './dumbs/dumbs.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, SmartsModule, DumbsModule],
  exports: [SmartsModule],
})
export class ComponentsModule {}
