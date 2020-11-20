import { FormHTMLAttributes } from 'react'

export interface formValues {
	fullName: string
	document: string
}

export interface PersonProps extends FormHTMLAttributes<HTMLFormElement> {
	submitAction?: (values?: any) => void
	initialValues?: formValues
}

export interface formExposed {
	submit: () => formValues | false
	reset: () => void
}
