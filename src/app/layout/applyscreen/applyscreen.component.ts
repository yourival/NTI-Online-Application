import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 'app-applyscreen',
  templateUrl: './applyscreen.component.html',
  styleUrls: ['./applyscreen.component.less']
})
export class ApplyscreenComponent implements OnInit {

    constructor(
        private http: _HttpClient
    ) { }

    ngOnInit() {
    }

    links = [
        {
            title: 'Help',
            href: ''
        },
        {
            title: 'Privacy',
            href: ''
        },
        {
            title: 'Terms & Conditions',
            href: ''
        }
    ];
}
