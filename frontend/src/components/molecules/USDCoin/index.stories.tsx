// import { action } from '@storybook/addon-actions';
import { Meta, StoryFn } from '@storybook/react';
import USDCoin from '.';
import React from 'react';

export default {
  title: 'Molecules/USDCoin',
  component: USDCoin,
} as Meta<typeof USDCoin>;

const Template: StoryFn<typeof USDCoin> = (args) => <USDCoin {...args} />;

export const USD = Template.bind({});
USD.args = {
  height: '104px',
};
