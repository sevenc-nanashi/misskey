import { mergeConfig, defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';
import base from './vitest.config.base';

// eslint-disable-next-line import/no-default-export
export default mergeConfig(
	base,
	defineConfig({
		test: {
			include: ['src/**/*.test.ts', 'test/unit/**/*.ts'],
			coverage: {
				provider: 'v8',
				include: ['src/**/*.ts', '!src/**/*.test.ts'],
			},
		},
		plugins: [tsconfigPaths()],
	}),
);
