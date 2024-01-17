import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PlatformDataComponent } from './platform-data.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [PlatformDataComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: PlatformDataComponent }]),
    SharedModule,
  ],
  exports: [],
})
export class PlatformDataModule {}
