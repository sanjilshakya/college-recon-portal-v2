import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: RegisterComponent }]),
    SharedModule,
  ],
  exports: [],
})
export class RegisterModule {}
