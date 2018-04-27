import { Component, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { FormTransferService } from './form-transfer.services';

@Component({
  selector: 'app-domestic-form',
  templateUrl: './domestic-form.component.html',
  styleUrls: [ './domestic-form.component.less' ],
  providers: [ FormTransferService ]
})
export class DomesticFormComponent implements AfterViewInit {

    constructor(public item: FormTransferService) {}

    ngAfterViewInit() {
        console.log('item', this.item);
    }

}
