import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasesComponent } from './cases/cases.component';
import { CasesListComponent } from './cases/cases-list/cases-list.component';

const routes: Routes = [
  {
    path: 'cases',
    component: CasesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SectionsRoutingModule {}
