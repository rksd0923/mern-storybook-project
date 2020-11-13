import React from 'react';
import { storiesOf } from '@storybook/react';
import Form from './Form'

let options = ["Title", "Rating", "Genre"]



storiesOf('Forms', module)

    //Emails
    .add('Email Small', () => <Form type="email" placeholder="Email" />)
    .add('Email Medium', () => <Form type="email" medium placeholder="Email" />)
    .add('Email Large', () => <Form type="email" large placeholder="Email" />)

    //Selects
    .add('Select Small', () => <Form type="select" options={options} />)
    .add('Select Medium', () => <Form type="select" medium options={options} />)
    .add('Select Large', () => <Form type="select" large options={options} />)

    .add('Select-Box Small', () => <Form type="select" selectBox options={options} />)
    .add('Select-Box Medium', () => <Form type="select" selectBox medium options={options} />)
    .add('Select-Box Large', () => <Form type="select" selectBox large options={options} />)

   

    //Voucher
    .add('Voucher', () => <Form type="voucherForm" placeholder="Voucher code" buttonText="Redeem" medium />)
    .add('Voucher Large', () => <Form type="voucherForm" placeholder="Voucher code" buttonText="Redeem" voucherFormLarge />)

    
    
