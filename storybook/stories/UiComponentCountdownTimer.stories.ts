import type { Meta, StoryObj } from '@storybook/react';

import { CountdownTimerProps, CountdownTimer } from '../../src';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'UiComponet/CountdownTimer',
  component: CountdownTimer,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
  
  },
} satisfies Meta<typeof CountdownTimer>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    startTimer:195,
    timerName: 'storyTimer',
    onTimeout: ()=>{console.log('Done')},
    border: {apply:true, color:'red', width:'thin'}
  },
};

export const NoBorder: Story = {
  args: {
    startTimer:195,
    timerName: 'storyTimer',
    onTimeout: ()=>{console.log('Done')},
    border: {apply:false, color:'red', width:'thin'}
  },
};

export const ThickBorder: Story = {
  args: {
    startTimer:195,
    timerName: 'storyTimer',
    onTimeout: ()=>{console.log('Done')},
    border: {apply:true, color:'blue', width:'thick'}
  },
};

