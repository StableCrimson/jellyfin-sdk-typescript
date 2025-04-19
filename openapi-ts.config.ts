import { defaultPlugins, defineConfig } from '@hey-api/openapi-ts';

/*
 Most of this config is just trying to make the generated code match
 the openapi-generator code as much as possible.
 We can gradually move to a pure `hey-api` solution over the course of a few PRs and as `hey` matures.
 There are some openapi-generator features this project uses (at least currently)
 that do not have parity in `hey` yet.
*/

export default defineConfig({
	input: 'openapi.json',
	output: 'src/generated-client',
	plugins: [
		...defaultPlugins,
		'@hey-api/client-axios',
		{
			name: '@hey-api/typescript',
			// Prevents enums from being generated as types
			enums: 'typescript',
			// By default all enum valuesa are screaming snake case
			enumsCase: 'PascalCase'
		},
		{
			name: '@hey-api/sdk',
			// Groups related methods into classes. Does NOT support tree shaking.
			// Only doing this now to make the output SDK more closely match the openapi-generator code.
			asClass: true,
			// Aligns class names to match class names in current SDK.
			serviceNameBuilder: '{{name}}Api'
		}
	]
});
