import dynamic from 'next/dynamic'

const App = dynamic(() => import('@project/auth/src/App'))

export default function Auth() {
	return <App />
}
