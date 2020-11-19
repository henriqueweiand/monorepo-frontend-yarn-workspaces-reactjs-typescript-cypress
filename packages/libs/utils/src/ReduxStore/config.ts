/* eslint-disable no-console */
import { createStore, Store, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistReducer, persistStore } from 'redux-persist'
import root from './root/reduces'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

export default ({ reducers = {} }: { reducers?: any }) => {
	const storeReducer = combineReducers({ root, ...reducers })

	const persistConfig = {
		key: 'root',
		storage
	}

	const persistedReducer = persistReducer(persistConfig, storeReducer)

	let store: Store<ReturnType<typeof storeReducer>> = createStore(
		persistedReducer,
		composeWithDevTools()
	)

	let persistor = persistStore(store)
	return { store, persistor }
}
