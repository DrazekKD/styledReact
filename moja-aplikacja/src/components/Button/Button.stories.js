import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import Button from './Button';

export default {
  title: 'Button',
  decorators: [withKnobs],
};
const label = 'Colors';
const options = ['linus', '#000', '#fff'];
const defaultValue = 'eleanor';
const groupId = 'GROUP-ID2';
const value = select(label, options, defaultValue, groupId);

export const typeDefault = () => <Button>Close / Save</Button>;
export const typeSecoundary = () => (
  <Button secondary color={value}>
    Remove
  </Button>
);
