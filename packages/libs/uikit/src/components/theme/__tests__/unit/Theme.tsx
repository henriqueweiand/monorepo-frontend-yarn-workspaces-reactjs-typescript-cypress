import { render } from '@testing-library/react'
import React from 'react'
import Theme from '../../index'

describe('Theme', () => {
	it('should render theme with children', () => {
		const value = 'hello'
		const { getByTestId } = render(
			<div data-testid="theme-test">
				<Theme>{value}</Theme>
			</div>
		)

		const theme: HTMLDivElement = getByTestId('theme-test')

		expect(theme.textContent).toBe(value)
	})
})
