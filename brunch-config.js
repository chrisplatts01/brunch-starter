module.exports = {
  files: {
    javascripts: {
      joinTo: {
        'assets/scripts/vendor.js': /^node_modules/,
        'assets/scripts/site.js': /^src\/scripts/,
      },
    },
    stylesheets: {
      joinTo: {
        'assets/css/vendor.css': /^node_modules/,
        'assets/css/site.css': /^src\/sass/,
      },
    },
  },
  modules: {
    nameCleaner: path => path.replace(/^src\/scripts\//, ''),
  },
  npm: {
    enabled: true,
    globals: {
      jQuery: 'jquery',
      $: 'jquery',
      bootstrap: 'bootstrap-sass'
    },
  },
  paths: {
    public: 'public',
    watched: ['src'],
  },
  plugins: {
    copycat: {
      media: ['src/static', 'public/static'],
      fonts: ['node_modules/bootstrap-sass/assets/fonts', 'public/fonts'],
      verbose: false,
      onlyChanged: false,
    },
    nunjucks: {
      dataDir: 'src/data',
      templatePath: 'src/pages',
      pattern: /\.njk?$/,
      ext: '.html',
      layoutPath: 'src/templates',
    },
    sass: {
      options: {
        includePaths: ['node_modules/bootstrap-sass/assets/stylesheets/'],
      },
    },
  },
};
