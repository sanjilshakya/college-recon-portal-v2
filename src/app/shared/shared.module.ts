import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { PopUpComponent } from './pop-up/pop-up.component';
import { ToasterComponent } from './toaster/toaster.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LoadingSpinnerComponent,
    PopUpComponent,
    ToasterComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    CommonModule,
    RouterModule,
    LoadingSpinnerComponent,
    PopUpComponent,
    ToasterComponent,
    HeaderComponent,
    FooterComponent,
  ],
})
export class SharedModule {}
