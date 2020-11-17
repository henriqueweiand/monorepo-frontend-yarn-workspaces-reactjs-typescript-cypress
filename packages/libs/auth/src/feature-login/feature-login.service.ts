import { featureLoginService } from '@project/libs-auth/src/types/feature-login'

const FeatureLoginService = {
	login: (values: featureLoginService) => {
		console.log('auth.service', values)
	}
}

export default FeatureLoginService
