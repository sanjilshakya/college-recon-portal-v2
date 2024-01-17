import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminYellowRibbonProgramComponent } from './yellow-ribbon-program.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [AdminYellowRibbonProgramComponent],
  imports: [
    RouterModule.forChild([
      { path: '', component: AdminYellowRibbonProgramComponent },
    ]),
    SharedModule,
  ],
  exports: [],
})
export class AdminYellowRibbonProgramModule {}
