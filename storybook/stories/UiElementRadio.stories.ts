import type { Meta, StoryObj } from '@storybook/react';

import { Radio } from '../../src';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'UiElement/Radio',
  component: Radio,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    
  },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    data: [{value:'A', label:'Option A'}, {value:'B', label:'Option B'}],
    groupId: 'RadioPrimary',
    onChange : (selected: string) => {console.log('selected value::'+selected)},
    groupBorder:false,
    radioBorder: false
  },
};

export const RadioWithDefaultSelection: Story = {
    args: {
      data: [{value:'A', label:'Option A And a long text to follow'}, {value:'B', label:'Option B'}],
      groupId: 'RadioWithDefaultSelectionA',
      defaultSelected: 'A',
      onChange : (selected: string) => {},
      groupBorder:false,
      radioBorder: false
    },
  };

  export const RadioWithGroupBorder: Story = {
    args: {
      data: [{value:'A', label:'Option A And a long text to follow'}, {value:'B', label:'Option B'}],
      groupId: 'RadioWithGroupBorder',
      defaultSelected: 'A',
      onChange : (selected: string) => {},
      groupBorder:true,
      radioBorder: false
    },
  };

  export const RadioWithRadioBorder: Story = {
    args: {
      data: [{value:'A', label:'Option A And a long text to follow'}, {value:'B', label:'Option B'}],
      groupId: 'RadioWithRadioBorder',
      defaultSelected: 'A',
      onChange : (selected: string) => {},
      groupBorder:false,
      radioBorder: true
    },
  };

  export const RadioWithRadioBorderCompact: Story = {
    args: {
      data: [{value:'A', label:'Option A And a long text to follow'}, {value:'B', label:'Option B'}],
      groupId: 'RadioWithRadioBorderCompactAndBackgroundColor',
      defaultSelected: 'A',
      onChange : (selected: string) => {},
      groupBorder:false,
      radioBorder: true,
      compact: true,
      backgroundColor : 'blue'
    },
  };
  
