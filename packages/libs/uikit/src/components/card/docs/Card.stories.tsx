import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Theme } from '@project/uikit'

import Card from '../index'
import { CardProps } from '../types'

export default {
	title: 'Example/Card',
	component: Card
} as Meta

const Template: Story<CardProps> = args => (
	<Theme>
		<Card {...args}>Hello</Card>
	</Theme>
)

export const DefaultCard = Template.bind({})
