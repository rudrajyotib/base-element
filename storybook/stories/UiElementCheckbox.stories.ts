import type { Meta, StoryObj } from '@storybook/react';

import { Radio, CheckboxInput } from '../../src';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'UiElement/Checkbox',
  component: CheckboxInput,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    
  },
} satisfies Meta<typeof CheckboxInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    id: 'CB1',
    checked: true,
    label: 'Selected checkbox',
    onCheck: ((id:string)=>{
      alert('CB:'+id+'Checked')
    }),
    onUncheck: ((id:string)=>{
      alert('CB:'+id+'UnChecked')
    })
  },
};

export const RadioWithDefaultUnchecked: Story = {
    args: {
      id: 'CB2',
    checked: false,
    label: 'Unselected checkbox',
    onCheck: ((id:string)=>{
      alert('CB:'+id+'Checked')
    }),
    onUncheck: ((id:string)=>{
      alert('CB:'+id+'UnChecked')
    })
    },
  };

  
