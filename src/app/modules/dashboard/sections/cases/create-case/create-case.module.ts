import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCaseComponent } from './create-case.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CreateCaseComponent],
  imports: [CommonModule, RouterModule],
  exports: [CreateCaseComponent],
})
export class CreateCaseModule {}
