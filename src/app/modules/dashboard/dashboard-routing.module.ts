import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { CasesComponent } from './sections/cases/cases.component';
import { CasesModule } from './sections/cases/cases.module';
import { CreateCaseComponent } from './sections/cases/create-case/create-case.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'cases',
        loadChildren: () =>
          import('./sections/cases/cases.module').then((m) => m.CasesModule),
        // component: CasesComponent,
        // children: [
        //   {
        //     path: 'create',
        //     component: CreateCaseComponent
        //   }
        // ]
      },
      // {
      //   path: 'money-manager',
      //   component: MoneyManagerComponent,
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
