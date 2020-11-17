import { Card as CardBase } from '@project/uikit'
import styled from 'styled-components'
import { Link as LinkBase } from 'react-router-dom'

export const Card = styled(CardBase)`
	padding: 2.4rem 1.6rem;
	margin-top: 0.8rem;
	width: 100%;

	@media (min-width: 415px) {
		max-width: 400px;
	}

	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: center;
	align-items: stretch;
	align-content: stretch;

	button {
		margin-top: 0.8rem;
	}
`

export const Link = styled(LinkBase)`
	font-size: 1.2rem;
	margin-top: 1rem;
	text-align: center;
`

export const Title = styled.h3``

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: center;
	align-items: center;
	flex: 1;
	margin: 1.6rem;
`
