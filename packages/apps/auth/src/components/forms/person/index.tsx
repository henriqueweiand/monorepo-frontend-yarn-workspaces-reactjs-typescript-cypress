import { useFormik } from 'formik'
import React, { forwardRef, useCallback, useImperativeHandle } from 'react'
import { Form } from './styles'
import { validationSchema } from './validationSchema'
import { PersonProps, formExposed } from './types'

import { Input } from '@project/uikit'

const Person: React.ForwardRefRenderFunction<formExposed, PersonProps> = (
	{
		submitAction = () => {},
		initialValues = {
			fullName: '',
			document: ''
		},
		...rest
	},
	ref
) => {
	const formik = useFormik({
		initialValues,
		onSubmit: submitAction,
		validationSchema,
		validateOnMount: true
	})

	const reset = useCallback(() => {
		formik.resetForm()
	}, [formik])

	const submit = useCallback(() => {
		formik.submitForm()

		if (formik.isValid) {
			return formik.values
		}
		return false
	}, [formik])

	useImperativeHandle(ref, () => {
		return {
			submit,
			reset
		}
	})

	return (
		<Form data-test="form-person" {...rest} onSubmit={formik.handleSubmit}>
			<Input
				data-test="fullName"
				id="fullName"
				type="text"
				placeholder="Nome completo"
				value={formik.values.fullName}
				onChange={formik.handleChange}
				error={!!formik.errors.fullName && formik.errors.fullName}
			/>

			<Input
				data-test="document"
				id="document"
				type="text"
				placeholder="CPF"
				value={formik.values.document}
				onChange={formik.handleChange}
				error={!!formik.errors.document && formik.errors.document}
			/>
		</Form>
	)
}

export default forwardRef(Person)
