import React from 'react';
import { storiesOf } from '@storybook/react';
import Form from './Form'

let options = ["Title", "Rating", "Genre"]



storiesOf('Forms', module)

    //Search
    .add('Search Small', () => <Form type="search" placeholder="Search" />)
    .add('Search Medium', () => <Form type="search" medium placeholder="Search" />)
    .add('Search Large', () => <Form type="search" large placeholder="Search" />)

    //Filters
    .add('Filter Small', () => <Form type="filter" options={options} />)
    .add('Filter Medium', () => <Form type="filter" medium options={options} />)
    .add('Filter Large', () => <Form type="filter" large options={options} />)

    .add('Filter-Box Small', () => <Form type="filter" filterBox options={options} />)
    .add('Filter-Box Medium', () => <Form type="filter" filterBox medium options={options} />)
    .add('Filter-Box Large', () => <Form type="filter" filterBox large options={options} />)

   

    //Log In
    .add('Login', () => <Form type="loginForm" placeholder="UserName" buttonText="Login" medium />)
    .add('Login Large', () => <Form type="loginForm" placeholder="UserName" buttonText="Login" loginFormLarge />)

    
    
