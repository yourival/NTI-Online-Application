import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ApplyRoutingModule } from './apply-routing.module';
import { Step1FormComponent } from './step1-form/step1-form.component';
import { DomesticFormComponent } from './domestic-form/domestic-form.component';
import { Step2FormComponent } from './step2-form/step2-form.component';
import { Step3FormComponent } from './step3-form/step3-form.component';

const COMPONENT_NOROUNT = [];

@NgModule({
  imports: [
    SharedModule,
    ApplyRoutingModule
  ],
  declarations: [
      ...COMPONENT_NOROUNT,
      Step1FormComponent,
      DomesticFormComponent,
      Step2FormComponent,
      Step3FormComponent
  ],
  entryComponents: COMPONENT_NOROUNT
})
export class ApplyModule { }
