/// <reference types="vitest" />

/* eslint-disable import/no-unresolved */
import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		environment: 'node',
		coverage: {
			include: ['src'],
			exclude: ['**/__helpers__/**', '**/generated-client/**']
		}
	}
});
