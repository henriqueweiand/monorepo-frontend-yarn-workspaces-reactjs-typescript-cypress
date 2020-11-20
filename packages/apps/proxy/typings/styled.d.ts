import 'styled-components'

import { light as lightTheme } from '@monorepo/uikit/src/components/styles/themes'

export type Theme = typeof lightTheme

declare module 'styled-components' {
	export interface DefaultTheme extends Theme {}
}
