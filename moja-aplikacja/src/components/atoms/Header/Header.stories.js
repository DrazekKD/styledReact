import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Header from './Header';

export default {
  title: 'Headers',
  decorators: [withKnobs],
};

export const h1 = () => <Header level={1}>H1</Header>;
export const h2 = () => <Header level={2}>H2</Header>;
export const h3 = () => <Header level={3}>H3</Header>;
export const h4 = () => <Header level={4}>H4</Header>;
export const h5 = () => <Header level={5}>H5</Header>;
export const h6 = () => <Header level={6}>H6</Header>;
