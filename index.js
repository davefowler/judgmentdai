const Metalsmith = require('metalsmith');
const markdown = require('metalsmith-markdown');
const layouts = require('metalsmith-layouts');
const permalinks = require('metalsmith-permalinks');

Metalsmith(__dirname)
  .metadata({
    site: {
      title: 'Judgment DAI',
      url: 'https://judgementdai.com'
    }
  })
  .source('./src')
  .destination('./build')
  .clean(true)
  .use(markdown())
  .use(layouts({
    engine: 'handlebars',
    directory: './layouts',
    default: 'default.hbs',
    pattern: '**/*.html'
  }))
  .use(permalinks({
    pattern: ':title'
  }))
  .build(function(err) {
    if (err) throw err;
    console.log('Build completed successfully!');
  });
