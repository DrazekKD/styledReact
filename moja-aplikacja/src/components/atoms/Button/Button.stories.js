import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Button from './Button';

export default {
  title: 'Button',
  decorators: [withKnobs],
};

export const typeDefault = () => <Button>Close / Save</Button>;
export const typeSecoundary = () => <Button secondary>Remove</Button>;
