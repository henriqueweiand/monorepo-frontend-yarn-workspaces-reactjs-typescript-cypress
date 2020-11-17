import { Button } from '@project/uikit'
import { Forms } from '../../components'
import { formExposed, formValues } from 'components/forms/person/types'
import React, { useRef, useCallback } from 'react'
import { Card, Container, Title, Link } from './styles'
import { AdminProps } from './types'

const Admin: React.FC<AdminProps> = () => {
	const formPersonRef = useRef<formExposed>(null)

	const submitAction = useCallback((values: formValues) => {
		// REGRA DE NEGOCIO PARA ADMIN

		console.log(values)
	}, [])

	return (
		<Container data-test="pages-admin">
			<Title>Admin</Title>
			<Card>
				<Forms.Person ref={formPersonRef} submitAction={submitAction} />

				<Button type="button" onClick={() => formPersonRef.current?.submit()}>
					Enviar
				</Button>

				<Link to="/manager">Manager</Link>
			</Card>
		</Container>
	)
}

export default Admin
