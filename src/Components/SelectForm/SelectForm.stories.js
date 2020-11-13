import React from 'react';
import { storiesOf } from '@storybook/react';
import SelectForm from './SelectForm'

let options = ["Title", "Genre", "Rating"]

storiesOf('SelectForms', module)

 //Selects
 .add('Select Small', () => <SelectForm type="select" options={options} />)
 .add('Select Medium', () => <SelectForm type="select" medium options={options} />)
 .add('Select Large', () => <SelectForm type="select" large options={options} />)

 .add('Select-Box Small', () => <SelectForm type="select" selectBox options={options} />)
 .add('Select-Box Medium', () => <SelectForm type="select" selectBox medium options={options} />)
 .add('Select-Box Large', () => <SelectForm type="select" selectBox large options={options} />)