import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: LoginComponent }]),
    SharedModule,
  ],
  exports: [],
})
export class LoginModule {}
