import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';


storiesOf('Button', module)
    .add('Primary', () => <Button
        label="Do something"
        type="primary"
    />)
    .add('Primary Hover', () => <Button
        label="Do Something"
        type="primary"
        hover

    />)

    .add('Primary Outline', () => <Button
        label="Do Something"
        type="primary"
        outline

    />)

    .add('Primary Faded', () => <Button
        label="Primary"
        type="primary"
        faded
        label="Do Something"
    />)


    .add('Large Primary', () => <Button
        label="Do Something"
        type="primary"
        large
    />)

    .add('Large Primary Faded', () => <Button
        label="Do Something"
        type="primary"
        large
        faded
    />)

    .add('Large Primary Outline', () => <Button
        label="Do Something"
        type="primary"
        large
        outline
    />)

    .add('Default Hover', () => <Button
        label="Do Something"
        type="default"
        hover

    />)

    .add('Default Outline', () => <Button
        label="Do Something"
        type="default"
        outline

    />)

    .add('Default Faded', () => <Button
        label="Do Something"
        type="default"
        faded
        label="Do Something"
    />)


    .add('Large Default', () => <Button
        label="Do Something"
        type="default"
        large
    />)

    .add('Large Default Faded', () => <Button
        label="Do Something"
        type="default"
        large
        faded
    />)

    .add('Large Default Outline', () => <Button
        label="Do Something"
        type="default"
        large
        outline
    />)
