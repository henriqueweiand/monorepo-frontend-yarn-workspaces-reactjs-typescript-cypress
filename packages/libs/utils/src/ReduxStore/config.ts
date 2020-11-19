/* eslint-disable no-console */
import { createStore, Store, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistReducer, persistStore } from 'redux-persist'
import { rootRedux } from '@monorepo/utils'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

export const storeConfig = ({ reducers = {} }: { reducers?: any }) => {
	const storeReducer = combineReducers({
		root: rootRedux.reducer,
		...reducers
	})

	const persistConfig = {
		key: 'root',
		storage
	}

	const persistedReducer = persistReducer(persistConfig, storeReducer)

	const store: Store<ReturnType<typeof storeReducer>> = createStore(
		persistedReducer,
		composeWithDevTools()
	)

	const persistor = persistStore(store)
	return { store, persistor, storeReducer }
}
