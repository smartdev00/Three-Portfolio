/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  serverBuildTarget: 'vercel', // Use the Vercel adapter
  server: './server.js', // This file will handle server logic
  appDirectory: 'app',
  assetsBuildDirectory: 'public/build',
  publicPath: '/build/',
};
