import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in.component';
import { SignInRoutingModule } from './sing-in-routing.module';
import { FooterModule } from '../../layout/footer/footer.module';

@NgModule({
  declarations: [SignInComponent],
  imports: [CommonModule, SignInRoutingModule, FooterModule],
})
export class SignInModule {}
