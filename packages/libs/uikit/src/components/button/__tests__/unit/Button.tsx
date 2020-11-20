import { render } from '@testing-library/react'
import React from 'react'
import Button from '../../index'

describe('Button', () => {
	it('should render a button', () => {
		const { getByTestId } = render(
			<Button data-testid="button-test">Click</Button>
		)

		expect(getByTestId('button-test').tagName).toEqual('BUTTON')
	})

	it('should render button with name', () => {
		const { getByTestId } = render(
			<Button data-testid="button-test" onClick={() => {}} name="name-here">
				Click
			</Button>
		)
		const element: HTMLButtonElement = getByTestId('button-test')

		expect(element.tagName).toEqual('BUTTON')
		expect(element.getAttribute('name')).toEqual('name-here')
	})
})
