import { ReduxStore, storeConfig } from '@monorepo/utils'
import { Loading, Theme } from '@monorepo/uikit'
import React, { Suspense } from 'react'
import { Public } from './routes'

const storeConfigProps = storeConfig({})

const App: React.FC = () => {
	return (
		<Theme>
			<ReduxStore {...storeConfigProps}>
				<Suspense fallback={<Loading />}>
					<Public />
				</Suspense>
			</ReduxStore>
		</Theme>
	)
}

export default App
