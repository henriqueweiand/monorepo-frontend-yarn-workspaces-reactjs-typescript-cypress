import { Persistor } from 'redux-persist'
import { Store } from 'redux'

export interface ReduxStoreProps {
	children: React.ReactNode
	persistor: Persistor
	store: Store
}
