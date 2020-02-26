import React from 'react';
import {withKnobs, select} from '@storybook/addon-knobs';
import Button from './Button';

export default {
	title: 'Button',
	decorators: [withKnobs],
};

export const typeDefault = () => <Button>Close / Save</Button>;
export const typeSecoundary = () => {
	const label = 'Colors';
	const options = ['red', '#000', '#fff'];
	const defaultValue = 'linus';
	const groupId = 'GROUP-ID2';
	const value = select(label, options, defaultValue, groupId);
	return <Button secondary color={value}>
		Remove
	</Button>;
};
