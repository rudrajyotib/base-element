import type { Meta, StoryObj } from '@storybook/react';

import { Radio, TextInput } from '../../src';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'UiElement/TextInput',
  component: TextInput,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    
  },
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    placeHolderText: 'Welcome alpha text',
    textType: 'alphanumeric',
    name: 'alphanumerictext',
    onChangeHandler: ((text:string)=>{
        console.log('Text value:', text)
    }),
  },
};

export const AlphaOnlyTextBox: Story = {
    args: {
        placeHolderText: 'Welcome numeric text',
        textType: 'alpha',
        name: 'alphatext',
        onChangeHandler: ((text:string)=>{
            console.log('Text value:', text)
        }),
      },
  };

  export const NumericText: Story = {
    args: {
        placeHolderText: 'Welcome numeric text',
        textType: ' numeric',
        name: 'numerictext',
        onChangeHandler: ((text:string)=>{
            console.log('Text value:', text)
        }),
      },
  };


  export const UpperCaseText: Story = {
    args: {
        placeHolderText: 'Welcome numeric text',
        textType: 'uppercase',
        name: 'uppercaseText',
        onChangeHandler: ((text:string)=>{
            console.log('Text value:', text)
        }),
      },
  };

 
  
