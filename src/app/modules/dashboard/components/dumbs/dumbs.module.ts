import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DumbSidebarComponent } from './dumb-sidebar/dumb-sidebar.component';
import { DumbToolbarComponent } from './dumb-toolbar/dumb-toolbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DumbSidebarComponent, DumbToolbarComponent],
  imports: [CommonModule, RouterModule],
  exports: [DumbSidebarComponent, DumbToolbarComponent],
})
export class DumbsModule {}
