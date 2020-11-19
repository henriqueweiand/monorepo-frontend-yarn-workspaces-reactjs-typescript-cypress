import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Theme } from '@monorepo/uikit'
import Button from '../index'
import { ButtonProps } from '../types'

export default {
	title: 'Example/Button',
	component: Button,
	argTypes: { onClick: { action: 'clicked' } }
} as Meta

const Template: Story<ButtonProps> = args => (
	<Theme>
		<Button {...args}>Click</Button>
	</Theme>
)

export const DefaultButton = Template.bind({})
