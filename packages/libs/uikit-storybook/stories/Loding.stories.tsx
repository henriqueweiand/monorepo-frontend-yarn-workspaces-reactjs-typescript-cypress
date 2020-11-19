import React from 'react'
import { Story } from '@storybook/react/types-6-0'
import { Loading } from '@monorepo/uikit'
import { LoadingProps } from '@monorepo/uikit/src/components/Loading/types'

export default {
	title: 'Example/Loading',
	component: Loading
}

const Template: Story<LoadingProps> = args => <Loading {...args}>Hello</Loading>

export const DefaultLoading = Template.bind({})
