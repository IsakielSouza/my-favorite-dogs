module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@Assets': './src/Assets',
            '@Components': './src/Components',
            '@Modules': './src/Modules',
            '@Storage': './src/Storage',
            '@Routes': './src/Routes',
          }
        }
      ]
    ]
  };
};
