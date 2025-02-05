import { mergeConfig, defineConfig } from 'vitest/config';
import base from './vitest.config.base';

// eslint-disable-next-line import/no-default-export -- Vitestはdefault exportじゃないと動かない。
export default mergeConfig(
	base,
	defineConfig({
		test: {
			include: [
				'src/**/*.test.ts',
				'test/**/*.test.ts',
			],
		},
	}),
);
