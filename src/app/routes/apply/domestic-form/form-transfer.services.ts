import { Injectable } from '@angular/core';

@Injectable()
export class FormTransferService {

    step: 0 | 1 | 2 = 1;

    /**
     * 付款账户
     */
    title: string;

    /**
     * 收款账户类型
     */
    last_name: string;

    /**
     * 收款账户
     */
    first_name: string;

    /**
     * 收款姓名
     */
    dob: string;

    /**
     * 金额
     */
    email: string;

    /**
     * 支付密码
     */
    confirm_email: string;

    sameAddress: boolean;

    subject: string;
    country: string;
    street: string;
    suburb: string;
    state: string;
    postcode: string;
    home_tel: string;
    work_tel: string;
    mobile: string;
    mail_country: string;
    mail_street: string;
    mail_suburb: string;
    mail_state: string;
    mail_postcode: string;

    again() {
        this.step = 0;
        this.title = 'Mr';
        this.last_name = 'Gavin';
        this.first_name = 'You';
        this.dob = '1/1/1911';
        this.email = 'g.you@natien.edu.au';
        this.confirm_email = 'g.you@natien.edu.au';
        this.country = 'Australia';
        this.street = '35 McGrath St.';
        this.suburb = 'Fairy Meadow';
        this.state = 'NSW';
        this.postcode = '2519';
        this.home_tel = '+86 576 5566 7788';
        this.work_tel = '+61 576 5566 7788';
        this.mobile = '0488 888 888';
        this.mail_country = this.country;
        this.mail_street = this.street;
        this.mail_suburb = this.suburb;
        this.mail_state = this.state;
        this.mail_postcode = this.postcode;
    }

    constructor() {
        this.again();
    }
}
