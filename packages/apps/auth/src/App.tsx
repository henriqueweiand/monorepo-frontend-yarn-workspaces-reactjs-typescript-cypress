import { ReduxStore } from './components'
import { Loading, Theme } from '@monorepo/uikit'
import React, { Suspense } from 'react'
import { Public } from './routes'

const App: React.FC = () => {
	return (
		<Theme>
			<ReduxStore>
				<Suspense fallback={<Loading />}>
					<Public />
				</Suspense>
			</ReduxStore>
		</Theme>
	)
}

export default App
