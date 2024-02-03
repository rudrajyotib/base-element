import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../../src';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'UiElement/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
  
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    importance: 'primary',
    name:'Some Button',
    onClick : () => {console.log('click event')}
  },
};

export const Large: Story = {
  args: {
    importance: 'primary',
    name:'Some Button',
    onClick : () => {console.log('click event')},
    size: 'large'
  },
};

export const Medium: Story = {
  args: {
    importance: 'primary',
    name:'Some Button',
    onClick : () => {console.log('click event')},
    size: 'medium'
  },
};

export const Small: Story = {
  args: {
    importance: 'primary',
    name:'btn',
    onClick : () => {console.log('click event')},
    size: 'small'
  },
};

