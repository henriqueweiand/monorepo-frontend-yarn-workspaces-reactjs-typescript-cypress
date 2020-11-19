import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Theme } from '@monorepo/uikit'

import Person from '../index'
import { PersonProps } from '../types'

export default {
	title: 'Example/FormPerson',
	component: Person,
	argTypes: {
		initialValues: {
			type: { name: 'object', required: false },
			defaultValue: {
				fullName: 'Henrique Weiand',
				document: '99999999999'
			},
			description: 'Valores iniciais dos campos internos'
		}
	}
} as Meta

const Template: Story<PersonProps> = args => (
	<Theme>
		<Person {...args} />
	</Theme>
)

export const DefaultPerson = Template.bind({})
