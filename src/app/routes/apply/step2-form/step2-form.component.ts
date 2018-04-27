import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { FormTransferService } from '../domestic-form/form-transfer.services';

@Component({
  selector: 'app-step2-form',
  templateUrl: './step2-form.component.html',
})
export class Step2FormComponent implements OnInit {

    form: FormGroup;
    loading = false;

    constructor(private fb: FormBuilder, public item: FormTransferService) {}

    ngOnInit() {
        this.form = this.fb.group({
            country: [null, Validators.required],
            street: [null, Validators.required],
            suburb: [null, Validators.required],
            state: [null, Validators.required],
            postcode: [null, Validators.required],
            home_tel: [null, Validators.required],
            work_tel: [null, Validators.required],
            mobile: [null, Validators.required],
            sameAddress: [false],
            mail_country: [null, Validators.required],
            mail_street: [null, Validators.required],
            mail_suburb: [null, Validators.required],
            mail_state: [null, Validators.required],
            mail_postcode: [null, Validators.required]
        });
        this.form.patchValue(this.item);
    }
    get sameAddress() { return this.form.controls['sameAddress'].value; }

    _submitForm() {
        this.loading = true;
        setTimeout(() => {
            this.loading = false;
            ++this.item.step;
        }, 1000 * 2);
    }

    prev() {
        --this.item.step;
    }
}
