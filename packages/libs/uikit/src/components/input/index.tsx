import React, { PropsWithChildren } from 'react'
import { Container, Input as InputBase, Error } from './styles'
import { InputProps } from './types'

const Input: React.FC<PropsWithChildren<InputProps>> = ({
	error,
	className = '',
	...rest
}) => {
	return (
		<Container className={className}>
			<InputBase {...rest} />
			{!!error && <Error>{error}</Error>}
		</Container>
	)
}

export default React.memo(Input)
