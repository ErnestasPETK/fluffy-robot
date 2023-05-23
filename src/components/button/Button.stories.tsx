import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button.tsx';


const meta: Meta<typeof Button> = {
    title: 'Generic_Button',
    component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;


export const Primary: Story = {
    render: () => <Button type={"primary"} text='Submit' />,
};

export const Secondary: Story = {
    render: () => <Button type={"secondary"} text="Cancel" />,
};
