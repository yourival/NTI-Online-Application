import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { HttpHeaders } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { FormTransferService } from '../domestic-form/form-transfer.services';

@Component({
  selector: 'app-step1-form',
  templateUrl: './step1-form.component.html',
})
export class Step1FormComponent implements OnInit {

    form: FormGroup;
    searchOptions;
    begin;
    req;
    headers = new HttpHeaders();
    myheaders = this.headers.set('Content-Type', 'application/json');

    hapikey = 'https://api.hubapi.com/contacts/v1/contact?c0edb03c-b7f1-4d9f-91ef-1e6013d35ecc';

    constructor(private http: _HttpClient, private fb: FormBuilder, public item: FormTransferService) {}

    ngOnInit() {
        this.form = this.fb.group({
            title: [null, Validators.required],
            last_name: [null, [Validators.required]],
            first_name: [null, [Validators.required]],
            dob: [null, Validators.required],
            email: [null, Validators.compose([Validators.required, Validators.email])],
            confirm_email: [null, Validators.compose([Validators.required, Step1FormComponent.emailEquar])]
        });
        this.form.patchValue(this.item);
        this.begin = null;
        setTimeout(_ => {
            this.searchOptions = [
              { value: 'Mr', label: 'Mr' },
              { value: 'Miss', label: 'Miss' },
              { value: 'Ms', label: 'Ms' }
            ];
          }, 100);
    }

    static emailEquar(control: FormControl) {
        if (!control || !control.parent) return null;
        if (control.value !== control.parent.get('email').value) {
            return { equar: true };
        }
        return null;
    }

    _submitForm() {
        this.item = Object.assign(this.item, this.form.value);
        ++this.item.step;
        console.log('item', this.item);
    }
    
}
