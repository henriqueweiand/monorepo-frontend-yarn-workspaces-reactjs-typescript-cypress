import { createStore, Store } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { reducer } from './index'

export const storeConfig = () => {
	const persistConfig = {
		key: 'root',
		storage
	}

	const persistedReducer = persistReducer(persistConfig, reducer)

	const store: Store<ReturnType<typeof reducer>> = createStore(
		persistedReducer,
		composeWithDevTools()
	)

	const persistor = persistStore(store)
	return { store, persistor, reducer }
}
