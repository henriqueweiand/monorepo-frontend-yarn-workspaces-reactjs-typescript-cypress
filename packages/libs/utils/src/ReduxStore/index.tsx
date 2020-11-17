import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ReduxStoreProps } from './types'

const ReduxStore: React.FC<ReduxStoreProps> = ({
	children,
	persistor,
	store
}) => {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				{children}
			</PersistGate>
		</Provider>
	)
}

export default ReduxStore
