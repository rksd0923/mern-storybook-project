import React from 'react';
import { storiesOf } from '@storybook/react';

import Input from './Input';

storiesOf('Input', module)

    .add('Email Input', () => <Input
        placeholder="Email"
        type="first"
        small
        text="Email"

    />)

    .add('Username Input', () => <Input
        placeholder="Username"
        type="second"
        medium
        text="Email"

    />)

    .add('Password Input', () => <Input
        placeholder="Password"
        type="third"
        large
        text="Email"

    />)

