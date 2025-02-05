import { defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';

// eslint-disable-next-line import/no-default-export -- Vitestはdefault exportじゃないと動かない。
export default defineConfig({
	test: {
		include: [],
		coverage: {
			provider: 'v8',
			include: ['src/**/*.ts', '!src/**/*.test.ts'],
		},
	},
	plugins: [tsconfigPaths()],
});
