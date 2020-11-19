import { combineReducers } from 'redux'
import { rootRedux } from '@monorepo/utils'

/**
 * Aqui ficam os reducers utilizados pela aplicacao
 */

export default combineReducers({
	root: rootRedux.reducer
})
