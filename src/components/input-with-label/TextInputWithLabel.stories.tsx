import type { Meta, StoryObj } from '@storybook/react';

import InputWithLabel from './TextInputWithLabel.tsx';


const meta: Meta<typeof InputWithLabel> = {
    title: 'Generic_Input_with_Label',
    component: InputWithLabel,
};

export default meta;
type Story = StoryObj<typeof InputWithLabel>;

const handleInput = () => null;

export const Inactive: Story = {
    render: () => <InputWithLabel active={false} valid name="inactive" placeholder="Inactive input" label="Inactive input: " type="text" onChangeFn={handleInput} />,
};
export const Active: Story = {
    render: () => <InputWithLabel active valid name="active" placeholder="Active input" label="Active input: " type="text" onChangeFn={handleInput} />,
};
export const ActiveInvalid: Story = {
    render: () => <InputWithLabel active valid={false} name="invalid" placeholder="Invalid input" label="Invalid input: " type="text" messageType="ERROR" text="Invalid input" onChangeFn={handleInput} />,
};