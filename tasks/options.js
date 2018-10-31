const path = require('path');

module.exports = {
    // The entry file where it all begins
    entryFile: './source/main',
    // Output path of the build
    destinationPath: path.resolve(__dirname, '../_dist'),
    // Public path where the site will reside, if the site is uploaded to
    // http://awesome.site/foo-bar then this should be set to '/foo-bar'
    publicPath: '/',
    // Where the static files should be placed in
    publicStaticPath: 'static',
    // Enable cssModules as the default
    cssModules: false,
    // default port the dev-server should run
    defaultPort: 1337,
    // additionally middleware that will be placed ontop for the dev-server
    middleware: [
        (req, res, next) => {
            // example middleware, skipping it here
            next();
        },
    ],
};
