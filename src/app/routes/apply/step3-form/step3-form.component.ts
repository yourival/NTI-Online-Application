import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { HttpHeaders } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { FormTransferService } from '../domestic-form/form-transfer.services';

@Component({
  selector: 'app-step3-form',
  templateUrl: './step3-form.component.html',
})
export class Step3FormComponent implements OnInit {

    form: FormGroup;
    courses;
    semesters;
    semester_years;
    studyModes;
    

    constructor(
        private http: _HttpClient,
        private fb: FormBuilder, 
        public item: FormTransferService
    ) { }

    ngOnInit() {
        this.form = this.fb.group({
            course: [null, Validators.required],
            semester: [null, [Validators.required]],
            semester_year: [null, [Validators.required]],
            study_mode: [null, [Validators.required]]
        });
        this.form.patchValue(this.item);

        setTimeout(_ => {
            this.courses = [
              { value: '072349G Graduate Certificate in Applied Buddhist Studies', label: '072349G Graduate Certificate in Applied Buddhist Studies' },
              { value: '072350D Graduate Diploma of Applied Buddhist Studies', label: '072350D Graduate Diploma of Applied Buddhist Studies' },
              { value: '072351C Master of Arts (Applied Buddhist Studies)', label: '072351C Master of Arts (Applied Buddhist Studies)' }
            ];
            this.semesters = [
                { value: 'Spring', label: 'Spring (Jul)' },
                { value: 'Autumn', label: 'Autumn (Feb/Mar)' }
            ];
            this.semester_years = [
            { value: '2018', label: '2018' },
            { value: '2019', label: '2019' }
            ];
            this.studyModes = [
            { value: 'Full-time', label: 'Full-time' },
            { value: 'Part-time', label: 'Part-time' }
            ];
          }, 100);
    }

    prev() {
        --this.item.step;
    }

}
