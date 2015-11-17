path = require('path');

module.exports = {
    mongo: {
        dbUser: 'sample',
        dbPassword: 'sample',
        dbName: 'blog'
    },
    server: {
        listenPort: 8081,                                   // The port on which the server is to listen (means that the app is at http://localhost:3000 for instance)
        securePort: 8433,                                   // The HTTPS port on which the server is to listen (means that the app is at https://localhost:8433 for instance)
        distFolder: path.resolve(__dirname, '../dist')  // The folder that contains the application files TODO: in production this should different directory as grunt build will create new build with all files in /dist directory
    }
};
