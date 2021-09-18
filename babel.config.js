module.exports = {
  presets: [
    [
      // "@babel/env",
      '@babel/preset-env',
      {
        modules: 'commonjs',
        useBuiltIns: 'usage',
        corejs: {
          version: 3,
          // "proposals": true // 使用尚在“提议”阶段特性的 polyfill
        },
      },
    ],
    ['@babel/preset-typescript'],
  ],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: 3,
        helpers: true,
        regenerator: true,
        useESModules: false,
      },
    ],
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
  ],
};
