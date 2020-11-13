import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';


storiesOf('Button', module)
    .add('Primary', () => <Button
        label="Do Something"
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



    /*.add('Danger', () => <Button
        label="Danger"
        type="danger"
    />)

    .add('Danger Hover', () => <Button
        label="Do Something"
        type="danger"
        hover

    />)

    .add('Danger Outline', () => <Button
        label="Do Something"
        type="danger"
        outline

    />)

    .add('Danger Faded', () => <Button
        label="Do Something"
        type="danger"
        faded
        label="Do Something"
    />)


    .add('Large Danger', () => <Button
        label="Do Something"
        type="danger"
        large
    />)

    .add('Large Danger Faded', () => <Button
        label="Do Something"
        type="danger"
        large
        faded
    />)

    .add('Large Danger Outline', () => <Button
        label="Do Something"
        type="danger"
        large
        outline
    />)
    .add('Large Danger', () => <Button
        label="Large Danger Button"
        type="danger"
    />)


    .add('Success', () => <Button
        label="Success"
        type="success"
    />)

    .add('Success Hover', () => <Button
        label="Do Something"
        type="success"
        hover

    />)

    .add('Success Outline', () => <Button
        label="Do Something"
        type="success"
        outline

    />)

    .add('Success Faded', () => <Button
        label="Do Something"
        type="success"
        faded
        label="Do Something"
    />)


    .add('Large Success', () => <Button
        label="Do Something"
        type="success"
        large
    />)

    .add('Large Success Faded', () => <Button
        label="Do Something"
        type="success"
        large
        faded
    />)

    .add('Large Success Outline', () => <Button
        label="Do Something"
        type="success"
        large
        outline
    />)
    .add('Large Danger', () => <Button
        label="Large Danger Button"
        type="danger"
    />)

    .add('Warning', () => <Button
        label="Warning"
        type="warning"
    />)

    .add('Warning Hover', () => <Button
        label="Do Something"
        type="warning"
        hover

    />)

    .add('Warning Outline', () => <Button
        label="Do Something"
        type="warning"
        outline

    />)

    .add('Warning Faded', () => <Button
        label="Do Something"
        type="warning"
        faded
        label="Do Something"
    />)


    .add('Large Warning', () => <Button
        label="Do Something"
        type="warning"
        large
    />)

    .add('Large Warning Faded', () => <Button
        label="Do Something"
        type="warning"
        large
        faded
    />)

    .add('Large Warning Outline', () => <Button
        label="Do Something"
        type="warning"
        large
        outline
    />)

    .add('Default', () => <Button
        label="Default"
        type="default"
    />)
    */

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
