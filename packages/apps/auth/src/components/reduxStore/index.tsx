import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { storeConfig } from '../../store'

export const ReduxStore: React.FC = ({ children }) => {
	const config = storeConfig()

	return (
		<Provider store={config.store}>
			<PersistGate loading={null} persistor={config.persistor}>
				{children}
			</PersistGate>
		</Provider>
	)
}

export default ReduxStore
