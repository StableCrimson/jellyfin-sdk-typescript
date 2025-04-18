import { defaultPlugins, defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
	input: 'openapi.json',
	output: 'src/generated-client',
	plugins: [
		...defaultPlugins,
		'@hey-api/client-axios',
		{
			enums: 'typescript',
			name: '@hey-api/typescript'
		}
	]
});
