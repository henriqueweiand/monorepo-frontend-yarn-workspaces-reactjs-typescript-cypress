import { Loading } from '@project/uikit'
import { createBrowserHistory } from 'history'
import React, { Suspense } from 'react'
import { Route, Router, Switch } from 'react-router-dom'

const Admin = React.lazy(() => import('../pages/admin'))
const Manager = React.lazy(() => import('../pages/manager'))

const MainRoutes = () => {
	return (
		<Suspense fallback={<Loading />}>
			<Switch>
				<Route path="/" exact>
					<Admin />
				</Route>
				<Route path="/manager" exact>
					<Manager />
				</Route>
			</Switch>
		</Suspense>
	)
}

const Public = () => {
	const history = createBrowserHistory()

	return (
		<Router history={history}>
			<Switch>
				<Route path="/">
					<MainRoutes />
				</Route>
			</Switch>
		</Router>
	)
}

export default React.memo(Public)
