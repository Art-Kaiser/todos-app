import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		svgr({ include: '**/*.svg' }),
		visualizer({
			emitFile: true,
			open: true,
			filename: 'report_build.html',
			template: 'flamegraph',
		}),
	],
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: './setupTests.ts',
		include: ['./src/**/*.test.{js,jsx,ts,tsx}'],
		exclude: ['node_modules', '.git', 'dist', '*.config.*'],
	},
});
