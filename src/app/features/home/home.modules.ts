import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: HomeComponent }]),
    SharedModule
  ],
  exports: [],
})
export class HomeModule {}
