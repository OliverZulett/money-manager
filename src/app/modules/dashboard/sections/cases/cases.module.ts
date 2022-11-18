import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CasesComponent } from './cases.component';
import { CreateCaseModule } from './create-case/create-case.module';
import { CreateCaseComponent } from './create-case/create-case.component';
import { RouterModule } from '@angular/router';
import { CasesRoutingModule } from './cases-routing.module';
import { CasesListComponent } from './cases-list/cases-list.component';
import { CasesListModule } from './cases-list/cases-list.module';

@NgModule({
  declarations: [CasesComponent],
  imports: [
    CommonModule,
    RouterModule,
    CasesRoutingModule,
    CreateCaseModule,
    CasesListModule,
  ],
})
export class CasesModule {}
