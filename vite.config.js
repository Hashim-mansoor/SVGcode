/**
 * SVGcode—Convert raster images to SVG vector graphics
 * Copyright (C) 2021 Google LLC
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version 2
 * of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 */

/**
 * @type {import('vite').UserConfig}
 */

import { VitePWA as vitePWA } from 'vite-plugin-pwa';
import { cosPlugin } from 'vite-plugin-cross-origin-storage';
import dynamicImportVars from '@rollup/plugin-dynamic-import-vars';
import webmanifest from './src/manifest.json';

// ignore unused exports default
export default {
  plugins: [
    // Libraries other sites ship too, built into chunks named by the SHA-256 of
    // their contents, so a browser with Cross-Origin Storage keeps one copy for
    // every site that uses the same version.
    cosPlugin({
      packages: ['pinch-zoom-element'],
    }),
    dynamicImportVars({
      include: ['./src/i18n/*'],
    }),
    vitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      manifest: webmanifest,
    }),
  ],
  build: {
    outDir: 'docs',
    target: 'esnext',
    cssCodeSplit: false,
    rollupOptions: {
      onwarn(warning, warn) {
        if (warning.id?.includes('esm-potrace-wasm')) return;
        warn(warning);
      },
    },
  },
  preview: {
    port: 4000,
  },
};
