import type { Meta, StoryObj } from '@storybook/react';
import InputWithLabel from '../input-with-label/TextInputWithLabel.tsx';
import Button from '../button/Button.tsx';

import Form from './Form.tsx';


const meta: Meta<typeof Form> = {
    title: 'Generic_Form',
    component: Form,
};

export default meta;
type Story = StoryObj<typeof Form>;


const inputProps = {
    active: true,
    valid: true,
    type: "text",
    name: "input1",
    label: "Input element",
    placeholder: "Input here",
    onChangeFn: () => null,
}

const inputElements = [<InputWithLabel {...inputProps} />,
<InputWithLabel {...inputProps} messageType='ERROR' text="This is an ERROR message" />,
<InputWithLabel {...inputProps} messageType='INFO' text="This is an INFO message" />,]
const buttonElements = [<Button type="primary" text="Submit" />]


const formProps = {
    inputElements: inputElements,
    buttonElements: buttonElements,
    title: "Title",
    onSubmit: () => null,
    url: ""
}

export const Default: Story = {
    render: () => <Form {...formProps} />,
};