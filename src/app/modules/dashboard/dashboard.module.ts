import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { FooterModule } from '../../layout/footer/footer.module';
import { ComponentsModule } from './components/components.module';
import { SectionsModule } from './sections/sections.module';
import { SmartsModule } from './components/smarts/smarts.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FooterModule,
    ComponentsModule,
    SectionsModule,
    // SmartsModule
  ],
})
export class DashboardModule {}
