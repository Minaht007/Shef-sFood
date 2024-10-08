/** @type {import('next').NextConfig} */
// next.config.mjs
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  // Настройки для Next.js
  webpack: (config) => {
    config.resolve.alias['@'] = __dirname;
    return config;
  },
};

