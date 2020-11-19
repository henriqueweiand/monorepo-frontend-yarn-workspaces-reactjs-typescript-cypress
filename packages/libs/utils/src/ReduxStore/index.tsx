import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ReduxStoreProps } from './types'

export const ReduxStore = (props: ReduxStoreProps) => {
	return (
		<Provider store={props.store}>
			<PersistGate loading={null} persistor={props.persistor}>
				{props.children}
			</PersistGate>
		</Provider>
	)
}

export default ReduxStore
