const Metalsmith = require('metalsmith');
const markdown = require('metalsmith-markdown');
const layouts = require('metalsmith-layouts');
const permalinks = require('metalsmith-permalinks');

Metalsmith(__dirname)
  .metadata({
    site: {
      title: 'Judgment DAI',
      url: 'https://judgementdai.com'
    },
    'bg-image': 'judgment-dai-future-earth.png' // Default background image
  })
  .source('./src')
  .destination('./build')
  .clean(true)
  .use(function(files, metalsmith, done) {
    // Debug: Log all files being processed
    console.log('Files being processed:', Object.keys(files));
    done();
  })
  .use(markdown())
  .use(function(files, metalsmith, done) {
    // Debug: Log files after markdown processing
    console.log('Files after markdown:', Object.keys(files));
    done();
  })
  .use(layouts({
    engine: 'handlebars',
    directory: './layouts',
    default: 'default.hbs',
    pattern: '**/*.html'
  }))
  // Remove the permalinks plugin to keep files at root level
  .build(function(err) {
    if (err) throw err;
    console.log('Build completed successfully!');
  });
