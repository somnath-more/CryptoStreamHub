import React from 'react';
import ResetPassword from '.';

export default {
  title: 'Organisms/ResetPassword',
  component: ResetPassword,
};

const Template = () => (
  <ResetPassword
    onClickResetButton={function (): void {
      throw new Error('Function not implemented.');
    }}
  />
);

export const ResetPasswordOrg = Template.bind({});
