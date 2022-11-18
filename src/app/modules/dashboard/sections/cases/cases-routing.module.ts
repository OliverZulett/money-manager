import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCaseComponent } from './create-case/create-case.component';
import { CasesListComponent } from './cases-list/cases-list.component';

const routes: Routes = [
  {
    path: 'create',
    component: CreateCaseComponent,
  },
  {
    path: '',
    component: CasesListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CasesRoutingModule {}
