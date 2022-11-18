import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CasesListComponent } from './cases-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CasesListComponent],
  imports: [CommonModule, RouterModule],
  exports: [CasesListComponent],
})
export class CasesListModule {}
