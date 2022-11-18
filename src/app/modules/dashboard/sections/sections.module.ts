import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionsRoutingModule } from './sections-routing.module';
import { CasesModule } from './cases/cases.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, SectionsRoutingModule, CasesModule],
  exports: [CasesModule],
})
export class SectionsModule {}
